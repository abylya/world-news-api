import styles from "./styles.module.css";
import { SearchItem } from "../searchItem";
import type { I_news } from "@/shared/interfeices";
import type { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import type { SerializedError } from "@reduxjs/toolkit";
import { PageAmount } from "@/shared/constant";
import { withSkiliton } from "@/widgets/withSkiliton";
interface I_props {
  news: I_news[];
  isLoading: boolean;
  error: FetchBaseQueryError | SerializedError | undefined;
  direction: string;
}
const SearchNews = ({ news, isLoading, error, direction }: I_props) => {
  if (!isLoading && !error && news) {
    return (
      <ul
        className={`${styles.list} ${direction === "row" ? styles.row : styles.column}`}
      >
        {news.map((item) => {
          return <SearchItem key={item.id} news={item}></SearchItem>;
        })}
      </ul>
    );
  }
};

const WithSkiliton = withSkiliton(SearchNews, PageAmount);
export default WithSkiliton;
