// Need to use the React-specific entry point to import createApi
import type { I_apiParam, I_apiRespons } from "@/shared/interfeices";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

//import { setCurrentNews } from "../model/currentReduser";

const BASE_URL = import.meta.env.VITE_NEWS_BASE_API_URL;
const API_KEY = import.meta.env.VITE_NEWS_API_KEY;
// Define a service using a base URL and expected endpoints
export const ApiSearch = createApi({
  reducerPath: "ApiSearch",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getCurrentNews: builder.query<I_apiRespons, I_apiParam>({
      query: (param) => {
        return {
          url: "search-news",
          params: {
            ["api-key"]: API_KEY,
            ...param,
          },
        };
      },
      // async onQueryStarted(_arg, { dispatch, queryFulfilled }) {
      //   const rez = await queryFulfilled;
      //   const { news } = rez.data;
      //   if (news.length > 0) {
      //     dispatch(setCurrentNews(news));
      //   }
      // },
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetCurrentNewsQuery } = ApiSearch;
