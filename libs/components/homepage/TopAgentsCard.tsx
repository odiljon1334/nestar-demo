import { Box, Stack } from "@mui/material"


const TopAgentsCard = () => {
    return (
        <Stack className={"top-agent-card"}>
                <img src="/img/profile/girl.svg" alt="" />
                <strong>Martin</strong>
                <span>Agent</span>
        </Stack>
    )
}

export default TopAgentsCard;