import React from "react";
import Card from "./Card";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCardList } from "./cardsSlice";

/* USESTATE SKA IN HÄR DEN SKA INNEHÅLLA EN INITIAL STATE SOM HAR DET FÖRSTA KORTET, 
SEN SKA DEN "FYLLAS" PÅ OCH LOOPA FRAM DE NYA KORTEN MAN LÄGGER TILL */

/* const cardList = [
  {
    number: "testNumber",
    name: "testName",
    valid: "testValid",
    type: "testCard",
    isActive: false,
    id: 695426487923,
  },
  {
    number: "testNumber2",
    name: "testName2",
    valid: "testValid2",
    type: "testCard2",
    isActive: true,
    id: 474576,
  },
]; */

export default function Home() {
  /* const initialCard = useSelector((state) => state.cards);
  console.log(initialCard);
  const loop = initialCard.map((item, i) => {
    return (
      <div className="bank-card m-3" key={i}>
        <h3>{item.card}</h3>
        <p>{item.number}</p>
        <p>{item.name}</p>
        <p>{item.valid}</p>
      </div>
    );
  }); */
  const cardList = useSelector(selectCardList);
  return (
    <div className="container">
      <h2 className="text-center mt-5">E-WALLET</h2>
      <p className="text-center mt-5">CURRENT ACTIVE CARD</p>
      <p className="text-center mt-5">
        !!!!!!!!!!!!INSERT INITIALSTATE CARD!!!!!!!!!!!!
      </p>

      <hr />
      <p className="text-center mt-5">DEACTIVATED CARDS</p>
      {cardList.map((item, i) => {
        return (
          <Card
            key={i}
            number={item.number}
            name={item.name}
            valid={item.valid}
            type={item.type}
            isActive={item.isActive}
            id={item.id}
          />
        );
      })}
      <div className="row">{/* <ul>{loop}</ul> */}</div>

      <Link to="/addcard">
        <button className="btn btn-dark">ADD A NEW CARD</button>
      </Link>
    </div>
  );
}
