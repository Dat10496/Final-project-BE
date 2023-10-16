require("dotenv").config();
const express = require("express");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const logger = require("morgan");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const swaggerUi = require("swagger-ui-express");
const passport = require("passport");
const cors = require("cors");

require("./passport/passport");
require("./sendgrid/sgMail");

const passportSession = require("./passport/passport.session");
const { sendResponse, AppError } = require("./helpers/utils");
const adminRouter = require("./admin/adminRouter");
const options = require("./docs/schema");
const mongoUri = process.env.MONGO_URI;

const app = express();
app.use(cors());

// Swagger docs setup
const expressSwagger = require("express-swagger-generator")(app);
expressSwagger(options);
app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(options, { explorer: true })
);

/**
 * Route Block
 */
// Setup adminjs
app.use("/admin", adminRouter);
/** */

app.use(bodyParser.json());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static("public"));
app.use("/uploads", express.static("uploads"));

// Setup Authentication with passport
app.use(session(passportSession));
app.use(passport.initialize());
app.use(passport.authenticate("session"));
/** */

const indexRouter = require("./routes/index");
app.use("/v1", indexRouter);
/**
 * End Route
 */

// Connect to mongoDB
mongoose
  .connect(mongoUri)
  .then(() => console.log("Connected DB"))
  .catch((err) => console.log(err, "Connect DB Error"));

// mongoose.set("strictQuery", true);
// Error handlers
// Catch 404
app.use((req, res, next) => {
  const error = new AppError(404, "Not Found", "Bad Request");
  next(error);
});

app.use((err, req, res, next) => {
  console.log(err, "ERROR");
  return sendResponse(
    res,
    err.statusCode ? err.statusCode : 500,
    false,
    null,
    err.isOperational ? err.isOperational : "Internal server error",
    err.message
  );
});

module.exports = app;
