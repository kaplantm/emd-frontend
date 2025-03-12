import { render, screen, waitFor } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import CreditCardValidator from "./CreditCardValidator"; // Assuming this is your component

// ---- Mock setup ---- //

// Mock validateCard function globally so we can control its behavior
const validateCardMock = vi.fn();

// Mock the credit card validation hook, returning the mocked validateCard
vi.mock("../../api_client/credit-card/useValidateCreditCard.ts", () => ({
  default: () => ({
    isLoading: false,
    error: undefined,
    response: undefined, // will rely on validateCard to return value dynamically
    validateCard: validateCardMock,
  }),
}));

// Mock addToast function globally to observe toast calls
const addToastMock = vi.fn();

vi.mock("../../context/Toast/ToastContext.tsx", () => ({
  useToastContext: () => ({ addToast: addToastMock }),
}));

describe("Renders main page correctly", () => {
  beforeEach(() => {
    // Clear mocks before each test to avoid cross-test interference
    validateCardMock.mockReset();
    addToastMock.mockReset();
    render(<CreditCardValidator />);
  });
  it("Should render the page correctly", async () => {
    const h1 = screen.queryByText("Credit Card Validator");
    expect(h1).not.toBeNull();
  });
  it("Should render the form correctly", async () => {
    const form = document.querySelector("form");
    expect(form).not.toBeNull();
    const input = screen.getByRole("textbox");
    expect(input).not.toBeNull();
    const button = screen.queryByRole("button") as HTMLButtonElement;
    expect(button).not.toBeNull();
    expect(button?.disabled).toBeTruthy();
  });
  it("Should display an error toast if an invalid card number is submitted", async () => {
    validateCardMock.mockResolvedValueOnce({ isValid: false });

    const input = screen.getByRole("textbox") as HTMLInputElement;
    const button = screen.getByRole("button") as HTMLButtonElement;

    input.value = "4242424242424241";
    button.click();

    waitFor(() => {
      expect(addToastMock).toHaveBeenCalledWith({
        message: "Credit card number is invalid.",
        type: "error",
      });
    });
  });

  it("Should display a success toast if a valid card number is submitted", async () => {
    validateCardMock.mockResolvedValueOnce({ isValid: true });

    const input = screen.getByRole("textbox") as HTMLInputElement;
    const button = screen.getByRole("button") as HTMLButtonElement;

    input.value = "4242424242424242"; // valid input
    button.click();

    waitFor(() => {
      expect(addToastMock).toHaveBeenCalledWith({
        message: "Credit card number is valid.",
        type: "success",
      });
    });
  });
});
