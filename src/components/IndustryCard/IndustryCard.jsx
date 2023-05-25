import { useState, useCallback } from "react";
import {
    HorizontalStack,
    Box,
    Text,
    Image,
    VerticalStack,
    Icon,
} from "@shopify/polaris";
import useEmblaCarousel from "embla-carousel-react";
import { CircleLeftMajor, CircleRightMajor } from "@shopify/polaris-icons";

import retail from "../../assets/images/retail.svg";
import fashion from "../../assets/images/fashion.svg";
import foodBevy from "../../assets/images/food_bev.svg";
import healthWellness from "../../assets/images/health_wellness.svg";
import luxury from "../../assets/images/luxury.svg";
import wholesale from "../../assets/images/wholesale.svg";
import computer from "../../assets/images/computer_software.svg";
import other from "../../assets/images/other.svg";

export const IndustryCard = ({ handleStepValueChange }) => {
    const [emblaRef, emblaApi] = useEmblaCarousel();

    const scrollPrev = useCallback(() => {
        console.log("hello");
        if (emblaApi) emblaApi.scrollPrev();
    }, [emblaApi]);

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext();
    }, [emblaApi]);

    const [activeCard, setActiveCard] = useState(null);

    const handleClick = (card, index) => {
        setActiveCard(index);
        handleStepValueChange(card.category);
    };

    const cards = [
        {
            category: "Retail",
            image: retail,
        },
        {
            category: "Fashion",
            image: fashion,
        },
        {
            category: "Food & Beverages",
            image: foodBevy,
        },
        {
            category: "Health & Wellness",
            image: healthWellness,
        },
        {
            category: "Luxury Goods & Jewellery",
            image: luxury,
        },
        {
            category: "Wholesale",
            image: wholesale,
        },
        {
            category: "Computer Software",
            image: computer,
        },
        {
            category: "Other",
            image: other,
        },
    ];

    return (
        <HorizontalStack>
            <div
                ref={emblaRef}
                style={{ overflow: "hidden", position: "relative" }}
            >
                <div
                    style={{
                        display: "flex",
                        justifyContent: "flex-start",
                        width: "70%",
                        gap: "16px",
                    }}
                >
                    {cards.map((card, index) => {
                        const isActive = activeCard === index;
                        return (
                            <Box
                                className="embla__slide"
                                key={index}
                                onClick={() => handleClick(card, index)}
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    backgroundColor: isActive
                                        ? "#a2bcb0"
                                        : "#F1F8F5",
                                    width: 100,
                                    height: 350,
                                    textAlign: "center",
                                    flex: "0 0 50%",
                                    minWidth: 0,
                                    borderRadius: 10,
                                    cursor: "pointer",
                                }}
                            >
                                <VerticalStack gap="10">
                                    <Image
                                        source={card.image}
                                        style={{
                                            width: 40,
                                            height: 40,
                                            margin: "auto",
                                        }}
                                    />
                                    <Text variant="headingLg">
                                        {card.category}
                                    </Text>
                                </VerticalStack>
                            </Box>
                        );
                    })}
                </div>
                <button
                    onClick={scrollPrev}
                    style={{
                        position: "absolute",
                        top: "50%",
                        backgroundColor: "transparent",
                        borderRadius: "100%",
                        border: "none",
                        padding: "none",
                        transform: "translateY(-50%)",
                        zIndex: 1,
                    }}
                >
                    <Icon source={CircleLeftMajor} color="subdued" />
                </button>
                <button
                    onClick={scrollNext}
                    style={{
                        position: "absolute",
                        top: "50%",
                        right: "0",
                        backgroundColor: "transparent",
                        borderRadius: "100%",
                        border: "none",
                        padding: "none",
                        transform: "translateY(-50%)",
                        zIndex: 1,
                    }}
                >
                    <Icon source={CircleRightMajor} color="subdued" />
                </button>
            </div>
        </HorizontalStack>
    );
};
