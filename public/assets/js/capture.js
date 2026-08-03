/* CWG capture handler — attaches to every <form class="capture">.
   Submits via fetch (no-cors) to the Brevo relay (Google Apps Script web app),
   which upserts the contact to Brevo (list "CWG Leads") + a backup Sheet,
   then shows the sibling .capture__done success state. No page navigation. */
(function () {
  var ENDPOINT = 'https://script.google.com/macros/s/AKfycbxrkkgOgCbHaxtdW43uGLlCXd2oAdOY9ebMJeDh8iqW-lqvRaKR9g0D0GX2ttaxhFB4/exec';
  var EMAIL_RE = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

  function val(form, sel) { var el = form.querySelector(sel); return (el && el.value) || ''; }

  function attach(form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var input = form.querySelector('input[type="email"]');
      var msg = form.querySelector('.capture__msg');
      var btn = form.querySelector('button[type="submit"]');
      var email = ((input && input.value) || '').trim();

      if (!EMAIL_RE.test(email)) {
        form.classList.add('is-invalid');
        if (msg) msg.textContent = form.getAttribute('data-msg-invalid') || 'Please enter a valid email address.';
        if (input) input.focus();
        return;
      }
      form.classList.remove('is-invalid');
      if (btn) btn.disabled = true;

      var d = form.dataset || {};
      var body = new URLSearchParams();
      body.set('email', email);
      body.set('magnet', d.magnet || '');
      body.set('vertical', d.vertical || val(form, '[name="fields[vertical]"]') || '');
      body.set('source', d.source || 'site');
      body.set('lang', document.documentElement.lang || 'en');
      if (d.keyword) body.set('keyword', d.keyword);
      var hp = form.querySelector('[name="website"]');
      body.set('website', (hp && hp.value) || ''); // honeypot — empty for humans, filled by bots

      var finish = function () {
        var done = form.parentElement && form.parentElement.querySelector('.capture__done');
        if (done) { form.hidden = true; done.hidden = false; }
        else if (msg) { msg.textContent = form.getAttribute('data-msg-success') || 'Check your inbox — we’ll be in touch shortly.'; }
        if (btn) btn.disabled = false;
      };

      fetch(ENDPOINT, { method: 'POST', mode: 'no-cors', body: body })
        .then(finish)
        .catch(finish); // no-cors: opaque response, treat as sent
    });
  }

  document.querySelectorAll('form.capture').forEach(attach);
})();
