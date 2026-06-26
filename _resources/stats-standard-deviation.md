---
title: "Standard Deviation — how spread out is your data?"
title-ka: "სტანდარტული გადახრა — რამდენად გაფანტულია შენი მონაცემები?"
subtitle: "The mean tells you the centre. Standard deviation tells you how far the data spreads from it."
subtitle-ka: "საშუალო გეუბნება ცენტრს. სტანდარტული გადახრა გეუბნება, რამდენად შორს ვრცელდება მონაცემები მისგან."
topic: statistics
topic-color: "#34D399"
interactive: true
tags: [IGCSE, IB, A-Level, Statistics]
quiz:
  - q: "Standard deviation measures:"
    q_ka: "სტანდარტული გადახრა ზომავს:"
    options: ["The average value", "The spread of data around the mean", "The largest value", "The middle value"]
    options_ka: ["საშუალო მნიშვნელობას", "მონაცემების გავრცელებას საშუალოს გარშემო", "ყველაზე დიდ მნიშვნელობას", "შუა მნიშვნელობას"]
    answer: 1
  - q: "Dataset A: {10, 10, 10}. Dataset B: {5, 10, 15}. Which has greater standard deviation?"
    q_ka: "მონაცემთა ნაკრები A: {10, 10, 10}. ნაკრები B: {5, 10, 15}. რომელს აქვს უფრო დიდი სტანდარტული გადახრა?"
    options: ["Dataset A", "Dataset B", "They're equal", "Cannot be determined"]
    options_ka: ["ნაკრები A", "ნაკრები B", "ტოლია", "ვერ განისაზღვრება"]
    answer: 1
  - q: "Variance is:"
    q_ka: "დისპერსია არის:"
    options: ["The square root of standard deviation", "Standard deviation squared", "The mean squared", "Sum of deviations"]
    options_ka: ["სტანდარტული გადახრის კვადრატული ფესვი", "სტანდარტული გადახრის კვადრატი", "საშუალოს კვადრატი", "გადახრების ჯამი"]
    answer: 1
  - q: "If every data point increases by 5, the standard deviation:"
    q_ka: "თუ ყოველი მონაცემი 5-ით გაიზარდა, სტანდარტული გადახრა:"
    options: ["Increases by 5", "Decreases by 5", "Stays the same", "Doubles"]
    options_ka: ["5-ით გაიზრდება", "5-ით შემცირდება", "უცვლელი დარჩება", "გაორმაგდება"]
    answer: 2
  - q: "If every data point is multiplied by 2, the standard deviation:"
    q_ka: "თუ ყოველი მონაცემი 2-ზე გამრავლდა, სტანდარტული გადახრა:"
    options: ["Doubles", "Stays the same", "Is halved", "Quadruples"]
    options_ka: ["გაორმაგდება", "უცვლელი დარჩება", "განახევრდება", "გაოთხმაგდება"]
    answer: 0
---

<div class="lang-block lang-en">
<p>Two datasets can have the same mean but look completely different. {50, 50, 50} and {10, 50, 90} both have mean 50 — but the second is wildly spread. Standard deviation measures that spread.</p>

<h2>The formula</h2>
<p><strong>σ = √[ (1/n) Σ(xᵢ − x̄)² ]</strong></p>
<p>In words: find each distance from the mean, square it, average those squares, take the square root.</p>
<p>The squaring ensures all deviations are positive (so they don't cancel). The square root brings units back to the original scale.</p>

<h2>Why squared and not absolute value?</h2>
<p>Squaring penalises outliers more heavily than absolute values. A point 6 away from the mean contributes 36 to the variance; a point 3 away contributes only 9. This makes standard deviation sensitive to extremes — which is usually what we want.</p>
</div>

<div class="lang-block lang-ka">
<p>ორ მონაცემთა ნაკრებს შეიძლება ერთნაირი საშუალო ჰქონდეს, მაგრამ სრულიად განსხვავებული გამოიყურებოდეს. {50, 50, 50} და {10, 50, 90} ორივეს საშუალო 50-ია — მაგრამ მეორე ბევრად უფრო გაფანტულია. სტანდარტული გადახრა ზომავს ამ გაფანტულობას.</p>

<h2>ფორმულა</h2>
<p><strong>σ = √[ (1/n) Σ(xᵢ − x̄)² ]</strong></p>
<p>სიტყვებით: იპოვე საშუალოდან მანძილი თითოეულისთვის, ამაღლე კვადრატში, გაანგარიშე ამ კვადრატების საშუალო, ამოიღე კვადრატული ფესვი.</p>
<p>კვადრატში ამაღლება უზრუნველყოფს ყველა გადახრის დადებითობას (რომ არ გაუქმდეს). კვადრატული ფესვი ერთეულებს თავდაპირველ მასშტაბს უბრუნებს.</p>

<h2>რატომ კვადრატი და არა მოდული?</h2>
<p>კვადრატი მოდულზე უფრო მძიმედ სჯის გამონაკლისებს. საშუალოდან 6-ით დაშორებული წერტილი 36-ს უმატებს დისპერსიას; 3-ით დაშორებული — მხოლოდ 9-ს. ეს სტანდარტულ გადახრას უკიდურესობების მიმართ მგრძნობიარე ხდის — რაც ჩვეულებრივ სასურველია.</p>
</div>

<div class="playground-block">
  <div class="playground-label" data-en="⚡ Interactive — move the data points and watch standard deviation update" data-ka="⚡ ინტერაქტიული — გადაათრიე მონაცემთა წერტილები და დაუყურე სტანდარტული გადახრის განახლებას">⚡ Interactive — move the data points and watch standard deviation update</div>
  <p data-en="Five points on the number line. Drag x₁ through x₅ and watch σ recalculate. Notice: spreading the points out increases σ. Bunching them together decreases it. The mean (gold dot) stays central." data-ka="ხუთი წერტილი რიცხვის ხაზზე. გადაათრიე x₁-დან x₅-მდე და დაუყურე σ-ს გადათვლას. შეამჩნიე: წერტილების გაფანტვა ზრდის σ-ს. ერთგან თავმოყრა ამცირებს. საშუალო (ოქროსფერი წერტილი) ცენტრში რჩება.">Five points on the number line. Drag <strong>x₁</strong> through <strong>x₅</strong> and watch σ recalculate. Notice: spreading the points out increases σ. Bunching them together decreases it. The mean (gold dot) stays central.</p>
  <div id="calc-sd" style="width:100%;height:380px;border-radius:8px;overflow:hidden;"></div>
</div>

<div class="lang-block lang-en">
<div class="insight-box">
  <p><strong>Population vs. sample:</strong> Use n in the denominator for a population (all values known). Use n − 1 for a sample estimate (Bessel's correction — slightly inflates σ to account for the fact that a sample underestimates spread). Your GDC will have both: σₙ and σₙ₋₁.</p>
</div>

<h2>The effect of linear transformations</h2>
<p>If Y = aX + b:</p>
<ul>
<li>Mean: ȳ = ax̄ + b</li>
<li>Standard deviation: σ_Y = |a|σ_X</li>
</ul>
<p>Adding a constant shifts the data without changing spread. Multiplying scales the spread.</p>

<div class="try-it">
  <h3>Practice</h3>
  <p>Find the standard deviation of: 2, 4, 4, 4, 5, 5, 7, 9.</p>
  <button class="reveal-btn">Show Answer</button>
  <div class="answer">
    <p>Mean = (2+4+4+4+5+5+7+9)/8 = 40/8 = 5</p>
    <p>Deviations²: 9, 1, 1, 1, 0, 0, 4, 16</p>
    <p>Variance = 32/8 = 4</p>
    <p>σ = √4 = <strong>2</strong></p>
  </div>
</div>
</div>

<div class="lang-block lang-ka">
<div class="insight-box">
  <p><strong>გენერალური ერთობლიობა vs. ნიმუში:</strong> გამოიყენე n მნიშვნელი გენერალური ერთობლიობისთვის (ყველა მნიშვნელობა ცნობილია). გამოიყენე n − 1 ნიმუშის შეფასებისთვის (ბეზელის კორექცია — ოდნავ ზრდის σ-ს, რადგან ნიმუში გავრცელებას ამცირებს). შენს GDC-ს ექნება ორივე: σₙ და σₙ₋₁.</p>
</div>

<h2>წრფივი გარდაქმნების ეფექტი</h2>
<p>თუ Y = aX + b:</p>
<ul>
<li>საშუალო: ȳ = ax̄ + b</li>
<li>სტანდარტული გადახრა: σ_Y = |a|σ_X</li>
</ul>
<p>კონსტანტის მიმატება მონაცემებს ანაცვლებს გავრცელების შეუცვლელად. გამრავლება მასშტაბირებს გავრცელებას.</p>

<div class="try-it">
  <h3>სავარჯიშო</h3>
  <p>იპოვე სტანდარტული გადახრა: 2, 4, 4, 4, 5, 5, 7, 9.</p>
  <button class="reveal-btn">პასუხის ჩვენება</button>
  <div class="answer">
    <p>საშუალო = (2+4+4+4+5+5+7+9)/8 = 40/8 = 5</p>
    <p>გადახრების²: 9, 1, 1, 1, 0, 0, 4, 16</p>
    <p>დისპერსია = 32/8 = 4</p>
    <p>σ = √4 = <strong>2</strong></p>
  </div>
</div>
</div>

<script src="https://www.desmos.com/api/v1.7/calculator.js?apiKey=dcb31709b452b1cf9dc26972add0fda6"></script>
<script>
(function() {
  var c = Desmos.GraphingCalculator(document.getElementById('calc-sd'), {
    keypad: false, settingsMenu: false, zoomButtons: true, expressionsCollapsed: true
  });
  c.setMathBounds({ left: -1, right: 12, bottom: -1.5, top: 2.5 });
  c.setExpressions([
    { id: 'x1', latex: 'x_1=2',  sliderBounds: { min: 0, max: 10, step: 0.5 } },
    { id: 'x2', latex: 'x_2=4',  sliderBounds: { min: 0, max: 10, step: 0.5 } },
    { id: 'x3', latex: 'x_3=5',  sliderBounds: { min: 0, max: 10, step: 0.5 } },
    { id: 'x4', latex: 'x_4=7',  sliderBounds: { min: 0, max: 10, step: 0.5 } },
    { id: 'x5', latex: 'x_5=9',  sliderBounds: { min: 0, max: 10, step: 0.5 } },
    { id: 'mu', latex: '\\bar{x}=(x_1+x_2+x_3+x_4+x_5)/5', hidden: true },
    { id: 'sg', latex: '\\sigma=\\sqrt{((x_1-\\bar{x})^{2}+(x_2-\\bar{x})^{2}+(x_3-\\bar{x})^{2}+(x_4-\\bar{x})^{2}+(x_5-\\bar{x})^{2})/5}', hidden: false, label: 'σ' },
    { id: 'p1', latex: '(x_1,0)', color: '#34D399', pointSize: 12 },
    { id: 'p2', latex: '(x_2,0)', color: '#34D399', pointSize: 12 },
    { id: 'p3', latex: '(x_3,0)', color: '#34D399', pointSize: 12 },
    { id: 'p4', latex: '(x_4,0)', color: '#34D399', pointSize: 12 },
    { id: 'p5', latex: '(x_5,0)', color: '#34D399', pointSize: 12 },
    { id: 'mn', latex: '(\\bar{x},0)', color: '#FFD700', pointSize: 14, showLabel: true, label: 'mean' }
  ]);
})();
</script>
