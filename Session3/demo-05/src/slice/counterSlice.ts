import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface CounterTypes {
  count: number;
}

const initialState: CounterTypes = {
  count: 22,
};

const counterSlice = createSlice({
  name: "counter",
  initialState: initialState,
  reducers: {
    increment: (state: CounterTypes) => {
      state.count += 1;
    },
    decrement: (state: CounterTypes) => {
      state.count -= 1;
    },
    incrementByAmount: (state: CounterTypes, action: PayloadAction<number>) => {
      state.count += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export default counterSlice;
