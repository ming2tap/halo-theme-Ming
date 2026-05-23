(function() {
  function updateFooterYear() {
    const el = document.getElementById('currentYear');
    if (el) el.textContent = new Date().getFullYear();
  }

  function formatPostTimes() {
    document.querySelectorAll('.time, .ex-time').forEach(function(el) {
      var dateStr = el.getAttribute('data-date');
      if (!dateStr) return;
      var date = new Date(dateStr);
      el.textContent = date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
    });
  }

  function updateDarkModeIcon() {
    var toggle = document.getElementById('toggle-dark-mode');
    if (!toggle) return;
    var icon = toggle.querySelector('i');
    if (!icon) return;
    var isDark = document.documentElement.classList.contains('dark');
    icon.className = isDark ? 'iconfont icon-ri-sun-line' : 'iconfont icon-ri-moon-line';
  }

  function initLazyLoad() {
    var lazyElements = document.querySelectorAll('.lazyload');
    if (lazyElements.length === 0) return;

    var observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (!entry.isIntersecting) return;
        var el = entry.target;
        if (el.dataset.src) {
          el.src = el.dataset.src;
          delete el.dataset.src;
        }
        if (el.dataset.srcset) {
          el.srcset = el.dataset.srcset;
          delete el.dataset.srcset;
        }
        el.classList.remove('lazyload');
        observer.unobserve(el);
      });
    }, { rootMargin: '200px' });

    lazyElements.forEach(function(el) { observer.observe(el); });
  }

  function initializePageFeatures() {
    updateFooterYear();
    formatPostTimes();
    updateDarkModeIcon();
    initLazyLoad();
  }

  function setupPjax() {
    var pjax = new Pjax({
      selectors: ['#pjax-content', 'title'],
      cacheBust: false,
      elements: 'a:not([target="_blank"]):not([href^="http://"]):not([href^="https://"]):not([href^="#"]):not([href^="javascript:"])'
    });
    document.addEventListener('pjax:send', function() {
      window.scrollTo(0, 0);
    });
    document.addEventListener('pjax:success', function() {
      initializePageFeatures();
      reloadCommentScripts();
    });
  }

  function reloadCommentScripts() {
    var commentDiv = document.getElementById('comment');
    if (!commentDiv) return;
    var scripts = commentDiv.querySelectorAll('script');
    scripts.forEach(function(script) {
      var newScript = document.createElement('script');
      if (script.type) newScript.type = script.type;
      if (script.src) newScript.src = script.src;
      if (script.innerHTML) newScript.innerHTML = script.innerHTML;
      document.body.appendChild(newScript);
      script.remove();
    });
  }

  function initSmoothScroll() {
    var backToTopButton = document.getElementById('back-to-top');
    if (backToTopButton) {
      var ticking = false;
      window.addEventListener('scroll', function() {
        if (!ticking) {
          requestAnimationFrame(function() {
            var isVisible = window.scrollY > 300;
            backToTopButton.classList.toggle('opacity-0', !isVisible);
            backToTopButton.classList.toggle('pointer-events-none', !isVisible);
            backToTopButton.classList.toggle('opacity-100', isVisible);
            backToTopButton.classList.toggle('pointer-events-auto', isVisible);
            ticking = false;
          });
          ticking = true;
        }
      });
      backToTopButton.addEventListener('click', function(event) {
        event.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }

    var toggle = document.getElementById('toggle-dark-mode');
    if (toggle) {
      toggle.addEventListener('click', function(event) {
        event.preventDefault();
        var icon = toggle.querySelector('i');
        var isDark = document.documentElement.classList.toggle('dark');
        localStorage.setItem('darkMode', isDark);
        if (icon) {
          icon.className = isDark ? 'iconfont icon-ri-sun-line' : 'iconfont icon-ri-moon-line';
        }
      });
    }
  }

  function initMobileMenu() {
    var menuBtn = document.getElementById('menu-btn');
    var closeMenuBtn = document.getElementById('close-menu');
    var mainMenu = document.getElementById('main-menu');

    if (menuBtn) {
      menuBtn.addEventListener('click', function() {
        if (mainMenu) mainMenu.classList.add('active');
      });
    }
    if (closeMenuBtn) {
      closeMenuBtn.addEventListener('click', function() {
        if (mainMenu) mainMenu.classList.remove('active');
      });
    }
    if (mainMenu) {
      document.addEventListener('click', function(event) {
        if (!mainMenu.contains(event.target) && !(menuBtn && menuBtn.contains(event.target))) {
          mainMenu.classList.remove('active');
        }
      });
      mainMenu.addEventListener('click', function(event) {
        if (event.target.tagName.toLowerCase() === 'a') {
          setTimeout(function() {
            if (mainMenu.classList.contains('active')) {
              mainMenu.classList.remove('active');
            }
          }, 100);
        }
      });
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
      initializePageFeatures();
      initSmoothScroll();
      initMobileMenu();
    });
  } else {
    initializePageFeatures();
    initSmoothScroll();
    initMobileMenu();
  }

  setupPjax();
})();
