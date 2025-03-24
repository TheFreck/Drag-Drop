import update from 'react-addons-update';
import { useCallback, useState } from 'react';
import { useDrop } from 'react-dnd';
import { snapToGrid as doSnapToGrid } from './snapToGrid.js';
import { DraggableFeature } from './DragableFeature.jsx';
import { ItemTypes } from '../ItemTypes.js';
import Face from './Face.jsx';
import Eye from './Eye.jsx';
import Nose from './Nose.jsx';

export const Housing = ({ snapToGrid }) => {
  const [features, setFeatures] = useState({
    a: { top: -800, left: 20, title: 'Left', color: "blue", type: ItemTypes.EYE },
    b: { top: -700, left: 20, title: 'Right', color: "green", type: ItemTypes.EYE },
    c: { top: -600, left: 20, title: "Nose", color: "pink", type: ItemTypes.NOSE }
  });

  const moveFeature = useCallback(
    (id, left, top) => {
      setFeatures(
        update(features, {
          [id]: {
            $merge: { left, top },
          },
        }),
      )
    },
    [features],
  );

  const [, drop] = useDrop(
    () => ({
      accept: ItemTypes.FEATURE,
      drop(item, monitor) {
        const delta = monitor.getDifferenceFromInitialOffset()
        let left = Math.round(item.left + delta.x)
        let top = Math.round(item.top + delta.y)
        if (snapToGrid) {
          [left, top] = doSnapToGrid(left, top);
        }
        moveFeature(item.id, left, top)
      },
    }),
    [moveFeature],
  );

  return (
    <div 
      ref={drop}
      style={{
        width: 800,
        height: 800,
        border: '1px solid red',
        position: 'absolute',
      }}
    >
      <Face
        height={50}
        width={30}
        x={50}
        y={50}
      />
        {Object.keys(features).map((key) => (
          <DraggableFeature key={key} id={key} {...features[key]} >
            {
              features[key].type === ItemTypes.EYE &&
              <Eye
                title={features[key].title}
                color={features[key].color}
              />
            }
            {
              features[key].type === ItemTypes.NOSE &&
              <Nose
                title={features[key].title}
                color={features[key].color}
              />
            }
          </DraggableFeature>
        ))}
    </div>
  );
}
