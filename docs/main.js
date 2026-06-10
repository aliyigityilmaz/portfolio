/* ═══════════════════════════════════════════════════════════
   ALI YİĞİT YILMAZ — main.js
   i18n: TR / EN / DE  ·  photo fix  ·  scroll reveals
═══════════════════════════════════════════════════════════ */

/* ═══════════════════════════════════════════════════════════
   TRANSLATIONS
═══════════════════════════════════════════════════════════ */
const TRANSLATIONS = {
  tr: {
    nav_about: 'HAKKIMDA',
    nav_games: 'OYUNLAR',
    nav_arcade: 'PROJELER',
    nav_skills: 'YETENEKLER',
    nav_contact: 'İLETİŞİM',

    marquee: 'OYUN GELİŞTİRİCİ &nbsp;·&nbsp; KURUCU ORTAK &nbsp;·&nbsp; İSTANBUL &nbsp;·&nbsp; OYUN TASARIMI MEZUNU &nbsp;·&nbsp;&nbsp; OYUN GELİŞTİRİCİ &nbsp;·&nbsp; KURUCU ORTAK &nbsp;·&nbsp; İSTANBUL &nbsp;·&nbsp; OYUN TASARIMI MEZUNU &nbsp;·&nbsp;&nbsp;',

    hero_role: 'OYUN GELİŞTİRİCİ / TASARIMCI',
    hero_desc: 'Oyun geliştirici ve <a href="https://triarchinteractive.com" target="_blank" class="tlink">Triarch Interactive</a> kurucu ortağı.<br>İnsanların gerçekten sonuna kadar oynamak isteyeceği oyunlar geliştiriyorum.',
    hero_btn_work: 'PROJELERİM',
    hero_btn_contact: 'İLETİŞİME GEÇ',

    ticker_label: 'ŞU AN ÜZERİNDE ÇALIŞTIĞIM:',
    ticker_1: 'Endless Check — Tasarım & Geliştirme',
    ticker_2: 'Keep It Checked — Geliştirici',

    about_tag: '// 01 — HAKKIMDA',
    about_title: 'OYUNCU<br>PROFİLİ',

    about_p1: 'Ben Ali Yiğit. Oyun geliştirici ve <a href="https://triarchinteractive.com" target="_blank" class="tlink">Triarch Interactive</a> kurucu ortağıyım. 2021 yılından beri oyun geliştiriyorum. Eğitim hayatım İstanbul ve Almanya arasında geçti. Toplamda yaklaşık 6 yıllık deneyime, bunun 3 yılında ise profesyonel çalışma geçmişine sahibim.',

    about_p2: 'Google Game & App Academy mezunuyum. Tasarımdan geliştirmeye kadar üretimin tüm aşamalarında aktif rol alıyorum. Genellikle küçük ama yüksek motivasyonlu ekiplerle çalışıyor, oyuncunun zamanına değer veren deneyimler üretmeye odaklanıyorum.',

    about_p3: 'Beni en çok heyecanlandıran şey, bir mekaniğin tam anlamıyla yerine oturduğu andır. Kontrollerin hissi, zorluk eğrisinin ritmi ve bir sistemin kusursuz çalışmasının verdiği o sessiz tatmin.',

    badge1: '🎓 Oyun Tasarımı Mezunu',
    badge2: '🏫 İstanbul & Almanya',
    badge3: '🏆 Google Game Academy',
    badge4: '📅 2021\'den Beri',

    stat_titles: 'OYUN',
    stat_games: 'ADET',
    stat_shipped: 'YAYINLANAN',
    stat_steam: 'STEAM\'DE',
    stat_years: 'TOPLAM DENEYİM',
    stat_years_unit: 'YIL',
    stat_pro: 'PROFESYONEL',

    games_tag: '// 02 — PROFESYONEL PROJELER',
    games_title: 'PROJE<br>SEÇ',

    kic_role: 'Oyun Geliştirici — Triarch Interactive',
    kic_desc: 'İlk ticari oyunum. Temel oynanış tasarımından geliştirme sürecine, testlerden Steam çıkışına kadar projenin her aşamasında yer aldım. Bir oyunu fikir aşamasından yayına kadar taşımanın ne gerektirdiğini bu projede öğrendim.',

    kic2_role: 'Oyun Geliştirici — Triarch Interactive',
    kic2_desc: 'Serinin ikinci oyunu. Yeni mekanikler, yeni bir ortam ve daha olgun bir geliştirme süreci. İlk projeden edindiğimiz deneyimleri burada uyguluyoruz.',

    ec_role: 'Tasarım & Geliştirme',
    ec_desc: 'Bugüne kadar üzerinde çalıştığım en iddialı tasarım projesi. Hem oyun tasarımı hem de geliştirme tarafını üstleniyorum. Oyuncunun kararlarının gerçekten önem taşıdığı ve zorluk eğrisinin hissedildiği bir deneyim yaratmayı hedefliyorum.',

    btn_steam: 'STEAM SAYFASI',
    coming_soon: 'YAKINDA',

    personal_tag: '// 03 — KİŞİSEL PROJELER',
    personal_title: 'PROJE<br>ARŞİVİ',

    arcade_intro: 'Öğrencilik döneminden ve kişisel çalışmalarımdan projeler. Deneyler, game jam çalışmaları ve öğrenme süreçleri. Kusursuz değiller ama gelişimimin önemli parçaları.',

    itch_link: 'Tüm projeler itch.io\'da ↗',

    tag_student: 'ÖĞRENCİ',
    tag_proto: 'PROTOTİP',

    see_all: 'TÜMÜNÜ<br>GÖR',
    all_projects: 'TÜM PROJELER',

    skills_tag: '// 04 — YETENEKLER',
    skills_title: 'YETENEKLER',

    skills_dev: 'GELİŞTİRME',
    skills_design: 'TASARIM',
    skills_tools: 'ARAÇLAR',

    skills_note: '// kişisel değerlendirme.',

    contact_tag: '// 05 — İLETİŞİM',
    contact_title: 'İLETİŞİM',

    contact_sub: 'İş birlikleri, kariyer fırsatları veya oyun geliştirme üzerine güzel bir sohbet için bana ulaşabilirsin.',

    lb_title: 'BENİ BUL',
    lb_studio: 'Stüdyo Sitesi',

    footer_center: 'GAME OVER? ASLA.'
  },

  en: {
    nav_about:    'ABOUT',
    nav_games:    'GAMES',
    nav_arcade:   'ARCADE',
    nav_skills:   'SKILLS',
    nav_contact:  'CONTACT',

    marquee: 'GAME DEV &nbsp;·&nbsp; CO-FOUNDER &nbsp;·&nbsp; ISTANBUL &nbsp;·&nbsp; GAME DESIGN GRADUATE &nbsp;·&nbsp;&nbsp; GAME DEV &nbsp;·&nbsp; CO-FOUNDER &nbsp;·&nbsp; ISTANBUL &nbsp;·&nbsp; GAME DESIGN GRADUATE &nbsp;·&nbsp;&nbsp;',

    hero_role:       'GAME DEVELOPER / DESIGNER',
    hero_desc:       'Game developer &amp; co-founder of Triarch Interactive.<br>Making games people actually want to finish.',
    hero_btn_work:   'SEE MY WORK',
    hero_btn_contact:'GET IN TOUCH',
    ticker_label:    'NOW PLAYING:',
    ticker_1:        'Endless Check — Designer & Developer',
    ticker_2:        'Keep It Checked — Developer',

    about_tag:   '// 01 — ABOUT',
    about_title: 'PLAYER<br>PROFILE',
    about_p1:    'I\'m Ali Yiğit — game developer and co-founder of <a href="https://triarchinteractive.com" target="_blank" class="tlink">Triarch Interactive</a>. Making games since 2021; studied in Istanbul and Germany. Around 6 years total, 3 professional.',
    about_p2:    'Google Game &amp; App Academy alumnus. I work across the full loop — design to code — in small teams that actually ship things. We make games that respect the player\'s time.',
    about_p3:    'What keeps me going is the moment a mechanic <em>clicks</em>: the feel of a control, the rhythm of a challenge, the quiet satisfaction when a system does exactly what it should.',
    badge1: '🎓 Game Design Graduate',
    badge2: '🏫 Istanbul & Germany',
    badge3: '🏆 Google Game Academy',
    badge4: '📅 Started 2021',

    stat_titles:    'TITLES',
    stat_games:     'GAMES',
    stat_shipped:   'SHIPPED',
    stat_steam:     'ON STEAM',
    stat_years:     'YEARS ACTIVE',
    stat_years_unit:'YEARS',
    stat_pro:       'PRO XP',

    games_tag:   '// 02 — PROFESSIONAL TITLES',
    games_title: 'STAGE<br>SELECT',
    kic_role:  'Game Developer — Triarch Interactive',
    kic_desc:  'My first shipped title. Built end-to-end: core loop design, implementation, shipped to Steam. Learned what it really takes to finish a game.',
    kic2_role: 'Game Developer — Triarch Interactive',
    kic2_desc: 'Second entry in the series. Different setting, new mechanics. Found the formula for moving fast without breaking everything.',
    ec_role:   'Designer & Developer',
    ec_desc:   'My most design-forward project yet — leading both game design and development. Meaningful decisions, a difficulty curve you can actually feel.',
    btn_steam:   'GET ON STEAM',
    coming_soon: 'COMING SOON',

    personal_tag:   '// 03 — PERSONAL PROJECTS',
    personal_title: 'ARCADE<br>CABINET',
    arcade_intro:   'Student and personal projects — experiments, game jams, learning by doing. Not polished, not finished, but honest.',
    itch_link:      'Full library on itch.io ↗',
    tag_student:    'STUDENT',
    tag_proto:      'PROTOTYPE',
    see_all:        'SEE ALL<br>ON ITCH.IO',
    all_projects:   'ALL PROJECTS',

    skills_tag:    '// 04 — SKILLS',
    skills_title:  'POWER<br>UPS',
    skills_dev:    'DEVELOPMENT',
    skills_design: 'DESIGN',
    skills_tools:  'TOOLS',
    skills_note:   '// self-assessed — the only honest way.',

    contact_tag:   '// 05 — CONTACT',
    contact_title: 'CONTINUE?',
    contact_sub:   'Open to collaborations, opportunities, and good conversations about games.',
    lb_title:      'FIND ME ONLINE',
    lb_studio:     'Studio Site',
    footer_center: 'GAME OVER? NEVER.',
  },

  de: {
    nav_about: 'ÜBER MICH',
    nav_games: 'SPIELE',
    nav_arcade: 'PROJEKTE',
    nav_skills: 'KENNTNISSE',
    nav_contact: 'KONTAKT',

    marquee: 'SPIELEENTWICKLER &nbsp;·&nbsp; MITGRÜNDER &nbsp;·&nbsp; ISTANBUL &nbsp;·&nbsp; GAME-DESIGN ABSOLVENT &nbsp;·&nbsp;&nbsp; SPIELEENTWICKLER &nbsp;·&nbsp; MITGRÜNDER &nbsp;·&nbsp; ISTANBUL &nbsp;·&nbsp; GAME-DESIGN ABSOLVENT &nbsp;·&nbsp;&nbsp;',

    hero_role: 'SPIELEENTWICKLER / DESIGNER',
    hero_desc: 'Spieleentwickler und Mitgründer von Triarch Interactive.<br>Ich entwickle Spiele, die Spieler wirklich bis zum Ende erleben möchten.',

    hero_btn_work: 'MEINE PROJEKTE',
    hero_btn_contact: 'KONTAKT',

    ticker_label: 'AKTUELL:',
    ticker_1: 'Endless Check — Design & Entwicklung',
    ticker_2: 'Keep It Checked — Entwickler',

    about_tag: '// 01 — ÜBER MICH',
    about_title: 'PROFIL',

    about_p1: 'Ich bin Ali Yiğit, Spieleentwickler und Mitgründer von <a href="https://triarchinteractive.com" target="_blank" class="tlink">Triarch Interactive</a>. Seit 2021 entwickle ich Spiele und habe sowohl in Istanbul als auch in Deutschland studiert. Insgesamt verfüge ich über rund sechs Jahre Erfahrung, davon drei Jahre im professionellen Umfeld.',

    about_p2: 'Als Absolvent der Google Game & App Academy begleite ich Projekte über den gesamten Entwicklungsprozess hinweg – von der Konzeption bis zur Umsetzung. Besonders gerne arbeite ich in kleinen, fokussierten Teams mit klaren Zielen und hoher Eigenverantwortung.',

    about_p3: 'Besonders faszinieren mich die Momente, in denen eine Spielmechanik perfekt funktioniert: das Gefühl einer Steuerung, der Rhythmus einer Herausforderung und die Zufriedenheit, wenn jedes System genau so arbeitet, wie es vorgesehen ist.',

    badge1: '🎓 Game-Design Absolvent',
    badge2: '🏫 Istanbul & Deutschland',
    badge3: '🏆 Google Game Academy',
    badge4: '📅 Seit 2021',

    stat_titles: 'TITEL',
    stat_games: 'SPIELE',
    stat_shipped: 'VERÖFFENTLICHT',
    stat_steam: 'AUF STEAM',
    stat_years: 'ERFAHRUNG',
    stat_years_unit: 'JAHRE',
    stat_pro: 'BERUFLICH',

    games_tag: '// 02 — VERÖFFENTLICHTE & AKTUELLE PROJEKTE',
    games_title: 'PROJEKT<br>AUSWAHL',

    kic_role: 'Spieleentwickler — Triarch Interactive',
    kic_desc: 'Mein erstes veröffentlichtes Spiel. Von der Gestaltung des Core-Loops über die technische Umsetzung bis hin zur Veröffentlichung auf Steam war ich an allen wesentlichen Bereichen beteiligt. Dieses Projekt hat mir gezeigt, was es wirklich bedeutet, ein Spiel erfolgreich abzuschließen.',

    kic2_role: 'Spieleentwickler — Triarch Interactive',
    kic2_desc: 'Der zweite Teil der Reihe. Neue Umgebung, neue Mechaniken und ein deutlich reiferer Entwicklungsprozess. Viele der Erkenntnisse aus dem ersten Projekt fließen direkt in dieses Spiel ein.',

    ec_role: 'Design & Entwicklung',
    ec_desc: 'Mein bislang ambitioniertestes Designprojekt. Ich verantworte sowohl das Game Design als auch die technische Entwicklung. Ziel ist ein Spielerlebnis, in dem Entscheidungen spürbare Konsequenzen haben und die Progression bewusst gestaltet ist.',

    btn_steam: 'AUF STEAM',
    coming_soon: 'DEMNÄCHST',

    personal_tag: '// 03 — PERSÖNLICHE PROJEKTE',
    personal_title: 'PROJEKT<br>ARCHIV',

    arcade_intro: 'Studien- und Privatprojekte, Experimente sowie Game-Jam-Beiträge. Nicht jedes Projekt wurde vollständig ausgearbeitet, aber jedes einzelne war ein wichtiger Schritt auf meinem Weg als Entwickler.',

    itch_link: 'Alle Projekte auf itch.io ↗',

    tag_student: 'STUDIUM',
    tag_proto: 'PROTOTYP',

    see_all: 'ALLE<br>PROJEKTE',
    all_projects: 'ALLE PROJEKTE',

    skills_tag: '// 04 — KENNTNISSE',
    skills_title: 'FÄHIGKEITEN',

    skills_dev: 'ENTWICKLUNG',
    skills_design: 'DESIGN',
    skills_tools: 'WERKZEUGE',

    skills_note: '// persönliche Selbsteinschätzung.',

    contact_tag: '// 05 — KONTAKT',
    contact_title: 'KONTAKT',

    contact_sub: 'Ich freue mich über spannende Projekte, berufliche Möglichkeiten oder einfach einen guten Austausch über Spieleentwicklung.',

    lb_title: 'ONLINE FINDEN',
    lb_studio: 'Studio-Website',

    footer_center: 'GAME OVER? NIEMALS.'
  }
};

/* ═══════════════════════════════════════════════════════════
   I18N ENGINE
═══════════════════════════════════════════════════════════ */
function applyLang(lang) {
  const t = TRANSLATIONS[lang] || TRANSLATIONS.en;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (t[key] !== undefined) {
      el.innerHTML = t[key];
    }
  });
  document.documentElement.lang = lang;
  try { localStorage.setItem('ayy_lang', lang); } catch(e) {}
}

function initLangSwitcher() {
  const saved = (() => { try { return localStorage.getItem('ayy_lang'); } catch(e) { return null; } })();
  const initial = saved || 'en';

  applyLang(initial);
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === initial);
    btn.addEventListener('click', function() {
      const lang = this.dataset.lang;
      applyLang(lang);
      document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
      this.classList.add('active');
    });
  });
}

/* ═══════════════════════════════════════════════════════════
   PHOTO FALLBACK — show placeholder only if src fails
═══════════════════════════════════════════════════════════ */
function initPhoto() {
  const img = document.querySelector('.photo-inner img');
  const placeholder = document.querySelector('.photo-placeholder');
  if (!img || !placeholder) return;

  placeholder.style.display = 'none';
  img.style.display = 'block';

  img.addEventListener('error', function() {
    img.style.display = 'none';
    placeholder.style.display = 'flex';
  });

  const src = img.src;
  img.src = '';
  img.src = src;
}

/* ═══════════════════════════════════════════════════════════
   BOOT SEQUENCE
═══════════════════════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', function () {

  const introEl   = document.getElementById('intro');
  const siteEl    = document.getElementById('site');
  const nameBlock = document.getElementById('name-block');
  const startBtn  = document.getElementById('intro-start');
  const skipBtn   = document.getElementById('intro-skip');

  /* Canvas particles */
  const canvas = document.getElementById('intro-canvas');
  let rafId = null;
  if (canvas) {
    const ctx = canvas.getContext('2d');
    const particles = [];
    function resizeCanvas() { canvas.width = window.innerWidth; canvas.height = window.innerHeight; }
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    for (let i = 0; i < 40; i++) {
      particles.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        size: Math.random() * 1.5 + 0.3,
        opacity: Math.random() * 0.45 + 0.08
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
        ctx.fillStyle = `rgba(255,187,0,${p.opacity})`;
        ctx.fill();
      });
      rafId = requestAnimationFrame(drawParticles);
    }
    drawParticles();
  }

  /* Boot lines */
  document.querySelectorAll('.boot-line').forEach(line => {
    const delay = parseInt(line.dataset.delay || 0, 10);
    setTimeout(() => line.classList.add('show'), delay + 200);
  });
  if (nameBlock) {
    setTimeout(() => nameBlock.classList.add('show'), 1800);
  }

  /* Enter site */
  let leaving = false;
  function enterSite() {
    if (leaving) return;
    leaving = true;
    if (rafId !== null) { cancelAnimationFrame(rafId); rafId = null; }
    introEl.style.transition    = 'opacity 0.6s ease';
    introEl.style.opacity       = '0';
    introEl.style.pointerEvents = 'none';
    siteEl.style.display    = 'block';
    siteEl.style.opacity    = '0';
    siteEl.style.transition = 'opacity 0.5s ease';
    requestAnimationFrame(function() {
      requestAnimationFrame(function() { siteEl.style.opacity = '1'; });
    });
    setTimeout(function() {
      introEl.remove();
      siteEl.style.transition = '';
      siteEl.style.opacity    = '';
      initSite();
    }, 700);
    try { sessionStorage.setItem('ayy_intro_seen', '1'); } catch(e) {}
  }

  if (startBtn) startBtn.addEventListener('click', function(e) { e.preventDefault(); enterSite(); });
  if (skipBtn)  skipBtn.addEventListener('click',  function(e) { e.preventDefault(); enterSite(); });
  function onKeyDown(e) {
    if (e.key === 'Enter') { document.removeEventListener('keydown', onKeyDown); enterSite(); }
  }
  document.addEventListener('keydown', onKeyDown);

}); // /DOMContentLoaded

/* ═══════════════════════════════════════════════════════════
   SITE INIT
═══════════════════════════════════════════════════════════ */
function initSite() {
  /* Photo */
  initPhoto();

  /* Language switcher */
  initLangSwitcher();

  /* Header shrink */
  const headerEl = document.getElementById('site-header');
  if (headerEl) {
    window.addEventListener('scroll', function() {
      headerEl.classList.toggle('scrolled', window.scrollY > 40);
    }, { passive: true });
  }

  /* Scroll reveal */
  const revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const obs = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) entry.target.classList.add('active');
      });
    }, { threshold: 0.07 });
    revealEls.forEach(function(el) { obs.observe(el); });
  } else {
    revealEls.forEach(function(el) { el.classList.add('active'); });
  }

  /* Smooth scroll */
  document.addEventListener('click', function(e) {
    const a = e.target.closest('a[href^="#"]');
    if (!a) return;
    const href = a.getAttribute('href');
    if (href === '#') return;
    const target = document.querySelector(href);
    if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth' }); }
  });
}