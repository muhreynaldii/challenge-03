var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res) {
  res.render("index");
});

router.get("/dashboard", function (req, res) {
  res.render("dashboard");
});

router.get("/cars", function (req, res) {
  res.render("cars");
});

router.get("/addNewCar", function (req, res) {
  res.render("addNewCar");
});

module.exports = router;
