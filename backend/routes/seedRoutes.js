const express = require('express');
const router = express.Router();
const { Event } = require('../models');

router.post('/', async (req, res) => {
  try {
    await Event.bulkCreate([
      { name: 'Tech Expo 2025', date: '2025-05-10', location: 'Amman', description: 'A large technology exhibition showcasing startups and innovation.' },
      { name: 'Frontend Bootcamp', date: '2025-04-20', location: 'Online', description: 'Intensive hands-on frontend development workshop.' },
      { name: 'Gaming Festival', date: '2025-06-15', location: 'Dubai', description: 'Celebrating gaming culture with tournaments and giveaways.' },
      { name: 'AI & ML Conference', date: '2025-05-30', location: 'Cairo', description: 'Experts discuss the future of artificial intelligence.' },
      { name: 'Startup Pitch Night', date: '2025-04-28', location: 'Amman', description: 'Entrepreneurs pitch to local investors.' },
      { name: 'Design Sprint', date: '2025-07-01', location: 'Remote', description: 'Collaborative product design event for teams.' },
      { name: 'DevOps Day', date: '2025-06-01', location: 'Beirut', description: 'Sessions on CI/CD, containerization, and cloud tooling.' },
      { name: 'Cybersecurity Summit', date: '2025-05-15', location: 'Riyadh', description: 'How to defend infrastructure in the modern age.' },
      { name: 'Hackathon 24H', date: '2025-05-05', location: 'Zarqa', description: 'Teams race against the clock to build projects in 24 hours.' },
      { name: 'React Day', date: '2025-04-25', location: 'Online', description: 'A one-day conference focused on React and its ecosystem.' }
    ]);
    res.status(200).json({ message: 'Seeding completed successfully.' });
  } catch (error) {
    console.error('Seeding error:', error);
    res.status(500).json({ error: 'Seeding failed.', details: error.message });
  }
});

module.exports = router;
