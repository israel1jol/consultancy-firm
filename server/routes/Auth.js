const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const router = require("express").Router();
const User = require("../models/User");
const { validateRefreshToken, validateAccessToken, validateCSRFToken } = require("../middleware/Auth");


router.get("/csrfToken", (req, res) => {
    const token = jwt.sign("A csrf token to guard against csrf", process.env.CSRF_KEY);
    return res.json({csrf_token:token});
})


module.exports = router;