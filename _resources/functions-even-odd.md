---
title: "Even and Odd Functions — symmetry in disguise"
title-ka: "ლუწი და კენტი ფუნქციები — სიმეტრია ფარულად"
subtitle: "Even functions mirror across the y-axis. Odd functions rotate 180° around the origin. These are not just names."
subtitle-ka: "ლუწი ფუნქციები y-ღერძის მიმართ სარკისებრია. კენტი ფუნქციები სათავის გარშემო 180°-ით ბრუნდება. ეს მხოლოდ სახელები არ არის."
topic: functions
topic-color: "#00C4FF"
interactive: true
tags: [IB, A-Level, Functions]
quiz:
  - q: "An even function satisfies:"
    q_ka: "ლუწი ფუნქცია აკმაყოფილებს:"
    options: ["f(−x) = −f(x)", "f(−x) = f(x)", "f(x) = f(−x) + 1", "f(0) = 0"]
    options_ka: ["f(−x) = −f(x)", "f(−x) = f(x)", "f(x) = f(−x) + 1", "f(0) = 0"]
    answer: 1
  - q: "Which of these is an even function?"
    q_ka: "რომელი მათგანია ლუწი ფუნქცია?"
    options: ["f(x) = x³", "f(x) = sin(x)", "f(x) = x²", "f(x) = x"]
    options_ka: ["f(x) = x³", "f(x) = sin(x)", "f(x) = x²", "f(x) = x"]
    answer: 2
  - q: "An odd function always passes through:"
    q_ka: "კენტი ფუნქცია ყოველთვის გადის:"
    options: ["(1, 1)", "The y-axis", "The origin (0, 0)", "The point (0, 1)"]
    options_ka: ["(1, 1)", "y-ღერძიდან", "სათავიდან (0, 0)", "წერტილი (0, 1)"]
    answer: 2
  - q: "Is f(x) = x² + x even, odd, or neither?"
    q_ka: "f(x) = x² + x ლუწია, კენტია, თუ არცერთი?"
    options: ["Even", "Odd", "Neither", "Both"]
    options_ka: ["ლუწი", "კენტი", "არცერთი", "ორივე"]
    answer: 2
  - q: "The integral of an odd function over [−a, a] is always:"
    q_ka: "[−a, a]-ზე კენტი ფუნქციის ინტეგრალი ყოველთვის:"
    options: ["Positive", "Negative", "Zero", "Undefined"]
    options_ka: ["დადებითი", "უარყოფითი", "ნული", "განუსაზღვრელი"]
    answer: 2
---

<div class="lang-block lang-en">
<p>Symmetry is not just aesthetic — it's a powerful mathematical property. Even and odd functions have built-in symmetry that you can exploit in integration, simplification, and graphing.</p>

<h2>Definitions</h2>

<ul>
  <li><strong>Even function:</strong> f(−x) = f(x) for all x. Graph is symmetric about the <strong>y-axis</strong>.</li>
  <li><strong>Odd function:</strong> f(−x) = −f(x) for all x. Graph has <strong>180° rotational symmetry</strong> about the origin.</li>
</ul>

<p>The names come from power functions: x² (even power, even function), x³ (odd power, odd function).</p>

<h2>Testing even/odd</h2>

<p>Substitute −x for x and simplify. Compare to the original.</p>

<table>
  <tr><th>Function</th><th>f(−x)</th><th>Even/Odd?</th></tr>
  <tr><td>f(x) = x⁴</td><td>(−x)⁴ = x⁴ = f(x)</td><td>Even</td></tr>
  <tr><td>f(x) = x³</td><td>(−x)³ = −x³ = −f(x)</td><td>Odd</td></tr>
  <tr><td>f(x) = cos(x)</td><td>cos(−x) = cos(x)</td><td>Even</td></tr>
  <tr><td>f(x) = sin(x)</td><td>sin(−x) = −sin(x)</td><td>Odd</td></tr>
  <tr><td>f(x) = x² + x</td><td>x² − x ≠ f(x) and ≠ −f(x)</td><td>Neither</td></tr>
</table>
</div>

<div class="lang-block lang-ka">
<p>სიმეტრია მხოლოდ ესთეტიკა არ არის — ეს ძლიერი მათემატიკური თვისებაა. ლუწ და კენტ ფუნქციებს ჩაშენებული სიმეტრია აქვთ, რომლის გამოყენება შეგიძლია ინტეგრებში, გამარტივებაში და გრაფიკის ასაგებად.</p>

<h2>განმარტებები</h2>

<ul>
  <li><strong>ლუწი ფუნქცია:</strong> f(−x) = f(x) ყველა x-სთვის. გრაფიკი სიმეტრიულია <strong>y-ღერძის</strong> მიმართ.</li>
  <li><strong>კენტი ფუნქცია:</strong> f(−x) = −f(x) ყველა x-სთვის. გრაფიკს გააჩნია <strong>180°-იანი მბრუნავი სიმეტრია</strong> სათავის მიმართ.</li>
</ul>

<p>სახელები ხარისხის ფუნქციებიდან მოდის: x² (ლუწი ხარისხი, ლუწი ფუნქცია), x³ (კენტი ხარისხი, კენტი ფუნქცია).</p>

<h2>ლუწი/კენტის შემოწმება</h2>

<p>ჩაანაცვლე −x x-ის ნაცვლად და გაამარტივე. შეადარე ორიგინალს.</p>

<table>
  <tr><th>ფუნქცია</th><th>f(−x)</th><th>ლუწი/კენტი?</th></tr>
  <tr><td>f(x) = x⁴</td><td>(−x)⁴ = x⁴ = f(x)</td><td>ლუწი</td></tr>
  <tr><td>f(x) = x³</td><td>(−x)³ = −x³ = −f(x)</td><td>კენტი</td></tr>
  <tr><td>f(x) = cos(x)</td><td>cos(−x) = cos(x)</td><td>ლუწი</td></tr>
  <tr><td>f(x) = sin(x)</td><td>sin(−x) = −sin(x)</td><td>კენტი</td></tr>
  <tr><td>f(x) = x² + x</td><td>x² − x ≠ f(x) და ≠ −f(x)</td><td>არცერთი</td></tr>
</table>
</div>

<div class="playground-block">
  <div class="playground-label" data-en="⚡ Interactive — toggle between even and odd function types" data-ka="⚡ ინტერაქტიული — გადაერთე ლუწ და კენტ ფუნქციებს შორის">⚡ Interactive — toggle between even and odd function types</div>
  <p data-en="Drag the n slider to change the power. Even n (2, 4, 6…) → y-axis symmetry. Odd n (1, 3, 5…) → rotational symmetry. Watch the shape transform." data-ka="გადაათრიე n სლაიდერი ხარისხის შესაცვლელად. ლუწი n (2, 4, 6…) → y-ღერძის სიმეტრია. კენტი n (1, 3, 5…) → მბრუნავი სიმეტრია. ნახე ფორმის ცვლილება.">Drag the <strong>n</strong> slider to change the power. Even n (2, 4, 6…) → y-axis symmetry. Odd n (1, 3, 5…) → rotational symmetry. Watch the shape transform.</p>
  <div id="calc-eo" style="width:100%;height:420px;border-radius:8px;overflow:hidden;"></div>
</div>

<div class="lang-block lang-en">
<div class="insight-box">
  <p><strong>Calculus shortcut:</strong> The integral of any odd function over a symmetric interval [−a, a] is exactly 0 — the negative half cancels the positive half perfectly. This saves enormous computation in exam questions.</p>
</div>

<h2>Even + Odd decomposition</h2>

<p>Any function can be written as the sum of an even and odd part:</p>

<ul>
  <li>Even part: E(x) = [f(x) + f(−x)] / 2</li>
  <li>Odd part: O(x) = [f(x) − f(−x)] / 2</li>
  <li>Then: f(x) = E(x) + O(x)</li>
</ul>

<div class="try-it">
  <h3>Practice</h3>
  <p>Is f(x) = x³ + x odd, even, or neither? Show your working.</p>
  <button class="reveal-btn">Show Answer</button>
  <div class="answer">
    <p>f(−x) = (−x)³ + (−x) = −x³ − x = −(x³ + x) = −f(x)</p>
    <p>Since f(−x) = −f(x), the function is <strong>odd</strong>.</p>
    <p>Graph check: passes through origin, has 180° rotational symmetry.</p>
  </div>
</div>
</div>

<div class="lang-block lang-ka">
<div class="insight-box">
  <p><strong>კალკულუსის მოკლე გზა:</strong> ნებისმიერი კენტი ფუნქციის ინტეგრალი სიმეტრიულ ინტერვალზე [−a, a] ზუსტად 0-ია — უარყოფითი ნახევარი დადებით ნახევარს სრულად ანეიტრალებს. ეს გამოცდის კითხვებში დიდ გამოთვლებს გიხსნის.</p>
</div>

<h2>ლუწ + კენტ ნაწილებად დაშლა</h2>

<p>ნებისმიერი ფუნქცია შეიძლება ჩაიწეროს ლუწი და კენტი ნაწილების ჯამად:</p>

<ul>
  <li>ლუწი ნაწილი: E(x) = [f(x) + f(−x)] / 2</li>
  <li>კენტი ნაწილი: O(x) = [f(x) − f(−x)] / 2</li>
  <li>მაშინ: f(x) = E(x) + O(x)</li>
</ul>

<div class="try-it">
  <h3>სავარჯიშო</h3>
  <p>f(x) = x³ + x კენტია, ლუწია, თუ არცერთი? აჩვენე ამოხსნა.</p>
  <button class="reveal-btn">პასუხის ჩვენება</button>
  <div class="answer">
    <p>f(−x) = (−x)³ + (−x) = −x³ − x = −(x³ + x) = −f(x)</p>
    <p>ვინაიდან f(−x) = −f(x), ფუნქცია არის <strong>კენტი</strong>.</p>
    <p>გრაფიკის შემოწმება: გადის სათავიდან, გააჩნია 180°-იანი მბრუნავი სიმეტრია.</p>
  </div>
</div>
</div>

<script src="https://www.desmos.com/api/v1.7/calculator.js?apiKey=dcb31709b452b1cf9dc26972add0fda6"></script>
<script>
(function() {
  var c = Desmos.GraphingCalculator(document.getElementById('calc-eo'), {
    keypad: false, settingsMenu: false, zoomButtons: true, expressionsCollapsed: true
  });
  c.setMathBounds({ left: -3, right: 3, bottom: -5, top: 5 });
  c.setExpressions([
    { id: 'n',  latex: 'n=2',  sliderBounds: { min: 1, max: 6, step: 1 } },
    { id: 'f',  latex: 'y=x^{n}', color: '#00C4FF', lineWidth: 2.5 },
    { id: 'ax', latex: 'x=0', color: '#333', lineWidth: 1, lineStyle: Desmos.Styles.DASHED }
  ]);
})();
</script>
