export const API_CONSTANTS = {
  BASE_URL: import.meta.env.REACT_APP_API_BASE_URL || "http://localhost:3003",
  CREDIT_CARD: {
    VALIDATE: "/credit-card/validate",
  },
};

export const getAPIURL = (endpoint: string) =>
  `${API_CONSTANTS.BASE_URL}${endpoint}`;
