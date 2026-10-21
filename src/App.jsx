import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SiteLayout from './components/SiteLayout.jsx'
import AboutPage from './pages/AboutPage.jsx'
import HomePage from './pages/HomePage.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'
import StoryDetailsPage from './pages/StoryDetailsPage.jsx'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<SiteLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/product/:id" element={<StoryDetailsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
