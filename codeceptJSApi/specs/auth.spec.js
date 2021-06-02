const assert = require('assert');
const faker = require('faker');

const apiProvider = require('../framework/services/index');

let accounts = new DataTable
(['email', 'password', 'status']);
accounts.add(['', 'bom', 400]);
accounts.add(['bom', '', 400]);
accounts.add([faker.internet.email(), faker.internet.password(), 400]);

Feature('Registration @S23e8b2ef');
Data(accounts).Scenario('User can not register with not correct password or login @T548e1c19', async({ I, current }) => {
 const user = {
  "email": current.email,
  "password": current.password
 };
 const { status } = await apiProvider().registerService().signup(user);
 assert.equal(status, current.status);
});

Scenario('User can register with correct password and login @Td800a609', async({ I }) => {
 const user = {
  "email": 'janet.weaver@reqres.in',
  "password": 'q12345'
 };
 const { status } = await apiProvider().registerService().signup(user);
 assert.equal(status, 200);
});
