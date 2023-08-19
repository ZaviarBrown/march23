require('express-async-errors');
require('dotenv').config();
const express = require('express');
const app = express();

app.use(express.json());

if (require.main === module) {
  const port = 8003;
  app.listen(port, () => console.log('Server-3 is listening on port', port));
} else {
  module.exports = app;
}