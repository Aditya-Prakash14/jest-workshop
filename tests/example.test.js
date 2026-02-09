const { calculateFinalAmount } = require("../src/pricing");

test("example: sanity check", () => {
  expect(1 + 1).toBe(2);
});

test("Check for invalid sub total", () => {
  expect(() => calculateFinalAmount(-100, "DISCOUNT")).toThrow(
    "Invalid subtotal",
  );
     });


test("Error on negative subtotal", () => {
  expect(() => calculateFinalAmount(-50, null)).toThrow("Invalid subtotal");
 });
 test("No coupon", () => {
  const result = calculateFinalAmount(200, null);
  expect(result).toEqual(200); 
 });
   test("SAVE10", () => {
  const result = calculateFinalAmount(100, "SAVE10");
  expect(result).toEqual(90);
 });
   test("FLAT50", () => {
  const result = calculateFinalAmount(50, "FLAT50");
  expect(result).toEqual(0);
});
test("Work coupon is lowercase", () => {
  const result = calculateFinalAmount(100, "flat50");
  expect(result).toEqual(50);
    });
  test("Automatic discount on large orders", () => {
  const result = calculateFinalAmount(1000, null);
  expect(result).toEqual(950);
  });