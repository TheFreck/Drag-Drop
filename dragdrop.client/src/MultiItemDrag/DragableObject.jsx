import { useEffect, useState } from "react";
import { useDrag } from "react-dnd";

const style={}

export const DragableObject = ({ name, type, children }) => {
    const [dropResult, setDropResult] = useState("");

    const [{ opacity }, drag] = useDrag(
        () => ({
            type,
            item: { type },
            end(item, monitor) {
                setDropResult(monitor.getDropResult());
            },
            collect: monitor => ({
                opacity: monitor.isDragging() ? .4 : 1
            })
        }),
        [name]
    );
    
    return (
        <div
            ref={drag}
            style={{
                ...style,
                opacity
            }}
        >
            {children}
        </div>
    )
}