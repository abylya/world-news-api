import Categories from "../Categories/Categories";
import styles from "./styles.module.css";
import { useAppDispatch, useAppSelector } from "@/shared/lib/store";
import { useGetCurrentNewsQuery } from "@/shared/api";
import { setFilter, setPage } from "@/shared/model";
import { ListNews } from "../../listNews";
import { Slider } from "../../slider";
import { PaginationWrapper } from "../../paginationWrapper";
import { useNavigate } from "react-router-dom";
import type { I_news } from "@/shared/interfeices";
import { SelectCountry } from "../../selectCountry/selectCountry";
// import { useEffect } from "react";

export default function SearchBlock() {
  const param = useAppSelector((state) => state.searchNews.filterSearch);
  const topLoading = useAppSelector((state) => state.topNews.loading);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { news, isLoading, error, offset } = useGetCurrentNewsQuery(param, {
    selectFromResult: ({ data, isLoading, error }) => {
      return {
        news: data && data.news ? data.news : [],
        isLoading,
        error,
        offset: data && data.offset ? data.offset : 0,
      };
    },
    skip: topLoading, //true запрос не отправшт
  });

  // useEffect(() => {
  //   if (!topLoading) {
  //     if (!isLoading) dispatch(setLoading(true));
  //   }
  // }, [topLoading]);

  function chengeOffset(num: number) {
    dispatch(setFilter({ offset: num }));
  }
  function navigationTo(news: I_news) {
    dispatch(setPage(news));
    navigate(`/news/${news.id}`);
  }

  return (
    <div className={styles.search_news}>
      <h3>Select news</h3>
      <SelectCountry></SelectCountry>
      <Slider>
        <Categories></Categories>
      </Slider>
      <PaginationWrapper
        top
        bottom
        chengeOffset={chengeOffset}
        offset={offset}
        amount={param.number ? param.number : 10}
      >
        <ListNews
          news={news}
          isLoading={isLoading || topLoading}
          error={error}
          type={"search"}
          viewNewsSlot={(n: I_news) => (
            <a
              style={{
                color: "blue",
                fontStyle: "italic",
                whiteSpace: "nowrap",
              }}
              onClick={(e) => {
                e.preventDefault();
                return navigationTo(n);
              }}
            >
              show more
            </a>
          )}
        ></ListNews>
      </PaginationWrapper>
    </div>
  );
}
