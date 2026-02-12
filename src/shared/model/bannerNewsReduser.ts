import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { I_apiParam, I_news } from "../interfeices";
//import type { RootState } from "../index";
// Define a type for the slice state
interface Store {
  news: I_news[];
  filterTop: I_apiParam;
  loading: boolean;
}

// Define the initial state using that type
const initialState: Store = {
  news: [],
  filterTop: {
    language: "en",
    ["source-country"]: "us",
    ["max-news-per-cluster"]: 1,
    data: "",
    //data: formatDate(new Date()),
  },
  loading: true,
};

export const topNewsSlice = createSlice({
  name: "topNews",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setTopNews: (state, action: PayloadAction<I_news[]>) => {
      const news = action.payload;
      state.news = news;
    },

    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setCountryTop: (state, action: PayloadAction<"us" | "ru" | "cn">) => {
      const country = action.payload;
      switch (country) {
        case "us":
          state.filterTop = {
            ...state.filterTop,
            ["source-country"]: country,
            language: "en",
          };
          break;
        case "ru":
          state.filterTop = {
            ...state.filterTop,
            ["source-country"]: country,
            language: "ru",
          };
          break;
        case "cn":
          state.filterTop = {
            ...state.filterTop,
            ["source-country"]: country,
            language: "zh",
          };
          break;
        default:
          state.filterTop = {
            ...state.filterTop,
            ["source-country"]: country,
            language: "en",
          };
      }
    },
  },
});

export const { setTopNews, setLoading, setCountryTop } = topNewsSlice.actions;

// Other code such as selectors can use the imported `RootState` type
// export const selectTopNews = (state: RootState) => state.news.currentNews;

export default topNewsSlice.reducer;
