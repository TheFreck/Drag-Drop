import { Box } from "@mui/material";
import React from "react";

export const Runway = ({ children }) => {

    return <Box
        sx={{
            width: "20vw",
            height: "5vw",
            background: "gray",
            border: "solid",
            padding: 0,
            margin: 0,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center"
        }}
    >
        {children}
    </Box>
};

export default Runway;