require("@nomiclabs/hardhat-waffle");
require("dotenv").config();
require("@nomicfoundation/hardhat-verify");
require("hardhat-deploy");


const BASE_SEPOLIA_RPC = process.env.BASE_SEPOLIA_RPC;
const BASE_ETHERSCAN_TOKEN = process.env.BASE_ETHERSCAN_TOKEN;
const PRIVATE_KEY = process.env.PRIVATE_KEY;


module.exports = {
  solidity: {
    compilers: [
      { version: "0.8.9" },
      { version: "0.6.6" },
      { version: "0.8.25" },
      { version: "0.8.28" },
    ],
  },

  etherscan: {
    // Your API key for Etherscan
    // Obtain one at https://etherscan.io/
    apiKey: {
      base_sepolia: BASE_ETHERSCAN_TOKEN,
    },
    customChains: [
      {
        network: "base_sepolia",
        chainId: 84532,
        urls: {
          apiURL: "https://api-sepolia.basescan.org/api",
          browserURL: "https://sepolia.basescan.org",
        },
      },
    ],
    enabled: true,
  },
  sourcify: {
    // Disabled by default
    // Doesn't need an API key
    enabled: true,
  },
  networks: {
    base_sepolia: {
      url: BASE_SEPOLIA_RPC,
      accounts: [PRIVATE_KEY],
      chainId: 84532,
      blockConfirmations: 1,
      testnet: true,
    },

    localHost: {
      url: "http://127.0.0.1:8545/",
      chainId: 31337,
    },
  },
  namedAccounts: {
    deployer: {
      default: 0,
    },
    user: {
      default: 1,
    },
  },
};
