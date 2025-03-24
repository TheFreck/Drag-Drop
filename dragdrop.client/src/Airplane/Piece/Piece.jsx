import { Plane } from "../Plane/Plane";

export const Piece = ({ isPlane }) => (isPlane ? <Plane /> : null);
