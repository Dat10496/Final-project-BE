const cloudinaryUpload = require("../../helpers/cloudinary");
const AdminJS = require("adminjs");

/** @type {AdminJS.After<AdminJS.ActionResponse>} */
const after = async (response, request, context) => {
  const { record, image } = context;
 
  if (typeof image !== "string" && record.isValid()) {
    const filePath = await cloudinaryUpload(image);

    // update field image on adminjs
    if (filePath) {
      await record.update({ image: `${filePath}` });
    }
  }
  return response;
};

/** @type {AdminJS.Before} */
const before = async (request, context) => {
  if (request.method === "post") {
    const { image, ...otherParams } = request.payload;

    // eslint-disable-next-line no-param-reassign
    context.image = image;

    return {
      ...request,
      payload: otherParams,
    };
  }
  return request;
};

module.exports = { after, before };
