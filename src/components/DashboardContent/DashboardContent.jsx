import {LegacyCard, EmptyState} from '@shopify/polaris';
import emptyState from '../../assets/images/emptystate.png'

export const DashboardContent = ({handleContinueClick}) => {
    return(
        <LegacyCard sectioned>
            <EmptyState
            heading="Welcome to Shopify!"
            action={{
                content: 'Continue',
                onAction: handleContinueClick
            }}
            image={emptyState}
            >
                <p>Let's create your first website together with our Shopify Bot</p>
            </EmptyState>
        </LegacyCard>
    )   
}