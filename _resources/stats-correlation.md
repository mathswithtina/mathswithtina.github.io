---
title: "Correlation vs Causation — the most important distinction in statistics"
subtitle: "Ice cream sales correlate with drowning deaths. Ice cream doesn't cause drowning. Here's what's really going on."
topic: statistics
topic-color: "#34D399"
interactive: true
tags: [IB, A-Level, Statistics]
quiz:
  - q: "A correlation coefficient of −0.95 indicates:"
    options: ["A weak positive relationship", "A strong positive relationship", "A strong negative relationship", "No relationship"]
    answer: 2
  - q: "Correlation between A and B implies:"
    options: ["A causes B", "B causes A", "A and B move together, but causation is not established", "No relationship"]
    answer: 2
  - q: "The correlation coefficient r always lies between:"
    options: ["0 and 1", "−1 and 0", "−1 and 1", "−∞ and ∞"]
    answer: 2
  - q: "A confounding variable is:"
    options: ["A variable that causes both A and B", "A variable with r = 0", "An outlier", "The dependent variable"]
    answer: 0
  - q: "Which of these would be strong evidence of causation (not just correlation)?"
    options: ["A high correlation coefficient", "A controlled experiment with randomisation", "A large dataset", "A scatterplot with clear pattern"]
    answer: 1
---

Two variables can be **correlated** — they move together, or in opposite directions — without one **causing** the other. Getting this distinction wrong is one of the most common errors in reasoning about data.

## The correlation coefficient r

The Pearson correlation coefficient r measures the strength and direction of a **linear** relationship:

| r value | Interpretation |
|---------|----------------|
| r = 1 | Perfect positive linear |
| 0.7 to 0.9 | Strong positive |
| 0.4 to 0.6 | Moderate positive |
| −0.4 to 0.4 | Weak/no linear relationship |
| −0.7 to −0.9 | Strong negative |
| r = −1 | Perfect negative linear |

## Playground — explore the scatter plot

<div class="playground-block">
  <div class="playground-label">⚡ Interactive — drag points and watch r change</div>
  <p>The correlation coefficient r is shown below. Drag <strong>n</strong> to add noise to a linear dataset and watch r decrease. Perfect correlation: noise = 0. Scattered cloud: noise large.</p>
  <div id="calc-corr" style="width:100%;height:420px;border-radius:8px;overflow:hidden;"></div>
</div>

<div class="insight-box">
  <p><strong>The lurking variable:</strong> Ice cream sales and drowning deaths both peak in summer because a third variable — <em>hot weather</em> — drives both. Hot weather → more swimming → more drowning. Hot weather → more ice cream. The ice cream has nothing to do with drowning. Always ask: "Is there a third variable that explains this?"</p>
</div>

## Why correlation ≠ causation

**Famous examples:**
- Countries with more TV sets per person have higher life expectancy → wealth drives both
- More firefighters at a fire → more damage → fire size is the lurking variable
- Shoe size correlates with reading ability in children → age drives both

**How to establish causation:** Random controlled experiment. Randomly assign treatment to subjects. If you control for everything else and A still precedes B, that's evidence of causation.

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
