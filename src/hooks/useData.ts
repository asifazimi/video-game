import { CanceledError } from "axios";
import { useEffect, useState } from "react";
import apiClients from "../services/api-clients";

const useData = <T>(endpoint: string) => {
  interface FetchResponse<T> {
    count: number;
    results: T[];
  }

  const [data, setData] = useState<T[]>([]);
  const [errors, setErrors] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);

    apiClients
      .get<FetchResponse<T>>(endpoint, {
        signal: controller.signal,
      })
      .then((response) => {
        setData(response.data.results);
        setLoading(false);
      })
      .catch((error) => {
        if (error instanceof CanceledError) return;
        setErrors(error.message);
      });

    return () => controller.abort();
  }, []);

  return { data, errors, loading };
};

export default useData;
