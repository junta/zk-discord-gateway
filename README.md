# zk-discord-NFT-gateway

## Overview

It is quite common introducing NFT gateway to create a closed access channel or give a certain role to community members only owning a certain NFT on Discord server.

zk-discord-NFT-gateway allows users to pass the NFT gateway in discord server without revealing their wallet address.

Demo Video

## Competitors

Collab.land

https://collab.land/

Popular bot service to integrate token-gate into Discord or Telegram. But issue is community members must reveal their wallet address to Discord Inc and the server owner.

### The project has four main folders within root directory:

-   contracts/
-   discordbot/
-   frontend/
-   relay/

#### contracts

The contracts folder contains MockERC721 and ZkGateway contracts.

#### discordbot

The discordbot folder contains codes defining bot behaivior written in Javascript

#### frontend

The Frontend folder contains frontend files built with React.js and chakra-ui.

#### relay

The relay folder contains Backend API built with Express.js so that users can join group anonymously

## Start the app

1. In discordbot and relay directory, copy the .env.example file as .env.
   `cp .env.example .env`
   and add your environment variables.

2. Run the following commands sequentially in three separate tabs of the terminal:

`cd discordbot && yarn start`

`cd frontend && yarn start`

`cd relay && yarn start`

## Steps

**Server Owner**

1. Invite discord bot to your server. \*bot needs MANAGE_ROLES permission on your server.
2. Register role you give through zk-discord-NFT-gateway
3. Type /setup and pass NFT contract address and role ID as parameters.
   (In background, the bot creates Semaphore group for your server.)

**Users**

1. Type /verify
2. Access URL the bot sent to you.
3. Connect Wallet.
4. Sign message and generate Semaphore Identity.
5. Click "Claim Role"(generate and verify zk proof)
6. Go back to discord server and check the discord role is given.

## Deployed Contracts

Harmony Devnet
| Contract | Address |
| ----------- | ----------- |
| ZkGateway | 0x6E9355354c162252E473CFf3e5902603883d93A5 |
| Verifier20 | 0x873c4bf04E3569bba917b85Bf3fE930DEaF87eAF |
| MockERC721 | 0x4B7099FD879435a087C364aD2f9E7B3f94d20bBe |

## Screenshots

Setup
![setup](https://raw.githubusercontent.com/junta/zk-discord-gateway/b5257cba2d8fb96cbdd6e376742595707774dd05/screenshots/discord-setup.png)

Setup done
![setup-done](https://raw.githubusercontent.com/junta/zk-discord-gateway/b5257cba2d8fb96cbdd6e376742595707774dd05/screenshots/discord-setup-done.png)

Frontend
![setup-done](https://raw.githubusercontent.com/junta/zk-discord-gateway/b5257cba2d8fb96cbdd6e376742595707774dd05/screenshots/frontend.png)
