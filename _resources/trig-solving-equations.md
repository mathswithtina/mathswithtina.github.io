---
title: "Solving Trigonometric Equations"
title-ka: "ტრიგონომეტრიული განტოლებების ამოხსნა"
subtitle: "sinθ = 0.5 has infinitely many solutions. You need to find all of them in the given range."
subtitle-ka: "sinθ = 0.5-ს უსასრულოდ ბევრი ამოხსნა აქვს. საჭიროა ყველა მოცემულ დიაპაზონში."
topic: trigonometry
topic-color: "#22D3EE"
interactive: true
tags: [IGCSE, IB, A-Level, Trigonometry]
quiz:
  - q: "How many solutions does sin(θ) = 0.5 have in [0°, 360°]?"
    q_ka: "რამდენი ამოხსნა აქვს sin(θ) = 0.5-ს [0°, 360°]-ში?"
    options: ["1", "2", "3", "Infinitely many"]
    options_ka: ["1", "2", "3", "უსასრულოდ ბევრი"]
    answer: 1
  - q: "If sinθ = −1/2, the reference angle is:"
    q_ka: "თუ sinθ = −1/2, საცნობარო კუთხე არის:"
    options: ["30°", "60°", "150°", "120°"]
    options_ka: ["30°", "60°", "150°", "120°"]
    answer: 0
  - q: "Which quadrants have negative cosine?"
    q_ka: "რომელ კვადრანტებში არის კოსინუსი უარყოფითი?"
    options: ["1st and 4th", "2nd and 3rd", "1st and 2nd", "3rd and 4th"]
    options_ka: ["1-ლი და მე-4", "მე-2 და მე-3", "1-ლი და მე-2", "მე-3 და მე-4"]
    answer: 1
  - q: "Solve sin(2θ) = 1 for 0° ≤ θ ≤ 360°. What is θ?"
    q_ka: "ამოხსენი sin(2θ) = 1 პირობით 0° ≤ θ ≤ 360°. რა არის θ?"
    options: ["45° only", "45° and 225°", "90° and 270°", "45° and 135°"]
    options_ka: ["მხოლოდ 45°", "45° და 225°", "90° და 270°", "45° და 135°"]
    answer: 0
  - q: "The general solution for sinθ = 0 is:"
    q_ka: "sinθ = 0-ის ზოგადი ამოხსნა არის:"
    options: ["θ = 180°n", "θ = 90°n", "θ = 360°n", "θ = 45°n"]
    options_ka: ["θ = 180°n", "θ = 90°n", "θ = 360°n", "θ = 45°n"]
    answer: 0
---

<div class="lang-block lang-en">
<p>Trig equations are tricky because trig functions are <strong>periodic</strong> — they repeat their values. sin(30°) = 0.5, but so does sin(150°), sin(390°), sin(510°), and infinitely more. Your job is to find <strong>all</strong> solutions in a specified range.</p>

<h2>The strategy</h2>
<ol>
<li>Find the <strong>reference angle</strong> using inverse trig (always positive, always acute)</li>
<li>Use <strong>CAST</strong> or the unit circle to find which quadrants have your sign</li>
<li>Write down all solutions in range</li>
</ol>

<h2>Example: Solve sin θ = −√3/2 for 0° ≤ θ ≤ 360°</h2>
<ol>
<li>Reference angle: sin⁻¹(√3/2) = 60°</li>
<li>sin is negative in Q3 and Q4 (from CAST)</li>
<li>Q3: 180° + 60° = <strong>240°</strong>; Q4: 360° − 60° = <strong>300°</strong></li>
</ol>
<p>Solutions: θ = 240° or θ = 300°</p>
</div>

<div class="lang-block lang-ka">
<p>ტრიგ-განტოლებები რთულია, რადგან ტრიგ-ფუნქციები <strong>პერიოდულია</strong> — ისინი თავიანთ მნიშვნელობებს იმეორებს. sin(30°) = 0.5, მაგრამ ასევე sin(150°), sin(390°), sin(510°) და უსასრულოდ მეტი. შენი ამოცანაა მოცემულ დიაპაზონში <strong>ყველა</strong> ამოხსნის პოვნა.</p>

<h2>სტრატეგია</h2>
<ol>
<li>იპოვე <strong>საცნობარო კუთხე</strong> შებრუნებული ტრიგ-ფუნქციის გამოყენებით (ყოველთვის დადებითი, ყოველთვის ბლაგვი)</li>
<li>გამოიყენე <strong>CAST</strong> ან ერთეულის წრეწირი, რომ გაიგო, რომელ კვადრანტებში გაქვს შენი ნიშანი</li>
<li>ჩაწერე ყველა ამოხსნა დიაპაზონში</li>
</ol>

<h2>მაგალითი: ამოხსენი sin θ = −√3/2 პირობით 0° ≤ θ ≤ 360°</h2>
<ol>
<li>საცნობარო კუთხე: sin⁻¹(√3/2) = 60°</li>
<li>სინუსი უარყოფითია Q3 და Q4-ში (CAST-ის მიხედვით)</li>
<li>Q3: 180° + 60° = <strong>240°</strong>; Q4: 360° − 60° = <strong>300°</strong></li>
</ol>
<p>ამოხსნები: θ = 240° ან θ = 300°</p>
</div>

<div class="playground-block">
  <div class="playground-label" data-en="⚡ Interactive — drag k to change the target value" data-ka="⚡ ინტერაქტიული — გადაათრიე k სამიზნე მნიშვნელობის შესაცვლელად">⚡ Interactive — drag k to change the target value</div>
  <p data-en="The horizontal dashed line is y = k. Where it crosses the sine curve — those are the solutions. Drag k between −1 and 1 to change the equation, and watch the intersections move." data-ka="ჰორიზონტალური წყვეტილი ხაზი არის y = k. სადაც ის სინუსის მრუდს კვეთს — ისინი ამოხსნებია. გადაათრიე k −1-სა და 1-ს შორის, რათა განტოლება შეცვალო.">The horizontal dashed line is y = k. Where it crosses the sine curve — those are the solutions. Drag <strong>k</strong> between −1 and 1 to change the equation, and watch the intersections move.</p>
  <div id="calc-solv" style="width:100%;height:430px;border-radius:8px;overflow:hidden;"></div>
</div>

<div class="lang-block lang-en">
<div class="insight-box">
  <p><strong>The "double angle" trap:</strong> For sin(2θ) = k, first solve sin(u) = k where u = 2θ, getting values of u. Then halve them to get θ. And double your range: if 0 ≤ θ ≤ 2π, then 0 ≤ u ≤ 4π, so find solutions for u in [0, 4π].</p>
</div>

<h2>Example with double angle</h2>
<p>Solve 2cos(2θ) = 1 for 0° ≤ θ ≤ 360°.</p>
<p>cos(2θ) = 1/2. Let u = 2θ, range: 0° ≤ u ≤ 720°.</p>
<p>Reference angle: 60°. Cos positive in Q1 and Q4.</p>
<p>u = 60°, 300°, 420°, 660°</p>
<p>θ = u/2 = <strong>30°, 150°, 210°, 330°</strong></p>

<div class="try-it">
  <h3>Practice</h3>
  <p>Solve tan θ = −1 for 0° ≤ θ ≤ 360°.</p>
  <button class="reveal-btn">Show Answer</button>
  <div class="answer">
    <p>Reference angle: tan⁻¹(1) = 45°</p>
    <p>tan is negative in Q2 and Q4.</p>
    <p>Q2: 180° − 45° = 135°; Q4: 360° − 45° = 315°</p>
    <p>Solutions: <strong>θ = 135° or θ = 315°</strong></p>
  </div>
</div>
</div>

<div class="lang-block lang-ka">
<div class="insight-box">
  <p><strong>„ორმაგი კუთხის" ხაფანგი:</strong> sin(2θ) = k-სთვის ჯერ ამოხსენი sin(u) = k სადაც u = 2θ და მიიღე u-ს მნიშვნელობები. შემდეგ გაყავი ორზე θ-ს მისაღებად. და გააორმაგე დიაპაზონი: თუ 0 ≤ θ ≤ 2π, მაშინ 0 ≤ u ≤ 4π, ამიტომ იპოვე u-ს ამოხსნები [0, 4π]-ში.</p>
</div>

<h2>ორმაგი კუთხის მაგალითი</h2>
<p>ამოხსენი 2cos(2θ) = 1 პირობით 0° ≤ θ ≤ 360°.</p>
<p>cos(2θ) = 1/2. ვთქვათ u = 2θ, დიაპაზონი: 0° ≤ u ≤ 720°.</p>
<p>საცნობარო კუთხე: 60°. კოსინუსი დადებითია Q1 და Q4-ში.</p>
<p>u = 60°, 300°, 420°, 660°</p>
<p>θ = u/2 = <strong>30°, 150°, 210°, 330°</strong></p>

<div class="try-it">
  <h3>სავარჯიშო</h3>
  <p>ამოხსენი tan θ = −1 პირობით 0° ≤ θ ≤ 360°.</p>
  <button class="reveal-btn">პასუხის ჩვენება</button>
  <div class="answer">
    <p>საცნობარო კუთხე: tan⁻¹(1) = 45°</p>
    <p>ტანგენსი უარყოფითია Q2 და Q4-ში.</p>
    <p>Q2: 180° − 45° = 135°; Q4: 360° − 45° = 315°</p>
    <p>ამოხსნები: <strong>θ = 135° ან θ = 315°</strong></p>
  </div>
</div>
</div>

<script src="https://www.desmos.com/api/v1.7/calculator.js?apiKey=dcb31709b452b1cf9dc26972add0fda6"></script>
<script>
(function() {
  var c = Desmos.GraphingCalculator(document.getElementById('calc-solv'), {
    keypad: false, settingsMenu: false, zoomButtons: true, expressionsCollapsed: true
  });
  c.setMathBounds({ left: -0.3, right: 7, bottom: -1.5, top: 1.5 });
  c.setExpressions([
    { id: 'f',  latex: 'f(x)=\\sin(x)', color: '#22D3EE', lineWidth: 2.5 },
    { id: 'k',  latex: 'k=0.5', sliderBounds: { min: -1, max: 1, step: 0.05 } },
    { id: 'kl', latex: 'y=k', color: '#FF6B9D', lineWidth: 2, lineStyle: Desmos.Styles.DASHED, label: 'sinθ = k' }
  ]);
})();
</script>
