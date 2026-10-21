import { Link } from 'react-router-dom'

function StoryCard({ id, image, imageAlt, category, title, description }) {
  return (
    <Link
      className="block overflow-hidden rounded-2xl border border-[var(--card-border)] bg-[var(--card-bg)] text-[var(--text-primary)] shadow-[var(--card-shadow)] transition duration-200 hover:-translate-y-1 hover:shadow-[var(--card-shadow-hover)]"
      to={`/product/${id}`}
    >
      <article>
        <img
          alt={imageAlt}
          className="h-60 w-full object-cover"
          loading="lazy"
          src={image}
        />
        <div className="p-6 sm:p-7">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--accent-soft)]">
            {category}
          </p>
          <h2 className="mb-3 text-xl font-semibold tracking-tight text-[var(--text-primary)]">
            {title}
          </h2>
          <p className="text-sm leading-6 text-[var(--text-secondary)]">{description}</p>
        </div>
      </article>
    </Link>
  )
}

export default StoryCard
