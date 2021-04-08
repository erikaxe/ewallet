import { configureStore } from "@reduxjs/toolkit";
import CardsReducer from "./components/cardsSlice";

export default configureStore({
  reducer: {
    cards: CardsReducer,
  },
});
