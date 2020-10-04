const express = require('express')
const router = express.Router();


const adminController = require('../controllers/adminC')
router.get('/club', adminController.adminClub)
// router.post('/tao', adminController.adminTao)
router.get('/:id/edit', adminController.edit)

router.put('/:id', adminController.sua)

router.delete('/:id', adminController.destroy)
module.exports = router