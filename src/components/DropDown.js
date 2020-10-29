import React, { useEffect, useRef, useState } from "react";

const DropDown = ({ label, options, selected, onSelectedColor }) => {
  const [opendropdown, setDropDown] = useState(true);

  const dropdownref = useRef(null);
  useEffect(() => {
    const handleClick = (e) => {
      if (dropdownref.current.contains(e.target)) {
        return;
      }
      setDropDown(false);
    };
    document.body.addEventListener("click", handleClick);

    return document.body.removeEventListener("click", handleClick);
  }, []);

  const renderlist = options.map((optionele) => {
    if (optionele.value === selected.value) {
      return;
    }

    return (
      <div
        key={optionele.label}
        className="item"
        onClick={() => {
          // console.log("optionele is clicked");
          onSelectedColor(optionele);
        }}
      >
        {optionele.label}
      </div>
    );
  });
  return (
    <div ref={dropdownref} className="ui form">
      <div className="field">
        <label className="lable">{label}</label>

        <div
          onClick={() => {
            // console.log("dropdown is clicked");
            setDropDown(!opendropdown);
          }}
          className={`ui selection dropdown ${
            opendropdown ? "visible active" : ""
          }`}
        >
          <i className="dropdown icon"></i>
          <div className="text">{selected.label} </div>
          <div className={`menu ${opendropdown ? "visible transition" : ""}`}>
            {renderlist}
          </div>
        </div>

        {/* <h4
          style={{ color: selected.value }}
        >{`The selected color is ${selected.value}`}</h4> */}
      </div>
    </div>
  );
};

export default DropDown;
