import { useDrop } from "react-dnd";
import { ItemTypes } from "../ItemTypes";
import { memo, useEffect, useState } from "react";

const selectBackgroundColor = (isActive,canDrop) => {
    if(isActive) {
        return "darkgreen";
    }
    else if(canDrop) {
        return "darkkhaki";
    }
    else {
        return "transparent";
    }
};

const style = {
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
};

export const DropableZone = memo(({ type, setHasItem, width, height, children }) => {
    const [hasDropped, setHasDropped] = useState(false);
    const [{ canDrop, isOver }, drop] = useDrop(
        () => ({
            accept: type,
            drop: (_item, monitor) => {
                setHasDropped(true);
                setHasItem(true);
            },
            collect: monitor => ({
                isOver: monitor.isOver(),
                canDrop: monitor.canDrop(),
            })
        }),
        [type]
    );
    const isActive = canDrop && isOver;
    const backgroundColor = selectBackgroundColor(isActive,canDrop);

    useEffect(() => {
        console.log("hasDropped: ", hasDropped);
    },[hasDropped]);
    useEffect(() => {
        console.log("canDrop: ", canDrop);
    },[canDrop]);
    useEffect(() => {
        console.log("isOver: ", isOver);
    },[isOver]);

    return (
        <div
            ref={drop}
            role="dropZone"
            style={{
                ...style, backgroundColor, width, height
            }}
        >
            {hasDropped && children}
        </div>
    );
});

export default DropableZone;