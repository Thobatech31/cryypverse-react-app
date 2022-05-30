import { createSlice } from "@reduxjs/toolkit";

export const newsSlice = createSlice({
    name: "news",
    initialState: {
        newsList: [],
        isFetching: false,
        error: false,
    },
    reducers: {
        //GET ALL
        getNewsStart: (state) => {
            state.isFetching = true;
            state.error = false;
        },
        getNewsSuccess: (state, action) => {
            state.isFetching = false;
            state.newsList = action.payload.value;
        },
        getNewsFailure: (state) => {
            state.isFetching = false;
            state.error = true;
        },
    },
});

export const {
    getNewsStart,
    getNewsSuccess,
    getNewsFailure,
} = newsSlice.actions;

export default newsSlice.reducer;
