---
title: "Even and Odd Functions — symmetry in disguise"
subtitle: "Even functions mirror across the y-axis. Odd functions rotate 180° around the origin. These are not just names."
topic: functions
topic-color: "#00C4FF"
interactive: true
tags: [IB, A-Level, Functions]
quiz:
  - q: "An even function satisfies:"
    options: ["f(−x) = −f(x)", "f(−x) = f(x)", "f(x) = f(−x) + 1", "f(0) = 0"]
    answer: 1
  - q: "Which of these is an even function?"
    options: ["f(x) = x³", "f(x) = sin(x)", "f(x) = x²", "f(x) = x"]
    answer: 2
  - q: "An odd function always passes through:"
    options: ["(1, 1)", "The y-axis", "The origin (0, 0)", "The point (0, 1)"]
    answer: 2
  - q: "Is f(x) = x² + x even, odd, or neither?"
    options: ["Even", "Odd", "Neither", "Both"]
    answer: 2
  - q: "The integral of an odd function over [−a, a] is always:"
    options: ["Positive", "Negative", "Zero", "Undefined"]
    answer: 2
---

Symmetry is not just aesthetic — it's a powerful mathematical property. Even and odd functions have built-in symmetry that you can exploit in integration, simplification, and graphing.

## Definitions

- **Even function:** f(−x) = f(x) for all x. Graph is symmetric about the **y-axis**.
- **Odd function:** f(−x) = −f(x) for all x. Graph has **180° rotational symmetry** about the origin.

The names come from power functions: x² (even power, even function), x³ (odd power, odd function).

## Testing even/odd

Substitute −x for x and simplify. Compare to the original.

| Function | f(−x) | Even/Odd? |
|----------|-------|-----------|
| f(x) = x⁴ | (−x)⁴ = x⁴ = f(x) | Even |
| f(x) = x³ | (−x)³ = −x³ = −f(x) | Odd |
| f(x) = cos(x) | cos(−x) = cos(x) | Even |
| f(x) = sin(x) | sin(−x) = −sin(x) | Odd |
| f(x) = x² + x | x² − x ≠ f(x) and ≠ −f(x) | Neither |

## Playground — test symmetry visually

<div class="playground-block">
  <div class="playground-label">⚡ Interactive — toggle between even and odd function types</div>
  <p>Drag the <strong>n</strong> slider to change the power. Even n (2, 4, 6…) → y-axis symmetry. Odd n (1, 3, 5…) → rotational symmetry. Watch the shape transform.</p>
  <div id="calc-eo" style="width:100%;height:420px;border-radius:8px;overflow:hidden;"></div>
</div>

<div class="insight-box">
  <p><strong>Calculus shortcut:</strong> The integral of any odd function over a symmetric interval [−a, a] is exactly 0 — the negative half cancels the positive half perfectly. This saves enormous computation in exam questions.</p>
</div>

## Even + Odd decomposition

Any function can be written as the sum of an even and odd part:

- Even part: E(x) = [f(x) + f(−x)] / 2
- Odd part: O(x) = [f(x) − f(−x)] / 2
- Then: f(x) = E(x) + O(x)

<div class="try-it">
  <h3>Practice</h3>
  <p>Is f(x) = x³ + x odd, even, or neither? Show your working.</p>
  <button class="reveal-btn">Show Answer</button>
  <div class="answer">
    <p>f(−x) = (−x)³ + (−x) = −x³ − x = −(x³ + x) = −f(x)</p>
    <p>Since f(−x) = −f(x), the function is <strong>odd</strong>.</p>
    <p>Graph check: passes through origin, has 180° rotational symmetry.</p>
  </div>
</div>

<script src="https://www.desmos.com/api/v1.7/calculator.js?apiKey=dcb31709b452b1cf9dc26972add0fda6"></script>
<script>
(function() {
  var c = Desmos.GraphingCalculator(document.getElementById('calc-eo'), {
    keypad: false, settingsMenu: false, zoomButtons: true, expressionsCollapsed: true
  });
  c.setMathBounds({ left: -3, right: 3, bottom: -5, top: 5 });
  c.setExpressions([
    { id: 'n',  latex: 'n=2',  sliderBounds: { min: 1, max: 6, step: 1 } },
    { id: 'f',  latex: 'y=x^{n}', color: '#00C4FF', lineWidth: 2.5 },
    { id: 'ax', latex: 'x=0', color: '#333', lineWidth: 1, lineStyle: Desmos.Styles.DASHED }
  ]);
})();
</script>
