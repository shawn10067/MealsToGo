import { mockImages, mocks } from "./mock";
import camelize from "camelize";

export const restaurantRequest = (location) => {
  return new Promise((resolve, reject) => {
    const data = mocks[location];
    if (!data) {
      reject("No data");
    } else {
      setTimeout(() => {
        resolve(data);
      }, 750);
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
      photos: [mockImages[Math.floor(Math.random() * mockImages.length)]],
      address: restaurantObject.vicinity,
    };
  });
  return camelize(mappedResults);
};
