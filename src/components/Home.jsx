import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

/* USESTATE SKA IN HÄR DEN SKA INNEHÅLLA EN INITIAL STATE SOM HAR DET FÖRSTA KORTET, 
SEN SKA DEN "FYLLAS" PÅ OCH LOOPA FRAM DE NYA KORTEN MAN LÄGGER TILL */

export default function Home() {
  const initialCard = useSelector((state) => state.cards);
  console.log(initialCard);
  /* const loop = initialCard.map((item, i) => {
    return <li key={i}>{item.card}</li>;
  }); */
  return (
    <div className="container">
      <h2 className="text-center mt-5">E-WALLET</h2>
      <p className="text-center mt-5">CURRENT ACTIVE CARD</p>
      <p>{initialCard[0].card}</p>
      <p>{initialCard[0].name}</p>
      <p>{initialCard[0].number}</p>
      <p>{initialCard[0].valid}</p>
      {/* <ul>{loop}</ul> */}
      <hr />
      <p className="text-center mt-5">DEACTIVATED CARDS</p>
      <div className="text-center mt-5">
        !!!!!!!!!!!!!!!!!! INSERT NEW CARDS HERE !!!!!!!!!!!!!!!!!!!!
      </div>
      <Link to="/addcard">
        <button className="btn btn-dark">ADD A NEW CARD</button>
      </Link>
    </div>
  );
}
