import { Button, Modal, TextContainer } from "@shopify/polaris";
import { useState, useCallback } from "react";

export const MainModal = ({stepCounter, handleStepChange, stepContent}) => {

    const currentStep = stepCounter + 1

    const [active, setActive] = useState(true);

    const handleChange = useCallback(() => setActive(!active), [active]);

    const activator = <Button onClick={handleChange}>Open</Button>;

    return (
        <div style={{ height: "500px" }}>
            <div>
                {}
            </div>
            <Modal
                activator={activator}
                open={active}
                onClose={handleChange}
                title={stepContent.title}
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
