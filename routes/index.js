var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res) {
  res.render("index", { layout: false });
});

router.get("/login", function (req, res) {
  res.render("login", {
    layout: false,
    title: "Login",
    judul: false,
    subjudul: false,
  });
});
router.get("/dashboard", function (req, res) {
  res.render("dashboard", {
    layout: "./layouts/layout",
    title: "Dashboard",
    judul: "DASHBOARD",
    subjudul: "Dashboard",
  });
});

router.get("/listcars", function (req, res) {
  res.render("listCars", {
    layout: "./layouts/layout",
    title: "List Cars",
    judul: "CARS",
    subjudul: "List Cars",
  });
});

router.get("/addNewCar", function (req, res) {
  res.render("addNewCar", {
    layout: "./layouts/layout",
    title: "Add New Car",
    judul: "CARS",
    subjudul: "List Cars",
  });
});

module.exports = router;
