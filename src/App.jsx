import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useEffect, useState } from 'react'
import SiteLayout from './components/SiteLayout.jsx'
import AboutPage from './pages/AboutPage.jsx'
import HomePage from './pages/HomePage.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'
import StoryDetailsPage from './pages/StoryDetailsPage.jsx'

export default function App() {
  // Restore a valid saved theme; default to light if storage is unavailable.
  const [theme, setTheme] = useState(() => {
    try {
      const savedTheme = window.localStorage.getItem('theme')
      return savedTheme === 'dark' || savedTheme === 'light' ? savedTheme : 'light'
    } catch {
      return 'light'
    }
  })

  // Apply the selected theme to the whole page and remember it.
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    try {
      window.localStorage.setItem('theme', theme)
    } catch {
      // The page still works if browser storage is disabled.
    }
  }, [theme])

  function toggleTheme() {
    setTheme((currentTheme) => (currentTheme === 'light' ? 'dark' : 'light'))
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<SiteLayout theme={theme} toggleTheme={toggleTheme} />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/product/:id" element={<StoryDetailsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
