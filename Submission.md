# Jest Workshop Submission

## Student Details
- Name: Aditya Prakash
- Roll Number: 2024-B-27112005
- GitHub Username: aditya-prakash14

---

## Tests Written

List each test you wrote and briefly explain **what bug or regression it prevents**.

### 1. Test Name: Check for invalid sub total
**What it protects against:**  
Prevents the code from calculating prices for negative numbers, which would cause accounting errors.
---

### 2. Test Name: No coupon
**What it protects against:**  
Ensures that the function still returns the correct subtotal even when a user doesn't provide a discount code.
---

### 3. Test Name: SAVE10
**What it protects against:**  
Protects the 10% discount logic to ensure customers receive exactly the amount of savings promised.
---

### 4. Test Name: FLAT50
**What it protects against:**  
Acts as a boundary check to ensure the final price stops at 0 and doesn't become a negative number if the discount is equal to the price.

---

### 5. Test Name: Case-insensitive coupon
**What it protects against:**  
It prevents valid coupons from being rejected just because a user typed them in lowercase. This ensures a better user experience and fewer support tickets about "broken" codes.

---

## CI Pipeline (if implemented)
- Did CI pass successfully? (Yes / No)
- GitHub Actions Run URL: https://github.com/Aditya-Prakash14/jest-workshop/actions/runs/21825383017

---

## Reflection (1–2 lines)
What is **one thing** you understood better about testing or CI after this workshop?

