import { configureStore } from "@reduxjs/toolkit";
import CardsReducer from "./components/cardsSlice";
/* IMPORT REDUCER HÄR */
export default configureStore({
  reducer: {
    cards: CardsReducer,
  },
});
