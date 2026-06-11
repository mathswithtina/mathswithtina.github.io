---
title: "Inverse Functions — going backwards"
subtitle: "If f takes x to y, then f⁻¹ takes y back to x. Inverses are everywhere."
topic: functions
topic-color: "#00C4FF"
interactive: true
tags: [IGCSE, IB, A-Level, Functions]
quiz:
  - q: "If f(x) = 3x + 1, what is f⁻¹(x)?"
    options: ["(x+1)/3", "(x−1)/3", "3x − 1", "1/(3x+1)"]
    answer: 1
  - q: "The graph of f⁻¹(x) is the reflection of f(x) in:"
    options: ["The x-axis", "The y-axis", "The line y = x", "The origin"]
    answer: 2
  - q: "f(f⁻¹(x)) equals:"
    options: ["f(x)²", "x", "0", "1"]
    answer: 1
  - q: "Which function does NOT have an inverse on all of ℝ?"
    options: ["f(x) = 2x + 3", "f(x) = x³", "f(x) = x²", "f(x) = e^x"]
    answer: 2
  - q: "To find the inverse of y = 5x − 2, you:"
    options: ["Replace x with −x", "Swap x and y then solve for y", "Take the reciprocal", "Differentiate"]
    answer: 1
---

The inverse function **undoes** what the original function does. If f(2) = 7, then f⁻¹(7) = 2. The output becomes the input, and the input becomes the output.

Geometrically, the graph of f⁻¹ is the **reflection of f in the line y = x** — because you're swapping every (x, y) pair to (y, x).

## Finding the inverse: swap and solve

To find f⁻¹:
1. Write y = f(x)
2. Swap x and y: x = f(y)
3. Solve for y — that's f⁻¹(x)

**Example:** f(x) = 2x + 3

Write y = 2x + 3. Swap: x = 2y + 3. Solve: y = (x − 3)/2.

So **f⁻¹(x) = (x − 3)/2**.

Verify: f(f⁻¹(x)) = 2·(x−3)/2 + 3 = (x−3) + 3 = x ✓

## Playground — see f and f⁻¹ reflected

<div class="playground-block">
  <div class="playground-label">⚡ Interactive — watch f and its inverse mirror each other</div>
  <p>The blue curve is y = (x−1)/(x+2) (a rational function). The pink curve is its inverse. The dashed line is y = x — the mirror. Notice the two curves are perfect reflections of each other.</p>
  <div id="calc-inv" style="width:100%;height:430px;border-radius:8px;overflow:hidden;"></div>
</div>

<div class="insight-box">
  <p><strong>When does an inverse exist?</strong> Only when f is one-to-one (every y-value is hit exactly once). A horizontal line should cross the graph at most once. This is the "horizontal line test." f(x) = x² fails it — that's why you need to restrict the domain to x ≥ 0.</p>
</div>

## When inverses fail: domain restrictions

f(x) = x² doesn't have an inverse on all of ℝ because both f(2) = 4 and f(−2) = 4. To create an invertible version, restrict to x ≥ 0. Then f⁻¹(x) = √x.

<div class="try-it">
  <h3>Practice</h3>
  <p>Find the inverse of f(x) = (x + 4) / 2.</p>
  <button class="reveal-btn">Show Answer</button>
  <div class="answer">
    <p>y = (x + 4)/2 → swap: x = (y + 4)/2 → 2x = y + 4 → y = 2x − 4</p>
    <p><strong>f⁻¹(x) = 2x − 4</strong></p>
    <p>Check: f(f⁻¹(x)) = (2x − 4 + 4)/2 = 2x/2 = x ✓</p>
  </div>
</div>

<script src="https://www.desmos.com/api/v1.7/calculator.js?apiKey=dcb31709b452b1cf9dc26972add0fda6"></script>
<script>
(function() {
  var c = Desmos.GraphingCalculator(document.getElementById('calc-inv'), {
    keypad: false, settingsMenu: false, zoomButtons: true, expressionsCollapsed: true
  });
  c.setMathBounds({ left: -6, right: 6, bottom: -6, top: 6 });
  c.setExpressions([
    { id: 'f',  latex: 'f(x)=\\frac{x-1}{x+2}', color: '#00C4FF', lineWidth: 2.5, label: 'f(x)' },
    { id: 'fi', latex: 'g(x)=\\frac{-2x-1}{x-1}', color: '#FF6B9D', lineWidth: 2.5, label: 'f⁻¹(x)' },
    { id: 'yx', latex: 'y=x', color: '#888', lineWidth: 1.5, lineStyle: Desmos.Styles.DASHED }
  ]);
})();
</script>
