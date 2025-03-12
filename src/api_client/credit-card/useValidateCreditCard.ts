import { useCallback, useMemo } from "react";
import { API_CONSTANTS } from "../constants";
import useApiCall from "../useApiCall";
import { ValidateCreditCardResponse } from "./types";

const useValidateCreditCard = (cardNumber: string) => {
  const fetchRequestArgs: RequestInit = useMemo(
    () => ({
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        cardNumber: cardNumber.replace(/\s/g, ""),
      }),
    }),
    [cardNumber]
  );
  const { isLoading, error, response, doApiCall } =
    useApiCall<ValidateCreditCardResponse>(
      API_CONSTANTS.CREDIT_CARD.VALIDATE,
      fetchRequestArgs
    );

  const validateCard = useCallback(async () => {
    // Only validate if there's actually a card number to check
    if (cardNumber.length > 0) {
      doApiCall();
    }
  }, [doApiCall, cardNumber]);

  const memoized = useMemo(() => {
    return {
      isLoading,
      error,
      validateCard,
      response,
    };
  }, [isLoading, error, validateCard, response]);

  return memoized;
};

export default useValidateCreditCard;
