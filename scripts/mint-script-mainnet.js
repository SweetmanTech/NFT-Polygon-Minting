const hre = require("hardhat");
require('dotenv').config();

//TODO: ADD YOUR WALLET & CONTRACT ADDRESS.
const WALLET_ADDRESS = process.env.WALLET_ADDRESS;
const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS;

async function main() {
  const NFT = await hre.ethers.getContractFactory("MyNFT");
  const URI = "ipfs://QmXAwU9MRbysSnkK5PqogFLx97kW5rRGcMckMtCczoGYNj"
  const contract = NFT.attach(CONTRACT_ADDRESS);
  await contract.mint(WALLET_ADDRESS, URI);
  console.log("NFT minted:", contract);
  const uri = await contract.tokenURI(9);
  console.log("URI: ", uri);
}
main().then(() => process.exit(0)).catch(error => {
  console.error(error);
  process.exit(1);
});