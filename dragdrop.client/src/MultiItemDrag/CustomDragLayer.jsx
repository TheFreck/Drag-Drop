import { useDragLayer } from 'react-dnd'
import Eye from './Eye.jsx'
import { snapToGrid } from './snapToGrid.js';
import { BoxDragPreview } from './BoxDragPreview.jsx';
import { ItemTypes } from '../ItemTypes.js';

const layerStyles = {
  position: 'fixed',
  pointerEvents: 'none',
  zIndex: 100,
  left: 0,
  top: 0,
  width: '100%',
  height: '100%',
}

function getItemStyles(initialOffset, currentOffset, isSnapToGrid) {
  if (!initialOffset || !currentOffset) {
    return {
      display: 'none',
    }
  }

  let { x, y } = currentOffset;

  if (isSnapToGrid) {
    x -= initialOffset.x
    y -= initialOffset.y
      ;[x, y] = snapToGrid(x, y)
    x += initialOffset.x
    y += initialOffset.y
  }

  const transform = `translate(${x}px, ${y}px)`;

  return {
    transform,
    WebkitTransform: transform,
  }
}
export const CustomDragLayer = (props) => {
  const { itemType, isDragging, item, initialOffset, currentOffset } =
    useDragLayer((monitor) => ({
      item: monitor.getItem(),
      itemType: monitor.getItemType(),
      initialOffset: monitor.getInitialSourceClientOffset(),
      currentOffset: monitor.getSourceClientOffset(),
      isDragging: monitor.isDragging(),
    }))
  function renderItem() {
    switch (itemType) {
      case ItemTypes.EYE:
        return <BoxDragPreview title={item.title} ><Eye /></BoxDragPreview>
      default:
        return null
    }
  }
  if (!isDragging) {
    return null
  }
  return (
    <div style={layerStyles}>
      <div
        style={getItemStyles(initialOffset, currentOffset, props.snapToGrid)}
      >
        {renderItem()}
      </div>
    </div>
  )
}
