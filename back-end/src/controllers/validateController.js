const service = require('../services/validateService');

const SERVER_ERROR = 500;

const validate = async (req, res) => {
  const { token } = req.body;
  try {
    const { status, message, resultVerify } = await service.validateToken(token);
    if (message) return res.status(200).json({ message });
    return res.status(status).json(resultVerify);
  } catch (err) {
    return res.status(SERVER_ERROR).json(SERVER_ERROR);
  }
};

module.exports = {
  validate,
};