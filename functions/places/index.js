const { mocks, mockImages } = require("./mock");
const url = require("url");

module.exports.placesRequest = (request, response, client) => {
  const { location, mock } = url.parse(request.url, true).query;
  if (location && mock === "true") {
    const result = mocks[location];
    if (result) {
      result.results.map((restaurant) => {
        restaurant.photos = [
          mockImages[Math.floor(Math.random() * mockImages.length)],
        ];
      });
      response.json(result);
    } else {
      response.json({ error: "no results" });
    }
  } else if (location) {
    response.json({ status: "no mock needed" });
  } else {
    response.json({ error: "no location provided" });
  }
};
