// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
import { ethers } from "hardhat"

async function main() {
    const [signer] = await ethers.getSigners()

    /**
     * Mock ERC721
     */
    const baseTokenURI = "https://example.com/"
    const registryAddress = "0x1E525EEAF261cA41b809884CBDE9DD9E1619573A" // Rinkeby
    const baseContractURI = "https://contract.example.com/"

    const Mock = await ethers.getContractFactory("MockERC721")
    const m = await Mock.deploy(baseTokenURI, baseContractURI, registryAddress)
    await m.deployed()

    console.info(`NFT contract has been deployed to: ${m.address}`)
}
// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error)
    process.exitCode = 1
})
