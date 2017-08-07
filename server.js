'use strict';

const express = require('express');
const debug = require('debug')('cfgram:server');

const app = express();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  debug(`server started on ${PORT}`);
});
