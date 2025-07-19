type BlogPostWrapperProps = {
  children: React.ReactNode;
};

export const BlogPostWrapper = ({ children }: BlogPostWrapperProps) => {
  return (
    <article
      className="
      text-justify
        max-w-3xl mx-auto
        bg-zinc-900 rounded-3xl shadow-lg
        px-8 py-10
        text-zinc-100
        [&_*]:text-zinc-100      /* Force all descendants text color */
        [&_h1]:text-4xl [&_h1]:font-extrabold [&_h1]:mb-6
        [&_h2]:text-3xl [&_h2]:font-bold [&_h2]:mt-8 [&_h2]:mb-4
        [&_h3]:text-2xl [&_h3]:font-semibold [&_h3]:mt-6 [&_h3]:mb-3
        [&_p]:mb-6 [&_p]:leading-relaxed [&_p]:text-zinc-300
        [&_a]:text-emerald-400 [&_a]:hover:text-emerald-300 [&_a]:underline
        [&_code]:bg-zinc-800 [&_code]:text-emerald-400 [&_code]:px-1 [&_code]:py-[0.1em] [&_code]:rounded
        [&_pre]:bg-zinc-800 [&_pre]:rounded-xl [&_pre]:p-6 [&_pre]:overflow-x-auto [&_pre]:mb-8
        [&_blockquote]:border-l-4 [&_blockquote]:border-emerald-400 [&_blockquote]:pl-6 [&_blockquote]:italic [&_blockquote]:text-zinc-400 [&_blockquote]:mb-6
        [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-6 [&_ul]:marker:text-zinc-100
        [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:mb-6 [&_ol]:marker:text-zinc-100
      "
    >
      {children}
    </article>
  );
};
