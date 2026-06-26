---
title: "Systems of Equations — two equations, two unknowns"
title-ka: "განტოლებათა სისტემა — ორი განტოლება, ორი უცნობი"
subtitle: "Substitution or elimination? The method doesn't matter. Finding the intersection does."
subtitle-ka: "ჩანაცვლება თუ შეკრება? მეთოდი მნიშვნელოვანი არ არის. მნიშვნელოვანია გადაკვეთის პოვნა."
topic: algebra
topic-color: "#A78BFA"
interactive: true
tags: [IGCSE, IB, SAT, Algebra]
quiz:
  - q: "Solve: x + y = 5 and x − y = 1. What is x?"
    q_ka: "ამოხსენი: x + y = 5 და x − y = 1. რა არის x?"
    options: ["2", "3", "4", "1"]
    options_ka: ["2", "3", "4", "1"]
    answer: 1
  - q: "Two lines intersect at exactly one point when:"
    q_ka: "ორი წრფე ზუსტად ერთ წერტილში იკვეთება, როდესაც:"
    options: ["They have the same slope", "They have different slopes", "They are parallel", "They are the same line"]
    options_ka: ["მათ ერთი და იგივე დახრილობა აქვთ", "მათ განსხვავებული დახრილობა აქვთ", "ისინი პარალელურები არიან", "ისინი ერთი და იგივე წრფეა"]
    answer: 1
  - q: "Solve by substitution: y = 2x and x + y = 9. What is x?"
    q_ka: "ამოხსენი ჩანაცვლებით: y = 2x და x + y = 9. რა არის x?"
    options: ["2", "3", "4", "6"]
    options_ka: ["2", "3", "4", "6"]
    answer: 1
  - q: "A system of equations has no solution when the lines are:"
    q_ka: "განტოლებათა სისტემას ამოხსნა არ აქვს, როდესაც წრფეები:"
    options: ["Perpendicular", "Parallel with different y-intercepts", "The same line", "Intersecting"]
    options_ka: ["მართობულია", "პარალელური და განსხვავებული y-ჭრილებით", "ერთი და იგივე წრფეა", "იკვეთება"]
    answer: 1
  - q: "Eliminate y from: 2x + 3y = 12 and x − y = 1. What do you get?"
    q_ka: "ამოაგდე y: 2x + 3y = 12 და x − y = 1. რა მიიღება?"
    options: ["3x = 15", "5x = 15", "2x = 15", "x = 15"]
    options_ka: ["3x = 15", "5x = 15", "2x = 15", "x = 15"]
    answer: 1
---

<div class="lang-block lang-en">
<p>Two equations, two unknowns. The solution is the <strong>point where two lines intersect</strong>. You can see it on a graph, or find it algebraically with substitution or elimination — both arrive at the same answer.</p>
</div>

<div class="lang-block lang-ka">
<p>ორი განტოლება, ორი უცნობი. ამოხსნა არის <strong>წერტილი, სადაც ორი წრფე იკვეთება</strong>. შეგიძლია ნახო გრაფიკზე, ან იპოვო ალგებრულად ჩანაცვლებით ან შეკრებით — ორივე ერთ პასუხამდე მიდის.</p>
</div>

<div class="playground-block">
  <div class="playground-label" data-en="⚡ Interactive — change the equations and watch the intersection move" data-ka="⚡ ინტერაქტიული — შეცვალე განტოლებები და ნახე გადაკვეთის მოძრაობა">⚡ Interactive — change the equations and watch the intersection move</div>
  <p data-en="Two lines: y = m₁x + b₁ (purple) and y = m₂x + b₂ (pink). The gold dot is the intersection — the solution to the system. Drag m₁, b₁, m₂, b₂ to change the lines." data-ka="ორი წრფე: y = m₁x + b₁ (მეწამული) და y = m₂x + b₂ (ვარდისფერი). ოქროსფერი წერტილი გადაკვეთაა — სისტემის ამოხსნა. გადაათრიე m₁, b₁, m₂, b₂ წრფეების შესაცვლელად.">Two lines: y = m₁x + b₁ (purple) and y = m₂x + b₂ (pink). The gold dot is the intersection — the solution to the system. Drag <strong>m₁, b₁, m₂, b₂</strong> to change the lines.</p>
  <div id="calc-sys" style="width:100%;height:420px;border-radius:8px;overflow:hidden;"></div>
</div>

<div class="lang-block lang-en">
<div class="insight-box">
  <p><strong>Geometric meaning:</strong> Each equation is a line. Solving the system means finding the one point both lines share. If lines are parallel (same slope, different intercepts), there's no solution. If they're the same line, there are infinitely many.</p>
</div>

<h2>Method 1: Substitution</h2>

<p><strong>Solve:</strong> y = x + 2 and 2x + y = 11</p>

<p>Substitute y = x + 2 into the second equation: 2x + (x + 2) = 11 → 3x = 9 → <strong>x = 3</strong></p>

<p>Then y = 3 + 2 = <strong>5</strong>. Solution: (3, 5).</p>

<h2>Method 2: Elimination</h2>

<p><strong>Solve:</strong> 3x + 2y = 16 and x − 2y = 0</p>

<p>Add the equations: 4x = 16 → <strong>x = 4</strong></p>

<p>Back-substitute: 4 − 2y = 0 → y = 2. Solution: <strong>(4, 2)</strong>.</p>

<p>Elimination works best when the same variable has opposite coefficients. Multiply one or both equations to make that happen.</p>

<div class="try-it">
  <h3>Practice</h3>
  <p>Solve: 2x + y = 7 and x − y = 2.</p>
  <button class="reveal-btn">Show Answer</button>
  <div class="answer">
    <p>Add: 3x = 9 → x = 3</p>
    <p>Substitute: 2(3) + y = 7 → y = 1</p>
    <p>Solution: <strong>(3, 1)</strong></p>
  </div>
</div>
</div>

<div class="lang-block lang-ka">
<div class="insight-box">
  <p><strong>გეომეტრიული მნიშვნელობა:</strong> თითოეული განტოლება არის წრფე. სისტემის ამოხსნა ნიშნავს იმ ერთი წერტილის პოვნას, რომელსაც ორივე წრფე იზიარებს. თუ წრფეები პარალელურია (ერთი დახრილობა, განსხვავებული ჭრილები), ამოხსნა არ არის. თუ ერთი და იგივე წრფეა — უსასრულოდ ბევრი ამოხსნაა.</p>
</div>

<h2>მეთოდი 1: ჩანაცვლება</h2>

<p><strong>ამოხსენი:</strong> y = x + 2 და 2x + y = 11</p>

<p>ჩავსვათ y = x + 2 მეორე განტოლებაში: 2x + (x + 2) = 11 → 3x = 9 → <strong>x = 3</strong></p>

<p>შემდეგ y = 3 + 2 = <strong>5</strong>. ამოხსნა: (3, 5).</p>

<h2>მეთოდი 2: შეკრება (ელიმინაცია)</h2>

<p><strong>ამოხსენი:</strong> 3x + 2y = 16 და x − 2y = 0</p>

<p>შევკრიბოთ განტოლებები: 4x = 16 → <strong>x = 4</strong></p>

<p>ჩავსვათ უკან: 4 − 2y = 0 → y = 2. ამოხსნა: <strong>(4, 2)</strong>.</p>

<p>შეკრება (ელიმინაცია) კარგად მუშაობს, როდესაც ერთ ცვლადს საპირისპირო კოეფიციენტები აქვს. გაამრავლე ერთი ან ორივე განტოლება, რომ ეს მიაღწიო.</p>

<div class="try-it">
  <h3>სავარჯიშო</h3>
  <p>ამოხსენი: 2x + y = 7 და x − y = 2.</p>
  <button class="reveal-btn">პასუხის ჩვენება</button>
  <div class="answer">
    <p>შევკრიბოთ: 3x = 9 → x = 3</p>
    <p>ჩავსვათ: 2(3) + y = 7 → y = 1</p>
    <p>ამოხსნა: <strong>(3, 1)</strong></p>
  </div>
</div>
</div>

<script src="https://www.desmos.com/api/v1.7/calculator.js?apiKey=dcb31709b452b1cf9dc26972add0fda6"></script>
<script>
(function() {
  var c = Desmos.GraphingCalculator(document.getElementById('calc-sys'), {
    keypad: false, settingsMenu: false, zoomButtons: true, expressionsCollapsed: true
  });
  c.setMathBounds({ left: -5, right: 8, bottom: -4, top: 10 });
  c.setExpressions([
    { id: 'm1', latex: 'm_1=1',  sliderBounds: { min: -3, max: 3, step: 0.5 } },
    { id: 'b1', latex: 'b_1=2',  sliderBounds: { min: -5, max: 5, step: 0.5 } },
    { id: 'm2', latex: 'm_2=-2', sliderBounds: { min: -3, max: 3, step: 0.5 } },
    { id: 'b2', latex: 'b_2=8',  sliderBounds: { min: -5, max: 8, step: 0.5 } },
    { id: 'L1', latex: 'y=m_1 x+b_1', color: '#A78BFA', lineWidth: 2.5, label: 'Line 1' },
    { id: 'L2', latex: 'y=m_2 x+b_2', color: '#FF6B9D', lineWidth: 2.5, label: 'Line 2' },
    { id: 'xi', latex: 'x_i=(b_2-b_1)/(m_1-m_2)', hidden: true },
    { id: 'pt', latex: '(x_i, m_1 x_i+b_1)', color: '#FFD700', pointSize: 14,
                showLabel: true, label: 'intersection', labelSize: Desmos.LabelSizes.MEDIUM }
  ]);
})();
</script>
