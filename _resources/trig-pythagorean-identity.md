---
title: "sin²θ + cos²θ = 1 — the Pythagorean Identity"
title-ka: "sin²θ + cos²θ = 1 — პითაგორას იდენტობა"
subtitle: "The most useful identity in trigonometry, with two bonus identities that follow from it immediately."
subtitle-ka: "ტრიგონომეტრიის ყველაზე სასარგებლო იდენტობა, რასაც ორი დამატებითი იდენტობა მოჰყვება."
topic: trigonometry
topic-color: "#22D3EE"
interactive: true
tags: [IGCSE, IB, A-Level, Trigonometry]
quiz:
  - q: "sin²θ + cos²θ equals:"
    q_ka: "sin²θ + cos²θ ტოლია:"
    options: ["0", "1", "2", "sin(2θ)"]
    options_ka: ["0", "1", "2", "sin(2θ)"]
    answer: 1
  - q: "If sinθ = 3/5, what is cosθ (in the first quadrant)?"
    q_ka: "თუ sinθ = 3/5, რა არის cosθ (პირველ კვადრანტში)?"
    options: ["4/5", "3/4", "5/4", "1/5"]
    options_ka: ["4/5", "3/4", "5/4", "1/5"]
    answer: 0
  - q: "Which identity follows from dividing sin²θ + cos²θ = 1 by cos²θ?"
    q_ka: "რომელი იდენტობა მიიღება sin²θ + cos²θ = 1-ის cos²θ-ზე გაყოფით?"
    options: ["sin²θ + 1 = sec²θ", "tan²θ + 1 = sec²θ", "1 + tan²θ = cosec²θ", "sin²θ = 1 − cos²θ"]
    options_ka: ["sin²θ + 1 = sec²θ", "tan²θ + 1 = sec²θ", "1 + tan²θ = cosec²θ", "sin²θ = 1 − cos²θ"]
    answer: 1
  - q: "Simplify: 1 − sin²θ"
    q_ka: "გაამარტივე: 1 − sin²θ"
    options: ["cos²θ", "tan²θ", "sin²θ", "−cos²θ"]
    options_ka: ["cos²θ", "tan²θ", "sin²θ", "−cos²θ"]
    answer: 0
  - q: "If tanθ = 2, what is sec²θ?"
    q_ka: "თუ tanθ = 2, რა არის sec²θ?"
    options: ["4", "5", "3", "√5"]
    options_ka: ["4", "5", "3", "√5"]
    answer: 1
---

<div class="lang-block lang-en">
<p>The Pythagorean Identity is the most important trigonometric identity. It comes directly from Pythagoras' theorem applied to the unit circle — and every other trig identity is either derived from it or uses it.</p>

<h2>Where it comes from</h2>
<p>A point on the unit circle has coordinates (cos θ, sin θ). The radius is 1. By Pythagoras:</p>
<p><strong>(cos θ)² + (sin θ)² = 1²</strong></p>
<p>That's it. This holds for <strong>every</strong> angle, not just acute ones.</p>

<h2>Two bonus identities</h2>
<p>Divide both sides by cos²θ:<br>
<strong>tan²θ + 1 = sec²θ</strong></p>
<p>Divide both sides by sin²θ:<br>
<strong>1 + cot²θ = cosec²θ</strong></p>
<p>Memorise all three. They appear constantly in integration and simplification.</p>
</div>

<div class="lang-block lang-ka">
<p>პითაგორას იდენტობა ტრიგონომეტრიის ყველაზე მნიშვნელოვანი იდენტობაა. იგი პირდაპირ გამოდის პითაგორას თეორემიდან, ერთეულის წრეწირზე გამოყენებული — და ყველა სხვა ტრიგ-იდენტობა მისგანაა მიღებული ან მას იყენებს.</p>

<h2>საიდან მოდის</h2>
<p>ერთეულის წრეწირზე წერტილს აქვს კოორდინატები (cos θ, sin θ). რადიუსი 1-ია. პითაგორას თეორემით:</p>
<p><strong>(cos θ)² + (sin θ)² = 1²</strong></p>
<p>სულ ეს არის. ეს ძალაშია <strong>ყველა</strong> კუთხისთვის, მხოლოდ ბლაგვებისთვის კი არა.</p>

<h2>ორი დამატებითი იდენტობა</h2>
<p>გავყოთ ორივე მხარე cos²θ-ზე:<br>
<strong>tan²θ + 1 = sec²θ</strong></p>
<p>გავყოთ ორივე მხარე sin²θ-ზე:<br>
<strong>1 + cot²θ = cosec²θ</strong></p>
<p>დაიმახსოვრე სამივე. ისინი ინტეგრირებასა და გამარტივებაში მუდმივად გვხვდება.</p>
</div>

<div class="playground-block">
  <div class="playground-label" data-en="⚡ Interactive — see sin² + cos² = 1 visually" data-ka="⚡ ინტერაქტიული — იხილე sin² + cos² = 1 ვიზუალურად">⚡ Interactive — see sin² + cos² = 1 visually</div>
  <p data-en="Drag θ. The horizontal projection is cos θ (pink), the vertical projection is sin θ (purple). The squares of their lengths — sin² + cos² — always sum to 1 (= the radius squared)." data-ka="გადაათრიე θ. ჰორიზონტალური პროექცია არის cos θ (ვარდისფერი), ვერტიკალური — sin θ (იისფერი). მათი სიგრძეების კვადრატები — sin² + cos² — ყოველთვის 1-ს ტოლია (= რადიუსის კვადრატი).">Drag <strong>θ</strong>. The horizontal projection is cos θ (pink), the vertical projection is sin θ (purple). The squares of their lengths — sin² + cos² — always sum to 1 (= the radius squared).</p>
  <div id="calc-pyth" style="width:100%;height:430px;border-radius:8px;overflow:hidden;"></div>
</div>

<div class="lang-block lang-en">
<div class="insight-box">
  <p><strong>Exam technique:</strong> Whenever you see sin²θ or cos²θ in an equation, think "can I use sin²θ = 1 − cos²θ or cos²θ = 1 − sin²θ?" This substitution often reduces a messy equation to a quadratic in one trig function.</p>
</div>

<h2>Using the identity to solve problems</h2>
<p><strong>Example:</strong> Given cosθ = −5/13 and π &lt; θ &lt; 3π/2, find sinθ.</p>
<p>sin²θ = 1 − cos²θ = 1 − 25/169 = 144/169</p>
<p>sinθ = ±12/13. Since θ is in the 3rd quadrant (both sin and cos are negative): <strong>sinθ = −12/13</strong>.</p>

<div class="try-it">
  <h3>Practice</h3>
  <p>Prove that (1 − sin²θ)/cos θ = cos θ.</p>
  <button class="reveal-btn">Show Answer</button>
  <div class="answer">
    <p>From the identity: 1 − sin²θ = cos²θ.</p>
    <p>So (1 − sin²θ)/cosθ = cos²θ/cosθ = <strong>cosθ</strong> ✓</p>
  </div>
</div>
</div>

<div class="lang-block lang-ka">
<div class="insight-box">
  <p><strong>გამოცდის ტექნიკა:</strong> როდესაც განტოლებაში sin²θ ან cos²θ გამოჩნდება, იფიქრე: „შემიძლია გამოვიყენო sin²θ = 1 − cos²θ ან cos²θ = 1 − sin²θ?" ეს ჩანაცვლება ხშირად ერთ ტრიგ-ფუნქციაში კვადრატულ განტოლებამდე ამარტივებს.</p>
</div>

<h2>იდენტობის გამოყენება ამოცანების ასახსნელად</h2>
<p><strong>მაგალითი:</strong> მოცემულია cosθ = −5/13 და π &lt; θ &lt; 3π/2. იპოვე sinθ.</p>
<p>sin²θ = 1 − cos²θ = 1 − 25/169 = 144/169</p>
<p>sinθ = ±12/13. ვინაიდან θ მე-3 კვადრანტშია (სინუსიც და კოსინუსიც უარყოფითია): <strong>sinθ = −12/13</strong>.</p>

<div class="try-it">
  <h3>სავარჯიშო</h3>
  <p>დაამტკიცე, რომ (1 − sin²θ)/cos θ = cos θ.</p>
  <button class="reveal-btn">პასუხის ჩვენება</button>
  <div class="answer">
    <p>იდენტობიდან: 1 − sin²θ = cos²θ.</p>
    <p>ამდენად (1 − sin²θ)/cosθ = cos²θ/cosθ = <strong>cosθ</strong> ✓</p>
  </div>
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
