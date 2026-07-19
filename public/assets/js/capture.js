/* MailerLite capture handler — attaches to every <form class="capture">.
   Submits via fetch (no-cors) to the form's MailerLite action, then shows
   the sibling .capture__done success state. No page navigation. */
(function () {
  var EMAIL_RE = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

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

      var body = new URLSearchParams();
      body.set('fields[email]', email);
      body.set('ml-submit', '1');
      body.set('anticsrf', 'true');

      var finish = function () {
        var done = form.parentElement && form.parentElement.querySelector('.capture__done');
        if (done) { form.hidden = true; done.hidden = false; }
        else if (msg) { msg.textContent = form.getAttribute('data-msg-success') || 'Check your inbox — we’ll be in touch shortly.'; }
        if (btn) btn.disabled = false;
      };

      fetch(form.action, { method: 'POST', mode: 'no-cors', body: body })
        .then(finish)
        .catch(finish); // no-cors: response is opaque, treat as sent
    });
  }

  document.querySelectorAll('form.capture').forEach(attach);
})();
