const service = require('../services/transactionService');

const SERVER_ERROR = 500;
const SERVER_ERROR_MESSAGE = { message: 'Server error' };

const create = async (req, res) => {
  const dataTransaction = req.body;
  try {
    const { status, message, resultUpdate } = await service.create(dataTransaction);

    if (message) return res.status(status).json({ message });
    return res.status(status).json(resultUpdate);
  } catch (err) {
    return res.status(SERVER_ERROR).json(SERVER_ERROR_MESSAGE);
  }
};

const getTransactions = async (req, res) => {
  const { id, who } = req.body;
  console.log(id, who);
  try {
    const { status, message, transactions } = await service.getTransactions(id, who);

    if (message) return res.status(status).json({ message });
    return res.status(status).json(transactions);
  } catch (err) {
    return res.status(SERVER_ERROR).json(SERVER_ERROR_MESSAGE);
  }
};

module.exports = {
  create,
  getTransactions,
};
