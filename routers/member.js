const express = require('express')
const router = express.Router();


const memberController = require('../controllers/memberC')
router.get('/member', memberController.member)
router.post('/tao', memberController.tao)




module.exports = router