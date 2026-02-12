import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { I_news } from "../interfeices";
type CountryCode = "us" | "ru" | "cn";
// type language = "en" | "ru" | "zh";

interface I_store {
  news: I_news | null;
  CountryCode: CountryCode;
}
const initialState: I_store = { news: null, CountryCode: "us" };
export const pageReduser = createSlice({
  name: "newsPage",
  initialState,
  reducers: {
    setPage: (state, action: PayloadAction<I_news>) => {
      state.news = action.payload;
    },
    setCountry: (state, action: PayloadAction<CountryCode>) => {
      state.CountryCode = action.payload;
    },
  },
});

export const { setPage, setCountry } = pageReduser.actions;
export default pageReduser.reducer;
