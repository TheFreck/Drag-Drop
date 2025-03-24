import React, { memo } from "react";
import { DragPreviewImage, useDrag } from "react-dnd";
import { Box } from "@mui/material";
import { useState } from "react";

export const Nose = memo(function Nose({scale, color, preview}) {
    const [bridge, setBridge] = useState([50,0]);
    const [rightBridge, setRightBridge] = useState([65,5]);
    const [rightCrease, setRightCrease] = useState([60,65]);
    const [rightNostril, setRightNostril] = useState([80,80]);
    const [rightNostrilBottom, setRightNostrilBottom] = useState([60,80]);
    
    const [leftBridge, setLeftBridge] = useState([35,5]);
    const [leftCrease, setLeftCrease] = useState([40,65]);
    const [leftNostril, setLeftNostril] = useState([20,80]);
    const [leftNostrilBottom, setLeftNostrilBottom] = useState([40,80]);
    const [septum, setSeptum] = useState([50,100]);

    return <div
        style={{
            opacity: preview ? .5 : 1,
            cursor: "move",
            width: "20vw",
        }}
    >
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
        >
            <path 
                d={`M ${bridge[0]} ${bridge[1]} Q
                    ${rightBridge[0]} ${rightBridge[1]}, 
                    ${rightCrease[0]} ${rightCrease[1]},
                    ${rightNostril[0]} ${rightNostril[1]}, 
                    ${rightNostrilBottom[0]} ${rightNostrilBottom[1]},
                    ${septum[0]} ${septum[1]}, 
                    ${leftNostrilBottom[0]} ${leftNostrilBottom[1]},
                    ${leftNostril[0]} ${leftNostril[1]}, 
                    ${leftCrease[0]} ${leftCrease[1]},
                    ${leftBridge[0]} ${leftBridge[1]}, 
                    ${bridge[0]} ${bridge[1]}}`}
                stroke="black" 
                fill={color}
            />
        </svg>
    </div>
});

export default Nose;