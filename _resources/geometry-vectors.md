---
title: "Vectors — direction and magnitude together"
title-ka: "ვექტორები — მიმართულება და სიმძლავრე ერთად"
subtitle: "A vector is not just a number — it has both size and direction. That changes everything."
subtitle-ka: "ვექტორი მხოლოდ რიცხვი არ არის — მას აქვს როგორც ზომა, ასევე მიმართულება. ეს ყველაფერს ცვლის."
topic: geometry
topic-color: "#FB923C"
interactive: true
tags: [IGCSE, IB, A-Level, Geometry]
quiz:
  - q: "The magnitude of vector (3, 4) is:"
    q_ka: "ვექტორ (3, 4)-ის მოდული არის:"
    options: ["7", "5", "√7", "12"]
    options_ka: ["7", "5", "√7", "12"]
    answer: 1
  - q: "If a = (2, 3) and b = (−1, 4), what is a + b?"
    q_ka: "თუ a = (2, 3) და b = (−1, 4), რა არის a + b?"
    options: ["(1, 7)", "(3, −1)", "(−2, 12)", "(1, 1)"]
    options_ka: ["(1, 7)", "(3, −1)", "(−2, 12)", "(1, 1)"]
    answer: 0
  - q: "A unit vector has magnitude:"
    q_ka: "ერთეულოვანი ვექტორის მოდული არის:"
    options: ["0", "1", "Equal to its direction", "Undefined"]
    options_ka: ["0", "1", "ტოლი მიმართულებისა", "განუსაზღვრელი"]
    answer: 1
  - q: "2a means:"
    q_ka: "2a ნიშნავს:"
    options: ["a rotated by 2", "A vector in the same direction as a but twice as long", "A vector with magnitude 2", "a + a in perpendicular directions"]
    options_ka: ["a 2-ით მოტრიალებული", "ვექტორი a-ს იმავე მიმართულებით, მაგრამ ორჯერ გრძელი", "ვექტორი მოდულით 2", "a + a პარპენდიკულარულ მიმართულებებში"]
    answer: 1
  - q: "If AB = b − a, and M is the midpoint of AB, then OM ="
    q_ka: "თუ AB = b − a, და M არის AB-ის შუა წერტილი, მაშინ OM ="
    options: ["(a + b)/2", "b − a", "a − b", "(b − a)/2"]
    options_ka: ["(a + b)/2", "b − a", "a − b", "(b − a)/2"]
    answer: 0
---

<div class="lang-block lang-en">
<p>Scalars have only magnitude (temperature, mass, speed). Vectors have both <strong>magnitude and direction</strong> (velocity, displacement, force). This distinction is fundamental in physics, geometry, and all of higher mathematics.</p>
<p>A vector is written as a column (2D): <strong>a</strong> = (3, −2) or a = 3<strong>i</strong> − 2<strong>j</strong>.</p>

<h2>Vector operations</h2>
<p><strong>Addition:</strong> (a₁, a₂) + (b₁, b₂) = (a₁ + b₁, a₂ + b₂)</p>
<p>Think of placing arrows tip-to-tail. The sum is the arrow from start to final tip.</p>
<p><strong>Scalar multiplication:</strong> k(a₁, a₂) = (ka₁, ka₂)</p>
<p>Stretches (or reverses if k &lt; 0) the vector without changing direction.</p>
<p><strong>Magnitude:</strong> |<strong>a</strong>| = √(a₁² + a₂²)</p>
</div>

<div class="lang-block lang-ka">
<p>სკალარებს მხოლოდ სიმძლავრე აქვს (ტემპერატურა, მასა, სიჩქარე). ვექტორებს გააჩნია როგორც <strong>სიმძლავრე, ასევე მიმართულება</strong> (სიჩქარე, გადაადგილება, ძალა). ეს განსხვავება ფუნდამენტალურია ფიზიკაში, გეომეტრიასა და მთელ მაღალ მათემატიკაში.</p>
<p>ვექტორი წარმოდგება სვეტად (2D-ში): <strong>a</strong> = (3, −2) ან a = 3<strong>i</strong> − 2<strong>j</strong>.</p>

<h2>ვექტორული ოპერაციები</h2>
<p><strong>შეკრება:</strong> (a₁, a₂) + (b₁, b₂) = (a₁ + b₁, a₂ + b₂)</p>
<p>წარმოიდგინე ისრების თავბოლოდ დადება. ჯამი — ისარი დასაწყისიდან ბოლო წვეროსამდე.</p>
<p><strong>სკალარული გამრავლება:</strong> k(a₁, a₂) = (ka₁, ka₂)</p>
<p>ვექტორს ჭიმავს (ან გარდაქმნის, თუ k &lt; 0) მიმართულების შეუცვლელად.</p>
<p><strong>მოდული:</strong> |<strong>a</strong>| = √(a₁² + a₂²)</p>
</div>

<div class="playground-block">
  <div class="playground-label" data-en="⚡ Interactive — drag components to see vector addition" data-ka="⚡ ინტერაქტიული — გადაათრიე კომპონენტები ვექტორების შეკრების სანახავად">⚡ Interactive — drag components to see vector addition</div>
  <p data-en="Vector a is orange, vector b is pink. The green arrow is a + b — the resultant. Drag the a₁, a₂, b₁, b₂ sliders and watch the parallelogram of addition form." data-ka="ვექტორი a ნარინჯისფერია, ვექტორი b — ვარდისფერი. მწვანე ისარი არის a + b — შედეგი. გადაათრიე a₁, a₂, b₁, b₂ სლაიდერები და დაუყურე, როგორ იქმნება შეკრების პარალელოგრამი.">Vector <strong>a</strong> is orange, vector <strong>b</strong> is pink. The green arrow is <strong>a + b</strong> — the resultant. Drag the a₁, a₂, b₁, b₂ sliders and watch the parallelogram of addition form.</p>
  <div id="calc-vec" style="width:100%;height:440px;border-radius:8px;overflow:hidden;"></div>
</div>

<div class="lang-block lang-en">
<div class="insight-box">
  <p><strong>Position vectors:</strong> If O is the origin, the position vector of point P is OP = p. Then the vector from A to B is AB = b − a (subtract where you start, keep where you end). This is the single most useful fact in vector geometry.</p>
</div>

<h2>Finding the midpoint</h2>
<p>If A has position vector <strong>a</strong> and B has position vector <strong>b</strong>, the midpoint M has position vector:</p>
<p><strong>OM = (a + b)/2</strong></p>
<p>This is just the average of the two position vectors — same idea as the midpoint formula in coordinates.</p>

<h2>Unit vectors</h2>
<p>A unit vector has magnitude 1 and points in the given direction:</p>
<p><strong>â = a / |a|</strong></p>
<p>To make <strong>a</strong> = (3, 4) a unit vector: |a| = 5, so <strong>â</strong> = (3/5, 4/5).</p>

<div class="try-it">
  <h3>Practice</h3>
  <p>A = position vector (1, 3), B = position vector (7, 11). Find AB and its magnitude. Find the midpoint M.</p>
  <button class="reveal-btn">Show Answer</button>
  <div class="answer">
    <p>AB = b − a = (7−1, 11−3) = (6, 8)</p>
    <p>|AB| = √(36 + 64) = √100 = <strong>10</strong></p>
    <p>OM = (a + b)/2 = (8/2, 14/2) = <strong>(4, 7)</strong></p>
  </div>
</div>
</div>

<div class="lang-block lang-ka">
<div class="insight-box">
  <p><strong>პოზიციის ვექტორები:</strong> თუ O სათავეა, წერტილ P-ის პოზიციის ვექტორი არის OP = p. შემდეგ A-დან B-მდე ვექტორი არის AB = b − a (გამოაკლე სათავე, დატოვე ბოლო). ეს ვექტორულ გეომეტრიაში ყველაზე სასარგებლო ფაქტია.</p>
</div>

<h2>შუა წერტილის პოვნა</h2>
<p>თუ A-ს პოზიციის ვექტორი არის <strong>a</strong> და B-ს — <strong>b</strong>, შუა წერტილ M-ის პოზიციის ვექტორი:</p>
<p><strong>OM = (a + b)/2</strong></p>
<p>ეს მხოლოდ ორი პოზიციის ვექტორის საშუალოა — იგივე იდეა, რაც კოორდინატებში შუა წერტილის ფორმულა.</p>

<h2>ერთეულოვანი ვექტორები</h2>
<p>ერთეულოვან ვექტორს მოდული 1-ია და მოცემული მიმართულებით მიუთითებს:</p>
<p><strong>â = a / |a|</strong></p>
<p><strong>a</strong> = (3, 4) ერთეულოვანი ვექტორის გასახდელად: |a| = 5, ამდენად <strong>â</strong> = (3/5, 4/5).</p>

<div class="try-it">
  <h3>სავარჯიშო</h3>
  <p>A = პოზიციის ვექტორი (1, 3), B = პოზიციის ვექტორი (7, 11). იპოვე AB და მისი მოდული. იპოვე შუა წერტილი M.</p>
  <button class="reveal-btn">პასუხის ჩვენება</button>
  <div class="answer">
    <p>AB = b − a = (7−1, 11−3) = (6, 8)</p>
    <p>|AB| = √(36 + 64) = √100 = <strong>10</strong></p>
    <p>OM = (a + b)/2 = (8/2, 14/2) = <strong>(4, 7)</strong></p>
  </div>
</div>
</div>

<script src="https://www.desmos.com/api/v1.7/calculator.js?apiKey=dcb31709b452b1cf9dc26972add0fda6"></script>
<script>
(function() {
  var c = Desmos.GraphingCalculator(document.getElementById('calc-vec'), {
    keypad: false, settingsMenu: false, zoomButtons: true, expressionsCollapsed: true
  });
  c.setMathBounds({ left: -2, right: 10, bottom: -2, top: 9 });
  c.setExpressions([
    { id: 'a1', latex: 'a_1=3', sliderBounds: { min: -4, max: 6, step: 0.5 } },
    { id: 'a2', latex: 'a_2=1', sliderBounds: { min: -4, max: 6, step: 0.5 } },
    { id: 'b1', latex: 'b_1=2', sliderBounds: { min: -4, max: 6, step: 0.5 } },
    { id: 'b2', latex: 'b_2=4', sliderBounds: { min: -4, max: 6, step: 0.5 } },
    { id: 'va', latex: '\\left(ta_1, ta_2\\right)', color: '#FB923C', lineWidth: 3,
                parametricDomain: { min: 0, max: 1 }, label: 'a' },
    { id: 'vb', latex: '\\left(a_1+tb_1, a_2+tb_2\\right)', color: '#FF6B9D', lineWidth: 3,
                parametricDomain: { min: 0, max: 1 }, label: 'b' },
    { id: 'vs', latex: '\\left(t(a_1+b_1), t(a_2+b_2)\\right)', color: '#34D399', lineWidth: 3,
                parametricDomain: { min: 0, max: 1 }, label: 'a+b' }
  ]);
})();
</script>
