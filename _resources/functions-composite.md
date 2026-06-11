---
title: "Composite Functions — functions inside functions"
subtitle: "f(g(x)) means: run g first, then feed the result to f. Composition is the foundation of the chain rule."
topic: functions
topic-color: "#00C4FF"
interactive: true
tags: [IGCSE, IB, A-Level, Functions]
quiz:
  - q: "If f(x) = x² and g(x) = x + 1, what is f(g(x))?"
    options: ["x² + 1", "(x+1)²", "x² + x + 1", "x³ + x²"]
    answer: 1
  - q: "If f(x) = 2x and g(x) = x − 3, what is g(f(x))?"
    options: ["2x − 3", "2(x − 3)", "2x − 6", "x − 6"]
    answer: 2
  - q: "Is f(g(x)) always equal to g(f(x))?"
    options: ["Yes, always", "No, composition is not commutative in general", "Only for linear functions", "Only if both functions are invertible"]
    answer: 1
  - q: "If f(g(3)) = 10 and g(3) = 4, then f(4) ="
    options: ["3", "4", "10", "12"]
    answer: 2
  - q: "The notation (f ∘ g)(x) means:"
    options: ["f(x) × g(x)", "f(x) + g(x)", "f(g(x))", "g(f(x))"]
    answer: 2
---

A composite function is created by feeding the output of one function as the input to another. f(g(x)) means: compute g(x) first, then apply f to that result.

It's like an assembly line: x → [g] → g(x) → [f] → f(g(x)).

The notation **f ∘ g** (read: "f composed with g") means apply g first, then f. The order matters!

## Example

Let f(x) = x² and g(x) = 3x − 1.

- **f(g(x)):** First g: 3x − 1. Then f: (3x − 1)² = 9x² − 6x + 1.
- **g(f(x)):** First f: x². Then g: 3x² − 1.

These are completely different! Composition is **not** commutative.

## Playground — see both compositions

<div class="playground-block">
  <div class="playground-label">⚡ Interactive — compare f(g(x)) and g(f(x))</div>
  <p>f(x) = x² (blue), g(x) = x + a (drag <strong>a</strong> to shift). The pink curve is f(g(x)) = (x+a)², the green is g(f(x)) = x² + a. They are usually different!</p>
  <div id="calc-comp" style="width:100%;height:420px;border-radius:8px;overflow:hidden;"></div>
</div>

<div class="insight-box">
  <p><strong>When are they equal?</strong> f(g(x)) = g(f(x)) for all x is a special condition. It holds when f and g are inverses of each other (composing with your own inverse gives x back), or in a few special cases like both being linear with the same slope.</p>
</div>

## Domain of a composite function

The domain of f(g(x)) must satisfy:
1. x must be in the domain of g
2. g(x) must be in the domain of f

**Example:** f(x) = √x (needs x ≥ 0), g(x) = x − 4.

f(g(x)) = √(x − 4). For this to work, x − 4 ≥ 0, so **x ≥ 4**.

<div class="try-it">
  <h3>Practice</h3>
  <p>Given f(x) = 2x + 1 and g(x) = x², find (g ∘ f)(3).</p>
  <button class="reveal-btn">Show Answer</button>
  <div class="answer">
    <p>(g ∘ f)(3) = g(f(3))</p>
    <p>f(3) = 2(3) + 1 = 7</p>
    <p>g(7) = 7² = <strong>49</strong></p>
  </div>
</div>

<script src="https://www.desmos.com/api/v1.7/calculator.js?apiKey=dcb31709b452b1cf9dc26972add0fda6"></script>
<script>
(function() {
  var c = Desmos.GraphingCalculator(document.getElementById('calc-comp'), {
    keypad: false, settingsMenu: false, zoomButtons: true, expressionsCollapsed: true
  });
  c.setMathBounds({ left: -5, right: 5, bottom: -1, top: 15 });
  c.setExpressions([
    { id: 'a',   latex: 'a=2',  sliderBounds: { min: -4, max: 4, step: 0.5 } },
    { id: 'f',   latex: 'f(x)=x^{2}',    color: '#00C4FF', lineWidth: 2, lineStyle: Desmos.Styles.DASHED, label: 'f(x)=x²' },
    { id: 'fog', latex: 'y=(x+a)^{2}',   color: '#FF6B9D', lineWidth: 2.5, label: 'f(g(x))=(x+a)²' },
    { id: 'gof', latex: 'y=x^{2}+a',     color: '#22D3EE', lineWidth: 2.5, label: 'g(f(x))=x²+a' }
  ]);
})();
</script>
