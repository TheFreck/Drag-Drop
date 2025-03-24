import React from 'react';
import DnDContext from './DnDContext';
import PlaneLanding from "./Airplane/PlaneLanding/PlaneLanding";
import { Housing } from './MultiItemDrag/Housing';
import Face from './MultiItemDrag/Face';
import { CustomDragLayer } from './MultiItemDrag/CustomDragLayer';
import GeneralHome from './MultiItemDrag/GeneralHome';

export const App = () => {

    return <div
        style={{
            width: "100vw",
            height: "98vh",
            margin: 0,
            padding: 0
        }}
    >
        <DnDContext>
            {/* <PlaneLanding /> */}
            <GeneralHome />
        </DnDContext>
    </div>
}

export default App;