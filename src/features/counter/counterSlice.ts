import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 10,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    // redux use immer library that allow state to update the state and not affecting original state
    increment: (state) => {
      state.value++;
    },
    setAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

export const { increment, setAmount } = counterSlice.actions;
export default counterSlice.reducer;
