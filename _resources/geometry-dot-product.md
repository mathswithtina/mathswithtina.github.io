---
title: "The Dot Product — when vectors meet at an angle"
subtitle: "a · b is a single number that encodes the angle between two vectors. It's how you test perpendicularity."
topic: geometry
topic-color: "#FB923C"
interactive: true
tags: [IB, A-Level, Geometry]
quiz:
  - q: "The dot product of (1, 0) and (0, 1) is:"
    options: ["1", "0", "−1", "√2"]
    answer: 1
  - q: "Two vectors are perpendicular when their dot product is:"
    options: ["1", "−1", "0", "Equal to the product of magnitudes"]
    answer: 2
  - q: "The formula for the dot product (2, 3) · (4, −1) is:"
    options: ["2×3 + 4×(−1)", "2×4 + 3×(−1)", "2+4 and 3+(−1)", "2×4 − 3×1"]
    answer: 1
  - q: "The angle θ between two vectors satisfies cosθ = ?"
    options: ["a·b", "(a·b)/(|a||b|)", "|a||b|", "a·b + |a||b|"]
    answer: 1
  - q: "If a·b < 0, the angle between the vectors is:"
    options: ["Acute (less than 90°)", "Exactly 90°", "Obtuse (greater than 90°)", "180°"]
    answer: 2
---

The dot product combines two vectors and produces a single number. Unlike vector addition (which gives a vector), the dot product gives a **scalar** — and that scalar tells you something deep about the angle between the vectors.

## The formula

**a · b = a₁b₁ + a₂b₂** (in 2D)

**a · b = a₁b₁ + a₂b₂ + a₃b₃** (in 3D)

Also: **a · b = |a| |b| cos θ**

These two forms are equal — and the equality lets you find angles.

## Finding the angle between vectors

From the second formula: **cos θ = (a · b) / (|a| |b|)**

**Example:** Find the angle between **a** = (3, 1) and **b** = (1, 4).

a · b = 3(1) + 1(4) = 7

|a| = √10, |b| = √17

cos θ = 7 / (√10 · √17) = 7/√170 ≈ 0.537

θ = cos⁻¹(0.537) ≈ **57.5°**

## Perpendicularity test

If **a · b = 0**, the vectors are **perpendicular**. This is the fastest way to check or prove perpendicularity.

**Example:** Prove (3, −4) and (4, 3) are perpendicular.

(3)(4) + (−4)(3) = 12 − 12 = **0** ✓

## Playground — rotate vectors and see the dot product

<div class="playground-block">
  <div class="playground-label">⚡ Interactive — drag the angle and watch the dot product change</div>
  <p>Vector <strong>a</strong> is fixed (orange). Drag <strong>θ</strong> to rotate vector <strong>b</strong>. Watch the dot product: it's positive when θ &lt; 90°, zero at 90°, negative when θ &gt; 90°.</p>
  <div id="calc-dot" style="width:100%;height:440px;border-radius:8px;overflow:hidden;"></div>
</div>

<div class="insight-box">
  <p><strong>Projection:</strong> The dot product a · b = |a||b|cosθ = |a| × (component of b in direction of a). It measures how much one vector "goes in the direction" of the other. When they're perpendicular, no component of b lies along a — dot product is zero.</p>
</div>

<div class="try-it">
  <h3>Practice</h3>
  <p>Vectors OA = (2, 1, −3) and OB = (1, 4, k). Find k if OA ⊥ OB.</p>
  <button class="reveal-btn">Show Answer</button>
  <div class="answer">
    <p>OA · OB = 0 for perpendicularity.</p>
    <p>2(1) + 1(4) + (−3)(k) = 0</p>
    <p>2 + 4 − 3k = 0 → 3k = 6 → <strong>k = 2</strong></p>
  </div>
</div>

<script src="https://www.desmos.com/api/v1.7/calculator.js?apiKey=dcb31709b452b1cf9dc26972add0fda6"></script>
<script>
(function() {
  var c = Desmos.GraphingCalculator(document.getElementById('calc-dot'), {
    keypad: false, settingsMenu: false, zoomButtons: true, expressionsCollapsed: true
  });
  c.setMathBounds({ left: -2.5, right: 2.5, bottom: -2.5, top: 2.5 });
  c.setExpressions([
    { id: 'th', latex: '\\theta=0.5', sliderBounds: { min: 0, max: 6.28, step: 0.05 } },
    { id: 'a1', latex: 'a_x=1.5', hidden: true },
    { id: 'a2', latex: 'a_y=0.5', hidden: true },
    { id: 'b1', latex: 'b_x=\\cos(\\theta)', hidden: true },
    { id: 'b2', latex: 'b_y=\\sin(\\theta)', hidden: true },
    { id: 'dp', latex: 'D=a_x b_x+a_y b_y', label: 'dot product' },
    { id: 'va', latex: '(ta_x,ta_y)', color: '#FB923C', lineWidth: 3, parametricDomain: { min: 0, max: 1 }, label: 'a' },
    { id: 'vb', latex: '(tb_x,tb_y)', color: '#22D3EE', lineWidth: 3, parametricDomain: { min: 0, max: 1 }, label: 'b' }
  ]);
})();
</script>
