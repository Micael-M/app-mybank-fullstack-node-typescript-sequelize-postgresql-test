const { User, Account } = require('../database/models');
const token = require('../utils/token');

const BALANCE_DEFAULT = 10000; // Equivalente à R$ 100,00

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

const register = async (username, password) => {
  const findUser = await User.findOne({ where: { username } });
  if (findUser) return { status: 409, message: 'User already exists' };

  // Crio a conta para pegar o id, o mesmo será utilizado no accountId.
  const createAccount = await Account.create({ balance: BALANCE_DEFAULT });
  const { id } = createAccount.dataValues;
  const createUser = await User.create({ username, password, accountId: id });

  return { status: 201, createUser };
};

module.exports = {
  login,
  register,
};
