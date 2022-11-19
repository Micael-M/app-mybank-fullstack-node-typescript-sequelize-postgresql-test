require('dotenv').config();

const app = require('./app');

const PORT = 3002 || process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
