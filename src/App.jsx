import React, { useState } from 'react';
import { LandingPage } from './pages/LandingPage/LandingPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ChatBox from './components/ChatBot/ChatBot';
import { ProcessPage } from './pages/ProcessPage/ProcessPage';

function App() {
    const [stepCounter, setStepCounter] = useState(0);

    const handleStepChange = () => {
        if (stepCounter < 4) {
            setStepCounter(stepCounter + 1);
        }
    };

    const [stepValues, setStepValues] = useState(new Array(5).fill(''));

    //when steps[stepCounter].content receives a value, update stepValues for chatBox
    const handleStepValueChange = updatedValue => {
        let newStepValues = stepValues.slice();
        newStepValues[stepCounter] = updatedValue;
        setStepValues(newStepValues);
    };

    return (
        <>
            <ChatBox />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LandingPage />} />
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
                    <Route path="/themes" element={''} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
