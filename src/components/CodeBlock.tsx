// components/CodeBlock.tsx
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

type CodeBlockProps = {
  code: string;
  language?: string;
  showLineNumbers?: boolean;
};

export const CodeBlock = ({
  code,
  language = "tsx",
  showLineNumbers = false,
}: CodeBlockProps) => {
  return (
    <div className="my-8 overflow-x-auto rounded-xl border border-zinc-700 bg-zinc-900">
      <SyntaxHighlighter
        language={language}
        style={vscDarkPlus}
        showLineNumbers={showLineNumbers}
        wrapLines={true}
        lineProps={{
          style: {
            display: "block",
            whiteSpace: "pre-wrap",
          },
        }}
        customStyle={{
          padding: "1.5rem",
          margin: 0,
          fontSize: "0.875rem",
          lineHeight: "1.6",
          backgroundColor: "transparent",
        }}
        codeTagProps={{
          style: {
            fontFamily: "Fira Code, monospace",
            backgroundColor: "transparent",
          },
        }}
      >
        {code.trim()}
      </SyntaxHighlighter>
    </div>
  );
};
