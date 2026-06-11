---
title: "What does a limit actually mean?"
subtitle: "Zoom in close enough and the mystery disappears."
topic: calculus
topic-color: "#FF6B9D"
interactive: true
tags: [IB, A-Level, Edexcel, Calculus]
quiz:
  - q: "What does lim(x→2) of x² equal?"
    options: ["2", "4", "8", "undefined"]
    answer: 1
  - q: "A function has a limit at x=3 even if it is not defined there. True or false?"
    options: ["True", "False", "Only if the function is continuous", "Only for polynomials"]
    answer: 0
  - q: "What is lim(x→0) of sin(x)/x?"
    options: ["0", "infinity", "1", "undefined"]
    answer: 2
  - q: "If lim(x→a) f(x) = L, what does this mean?"
    options: ["f(a) = L", "f approaches L as x approaches a", "f is defined at a", "f equals L everywhere"]
    answer: 1
  - q: "Which of these is the formal name for the process that defines derivatives?"
    options: ["Integration", "Substitution", "Taking a limit", "Factoring"]
    answer: 2
---

A limit answers a deceptively simple question: **what value does a function approach as you get closer and closer to a point?** Not the value at the point — the value it's heading toward.

This distinction matters enormously. A function can approach a perfectly clear value at x = 2 even if it has a hole exactly at x = 2. The limit doesn't care about the destination — only the journey.

## Playground — zoom in and watch the gap close

The function below has a hole at x = 2 (it's undefined there). But watch what happens as you drag **x** toward 2 from either side. The function value gets closer and closer to a specific number.

<div class="playground-block">
  <div class="playground-label">⚡ Interactive — drag x toward 2</div>
  <p>Watch the y-value approach a limit even though the function is undefined at x = 2.</p>
  <div id="calc-limit" style="width:100%;height:400px;border-radius:8px;overflow:hidden;"></div>
</div>

<div class="insight-box">
  <p><strong>What you observed:</strong> As x → 2, f(x) → 4. We write this as lim(x→2) f(x) = 4. The hole at x = 2 is irrelevant to the limit — the limit is about the approach, not the arrival.</p>
</div>

## Left and right limits

A limit only exists if the function approaches the same value from both sides. Drag x toward 2 from the left (x < 2) and from the right (x > 2). If they meet at the same height — the limit exists.

## Why limits matter

Every derivative is secretly a limit. When we write f′(x) = 2x for f(x) = x², we're really saying: the limit of (f(x+h) − f(x))/h as h → 0 equals 2x. The derivative *is* a limit. Understanding limits is understanding the foundation of all of calculus.

<div class="try-it">
  <h3>Practice</h3>
  <p>Evaluate: lim(x→3) of (x² − 9)/(x − 3)</p>
  <p><em>Hint: factor the numerator first.</em></p>
  <button class="reveal-btn">Show Answer</button>
  <div class="answer">
    <p>x² − 9 = (x − 3)(x + 3), so the fraction becomes (x + 3). At x → 3: <strong>limit = 6</strong>.</p>
    <p>The original function is undefined at x = 3 (division by zero), but the limit is perfectly well-defined.</p>
  </div>
</div>

<script src="https://www.desmos.com/api/v1.7/calculator.js?apiKey=dcb31709b452b1cf9dc26972add0fda6"></script>
<script>
(function() {
  var c = Desmos.GraphingCalculator(document.getElementById('calc-limit'), {
    keypad: false, settingsMenu: false, zoomButtons: true
  });
  c.setMathBounds({ left: -1, right: 5, bottom: -1, top: 8 });
  c.setExpressions([
    { id: 'f',    latex: 'f(x)=\\frac{x^{2}-4}{x-2}',   color: '#A78BFA', lineWidth: 2.5 },
    { id: 'hole', latex: '(2,4)',                          color: '#1a1a2e', pointStyle: Desmos.Styles.OPEN, pointSize: 12 },
    { id: 'a',    latex: 'a=0.5',                          sliderBounds: { min: -0.5, max: 1.9, step: 0.05 } },
    { id: 'pt',   latex: '(a+2, f(a+2))',                  color: '#FF6B9D', pointSize: 10, showLabel: true, label: 'x approaching 2' }
  ]);
})();
</script>
