import React, { useState } from "react";

import { useDispatch } from "react-redux";
import { setActive } from "./cardsSlice";

const Card = ({ number, name, valid, type, isActive, id }) => {
  // state to handle true / false on cards
  /* const [active, setActive] = useState(false);
  console.log(active); */

  const dispatch = useDispatch();

  const toggleActive = () => {
    /* setActive(!active); */
    dispatch(setActive(id));
  };

  return (
    <div className="bank-card m-5" onClick={toggleActive}>
      <h3>{type}</h3>
      <p>{number}</p>
      <p>{name}</p>
      <p>{valid}</p>
      <p>{id}</p>
    </div>
  );
};

export default Card;
