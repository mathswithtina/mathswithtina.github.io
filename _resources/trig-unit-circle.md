---
title: "The Unit Circle — where trigonometry lives"
title-ka: "ერთეულის წრეწირი — სადაც ტრიგონომეტრია ცხოვრობს"
subtitle: "sin and cos are not just ratios in triangles. They're coordinates on a circle of radius 1."
subtitle-ka: "სინუსი და კოსინუსი მხოლოდ სამკუთხედის ფარდობები არ არის. ისინი კოორდინატებია რადიუს 1-ის წრეწირზე."
topic: trigonometry
topic-color: "#22D3EE"
interactive: true
tags: [IGCSE, IB, A-Level, Trigonometry]
quiz:
  - q: "On the unit circle, cos(θ) represents:"
    q_ka: "ერთეულის წრეწირზე, cos(θ) წარმოადგენს:"
    options: ["The y-coordinate", "The x-coordinate", "The arc length", "The radius"]
    options_ka: ["y-კოორდინატს", "x-კოორდინატს", "რკალის სიგრძეს", "რადიუსს"]
    answer: 1
  - q: "What is sin(90°)?"
    q_ka: "რა არის sin(90°)?"
    options: ["0", "1", "−1", "√2/2"]
    options_ka: ["0", "1", "−1", "√2/2"]
    answer: 1
  - q: "What are the coordinates at 180° on the unit circle?"
    q_ka: "რა კოორდინატებია 180°-ზე ერთეულის წრეწირზე?"
    options: ["(0, 1)", "(1, 0)", "(−1, 0)", "(0, −1)"]
    options_ka: ["(0, 1)", "(1, 0)", "(−1, 0)", "(0, −1)"]
    answer: 2
  - q: "cos(270°) equals:"
    q_ka: "cos(270°) ტოლია:"
    options: ["−1", "0", "1", "√3/2"]
    options_ka: ["−1", "0", "1", "√3/2"]
    answer: 1
  - q: "In which quadrant are both sin and cos negative?"
    q_ka: "რომელ კვადრანტში არის სინუსიც და კოსინუსიც უარყოფითი?"
    options: ["First", "Second", "Third", "Fourth"]
    options_ka: ["პირველი", "მეორე", "მესამე", "მეოთხე"]
    answer: 2
---

<div class="lang-block lang-en">
<p>The unit circle is a circle of radius 1 centred at the origin. Every point on it has coordinates <strong>(cos θ, sin θ)</strong> — where θ is the angle measured counterclockwise from the positive x-axis.</p>
<p>This is the foundation of all trigonometry. The triangle definitions (SOH CAH TOA) are just a special case of this more general circle picture.</p>
</div>

<div class="lang-block lang-ka">
<p>ერთეულის წრეწირი არის რადიუს 1-ის წრეწირი, რომლის ცენტრი სათავეშია. მასზე ყოველ წერტილს აქვს კოორდინატები <strong>(cos θ, sin θ)</strong> — სადაც θ არის კუთხე გაზომილი დადებითი x-ღერძიდან საათის ისრის საწინააღმდეგოდ.</p>
<p>ეს არის ყველა ტრიგონომეტრიის საფუძველი. სამკუთხედის განმარტებები (SOH CAH TOA) მხოლოდ ამ უფრო ზოგადი წრის სურათის კერძო შემთხვევაა.</p>
</div>

<div class="playground-block">
  <div class="playground-label" data-en="⚡ Interactive — drag the point around the unit circle" data-ka="⚡ ინტერაქტიული — გადაათრიე წერტილი ერთეულის წრეწირზე">⚡ Interactive — drag the point around the unit circle</div>
  <p data-en="Drag the angle θ and watch the coordinates update. The x-coordinate is cos(θ), the y-coordinate is sin(θ). The dashed lines show this projection clearly." data-ka="გადაათრიე კუთხე θ და დაინახე, როგორ განახლდება კოორდინატები. x-კოორდინატი არის cos(θ), y-კოორდინატი — sin(θ). წყვეტილი ხაზები ამ პროექციას ნათლად გვიჩვენებს.">Drag the angle <strong>θ</strong> and watch the coordinates update. The x-coordinate is cos(θ), the y-coordinate is sin(θ). The dashed lines show this projection clearly.</p>
  <div id="calc-unit" style="width:100%;height:460px;border-radius:8px;overflow:hidden;"></div>
</div>

<div class="lang-block lang-en">
<div class="insight-box">
  <p><strong>The key angles to memorise:</strong> At 0°: (1, 0). At 90°: (0, 1). At 180°: (−1, 0). At 270°: (0, −1). At 45°: (√2/2, √2/2). At 60°: (1/2, √3/2). At 30°: (√3/2, 1/2). These are all you need for exams.</p>
</div>

<h2>CAST rule — signs in each quadrant</h2>

<table>
<thead><tr><th>Quadrant</th><th>Angle range</th><th>Positive</th></tr></thead>
<tbody>
<tr><td>1st (A)</td><td>0° to 90°</td><td>All (sin, cos, tan)</td></tr>
<tr><td>2nd (S)</td><td>90° to 180°</td><td>Sin only</td></tr>
<tr><td>3rd (T)</td><td>180° to 270°</td><td>Tan only</td></tr>
<tr><td>4th (C)</td><td>270° to 360°</td><td>Cos only</td></tr>
</tbody>
</table>

<p>The mnemonic: <strong>C</strong>ast → <strong>A</strong>ll <strong>S</strong>tudents <strong>T</strong>ake <strong>C</strong>alculus (or: All Sin Tan Cos, going counterclockwise from Q4).</p>

<h2>Why the unit circle beats SOHCAHTOA</h2>
<p>SOHCAHTOA only works for acute angles in right triangles. The unit circle defines sin and cos for any angle — including obtuse angles (which appear everywhere in IB and A-Level problems).</p>

<div class="try-it">
  <h3>Practice</h3>
  <p>Find the exact values of sin(150°) and cos(150°) using the unit circle.</p>
  <button class="reveal-btn">Show Answer</button>
  <div class="answer">
    <p>150° is in the 2nd quadrant. Reference angle = 180° − 150° = 30°.</p>
    <p>In Q2: sin is positive, cos is negative.</p>
    <p>sin(30°) = 1/2, cos(30°) = √3/2</p>
    <p>So: <strong>sin(150°) = 1/2, cos(150°) = −√3/2</strong></p>
  </div>
</div>
</div>

<div class="lang-block lang-ka">
<div class="insight-box">
  <p><strong>მთავარი კუთხეები დასამახსოვრებლად:</strong> 0°-ზე: (1, 0). 90°-ზე: (0, 1). 180°-ზე: (−1, 0). 270°-ზე: (0, −1). 45°-ზე: (√2/2, √2/2). 60°-ზე: (1/2, √3/2). 30°-ზე: (√3/2, 1/2). ეს ყველაფერი გამოცდებისთვის საჭიროა.</p>
</div>

<h2>CAST წესი — ნიშნები თითოეულ კვადრანტში</h2>

<table>
<thead><tr><th>კვადრანტი</th><th>კუთხის დიაპაზონი</th><th>დადებითი</th></tr></thead>
<tbody>
<tr><td>1-ლი (A)</td><td>0°-დან 90°-მდე</td><td>ყველა (სინ, კოს, ტან)</td></tr>
<tr><td>2-ე (S)</td><td>90°-დან 180°-მდე</td><td>მხოლოდ სინუსი</td></tr>
<tr><td>3-ე (T)</td><td>180°-დან 270°-მდე</td><td>მხოლოდ ტანგენსი</td></tr>
<tr><td>4-ე (C)</td><td>270°-დან 360°-მდე</td><td>მხოლოდ კოსინუსი</td></tr>
</tbody>
</table>

<p>მნემონიკა: ყველა სინ ტან კოს — Q4-დან საათის ისრის საწინააღმდეგოდ.</p>

<h2>რატომ სჯობს ერთეულის წრეწირი SOHCAHTOA-ს</h2>
<p>SOHCAHTOA მხოლოდ მართკუთხა სამკუთხედების ბლაგვი კუთხეებისთვის მუშაობს. ერთეულის წრეწირი განსაზღვრავს სინუსსა და კოსინუსს ნებისმიერი კუთხისთვის — მათ შორის მოღუნული კუთხეებისთვის (რომლებიც IB და A-Level ამოცანებში ყველგან გამოჩნდება).</p>

<div class="try-it">
  <h3>სავარჯიშო</h3>
  <p>იპოვე sin(150°) და cos(150°)-ის ზუსტი მნიშვნელობები ერთეულის წრეწირის გამოყენებით.</p>
  <button class="reveal-btn">პასუხის ჩვენება</button>
  <div class="answer">
    <p>150° არის მე-2 კვადრანტში. საცნობარო კუთხე = 180° − 150° = 30°.</p>
    <p>Q2-ში: სინუსი დადებითია, კოსინუსი — უარყოფითი.</p>
    <p>sin(30°) = 1/2, cos(30°) = √3/2</p>
    <p>ამდენად: <strong>sin(150°) = 1/2, cos(150°) = −√3/2</strong></p>
  </div>
</div>
</div>

<script src="https://www.desmos.com/api/v1.7/calculator.js?apiKey=dcb31709b452b1cf9dc26972add0fda6"></script>
<script>
(function() {
  var c = Desmos.GraphingCalculator(document.getElementById('calc-unit'), {
    keypad: false, settingsMenu: false, zoomButtons: true, expressionsCollapsed: true
  });
  c.setMathBounds({ left: -1.7, right: 1.7, bottom: -1.4, top: 1.4 });
  c.setExpressions([
    { id: 'circ', latex: 'x^{2}+y^{2}=1', color: '#22D3EE', lineWidth: 2 },
    { id: 'th',   latex: '\\theta=0.7', sliderBounds: { min: 0, max: 6.28, step: 0.02 } },
    { id: 'px',   latex: 'p_x=\\cos(\\theta)', hidden: true },
    { id: 'py',   latex: 'p_y=\\sin(\\theta)', hidden: true },
    { id: 'pt',   latex: '(p_x, p_y)', color: '#FFD700', pointSize: 14,
                  showLabel: true, label: '(cos θ, sin θ)' },
    { id: 'rx',   latex: 'y=0\\left\\{0\\le x\\le p_x\\right\\}', color: '#FF6B9D', lineWidth: 2, lineStyle: Desmos.Styles.DASHED },
    { id: 'ry',   latex: 'x=p_x\\left\\{0\\le y\\le p_y\\right\\}', color: '#A78BFA', lineWidth: 2, lineStyle: Desmos.Styles.DASHED },
    { id: 'rad',  latex: '\\left(\\frac{p_x}{2},\\frac{p_y}{2}\\right)', color: '#888',
                  showLabel: true, label: 'r = 1', hidden: true },
    { id: 'line', latex: '\\left(t\\cos(\\theta), t\\sin(\\theta)\\right)', color: '#22D3EE',
                  parametricDomain: { min: 0, max: 1 }, lineWidth: 2 }
  ]);
})();
</script>
