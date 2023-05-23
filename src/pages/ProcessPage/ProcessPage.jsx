import { useNavigate } from "react-router-dom";
import { MainModal } from "../../components/Modal/MainModal";
import { WorldMap } from "../../components/WorldMap/WorldMap";
import { useState } from "react";
import { StepperPill } from "../../components/StepperPill/StepperPill";
// import { Nav } from "../../components/Nav/Nav";

export const ProcessPage = () => {

    const [stepCounter, setStepCounter] = useState(0)

    const handleStepChange = () => {
        setStepCounter(stepCounter + 1)
    }

    const stepStepper = [
        {stepperPills: [<StepperPill backgroundColor={var(--p-color-bg-success)}/>, <StepperPill />, <StepperPill />, <StepperPill />, <StepperPill />]}
    ]

    const steps = [
        {title: 'What kind of work do you do?', content: '', value: '' },
        {title: 'Where are you doing business??', content: <WorldMap />, value: '' },
    ]

    return <MainModal stepCounter={stepCounter} handleStepChange={handleStepChange} stepContent={steps[stepCounter]}/>;
};
