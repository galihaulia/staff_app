'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const now = new Date()

    //create privilege
    const jobs = await queryInterface.bulkInsert(
      'Jobs',
      [
        {
          name: 'Backend Enginner',
          createdAt: now,
          updatedAt: now,
        },
        {
          name: 'Frontend Enginner',
          createdAt: now,
          updatedAt: now,
        },
        {
          name: 'PM',
          createdAt: now,
          updatedAt: now,
        },
        {
          name: 'HR',
          createdAt: now,
          updatedAt: now,
        },
      ],
      {
        returning: true,
      },
    )
    const [jPM, jHR] = jobs
    console.debug(`jobs created ${jobs.length}`)

    //create user
    const users = await queryInterface.bulkInsert(
      'Users',
      [
        {
          fullName: 'Adam',
          email: 'adam@gmail.com',
          jobsId: jHR.id,
          createdAt: now,
          updatedAt: now,
        },
        {
          fullName: 'Ahmad Rosidi',
          email: 'atenk@gmail.com',
          jobsId: jPM.id,
          createdAt: now,
          updatedAt: now,
        },
      ],
      {
        returning: true,
      },
    )
    console.debug(`user created ${users.length}`)
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Privileges')
    await queryInterface.bulkDelete('Users')
  },
}
