---
title: "What p < 0.05 actually means"
title-ka: "რას ნიშნავს p < 0.05 სინამდვილეში"
subtitle: "The most misunderstood number in science. A p-value does NOT tell you the probability your hypothesis is true."
subtitle-ka: "მეცნიერებაში ყველაზე გაუგებარი რიცხვი. p-მნიშვნელობა არ გეუბნება ჰიპოთეზის ნამდვილობის ალბათობას."
topic: statistics
topic-color: "#34D399"
interactive: false
tags: [IB, A-Level, Statistics]
quiz:
  - q: "A p-value of 0.03 means:"
    q_ka: "p-მნიშვნელობა 0.03 ნიშნავს:"
    options: ["There's a 3% chance the null hypothesis is true", "If the null hypothesis were true, there's a 3% chance of seeing data this extreme", "The effect size is 3%", "The result is 97% likely to be real"]
    options_ka: ["3% ალბათობაა, რომ ნიშნული ჰიპოთეზა ჭეშმარიტია", "თუ ნიშნული ჰიპოთეზა ჭეშმარიტი იქნებოდა, 3% ალბათობაა ასე ექსტრემალური მონაცემების დანახვის", "ეფექტის ზომა 3%-ია", "შედეგი 97% ალბათობით ნამდვილია"]
    answer: 1
  - q: "When p < 0.05, you typically:"
    q_ka: "როდესაც p < 0.05, ჩვეულებრივ:"
    options: ["Accept the null hypothesis", "Reject the null hypothesis", "Accept the alternative hypothesis with certainty", "Repeat the test"]
    options_ka: ["მიღებ ნიშნულ ჰიპოთეზას", "უარყოფ ნიშნულ ჰიპოთეზას", "დარწმუნებით მიღებ ალტერნატიულ ჰიპოთეზას", "ხელახლა ატარებ ტესტს"]
    answer: 1
  - q: "The significance level α = 0.05 means:"
    q_ka: "მნიშვნელოვნების დონე α = 0.05 ნიშნავს:"
    options: ["5% of results are wrong", "You accept a 5% chance of a false positive (Type I error)", "The effect must be at least 5% large", "p must be less than 0.05 to be meaningful"]
    options_ka: ["შედეგების 5% არასწორია", "მიღებ 5% ალბათობას ყალბი დადებითისთვის (I ტიპის შეცდომა)", "ეფექტი მინიმუმ 5%-ით დიდი უნდა იყოს", "p 0.05-ზე ნაკლები უნდა იყოს მნიშვნელობისთვის"]
    answer: 1
  - q: "A p-value of 0.049 vs 0.051 — are these results fundamentally different?"
    q_ka: "p-მნიშვნელობა 0.049 vs 0.051 — ეს შედეგები ფუნდამენტალურად განსხვავებულია?"
    options: ["Yes, one is significant and one isn't", "No, the 0.05 threshold is arbitrary", "Yes, the first is twice as reliable", "No, but only in social science"]
    options_ka: ["დიახ, ერთი მნიშვნელოვანია, მეორე — არა", "არა, 0.05 ზღვარი თვითნებურია", "დიახ, პირველი ორჯერ უფრო სანდოა", "არა, მაგრამ მხოლოდ სოციალურ მეცნიერებაში"]
    answer: 1
  - q: "Statistical significance means:"
    q_ka: "სტატისტიკური მნიშვნელოვნება ნიშნავს:"
    options: ["The effect is large and important", "The result is unlikely to be due to chance alone", "The hypothesis is proven true", "The sample size was large enough"]
    options_ka: ["ეფექტი დიდი და მნიშვნელოვანია", "შედეგი ნაკლებ სავარაუდოა, რომ შემთხვევის გამო მოხდა", "ჰიპოთეზა დამტკიცებულია", "ნიმუშის ზომა საკმარისი იყო"]
    answer: 1
---

<div class="lang-block lang-en">
<p>p &lt; 0.05 is one of the most quoted numbers in science — and one of the most misunderstood. Let's be precise about what it actually says.</p>

<h2>What is a p-value?</h2>
<p>The <strong>null hypothesis</strong> (H₀) is the boring default: "there's no effect", "there's no difference", "this is just random noise."</p>
<p>The <strong>p-value</strong> is the probability of observing results <strong>at least this extreme</strong>, assuming the null hypothesis is true.</p>
<p><strong>p = 0.03</strong> means: IF there were truly no effect, there would be only a 3% chance of seeing data this surprising (or more surprising).</p>
<p>A small p-value means the data is hard to explain by chance alone — which makes us doubt H₀.</p>

<h2>What a p-value does NOT mean</h2>

<table>
<thead><tr><th>Misconception</th><th>Reality</th></tr></thead>
<tbody>
<tr><td>P(H₀ is true) = p</td><td>p is calculated ASSUMING H₀ is true — it cannot be P(H₀)</td></tr>
<tr><td>p &lt; 0.05 proves the effect is real</td><td>It just means the data is unlikely under H₀</td></tr>
<tr><td>p = 0.049 is better than p = 0.051</td><td>The 0.05 threshold is arbitrary convention</td></tr>
<tr><td>p &lt; 0.05 means the effect is important</td><td>Small effects can have tiny p-values with large samples</td></tr>
</tbody>
</table>

<div class="insight-box">
  <p><strong>The key reframe:</strong> Think of the p-value as answering: "How surprised should I be by this data if H₀ were true?" Very surprised (p = 0.001) → evidence against H₀. Not very surprised (p = 0.4) → data is consistent with H₀.</p>
</div>

<h2>Hypothesis testing in IB/A-Level</h2>
<ol>
<li>State H₀ and H₁ (alternate hypothesis)</li>
<li>Choose significance level α (usually 0.05 or 0.01)</li>
<li>Calculate the test statistic</li>
<li>Find the p-value (or critical region)</li>
<li>Decision: if p &lt; α, reject H₀. Otherwise, "fail to reject" H₀.</li>
</ol>
<p>Note: you never <strong>accept</strong> H₀. You either reject it or fail to reject it — just like a court verdict of "not guilty" is not the same as "innocent."</p>

<h2>Type I and Type II errors</h2>
<ul>
<li><strong>Type I error (false positive):</strong> Reject H₀ when it's actually true. Probability = α.</li>
<li><strong>Type II error (false negative):</strong> Fail to reject H₀ when it's actually false. Probability = β.</li>
</ul>
<p>Reducing α (stricter threshold) reduces Type I errors but increases Type II errors.</p>

<div class="try-it">
  <h3>Practice</h3>
  <p>A new teaching method is tested. The null hypothesis is "the method has no effect on scores." The test gives p = 0.023 at α = 0.05. What do you conclude? What could be wrong?</p>
  <button class="reveal-btn">Show Answer</button>
  <div class="answer">
    <p>Since p = 0.023 &lt; 0.05 = α, we <strong>reject H₀</strong>. There is significant evidence the method has an effect.</p>
    <p><strong>Possible issues:</strong></p>
    <p>1. This could be a Type I error (5% chance — we picked α = 0.05).</p>
    <p>2. The study may not be well controlled — other factors could explain the difference.</p>
    <p>3. "Statistically significant" ≠ "educationally meaningful" — the actual improvement might be tiny.</p>
  </div>
</div>
</div>

<div class="lang-block lang-ka">
<p>p &lt; 0.05 მეცნიერებაში ყველაზე ციტირებული რიცხვია — და ყველაზე გაუგებარი. ვიყოთ ზუსტები იმის შესახებ, რასაც ის სინამდვილეში ამბობს.</p>

<h2>რა არის p-მნიშვნელობა?</h2>
<p><strong>ნიშნული ჰიპოთეზა</strong> (H₀) მოსაწყენი ნაგულისხმევია: „ეფექტი არ არის", „განსხვავება არ არის", „ეს მხოლოდ შემთხვევითი ხმაურია."</p>
<p><strong>p-მნიშვნელობა</strong> არის ალბათობა, დავინახოთ შედეგები <strong>ასე ექსტრემალური ან უფრო</strong>, ნიშნული ჰიპოთეზის ჭეშმარიტობის ვარაუდით.</p>
<p><strong>p = 0.03</strong> ნიშნავს: თუ ნამდვილად ეფექტი არ ყოფილიყო, მხოლოდ 3% ალბათობა ყოფილიყო ასე გასაკვირი (ან უფრო გასაკვირი) მონაცემების დანახვის.</p>
<p>მცირე p-მნიშვნელობა ნიშნავს, რომ მონაცემები ძნელია მხოლოდ შემთხვევით ახსნა — რაც H₀-ს გვაეჭვებინებს.</p>

<h2>რას არ ნიშნავს p-მნიშვნელობა</h2>

<table>
<thead><tr><th>გაუგებრობა</th><th>სინამდვილე</th></tr></thead>
<tbody>
<tr><td>P(H₀ ჭეშმარიტია) = p</td><td>p გამოითვლება H₀-ს ჭეშმარიტობის ვარაუდით — ის P(H₀) ვერ იქნება</td></tr>
<tr><td>p &lt; 0.05 ამტკიცებს, რომ ეფექტი ნამდვილია</td><td>ეს მხოლოდ ნიშნავს, რომ მონაცემები H₀-ის პირობებში ნაკლებ სავარაუდოა</td></tr>
<tr><td>p = 0.049 სჯობს p = 0.051-ს</td><td>0.05 ზღვარი თვითნებური კონვენციაა</td></tr>
<tr><td>p &lt; 0.05 ნიშნავს, რომ ეფექტი მნიშვნელოვანია</td><td>მცირე ეფექტებს შეიძლება ჰქონდეს ძალიან მცირე p-მნიშვნელობა დიდი ნიმუშებით</td></tr>
</tbody>
</table>

<div class="insight-box">
  <p><strong>მთავარი გადახედვა:</strong> წარმოიდგინე p-მნიშვნელობა, როგორც პასუხი: „რამდენად უნდა გამიკვირდეს ეს მონაცემები, თუ H₀ ჭეშმარიტი იქნებოდა?" ძალიან გაოცებული (p = 0.001) → მტკიცებულება H₀-ის წინააღმდეგ. ნაკლებ გაოცებული (p = 0.4) → მონაცემები შეესაბამება H₀-ს.</p>
</div>

<h2>ჰიპოთეზის ტესტირება IB/A-Level-ში</h2>
<ol>
<li>განაცხადე H₀ და H₁ (ალტერნატიული ჰიპოთეზა)</li>
<li>აირჩიე მნიშვნელოვნების დონე α (ჩვეულებრივ 0.05 ან 0.01)</li>
<li>გამოთვალე ტესტის სტატისტიკა</li>
<li>იპოვე p-მნიშვნელობა (ან კრიტიკული არე)</li>
<li>გადაწყვეტილება: თუ p &lt; α, უარყავი H₀. სხვა შემთხვევაში, „ვერ უარყავი" H₀.</li>
</ol>
<p>შენიშვნა: H₀-ს არასდროს <strong>მიღებ</strong>. ან უარყოფ, ან ვერ უარყოფ — ისევე, როგორც სასამართლო განაჩენი „დამნაშავე არ არის" არ ნიშნავს „უდანაშაულოა."</p>

<h2>I და II ტიპის შეცდომები</h2>
<ul>
<li><strong>I ტიპის შეცდომა (ყალბი დადებითი):</strong> H₀-ს უარყოფ, როდესაც ის ჭეშმარიტია. ალბათობა = α.</li>
<li><strong>II ტიპის შეცდომა (ყალბი უარყოფითი):</strong> ვერ უარყოფ H₀-ს, როდესაც ის ყალბია. ალბათობა = β.</li>
</ul>
<p>α-ს შემცირება (უფრო მკაცრი ზღვარი) ამცირებს I ტიპის შეცდომებს, მაგრამ ზრდის II ტიპისას.</p>

<div class="try-it">
  <h3>სავარჯიშო</h3>
  <p>ახალი სასწავლო მეთოდი ტესტირდება. ნიშნული ჰიპოთეზა არის „მეთოდი ქულებზე გავლენას არ ახდენს." ტესტი იძლევა p = 0.023 α = 0.05-ზე. რა დასკვნა გამოდის? რა შეიძლება იყოს არასწორი?</p>
  <button class="reveal-btn">პასუხის ჩვენება</button>
  <div class="answer">
    <p>ვინაიდან p = 0.023 &lt; 0.05 = α, ვ<strong>უარყოფთ H₀-ს</strong>. არის მნიშვნელოვანი მტკიცებულება, რომ მეთოდი გავლენას ახდენს.</p>
    <p><strong>შესაძლო პრობლემები:</strong></p>
    <p>1. ეს შეიძლება I ტიპის შეცდომა იყოს (5% ალბათობა — ავირჩიეთ α = 0.05).</p>
    <p>2. კვლევა შეიძლება კარგად კონტროლირებული არ იყოს — სხვა ფაქტორებმა შეიძლება განსხვავება ახსნას.</p>
    <p>3. „სტატისტიკურად მნიშვნელოვანი" ≠ „სასწავლო თვალსაზრისით მნიშვნელოვანი" — რეალური გაუმჯობესება შეიძლება უმნიშვნელო იყოს.</p>
  </div>
</div>
</div>
