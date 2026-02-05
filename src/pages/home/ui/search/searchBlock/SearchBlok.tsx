import PaginationWrapper from "@/shared/wrapers/paginationWrapper/PaginationWrapper";
import Categories from "../Categories/Categories";
import SearchNews from "../searchNews/SearchNews";
import styles from "./styles.module.css";
import { useAppDispatch, useAppSelector } from "@/shared/lib/store";
import { useGetCurrentNewsQuery } from "@/shared/api";
import { setFilter } from "@/shared/model";
import Slider from "@/shared/wrapers/slider/Slider";

export default function SearchBlock() {
  const param = useAppSelector((state) => state.searchNews.filterSearch);
  const topLoading = useAppSelector((state) => state.topNews.loading);
  const dispatch = useAppDispatch();
  const { news, isLoading, error, offset } = useGetCurrentNewsQuery(param, {
    selectFromResult: ({ data, isLoading, error }) => ({
      news: data && data.news ? data.news : [],
      isLoading,
      error,
      offset: data && data.offset ? data.offset : 0,
    }),
    skip: topLoading, //true запрос не отправшт
  });

  function chengeOffset(num: number) {
    dispatch(setFilter({ offset: num }));
  }
  return (
    <div className={styles.search_block}>
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
        <SearchNews
          news={news}
          isLoading={topLoading || isLoading}
          error={error}
          direction="column"
        ></SearchNews>
      </PaginationWrapper>
    </div>
  );
}
