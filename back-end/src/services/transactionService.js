const { Transaction, User } = require('../database/models');
const loginService = require('./loginService');

const updateBalance = async (debitedAccountId, creditedAccountId, value) => {
  await loginService.getUserBalance(debitedAccountId, creditedAccountId, value);
  return true;
};

const create = async (dataTransaction) => {
  const { debitedAccountId, creditedName, value } = dataTransaction;
  const findUserId = await User.findOne({ where: { username: creditedName } });
  if (findUserId) {
    const creditedAccountId = findUserId.id;
    const resultCreate = await Transaction.create({ debitedAccountId, creditedAccountId, value });
    await updateBalance(debitedAccountId, creditedAccountId, value);
    return { status: 201, resultCreate };
  }
  return { status: 404, menssage: 'User not found!' };
};

module.exports = {
  create,
};
