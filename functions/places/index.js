const { mocks, mockImages } = require("./mock");
const url = require("url");

module.exports.placesRequest = (request, response) => {
  const { location } = url.parse(request.url, true).query;
  if (location) {
    const result = mocks[location];
    if (result) {
      result.photos = [
        mockImages[Math.floor(Math.random() * mockImages.length)],
      ];
      response.json(result);
    } else {
      response.json({ error: "no results" });
    }
  } else {
    response.json({ error: "no location provided" });
  }
};
