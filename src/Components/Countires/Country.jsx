const Country = ({ country }) => {
  // console.log(country)
  return (
    <div className="">
      <div>
        <img className="w-full h-auto block" src={country.flags.png} alt="" />
      </div>
      <div>
        <p>{country.name.common}</p>
        <p>Population: {country.population}</p>
        <p>Region: {country.region}</p>
        <p>Capital: {country.capital}</p>
      </div>
    </div>
  );
};

export default Country;
