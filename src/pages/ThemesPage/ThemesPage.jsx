import {
    Bleed,
    Button,
    Divider,
    HorizontalStack,
    Icon,
    Layout,
    LegacyCard,
    Page,
    Popover,
    Text,
    VerticalStack,
} from "@shopify/polaris";
import {
    StoreMinor,
    PinMajor,
    HorizontalDotsMinor,
    ViewMinor,
} from "@shopify/polaris-icons";
import { MockupCard } from "../../components/MockupCard/MockupCard";

export const ThemesPage = () => {
    const Placeholder = ({ label = "", height = "auto", width = "auto" }) => {
        return (
            <div
                style={{
                    background: "#F9FAFB",
                    padding: "14px var(--p-space-2)",
                    height: height,
                    width: width,
                }}
            >
                <HorizontalStack gap="4" align="center">
                    <div>
                        <Text as="p" variant="bodySm" fontWeight="regular">
                            {label}
                        </Text>
                    </div>
                </HorizontalStack>
            </div>
        );
    };

    return (
        <Page fullWidth>
            <VerticalStack gap='2'>
                <HorizontalStack align="space-between">
                    <HorizontalStack gap="1">
                        <Icon source={StoreMinor} color="#006D41" />
                        <Text>Online Store</Text>
                    </HorizontalStack>
                    <HorizontalStack gap="1">
                        <Icon source={PinMajor} color="base" />
                        <Icon source={HorizontalDotsMinor} color="base" />
                    </HorizontalStack>
                </HorizontalStack>
                <Divider />
                <Page >
                    <Layout>
                        <Layout.Section AnnotatedSection>
                            <div style={{ marginTop: "var(--p-space-5)", marginBottom:'var(--p-space-8)' }}>
                                <VerticalStack>
                                    <HorizontalStack align="space-between">
                                        <Text
                                            id="storeDetails"
                                            variant="headingLg"
                                            as="h2"
                                        >
                                            Themes
                                        </Text>
                                        <HorizontalStack align="center" gap='2' blockAlign="center">
                                            <Icon source={ViewMinor} />
                                            <Text variant="bodysm">
                                                View your store
                                            </Text>
                                        </HorizontalStack>
                                    </HorizontalStack>
                                </VerticalStack>
                            </div>
                        </Layout.Section>
                        <Layout.Section >
                            <MockupCard />
                        </Layout.Section>
                        <Layout.Section >
                            <LegacyCard>
                                <LegacyCard.Header title="Theme Library">
                                    <Popover
                                        activator={
                                            <Button disclosure plain>
                                                Add theme
                                            </Button>
                                        }
                                    />
                                </LegacyCard.Header>
                                <LegacyCard.Section>
                                    <Bleed>
                                        <Placeholder label="Try out new themes, work on seasonal versions, or test changes to your current theme." />
                                    </Bleed>
                                </LegacyCard.Section>
                            </LegacyCard>
                        </Layout.Section>
                    </Layout>
                </Page>
            </VerticalStack>
        </Page>
    );
};
