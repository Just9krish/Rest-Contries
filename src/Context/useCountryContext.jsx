import { useContext, createContext } from "react";
import useFetch from "../Hooks/useFetch";

const Countries = createContext();

export const ContextProvider = ({ children }) => {
  const data = useFetch("https://restcountries.com/v3.1/all");

  return <Countries.Provider value={data}>{children}</Countries.Provider>;
};

export function useCountries() {
  return useContext(Countries);
}
