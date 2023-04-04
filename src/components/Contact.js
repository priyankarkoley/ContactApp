import React from "react";

function Contact(props) {
  var n='tel:+91' + props.num;
  var m='mailto:' + props.mail;
  var w=props.web
  return (
    <>
      <div className="contacts">
        <img className="img card" src={props.img} alt="Contact" />
        <p className="name card">{props.fname} {props.lname}</p>
        <a href={n} className="num card">{props.num} </a>
        <a href={m} className="mail card"> {props.mail} </a>
        <a href={w} target="_blank" className="web card"> {props.web} </a>
      </div>
    </>
  );
}
export default Contact;