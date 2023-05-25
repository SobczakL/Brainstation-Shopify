import {LegacyCard, EmptyState, Page} from '@shopify/polaris';
import emptyState from '../../assets/images/emptystate.png'

export const DashboardContent = ({handleContinueClick}) => {
    return(
        <Page>
            <LegacyCard sectioned>
            <EmptyState
            heading="Welcome to Shopify!"
            action={{
                content: 'Continue',
                onAction: handleContinueClick
            }}
            image={emptyState}
            >
                <p>Set up your online store with the help of our chatbot, Ada</p>
            </EmptyState>
        </LegacyCard> 
        </Page>
    )   
}