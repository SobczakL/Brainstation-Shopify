import { Box, Button, ButtonGroup, HorizontalStack, Text, VerticalStack } from "@shopify/polaris"
import { useState } from "react"
import { RefreshMajor } from '@shopify/polaris-icons';

export const ColorPalette = () => {

    const palettes = [
        {
            title:'Warm',
            colors:['#F08080', '#FCD5CE', '#F8EDEB', '#F9DCC4', '#FEC89A']
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

    const [currentPalette, setCurrentPalette] = useState(palettes[0])

    const handlePaletteChange = (palette) => {
        setCurrentPalette(palette)
    }

    const handleRefresh = () => {

    }

    return(
        <VerticalStack gap='10'>
            <div style={{
                display:'flex',
                flexDirection:'column',
                gap:'8px'
            }}>
                <Text variant='bodyMd'>Style Descriptor:</Text>
                <ButtonGroup>
                    {palettes.map((palette, i) => {
                        return (
                            <Button 
                                key={i}
                                onClick={() => handlePaletteChange(palette)}
                                pressed={currentPalette.title === palette.title ? true : false}
                            >
                                    {palette.title}
                            </Button>
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
                <HorizontalStack>
                    {currentPalette.colors.map((color, i) => {
                        return (
                            <div key={i} style={{
                                width:'50px',
                                height:'90px',
                                backgroundColor:color
                            }}>
                            </div>
                        )
                    })}
                </HorizontalStack>
                <Box maxWidth="fit-content">
                    <Button icon={RefreshMajor} onClick={handleRefresh}>Refresh</Button>
                </Box>
            </div>
        </VerticalStack>
    )
}