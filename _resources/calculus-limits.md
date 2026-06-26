---
title: "What does a limit actually mean?"
title-ka: "რას ნიშნავს ლიმიტი სინამდვილეში?"
subtitle: "Zoom in close enough and the mystery disappears."
subtitle-ka: "საკმარისად მიუახლოვდი და საიდუმლო გაქრება."
topic: calculus
topic-color: "#FF6B9D"
interactive: true
tags: [IB, A-Level, Edexcel, Calculus]
quiz:
  - q: "What does lim(x→2) of x² equal?"
    q_ka: "რას უდრის lim(x→2) x²-ისთვის?"
    options: ["2", "4", "8", "undefined"]
    options_ka: ["2", "4", "8", "განუსაზღვრელია"]
    answer: 1
  - q: "A function has a limit at x=3 even if it is not defined there. True or false?"
    q_ka: "ფუნქციას შეიძლება ჰქონდეს ლიმიტი x=3-ზე, თუნდაც იქ განუსაზღვრელი იყოს. მართალია თუ მცდარი?"
    options: ["True", "False", "Only if the function is continuous", "Only for polynomials"]
    options_ka: ["მართალია", "მცდარია", "მხოლოდ თუ ფუნქცია უწყვეტია", "მხოლოდ პოლინომებისთვის"]
    answer: 0
  - q: "What is lim(x→0) of sin(x)/x?"
    q_ka: "რას უდრის lim(x→0) sin(x)/x?"
    options: ["0", "infinity", "1", "undefined"]
    options_ka: ["0", "უსასრულობა", "1", "განუსაზღვრელია"]
    answer: 2
  - q: "If lim(x→a) f(x) = L, what does this mean?"
    q_ka: "თუ lim(x→a) f(x) = L, რას ნიშნავს ეს?"
    options: ["f(a) = L", "f approaches L as x approaches a", "f is defined at a", "f equals L everywhere"]
    options_ka: ["f(a) = L", "f უახლოვდება L-ს, როდესაც x უახლოვდება a-ს", "f განსაზღვრულია a-ში", "f ყველგან უდრის L-ს"]
    answer: 1
  - q: "Which of these is the formal name for the process that defines derivatives?"
    q_ka: "რომელია წარმოებულის განმსაზღვრელი პროცესის ოფიციალური სახელი?"
    options: ["Integration", "Substitution", "Taking a limit", "Factoring"]
    options_ka: ["ინტეგრირება", "შეცვლა", "ლიმიტის აღება", "დამამიჟება"]
    answer: 2
---

<div class="lang-block lang-en">
<p>A limit answers a deceptively simple question: <strong>what value does a function approach as you get closer and closer to a point?</strong> Not the value at the point — the value it's heading toward.</p>

<p>This distinction matters enormously. A function can approach a perfectly clear value at x = 2 even if it has a hole exactly at x = 2. The limit doesn't care about the destination — only the journey.</p>

<h2>Playground — zoom in and watch the gap close</h2>

<p>The function below has a hole at x = 2 (it's undefined there). But watch what happens as you drag <strong>x</strong> toward 2 from either side. The function value gets closer and closer to a specific number.</p>
</div>

<div class="lang-block lang-ka">
<p>ლიმიტი პასუხობს მარტივ, მაგრამ მზაკვრულ კითხვას: <strong>რა მნიშვნელობას უახლოვდება ფუნქცია, როცა სულ უფრო მეტად ვუახლოვდებით გარკვეულ წერტილს?</strong> არა მნიშვნელობა წერტილში — არამედ მნიშვნელობა, რომლისკენაც მიისწრაფვის.</p>

<p>ეს განსხვავება უზარმაზარი მნიშვნელობისაა. ფუნქციას შეიძლება ჰქონდეს სავსებით ნათელი მნიშვნელობა x = 2-თან, თუნდაც x = 2-ში ხვრელი (hole) ჰქონდეს. ლიმიტი არ ზრუნავს დანიშნულებაზე — მხოლოდ მიახლოების პროცესზე.</p>

<h2>სათამაშო — მიახლოვდი და დააკვირდი, როგორ ვიწროვდება სხვაობა</h2>

<p>ქვემოთ ნაჩვენები ფუნქციას x = 2-ში ხვრელი აქვს (იქ განუსაზღვრელია). მაგრამ დააკვირდი, რა ხდება, როდესაც <strong>x</strong>-ს ათრევ 2-სკენ ორივე მხრიდან. ფუნქციის მნიშვნელობა სულ უფრო ახლოს მიდის კონკრეტულ რიცხვთან.</p>
</div>

<div class="playground-block">
  <div class="playground-label" data-en="⚡ Interactive — drag x toward 2" data-ka="⚡ ინტერაქტიული — გადაიტანე x 2-სკენ">⚡ Interactive — drag x toward 2</div>
  <p data-en="Watch the y-value approach a limit even though the function is undefined at x = 2." data-ka="დააკვირდი, როგორ უახლოვდება y-ის მნიშვნელობა ლიმიტს, თუნდაც ფუნქცია x = 2-ში განუსაზღვრელი იყოს.">Watch the y-value approach a limit even though the function is undefined at x = 2.</p>
  <div id="calc-limit" style="width:100%;height:400px;border-radius:8px;overflow:hidden;"></div>
</div>

<div class="lang-block lang-en">
<div class="insight-box">
  <p><strong>What you observed:</strong> As x → 2, f(x) → 4. We write this as lim(x→2) f(x) = 4. The hole at x = 2 is irrelevant to the limit — the limit is about the approach, not the arrival.</p>
</div>

<h2>Left and right limits</h2>

<p>A limit only exists if the function approaches the same value from both sides. Drag x toward 2 from the left (x &lt; 2) and from the right (x &gt; 2). If they meet at the same height — the limit exists.</p>

<h2>Why limits matter</h2>

<p>Every derivative is secretly a limit. When we write f′(x) = 2x for f(x) = x², we're really saying: the limit of (f(x+h) − f(x))/h as h → 0 equals 2x. The derivative <em>is</em> a limit. Understanding limits is understanding the foundation of all of calculus.</p>

<div class="try-it">
  <h3>Practice</h3>
  <p>Evaluate: lim(x→3) of (x² − 9)/(x − 3)</p>
  <p><em>Hint: factor the numerator first.</em></p>
  <button class="reveal-btn">Show Answer</button>
  <div class="answer">
    <p>x² − 9 = (x − 3)(x + 3), so the fraction becomes (x + 3). At x → 3: <strong>limit = 6</strong>.</p>
    <p>The original function is undefined at x = 3 (division by zero), but the limit is perfectly well-defined.</p>
  </div>
</div>
</div>

<div class="lang-block lang-ka">
<div class="insight-box">
  <p><strong>რაც დააკვირდი:</strong> როდესაც x → 2, f(x) → 4. ამას ვწერთ ასე: lim(x→2) f(x) = 4. ხვრელი x = 2-ში ლიმიტისთვის მნიშვნელოვანი არ არის — ლიმიტი მიახლოების შესახებაა, არა მოსვლის.</p>
</div>

<h2>მარცხენა და მარჯვენა ლიმიტები</h2>

<p>ლიმიტი მხოლოდ მაშინ არსებობს, თუ ფუნქცია ორივე მხრიდან ერთსა და იმავე მნიშვნელობას უახლოვდება. გადაიტანე x 2-სკენ მარცხნიდან (x &lt; 2) და მარჯვნიდან (x &gt; 2). თუ ორივე ერთსა და იმავე სიმაღლეზე მიდიან — ლიმიტი არსებობს.</p>

<h2>რატომ არის ლიმიტი მნიშვნელოვანი</h2>

<p>ყოველი წარმოებული სინამდვილეში ლიმიტია. როდესაც ვწერთ f′(x) = 2x, f(x) = x²-სთვის, სინამდვილეში ვამბობთ: (f(x+h) − f(x))/h-ის ლიმიტი h → 0-ზე უდრის 2x-ს. წარმოებული <em>არის</em> ლიმიტი. ლიმიტების გაგება ნიშნავს მთელი კალკულუსის საფუძვლის გაგებას.</p>

<div class="try-it">
  <h3>სავარჯიშო</h3>
  <p>გამოთვალე: lim(x→3) (x² − 9)/(x − 3)</p>
  <p><em>მინიშნება: ჯერ მრიცხველი გამამდე.</em></p>
  <button class="reveal-btn">პასუხის ჩვენება</button>
  <div class="answer">
    <p>x² − 9 = (x − 3)(x + 3), ამიტომ წილადი გახდება (x + 3). x → 3-ზე: <strong>ლიმიტი = 6</strong>.</p>
    <p>საწყისი ფუნქცია x = 3-ში განუსაზღვრელია (ნულზე გაყოფა), მაგრამ ლიმიტი სავსებით კარგად არის განსაზღვრული.</p>
  </div>
</div>
</div>

<script src="https://www.desmos.com/api/v1.7/calculator.js?apiKey=dcb31709b452b1cf9dc26972add0fda6"></script>
<script>
(function() {
  var c = Desmos.GraphingCalculator(document.getElementById('calc-limit'), {
    keypad: false, settingsMenu: false, zoomButtons: true
  });
  c.setMathBounds({ left: -1, right: 5, bottom: -1, top: 8 });
  c.setExpressions([
    { id: 'f',    latex: 'f(x)=\\frac{x^{2}-4}{x-2}',   color: '#A78BFA', lineWidth: 2.5 },
    { id: 'hole', latex: '(2,4)',                          color: '#1a1a2e', pointStyle: Desmos.Styles.OPEN, pointSize: 12 },
    { id: 'a',    latex: 'a=0.5',                          sliderBounds: { min: -0.5, max: 1.9, step: 0.05 } },
    { id: 'pt',   latex: '(a+2, f(a+2))',                  color: '#FF6B9D', pointSize: 10, showLabel: true, label: 'x approaching 2' }
  ]);
})();
</script>
