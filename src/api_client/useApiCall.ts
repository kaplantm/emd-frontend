import { useCallback, useMemo, useState } from "react";
import { getAPIURL } from "./constants";
import { ApiError } from "./types";

function useApiCall<T>(url: string, requestInit: RequestInit) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<ApiError | undefined>(undefined);
  const [response, setResponse] = useState<T | undefined>(undefined);

  const doApiCall = useCallback(async () => {
    try {
      setIsLoading(true);
      const response = await fetch(`${getAPIURL(url)}`, requestInit);

      const data: T | ApiError = await response.json();

      if (!response.ok) {
        setError({
          message: (data as ApiError).message,
          statusCode: (data as ApiError).statusCode || response.status,
        });
        setResponse(undefined);
      } else {
        setResponse(data as T);
        setError(undefined);
      }
    } catch (err) {
      setError({
        message: `Api call to ${url} failed: ${err || "Unknown error"}`,
        statusCode: 500,
      });
      setResponse(undefined);
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
