import { Text } from "@shopify/polaris";
import { StepperPill } from "../StepperPill/StepperPill";

export const StepperContainer = ({ stepCounter }) => {
    const currentStep = stepCounter + 1;

    const stepStepper = [
        [
            <StepperPill backgroundColor={true} />,
            <StepperPill />,
            <StepperPill />,
            <StepperPill />,
            <StepperPill />,
        ],
        [
            <StepperPill backgroundColor={true} />,
            <StepperPill backgroundColor={true} />,
            <StepperPill />,
            <StepperPill />,
            <StepperPill />,
        ],
        [
            <StepperPill backgroundColor={true}/>,
            <StepperPill backgroundColor={true}/>,
            <StepperPill backgroundColor={true}/>,
            <StepperPill />,
            <StepperPill />,
        ],
        [
            <StepperPill backgroundColor={true}/>,
            <StepperPill backgroundColor={true}/>,
            <StepperPill backgroundColor={true}/>,
            <StepperPill backgroundColor={true}/>,
            <StepperPill />,
        ],
        [
            <StepperPill backgroundColor={true}/>,
            <StepperPill backgroundColor={true}/>,
            <StepperPill backgroundColor={true}/>,
            <StepperPill backgroundColor={true}/>,
            <StepperPill backgroundColor={true}/>,
        ],
    ];

    return (
        <div
        style={{
            display:'flex',
            flexDirection:'column',
            gap:'8px',
        }}
        >
            <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                    width: "100%",
                    gap: "8px",
                }}
            >
                {stepStepper[stepCounter]}
            </div>
            <Text variant="bodyMd">{currentStep} of 5</Text>
        </div>
    );
};
