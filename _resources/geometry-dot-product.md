---
title: "The Dot Product — when vectors meet at an angle"
title-ka: "სკალარული ნამრავლი — როდესაც ვექტორები კუთხეზე ხვდება"
subtitle: "a · b is a single number that encodes the angle between two vectors. It's how you test perpendicularity."
subtitle-ka: "a · b არის ერთი რიცხვი, რომელიც კოდავს ორ ვექტორს შორის კუთხეს. ასე შემოწმდება პარპენდიკულარობა."
topic: geometry
topic-color: "#FB923C"
interactive: true
tags: [IB, A-Level, Geometry]
quiz:
  - q: "The dot product of (1, 0) and (0, 1) is:"
    q_ka: "(1, 0) და (0, 1)-ის სკალარული ნამრავლი არის:"
    options: ["1", "0", "−1", "√2"]
    options_ka: ["1", "0", "−1", "√2"]
    answer: 1
  - q: "Two vectors are perpendicular when their dot product is:"
    q_ka: "ორი ვექტორი პარპენდიკულარია, როდესაც მათი სკალარული ნამრავლი არის:"
    options: ["1", "−1", "0", "Equal to the product of magnitudes"]
    options_ka: ["1", "−1", "0", "ტოლი მოდულების ნამრავლისა"]
    answer: 2
  - q: "The formula for the dot product (2, 3) · (4, −1) is:"
    q_ka: "(2, 3) · (4, −1) სკალარული ნამრავლის ფორმულა:"
    options: ["2×3 + 4×(−1)", "2×4 + 3×(−1)", "2+4 and 3+(−1)", "2×4 − 3×1"]
    options_ka: ["2×3 + 4×(−1)", "2×4 + 3×(−1)", "2+4 და 3+(−1)", "2×4 − 3×1"]
    answer: 1
  - q: "The angle θ between two vectors satisfies cosθ = ?"
    q_ka: "ორ ვექტორს შორის კუთხე θ აკმაყოფილებს cosθ = ?"
    options: ["a·b", "(a·b)/(|a||b|)", "|a||b|", "a·b + |a||b|"]
    options_ka: ["a·b", "(a·b)/(|a||b|)", "|a||b|", "a·b + |a||b|"]
    answer: 1
  - q: "If a·b < 0, the angle between the vectors is:"
    q_ka: "თუ a·b < 0, ვექტორებს შორის კუთხე:"
    options: ["Acute (less than 90°)", "Exactly 90°", "Obtuse (greater than 90°)", "180°"]
    options_ka: ["ბლაგვი (90°-ზე ნაკლები)", "ზუსტად 90°", "მოღუნული (90°-ზე მეტი)", "180°"]
    answer: 2
---

<div class="lang-block lang-en">
<p>The dot product combines two vectors and produces a single number. Unlike vector addition (which gives a vector), the dot product gives a <strong>scalar</strong> — and that scalar tells you something deep about the angle between the vectors.</p>

<h2>The formula</h2>
<p><strong>a · b = a₁b₁ + a₂b₂</strong> (in 2D)</p>
<p><strong>a · b = a₁b₁ + a₂b₂ + a₃b₃</strong> (in 3D)</p>
<p>Also: <strong>a · b = |a| |b| cos θ</strong></p>
<p>These two forms are equal — and the equality lets you find angles.</p>

<h2>Finding the angle between vectors</h2>
<p>From the second formula: <strong>cos θ = (a · b) / (|a| |b|)</strong></p>
<p><strong>Example:</strong> Find the angle between <strong>a</strong> = (3, 1) and <strong>b</strong> = (1, 4).</p>
<p>a · b = 3(1) + 1(4) = 7</p>
<p>|a| = √10, |b| = √17</p>
<p>cos θ = 7 / (√10 · √17) = 7/√170 ≈ 0.537</p>
<p>θ = cos⁻¹(0.537) ≈ <strong>57.5°</strong></p>

<h2>Perpendicularity test</h2>
<p>If <strong>a · b = 0</strong>, the vectors are <strong>perpendicular</strong>. This is the fastest way to check or prove perpendicularity.</p>
<p><strong>Example:</strong> Prove (3, −4) and (4, 3) are perpendicular.</p>
<p>(3)(4) + (−4)(3) = 12 − 12 = <strong>0</strong> ✓</p>
</div>

<div class="lang-block lang-ka">
<p>სკალარული ნამრავლი ორ ვექტორს აერთიანებს და ერთ რიცხვს იძლევა. ვექტორული შეკრებისგან განსხვავებით (რომელიც ვექტორს იძლევა), სკალარული ნამრავლი იძლევა <strong>სკალარს</strong> — და ეს სკალარი ვექტორებს შორის კუთხეზე ღრმა ინფორმაციას გვაწვდის.</p>

<h2>ფორმულა</h2>
<p><strong>a · b = a₁b₁ + a₂b₂</strong> (2D-ში)</p>
<p><strong>a · b = a₁b₁ + a₂b₂ + a₃b₃</strong> (3D-ში)</p>
<p>ასევე: <strong>a · b = |a| |b| cos θ</strong></p>
<p>ეს ორი ფორმა ტოლია — და ეს ტოლობა კუთხეების პოვნის საშუალებას გვაძლევს.</p>

<h2>ვექტორებს შორის კუთხის პოვნა</h2>
<p>მეორე ფორმულიდან: <strong>cos θ = (a · b) / (|a| |b|)</strong></p>
<p><strong>მაგალითი:</strong> იპოვე კუთხე <strong>a</strong> = (3, 1) და <strong>b</strong> = (1, 4)-ს შორის.</p>
<p>a · b = 3(1) + 1(4) = 7</p>
<p>|a| = √10, |b| = √17</p>
<p>cos θ = 7 / (√10 · √17) = 7/√170 ≈ 0.537</p>
<p>θ = cos⁻¹(0.537) ≈ <strong>57.5°</strong></p>

<h2>პარპენდიკულარობის ტესტი</h2>
<p>თუ <strong>a · b = 0</strong>, ვექტორები <strong>პარპენდიკულარია</strong>. ეს პარპენდიკულარობის შემოწმების ან დამტკიცების ყველაზე სწრაფი გზაა.</p>
<p><strong>მაგალითი:</strong> დაამტკიცე, რომ (3, −4) და (4, 3) პარპენდიკულარია.</p>
<p>(3)(4) + (−4)(3) = 12 − 12 = <strong>0</strong> ✓</p>
</div>

<div class="playground-block">
  <div class="playground-label" data-en="⚡ Interactive — drag the angle and watch the dot product change" data-ka="⚡ ინტერაქტიული — გადაათრიე კუთხე და დაუყურე სკალარული ნამრავლის ცვლილებას">⚡ Interactive — drag the angle and watch the dot product change</div>
  <p data-en="Vector a is fixed (orange). Drag θ to rotate vector b. Watch the dot product: it's positive when θ < 90°, zero at 90°, negative when θ > 90°." data-ka="ვექტორი a ფიქსირებულია (ნარინჯისფერი). გადაათრიე θ ვექტორ b-ის მოსატრიალებლად. დაუყურე სკალარულ ნამრავლს: დადებითია, როდესაც θ < 90°, ნული 90°-ზე, უარყოფითი, როდესაც θ > 90°.">Vector <strong>a</strong> is fixed (orange). Drag <strong>θ</strong> to rotate vector <strong>b</strong>. Watch the dot product: it's positive when θ &lt; 90°, zero at 90°, negative when θ &gt; 90°.</p>
  <div id="calc-dot" style="width:100%;height:440px;border-radius:8px;overflow:hidden;"></div>
</div>

<div class="lang-block lang-en">
<div class="insight-box">
  <p><strong>Projection:</strong> The dot product a · b = |a||b|cosθ = |a| × (component of b in direction of a). It measures how much one vector "goes in the direction" of the other. When they're perpendicular, no component of b lies along a — dot product is zero.</p>
</div>

<div class="try-it">
  <h3>Practice</h3>
  <p>Vectors OA = (2, 1, −3) and OB = (1, 4, k). Find k if OA ⊥ OB.</p>
  <button class="reveal-btn">Show Answer</button>
  <div class="answer">
    <p>OA · OB = 0 for perpendicularity.</p>
    <p>2(1) + 1(4) + (−3)(k) = 0</p>
    <p>2 + 4 − 3k = 0 → 3k = 6 → <strong>k = 2</strong></p>
  </div>
</div>
</div>

<div class="lang-block lang-ka">
<div class="insight-box">
  <p><strong>პროექცია:</strong> სკალარული ნამრავლი a · b = |a||b|cosθ = |a| × (b-ის კომპონენტი a-ს მიმართულებით). ის ზომავს, რამდენად „მიდის" ერთი ვექტორი მეორის მიმართულებით. პარპენდიკულარულობისას b-ის ვერც ერთი კომპონენტი a-ს გასწვრივ არ დევს — სკალარული ნამრავლი ნულია.</p>
</div>

<div class="try-it">
  <h3>სავარჯიშო</h3>
  <p>ვექტორები OA = (2, 1, −3) და OB = (1, 4, k). იპოვე k, თუ OA ⊥ OB.</p>
  <button class="reveal-btn">პასუხის ჩვენება</button>
  <div class="answer">
    <p>პარპენდიკულარობისთვის OA · OB = 0.</p>
    <p>2(1) + 1(4) + (−3)(k) = 0</p>
    <p>2 + 4 − 3k = 0 → 3k = 6 → <strong>k = 2</strong></p>
  </div>
</div>
</div>

<script src="https://www.desmos.com/api/v1.7/calculator.js?apiKey=dcb31709b452b1cf9dc26972add0fda6"></script>
<script>
(function() {
  var c = Desmos.GraphingCalculator(document.getElementById('calc-dot'), {
    keypad: false, settingsMenu: false, zoomButtons: true, expressionsCollapsed: true
  });
  c.setMathBounds({ left: -2.5, right: 2.5, bottom: -2.5, top: 2.5 });
  c.setExpressions([
    { id: 'th', latex: '\\theta=0.5', sliderBounds: { min: 0, max: 6.28, step: 0.05 } },
    { id: 'a1', latex: 'a_x=1.5', hidden: true },
    { id: 'a2', latex: 'a_y=0.5', hidden: true },
    { id: 'b1', latex: 'b_x=\\cos(\\theta)', hidden: true },
    { id: 'b2', latex: 'b_y=\\sin(\\theta)', hidden: true },
    { id: 'dp', latex: 'D=a_x b_x+a_y b_y', label: 'dot product' },
    { id: 'va', latex: '(ta_x,ta_y)', color: '#FB923C', lineWidth: 3, parametricDomain: { min: 0, max: 1 }, label: 'a' },
    { id: 'vb', latex: '(tb_x,tb_y)', color: '#22D3EE', lineWidth: 3, parametricDomain: { min: 0, max: 1 }, label: 'b' }
  ]);
})();
</script>
