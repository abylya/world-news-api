// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { setLoading } from "../../model";
import type { I_apiParam, I_apiRespons } from "@/shared/interfeices";
// import { setTopNews } from "../model/bannerNewsReduser";

const BASE_URL = import.meta.env.VITE_NEWS_BASE_API_URL;
const API_KEY = import.meta.env.VITE_NEWS_API_KEY;
// Define a service using a base URL and expected endpoints
export const ApiBanner = createApi({
  reducerPath: "ApiBanner",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  //keepUnusedDataFor: 60,
  endpoints: (builder) => ({
    getTopNews: builder.query<I_apiRespons, I_apiParam>({
      query: (param) => {
        return {
          url: "top-news",
          params: {
            ["api-key"]: API_KEY,
            ...param,
          },
        };
      },
      async onQueryStarted(_arg, { dispatch, queryFulfilled }) {
        const rez = await queryFulfilled;

        if (rez) {
          dispatch(setLoading(false));
        }
      },
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetTopNewsQuery } = ApiBanner;
