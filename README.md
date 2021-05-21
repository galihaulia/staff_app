# staff_app

simple CRUD application about Users related to Jobs without auth and some problem solving using javascript

## Architecture

PostgreSQL, Node JS, ORM Sequelize, with swagger documentation

## API Docs

here is the url of the application live on heroku :
https://staff-app-v1.herokuapp.com/api-doc

for the task solution is in [solution.js](https://github.com/galihaulia/staff_app/blob/master/solution.js)

# How To Start in local

1. Clone the repo
   ```sh
   git clone https://github.com/galihaulia/staff_app.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. prepare local database settings in `.env` like [.env](https://github.com/galihaulia/staff_app/blob/master/.env.example)
4. Run migration
   ```sh
   npm run migrate
   ```
5. Run seeder
   ```sh
   npm run seed
   ```
6. Run application
   ```sh
   npm run start
   ```
