import { Text } from '@shopify/polaris';
import { StepperPill } from '../StepperPill/StepperPill';

export const StepperContainer = ({ stepCounter }) => {
    const currentStep = stepCounter + 1;

    let stepStepper = [];
    for (let i = 0; i < 6; i++) {
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
            <Text variant="bodyMd">{ stepCounter < 5 ? `${currentStep} of 5` : 'Done'}</Text>
        </div>
    );
};
