---
title: "Function Transformations — shifting, stretching, reflecting"
subtitle: "Once you know f(x), you know f(x+2), 3f(x), and f(−x) for free. Here's how."
topic: functions
topic-color: "#00C4FF"
interactive: true
tags: [IGCSE, IB, A-Level, Functions]
quiz:
  - q: "f(x − 3) shifts the graph:"
    options: ["Left by 3", "Right by 3", "Up by 3", "Down by 3"]
    answer: 1
  - q: "−f(x) reflects the graph in the:"
    options: ["y-axis", "origin", "x-axis", "line y = x"]
    answer: 2
  - q: "2f(x) does what to the graph?"
    options: ["Stretches horizontally by 2", "Stretches vertically by 2", "Shifts up by 2", "Compresses vertically by 2"]
    answer: 1
  - q: "f(2x) does what to the graph?"
    options: ["Stretches horizontally by 2", "Compresses horizontally by factor of 2", "Stretches vertically by 2", "Shifts right by 2"]
    answer: 1
  - q: "Which transformation moves f(x) = x² so its vertex is at (−1, 4)?"
    options: ["f(x+1) + 4", "f(x−1) + 4", "f(x+1) − 4", "f(x) + 4"]
    answer: 0
---

Every function transformation follows a small set of rules. Know these rules, and you can sketch any transformed function without plotting a single point.

## The four transformations

| Rule | Effect |
|------|--------|
| f(x) + k | Shift **up** by k |
| f(x) − k | Shift **down** by k |
| f(x − h) | Shift **right** by h |
| f(x + h) | Shift **left** by h |
| af(x) | Vertical **stretch** by a |
| f(bx) | Horizontal **compression** by b |
| −f(x) | Reflect in x-axis |
| f(−x) | Reflect in y-axis |

**The counterintuitive one:** f(x − 3) shifts RIGHT (not left). Think of it as: x must be 3 bigger to get the same output as before.

## Playground — transform a parabola

<div class="playground-block">
  <div class="playground-label">⚡ Interactive — drag a, h, k to transform the parabola</div>
  <p>The function is y = a(x − h)² + k. Drag <strong>a</strong> (stretch), <strong>h</strong> (horizontal shift), <strong>k</strong> (vertical shift). The gold dot marks the vertex.</p>
  <div id="calc-trans" style="width:100%;height:420px;border-radius:8px;overflow:hidden;"></div>
</div>

<div class="insight-box">
  <p><strong>Memory trick for horizontal shifts:</strong> In f(x − h), the shift goes in the direction of the sign *inside* the bracket: (x − 3) shifts to the right (+3), and (x + 3) shifts to the left (−3). Counter to what you'd expect!</p>
</div>

## Combining transformations

Order matters: apply **brackets first** (horizontal), then **multipliers** (stretch), then **additions outside** (vertical).

Example: 3f(x − 2) + 1 means: shift right 2, then stretch vertically by 3, then shift up 1.

<div class="try-it">
  <h3>Practice</h3>
  <p>Starting from y = √x, describe the transformations to get y = −2√(x + 4) − 1.</p>
  <button class="reveal-btn">Show Answer</button>
  <div class="answer">
    <p>1. (x + 4): shift left 4</p>
    <p>2. −2·(…): stretch vertically by 2, then reflect in x-axis</p>
    <p>3. … − 1: shift down 1</p>
  </div>
</div>

<script src="https://www.desmos.com/api/v1.7/calculator.js?apiKey=dcb31709b452b1cf9dc26972add0fda6"></script>
<script>
(function() {
  var c = Desmos.GraphingCalculator(document.getElementById('calc-trans'), {
    keypad: false, settingsMenu: false, zoomButtons: true, expressionsCollapsed: true
  });
  c.setMathBounds({ left: -7, right: 7, bottom: -5, top: 10 });
  c.setExpressions([
    { id: 'a',  latex: 'a=1',  sliderBounds: { min: -3, max: 3, step: 0.25 } },
    { id: 'h',  latex: 'h=0',  sliderBounds: { min: -5, max: 5, step: 0.5 } },
    { id: 'k',  latex: 'k=0',  sliderBounds: { min: -5, max: 5, step: 0.5 } },
    { id: 'f',  latex: 'y=a(x-h)^{2}+k', color: '#00C4FF', lineWidth: 2.5 },
    { id: 'pt', latex: '(h,k)', color: '#FFD700', pointSize: 13,
                showLabel: true, label: 'vertex (h, k)' }
  ]);
})();
</script>
