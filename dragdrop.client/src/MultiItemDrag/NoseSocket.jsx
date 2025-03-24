export const NoseSocket = ({children, hasItem, top, left}) => {
    return (
        <div
            role="nosesocket"
            style={{
                position: "absolute",
                top,
                left,
                border: hasItem ? "none" : "solid",
                background: hasItem ? "transparent" : "darkgray",
                borderRadius: "50%",
            }}
        >
            {children}
        </div>
    )
}