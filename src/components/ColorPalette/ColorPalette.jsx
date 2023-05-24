import { Box, Button, ButtonGroup, HorizontalStack, Text, VerticalStack, ChoiceList } from "@shopify/polaris"
import { useState, useEffect } from "react"
import { RefreshMajor } from '@shopify/polaris-icons';

export const ColorPalette = ({handleStepValueChange}) => {

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
        handleStepValueChange(palette.title)
    }

    const handleRefresh = () => {

    }

    return(
        <HorizontalStack gap='5'>
            <div style={{
                display:'flex',
                flexDirection:'column',
                gap:'8px',
                backgroundColor:'#FAFBFB',
                padding:'8px'
            }}>
                <Text variant='bodyMd'>Style Descriptor:</Text>
                <ChoiceList
                    choices={palettes.map((palette, i) => ({
                        key: i,
                        label: palette.title,
                        value: palette.title,
                    }))}
                    selected={[currentPalette.title]}
                    onChange={(selected) => {
                        const palette = palettes.find((p) => p.title === selected[0]);
                        if (palette) {
                            handlePaletteChange(palette);
                        }
                    }}
                />
            </div>
            <VerticalStack 
            gap='2'
            >
                <Text variant='bodyMd'>Colour Palette:</Text>
                <HorizontalStack>
                    {currentPalette.colors.map((color, i) => {
                        return (
                            <div key={i} style={{
                                width:'80px',
                                height:'100px',
                                backgroundColor:color
                            }}>
                            </div>
                        )
                    })}
                </HorizontalStack>
                <Box maxWidth="fit-content">
                    <Button icon={RefreshMajor} onClick={handleRefresh}>Refresh</Button>
                </Box>
            </VerticalStack>
        </HorizontalStack>
    )
}