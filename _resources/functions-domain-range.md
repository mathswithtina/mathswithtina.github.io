---
title: "Domain and Range — what goes in, what comes out"
subtitle: "Domain is every x that makes the function work. Range is every y it can actually produce."
topic: functions
topic-color: "#00C4FF"
interactive: true
tags: [IGCSE, IB, A-Level, Functions]
quiz:
  - q: "What is the domain of f(x) = 1/x?"
    options: ["All real numbers", "x ≠ 0", "x > 0", "x ≥ 0"]
    answer: 1
  - q: "What is the domain of g(x) = √(x − 3)?"
    options: ["x > 3", "x ≥ 3", "x ≤ 3", "All real numbers"]
    answer: 1
  - q: "The range of f(x) = x² is:"
    options: ["All real numbers", "x ≥ 0", "y ≥ 0", "y > 0"]
    answer: 2
  - q: "Which x-value is excluded from the domain of f(x) = (x+2)/(x−5)?"
    options: ["x = −2", "x = 5", "x = 0", "x = 2"]
    answer: 1
  - q: "The range of sin(x) is:"
    options: ["All real numbers", "0 to 1", "−1 to 1", "0 to 2π"]
    answer: 2
---

Every function has a **domain** (the set of inputs that are allowed) and a **range** (the set of outputs it can produce). Understanding these is essential for avoiding errors and answering exam questions correctly.

## Two things that restrict the domain

1. **Division by zero** — exclude any x that makes the denominator 0
2. **Square roots (and even roots) of negatives** — the expression under the root must be ≥ 0

## Finding the domain

- f(x) = 1/(x − 4): exclude x = 4. Domain: x ≠ 4.
- f(x) = √(2x − 6): need 2x − 6 ≥ 0 → x ≥ 3. Domain: x ≥ 3.
- f(x) = ln(x): need x > 0. Domain: x > 0.
- f(x) = x² + 3x: no restrictions. Domain: all real numbers.

## Playground — see restrictions in action

<div class="playground-block">
  <div class="playground-label">⚡ Interactive — adjust k and see the domain restriction</div>
  <p>The function is y = √(x − k). Drag <strong>k</strong> and watch the domain start point shift. The curve only exists where x ≥ k — the domain restriction is visible.</p>
  <div id="calc-dom" style="width:100%;height:400px;border-radius:8px;overflow:hidden;"></div>
</div>

<div class="insight-box">
  <p><strong>Finding the range:</strong> Once you have the graph, the range is everything on the y-axis the graph reaches. For y = √(x−k), the output is always ≥ 0 (square roots don't produce negatives), so the range is y ≥ 0 regardless of k.</p>
</div>

## Notation

Domain and range use interval notation:
- x ≥ 3 → [3, ∞)
- x > 3 → (3, ∞)
- −1 ≤ x ≤ 1 → [−1, 1]
- x ≠ 0 → (−∞, 0) ∪ (0, ∞)

The square bracket **[** means "including", the round bracket **(** means "excluding."

<div class="try-it">
  <h3>Practice</h3>
  <p>Find the domain and range of f(x) = √(9 − x²).</p>
  <button class="reveal-btn">Show Answer</button>
  <div class="answer">
    <p>Domain: need 9 − x² ≥ 0 → x² ≤ 9 → −3 ≤ x ≤ 3. Domain: [−3, 3].</p>
    <p>The maximum of 9 − x² is 9 (at x = 0), minimum is 0 (at x = ±3).</p>
    <p>Range: 0 ≤ y ≤ 3 → <strong>[0, 3]</strong>. (This is the upper half of a circle of radius 3.)</p>
  </div>
</div>

<script src="https://www.desmos.com/api/v1.7/calculator.js?apiKey=dcb31709b452b1cf9dc26972add0fda6"></script>
<script>
(function() {
  var c = Desmos.GraphingCalculator(document.getElementById('calc-dom'), {
    keypad: false, settingsMenu: false, zoomButtons: true, expressionsCollapsed: true
  });
  c.setMathBounds({ left: -4, right: 8, bottom: -1, top: 6 });
  c.setExpressions([
    { id: 'k',  latex: 'k=2',  sliderBounds: { min: -3, max: 5, step: 0.5 } },
    { id: 'f',  latex: 'y=\\sqrt{x-k}\\left\\{x\\ge k\\right\\}', color: '#00C4FF', lineWidth: 2.5 },
    { id: 'pt', latex: '(k, 0)', color: '#FFD700', pointSize: 12,
                showLabel: true, label: 'domain starts at x = k' }
  ]);
})();
</script>
