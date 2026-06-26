---
title: "Coordinate Geometry — lines, distances, and midpoints"
title-ka: "კოორდინატული გეომეტრია — სიმართლეები, მანძილები და შუა წერტილები"
subtitle: "Every line has an equation. Every pair of points has a distance and a midpoint. Here's how to find them all."
subtitle-ka: "ყოველ სიმართლეს აქვს განტოლება. ყოველ წყვილ წერტილს აქვს მანძილი და შუა წერტილი. ასე ვპოულობთ ყველაფერს."
topic: geometry
topic-color: "#FB923C"
interactive: true
tags: [IGCSE, IB, SAT, Geometry]
quiz:
  - q: "The gradient (slope) of the line through (1, 2) and (5, 10) is:"
    q_ka: "(1, 2) და (5, 10)-ის გამავალი სიმართლის დახრა (გრადიენტი) არის:"
    options: ["1", "2", "4", "8"]
    options_ka: ["1", "2", "4", "8"]
    answer: 1
  - q: "Two lines are perpendicular when their gradients m₁ and m₂ satisfy:"
    q_ka: "ორი სიმართლე პარპენდიკულარია, როდესაც მათი გრადიენტები m₁ და m₂ აკმაყოფილებს:"
    options: ["m₁ = m₂", "m₁ + m₂ = 0", "m₁ × m₂ = −1", "m₁ − m₂ = 1"]
    options_ka: ["m₁ = m₂", "m₁ + m₂ = 0", "m₁ × m₂ = −1", "m₁ − m₂ = 1"]
    answer: 2
  - q: "The distance between (0, 0) and (3, 4) is:"
    q_ka: "(0, 0) და (3, 4)-ს შორის მანძილი არის:"
    options: ["7", "5", "√7", "12"]
    options_ka: ["7", "5", "√7", "12"]
    answer: 1
  - q: "The midpoint of (2, 6) and (8, 2) is:"
    q_ka: "(2, 6) და (8, 2)-ის შუა წერტილი არის:"
    options: ["(5, 4)", "(6, 4)", "(10, 8)", "(3, 2)"]
    options_ka: ["(5, 4)", "(6, 4)", "(10, 8)", "(3, 2)"]
    answer: 0
  - q: "Which is the equation of a line with gradient 2 through (0, 5)?"
    q_ka: "რომელია სიმართლის განტოლება გრადიენტით 2, (0, 5)-ის გამავალი?"
    options: ["y = 5x + 2", "y = 2x + 5", "y = 2x − 5", "y = 5x − 2"]
    options_ka: ["y = 5x + 2", "y = 2x + 5", "y = 2x − 5", "y = 5x − 2"]
    answer: 1
---

<div class="lang-block lang-en">
<p>Coordinate geometry translates geometric problems into algebra — and algebraic problems into pictures. Every shape can be described by equations. Every relationship between points can be computed precisely.</p>

<h2>The three key formulas</h2>
<p><strong>Gradient:</strong> m = (y₂ − y₁) / (x₂ − x₁)</p>
<p><strong>Distance:</strong> d = √[(x₂ − x₁)² + (y₂ − y₁)²]</p>
<p><strong>Midpoint:</strong> M = ((x₁ + x₂)/2, (y₁ + y₂)/2)</p>
<p>These three formulas underlie everything in coordinate geometry.</p>

<h2>Equations of lines</h2>
<p><strong>Gradient-intercept form:</strong> y = mx + c</p>
<p><strong>Point-gradient form:</strong> y − y₁ = m(x − x₁) — use when you have a point and the gradient</p>
<p><strong>General form:</strong> ax + by + c = 0</p>

<h2>Perpendicular lines</h2>
<p>If a line has gradient m, any perpendicular line has gradient <strong>−1/m</strong>.</p>
<p>So gradients of perpendicular lines multiply to −1: m₁ × m₂ = −1.</p>
<p><strong>Example:</strong> The line y = 3x − 2 has gradient 3. The perpendicular has gradient −1/3.</p>
</div>

<div class="lang-block lang-ka">
<p>კოორდინატული გეომეტრია გეომეტრიულ ამოცანებს ალგებრაში თარგმნის — და ალგებრულ ამოცანებს სურათებში. ყოველი ფიგურა განტოლებებით შეიძლება აღიწეროს. წერტილებს შორის ყოველი კავშირი ზუსტად გამოითვლება.</p>

<h2>სამი მთავარი ფორმულა</h2>
<p><strong>დახრა:</strong> m = (y₂ − y₁) / (x₂ − x₁)</p>
<p><strong>მანძილი:</strong> d = √[(x₂ − x₁)² + (y₂ − y₁)²]</p>
<p><strong>შუა წერტილი:</strong> M = ((x₁ + x₂)/2, (y₁ + y₂)/2)</p>
<p>ეს სამი ფორმულა კოორდინატულ გეომეტრიაში ყველაფრის საფუძველია.</p>

<h2>სიმართლეების განტოლებები</h2>
<p><strong>დახრა-კვეთის ფორმა:</strong> y = mx + c</p>
<p><strong>წერტილ-დახრის ფორმა:</strong> y − y₁ = m(x − x₁) — გამოიყენე, როდესაც გაქვს წერტილი და დახრა</p>
<p><strong>ზოგადი ფორმა:</strong> ax + by + c = 0</p>

<h2>პარპენდიკულარული სიმართლეები</h2>
<p>თუ სიმართლეს აქვს დახრა m, ნებისმიერ პარპენდიკულარულ სიმართლეს დახრა <strong>−1/m</strong> აქვს.</p>
<p>ამდენად პარპენდიკულარული სიმართლეების დახრები -1-ზე მრავლდება: m₁ × m₂ = −1.</p>
<p><strong>მაგალითი:</strong> სიმართლე y = 3x − 2-ს დახრა 3-ია. პარპენდიკულარს დახრა −1/3 აქვს.</p>
</div>

<div class="playground-block">
  <div class="playground-label" data-en="⚡ Interactive — build two perpendicular lines" data-ka="⚡ ინტერაქტიული — ააგე ორი პარპენდიკულარული სიმართლე">⚡ Interactive — build two perpendicular lines</div>
  <p data-en="The orange line has gradient m. Drag m and watch the perpendicular (pink) update automatically with gradient −1/m. Note: as m → 0 (flat line), −1/m → ∞ (vertical line)." data-ka="ნარინჯისფერ სიმართლეს დახრა m აქვს. გადაათრიე m და დაუყურე, როგორ განახლდება პარპენდიკულარი (ვარდისფერი) −1/m დახრით. შენიშვნა: m → 0-ს დროს (ჰორიზონტალური სიმართლე), −1/m → ∞ (ვერტიკალური სიმართლე).">The orange line has gradient <strong>m</strong>. Drag m and watch the perpendicular (pink) update automatically with gradient −1/m. Note: as m → 0 (flat line), −1/m → ∞ (vertical line).</p>
  <div id="calc-coord" style="width:100%;height:420px;border-radius:8px;overflow:hidden;"></div>
</div>

<div class="lang-block lang-en">
<div class="insight-box">
  <p><strong>The perpendicular bisector:</strong> To find the perpendicular bisector of a segment: 1) find the midpoint M; 2) find the gradient of the segment; 3) the perpendicular bisector passes through M with gradient −1/m. This appears constantly in locus problems.</p>
</div>

<h2>Worked example</h2>
<p>Find the equation of the perpendicular bisector of the segment from A(2, 5) to B(8, 3).</p>
<ol>
<li>Midpoint M = (5, 4)</li>
<li>Gradient of AB = (3−5)/(8−2) = −2/6 = −1/3</li>
<li>Perpendicular gradient = 3</li>
<li>Line through (5, 4) with m = 3: y − 4 = 3(x − 5) → <strong>y = 3x − 11</strong></li>
</ol>

<div class="try-it">
  <h3>Practice</h3>
  <p>Find the distance from the point (3, 1) to the line y = 2x + 1.</p>
  <button class="reveal-btn">Show Answer</button>
  <div class="answer">
    <p>Rewrite: 2x − y + 1 = 0. Use the point-to-line distance formula:</p>
    <p>d = |2(3) − 1 + 1| / √(4 + 1) = |6| / √5 = 6/√5 = 6√5/5 ≈ <strong>2.68</strong></p>
  </div>
</div>
</div>

<div class="lang-block lang-ka">
<div class="insight-box">
  <p><strong>პარპენდიკულარული ბისექტრისა:</strong> სეგმენტის პარპენდიკულარული ბისექტრისის საპოვნელად: 1) იპოვე შუა წერტილი M; 2) იპოვე სეგმენტის დახრა; 3) პარპენდიკულარული ბისექტრისა M-ის გამავალია −1/m დახრით. ეს გეომეტრიულ ადგილის ამოცანებში მუდმივად ჩნდება.</p>
</div>

<h2>ამოხსნილი მაგალითი</h2>
<p>იპოვე A(2, 5)-დან B(8, 3)-მდე სეგმენტის პარპენდიკულარული ბისექტრისის განტოლება.</p>
<ol>
<li>შუა წერტილი M = (5, 4)</li>
<li>AB-ის დახრა = (3−5)/(8−2) = −2/6 = −1/3</li>
<li>პარპენდიკულარული დახრა = 3</li>
<li>სიმართლე (5, 4)-ის გამავალი m = 3-ით: y − 4 = 3(x − 5) → <strong>y = 3x − 11</strong></li>
</ol>

<div class="try-it">
  <h3>სავარჯიშო</h3>
  <p>იპოვე მანძილი (3, 1) წერტილიდან სიმართლე y = 2x + 1-მდე.</p>
  <button class="reveal-btn">პასუხის ჩვენება</button>
  <div class="answer">
    <p>გადაიწერე: 2x − y + 1 = 0. გამოიყენე წერტილიდან სიმართლემდე მანძილის ფორმულა:</p>
    <p>d = |2(3) − 1 + 1| / √(4 + 1) = |6| / √5 = 6/√5 = 6√5/5 ≈ <strong>2.68</strong></p>
  </div>
</div>
</div>

<script src="https://www.desmos.com/api/v1.7/calculator.js?apiKey=dcb31709b452b1cf9dc26972add0fda6"></script>
<script>
(function() {
  var c = Desmos.GraphingCalculator(document.getElementById('calc-coord'), {
    keypad: false, settingsMenu: false, zoomButtons: true, expressionsCollapsed: true
  });
  c.setMathBounds({ left: -6, right: 6, bottom: -5, top: 5 });
  c.setExpressions([
    { id: 'm',  latex: 'm=2',  sliderBounds: { min: -5, max: 5, step: 0.25 } },
    { id: 'L1', latex: 'y=mx', color: '#FB923C', lineWidth: 2.5, label: 'gradient m' },
    { id: 'L2', latex: 'y=-x/m', color: '#FF6B9D', lineWidth: 2.5, label: 'gradient −1/m' },
    { id: 'pt', latex: '(0,0)', color: '#FFD700', pointSize: 10 }
  ]);
})();
</script>
