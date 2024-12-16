const express = require('express');
const {createservices,getAllservices}=require('../controllers/servicesController')
const router = express.Router();


router.post('/', createservices);
router.get('/', getAllservices )

module.exports = router;