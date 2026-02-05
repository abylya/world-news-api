import { combineReducers } from "@reduxjs/toolkit";

import { searchReduser, topReduser } from "@/shared/model";
import { ApiBanner } from "@/shared/api/topNews/apiTopNews";
import { ApiSearch } from "@/shared/api/searchNews/apiSearchNews";

export const rootReduser = combineReducers({
  topNews: topReduser,
  searchNews: searchReduser,
  [ApiBanner.reducerPath]: ApiBanner.reducer,
  [ApiSearch.reducerPath]: ApiSearch.reducer,
});
