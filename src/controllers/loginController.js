const service = require('../services/loginService');

const SERVER_ERROR = 500;
const SERVER_ERROR_MESSAGE = { message: 'Server error' };

const login = async (req, res) => {
  const { username, password } = req.body;
  console.log('No login controller');
  console.log(username);

  try {
    const { status, message, resultLogin } = await service.login(username, password);
    if (message) return res.status(status).json({ message });
    return res.status(status).json(resultLogin);
  } catch (err) {
    return res.status(SERVER_ERROR).json(SERVER_ERROR_MESSAGE);
  }
};

module.exports = {
  login,
};
