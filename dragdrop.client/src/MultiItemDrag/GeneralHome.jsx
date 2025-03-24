import { useState } from "react";
import { ItemTypes } from "../ItemTypes";
import { DragableObject } from "./DragableObject";
import DropableZone from "./DropableZone";
import Eye from "./Eye";
import { EyeSocket } from "./EyeSocket";
import Nose from "./Nose";
import { NoseSocket } from "./NoseSocket";


export const GeneralHome = () => {
    const [hasLeftEye, setHasLeftEye] = useState(false);
    const [hasRightEye, setHasRightEye] = useState(false);
    const [hasNose, setHasNose] = useState(false);

    return (
        <div>
            <DragableObject
                type={ItemTypes.EYE}
                name="eye"
            >
                {
                    (!hasLeftEye || !hasRightEye) &&
                    <Eye
                        title="eye"
                        color="green"
                    />
                }
            </DragableObject>
            <DragableObject
                type={ItemTypes.NOSE}
                name="nose"
            >
                {
                    !hasNose &&
                    <Nose
                        title="nose"
                        color="pink"
                    />
                }
            </DragableObject>
            <div
                role="leftEye"
            >
                <EyeSocket 
                    hasItem={hasLeftEye}
                    top="10vw"
                    left="20vw"
                >
                    <DropableZone
                        type={ItemTypes.EYE}
                        setHasItem={setHasLeftEye}
                        width="10vw"
                        height="10vh"
                    >
                        <DragableObject
                            type={ItemTypes.EYE}
                            name="eye"
                        >
                            <Eye
                                title="leftEye"
                                color="green"
                            />
                        </DragableObject>
                            
                    </DropableZone>
                </EyeSocket>
            </div>
            <div
                role="rightEye"
            >
                <EyeSocket 
                    hasItem={hasRightEye}
                    top="10vw"
                    left="40vw"
                >
                    <DropableZone
                        type={ItemTypes.EYE}
                        setHasItem={setHasRightEye}
                        width="10vw"
                        height="10vh"
                    >
                        <Eye
                            title="rightEye"
                            color="green"
                        />
                    </DropableZone>
                </EyeSocket>
            </div>
            <div
                role="nose"
            >
                <NoseSocket
                    hasItem={hasNose}
                    top="10vw"
                    left="25vw"
                >
                    <DropableZone
                        type={ItemTypes.NOSE}
                        setHasItem={setHasNose}
                        width="20vw"
                        height="20vw"
                    >
                        <Nose
                            color="pink"
                        />
                    </DropableZone>
                </NoseSocket>
            </div>
        </div>
    );
}

export default GeneralHome;