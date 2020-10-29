import React, { useEffect, useState } from "react";
import axios from "axios";

const Search = () => {
  const [term, setTerm] = useState("programming");
  const [deboundTerm, setDeboundTerm] = useState(term); // to throw away the warning
  const [results, setResults] = useState([]);

  console.log(results);

  const renderedlists = results.map((ele) => {
    return (
      <div key={ele.pageid} className="item">
        <div className="ui right floated button">
          <a href={`https://en.wikipedia.org?curid=${ele.pageid}`}> Go</a>
        </div>
        <div className="content">
          <div className="header">{ele.title}</div>
          <span dangerouslySetInnerHTML={{ __html: ele.snippet }}></span>
        </div>
      </div>
    );
  });
  const handleChange = (event) => {
    setTerm(event.target.value);
  };

  useEffect(() => {
    const timeid = setTimeout(() => {
      setDeboundTerm(term);
    }, 1000);

    return () => clearTimeout(timeid);
  }, [term]);

  useEffect(() => {
    const search = async () => {
      const { data } = await axios.get("https://en.wikipedia.org/w/api.php", {
        params: {
          action: "query",
          list: "search",
          format: "json",
          origin: "*",
          srsearch: deboundTerm,
        },
      });
      setResults(data.query.search);
      console.log(data);
    };

    // if (!results.length) {
    //   search();
    // } else {
    //   const timeID = setTimeout(() => {
    //     if (term) {
    //       search();
    //     }
    //   }, 1000);

    //   return () => {
    //     clearTimeout(timeID);
    //   };
    // }

    search();

    console.log("axios");
  }, [deboundTerm]);

  return (
    <div className="ui container">
      <div className="ui form">
        <div className="field">
          <label>Search Term</label>
          <input
            value={term}
            className="input"
            onChange={(e) => {
              handleChange(e);
            }}
          ></input>
        </div>
      </div>
      <div className="ui celled list">{renderedlists}</div>
    </div>
  );
};

export default Search;
