import { HorizontalStack, LegacyCard, Text, VerticalStack, Banner, Badge, ButtonGroup, Button } from "@shopify/polaris"
import { HorizontalDotsMinor, LockMajor } from '@shopify/polaris-icons';
import mockup from '../../assets/images/mockup.png'

export const MockupContainer = () => {
    return(
        <LegacyCard>
            <LegacyCard.Section>
                <img src={mockup} alt="" style={{width:'100%'}}/>
            </LegacyCard.Section>
            <LegacyCard.Section>
                <Banner
                status='warning'
                icon={LockMajor}
                >
                    <Text variant='bodysm' as='p'>Your online store is password protected.</Text>
                    <ButtonGroup>
                        <Button plain monochrome>Manage Password</Button>
                        <Button outline>Remove Password</Button>
                    </ButtonGroup>
                </Banner>
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