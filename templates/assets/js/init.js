(function() {
  function updateFooterYear() {
    const currentYear = new Date().getFullYear();
    const el = document.getElementById('currentYear');
    if (el) el.textContent = currentYear;
  }

  function formatPostTimes() {
    document.querySelectorAll('.time, .ex-time').forEach((timeElement) => {
      const date = new Date(timeElement.getAttribute('data-date'));
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      timeElement.textContent = date.toLocaleDateString('en-US', options);
    });
  }

  function initializePageFeatures() {
    try {
      updateFooterYear();
      formatPostTimes();
    } catch (error) {
      console.error('Error initializing page features:', error);
    }
  }

  function setupPjax() {
    const pjax = new Pjax({
      selectors: ['#pjax-content', 'title'],
      cacheBust: false,
      elements: 'a',
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
    // 重新加载 Halo 评论组件的脚本
    const commentDiv = document.getElementById('comment');
    if (commentDiv) {
      const scripts = commentDiv.querySelectorAll('script');
      scripts.forEach(script => {
        const newScript = document.createElement('script');
        if (script.type) newScript.type = script.type;
        if (script.src) newScript.src = script.src;
        if (script.innerHTML) newScript.innerHTML = script.innerHTML;
        document.body.appendChild(newScript);
        script.remove();
      });
    }
  }

  function initSmoothScroll() {
    const backToTopButton = document.getElementById('back-to-top');
    if (backToTopButton) {
      window.addEventListener('scroll', () => {
        const isVisible = window.scrollY > 300;
        backToTopButton.classList.toggle('opacity-0', !isVisible);
        backToTopButton.classList.toggle('pointer-events-none', !isVisible);
        backToTopButton.classList.toggle('opacity-100', isVisible);
        backToTopButton.classList.toggle('pointer-events-auto', isVisible);
      });
      backToTopButton.addEventListener('click', (event) => {
        event.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }

    // 暗色模式切换
    const toggle = document.getElementById('toggle-dark-mode');
    if (toggle) {
      toggle.addEventListener('click', (event) => {
        event.preventDefault();
        const icon = toggle.querySelector('i');
        const isDark = document.documentElement.classList.toggle('dark');
        localStorage.setItem('darkMode', isDark);
        if (icon) {
          icon.className = isDark ? 'iconfont icon-ri-sun-line' : 'iconfont icon-ri-moon-line';
        }
      });
      
      // 初始化暗色模式状态
      const isDarkMode = localStorage.getItem('darkMode') === 'true';
      if (isDarkMode) {
        document.documentElement.classList.add('dark');
        const icon = toggle.querySelector('i');
        if (icon) {
          icon.className = 'iconfont icon-ri-sun-line';
        }
      }
    }
  }

  function initMobileMenu() {
    const menuBtn = document.getElementById('menu-btn');
    const closeMenuBtn = document.getElementById('close-menu');
    const mainMenu = document.getElementById('main-menu');

    if (menuBtn) {
      menuBtn.addEventListener('click', function() {
        if (mainMenu) {
          mainMenu.classList.add('active');
        }
      });
    }
    if (closeMenuBtn) {
      closeMenuBtn.addEventListener('click', function() {
        if (mainMenu) {
          mainMenu.classList.remove('active');
        }
      });
    }
    if (mainMenu) {
      document.addEventListener('click', function(event) {
        const isClickInsideMenu = mainMenu.contains(event.target);
        const isClickOnMenuButton = menuBtn && menuBtn.contains(event.target);
        if (!isClickInsideMenu && !isClickOnMenuButton) {
          mainMenu.classList.remove('active');
        }
      });
      mainMenu.addEventListener('click', function(event) {
        const target = event.target;
        if (target.tagName.toLowerCase() === 'a') {
          setTimeout(() => {
            if (mainMenu.classList.contains('active')) {
              mainMenu.classList.remove('active');
            }
          }, 100);
        }
      });
    }
  }

  // 页面加载完成后初始化
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
