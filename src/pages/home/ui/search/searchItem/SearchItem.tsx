import type { I_news } from "@/shared/interfeices";
import styles from "./styles.module.css";
import { timeAgo } from "@/shared/helps";
interface I_props {
  news: I_news;
}
export default function SearchItem({ news }: I_props) {
  let text = news.text;
  if (text.length > 500) text = text.slice(0, 450) + " ...";
  return (
    <div className={styles.news}>
      <h4 className={styles.title}>{news.title}</h4>
      <div className={styles.content}>
        <div className={styles.imageBlock}>
          {news.image && (
            <img src={news.image} alt="news pikche" className={styles.image} />
          )}
        </div>

        <p className={styles.text}>{text}</p>
        <div style={{ clear: "both" }}></div>
      </div>
      <footer className={styles.content_info}>
        <cite>
          {news.authors?.map(
            (a, ind) => `${a}${ind == news.authors.length - 1 ? "" : ", "}`,
          )}
        </cite>
        <time dateTime={news.publish_date}>{timeAgo(news.publish_date)}</time>
      </footer>
    </div>
  );
}
