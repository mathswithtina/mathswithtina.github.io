---
title: "The Normal Distribution — the bell curve explained"
subtitle: "Heights, test scores, measurement errors. They all follow the same bell shape. Here's why."
topic: statistics
topic-color: "#34D399"
interactive: true
tags: [IB, A-Level, Statistics]
quiz:
  - q: "The normal distribution is symmetric about its:"
    options: ["Median only", "Mode only", "Mean (which equals median and mode)", "Standard deviation"]
    answer: 2
  - q: "What percentage of data falls within one standard deviation of the mean?"
    options: ["50%", "68%", "95%", "99.7%"]
    answer: 1
  - q: "A larger standard deviation means the bell curve is:"
    options: ["Taller and narrower", "Wider and flatter", "Shifted to the right", "Asymmetric"]
    answer: 1
  - q: "In a standard normal distribution, what is the mean?"
    options: ["1", "0", "−1", "Depends on the data"]
    answer: 1
  - q: "P(X < mean) for a normal distribution equals:"
    options: ["0", "0.25", "0.5", "1"]
    answer: 2
---

The normal distribution is the most important probability distribution in statistics. It describes an enormous range of real-world phenomena — anywhere that many small random factors add together, the result tends to be normally distributed.

It has a characteristic **bell shape**: symmetric, highest at the mean, tapering off on both sides.

## The 68-95-99.7 rule

For any normal distribution with mean μ and standard deviation σ:

| Range | Probability |
|-------|------------|
| μ ± 1σ | 68% |
| μ ± 2σ | 95% |
| μ ± 3σ | 99.7% |

This rule is extremely useful for quick estimates without a calculator.

## Playground — reshape the bell curve

<div class="playground-block">
  <div class="playground-label">⚡ Interactive — change mean and standard deviation</div>
  <p>Drag <strong>μ</strong> to shift the curve left/right. Drag <strong>σ</strong> to make it narrower (less spread) or wider (more spread). Notice the shaded area always equals 1 — that's the total probability.</p>
  <div id="calc-norm" style="width:100%;height:440px;border-radius:8px;overflow:hidden;"></div>
</div>

<div class="insight-box">
  <p><strong>Z-scores:</strong> To compare values from different normal distributions, convert to a Z-score: Z = (X − μ)/σ. This tells you how many standard deviations X is from the mean. Tables give P(Z &lt; z) for any z.</p>
</div>

## Standardising (Z-score)

If X ~ N(50, 8²), find P(X < 62).

Z = (62 − 50)/8 = 1.5

P(X < 62) = P(Z < 1.5) = **0.9332** (from tables)

<div class="try-it">
  <h3>Practice</h3>
  <p>Weights of apples are N(180g, 20²). What proportion weigh between 160g and 200g?</p>
  <button class="reveal-btn">Show Answer</button>
  <div class="answer">
    <p>160 = μ − σ and 200 = μ + σ. This is the range μ ± 1σ.</p>
    <p>By the 68-95-99.7 rule: <strong>approximately 68%</strong> of apples fall in this range.</p>
  </div>
</div>

<script src="https://www.desmos.com/api/v1.7/calculator.js?apiKey=dcb31709b452b1cf9dc26972add0fda6"></script>
<script>
(function() {
  var c = Desmos.GraphingCalculator(document.getElementById('calc-norm'), {
    keypad: false, settingsMenu: false, zoomButtons: true, expressionsCollapsed: true
  });
  c.setMathBounds({ left: -5, right: 15, bottom: -0.05, top: 0.55 });
  c.setExpressions([
    { id: 'mu', latex: '\\mu=5',   sliderBounds: { min: 0, max: 10, step: 0.5 } },
    { id: 'sg', latex: '\\sigma=1.5', sliderBounds: { min: 0.5, max: 3, step: 0.25 } },
    { id: 'f',  latex: 'f(x)=\\frac{1}{\\sigma\\sqrt{2\\pi}}e^{-\\frac{(x-\\mu)^{2}}{2\\sigma^{2}}}',
                color: '#34D399', lineWidth: 2.5 },
    { id: 'sh', latex: '0\\le y\\le f(x)\\left\\{\\mu-\\sigma\\le x\\le\\mu+\\sigma\\right\\}',
                color: '#34D399', fillOpacity: 0.25, lineOpacity: 0, label: '68%' }
  ]);
})();
</script>
