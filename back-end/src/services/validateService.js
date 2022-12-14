const jwt = require('../utils/token');

const validateToken = async (token) => {
  try {
    const resultVerify = await jwt.verify(token);
    if (resultVerify) return { status: 200, resultVerify };
  } catch (err) {
    return { status: 401, message: err.message };
  }
};

module.exports = {
  validateToken,
};
