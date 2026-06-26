---
title: "The Fundamental Theorem of Calculus"
title-ka: "კალკულუსის ფუნდამენტური თეორემა"
subtitle: "Differentiation and integration are opposites. This theorem proves it — and makes all integration possible."
subtitle-ka: "დიფერენცირება და ინტეგრირება საპირისპიროა. ეს თეორემა ამას ამტკიცებს — და ყოველ ინტეგრირებას შესაძლებელს ხდის."
topic: calculus
topic-color: "#FF6B9D"
interactive: true
tags: [IB, A-Level, Edexcel, Calculus]
quiz:
  - q: "The Fundamental Theorem of Calculus connects:"
    q_ka: "კალკულუსის ფუნდამენტური თეორემა აკავშირებს:"
    options: ["Limits and derivatives", "Derivatives and integrals", "Riemann sums and limits", "Polynomials and trigonometry"]
    options_ka: ["ლიმიტებს და წარმოებულებს", "წარმოებულებს და ინტეგრალებს", "რიმანის ჯამებს და ლიმიტებს", "პოლინომებს და ტრიგონომეტრიას"]
    answer: 1
  - q: "To evaluate ∫₁⁴ 2x dx, you:"
    q_ka: "∫₁⁴ 2x dx-ის გამოსათვლელად:"
    options: ["Approximate with rectangles", "Find F(4) − F(1) where F'(x) = 2x", "Differentiate 2x", "Set 2x = 0"]
    options_ka: ["დაახლოება მართკუთხედებით", "იპოვე F(4) − F(1), სადაც F'(x) = 2x", "2x-ს დაწარმოებ", "გაუტოლე 2x = 0"]
    answer: 1
  - q: "The antiderivative of 3x² is:"
    q_ka: "3x²-ის ანტიწარმოებულია:"
    options: ["6x", "x³ + C", "3x³", "x²/2 + C"]
    options_ka: ["6x", "x³ + C", "3x³", "x²/2 + C"]
    answer: 1
  - q: "What is ∫₀³ x² dx?"
    q_ka: "რას უდრის ∫₀³ x² dx?"
    options: ["3", "6", "9", "27"]
    options_ka: ["3", "6", "9", "27"]
    answer: 2
  - q: "If F'(x) = f(x), then ∫ₐᵇ f(x) dx equals:"
    q_ka: "თუ F'(x) = f(x), მაშინ ∫ₐᵇ f(x) dx უდრის:"
    options: ["F'(b) − F'(a)", "F(b) − F(a)", "F(a) − F(b)", "f(b) − f(a)"]
    options_ka: ["F'(b) − F'(a)", "F(b) − F(a)", "F(a) − F(b)", "f(b) − f(a)"]
    answer: 1
---

<div class="lang-block lang-en">
<p>The Fundamental Theorem of Calculus (FTC) is one of the most important results in all of mathematics. It says something surprising: <strong>differentiation and integration are inverse operations</strong> — like multiplication and division, or exponentiation and logarithms.</p>

<p>This theorem is what makes integration practical. Without it, every integral would require Riemann sums from scratch.</p>

<h2>The theorem, simply stated</h2>

<p>If F is an antiderivative of f (meaning F′(x) = f(x)), then:</p>

<p><strong>∫ₐᵇ f(x) dx = F(b) − F(a)</strong></p>

<p>That's it. To find the area under f between a and b, find the antiderivative F, evaluate it at both endpoints, subtract. No rectangles required.</p>

<h2>Playground — accumulate area as you slide</h2>
</div>

<div class="lang-block lang-ka">
<p>კალკულუსის ფუნდამენტური თეორემა (FTC) მათემატიკის ერთ-ერთი ყველაზე მნიშვნელოვანი შედეგია. ის რაღაც გასაოცარს ამბობს: <strong>დიფერენცირება და ინტეგრირება საპირისპირო ოპერაციებია</strong> — გამრავლებისა და გაყოფის მსგავსად, ან ხარისხში აყვანისა და ლოგარითმის.</p>

<p>ეს თეორემა სწორედ ის არის, რაც ინტეგრირებას პრაქტიკულს ხდის. მის გარეშე, ყოველი ინტეგრალი რიმანის ჯამებს მოითხოვდა ნულიდან.</p>

<h2>თეორემა, მარტივად გადმოცემული</h2>

<p>თუ F არის f-ის ანტიწარმოებული (ანუ F′(x) = f(x)), მაშინ:</p>

<p><strong>∫ₐᵇ f(x) dx = F(b) − F(a)</strong></p>

<p>სულ ეს არის. f-ის ქვეშ ფართობის სასაპოვნელად a-სა და b-ს შორის, ვიპოვებთ ანტიწარმოებულ F-ს, გამოვიანგარიშებთ ორივე ბოლო წერტილში, გამოვაკლებთ. მართკუთხედები აღარ გვჭირდება.</p>

<h2>სათამაშო — დააგროვე ფართობი სლაიდერის გადაადგილებით</h2>
</div>

<div class="playground-block">
  <div class="playground-label" data-en="⚡ Interactive — drag t to watch the accumulated area grow" data-ka="⚡ ინტერაქტიული — გადაიტანე t და დააკვირდი, როგორ იზრდება დაგროვებული ფართობი">⚡ Interactive — drag t to watch the accumulated area grow</div>
  <p data-en="The pink function is f(x) = x². The shaded area from 0 to t is ∫₀ᵗ x² dx = t³/3. As you drag <strong>t</strong>, the blue number shows the exact accumulated area — computed by the FTC, not rectangles." data-ka="ვარდისფერი ფუნქციაა f(x) = x². დაჩრდილული ფართობი 0-დან t-მდე არის ∫₀ᵗ x² dx = t³/3. <strong>t</strong>-ს გადაადგილებისას, ლურჯი ციფრი გვიჩვენებს ზუსტ დაგროვებულ ფართობს — გამოთვლილს FTC-ით, არა მართკუთხედებით.">The pink function is f(x) = x². The shaded area from 0 to t is ∫₀ᵗ x² dx = t³/3. As you drag <strong>t</strong>, the blue number shows the exact accumulated area — computed by the FTC, not rectangles.</p>
  <div id="calc-ftc" style="width:100%;height:430px;border-radius:8px;overflow:hidden;"></div>
</div>

<div class="lang-block lang-en">
<div class="insight-box">
  <p><strong>Why this is remarkable:</strong> The derivative captures instantaneous rate of change. The integral captures cumulative area. They seem completely different ideas. The FTC says: compute one to get the other. Mathematics finding a hidden unity.</p>
</div>

<h2>A worked integral</h2>

<p><strong>Evaluate ∫₁⁵ (3x² − 2x) dx</strong></p>

<p>Step 1: Find antiderivative F(x) = x³ − x²</p>

<p>Step 2: Evaluate: F(5) − F(1) = (125 − 25) − (1 − 1) = 100 − 0 = <strong>100</strong></p>

<p>Standard notation: [x³ − x²]₁⁵ = 100</p>

<h2>The + C question</h2>

<p>When you find an indefinite integral ∫f(x)dx, you write + C (constant of integration) because any constant disappears when differentiated. For a definite integral, the constants cancel: F(b) + C − (F(a) + C) = F(b) − F(a). So you can ignore C for definite integrals.</p>

<div class="try-it">
  <h3>Practice</h3>
  <p>Evaluate ∫₀² (4x + 1) dx.</p>
  <button class="reveal-btn">Show Answer</button>
  <div class="answer">
    <p>Antiderivative: F(x) = 2x² + x</p>
    <p>[2x² + x]₀² = (8 + 2) − (0) = <strong>10</strong></p>
  </div>
</div>
</div>

<div class="lang-block lang-ka">
<div class="insight-box">
  <p><strong>რატომ არის ეს გასაოცარი:</strong> წარმოებული იჭერს მომენტალური ცვლილების ტემპს. ინტეგრალი იჭერს კუმულაციურ ფართობს. ეს სრულიად განსხვავებული იდეები ჩანს. FTC ამბობს: გამოთვალე ერთი, რომ მიიღო მეორე. მათემატიკა ნახული ფარული ერთიანობა.</p>
</div>

<h2>ამოხსნილი ინტეგრალი</h2>

<p><strong>გამოთვალე ∫₁⁵ (3x² − 2x) dx</strong></p>

<p>ნაბიჯი 1: ვიპოვებთ ანტიწარმოებულს F(x) = x³ − x²</p>

<p>ნაბიჯი 2: გამოვიანგარიშებთ: F(5) − F(1) = (125 − 25) − (1 − 1) = 100 − 0 = <strong>100</strong></p>

<p>სტანდარტული ნოტაცია: [x³ − x²]₁⁵ = 100</p>

<h2>+ C კითხვა</h2>

<p>როდესაც ვპოულობთ განუსაზღვრელ ინტეგრალს ∫f(x)dx, ვწერთ + C (ინტეგრირების მუდმივა), რადგან ნებისმიერი მუდმივა ქრება დიფერენცირებისას. განსაზღვრული ინტეგრალისთვის მუდმივები ურთიერთშლიან: F(b) + C − (F(a) + C) = F(b) − F(a). ამიტომ განსაზღვრული ინტეგრალებისთვის C-ს უგულებელყოფა შეგვიძლია.</p>

<div class="try-it">
  <h3>სავარჯიშო</h3>
  <p>გამოთვალე ∫₀² (4x + 1) dx.</p>
  <button class="reveal-btn">პასუხის ჩვენება</button>
  <div class="answer">
    <p>ანტიწარმოებული: F(x) = 2x² + x</p>
    <p>[2x² + x]₀² = (8 + 2) − (0) = <strong>10</strong></p>
  </div>
</div>
</div>

<script src="https://www.desmos.com/api/v1.7/calculator.js?apiKey=dcb31709b452b1cf9dc26972add0fda6"></script>
<script>
(function() {
  var c = Desmos.GraphingCalculator(document.getElementById('calc-ftc'), {
    keypad: false, settingsMenu: false, zoomButtons: true, expressionsCollapsed: true
  });
  c.setMathBounds({ left: -0.3, right: 3.3, bottom: -0.5, top: 10 });
  c.setExpressions([
    { id: 'f',    latex: 'f(x)=x^{2}', color: '#FF6B9D', lineWidth: 2.5 },
    { id: 't',    latex: 't=1.5', sliderBounds: { min: 0, max: 3, step: 0.05 } },
    { id: 'area', latex: '0\\le y\\le f(x)\\left\\{0\\le x\\le t\\right\\}',
                  color: '#FF6B9D', fillOpacity: 0.3, lineOpacity: 0 },
    { id: 'F',    latex: 'F=t^{3}/3', hidden: false, label: 'Area = t³/3' },
    { id: 'pt',   latex: '(t, 0)', color: '#FFD700', pointSize: 10,
                  showLabel: true, label: 'area = t³/3' }
  ]);
})();
</script>
