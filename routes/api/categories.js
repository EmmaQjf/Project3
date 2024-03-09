const express = require('express');
const router = express.Router();
const categoriesCtrl = require('../../controllers/api/categories');

// GET /api/items
router.get('/', categoriesCtrl.index);
router.get('/:name', categoriesCtrl.show);

module.exports = router;