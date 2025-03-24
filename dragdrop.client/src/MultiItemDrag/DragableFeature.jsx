import { memo, useEffect } from 'react'
import { useDrag } from 'react-dnd'
import { getEmptyImage } from 'react-dnd-html5-backend'
import { ItemTypes } from '../ItemTypes.js';

function getStyles(left, top, isDragging) {
  const transform = `translate3d(${left}px, ${top}px, 0)`

  return {
    position: 'absolute',
    transform,
    WebkitTransform: transform,
    opacity: isDragging ? 0 : 1,
    height: isDragging ? 0 : '',
  }
}

export const DraggableFeature = memo((props) => {
  const { id, title, left, top, type, children } = props
  const [{ isDragging }, drag, preview] = useDrag(
    () => ({
      type: ItemTypes.FEATURE,
      item: { id, left, top, title },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
    }),
    [id, left, top, title],
  );

  useEffect(() => {
    preview(getEmptyImage(), { captureDraggingState: true })
  }, []);

  return (
    <div
      ref={drag}
      style={getStyles(left, top, isDragging)}
      role="DraggableFeature"
    >
      {children}
    </div>
  )
});

export default DraggableFeature;