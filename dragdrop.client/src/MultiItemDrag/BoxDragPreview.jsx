import { memo, useEffect, useState } from 'react';
import Eye from './Eye';
const styles = {
  display: 'inline-block',
  transform: 'rotate(-45deg)',
  WebkitTransform: 'rotate(-45deg)',
}
export const BoxDragPreview = memo(function BoxDragPreview({ title, color }) {
  const [tickTock, setTickTock] = useState(false);

  useEffect(() => {
      const interval = setInterval(() => setTickTock(!tickTock), 500)
      return () => clearInterval(interval)
    },
    [tickTock],
  )
  return (
    <div style={styles}>
      <Eye title={title} color={color} preview />
    </div>
  )
})
