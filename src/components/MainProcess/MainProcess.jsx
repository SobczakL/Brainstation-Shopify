import { HorizontalStack, Button, ButtonGroup, Layout, LegacyCard, Page, Text, Divider, VerticalStack, } from "@shopify/polaris";
import { StepperContainer } from "../StepperContainer/StepperContainer";
import { useNavigate } from "react-router-dom";

export const MainProcess = ({ stepCounter, handleStepChange, stepContent }) => {

    const navigate = useNavigate()

    const handleSkip = () => {
        navigate('/themes')
    }

    return (
        <Page narrowWidth>
            <Layout>
                <Layout.Section>
                    <LegacyCard
                    title={
                        <VerticalStack gap="3">
                            <StepperContainer stepCounter={stepCounter} />
                            <Text variant='headingLg'>{stepContent.title}</Text>
                        </VerticalStack>
                    }
                    secondaryFooterActions={[{
                        content: 'Skip',
                        onAction: handleSkip
                    }]}
                    primaryFooterAction={{
                        content: 'Continue',
                        onAction: handleStepChange
                    }}
                    >
                        <div style={{marginTop:'16px'}}>
                            <Divider /> 
                        </div>
                        <LegacyCard.Section>
                            {stepContent.content}
                        </LegacyCard.Section>
                        <div style={{marginBottom:'16px'}}>
                            <Divider /> 
                        </div>
                    </LegacyCard>  
                </Layout.Section>
            </Layout> 
        </Page>
    );

};
