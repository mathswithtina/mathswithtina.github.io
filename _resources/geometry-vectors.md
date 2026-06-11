---
title: "Vectors — direction and magnitude together"
subtitle: "A vector is not just a number — it has both size and direction. That changes everything."
topic: geometry
topic-color: "#FB923C"
interactive: true
tags: [IGCSE, IB, A-Level, Geometry]
quiz:
  - q: "The magnitude of vector (3, 4) is:"
    options: ["7", "5", "√7", "12"]
    answer: 1
  - q: "If a = (2, 3) and b = (−1, 4), what is a + b?"
    options: ["(1, 7)", "(3, −1)", "(−2, 12)", "(1, 1)"]
    answer: 0
  - q: "A unit vector has magnitude:"
    options: ["0", "1", "Equal to its direction", "Undefined"]
    answer: 1
  - q: "2a means:"
    options: ["a rotated by 2", "A vector in the same direction as a but twice as long", "A vector with magnitude 2", "a + a in perpendicular directions"]
    answer: 1
  - q: "If AB = b − a, and M is the midpoint of AB, then OM ="
    options: ["(a + b)/2", "b − a", "a − b", "(b − a)/2"]
    answer: 0
---

Scalars have only magnitude (temperature, mass, speed). Vectors have both **magnitude and direction** (velocity, displacement, force). This distinction is fundamental in physics, geometry, and all of higher mathematics.

A vector is written as a column (2D):  **a** = (3, −2) or a = 3**i** − 2**j**.

## Vector operations

**Addition:** (a₁, a₂) + (b₁, b₂) = (a₁ + b₁, a₂ + b₂)

Think of placing arrows tip-to-tail. The sum is the arrow from start to final tip.

**Scalar multiplication:** k(a₁, a₂) = (ka₁, ka₂)

Stretches (or reverses if k < 0) the vector without changing direction.

**Magnitude:** |**a**| = √(a₁² + a₂²)

## Playground — explore vector addition

<div class="playground-block">
  <div class="playground-label">⚡ Interactive — drag components to see vector addition</div>
  <p>Vector <strong>a</strong> is orange, vector <strong>b</strong> is pink. The green arrow is <strong>a + b</strong> — the resultant. Drag the a₁, a₂, b₁, b₂ sliders and watch the parallelogram of addition form.</p>
  <div id="calc-vec" style="width:100%;height:440px;border-radius:8px;overflow:hidden;"></div>
</div>

<div class="insight-box">
  <p><strong>Position vectors:</strong> If O is the origin, the position vector of point P is OP = p. Then the vector from A to B is AB = b − a (subtract where you start, keep where you end). This is the single most useful fact in vector geometry.</p>
</div>

## Finding the midpoint

If A has position vector **a** and B has position vector **b**, the midpoint M has position vector:

**OM = (a + b)/2**

This is just the average of the two position vectors — same idea as the midpoint formula in coordinates.

## Unit vectors

A unit vector has magnitude 1 and points in the given direction:

**â = a / |a|**

To make **a** = (3, 4) a unit vector: |a| = 5, so **â** = (3/5, 4/5).

<div class="try-it">
  <h3>Practice</h3>
  <p>A = position vector (1, 3), B = position vector (7, 11). Find AB and its magnitude. Find the midpoint M.</p>
  <button class="reveal-btn">Show Answer</button>
  <div class="answer">
    <p>AB = b − a = (7−1, 11−3) = (6, 8)</p>
    <p>|AB| = √(36 + 64) = √100 = <strong>10</strong></p>
    <p>OM = (a + b)/2 = (8/2, 14/2) = <strong>(4, 7)</strong></p>
  </div>
</div>

<script src="https://www.desmos.com/api/v1.7/calculator.js?apiKey=dcb31709b452b1cf9dc26972add0fda6"></script>
<script>
(function() {
  var c = Desmos.GraphingCalculator(document.getElementById('calc-vec'), {
    keypad: false, settingsMenu: false, zoomButtons: true, expressionsCollapsed: true
  });
  c.setMathBounds({ left: -2, right: 10, bottom: -2, top: 9 });
  c.setExpressions([
    { id: 'a1', latex: 'a_1=3', sliderBounds: { min: -4, max: 6, step: 0.5 } },
    { id: 'a2', latex: 'a_2=1', sliderBounds: { min: -4, max: 6, step: 0.5 } },
    { id: 'b1', latex: 'b_1=2', sliderBounds: { min: -4, max: 6, step: 0.5 } },
    { id: 'b2', latex: 'b_2=4', sliderBounds: { min: -4, max: 6, step: 0.5 } },
    { id: 'va', latex: '\\left(ta_1, ta_2\\right)', color: '#FB923C', lineWidth: 3,
                parametricDomain: { min: 0, max: 1 }, label: 'a' },
    { id: 'vb', latex: '\\left(a_1+tb_1, a_2+tb_2\\right)', color: '#FF6B9D', lineWidth: 3,
                parametricDomain: { min: 0, max: 1 }, label: 'b' },
    { id: 'vs', latex: '\\left(t(a_1+b_1), t(a_2+b_2)\\right)', color: '#34D399', lineWidth: 3,
                parametricDomain: { min: 0, max: 1 }, label: 'a+b' }
  ]);
})();
</script>
