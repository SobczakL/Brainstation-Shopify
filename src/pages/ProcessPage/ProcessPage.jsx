import { useNavigate } from "react-router-dom";
import { MainProcess } from "../../components/MainProcess/MainProcess";
import { WorldMap } from "../../components/WorldMap/WorldMap";
import { useState } from "react";
// import { Nav } from "../../components/Nav/Nav";

export const ProcessPage = () => {
    const [stepCounter, setStepCounter] = useState(0);

    const handleStepChange = () => {
        setStepCounter(stepCounter + 1);
    };

    const [stepValues, setStepValues] = useState({
        step1: '',
        step2: '',
        step3: '',
        step4: '',
        step5: '',
    })

    //when steps[stepCounter].content receives a value, update stepValues for chatBox
    const handleStepValueChange = (updatedValue) => {
        setStepValues((prevStepValues) => ({
            ...prevStepValues,
            [steps[stepCounter].key]: updatedValue,
        }));
        console.log(stepValues)
    }

    const steps = [
        { 
            key: 'step1',
            title: "What kind of work do you do?", 
            content: "", 
        },
        {   
            key: 'step2',
            title: "Where are you doing business?",
            content: <WorldMap handleStepValueChange={handleStepValueChange}/>,
        },
    ];

    return (
        <MainProcess
            stepCounter={stepCounter}
            handleStepChange={handleStepChange}
            stepContent={steps[stepCounter]}
        />
    );
};
