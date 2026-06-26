---
title: "Inverse Functions — going backwards"
title-ka: "ინვერსიული ფუნქცია — უკუმიმართულებით"
subtitle: "If f takes x to y, then f⁻¹ takes y back to x. Inverses are everywhere."
subtitle-ka: "თუ f x-ს y-ად გარდაქმნის, მაშინ f⁻¹ y-ს x-ად უბრუნებს. ინვერსიები ყველგანაა."
topic: functions
topic-color: "#00C4FF"
interactive: true
tags: [IGCSE, IB, A-Level, Functions]
quiz:
  - q: "If f(x) = 3x + 1, what is f⁻¹(x)?"
    q_ka: "თუ f(x) = 3x + 1, რა არის f⁻¹(x)?"
    options: ["(x+1)/3", "(x−1)/3", "3x − 1", "1/(3x+1)"]
    options_ka: ["(x+1)/3", "(x−1)/3", "3x − 1", "1/(3x+1)"]
    answer: 1
  - q: "The graph of f⁻¹(x) is the reflection of f(x) in:"
    q_ka: "f⁻¹(x)-ის გრაფიკი f(x)-ის ასახვაა:"
    options: ["The x-axis", "The y-axis", "The line y = x", "The origin"]
    options_ka: ["x-ღერძის მიმართ", "y-ღერძის მიმართ", "y = x წრფის მიმართ", "სათავის მიმართ"]
    answer: 2
  - q: "f(f⁻¹(x)) equals:"
    q_ka: "f(f⁻¹(x)) უდრის:"
    options: ["f(x)²", "x", "0", "1"]
    options_ka: ["f(x)²", "x", "0", "1"]
    answer: 1
  - q: "Which function does NOT have an inverse on all of ℝ?"
    q_ka: "რომელ ფუნქციას არ გააჩნია ინვერსია ℝ-ის მასშტაბით?"
    options: ["f(x) = 2x + 3", "f(x) = x³", "f(x) = x²", "f(x) = e^x"]
    options_ka: ["f(x) = 2x + 3", "f(x) = x³", "f(x) = x²", "f(x) = e^x"]
    answer: 2
  - q: "To find the inverse of y = 5x − 2, you:"
    q_ka: "y = 5x − 2-ის ინვერსიის საპოვნელად:"
    options: ["Replace x with −x", "Swap x and y then solve for y", "Take the reciprocal", "Differentiate"]
    options_ka: ["x-ი −x-ით ჩაანაცვლე", "x და y გაცვალე, შემდეგ y-ი იპოვე", "შებრუნებული მიიღე", "დიფერენცირება გააკეთე"]
    answer: 1
---

<div class="lang-block lang-en">
<p>The inverse function <strong>undoes</strong> what the original function does. If f(2) = 7, then f⁻¹(7) = 2. The output becomes the input, and the input becomes the output.</p>

<p>Geometrically, the graph of f⁻¹ is the <strong>reflection of f in the line y = x</strong> — because you're swapping every (x, y) pair to (y, x).</p>

<h2>Finding the inverse: swap and solve</h2>

<p>To find f⁻¹:</p>
<ol>
  <li>Write y = f(x)</li>
  <li>Swap x and y: x = f(y)</li>
  <li>Solve for y — that's f⁻¹(x)</li>
</ol>

<p><strong>Example:</strong> f(x) = 2x + 3</p>

<p>Write y = 2x + 3. Swap: x = 2y + 3. Solve: y = (x − 3)/2.</p>

<p>So <strong>f⁻¹(x) = (x − 3)/2</strong>.</p>

<p>Verify: f(f⁻¹(x)) = 2·(x−3)/2 + 3 = (x−3) + 3 = x ✓</p>
</div>

<div class="lang-block lang-ka">
<p>ინვერსიული ფუნქცია <strong>აუქმებს</strong> იმას, რასაც ორიგინალი ფუნქცია აკეთებს. თუ f(2) = 7, მაშინ f⁻¹(7) = 2. გამოსვლა შეყვანად იქცევა, შეყვანა — გამოსვლად.</p>

<p>გეომეტრიულად, f⁻¹-ის გრაფიკი არის <strong>f-ის ასახვა y = x წრფის მიმართ</strong> — რადგან ყოველ (x, y) წყვილს (y, x)-ად ვცვლით.</p>

<h2>ინვერსიის პოვნა: გაცვლა და ამოხსნა</h2>

<p>f⁻¹-ის საპოვნელად:</p>
<ol>
  <li>ჩავწეროთ y = f(x)</li>
  <li>გავცვალოთ x და y: x = f(y)</li>
  <li>ამოვხსნათ y — ეს არის f⁻¹(x)</li>
</ol>

<p><strong>მაგალითი:</strong> f(x) = 2x + 3</p>

<p>ჩავწეროთ y = 2x + 3. გავცვალოთ: x = 2y + 3. ამოვხსნათ: y = (x − 3)/2.</p>

<p>ასე რომ <strong>f⁻¹(x) = (x − 3)/2</strong>.</p>

<p>შემოწმება: f(f⁻¹(x)) = 2·(x−3)/2 + 3 = (x−3) + 3 = x ✓</p>
</div>

<div class="playground-block">
  <div class="playground-label" data-en="⚡ Interactive — watch f and its inverse mirror each other" data-ka="⚡ ინტერაქტიული — ნახე f და მისი ინვერსია სარკის მსგავსად">⚡ Interactive — watch f and its inverse mirror each other</div>
  <p data-en="The blue curve is y = (x−1)/(x+2) (a rational function). The pink curve is its inverse. The dashed line is y = x — the mirror. Notice the two curves are perfect reflections of each other." data-ka="ლურჯი მრუდი: y = (x−1)/(x+2) (რაციონალური ფუნქცია). ვარდისფერი მრუდი მისი ინვერსიაა. წყვეტილი ხაზი y = x — სარკეა. შეამჩნიე, ორი მრუდი ერთმანეთის სრული ასახვებია.">The blue curve is y = (x−1)/(x+2) (a rational function). The pink curve is its inverse. The dashed line is y = x — the mirror. Notice the two curves are perfect reflections of each other.</p>
  <div id="calc-inv" style="width:100%;height:430px;border-radius:8px;overflow:hidden;"></div>
</div>

<div class="lang-block lang-en">
<div class="insight-box">
  <p><strong>When does an inverse exist?</strong> Only when f is one-to-one (every y-value is hit exactly once). A horizontal line should cross the graph at most once. This is the "horizontal line test." f(x) = x² fails it — that's why you need to restrict the domain to x ≥ 0.</p>
</div>

<h2>When inverses fail: domain restrictions</h2>

<p>f(x) = x² doesn't have an inverse on all of ℝ because both f(2) = 4 and f(−2) = 4. To create an invertible version, restrict to x ≥ 0. Then f⁻¹(x) = √x.</p>

<div class="try-it">
  <h3>Practice</h3>
  <p>Find the inverse of f(x) = (x + 4) / 2.</p>
  <button class="reveal-btn">Show Answer</button>
  <div class="answer">
    <p>y = (x + 4)/2 → swap: x = (y + 4)/2 → 2x = y + 4 → y = 2x − 4</p>
    <p><strong>f⁻¹(x) = 2x − 4</strong></p>
    <p>Check: f(f⁻¹(x)) = (2x − 4 + 4)/2 = 2x/2 = x ✓</p>
  </div>
</div>
</div>

<div class="lang-block lang-ka">
<div class="insight-box">
  <p><strong>როდის არსებობს ინვერსია?</strong> მხოლოდ მაშინ, როდესაც f ერთ-ერთ-ერთია (ყოველ y-ის მნიშვნელობას ზუსტად ერთხელ ეხება). ჰორიზონტალური წრფე გრაფიკს მაქსიმუმ ერთხელ უნდა კვეთდეს. ეს "ჰორიზონტალური წრფის ტესტია." f(x) = x² ვერ გადის — ამიტომ საჭიროა განსაზღვრის არის შეზღუდვა x ≥ 0-ამდე.</p>
</div>

<h2>როდის ვერ ვქმნით ინვერსიას: განსაზღვრის არის შეზღუდვები</h2>

<p>f(x) = x²-ს არ გააჩნია ინვერსია ℝ-ის მასშტაბით, რადგან f(2) = 4 და f(−2) = 4 ერთდროულად. ინვერტირებადი ვერსიის შესაქმნელად, შევზღუდოთ x ≥ 0-ამდე. მაშინ f⁻¹(x) = √x.</p>

<div class="try-it">
  <h3>სავარჯიშო</h3>
  <p>იპოვე f(x) = (x + 4) / 2-ის ინვერსია.</p>
  <button class="reveal-btn">პასუხის ჩვენება</button>
  <div class="answer">
    <p>y = (x + 4)/2 → გავცვალოთ: x = (y + 4)/2 → 2x = y + 4 → y = 2x − 4</p>
    <p><strong>f⁻¹(x) = 2x − 4</strong></p>
    <p>შემოწმება: f(f⁻¹(x)) = (2x − 4 + 4)/2 = 2x/2 = x ✓</p>
  </div>
</div>
</div>

<script src="https://www.desmos.com/api/v1.7/calculator.js?apiKey=dcb31709b452b1cf9dc26972add0fda6"></script>
<script>
(function() {
  var c = Desmos.GraphingCalculator(document.getElementById('calc-inv'), {
    keypad: false, settingsMenu: false, zoomButtons: true, expressionsCollapsed: true
  });
  c.setMathBounds({ left: -6, right: 6, bottom: -6, top: 6 });
  c.setExpressions([
    { id: 'f',  latex: 'f(x)=\\frac{x-1}{x+2}', color: '#00C4FF', lineWidth: 2.5, label: 'f(x)' },
    { id: 'fi', latex: 'g(x)=\\frac{-2x-1}{x-1}', color: '#FF6B9D', lineWidth: 2.5, label: 'f⁻¹(x)' },
    { id: 'yx', latex: 'y=x', color: '#888', lineWidth: 1.5, lineStyle: Desmos.Styles.DASHED }
  ]);
})();
</script>
