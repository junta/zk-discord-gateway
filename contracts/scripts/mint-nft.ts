// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
import { ethers } from "hardhat"

const MOCK_ADDRESS = "0x4B7099FD879435a087C364aD2f9E7B3f94d20bBe"

async function main() {
    const NFTContract = await ethers.getContractFactory("MockERC721")
    // const [signer] = await ethers.getSigners()
    const contract = NFTContract.attach(MOCK_ADDRESS)
    const tx = await contract.mint()
    const result = await tx.wait()
    console.log(result)
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error)
    process.exitCode = 1
})
