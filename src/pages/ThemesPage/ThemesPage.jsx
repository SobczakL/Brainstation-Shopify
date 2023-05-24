import { Bleed, Button, Divider, HorizontalStack, Icon, Layout, LegacyCard, Page, Popover, Text, VerticalStack, Placeholder} from "@shopify/polaris"
import { StoreMinor, PinMajor, HorizontalDotsMinor, ViewMajor } from '@shopify/polaris-icons';
import { MockupContainer } from "../../components/MockupContainer/MockupContainer";


export const ThemesPage = () => {

    const Placeholder = ({label = '', height = 'auto', width = 'auto'}) => {
        return (
          <div
            style={{
              background: 'var(--p-color-text-info)',
              padding: '14px var(--p-space-2)',
              height: height,
              width: width,
            }}
          >
            <HorizontalStack gap="4" align="center">
              <div
                style={{
                  color: 'var(--p-color-text-on-color)',
                }}
              >
                <Text as="h2" variant="bodyMd" fontWeight="regular">
                  {label}
                </Text>
              </div>
            </HorizontalStack>
          </div>
        );
      };    


    return(
        <Page fullWidth>
            <VerticalStack>
            <HorizontalStack align='space-between'>
                    <HorizontalStack gap='1'>
                        <Icon source={StoreMinor} color="base" />
                        <Text>Online Store</Text>
                    </HorizontalStack>
                    <HorizontalStack gap='1'>
                        <Icon source={PinMajor} color="base" />
                        <Icon source={HorizontalDotsMinor} color="base" />
                    </HorizontalStack>
            </HorizontalStack>
            <Divider />
            <Page>
                <Layout>
                    <Layout.Section oneThird>
                        <div style={{marginTop: 'var(--p-space-5)'}}>
                            <VerticalStack>
                                <HorizontalStack align='space-between'>
                                    <Text id="storeDetails" variant="headingLg" as="h2">
                                        Themes
                                    </Text> 
                                    <HorizontalStack align='center'>
                                        <Icon source={ViewMajor}/>
                                        <Text variant='bodysm'>View your store</Text>
                                    </HorizontalStack>
                                </HorizontalStack>
                            </VerticalStack>
                        </div>
                    </Layout.Section>
                    <Layout.Section>
                        <MockupContainer />
                    </Layout.Section>
                    <Layout.Section secondary>
                        <LegacyCard>
                            <LegacyCard.Header
                            title='Theme Library'

                            >
                                <Popover
                                activator={
                                    <Button disclosure plain>Add theme</Button> 
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
    )
}

