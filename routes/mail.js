var express = require("express");
var router = express.Router();
const Mailbox = require("../controllers/mail");

/* GET home page. */
router.get("/send", function (req, res, next) {
  const { sender } = req.query;
  if (sender) {
    Mailbox.sendMail(sender);
  }
});

router.get("/receive", function (req, res) {
  const { sender } = req.query;
  if (sender) {
    Mailbox.receiveMail(sender);
  }
});

module.exports = router;
