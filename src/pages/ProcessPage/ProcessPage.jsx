import { useNavigate } from "react-router-dom";
import { MainProcess } from "../../components/MainProcess/MainModal";
import { WorldMap } from "../../components/WorldMap/WorldMap";
import { useState } from "react";
// import { Nav } from "../../components/Nav/Nav";

export const ProcessPage = () => {
    const [stepCounter, setStepCounter] = useState(0);

    const handleStepChange = () => {
        setStepCounter(stepCounter + 1);
    };

    const steps = [
        { title: "What kind of work do you do?", content: "", value: "" },
        {
            title: "Where are you doing business??",
            content: <WorldMap />,
            value: "",
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
