import { Link } from 'react-router-dom'

function StoryCard({ id, image, imageAlt, category, title, description }) {
  return (
    <Link
      className="block overflow-hidden rounded-2xl border border-[#e8ebe4] bg-white shadow-[0_8px_30px_rgba(36,59,45,0.04)] transition duration-200 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(36,59,45,0.1)]"
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
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-[#78936d]">
            {category}
          </p>
          <h2 className="mb-3 text-xl font-semibold tracking-tight text-[#243b2d]">
            {title}
          </h2>
          <p className="text-sm leading-6 text-[#687269]">{description}</p>
        </div>
      </article>
    </Link>
  )
}

export default StoryCard
