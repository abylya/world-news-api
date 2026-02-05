import { GetTheme } from "@/shared/lib/context";
import styles from "./styles.module.css";
import Header from "../header/Header";
import { Main } from "../pageContent";
export default function App() {
  const { isDark } = GetTheme();
  return (
    <div className={`${styles.app}   ${isDark ? styles.dark : null}`}>
      <Header></Header>
      <Main></Main>
    </div>
  );
}
