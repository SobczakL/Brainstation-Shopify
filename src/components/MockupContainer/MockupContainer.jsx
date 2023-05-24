import { HorizontalStack, LegacyCard, Text, VerticalStack, Box, Badge, ButtonGroup, Button } from "@shopify/polaris"
import { HorizontalDotsMinor } from '@shopify/polaris-icons';

export const MockupContainer = () => {
    return(
        <LegacyCard>
            <LegacyCard.Section>
                <img src={''} alt=""/>
            </LegacyCard.Section>
            <LegacyCard.Section>
                <HorizontalStack align="space-between">
                    <HorizontalStack wrap={false}>
                        <img src={''} alt=''/>
                        <VerticalStack gap='2'>
                            <HorizontalStack align='start' gap='3'>
                                <Text variant='headingSm'>Dawn</Text>
                                <Badge status="success">Current Theme</Badge>
                            </HorizontalStack>
                            <Text>Added: Thursday at 10:25pm</Text>
                            <Text>Dawn version 9.0.0</Text>
                        </VerticalStack>
                    </HorizontalStack>
                    <ButtonGroup>
                        <Button icon={HorizontalDotsMinor}></Button>
                        <Button primary>Customize</Button>
                    </ButtonGroup>
                </HorizontalStack>
            </LegacyCard.Section>
        </LegacyCard>
    )
}