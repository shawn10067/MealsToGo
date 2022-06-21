import { mocks } from "./mock";
import camelize from "camelize";

export const restaurantRequest = (location = "43.653225,-79.383186") => {
  return new Promise((resolve, reject) => {
    const data = mocks[location];
    if (!data) {
      reject("No data");
    } else {
      setTimeout(() => {
        resolve(data);
      }, 1500);
    }
  });
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
    };
  });
  return camelize(mappedResults);
};

