import Header from "../../components/header/Header";
import Sidebar from "../../components/sidebar/Sidebar";
import Posts from "../../components/posts/Posts";
import "./Home.css";
import { useDarkMode } from "../../components/DarkModeContext";

export default function Home() {
  const { isDarkMode } = useDarkMode();
  const modeClass = isDarkMode ? 'dark' : '';

  return (
   <div className={`homeBgcolor ${modeClass}`}>
      <Header />
      <div className={`home ${modeClass}`}>
        <Posts />
        <Sidebar />
      </div>
      </div>
  );
}
