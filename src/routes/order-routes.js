const express = require('express');
const router = express.Router();
const {check} = require('express-validator')
const orderController = require('../controllers/order-controller');


router.get('/', orderController.listOrder);

router.get('/:id', orderController.listOrder);

router.post('/',[
    check('address').isLength({ min: 7 }).withMessage("The (adress) need to be true, this adress is low with less letters."),
    check('order').isLength({ min: 10 }).withMessage("You need to say more about your order"),
    check('order').isLength({ max: 180 }).withMessage("Your order is very larger")
], orderController.createOrder);


router.put('/:id', [
    check('address').isLength({ min: 7 }).withMessage("The (adress) need to be true, this adress is low with less letters."),
    check('order').isLength({ min: 10 }).withMessage("You need to say more about your order"),
    check('order').isLength({ max: 280 }).withMessage("Your order is very larger") 
], orderController.updateOrder);


router.delete('/:id', orderController.deleteOrder);


module.exports = router;
