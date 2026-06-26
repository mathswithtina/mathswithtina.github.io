---
title: "What even IS a derivative?"
title-ka: "რა არის წარმოებული?"
subtitle: "Zoom in on any curve until it looks straight — and suddenly everything makes sense."
subtitle-ka: "მიუახლოვდი ნებისმიერ მრუდს საკმარისად და ის სწორი გახდება — სწორედ მაშინ ყველაფერი ნათელი ხდება."
topic: calculus
topic-color: "#FF6B9D"
interactive: true
tags: [IB, Edexcel, A-Level, Calculus]
---

<div class="lang-block lang-en">
<p>You've probably been told that a derivative gives you the <em>slope of a curve</em>. But curves don't have a single slope — they're curvy. So what does that actually mean? The answer lives in one powerful idea: <strong>zoom in far enough on any smooth curve, and it starts to look like a straight line.</strong></p>
</div>

<div class="lang-block lang-ka">
<p>შესაძლოა გითხრეს, რომ წარმოებული გაძლევს <em>მრუდის დახრილობას</em>. მაგრამ მრუდებს ერთი მუდმივი დახრა არ აქვთ — ისინი ხომ მრუდია. მაშ, რას ნიშნავს ეს? პასუხი ერთ ძლიერ იდეაში მდგომარეობს: <strong>საკმარისად მიუახლოვდი ნებისმიერ გლუვ მრუდს და ის სწორი ხაზის მსგავსი გახდება.</strong></p>
</div>

<div class="playground-block">
  <div class="playground-label" data-en="⚡ Interactive — Drag the slider" data-ka="⚡ ინტერაქტიული — გადაიტანე სლაიდერი">⚡ Interactive — Drag the slider</div>
  <p data-en="Move <strong>a</strong> along the x-axis and watch the tangent line and slope update live." data-ka="გადაიტანე <strong>a</strong> x-ღერძის გასწვრივ და დააკვირდი, როგორ იცვლება მხები ხაზი და დახრილობა.">Move <strong>a</strong> along the x-axis and watch the tangent line and slope update live.</p>
  <div id="calc1" style="width:100%;height:420px;border-radius:8px;overflow:hidden;"></div>
</div>

<div class="lang-block lang-en">
<div class="insight-box">
  <p><strong>What you just discovered:</strong> At x = 2 the slope is 4. At x = 3 it's 6. At x = −1 it's −2. The pattern? The slope at any point x is always <strong>2x</strong>. That function — 2x — is the derivative of x². Written as: f′(x) = 2x.</p>
</div>

<h2>Why is the slope exactly 2x?</h2>

<p>Here's the key idea. Pick any point x on the curve and a nearby point x + h. The slope of the line connecting them (called a <strong>secant line</strong>) is:</p>

$$\frac{f(x+h) - f(x)}{h} = \frac{(x+h)^2 - x^2}{h} = \frac{2xh + h^2}{h} = 2x + h$$

<p>Now let h shrink toward zero. The secant line becomes the tangent line, and the slope becomes exactly <strong>2x</strong>. This limiting process is the definition of the derivative.</p>

<h2>Playground 2 — try a wilder function</h2>

<p>Now let's try <strong>f(x) = sin(x)</strong>. The derivative is not as obvious — but you can <em>feel</em> it from the playground. Notice: where the curve peaks (x = π/2), the tangent is flat — slope = 0. Where it crosses zero going upward, the slope is at its steepest.</p>
</div>

<div class="lang-block lang-ka">
<div class="insight-box">
  <p><strong>რაც ახლა აღმოაჩინე:</strong> x = 2-ზე დახრილობა არის 4. x = 3-ზე — 6. x = −1-ზე — −2. შაბლონი? ნებისმიერ წერტილ x-ზე დახრილობა ყოველთვის <strong>2x</strong>-ის ტოლია. ეს ფუნქცია — 2x — x²-ის წარმოებულია. იწერება ასე: f′(x) = 2x.</p>
</div>

<h2>რატომ არის დახრილობა ზუსტად 2x?</h2>

<p>აი, მთავარი იდეა. ავირჩიოთ ნებისმიერი წერტილი x მრუდზე და მასთან ახლო წერტილი x + h. ამ ორ წერტილს შემაერთებელი მისკვნის (secant) ხაზის დახრილობაა:</p>

$$\frac{f(x+h) - f(x)}{h} = \frac{(x+h)^2 - x^2}{h} = \frac{2xh + h^2}{h} = 2x + h$$

<p>ახლა გავაკლოთ h ნულისკენ. მისკვნის ხაზი გადაიქცევა მხებ ხაზად, და დახრილობა ხდება ზუსტად <strong>2x</strong>. ეს ზღვრული პროცესი სწორედ წარმოებულის განმარტებაა.</p>

<h2>სათამაშო 2 — სცადე უფრო რთული ფუნქცია</h2>

<p>ახლა სცადოთ <strong>f(x) = sin(x)</strong>. წარმოებული ისეთი აშკარა არ არის — მაგრამ სათამაშოდან შეგიძლია <em>გრძნობით</em> გაიგო. ყურადღება მიაქციე: სადაც მრუდი პიკს აღწევს (x = π/2), მხები ბრტყელია — დახრილობა = 0. სადაც ზევით მიმართული კვეთს ნულს, დახრილობა ყველაზე დიდია.</p>
</div>

<div class="playground-block">
  <div class="playground-label" data-en="⚡ Interactive — sin(x) explorer" data-ka="⚡ ინტერაქტიული — sin(x)-ის მკვლევარი">⚡ Interactive — sin(x) explorer</div>
  <p data-en="Drag <strong>a</strong> to explore how the slope of sin(x) changes. Can you guess what f′(x) is?" data-ka="გადაიტანე <strong>a</strong> და დააკვირდი, როგორ იცვლება sin(x)-ის დახრილობა. გამოიცანი, რა არის f′(x)?">Drag <strong>a</strong> to explore how the slope of sin(x) changes. Can you guess what f′(x) is?</p>
  <div id="calc2" style="width:100%;height:420px;border-radius:8px;overflow:hidden;"></div>
</div>

<div class="lang-block lang-en">
<div class="insight-box">
  <p><strong>Spoiler:</strong> The derivative of sin(x) is cos(x). Check it — at x = 0 the slope is 1, which equals cos(0) = 1. At x = π/2 the slope is 0, which equals cos(π/2) = 0. The playground was already telling you the answer.</p>
</div>

<h2>The big picture</h2>

<p>A derivative is not a single number. It's a <strong>new function</strong> that tells you the slope of the original at every single point. For every x you plug in, you get back the slope there.</p>

<ul>
  <li>f(x) = x² → f′(x) = 2x</li>
  <li>f(x) = x³ → f′(x) = 3x²</li>
  <li>f(x) = sin(x) → f′(x) = cos(x)</li>
</ul>

<p>The pattern for powers — multiply by the exponent, reduce the exponent by one — is called the <strong>Power Rule</strong>, and it's one of the most useful tools in all of calculus.</p>

<div class="try-it">
  <h3>Try it yourself — IB/A-Level style</h3>
  <p>The function f(x) = x³ − 3x passes through the point (2, 2).</p>
  <p><strong>(a)</strong> Find f′(x).</p>
  <p><strong>(b)</strong> Find the gradient of the curve at x = 2.</p>
  <p><strong>(c)</strong> Write the equation of the tangent at (2, 2).</p>
  <button class="reveal-btn">Show Answer</button>
  <div class="answer">
    <p><strong>(a)</strong> f′(x) = 3x² − 3</p>
    <p><strong>(b)</strong> f′(2) = 3(4) − 3 = <strong>9</strong></p>
    <p><strong>(c)</strong> Tangent: y − 2 = 9(x − 2)  →  <strong>y = 9x − 16</strong></p>
  </div>
</div>
</div>

<div class="lang-block lang-ka">
<div class="insight-box">
  <p><strong>სპოილერი:</strong> sin(x)-ის წარმოებული არის cos(x). შეამოწმე — x = 0-ზე დახრილობა 1-ია, რაც უდრის cos(0) = 1-ს. x = π/2-ზე დახრილობა 0-ია, რაც უდრის cos(π/2) = 0-ს. სათამაშო უკვე პასუხს გეუბნებოდა.</p>
</div>

<h2>ზოგადი სურათი</h2>

<p>წარმოებული ერთი რიცხვი არ არის. ეს არის <strong>ახალი ფუნქცია</strong>, რომელიც გეუბნება საწყისი ფუნქციის დახრილობას ყოველ წერტილში. ყოველი x-ისთვის, რომელსაც შეიყვანთ, მიიღებ იმ წერტილის დახრილობას.</p>

<ul>
  <li>f(x) = x² → f′(x) = 2x</li>
  <li>f(x) = x³ → f′(x) = 3x²</li>
  <li>f(x) = sin(x) → f′(x) = cos(x)</li>
</ul>

<p>ხარისხების შაბლონი — გაამრავლე ხარისხის მაჩვენებელზე, შეამცირე ხარისხი ერთით — ეწოდება <strong>ხარისხის წესი</strong> (Power Rule), და ეს კალკულუსში ყველაზე სასარგებლო ინსტრუმენტებიდან ერთ-ერთია.</p>

<div class="try-it">
  <h3>სავარჯიშო — IB/A-Level სტილი</h3>
  <p>ფუნქცია f(x) = x³ − 3x გადის წერტილ (2, 2)-ში.</p>
  <p><strong>(ა)</strong> იპოვე f′(x).</p>
  <p><strong>(ბ)</strong> იპოვე მრუდის გრადიენტი x = 2-ზე.</p>
  <p><strong>(გ)</strong> დაწერე მხები ხაზის განტოლება (2, 2) წერტილში.</p>
  <button class="reveal-btn">პასუხის ჩვენება</button>
  <div class="answer">
    <p><strong>(ა)</strong> f′(x) = 3x² − 3</p>
    <p><strong>(ბ)</strong> f′(2) = 3(4) − 3 = <strong>9</strong></p>
    <p><strong>(გ)</strong> მხები: y − 2 = 9(x − 2)  →  <strong>y = 9x − 16</strong></p>
  </div>
</div>
</div>

<script src="https://www.desmos.com/api/v1.7/calculator.js?apiKey=dcb31709b452b1cf9dc26972add0fda6"></script>
<script>
(function() {
  var opts = {
    keypad: false,
    settingsMenu: false,
    expressionsCollapsed: false,
    lockViewport: false,
    zoomButtons: true
  };

  /* Playground 1: f(x) = x² */
  var c1 = Desmos.GraphingCalculator(document.getElementById('calc1'), opts);
  c1.setMathBounds({ left: -4, right: 4, bottom: -2, top: 10 });
  c1.setExpressions([
    { id: 'f',       latex: 'f(x)=x^{2}',            color: '#00C4FF', lineWidth: 2.5 },
    { id: 'a',       latex: 'a=1',                    sliderBounds: { min: -3, max: 3, step: 0.05 } },
    { id: 'pt',      latex: '(a, f(a))',               color: '#FF6B9D', pointSize: 12, showLabel: true, label: 'P' },
    { id: 'tangent', latex: 'y=f(a)+2a(x-a)',         color: '#FF6B9D', lineWidth: 2 },
    { id: 'slope',   latex: 'slope=2a',                hidden: false }
  ]);

  /* Playground 2: f(x) = sin(x) */
  var c2 = Desmos.GraphingCalculator(document.getElementById('calc2'), opts);
  c2.setMathBounds({ left: -7, right: 7, bottom: -2.5, top: 2.5 });
  c2.setExpressions([
    { id: 'g',       latex: 'g(x)=\\sin(x)',           color: '#A78BFA', lineWidth: 2.5 },
    { id: 'b',       latex: 'b=0',                     sliderBounds: { min: -6.28, max: 6.28, step: 0.05 } },
    { id: 'pt2',     latex: '(b, g(b))',                color: '#FF6B9D', pointSize: 12, showLabel: true, label: 'P' },
    { id: 'tan2',    latex: 'y=g(b)+\\cos(b)(x-b)',    color: '#FF6B9D', lineWidth: 2 },
    { id: 'slope2',  latex: 'slope=\\cos(b)',           hidden: false }
  ]);
})();
</script>
