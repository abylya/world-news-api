import { useAppSelector } from "@/shared/lib/store";
import { Bannerslist } from "../bannerslist";
import styles from "./styles.module.css";
import { useGetTopNewsQuery } from "@/shared/api";

export default function BannersBlock() {
  //const [selected, setSelected] = useState(101);
  const paramApi = useAppSelector((state) => state.topNews.filterTop);

  const shouldSkip = !paramApi.language || !paramApi["source-country"];
  const { news, isLoading, error } = useGetTopNewsQuery(paramApi, {
    selectFromResult: ({ data, isLoading, error }) => ({
      news:
        (data && data.top_news && data?.top_news?.map((c) => c.news[0])) || [],
      isLoading,
      error,
    }),
    skip: shouldSkip, //true запрос не отправшт
  });
  if (error)
    return (
      <div className={styles.error}>
        Слишком много запросов. Попробуйте позже.
      </div>
    );
  return (
    <div className={styles.top_news}>
      <h3 className={styles.title}>top news today</h3>
      <Bannerslist
        news={news}
        isLoading={isLoading}
        error={error}
        direction={"row"}
      ></Bannerslist>
    </div>
  );
}
