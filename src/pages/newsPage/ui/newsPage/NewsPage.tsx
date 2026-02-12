import styles from "./styles.module.css";
import { useAppSelector } from "@/shared/lib/store";
import { Link } from "react-router-dom";
import { ItemNews } from "@/entities/news";

export default function NewsPage() {
  const news = useAppSelector((state) => state.pageNews.news);
  if (news === null) {
    return (
      <div className={styles.errBlock}>
        <h1>No content</h1>
        <Link to={"/"}>
          <p>go houme</p>
        </Link>
      </div>
    );
  }
  return <ItemNews news={news}></ItemNews>;
}
