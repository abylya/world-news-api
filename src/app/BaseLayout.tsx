import { Outlet } from "react-router-dom";
import { Header } from "@/pages/home";
import { GetTheme } from "@/shared/lib";
export default function BaseLayout() {
  const { isDark, setTheme } = GetTheme();

  return (
    <div className={`app ${isDark ? "dark" : ""}`}>
      <Header isDark={isDark} setTheme={setTheme}></Header>
      <div className="conteiner">
        <Outlet></Outlet>
      </div>
    </div>
  );
}
