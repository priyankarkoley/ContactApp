import React from "react";
import Contact from "./Contact";
import Header from "./Header";

function App() {
  return (
    <>
      <Header heading='Your Contacts'/>
      <Contact 
        img="https://picsum.photos/300/300"
        fname="Priyankar"
        lname="Koley"
        num="9475755144"
        mail="priyankarkoley@gmail.com"
        web="www.google.com"
      />
    </>
  );
}

export default App;
