const express = require("express");
const router = express.Router();
const config = require("../config.js");
/* GET home page. */
router.get("/", function(req, res, next) {
	res.send(config.ASDA_URL);
});

module.exports = router;
