import React, { useEffect, useState } from "react";
import axios from "axios";
const URL = "https://translation.googleapis.com/language/translate/v2";
const Convert = ({ text, language }) => {
  const [transtext, setTranstext] = useState("");

  const [debouncedtext, setDebouncedtext] = useState("");
  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedtext(text);
    }, 1000);

    return () => {
      clearTimeout(timeout);
    };
  }, [text]);
  useEffect(() => {
    const doTranslate = async () => {
      const res = await axios.post(
        URL,
        {},
        {
          params: {
            q: debouncedtext,
            target: language.value,
            key: "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM",
          },
        }
      );
      console.log(res.data.data.translations[0].translatedText);

      setTranstext(res.data.data.translations[0].translatedText);
    };

    doTranslate();
  }, [debouncedtext, language]);
  return <div className="ui header">{transtext}</div>;
};
export default Convert;
