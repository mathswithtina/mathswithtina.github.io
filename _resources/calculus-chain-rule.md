---
title: "The Chain Rule — derivatives of composed functions"
subtitle: "When one function is wrapped inside another, the chain rule is how you differentiate the result."
topic: calculus
topic-color: "#FF6B9D"
interactive: true
tags: [IB, A-Level, Edexcel, Calculus]
quiz:
  - q: "What is the derivative of sin(x²)?"
    options: ["cos(x²)", "2x·cos(x²)", "2cos(x)", "cos(2x)"]
    answer: 1
  - q: "The chain rule says: if h(x) = f(g(x)), then h'(x) ="
    options: ["f'(x)·g'(x)", "f'(g(x))·g'(x)", "f(g'(x))", "f'(g(x)) + g'(x)"]
    answer: 1
  - q: "What is d/dx of (3x + 1)⁵?"
    options: ["5(3x+1)⁴", "15(3x+1)⁴", "5(3x+1)⁴·3x", "(3x+1)⁵·5"]
    answer: 1
  - q: "Which function requires the chain rule to differentiate?"
    options: ["x³ + 2x", "3x·sin(x)", "e^(x²)", "x² + sin(x)"]
    answer: 2
  - q: "The derivative of e^(kx) is:"
    options: ["e^(kx)", "k·e^(kx)", "ke^k", "x·e^(kx-1)"]
    answer: 1
---

Every time you see a function **inside** another function, you need the chain rule. sin(x²), e^(3x), (x²+1)⁷ — these are all compositions. You can't just differentiate the outside and forget the inside exists.

**The chain rule:** if h(x) = f(g(x)), then h′(x) = f′(g(x)) · g′(x).

In plain language: differentiate the **outside** (leaving the inside unchanged), then **multiply by the derivative of the inside**.

## Playground — see the chain rule in action

<div class="playground-block">
  <div class="playground-label">⚡ Interactive — adjust k and watch the tangent line change slope</div>
  <p>Drag <strong>k</strong> to change the function. The derivative of sin(kx) is k·cos(kx). Notice how steeper oscillations produce steeper tangent lines — that's the chain rule multiplying by k.</p>
  <div id="calc-chain" style="width:100%;height:420px;border-radius:8px;overflow:hidden;"></div>
</div>

<div class="insight-box">
  <p><strong>How to spot a composition:</strong> Ask "is there a function inside a function?" sin(x²) → yes, x² is inside sin. (2x+5)⁴ → yes, 2x+5 is inside the power. e^(x³) → yes, x³ is inside e. Each one needs the chain rule.</p>
</div>

## Step-by-step examples

**Example 1:** Differentiate (3x + 1)⁵

- Outer function: u⁵ → derivative 5u⁴
- Inner function: u = 3x + 1 → derivative 3
- Chain rule: 5(3x+1)⁴ · **3** = **15(3x+1)⁴**

**Example 2:** Differentiate e^(x²)

- Outer: eᵘ → derivative eᵘ
- Inner: u = x² → derivative 2x
- Chain rule: e^(x²) · **2x** = **2x·e^(x²)**

**Example 3:** Differentiate sin(4x)

- Outer: sin(u) → cos(u)
- Inner: u = 4x → derivative 4
- Chain rule: cos(4x) · **4** = **4cos(4x)**

<div class="try-it">
  <h3>Practice</h3>
  <p>Find the derivative of cos(x³ + 2).</p>
  <button class="reveal-btn">Show Answer</button>
  <div class="answer">
    <p>Outer: cos(u) → −sin(u)</p>
    <p>Inner: x³ + 2 → 3x²</p>
    <p>Chain rule: <strong>−3x²·sin(x³ + 2)</strong></p>
  </div>
</div>

<script src="https://www.desmos.com/api/v1.7/calculator.js?apiKey=dcb31709b452b1cf9dc26972add0fda6"></script>
<script>
(function() {
  var c = Desmos.GraphingCalculator(document.getElementById('calc-chain'), {
    keypad: false, settingsMenu: false, zoomButtons: true, expressionsCollapsed: true
  });
  c.setMathBounds({ left: -2.5, right: 2.5, bottom: -2, top: 2 });
  c.setExpressions([
    { id: 'k',  latex: 'k=1', sliderBounds: { min: 0.5, max: 4, step: 0.5 } },
    { id: 'f',  latex: 'f(x)=\\sin(kx)', color: '#FF6B9D', lineWidth: 2.5 },
    { id: 'df', latex: "f'(x)=k\\cos(kx)", color: '#A78BFA', lineWidth: 2, lineStyle: Desmos.Styles.DASHED },
    { id: 'a',  latex: 'a=0.8', sliderBounds: { min: -2, max: 2, step: 0.05 } },
    { id: 'pt', latex: '(a, f(a))', color: '#FF6B9D', pointSize: 10, showLabel: true, label: 'point' },
    { id: 'tan',latex: "f(a)+f'(a)\\cdot(x-a)", color: '#FFD700', lineWidth: 1.5 }
  ]);
})();
</script>
