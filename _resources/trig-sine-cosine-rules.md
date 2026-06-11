---
title: "The Sine and Cosine Rules"
subtitle: "SOHCAHTOA is only for right triangles. The sine and cosine rules work for any triangle."
topic: trigonometry
topic-color: "#22D3EE"
interactive: true
tags: [IGCSE, IB, A-Level, Trigonometry]
quiz:
  - q: "The sine rule states:"
    options: ["a/sinA = b/sinB = c/sinC", "a·sinA = b·sinB", "sin(A+B) = sinC", "a² = b² + c²"]
    answer: 0
  - q: "You should use the cosine rule when you have:"
    options: ["Two angles and one side", "All three angles", "Two sides and the included angle, or all three sides", "One side and one angle"]
    answer: 2
  - q: "In a triangle with a = 5, b = 7, C = 60°, what is c²?"
    options: ["25 + 49 − 35 = 39", "25 + 49 − 70cos(60°) = 39", "25 + 49 = 74", "5² + 7² + 2·5·7·cos(60°)"]
    answer: 1
  - q: "The area of a triangle with sides a, b and included angle C is:"
    options: ["ab/2", "(1/2)ab sinC", "abcosC", "ab sinC"]
    answer: 1
  - q: "The ambiguous case (two possible triangles) arises when using the:"
    options: ["Cosine rule", "Sine rule to find an angle", "Pythagoras' theorem", "Area formula"]
    answer: 1
---

Most triangles are not right-angled. The sine rule and cosine rule extend trigonometry to **all triangles** — and they appear in almost every IB and A-Level exam.

Label your triangle: sides a, b, c opposite to angles A, B, C respectively.

## The Sine Rule

**a/sinA = b/sinB = c/sinC**

Use when you have: **AAS** (two angles, one side) or **ASS** (two sides, the angle opposite one of them).

**Example:** In △ABC, A = 35°, B = 72°, a = 8. Find b.

b/sin72° = 8/sin35° → b = 8·sin72°/sin35° ≈ **13.3**

## The Cosine Rule

**c² = a² + b² − 2ab cosC**

Use when you have: **SAS** (two sides and included angle) or **SSS** (all three sides).

**Example:** a = 5, b = 8, C = 110°. Find c.

c² = 25 + 64 − 80cos(110°) = 89 + 27.36 ≈ 116.4 → c ≈ **10.8**

## Playground — explore any triangle

<div class="playground-block">
  <div class="playground-label">⚡ Interactive — drag the vertices of a triangle</div>
  <p>Drag <strong>a, b,</strong> and <strong>C</strong> to reshape the triangle. The blue value shows side c computed by the cosine rule. Verify it matches what you'd expect.</p>
  <div id="calc-tri" style="width:100%;height:440px;border-radius:8px;overflow:hidden;"></div>
</div>

<div class="insight-box">
  <p><strong>The ambiguous case:</strong> When using the sine rule to find an angle (SSA case), you might get two possible triangles (an acute and obtuse angle both fit). Always check both and discard any that make the angles add up to more than 180°.</p>
</div>

## Area of a triangle

**Area = (1/2) ab sinC**

where C is the angle between sides a and b. This is the formula for triangles where the height isn't given directly.

<div class="try-it">
  <h3>Practice</h3>
  <p>Find the area of a triangle with sides 6 cm and 9 cm and an included angle of 50°.</p>
  <button class="reveal-btn">Show Answer</button>
  <div class="answer">
    <p>Area = (1/2)(6)(9)sin(50°)</p>
    <p>= 27 × 0.766 ≈ <strong>20.7 cm²</strong></p>
  </div>
</div>

<script src="https://www.desmos.com/api/v1.7/calculator.js?apiKey=dcb31709b452b1cf9dc26972add0fda6"></script>
<script>
(function() {
  var c = Desmos.GraphingCalculator(document.getElementById('calc-tri'), {
    keypad: false, settingsMenu: false, zoomButtons: true, expressionsCollapsed: true
  });
  c.setMathBounds({ left: -1, right: 12, bottom: -1, top: 9 });
  c.setExpressions([
    { id: 'a',  latex: 'a=6',   sliderBounds: { min: 1, max: 10, step: 0.5 } },
    { id: 'b',  latex: 'b=8',   sliderBounds: { min: 1, max: 10, step: 0.5 } },
    { id: 'C',  latex: 'C=0.9', sliderBounds: { min: 0.1, max: 2.8, step: 0.05 } },
    { id: 'c2', latex: 'c_{2}=\\sqrt{a^{2}+b^{2}-2ab\\cos(C)}', hidden: true },
    { id: 'P1', latex: 'P_1=(0,0)', hidden: true },
    { id: 'P2', latex: 'P_2=(a,0)', hidden: true },
    { id: 'P3', latex: 'P_3=(b\\cos(C),b\\sin(C))', hidden: true },
    { id: 'tri', latex: 'polygon((0,0),(a,0),(b\\cos(C),b\\sin(C)))', color: '#22D3EE', lineWidth: 2, fillOpacity: 0.1 },
    { id: 'lab', latex: '(a/2,-0.5)', showLabel: true, color: '#22D3EE', label: 'a', hidden: true },
    { id: 'cv',  latex: 'c_{2}', showLabel: true, hidden: false, label: 'c = cosine rule result' }
  ]);
})();
</script>
