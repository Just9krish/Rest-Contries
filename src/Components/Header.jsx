import useDark from "../Hooks/useDark";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  const [colorTheme, setTheme] = useDark();

  function toggleDarkMode() {
    setTheme(colorTheme);
  }

  return (
    <header className="flex items-center justify-between px-3 py-5 text-very-dark-blue-t bg-white shadow-navbar transition-all md:px-14 lg:px-16 dark:bg-dark-blue dark:text-white">
      <h1 className="font-extrabold">Where in the world?</h1>
      <div onClick={toggleDarkMode} className="relative">
        <button className="absolute flex items-center justify-center text-sm transition-all dark:opacity-0">
          <FontAwesomeIcon className="mr-2" icon={faMoon} />
          Dark Mode
        </button>
        <button className="flex opacity-0 items-center justify-center text-sm transition-all dark:opacity-100">
          <FontAwesomeIcon className="mr-2" icon={faSun} />
          Light Mode
        </button>
      </div>
    </header>
  );
}
