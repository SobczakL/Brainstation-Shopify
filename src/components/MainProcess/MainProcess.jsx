import {
    Layout,
    LegacyCard,
    Page,
    Text,
    Divider,
    VerticalStack,
} from "@shopify/polaris";
import { StepperContainer } from "../StepperContainer/StepperContainer";

export const MainProcess = ({
    stepCounter,
    handleStepChange,
    stepContent,
    skipSteps,
}) => {
    const handleSkip = () => {
        skipSteps();
    };

    return (
        <Page narrowWidth>
            <Layout>
                <Layout.Section>
                    <LegacyCard
                        title={
                            <VerticalStack gap="3">
                                <StepperContainer stepCounter={stepCounter} />
                                <Text variant="headingLg">
                                    {stepContent.title}
                                </Text>
                            </VerticalStack>
                        }
                        secondaryFooterActions={[
                            {
                                content: "Skip",
                                onAction: handleSkip,
                            },
                        ]}
                        primaryFooterAction={{
                            content: stepCounter < 5 ? "Continue" : "Finish",
                            onAction: handleStepChange,
                        }}
                    >
                        <div style={{ marginTop: "16px" }}>
                            <Divider />
                        </div>
                        <LegacyCard.Section>
                            {stepContent.content}
                        </LegacyCard.Section>
                        <div style={{ marginBottom: "16px" }}>
                            <Divider />
                        </div>
                    </LegacyCard>
                </Layout.Section>
            </Layout>
        </Page>
    );
};
