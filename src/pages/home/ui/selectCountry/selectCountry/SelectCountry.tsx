// components/CountryDropdown.tsx
import React, { useState, useRef, useId, useCallback } from "react";
import { useAppDispatch, useAppSelector } from "@/shared/lib/store";
import styles from "./styles.module.css";
import {
  setCountry,
  setCountrySearch,
  setCountryTop,
  setLoading,
} from "@/shared/model";
type CountryCode = "us" | "ru" | "cn";
const CountryDropdown: React.FC = () => {
  const dispatch = useAppDispatch();
  const currentCountry = useAppSelector((state) => state.pageNews.CountryCode);

  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const dropdownId = useId();
  const options: Array<{ value: CountryCode; label: string }> = [
    { value: "us", label: "🇺🇸 США" },
    { value: "ru", label: "🇷🇺 Россия" },
    { value: "cn", label: "🇨🇭 Китай" },
  ];
  const handleSelect = useCallback(
    (country: CountryCode) => {
      if (currentCountry === country) return;
      // 1. Обновляем фильтр
      dispatch(setLoading(true));
      dispatch(setCountry(country));
      dispatch(setCountryTop(country));
      dispatch(setCountrySearch(country));

      // 3. Закрываем меню
      setIsOpen(false);
      buttonRef.current?.focus();
    },
    [currentCountry, dispatch],
  );

  // Закрытие при клике вне
  React.useEffect(() => {
    const closeIfOutside = (e: MouseEvent) => {
      const target = e.target as Node;
      if (
        buttonRef.current &&
        !buttonRef.current.contains(target) &&
        !e
          .composedPath()
          .some((el) => (el as Element)?.id?.includes(dropdownId))
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", closeIfOutside);
    return () => document.removeEventListener("mousedown", closeIfOutside);
  }, [dropdownId]);

  const toggleOpen = () => setIsOpen((prev) => !prev);

  return (
    <div className={styles.select}>
      {/* Кнопка-триггер */}

      <button
        ref={buttonRef}
        type="button"
        aria-haspopup="menu"
        aria-expanded={isOpen}
        aria-controls={`${dropdownId}-menu`}
        onClick={toggleOpen}
        className={`${styles.btn_triger} ${!isOpen ? styles.open : styles.close}`}
      >
        {options.find((opt) => opt.value === currentCountry)?.label ||
          "🇷🇺 Россия"}
        {/* <svg
            className={`w-4 h-4 text-gray-400 transition-transform ${isOpen ? "rotate-180" : ""}`}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg> */}
      </button>

      {/* Выпадающее меню */}
      {isOpen && (
        <div
          id={`${dropdownId}-menu`}
          role="menu"
          className={styles.btn_wraper}
        >
          <div className={styles.btn_box}>
            {options.map((option) => (
              <button
                key={option.value}
                type="button"
                role="menuitem"
                aria-checked={currentCountry === option.value}
                aria-current={currentCountry === option.value}
                tabIndex={0}
                onClick={() => handleSelect(option.value)}
                className={styles.btn_select}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CountryDropdown;
