import { DragPreviewImage, useDrag } from 'react-dnd'
import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import { ItemTypes } from '../../ItemTypes';
import { Box, Container } from '@mui/material';

const planeStyle = {
  fontWeight: 'bold',
  cursor: 'move',
  color: "red",
}

export const Plane = () => {
  const [{ isDragging }, drag, preview] = useDrag(
    () => ({
      type: ItemTypes.PLANE,
      collect: (monitor) => ({
        isDragging: !!monitor.isDragging(),
      }),
    }),
    [],
  );

  return (
    <>
      <DragPreviewImage connect={preview} src={<FlightTakeoffIcon />} />
      <Box
        ref={drag}
        sx={{
          ...planeStyle,
          opacity: isDragging ? 0.5 : 1,
        }}
      >
        <AirplanemodeActiveIcon />
      </Box>
    </>
  )
}

export default Plane;