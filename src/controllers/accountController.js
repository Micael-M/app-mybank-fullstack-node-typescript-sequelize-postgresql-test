const accountService = require('../services/accountService');

const OK = 200;

const getAllAccounts = async (_req, res) => {
  console.log('Chegou no controller');
  const resultAccounts = await accountService.getAllAccounts();
  return res.status(OK).json(resultAccounts);
};

module.exports = {
  getAllAccounts,
};
