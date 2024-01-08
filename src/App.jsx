import MDEditor from "@uiw/react-md-editor";
import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import "github-markdown-css/github-markdown-dark.css";
import "@tailwindcss/typography";

function App() {
  const [value, setValue] = useState("# Hello, world!");
  return (
    <div className="bg-default min-h-screen text-white w-full">
      <div className="">
        <MDEditor value={value} onChange={setValue} style={{ height: 500 }} />
      </div>
      <div className="markdown-body prose prose-strong:text-white prose-table:text-white prose-thead:text-white prose-td:text-white prose-th:text-white prose-h1:text-white prose-h2:text-white prose-h3:text-white text-white prose-h4:text-white prose-h5:text-white prose-h6:text-white bg-default font-ubuntu">
        <ReactMarkdown rehypePlugins={rehypeRaw}>{value}</ReactMarkdown>
      </div>
    </div>
  );
}

export default App;
