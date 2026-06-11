---
title: "What p < 0.05 actually means"
subtitle: "The most misunderstood number in science. A p-value does NOT tell you the probability your hypothesis is true."
topic: statistics
topic-color: "#34D399"
interactive: false
tags: [IB, A-Level, Statistics]
quiz:
  - q: "A p-value of 0.03 means:"
    options: ["There's a 3% chance the null hypothesis is true", "If the null hypothesis were true, there's a 3% chance of seeing data this extreme", "The effect size is 3%", "The result is 97% likely to be real"]
    answer: 1
  - q: "When p < 0.05, you typically:"
    options: ["Accept the null hypothesis", "Reject the null hypothesis", "Accept the alternative hypothesis with certainty", "Repeat the test"]
    answer: 1
  - q: "The significance level α = 0.05 means:"
    options: ["5% of results are wrong", "You accept a 5% chance of a false positive (Type I error)", "The effect must be at least 5% large", "p must be less than 0.05 to be meaningful"]
    answer: 1
  - q: "A p-value of 0.049 vs 0.051 — are these results fundamentally different?"
    options: ["Yes, one is significant and one isn't", "No, the 0.05 threshold is arbitrary", "Yes, the first is twice as reliable", "No, but only in social science"]
    answer: 1
  - q: "Statistical significance means:"
    options: ["The effect is large and important", "The result is unlikely to be due to chance alone", "The hypothesis is proven true", "The sample size was large enough"]
    answer: 1
---

p < 0.05 is one of the most quoted numbers in science — and one of the most misunderstood. Let's be precise about what it actually says.

## What is a p-value?

The **null hypothesis** (H₀) is the boring default: "there's no effect", "there's no difference", "this is just random noise."

The **p-value** is the probability of observing results **at least this extreme**, assuming the null hypothesis is true.

**p = 0.03** means: IF there were truly no effect, there would be only a 3% chance of seeing data this surprising (or more surprising).

A small p-value means the data is hard to explain by chance alone — which makes us doubt H₀.

## What a p-value does NOT mean

| Misconception | Reality |
|---------------|---------|
| P(H₀ is true) = p | p is calculated ASSUMING H₀ is true — it cannot be P(H₀) |
| p < 0.05 proves the effect is real | It just means the data is unlikely under H₀ |
| p = 0.049 is better than p = 0.051 | The 0.05 threshold is arbitrary convention |
| p < 0.05 means the effect is important | Small effects can have tiny p-values with large samples |

<div class="insight-box">
  <p><strong>The key reframe:</strong> Think of the p-value as answering: "How surprised should I be by this data if H₀ were true?" Very surprised (p = 0.001) → evidence against H₀. Not very surprised (p = 0.4) → data is consistent with H₀.</p>
</div>

## Hypothesis testing in IB/A-Level

1. State H₀ and H₁ (alternate hypothesis)
2. Choose significance level α (usually 0.05 or 0.01)
3. Calculate the test statistic
4. Find the p-value (or critical region)
5. Decision: if p < α, reject H₀. Otherwise, "fail to reject" H₀.

Note: you never **accept** H₀. You either reject it or fail to reject it — just like a court verdict of "not guilty" is not the same as "innocent."

## Type I and Type II errors

- **Type I error (false positive):** Reject H₀ when it's actually true. Probability = α.
- **Type II error (false negative):** Fail to reject H₀ when it's actually false. Probability = β.

Reducing α (stricter threshold) reduces Type I errors but increases Type II errors.

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
