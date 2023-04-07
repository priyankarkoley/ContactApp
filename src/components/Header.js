import React from "react";

function Header(props) {
  return (
    <>
      <h1 className="m-0 p-2 text-center text-[2.9rem] header bg-[#b3c99c] font-[alkatra] ">{props.heading}</h1>
    </>
  );
}
export default Header;
