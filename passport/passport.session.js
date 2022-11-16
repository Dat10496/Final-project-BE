require("dotenv").config();
const session = require("express-session");
const MongoDBStore = require("connect-mongodb-session")(session);
const mongoUri = process.env.MONGO_URI;
const secretSession = process.env.PASSPORT_SECRET_SESSION;

const passportSession = {
  secret: secretSession,
  resave: false,
  saveUninitialized: false,
  store: new MongoDBStore({
    uri: mongoUri,
    collection: "sessions",
    ttl: 12 * 60 * 60,
  }),
};

module.exports = passportSession;
