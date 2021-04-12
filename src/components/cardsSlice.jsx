import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  // Array that contains all cards
  cardList: [
    {
      number: "5555555555555555",
      name: "Erik Axelsson",
      expiry: "1025",
      cvc: "111",
      id: Date.now(),
      status: true,
    },
    {
      number: "6555555555555555",
      name: "Adam svensson",
      expiry: "1127",
      cvc: "222",
      id: Date.now(),
      status: false,
    },
    {
      number: "6212312312312312",
      name: "Sven Adamsson",
      expiry: "0429",
      cvc: "219",
      id: Date.now(),
      status: false,
    },
  ],
};

const slice = createSlice({
  name: "cards",

  initialState,

  reducers: {
    // action to push states to array and create a new card
    saveCard: (state, action) => {
      state.cardList.push(action.payload);
    },

    changeStatus: (state, { payload }) => {
      for (let i = 0; i < state.cardList.length; i++) {
        // if status on the "active" card is true make it false
        if (state.cardList[i].status === true) {
          state.cardList[i].status = false;
        }
      }
      // "reverse" the status on the card that should be active
      // change card from false to true
      state.cardList[payload].status = !state.cardList[payload].status;
    },
  },
});

// Export actions
export const { saveCard, changeStatus, removeCard } = slice.actions;

// Export the slice
export default slice.reducer;
