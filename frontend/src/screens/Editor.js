import React, { useEffect, useState } from "react";
// import "./Editor.css";
import { boilerCodes } from "../boilerCodes";
import CodeEditor from "../components/CodeEditor/CodeEditor";
import CodeInput from "../components/CodeInput/CodeInput";
import CodeOutput from "../components/CodeOutput/CodeOutput";
import Navbar from "../components/Navbar/Navbar";

function Editor() {
  const [output, setOutput] = useState("");
  const [language, setLanguage] = useState({
    label: "JavaScript",
    value: "javascript",
    id: 63,
    name: "JavaScript",
  });

  const [code, setCode] = useState(boilerCodes(language.id));
  const [toggled, setToggled] = useState(true);
  const [testInput, setTestInput] = useState("");
  const [theme, setTheme] = useState("vs-dark");
  const [status, setStatus] = useState(null);

  useEffect(() => {
    setCode(boilerCodes(language.id));
  }, [language]);

  return (
    <div class="vh-100 w-100">
      <div class="d-flex flex-md-row flex-column vh-100 w-100">
        <div class="d-flex flex-column w-100 flex-md-grow-2">
          <Navbar
            setLanguage={setLanguage}
            language={language}
            setTheme={setTheme}
            theme={theme}
            setOutput={setOutput}
            setStatus={setStatus}
            testInput={testInput}
            code={code}
          />

          <CodeEditor
            theme={theme}
            code={code}
            setCode={setCode}
            language={language}
          />
        </div>
        <div class="border-start border-secondary d-flex w-100 flex-grow-1 flex-md-column-reverse h-100">
          <CodeOutput output={output} toggled={toggled} status={status} />
          <CodeInput
            testInput={testInput}
            setTestInput={setTestInput}
            setToggled={setToggled}
          />
        </div>
      </div>
    </div>
  );
}

export default Editor;
