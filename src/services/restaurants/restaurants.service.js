import { mocks } from "./mock";

const restaurantRequest = (location = "43.653225,-79.383186") => {
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

export default restaurantRequest;
