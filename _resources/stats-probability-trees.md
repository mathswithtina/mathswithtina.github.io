---
title: "Probability Trees — multiplying along branches"
title-ka: "ალბათობის ხეები — ტოტების გამრავლება"
subtitle: "Two rules: multiply along branches (AND). Add between branches (OR). That's the whole system."
subtitle-ka: "ორი წესი: გაამრავლე ტოტების გასწვრივ (და). დაამატე ტოტებს შორის (ან). ეს მთელი სისტემაა."
topic: statistics
topic-color: "#34D399"
interactive: false
tags: [IGCSE, IB, SAT, Statistics]
quiz:
  - q: "In a probability tree, branch probabilities at each node must:"
    q_ka: "ალბათობის ხეში, ყოველ კვანძში ტოტების ალბათობები უნდა:"
    options: ["Multiply to 1", "Add to 1", "Equal each other", "Be greater than 0.5"]
    options_ka: ["გამრავლდეს 1-მდე", "შეიკრიბოს 1-მდე", "ტოლი იყოს ერთმანეთის", "0.5-ზე მეტი იყოს"]
    answer: 1
  - q: "P(A and B) using a tree is calculated by:"
    q_ka: "P(A და B) ხის გამოყენებით გამოითვლება:"
    options: ["Adding P(A) + P(B)", "Multiplying P(A) × P(B|A)", "Subtracting P(A) − P(B)", "P(A) / P(B)"]
    options_ka: ["P(A) + P(B)-ის მიმატებით", "P(A) × P(B|A)-ის გამრავლებით", "P(A) − P(B)-ის გამოკლებით", "P(A) / P(B)"]
    answer: 1
  - q: "A bag has 3 red and 2 blue balls. Without replacement, P(red then red) ="
    q_ka: "ჩანთაში 3 წითელი და 2 ლურჯი ბურთია. დაბრუნების გარეშე, P(წითელი შემდეგ წითელი) ="
    options: ["9/25", "3/10", "6/25", "1/3"]
    options_ka: ["9/25", "3/10", "6/25", "1/3"]
    answer: 1
  - q: "P(A or B) equals:"
    q_ka: "P(A ან B) ტოლია:"
    options: ["P(A) × P(B)", "P(A) + P(B) − P(A and B)", "P(A) − P(B)", "1 − P(A and B)"]
    options_ka: ["P(A) × P(B)", "P(A) + P(B) − P(A და B)", "P(A) − P(B)", "1 − P(A და B)"]
    answer: 1
  - q: "All end-branch probabilities in a complete tree must sum to:"
    q_ka: "სრულ ხეში ყველა ბოლო ტოტის ალბათობების ჯამი უნდა იყოს:"
    options: ["0", "0.5", "1", "Depends on the problem"]
    options_ka: ["0", "0.5", "1", "დამოკიდებულია ამოცანაზე"]
    answer: 2
---

<div class="lang-block lang-en">
<p>Probability trees are a systematic way to handle multi-step probability problems. Draw a branch for each possible outcome, label it with the probability, and use two simple rules to find any probability you need.</p>

<h2>The two rules</h2>
<ul>
<li><strong>Multiply along a path</strong> to find P(this sequence of events)</li>
<li><strong>Add across paths</strong> to find P(a particular end result, regardless of path)</li>
</ul>

<h2>Example: Bag with coloured balls</h2>
<p>A bag contains 4 red and 6 blue balls. Two are drawn <strong>without replacement</strong>. Find P(both red).</p>
<p>Draw the tree:</p>
<ul>
<li>First draw: P(R) = 4/10 = 2/5; P(B) = 6/10 = 3/5</li>
<li>If first was R: P(R|R) = 3/9 = 1/3 (only 3 red left out of 9)</li>
<li>P(both red) = P(R) × P(R|R) = 2/5 × 1/3 = <strong>2/15</strong></li>
</ul>

<div class="insight-box">
  <p><strong>With vs. without replacement:</strong> With replacement — probabilities on the second set of branches are identical to the first (independent events). Without replacement — probabilities change because the composition of the bag has changed.</p>
</div>

<h2>Example: Finding P(exactly one red)</h2>
<p>From the same bag: P(exactly one red in two draws)</p>
<ul>
<li>Path R then B: (4/10) × (6/9) = 24/90</li>
<li>Path B then R: (6/10) × (4/9) = 24/90</li>
<li>P(exactly one red) = 24/90 + 24/90 = <strong>48/90 = 8/15</strong></li>
</ul>

<h2>Conditional probability</h2>
<p>The probability that the <strong>second</strong> ball is red, given the first was blue:</p>
<p>From the tree: P(R | first was B) = 4/9 directly from the relevant branch.</p>
<p>P(second is red) = P(BR) + P(RR) = 24/90 + 12/90 = 36/90 = 2/5.</p>
<p>Interesting: P(second is red) = 4/10 = 2/5, same as P(first is red). Drawing order doesn't change the marginal probability!</p>

<div class="try-it">
  <h3>Practice</h3>
  <p>A test is 80% accurate. 1% of the population has a disease. If you test positive, what is the probability you actually have the disease?</p>
  <p><em>Hint: draw the tree with branches: has disease / doesn't have disease, then test positive / test negative.</em></p>
  <button class="reveal-btn">Show Answer</button>
  <div class="answer">
    <p>P(disease) = 0.01, P(no disease) = 0.99</p>
    <p>P(+|disease) = 0.8, P(+|no disease) = 0.2 (false positive)</p>
    <p>P(disease and +) = 0.01 × 0.8 = 0.008</p>
    <p>P(no disease and +) = 0.99 × 0.2 = 0.198</p>
    <p>P(disease | +) = 0.008 / (0.008 + 0.198) = 0.008/0.206 ≈ <strong>3.9%</strong></p>
    <p>This surprisingly low result is why mass-testing for rare diseases is tricky!</p>
  </div>
</div>
</div>

<div class="lang-block lang-ka">
<p>ალბათობის ხეები სისტემატური გზაა მრავალსაფეხურიანი ალბათობის ამოცანების გადასაჭრელად. დახაზე ტოტი ყოველი შესაძლო შედეგისთვის, დაასახელე ალბათობით, და გამოიყენე ორი მარტივი წესი ნებისმიერი ალბათობის საპოვნელად.</p>

<h2>ორი წესი</h2>
<ul>
<li><strong>გაამრავლე გზაზე</strong> P(ამ მოვლენების თანამიმდევრობის) საპოვნელად</li>
<li><strong>დაამატე გზებს შორის</strong> P(კონკრეტული საბოლოო შედეგის, გზის მიუხედავად) საპოვნელად</li>
</ul>

<h2>მაგალითი: ჩანთა ფერადი ბურთებით</h2>
<p>ჩანთაში 4 წითელი და 6 ლურჯი ბურთია. ორი გამოიღება <strong>დაბრუნების გარეშე</strong>. იპოვე P(ორივე წითელი).</p>
<p>დახაზე ხე:</p>
<ul>
<li>პირველი გამოღება: P(წ) = 4/10 = 2/5; P(ლ) = 6/10 = 3/5</li>
<li>თუ პირველი წითელი იყო: P(წ|წ) = 3/9 = 1/3 (მხოლოდ 3 წითელი დარჩა 9-დან)</li>
<li>P(ორივე წითელი) = P(წ) × P(წ|წ) = 2/5 × 1/3 = <strong>2/15</strong></li>
</ul>

<div class="insight-box">
  <p><strong>დაბრუნებით vs. დაბრუნების გარეშე:</strong> დაბრუნებით — მეორე ტოტების ალბათობები პირველის იდენტურია (დამოუკიდებელი მოვლენები). დაბრუნების გარეშე — ალბათობები იცვლება, რადგან ჩანთის შემადგენლობა შეიცვალა.</p>
</div>

<h2>მაგალითი: P(ზუსტად ერთი წითელი)-ს პოვნა</h2>
<p>იმავე ჩანთიდან: P(ზუსტად ერთი წითელი ორ გამოღებაში)</p>
<ul>
<li>გზა წ შემდეგ ლ: (4/10) × (6/9) = 24/90</li>
<li>გზა ლ შემდეგ წ: (6/10) × (4/9) = 24/90</li>
<li>P(ზუსტად ერთი წითელი) = 24/90 + 24/90 = <strong>48/90 = 8/15</strong></li>
</ul>

<h2>პირობითი ალბათობა</h2>
<p>ალბათობა, რომ <strong>მეორე</strong> ბურთი წითელია, იმ პირობით, რომ პირველი ლურჯი იყო:</p>
<p>ხიდან: P(წ | პირველი ლ იყო) = 4/9 პირდაპირ შესაბამისი ტოტიდან.</p>
<p>P(მეორე წითელია) = P(ლწ) + P(წწ) = 24/90 + 12/90 = 36/90 = 2/5.</p>
<p>საინტერესოა: P(მეორე წითელია) = 4/10 = 2/5, იგივე, რაც P(პირველი წითელია). გამოღების თანამიმდევრობა მინიმალურ ალბათობას არ ცვლის!</p>

<div class="try-it">
  <h3>სავარჯიშო</h3>
  <p>ტესტი 80%-ით ზუსტია. მოსახლეობის 1%-ს აქვს დაავადება. თუ ტესტი დადებითია, რა ალბათობით გაქვს დაავადება?</p>
  <p><em>მინიშნება: დახაზე ხე ტოტებით: აქვს დაავადება / არ აქვს დაავადება, შემდეგ ტესტი დადებითი / ტესტი უარყოფითი.</em></p>
  <button class="reveal-btn">პასუხის ჩვენება</button>
  <div class="answer">
    <p>P(დაავადება) = 0.01, P(არა დაავადება) = 0.99</p>
    <p>P(+|დაავადება) = 0.8, P(+|არა დაავადება) = 0.2 (ყალბი დადებითი)</p>
    <p>P(დაავადება და +) = 0.01 × 0.8 = 0.008</p>
    <p>P(არა დაავადება და +) = 0.99 × 0.2 = 0.198</p>
    <p>P(დაავადება | +) = 0.008 / (0.008 + 0.198) = 0.008/0.206 ≈ <strong>3.9%</strong></p>
    <p>ეს მოულოდნელად დაბალი შედეგი ხსნის, რატომ არის მასობრივი ტესტირება იშვიათი დაავადებებისთვის რთული!</p>
  </div>
</div>
</div>
