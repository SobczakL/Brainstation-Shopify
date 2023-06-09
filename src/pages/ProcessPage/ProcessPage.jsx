import { MainProcess } from "../../components/MainProcess/MainProcess";
import { WorldMap } from "../../components/WorldMap/WorldMap";
import { IndustryCard } from "../../components/IndustryCard/IndustryCard";
import { UserImageSelection } from "../../components/UserImageSelection/UserImageSelection";
import { Page, FooterHelp, Link } from "@shopify/polaris";

import { ColorPalette } from "../../components/ColorPalette/ColorPalette";
import { ConfirmationProcess } from "../../components/ConfirmationProcess/ConfirmationProcess";
import ChooseTheme from "../../components/ChooseTheme/ChooseTheme";

export const ProcessPage = (props) => {
    const steps = [
        {
            key: "step1",
            title: "What type of business do you have?",
            content: (
                <IndustryCard
                    handleStepValueChange={props.handleStepValueChange}
                />
            ),
        },
        {
            key: "step2",
            title: "Where are you doing business?",
            content: (
                <WorldMap handleStepValueChange={props.handleStepValueChange} />
            ),
        },
        {
            key: "step3",
            title: "Choose your theme",
            content: (
                <ChooseTheme
                    handleStepValueChange={props.handleStepValueChange}
                />
            ),
        },
        {
            key: "step4",
            title: "Color palette",
            content: (
                <ColorPalette
                    handleStepValueChange={props.handleStepValueChange}
                />
            ),
        },
        {
            key: "step5",
            title: "Final details",
            content: <UserImageSelection />,
        },
    ];

    return (
        <Page>
            {props.stepCounter < 5 ? (
                <MainProcess
                    stepCounter={props.stepCounter}
                    handleStepChange={props.handleStepChange}
                    stepContent={steps[props.stepCounter]}
                    skipSteps={props.skipSteps}
                />
            ) : (
                <ConfirmationProcess stepCounter={props.stepCounter} />
            )}
            <FooterHelp>
                Learn more about{" "}
                <Link url="https://help.shopify.com/manual/orders/fulfill-orders">
                    Shopify
                </Link>
            </FooterHelp>
        </Page>
    );
};
