import React, { useState } from "react";
import DropDown from "./DropDown";
import Convert from "./Convert";

const options = [
  {
    label: "Hindi",
    value: "hi",
  },
  {
    label: "Arabic",
    value: "ar",
  },
  {
    label: "Afrikaan",
    value: "af",
  },
];

const Translate = () => {
  const [language, setLanguage] = useState(options[0]);
  const [text, setText] = useState("");
  return (
    <div>
      <div>
        <div className="ui form ">
          <div className="field">
            <label>Enter the text</label>
            <input
              typeof="text"
              onChange={(e) => setText(e.target.value)}
              value={text}
            ></input>
          </div>
        </div>
      </div>

      <DropDown
        label={"select a language"}
        options={options}
        selected={language}
        onSelectedColor={setLanguage}
      />

      <hr />

      <h3 className="ui header">OUTPUT</h3>
      <Convert text={text} language={language} />
    </div>
  );
};

export default Translate;
