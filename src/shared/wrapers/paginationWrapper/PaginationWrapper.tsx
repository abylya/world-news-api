import ButtonWrapper from "@/widgets/paginationButtons/ui/buttonWrapper/ButtonWrapper";
import type { ReactNode } from "react";
import styles from "./styles.module.css";
interface I_props {
  children: ReactNode;
  top?: boolean;
  bottom?: boolean;
  chengeOffset: (n: number) => void;
  offset: number;
  amount: number;
}
export default function PaginationWrapper({
  children,
  top,
  bottom,
  chengeOffset,
  offset,
  amount,
}: I_props) {
  return (
    <div className={styles.wrapper}>
      {top && (
        <ButtonWrapper
          amount={amount}
          chengeOffset={chengeOffset}
          offset={offset}
        ></ButtonWrapper>
      )}
      {children}
      {bottom && (
        <ButtonWrapper
          amount={amount}
          chengeOffset={chengeOffset}
          offset={offset}
        ></ButtonWrapper>
      )}
    </div>
  );
}
