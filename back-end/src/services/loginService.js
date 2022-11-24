const bcrypt = require('bcrypt');
const { User, Account } = require('../database/models');
const token = require('../utils/token');

const BALANCE_DEFAULT = 10000; // Equivalente à R$ 100,00

const getAccountById = async (userId) => {
  const { balance } = await Account.findOne({ where: { id: userId } });
  return balance;
};

const login = async (username, password) => {
  const findUser = await User.findOne({ where: { username } });

  if (!findUser) return { status: 401, message: 'Unauthorized user' }; // Conforme RFC 7235
  const passHashed = await bcrypt.compare(password, findUser.password);
  if (passHashed === false) {
    return { status: 401, message: 'Unauthorized user' }; // Conforme RFC 7235
  }

  const balance = await getAccountById(findUser.accountId);

  const resultLogin = {
    id: findUser.id,
    username: findUser.username,
    accountId: findUser.accountId,
    balance,
    token: token.generate(findUser.id, findUser.username),
  };
  return { status: 200, resultLogin };
};

const register = async (username, password) => {
  const passwordHashed = await bcrypt.hash(password, 8);
  const findUser = await User.findOne({ where: { username } });
  if (findUser) return { status: 409, message: 'User already exists' };

  // Crio a conta, obtenho id, o mesmo será utilizado no accountId.
  const createAccount = await Account.create({ balance: BALANCE_DEFAULT });
  const { id } = createAccount.dataValues;
  const createUser = await User.create({ username, password: passwordHashed, accountId: id });

  const resultUser = {
    id: createUser.id,
    username,
    accountId: createUser.accountId,
  };
  return { status: 201, resultUser };
};

module.exports = {
  login,
  register,
};
