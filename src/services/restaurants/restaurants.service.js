import camelize from "camelize";
import axios from "axios";
export const restaurantRequest = (location) => {
  return axios
    .get("https://us-central1-mealstogo-be58e.cloudfunctions.net/places", {
      params: {
        location,
        mock: "true",
      },
    })
    .then((result) => result.data)
    .catch((e) => console.log(e.response));
};

export const restaurantTransform = ({ results = [] }) => {
  const mappedResults = results
    .filter((val) => val !== null)
    .map((restaurantObject) => {
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
