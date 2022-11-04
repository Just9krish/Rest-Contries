import Skeleton from "./Skeleton";

export default function Countries(props) {
  // console.log(props.countries);
  return (
    <>
      <form className="px-4 py-4 md:flex md:justify-between md:items-center md:px-16 lg:px-20">
        <div className="relative flex pt-4">
          <input
            type="search"
            placeholder="Search for a country..."
            name="search"
            aria-label="search"
            className="bg-white text-very-dark-blue-t placeholder-currentColor font-normal h-12 px-5 pl-16 w-full rounded-md text-sm shadow-box transition-all ease-in focus:outline-none md:text-md dark:bg-dark-blue dark:text-white"
          />
          <button type="submit" className="absolute top-0 left-0 mt-8 ml-6">
            <svg
              className="fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              width="17"
              height="17"
            >
              <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352c79.5 0 144-64.5 144-144s-64.5-144-144-144S64 128.5 64 208s64.5 144 144 144z" />
            </svg>
          </button>
        </div>
        <div className="pt-10 md:pt-4">
          <select
            name=""
            id=""
            className="m-0 px-5 py-3.5 text-sm font-normal shadow-box bg-white text-very-dark-blue-t rounded-md md:text-md md:mt-0 transition-all ease-in dark:bg-dark-blue dark:text-white"
          >
            <option value="" selected>
              Filter by Region
            </option>
            <option value="">Africa</option>
            <option value="">America</option>
            <option value="">Asia</option>
            <option value="">Europe</option>
            <option value="">Oceania</option>
          </select>
        </div>
      </form>
      <div>
        <Skeleton />
      </div>
    </>
  );
}
