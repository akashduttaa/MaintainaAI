const Subscription = require('../models/Subscription');
const { generateInsights, predictSpending } = require('../services/aiService');

exports.createSubscription = async (req, res) => {
  const doc = await Subscription.create({ ...req.body, userId: req.user.id });
  res.status(201).json(doc);
};

exports.listSubscriptions = async (req, res) => {
  const docs = await Subscription.find({ userId: req.user.id });
  res.json(docs);
};

exports.dashboard = async (req, res) => {
  const docs = await Subscription.find({ userId: req.user.id });
  const monthly = docs.reduce((sum, s) => sum + s.monthlyPrice, 0);
  const upcoming = docs
    .filter(s => new Date(s.renewalDate) >= new Date())
    .sort((a, b) => new Date(a.renewalDate) - new Date(b.renewalDate))
    .slice(0, 5);

  res.json({ monthlySpend: monthly, yearlySpend: monthly * 12, activeCount: docs.length, upcomingRenewals: upcoming });
};

exports.insights = async (req, res) => {
  const docs = await Subscription.find({ userId: req.user.id });
  res.json({ insights: generateInsights(docs) });
};

exports.predict = async (req, res) => {
  const docs = await Subscription.find({ userId: req.user.id });
  res.json(predictSpending(docs));
};
