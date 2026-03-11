exports.chat = async (req, res) => {
  const { message } = req.body;
  const lower = (message || '').toLowerCase();
  let reply = 'I can help with spending, renewals, and cancellation suggestions.';
  if (lower.includes('monthly')) reply = 'Your current monthly spend is approximately ₹5,036.';
  if (lower.includes('most')) reply = 'Your most expensive subscription is Adobe Creative Cloud at ₹1,670/month.';
  if (lower.includes('cancel')) reply = 'Consider canceling Spotify if it is unused to save ₹119/month.';
  if (lower.includes('renew')) reply = 'You have renewals this week: Spotify and Notion AI.';
  res.json({ reply });
};
