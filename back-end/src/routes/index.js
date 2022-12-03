const login = require('./loginRoute');
const transaction = require('./transactionRoute');
const validate = require('./validateRoute');
const transactions = require('./transactionsRoute');

module.exports = {
  login,
  transaction,
  validate,
  transactions,
};
