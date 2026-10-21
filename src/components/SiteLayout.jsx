import { Link, NavLink, Outlet } from 'react-router-dom'
import ThemeToggle from './ThemeToggle.jsx'

function SiteLayout({ theme, toggleTheme }) {
  return (
    <div className="min-h-screen">
      <header className="border-b border-[var(--border-color)] bg-[var(--navbar-bg)]">
        <nav
          aria-label="Main navigation"
          className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-y-4 px-6 py-5 sm:px-10"
        >
          <Link
            className="text-lg font-bold tracking-tight text-[var(--text-primary)]"
            to="/"
          >
            fieldnotes<span className="text-[var(--accent-soft)]">.</span>
          </Link>
          <div className="flex items-center gap-4 text-sm font-medium sm:gap-7">
            <NavLink
              className={({ isActive }) =>
                isActive ? 'text-[var(--accent)]' : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
              }
              end
              to="/"
            >
              Explore
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? 'text-[var(--accent)]' : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
              }
              to="/about"
            >
              About
            </NavLink>
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
          </div>
        </nav>
      </header>
      <Outlet />
      <footer className="border-t border-[var(--border-color)] bg-[var(--footer-bg)]">
        <div className="mx-auto max-w-7xl px-6 py-6 text-sm text-[var(--text-muted)] sm:px-10">
          Made for a little more wonder in the everyday.
        </div>
      </footer>
    </div>
  )
}

export default SiteLayout
