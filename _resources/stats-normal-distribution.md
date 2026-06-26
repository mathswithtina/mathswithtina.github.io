---
title: "The Normal Distribution — the bell curve explained"
title-ka: "ნორმალური განაწილება — ზვავის მრუდი განმარტებული"
subtitle: "Heights, test scores, measurement errors. They all follow the same bell shape. Here's why."
subtitle-ka: "სიმაღლეები, ტესტის ქულები, გაზომვის შეცდომები. ყველა მათგანი ერთსა და იმავე ზვავის ფორმას მიჰყვება."
topic: statistics
topic-color: "#34D399"
interactive: true
tags: [IB, A-Level, Statistics]
quiz:
  - q: "The normal distribution is symmetric about its:"
    q_ka: "ნორმალური განაწილება სიმეტრიულია მისი:"
    options: ["Median only", "Mode only", "Mean (which equals median and mode)", "Standard deviation"]
    options_ka: ["მხოლოდ მედიანის მიმართ", "მხოლოდ მოდის მიმართ", "საშუალოს მიმართ (რომელიც მედიანასა და მოდას უდრის)", "სტანდარტული გადახრის მიმართ"]
    answer: 2
  - q: "What percentage of data falls within one standard deviation of the mean?"
    q_ka: "მონაცემების რამდენი პროცენტი ხვდება საშუალოდან ერთი სტანდარტული გადახრის ფარგლებში?"
    options: ["50%", "68%", "95%", "99.7%"]
    options_ka: ["50%", "68%", "95%", "99.7%"]
    answer: 1
  - q: "A larger standard deviation means the bell curve is:"
    q_ka: "უფრო დიდი სტანდარტული გადახრა ნიშნავს, რომ ზვავის მრუდი:"
    options: ["Taller and narrower", "Wider and flatter", "Shifted to the right", "Asymmetric"]
    options_ka: ["უფრო მაღალი და ვიწრო", "უფრო განიერი და ბრტყელი", "მარჯვნივ წანაცვლებული", "ასიმეტრიული"]
    answer: 1
  - q: "In a standard normal distribution, what is the mean?"
    q_ka: "სტანდარტულ ნორმალურ განაწილებაში საშუალო არის:"
    options: ["1", "0", "−1", "Depends on the data"]
    options_ka: ["1", "0", "−1", "დამოკიდებულია მონაცემებზე"]
    answer: 1
  - q: "P(X < mean) for a normal distribution equals:"
    q_ka: "ნორმალური განაწილებისთვის P(X < საშუალო) ტოლია:"
    options: ["0", "0.25", "0.5", "1"]
    options_ka: ["0", "0.25", "0.5", "1"]
    answer: 2
---

<div class="lang-block lang-en">
<p>The normal distribution is the most important probability distribution in statistics. It describes an enormous range of real-world phenomena — anywhere that many small random factors add together, the result tends to be normally distributed.</p>
<p>It has a characteristic <strong>bell shape</strong>: symmetric, highest at the mean, tapering off on both sides.</p>

<h2>The 68-95-99.7 rule</h2>
<p>For any normal distribution with mean μ and standard deviation σ:</p>

<table>
<thead><tr><th>Range</th><th>Probability</th></tr></thead>
<tbody>
<tr><td>μ ± 1σ</td><td>68%</td></tr>
<tr><td>μ ± 2σ</td><td>95%</td></tr>
<tr><td>μ ± 3σ</td><td>99.7%</td></tr>
</tbody>
</table>

<p>This rule is extremely useful for quick estimates without a calculator.</p>
</div>

<div class="lang-block lang-ka">
<p>ნორმალური განაწილება სტატისტიკაში ყველაზე მნიშვნელოვანი ალბათური განაწილებაა. ის ასახავს რეალური სამყაროს ფენომენების უზარმაზარ სპექტრს — სადაც ბევრი მცირე შემთხვევითი ფაქტორი ერთმანეთს ემატება, შედეგი ნორმალურად განაწილებულია.</p>
<p>მას აქვს დამახასიათებელი <strong>ზვავის ფორმა</strong>: სიმეტრიული, ყველაზე მაღალი საშუალოში, ორივე მხრიდან შეიწრება.</p>

<h2>68-95-99.7 წესი</h2>
<p>ნებისმიერი ნორმალური განაწილებისთვის საშუალო μ და სტანდარტული გადახრა σ:</p>

<table>
<thead><tr><th>დიაპაზონი</th><th>ალბათობა</th></tr></thead>
<tbody>
<tr><td>μ ± 1σ</td><td>68%</td></tr>
<tr><td>μ ± 2σ</td><td>95%</td></tr>
<tr><td>μ ± 3σ</td><td>99.7%</td></tr>
</tbody>
</table>

<p>ეს წესი ძალიან სასარგებლოა სწრაფი შეფასებებისთვის კალკულატორის გარეშე.</p>
</div>

<div class="playground-block">
  <div class="playground-label" data-en="⚡ Interactive — change mean and standard deviation" data-ka="⚡ ინტერაქტიული — შეცვალე საშუალო და სტანდარტული გადახრა">⚡ Interactive — change mean and standard deviation</div>
  <p data-en="Drag μ to shift the curve left/right. Drag σ to make it narrower (less spread) or wider (more spread). Notice the shaded area always equals 1 — that's the total probability." data-ka="გადაათრიე μ მრუდის მარცხნივ/მარჯვნივ გადაწევისთვის. გადაათრიე σ ვიწრო (ნაკლები გავრცელება) ან განიერი (მეტი გავრცელება) გასახდელად. შეამჩნიე, რომ დაჩრდილული ფართობი ყოველთვის 1-ს უდრის — ეს ჯამური ალბათობაა.">Drag <strong>μ</strong> to shift the curve left/right. Drag <strong>σ</strong> to make it narrower (less spread) or wider (more spread). Notice the shaded area always equals 1 — that's the total probability.</p>
  <div id="calc-norm" style="width:100%;height:440px;border-radius:8px;overflow:hidden;"></div>
</div>

<div class="lang-block lang-en">
<div class="insight-box">
  <p><strong>Z-scores:</strong> To compare values from different normal distributions, convert to a Z-score: Z = (X − μ)/σ. This tells you how many standard deviations X is from the mean. Tables give P(Z &lt; z) for any z.</p>
</div>

<h2>Standardising (Z-score)</h2>
<p>If X ~ N(50, 8²), find P(X &lt; 62).</p>
<p>Z = (62 − 50)/8 = 1.5</p>
<p>P(X &lt; 62) = P(Z &lt; 1.5) = <strong>0.9332</strong> (from tables)</p>

<div class="try-it">
  <h3>Practice</h3>
  <p>Weights of apples are N(180g, 20²). What proportion weigh between 160g and 200g?</p>
  <button class="reveal-btn">Show Answer</button>
  <div class="answer">
    <p>160 = μ − σ and 200 = μ + σ. This is the range μ ± 1σ.</p>
    <p>By the 68-95-99.7 rule: <strong>approximately 68%</strong> of apples fall in this range.</p>
  </div>
</div>
</div>

<div class="lang-block lang-ka">
<div class="insight-box">
  <p><strong>Z-ქულები:</strong> სხვადასხვა ნორმალური განაწილებიდან მნიშვნელობების შედარებისთვის, გადააქციე Z-ქულად: Z = (X − μ)/σ. ეს გეტყვის, X რამდენი სტანდარტული გადახრით არის საშუალოდან. ცხრილები გვაძლევს P(Z &lt; z)-ს ნებისმიერი z-სთვის.</p>
</div>

<h2>სტანდარტიზაცია (Z-ქულა)</h2>
<p>თუ X ~ N(50, 8²), იპოვე P(X &lt; 62).</p>
<p>Z = (62 − 50)/8 = 1.5</p>
<p>P(X &lt; 62) = P(Z &lt; 1.5) = <strong>0.9332</strong> (ცხრილებიდან)</p>

<div class="try-it">
  <h3>სავარჯიშო</h3>
  <p>ვაშლების წონა N(180გ, 20²)-ია. მონაცემების რა პროპორცია იწონის 160გ-დან 200გ-მდე?</p>
  <button class="reveal-btn">პასუხის ჩვენება</button>
  <div class="answer">
    <p>160 = μ − σ და 200 = μ + σ. ეს არის დიაპაზონი μ ± 1σ.</p>
    <p>68-95-99.7 წესის მიხედვით: ვაშლების <strong>დაახლოებით 68%</strong> ამ დიაპაზონშია.</p>
  </div>
</div>
</div>

<script src="https://www.desmos.com/api/v1.7/calculator.js?apiKey=dcb31709b452b1cf9dc26972add0fda6"></script>
<script>
(function() {
  var c = Desmos.GraphingCalculator(document.getElementById('calc-norm'), {
    keypad: false, settingsMenu: false, zoomButtons: true, expressionsCollapsed: true
  });
  c.setMathBounds({ left: -5, right: 15, bottom: -0.05, top: 0.55 });
  c.setExpressions([
    { id: 'mu', latex: '\\mu=5',   sliderBounds: { min: 0, max: 10, step: 0.5 } },
    { id: 'sg', latex: '\\sigma=1.5', sliderBounds: { min: 0.5, max: 3, step: 0.25 } },
    { id: 'f',  latex: 'f(x)=\\frac{1}{\\sigma\\sqrt{2\\pi}}e^{-\\frac{(x-\\mu)^{2}}{2\\sigma^{2}}}',
                color: '#34D399', lineWidth: 2.5 },
    { id: 'sh', latex: '0\\le y\\le f(x)\\left\\{\\mu-\\sigma\\le x\\le\\mu+\\sigma\\right\\}',
                color: '#34D399', fillOpacity: 0.25, lineOpacity: 0, label: '68%' }
  ]);
})();
</script>
