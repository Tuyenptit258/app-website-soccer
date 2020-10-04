const express = require('express')
const router = express.Router();


const clientController = require('../controllers/Member')
router.get('/member', clientController.member)
router.post('/tao', clientController.tao)




module.exports = router