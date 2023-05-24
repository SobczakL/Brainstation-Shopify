import { Text } from '@shopify/polaris';
import { StepperPill } from '../StepperPill/StepperPill';

export const StepperContainer = ({ stepCounter }) => {
    const currentStep = stepCounter + 1;

    let stepStepper = [];
    for (let i = 0; i < 5; i++) {
        let stepperPill = [];
        for (let j = 0; j < 5; j++) {
            if (j <= i) {
                stepperPill.push(
                    <StepperPill key={i + j} backgroundColor={true} />
                );
            } else {
                stepperPill.push(<StepperPill key={i + j} />);
            }
        }
        stepStepper.push(stepperPill);
    }

    // const stepStepper = [
    //     [
    //         <StepperPill backgroundColor={true} />,
    //         <StepperPill />,
    //         <StepperPill />,
    //         <StepperPill />,
    //         <StepperPill />,
    //     ],
    //     [
    //         <StepperPill backgroundColor={true} />,
    //         <StepperPill backgroundColor={true} />,
    //         <StepperPill />,
    //         <StepperPill />,
    //         <StepperPill />,
    //     ],
    //     [
    //         <StepperPill backgroundColor={true}/>,
    //         <StepperPill backgroundColor={true}/>,
    //         <StepperPill backgroundColor={true}/>,
    //         <StepperPill />,
    //         <StepperPill />,
    //     ],
    //     [
    //         <StepperPill backgroundColor={true}/>,
    //         <StepperPill backgroundColor={true}/>,
    //         <StepperPill backgroundColor={true}/>,
    //         <StepperPill backgroundColor={true}/>,
    //         <StepperPill />,
    //     ],
    //     [
    //         <StepperPill backgroundColor={true}/>,
    //         <StepperPill backgroundColor={true}/>,
    //         <StepperPill backgroundColor={true}/>,
    //         <StepperPill backgroundColor={true}/>,
    //         <StepperPill backgroundColor={true}/>,
    //     ],
    // ];

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',
            }}
        >
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    width: '100%',
                    gap: '8px',
                }}
            >
                {stepStepper[stepCounter]}
            </div>
            <Text variant="bodyMd">{currentStep} of 5</Text>
        </div>
    );
};
