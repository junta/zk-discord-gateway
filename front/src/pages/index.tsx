import { NextPage } from "next"
import { Backdrop, CircularProgress, Container, Divider, Box, Typography, Grid } from "@mui/material"
import { BrowserRouter as Router, Link, useLocation } from "react-router-dom"
import "dotenv/config"
import { useEffect, useState, useMemo } from "react"
// import { Identity } from "@semaphore-protocol/identity"
// import { Contract, providers, Signer } from "ethers"

const Home: NextPage = () => {
    function useQuery() {
        const { search } = useLocation()

        return useMemo(() => new URLSearchParams(search), [search])
    }

    let query = useQuery()

    useEffect(() => {
        ;(async () => {
            const userId = query.get("userId")
            console.log(userId)
        })()
    }, [])

    return (
        <>
            <Container>
                <Grid container direction="column" justifyContent="center" alignItems="center" spacing={2}>
                    <Grid item>
                        <Box marginBottom={4}>
                            <Typography
                                variant="h4"
                                align={"center"}
                                gutterBottom
                                sx={{
                                    fontWeight: 700
                                }}
                            >
                                Verify your NFT token holding
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}

export default Home
