const service = require('../services/transactionService');

const SERVER_ERROR = 500;
const SERVER_ERROR_MESSAGE = { message: 'Server error' };

const create = async (req, res) => {
  const dataTransaction = req.body;
  try {
    const { status, message, resultTransaction } = await service.createee(dataTransaction);

    if (message) return res.status(status).json({ message });
    return res.status(status).json(resultTransaction);
  } catch (err) {
    return res.status(SERVER_ERROR).json(SERVER_ERROR_MESSAGE);
  }
};

module.exports = {
  create,
};
