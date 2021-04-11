import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  // Array to contain new cards
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

    changeStatus: (state, { payload }) => {
      /* console.log(state.cardList[payload].status);
      const trueFalse = state.cardList[payload].status; */

      for (let i = 0; i < state.cardList.length; i++) {
        // if status on the "active" card is true make it false
        if (state.cardList[i].status === true) {
          state.cardList[i].status = false;
        }
      }
      // "reverse" the status on the card that should be active
      state.cardList[payload].status = !state.cardList[payload].status;
    },

    removeCard: (state, { payload }) => {
      // 2 lines needed, look up filter(), the id: Date.now() should be used here.
    },
  },

  extraReducers: {},
});

// Export actions
export const { saveCard, changeStatus, setActive } = slice.actions;

// Export the slice
export default slice.reducer;
