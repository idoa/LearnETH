import { time, loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs";
import { expect } from "chai";
import { ethers } from "hardhat";

let learnETH:any;
describe("LearnETH", function () {

  describe("Deployment", function () {
    it("Should deploy", async function () {
    
      const LearnETH = await ethers.getContractFactory("LearnETH");
    learnETH = await LearnETH.deploy();

  await learnETH.deployed();

  console.log(`LearnETH deployed to ${learnETH.address}`);
});
    });

    describe("Add users", function () {
      
      it("Should add affiliate and teacher", async function () {
        let wallets:any = await ethers.getSigners()

        console.log(`LearnETH is in ${learnETH.address}`);
        console.log("wallets[0].address", await wallets[0].address)

        await learnETH.addAffiliate(wallets[0].address,wallets[0].address,1,48, {value:48})
        //console.log("affiliate 0 number ", await learnETH.affiliates(wallets[0].address))
       // console.log("test")

        await learnETH.connect(wallets[1]).addAffiliate(wallets[0].address,wallets[0].address,1,48, {value:48, from:wallets[1].address})
        await learnETH.connect(wallets[0].address)
        //console.log("affiliate 0 number ", await learnETH.affiliates(wallets[0].address))
  
      });
    });
});
