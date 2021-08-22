const hre = require("hardhat");

async function main() {
  const NFT = await hre.ethers.getContractFactory("SweetsNFT");
  const CONTRACT_ADDRESS = "0x4410C72797C374F43133af1CaBf265Cf4ce043ec"
  const contract = NFT.attach(CONTRACT_ADDRESS);
  const owner = await contract.ownerOf(1);
  console.log("Owner:", owner);
  const uri = await contract.tokenURI(3);
  console.log("URI: ", uri);
}

main().then(() => process.exit(0)).catch(error => {
  console.error(error);
  process.exit(1);
});