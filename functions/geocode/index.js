const { locations: locationMock } = require("./geocode.mock");
const url = require("url");

module.exports.geocodeRequest = (request, response, client) => {
  const { city, mock } = url.parse(request.url, true).query;
  if (city) {
    const result = locationMock[city.toLowerCase()];
    if (result) {
      response.json(locationMock[city.toLowerCase()]);
    } else {
      response.json({ error: "no such city found" });
    }
  } else {
    response.json({ error: "didn't send city info" });
  }
};
