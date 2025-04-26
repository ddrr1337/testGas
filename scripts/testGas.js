const { ethers, deployments, network } = require("hardhat");
const { getAccount } = require("../utils/getAccount");

async function main() {
  const rpcUrl = network.config.url;
  const provider = new ethers.JsonRpcProvider(rpcUrl);
  const account = getAccount("main", provider);

  const testGasDeployment = await deployments.get("TestGas");
  const testGasAddress = testGasDeployment.address;
  const testGasAbi = testGasDeployment.abi;

  console.log("contract at:", testGasAddress);

  const testGasContract = new ethers.Contract(
    testGasAddress,
    testGasAbi,
    account
  );

  const testGasTx = await testGasContract.testGas();

  console.log("test gas Tx:", testGasTx.hash);
  await testGasTx.wait(1);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
