import { useNavigate } from "react-router-dom";
import { MainProcess } from "../../components/MainProcess/MainProcess";
import { WorldMap } from "../../components/WorldMap/WorldMap";
import { Page, FooterHelp, Link } from "@shopify/polaris";
import { useState } from "react";
import { ColorPalette } from "../../components/ColorPalette/ColorPalette";
import { ConfirmationProcess } from "../../components/ConfirmationProcess/ConfirmationProcess";
import ChooseTheme from "../../components/ChooseTheme/ChooseTheme";

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
            content: <ChooseTheme handleStepValueChange={props.handleStepValueChange}/>,
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
        <Page>
            {props.stepCounter < 5 ? (
                <MainProcess
                stepCounter={props.stepCounter}
                handleStepChange={props.handleStepChange}
                stepContent={steps[props.stepCounter]}
                />
            ) : (
                <ConfirmationProcess
                stepCounter={props.stepCounter}
                />
            )}
            <FooterHelp>
                Learn more about{' '}
                <Link url="https://help.shopify.com/manual/orders/fulfill-orders">
                    Shopify
                </Link>
            </FooterHelp>
        </Page>
    );
};
