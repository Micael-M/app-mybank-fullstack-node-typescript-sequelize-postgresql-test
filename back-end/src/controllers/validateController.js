const service = require('../services/validateService');

const SERVER_ERROR = 500;
const SERVER_ERROR_MESSAGE = { message: 'Server error' };

const validate = async (req, res) => {
  const { token } = req.body;
  try {
    const { status, message, resultVerify } = await service.validateToken(token);

    if (message) return res.status(status).json({ message });
    return res.status(status).json(resultVerify);
  } catch (err) {
    return res.status(SERVER_ERROR).json(SERVER_ERROR_MESSAGE);
  }
};

module.exports = {
  validate,
};