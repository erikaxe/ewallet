import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  // Array that contains all cards
  cardList: [
    {
      number: "5555555555555555",
      name: "Erik Axelsson",
      expiry: "1025",
      cvc: "111",
      status: true,
    },
    {
      number: "6555555555555555",
      name: "Adam svensson",
      expiry: "1127",
      cvc: "222",
      status: false,
    },
    {
      number: "4444444444444444",
      name: "Sven Adamsson",
      expiry: "0429",
      cvc: "219",
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
      // payload contains card id from loop index in Home
      // change from false to true to make a new card "active"
      state.cardList[payload].status = !state.cardList[payload].status;
    },
    removeCard: (state, action) => {
      state.cardList.map((item, i) => {
        // if the chosen card number matches number in array delete that object
        // payload contains the card number
        if (item.number === action.payload) {
          state.cardList.splice(i, 1);
        }
        return null;
      });
    },
  },
});

// Export actions
export const { saveCard, changeStatus, removeCard } = slice.actions;

// Export the slice
export default slice.reducer;
