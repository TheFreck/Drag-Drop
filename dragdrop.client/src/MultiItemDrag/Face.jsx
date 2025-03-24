

export const Face = ({x,y,height,width,children}) => {
    return <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
    >
        <ellipse
            cx={x}
            cy={y}
            rx={width}
            ry={height}
            stroke="black"
            fill="transparent"
        />
        {children}
    </svg>
}

export default Face;