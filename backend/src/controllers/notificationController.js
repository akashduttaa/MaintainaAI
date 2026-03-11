exports.renewalTimeline = async (_req, res) => {
  res.json([
    { dayOffset: 7, type: 'in-app', message: 'Gym membership renews in 7 days' },
    { dayOffset: 3, type: 'email', message: 'Notion AI renews in 3 days' },
    { dayOffset: 1, type: 'push', message: 'Spotify renews tomorrow' }
  ]);
};
