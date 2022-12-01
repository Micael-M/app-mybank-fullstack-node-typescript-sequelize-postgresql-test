const { Transaction, User } = require('../database/models');

const create = async (dataTransaction) => {
  const { debitedAccountId, creditedName, value } = dataTransaction;
  const findUserId = await User.findOne({ where: { username: creditedName } });
  if (findUserId) {
    const creditedAccountId = findUserId.id;
    const resultCreate = await Transaction.create({ debitedAccountId, creditedAccountId, value });
    return { status: 201, resultCreate };
  }
};

module.exports = {
  create,
};
