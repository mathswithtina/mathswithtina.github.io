---
title: "Completing the Square — rewriting quadratics"
subtitle: "This one technique unlocks vertex form, the quadratic formula, and a lot of exam marks."
topic: algebra
topic-color: "#A78BFA"
interactive: true
tags: [IGCSE, IB, SAT, Algebra]
quiz:
  - q: "Completing the square on x² + 6x gives:"
    options: ["(x+3)² + 9", "(x+6)² − 36", "(x+3)² − 9", "(x+6)²"]
    answer: 2
  - q: "The vertex of y = (x − 2)² + 5 is at:"
    options: ["(2, 5)", "(−2, 5)", "(2, −5)", "(5, 2)"]
    answer: 0
  - q: "Complete the square: x² − 8x + 7"
    options: ["(x−4)² − 16", "(x−4)² − 9", "(x−4)² + 7", "(x−8)² − 57"]
    answer: 1
  - q: "Which form shows the minimum of a parabola directly?"
    options: ["Standard form ax² + bx + c", "Vertex form a(x−h)² + k", "Factored form a(x−r)(x−s)", "Expanded form"]
    answer: 1
  - q: "x² + 4x + 4 = (x + 2)². What is x² + 4x?"
    options: ["(x+2)² − 4", "(x+4)² − 4", "(x+2)² + 4", "(x+2)²"]
    answer: 0
---

Completing the square turns the ugly form x² + bx + c into the elegant form (x + p)² + q. This reveals the **vertex** of the parabola immediately — and it's the technique behind the quadratic formula.

The trick: take half the coefficient of x, square it, add and subtract it.

## Playground — watch the parabola shift as you complete the square

<div class="playground-block">
  <div class="playground-label">⚡ Interactive — drag b to see the vertex move</div>
  <p>The purple curve is y = x² + bx. The orange point marks the vertex. Drag <strong>b</strong> and notice: the vertex is always at x = −b/2, which is exactly what completing the square reveals.</p>
  <div id="calc-sq" style="width:100%;height:420px;border-radius:8px;overflow:hidden;"></div>
</div>

<div class="insight-box">
  <p><strong>The half-and-square rule:</strong> x² + bx = (x + b/2)² − (b/2)². You add (b/2)² to create a perfect square, then subtract it to keep the equation balanced.</p>
</div>

## Step-by-step example

**Complete the square: x² − 6x + 2**

1. Look at the x coefficient: −6. Half of it: −3. Squared: 9.
2. Rewrite: x² − 6x + 9 − 9 + 2
3. Factor the square: **(x − 3)² − 7**

Vertex is at (3, −7). The minimum value of the function is −7.

**Solve x² − 6x + 2 = 0 using this result:**

(x − 3)² = 7 → x − 3 = ±√7 → x = 3 ± √7

<div class="try-it">
  <h3>Practice</h3>
  <p>Complete the square for x² + 10x − 3. State the vertex.</p>
  <button class="reveal-btn">Show Answer</button>
  <div class="answer">
    <p>Half of 10 = 5. 5² = 25.</p>
    <p>x² + 10x − 3 = (x + 5)² − 25 − 3 = <strong>(x + 5)² − 28</strong></p>
    <p>Vertex: (−5, −28)</p>
  </div>
</div>

<script src="https://www.desmos.com/api/v1.7/calculator.js?apiKey=dcb31709b452b1cf9dc26972add0fda6"></script>
<script>
(function() {
  var c = Desmos.GraphingCalculator(document.getElementById('calc-sq'), {
    keypad: false, settingsMenu: false, zoomButtons: true, expressionsCollapsed: true
  });
  c.setMathBounds({ left: -6, right: 6, bottom: -8, top: 8 });
  c.setExpressions([
    { id: 'b',  latex: 'b=4',  sliderBounds: { min: -6, max: 6, step: 0.5 } },
    { id: 'f',  latex: 'f(x)=x^{2}+bx', color: '#A78BFA', lineWidth: 2.5 },
    { id: 'xv', latex: 'x_{v}=-b/2', hidden: true },
    { id: 'pt', latex: '(x_{v}, f(x_{v}))', color: '#FFB347', pointSize: 13,
                showLabel: true, label: 'vertex (−b/2, −b²/4)', labelSize: Desmos.LabelSizes.SMALL }
  ]);
})();
</script>
