import { ethers } from "hardhat";

async function main() {

  const LearnETH = await ethers.getContractFactory("LearnETH");
  const learnETH = await LearnETH.deploy();

  await learnETH.deployed();

  console.log(`LearnETH deployed to ${learnETH.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
