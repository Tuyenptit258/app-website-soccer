const express = require('express')
const router = express.Router();
var multer  = require('multer')
var upload = multer({ dest: 'uploads/' })

const clubController = require('../controllers/clubC')
router.get('/me', clubController.club)
router.post('/dangki',upload.single('avatar'), clubController.dangki)




module.exports = router