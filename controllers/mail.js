const EventEmitter = require("events").EventEmitter;
const mailEvents = new EventEmitter();

mailEvents.on("sendMail", (sender) => {
  console.log(`${sender}, email has been sent`);
});

mailEvents.on("receiveMail", (sender) => {
  console.log(`${sender} has sent you an email`);
});

const Mailbox = {
  sendMail: function (sender) {
    mailEvents.emit("sendMail", sender);
  },
  receiveMail: function (sender) {
    mailEvents.emit("receiveMail", sender);
  },
};

module.exports = Mailbox;
