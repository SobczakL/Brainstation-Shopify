import { useState, useEffect } from "react";
import { LandingPage } from "./pages/LandingPage/LandingPage";
import { Route, Routes, useNavigate } from "react-router-dom";
import ChatBox from "./components/ChatBot/ChatBot";
import { ProcessPage } from "./pages/ProcessPage/ProcessPage";
import { ThemesPage } from "./pages/ThemesPage/ThemesPage";
import { getFeedback } from "./axios";

import "./App.scss";
import { Nav } from "./components/Nav/Nav";
import { SideNav } from "./components/SideNav/SideNav";
import { Frame } from "@shopify/polaris";

function App() {
    const navigate = useNavigate();
    const [stepCounter, setStepCounter] = useState(0);

    useEffect(() => {
        switch (stepCounter) {
            case 1:
                addMessage("Where are you doing business?", "Bot");
                break;
            case 2:
                addMessage("Now it's time to select your store theme", "Bot");
                break;
            case 3:
                addMessage(
                    "Select a Style Descriptor to set the colour palette for your store",
                    "Bot"
                );
                break;
            case 4:
                addMessage(
                    "Almost done! It's time for the final details!",
                    "Bot"
                );
                break;
            case 5:
                addMessage(
                    <div className="group-msg">
                        <div>Great job setting up your online store!</div>
                        <div>
                            For additional tools and features you can visit the{" "}
                            <span className="link">Shopify App store</span>.
                        </div>
                        <div>
                            For additional support in editing your website you
                            can visit the{" "}
                            <span className="link">
                                Shopify Experts Marketplace
                            </span>
                            .
                        </div>
                        <div>
                            We also offer 24/7 support for any issues that may
                            arise.
                        </div>
                    </div>,
                    "Bot"
                );
                break;
            default:
                break;
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [stepCounter]);

    window.onhashchange = function() {
        setStepCounter(stepCounter - 1);
    };

    const handleStepChange = () => {
        if (stepCounter < 5) {
            if (stepValues[stepCounter] !== "") {
                setStepCounter(stepCounter + 1);
            }

            switch (stepCounter) {
                case 0:
                    if (stepValues[stepCounter] === "") {
                        addMessage(
                            <div className="warning">
                                Warning! You didn't choose your business type!
                            </div>,
                            "Bot"
                        );
                    } else {
                        addMessage(
                            `Your business type is ${stepValues[stepCounter]}. Great! Moving on... `,
                            "Bot"
                        );
                    }
                    break;
                case 1:
                    if (stepValues[stepCounter] === "") {
                        addMessage(
                            <div className="warning">
                                Warning! You didn't choose the location of your
                                business!
                            </div>,
                            "Bot"
                        );
                    } else {
                        addMessage(
                            <div>
                                You've selected {stepValues[stepCounter]}.
                                Terrific!
                            </div>,
                            "Bot"
                        );
                    }
                    break;
                case 2:
                    if (stepValues[stepCounter] === "") {
                        addMessage(
                            <div className="warning">
                                Warning! You didn't choose the your theme!
                            </div>,
                            "Bot"
                        );
                    } else {
                        addMessage(
                            `You've selected the ${stepValues[stepCounter]} store theme.  Nice choice!`,
                            "Bot"
                        );
                    }
                    break;
                case 3:
                    if (stepValues[stepCounter] === "") {
                        addMessage(
                            <div className="warning">
                                Warning! You didn't choose the your color
                                palette!
                            </div>,
                            "Bot"
                        );
                    } else {
                        addMessage(
                            <div>
                                You've selected {stepValues[stepCounter]}. Great
                                choice!
                            </div>,
                            "Bot"
                        );
                    }
                    break;
                case 4:
                    addMessage("You have upload the details.", "Bot");
                    break;
                default:
                    break;
            }
        }
    };

    const skipSteps = () => {
        navigate("/themes");
        addMessage(
            <div>
                You've selected to Skip - no worries! You can always come back
                later.
            </div>,
            "Bot"
        );
    };

    const [stepValues, setStepValues] = useState(["", "", "", "", "upload"]);

    const handleContinueClick = () => {
        addMessage(
            "We'll start with basic information about your business",
            "Bot"
        );
    };

    const handleStepValueChange = (updatedValue) => {
        let newStepValues = stepValues.slice();
        newStepValues[stepCounter] = updatedValue;
        setStepValues(newStepValues);

        if (stepValues[stepCounter] === "") {
            addMessage(updatedValue, "Click");
        } else {
            const newMessages = messages.slice(0, -1);
            setmessages([
                ...newMessages,
                { message: updatedValue, sender: "Click" },
            ]);
        }
    };

    const [messages, setmessages] = useState([
        {
            message:
                "Hi there. I'm Ada, a bot created to help you set up your online store. Let's get started!",
            sender: "Bot",
        },
        {
            message:
                "You'll see options displayed to the left of this chat window",
            sender: "Bot",
        },
    ]);

    const addMessage = (text, sender) => {
        setmessages([...messages, { message: text, sender: sender }]);
        if (sender === "User") {
            getFeedback(text)
                .then((response) => {
                    setmessages([
                        ...messages,
                        { message: text, sender: "User" },
                        { message: response.data.answer, sender: "Bot" },
                    ]);
                    const keyWord = response.data.intent.split("-");
                    if (keyWord[0] === "nav.step") {
                        navigate("/process-page");
                        setStepCounter(Number(keyWord[1]) - 1);
                    }
                    if (keyWord[0] === "nav.home") {
                        setStepCounter(0);
                        navigate("/");
                    }
                    if (keyWord[0] === "nav.themes") {
                        navigate("/themes");
                    }
                })
                .catch((_error) => {
                    setmessages([
                        ...messages,
                        { message: text, sender: "User" },
                    ]);
                });
        }
    };

    return (
        <Frame topBar={<Nav />} navigation={<SideNav />}>
            <ChatBox messages={messages} addMessage={addMessage} />
            <Routes>
                <Route
                    path="/"
                    element={
                        <LandingPage
                            handleContinueClick={handleContinueClick}
                        />
                    }
                />
                <Route
                    path="/process-page"
                    element={
                        <ProcessPage
                            stepCounter={stepCounter}
                            handleStepChange={handleStepChange}
                            handleStepValueChange={handleStepValueChange}
                            skipSteps={skipSteps}
                        />
                    }
                />
                <Route path="/themes" element={<ThemesPage />} />
            </Routes>
        </Frame>
    );
}

export default App;
