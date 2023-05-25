import { HorizontalStack, Layout, VerticalStack } from "@shopify/polaris"
import { ImageUploadContainer } from "../ImageUploadContainer/ImageUploadContainer"
import { InfoMinor } from '@shopify/polaris-icons';
import { SliderContainer } from "../SliderContainer/SliderContainer";
import { useState } from "react";
import carFavicon from '../../assets/logo/car-favicon.svg'
import mainLogo from '../../assets/logo/logo2.svg'


export const UserImageSelection = () => {

    const [imageSize, setImageSize] = useState({
        width: 100,
    })

    const [logo, setLogo] = useState(false)
    const [favicon, setFavicon] = useState(false)

    const handleLogoUpload = () => {
        setLogo(true)
    }

    const handleFaviconUpload = () => {
        setFavicon(true)
    }

    const handleSliderChange = (multiplier) => {
        setImageSize({
            width: 100 + multiplier
        })
    }

    return(
        <HorizontalStack gap='10'>
            <VerticalStack gap='6'>
                <ImageUploadContainer title='Logo' icon={InfoMinor} onClick={handleLogoUpload}/>
                <SliderContainer handleSliderChange={handleSliderChange}/>
                <ImageUploadContainer title='Favicon Image' icon={InfoMinor} onClick={handleFaviconUpload}/> 
            </VerticalStack>
            <VerticalStack gap='20'>
                <div
                style={{
                    height:'50%',
                    maxHeight:'50%',
                    display:'flex',
                    justifyContent:'flex-start',
                    alignItems:'center'
                }}
                >
                    <img 
                    src={mainLogo} 
                    alt="Main Logo" 
                    style={{
                        width:`${imageSize.width}px`,
                        height:`${imageSize.height}px`,
                    }}
                    /> 
                </div>
                <div
                style={{
                    height:'50%',
                    maxHeight:'50%',
                    display:'flex',
                    justifyContent:'flex-start',
                    alignItems:'center'
                }}
                >
                    <img 
                    src={mainLogo} 
                    alt="Main Logo" 
                    style={{
                        width:'40px',
                        height:'40px',
                    }}
                    /> 

                </div>    
            </VerticalStack>
            
        </HorizontalStack>
    )
}