const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send("Hey it's working Products Testing");
});

module.exports = router;