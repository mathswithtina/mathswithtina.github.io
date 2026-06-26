---
title: "Riemann Sums — building area from rectangles"
title-ka: "რიმანის ჯამები — ფართობის აგება მართკუთხედებით"
subtitle: "How do you find the area under a curve? Start with rectangles. Use more. Watch what happens."
subtitle-ka: "როგორ ვიპოვოთ ფართობი მრუდის ქვეშ? დავიწყოთ მართკუთხედებით. მივიყენოთ მეტი. ვნახოთ, რა მოხდება."
topic: calculus
topic-color: "#FF6B9D"
interactive: true
tags: [IB, A-Level, Calculus]
quiz:
  - q: "What does a Riemann sum approximate?"
    q_ka: "რას ამოწმებს რიმანის ჯამი?"
    options: ["The derivative of a function", "The area under a curve", "The slope at a point", "The maximum of a function"]
    options_ka: ["ფუნქციის წარმოებულს", "ფართობს მრუდის ქვეშ", "დახრილობას წერტილში", "ფუნქციის მაქსიმუმს"]
    answer: 1
  - q: "As the number of rectangles increases, the Riemann sum becomes:"
    q_ka: "როდესაც მართკუთხედების რაოდენობა იზრდება, რიმანის ჯამი ხდება:"
    options: ["Less accurate", "More accurate", "Undefined", "Equal to the derivative"]
    options_ka: ["ნაკლებად ზუსტი", "უფრო ზუსტი", "განუსაზღვრელი", "წარმოებულის ტოლი"]
    answer: 1
  - q: "What is the exact integral of x from 0 to 4?"
    q_ka: "რას უდრის x-ის ზუსტი ინტეგრალი 0-დან 4-მდე?"
    options: ["4", "8", "16", "2"]
    options_ka: ["4", "8", "16", "2"]
    answer: 1
  - q: "Which notation represents the definite integral of f(x) from a to b?"
    q_ka: "რომელი ნოტაცია გამოხატავს f(x)-ის განსაზღვრულ ინტეგრალს a-დან b-მდე?"
    options: ["f'(b) - f'(a)", "sum of f(x)", "integral from a to b of f(x)dx", "lim f(x)"]
    options_ka: ["f'(b) - f'(a)", "f(x)-ის ჯამი", "f(x)dx ინტეგრალი a-დან b-მდე", "lim f(x)"]
    answer: 2
  - q: "The width of each rectangle in a Riemann sum with n rectangles over [0,4] is:"
    q_ka: "რიმანის ჯამში, n მართკუთხედით [0,4]-ზე, თითოეული მართკუთხედის სიგანეა:"
    options: ["n/4", "4n", "4/n", "1/n"]
    options_ka: ["n/4", "4n", "4/n", "1/n"]
    answer: 2
---

<div class="lang-block lang-en">
<p>The integral is the area under a curve. But a curve isn't a rectangle — so how do you measure it exactly? The answer starts with something imperfect: <strong>rectangles</strong>.</p>

<p>Slice the area under the curve into thin vertical strips. Each strip is approximately a rectangle. Add the areas of all the rectangles. The result is close — but not exact. Now make the rectangles thinner and thinner. More and more of them. Watch what happens.</p>

<h2>Playground — drag the slider to add more rectangles</h2>
</div>

<div class="lang-block lang-ka">
<p>ინტეგრალი არის ფართობი მრუდის ქვეშ. მაგრამ მრუდი მართკუთხედი არ არის — მაშ, როგორ გავზომოთ ის ზუსტად? პასუხი რაღაც არასრულყოფილიდან იწყება: <strong>მართკუთხედები</strong>.</p>

<p>გავჭრათ ფართობი მრუდის ქვეშ თხელ ვერტიკალურ ზოლებად. თითოეული ზოლი დაახლოებით მართკუთხედია. შევკრიბოთ ყველა მართკუთხედის ფართობი. შედეგი ახლოსაა — მაგრამ ზუსტი არ არის. ახლა გავხადოთ მართკუთხედები სულ უფრო თხელი. სულ უფრო მეტი მათი. ვნახოთ, რა ხდება.</p>

<h2>სათამაშო — გადაიტანე სლაიდერი მეტი მართკუთხედის დასამატებლად</h2>
</div>

<div class="playground-block">
  <div class="playground-label" data-en="⚡ Interactive — drag n to add more rectangles" data-ka="⚡ ინტერაქტიული — გადაიტანე n მეტი მართკუთხედის დასამატებლად">⚡ Interactive — drag n to add more rectangles</div>
  <p data-en="The function is f(x) = x². Drag <strong>n</strong> and watch the blue rectangles fill the area under the curve. The sum gets closer to the true integral as n increases." data-ka="ფუნქციაა f(x) = x². გადაიტანე <strong>n</strong> და დააკვირდი, როგორ ავსებს ლურჯი მართკუთხედები ფართობს მრუდის ქვეშ. ჯამი სულ უახლოვდება ნამდვილ ინტეგრალს n-ის ზრდასთან ერთად.">The function is f(x) = x². Drag <strong>n</strong> and watch the blue rectangles fill the area under the curve. The sum gets closer to the true integral as n increases.</p>
  <div id="calc-riemann" style="width:100%;height:450px;border-radius:8px;overflow:hidden;"></div>
</div>

<div class="lang-block lang-en">
<div class="insight-box">
  <p><strong>The key insight:</strong> As n → ∞ (infinitely many, infinitely thin rectangles), the Riemann sum becomes the <em>exact</em> area. This limit is the definite integral. The symbol ∫ is literally an elongated S for "sum."</p>
</div>

<h2>The notation</h2>

<p>The definite integral from a to b of f(x) is written:</p>

<p><strong>∫ₐᵇ f(x) dx</strong></p>

<p>The "dx" is a reminder that each rectangle has width dx — a tiny slice of x. The integral sums infinitely many of these infinitely thin slices.</p>

<h2>Computing the exact area</h2>

<p>For f(x) = x² from 0 to 3, the Riemann sum with n rectangles gives:
(1/n³) × Σk² = (1/n³) × n(n+1)(2n+1)/6</p>

<p>As n → ∞, this → 1/3 × 2 × 3³ = <strong>9</strong>. You can verify: ∫₀³ x² dx = [x³/3]₀³ = 27/3 = 9.</p>

<div class="try-it">
  <h3>Practice</h3>
  <p>Evaluate ∫₀² (2x + 1) dx using the antiderivative.</p>
  <button class="reveal-btn">Show Answer</button>
  <div class="answer">
    <p>Antiderivative of 2x + 1 is x² + x.</p>
    <p>[x² + x]₀² = (4 + 2) − (0) = <strong>6</strong></p>
  </div>
</div>
</div>

<div class="lang-block lang-ka">
<div class="insight-box">
  <p><strong>მთავარი დასკვნა:</strong> როდესაც n → ∞ (უსასრულოდ ბევრი, უსასრულოდ თხელი მართკუთხედი), რიმანის ჯამი ხდება <em>ზუსტი</em> ფართობი. ეს ლიმიტია განსაზღვრული ინტეგრალი. სიმბოლო ∫ სიტყვასიტყვით გახანგრძლივებული S-ია, "ჯამი"-ს (sum) პირველი ასო.</p>
</div>

<h2>ნოტაცია</h2>

<p>f(x)-ის განსაზღვრული ინტეგრალი a-დან b-მდე იწერება ასე:</p>

<p><strong>∫ₐᵇ f(x) dx</strong></p>

<p>"dx" გვახსენებს, რომ თითოეული მართკუთხედის სიგანეა dx — x-ის მცირე ნაჭერი. ინტეგრალი სხვა არაფერია, თუ არა ასეთი უსასრულოდ ბევრი უსასრულოდ თხელი ნაჭრის ჯამი.</p>

<h2>ზუსტი ფართობის გამოთვლა</h2>

<p>f(x) = x²-სთვის 0-დან 3-მდე, n მართკუთხედიანი რიმანის ჯამი გვაძლევს:
(1/n³) × Σk² = (1/n³) × n(n+1)(2n+1)/6</p>

<p>n → ∞-ზე ეს → 1/3 × 2 × 3³ = <strong>9</strong>. შეამოწმე: ∫₀³ x² dx = [x³/3]₀³ = 27/3 = 9.</p>

<div class="try-it">
  <h3>სავარჯიშო</h3>
  <p>გამოთვალე ∫₀² (2x + 1) dx ანტიწარმოებულის გამოყენებით.</p>
  <button class="reveal-btn">პასუხის ჩვენება</button>
  <div class="answer">
    <p>2x + 1-ის ანტიწარმოებულია x² + x.</p>
    <p>[x² + x]₀² = (4 + 2) − (0) = <strong>6</strong></p>
  </div>
</div>
</div>

<script src="https://www.desmos.com/api/v1.7/calculator.js?apiKey=dcb31709b452b1cf9dc26972add0fda6"></script>
<script>
(function() {
  var c = Desmos.GraphingCalculator(document.getElementById('calc-riemann'), {
    keypad: false, settingsMenu: false, zoomButtons: true, expressionsCollapsed: true
  });
  c.setMathBounds({ left: -0.3, right: 3.3, bottom: -0.5, top: 10 });
  c.setExpressions([
    { id: 'f',    latex: 'f(x)=x^{2}',        color: '#FF6B9D', lineWidth: 2.5 },
    { id: 'n',    latex: 'n=4',                sliderBounds: { min: 1, max: 50, step: 1 } },
    { id: 'dx',   latex: 'w=3/n',              hidden: true },
    { id: 'rects',latex: '0\\le y\\le f(\\left\\lfloor x/w\\right\\rfloor w+w/2)\\left\\{0\\le x\\le3\\right\\}',
                  color: '#FF6B9D', lineOpacity: 0.3, fillOpacity: 0.25 },
    { id: 'sum',  latex: 'S=w\\sum_{k=0}^{n-1}f(kw+w/2)', hidden: false }
  ]);
})();
</script>
