/**
 * My World — Main JavaScript
 * 粒子背景 · 打字机效果 · 滚动动画 · 导航交互 · 技能进度条 · 数字计数
 */

(function () {
  'use strict';

  // ========== 工具函数 ==========
  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];
  const on = (el, evt, fn) => el && el.addEventListener(evt, fn);

  // ========== 粒子背景 (Canvas) ==========
  function initParticles() {
    const canvas = $('#particleCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let particles = [];
    let animId;

    function resize() {
      canvas.width = canvas.offsetWidth * (devicePixelRatio || 1);
      canvas.height = canvas.offsetHeight * (devicePixelRatio || 1);
      ctx.scale(devicePixelRatio || 1, devicePixelRatio || 1);
    }

    function createParticle() {
      return {
        x: Math.random() * canvas.offsetWidth,
        y: Math.random() * canvas.offsetHeight,
        size: Math.random() * 2 + 0.5,
        speedX: (Math.random() - 0.5) * 0.4,
        speedY: (Math.random() - 0.5) * 0.4,
        opacity: Math.random() * 0.6 + 0.15,
        hue: [200, 250, 270][Math.floor(Math.random() * 3)],
      };
    }

    function init(count) {
      resize();
      particles = Array.from({ length: count }, createParticle);
    }

    function draw() {
      ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);
      particles.forEach((p, i) => {
        p.x += p.speedX;
        p.y += p.speedY;
        // 边界环绕
        if (p.x < 0) p.x = canvas.offsetWidth;
        if (p.x > canvas.offsetWidth) p.x = 0;
        if (p.y < 0) p.y = canvas.offsetHeight;
        if (p.y > canvas.offsetHeight) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${p.hue}, 80%, 65%, ${p.opacity})`;
        ctx.fill();

        // 连线（仅近距离）
        for (let j = i + 1; j < particles.length; j++) {
          const q = particles[j];
          const dx = p.x - q.x, dy = p.y - q.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.strokeStyle = `hsla(${p.hue}, 60%, 55%, ${0.12 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      });
      animId = requestAnimationFrame(draw);
    }

    init(70);
    draw();
    on(window, 'resize', () => { init(70); });
  }

  // ========== 打字机效果 ==========
  function initTyping() {
    const el = $('#typingText');
    if (!el) return;

    const phrases = [
      'Machine Learning Engineer',
      'NLP Explorer',
      'Full Stack Developer',
      'Data Science Enthusiast',
      'Creative Technologist',
      'Digital World Builder',
    ];
    let pi = 0, ci = 0, deleting = false;

    function type() {
      const current = phrases[pi];
      if (!deleting) {
        el.textContent = current.substring(0, ++ci);
        if (ci === current.length) {
          deleting = true;
          setTimeout(type, 1800); // 停留时间
          return;
        }
      } else {
        el.textContent = current.substring(0, --ci);
        if (ci === 0) {
          deleting = false;
          pi = (pi + 1) % phrases.length;
        }
      }
      setTimeout(type, deleting ? 45 : 85);
    }
    type();
  }

  // ========== 滚动动画 (IntersectionObserver) ==========
  function initScrollReveal() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    $$('.reveal').forEach(el => observer.observe(el));
    $$('.fade-up').forEach(el => observer.observe(el));
  }

  // ========== 导航栏交互 ==========
  function initNavbar() {
    const nav = $('#navbar');
    const progress = $('#navProgress');
    const toggle = $('#navToggle');
    const links = $('#navLinks');

    // 滚动时添加背景
    on(window, 'scroll', () => {
      nav.classList.toggle('scrolled', window.scrollY > 50);

      // 进度条
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (progress && docHeight > 0) {
        progress.style.width = `${(window.scrollY / docHeight) * 100}%`;
      }
    }, { passive: true });

    // 移动端菜单
    if (toggle && links) {
      on(toggle, 'click', () => {
        toggle.classList.toggle('active');
        links.classList.toggle('open');
      });

      // 点击链接关闭菜单
      $$('a', links).forEach(a => {
        on(a, 'click', () => {
          toggle.classList.remove('active');
          links.classList.remove('open');
        });
      });
    }

    // 高亮当前 section 对应的导航项
    const sections = $$('section[id]');
    on(window, 'scroll', () => {
      const scrollY = window.scrollY + 120;
      let current = '';
      sections.forEach(sec => {
        if (scrollY >= sec.offsetTop) current = sec.getAttribute('id');
      });
      $$('.nav-links a').forEach(a => {
        a.classList.toggle('active', a.getAttribute('href') === `#${current}`);
      });
    }, { passive: true });
  }

  // ========== 技能进度条动画 ==========
  function initSkillBars() {
    const bars = $$('.skill-bar');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );
    bars.forEach(b => observer.observe(b));
  }

  // ========== 数字计数动画 ==========
  function initCountUp() {
    const nums = $('[data-target]') ? $$('.stat-number[data-target]') : [];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const target = parseInt(entry.target.dataset.target);
            animateCount(entry.target, target);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );
    nums.forEach(n => observer.observe(n));

    function animateCount(el, target) {
      let cur = 0;
      const step = Math.max(Math.floor(target / 60), 1);
      const timer = setInterval(() => {
        cur += step;
        if (cur >= target) { cur = target; clearInterval(timer); }
        el.textContent = cur.toLocaleString();
      }, 25);
    }
  }

  // ========== 平滑滚动 (兼容性处理) ==========
  function initSmoothScroll() {
    $$('a[href^="#"]').forEach(a => {
      on(a, 'click', (e) => {
        e.preventDefault();
        const target = $(a.getAttribute('href'));
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });
  }

  // ========== 初始化所有模块 ==========
  document.addEventListener('DOMContentLoaded', () => {
    initParticles();
    initTyping();
    initScrollReveal();
    initNavbar();
    initSkillBars();
    initCountUp();
    initSmoothScroll();

    // 触发 hero 区域的 fade-up 可见
    setTimeout(() => {
      $$('.hero .fade-up').forEach(el => el.classList.add('visible'));
    }, 150);
  });
})();
