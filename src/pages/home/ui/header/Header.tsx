import styles from "./styles.module.css";
import { icon } from "@/shared/Images/index.ts";
import { formatDate } from "@/shared/helps";
import { GetTheme } from "@/shared/lib/context";
export default function Header() {
  const { isDark, setTheme } = GetTheme();
  const date = formatDate(new Date());
  return (
    <header className={styles.header}>
      <div className={styles.head_content}>
        <h1 className={styles.title}>Good morning</h1>
        <div className={styles.date}> {date}</div>
      </div>
      <div className={styles.cite_dox}>
        <div className={styles.theme} onClick={() => setTheme()}>
          <img src={isDark ? icon.light : icon.dark} alt="theme" width="30" />
        </div>
        <div className={styles.user_box}>
          <span className={styles.icon}></span>
          <span className={styles.nick}></span>
        </div>
      </div>
    </header>
  );
}
