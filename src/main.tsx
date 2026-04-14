import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router'
import Roster from './pages/Roster.tsx'
import About from './pages/About.tsx'
import Apply from './pages/Apply.tsx'
import Home from './pages/Home.tsx'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/roster" element={<Roster />} />
      <Route path="/about" element={<About />} />
      <Route path="/apply" element={<Apply />} />
    </Routes>
  </BrowserRouter>,
)
