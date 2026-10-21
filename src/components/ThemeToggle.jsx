function ThemeToggle({ theme, toggleTheme }) {
  const isDark = theme === 'dark'

  return (
    <button
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className="rounded-full border border-[var(--border-color)] bg-[var(--button-bg)] px-3 py-2 text-sm font-medium text-[var(--text-primary)] transition hover:bg-[var(--button-hover)]"
      onClick={toggleTheme}
      type="button"
    >
      {isDark ? '☀️ Light Mode' : '🌙 Dark Mode'}
    </button>
  )
}

export default ThemeToggle
