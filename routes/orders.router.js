const express = require('express');
const OrderService = require('../services/order.service')
const router = express.Router();
const service = new OrderService()

router.get('/', async (req, res) => {
  try {
    const ordenes = await service.find()
    res.json(ordenes)
  } catch (error) {
    console.error(error)
  }
});

module.exports = router;
