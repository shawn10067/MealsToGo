import createStripe from "stripe-client";

const stripeClient = createStripe(
  "pk_test_51LIEBmG8vMRm8fyvicEAzkR0p40vWaoaNj3046jmT9K9odxpcJeNGlTXa5b8gMBHLKMtyKhswIiST3px1L1oBm5n001kLlDia1"
);

export const cardTokenRequest = (card) => stripeClient.createToken({ card });
