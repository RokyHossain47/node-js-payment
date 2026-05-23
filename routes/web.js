const express = require("express");
const router = express.Router();
const webController = require("../controllers/webController");

// ── Health Check & API Documentation ────────
router.get("/", webController.index);

module.exports = router;