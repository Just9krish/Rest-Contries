import { useState } from "react";

const Filter = ({ selectedRegion, setSelectedRegion }) => {
  const regions = [
    {
      label: "All",
      value: "",
    },

    {
      label: "Africa",
      value: "africa",
    },

    {
      label: "America",
      value: "america",
    },

    {
      label: "Asia",
      value: "asia",
    },

    {
      label: "Europe",
      value: "europe",
    },
    {
      label: "Oceania",
      value: "oceania",
    },
  ];
//   setSelectedRegion("")
//   console.log(selectedRegion);

  function handleChange(e) {
    setSelectedRegion(e.target.value);
  }

  return (
    <select
      onChange={handleChange}
      name="selectRegion"
      value={selectedRegion}
      className="min-h-[50px] w-full max-w-sm apperance-none rounded bg-white text-very-dark-blue-t shadow-box dark:bg-dark-blue dark:text-white transition-all"
    >
      {regions.map((option, index) => (
        <option key={index} value={option.value}>{option.label}</option>
      ))}
    </select>
  );
};

export default Filter;
