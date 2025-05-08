import React from 'react';
import logo from './logo.svg';
import './App.css';

import {HashRouter, Link, Route, Routes} from "react-router-dom";

function App() {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={
                    <div className="App">
                        <header className="App-header">
                            <img src={logo} className="App-logo" alt="logo"/>
                            <p>
                                Edit <code>src/App.tsx</code> and save to reload.
                            </p>
                            <Link to="/foo">Foo</Link>
                        </header>
                    </div>
                }/>
                <Route path="/foo" element={
                    <div className="App">
                        <header className="App-header">
                            <img src={logo} className="App-logo" alt="logo"/>
                            <p>
                                Edit <code>src/App.tsx</code> and save to reload.
                            </p>
                            <Link to="/">Home</Link>
                        </header>
                    </div>
                }/>
            </Routes>
        </HashRouter>
    );
}

export default App;
