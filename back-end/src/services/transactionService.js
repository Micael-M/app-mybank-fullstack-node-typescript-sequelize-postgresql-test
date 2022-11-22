const { Transaction } = require('../database/models');

const createee = async (dataTransaction) => {
const { debitedAccountId, creditedAccountId, value } = dataTransaction;
const resultTransaction = await Transaction.create({ debitedAccountId, creditedAccountId, value });
return { status: 201, resultTransaction };
};

module.exports = {
  createee,
};
