---
title: "Circle Theorems — angles that are never what they look like"
subtitle: "Eight theorems. Once you know them, every circle angle question in IGCSE becomes straightforward."
topic: geometry
topic-color: "#FB923C"
interactive: true
tags: [IGCSE, IB, Geometry]
quiz:
  - q: "The angle at the centre is ___ the angle at the circumference subtended by the same arc."
    options: ["Equal to", "Half", "Twice", "Three times"]
    answer: 2
  - q: "Angles in a semicircle (angle in a semi-circle theorem) are always:"
    options: ["45°", "60°", "90°", "180°"]
    answer: 2
  - q: "Opposite angles in a cyclic quadrilateral sum to:"
    options: ["90°", "180°", "270°", "360°"]
    answer: 1
  - q: "Two tangents from an external point are:"
    options: ["Perpendicular to each other", "Equal in length", "Parallel", "Unequal in length"]
    answer: 1
  - q: "The angle between a tangent and a chord equals:"
    options: ["The radius angle", "The angle in the alternate segment", "90°", "Half the arc"]
    answer: 1
---

Circle theorems are relationships between angles formed by chords, tangents, and arcs. They look complex until you know the patterns — then every exam question becomes a matter of matching the diagram to the right rule.

## The eight theorems

1. **Central angle theorem:** Angle at centre = 2 × angle at circumference (same arc)
2. **Angles in semicircle:** Angle in a semicircle = 90°
3. **Angles in same segment:** Angles subtended by the same arc at the circumference are equal
4. **Cyclic quadrilateral:** Opposite angles sum to 180°
5. **Tangent-radius:** Tangent is perpendicular to radius at point of contact
6. **Two tangents:** Tangents from same external point are equal
7. **Alternate segment theorem:** Angle between tangent and chord = angle in alternate segment
8. **Perpendicular from centre:** Perpendicular from centre bisects the chord

## Playground — see the central angle theorem

<div class="playground-block">
  <div class="playground-label">⚡ Interactive — drag points and see the angle relationship</div>
  <p>Points A and B are on the circle. Drag <strong>angle θ</strong> to change their positions. P is a point on the major arc. The angle at the centre (orange) is always exactly twice the angle at P (pink). Drag to verify.</p>
  <div id="calc-circle" style="width:100%;height:450px;border-radius:8px;overflow:hidden;"></div>
</div>

<div class="insight-box">
  <p><strong>The most useful theorem:</strong> The alternate segment theorem is the hardest to visualise but appears constantly. When a tangent touches the circle at T, and you draw a chord TA, the angle between the tangent and TA equals the angle subtended by arc TA in the opposite (alternate) segment.</p>
</div>

## How to attack circle theorem problems

1. Mark all given angles on the diagram
2. Identify what theorem applies (look for: same arc, cyclic quad, tangent, semicircle)
3. Write the equation linking angles
4. Solve

Always state which theorem you're using — examiners award marks for justification.

<div class="try-it">
  <h3>Practice</h3>
  <p>O is the centre of a circle. A, B, C are points on the circle. Angle AOB = 110°. Find angle ACB.</p>
  <button class="reveal-btn">Show Answer</button>
  <div class="answer">
    <p>By the central angle theorem: angle at centre = 2 × angle at circumference.</p>
    <p>So angle ACB = 110°/2 = <strong>55°</strong></p>
  </div>
</div>

<script src="https://www.desmos.com/api/v1.7/calculator.js?apiKey=dcb31709b452b1cf9dc26972add0fda6"></script>
<script>
(function() {
  var c = Desmos.GraphingCalculator(document.getElementById('calc-circle'), {
    keypad: false, settingsMenu: false, zoomButtons: true, expressionsCollapsed: true
  });
  c.setMathBounds({ left: -2, right: 2, bottom: -2, top: 2 });
  c.setExpressions([
    { id: 'circ', latex: 'x^{2}+y^{2}=1', color: '#FB923C', lineWidth: 2 },
    { id: 'a',    latex: 'a=0.5', sliderBounds: { min: 0.1, max: 3.0, step: 0.05 } },
    { id: 'Ax',   latex: 'A_x=\\cos(a)', hidden: true },
    { id: 'Ay',   latex: 'A_y=\\sin(a)', hidden: true },
    { id: 'b',    latex: 'b=2.0', sliderBounds: { min: 1.0, max: 5.5, step: 0.05 } },
    { id: 'Bx',   latex: 'B_x=\\cos(b)', hidden: true },
    { id: 'By',   latex: 'B_y=\\sin(b)', hidden: true },
    { id: 'Px',   latex: 'P_x=\\cos(4.0)', hidden: true },
    { id: 'Py',   latex: 'P_y=\\sin(4.0)', hidden: true },
    { id: 'ptA',  latex: '(A_x, A_y)', color: '#FF6B9D', pointSize: 12, showLabel: true, label: 'A' },
    { id: 'ptB',  latex: '(B_x, B_y)', color: '#FF6B9D', pointSize: 12, showLabel: true, label: 'B' },
    { id: 'ptO',  latex: '(0, 0)', color: '#FFD700', pointSize: 12, showLabel: true, label: 'O (centre)' },
    { id: 'ptP',  latex: '(P_x, P_y)', color: '#A78BFA', pointSize: 12, showLabel: true, label: 'P' },
    { id: 'OA',   latex: '(tA_x, tA_y)', color: '#FFD700', lineWidth: 1.5, parametricDomain: { min: 0, max: 1 } },
    { id: 'OB',   latex: '(tB_x, tB_y)', color: '#FFD700', lineWidth: 1.5, parametricDomain: { min: 0, max: 1 } }
  ]);
})();
</script>
