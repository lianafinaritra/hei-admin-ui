import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import EventViewPage from "./pages/EventViewPage";
import EventPage from "./pages/EventPage";
import LoginPage from "./pages/LoginPage";
import PresencePage from "./pages/Presence";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path={"/"} element={<LoginPage/>}/>
                    <Route path={"/Event"} element={<EventPage/>}/>
                    <Route path={"/EventView"} element={<EventViewPage/>}/>
                    <Route path={"/Presence"} element={<PresencePage/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
