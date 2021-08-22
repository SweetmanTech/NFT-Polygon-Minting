const hre = require("hardhat");

async function main() {
  const NFT = await hre.ethers.getContractFactory("MyNFT");
  const URI = "ipfs://QmXAwU9MRbysSnkK5PqogFLx97kW5rRGcMckMtCczoGYNj"
  const WALLET_ADDRESS = "0x1795BD61F0bfE0a3143A1509D07e28862a6C0a44"
  const CONTRACT_ADDRESS = "0x02973401B0d003e813A562264939BBE70DBFdC87"
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