import styles from "./styles.module.css";
import type { I_news } from "@/shared/interfeices";
import type { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import type { SerializedError } from "@reduxjs/toolkit";
import { PageAmount } from "@/shared/constant";
import { withSkiliton } from "@/pages/home/ui/withSkiliton";
import { ItemNews } from "@/entities/news";
interface I_props {
  news: I_news[];
  isLoading: boolean;
  error: FetchBaseQueryError | SerializedError | undefined;
  type?: "search" | "banner";
  viewNewsSlot?: (news: I_news) => React.ReactNode;
}
const ListNews = ({ news, isLoading, error, type, viewNewsSlot }: I_props) => {
  if (!isLoading && !error && news) {
    return (
      <ul
        className={`${styles.list} ${type === "banner" ? styles.row : styles.column}`}
      >
        {news.map((item) => {
          return (
            <li key={item.id}>
              <ItemNews
                news={item}
                type={type}
                viewNewsSlot={viewNewsSlot}
              ></ItemNews>
            </li>
          );
        })}
      </ul>
    );
  }
};

const WithSkiliton = withSkiliton(ListNews, PageAmount);
export default WithSkiliton;
