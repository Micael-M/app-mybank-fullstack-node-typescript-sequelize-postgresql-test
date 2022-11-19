const service = require('../services/loginService');

const SERVER_ERROR = 500;
const SERVER_ERROR_MESSAGE = { message: 'Server error' };

const login = async (req, res) => {
  const { username, password } = req.body;

  try {
    const { status, message, resultLogin } = await service.login(username, password);
    if (message) return res.status(status).json({ message });
    return res.status(status).json(resultLogin);
  } catch (err) {
    return res.status(SERVER_ERROR).json(SERVER_ERROR_MESSAGE);
  }
};

const register = async (req, res) => {
  const { username, password } = req.body;

  try {
    const { status, message, createUser } = await service.register(username, password);
    if (message) return res.status(status).json({ message });
    return res.status(status).json(createUser);
  } catch (err) {
    return res.status(SERVER_ERROR).json(SERVER_ERROR_MESSAGE);
  }
};

module.exports = {
  login,
  register,
};
