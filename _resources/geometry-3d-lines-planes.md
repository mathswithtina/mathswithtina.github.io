---
title: "Lines and Planes in 3D"
subtitle: "The third dimension changes everything. Lines become rays in space; planes are infinite flat sheets."
topic: geometry
topic-color: "#FB923C"
interactive: true
tags: [IB, A-Level, Geometry]
quiz:
  - q: "The vector equation of a line through A with direction d is:"
    options: ["r = d + ta", "r = a + td", "r = a × d", "r = t(a + d)"]
    answer: 1
  - q: "Two lines in 3D that don't intersect and aren't parallel are called:"
    options: ["Parallel lines", "Perpendicular lines", "Skew lines", "Coincident lines"]
    answer: 2
  - q: "The equation of a plane with normal n through point A is:"
    options: ["n · (r − a) = 0", "r = a + tn", "r · a = n", "n = r − a"]
    answer: 0
  - q: "To find where a line meets a plane, you:"
    options: ["Set the line equal to the plane equation and solve for t", "Find the cross product", "Set both equations to zero", "Use the dot product only"]
    answer: 0
  - q: "The normal vector to the plane 2x − 3y + z = 5 is:"
    options: ["(2, 3, 1)", "(2, −3, 1)", "(5, 5, 5)", "(−2, 3, −1)"]
    answer: 1
---

In 3D geometry, the tools are the same (vectors, equations) but the objects are richer. Lines have direction vectors; planes have normal vectors. The interplay between them is the core of 3D geometry.

## Lines in 3D

A line passes through point **a** in direction **d**. Its vector equation:

**r = a + t·d** (t ∈ ℝ)

Every value of t gives a different point on the line.

**Example:** Line through (1, 2, −1) in direction (3, 0, 1):

r = (1, 2, −1) + t(3, 0, 1) = (1 + 3t, 2, −1 + t)

## Planes in 3D

A plane is defined by a point **a** on it and a **normal vector n** perpendicular to it:

**n · (r − a) = 0**, which expands to **n₁x + n₂y + n₃z = d**

**Example:** Plane with normal (2, 1, −3) through (0, 0, 1):

2x + y − 3z = 2(0) + 1(0) − 3(1) = −3, so **2x + y − 3z = −3**

## Playground — explore a line in 3D

<div class="playground-block">
  <div class="playground-label">⚡ Interactive — parametric line in 3D (projected to 2D)</div>
  <p>A parametric line: x = a₁ + t·d₁, y = a₂ + t·d₂. Drag <strong>t</strong> to move along the line. Drag the direction components to change the line's orientation. This shows the 2D shadow of a 3D concept.</p>
  <div id="calc-3d" style="width:100%;height:420px;border-radius:8px;overflow:hidden;"></div>
</div>

<div class="insight-box">
  <p><strong>Skew lines:</strong> In 3D, two lines can be neither intersecting nor parallel — they pass each other in different planes. This cannot happen in 2D. Skew lines have no common point and non-parallel direction vectors.</p>
</div>

## Finding the intersection of a line and a plane

**Line:** r = (1, 0, 2) + t(1, 2, −1)

**Plane:** x + y + z = 6

Substitute the line into the plane:
(1 + t) + (2t) + (2 − t) = 6
3 + 2t = 6 → t = 3/2

Point: (1 + 3/2, 3, 2 − 3/2) = **(5/2, 3, 1/2)**

## Angle between a line and a plane

The angle φ between line direction **d** and plane normal **n**:

sin φ = |d · n| / (|d| |n|)

(Note: we use sin here, not cos, because the angle between the line and the plane is the complement of the angle between the line and the normal.)

<div class="try-it">
  <h3>Practice</h3>
  <p>Find where the line r = (2, −1, 3) + t(1, 2, −2) meets the plane x + 2y − z = 1.</p>
  <button class="reveal-btn">Show Answer</button>
  <div class="answer">
    <p>Substitute: (2+t) + 2(−1+2t) − (3−2t) = 1</p>
    <p>2 + t − 2 + 4t − 3 + 2t = 1</p>
    <p>7t − 3 = 1 → 7t = 4 → t = 4/7</p>
    <p>Point: (2 + 4/7, −1 + 8/7, 3 − 8/7) = <strong>(18/7, 1/7, 13/7)</strong></p>
  </div>
</div>

<script src="https://www.desmos.com/api/v1.7/calculator.js?apiKey=dcb31709b452b1cf9dc26972add0fda6"></script>
<script>
(function() {
  var c = Desmos.GraphingCalculator(document.getElementById('calc-3d'), {
    keypad: false, settingsMenu: false, zoomButtons: true, expressionsCollapsed: true
  });
  c.setMathBounds({ left: -6, right: 8, bottom: -5, top: 7 });
  c.setExpressions([
    { id: 'a1', latex: 'a_1=0',  sliderBounds: { min: -4, max: 4, step: 0.5 } },
    { id: 'a2', latex: 'a_2=1',  sliderBounds: { min: -4, max: 4, step: 0.5 } },
    { id: 'd1', latex: 'd_1=2',  sliderBounds: { min: -3, max: 3, step: 0.5 } },
    { id: 'd2', latex: 'd_2=1',  sliderBounds: { min: -3, max: 3, step: 0.5 } },
    { id: 't',  latex: 't=0',    sliderBounds: { min: -3, max: 3, step: 0.1 } },
    { id: 'line', latex: 'y=a_2+(d_2/d_1)(x-a_1)', color: '#FB923C', lineWidth: 2.5, label: 'line' },
    { id: 'pt',   latex: '(a_1+d_1 t, a_2+d_2 t)', color: '#FFD700', pointSize: 12,
                  showLabel: true, label: 'point at parameter t' }
  ]);
})();
</script>
