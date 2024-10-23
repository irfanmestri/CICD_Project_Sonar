const express = require('express');
const router = express.Router();

const products = [
  { id: 1, name: 'Apple', price: 1.2, image: '/images/apple.jpg' },
  { id: 2, name: 'Banana', price: 0.8, image: '/images/banana.jpg' },
  // More products...
];

router.get('/', (req, res) => {
  res.json(products);
});

module.exports = router;
