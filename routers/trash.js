const express = require('express')
const router = express.Router();


const trashController = require('../controllers/trashC')
router.get('/club', trashController.creatagain)
router.patch('/:id/restore', trashController.suamot)

router.delete('/:id/force', trashController.forceDestroy)

module.exports = router