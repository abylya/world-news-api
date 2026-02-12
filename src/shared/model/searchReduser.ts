import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { I_apiParam, I_news } from "../interfeices";
import { getCurrentDate } from "../helps";
import { PageAmount } from "../constant";

// Define a type for the slice state
interface Store {
  news: I_news[];
  filterSearch: I_apiParam;
}

// Define the initial state using that type
const initialState: Store = {
  news: [],
  filterSearch: {
    language: "en",
    ["source-country"]: "us",
    number: PageAmount,
    text: "",
    ["news-sources"]: "",
    categories: "politics",
    ["latest-publish-date"]: getCurrentDate(0),
    ["earliest-publish-date"]: getCurrentDate(30),
  },
};

export const searchNewsSlice = createSlice({
  name: "currentNews",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setCurrentNews: (state, action: PayloadAction<I_news[]>) => {
      state.news = action.payload;
    },

    setFilterAll: (
      state,
      action: PayloadAction<{
        currentUrlNews: string;
        language: string;
        country: string;
      }>,
    ) => {
      //console.log(action.payload);
      const { currentUrlNews, language, country } = action.payload;
      const filter = {
        ...state.filterSearch,
        text: "",
        number: 1,
        categories: "",
        ["news-sources"]: currentUrlNews,
        language: language,
        country: country,
      };

      state.filterSearch = { ...filter };
    },
    setFilter(state, action: PayloadAction<object>) {
      state.filterSearch = {
        ...state.filterSearch,
        ...action.payload,
      };
    },
    setCountrySearch: (state, action: PayloadAction<"us" | "ru" | "cn">) => {
      const country = action.payload;
      switch (country) {
        case "us":
          state.filterSearch = {
            ...state.filterSearch,
            ["source-country"]: country,
            language: "en",
          };
          break;
        case "ru":
          state.filterSearch = {
            ...state.filterSearch,
            ["source-country"]: country,
            language: "ru",
          };
          break;
        case "cn":
          state.filterSearch = {
            ...state.filterSearch,
            ["source-country"]: country,
            language: "zh",
          };
          break;
        default:
          state.filterSearch = {
            ...state.filterSearch,
            ["source-country"]: country,
            language: "en",
          };
      }
    },
  },
});

export const { setCurrentNews, setFilterAll, setFilter, setCountrySearch } =
  searchNewsSlice.actions;

// Other code such as selectors can use the imported `RootState` type
// export const selectTopNews = (state: RootState) => state.news.currentNews;

export default searchNewsSlice.reducer;
