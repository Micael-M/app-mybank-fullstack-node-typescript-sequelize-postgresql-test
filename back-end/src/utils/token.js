require('dotenv').config();
const jwt = require('jsonwebtoken');

const SECRET = process.env.JWT_SECRET;

module.exports = {
  verify(token) {
    return jwt.verify(token, SECRET);
  },
  generate(id, username) {
    return jwt.sign({ id, username }, SECRET, { expiresIn: '1d' });
  },
};
