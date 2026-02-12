import { useAppDispatch, useAppSelector } from "@/shared/lib/store";
import styles from "./styles.module.css";
import { useGetTopNewsQuery } from "@/shared/api";
import { ListNews } from "../../listNews";
import type { I_news } from "@/shared/interfeices";
import { useNavigate } from "react-router-dom";
import { setPage } from "@/shared/model";

export default function BannersBlock() {
  //const [selected, setSelected] = useState(101);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
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

  function navigationTo(news: I_news) {
    dispatch(setPage(news));
    navigate(`/news/${news.id}`);
  }
  if (error)
    return (
      <div className={styles.error}>
        Слишком много запросов. Попробуйте позже.
      </div>
    );
  return (
    <div className={styles.top_news}>
      <h3 className={styles.title}>top news today</h3>
      <ListNews
        news={news}
        isLoading={isLoading}
        error={error}
        type={"banner"}
        viewNewsSlot={(news: I_news) => {
          return (
            <a
              style={{
                color: "blue",
                fontStyle: "italic",
                whiteSpace: "nowrap",
              }}
              onClick={(e) => {
                e.preventDefault();
                return navigationTo(news);
              }}
            >
              show more
            </a>
          );
        }}
      ></ListNews>
    </div>
  );
}
