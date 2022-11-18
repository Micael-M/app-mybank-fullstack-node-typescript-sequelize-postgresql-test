const { User } = require('../database/models');
const token = require('../utils/token');

const login = async (username, password) => {
  const findUser = await User.findOne({ where: { username, password } });

  if (!findUser) return { status: 404, message: 'User not found' };
  
  const resultLogin = {
    id: findUser.id,
    username: findUser.username,
    accountId: findUser.accountId,
    token: token.generate(findUser.id, findUser.username),
  };
  return { status: 200, resultLogin };
};

module.exports = {
  login,
};
