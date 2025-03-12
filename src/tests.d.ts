import { TestingLibraryMatchers } from "@testing-library/jest-dom/matchers";
import "vitest";

declare global {
  namespace Vi {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    interface Assertion<T = any> extends TestingLibraryMatchers<T, void> {}
  }
}
