
const hre = require("hardhat");
// 0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0
async function main() {
 
  const CrowdFunding = await hre.ethers.getContractFactory("CrowdFunding");
  const crowdFunding = await CrowdFunding.deploy();

  // await crowdFunding.deployed();
  const add = await crowdFunding.getAddress();

  console.log(`CrowdFunding deployed to: ${add}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
