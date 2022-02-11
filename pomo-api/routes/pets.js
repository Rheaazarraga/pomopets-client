const express = require('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

router.get('/', function(req, res) {
  res.send({ title: 'pets' });
});

module.exports = router;