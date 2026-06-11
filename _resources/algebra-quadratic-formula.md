---
title: "The Quadratic Formula — where it comes from"
subtitle: "x = (−b ± √(b²−4ac)) / 2a. But why? And what does the discriminant secretly tell you?"
topic: algebra
topic-color: "#A78BFA"
interactive: true
tags: [IGCSE, IB, SAT, Algebra]
quiz:
  - q: "The discriminant of ax² + bx + c is:"
    options: ["b² + 4ac", "b² − 4ac", "−b/2a", "4ac − b²"]
    answer: 1
  - q: "If the discriminant is negative, the quadratic has:"
    options: ["Two real roots", "One repeated root", "No real roots", "Infinitely many roots"]
    answer: 2
  - q: "Solve 2x² + 3x − 2 = 0 using the formula. What are the solutions?"
    options: ["x = 1 or x = −2", "x = 0.5 or x = −2", "x = 1 or x = 2", "x = −0.5 or x = 2"]
    answer: 1
  - q: "A discriminant of zero means the parabola:"
    options: ["Crosses the x-axis at two points", "Just touches the x-axis at one point", "Never touches the x-axis", "Has no vertex"]
    answer: 1
  - q: "The quadratic formula is derived by:"
    options: ["Factoring", "Completing the square on ax² + bx + c = 0", "Taking the derivative", "Graphing"]
    answer: 1
---

The quadratic formula solves **any** quadratic equation ax² + bx + c = 0, factored or not. It always works. And it isn't magic — it's completing the square, but with letters instead of numbers.

## Where the formula comes from

Start with ax² + bx + c = 0. Complete the square:

1. Divide by a: x² + (b/a)x + c/a = 0
2. Move c/a: x² + (b/a)x = −c/a
3. Add (b/2a)²: (x + b/2a)² = b²/4a² − c/a = (b² − 4ac)/4a²
4. Square root both sides: x + b/2a = ±√(b² − 4ac)/2a
5. Solve: **x = (−b ± √(b² − 4ac)) / 2a**

## The discriminant: Δ = b² − 4ac

The expression under the square root tells you everything before you solve:

| Δ > 0 | Two distinct real roots | Parabola crosses x-axis twice |
| Δ = 0 | One repeated root | Parabola just touches x-axis |
| Δ < 0 | No real roots | Parabola doesn't cross x-axis |

## Playground — watch roots appear and disappear

<div class="playground-block">
  <div class="playground-label">⚡ Interactive — drag c to control the discriminant</div>
  <p>The parabola is y = x² − 4x + c. Drag <strong>c</strong> and watch: when c &lt; 4, two real roots (discriminant &gt; 0). When c = 4, one root. When c &gt; 4, no real roots.</p>
  <div id="calc-quad" style="width:100%;height:420px;border-radius:8px;overflow:hidden;"></div>
</div>

<div class="insight-box">
  <p><strong>Exam shortcut:</strong> Always compute Δ first. If Δ &lt; 0, stop — the question might ask about complex roots or have a different form. If Δ = 0, there's one repeated root: x = −b/2a.</p>
</div>

## Worked example

**Solve 3x² − 5x − 2 = 0**

a = 3, b = −5, c = −2. Δ = 25 + 24 = 49 (positive, two roots).

x = (5 ± 7) / 6 → x = 12/6 = **2** or x = −2/6 = **−1/3**

<div class="try-it">
  <h3>Practice</h3>
  <p>Find the discriminant of x² − 6x + 10 = 0. What does it tell you?</p>
  <button class="reveal-btn">Show Answer</button>
  <div class="answer">
    <p>Δ = (−6)² − 4(1)(10) = 36 − 40 = −4</p>
    <p>Δ &lt; 0: <strong>no real roots</strong>. The parabola sits entirely above the x-axis.</p>
  </div>
</div>

<script src="https://www.desmos.com/api/v1.7/calculator.js?apiKey=dcb31709b452b1cf9dc26972add0fda6"></script>
<script>
(function() {
  var c2 = Desmos.GraphingCalculator(document.getElementById('calc-quad'), {
    keypad: false, settingsMenu: false, zoomButtons: true, expressionsCollapsed: true
  });
  c2.setMathBounds({ left: -2, right: 6, bottom: -4, top: 8 });
  c2.setExpressions([
    { id: 'c',  latex: 'c=2',  sliderBounds: { min: -2, max: 6, step: 0.1 } },
    { id: 'f',  latex: 'f(x)=x^{2}-4x+c', color: '#A78BFA', lineWidth: 2.5 },
    { id: 'D',  latex: 'D=16-4c', hidden: false, label: 'discriminant' },
    { id: 'r1', latex: '(2-\\sqrt{\\max(16-4c,0)}/2, 0)', color: '#FFD700', pointSize: 10 },
    { id: 'r2', latex: '(2+\\sqrt{\\max(16-4c,0)}/2, 0)', color: '#FFD700', pointSize: 10 }
  ]);
})();
</script>
