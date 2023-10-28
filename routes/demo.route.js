const { Router } = require('express');
const { SuccessResponseObject } = require('../common/http');

const r = Router();

const mens = {
  message: 'Hello, world!',
  timestamp: new Date()
};

r.get('/', (req, res) => res.json(new SuccessResponseObject(mens)));

module.exports = r;
