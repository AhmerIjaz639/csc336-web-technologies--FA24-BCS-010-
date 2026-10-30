# Midterm – E-commerce Listing & Product Pages

## Student Info
- Name: Ahmer Ijaz
- Roll No:  FA24-BCS-010
- N = 10
- BP = 610px (600 + N)
- H = hsl(70, 70%, 45%)   [(N x 7) mod 360 = 70]
- K = 4 categories   [(N mod 3) + 3 = 4]

## Files Changed
- index.html
- product.html
- style.css
- script.js 

---

## Task 1 – CSS-only Category Filter
Added 5 radio buttons (All + 4 categories) above the product grid. Each card has a data-category attribute. CSS :checked selector shows only matching cards using display:none so hidden cards leave no gaps. Selected filter uses accent colour hsl(70,70%,45%). No JavaScript used.

## Task 2 – Product Page Grid + Sticky Details
Reworked product.html using CSS Grid with named grid-template-areas (image, details, description). Below 610px they stack in one column. At 610px and wider image and details are side by side and description is full width below. Details box is position:sticky with top:80px [(N mod 40)+70 = 80]. Description is long enough to show sticky working.

## Task 3 – JavaScript: Search, Sort, Premium
Added script.js with plain JavaScript. Live search filters cards by name (case-insensitive) and works together with the category filter. If no card matches, "No products found" message appears. Sort button toggles price low-to-high and high-to-low by moving existing cards with appendChild. Products costing more than N x 100 ($1000) get a "Premium" label on page load.
## AI Tools Used
- Deepseek and copilot 