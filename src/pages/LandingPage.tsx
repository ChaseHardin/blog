import { useNavigate } from "react-router-dom";

type Post = {
  title: string;
  url: string;
  description: string;
  author: string;
  date: string;
  keywords: string;
};

export const fromCleanCodeToAIDetails: Post = {
  title: "From Clean Code to Copilot: Don’t Skip the Journey",
  url: "from-clean-code-to-copilot",
  description:
    "A cautionary call to aspiring developers in the AI age. This post explores how tools like Copilot and ChatGPT are transforming software development—and why skipping the fundamentals in favor of faster results can quietly erode craftsmanship. Learn why mastering the basics, reading the classics, and treating AI as a multiplier (not a crutch) is the only path to becoming a real software engineer.",
  author: "Chase Hardin",
  date: "July 18, 2025",
  keywords: "AI in software engineering, GitHub Copilot, ChatGPT for developers, software development fundamentals, junior developer skills, learning to code, prompt engineering, coding best practices, clean code principles, software craftsmanship, test-driven development (TDD), extreme programming (XP), developer productivity, software design patterns, debugging skills, software architecture basics, mastering coding fundamentals, AI-assisted programming, developer education, programming mindset, coding mastery, software engineering discipline, learning with AI tools, programming craftsmanship, writing maintainable code"
};

export const writingTestsFeelsSlowDetails: Post = {
  title: "Writing Tests Feels Slow—Until It Isn’t",
  url: "writing-tests-feels-slow",
  description:
    "Why testing isn't a slowdown—it's a speed boost in disguise. This post tackles the common misconception that writing tests slows down development. It makes the case that automated tests actually accelerate delivery by catching bugs early, documenting behavior, making refactoring safe, and reducing long-term costs. Whether you're building something small or scaling a long-term product, testing is one of the smartest investments you can make.",
  author: "Chase Hardin",
  date: "July 16, 2025",
  keywords: "writing tests, automated testing, test-driven development, software testing benefits, catching bugs early, test documentation, safe refactoring, long-term projects, software quality, developer productivity, test automation, reducing bugs, codebase maintainability, faster delivery, software development best practices, testing importance, testing investment, software reliability, continuous integration, test suite benefits, software craftsmanship, debugging efficiency, product stability, code confidence, development speed"
};

export const functionalBuilderPatternDetails: Post = {
  title: "The Functional Builder Pattern",
  url: "functional-builder-pattern",
  description:
    "Tired of state bugs and clunky test data setups? This post explores a cleaner alternative to the traditional builder pattern using pure functions and the power of composition. Learn how functional builders can simplify data setup, eliminate side effects, and make your test code more readable and reusable. Whether you're working in React or just want a more predictable way to construct state, this post walks through real-world examples—including a woodworking-inspired case study—to help you rethink how you build.",
  author: "Chase Hardin",
  date: "August 10th, 2020",
  keywords: "functional builder pattern, builder pattern, functional programming, pure functions, state management, currying, data setup, code reuse, test data builders, flow function, lodash flow, JavaScript builder pattern, React functional components, side effects reduction, mutation avoidance, functional design, software craftsmanship, code maintainability, chaining functions, test-driven development, building test data, functional code patterns, functional programming in JavaScript, data abstraction, software design patterns, debugging state issues"
};

const posts: Post[] = [
  fromCleanCodeToAIDetails,
  writingTestsFeelsSlowDetails,
  functionalBuilderPatternDetails,
];

export const LandingPage = () => {
  return (
    <main className="flex justify-center w-full px-4 py-10 bg-zinc-900">
      <div className="container max-w-3xl space-y-12">
        {posts.map((post, index) => (
          <div key={post.url}>
            <PostCard post={post} />
            {index < posts.length - 1 && (
              <hr className="border-zinc-700 mt-10" />
            )}
          </div>
        ))}
      </div>
    </main>
  );
};

const PostCard = ({ post }: { post: Post }) => {
  const navigate = useNavigate();

  return (
    <article className="space-y-4">
      <div className="text-sm text-zinc-400 italic tracking-wide">
        {post.date} &bull; {post.author}
      </div>

      <h2
        className="text-2xl font-mono font-semibold text-zinc-100 cursor-pointer hover:underline"
        onClick={() => navigate(post.url)}
      >
        {post.title}
      </h2>

      <p className="text-zinc-300 leading-relaxed text-base">
        {post.description}
      </p>

      <button
        className="cursor-pointer text-sm text-sky-400 font-semibold hover:underline mt-2"
        onClick={() => navigate(post.url)}
      >
        Read more →
      </button>
    </article>
  );
};
