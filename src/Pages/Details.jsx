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
    <span>
      {currency.name} ({currency.symbol}){currencyArr?.length > 1 ? ", " : null}
    </span>
  ));

  const language = Object.values(languages)
    .map((lan) => lan)
    .join(", ");

  return (
    <section className="mt-12 px-4 pb-11 max-w-[640px] md:max-w-[820px] lg:max-w-[1040px] mx-auto">
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
        <div>
          <div>
            <img src={flag} alt={`${countryName} flag`} />
          </div>
          <div>
            <div>
              <h3>{countryName}</h3>
              <div>
                <div>
                  <ul>
                    <li>
                      Native Name: <span>{nativeName}</span>
                    </li>
                    <li>
                      Population: <span>{population}</span>
                    </li>
                    <li>
                      Region: <span>{region}</span>{" "}
                    </li>
                    <li>
                      Sub Region: <span>{subregion}</span>
                    </li>
                    <li>
                      Capital: <span>{capital}</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <ul>
                    <li>
                      Top Level Domain<span>{tld}</span>
                    </li>
                    <li>Currencies: {currency}</li>
                    <li>
                      Language: <span>{language}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Details;
