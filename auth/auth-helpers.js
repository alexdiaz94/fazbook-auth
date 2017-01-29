const bcrypt = require('bcryptjs');
const models = require('../db/models/index');

function comparePass(userPassword, databasePassword) {
  return bcrypt.compareSync(userPassword, databasePassword);
}
//function that will use bcrypt to compare passwords
