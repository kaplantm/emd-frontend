import React, { useState } from "react";
import Button from "../Button";
import TextInput from "../Form/TextInput";
import CreditCardIcon from "../svg/CreditCardIcon";

const CreditCardValidator: React.FC = () => {
  const [cardNumber, setCardNumber] = useState<string>("");

  // TODO: card number UI formatting with
  const handleCardNumberChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setCardNumber(e.target.value);
  };

  const handleValidateCardSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    // validateCard();
    console.log("Validating card number:", cardNumber);
  };

  return (
    <div className="flex flex-1 items-start sm:items-center justify-center min-h-screen p-8 md:p-15">
      <div className="w-full max-w-md px-4">
        {" "}
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
            // loading={isLoading}
          >
            Validate Card
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CreditCardValidator;
