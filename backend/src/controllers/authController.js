const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

exports.signup = async (req, res) => {
  const { name, email, password } = req.body;
  const hash = await bcrypt.hash(password, 10);
  const user = await User.create({ name, email, password: hash });
  const token = jwt.sign({ id: user._id, email: user.email }, process.env.JWT_SECRET || 'dev-secret');
  res.json({ token, user: { id: user._id, name: user.name, email: user.email } });
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) return res.status(401).json({ message: 'Invalid credentials' });
  const ok = await bcrypt.compare(password, user.password);
  if (!ok) return res.status(401).json({ message: 'Invalid credentials' });
  const token = jwt.sign({ id: user._id, email: user.email }, process.env.JWT_SECRET || 'dev-secret');
  res.json({ token, user: { id: user._id, name: user.name, email: user.email } });
};
