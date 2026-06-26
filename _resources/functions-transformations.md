---
title: "Function Transformations — shifting, stretching, reflecting"
title-ka: "ფუნქციის გარდაქმნები — გადაადგილება, გაჭიმვა, ასახვა"
subtitle: "Once you know f(x), you know f(x+2), 3f(x), and f(−x) for free. Here's how."
subtitle-ka: "როგორც კი f(x) გეცოდინება, f(x+2), 3f(x) და f(−x) უფასოდ გეცოდინება. აი, როგორ."
topic: functions
topic-color: "#00C4FF"
interactive: true
tags: [IGCSE, IB, A-Level, Functions]
quiz:
  - q: "f(x − 3) shifts the graph:"
    q_ka: "f(x − 3) გრაფიკს გადაადგილებს:"
    options: ["Left by 3", "Right by 3", "Up by 3", "Down by 3"]
    options_ka: ["მარცხნივ 3-ით", "მარჯვნივ 3-ით", "ზემოთ 3-ით", "ქვემოთ 3-ით"]
    answer: 1
  - q: "−f(x) reflects the graph in the:"
    q_ka: "−f(x) გრაფიკს ასახავს:"
    options: ["y-axis", "origin", "x-axis", "line y = x"]
    options_ka: ["y-ღერძის მიმართ", "სათავის მიმართ", "x-ღერძის მიმართ", "y = x წრფის მიმართ"]
    answer: 2
  - q: "2f(x) does what to the graph?"
    q_ka: "2f(x) რას უკეთებს გრაფიკს?"
    options: ["Stretches horizontally by 2", "Stretches vertically by 2", "Shifts up by 2", "Compresses vertically by 2"]
    options_ka: ["ჰორიზონტალურად 2-ჯერ ჭიმავს", "ვერტიკალურად 2-ჯერ ჭიმავს", "ზემოთ 2-ით გადაადგილებს", "ვერტიკალურად შეჭყლეტს"]
    answer: 1
  - q: "f(2x) does what to the graph?"
    q_ka: "f(2x) რას უკეთებს გრაფიკს?"
    options: ["Stretches horizontally by 2", "Compresses horizontally by factor of 2", "Stretches vertically by 2", "Shifts right by 2"]
    options_ka: ["ჰორიზონტალურად 2-ჯერ ჭიმავს", "ჰორიზონტალურად 2 ფაქტორით შეჭყლეტს", "ვერტიკალურად 2-ჯერ ჭიმავს", "მარჯვნივ 2-ით გადაადგილებს"]
    answer: 1
  - q: "Which transformation moves f(x) = x² so its vertex is at (−1, 4)?"
    q_ka: "რომელი გარდაქმნა გადაადგილებს f(x) = x²-ს ისე, რომ წვერო (−1, 4)-ში აღმოჩნდეს?"
    options: ["f(x+1) + 4", "f(x−1) + 4", "f(x+1) − 4", "f(x) + 4"]
    options_ka: ["f(x+1) + 4", "f(x−1) + 4", "f(x+1) − 4", "f(x) + 4"]
    answer: 0
---

<div class="lang-block lang-en">
<p>Every function transformation follows a small set of rules. Know these rules, and you can sketch any transformed function without plotting a single point.</p>

<h2>The four transformations</h2>

<table>
  <tr><th>Rule</th><th>Effect</th></tr>
  <tr><td>f(x) + k</td><td>Shift <strong>up</strong> by k</td></tr>
  <tr><td>f(x) − k</td><td>Shift <strong>down</strong> by k</td></tr>
  <tr><td>f(x − h)</td><td>Shift <strong>right</strong> by h</td></tr>
  <tr><td>f(x + h)</td><td>Shift <strong>left</strong> by h</td></tr>
  <tr><td>af(x)</td><td>Vertical <strong>stretch</strong> by a</td></tr>
  <tr><td>f(bx)</td><td>Horizontal <strong>compression</strong> by b</td></tr>
  <tr><td>−f(x)</td><td>Reflect in x-axis</td></tr>
  <tr><td>f(−x)</td><td>Reflect in y-axis</td></tr>
</table>

<p><strong>The counterintuitive one:</strong> f(x − 3) shifts RIGHT (not left). Think of it as: x must be 3 bigger to get the same output as before.</p>
</div>

<div class="lang-block lang-ka">
<p>ყოველი ფუნქციის გარდაქმნა მცირე წესების ნაკრებს მიჰყვება. იცოდე ეს წესები, და შეძლებ ნებისმიერი გარდაქმნილი ფუნქციის ჩახაზვას ერთი წერტილის გარეშე.</p>

<h2>ოთხი გარდაქმნა</h2>

<table>
  <tr><th>წესი</th><th>ეფექტი</th></tr>
  <tr><td>f(x) + k</td><td>გადაადგილება <strong>ზემოთ</strong> k-ით</td></tr>
  <tr><td>f(x) − k</td><td>გადაადგილება <strong>ქვემოთ</strong> k-ით</td></tr>
  <tr><td>f(x − h)</td><td>გადაადგილება <strong>მარჯვნივ</strong> h-ით</td></tr>
  <tr><td>f(x + h)</td><td>გადაადგილება <strong>მარცხნივ</strong> h-ით</td></tr>
  <tr><td>af(x)</td><td>ვერტიკალური <strong>გაჭიმვა</strong> a-ჯერ</td></tr>
  <tr><td>f(bx)</td><td>ჰორიზონტალური <strong>შეჭყლეტა</strong> b-ჯერ</td></tr>
  <tr><td>−f(x)</td><td>ასახვა x-ღერძის მიმართ</td></tr>
  <tr><td>f(−x)</td><td>ასახვა y-ღერძის მიმართ</td></tr>
</table>

<p><strong>ინტუიციის საწინააღმდეგო:</strong> f(x − 3) გადაადგილებს მარჯვნივ (არა მარცხნივ). წარმოიდგინე: x-ს 3-ით მეტი უნდა იყოს, რომ ერთი და იგივე შედეგი მივიღოთ.</p>
</div>

<div class="playground-block">
  <div class="playground-label" data-en="⚡ Interactive — drag a, h, k to transform the parabola" data-ka="⚡ ინტერაქტიული — გადაათრიე a, h, k პარაბოლის გარდასაქმნელად">⚡ Interactive — drag a, h, k to transform the parabola</div>
  <p data-en="The function is y = a(x − h)² + k. Drag a (stretch), h (horizontal shift), k (vertical shift). The gold dot marks the vertex." data-ka="ფუნქცია: y = a(x − h)² + k. გადაათრიე a (გაჭიმვა), h (ჰორიზონტალური გადაადგილება), k (ვერტიკალური გადაადგილება). ოქროსფერი წერტილი წვეროს აღნიშნავს.">The function is y = a(x − h)² + k. Drag <strong>a</strong> (stretch), <strong>h</strong> (horizontal shift), <strong>k</strong> (vertical shift). The gold dot marks the vertex.</p>
  <div id="calc-trans" style="width:100%;height:420px;border-radius:8px;overflow:hidden;"></div>
</div>

<div class="lang-block lang-en">
<div class="insight-box">
  <p><strong>Memory trick for horizontal shifts:</strong> In f(x − h), the shift goes in the direction of the sign <em>inside</em> the bracket: (x − 3) shifts to the right (+3), and (x + 3) shifts to the left (−3). Counter to what you'd expect!</p>
</div>

<h2>Combining transformations</h2>

<p>Order matters: apply <strong>brackets first</strong> (horizontal), then <strong>multipliers</strong> (stretch), then <strong>additions outside</strong> (vertical).</p>

<p>Example: 3f(x − 2) + 1 means: shift right 2, then stretch vertically by 3, then shift up 1.</p>

<div class="try-it">
  <h3>Practice</h3>
  <p>Starting from y = √x, describe the transformations to get y = −2√(x + 4) − 1.</p>
  <button class="reveal-btn">Show Answer</button>
  <div class="answer">
    <p>1. (x + 4): shift left 4</p>
    <p>2. −2·(…): stretch vertically by 2, then reflect in x-axis</p>
    <p>3. … − 1: shift down 1</p>
  </div>
</div>
</div>

<div class="lang-block lang-ka">
<div class="insight-box">
  <p><strong>დამახსოვრების ხერხი ჰორიზონტალური გადაადგილებისთვის:</strong> f(x − h)-ში გადაადგილება ფრჩხილში ნიშნის მიმართულებით მიდის: (x − 3) მარჯვნივ (+3), (x + 3) მარცხნივ (−3). ინტუიციის საწინააღმდეგოა!</p>
</div>

<h2>გარდაქმნების გაერთიანება</h2>

<p>თანმიმდევრობა მნიშვნელოვანია: ჯერ <strong>ფრჩხილები</strong> (ჰორიზონტალური), შემდეგ <strong>გამამრავლებლები</strong> (გაჭიმვა), შემდეგ <strong>გარე შეკრება</strong> (ვერტიკალური).</p>

<p>მაგალითი: 3f(x − 2) + 1 ნიშნავს: გადაადგილება მარჯვნივ 2-ით, შემდეგ ვერტიკალური გაჭიმვა 3-ჯერ, შემდეგ გადაადგილება ზემოთ 1-ით.</p>

<div class="try-it">
  <h3>სავარჯიშო</h3>
  <p>y = √x-დან აღწერე გარდაქმნები y = −2√(x + 4) − 1-ის მისაღებად.</p>
  <button class="reveal-btn">პასუხის ჩვენება</button>
  <div class="answer">
    <p>1. (x + 4): გადაადგილება მარცხნივ 4-ით</p>
    <p>2. −2·(…): ვერტიკალური გაჭიმვა 2-ჯერ, შემდეგ ასახვა x-ღერძის მიმართ</p>
    <p>3. … − 1: გადაადგილება ქვემოთ 1-ით</p>
  </div>
</div>
</div>

<script src="https://www.desmos.com/api/v1.7/calculator.js?apiKey=dcb31709b452b1cf9dc26972add0fda6"></script>
<script>
(function() {
  var c = Desmos.GraphingCalculator(document.getElementById('calc-trans'), {
    keypad: false, settingsMenu: false, zoomButtons: true, expressionsCollapsed: true
  });
  c.setMathBounds({ left: -7, right: 7, bottom: -5, top: 10 });
  c.setExpressions([
    { id: 'a',  latex: 'a=1',  sliderBounds: { min: -3, max: 3, step: 0.25 } },
    { id: 'h',  latex: 'h=0',  sliderBounds: { min: -5, max: 5, step: 0.5 } },
    { id: 'k',  latex: 'k=0',  sliderBounds: { min: -5, max: 5, step: 0.5 } },
    { id: 'f',  latex: 'y=a(x-h)^{2}+k', color: '#00C4FF', lineWidth: 2.5 },
    { id: 'pt', latex: '(h,k)', color: '#FFD700', pointSize: 13,
                showLabel: true, label: 'vertex (h, k)' }
  ]);
})();
</script>
