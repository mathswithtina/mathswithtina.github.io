---
title: "What even IS a derivative?"
subtitle: "Zoom in on any curve until it looks straight — and suddenly everything makes sense."
topic: calculus
topic-color: "#FF6B9D"
interactive: true
tags: [IB, Edexcel, A-Level, Calculus]
---

You've probably been told that a derivative gives you the *slope of a curve*. But curves don't have a single slope — they're curvy. So what does that actually mean? The answer lives in one powerful idea: **zoom in far enough on any smooth curve, and it starts to look like a straight line.**

## Playground 1 — drag the point, watch the slope

The curve below is **f(x) = x²**. Point P sits on it. The pink line is the *tangent* at P — the unique line that just touches the curve there without crossing it.

Drag the **a slider** and watch two things: how the tangent line rotates, and how the slope value changes.

<div class="playground-block">
  <div class="playground-label">⚡ Interactive — Drag the slider</div>
  <p>Move <strong>a</strong> along the x-axis and watch the tangent line and slope update live.</p>
  <div id="calc1" style="width:100%;height:420px;border-radius:8px;overflow:hidden;"></div>
</div>

<div class="insight-box">
  <p><strong>What you just discovered:</strong> At x = 2 the slope is 4. At x = 3 it's 6. At x = −1 it's −2. The pattern? The slope at any point x is always <strong>2x</strong>. That function — 2x — is the derivative of x². Written as: f′(x) = 2x.</p>
</div>

## Why is the slope exactly 2x?

Here's the key idea. Pick any point x on the curve and a nearby point x + h. The slope of the line connecting them (called a **secant line**) is:

$$\frac{f(x+h) - f(x)}{h} = \frac{(x+h)^2 - x^2}{h} = \frac{2xh + h^2}{h} = 2x + h$$

Now let h shrink toward zero. The secant line becomes the tangent line, and the slope becomes exactly **2x**. This limiting process is the definition of the derivative.

## Playground 2 — try a wilder function

Now let's try **f(x) = sin(x)**. The derivative is not as obvious — but you can *feel* it from the playground. Notice: where the curve peaks (x = π/2), the tangent is flat — slope = 0. Where it crosses zero going upward, the slope is at its steepest.

<div class="playground-block">
  <div class="playground-label">⚡ Interactive — sin(x) explorer</div>
  <p>Drag <strong>a</strong> to explore how the slope of sin(x) changes. Can you guess what f′(x) is?</p>
  <div id="calc2" style="width:100%;height:420px;border-radius:8px;overflow:hidden;"></div>
</div>

<div class="insight-box">
  <p><strong>Spoiler:</strong> The derivative of sin(x) is cos(x). Check it — at x = 0 the slope is 1, which equals cos(0) = 1. At x = π/2 the slope is 0, which equals cos(π/2) = 0. The playground was already telling you the answer.</p>
</div>

## The big picture

A derivative is not a single number. It's a **new function** that tells you the slope of the original at every single point. For every x you plug in, you get back the slope there.

- f(x) = x² → f′(x) = 2x
- f(x) = x³ → f′(x) = 3x²
- f(x) = sin(x) → f′(x) = cos(x)

The pattern for powers — multiply by the exponent, reduce the exponent by one — is called the **Power Rule**, and it's one of the most useful tools in all of calculus.

---

<div class="try-it">
  <h3>Try it yourself — IB/A-Level style</h3>
  <p>The function f(x) = x³ − 3x passes through the point (2, 2).</p>
  <p><strong>(a)</strong> Find f′(x).</p>
  <p><strong>(b)</strong> Find the gradient of the curve at x = 2.</p>
  <p><strong>(c)</strong> Write the equation of the tangent at (2, 2).</p>
  <button class="reveal-btn">Show Answer</button>
  <div class="answer">
    <p><strong>(a)</strong> f′(x) = 3x² − 3</p>
    <p><strong>(b)</strong> f′(2) = 3(4) − 3 = <strong>9</strong></p>
    <p><strong>(c)</strong> Tangent: y − 2 = 9(x − 2)  →  <strong>y = 9x − 16</strong></p>
  </div>
</div>

<script src="https://www.desmos.com/api/v1.7/calculator.js?apiKey=dcb31709b452b1cf9dc26972add0fda6"></script>
<script>
(function() {
  var opts = {
    keypad: false,
    settingsMenu: false,
    expressionsCollapsed: false,
    lockViewport: false,
    zoomButtons: true
  };

  /* Playground 1: f(x) = x² */
  var c1 = Desmos.GraphingCalculator(document.getElementById('calc1'), opts);
  c1.setMathBounds({ left: -4, right: 4, bottom: -2, top: 10 });
  c1.setExpressions([
    { id: 'f',       latex: 'f(x)=x^{2}',            color: '#00C4FF', lineWidth: 2.5 },
    { id: 'a',       latex: 'a=1',                    sliderBounds: { min: -3, max: 3, step: 0.05 } },
    { id: 'pt',      latex: '(a, f(a))',               color: '#FF6B9D', pointSize: 12, showLabel: true, label: 'P' },
    { id: 'tangent', latex: 'y=f(a)+2a(x-a)',         color: '#FF6B9D', lineWidth: 2 },
    { id: 'slope',   latex: 'slope=2a',                hidden: false }
  ]);

  /* Playground 2: f(x) = sin(x) */
  var c2 = Desmos.GraphingCalculator(document.getElementById('calc2'), opts);
  c2.setMathBounds({ left: -7, right: 7, bottom: -2.5, top: 2.5 });
  c2.setExpressions([
    { id: 'g',       latex: 'g(x)=\\sin(x)',           color: '#A78BFA', lineWidth: 2.5 },
    { id: 'b',       latex: 'b=0',                     sliderBounds: { min: -6.28, max: 6.28, step: 0.05 } },
    { id: 'pt2',     latex: '(b, g(b))',                color: '#FF6B9D', pointSize: 12, showLabel: true, label: 'P' },
    { id: 'tan2',    latex: 'y=g(b)+\\cos(b)(x-b)',    color: '#FF6B9D', lineWidth: 2 },
    { id: 'slope2',  latex: 'slope=\\cos(b)',           hidden: false }
  ]);
})();
</script>
