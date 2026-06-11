---
title: "The Unit Circle — where trigonometry lives"
subtitle: "sin and cos are not just ratios in triangles. They're coordinates on a circle of radius 1."
topic: trigonometry
topic-color: "#22D3EE"
interactive: true
tags: [IGCSE, IB, A-Level, Trigonometry]
quiz:
  - q: "On the unit circle, cos(θ) represents:"
    options: ["The y-coordinate", "The x-coordinate", "The arc length", "The radius"]
    answer: 1
  - q: "What is sin(90°)?"
    options: ["0", "1", "−1", "√2/2"]
    answer: 1
  - q: "What are the coordinates at 180° on the unit circle?"
    options: ["(0, 1)", "(1, 0)", "(−1, 0)", "(0, −1)"]
    answer: 2
  - q: "cos(270°) equals:"
    options: ["−1", "0", "1", "√3/2"]
    answer: 1
  - q: "In which quadrant are both sin and cos negative?"
    options: ["First", "Second", "Third", "Fourth"]
    answer: 2
---

The unit circle is a circle of radius 1 centred at the origin. Every point on it has coordinates **(cos θ, sin θ)** — where θ is the angle measured counterclockwise from the positive x-axis.

This is the foundation of all trigonometry. The triangle definitions (SOH CAH TOA) are just a special case of this more general circle picture.

## Playground — drag the angle around the circle

<div class="playground-block">
  <div class="playground-label">⚡ Interactive — drag the point around the unit circle</div>
  <p>Drag the angle <strong>θ</strong> and watch the coordinates update. The x-coordinate is cos(θ), the y-coordinate is sin(θ). The dashed lines show this projection clearly.</p>
  <div id="calc-unit" style="width:100%;height:460px;border-radius:8px;overflow:hidden;"></div>
</div>

<div class="insight-box">
  <p><strong>The key angles to memorise:</strong> At 0°: (1, 0). At 90°: (0, 1). At 180°: (−1, 0). At 270°: (0, −1). At 45°: (√2/2, √2/2). At 60°: (1/2, √3/2). At 30°: (√3/2, 1/2). These are all you need for exams.</p>
</div>

## CAST rule — signs in each quadrant

| Quadrant | Angle range | Positive |
|----------|-------------|---------|
| 1st (A) | 0° to 90° | All (sin, cos, tan) |
| 2nd (S) | 90° to 180° | Sin only |
| 3rd (T) | 180° to 270° | Tan only |
| 4th (C) | 270° to 360° | Cos only |

The mnemonic: **C**ast → **A**ll **S**tudents **T**ake **C**alculus (or: All Sin Tan Cos, going counterclockwise from Q4).

## Why the unit circle beats SOHCAHTOA

SOHCAHTOA only works for acute angles in right triangles. The unit circle defines sin and cos for any angle — including obtuse angles (which appear everywhere in IB and A-Level problems).

<div class="try-it">
  <h3>Practice</h3>
  <p>Find the exact values of sin(150°) and cos(150°) using the unit circle.</p>
  <button class="reveal-btn">Show Answer</button>
  <div class="answer">
    <p>150° is in the 2nd quadrant. Reference angle = 180° − 150° = 30°.</p>
    <p>In Q2: sin is positive, cos is negative.</p>
    <p>sin(30°) = 1/2, cos(30°) = √3/2</p>
    <p>So: <strong>sin(150°) = 1/2, cos(150°) = −√3/2</strong></p>
  </div>
</div>

<script src="https://www.desmos.com/api/v1.7/calculator.js?apiKey=dcb31709b452b1cf9dc26972add0fda6"></script>
<script>
(function() {
  var c = Desmos.GraphingCalculator(document.getElementById('calc-unit'), {
    keypad: false, settingsMenu: false, zoomButtons: true, expressionsCollapsed: true
  });
  c.setMathBounds({ left: -1.7, right: 1.7, bottom: -1.4, top: 1.4 });
  c.setExpressions([
    { id: 'circ', latex: 'x^{2}+y^{2}=1', color: '#22D3EE', lineWidth: 2 },
    { id: 'th',   latex: '\\theta=0.7', sliderBounds: { min: 0, max: 6.28, step: 0.02 } },
    { id: 'px',   latex: 'p_x=\\cos(\\theta)', hidden: true },
    { id: 'py',   latex: 'p_y=\\sin(\\theta)', hidden: true },
    { id: 'pt',   latex: '(p_x, p_y)', color: '#FFD700', pointSize: 14,
                  showLabel: true, label: '(cos θ, sin θ)' },
    { id: 'rx',   latex: 'y=0\\left\\{0\\le x\\le p_x\\right\\}', color: '#FF6B9D', lineWidth: 2, lineStyle: Desmos.Styles.DASHED },
    { id: 'ry',   latex: 'x=p_x\\left\\{0\\le y\\le p_y\\right\\}', color: '#A78BFA', lineWidth: 2, lineStyle: Desmos.Styles.DASHED },
    { id: 'rad',  latex: '\\left(\\frac{p_x}{2},\\frac{p_y}{2}\\right)', color: '#888',
                  showLabel: true, label: 'r = 1', hidden: true },
    { id: 'line', latex: '\\left(t\\cos(\\theta), t\\sin(\\theta)\\right)', color: '#22D3EE',
                  parametricDomain: { min: 0, max: 1 }, lineWidth: 2 }
  ]);
})();
</script>
