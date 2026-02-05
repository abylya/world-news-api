//import { useState } from "react";

import { BannersBlock } from "../../banner";
import { SearchBlock } from "../../search";
import styles from "./styles.module.css";

export default function Main() {
  //const [currentUrlNews, setCurrentUrlNews] = useState<string>("");

  return (
    <>
      <main className={styles.main}>
        <BannersBlock></BannersBlock>
        <SearchBlock></SearchBlock>
      </main>
    </>
  );
}
