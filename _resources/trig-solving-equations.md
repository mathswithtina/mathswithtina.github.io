---
title: "Solving Trigonometric Equations"
subtitle: "sinθ = 0.5 has infinitely many solutions. You need to find all of them in the given range."
topic: trigonometry
topic-color: "#22D3EE"
interactive: true
tags: [IGCSE, IB, A-Level, Trigonometry]
quiz:
  - q: "How many solutions does sin(θ) = 0.5 have in [0°, 360°]?"
    options: ["1", "2", "3", "Infinitely many"]
    answer: 1
  - q: "If sinθ = −1/2, the reference angle is:"
    options: ["30°", "60°", "150°", "120°"]
    answer: 0
  - q: "Which quadrants have negative cosine?"
    options: ["1st and 4th", "2nd and 3rd", "1st and 2nd", "3rd and 4th"]
    answer: 1
  - q: "Solve sin(2θ) = 1 for 0° ≤ θ ≤ 360°. What is θ?"
    options: ["45° only", "45° and 225°", "90° and 270°", "45° and 135°"]
    answer: 0
  - q: "The general solution for sinθ = 0 is:"
    options: ["θ = 180°n", "θ = 90°n", "θ = 360°n", "θ = 45°n"]
    answer: 0
---

Trig equations are tricky because trig functions are **periodic** — they repeat their values. sin(30°) = 0.5, but so does sin(150°), sin(390°), sin(510°), and infinitely more. Your job is to find **all** solutions in a specified range.

## The strategy

1. Find the **reference angle** using inverse trig (always positive, always acute)
2. Use **CAST** or the unit circle to find which quadrants have your sign
3. Write down all solutions in range

## Example: Solve sin θ = −√3/2 for 0° ≤ θ ≤ 360°

1. Reference angle: sin⁻¹(√3/2) = 60°
2. sin is negative in Q3 and Q4 (from CAST)
3. Q3: 180° + 60° = **240°**; Q4: 360° − 60° = **300°**

Solutions: θ = 240° or θ = 300°

## Playground — see all solutions visually

<div class="playground-block">
  <div class="playground-label">⚡ Interactive — drag k to change the target value</div>
  <p>The horizontal dashed line is y = k. Where it crosses the sine curve — those are the solutions. Drag <strong>k</strong> between −1 and 1 to change the equation, and watch the intersections move.</p>
  <div id="calc-solv" style="width:100%;height:430px;border-radius:8px;overflow:hidden;"></div>
</div>

<div class="insight-box">
  <p><strong>The "double angle" trap:</strong> For sin(2θ) = k, first solve sin(u) = k where u = 2θ, getting values of u. Then halve them to get θ. And double your range: if 0 ≤ θ ≤ 2π, then 0 ≤ u ≤ 4π, so find solutions for u in [0, 4π].</p>
</div>

## Example with double angle

Solve 2cos(2θ) = 1 for 0° ≤ θ ≤ 360°.

cos(2θ) = 1/2. Let u = 2θ, range: 0° ≤ u ≤ 720°.

Reference angle: 60°. Cos positive in Q1 and Q4.

u = 60°, 300°, 420°, 660°

θ = u/2 = **30°, 150°, 210°, 330°**

<div class="try-it">
  <h3>Practice</h3>
  <p>Solve tan θ = −1 for 0° ≤ θ ≤ 360°.</p>
  <button class="reveal-btn">Show Answer</button>
  <div class="answer">
    <p>Reference angle: tan⁻¹(1) = 45°</p>
    <p>tan is negative in Q2 and Q4.</p>
    <p>Q2: 180° − 45° = 135°; Q4: 360° − 45° = 315°</p>
    <p>Solutions: <strong>θ = 135° or θ = 315°</strong></p>
  </div>
</div>

<script src="https://www.desmos.com/api/v1.7/calculator.js?apiKey=dcb31709b452b1cf9dc26972add0fda6"></script>
<script>
(function() {
  var c = Desmos.GraphingCalculator(document.getElementById('calc-solv'), {
    keypad: false, settingsMenu: false, zoomButtons: true, expressionsCollapsed: true
  });
  c.setMathBounds({ left: -0.3, right: 7, bottom: -1.5, top: 1.5 });
  c.setExpressions([
    { id: 'f',  latex: 'f(x)=\\sin(x)', color: '#22D3EE', lineWidth: 2.5 },
    { id: 'k',  latex: 'k=0.5', sliderBounds: { min: -1, max: 1, step: 0.05 } },
    { id: 'kl', latex: 'y=k', color: '#FF6B9D', lineWidth: 2, lineStyle: Desmos.Styles.DASHED, label: 'sinθ = k' }
  ]);
})();
</script>
