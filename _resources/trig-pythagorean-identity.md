---
title: "sin²θ + cos²θ = 1 — the Pythagorean Identity"
subtitle: "The most useful identity in trigonometry, with two bonus identities that follow from it immediately."
topic: trigonometry
topic-color: "#22D3EE"
interactive: true
tags: [IGCSE, IB, A-Level, Trigonometry]
quiz:
  - q: "sin²θ + cos²θ equals:"
    options: ["0", "1", "2", "sin(2θ)"]
    answer: 1
  - q: "If sinθ = 3/5, what is cosθ (in the first quadrant)?"
    options: ["4/5", "3/4", "5/4", "1/5"]
    answer: 0
  - q: "Which identity follows from dividing sin²θ + cos²θ = 1 by cos²θ?"
    options: ["sin²θ + 1 = sec²θ", "tan²θ + 1 = sec²θ", "1 + tan²θ = cosec²θ", "sin²θ = 1 − cos²θ"]
    answer: 1
  - q: "Simplify: 1 − sin²θ"
    options: ["cos²θ", "tan²θ", "sin²θ", "−cos²θ"]
    answer: 0
  - q: "If tanθ = 2, what is sec²θ?"
    options: ["4", "5", "3", "√5"]
    answer: 1
---

The Pythagorean Identity is the most important trigonometric identity. It comes directly from Pythagoras' theorem applied to the unit circle — and every other trig identity is either derived from it or uses it.

## Where it comes from

A point on the unit circle has coordinates (cos θ, sin θ). The radius is 1. By Pythagoras:

**(cos θ)² + (sin θ)² = 1²**

That's it. This holds for **every** angle, not just acute ones.

## Two bonus identities

Divide both sides by cos²θ:
**tan²θ + 1 = sec²θ**

Divide both sides by sin²θ:
**1 + cot²θ = cosec²θ**

Memorise all three. They appear constantly in integration and simplification.

## Playground — see it on the unit circle

<div class="playground-block">
  <div class="playground-label">⚡ Interactive — see sin² + cos² = 1 visually</div>
  <p>Drag <strong>θ</strong>. The horizontal projection is cos θ (pink), the vertical projection is sin θ (purple). The squares of their lengths — sin² + cos² — always sum to 1 (= the radius squared).</p>
  <div id="calc-pyth" style="width:100%;height:430px;border-radius:8px;overflow:hidden;"></div>
</div>

<div class="insight-box">
  <p><strong>Exam technique:</strong> Whenever you see sin²θ or cos²θ in an equation, think "can I use sin²θ = 1 − cos²θ or cos²θ = 1 − sin²θ?" This substitution often reduces a messy equation to a quadratic in one trig function.</p>
</div>

## Using the identity to solve problems

**Example:** Given cosθ = −5/13 and π < θ < 3π/2, find sinθ.

sin²θ = 1 − cos²θ = 1 − 25/169 = 144/169

sinθ = ±12/13. Since θ is in the 3rd quadrant (both sin and cos are negative): **sinθ = −12/13**.

<div class="try-it">
  <h3>Practice</h3>
  <p>Prove that (1 − sin²θ)/cos θ = cos θ.</p>
  <button class="reveal-btn">Show Answer</button>
  <div class="answer">
    <p>From the identity: 1 − sin²θ = cos²θ.</p>
    <p>So (1 − sin²θ)/cosθ = cos²θ/cosθ = <strong>cosθ</strong> ✓</p>
  </div>
</div>

<script src="https://www.desmos.com/api/v1.7/calculator.js?apiKey=dcb31709b452b1cf9dc26972add0fda6"></script>
<script>
(function() {
  var c = Desmos.GraphingCalculator(document.getElementById('calc-pyth'), {
    keypad: false, settingsMenu: false, zoomButtons: true, expressionsCollapsed: true
  });
  c.setMathBounds({ left: -1.6, right: 1.8, bottom: -1.4, top: 1.6 });
  c.setExpressions([
    { id: 'circ', latex: 'x^{2}+y^{2}=1', color: '#22D3EE', lineWidth: 2 },
    { id: 'th',   latex: '\\theta=0.9', sliderBounds: { min: 0, max: 6.28, step: 0.02 } },
    { id: 'px',   latex: 'c=\\cos(\\theta)', hidden: true },
    { id: 'py',   latex: 's=\\sin(\\theta)', hidden: true },
    { id: 'pt',   latex: '(c, s)', color: '#FFD700', pointSize: 13, showLabel: true, label: '(c,s)' },
    { id: 'cos',  latex: 'y=0\\left\\{0\\le x\\le c\\right\\}', color: '#FF6B9D', lineWidth: 3 },
    { id: 'sin',  latex: 'x=c\\left\\{0\\le y\\le s\\right\\}', color: '#A78BFA', lineWidth: 3 },
    { id: 'clab', latex: '(c/2, -0.12)', color: '#FF6B9D', showLabel: true, label: 'cosθ' },
    { id: 'slab', latex: '(c+0.1, s/2)', color: '#A78BFA', showLabel: true, label: 'sinθ' }
  ]);
})();
</script>
