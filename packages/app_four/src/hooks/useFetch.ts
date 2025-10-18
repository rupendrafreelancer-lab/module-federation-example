import { useEffect, useState } from "react";
import { IPhoto } from "../models/Photo";

export function useFetch(url: string) {
  const [data, setData] = useState<IPhoto[]>([]);
  const [error, setError] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);
    setError("");

    fetch(url)
      .then((res) => res.json())
      .then((data: IPhoto[]) => {
        setData(data);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error);
        setIsLoading(false);
      });
  }, [url]);

  return { data, error, isLoading };
}
