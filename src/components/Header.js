import React from "react";
import Link from "./Link";
const Header = () => {
  return (
    <div className="ui secondary menu">
      <Link className="item" href="/">
        Accordion
      </Link>

      <Link className="item" href="/search">
        Wiki Search
      </Link>
      <Link className="item" href="/translate">
        Translate
      </Link>
      <Link className="item" href="/dropdown">
        DropDown
      </Link>
    </div>
  );
};

export default Header;
