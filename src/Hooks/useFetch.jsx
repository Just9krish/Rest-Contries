import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCoutries = async () => {
      try {
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error(
            `This is HTTP error: The status is ${response.status}`
          );
        }
        const actualData = await response.json();
        setData(shuffleArray(actualData));
        setError(null);
      } catch (error) {
        setError(error.message);
        setData([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCoutries();
  }, [url]);

  function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  return { data, error, isLoading };
};

export default useFetch;
