import React, { useRef } from "react";
import styles from "./styles.module.css";
interface I_props {
  children: React.ReactElement;
}
export default function Slider({ children }: I_props) {
  const refSlider = useRef<HTMLUListElement | null>(null);
  function handleClickLeft() {
    if (!refSlider.current) return;
    refSlider.current.scrollLeft += 50;
  }
  function handleClickRight() {
    if (!refSlider.current) return;
    refSlider.current.scrollLeft -= 50;
  }

  return (
    <div className={styles.slider}>
      <button className={styles.arrow} onClick={handleClickLeft}>
        {"<"}
      </button>

      {React.cloneElement(children, {
        ref: refSlider,
      } as React.RefAttributes<HTMLUListElement>)}

      <button className={styles.arrow} onClick={handleClickRight}>
        {">"}
      </button>
    </div>
  );
}
