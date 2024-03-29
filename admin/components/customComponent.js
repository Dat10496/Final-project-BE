const { ComponentLoader } = require("adminjs");

const componentLoader = new ComponentLoader();

// Connect component in adminjs
const Components = {
  Image: componentLoader.add("Image", "./upload-image.edit"),
  ImageList: componentLoader.add("ImageList", "./upload-image.list"),
  DashBoard: componentLoader.add("DashBoard", "./adminDashBoard/dashboard"),
};

module.exports = Components; 
