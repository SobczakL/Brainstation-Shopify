import { LandingPage } from './pages/LandingPage/LandingPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ChatBox from './components/ChatBox';

function App() {
    return (
        <>
            <ChatBox />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    {/* <Route path="/step-1" element={} /> */}
                    {/* <Route path="/step-2" element={} /> */}
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
