import { Link, useParams } from "react-router-dom";
import { stories } from "../utility/helper.js";

function StoryDetailsPage() {
  const { id } = useParams();
  const story = stories.find((item) => item.id === id);

  if (!story) {
    return (
      <main className="mx-auto w-full max-w-7xl px-6 py-16 sm:px-10 sm:py-24">
        <p className="text-[var(--text-secondary)]">Item not found</p>
        <Link
          className="mt-6 inline-block text-sm font-medium text-[var(--accent)] hover:text-[var(--text-primary)]"
          to="/"
        >
          Back to stories
        </Link>
      </main>
    );
  }

  return (
    <main className="mx-auto w-full max-w-7xl px-6 py-16 sm:px-10 sm:py-24">
      <Link
        className="mb-8 inline-block text-sm font-medium text-[var(--accent)] hover:text-[var(--text-primary)]"
        to="/"
      >
        Back to stories
      </Link>
      <article className="max-w-3xl overflow-hidden rounded-2xl border border-[var(--card-border)] bg-[var(--card-bg)] shadow-[var(--card-shadow)]">
        <img
          alt={story.imageAlt}
          className="max-h-120 w-full object-cover"
          src={story.image}
        />
        <div className="p-6 sm:p-8">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--accent-soft)]">
            {story.category}
          </p>
          <h1 className="mb-4 text-3xl font-semibold tracking-tight text-[var(--text-primary)] sm:text-4xl">
            {story.title}
          </h1>
          <p className="text-base leading-7 text-[var(--text-secondary)]">
            {story.description}
          </p>
        </div>
      </article>
    </main>
  );
}

export default StoryDetailsPage;
