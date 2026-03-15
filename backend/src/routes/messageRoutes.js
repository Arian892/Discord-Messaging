const {listMessages}=require('../controllers/messageController');
const express = require('express');

const router = express.Router();
console.log("message Route found");

router.get('/:channelId',listMessages);

module.exports = router;