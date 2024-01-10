import MDEditor from "@uiw/react-md-editor";
import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import "github-markdown-css/github-markdown-dark.css";
import { createStarryNight, common } from "@wooorm/starry-night";

function App() {
  const [markdown, setMarkdown] = useState(localStorage.getItem("markdown"));
  const [tree, setTree] = useState(null);
  useEffect(() => {
    async function highlightCode() {
      const starryNight = await createStarryNight(common);
      const scope = starryNight.flagToScope("javascript");
      const tree = starryNight.highlight(markdown, scope);
      setTree(tree);
    }
    if (markdown) {
      highlightCode();
    }
  }, [markdown]);

  const handleMarkdownChange = (newMarkdown) => {
    setMarkdown(newMarkdown);
    localStorage.setItem("markdown", newMarkdown);
  };

  return (
    <div className="bg-default min-h-screen text-white w-full">
      <div className="">
        <MDEditor
          value={markdown}
          onChange={handleMarkdownChange}
          style={{ height: 500 }}
        />
      </div>
      <button
        onClick={() => navigator.clipboard.writeText(JSON.stringify(markdown))}
        className=" px-4 py-2 rounded-md bg-cyan-600 text-white"
      >
        Copy Markdown
      </button>
      <div
        className={`markdown-body mx-auto text-white mt-10 w-full prose prose-lg prose-code:text-white prose-strong:text-white prose-table:text-white prose-thead:text-white prose-td:text-white prose-th:text-white prose-h1:text-white prose-h2:text-white prose-h3:text-white prose-h4:text-white prose-h5:text-white prose-h6:text-white bg-default font-ubuntu`}
      >
        <ReactMarkdown
          rehypePlugins={rehypeRaw}
          // components={{
          //   code: ({ node, inline, className, children, ...props }) => {
          //     const match = /language-(\w+)/.exec(className || "");
          //     return !inline && match ? (
          //       <pre
          //         className={`language-${match[1]} rounded-md p-2`}
          //         {...props}
          //         // dangerouslySetInnerHTML={{ __html: tree.value }}
          //       >
          //         {children}
          //       </pre>
          //     ) : (
          //       <code className={className} {...props}>
          //         {children}
          //       </code>
          //     );
          //   },
          // }}
        >
          {markdown}
        </ReactMarkdown>
      </div>
    </div>
  );
}

export default App;
