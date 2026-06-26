---
title: "The Chain Rule — derivatives of composed functions"
title-ka: "წარმოებულის წესი — შედგენილი ფუნქციების წარმოებულები"
subtitle: "When one function is wrapped inside another, the chain rule is how you differentiate the result."
subtitle-ka: "როდესაც ერთი ფუნქცია მეორეში არის ჩადგმული, სწორედ ჯაჭვის წესი გეხმარება შედეგის დიფერენცირებაში."
topic: calculus
topic-color: "#FF6B9D"
interactive: true
tags: [IB, A-Level, Edexcel, Calculus]
quiz:
  - q: "What is the derivative of sin(x²)?"
    q_ka: "რა არის sin(x²)-ის წარმოებული?"
    options: ["cos(x²)", "2x·cos(x²)", "2cos(x)", "cos(2x)"]
    options_ka: ["cos(x²)", "2x·cos(x²)", "2cos(x)", "cos(2x)"]
    answer: 1
  - q: "The chain rule says: if h(x) = f(g(x)), then h'(x) ="
    q_ka: "ჯაჭვის წესი ამბობს: თუ h(x) = f(g(x)), მაშინ h'(x) ="
    options: ["f'(x)·g'(x)", "f'(g(x))·g'(x)", "f(g'(x))", "f'(g(x)) + g'(x)"]
    options_ka: ["f'(x)·g'(x)", "f'(g(x))·g'(x)", "f(g'(x))", "f'(g(x)) + g'(x)"]
    answer: 1
  - q: "What is d/dx of (3x + 1)⁵?"
    q_ka: "რა არის d/dx (3x + 1)⁵?"
    options: ["5(3x+1)⁴", "15(3x+1)⁴", "5(3x+1)⁴·3x", "(3x+1)⁵·5"]
    options_ka: ["5(3x+1)⁴", "15(3x+1)⁴", "5(3x+1)⁴·3x", "(3x+1)⁵·5"]
    answer: 1
  - q: "Which function requires the chain rule to differentiate?"
    q_ka: "რომელი ფუნქციის დიფერენცირებისთვის საჭიროა ჯაჭვის წესი?"
    options: ["x³ + 2x", "3x·sin(x)", "e^(x²)", "x² + sin(x)"]
    options_ka: ["x³ + 2x", "3x·sin(x)", "e^(x²)", "x² + sin(x)"]
    answer: 2
  - q: "The derivative of e^(kx) is:"
    q_ka: "e^(kx)-ის წარმოებულია:"
    options: ["e^(kx)", "k·e^(kx)", "ke^k", "x·e^(kx-1)"]
    options_ka: ["e^(kx)", "k·e^(kx)", "ke^k", "x·e^(kx-1)"]
    answer: 1
---

<div class="lang-block lang-en">
<p>Every time you see a function <strong>inside</strong> another function, you need the chain rule. sin(x²), e^(3x), (x²+1)⁷ — these are all compositions. You can't just differentiate the outside and forget the inside exists.</p>

<p><strong>The chain rule:</strong> if h(x) = f(g(x)), then h′(x) = f′(g(x)) · g′(x).</p>

<p>In plain language: differentiate the <strong>outside</strong> (leaving the inside unchanged), then <strong>multiply by the derivative of the inside</strong>.</p>

<h2>Playground — see the chain rule in action</h2>
</div>

<div class="lang-block lang-ka">
<p>ყოველ ჯერზე, როდესაც ხედავ ერთ ფუნქციას <strong>მეორის შიგნით</strong>, გჭირდება ჯაჭვის წესი. sin(x²), e^(3x), (x²+1)⁷ — ეს ყველა შედგენილი ფუნქციაა. ვერ იმოქმედებ მხოლოდ გარეთ მდებარეზე და ვერ დაივიწყებ შიდა ნაწილის არსებობას.</p>

<p><strong>ჯაჭვის წესი:</strong> თუ h(x) = f(g(x)), მაშინ h′(x) = f′(g(x)) · g′(x).</p>

<p>მარტივ ენაზე: დააწარმოებ <strong>გარე</strong> ფუნქციას (შიდა უცვლელი დარჩება), შემდეგ <strong>გამრავლე შიდა ფუნქციის წარმოებულზე</strong>.</p>

<h2>სათამაშო — ნახე ჯაჭვის წესი მოქმედებაში</h2>
</div>

<div class="playground-block">
  <div class="playground-label" data-en="⚡ Interactive — adjust k and watch the tangent line change slope" data-ka="⚡ ინტერაქტიული — შეცვალე k და დააკვირდი, როგორ იცვლება მხები ხაზის დახრილობა">⚡ Interactive — adjust k and watch the tangent line change slope</div>
  <p data-en="Drag <strong>k</strong> to change the function. The derivative of sin(kx) is k·cos(kx). Notice how steeper oscillations produce steeper tangent lines — that's the chain rule multiplying by k." data-ka="გადაიტანე <strong>k</strong> ფუნქციის შესაცვლელად. sin(kx)-ის წარმოებულია k·cos(kx). შეამჩნიე, როგორ წარმოქმნის უფრო ციცაბო რხევები უფრო ციცაბო მხებ ხაზებს — ეს სწორედ ჯაჭვის წესია, k-ზე გამრავლება.">Drag <strong>k</strong> to change the function. The derivative of sin(kx) is k·cos(kx). Notice how steeper oscillations produce steeper tangent lines — that's the chain rule multiplying by k.</p>
  <div id="calc-chain" style="width:100%;height:420px;border-radius:8px;overflow:hidden;"></div>
</div>

<div class="lang-block lang-en">
<div class="insight-box">
  <p><strong>How to spot a composition:</strong> Ask "is there a function inside a function?" sin(x²) → yes, x² is inside sin. (2x+5)⁴ → yes, 2x+5 is inside the power. e^(x³) → yes, x³ is inside e. Each one needs the chain rule.</p>
</div>

<h2>Step-by-step examples</h2>

<p><strong>Example 1:</strong> Differentiate (3x + 1)⁵</p>
<ul>
  <li>Outer function: u⁵ → derivative 5u⁴</li>
  <li>Inner function: u = 3x + 1 → derivative 3</li>
  <li>Chain rule: 5(3x+1)⁴ · <strong>3</strong> = <strong>15(3x+1)⁴</strong></li>
</ul>

<p><strong>Example 2:</strong> Differentiate e^(x²)</p>
<ul>
  <li>Outer: eᵘ → derivative eᵘ</li>
  <li>Inner: u = x² → derivative 2x</li>
  <li>Chain rule: e^(x²) · <strong>2x</strong> = <strong>2x·e^(x²)</strong></li>
</ul>

<p><strong>Example 3:</strong> Differentiate sin(4x)</p>
<ul>
  <li>Outer: sin(u) → cos(u)</li>
  <li>Inner: u = 4x → derivative 4</li>
  <li>Chain rule: cos(4x) · <strong>4</strong> = <strong>4cos(4x)</strong></li>
</ul>

<div class="try-it">
  <h3>Practice</h3>
  <p>Find the derivative of cos(x³ + 2).</p>
  <button class="reveal-btn">Show Answer</button>
  <div class="answer">
    <p>Outer: cos(u) → −sin(u)</p>
    <p>Inner: x³ + 2 → 3x²</p>
    <p>Chain rule: <strong>−3x²·sin(x³ + 2)</strong></p>
  </div>
</div>
</div>

<div class="lang-block lang-ka">
<div class="insight-box">
  <p><strong>როგორ ამოიცნო შედგენილი ფუნქცია:</strong> იკითხე "არის ფუნქცია ფუნქციის შიგნით?" sin(x²) → კი, x² sin-ის შიგნითაა. (2x+5)⁴ → კი, 2x+5 ხარისხის შიგნითაა. e^(x³) → კი, x³ e-ის შიგნითაა. თითოეულს ჭირდება ჯაჭვის წესი.</p>
</div>

<h2>ნაბიჯ-ნაბიჯ მაგალითები</h2>

<p><strong>მაგალითი 1:</strong> დააწარმოებ (3x + 1)⁵</p>
<ul>
  <li>გარე ფუნქცია: u⁵ → წარმოებული 5u⁴</li>
  <li>შიდა ფუნქცია: u = 3x + 1 → წარმოებული 3</li>
  <li>ჯაჭვის წესი: 5(3x+1)⁴ · <strong>3</strong> = <strong>15(3x+1)⁴</strong></li>
</ul>

<p><strong>მაგალითი 2:</strong> დააწარმოებ e^(x²)</p>
<ul>
  <li>გარე: eᵘ → წარმოებული eᵘ</li>
  <li>შიდა: u = x² → წარმოებული 2x</li>
  <li>ჯაჭვის წესი: e^(x²) · <strong>2x</strong> = <strong>2x·e^(x²)</strong></li>
</ul>

<p><strong>მაგალითი 3:</strong> დააწარმოებ sin(4x)</p>
<ul>
  <li>გარე: sin(u) → cos(u)</li>
  <li>შიდა: u = 4x → წარმოებული 4</li>
  <li>ჯაჭვის წესი: cos(4x) · <strong>4</strong> = <strong>4cos(4x)</strong></li>
</ul>

<div class="try-it">
  <h3>სავარჯიშო</h3>
  <p>იპოვე cos(x³ + 2)-ის წარმოებული.</p>
  <button class="reveal-btn">პასუხის ჩვენება</button>
  <div class="answer">
    <p>გარე: cos(u) → −sin(u)</p>
    <p>შიდა: x³ + 2 → 3x²</p>
    <p>ჯაჭვის წესი: <strong>−3x²·sin(x³ + 2)</strong></p>
  </div>
</div>
</div>

<script src="https://www.desmos.com/api/v1.7/calculator.js?apiKey=dcb31709b452b1cf9dc26972add0fda6"></script>
<script>
(function() {
  var c = Desmos.GraphingCalculator(document.getElementById('calc-chain'), {
    keypad: false, settingsMenu: false, zoomButtons: true, expressionsCollapsed: true
  });
  c.setMathBounds({ left: -2.5, right: 2.5, bottom: -2, top: 2 });
  c.setExpressions([
    { id: 'k',  latex: 'k=1', sliderBounds: { min: 0.5, max: 4, step: 0.5 } },
    { id: 'f',  latex: 'f(x)=\\sin(kx)', color: '#FF6B9D', lineWidth: 2.5 },
    { id: 'df', latex: "f'(x)=k\\cos(kx)", color: '#A78BFA', lineWidth: 2, lineStyle: Desmos.Styles.DASHED },
    { id: 'a',  latex: 'a=0.8', sliderBounds: { min: -2, max: 2, step: 0.05 } },
    { id: 'pt', latex: '(a, f(a))', color: '#FF6B9D', pointSize: 10, showLabel: true, label: 'point' },
    { id: 'tan',latex: "f(a)+f'(a)\\cdot(x-a)", color: '#FFD700', lineWidth: 1.5 }
  ]);
})();
</script>
