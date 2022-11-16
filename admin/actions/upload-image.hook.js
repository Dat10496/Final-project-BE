const path = require("path");
const fs = require("fs");
const AdminJS = require("adminjs");
const mv = require("mv");

/** @type {AdminJS.After<AdminJS.ActionResponse>} */
const after = async (response, request, context) => {
  const { record, image } = context;

  if (record.isValid() && image) {
    const filePath = path.join("uploads", record.id().toString(), image.name);

    await fs.promises.mkdir(path.dirname(filePath), { recursive: true });

    mv(image.path, filePath, function (err) {
      if (err) {
        console.log(err, "save image err");
      }
    });

    await record.update({ image: `/${filePath}` });
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
