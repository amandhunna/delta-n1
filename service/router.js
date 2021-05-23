const express = require('express');
const router = express.Router();

const middleware = require('./middleware');

const orderController = require('./controller/order');
const productController = require('./controller/product');
const userController = require('./controller/user');

const { trimmer, verifyToken } = middleware;
router.use(trimmer)
router.use(verifyToken);

// order
router.post('/order', orderController.create);
router.get('/order', orderController.read);
router.put('/order', orderController.update);

// product
router.post('/product', productController.create);
router.get('/product', productController.read);
router.put('/product', productController.update);

// user
router.post('/user', userController.create);
router.get('/user', userController.read);
router.put('/user', userController.update);

module.exports = router;