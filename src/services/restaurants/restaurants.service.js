import camelize from "camelize";
import axios from "axios";
export const restaurantRequest = (location) => {
  return axios
    .get("http://localhost:5001/mealstogo-be58e/us-central1/places", {
      params: {
        location,
      },
    })
    .then((result) => result.data);
};

export const restaurantTransform = ({ results = [] }) => {
  const mappedResults = results.map((restaurantObject) => {
    return {
      ...restaurantObject,
      isOpenNow:
        restaurantObject.opening_hours &&
        restaurantObject.opening_hours.open_now,
      isClosedTemporarily:
        restaurantObject.business_status === "CLOSED_TEMPORARILY",
      address: restaurantObject.vicinity,
    };
  });
  return camelize(mappedResults);
};
