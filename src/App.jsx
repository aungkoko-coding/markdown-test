import MDEditor from "@uiw/react-md-editor";
import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import "github-markdown-css/github-markdown-dark.css";

function App() {
  const [value, setValue] = useState("# Hello, world!");
  return (
    <div className="bg-default min-h-screen text-white w-full">
      <div className="">
        <MDEditor value={value} onChange={setValue} style={{ height: 500 }} />
      </div>
      <div className="markdown-body text-white mt-10 w-full  bg-default font-ubuntu">
        <ReactMarkdown rehypePlugins={rehypeRaw}>{value}</ReactMarkdown>
      </div>
    </div>
  );
}

export default App;
