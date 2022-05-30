import { createSlice } from "@reduxjs/toolkit";

export const coinSlice = createSlice({
  name: "coin",
  initialState: {
    coins: [],
    stats: {},
    isFetching: false,
    error: false,
  },
  reducers: {
    //GET ALL
    getCoinStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    getCoinSuccess: (state, action) => {
      state.isFetching = false;
      state.coins = action.payload.coins;
      state.stats = action.payload.stats;
    },
    getCoinFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const {
  getCoinStart,
  getCoinSuccess,
  getCoinFailure,
} = coinSlice.actions;

export default coinSlice.reducer;
