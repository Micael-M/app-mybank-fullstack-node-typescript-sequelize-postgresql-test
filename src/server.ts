import "reflect-metadata"
import express from "express"
require('dotenv').config();

const PORT = 3000 || process.env.PORT

const app = express();

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`)
})
