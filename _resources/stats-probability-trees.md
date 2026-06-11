---
title: "Probability Trees — multiplying along branches"
subtitle: "Two rules: multiply along branches (AND). Add between branches (OR). That's the whole system."
topic: statistics
topic-color: "#34D399"
interactive: false
tags: [IGCSE, IB, SAT, Statistics]
quiz:
  - q: "In a probability tree, branch probabilities at each node must:"
    options: ["Multiply to 1", "Add to 1", "Equal each other", "Be greater than 0.5"]
    answer: 1
  - q: "P(A and B) using a tree is calculated by:"
    options: ["Adding P(A) + P(B)", "Multiplying P(A) × P(B|A)", "Subtracting P(A) − P(B)", "P(A) / P(B)"]
    answer: 1
  - q: "A bag has 3 red and 2 blue balls. Without replacement, P(red then red) ="
    options: ["9/25", "3/10", "6/25", "1/3"]
    answer: 1
  - q: "P(A or B) equals:"
    options: ["P(A) × P(B)", "P(A) + P(B) − P(A and B)", "P(A) − P(B)", "1 − P(A and B)"]
    answer: 1
  - q: "All end-branch probabilities in a complete tree must sum to:"
    options: ["0", "0.5", "1", "Depends on the problem"]
    answer: 2
---

Probability trees are a systematic way to handle multi-step probability problems. Draw a branch for each possible outcome, label it with the probability, and use two simple rules to find any probability you need.

## The two rules

- **Multiply along a path** to find P(this sequence of events)
- **Add across paths** to find P(a particular end result, regardless of path)

## Example: Bag with coloured balls

A bag contains 4 red and 6 blue balls. Two are drawn **without replacement**. Find P(both red).

Draw the tree:
- First draw: P(R) = 4/10 = 2/5; P(B) = 6/10 = 3/5
- If first was R: P(R|R) = 3/9 = 1/3 (only 3 red left out of 9)
- P(both red) = P(R) × P(R|R) = 2/5 × 1/3 = **2/15**

<div class="insight-box">
  <p><strong>With vs. without replacement:</strong> With replacement — probabilities on the second set of branches are identical to the first (independent events). Without replacement — probabilities change because the composition of the bag has changed.</p>
</div>

## Example: Finding P(exactly one red)

From the same bag: P(exactly one red in two draws)

- Path R then B: (4/10) × (6/9) = 24/90
- Path B then R: (6/10) × (4/9) = 24/90
- P(exactly one red) = 24/90 + 24/90 = **48/90 = 8/15**

## Conditional probability

The probability that the **second** ball is red, given the first was blue:

From the tree: P(R | first was B) = 4/9 directly from the relevant branch.

P(second is red) = P(BR) + P(RR) = 24/90 + 12/90 = 36/90 = 2/5.

Interesting: P(second is red) = 4/10 = 2/5, same as P(first is red). Drawing order doesn't change the marginal probability!

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
