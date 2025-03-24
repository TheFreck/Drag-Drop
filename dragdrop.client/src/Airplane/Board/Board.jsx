import { useEffect, useState } from 'react'
import { Piece } from '../Piece/Piece'
import { Container } from '@mui/material'
import Runway from '../Runway/Runway'
import LandingZone from "../LandingZone/LandingZone";

export const Board = ({ game }) => {
    const [[planeX, planeY], setPlanePos] = useState(game.planePosition);
    useEffect(() => game.observe(setPlanePos));

    return <Container>
        <LandingZone
            x={25}
            y={25}
            game={game}
        >
            <Runway>
                <Piece location={"takeoff"} isPlane={planeX === 25 && planeY === 25} />
            </Runway>
        </LandingZone>
        <LandingZone
            x={25}
            y={50}
            game={game}
        >
            <Runway>
                <Piece location={"landing"} isPlane={planeX === 25 && planeY === 50} />
            </Runway>
        </LandingZone>
    </Container>
}