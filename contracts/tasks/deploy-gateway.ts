import { poseidon_gencontract as poseidonContract } from "circomlibjs"
import { task, types } from "hardhat/config"

task("deploy:gateway", "Deploy an ZkGateway contract")
    .addParam<number>("verifierAddress", "Semaphore verifier address", undefined, types.string)
    .addOptionalParam<number>("treeDepth", "Merkle tree depth", Number(process.env.TREE_DEPTH) || 20, types.int)
    .addOptionalParam("logs", "Print the logs", true, types.boolean)
    .setAction(async ({ logs, treeDepth, verifierAddress }, { ethers }) => {
        const poseidonABI = poseidonContract.generateABI(2)
        const poseidonBytecode = poseidonContract.createCode(2)
        const relayerAddress = "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266"

        const [signer] = await ethers.getSigners()

        const PoseidonLibFactory = new ethers.ContractFactory(poseidonABI, poseidonBytecode, signer)
        const poseidonLib = await PoseidonLibFactory.deploy()

        await poseidonLib.deployed()

        if (logs) {
            console.info(`Poseidon library has been deployed to: ${poseidonLib.address}`)
        }

        const IncrementalBinaryTreeLibFactory = await ethers.getContractFactory("IncrementalBinaryTree", {
            libraries: {
                PoseidonT3: poseidonLib.address
            }
        })
        const incrementalBinaryTreeLib = await IncrementalBinaryTreeLibFactory.deploy()

        await incrementalBinaryTreeLib.deployed()

        if (logs) {
            console.info(`IncrementalBinaryTree library has been deployed to: ${incrementalBinaryTreeLib.address}`)
        }

        const FactoryContract = await ethers.getContractFactory("ZkGateway", {
            libraries: {
                IncrementalBinaryTree: incrementalBinaryTreeLib.address
            }
        })

        const contract = await FactoryContract.deploy(treeDepth, verifierAddress, relayerAddress)

        await contract.deployed()

        if (logs) {
            console.info(`ZkGateway contract has been deployed to: ${contract.address}`)
        }

        return contract
    })
