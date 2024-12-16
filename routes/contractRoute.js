const express = require('express')
const router =  express.Router();
const {createContract, getContract} = require('../controllers/contractController')

router.post('/', createContract)
router.get('/', getContract)
 
module.exports = router;