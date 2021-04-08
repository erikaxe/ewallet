import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  // Array to contain new cards
  cardList: [],
};

const slice = createSlice({
  name: "cards",

  initialState,

  reducers: {
    // action to update state
    saveCard: (state, action) => {
      state.cardList.push(action.payload);
    },

    /* Onödigt komplex action enbart för att styra true och false, verkar bättre ändra den med "vanligt" useState istället!!! */
    setActive: (state, action) => {
      state.cardList.map((item) => {
        if (action.payload === item.id) {
          if (item.isActive === true) {
            item.isActive = false;
          } else {
            item.isActive = true;
          }
        }
      });
    },
  },

  extraReducers: {},
});

export const { saveCard, setActive } = slice.actions;

// Go in cards slice and pick out the cardList state and return it
export const selectCardList = (state) => state.cards.cardList;

export default slice.reducer;

/* const { actions, reducer } = slice;

export const { saveCard } = actions;

export default reducer; */

/* 

const slice = createSlice({
  name: "cards",

  initialState: [
    {
      number: "1111 1111 1111 1111",
      name: "ERIK AXELSSON",
      valid: "10 / 24",
      card: "VISA",
    },
    {
      number: "2222 2222 2222 2222",
      name: "ANDERS ANDERSSON",
      valid: "12 / 22",
      card: "MasterCard",
    },
  ],

  reducers: {
    // action to update state
    saveCard: (state, action) => {
      state.cardList.push(action.payload);
    },
  },

  extraReducers: {},
});

const { actions, reducer } = slice;

export const { saveCard } = actions;

export default reducer;

*/
