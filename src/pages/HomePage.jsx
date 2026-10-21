import StoryCard from '../components/StoryCard.jsx'
import { stories } from '../utility/helper.js'

function HomePage() {
  return (
    <main className="mx-auto w-full max-w-7xl px-6 py-16 sm:px-10 sm:py-24">
      <section className="mb-14 max-w-2xl sm:mb-16">
        <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent-soft)]">
          Notes for a thoughtful life
        </p>
        <h1 className="text-4xl font-semibold leading-tight tracking-[-0.04em] text-[var(--text-primary)] sm:text-6xl">
          Find a little more room to breathe.
        </h1>
        <p className="mt-6 max-w-xl text-base leading-7 text-[var(--text-secondary)] sm:text-lg">
          Small ideas, quiet places, and simple rituals to bring more intention
          to the everyday.
        </p>
      </section>

      <section aria-label="Featured stories" className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {stories.map((story) => (
          <StoryCard key={story.title} {...story} />
        ))}
      </section>
    </main>
  )
}

export default HomePage
