---
title: "Amplitude, Period, and Phase Shift"
subtitle: "y = A sin(Bx + C) + D encodes the entire shape of a wave in four numbers."
topic: trigonometry
topic-color: "#22D3EE"
interactive: true
tags: [IGCSE, IB, A-Level, Trigonometry]
quiz:
  - q: "In y = 3sin(2x), the amplitude is:"
    options: ["2", "3", "6", "1/2"]
    answer: 1
  - q: "The period of y = sin(2x) is:"
    options: ["4π", "2π", "π", "π/2"]
    answer: 2
  - q: "y = sin(x) + 4 shifts the graph:"
    options: ["Right by 4", "Left by 4", "Up by 4", "Down by 4"]
    answer: 2
  - q: "The phase shift of y = sin(x − π/3) is:"
    options: ["π/3 to the left", "π/3 to the right", "π/3 upward", "−π/3"]
    answer: 1
  - q: "What is the period formula for y = sin(Bx)?"
    options: ["2π × B", "B/2π", "2π/B", "π/B"]
    answer: 2
---

A sine or cosine function can be stretched, compressed, shifted, and reflected — but the shape never changes. The general form **y = A sin(Bx + C) + D** captures every possible transformation in four parameters.

## The four parameters

| Parameter | Name | Effect |
|-----------|------|--------|
| A | Amplitude | Height from midline to peak (|A| = amplitude) |
| B | Frequency | Determines period: T = 2π/B |
| C | Phase shift | Horizontal shift: shift = −C/B |
| D | Vertical shift | Moves midline up/down |

## Playground — shape the wave

<div class="playground-block">
  <div class="playground-label">⚡ Interactive — drag A, B, C, D to reshape the wave</div>
  <p>The cyan wave is y = A·sin(Bx + C) + D. Drag each slider and watch the wave transform. Can you match it to y = −2sin(πx − 1) + 3?</p>
  <div id="calc-wave" style="width:100%;height:440px;border-radius:8px;overflow:hidden;"></div>
</div>

<div class="insight-box">
  <p><strong>Reading the graph:</strong> Amplitude = (max − min)/2. Period = the horizontal length of one complete cycle. To find B: T = 2π/B → B = 2π/T. Phase shift = how far right the wave has moved from y = A sin(Bx).</p>
</div>

## Worked example

**Write the equation of a wave with amplitude 3, period π, shifted right by π/4, midline at y = 1.**

- A = 3
- T = π → B = 2π/T = 2
- Phase shift right π/4 → C = −Bπ/4 = −π/2
- D = 1

**y = 3 sin(2x − π/2) + 1**

<div class="try-it">
  <h3>Practice</h3>
  <p>For y = 4sin(3x + π) − 2, state the amplitude, period, phase shift, and midline.</p>
  <button class="reveal-btn">Show Answer</button>
  <div class="answer">
    <p>Amplitude = |4| = <strong>4</strong></p>
    <p>Period = 2π/3</p>
    <p>Phase shift = −C/B = −π/3 (shifted <strong>left π/3</strong>)</p>
    <p>Midline: y = <strong>−2</strong></p>
  </div>
</div>

<script src="https://www.desmos.com/api/v1.7/calculator.js?apiKey=dcb31709b452b1cf9dc26972add0fda6"></script>
<script>
(function() {
  var c = Desmos.GraphingCalculator(document.getElementById('calc-wave'), {
    keypad: false, settingsMenu: false, zoomButtons: true, expressionsCollapsed: true
  });
  c.setMathBounds({ left: -5, right: 5, bottom: -6, top: 8 });
  c.setExpressions([
    { id: 'A',  latex: 'A=2',    sliderBounds: { min: -4, max: 4, step: 0.5 } },
    { id: 'B',  latex: 'B=1',    sliderBounds: { min: 0.25, max: 3, step: 0.25 } },
    { id: 'C',  latex: 'C=0',    sliderBounds: { min: -3.14, max: 3.14, step: 0.1 } },
    { id: 'D',  latex: 'D=0',    sliderBounds: { min: -4, max: 4, step: 0.5 } },
    { id: 'f',  latex: 'y=A\\sin(Bx+C)+D', color: '#22D3EE', lineWidth: 2.5 },
    { id: 'ml', latex: 'y=D', color: '#888', lineWidth: 1.5, lineStyle: Desmos.Styles.DASHED, label: 'midline' }
  ]);
})();
</script>
