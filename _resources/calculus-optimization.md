---
title: "Optimization — finding the best value"
subtitle: "Max profit. Min cost. Shortest path. All of these are calculus problems in disguise."
topic: calculus
topic-color: "#FF6B9D"
interactive: true
tags: [IB, A-Level, Edexcel, Calculus]
quiz:
  - q: "At a local maximum, the derivative f'(x) equals:"
    options: ["1", "-1", "0", "f(x)"]
    answer: 2
  - q: "How do you confirm a critical point is a maximum (not minimum)?"
    options: ["f'(x) > 0 there", "f''(x) < 0 there", "f(x) = 0 there", "f'(x) = 1 there"]
    answer: 1
  - q: "A box has square base with side x and no lid. Surface area = x² + 4xh = 100. To maximize volume V = x²h, you should:"
    options: ["Maximize x only", "Express h in terms of x, then differentiate V", "Set x = h", "Minimize h"]
    answer: 1
  - q: "The second derivative test: if f'(a) = 0 and f''(a) > 0, then x = a is a:"
    options: ["Local maximum", "Local minimum", "Inflection point", "Global maximum"]
    answer: 1
  - q: "When does a function have no local extrema on an open interval?"
    options: ["When it is always increasing or always decreasing", "When it is a polynomial", "When f'(x) = 0", "When it crosses zero"]
    answer: 0
---

The most powerful application of derivatives is finding **optimal values** — the maximum or minimum of a function. Every time someone asks "what should x be to make this as large/small as possible?", calculus is the answer.

The strategy is always the same:
1. Write a formula for what you're optimizing (profit, area, distance, etc.)
2. Take the derivative and set it equal to zero
3. Check whether it's a max or min using the second derivative

## Playground — find the maximum of a parabola

<div class="playground-block">
  <div class="playground-label">⚡ Interactive — drag a and b to reshape the parabola</div>
  <p>The function f(x) = −ax² + bx. The red dot shows the maximum. Drag <strong>a</strong> and <strong>b</strong> to see how the maximum moves. Notice: maximum always at x = b/(2a).</p>
  <div id="calc-opt" style="width:100%;height:420px;border-radius:8px;overflow:hidden;"></div>
</div>

<div class="insight-box">
  <p><strong>Critical points rule:</strong> Set f′(x) = 0. Solve for x. These x-values are candidates for maxima or minima. Use f″(x): if f″ < 0, it's a maximum (curving down). If f″ > 0, it's a minimum (curving up).</p>
</div>

## A worked example

**Problem:** A farmer has 200 m of fence and wants to enclose a rectangle next to a wall (one side doesn't need fence). What dimensions maximize the area?

Let the sides be x (parallel to wall) and y (perpendicular). Then:
- Constraint: x + 2y = 200, so x = 200 − 2y
- Area: A = x · y = (200 − 2y) · y = 200y − 2y²
- Derivative: A′ = 200 − 4y = 0 → **y = 50**
- Then x = 200 − 100 = **100**
- Max area = 100 × 50 = **5000 m²**

Check: A″ = −4 < 0, confirming it's a maximum.

## The two-step pattern

Almost every optimization problem follows this pattern:
1. **Constraint** → eliminate one variable
2. **Differentiate** the objective → set = 0 → solve

<div class="try-it">
  <h3>Practice</h3>
  <p>A revenue function is R(x) = 120x − 3x². Find the number of units x that maximizes revenue.</p>
  <button class="reveal-btn">Show Answer</button>
  <div class="answer">
    <p>R′(x) = 120 − 6x = 0 → x = 20</p>
    <p>R″(x) = −6 < 0, so x = 20 is a maximum.</p>
    <p>Maximum revenue = 120(20) − 3(400) = 2400 − 1200 = <strong>$1200</strong></p>
  </div>
</div>

<script src="https://www.desmos.com/api/v1.7/calculator.js?apiKey=dcb31709b452b1cf9dc26972add0fda6"></script>
<script>
(function() {
  var c = Desmos.GraphingCalculator(document.getElementById('calc-opt'), {
    keypad: false, settingsMenu: false, zoomButtons: true, expressionsCollapsed: true
  });
  c.setMathBounds({ left: -1, right: 6, bottom: -2, top: 8 });
  c.setExpressions([
    { id: 'a',  latex: 'a=1',   sliderBounds: { min: 0.3, max: 3, step: 0.1 } },
    { id: 'b',  latex: 'b=4',   sliderBounds: { min: 1, max: 8, step: 0.5 } },
    { id: 'f',  latex: 'f(x)=-ax^{2}+bx', color: '#FF6B9D', lineWidth: 2.5 },
    { id: 'xm', latex: 'x_{m}=b/(2a)', hidden: true },
    { id: 'pt', latex: '(x_{m}, f(x_{m}))', color: '#FFD700', pointSize: 13,
                showLabel: true, label: 'maximum', labelSize: Desmos.LabelSizes.LARGE }
  ]);
})();
</script>
