function generateInsights(subscriptions = []) {
  const monthly = subscriptions.reduce((sum, s) => sum + (s.monthlyPrice || 0), 0);
  const entertainment = subscriptions.filter(s => s.category === 'Entertainment').reduce((sum, s) => sum + (s.monthlyPrice || 0), 0);
  const unused = subscriptions.filter(s => (s.usageDaysAgo || 0) > 30);
  const unusedSave = unused.reduce((sum, s) => sum + (s.monthlyPrice || 0), 0) * 12;

  return [
    `You are spending ₹${monthly}/month on subscriptions.`,
    `You are spending ₹${entertainment}/month on entertainment subscriptions.`,
    `Canceling unused subscriptions could save ₹${unusedSave} per year.`,
    ...unused.map(s => `${s.name} has not been opened in ${s.usageDaysAgo} days.`)
  ];
}

function predictSpending(subscriptions = []) {
  const monthly = subscriptions.reduce((sum, s) => sum + (s.monthlyPrice || 0), 0);
  return {
    nextMonth: Math.round(monthly * 1.05),
    yearlyForecast: Math.round(monthly * 12 * 1.08),
    duplicateCandidates: subscriptions.filter(s => ['Entertainment', 'SaaS'].includes(s.category)).slice(0, 2).map(s => s.name)
  };
}

module.exports = { generateInsights, predictSpending };
