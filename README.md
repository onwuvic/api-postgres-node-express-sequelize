# api-pen
[![CircleCI](https://circleci.com/gh/onwuvic/api-pen.svg?style=svg)](https://circleci.com/gh/onwuvic/api-pen) [![Maintainability](https://api.codeclimate.com/v1/badges/5793246489f7fe8a890a/maintainability)](https://codeclimate.com/github/onwuvic/api-pen/maintainability) [![Test Coverage](https://api.codeclimate.com/v1/badges/5793246489f7fe8a890a/test_coverage)](https://codeclimate.com/github/onwuvic/api-pen/test_coverage) [![License: MIT](https://img.shields.io/badge/License-MIT-brightgreen.svg)](https://opensource.org/licenses/MIT)

A PENS (Postgres, Express, Node and Sequelize ORM) API template for building API application. It allows you to start developing your application without the stress of basic setup.

## tools
babel, eslint, airbnb javascript style guide, code-climate, circle-ci, sequelize, express, node, postgres, dotenv, jest

## Basic setup already done for you
- Sequelize setup
- Dotenv for storing secret environment variables
- MIT License
- Code-Climate setup
- Circle CI setup
- Jest testing setup
- Eslint Setup
- Editor Configuration setup
- GitIgnore file
- Babel configuration for using latest JavaScript features
- Code of Conduct file for Open Source project

## Usage
- clone it `git clone git@github.com:onwuvic/api-pen.git` or use the template generator.
- npm install
- rename .env.sample to .env and populate the required parameters

## Code Climate and Circle-CI Settings
- add your repo to code-climate and circle-ci
- copy your code-climate Test Reporter ID from code-climate
- create environment variable on your Circle-CI as name: CC_TEST_REPORTER_ID, key: your_code_climate_test_reporter_id

## Package.json Scripts and usage
`npm run [name_of_the_script]`
- test: This is used to run your tests.
- dev: This is used to run your application on development (development mode).
- start: This is used to run your application on production (production mode). It set the environment to production then run the `build` and `serve` script respectively.
- serve: This is used to run your es5 transpiled application code in the `dist` folder.
- lint: This is used to lint your codebase to ensure it adhere to airbnb standard.
- lint:fix : This is used to auto fix the lint issues on your codebase.
- db:seed : This is used to run sequelize seed operation.
- db:migrate : This is used to run sequelize migrate operation.
- db:rollback : This is used to run sequelize rollback operation.
- db:rollmigrate : This is used to run `db:rollback`, `db:migrate`, and `db:seed` sequentially.
- clean: This is used to remove and recreate `dist` folder.
- build-server: This is used transpile your ES6/7/8/9 code to ES5 into the `dist` folder.
- build: This runs the `clean` and `build-server` scripts.

## Optional
### Sequelize configuration
if you like to customize the way your database folder (migrations, models and seeders) should be, delete the database folder and you can specify your structure in .sequelizerc and then run `sequelize init`.

### eslint
You can configure your eslint in .eslintrc file

### jest
By default we make used of `jest` for testing but you are free to make used of any testing suite.