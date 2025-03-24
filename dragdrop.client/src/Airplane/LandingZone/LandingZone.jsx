import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDrop } from "react-dnd";
import { ItemTypes } from "../../ItemTypes";
import Runway from "../Runway/Runway";

export const LandingZone = ({ x, y, children, game }) => {
    const [{ isOver, canDrop }, drop] = useDrop(
        () => ({
        accept: ItemTypes.PLANE,
        canDrop: () => game.canMovePlane(ItemTypes.PLANE),
        drop: () => game.movePlane(x, y),
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
            canDrop: !!monitor.canDrop(),
        }),
        }),
        [game],
    );

    return <Box
        ref={drop}
        role="landing"
        sx={{
            width: "0",
            height: "0",
            position: "absolute",
            left: `${x}vw`,
            top: `${y}vh`,
            border: "none",
        }}
    >
        {children}
    </Box>
};

export default LandingZone;