import { useState } from "react";
import useFetch from "../../Hooks/useFetch";
import Country from "./Country";
import Loader from "../Loader";
import Error from "../../Pages/Error"

const Countries = ({ region, keyword }) => {
  let loadCountries = 12;

  let url = "https://restcountries.com/v3.1/all";

  if (region) {
    url = `https://restcountries.com/v3.1/region/${region}`;
  } else {
    url = "https://restcountries.com/v3.1/all";
  }

  const [next, setNext] = useState(loadCountries);
  let { data: countries, error, isLoading } = useFetch(url);

  if (keyword) {
    countries = countries.filter((country) => {
      const name = country.name.common;
      return name.toLowerCase().includes(keyword.toLowerCase());
    });
  }

  if (isLoading) return <Loader />;

  if (error) return <Error error={error}/>;

  if (countries?.length == 0) {
    return <p className="mt-16 text-center font-bold text-base md:text-xl lg:text-3xl text-very-dark-blue-t transition-all ease-in dark:text-white">Country not found</p>;
  }

  function loadMore() {
    setNext(next + loadCountries);
  }

  return (
    <>
      <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {countries?.slice(0, next)?.map((country, index) => (
          <Country key={index} country={country} />
        ))}
      </div>
      {next < countries?.length && (
        <div className="w-full text-center py-8">
          <button
            onClick={loadMore}
            className="border-0 background-none sm:w-auto px-5 py-3 uppercase 
          rounded-lg text-sm sm:text-base text-white bg-indigo-500 hover:bg-indigo-400 
          focus:outline-0 active:bg-indigo-600 shadow-box transform transition hover:-translate-y-0.5"
          >
            Load More
          </button>
        </div>
      )}
    </>
  );
};

export default Countries;
