---
title: "Coordinate Geometry — lines, distances, and midpoints"
subtitle: "Every line has an equation. Every pair of points has a distance and a midpoint. Here's how to find them all."
topic: geometry
topic-color: "#FB923C"
interactive: true
tags: [IGCSE, IB, SAT, Geometry]
quiz:
  - q: "The gradient (slope) of the line through (1, 2) and (5, 10) is:"
    options: ["1", "2", "4", "8"]
    answer: 1
  - q: "Two lines are perpendicular when their gradients m₁ and m₂ satisfy:"
    options: ["m₁ = m₂", "m₁ + m₂ = 0", "m₁ × m₂ = −1", "m₁ − m₂ = 1"]
    answer: 2
  - q: "The distance between (0, 0) and (3, 4) is:"
    options: ["7", "5", "√7", "12"]
    answer: 1
  - q: "The midpoint of (2, 6) and (8, 2) is:"
    options: ["(5, 4)", "(6, 4)", "(10, 8)", "(3, 2)"]
    answer: 0
  - q: "Which is the equation of a line with gradient 2 through (0, 5)?"
    options: ["y = 5x + 2", "y = 2x + 5", "y = 2x − 5", "y = 5x − 2"]
    answer: 1
---

Coordinate geometry translates geometric problems into algebra — and algebraic problems into pictures. Every shape can be described by equations. Every relationship between points can be computed precisely.

## The three key formulas

**Gradient:** m = (y₂ − y₁) / (x₂ − x₁)

**Distance:** d = √[(x₂ − x₁)² + (y₂ − y₁)²]

**Midpoint:** M = ((x₁ + x₂)/2, (y₁ + y₂)/2)

These three formulas underlie everything in coordinate geometry.

## Equations of lines

**Gradient-intercept form:** y = mx + c

**Point-gradient form:** y − y₁ = m(x − x₁) — use when you have a point and the gradient

**General form:** ax + by + c = 0

## Perpendicular lines

If a line has gradient m, any perpendicular line has gradient **−1/m**.

So gradients of perpendicular lines multiply to −1: m₁ × m₂ = −1.

**Example:** The line y = 3x − 2 has gradient 3. The perpendicular has gradient −1/3.

## Playground — explore lines and gradients

<div class="playground-block">
  <div class="playground-label">⚡ Interactive — build two perpendicular lines</div>
  <p>The orange line has gradient <strong>m</strong>. Drag m and watch the perpendicular (pink) update automatically with gradient −1/m. Note: as m → 0 (flat line), −1/m → ∞ (vertical line).</p>
  <div id="calc-coord" style="width:100%;height:420px;border-radius:8px;overflow:hidden;"></div>
</div>

<div class="insight-box">
  <p><strong>The perpendicular bisector:</strong> To find the perpendicular bisector of a segment: 1) find the midpoint M; 2) find the gradient of the segment; 3) the perpendicular bisector passes through M with gradient −1/m. This appears constantly in locus problems.</p>
</div>

## Worked example

Find the equation of the perpendicular bisector of the segment from A(2, 5) to B(8, 3).

1. Midpoint M = (5, 4)
2. Gradient of AB = (3−5)/(8−2) = −2/6 = −1/3
3. Perpendicular gradient = 3
4. Line through (5, 4) with m = 3: y − 4 = 3(x − 5) → **y = 3x − 11**

<div class="try-it">
  <h3>Practice</h3>
  <p>Find the distance from the point (3, 1) to the line y = 2x + 1.</p>
  <button class="reveal-btn">Show Answer</button>
  <div class="answer">
    <p>Rewrite: 2x − y + 1 = 0. Use the point-to-line distance formula:</p>
    <p>d = |2(3) − 1 + 1| / √(4 + 1) = |6| / √5 = 6/√5 = 6√5/5 ≈ <strong>2.68</strong></p>
  </div>
</div>

<script src="https://www.desmos.com/api/v1.7/calculator.js?apiKey=dcb31709b452b1cf9dc26972add0fda6"></script>
<script>
(function() {
  var c = Desmos.GraphingCalculator(document.getElementById('calc-coord'), {
    keypad: false, settingsMenu: false, zoomButtons: true, expressionsCollapsed: true
  });
  c.setMathBounds({ left: -6, right: 6, bottom: -5, top: 5 });
  c.setExpressions([
    { id: 'm',  latex: 'm=2',  sliderBounds: { min: -5, max: 5, step: 0.25 } },
    { id: 'L1', latex: 'y=mx', color: '#FB923C', lineWidth: 2.5, label: 'gradient m' },
    { id: 'L2', latex: 'y=-x/m', color: '#FF6B9D', lineWidth: 2.5, label: 'gradient −1/m' },
    { id: 'pt', latex: '(0,0)', color: '#FFD700', pointSize: 10 }
  ]);
})();
</script>
