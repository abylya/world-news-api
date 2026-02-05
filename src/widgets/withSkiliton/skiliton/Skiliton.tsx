import styles from "./styles.module.css";

interface I_props {
  direction: string;
  amount: number;
}

export default function Skiliton({ direction, amount }: I_props) {
  // console.log(direction);
  return (
    <div className={styles.skiliton}>
      <ul
        className={`${styles.list} ${direction === "row" ? styles.row : styles.column}`}
      >
        {[...Array(amount)].map((_, ind) => (
          <li key={ind} className={styles.item}></li>
        ))}
      </ul>
    </div>
  );
}
