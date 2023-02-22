const json = async (req, res) => {
  try {
    const myJson = require("./assetlinks.json")

    return res.send(myJson);
  } catch (error) {}
};

module.exports = {
  json,
};
