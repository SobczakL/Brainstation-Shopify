import { Box, Button, ButtonGroup, HorizontalStack, Text, VerticalStack, ChoiceList } from "@shopify/polaris"
import { useState, useEffect } from "react"
import { RefreshMajor } from '@shopify/polaris-icons';

export const ColorPalette = ({handleStepValueChange}) => {

    const defaultPalette = {
        title:'Default',
        colors:['#000000', '#333333', '#666666', '#999999', '#CCCCCC']
    }

    const palettes = [
        {
            title:'Warm',
            colors:['#F08080', '#FCD5CE', '#F8EDEB', '#F9DCC4', '#FEC89A']
        },
        {
            title:'Cold',
            colors:['#BEE9E8', '#62B6CB', '#1B4965', '#1B4965', '#5FA8D3']
        },
        {
            title:'Bright',
            colors:['#E89005', '#E67F0D', '#E67F0D', '#E9190F', '#FF0F80']
        },
        {
            title:'Dark',
            colors:['#191528', '#3C162F', '#5C162E', '#7C162E', '#110E1B']
        },
        {
            title:'Monochromatic',
            colors:['#E9F5DB', '#CFE1B9', '#B5C99A', '#97A97C', '#87986A']
        },
        {
            title:'Bold',
            colors:['#D90429', '#EF233C', '#EDF2F4', '#8D99AE', '#2B2D42']
        }
    ]

    const [currentPalette, setCurrentPalette] = useState(defaultPalette)

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
                padding:'0 8px 0 8px'
            }}>
                <Text variant='headingSm'>Style Descriptor:</Text>
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
            <VerticalStack gap='2'>
                <Text variant='headingSm' as='h6'>Colour Palette:</Text>
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
                <Box maxWidth="fit-content" padding='3'>
                    <Button 
                    icon={RefreshMajor} 
                    onClick={handleRefresh}  
                    plain 
                    monochrome 
                    >
                        Refresh
                    </Button>
                </Box>
            </VerticalStack>
        </HorizontalStack>
    )
}