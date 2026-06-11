---
title: "The Fundamental Theorem of Calculus"
subtitle: "Differentiation and integration are opposites. This theorem proves it — and makes all integration possible."
topic: calculus
topic-color: "#FF6B9D"
interactive: true
tags: [IB, A-Level, Edexcel, Calculus]
quiz:
  - q: "The Fundamental Theorem of Calculus connects:"
    options: ["Limits and derivatives", "Derivatives and integrals", "Riemann sums and limits", "Polynomials and trigonometry"]
    answer: 1
  - q: "To evaluate ∫₁⁴ 2x dx, you:"
    options: ["Approximate with rectangles", "Find F(4) − F(1) where F'(x) = 2x", "Differentiate 2x", "Set 2x = 0"]
    answer: 1
  - q: "The antiderivative of 3x² is:"
    options: ["6x", "x³ + C", "3x³", "x²/2 + C"]
    answer: 1
  - q: "What is ∫₀³ x² dx?"
    options: ["3", "6", "9", "27"]
    answer: 2
  - q: "If F'(x) = f(x), then ∫ₐᵇ f(x) dx equals:"
    options: ["F'(b) − F'(a)", "F(b) − F(a)", "F(a) − F(b)", "f(b) − f(a)"]
    answer: 1
---

The Fundamental Theorem of Calculus (FTC) is one of the most important results in all of mathematics. It says something surprising: **differentiation and integration are inverse operations** — like multiplication and division, or exponentiation and logarithms.

This theorem is what makes integration practical. Without it, every integral would require Riemann sums from scratch.

## The theorem, simply stated

If F is an antiderivative of f (meaning F′(x) = f(x)), then:

**∫ₐᵇ f(x) dx = F(b) − F(a)**

That's it. To find the area under f between a and b, find the antiderivative F, evaluate it at both endpoints, subtract. No rectangles required.

## Playground — accumulate area as you slide

<div class="playground-block">
  <div class="playground-label">⚡ Interactive — drag t to watch the accumulated area grow</div>
  <p>The pink function is f(x) = x². The shaded area from 0 to t is ∫₀ᵗ x² dx = t³/3. As you drag <strong>t</strong>, the blue number shows the exact accumulated area — computed by the FTC, not rectangles.</p>
  <div id="calc-ftc" style="width:100%;height:430px;border-radius:8px;overflow:hidden;"></div>
</div>

<div class="insight-box">
  <p><strong>Why this is remarkable:</strong> The derivative captures instantaneous rate of change. The integral captures cumulative area. They seem completely different ideas. The FTC says: compute one to get the other. Mathematics finding a hidden unity.</p>
</div>

## A worked integral

**Evaluate ∫₁⁵ (3x² − 2x) dx**

Step 1: Find antiderivative F(x) = x³ − x²

Step 2: Evaluate: F(5) − F(1) = (125 − 25) − (1 − 1) = 100 − 0 = **100**

Standard notation: [x³ − x²]₁⁵ = 100

## The + C question

When you find an indefinite integral ∫f(x)dx, you write + C (constant of integration) because any constant disappears when differentiated. For a definite integral, the constants cancel: F(b) + C − (F(a) + C) = F(b) − F(a). So you can ignore C for definite integrals.

<div class="try-it">
  <h3>Practice</h3>
  <p>Evaluate ∫₀² (4x + 1) dx.</p>
  <button class="reveal-btn">Show Answer</button>
  <div class="answer">
    <p>Antiderivative: F(x) = 2x² + x</p>
    <p>[2x² + x]₀² = (8 + 2) − (0) = <strong>10</strong></p>
  </div>
</div>

<script src="https://www.desmos.com/api/v1.7/calculator.js?apiKey=dcb31709b452b1cf9dc26972add0fda6"></script>
<script>
(function() {
  var c = Desmos.GraphingCalculator(document.getElementById('calc-ftc'), {
    keypad: false, settingsMenu: false, zoomButtons: true, expressionsCollapsed: true
  });
  c.setMathBounds({ left: -0.3, right: 3.3, bottom: -0.5, top: 10 });
  c.setExpressions([
    { id: 'f',    latex: 'f(x)=x^{2}', color: '#FF6B9D', lineWidth: 2.5 },
    { id: 't',    latex: 't=1.5', sliderBounds: { min: 0, max: 3, step: 0.05 } },
    { id: 'area', latex: '0\\le y\\le f(x)\\left\\{0\\le x\\le t\\right\\}',
                  color: '#FF6B9D', fillOpacity: 0.3, lineOpacity: 0 },
    { id: 'F',    latex: 'F=t^{3}/3', hidden: false, label: 'Area = t³/3' },
    { id: 'pt',   latex: '(t, 0)', color: '#FFD700', pointSize: 10,
                  showLabel: true, label: 'area = t³/3' }
  ]);
})();
</script>
