import { Link, useParams } from "react-router-dom";
import { stories } from "../utility/helper.js";

function StoryDetailsPage() {
  const { id } = useParams();
  const story = stories.find((item) => item.id === id);

  if (!story) {
    return (
      <main className="mx-auto w-full max-w-7xl px-6 py-16 sm:px-10 sm:py-24">
        <p className="text-[#687269]">Item not found</p>
        <Link
          className="mt-6 inline-block text-sm font-medium text-[#527348] hover:text-[#243b2d]"
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
        className="mb-8 inline-block text-sm font-medium text-[#527348] hover:text-[#243b2d]"
        to="/"
      >
        Back to stories
      </Link>
      <article className="max-w-3xl overflow-hidden rounded-2xl border border-[#e8ebe4] bg-white shadow-[0_8px_30px_rgba(36,59,45,0.04)]">
        <img
          alt={story.imageAlt}
          className="max-h-120 w-full object-cover"
          src={story.image}
        />
        <div className="p-6 sm:p-8">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-[#78936d]">
            {story.category}
          </p>
          <h1 className="mb-4 text-3xl font-semibold tracking-tight text-[#243b2d] sm:text-4xl">
            {story.title}
          </h1>
          <p className="text-base leading-7 text-[#687269]">
            {story.description}
          </p>
        </div>
      </article>
    </main>
  );
}

export default StoryDetailsPage;
