const { calculateFinalAmount } = require("../src/pricing");



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
test("Case-insensitive coupon", () => {
  const result = calculateFinalAmount(100, "save10");
  expect(result).toEqual(90);
});
  