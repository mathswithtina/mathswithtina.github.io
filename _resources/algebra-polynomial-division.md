---
title: "Polynomial Long Division — and the Factor Theorem"
title-ka: "პოლინომის გრძელი გაყოფა — და ნამეტის თეორემა"
subtitle: "Dividing polynomials is just like long division with numbers. The Factor Theorem makes it faster."
subtitle-ka: "პოლინომის გაყოფა ისეთივეა, როგორც რიცხვების გრძელი გაყოფა. ნამეტის თეორემა უფრო სწრაფს ხდის."
topic: algebra
topic-color: "#A78BFA"
interactive: true
tags: [IB, A-Level, Algebra]
quiz:
  - q: "By the Factor Theorem, (x − a) is a factor of f(x) if:"
    q_ka: "ნამეტის თეორემის მიხედვით, (x − a) არის f(x)-ის გამყოფი, თუ:"
    options: ["f'(a) = 0", "f(a) = 0", "f(0) = a", "f(a) = 1"]
    options_ka: ["f'(a) = 0", "f(a) = 0", "f(0) = a", "f(a) = 1"]
    answer: 1
  - q: "Divide x² + 5x + 6 by (x + 2). The result is:"
    q_ka: "გაყავი x² + 5x + 6 (x + 2)-ზე. შედეგია:"
    options: ["x + 4", "x + 3", "x + 2", "x + 6"]
    options_ka: ["x + 4", "x + 3", "x + 2", "x + 6"]
    answer: 1
  - q: "If f(x) = x³ − x² − 4x + 4 and f(1) = 0, then (x − 1) is:"
    q_ka: "თუ f(x) = x³ − x² − 4x + 4 და f(1) = 0, მაშინ (x − 1) არის:"
    options: ["A root only", "A factor", "A quotient", "The remainder"]
    options_ka: ["მხოლოდ ფესვი", "გამყოფი", "განაყოფი", "ნაშთი"]
    answer: 1
  - q: "The Remainder Theorem says: when f(x) is divided by (x − a), the remainder is:"
    q_ka: "ნაშთის თეორემა ამბობს: როდესაც f(x) იყოფა (x − a)-ზე, ნაშთია:"
    options: ["f'(a)", "f(a)", "a", "0"]
    options_ka: ["f'(a)", "f(a)", "a", "0"]
    answer: 1
  - q: "When dividing (x³ + 2x − 3) by (x − 1), what is the remainder?"
    q_ka: "(x³ + 2x − 3)-ის (x − 1)-ზე გაყოფისას, ნაშთია:"
    options: ["0", "1", "2", "3"]
    options_ka: ["0", "1", "2", "3"]
    answer: 0
---

<div class="lang-block lang-en">
<p>When you divide a polynomial by a linear factor, you're splitting it into a quotient and a remainder. If the remainder is zero, you've found a <strong>factor</strong> — and with the Factor Theorem, you can check this in seconds by substituting.</p>

<h2>The Remainder Theorem and Factor Theorem</h2>

<ul>
  <li><strong>Remainder Theorem:</strong> When f(x) is divided by (x − a), the remainder = f(a).</li>
  <li><strong>Factor Theorem:</strong> (x − a) is a factor of f(x) ⟺ f(a) = 0.</li>
</ul>

<p>This means: to test if (x − 3) divides x³ − 27, just compute f(3) = 27 − 27 = 0. Yes, it's a factor.</p>
</div>

<div class="lang-block lang-ka">
<p>როდესაც პოლინომს წრფივ გამყოფზე ყოფ, იღებ განაყოფს და ნაშთს. თუ ნაშთი ნულია, იპოვე <strong>გამყოფი</strong> — და ნამეტის თეორემის გამოყენებით შეგიძლია ამის შემოწმება წამებში, ჩასმით.</p>

<h2>ნაშთის და ნამეტის თეორემები</h2>

<ul>
  <li><strong>ნაშთის თეორემა:</strong> როდესაც f(x) იყოფა (x − a)-ზე, ნაშთი = f(a).</li>
  <li><strong>ნამეტის თეორემა:</strong> (x − a) არის f(x)-ის გამყოფი ⟺ f(a) = 0.</li>
</ul>

<p>ეს ნიშნავს: იმის შესამოწმებლად, ყოფს თუ არა (x − 3) x³ − 27-ს, გამოთვალე f(3) = 27 − 27 = 0. დიახ, ეს გამყოფია.</p>
</div>

<div class="playground-block">
  <div class="playground-label" data-en="⚡ Interactive — find where the polynomial touches zero" data-ka="⚡ ინტერაქტიული — იპოვე სად ეხება პოლინომი ნულს">⚡ Interactive — find where the polynomial touches zero</div>
  <p data-en="The polynomial f(x) = x³ + ax² + bx + c. Drag the sliders to reshape it. The x-intercepts are the roots — each is a factor (x − root). When you spot one, plug it in to verify f(root) = 0." data-ka="პოლინომი f(x) = x³ + ax² + bx + c. გადაათრიე სლაიდერები ფორმის შესაცვლელად. x-ღერძის გადაკვეთები ფესვებია — თითოეული გამყოფია (x − ფესვი). როდესაც ნახავ, ჩასვი და შეამოწმე f(ფესვი) = 0.">The polynomial f(x) = x³ + ax² + bx + c. Drag the sliders to reshape it. The x-intercepts are the roots — each is a factor (x − root). When you spot one, plug it in to verify f(root) = 0.</p>
  <div id="calc-poly" style="width:100%;height:420px;border-radius:8px;overflow:hidden;"></div>
</div>

<div class="lang-block lang-en">
<div class="insight-box">
  <p><strong>Strategy:</strong> For integer roots, try ±(factors of constant term). If f(2) = 0, then (x − 2) is a factor. Divide f(x) by (x − 2) to find the remaining quadratic. Then factor or use the quadratic formula on that.</p>
</div>

<h2>Long division step by step</h2>

<p><strong>Divide x³ − 7x − 6 by (x + 1).</strong></p>

<p>First check: f(−1) = −1 + 7 − 6 = 0. Good — (x + 1) is a factor.</p>

<p>Long division:</p>
<pre><code>x³ − 7x − 6 ÷ (x + 1)
= x² − x − 6
= (x − 3)(x + 2)</code></pre>

<p>So x³ − 7x − 6 = <strong>(x + 1)(x − 3)(x + 2)</strong>. Roots at x = −1, 3, −2.</p>

<div class="try-it">
  <h3>Practice</h3>
  <p>Show that (x − 2) is a factor of x³ − 3x² − 4x + 12, then fully factor the polynomial.</p>
  <button class="reveal-btn">Show Answer</button>
  <div class="answer">
    <p>f(2) = 8 − 12 − 8 + 12 = 0 ✓ — so (x − 2) is a factor.</p>
    <p>Dividing gives x² − x − 6 = (x − 3)(x + 2).</p>
    <p>Full factorisation: <strong>(x − 2)(x − 3)(x + 2)</strong></p>
  </div>
</div>
</div>

<div class="lang-block lang-ka">
<div class="insight-box">
  <p><strong>სტრატეგია:</strong> მთელი ფესვებისთვის სცადე ±(მუდმივა წევრის გამყოფები). თუ f(2) = 0, მაშინ (x − 2) გამყოფია. გაყავი f(x) (x − 2)-ზე და იპოვე დარჩენილი კვადრატული. შემდეგ ჩამოაყალიბე ან გამოიყენე კვადრატული ფორმულა.</p>
</div>

<h2>გრძელი გაყოფა ნაბიჯ-ნაბიჯ</h2>

<p><strong>გაყავი x³ − 7x − 6 (x + 1)-ზე.</strong></p>

<p>ჯერ შევამოწმოთ: f(−1) = −1 + 7 − 6 = 0. კარგი — (x + 1) გამყოფია.</p>

<p>გრძელი გაყოფა:</p>
<pre><code>x³ − 7x − 6 ÷ (x + 1)
= x² − x − 6
= (x − 3)(x + 2)</code></pre>

<p>ასე რომ x³ − 7x − 6 = <strong>(x + 1)(x − 3)(x + 2)</strong>. ფესვები x = −1, 3, −2.</p>

<div class="try-it">
  <h3>სავარჯიშო</h3>
  <p>დაამტკიცე, რომ (x − 2) არის x³ − 3x² − 4x + 12-ის გამყოფი, შემდეგ სრულად ჩამოაყალიბე პოლინომი.</p>
  <button class="reveal-btn">პასუხის ჩვენება</button>
  <div class="answer">
    <p>f(2) = 8 − 12 − 8 + 12 = 0 ✓ — (x − 2) გამყოფია.</p>
    <p>გაყოფა იძლევა x² − x − 6 = (x − 3)(x + 2).</p>
    <p>სრული ჩამოყალიბება: <strong>(x − 2)(x − 3)(x + 2)</strong></p>
  </div>
</div>
</div>

<script src="https://www.desmos.com/api/v1.7/calculator.js?apiKey=dcb31709b452b1cf9dc26972add0fda6"></script>
<script>
(function() {
  var c = Desmos.GraphingCalculator(document.getElementById('calc-poly'), {
    keypad: false, settingsMenu: false, zoomButtons: true, expressionsCollapsed: true
  });
  c.setMathBounds({ left: -5, right: 5, bottom: -12, top: 12 });
  c.setExpressions([
    { id: 'a',  latex: 'a=-2', sliderBounds: { min: -5, max: 5, step: 0.5 } },
    { id: 'b',  latex: 'b=-5', sliderBounds: { min: -8, max: 8, step: 0.5 } },
    { id: 'cv', latex: 'c=6',  sliderBounds: { min: -10, max: 10, step: 0.5 } },
    { id: 'f',  latex: 'f(x)=x^{3}+ax^{2}+bx+c', color: '#A78BFA', lineWidth: 2.5 }
  ]);
})();
</script>
