import { useAppDispatch, useAppSelector } from "@/shared/lib/store";
import styles from "./styles.module.css";
import { GetTheme } from "@/shared/lib/context";
import { setFilter } from "@/shared/model";
import { forwardRef, type ForwardedRef } from "react";

const Categories = forwardRef((_, ref: ForwardedRef<HTMLUListElement>) => {
  const { isDark } = GetTheme();
  const dispatch = useAppDispatch();
  const currentCategory = useAppSelector(
    (state) => state.searchNews.filterSearch.categories,
  );
  function handleCategory(category: string) {
    dispatch(setFilter({ categories: category, text: category, offset: 0 }));
  }

  return (
    <ul
      className={`${styles.categories} ${isDark ? styles.dark : ""}`}
      ref={ref}
    >
      {categoryArr.map((item) => {
        return (
          <li key={item}>
            <button
              className={
                currentCategory === item
                  ? `${styles.active} ${styles.category}`
                  : styles.category
              }
              onClick={() => handleCategory(item)}
            >
              {item}
            </button>
          </li>
        );
      })}
    </ul>
  );
});

export default Categories;
const categoryArr = [
  "politics",
  "sports",
  "business",
  "technology",
  "entertainment",
  "health",
  "science",
  "lifestyle",
  "travel",
  "culture",
  "education",
  "environment",
];
