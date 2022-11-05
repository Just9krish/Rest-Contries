import { useState } from "react";
import useFetch from "../../Hooks/useFetch";
import Country from "./Country";

const Countries = () => {
  let loadCountries = 12;

  const [next, setNext] = useState(loadCountries);
  const {
    data: countries,
    error,
    isLoading,
  } = useFetch("https://restcountries.com/v3.1/all");

  function loadMore() {
    console.log("load more");
    setNext(next + loadCountries);
  }
  console.log("rendered");

  return (
    <>
      <div className="mt-16 grid gap-7 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {/* <div className="flex flex-wrap -mx-1 mt-11 lg:-mx-4"> */}
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

  // Back Up
  // const { data: countries, error, isLoading } = useFetch("https://restcountries.com/v3.1/all")

  // return (
  //     <div className='mt-10 grid gap-7 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
  //         {countries?.map((country, index) => (
  //             <Country key={index} country={country} />
  //         ))}
  //     </div>
  // );
};

export default Countries;
