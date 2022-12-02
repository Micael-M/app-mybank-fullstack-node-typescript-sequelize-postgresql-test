const bcrypt = require('bcrypt');
const { User, Account } = require('../database/models');
const token = require('../utils/token');

const BALANCE_DEFAULT = 10000; // Equivalente à R$ 100,00

const getBalanceById = async (userId) => {
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

  const balance = await getBalanceById(findUser.accountId);

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

const updateBalance = async (debitedAccountId, creditedAccountId, value) => {
  const creditedBalance = await getBalanceById(creditedAccountId);
  const debitedBalance = await getBalanceById(debitedAccountId);
  if (creditedBalance < 0) {
    const convert = creditedBalance * (-1);

    const creditBalance = convert + value;
    const debitBalance = debitedBalance - value;

    await Account.update({ balance: creditBalance }, { where: { id: 5 } });
    await Account.update({ balance: debitBalance }, { where: { id: 6 } });
    return;
  }
  const creditBalance = creditedBalance + value;
  const debitBalance = debitedBalance - value;

  await Account.update({ balance: creditBalance }, { where: { id: creditedAccountId } });
  await Account.update({ balance: debitBalance }, { where: { id: debitedAccountId } });
  return true;
};

const getUserBalance = async (debitedAccountId, creditedAccountId, value) => {
  await updateBalance(debitedAccountId, creditedAccountId, value);
  return true;
};

module.exports = {
  login,
  register,
  getUserBalance,
};
