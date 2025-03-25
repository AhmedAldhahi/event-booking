'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Events', [
      {
        name: 'Tech Expo 2025',
        date: '2025-05-10',
        location: 'Amman',
        description: 'A large technology exhibition showcasing startups and innovation.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Frontend Bootcamp',
        date: '2025-04-20',
        location: 'Online',
        description: 'Intensive hands-on frontend development workshop.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Gaming Festival',
        date: '2025-06-15',
        location: 'Dubai',
        description: 'Celebrating gaming culture with tournaments and giveaways.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'AI & ML Conference',
        date: '2025-05-30',
        location: 'Cairo',
        description: 'Experts discuss the future of artificial intelligence.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Startup Pitch Night',
        date: '2025-04-28',
        location: 'Amman',
        description: 'Entrepreneurs pitch to local investors.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Design Sprint',
        date: '2025-07-01',
        location: 'Remote',
        description: 'Collaborative product design event for teams.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'DevOps Day',
        date: '2025-06-01',
        location: 'Beirut',
        description: 'Sessions on CI/CD, containerization, and cloud tooling.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Cybersecurity Summit',
        date: '2025-05-15',
        location: 'Riyadh',
        description: 'How to defend infrastructure in the modern age.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Hackathon 24H',
        date: '2025-05-05',
        location: 'Zarqa',
        description: 'Teams race against the clock to build projects in 24 hours.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'React Day',
        date: '2025-04-25',
        location: 'Online',
        description: 'A one-day conference focused on React and its ecosystem.',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Events', null, {});
  }
};
