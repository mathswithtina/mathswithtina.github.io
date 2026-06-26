---
title: "Optimization — finding the best value"
title-ka: "ოპტიმიზაცია — საუკეთესო მნიშვნელობის პოვნა"
subtitle: "Max profit. Min cost. Shortest path. All of these are calculus problems in disguise."
subtitle-ka: "მაქსიმალური მოგება. მინიმალური ხარჯი. ყველაზე მოკლე გზა. ეს ყველა კალკულუსის ამოცანაა ნიღბის ქვეშ."
topic: calculus
topic-color: "#FF6B9D"
interactive: true
tags: [IB, A-Level, Edexcel, Calculus]
quiz:
  - q: "At a local maximum, the derivative f'(x) equals:"
    q_ka: "ლოკალური მაქსიმუმის წერტილში წარმოებული f'(x) უდრის:"
    options: ["1", "-1", "0", "f(x)"]
    options_ka: ["1", "-1", "0", "f(x)"]
    answer: 2
  - q: "How do you confirm a critical point is a maximum (not minimum)?"
    q_ka: "როგორ დაადასტურებ, რომ კრიტიკული წერტილი მაქსიმუმია (და არა მინიმუმი)?"
    options: ["f'(x) > 0 there", "f''(x) < 0 there", "f(x) = 0 there", "f'(x) = 1 there"]
    options_ka: ["f'(x) > 0 იქ", "f''(x) < 0 იქ", "f(x) = 0 იქ", "f'(x) = 1 იქ"]
    answer: 1
  - q: "A box has square base with side x and no lid. Surface area = x² + 4xh = 100. To maximize volume V = x²h, you should:"
    q_ka: "ყუთს აქვს კვადრატული ძირი x გვერდით და სახური არ აქვს. ზედაპირის ფართობი = x² + 4xh = 100. მოცულობის V = x²h მაქსიმიზებისთვის უნდა:"
    options: ["Maximize x only", "Express h in terms of x, then differentiate V", "Set x = h", "Minimize h"]
    options_ka: ["მაქსიმიზება მხოლოდ x-ის", "გამოხატო h x-ის მეშვეობით, შემდეგ V-ს დაწარმოებ", "დააყენო x = h", "მინიმიზება h-ს"]
    answer: 1
  - q: "The second derivative test: if f'(a) = 0 and f''(a) > 0, then x = a is a:"
    q_ka: "მეორე წარმოებულის ტესტი: თუ f'(a) = 0 და f''(a) > 0, მაშინ x = a არის:"
    options: ["Local maximum", "Local minimum", "Inflection point", "Global maximum"]
    options_ka: ["ლოკალური მაქსიმუმი", "ლოკალური მინიმუმი", "გარდამტეხი წერტილი", "გლობალური მაქსიმუმი"]
    answer: 1
  - q: "When does a function have no local extrema on an open interval?"
    q_ka: "როდის არ აქვს ფუნქციას ლოკალური ექსტრემუმები ღია ინტერვალზე?"
    options: ["When it is always increasing or always decreasing", "When it is a polynomial", "When f'(x) = 0", "When it crosses zero"]
    options_ka: ["როდესაც ყოველთვის იზრდება ან ყოველთვის მცირდება", "როდესაც პოლინომია", "როდესაც f'(x) = 0", "როდესაც ნულს კვეთს"]
    answer: 0
---

<div class="lang-block lang-en">
<p>The most powerful application of derivatives is finding <strong>optimal values</strong> — the maximum or minimum of a function. Every time someone asks "what should x be to make this as large/small as possible?", calculus is the answer.</p>

<p>The strategy is always the same:</p>
<ol>
  <li>Write a formula for what you're optimizing (profit, area, distance, etc.)</li>
  <li>Take the derivative and set it equal to zero</li>
  <li>Check whether it's a max or min using the second derivative</li>
</ol>

<h2>Playground — find the maximum of a parabola</h2>
</div>

<div class="lang-block lang-ka">
<p>წარმოებულების ყველაზე ძლიერი გამოყენება არის <strong>ოპტიმალური მნიშვნელობების</strong> პოვნა — ფუნქციის მაქსიმუმი ან მინიმუმი. ყოველ ჯერზე, როცა ვინმე კითხავს "რა უნდა იყოს x, რომ ეს რაც შეიძლება დიდი/პატარა გახდეს?", პასუხი კალკულუსში არის.</p>

<p>სტრატეგია ყოველთვის ერთი და იგივეა:</p>
<ol>
  <li>დაწერე ფორმულა იმის შესახებ, რასაც ოპტიმიზებ (მოგება, ფართობი, მანძილი და ა.შ.)</li>
  <li>ამოიღე წარმოებული და გაუტოლე ნულს</li>
  <li>შეამოწმე არის მაქსიმუმი თუ მინიმუმი მეორე წარმოებულის გამოყენებით</li>
</ol>

<h2>სათამაშო — იპოვე პარაბოლის მაქსიმუმი</h2>
</div>

<div class="playground-block">
  <div class="playground-label" data-en="⚡ Interactive — drag a and b to reshape the parabola" data-ka="⚡ ინტერაქტიული — გადაიტანე a და b პარაბოლის ფორმის შესაცვლელად">⚡ Interactive — drag a and b to reshape the parabola</div>
  <p data-en="The function f(x) = −ax² + bx. The red dot shows the maximum. Drag <strong>a</strong> and <strong>b</strong> to see how the maximum moves. Notice: maximum always at x = b/(2a)." data-ka="ფუნქცია f(x) = −ax² + bx. წითელი წერტილი მაქსიმუმს აჩვენებს. გადაიტანე <strong>a</strong> და <strong>b</strong> და ნახე, როგორ მოძრაობს მაქსიმუმი. ყურადღება: მაქსიმუმი ყოველთვის x = b/(2a)-ზეა.">The function f(x) = −ax² + bx. The red dot shows the maximum. Drag <strong>a</strong> and <strong>b</strong> to see how the maximum moves. Notice: maximum always at x = b/(2a).</p>
  <div id="calc-opt" style="width:100%;height:420px;border-radius:8px;overflow:hidden;"></div>
</div>

<div class="lang-block lang-en">
<div class="insight-box">
  <p><strong>Critical points rule:</strong> Set f′(x) = 0. Solve for x. These x-values are candidates for maxima or minima. Use f″(x): if f″ &lt; 0, it's a maximum (curving down). If f″ &gt; 0, it's a minimum (curving up).</p>
</div>

<h2>A worked example</h2>

<p><strong>Problem:</strong> A farmer has 200 m of fence and wants to enclose a rectangle next to a wall (one side doesn't need fence). What dimensions maximize the area?</p>

<p>Let the sides be x (parallel to wall) and y (perpendicular). Then:</p>
<ul>
  <li>Constraint: x + 2y = 200, so x = 200 − 2y</li>
  <li>Area: A = x · y = (200 − 2y) · y = 200y − 2y²</li>
  <li>Derivative: A′ = 200 − 4y = 0 → <strong>y = 50</strong></li>
  <li>Then x = 200 − 100 = <strong>100</strong></li>
  <li>Max area = 100 × 50 = <strong>5000 m²</strong></li>
</ul>

<p>Check: A″ = −4 &lt; 0, confirming it's a maximum.</p>

<h2>The two-step pattern</h2>

<p>Almost every optimization problem follows this pattern:</p>
<ol>
  <li><strong>Constraint</strong> → eliminate one variable</li>
  <li><strong>Differentiate</strong> the objective → set = 0 → solve</li>
</ol>

<div class="try-it">
  <h3>Practice</h3>
  <p>A revenue function is R(x) = 120x − 3x². Find the number of units x that maximizes revenue.</p>
  <button class="reveal-btn">Show Answer</button>
  <div class="answer">
    <p>R′(x) = 120 − 6x = 0 → x = 20</p>
    <p>R″(x) = −6 &lt; 0, so x = 20 is a maximum.</p>
    <p>Maximum revenue = 120(20) − 3(400) = 2400 − 1200 = <strong>$1200</strong></p>
  </div>
</div>
</div>

<div class="lang-block lang-ka">
<div class="insight-box">
  <p><strong>კრიტიკული წერტილების წესი:</strong> გაუტოლე f′(x) = 0. ამოხსენი x-ისთვის. ეს x-ის მნიშვნელობები კანდიდატებია მაქსიმუმებისა ან მინიმუმებისთვის. გამოიყენე f″(x): თუ f″ &lt; 0, ეს მაქსიმუმია (ქვევით მოხრილი). თუ f″ &gt; 0, ეს მინიმუმია (ზევით მოხრილი).</p>
</div>

<h2>ამოხსნილი მაგალითი</h2>

<p><strong>ამოცანა:</strong> მეფუტკრეს აქვს 200 მ ღობე და სურს კედელთან მდებარე მართკუთხა ნაკვეთის შემოღობვა (ერთ მხარეს ღობე არ სჭირდება). რა ზომები მაქსიმალურს გახდის ფართობს?</p>

<p>დავარქვათ გვერდებს x (კედელის პარალელური) და y (პერპენდიკულარული). მაშინ:</p>
<ul>
  <li>შეზღუდვა: x + 2y = 200, ამიტომ x = 200 − 2y</li>
  <li>ფართობი: A = x · y = (200 − 2y) · y = 200y − 2y²</li>
  <li>წარმოებული: A′ = 200 − 4y = 0 → <strong>y = 50</strong></li>
  <li>შემდეგ x = 200 − 100 = <strong>100</strong></li>
  <li>მაქსიმალური ფართობი = 100 × 50 = <strong>5000 მ²</strong></li>
</ul>

<p>შემოწმება: A″ = −4 &lt; 0, რაც ადასტურებს, რომ ეს მაქსიმუმია.</p>

<h2>ორსაფეხურიანი შაბლონი</h2>

<p>თითქმის ყოველ ოპტიმიზაციის ამოცანას ამ შაბლონი აქვს:</p>
<ol>
  <li><strong>შეზღუდვა</strong> → ამოიღე ერთი ცვლადი</li>
  <li><strong>დაწარმოებ</strong> მიზნის ფუნქციას → გაუტოლე ნულს → ამოხსენი</li>
</ol>

<div class="try-it">
  <h3>სავარჯიშო</h3>
  <p>შემოსავლის ფუნქციაა R(x) = 120x − 3x². იპოვე ერთეულების რაოდენობა x, რომელიც შემოსავალს მაქსიმალურს გახდის.</p>
  <button class="reveal-btn">პასუხის ჩვენება</button>
  <div class="answer">
    <p>R′(x) = 120 − 6x = 0 → x = 20</p>
    <p>R″(x) = −6 &lt; 0, ამიტომ x = 20 მაქსიმუმია.</p>
    <p>მაქსიმალური შემოსავალი = 120(20) − 3(400) = 2400 − 1200 = <strong>1200 ₾</strong></p>
  </div>
</div>
</div>

<script src="https://www.desmos.com/api/v1.7/calculator.js?apiKey=dcb31709b452b1cf9dc26972add0fda6"></script>
<script>
(function() {
  var c = Desmos.GraphingCalculator(document.getElementById('calc-opt'), {
    keypad: false, settingsMenu: false, zoomButtons: true, expressionsCollapsed: true
  });
  c.setMathBounds({ left: -1, right: 6, bottom: -2, top: 8 });
  c.setExpressions([
    { id: 'a',  latex: 'a=1',   sliderBounds: { min: 0.3, max: 3, step: 0.1 } },
    { id: 'b',  latex: 'b=4',   sliderBounds: { min: 1, max: 8, step: 0.5 } },
    { id: 'f',  latex: 'f(x)=-ax^{2}+bx', color: '#FF6B9D', lineWidth: 2.5 },
    { id: 'xm', latex: 'x_{m}=b/(2a)', hidden: true },
    { id: 'pt', latex: '(x_{m}, f(x_{m}))', color: '#FFD700', pointSize: 13,
                showLabel: true, label: 'maximum', labelSize: Desmos.LabelSizes.LARGE }
  ]);
})();
</script>
