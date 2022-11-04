import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faChevronDown, } from "@fortawesome/free-solid-svg-icons";

const Search = () => {
    return (
        <form className='w-full max-w-sm'>
            <div className="relative min-h-[50px]">
                <FontAwesomeIcon
                    icon={faMagnifyingGlass}
                    className="absolute left-5 top-1/2 -translate-y-2/4 z-[2] text-xl transition-all text-very-dark-blue-t cursor-events-none dark:text-white"
                />
                <input
                    type="search"
                    placeholder="Search for country..."
                    className="appearance-none absolute top-0 left-0 w-full h-full z-[1] pl-16 pr-4 bg-white text-very-dark-blue-t border-0 rounded-md shadow-box focus:outline-none transition-all dark:bg-dark-blue dark:text-white dark:placeholder-white"
                />
            </div>
        </form>
    );
}

export default Search;
