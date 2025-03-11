import React, { useState } from "react";

const CreditCardValidator: React.FC = () => {
  const [cardNumber, setCardNumber] = useState<string>("");

  return (
    <div className="flex flex-1 items-start sm:items-center justify-center min-h-screen p-8 md:p-15">
      <div className="w-full max-w-md px-4">hello world</div>
    </div>
  );
};

export default CreditCardValidator;
