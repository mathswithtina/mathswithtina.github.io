---
title: "Systems of Equations — two equations, two unknowns"
subtitle: "Substitution or elimination? The method doesn't matter. Finding the intersection does."
topic: algebra
topic-color: "#A78BFA"
interactive: true
tags: [IGCSE, IB, SAT, Algebra]
quiz:
  - q: "Solve: x + y = 5 and x − y = 1. What is x?"
    options: ["2", "3", "4", "1"]
    answer: 1
  - q: "Two lines intersect at exactly one point when:"
    options: ["They have the same slope", "They have different slopes", "They are parallel", "They are the same line"]
    answer: 1
  - q: "Solve by substitution: y = 2x and x + y = 9. What is x?"
    options: ["2", "3", "4", "6"]
    answer: 1
  - q: "A system of equations has no solution when the lines are:"
    options: ["Perpendicular", "Parallel with different y-intercepts", "The same line", "Intersecting"]
    answer: 1
  - q: "Eliminate y from: 2x + 3y = 12 and x − y = 1. What do you get?"
    options: ["3x = 15", "5x = 15", "2x = 15", "x = 15"]
    answer: 1
---

Two equations, two unknowns. The solution is the **point where two lines intersect**. You can see it on a graph, or find it algebraically with substitution or elimination — both arrive at the same answer.

## Playground — drag the lines to find where they cross

<div class="playground-block">
  <div class="playground-label">⚡ Interactive — change the equations and watch the intersection move</div>
  <p>Two lines: y = m₁x + b₁ (purple) and y = m₂x + b₂ (pink). The gold dot is the intersection — the solution to the system. Drag <strong>m₁, b₁, m₂, b₂</strong> to change the lines.</p>
  <div id="calc-sys" style="width:100%;height:420px;border-radius:8px;overflow:hidden;"></div>
</div>

<div class="insight-box">
  <p><strong>Geometric meaning:</strong> Each equation is a line. Solving the system means finding the one point both lines share. If lines are parallel (same slope, different intercepts), there's no solution. If they're the same line, there are infinitely many.</p>
</div>

## Method 1: Substitution

**Solve:** y = x + 2 and 2x + y = 11

Substitute y = x + 2 into the second equation: 2x + (x + 2) = 11 → 3x = 9 → **x = 3**

Then y = 3 + 2 = **5**. Solution: (3, 5).

## Method 2: Elimination

**Solve:** 3x + 2y = 16 and x − 2y = 0

Add the equations: 4x = 16 → **x = 4**

Back-substitute: 4 − 2y = 0 → y = 2. Solution: **(4, 2)**.

Elimination works best when the same variable has opposite coefficients. Multiply one or both equations to make that happen.

<div class="try-it">
  <h3>Practice</h3>
  <p>Solve: 2x + y = 7 and x − y = 2.</p>
  <button class="reveal-btn">Show Answer</button>
  <div class="answer">
    <p>Add: 3x = 9 → x = 3</p>
    <p>Substitute: 2(3) + y = 7 → y = 1</p>
    <p>Solution: <strong>(3, 1)</strong></p>
  </div>
</div>

<script src="https://www.desmos.com/api/v1.7/calculator.js?apiKey=dcb31709b452b1cf9dc26972add0fda6"></script>
<script>
(function() {
  var c = Desmos.GraphingCalculator(document.getElementById('calc-sys'), {
    keypad: false, settingsMenu: false, zoomButtons: true, expressionsCollapsed: true
  });
  c.setMathBounds({ left: -5, right: 8, bottom: -4, top: 10 });
  c.setExpressions([
    { id: 'm1', latex: 'm_1=1',  sliderBounds: { min: -3, max: 3, step: 0.5 } },
    { id: 'b1', latex: 'b_1=2',  sliderBounds: { min: -5, max: 5, step: 0.5 } },
    { id: 'm2', latex: 'm_2=-2', sliderBounds: { min: -3, max: 3, step: 0.5 } },
    { id: 'b2', latex: 'b_2=8',  sliderBounds: { min: -5, max: 8, step: 0.5 } },
    { id: 'L1', latex: 'y=m_1 x+b_1', color: '#A78BFA', lineWidth: 2.5, label: 'Line 1' },
    { id: 'L2', latex: 'y=m_2 x+b_2', color: '#FF6B9D', lineWidth: 2.5, label: 'Line 2' },
    { id: 'xi', latex: 'x_i=(b_2-b_1)/(m_1-m_2)', hidden: true },
    { id: 'pt', latex: '(x_i, m_1 x_i+b_1)', color: '#FFD700', pointSize: 14,
                showLabel: true, label: 'intersection', labelSize: Desmos.LabelSizes.MEDIUM }
  ]);
})();
</script>
