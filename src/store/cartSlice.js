import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add: (state, action) => {
        let exist = state.find((value) => value.id === action.payload.id);
        if (exist) {
          exist.count += parseInt(action.payload.count || 1, 10);
        } else {
          state.push({
            ...action.payload,
            count: parseInt(action.payload.count || 1, 10),
          });
        }
      },      
    remove: (state, action) => {
      return state.filter((item) => item.id !== action.payload.id);
    },
    update: (state, action) => {
      let exist = state.find((item) => item.id === action.payload.id);
      if (exist) {
        exist.count = action.payload.count;
      }
    },
    clear: () => {
      return [];
    },
  },
});

export default cartSlice.reducer;
export const { add, remove, update, clear } = cartSlice.actions;
