type BlogPostWrapperProps = {
  children: React.ReactNode;
};

export const BlogPostWrapper = ({ children }: BlogPostWrapperProps) => {
  return (
    <article
      className="
        max-w-3xl mx-auto px-6 py-12 bg-zinc-900
        text-zinc-100 leading-relaxed

        [&_*]:text-zinc-100
        [&_h1]:text-4xl [&_h1]:font-mono [&_h1]:font-bold [&_h1]:mb-8
        [&_h2]:text-3xl [&_h2]:font-mono [&_h2]:font-semibold [&_h2]:mt-10 [&_h2]:mb-4
        [&_h3]:text-2xl [&_h3]:font-mono [&_h3]:font-medium [&_h3]:mt-8 [&_h3]:mb-3

        [&_p]:mb-6 [&_p]:text-zinc-300 [&_p]:leading-relaxed

        [&_a]:text-sky-400 [&_a]:hover:text-sky-300 [&_a]:underline

        [&_code]:bg-zinc-800 [&_code]:text-blue-400 [&_code]:px-1.5 [&_code]:py-[0.2em] [&_code]:rounded-md [&_code]:text-sm

        [&_pre]:bg-zinc-800 [&_pre]:text-sm [&_pre]:rounded-xl [&_pre]:p-6 [&_pre]:overflow-x-auto [&_pre]:mb-8

        [&_blockquote]:border-l-4 [&_blockquote]:border-sky-500 [&_blockquote]:pl-6 [&_blockquote]:italic [&_blockquote]:text-zinc-400 [&_blockquote]:mb-6

        [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-6 [&_ul]:marker:text-zinc-100
        [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:mb-6 [&_ol]:marker:text-zinc-100
      "
    >
      {children}
    </article>
  );
};
