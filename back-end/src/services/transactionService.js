const { Transaction, User } = require('../database/models');
const loginService = require('./loginService');

const updateBalance = async (debitedAccountId, creditedAccountId, value) => {
  const result = await loginService.getUserBalance(debitedAccountId, creditedAccountId, value);
  return result;
};

const create = async (dataTransaction) => {
  const { debitedAccountId, creditedName, value } = dataTransaction;
  const findUserId = await User.findOne({ where: { username: creditedName } });
  if (findUserId) {
    const creditedAccountId = findUserId.id;
    await Transaction.create({ debitedAccountId, creditedAccountId, value });
    const resultUpdate = await updateBalance(debitedAccountId, creditedAccountId, value);
    return { status: 201, resultUpdate };
  }
  return { status: 404, menssage: 'User not found!' };
};

module.exports = {
  create,
};
