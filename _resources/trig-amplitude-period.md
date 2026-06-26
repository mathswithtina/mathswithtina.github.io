---
title: "Amplitude, Period, and Phase Shift"
title-ka: "ამპლიტუდა, პერიოდი და ფაზური წანაცვლება"
subtitle: "y = A sin(Bx + C) + D encodes the entire shape of a wave in four numbers."
subtitle-ka: "y = A sin(Bx + C) + D ოთხ რიცხვში კოდავს ტალღის მთელ ფორმას."
topic: trigonometry
topic-color: "#22D3EE"
interactive: true
tags: [IGCSE, IB, A-Level, Trigonometry]
quiz:
  - q: "In y = 3sin(2x), the amplitude is:"
    q_ka: "y = 3sin(2x)-ში ამპლიტუდა არის:"
    options: ["2", "3", "6", "1/2"]
    options_ka: ["2", "3", "6", "1/2"]
    answer: 1
  - q: "The period of y = sin(2x) is:"
    q_ka: "y = sin(2x)-ის პერიოდი არის:"
    options: ["4π", "2π", "π", "π/2"]
    options_ka: ["4π", "2π", "π", "π/2"]
    answer: 2
  - q: "y = sin(x) + 4 shifts the graph:"
    q_ka: "y = sin(x) + 4 გრაფიკს ანაცვლებს:"
    options: ["Right by 4", "Left by 4", "Up by 4", "Down by 4"]
    options_ka: ["მარჯვნივ 4-ით", "მარცხნივ 4-ით", "ზევით 4-ით", "ქვევით 4-ით"]
    answer: 2
  - q: "The phase shift of y = sin(x − π/3) is:"
    q_ka: "y = sin(x − π/3)-ის ფაზური წანაცვლება არის:"
    options: ["π/3 to the left", "π/3 to the right", "π/3 upward", "−π/3"]
    options_ka: ["π/3 მარცხნივ", "π/3 მარჯვნივ", "π/3 ზევით", "−π/3"]
    answer: 1
  - q: "What is the period formula for y = sin(Bx)?"
    q_ka: "y = sin(Bx)-ის პერიოდის ფორმულა?"
    options: ["2π × B", "B/2π", "2π/B", "π/B"]
    options_ka: ["2π × B", "B/2π", "2π/B", "π/B"]
    answer: 2
---

<div class="lang-block lang-en">
<p>A sine or cosine function can be stretched, compressed, shifted, and reflected — but the shape never changes. The general form <strong>y = A sin(Bx + C) + D</strong> captures every possible transformation in four parameters.</p>

<h2>The four parameters</h2>

<table>
<thead><tr><th>Parameter</th><th>Name</th><th>Effect</th></tr></thead>
<tbody>
<tr><td>A</td><td>Amplitude</td><td>Height from midline to peak (|A| = amplitude)</td></tr>
<tr><td>B</td><td>Frequency</td><td>Determines period: T = 2π/B</td></tr>
<tr><td>C</td><td>Phase shift</td><td>Horizontal shift: shift = −C/B</td></tr>
<tr><td>D</td><td>Vertical shift</td><td>Moves midline up/down</td></tr>
</tbody>
</table>
</div>

<div class="lang-block lang-ka">
<p>სინუსური ან კოსინუსური ფუნქცია შეიძლება გაიჭიმოს, შეიკუმშოს, გადაიწიოს და ასახულ იქნეს — მაგრამ ფორმა არასდროს იცვლება. ზოგადი სახე <strong>y = A sin(Bx + C) + D</strong> ოთხ პარამეტრში ასახავს ყველა შესაძლო ტრანსფორმაციას.</p>

<h2>ოთხი პარამეტრი</h2>

<table>
<thead><tr><th>პარამეტრი</th><th>სახელი</th><th>ეფექტი</th></tr></thead>
<tbody>
<tr><td>A</td><td>ამპლიტუდა</td><td>სიმაღლე შუა ხაზიდან მწვერვალამდე (|A| = ამპლიტუდა)</td></tr>
<tr><td>B</td><td>სიხშირე</td><td>განსაზღვრავს პერიოდს: T = 2π/B</td></tr>
<tr><td>C</td><td>ფაზური წანაცვლება</td><td>ჰორიზონტალური წანაცვლება: წანაცვლება = −C/B</td></tr>
<tr><td>D</td><td>ვერტიკალური წანაცვლება</td><td>შუა ხაზს ზევით/ქვევით ანაცვლებს</td></tr>
</tbody>
</table>
</div>

<div class="playground-block">
  <div class="playground-label" data-en="⚡ Interactive — drag A, B, C, D to reshape the wave" data-ka="⚡ ინტერაქტიული — გადაათრიე A, B, C, D ტალღის გარდასახვისთვის">⚡ Interactive — drag A, B, C, D to reshape the wave</div>
  <p data-en="The cyan wave is y = A·sin(Bx + C) + D. Drag each slider and watch the wave transform. Can you match it to y = −2sin(πx − 1) + 3?" data-ka="ცისფერი ტალღა არის y = A·sin(Bx + C) + D. გადაათრიე თითოეული სლაიდერი და დაინახე, როგორ გარდაისახება ტალღა. შეგიძლია მოარგო y = −2sin(πx − 1) + 3-ს?">The cyan wave is y = A·sin(Bx + C) + D. Drag each slider and watch the wave transform. Can you match it to y = −2sin(πx − 1) + 3?</p>
  <div id="calc-wave" style="width:100%;height:440px;border-radius:8px;overflow:hidden;"></div>
</div>

<div class="lang-block lang-en">
<div class="insight-box">
  <p><strong>Reading the graph:</strong> Amplitude = (max − min)/2. Period = the horizontal length of one complete cycle. To find B: T = 2π/B → B = 2π/T. Phase shift = how far right the wave has moved from y = A sin(Bx).</p>
</div>

<h2>Worked example</h2>
<p><strong>Write the equation of a wave with amplitude 3, period π, shifted right by π/4, midline at y = 1.</strong></p>
<ul>
<li>A = 3</li>
<li>T = π → B = 2π/T = 2</li>
<li>Phase shift right π/4 → C = −Bπ/4 = −π/2</li>
<li>D = 1</li>
</ul>
<p><strong>y = 3 sin(2x − π/2) + 1</strong></p>

<div class="try-it">
  <h3>Practice</h3>
  <p>For y = 4sin(3x + π) − 2, state the amplitude, period, phase shift, and midline.</p>
  <button class="reveal-btn">Show Answer</button>
  <div class="answer">
    <p>Amplitude = |4| = <strong>4</strong></p>
    <p>Period = 2π/3</p>
    <p>Phase shift = −C/B = −π/3 (shifted <strong>left π/3</strong>)</p>
    <p>Midline: y = <strong>−2</strong></p>
  </div>
</div>
</div>

<div class="lang-block lang-ka">
<div class="insight-box">
  <p><strong>გრაფიკის კითხვა:</strong> ამპლიტუდა = (მაქს − მინ)/2. პერიოდი = ერთი სრული ციკლის ჰორიზონტალური სიგრძე. B-ს საპოვნელად: T = 2π/B → B = 2π/T. ფაზური წანაცვლება = რამდენად გადაიწია ტალღა y = A sin(Bx)-სთან შედარებით.</p>
</div>

<h2>ამოხსნილი მაგალითი</h2>
<p><strong>ჩაწერე ტალღის განტოლება ამპლიტუდით 3, პერიოდით π, მარჯვნივ π/4-ით წანაცვლებული, შუა ხაზი y = 1-ზე.</strong></p>
<ul>
<li>A = 3</li>
<li>T = π → B = 2π/T = 2</li>
<li>ფაზური წანაცვლება მარჯვნივ π/4 → C = −Bπ/4 = −π/2</li>
<li>D = 1</li>
</ul>
<p><strong>y = 3 sin(2x − π/2) + 1</strong></p>

<div class="try-it">
  <h3>სავარჯიშო</h3>
  <p>y = 4sin(3x + π) − 2-ისთვის განსაზღვრე ამპლიტუდა, პერიოდი, ფაზური წანაცვლება და შუა ხაზი.</p>
  <button class="reveal-btn">პასუხის ჩვენება</button>
  <div class="answer">
    <p>ამპლიტუდა = |4| = <strong>4</strong></p>
    <p>პერიოდი = 2π/3</p>
    <p>ფაზური წანაცვლება = −C/B = −π/3 (<strong>მარცხნივ π/3-ით</strong> წანაცვლებული)</p>
    <p>შუა ხაზი: y = <strong>−2</strong></p>
  </div>
</div>
</div>

<script src="https://www.desmos.com/api/v1.7/calculator.js?apiKey=dcb31709b452b1cf9dc26972add0fda6"></script>
<script>
(function() {
  var c = Desmos.GraphingCalculator(document.getElementById('calc-wave'), {
    keypad: false, settingsMenu: false, zoomButtons: true, expressionsCollapsed: true
  });
  c.setMathBounds({ left: -5, right: 5, bottom: -6, top: 8 });
  c.setExpressions([
    { id: 'A',  latex: 'A=2',    sliderBounds: { min: -4, max: 4, step: 0.5 } },
    { id: 'B',  latex: 'B=1',    sliderBounds: { min: 0.25, max: 3, step: 0.25 } },
    { id: 'C',  latex: 'C=0',    sliderBounds: { min: -3.14, max: 3.14, step: 0.1 } },
    { id: 'D',  latex: 'D=0',    sliderBounds: { min: -4, max: 4, step: 0.5 } },
    { id: 'f',  latex: 'y=A\\sin(Bx+C)+D', color: '#22D3EE', lineWidth: 2.5 },
    { id: 'ml', latex: 'y=D', color: '#888', lineWidth: 1.5, lineStyle: Desmos.Styles.DASHED, label: 'midline' }
  ]);
})();
</script>
