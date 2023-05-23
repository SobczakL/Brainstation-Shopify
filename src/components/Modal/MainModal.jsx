import { Button, Modal, TextContainer } from "@shopify/polaris";
import { useState, useCallback } from "react";
import { StepperContainer } from "../StepperContainer/StepperContainer";

export const MainModal = ({stepCounter, handleStepChange, stepContent}) => {

    const [active, setActive] = useState(true);

    const handleChange = useCallback(() => setActive(!active), [active]);

    const activator = <Button onClick={handleChange}>Open</Button>;

    return (
        <div style={{ height: "500px" }}>
            <Modal
                activator={activator}
                open={active}
                onClose={handleChange}
                title={
                    <div
                    display='flex'
                    gap='8px'
                    >
                        <StepperContainer stepCounter={stepCounter}/>
                        {stepContent.title}
                    </div>
                }
                primaryAction={{
                    content: "Continue",
                    onAction: handleStepChange,
                }}
                secondaryActions={[
                    {
                        content: "Skip",
                        onAction: handleChange,
                    },
                ]}
            >
                <Modal.Section>
                    {stepContent.content}
                </Modal.Section>
                
            </Modal>
        </div>
    );
}
