// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
import { ethers } from "hardhat"

const address = "0xBA6BfBa894B5cAF04c3462A5C8556fFBa4de6782"

async function main() {
    const ZkGateway = await ethers.getContractAt("ZkGateway", address)

    const groupId = "262979718080478746129793348407344541883228054187490238583409992835778254321"
    const identityCommitment = "10678638114444808240153728495756441751151920215048355637207158567245638457596"
    const tx = await ZkGateway.addMember(groupId, identityCommitment)
    const result = await tx.wait()
    console.log(result)
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error)
    process.exitCode = 1
})
