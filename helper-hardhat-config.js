const networkConfig = {
  31337: {
    name: "localhost",
  },

  84532: {
    name: "base_spolia",
    verify: true,
  },
};

const developmentChains = ["hardhat", "localhost"];

module.exports = {
  networkConfig,
  developmentChains,
};
