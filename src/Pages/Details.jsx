import { useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSun,
  faMoon,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";

const Details = () => {
  const location = useLocation();
  const countryRef = useRef(location.state);
  const {
    flags: { png: flag },
    name: { common: countryName },
    region,
    subregion,
    capital,
    population,
    currencies,
    languages,
    tld,
    borders,
  } = countryRef.current;

  const nativeName = Object.values(countryRef.current.name.nativeName)[0]
    .common;

  const currencyArr = Object.values(currencies);
  const currency = currencyArr.map((currency) => (
    <span className="text-gray-500">
      {currency.name} ({currency.symbol}){currencyArr?.length > 1 ? ", " : null}
    </span>
  ));

  const language = Object.values(languages)
    .map((lan) => lan)
    .join(", ");

    // const borderCountry = borders.map( border => console.log(object))

  return (
    <section className="mt-12 px-6 max-w-[640px] md:max-w-[820px] lg:max-w-[1040px] mx-auto">
      <Link
        to="/"
        className="text-very-dark-blue-t bg-white inline-flex justify-center items-center py-2 px-7 shadow-md rounded-md border-gray-900 transition-all ease-in dark:bg-dark-blue dark:text-white"
      >
        <FontAwesomeIcon className="mr-2" icon={faChevronLeft} />
        Back
      </Link>
      {/* <FontAwesomeIcon icon={faMoon} />
      <FontAwesomeIcon icon={faSun} /> */}

      {countryRef && (
        <div className="mt-12 flex gap-10 flex-col md:flex-row md:justify-between md:items-center md:mt-16">
          <div class="w-full md:w-1/2">
            <img className="w-full max-h-[350px] shadow-md rounded object-cover md:max-w-[550px]" src={flag} alt={`${countryName} flag`} />
          </div>
          
            <div className="w-full md:w-1/2 text-very-dark-blue-t transition-all ease-in dark:text-white">
              <h3 className="font-bold text-lg">{countryName}</h3>
              <div className="mt-4 flex flex-col gap-10 lg:justify-between">
                <div>
                  <ul className="font-semibold">
                    <li>
                      Native Name: <span className="text-gray-500">{nativeName}</span>
                    </li>
                    <li>
                      Population: <span className="text-gray-500">{population}</span>
                    </li>
                    <li>
                      Region: <span className="text-gray-500">{region}</span>
                    </li>
                    <li>
                      Sub Region: <span className="text-gray-500">{subregion}</span>
                    </li>
                    <li>
                      Capital: <span className="text-gray-500">{capital}</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <ul className="font-semibold">
                    <li>
                      Top Level Domain<span className="text-gray-500">{tld}</span>
                    </li>
                    <li>Currencies: {currency}</li>
                    <li>
                      Language: <span className="text-gray-500">{language}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          
        </div>
      )}
    </section>
  );
};

export default Details;
