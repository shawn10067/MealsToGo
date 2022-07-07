module.exports.payRequest = (request, response, stripeClient) => {
  const { token, amount } = request.body;
  console.log(token, amount);
  stripeClient.paymentIntents
    .create({
      amount,
      currency: "USD",
      payment_method_types: ["card"],
      payment_method_data: {
        type: "card",
        card: {
          token,
        },
      },
      confirm: true,
    })
    .then((paymentIntent) => response.json({ intent: paymentIntent }))
    .catch((e) => {
      console.log(e);
      response.status(400);
      response.json({ error: e });
    });
};
