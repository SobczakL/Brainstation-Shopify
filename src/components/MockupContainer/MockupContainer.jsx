import { Box, HorizontalStack } from "@shopify/polaris"
import compMockup from '../../assets/images/SampleSiteMockup 2.png'
import mobileMockup from '../../assets/images/Mobile Mockuop 2.png'

export const MockupContainer = () => {
    return(
        <Box>
            <HorizontalStack gap='3' align="center" blockAlign="baseline">
                <img 
                src={compMockup} 
                alt="Web mockup" 
                style={{
                    maxWidth: '500px',
                    height:'100%'
                }}/>
                <img 
                src={mobileMockup} 
                alt="Mobile mockup" 
                style={{
                    maxWidth: '225px',
                    height:'100%'
                }}/>
            </HorizontalStack>
        </Box>
    )
}