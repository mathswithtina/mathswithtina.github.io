---
title: "The Quadratic Formula — where it comes from"
title-ka: "კვადრატული ფორმულა — საიდან მოდის"
subtitle: "x = (−b ± √(b²−4ac)) / 2a. But why? And what does the discriminant secretly tell you?"
subtitle-ka: "x = (−b ± √(b²−4ac)) / 2a. მაგრამ რატომ? და რას გვეუბნება დისკრიმინანტი?"
topic: algebra
topic-color: "#A78BFA"
interactive: true
tags: [IGCSE, IB, SAT, Algebra]
quiz:
  - q: "The discriminant of ax² + bx + c is:"
    q_ka: "ax² + bx + c-ის დისკრიმინანტია:"
    options: ["b² + 4ac", "b² − 4ac", "−b/2a", "4ac − b²"]
    options_ka: ["b² + 4ac", "b² − 4ac", "−b/2a", "4ac − b²"]
    answer: 1
  - q: "If the discriminant is negative, the quadratic has:"
    q_ka: "თუ დისკრიმინანტი უარყოფითია, კვადრატულ განტოლებას აქვს:"
    options: ["Two real roots", "One repeated root", "No real roots", "Infinitely many roots"]
    options_ka: ["ორი რეალური ფესვი", "ერთი გამეორებული ფესვი", "რეალური ფესვები არ აქვს", "უსასრულოდ ბევრი ფესვი"]
    answer: 2
  - q: "Solve 2x² + 3x − 2 = 0 using the formula. What are the solutions?"
    q_ka: "ამოხსენი 2x² + 3x − 2 = 0 ფორმულის გამოყენებით. რა არის ამოხსნა?"
    options: ["x = 1 or x = −2", "x = 0.5 or x = −2", "x = 1 or x = 2", "x = −0.5 or x = 2"]
    options_ka: ["x = 1 ან x = −2", "x = 0.5 ან x = −2", "x = 1 ან x = 2", "x = −0.5 ან x = 2"]
    answer: 1
  - q: "A discriminant of zero means the parabola:"
    q_ka: "ნულოვანი დისკრიმინანტი ნიშნავს, რომ პარაბოლა:"
    options: ["Crosses the x-axis at two points", "Just touches the x-axis at one point", "Never touches the x-axis", "Has no vertex"]
    options_ka: ["x-ღერძს ორ წერტილში კვეთს", "x-ღერძს მხოლოდ ერთ წერტილში ეხება", "x-ღერძს არ ეხება", "წვერო არ აქვს"]
    answer: 1
  - q: "The quadratic formula is derived by:"
    q_ka: "კვადრატული ფორმულა გამოიყვანება:"
    options: ["Factoring", "Completing the square on ax² + bx + c = 0", "Taking the derivative", "Graphing"]
    options_ka: ["ჩამოყალიბებით", "ax² + bx + c = 0-ის სრული კვადრატით", "წარმოებულის აღებით", "გრაფიკის აგებით"]
    answer: 1
---

<div class="lang-block lang-en">
<p>The quadratic formula solves <strong>any</strong> quadratic equation ax² + bx + c = 0, factored or not. It always works. And it isn't magic — it's completing the square, but with letters instead of numbers.</p>

<h2>Where the formula comes from</h2>

<p>Start with ax² + bx + c = 0. Complete the square:</p>

<ol>
  <li>Divide by a: x² + (b/a)x + c/a = 0</li>
  <li>Move c/a: x² + (b/a)x = −c/a</li>
  <li>Add (b/2a)²: (x + b/2a)² = b²/4a² − c/a = (b² − 4ac)/4a²</li>
  <li>Square root both sides: x + b/2a = ±√(b² − 4ac)/2a</li>
  <li>Solve: <strong>x = (−b ± √(b² − 4ac)) / 2a</strong></li>
</ol>

<h2>The discriminant: Δ = b² − 4ac</h2>

<p>The expression under the square root tells you everything before you solve:</p>

<table>
  <tr><td>Δ &gt; 0</td><td>Two distinct real roots</td><td>Parabola crosses x-axis twice</td></tr>
  <tr><td>Δ = 0</td><td>One repeated root</td><td>Parabola just touches x-axis</td></tr>
  <tr><td>Δ &lt; 0</td><td>No real roots</td><td>Parabola doesn't cross x-axis</td></tr>
</table>
</div>

<div class="lang-block lang-ka">
<p>კვადრატული ფორმულა ხსნის <strong>ნებისმიერ</strong> კვადრატულ განტოლებას ax² + bx + c = 0, ჩამოყალიბებულია თუ არა. ის ყოველთვის მუშაობს. და ეს ჯადოქრობა არ არის — ეს სრული კვადრატია, მხოლოდ ასოებით რიცხვების ნაცვლად.</p>

<h2>საიდან მოდის ფორმულა</h2>

<p>დავიწყოთ ax² + bx + c = 0-ით. გამოვიყვანოთ სრული კვადრატი:</p>

<ol>
  <li>გავყოთ a-ზე: x² + (b/a)x + c/a = 0</li>
  <li>გადავიტანოთ c/a: x² + (b/a)x = −c/a</li>
  <li>დავამატოთ (b/2a)²: (x + b/2a)² = b²/4a² − c/a = (b² − 4ac)/4a²</li>
  <li>ავიღოთ კვადრატული ფესვი: x + b/2a = ±√(b² − 4ac)/2a</li>
  <li>ამოვხსნათ: <strong>x = (−b ± √(b² − 4ac)) / 2a</strong></li>
</ol>

<h2>დისკრიმინანტი: Δ = b² − 4ac</h2>

<p>კვადრატული ფესვის ქვეშ არსებული გამოთქმა ყველაფერს გვეუბნება ამოხსნამდე:</p>

<table>
  <tr><td>Δ &gt; 0</td><td>ორი განსხვავებული რეალური ფესვი</td><td>პარაბოლა x-ღერძს ორჯერ კვეთს</td></tr>
  <tr><td>Δ = 0</td><td>ერთი გამეორებული ფესვი</td><td>პარაბოლა x-ღერძს ეხება</td></tr>
  <tr><td>Δ &lt; 0</td><td>რეალური ფესვები არ არის</td><td>პარაბოლა x-ღერძს არ კვეთს</td></tr>
</table>
</div>

<div class="playground-block">
  <div class="playground-label" data-en="⚡ Interactive — drag c to control the discriminant" data-ka="⚡ ინტერაქტიული — გადაათრიე c დისკრიმინანტის გასაკონტროლებლად">⚡ Interactive — drag c to control the discriminant</div>
  <p data-en="The parabola is y = x² − 4x + c. Drag c and watch: when c &lt; 4, two real roots (discriminant &gt; 0). When c = 4, one root. When c &gt; 4, no real roots." data-ka="პარაბოლა: y = x² − 4x + c. გადაათრიე c და დააკვირდი: როდესაც c &lt; 4, ორი რეალური ფესვი (დისკრიმინანტი &gt; 0). c = 4 დროს — ერთი ფესვი. c &gt; 4 დროს — ფესვები არ არის.">The parabola is y = x² − 4x + c. Drag <strong>c</strong> and watch: when c &lt; 4, two real roots (discriminant &gt; 0). When c = 4, one root. When c &gt; 4, no real roots.</p>
  <div id="calc-quad" style="width:100%;height:420px;border-radius:8px;overflow:hidden;"></div>
</div>

<div class="lang-block lang-en">
<div class="insight-box">
  <p><strong>Exam shortcut:</strong> Always compute Δ first. If Δ &lt; 0, stop — the question might ask about complex roots or have a different form. If Δ = 0, there's one repeated root: x = −b/2a.</p>
</div>

<h2>Worked example</h2>

<p><strong>Solve 3x² − 5x − 2 = 0</strong></p>

<p>a = 3, b = −5, c = −2. Δ = 25 + 24 = 49 (positive, two roots).</p>

<p>x = (5 ± 7) / 6 → x = 12/6 = <strong>2</strong> or x = −2/6 = <strong>−1/3</strong></p>

<div class="try-it">
  <h3>Practice</h3>
  <p>Find the discriminant of x² − 6x + 10 = 0. What does it tell you?</p>
  <button class="reveal-btn">Show Answer</button>
  <div class="answer">
    <p>Δ = (−6)² − 4(1)(10) = 36 − 40 = −4</p>
    <p>Δ &lt; 0: <strong>no real roots</strong>. The parabola sits entirely above the x-axis.</p>
  </div>
</div>
</div>

<div class="lang-block lang-ka">
<div class="insight-box">
  <p><strong>გამოცდის მოკლე გზა:</strong> ყოველთვის ჯერ გამოთვალე Δ. თუ Δ &lt; 0, გაჩერდი — შეიძლება კომპლექსური ფესვები ეკითხებოდეს. თუ Δ = 0, არსებობს ერთი გამეორებული ფესვი: x = −b/2a.</p>
</div>

<h2>ამოხსნილი მაგალითი</h2>

<p><strong>ამოხსენი 3x² − 5x − 2 = 0</strong></p>

<p>a = 3, b = −5, c = −2. Δ = 25 + 24 = 49 (დადებითი, ორი ფესვი).</p>

<p>x = (5 ± 7) / 6 → x = 12/6 = <strong>2</strong> ან x = −2/6 = <strong>−1/3</strong></p>

<div class="try-it">
  <h3>სავარჯიშო</h3>
  <p>იპოვე x² − 6x + 10 = 0-ის დისკრიმინანტი. რას გვეუბნება ის?</p>
  <button class="reveal-btn">პასუხის ჩვენება</button>
  <div class="answer">
    <p>Δ = (−6)² − 4(1)(10) = 36 − 40 = −4</p>
    <p>Δ &lt; 0: <strong>რეალური ფესვები არ არის</strong>. პარაბოლა მთლიანად x-ღერძის ზემოთ მდებარეობს.</p>
  </div>
</div>
</div>

<script src="https://www.desmos.com/api/v1.7/calculator.js?apiKey=dcb31709b452b1cf9dc26972add0fda6"></script>
<script>
(function() {
  var c2 = Desmos.GraphingCalculator(document.getElementById('calc-quad'), {
    keypad: false, settingsMenu: false, zoomButtons: true, expressionsCollapsed: true
  });
  c2.setMathBounds({ left: -2, right: 6, bottom: -4, top: 8 });
  c2.setExpressions([
    { id: 'c',  latex: 'c=2',  sliderBounds: { min: -2, max: 6, step: 0.1 } },
    { id: 'f',  latex: 'f(x)=x^{2}-4x+c', color: '#A78BFA', lineWidth: 2.5 },
    { id: 'D',  latex: 'D=16-4c', hidden: false, label: 'discriminant' },
    { id: 'r1', latex: '(2-\\sqrt{\\max(16-4c,0)}/2, 0)', color: '#FFD700', pointSize: 10 },
    { id: 'r2', latex: '(2+\\sqrt{\\max(16-4c,0)}/2, 0)', color: '#FFD700', pointSize: 10 }
  ]);
})();
</script>
