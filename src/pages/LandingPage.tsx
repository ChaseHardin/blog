import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

type Post = {
  title: string;
  url: string;
  description: string;
  author: string;
  date: string;
};

const posts: Post[] = [
  {
    title: "From Clean Code to Copilot: Don’t Skip the Journey",
    url: "from-clean-code-to-copilot",
    description:
      "A cautionary call to aspiring developers in the AI age. This post explores how tools like Copilot and ChatGPT are transforming software development—and why skipping the fundamentals in favor of faster results can quietly erode craftsmanship. Learn why mastering the basics, reading the classics, and treating AI as a multiplier (not a crutch) is the only path to becoming a real software engineer.",
    author: "Chase Hardin",
    date: "07/19/25",
  },
  {
    title: "Writing Tests Feels Slow—Until It Isn’t",
    url: "writing-tests-feels-slow",
    description:
      "Why testing isn't a slowdown—it's a speed boost in disguise. This post tackles the common misconception that writing tests slows down development. It makes the case that automated tests actually accelerate delivery by catching bugs early, documenting behavior, making refactoring safe, and reducing long-term costs. Whether you're building something small or scaling a long-term product, testing is one of the smartest investments you can make.",
    author: "Chase Hardin",
    date: "07/19/25",
  },
];

export const LandingPage = () => {
  return (
    <main className="flex justify-center w-full p-4">
      <div className="container max-w-4xl px-4 mx-auto">
        <section className="flex flex-col gap-4" aria-label="Project posts">
          {posts.map((post) => (
            <Card key={post.url} post={post} />
          ))}
        </section>
      </div>
    </main>
  );
};

type CardProps = {
  post: Post;
};

const Card = ({ post }: CardProps) => {
  const navigate = useNavigate();
  const onViewMore = useCallback(() => {
    navigate(post.url);
  }, [navigate, post.url]);

  return (
    <div className="bg-zinc-800 rounded-2xl p-6 shadow-md hover:shadow-lg hover:bg-zinc-700 transition duration-200 ease-in-out">
      <h2 className="text-3xl font-extrabold mb-3 text-white bg-clip-text drop-shadow-md">
        {post.title}
      </h2>
      <div className="flex items-center text-zinc-400 text-sm italic space-x-3 mt-1 mb-4">
        <span>By {post.author}</span>
        <span className="border-l border-zinc-600 pl-3">
          Published {post.date}
        </span>
      </div>
      <p className="text-zinc-300">{post.description}</p>
      <button
        className="cursor-pointer inline-block mt-6 px-4 py-2 rounded-lg border border-blue-400 text-blue-400 font-semibold hover:bg-blue-400 hover:text-zinc-900 transition duration-300"
        onClick={onViewMore}
      >
        View more →
      </button>
    </div>
  );
};
