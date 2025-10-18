import { useEffect, useState } from "react";

export function useFetch(url) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!url) return;

    setIsLoading(true);
    setError();
    fetch(url)
      .then((res) => res.json())
      .then((dt) => {
        setIsLoading(false);
        setData(dt);
        setError("");
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err);
      });
  }, [url]);

  return { data, isLoading, error };
}
