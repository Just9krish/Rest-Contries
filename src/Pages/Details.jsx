import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { useCountries } from "../Context/useCountryContext";
import formatNumber from "../Utils/formatNumber";

const Details = () => {
  const location = useLocation();
  const [selectedCountry, setSelectedCountry] = useState(location.state);
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
  } = selectedCountry;

  let { data: countries } = useCountries();

  const nativeName = Object.values(selectedCountry.name.nativeName)[0].common;

  const currencyArr = Object.values(currencies);

  const currency = currencyArr.map((currency, idx) => (
    <span key={idx} className="text-gray-500">
      {currency.name} ({currency.symbol}){currencyArr?.length > 1 ? ", " : null}
    </span>
  ));

  const language = Object.values(languages)
    .map((lan) => lan)
    .join(", ");

  // const borderCountriesName = borders?.map((border) => {
  //   let borderName = countries?.find((country) => border == country.cca3);
  //   return borderName.name.common;
  // });

  let borderCountriesName = [];

    borders?.forEach((border) => {
        countries?.forEach((country) => {
            if (border == country.cca3) {
                borderCountriesName.push(country.name.common);
                return;
            }
        });
    });

  const borderCountry = borders
    ? countries?.map((country) => {
        const borderCountry = borderCountriesName.map((border, idx) => {
          if (border == country.name.common) {
            return (
              <Link
                key={idx}
                state={country}
                to="/country"
                className="bg-slate-300 px-4 py-2 text-very-dark-blue-t rounded shadow-md transition-all ease-in dark:bg-gray-600 dark:text-white"
              >
                {border}
              </Link>
            );
          }
        });
        return borderCountry;
      })
    : "No Border Countries";

  useEffect(() => {
    window.scrollTo(0, 0);
    setSelectedCountry(location.state);
  }, [borderCountry]);

  return (
    <section className="mt-12 px-6 pb-14 max-w-[640px] md:max-w-[820px] lg:max-w-[1140px] mx-auto">
      <Link
        to="/"
        className="text-very-dark-blue-t bg-white inline-flex justify-center items-center py-2 px-7 shadow-md rounded-md border-gray-900 transition-all ease-in dark:bg-dark-blue dark:text-white"
      >
        <FontAwesomeIcon className="mr-2" icon={faChevronLeft} />
        Back
      </Link>

      {selectedCountry && (
        <div className="mt-12 flex gap-10 flex-col md:flex-row md:justify-between md:items-center md:mt-16">
          <div className="w-full md:w-1/2">
            <img
              className="w-full max-h-[350px] shadow-md rounded object-cover md:max-w-[550px]"
              src={flag}
              alt={`${countryName} flag`}
            />
          </div>

          <div className="w-full md:w-1/2 text-very-dark-blue-t transition-all ease-in dark:text-white">
            <h3 className="font-bold text-lg">{countryName}</h3>
            <div className="mt-4 flex flex-col gap-10 lg:flex-row lg:justify-between">
              <div>
                <ul className="font-semibold">
                  <li>
                    Native Name:{" "}
                    <span className="text-gray-500">{nativeName}</span>
                  </li>
                  <li>
                    Population:{" "}
                    <span className="text-gray-500">
                      {formatNumber(population)}
                    </span>
                  </li>
                  <li>
                    Region: <span className="text-gray-500">{region}</span>
                  </li>
                  <li>
                    Sub Region:{" "}
                    <span className="text-gray-500">{subregion}</span>
                  </li>
                  <li>
                    Capital: <span className="text-gray-500">{capital}</span>
                  </li>
                </ul>
              </div>
              <div>
                <ul className="font-semibold">
                  <li>
                    Top Level Domain:{" "}
                    <span className="text-gray-500">{tld}</span>
                  </li>
                  <li>Currencies: {currency}</li>
                  <li>
                    Language: <span className="text-gray-500">{language}</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex mt-8 font-semibold">
              Border Countries:{" "}
              <span className="flex ml-3 gap-4 flex-wrap font-normal">
                {borderCountry}
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Details;
