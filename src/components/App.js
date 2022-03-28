import React from 'react'
import Page1 from './Page1'
import Page2 from './Page2'
import Page3 from './Page3'
import Page4 from './Page4'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// import '../css/App.css'

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Page1 />} />
                <Route path="/page2" element={<Page2 />} />
                <Route path="/page3" element={<Page3 />} />
                <Route path="/page4" element={<Page4 />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App