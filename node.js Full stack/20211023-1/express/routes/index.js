const express = require('express');
const router = express.Router();

router.get('/index', (req, res) => {
    res.send('这是首页')
});

module.exports = router;