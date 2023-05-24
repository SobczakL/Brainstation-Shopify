import { Layout, LegacyCard, Page, VerticalStack, EmptyState, } from "@shopify/polaris";
import { StepperContainer } from "../StepperContainer/StepperContainer";
import { useNavigate } from "react-router-dom";
import emptyState from '../../assets/images/emptystate-2.png'

export const ConfirmationProcess = ({ stepCounter }) => {

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
                        </VerticalStack>
                    }
                    >
                        <EmptyState
                        heading='All done!'
                        image={emptyState}
                        action={{
                            content: 'Continue to Online Store',
                            onAction: handleSkip
                        }}
                        >
                            <p>Congratulations on setting up your online store! You got started with the foundations, next steps and further work can be done on the Online Store page.</p>
                        </EmptyState>
                    </LegacyCard>  
                </Layout.Section>
            </Layout> 
        </Page>
    );

};
