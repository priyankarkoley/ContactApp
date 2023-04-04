import React from "react";

function Contact(props) {
  // img=""
  // fname=""
  // lname=""
  // num=""
  // mail=""
  // website=""
  return (
    <>
      <div className="contacts">
        <img src={props.img} alt="Contact" />
        <p class="name">{props.fname} {props.lname}</p>
        <p class="num">{props.num}</p>
        <p class="mail">{props.mail}</p>
        <p class="web">{props.web}</p>
      </div>
    </>
  );
}
export default Contact;
