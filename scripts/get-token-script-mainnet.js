const hre = require("hardhat");

async function main() {
  const NFT = await hre.ethers.getContractFactory("MyNFT");
  const CONTRACT_ADDRESS = "0x02973401B0d003e813A562264939BBE70DBFdC87"
  const contract = NFT.attach(CONTRACT_ADDRESS);
  const owner = await contract.ownerOf(1);
  console.log("Owner:", owner);
  const uri = await contract.tokenURI(2);
  console.log("URI: ", uri);
}

main().then(() => process.exit(0)).catch(error => {
  console.error(error);
  process.exit(1);
});