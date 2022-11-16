const options = {
  swaggerDefinition: {
    info: {
      description: "API documentation",
      title: "Final Project Document",
      version: "1.0.0",
    },
    host: "localhost:5000",
    basePath: "/v1",
    produces: ["application/json", "application/xml"],
    schemes: ["http", "https"],
    securityDefinitions: {
      JWT: {
        type: "apiKey",
        in: "header",
        name: "Authorization",
        description: "Basic authorization using JSON Web Token",
      },
    },
  },
  basedir: __dirname, //app absolute path
  files: ["../routes/*.api.js", "../models/*.js"], //Path to the API handle folder
};

module.exports = options;
