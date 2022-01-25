const { errorOnlyWithStrictMode } = require("..");
// const { toHaveAttribute, toBeInTheDocument } = require('jest');

// expect.extend({ toHaveAttribute, toBeInTheDocument });

const EXPECTED_ERROR_MESSAGE = "Error";

beforeEach(() => {});

describe("", () => {
  it("Funkcja zwraca informacje o bledzie, gdy jest w strict mode", async () => {
    const errorMsg = errorOnlyWithStrictMode();
    expect(errorMsg).toBe(EXPECTED_ERROR_MESSAGE);
  });
});
