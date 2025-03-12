import { useCallback, useMemo, useState } from "react";
import { getAPIURL } from "./constants";
import { ApiError } from "./types";

function useApiCall<T>(url: string, requestInit: RequestInit) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<{
    message: string;
    status: number;
  } | null>(null);
  const [response, setResponse] = useState<T | null>(null);

  const doApiCall = useCallback(async () => {
    try {
      const response = await fetch(`${getAPIURL(url)}`, requestInit);

      const data: T | ApiError = await response.json();

      if (!response.ok) {
        setError({
          message: (data as ApiError).message,
          status: (data as ApiError).statusCode || response.status,
        });
        setResponse(null);
      } else {
        setResponse(data as T);
        setError(null);
      }
    } catch (err) {
      setError({
        message: `Api call to ${url} failed: ${err || "Unknown error"}`,
        status: 500,
      });
      setResponse(null);
    } finally {
      setIsLoading(false);
    }
  }, [url, requestInit]);

  const memoized = useMemo(() => {
    return {
      doApiCall,
      isLoading,
      error,
      response,
    };
  }, [doApiCall, isLoading, error, response]);

  return memoized;
}

export default useApiCall;
