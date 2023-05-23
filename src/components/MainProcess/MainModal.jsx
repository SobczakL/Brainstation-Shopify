import { HorizontalStack, Button, ButtonGroup, Layout, LegacyCard, Page, Text, } from "@shopify/polaris";
import { StepperContainer } from "../StepperContainer/StepperContainer";

export const MainProcess   = ({ stepCounter, handleStepChange, stepContent }) => {

    const handleSkip = () => {

    }

    return (
        <Page narrowWidth>
            <Layout>
                <Layout.Section>
                <LegacyCard
                title={
                    <div display="flex" gap="8px">
                        <StepperContainer stepCounter={stepCounter} />
                        <Text variant='headingLg' >{stepContent.title}</Text>
                    </div>
                }
                >
                    <LegacyCard.Section>
                        {stepContent.content}
                    </LegacyCard.Section>
                    <LegacyCard.Section>
                        <HorizontalStack align='end'>
                        <ButtonGroup>
                            <Button onClick={handleSkip}>Skip</Button>
                            <Button primary onClick={handleStepChange}>Continue</Button>
                        </ButtonGroup>
                        </HorizontalStack>
                    </LegacyCard.Section>
                </LegacyCard>  
                </Layout.Section>
            </Layout> 
        </Page>
    );

};
