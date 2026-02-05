export function formatDate(date: Date) {
  const options: Intl.DateTimeFormatOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  return date.toLocaleDateString("en-US", options);
}

export function getTimeForUrl() {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth();
  const toDay = date.getDate();

  return `${year}-${month}-${toDay}-00`;
}

export function getCurrentDate(d: number) {
  const seconds = +new Date();
  const now = new Date(seconds - d * 86400000);
  const year = now.getFullYear(); // 2024
  const month = String(now.getMonth() + 1).padStart(2, "0"); // Месяцы от 0, поэтому +1
  const day = String(now.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}
