---
title: "Lines and Planes in 3D"
title-ka: "სიმართლეები და სიბრტყეები 3D-ში"
subtitle: "The third dimension changes everything. Lines become rays in space; planes are infinite flat sheets."
subtitle-ka: "მესამე განზომილება ყველაფერს ცვლის. სიმართლეები სივრცეში სხივები ხდება; სიბრტყეები — უსასრულო ბრტყელი ფურცლები."
topic: geometry
topic-color: "#FB923C"
interactive: true
tags: [IB, A-Level, Geometry]
quiz:
  - q: "The vector equation of a line through A with direction d is:"
    q_ka: "A-ის გამავალი სიმართლის ვექტორული განტოლება d მიმართულებით:"
    options: ["r = d + ta", "r = a + td", "r = a × d", "r = t(a + d)"]
    options_ka: ["r = d + ta", "r = a + td", "r = a × d", "r = t(a + d)"]
    answer: 1
  - q: "Two lines in 3D that don't intersect and aren't parallel are called:"
    q_ka: "ორი სიმართლე 3D-ში, რომლებიც არ კვეთენ ერთმანეთს და პარალელური არ არის, ეწოდება:"
    options: ["Parallel lines", "Perpendicular lines", "Skew lines", "Coincident lines"]
    options_ka: ["პარალელური სიმართლეები", "პარპენდიკულარული სიმართლეები", "ასიმფტოტური სიმართლეები", "დამთხვეული სიმართლეები"]
    answer: 2
  - q: "The equation of a plane with normal n through point A is:"
    q_ka: "სიბრტყის განტოლება ნორმალით n, A წერტილის გამავალი:"
    options: ["n · (r − a) = 0", "r = a + tn", "r · a = n", "n = r − a"]
    options_ka: ["n · (r − a) = 0", "r = a + tn", "r · a = n", "n = r − a"]
    answer: 0
  - q: "To find where a line meets a plane, you:"
    q_ka: "სიმართლისა და სიბრტყის გადაკვეთის საპოვნელად:"
    options: ["Set the line equal to the plane equation and solve for t", "Find the cross product", "Set both equations to zero", "Use the dot product only"]
    options_ka: ["ჩაიდე სიმართლე სიბრტყის განტოლებაში და ამოხსენი t-ზე", "იპოვე ვექტორული ნამრავლი", "ორივე განტოლება ნულს გაუტოლე", "გამოიყენე მხოლოდ სკალარული ნამრავლი"]
    answer: 0
  - q: "The normal vector to the plane 2x − 3y + z = 5 is:"
    q_ka: "სიბრტყის 2x − 3y + z = 5 ნორმალური ვექტორი არის:"
    options: ["(2, 3, 1)", "(2, −3, 1)", "(5, 5, 5)", "(−2, 3, −1)"]
    options_ka: ["(2, 3, 1)", "(2, −3, 1)", "(5, 5, 5)", "(−2, 3, −1)"]
    answer: 1
---

<div class="lang-block lang-en">
<p>In 3D geometry, the tools are the same (vectors, equations) but the objects are richer. Lines have direction vectors; planes have normal vectors. The interplay between them is the core of 3D geometry.</p>

<h2>Lines in 3D</h2>
<p>A line passes through point <strong>a</strong> in direction <strong>d</strong>. Its vector equation:</p>
<p><strong>r = a + t·d</strong> (t ∈ ℝ)</p>
<p>Every value of t gives a different point on the line.</p>
<p><strong>Example:</strong> Line through (1, 2, −1) in direction (3, 0, 1):</p>
<p>r = (1, 2, −1) + t(3, 0, 1) = (1 + 3t, 2, −1 + t)</p>

<h2>Planes in 3D</h2>
<p>A plane is defined by a point <strong>a</strong> on it and a <strong>normal vector n</strong> perpendicular to it:</p>
<p><strong>n · (r − a) = 0</strong>, which expands to <strong>n₁x + n₂y + n₃z = d</strong></p>
<p><strong>Example:</strong> Plane with normal (2, 1, −3) through (0, 0, 1):</p>
<p>2x + y − 3z = 2(0) + 1(0) − 3(1) = −3, so <strong>2x + y − 3z = −3</strong></p>
</div>

<div class="lang-block lang-ka">
<p>3D გეომეტრიაში ხელსაწყოები იგივეა (ვექტორები, განტოლებები), მაგრამ ობიექტები უფრო მდიდარია. სიმართლეებს მიმართულების ვექტორები აქვს; სიბრტყეებს — ნორმალური ვექტორები. მათ შორის ურთიერთქმედება 3D გეომეტრიის ბირთვია.</p>

<h2>სიმართლეები 3D-ში</h2>
<p>სიმართლე გადის <strong>a</strong> წერტილს <strong>d</strong> მიმართულებით. მისი ვექტორული განტოლება:</p>
<p><strong>r = a + t·d</strong> (t ∈ ℝ)</p>
<p>t-ის ყოველი მნიშვნელობა სიმართლეზე სხვადასხვა წერტილს იძლევა.</p>
<p><strong>მაგალითი:</strong> სიმართლე (1, 2, −1)-ის გამავალი (3, 0, 1) მიმართულებით:</p>
<p>r = (1, 2, −1) + t(3, 0, 1) = (1 + 3t, 2, −1 + t)</p>

<h2>სიბრტყეები 3D-ში</h2>
<p>სიბრტყე განისაზღვრება <strong>a</strong> წერტილით მასზე და <strong>ნორმალური ვექტორით n</strong>, რომელიც მის პარპენდიკულარია:</p>
<p><strong>n · (r − a) = 0</strong>, რაც ფართოვდება <strong>n₁x + n₂y + n₃z = d</strong>-მდე</p>
<p><strong>მაგალითი:</strong> სიბრტყე ნორმალით (2, 1, −3) (0, 0, 1)-ის გამავალი:</p>
<p>2x + y − 3z = 2(0) + 1(0) − 3(1) = −3, ამდენად <strong>2x + y − 3z = −3</strong></p>
</div>

<div class="playground-block">
  <div class="playground-label" data-en="⚡ Interactive — parametric line in 3D (projected to 2D)" data-ka="⚡ ინტერაქტიული — პარამეტრული სიმართლე 3D-ში (2D-ზე პროექტირებული)">⚡ Interactive — parametric line in 3D (projected to 2D)</div>
  <p data-en="A parametric line: x = a₁ + t·d₁, y = a₂ + t·d₂. Drag t to move along the line. Drag the direction components to change the line's orientation. This shows the 2D shadow of a 3D concept." data-ka="პარამეტრული სიმართლე: x = a₁ + t·d₁, y = a₂ + t·d₂. გადაათრიე t სიმართლეზე გადასაადგილებლად. გადაათრიე მიმართულების კომპონენტები სიმართლის ორიენტაციის შესაცვლელად. ეს გვიჩვენებს 3D კონცეფციის 2D ჩრდილს.">A parametric line: x = a₁ + t·d₁, y = a₂ + t·d₂. Drag <strong>t</strong> to move along the line. Drag the direction components to change the line's orientation. This shows the 2D shadow of a 3D concept.</p>
  <div id="calc-3d" style="width:100%;height:420px;border-radius:8px;overflow:hidden;"></div>
</div>

<div class="lang-block lang-en">
<div class="insight-box">
  <p><strong>Skew lines:</strong> In 3D, two lines can be neither intersecting nor parallel — they pass each other in different planes. This cannot happen in 2D. Skew lines have no common point and non-parallel direction vectors.</p>
</div>

<h2>Finding the intersection of a line and a plane</h2>
<p><strong>Line:</strong> r = (1, 0, 2) + t(1, 2, −1)</p>
<p><strong>Plane:</strong> x + y + z = 6</p>
<p>Substitute the line into the plane:</p>
<p>(1 + t) + (2t) + (2 − t) = 6</p>
<p>3 + 2t = 6 → t = 3/2</p>
<p>Point: (1 + 3/2, 3, 2 − 3/2) = <strong>(5/2, 3, 1/2)</strong></p>

<h2>Angle between a line and a plane</h2>
<p>The angle φ between line direction <strong>d</strong> and plane normal <strong>n</strong>:</p>
<p>sin φ = |d · n| / (|d| |n|)</p>
<p>(Note: we use sin here, not cos, because the angle between the line and the plane is the complement of the angle between the line and the normal.)</p>

<div class="try-it">
  <h3>Practice</h3>
  <p>Find where the line r = (2, −1, 3) + t(1, 2, −2) meets the plane x + 2y − z = 1.</p>
  <button class="reveal-btn">Show Answer</button>
  <div class="answer">
    <p>Substitute: (2+t) + 2(−1+2t) − (3−2t) = 1</p>
    <p>2 + t − 2 + 4t − 3 + 2t = 1</p>
    <p>7t − 3 = 1 → 7t = 4 → t = 4/7</p>
    <p>Point: (2 + 4/7, −1 + 8/7, 3 − 8/7) = <strong>(18/7, 1/7, 13/7)</strong></p>
  </div>
</div>
</div>

<div class="lang-block lang-ka">
<div class="insight-box">
  <p><strong>ასიმფტოტური სიმართლეები:</strong> 3D-ში ორი სიმართლე შეიძლება არც კვეთდეს ერთმანეთს და პარალელური არც იყოს — ისინი სხვადასხვა სიბრტყეში ერთმანეთს გაივლიან. ეს 2D-ში შეუძლებელია. ასიმფტოტურ სიმართლეებს არ გააჩნია საერთო წერტილი და არ გააჩნია პარალელური მიმართულების ვექტორები.</p>
</div>

<h2>სიმართლისა და სიბრტყის გადაკვეთის პოვნა</h2>
<p><strong>სიმართლე:</strong> r = (1, 0, 2) + t(1, 2, −1)</p>
<p><strong>სიბრტყე:</strong> x + y + z = 6</p>
<p>ჩავსვათ სიმართლე სიბრტყეში:</p>
<p>(1 + t) + (2t) + (2 − t) = 6</p>
<p>3 + 2t = 6 → t = 3/2</p>
<p>წერტილი: (1 + 3/2, 3, 2 − 3/2) = <strong>(5/2, 3, 1/2)</strong></p>

<h2>სიმართლესა და სიბრტყეს შორის კუთხე</h2>
<p>კუთხე φ სიმართლის მიმართულება <strong>d</strong> და სიბრტყის ნორმალი <strong>n</strong> შორის:</p>
<p>sin φ = |d · n| / (|d| |n|)</p>
<p>(შენიშვნა: აქ sin გამოვიყენებთ, არა cos, რადგან სიმართლესა და სიბრტყეს შორის კუთხე სიმართლესა და ნორმალს შორის კუთხის დამატებაა 90°-მდე.)</p>

<div class="try-it">
  <h3>სავარჯიშო</h3>
  <p>იპოვე სად კვეთს სიმართლე r = (2, −1, 3) + t(1, 2, −2) სიბრტყე x + 2y − z = 1-ს.</p>
  <button class="reveal-btn">პასუხის ჩვენება</button>
  <div class="answer">
    <p>ჩავსვათ: (2+t) + 2(−1+2t) − (3−2t) = 1</p>
    <p>2 + t − 2 + 4t − 3 + 2t = 1</p>
    <p>7t − 3 = 1 → 7t = 4 → t = 4/7</p>
    <p>წერტილი: (2 + 4/7, −1 + 8/7, 3 − 8/7) = <strong>(18/7, 1/7, 13/7)</strong></p>
  </div>
</div>
</div>

<script src="https://www.desmos.com/api/v1.7/calculator.js?apiKey=dcb31709b452b1cf9dc26972add0fda6"></script>
<script>
(function() {
  var c = Desmos.GraphingCalculator(document.getElementById('calc-3d'), {
    keypad: false, settingsMenu: false, zoomButtons: true, expressionsCollapsed: true
  });
  c.setMathBounds({ left: -6, right: 8, bottom: -5, top: 7 });
  c.setExpressions([
    { id: 'a1', latex: 'a_1=0',  sliderBounds: { min: -4, max: 4, step: 0.5 } },
    { id: 'a2', latex: 'a_2=1',  sliderBounds: { min: -4, max: 4, step: 0.5 } },
    { id: 'd1', latex: 'd_1=2',  sliderBounds: { min: -3, max: 3, step: 0.5 } },
    { id: 'd2', latex: 'd_2=1',  sliderBounds: { min: -3, max: 3, step: 0.5 } },
    { id: 't',  latex: 't=0',    sliderBounds: { min: -3, max: 3, step: 0.1 } },
    { id: 'line', latex: 'y=a_2+(d_2/d_1)(x-a_1)', color: '#FB923C', lineWidth: 2.5, label: 'line' },
    { id: 'pt',   latex: '(a_1+d_1 t, a_2+d_2 t)', color: '#FFD700', pointSize: 12,
                  showLabel: true, label: 'point at parameter t' }
  ]);
})();
</script>
