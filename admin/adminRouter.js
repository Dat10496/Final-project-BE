require("dotenv").config();
const AdminJS = require("adminjs");
const AdminJSExpress = require("@adminjs/express");
const session = require("express-session");
const MongoDBStore = require("connect-mongodb-session")(session);
const AdminJSMongoose = require("@adminjs/mongoose");
const authenticate = require("./authenticate");
const Admin = require("../models/Admin");

const mongoUri = process.env.MONGO_URI;

/**
 * AdminJS register Adapter
 */
AdminJS.registerAdapter({
  Resource: AdminJSMongoose.Resource,
  Database: AdminJSMongoose.Database,
});

const admin = new AdminJS(Admin);

const sessionStore = new MongoDBStore({
  uri: mongoUri,
  collection: "sessions",
});

const adminRouter = AdminJSExpress.buildAuthenticatedRouter(
  admin,
  {
    authenticate,
    cookieName: "adminjs",
    cookiePassword: process.env.ADMINJS_SECRET_SESSION || "sessionsecret",
  },
  null,
  {
    store: sessionStore,
    resave: true,
    saveUninitialized: true,
    secret: process.env.ADMINJS_SECRET_SESSION || "sessionsecret",
    name: "adminjs",
  }
);

module.exports = adminRouter;
