import React from "react";

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header_flex">
          <div className="logo btn_like">Logo</div>
          <ul className="header_list">
            <li className="btn_like">Home</li>
            <li className="btn_like">About</li>
            <li className="btn_like">Contact</li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;