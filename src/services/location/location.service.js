import camelize from "camelize";
import axios from "axios";

export const locationRequest = (locationSearchTerm) => {
  return axios
    .get("https://us-central1-mealstogo-be58e.cloudfunctions.net/geocode", {
      params: {
        city: locationSearchTerm,
        mock: "true",
      },
    })
    .then((result) => result.data)
    .catch((e) => console.log("Network Error ", e.response));
};

export const locationTransform = (result) => {
  const formattedResult = camelize(result);
  const { results = [] } = formattedResult;
  const { geometry = {} } = camelize(results[0]);
  const { location = {} } = geometry;
  const { lat, lng } = location;
  const { viewport } = geometry;
  return { lat, lng, viewport };
};
