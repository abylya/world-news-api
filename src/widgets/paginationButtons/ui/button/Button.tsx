import styles from "./styles.module.css";
interface I_props {
  index: number;
}
export default function Button({ index }: I_props) {
  return <li className={styles.btn}>{index}</li>;
}
