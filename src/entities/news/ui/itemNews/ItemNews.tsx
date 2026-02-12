import type { I_news } from "@/shared/interfeices";
import styles from "./styles.module.css";
import { timeAgo } from "@/shared/helps";
interface I_props {
  news: I_news;
  type?: "search" | "banner";
  viewNewsSlot?: (news: I_news) => React.ReactNode;
}
export default function ItemNews({ news, type, viewNewsSlot }: I_props) {
  if (type === "search" || !type) {
    let text = news.text;
    if (type === "search" && text.length > 300) {
      text = text.slice(0, 300) + " ...";
    }

    return (
      <div className={`${styles.item} ${styles.search}`}>
        <h3 className={styles.title}>{news.title}</h3>
        <div className={`${styles.content} ${styles.clearfix}`}>
          <div className={styles.imageBlock}>
            {news.image && (
              <img
                src={news.image}
                alt="news pikche"
                className={styles.image}
              />
            )}
          </div>

          <p className={styles.text}>
            {text} {viewNewsSlot && viewNewsSlot(news)}
          </p>

          <div style={{ clear: "both" }}></div>
        </div>
        <footer className={styles.content_info}>
          <div className={styles.info}>
            <cite>
              {news.authors?.map((a, ind) => (
                <span
                  key={a}
                >{`${a}${ind == news.authors.length - 1 ? "" : ", "}`}</span>
              ))}
            </cite>
            <time dateTime={news.publish_date}>
              {timeAgo(news.publish_date)}
            </time>
          </div>
          {!type && (
            <a href={news.url} target="blank" className="link">
              go to the website{" "}
            </a>
          )}
        </footer>
      </div>
    );
  }
  if (type === "banner") {
    return (
      <div className={`${styles.item} ${styles.banner}`}>
        <div className={styles.imageBlock}>
          {news.image && (
            <img src={news.image} alt="news pikche" className={styles.image} />
          )}
        </div>
        <div className={styles.header}>
          <h4 className={styles.title}>{news.title}</h4>
        </div>
        {viewNewsSlot && viewNewsSlot(news)}
      </div>
    );
  }
}
