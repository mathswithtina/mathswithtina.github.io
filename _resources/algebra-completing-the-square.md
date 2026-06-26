---
title: "Completing the Square — rewriting quadratics"
title-ka: "სრული კვადრატი — კვადრატული გამოთქმის გარდაქმნა"
subtitle: "This one technique unlocks vertex form, the quadratic formula, and a lot of exam marks."
subtitle-ka: "ეს ერთი ტექნიკა ხსნის სახეობრივ ფორმას, კვადრატულ ფორმულას და მოაქვს ბევრი ქულა გამოცდებზე."
topic: algebra
topic-color: "#A78BFA"
interactive: true
tags: [IGCSE, IB, SAT, Algebra]
quiz:
  - q: "Completing the square on x² + 6x gives:"
    q_ka: "x² + 6x-ის სრული კვადრატია:"
    options: ["(x+3)² + 9", "(x+6)² − 36", "(x+3)² − 9", "(x+6)²"]
    options_ka: ["(x+3)² + 9", "(x+6)² − 36", "(x+3)² − 9", "(x+6)²"]
    answer: 2
  - q: "The vertex of y = (x − 2)² + 5 is at:"
    q_ka: "y = (x − 2)² + 5 პარაბოლის წვერია:"
    options: ["(2, 5)", "(−2, 5)", "(2, −5)", "(5, 2)"]
    options_ka: ["(2, 5)", "(−2, 5)", "(2, −5)", "(5, 2)"]
    answer: 0
  - q: "Complete the square: x² − 8x + 7"
    q_ka: "გამოიყვანეთ სრული კვადრატი: x² − 8x + 7"
    options: ["(x−4)² − 16", "(x−4)² − 9", "(x−4)² + 7", "(x−8)² − 57"]
    options_ka: ["(x−4)² − 16", "(x−4)² − 9", "(x−4)² + 7", "(x−8)² − 57"]
    answer: 1
  - q: "Which form shows the minimum of a parabola directly?"
    q_ka: "რომელი ფორმა პარაბოლის მინიმუმს პირდაპირ გვიჩვენებს?"
    options: ["Standard form ax² + bx + c", "Vertex form a(x−h)² + k", "Factored form a(x−r)(x−s)", "Expanded form"]
    options_ka: ["სტანდარტული ფორმა ax² + bx + c", "სახეობრივი ფორმა a(x−h)² + k", "ჩამოყალიბებული ფორმა a(x−r)(x−s)", "გაშლილი ფორმა"]
    answer: 1
  - q: "x² + 4x + 4 = (x + 2)². What is x² + 4x?"
    q_ka: "x² + 4x + 4 = (x + 2)². რა არის x² + 4x?"
    options: ["(x+2)² − 4", "(x+4)² − 4", "(x+2)² + 4", "(x+2)²"]
    options_ka: ["(x+2)² − 4", "(x+4)² − 4", "(x+2)² + 4", "(x+2)²"]
    answer: 0
---

<div class="lang-block lang-en">
<p>Completing the square turns the ugly form x² + bx + c into the elegant form (x + p)² + q. This reveals the <strong>vertex</strong> of the parabola immediately — and it's the technique behind the quadratic formula.</p>
<p>The trick: take half the coefficient of x, square it, add and subtract it.</p>
</div>

<div class="lang-block lang-ka">
<p>სრული კვადრატი გარდაქმნს x² + bx + c ფორმას ელეგანტურ (x + p)² + q ფორმად. ეს მყისიერად ავლენს პარაბოლის <strong>წვეროს</strong> — და ეს არის ის ტექნიკა, რომელიც კვადრატულ ფორმულას უდევს საფუძვლად.</p>
<p>ხერხი: x-ის კოეფიციენტი გაყავი 2-ზე, ამოკვადრატე, შემდეგ დაამატე და გამოაკელი.</p>
</div>

<div class="playground-block">
  <div class="playground-label" data-en="⚡ Interactive — drag b to see the vertex move" data-ka="⚡ ინტერაქტიული — გადაათრიე b, რომ ნახო წვეროს მოძრაობა">⚡ Interactive — drag b to see the vertex move</div>
  <p data-en="The purple curve is y = x² + bx. The orange point marks the vertex. Drag b and notice: the vertex is always at x = −b/2, which is exactly what completing the square reveals." data-ka="მეწამული მრუდია y = x² + bx. ნარინჯისფერი წერტილი წვეროს აღნიშნავს. გადაათრიე b და შეამჩნიე: წვერო ყოველთვის x = −b/2 წერტილშია, რასაც სრული კვადრატი ადასტურებს.">The purple curve is y = x² + bx. The orange point marks the vertex. Drag <strong>b</strong> and notice: the vertex is always at x = −b/2, which is exactly what completing the square reveals.</p>
  <div id="calc-sq" style="width:100%;height:420px;border-radius:8px;overflow:hidden;"></div>
</div>

<div class="lang-block lang-en">
<div class="insight-box">
  <p><strong>The half-and-square rule:</strong> x² + bx = (x + b/2)² − (b/2)². You add (b/2)² to create a perfect square, then subtract it to keep the equation balanced.</p>
</div>

<h2>Step-by-step example</h2>

<p><strong>Complete the square: x² − 6x + 2</strong></p>

<ol>
  <li>Look at the x coefficient: −6. Half of it: −3. Squared: 9.</li>
  <li>Rewrite: x² − 6x + 9 − 9 + 2</li>
  <li>Factor the square: <strong>(x − 3)² − 7</strong></li>
</ol>

<p>Vertex is at (3, −7). The minimum value of the function is −7.</p>

<p><strong>Solve x² − 6x + 2 = 0 using this result:</strong></p>

<p>(x − 3)² = 7 → x − 3 = ±√7 → x = 3 ± √7</p>

<div class="try-it">
  <h3>Practice</h3>
  <p>Complete the square for x² + 10x − 3. State the vertex.</p>
  <button class="reveal-btn">Show Answer</button>
  <div class="answer">
    <p>Half of 10 = 5. 5² = 25.</p>
    <p>x² + 10x − 3 = (x + 5)² − 25 − 3 = <strong>(x + 5)² − 28</strong></p>
    <p>Vertex: (−5, −28)</p>
  </div>
</div>
</div>

<div class="lang-block lang-ka">
<div class="insight-box">
  <p><strong>განახევრება-ამოკვადრატების წესი:</strong> x² + bx = (x + b/2)² − (b/2)². ამატებ (b/2)²-ს სრული კვადრატის შესაქმნელად, შემდეგ გამოაკლებ, რომ ტოლობა დაბალანსებული დარჩეს.</p>
</div>

<h2>ნაბიჯ-ნაბიჯ მაგალითი</h2>

<p><strong>გამოიყვანე სრული კვადრატი: x² − 6x + 2</strong></p>

<ol>
  <li>x-ის კოეფიციენტი: −6. მისი ნახევარი: −3. კვადრატი: 9.</li>
  <li>გარდაქმნა: x² − 6x + 9 − 9 + 2</li>
  <li>კვადრატის ჩამოყალიბება: <strong>(x − 3)² − 7</strong></li>
</ol>

<p>წვერო არის (3, −7). ფუნქციის მინიმალური მნიშვნელობა −7-ია.</p>

<p><strong>ამოხსენი x² − 6x + 2 = 0 ამ შედეგის გამოყენებით:</strong></p>

<p>(x − 3)² = 7 → x − 3 = ±√7 → x = 3 ± √7</p>

<div class="try-it">
  <h3>სავარჯიშო</h3>
  <p>გამოიყვანე სრული კვადრატი x² + 10x − 3-სთვის. დაასახელე წვერო.</p>
  <button class="reveal-btn">პასუხის ჩვენება</button>
  <div class="answer">
    <p>10-ის ნახევარი = 5. 5² = 25.</p>
    <p>x² + 10x − 3 = (x + 5)² − 25 − 3 = <strong>(x + 5)² − 28</strong></p>
    <p>წვერო: (−5, −28)</p>
  </div>
</div>
</div>

<script src="https://www.desmos.com/api/v1.7/calculator.js?apiKey=dcb31709b452b1cf9dc26972add0fda6"></script>
<script>
(function() {
  var c = Desmos.GraphingCalculator(document.getElementById('calc-sq'), {
    keypad: false, settingsMenu: false, zoomButtons: true, expressionsCollapsed: true
  });
  c.setMathBounds({ left: -6, right: 6, bottom: -8, top: 8 });
  c.setExpressions([
    { id: 'b',  latex: 'b=4',  sliderBounds: { min: -6, max: 6, step: 0.5 } },
    { id: 'f',  latex: 'f(x)=x^{2}+bx', color: '#A78BFA', lineWidth: 2.5 },
    { id: 'xv', latex: 'x_{v}=-b/2', hidden: true },
    { id: 'pt', latex: '(x_{v}, f(x_{v}))', color: '#FFB347', pointSize: 13,
                showLabel: true, label: 'vertex (−b/2, −b²/4)', labelSize: Desmos.LabelSizes.SMALL }
  ]);
})();
</script>
