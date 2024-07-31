const express = require('express');
const router = express.Router();
const redisService = require('../redis/index');

router.get('/', async (req, res) => {
  const todos = await redisService.getAsync('added_todos');

  res.send({ added_todos: Number(todos) });
});

module.exports = router;
