import { HorizontalStack, RangeSlider } from "@shopify/polaris";
import { useState } from "react";

export const SliderContainer = ({ handleSliderChange }) => {
    const [sliderValue, setSliderValue] = useState(100);

    const handleChange = (sliderValue) => {
        setSliderValue(sliderValue);
        handleSliderChange(sliderValue);
    };
    return (
        <HorizontalStack gap="2">
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <RangeSlider
                    min="100"
                    max="150"
                    value={sliderValue}
                    onChange={handleChange}
                />
            </div>
            <div
                style={{
                    width: "42px",
                    padding: "4px 8px 4px 8px",
                    backgroundColor: "#F1F2F3",
                }}
            >
                <p>{sliderValue}</p>
            </div>
        </HorizontalStack>
    );
};
