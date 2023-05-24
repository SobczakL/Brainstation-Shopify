import { useNavigate } from "react-router-dom";
import { MainProcess } from "../../components/MainProcess/MainProcess";
import { WorldMap } from "../../components/WorldMap/WorldMap";
import { useState } from "react";
import { ColorPalette } from "../../components/ColorPalette/ColorPalette";
// import { Nav } from "../../components/Nav/Nav";

export const ProcessPage = (props) => {
    // const [stepCounter, setStepCounter] = useState(0);

    // const handleStepChange = () => {
    //     setStepCounter(stepCounter + 1);
    // };

    // const [stepValues, setStepValues] = useState(new Array(5).fill(''))

    // //when steps[stepCounter].content receives a value, update stepValues for chatBox
    // const handleStepValueChange = (updatedValue) => {
    //     setStepValues((prevStepValues) => ({
    //         ...prevStepValues,
    //         [stepValues[stepCounter].key]: updatedValue,
    //     }));
    // }

    const steps = [
        { 
            key: 'step1',
            title: "What kind of work do you do?", 
            content: "", 
        },
        {   
            key: 'step2',
            title: "Where are you doing business?",
            content: <WorldMap handleStepValueChange={props.handleStepValueChange}/>,
        },
        {   
            key: 'step3',
            title: "Choose your theme",
            content: '',
        },
        {   
            key: 'step4',
            title: "Color palette",
            content: <ColorPalette handleStepValueChange={props.handleStepValueChange}/>,
        },
        {   
            key: 'step5',
            title: "Final details",
            content: '',
        },
    ];

    return (
        <MainProcess
            stepCounter={props.stepCounter}
            handleStepChange={props.handleStepChange}
            stepContent={steps[props.stepCounter]}
        />
    );
};
