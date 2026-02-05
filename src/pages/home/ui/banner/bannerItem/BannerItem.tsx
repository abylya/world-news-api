import type { I_news } from "@/shared/api";
import styles from "./styles.module.css";

interface I_props {
  item: I_news;
  onClick?: () => void;
}
export default function BannerItem({ item, onClick }: I_props) {
  return (
    <li className={styles.item} onClick={() => onClick}>
      <div className={styles.imageBlock}>
        {item.image && (
          <img src={item.image} alt="news pikche" className={styles.image} />
        )}
      </div>
      <div className={styles.header}>
        <h4 className={styles.title}>{item.title}</h4>
      </div>
    </li>
  );
}
