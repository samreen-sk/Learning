const express = require("express");
const router = express.Router();
const {userRegistration,userLogin,userCurrent} = require("../controller/userController");

const validateToken = require("../middleware/validateTokenHandler");

router.post("/register", userRegistration);

router.post("/login", userLogin);

router.get("/current",validateToken, userCurrent);

module.exports = router;