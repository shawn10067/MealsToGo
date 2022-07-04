const { locations: locationMock } = require("./geocode.mock");
const url = require("url");
const functions = require("firebase-functions");

module.exports.geocodeRequest = (request, response, client) => {
  const { city, mock } = url.parse(request.url, true).query;
  if (city && mock === "true") {
    const result = locationMock[city.toLowerCase()];
    if (result) {
      response.json(locationMock[city.toLowerCase()]);
    } else {
      response.json({ error: "no such city found" });
    }
  } else if (city) {
    client
      .geocode({
        params: {
          address: city,
          key: functions.config().googlemapsapi.key,
        },
        timeout: 1000,
      })
      .then((res) => response.json(res.data))
      .catch((e) => response.send(e.response));
  } else {
    response.json({ error: "didn't send city info" });
  }
};
