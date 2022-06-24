import camelize from "camelize";
import { locations } from "./location.mock";

export const locationRequest = (locationSearchTerm) => {
  return new Promise((resolve, reject) => {
    const location = locations[locationSearchTerm];
    if (location) {
      setTimeout(() => {
        resolve(location);
      }, 400);
    } else {
      reject("No location with that search term");
    }
  });
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
