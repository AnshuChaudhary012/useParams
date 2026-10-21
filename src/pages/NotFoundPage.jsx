import { Link } from 'react-router-dom'

function NotFoundPage() {
  return (
    <main className="mx-auto flex min-h-[70vh] w-full max-w-3xl flex-col items-start justify-center px-6 py-20 sm:px-10">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#78936d]">
        404 — page not found
      </p>
      <h1 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-[#243b2d]">
        This path trails off.
      </h1>
      <Link
        className="mt-7 rounded-full bg-[#527348] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#3f5d37]"
        to="/"
      >
        Back to the stories
      </Link>
    </main>
  )
}

export default NotFoundPage
