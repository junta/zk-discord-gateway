# zk-discord-NFT-gateway

## Overview

It is quite common introducing NFT gateway to create a closed access channel or give a certain role to community members only owning a certain NFT on Discord server.

zk-discord-NFT-gateway allows users to pass the NFT gateway in discord server without revealing their wallet address.

Demo Video
https://youtu.be/lWkFDORzidw

## Competitors

Collab.land

https://collab.land/

Popular bot service to integrate token-gate into Discord or Telegram. But issue is community members must reveal their wallet address to Discord Inc and the server owner.

## Folder structure

The project has four main folders within root directory:

-   contracts/
-   discordbot/
-   frontend/
-   relay/

#### contracts

The contracts folder contains MockERC721 and ZkGateway(inheriting SemaphoreCore and SemaphoreGroups) contracts.

#### discordbot

The discordbot folder contains codes defining bot behavior written in Javascript/discordjs

#### frontend

The Frontend folder contains frontend files built with React.js and chakra-ui.

#### relay

The relay folder contains Backend API built with Express.js so that users can join Semaphore group anonymously.

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
   https://discord.com/oauth2/authorize?client_id=1007172504059646003&permissions=268435456&scope=bot%20applications.commands

2. Register role you give through zk-discord-NFT-gateway

-   Make sure zk-gateway role has higher permission than the role you give to community members. By default, zk-gateway role will start with lower permissions than needed. To fix this, drag and drop your bots role above the roles you're trying to give on the Server Settings > Roles.
    ![role-setting](https://raw.githubusercontent.com/junta/zk-discord-gateway/main/screenshots/role-setting.png)

-   To get role ID: https://ozonprice.com/blog/discord-get-role-id/

3. Type /setup and pass NFT contract address and role ID as parameters.
   (In the background, the bot creates Semaphore group for your discord server.)

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
| ZkGateway | 0x19b1b1FeDBA133523Aa826Ec62bda6435B14D9Fb |
| Verifier20 | 0x873c4bf04E3569bba917b85Bf3fE930DEaF87eAF |
| MockERC721 | 0x4B7099FD879435a087C364aD2f9E7B3f94d20bBe |

## Screenshots

Setup command
![setup](https://raw.githubusercontent.com/junta/zk-discord-gateway/main/screenshots/discord-setup.png)

Done setup
![setup-done](https://raw.githubusercontent.com/junta/zk-discord-gateway/main/screenshots/discord-setup-done.png)

Verify command
![verify](https://raw.githubusercontent.com/junta/zk-discord-gateway/main/screenshots/discord-verify.png)

Frontend

![frontend](https://raw.githubusercontent.com/junta/zk-discord-gateway/main/screenshots/frontend.png)
