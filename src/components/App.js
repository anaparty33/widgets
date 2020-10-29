import React, { useRef, useState } from "react";
import Accordion from "./Accordion";
import DropDown from "./DropDown";
import Routes from "./Routes";
import Search from "./Search.js";
import Translate from "./Translate";
import Header from "./Header";

const items = [
  {
    title: "What is React",
    content: "react is front end java script library",
    id: 1,
  },
  {
    title: "Advantage of React",
    content: "Component rendering is the main feature in react",
    id: 2,
  },
  {
    title: "why is react important",
    content: "React is loved by developed and engineers across the world",
    id: 3,
  },
];

const options = [
  {
    label: "Red Color",
    value: "red",
  },
  {
    label: "Blue Color",
    value: "blue",
  },
  {
    label: "Orange Color",
    value: "orange",
  },
];

// const showAccordion = () => {
//   if (window.location.pathname === "/") return <Accordion items={items} />;
// };

// const showDropDown = () => {
//   if (window.location.pathname === "/dropdown")
//     return (
//       <DropDown
//         options={options}
//         selected={selected}
//         onSelectedColor={setSelected}
//       />
//     );
// };

// const showTranslate = () => {
//   if (window.location.pathname === "/translate") return <Translate />;
// };

// const showSearch = () => {
//   if (window.location.pathname === "/search") return <Search />;
// };

const App = () => {
  const [selected, setSelected] = useState(options[0]);
  const [toggleDropComp, setDropcomp] = useState(true);
  return (
    <React.Fragment>
      {/* <Accordion items={items} /> */}
      {/* <Search /> */}
      {/* <button onClick={() => setDropcomp(!toggleDropComp)}>
        Toggle DropDown
      </button>

      {toggleDropComp ? (
        <DropDown
          options={options}
          selected={selected}
          onSelectedColor={setSelected}
        />
      ) : null} */}{" "}
      {/* <Translate /> */}
      <Header />
      <Routes path="/">
        <Accordion items={items} />
      </Routes>
      <Routes path="/search">
        <Search />
      </Routes>
      <Routes path="/dropdown">
        <DropDown
          label="select a color"
          options={options}
          selected={selected}
          onSelectedColor={setSelected}
        />
      </Routes>
      <Routes path="/translate">
        <Translate />
      </Routes>
    </React.Fragment>
  );
};

export default App;
