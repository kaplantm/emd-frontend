import React, { useState } from "react";
import useValidateCreditCard from "../../api_client/credit-card/useValidateCreditCard";
import Button from "../Button";
import Card from "../Card/Card";
import CardContent from "../Card/CardContent";
import CardHeader from "../Card/CardHeader";
import CardTitle from "../Card/CardTitle";
import Label from "../Form/Label";
import TextInput from "../Form/TextInput";
import CheckIcon from "../svg/CheckIcon";
import CreditCardIcon from "../svg/CreditCardIcon";
import ErrorIcon from "../svg/ErrorIcon";
import CreditCardValidatorInfo from "./CreditCardValidatorInfo";

const CreditCardValidator: React.FC = () => {
  const [cardNumber, setCardNumber] = useState<string>("");
  const { response, isLoading, error, validateCard } =
    useValidateCreditCard(cardNumber);
  const isValid = response?.isValid;

  // TODO: card number UI formatting with
  const handleCardNumberChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setCardNumber(e.target.value);
  };

  const handleValidateCardSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    validateCard();
    console.log("Validating card number:", cardNumber);
  };

  return (
    <div className="flex flex-1 items-start sm:items-center justify-center min-h-screen p-8 md:p-15">
      <div className="w-full max-w-md px-4">
        <Card>
          <CardHeader>
            <CardTitle>Credit Card Validator</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <form className="space-y-2">
                <Label htmlFor="cardNumber" required>
                  Card Number
                </Label>
                {/* TODO: now error states */}
                <div className="relative">
                  <TextInput
                    id="cardNumber"
                    placeholder="1234 5678 9012 3456"
                    value={cardNumber}
                    onChange={handleCardNumberChange}
                    maxLength={19} // 16 digits + 3 spaces
                    type="text"
                    aria-label="Credit Card Number"
                  />
                  <CreditCardIcon />
                </div>
                <div className="flex justify-center mt-5">
                  <Button
                    type="submit"
                    onClick={handleValidateCardSubmit}
                    disabled={cardNumber?.length < 8}
                    loading={isLoading}
                  >
                    Validate Card
                  </Button>
                </div>

                {error && (
                  <div className="flex items-center text-red-600 mt-2 animate-fadeIn">
                    <ErrorIcon />
                    <span>{error?.message}</span>
                  </div>
                )}

                {!isLoading && !error && response !== null && (
                  <div
                    className={`flex items-center mt-2 ${
                      isValid ? "text-green-600" : "text-red-600"
                    } animate-fadeIn`}
                  >
                    {isValid ? <CheckIcon /> : <ErrorIcon />}
                    <span>
                      {isValid ? "Valid card number" : "Invalid card number"}
                    </span>
                  </div>
                )}
              </form>

              <CreditCardValidatorInfo />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CreditCardValidator;
