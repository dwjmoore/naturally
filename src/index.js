import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import "./styles/Main.scss";
import App from './App';
import { GlobalStateProvider } from './context/GlobalStateProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <GlobalStateProvider>
                <Routes>
                    <Route path='/*' element={<App />} />
                </Routes>
            </GlobalStateProvider>
        </BrowserRouter>
    </React.StrictMode>
);