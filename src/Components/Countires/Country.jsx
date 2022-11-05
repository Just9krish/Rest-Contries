import { Link } from "react-router-dom";

const Country = ({ country }) => {
  // console.log(country)
  return (
    <Link to="/country" state={country}>
      <div className="bg-white text-very-dark-blue-t shadow-box rounded-md overflow-hidden transition-all ease-in dark:text-white dark:bg-dark-blue">
        <div className="block aspect-video">
          <img
            className="w-full h-full object-cover"
            src={country.flags.png}
            alt=""
          />
        </div>

        <div className="pt-5 pb-8 px-6 text-very-dark-blue-t dark:text-white">
          <p className="font-bold text-lg">{country.name.common}</p>
          <div className="mt-4">
            <p className="font-semibold">Population: 
              <span className="text-gray-500">{country.population}</span>
            </p>
            <p className="font-semibold">
              Region: <span className="text-gray-500">{country.region}</span>
            </p>
            <p className="font-semibold">
              Capital: <span className="text-gray-500">{country.capital}</span>
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Country;
