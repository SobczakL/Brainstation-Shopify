import React, { useState } from 'react';
import { LandingPage } from './pages/LandingPage/LandingPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ChatBox from './components/ChatBot/ChatBot';
import ChooseTheme from './pages/ChooseTheme/ChooseTheme';
import { ProcessPage } from './pages/ProcessPage/ProcessPage';


function App() {
    return (
        <>
            <ChatBox />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    {/* <Route path="/step-1" element={} /> */}
                    {/* <Route path="/step-2" element={} /> */}
                    <Route path="/step-3" element={<ChooseTheme />} />
                    <Route path="/process-page" element={<ProcessPage />} />
                    <Route path="/themes" element={''} />
                    {/* <Route path="/step-3" element={} /> */}
                    {/* <Route path="/step-4" element={} /> */}
                    {/* <Route path="/step-5" element={} /> */}
                    {/* <Route path="/step-6" element={} /> */}
                    {/* <Route path="/themes" element={} /> */}
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
