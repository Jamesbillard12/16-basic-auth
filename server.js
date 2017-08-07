'use strict';

const express = require('express');
const debug = require('debug')('cfgram:server');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');

const errors = require('./lib/error-middleware.js');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(errors);

app.listen(PORT, () => {
  debug(`server started on ${PORT}`);
});
