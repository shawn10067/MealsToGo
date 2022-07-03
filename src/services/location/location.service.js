import camelize from "camelize";
import axios from "axios";

export const locationRequest = (locationSearchTerm) => {
  return axios
    .get("http://localhost:5001/mealstogo-be58e/us-central1/geocode", {
      params: {
        city: locationSearchTerm,
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
