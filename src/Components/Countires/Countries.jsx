import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { useCountries } from "../../Context/useCountryContext";
import Country from "./Country";
import Loader from "../Loader";
import Error from "../../Pages/Error";
import "../style/buttons.css";

const Countries = ({ region, keyword }) => {
  let loadCountries = 12;
  const [next, setNext] = useState(loadCountries);

  let { data: countries, error, isLoading } = useCountries();

  if (keyword) {
    countries = countries?.filter((country) => {
      const name = country.name.common;
      return name.toLowerCase().includes(keyword.toLowerCase());
    });
  }

  if (region) {
    countries = countries?.filter(
      (country) => country.region.toLowerCase() == region
    );
  }

  if (isLoading) return <Loader />;

  if (error) return <Error error={error} />;

  if (countries?.length == 0) {
    return (
      <p className="mt-16 text-center font-bold text-base md:text-xl lg:text-3xl text-very-dark-blue-t transition-all ease-in dark:text-white">
        Country not found
      </p>
    );
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
            className="hvr-icon-hang uppercase text-sm sm:text-base bg-[#0071BC] text-white shadow-box rounded-md px-7 py-3 font-bold"
          >
            Load More
            <FontAwesomeIcon
              icon={faChevronDown}
              className="hvr-icon ml-2"
            />
          </button>
        </div>
      )}
    </>
  );
};

export default Countries;
