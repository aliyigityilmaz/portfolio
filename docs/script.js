/* ═══════════════════════════════════════════════════════════
   ALI YİĞİT YILMAZ — main.js
═══════════════════════════════════════════════════════════ */

/* ── CANVAS PARTICLES (intro bg) ────────────────────────── */
const canvas = document.getElementById('intro-canvas');
if (canvas) {
  const ctx = canvas.getContext('2d');
  let particles = [];
  let rafId;

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);

  for (let i = 0; i < 55; i++) {
    particles.push({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      size: Math.random() * 1.2 + 0.2,
      opacity: Math.random() * 0.45 + 0.1
    });
  }

  function drawParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0) p.x = canvas.width;
      if (p.x > canvas.width) p.x = 0;
      if (p.y < 0) p.y = canvas.height;
      if (p.y > canvas.height) p.y = 0;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(0,212,255,${p.opacity})`;
      ctx.fill();
    });
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const d = Math.sqrt(dx * dx + dy * dy);
        if (d < 100) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(0,212,255,${(1 - d / 100) * 0.07})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }
    }
    rafId = requestAnimationFrame(drawParticles);
  }
  drawParticles();

  window._stopParticles = () => cancelAnimationFrame(rafId);
}

/* ── INTRO SEQUENCE ─────────────────────────────────────── */
const introEl   = document.getElementById('intro');
const siteEl    = document.getElementById('site');
const introName = document.getElementById('intro-name');

// Glitch data attr
if (introName) introName.setAttribute('data-glitch', introName.textContent);

// Staggered system lines
document.querySelectorAll('.sys-line').forEach(line => {
  const delay = parseInt(line.dataset.delay || 0);
  setTimeout(() => line.classList.add('show'), delay + 300);
});

// Name block appears after lines
const nameBlock = document.getElementById('intro-name-block');
if (nameBlock) {
  setTimeout(() => nameBlock.classList.add('show'), 1600);
}

/* ── ENTER SITE ─────────────────────────────────────────── */
function enterSite() {
  if (!introEl || introEl.dataset.leaving) return;
  introEl.dataset.leaving = '1';

  // Stop particles
  if (window._stopParticles) window._stopParticles();

  // Fade out intro
  introEl.style.transition = 'opacity 0.7s ease';
  introEl.style.opacity = '0';
  introEl.style.pointerEvents = 'none';

  // Show site — remove display:none first, then fade in
  siteEl.style.display = 'block';
  siteEl.style.opacity = '0';
  siteEl.style.transition = 'opacity 0.6s ease';

  setTimeout(() => {
    siteEl.style.opacity = '1';
  }, 200);

  setTimeout(() => {
    introEl.remove();
    siteEl.style.transition = '';
    siteEl.style.opacity = '';
    // Trigger reveal for above-fold elements
    document.querySelectorAll('.reveal').forEach(el => revealObs.observe(el));
  }, 800);

  sessionStorage.setItem('ayy_intro_seen', '1');
}

// Bind buttons
const startBtn = document.getElementById('intro-start');
const skipBtn  = document.getElementById('intro-skip');
if (startBtn) startBtn.addEventListener('click', enterSite);
if (skipBtn)  skipBtn.addEventListener('click',  enterSite);

// Enter key
document.addEventListener('keydown', e => {
  if (e.key === 'Enter' && introEl && !introEl.dataset.leaving) enterSite();
});

// Already seen this session — skip immediately
if (sessionStorage.getItem('ayy_intro_seen')) {
  introEl && introEl.remove();
  siteEl.style.display = 'block';
  siteEl.style.opacity = '1';
}

/* ── CUSTOM CURSOR ───────────────────────────────────────── */
const cursorEl = document.getElementById('cursor');
if (cursorEl) {
  let cx = -100, cy = -100;
  document.addEventListener('mousemove', e => {
    cx = e.clientX; cy = e.clientY;
    cursorEl.style.left = cx + 'px';
    cursorEl.style.top  = cy + 'px';
    if (!document.body.classList.contains('has-cursor')) {
      document.body.classList.add('has-cursor');
    }
  });

  document.addEventListener('mouseleave', () => {
    document.body.classList.remove('has-cursor');
  });

  // Big cursor on interactive elements
  function bindCursorHover() {
    document.querySelectorAll('a, button').forEach(el => {
      if (el._cursorBound) return;
      el._cursorBound = true;
      el.addEventListener('mouseenter', () => cursorEl.classList.add('big'));
      el.addEventListener('mouseleave', () => cursorEl.classList.remove('big'));
    });
  }
  bindCursorHover();
  // Re-bind after intro removed (site elements now in DOM)
  setTimeout(bindCursorHover, 900);
}

/* ── HEADER SHRINK ───────────────────────────────────────── */
const headerEl = document.getElementById('site-header');
window.addEventListener('scroll', () => {
  if (headerEl) headerEl.classList.toggle('scrolled', window.scrollY > 60);
}, { passive: true });

/* ── SCROLL REVEAL ───────────────────────────────────────── */
const revealObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) e.target.classList.add('active');
  });
}, { threshold: 0.08 });

document.querySelectorAll('.reveal').forEach(el => revealObs.observe(el));

/* ── SMOOTH SCROLL ───────────────────────────────────────── */
document.addEventListener('click', e => {
  const a = e.target.closest('a[href^="#"]');
  if (!a) return;
  const target = document.querySelector(a.getAttribute('href'));
  if (target) {
    e.preventDefault();
    target.scrollIntoView({ behavior: 'smooth' });
  }
});