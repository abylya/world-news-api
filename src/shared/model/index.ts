import topReduser from "./bannerNewsReduser.ts";
import searchReduser from "./searchReduser.ts";
import pageReduser, { setPage, setCountry } from "./newsPageReduser.ts";
export { topReduser };
export { searchReduser };
export { setTopNews, setLoading, setCountryTop } from "./bannerNewsReduser.ts";
export {
  setCurrentNews,
  setFilterAll,
  setFilter,
  setCountrySearch,
} from "./searchReduser.ts";

export { pageReduser, setPage, setCountry };
