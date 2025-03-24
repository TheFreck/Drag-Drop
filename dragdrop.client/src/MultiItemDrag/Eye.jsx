import React, { memo } from "react";
import { DragPreviewImage, useDrag } from "react-dnd";
import { Box } from "@mui/material";

export const Eye = memo(function Eye({ title, color, preview }) {

    return <Box
        sx={{
            opacity: preview ? .5 : 1,
            cursor: "move",
            background: "transparent",
            width: "10vw",
        }}
    >
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
        >
            <circle
                cx={50}
                cy={50}
                r={20}
                stroke={color}
                fill="black"
                strokeWidth={10}
            />
            <path 
                d="M 10 53 C 30 20, 70 20, 90 53, 70 25, 30 25, 10 53" 
                stroke="black" 
                strokeWidth={5} 
                fill="transparent"
            />
            <path 
                d="M 15 55 C 30 80, 70 80, 85 51, 70 79, 30 79, 15 55"
                stroke="tan"
                strokeWidth={5}
                fill="transparent"
            />
        </svg>

    </Box>;
});

export default Eye;