import createStripe from "stripe-client";
import axios from "axios";

const stripeClient = createStripe(
  "pk_test_51LIEBmG8vMRm8fyvicEAzkR0p40vWaoaNj3046jmT9K9odxpcJeNGlTXa5b8gMBHLKMtyKhswIiST3px1L1oBm5n001kLlDia1"
);

export const cardTokenRequest = (card) => stripeClient.createToken({ card });

export const payRequest = (token, amount, name) => {
  axios({
    url: "https://us-central1-mealstogo-be58e.cloudfunctions.net/pay",
    method: "post",
    data: {
      token,
      amount,
      name,
    },
  }).then((val) => {
    if (val.status > 200) {
      return Promise.reject("Cannot handle payment request.");
    } else {
      console.log("success!", val.data);
    }
  });
};
