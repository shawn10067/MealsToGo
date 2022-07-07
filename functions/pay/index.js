module.exports.payRequest = (request, response, client) => {
  const { token, name, amount } = request.body;
  response.json({
    response: `${name} requested a purchase of $${amount} with token: ${token}`,
  });
};
