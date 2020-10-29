import React, { useState } from "react";

const Accordion = ({ items }) => {
  const [activeState, setActive] = useState(null);
  const handleClick = (e) => {
    console.log(`from here ${e}`);
    setActive(e);
    console.log(activeState);
  };

  const rendereditems = items.map((itemele, index) => {
    const active = activeState === index ? "active" : "";
    return (
      <div key={itemele.id} className="ui styled accordion">
        <div
          className={`title ${active}`}
          onClick={() => {
            handleClick(index);
          }}
        >
          <i className="dropdown icon"></i>
          {itemele.title}
        </div>
        <div className={`content ${active}`}>
          <p>{itemele.content}</p>
        </div>
      </div>
    );
  });

  return (
    <div>
      {rendereditems}
      <div> {activeState}</div>
    </div>
  );
};

export default Accordion;
