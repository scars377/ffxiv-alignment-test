import { configureStore } from "@reduxjs/toolkit";

import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { QUESTIONS } from "./questions";
import {Value} from "./types";

type AppState = {
  answers: (Value | null)[];
};

const initialState: AppState = {
  answers: QUESTIONS.map(() => null),
};

export const appSlice = createSlice({
  name: "state",
  initialState,
  reducers: {
    setAnswer(
      state,
      action: PayloadAction<{ idx: number; value: Value | null }>,
    ) {
      state.answers[action.payload.idx] = action.payload.value;
    },
    setAnswers(state, action: PayloadAction<(Value | null)[]>) {
      state.answers = action.payload;
    },
    clearAnswers(state) {
      state.answers = QUESTIONS.map(() => null);
    },
  },
});

export const { setAnswer, setAnswers, clearAnswers } = appSlice.actions;
export const store = configureStore({
  reducer: {
    app: appSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
