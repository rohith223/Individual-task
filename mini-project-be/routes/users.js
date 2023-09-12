var express = require("express");
var router = express.Router();
var User = require("../Models/Controller/User");
var profile = require("../Models/Controller/profile");

router.post("/", User.create);
router.post("/login", User.validate);
router.post("/profile", profile.profileCreate);
router.get("/profile/get/:email", profile.getProfileData);
router.put("/profile_update", profile.profileUpdate);


module.exports = router;
