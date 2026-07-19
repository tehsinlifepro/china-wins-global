/* Site interactions: mobile menu, smooth scroll (Lenis), scroll reveals.
   Everything is guarded so missing elements or libraries never throw. */
(function () {
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- mobile menu ---------- */
  var burger = document.getElementById('burger');
  var overlay = document.getElementById('navOverlay');
  if (burger && overlay) {
    var setMenu = function (open) {
      burger.classList.toggle('is-open', open);
      overlay.classList.toggle('is-open', open);
      burger.setAttribute('aria-expanded', open ? 'true' : 'false');
      overlay.setAttribute('aria-hidden', open ? 'false' : 'true');
      document.body.style.overflow = open ? 'hidden' : '';
    };
    burger.addEventListener('click', function () {
      setMenu(!burger.classList.contains('is-open'));
    });
    overlay.addEventListener('click', function (e) {
      if (e.target.closest('a')) setMenu(false);
    });
  }

  /* ---------- smooth scroll (Lenis) ---------- */
  var lenis = null;
  if (window.Lenis && !reduce) {
    lenis = new window.Lenis({ duration: 1.1, smoothWheel: true });
    var raf = function (t) { lenis.raf(t); requestAnimationFrame(raf); };
    requestAnimationFrame(raf);
  }
  document.querySelectorAll('a[href^="#"]').forEach(function (a) {
    a.addEventListener('click', function (e) {
      var id = a.getAttribute('href');
      if (!id || id.length < 2) return;
      var target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      if (lenis) lenis.scrollTo(target, { offset: -90 });
      else target.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth' });
    });
  });

  /* ---------- scroll reveal ---------- */
  if (!reduce && 'IntersectionObserver' in window) {
    var sel = [
      '.chapter .eyebrow', '.chapter .h2', '.chapter .hero__title', '.chapter .hero__sub',
      '.chapter .gloss', '.chapter .hero__ctas', '.chapter .page-lead', '.chapter .section-lede',
      '.chapter .prose > *', '.cost-cell', '.deliver-cell', '.who__card', '.learn-card',
      '.res-card', '.cs-card', '.price-cell', '.faq-item', '.final__inner > *', '.audit',
      '[data-reveal]',
    ].join(', ');
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add('is-in'); io.unobserve(en.target); }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.05 });

    var vh = window.innerHeight;
    document.querySelectorAll(sel).forEach(function (el) {
      if (el.getBoundingClientRect().top < vh * 0.92) return; // near/above fold: keep visible
      el.classList.add('will-reveal');
      io.observe(el);
    });

    // safety net: never leave content stuck hidden
    window.addEventListener('load', function () {
      setTimeout(function () {
        document.querySelectorAll('.will-reveal:not(.is-in)').forEach(function (el) {
          if (el.getBoundingClientRect().top < window.innerHeight) el.classList.add('is-in');
        });
      }, 500);
    });
  }

  /* ---------- homepage red thread (draws on scroll) ---------- */
  var threadPath = document.getElementById('homeThreadPath');
  if (threadPath && typeof threadPath.getTotalLength === 'function') {
    var len = threadPath.getTotalLength();
    threadPath.style.strokeDasharray = String(len);
    if (reduce) {
      threadPath.style.strokeDashoffset = '0';
    } else {
      threadPath.style.strokeDashoffset = String(len);
      var drawThread = function () {
        var scrollable = document.documentElement.scrollHeight - window.innerHeight;
        var prog = scrollable > 0 ? Math.min(1, Math.max(0, window.scrollY / scrollable)) : 1;
        threadPath.style.strokeDashoffset = String(len * (1 - prog));
      };
      drawThread();
      if (lenis) lenis.on('scroll', drawThread);
      window.addEventListener('scroll', drawThread, { passive: true });
      window.addEventListener('resize', drawThread);
    }
  }
})();
