var express = require("express");
var router = express.Router();

const EventEmitter = require("events").EventEmitter;
const chatRoomEvents = new EventEmitter();

function alertAllUsers(alertMessage) {
  console.log(alertMessage);
  console.log("Sending notification to all users involved");
}

// helper function
function userJoined(username) {
  alertAllUsers(`User ${username} has joined the chat`);
}

function removeUserJoined() {
  chatRoomEvents.removeListener("userJoined", userJoined);
}

// emitter function

function login(username) {
  chatRoomEvents.emit("userJoined", username);
}

function removeNotification() {
  chatRoomEvents.emit("removeUserJoined");
}

// event listener

chatRoomEvents.on("removeUserJoined", removeUserJoined);

chatRoomEvents.on("userJoined", userJoined);

/* GET home page. */
router.get("/", function (req, res, next) {
  if (req.query.removeEvent === "true") {
    // call helper
    removeNotification();
  }
  if (req.query.username) {
    // call helper
    login(req.query.username);
  }
  res.json({
    data: "hello",
    success: true,
  });
});

module.exports = router;
