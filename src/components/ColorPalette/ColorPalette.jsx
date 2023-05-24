import { Box, Button, ButtonGroup, Text, VerticalStack } from "@shopify/polaris"

export const ColorPalette = () => {

    const palettes = [
        {
            title:'Warm',
            colors:['#D90429', '#EF233C', '#EDF2F4', '#8D99AE', '#2B2D42']
        },
        {
            title:'Cold',
            colors:[]
        },
        {
            title:'Bright',
            colors:[]
        },
        {
            title:'Dark',
            colors:[]
        },
        {
            title:'Monochromatic',
            colors:[]
        },
        {
            title:'Bold',
            colors:[]
        }
    ]

    return(
        <VerticalStack gap='10'>
            <div style={{
                display:'flex',
                flexDirection:'column',
                gap:'8px'
            }}>
                <Text variant='bodyMd'>Style Descriptor:</Text>
                <ButtonGroup>
                    {palettes.map((palette) => {
                        return (
                            <Button>{palette.title}</Button>
                        )
                    })}
                </ButtonGroup>
            </div>
            <div style={{
                display:'flex',
                flexDirection:'column',
                gap:'8px'
            }}>
                <Text variant='bodyMd'>Colour Palette:</Text>
                
            </div>
        </VerticalStack>
    )
}