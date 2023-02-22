const json = async (req, res) => {
  try {
    const myJson = require("./assetlinks.json")

    return res.json(x);
  } catch (error) {}
};

module.exports = {
  json,
};
