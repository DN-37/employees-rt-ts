const express = require('express');
const router = express.Router();
const { add, all } = require("../controllers/skills");
const { auth } = require('../middleware/auth');

router.get("/", auth, all);
router.post("/add", auth, add);

module.exports = router;