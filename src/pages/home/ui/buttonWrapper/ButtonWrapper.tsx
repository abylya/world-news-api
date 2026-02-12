import { GetTheme } from "@/shared/lib/context";
import styles from "./styles.module.css";
interface I_props {
  amount: number;
  chengeOffset: (n: number) => void;
  offset: number;
}
export default function ButtonWrapper({
  amount,
  chengeOffset,
  offset,
}: I_props) {
  const { isDark } = GetTheme();
  function nextPage() {
    if (offset < 100) chengeOffset(offset + amount);
  }
  function prevPage() {
    if (offset >= 10) chengeOffset(offset - amount);
  }
  function getPage(page: number) {
    chengeOffset(page * amount);
  }
  return (
    <ul className={`${styles.button_list} ${isDark ? styles.dark : ""}`}>
      <li onClick={prevPage}>
        <button
          className={styles.arrow}
          disabled={offset < 10}
          onClick={nextPage}
        >
          {"<"}
        </button>
      </li>

      {[...Array(amount)].map((_, ind) => {
        return (
          <li key={ind}>
            <button
              className={`${styles.btn} ${offset === ind * amount ? styles.active : ""}`}
              disabled={offset === ind * amount}
              onClick={() => getPage(ind)}
            >
              {ind + 1}
            </button>
          </li>
        );
      })}

      <li onClick={nextPage}>
        <button
          className={styles.arrow}
          disabled={offset >= 90}
          onClick={nextPage}
        >
          {">"}
        </button>
      </li>
    </ul>
  );
}
