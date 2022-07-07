import React from "react";
import { LiteCreditCardInput } from "react-native-credit-card-input";
import { cardTokenRequest } from "../../../services/checkout/checkout.service";

const CreditCardInput = ({ name = "Sheen", setCard, onError }) => {
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
        name,
      };
      try {
        console.log("Credit Card");
        const info = await cardTokenRequest(card);
        setCard(info);
        console.log(info);
      } catch (e) {
        console.error("SUM WRONG WITH YOU CREDIT CARD", e);
        onError();
      }
    }
  };
  return <LiteCreditCardInput onChange={onCreditCardChange} />;
};

export default CreditCardInput;
