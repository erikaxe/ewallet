import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "cards",

  /* !!!!!!!!! INITIAL STATE SKA VISAS SOM ACTIVE CARD DIREKT, 
  EV GÖR ETT NYTT STATE DÄR ALLA NYA KORTEN HAMNAR NÄR MAN
  SKAPAR DE OCH LOOPA FRAM DEN UNDER ICKE ACTIVE CARDS !!!!!!!!!*/

  initialState: [
    {
      number: "1111 1111 1111 1111",
      name: "ERIK AXELSSON",
      valid: "10 / 24",
      card: "VISA",
    },
  ],

  reducers: {},

  extraReducers: {},
});

const { actions, reducer } = slice;

/* ATM INGEN REMOVE FUNKTION ÄNNU, SKA FIXAS EN TILL REMOVE CARD */
export const { removeCard } = actions;

export default reducer;
