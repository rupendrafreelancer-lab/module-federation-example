import { useEffect, useState } from "react";

export function useFetch(url) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!url) return;

    setIsLoading(true);
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setIsLoading(false);
        setError("");
      })
      .catch((error) => {
        setIsLoading(false);
        setError(error);
      });
  }, [url]);

  return { data, isLoading, error };
}
