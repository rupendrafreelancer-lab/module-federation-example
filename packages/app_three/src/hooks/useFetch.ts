import { useEffect, useState } from "react";
import { IGallery } from "../models/IGallery";

export function useFetch(url: string) {
  const [data, setData] = useState<IGallery[]>([]);
  const [error, setError] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);
    fetch(url)
      .then((res) => res.json())
      .then((data: IGallery[]) => {
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
