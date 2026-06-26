(function () {
  var lang = localStorage.getItem('lang') || 'ka';

  function applyLang(l) {
    lang = l;
    localStorage.setItem('lang', l);

    document.querySelectorAll('[data-en][data-ka]').forEach(function (el) {
      el.textContent = el.getAttribute('data-' + l);
    });

    document.querySelectorAll('.lang-block').forEach(function (el) {
      if (el.classList.contains('lang-' + l)) {
        el.style.display = '';
      } else {
        el.style.display = 'none';
      }
    });

    document.querySelectorAll('[data-en-placeholder]').forEach(function (el) {
      el.placeholder = el.getAttribute('data-' + l + '-placeholder');
    });

    document.querySelectorAll('[data-en-validate]').forEach(function (el) {
      el.setAttribute('data-validation-required-message', el.getAttribute('data-' + l + '-validate'));
    });

    var btn = document.getElementById('lang-toggle');
    if (btn) btn.textContent = l === 'ka' ? 'EN' : 'GE';
  }

  document.addEventListener('DOMContentLoaded', function () {
    applyLang(lang);
    var btn = document.getElementById('lang-toggle');
    if (btn) {
      btn.addEventListener('click', function () {
        applyLang(lang === 'ka' ? 'en' : 'ka');
      });
    }
  });
})();
