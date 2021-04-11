import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  // Array to contain new cards
  cardList: [
    {
      number: "5555555555555555",
      name: "Erik Axelsson",
      expiry: "1025",
      cvc: "111",
      /* id: Date.now(), */
      status: true,
    },
    {
      number: "6555555555555555",
      name: "Adam svensson",
      expiry: "1127",
      cvc: "222",
      /* id: Date.now(), */
      status: false,
    },
  ],
};

const slice = createSlice({
  name: "cards",

  initialState,

  reducers: {
    // action to push new cards to array
    saveCard: (state, action) => {
      state.cardList.push(action.payload);
    },

    changeStatus: (state, action) => {
      console.log(action);
    },

    /* setActive: (state, action) => {
      state.cardList.map((item) => {
        if (action.payload === item.id) {
          if (item.status === true) {
            item.status = false;
          } else {
            item.status = true;
          }
        }
      });
    }, */

    /* removeCard: */
  },

  extraReducers: {},
});

// Export actions
export const { saveCard, changeStatus, setActive } = slice.actions;

// Go in cards slice and pick out the cardList state and return it
/* export const selectCardList = (state) => state.cards.cardList; */
/* export const selectNewCardList = (state) => state.cards.list; */

// Export the slice
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
