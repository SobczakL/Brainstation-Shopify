import React, { useState, useEffect } from "react";
import { LandingPage } from "./pages/LandingPage/LandingPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ChatBox from "./components/ChatBot/ChatBot";
import { ProcessPage } from "./pages/ProcessPage/ProcessPage";

function App() {
    const [stepCounter, setStepCounter] = useState(0);

    useEffect(() => {
        switch (stepCounter) {
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
            default:
                break;
        }
    }, [stepCounter]);

    const handleStepChange = () => {
        if (stepCounter < 4) {
            // if (stepValues[stepCounter] !== '') {
            setStepCounter(stepCounter + 1);
            // }

            switch (stepCounter) {
                case 0:
                    if (stepValues[stepCounter] === "") {
                        addMessage(
                            "Warning! You didn't choose your business type!",
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
                            "Warning! You didn't choose the location of your business!",
                            "Bot"
                        );
                    } else {
                        addMessage(
                            `You\'ve selected ${stepValues[stepCounter]}. Terrific!`,
                            "Bot"
                        );
                    }
                    break;
                case 2:
                    if (stepValues[stepCounter] === "") {
                        addMessage(
                            "Warning! You didn't choose the your theme!",
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
                            "Warning! You didn't choose the your color palette!",
                            "Bot"
                        );
                    } else {
                        addMessage(
                            `You\'ve selected ${stepValues[stepCounter]}. Great choice!`,
                            "Bot"
                        );
                    }
                    break;
                case 4:
                    if (stepValues[stepCounter] === "") {
                        addMessage(
                            "Warning! You didn't choose the your color palette!",
                            "Bot"
                        );
                    } else {
                        addMessage(`You have upload the details.`, "Bot");
                    }
                    break;
                default:
                    break;
            }
        }
    };

    const [stepValues, setStepValues] = useState(new Array(5).fill(""));

    const handleContinueClick = () => {
        addMessage(
            "We'll start with basic information about your business",
            "Bot"
        );
    };

    //when steps[stepCounter].content receives a value, update stepValues for chatBox
    const handleStepValueChange = updatedValue => {
        let newStepValues = stepValues.slice();
        newStepValues[stepCounter] = updatedValue;
        setStepValues(newStepValues);
        if (newStepValues[stepCounter] === "") {
            addMessage(updatedValue, "User");
        } else {
            const newMessages = messages.slice(0, -1);
            setmessages([
                ...newMessages,
                { message: updatedValue, sender: "User" },
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
    };

    return (
        <>
            <ChatBox messages={messages} addMessage={addMessage} />
            <BrowserRouter>
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
                            />
                        }
                    />
                    <Route path="/themes" element={""} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
