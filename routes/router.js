const express = require('express');
const router = express.Router();
const { login, logout } = require('../controller/login');
const { register } = require('../controller/register')
const { vesselDetail } = require('../controller/vesselDetail')

router.post('/login', login)
router.get('/cek', (req, res) => {
    res.json("yesssss")
})

router.delete('/logout', logout)
router.post('/register_ship', register)
router.get('/shipment/:id/vessel', vesselDetail)


module.exports = router;