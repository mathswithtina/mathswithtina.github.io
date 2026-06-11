---
title: "Riemann Sums — building area from rectangles"
subtitle: "How do you find the area under a curve? Start with rectangles. Use more. Watch what happens."
topic: calculus
topic-color: "#FF6B9D"
interactive: true
tags: [IB, A-Level, Calculus]
quiz:
  - q: "What does a Riemann sum approximate?"
    options: ["The derivative of a function", "The area under a curve", "The slope at a point", "The maximum of a function"]
    answer: 1
  - q: "As the number of rectangles increases, the Riemann sum becomes:"
    options: ["Less accurate", "More accurate", "Undefined", "Equal to the derivative"]
    answer: 1
  - q: "What is the exact integral of x from 0 to 4?"
    options: ["4", "8", "16", "2"]
    answer: 1
  - q: "Which notation represents the definite integral of f(x) from a to b?"
    options: ["f'(b) - f'(a)", "sum of f(x)", "integral from a to b of f(x)dx", "lim f(x)"]
    answer: 2
  - q: "The width of each rectangle in a Riemann sum with n rectangles over [0,4] is:"
    options: ["n/4", "4n", "4/n", "1/n"]
    answer: 2
---

The integral is the area under a curve. But a curve isn't a rectangle — so how do you measure it exactly? The answer starts with something imperfect: **rectangles**.

Slice the area under the curve into thin vertical strips. Each strip is approximately a rectangle. Add the areas of all the rectangles. The result is close — but not exact. Now make the rectangles thinner and thinner. More and more of them. Watch what happens.

## Playground — drag the slider to add more rectangles

<div class="playground-block">
  <div class="playground-label">⚡ Interactive — drag n to add more rectangles</div>
  <p>The function is f(x) = x². Drag <strong>n</strong> and watch the blue rectangles fill the area under the curve. The sum gets closer to the true integral as n increases.</p>
  <div id="calc-riemann" style="width:100%;height:450px;border-radius:8px;overflow:hidden;"></div>
</div>

<div class="insight-box">
  <p><strong>The key insight:</strong> As n → ∞ (infinitely many, infinitely thin rectangles), the Riemann sum becomes the <em>exact</em> area. This limit is the definite integral. The symbol ∫ is literally an elongated S for "sum."</p>
</div>

## The notation

The definite integral from a to b of f(x) is written:

**∫ₐᵇ f(x) dx**

The "dx" is a reminder that each rectangle has width dx — a tiny slice of x. The integral sums infinitely many of these infinitely thin slices.

## Computing the exact area

For f(x) = x² from 0 to 3, the Riemann sum with n rectangles gives:
(1/n³) × Σk² = (1/n³) × n(n+1)(2n+1)/6

As n → ∞, this → 1/3 × 2 × 3³ = **9**. You can verify: ∫₀³ x² dx = [x³/3]₀³ = 27/3 = 9.

<div class="try-it">
  <h3>Practice</h3>
  <p>Evaluate ∫₀² (2x + 1) dx using the antiderivative.</p>
  <button class="reveal-btn">Show Answer</button>
  <div class="answer">
    <p>Antiderivative of 2x + 1 is x² + x.</p>
    <p>[x² + x]₀² = (4 + 2) − (0) = <strong>6</strong></p>
  </div>
</div>

<script src="https://www.desmos.com/api/v1.7/calculator.js?apiKey=dcb31709b452b1cf9dc26972add0fda6"></script>
<script>
(function() {
  var c = Desmos.GraphingCalculator(document.getElementById('calc-riemann'), {
    keypad: false, settingsMenu: false, zoomButtons: true, expressionsCollapsed: true
  });
  c.setMathBounds({ left: -0.3, right: 3.3, bottom: -0.5, top: 10 });
  c.setExpressions([
    { id: 'f',    latex: 'f(x)=x^{2}',        color: '#FF6B9D', lineWidth: 2.5 },
    { id: 'n',    latex: 'n=4',                sliderBounds: { min: 1, max: 50, step: 1 } },
    { id: 'dx',   latex: 'w=3/n',              hidden: true },
    { id: 'rects',latex: '0\\le y\\le f(\\left\\lfloor x/w\\right\\rfloor w+w/2)\\left\\{0\\le x\\le3\\right\\}',
                  color: '#FF6B9D', lineOpacity: 0.3, fillOpacity: 0.25 },
    { id: 'sum',  latex: 'S=w\\sum_{k=0}^{n-1}f(kw+w/2)', hidden: false }
  ]);
})();
</script>
