---
title: "Polynomial Long Division — and the Factor Theorem"
subtitle: "Dividing polynomials is just like long division with numbers. The Factor Theorem makes it faster."
topic: algebra
topic-color: "#A78BFA"
interactive: true
tags: [IB, A-Level, Algebra]
quiz:
  - q: "By the Factor Theorem, (x − a) is a factor of f(x) if:"
    options: ["f'(a) = 0", "f(a) = 0", "f(0) = a", "f(a) = 1"]
    answer: 1
  - q: "Divide x² + 5x + 6 by (x + 2). The result is:"
    options: ["x + 4", "x + 3", "x + 2", "x + 6"]
    answer: 1
  - q: "If f(x) = x³ − x² − 4x + 4 and f(1) = 0, then (x − 1) is:"
    options: ["A root only", "A factor", "A quotient", "The remainder"]
    answer: 1
  - q: "The Remainder Theorem says: when f(x) is divided by (x − a), the remainder is:"
    options: ["f'(a)", "f(a)", "a", "0"]
    answer: 1
  - q: "When dividing (x³ + 2x − 3) by (x − 1), what is the remainder?"
    options: ["0", "1", "2", "3"]
    answer: 0
---

When you divide a polynomial by a linear factor, you're splitting it into a quotient and a remainder. If the remainder is zero, you've found a **factor** — and with the Factor Theorem, you can check this in seconds by substituting.

## The Remainder Theorem and Factor Theorem

- **Remainder Theorem:** When f(x) is divided by (x − a), the remainder = f(a).
- **Factor Theorem:** (x − a) is a factor of f(x) ⟺ f(a) = 0.

This means: to test if (x − 3) divides x³ − 27, just compute f(3) = 27 − 27 = 0. Yes, it's a factor.

## Playground — explore polynomial roots

<div class="playground-block">
  <div class="playground-label">⚡ Interactive — find where the polynomial touches zero</div>
  <p>The polynomial f(x) = x³ + ax² + bx + c. Drag the sliders to reshape it. The x-intercepts are the roots — each is a factor (x − root). When you spot one, plug it in to verify f(root) = 0.</p>
  <div id="calc-poly" style="width:100%;height:420px;border-radius:8px;overflow:hidden;"></div>
</div>

<div class="insight-box">
  <p><strong>Strategy:</strong> For integer roots, try ±(factors of constant term). If f(2) = 0, then (x − 2) is a factor. Divide f(x) by (x − 2) to find the remaining quadratic. Then factor or use the quadratic formula on that.</p>
</div>

## Long division step by step

**Divide x³ − 7x − 6 by (x + 1).**

First check: f(−1) = −1 + 7 − 6 = 0. Good — (x + 1) is a factor.

Long division:
```
x³ − 7x − 6 ÷ (x + 1)
= x² − x − 6
= (x − 3)(x + 2)
```

So x³ − 7x − 6 = **(x + 1)(x − 3)(x + 2)**. Roots at x = −1, 3, −2.

<div class="try-it">
  <h3>Practice</h3>
  <p>Show that (x − 2) is a factor of x³ − 3x² − 4x + 12, then fully factor the polynomial.</p>
  <button class="reveal-btn">Show Answer</button>
  <div class="answer">
    <p>f(2) = 8 − 12 − 8 + 12 = 0 ✓ — so (x − 2) is a factor.</p>
    <p>Dividing gives x² − x − 6 = (x − 3)(x + 2).</p>
    <p>Full factorisation: <strong>(x − 2)(x − 3)(x + 2)</strong></p>
  </div>
</div>

<script src="https://www.desmos.com/api/v1.7/calculator.js?apiKey=dcb31709b452b1cf9dc26972add0fda6"></script>
<script>
(function() {
  var c = Desmos.GraphingCalculator(document.getElementById('calc-poly'), {
    keypad: false, settingsMenu: false, zoomButtons: true, expressionsCollapsed: true
  });
  c.setMathBounds({ left: -5, right: 5, bottom: -12, top: 12 });
  c.setExpressions([
    { id: 'a',  latex: 'a=-2', sliderBounds: { min: -5, max: 5, step: 0.5 } },
    { id: 'b',  latex: 'b=-5', sliderBounds: { min: -8, max: 8, step: 0.5 } },
    { id: 'cv', latex: 'c=6',  sliderBounds: { min: -10, max: 10, step: 0.5 } },
    { id: 'f',  latex: 'f(x)=x^{3}+ax^{2}+bx+c', color: '#A78BFA', lineWidth: 2.5 }
  ]);
})();
</script>
