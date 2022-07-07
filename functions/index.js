const functions = require("firebase-functions");
const { geocodeRequest } = require("./geocode");
const { placesRequest } = require("./places");
const { Client } = require("@googlemaps/google-maps-services-js");
const { payRequest } = require("./pay");

// google api client
const googleClient = new Client({});

// stripe client
const stripeClient = require("stripe")(functions.config().stripe.key);

exports.geocode = functions.https.onRequest((request, response) => {
  geocodeRequest(request, response, googleClient);
});

exports.places = functions.https.onRequest((request, response) => {
  placesRequest(request, response, googleClient);
});

exports.pay = functions.https.onRequest((request, response) => {
  payRequest(request, response, stripeClient);
});
