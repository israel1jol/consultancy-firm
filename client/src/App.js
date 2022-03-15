import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ErrorBoundary from "./Error Boundary/main";
import { AuthProvider } from "./Context/AuthProvider";
import Home from "./Pages/Home";
import { Navbar } from "./Components/Navbar";
import { ResponsiveNav } from "./Components/ResponsiveNav";
import  Services  from "./Pages/Services";
import  Contact  from "./Pages/Contact";
import  About  from "./Pages/About";
import Login from "./Pages/Login";
import Register from "./Pages/Register";

const App = (props) => {
    const [ showNav, setShowNav ] = useState(false);
    console.log(showNav);

    return  (
        <div className="App">
            <Router>
                <ErrorBoundary>
                    <AuthProvider>
                        <Navbar setShowNav={setShowNav} showNav={showNav}/>
                        <ResponsiveNav showNav={showNav}/>
                        <Routes>
                            <Route path="/" element={<Home />}/>
                            <Route path="/services" element={<Services />}/>
                            <Route path="/about" element={<About />}/>
                            <Route path="/contact" element={<Contact />}/>
                            <Route path="/register" element={<Register />}/>
                            <Route path="/login" element={<Login />}/>
                        </Routes>
                    </AuthProvider>
                </ErrorBoundary>
            </Router>
        </div>
            
    )
}

export default App;