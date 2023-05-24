import React, { useState } from 'react';
import { LandingPage } from './pages/LandingPage/LandingPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ChatBox from './components/ChatBot/ChatBot';
import { ProcessPage } from './pages/ProcessPage/ProcessPage';

import ChooseTheme from './pages/ChooseTheme/ChooseTheme';

function App() {

    return (
        <>
            <ChatBox />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/process-page" element={<ProcessPage />} />
                    <Route path="/themes" element={''} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
