import { Link, NavLink, Outlet } from 'react-router-dom'

function SiteLayout() {
  return (
    <div className="min-h-screen">
      <header className="border-b border-[#e5e9e0] bg-[#f7f8f4]/90">
        <nav
          aria-label="Main navigation"
          className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 sm:px-10"
        >
          <Link
            className="text-lg font-bold tracking-tight text-[#243b2d]"
            to="/"
          >
            fieldnotes<span className="text-[#7b9a6c]">.</span>
          </Link>
          <div className="flex items-center gap-7 text-sm font-medium">
            <NavLink
              className={({ isActive }) =>
                isActive ? 'text-[#527348]' : 'text-[#657067] hover:text-[#243b2d]'
              }
              end
              to="/"
            >
              Explore
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? 'text-[#527348]' : 'text-[#657067] hover:text-[#243b2d]'
              }
              to="/about"
            >
              About
            </NavLink>
          </div>
        </nav>
      </header>
      <Outlet />
      <footer className="border-t border-[#e5e9e0]">
        <div className="mx-auto max-w-7xl px-6 py-6 text-sm text-[#788178] sm:px-10">
          Made for a little more wonder in the everyday.
        </div>
      </footer>
    </div>
  )
}

export default SiteLayout
