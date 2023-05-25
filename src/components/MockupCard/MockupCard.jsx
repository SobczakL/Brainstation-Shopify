import {
    HorizontalStack,
    LegacyCard,
    Text,
    VerticalStack,
    Badge,
    ButtonGroup,
    Button,
} from "@shopify/polaris";
import { HorizontalDotsMinor } from "@shopify/polaris-icons";
import { MockupContainer } from "../MockupContainer/MockupContainer";
import mockup from "../../assets/images/Sample Site Image.png";

export const MockupCard = () => {
    return (
        <LegacyCard>
            <LegacyCard.Section>
                <MockupContainer />
            </LegacyCard.Section>
            <LegacyCard.Section>
                <HorizontalStack align="space-between">
                    <HorizontalStack wrap={false} gap="2">
                        <img
                            src={mockup}
                            alt="mockup"
                            style={{
                                maxWidth: "100px",
                            }}
                        />
                        <VerticalStack gap="2">
                            <HorizontalStack align="start" gap="3">
                                <Text variant="headingSm">Dawn</Text>
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
    );
};
