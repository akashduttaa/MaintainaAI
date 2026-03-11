const mongoose = require('mongoose');

const subscriptionSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  name: String,
  category: String,
  monthlyPrice: Number,
  billingCycle: { type: String, default: 'Monthly' },
  renewalDate: Date,
  paymentMethod: String,
  notes: String,
  usageDaysAgo: { type: Number, default: 0 }
}, { timestamps: true });

module.exports = mongoose.model('Subscription', subscriptionSchema);
