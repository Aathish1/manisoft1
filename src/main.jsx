import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Page1 from './components/page1.jsx'
import Page2 from './components/page2.jsx'
import Error from './components/Error.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <Router>
      <Routes>
        <Route path="/Business" element={<App />} />
        <Route path="/Business/1" element={<Page1 />} />
        <Route path="/Business/2" element={<Page2 />} />
        <Route path="" element={<Error />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
)
