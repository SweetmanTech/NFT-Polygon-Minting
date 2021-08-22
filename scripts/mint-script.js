const hre = require("hardhat");

async function main() {
  const NFT = await hre.ethers.getContractFactory("SweetsNFT");
  const URI = "ipfs://QmbRmwSWgnnFNzGUccUo8Z1jsUdd855qe78BT63D7x1hy9"
  const WALLET_ADDRESS = "0x6085923b251E60d54DA40EEcCF98380c37fE462C"
  const CONTRACT_ADDRESS = "0x4410C72797C374F43133af1CaBf265Cf4ce043ec"
  const contract = NFT.attach(CONTRACT_ADDRESS);
  await contract.mint(WALLET_ADDRESS, URI);
  console.log("NFT minted:", contract);
}
main().then(() => process.exit(0)).catch(error => {
  console.error(error);
  process.exit(1);
});