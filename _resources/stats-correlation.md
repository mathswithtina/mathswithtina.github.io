---
title: "Correlation vs Causation — the most important distinction in statistics"
title-ka: "კორელაცია vs მიზეზ-შედეგობა — სტატისტიკის ყველაზე მნიშვნელოვანი განსხვავება"
subtitle: "Ice cream sales correlate with drowning deaths. Ice cream doesn't cause drowning. Here's what's really going on."
subtitle-ka: "ნაყინის გაყიდვები კოლელირებს დახრჩობებთან. ნაყინი დახრჩობას არ იწვევს. ეს არის ის, რაც სინამდვილეში ხდება."
topic: statistics
topic-color: "#34D399"
interactive: true
tags: [IB, A-Level, Statistics]
quiz:
  - q: "A correlation coefficient of −0.95 indicates:"
    q_ka: "კორელაციის კოეფიციენტი −0.95 მიუთითებს:"
    options: ["A weak positive relationship", "A strong positive relationship", "A strong negative relationship", "No relationship"]
    options_ka: ["სუსტ დადებით კავშირს", "ძლიერ დადებით კავშირს", "ძლიერ უარყოფით კავშირს", "კავშირის არარსებობას"]
    answer: 2
  - q: "Correlation between A and B implies:"
    q_ka: "A და B-ს შორის კორელაცია გულისხმობს:"
    options: ["A causes B", "B causes A", "A and B move together, but causation is not established", "No relationship"]
    options_ka: ["A იწვევს B-ს", "B იწვევს A-ს", "A და B ერთად მოძრაობს, მაგრამ მიზეზ-შედეგობა დადგენილი არ არის", "კავშირი არ არის"]
    answer: 2
  - q: "The correlation coefficient r always lies between:"
    q_ka: "კორელაციის კოეფიციენტი r ყოველთვის მდებარეობს:"
    options: ["0 and 1", "−1 and 0", "−1 and 1", "−∞ and ∞"]
    options_ka: ["0-სა და 1-ს შორის", "−1-სა და 0-ს შორის", "−1-სა და 1-ს შორის", "−∞-სა და ∞-ს შორის"]
    answer: 2
  - q: "A confounding variable is:"
    q_ka: "მომრევი ცვლადი არის:"
    options: ["A variable that causes both A and B", "A variable with r = 0", "An outlier", "The dependent variable"]
    options_ka: ["ცვლადი, რომელიც A-სა და B-ს ორივეს იწვევს", "ცვლადი სადაც r = 0", "გამონაკლისი", "დამოკიდებული ცვლადი"]
    answer: 0
  - q: "Which of these would be strong evidence of causation (not just correlation)?"
    q_ka: "რომელი ეს იქნება მიზეზ-შედეგობის ძლიერი მტკიცებულება (და არა მხოლოდ კორელაცია)?"
    options: ["A high correlation coefficient", "A controlled experiment with randomisation", "A large dataset", "A scatterplot with clear pattern"]
    options_ka: ["მაღალი კორელაციის კოეფიციენტი", "კონტროლირებული ექსპერიმენტი რანდომიზაციით", "დიდი მონაცემთა ნაკრები", "სკატერ-გრაფიკი მკაფიო სახეობით"]
    answer: 1
---

<div class="lang-block lang-en">
<p>Two variables can be <strong>correlated</strong> — they move together, or in opposite directions — without one <strong>causing</strong> the other. Getting this distinction wrong is one of the most common errors in reasoning about data.</p>

<h2>The correlation coefficient r</h2>
<p>The Pearson correlation coefficient r measures the strength and direction of a <strong>linear</strong> relationship:</p>

<table>
<thead><tr><th>r value</th><th>Interpretation</th></tr></thead>
<tbody>
<tr><td>r = 1</td><td>Perfect positive linear</td></tr>
<tr><td>0.7 to 0.9</td><td>Strong positive</td></tr>
<tr><td>0.4 to 0.6</td><td>Moderate positive</td></tr>
<tr><td>−0.4 to 0.4</td><td>Weak/no linear relationship</td></tr>
<tr><td>−0.7 to −0.9</td><td>Strong negative</td></tr>
<tr><td>r = −1</td><td>Perfect negative linear</td></tr>
</tbody>
</table>
</div>

<div class="lang-block lang-ka">
<p>ორი ცვლადი შეიძლება იყოს <strong>კორელირებული</strong> — ისინი ერთად მოძრაობს, ან საპირისპირო მიმართულებებში — ერთის <strong>მიზეზ-შედეგობის</strong> გარეშე. ამ განსხვავების არასწორად გაგება მონაცემებზე მსჯელობის ყველაზე გავრცელებული შეცდომაა.</p>

<h2>კორელაციის კოეფიციენტი r</h2>
<p>პირსონის კორელაციის კოეფიციენტი r ზომავს <strong>წრფივი</strong> კავშირის სიძლიერეს და მიმართულებას:</p>

<table>
<thead><tr><th>r-ის მნიშვნელობა</th><th>ინტერპრეტაცია</th></tr></thead>
<tbody>
<tr><td>r = 1</td><td>სრულყოფილი დადებითი წრფივი</td></tr>
<tr><td>0.7-დან 0.9-მდე</td><td>ძლიერი დადებითი</td></tr>
<tr><td>0.4-დან 0.6-მდე</td><td>ზომიერი დადებითი</td></tr>
<tr><td>−0.4-დან 0.4-მდე</td><td>სუსტი/წრფივი კავშირი არ არის</td></tr>
<tr><td>−0.7-დან −0.9-მდე</td><td>ძლიერი უარყოფითი</td></tr>
<tr><td>r = −1</td><td>სრულყოფილი უარყოფითი წრფივი</td></tr>
</tbody>
</table>
</div>

<div class="playground-block">
  <div class="playground-label" data-en="⚡ Interactive — drag points and watch r change" data-ka="⚡ ინტერაქტიული — გადაათრიე წერტილები და დაუყურე r-ის ცვლილებას">⚡ Interactive — drag points and watch r change</div>
  <p data-en="The correlation coefficient r is shown below. Drag n to add noise to a linear dataset and watch r decrease. Perfect correlation: noise = 0. Scattered cloud: noise large." data-ka="კორელაციის კოეფიციენტი r ქვემოთ ჩანს. გადაათრიე n წრფივ მონაცემებში ხმაურის დასამატებლად და დაუყურე r-ის შემცირებას. სრულყოფილი კორელაცია: ხმაური = 0. გაფანტული ღრუბელი: ხმაური დიდია.">The correlation coefficient r is shown below. Drag <strong>n</strong> to add noise to a linear dataset and watch r decrease. Perfect correlation: noise = 0. Scattered cloud: noise large.</p>
  <div id="calc-corr" style="width:100%;height:420px;border-radius:8px;overflow:hidden;"></div>
</div>

<div class="lang-block lang-en">
<div class="insight-box">
  <p><strong>The lurking variable:</strong> Ice cream sales and drowning deaths both peak in summer because a third variable — <em>hot weather</em> — drives both. Hot weather → more swimming → more drowning. Hot weather → more ice cream. The ice cream has nothing to do with drowning. Always ask: "Is there a third variable that explains this?"</p>
</div>

<h2>Why correlation ≠ causation</h2>
<p><strong>Famous examples:</strong></p>
<ul>
<li>Countries with more TV sets per person have higher life expectancy → wealth drives both</li>
<li>More firefighters at a fire → more damage → fire size is the lurking variable</li>
<li>Shoe size correlates with reading ability in children → age drives both</li>
</ul>
<p><strong>How to establish causation:</strong> Random controlled experiment. Randomly assign treatment to subjects. If you control for everything else and A still precedes B, that's evidence of causation.</p>

<div class="try-it">
  <h3>Practice</h3>
  <p>A study finds r = 0.82 between hours of TV watched per day and exam scores (negative correlation). Should schools ban TV? Explain your reasoning.</p>
  <button class="reveal-btn">Show Answer</button>
  <div class="answer">
    <p>Not necessarily. The correlation is strong, but doesn't establish causation.</p>
    <p>Likely confounders: study habits (students who study more watch less TV and score higher), socioeconomic factors (affect both screen time and academic outcomes).</p>
    <p>To establish causation, you'd need a <strong>controlled experiment</strong> — randomly assign TV restrictions to some students and not others, controlling for all other factors.</p>
  </div>
</div>
</div>

<div class="lang-block lang-ka">
<div class="insight-box">
  <p><strong>ფარული ცვლადი:</strong> ნაყინის გაყიდვები და დახრჩობები ორივე ზაფხულში იზრდება, რადგან მესამე ცვლადი — <em>ცხელი ამინდი</em> — ორივეს განაპირობებს. ცხელი ამინდი → მეტი ცურვა → მეტი დახრჩობა. ცხელი ამინდი → მეტი ნაყინი. ნაყინს დახრჩობასთან კავშირი არ აქვს. ყოველთვის იკითხე: „არის თუ არა მესამე ცვლადი, რომელიც ამას ხსნის?"</p>
</div>

<h2>რატომ კორელაცია ≠ მიზეზ-შედეგობა</h2>
<p><strong>ცნობილი მაგალითები:</strong></p>
<ul>
<li>ქვეყნები, სადაც ერთ სულ მოსახლეზე მეტი ტელევიზორია, უფრო მაღალი სიცოცხლის ხანგრძლივობა გამოდის → სიმდიდრე ორივეს განაპირობებს</li>
<li>ხანძარზე მეტი მეხანძრე → მეტი ზიანი → ხანძრის ზომა არის ფარული ცვლადი</li>
<li>ფეხსაცმლის ზომა კოლელირებს ბავშვებში კითხვის უნართან → ასაკი ორივეს განაპირობებს</li>
</ul>
<p><strong>მიზეზ-შედეგობის დასადგენად:</strong> შემთხვევითი კონტროლირებული ექსპერიმენტი. შემთხვევითად განაწილე მკურნალობა სუბიექტებს შორის. თუ ყველა სხვა ფაქტორს გააკონტროლებ და A მაინც წინ უსწრებს B-ს, ეს მიზეზ-შედეგობის მტკიცებულებაა.</p>

<div class="try-it">
  <h3>სავარჯიშო</h3>
  <p>კვლევა აჩვენებს r = 0.82 დღეში ყოფილ ტელეფონი საათებსა და გამოცდის ქულებს შორის (უარყოფითი კორელაცია). სკოლებმა ტელევიზია უნდა აკრძალონ? ახსენი შენი მსჯელობა.</p>
  <button class="reveal-btn">პასუხის ჩვენება</button>
  <div class="answer">
    <p>სავალდებულო არ არის. კორელაცია ძლიერია, მაგრამ მიზეზ-შედეგობას არ ადასტურებს.</p>
    <p>სავარაუდო მომრევი ფაქტორები: სასწავლო ჩვევები (მეტად სწავლობენ მოსწავლეები, ნაკლები ტელევიზია უყურებს და მაღალ ქულებს იღებს), სოციო-ეკონომიკური ფაქტორები (გავლენა აქვს ეკრანთან დროზეც და სასწავლო შედეგებზეც).</p>
    <p>მიზეზ-შედეგობის დასადასტურებლად საჭიროა <strong>კონტროლირებული ექსპერიმენტი</strong> — შემთხვევითად გაუწესე ზოგიერთ მოსწავლეს ტელევიზიის შეზღუდვა და სხვებს არა, ყველა სხვა ფაქტორის კონტროლით.</p>
  </div>
</div>
</div>

<script src="https://www.desmos.com/api/v1.7/calculator.js?apiKey=dcb31709b452b1cf9dc26972add0fda6"></script>
<script>
(function() {
  var c = Desmos.GraphingCalculator(document.getElementById('calc-corr'), {
    keypad: false, settingsMenu: false, zoomButtons: true, expressionsCollapsed: true
  });
  c.setMathBounds({ left: -0.5, right: 10, bottom: -2, top: 12 });
  c.setExpressions([
    { id: 'nz', latex: 'n=0.5', sliderBounds: { min: 0, max: 3, step: 0.1 }, label: 'noise' },
    { id: 'L',  latex: 'y=x', color: '#888', lineWidth: 1.5, lineStyle: Desmos.Styles.DASHED },
    { id: 'pts', latex: '\\left(k, k+n\\cdot\\sin(k^2\\cdot17)\\right)', color: '#34D399',
                 pointSize: 8,
                 parametricDomain: { min: 0, max: 9 } }
  ]);
})();
</script>
