---
title: "Domain and Range — what goes in, what comes out"
title-ka: "განსაზღვრის არე და მნიშვნელობათა სიმრავლე — რა შედის, რა გამოდის"
subtitle: "Domain is every x that makes the function work. Range is every y it can actually produce."
subtitle-ka: "განსაზღვრის არე — ყველა x, რომელზეც ფუნქცია მუშაობს. მნიშვნელობათა სიმრავლე — ყველა y, რისი გამოვლენაც შეუძლია."
topic: functions
topic-color: "#00C4FF"
interactive: true
tags: [IGCSE, IB, A-Level, Functions]
quiz:
  - q: "What is the domain of f(x) = 1/x?"
    q_ka: "რა არის f(x) = 1/x-ის განსაზღვრის არე?"
    options: ["All real numbers", "x ≠ 0", "x > 0", "x ≥ 0"]
    options_ka: ["ყველა რეალური რიცხვი", "x ≠ 0", "x > 0", "x ≥ 0"]
    answer: 1
  - q: "What is the domain of g(x) = √(x − 3)?"
    q_ka: "რა არის g(x) = √(x − 3)-ის განსაზღვრის არე?"
    options: ["x > 3", "x ≥ 3", "x ≤ 3", "All real numbers"]
    options_ka: ["x > 3", "x ≥ 3", "x ≤ 3", "ყველა რეალური რიცხვი"]
    answer: 1
  - q: "The range of f(x) = x² is:"
    q_ka: "f(x) = x²-ის მნიშვნელობათა სიმრავლეა:"
    options: ["All real numbers", "x ≥ 0", "y ≥ 0", "y > 0"]
    options_ka: ["ყველა რეალური რიცხვი", "x ≥ 0", "y ≥ 0", "y > 0"]
    answer: 2
  - q: "Which x-value is excluded from the domain of f(x) = (x+2)/(x−5)?"
    q_ka: "რომელი x-ის მნიშვნელობა გამოირიცხება f(x) = (x+2)/(x−5)-ის განსაზღვრის არიდან?"
    options: ["x = −2", "x = 5", "x = 0", "x = 2"]
    options_ka: ["x = −2", "x = 5", "x = 0", "x = 2"]
    answer: 1
  - q: "The range of sin(x) is:"
    q_ka: "sin(x)-ის მნიშვნელობათა სიმრავლეა:"
    options: ["All real numbers", "0 to 1", "−1 to 1", "0 to 2π"]
    options_ka: ["ყველა რეალური რიცხვი", "0-დან 1-მდე", "−1-დან 1-მდე", "0-დან 2π-მდე"]
    answer: 2
---

<div class="lang-block lang-en">
<p>Every function has a <strong>domain</strong> (the set of inputs that are allowed) and a <strong>range</strong> (the set of outputs it can produce). Understanding these is essential for avoiding errors and answering exam questions correctly.</p>

<h2>Two things that restrict the domain</h2>

<ol>
  <li><strong>Division by zero</strong> — exclude any x that makes the denominator 0</li>
  <li><strong>Square roots (and even roots) of negatives</strong> — the expression under the root must be ≥ 0</li>
</ol>

<h2>Finding the domain</h2>

<ul>
  <li>f(x) = 1/(x − 4): exclude x = 4. Domain: x ≠ 4.</li>
  <li>f(x) = √(2x − 6): need 2x − 6 ≥ 0 → x ≥ 3. Domain: x ≥ 3.</li>
  <li>f(x) = ln(x): need x &gt; 0. Domain: x &gt; 0.</li>
  <li>f(x) = x² + 3x: no restrictions. Domain: all real numbers.</li>
</ul>
</div>

<div class="lang-block lang-ka">
<p>ყოველ ფუნქციას გააჩნია <strong>განსაზღვრის არე</strong> (დაშვებული შეყვანების სიმრავლე) და <strong>მნიშვნელობათა სიმრავლე</strong> (გამოვლენადი გამოსვლების სიმრავლე). ამის გაგება აუცილებელია შეცდომების თავიდან ასაცილებლად და გამოცდის კითხვებზე სწორად პასუხისთვის.</p>

<h2>ორი რამ, რაც განსაზღვრის არეს ზღუდავს</h2>

<ol>
  <li><strong>ნულზე გაყოფა</strong> — გამოვრიცხოთ ნებისმიერი x, რომელიც მნიშვნელს ნულს გახდის</li>
  <li><strong>უარყოფითი რიცხვის კვადრატული ფესვი</strong> — ფესვის ქვეშ გამოთქმა ≥ 0 უნდა იყოს</li>
</ol>

<h2>განსაზღვრის არის პოვნა</h2>

<ul>
  <li>f(x) = 1/(x − 4): გამოვრიცხოთ x = 4. განსაზღვრის არე: x ≠ 4.</li>
  <li>f(x) = √(2x − 6): საჭიროა 2x − 6 ≥ 0 → x ≥ 3. განსაზღვრის არე: x ≥ 3.</li>
  <li>f(x) = ln(x): საჭიროა x &gt; 0. განსაზღვრის არე: x &gt; 0.</li>
  <li>f(x) = x² + 3x: შეზღუდვა არ არის. განსაზღვრის არე: ყველა რეალური რიცხვი.</li>
</ul>
</div>

<div class="playground-block">
  <div class="playground-label" data-en="⚡ Interactive — adjust k and see the domain restriction" data-ka="⚡ ინტერაქტიული — შეცვალე k და ნახე განსაზღვრის არის შეზღუდვა">⚡ Interactive — adjust k and see the domain restriction</div>
  <p data-en="The function is y = √(x − k). Drag k and watch the domain start point shift. The curve only exists where x ≥ k — the domain restriction is visible." data-ka="ფუნქცია: y = √(x − k). გადაათრიე k და ნახე, როგორ გადაადგილდება განსაზღვრის არის საწყისი წერტილი. მრუდი მხოლოდ იქ არსებობს, სადაც x ≥ k — განსაზღვრის არის შეზღუდვა ჩანს.">The function is y = √(x − k). Drag <strong>k</strong> and watch the domain start point shift. The curve only exists where x ≥ k — the domain restriction is visible.</p>
  <div id="calc-dom" style="width:100%;height:400px;border-radius:8px;overflow:hidden;"></div>
</div>

<div class="lang-block lang-en">
<div class="insight-box">
  <p><strong>Finding the range:</strong> Once you have the graph, the range is everything on the y-axis the graph reaches. For y = √(x−k), the output is always ≥ 0 (square roots don't produce negatives), so the range is y ≥ 0 regardless of k.</p>
</div>

<h2>Notation</h2>

<p>Domain and range use interval notation:</p>
<ul>
  <li>x ≥ 3 → [3, ∞)</li>
  <li>x &gt; 3 → (3, ∞)</li>
  <li>−1 ≤ x ≤ 1 → [−1, 1]</li>
  <li>x ≠ 0 → (−∞, 0) ∪ (0, ∞)</li>
</ul>

<p>The square bracket <strong>[</strong> means "including", the round bracket <strong>(</strong> means "excluding."</p>

<div class="try-it">
  <h3>Practice</h3>
  <p>Find the domain and range of f(x) = √(9 − x²).</p>
  <button class="reveal-btn">Show Answer</button>
  <div class="answer">
    <p>Domain: need 9 − x² ≥ 0 → x² ≤ 9 → −3 ≤ x ≤ 3. Domain: [−3, 3].</p>
    <p>The maximum of 9 − x² is 9 (at x = 0), minimum is 0 (at x = ±3).</p>
    <p>Range: 0 ≤ y ≤ 3 → <strong>[0, 3]</strong>. (This is the upper half of a circle of radius 3.)</p>
  </div>
</div>
</div>

<div class="lang-block lang-ka">
<div class="insight-box">
  <p><strong>მნიშვნელობათა სიმრავლის პოვნა:</strong> გრაფიკის ამგება შემდეგ, მნიშვნელობათა სიმრავლე არის ყველაფერი y-ღერძზე, რასაც გრაფიკი აღწევს. y = √(x−k)-სთვის, გამოსვლა ყოველთვის ≥ 0-ია (კვადრატული ფესვები უარყოფითს არ იძლევა), ასე რომ მნიშვნელობათა სიმრავლე y ≥ 0 არის k-სგან დამოუკიდებლად.</p>
</div>

<h2>აღნიშვნა</h2>

<p>განსაზღვრის არე და მნიშვნელობათა სიმრავლე ინტერვალური აღნიშვნით:</p>
<ul>
  <li>x ≥ 3 → [3, ∞)</li>
  <li>x &gt; 3 → (3, ∞)</li>
  <li>−1 ≤ x ≤ 1 → [−1, 1]</li>
  <li>x ≠ 0 → (−∞, 0) ∪ (0, ∞)</li>
</ul>

<p>კვადრატული ფრჩხილი <strong>[</strong> ნიშნავს "ჩათვლით", მრგვალი ფრჩხილი <strong>(</strong> ნიშნავს "გამოკლებით."</p>

<div class="try-it">
  <h3>სავარჯიშო</h3>
  <p>იპოვე f(x) = √(9 − x²)-ის განსაზღვრის არე და მნიშვნელობათა სიმრავლე.</p>
  <button class="reveal-btn">პასუხის ჩვენება</button>
  <div class="answer">
    <p>განსაზღვრის არე: საჭიროა 9 − x² ≥ 0 → x² ≤ 9 → −3 ≤ x ≤ 3. განსაზღვრის არე: [−3, 3].</p>
    <p>9 − x²-ის მაქსიმუმი 9-ია (x = 0-ზე), მინიმუმი 0-ია (x = ±3-ზე).</p>
    <p>მნიშვნელობათა სიმრავლე: 0 ≤ y ≤ 3 → <strong>[0, 3]</strong>. (ეს არის 3 რადიუსის წრის ზედა ნახევარი.)</p>
  </div>
</div>
</div>

<script src="https://www.desmos.com/api/v1.7/calculator.js?apiKey=dcb31709b452b1cf9dc26972add0fda6"></script>
<script>
(function() {
  var c = Desmos.GraphingCalculator(document.getElementById('calc-dom'), {
    keypad: false, settingsMenu: false, zoomButtons: true, expressionsCollapsed: true
  });
  c.setMathBounds({ left: -4, right: 8, bottom: -1, top: 6 });
  c.setExpressions([
    { id: 'k',  latex: 'k=2',  sliderBounds: { min: -3, max: 5, step: 0.5 } },
    { id: 'f',  latex: 'y=\\sqrt{x-k}\\left\\{x\\ge k\\right\\}', color: '#00C4FF', lineWidth: 2.5 },
    { id: 'pt', latex: '(k, 0)', color: '#FFD700', pointSize: 12,
                showLabel: true, label: 'domain starts at x = k' }
  ]);
})();
</script>
