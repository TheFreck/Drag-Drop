import { useMemo } from 'react'
import { Game } from '../PlaneGame'
import { Board } from '../Board/Board'
import { Container } from '@mui/material'

export const PlaneLanding = () => {
  const game = useMemo(() => new Game(), []);
  
  return (
    <Container>
      <Board game={game} />
    </Container>
  )
}

export default PlaneLanding;