// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
import { ethers } from "hardhat"

async function main() {
    const address = "0xF758A89A9EbA1F6d74d32d9C00edC78E8e27fC6a"

    const ZkGateway = await ethers.getContractAt("ZkGateway", address)
    const gateway = await ZkGateway.gateways("721174434060304384")
    console.log(Number(gateway.groupId))
}
// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error)
    process.exitCode = 1
})
