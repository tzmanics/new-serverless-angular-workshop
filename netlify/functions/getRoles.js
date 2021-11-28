const axios = require("axios").default;
exports.handler = async (userId) => {
  let rolesList = [];
  const options = {
    method: "GET",
    url: `https://tzmanics.auth0.com/api/v2/users/${userId}/roles`,
    headers: {
      authorization: `Bearer ${process.env.AUTH0_MANAGEMENT_API_TOKEN}`,
    },
  };

  await axios
    .request(options)
    .then(function (response) {
      rolesList = response.data;
    })
    .catch(function (error) {
      console.error(error);
    });
  return {
    statusCode: 200,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(rolesList),
  };
};