const { mocks, mockImages } = require("./mock");
const url = require("url");
const functions = require("firebase-functions");

const addGoogleImage = (restaurant) => {
  if (restaurant.photos) {
    const ref = restaurant.photos[0].photo_reference;
    if (!ref) {
      restaurant.photos = [
        mockImages[Math.floor(Math.random() * mockImages.length)],
      ];
      return restaurant;
    } else {
      restaurant.photos = [
        `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${ref}&key=${
          functions.config().googlemapsapi.key
        }`,
      ];
      return restaurant;
    }
  }
};

module.exports.placesRequest = (request, response, googleClient) => {
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
    googleClient
      .placesNearby({
        params: {
          location,
          radius: 1500,
          type: "restaurant",
          key: functions.config().googlemapsapi.key,
        },
        timeout: 1000,
      })
      .then((res) => {
        const finalData = res.data.results.map(addGoogleImage);
        console.log(finalData);
        response.json({ results: finalData });
      })
      .catch((e) => console.log(e));
  } else {
    response.json({ error: "no location provided" });
  }
};
