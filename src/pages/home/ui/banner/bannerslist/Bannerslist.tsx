import styles from "./styles.module.css";
import { BannerItem } from "../bannerItem";
import { PageAmount } from "@/shared/constant";
import type { I_news } from "@/shared/interfeices";
import type { SerializedError } from "@reduxjs/toolkit";
import type { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { withSkiliton } from "@/widgets/withSkiliton";

interface I_props {
  news: I_news[];
  isLoading: boolean;
  error: FetchBaseQueryError | SerializedError | undefined;
  direction: string;
}
function Bannerslist({ news, isLoading, error, direction }: I_props) {
  function handleCurrentNews() {
    console.log();
  }
  if (isLoading) return <p>загрузка</p>;
  if (error)
    return (
      <div className={styles.error}>
        Слишком много запросов. Попробуйте позже.
      </div>
    );
  if (news === undefined) return <div>Нет новостей</div>;
  return (
    <ul
      className={`${styles.list} ${direction === "row" ? styles.row : styles.column}`}
    >
      {news.map((item) => (
        <BannerItem
          key={item.id}
          onClick={handleCurrentNews}
          item={item}
        ></BannerItem>
      ))}
    </ul>
  );
}

const WithSkiliton = withSkiliton(Bannerslist, PageAmount);
export default WithSkiliton;
