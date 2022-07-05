import React from "react";
import { LiteCreditCardInput } from "react-native-credit-card-input";

import createStripe from "stripe-client";

const stripeClient = createStripe(
  "pk_test_51LIEBmG8vMRm8fyvicEAzkR0p40vWaoaNj3046jmT9K9odxpcJeNGlTXa5b8gMBHLKMtyKhswIiST3px1L1oBm5n001kLlDia1"
);

const CreditCardInput = () => {
  const onCreditCardChange = async (val) => {
    const { values, status } = val;
    const isIncomplete = Object.values(status).includes("incomplete");
    if (!isIncomplete) {
      const { number, expiry, cvc } = values;
      const exp = expiry.split("/");
      const exp_month = exp[0];
      const exp_year = exp[1];
      const card = {
        number,
        exp_month,
        exp_year,
        cvc,
        name: "Sheen",
      };
      const info = await stripeClient.createToken({ card });
      console.log(info);
    }
  };
  return <LiteCreditCardInput onChange={onCreditCardChange} />;
};

export default CreditCardInput;
