// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
import { ethers } from "hardhat"

async function main() {
    const address = "0x708f59359530fc46bdc18f62C30e9Ee1970c19d0"

    const ZkGateway = await ethers.getContractAt("ZkGateway", address)

    // const transaction = await ZkGateway.callStatic.createGateway(
    //     ethers.utils.formatBytes32String("ba"),
    //     "0x4B7099FD879435a087C364aD2f9E7B3f94d20bBe"
    // )
    // console.log(transaction)

    const transaction = await ZkGateway.createGateway(
        ethers.utils.formatBytes32String("baa"),
        "0x4B7099FD879435a087C364aD2f9E7B3f94d20bBe",
        "721174434060304384",
        "NFTHolder"
    )

    const result = await transaction.wait()
    console.log(result)
}
// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error)
    process.exitCode = 1
})
