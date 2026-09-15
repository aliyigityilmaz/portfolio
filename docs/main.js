/* ═══════════════════════════════════════════════════════════
   ALI YİĞİT YILMAZ — main.js
   i18n: TR / EN / DE  ·  photo fix  ·  scroll reveals
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
    hero_desc: 'Oyun geliştirici ve <a href="https://triarchinteractive.com" target="_blank" class="tlink">Triarch Interactive</a> kurucu ortağı.<br>İnsanların gerçekten oynamak isteyeceği oyunlar geliştiriyorum.',
    hero_btn_work: 'PROJELERİM',
    hero_btn_contact: 'İLETİŞİME GEÇ',

    ticker_label: 'ŞU AN ÜZERİNDE ÇALIŞTIĞIM:',
    ticker_1: "Tinker's Nook — Tasarım & Geliştirme",
    ticker_2: 'Take That Shot — Geliştirici',

    about_tag: '// 01 — HAKKIMDA',
    about_title: 'OYUNCU<br>PROFİLİ',

    about_p1: 'Ben Ali Yiğit — full-stack oyun geliştirici ve <a href="https://triarchinteractive.com" target="_blank" class="tlink">Triarch Interactive</a> kurucu ortağı. 2021\'den beri oyun geliştiriyorum; İstanbul ve Almanya\'da eğitim aldım. Toplamda yaklaşık 6 yıl, bunun 3 yılı profesyonel deneyim.',
    about_p2: 'Google Game & App Academy mezunuyum. Oyun tasarımından koda, level tasarımından VFX ve UI\'a, Steam entegrasyonuna kadar üretim sürecinin tamamına sahibim. Unity birincil araçım ve onu derinlemesine biliyorum. Gerçekten oyun çıkaran küçük, odaklı ekiplerle çalışıyorum.',
    about_p3: 'Beni motive eden şey bir sistemin hayata geçtiğini görmek — tam doğru anda dallanan bir diyalog ağacı, doğal hissettiren bir envanter sistemi, hikayeyi mekaniğe bağlayan bir görev sistemi. Kodun tam olması gerektiği gibi çalıştığı o an? İşte o his peşindeyim.',

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
    games_studio_note: '// Aşağıdaki tüm projeler <a href="https://triarchinteractive.com" target="_blank" class="tlink">Triarch Interactive</a> bünyesinde geliştirilmektedir.',

    kic_role: 'Oyun Geliştirici — Triarch Interactive',
    kic_desc: "Ticari olarak yayınlanan ilk oyunum ve üretim sürecinin tamamını uçtan uca yönettiğim proje: ana döngü ve sistem tasarımı, oynanış programlama, ışıklandırma, VFX, shader çalışmaları, level tasarımı, UI tasarımı ve implementasyonu, ayrıca Steam mağaza sayfası ve kapsül görseli. Bir oyunu konseptten lansmana taşımanın gerçekte ne gerektirdiğini burada, birebir deneyimleyerek öğrendim.",
    kic2_role: 'Oyun Geliştirici — Triarch Interactive',
    kic2_desc: "Serinin ikinci oyunu; Unity üzerinde prosedürel üretim sistemleri ve yüksek kaliteli ışıklandırma için HDRP kullanılarak geliştiriliyor. İlk oyunda olduğu gibi tüm stack bende: oynanış sistemleri, ortam ve level tasarımı, ışıklandırma, VFX, UI ve Steam mağaza varlığı — bu kez daha önce bir oyun çıkarmış bir ekibin prodüksiyon verimliliğiyle.",
    ec_role: 'Tasarım & Geliştirme — Triarch Interactive',
    ec_desc: 'Bugüne kadar üzerinde çalıştığım en iddialı proje ve her şapkayı takan benim: oyun tasarımı, tüm sistemlerin mimarisi, oynanış programlama, VFX, ışıklandırma, UI tasarımı ve kodu, Steam mağaza görselleri. Tasarım düşüncemi en çok bu projede ileri taşıdım — gerçekten hissedilen bir zorluk eğrisi, anlamlı oyuncu kararları ve ustalığı ödüllendiren sistemler.',
    tts_role: 'Oyun Geliştirici & Oyun Sistemleri Tasarımcısı — Triarch Interactive',
    tts_desc: "Multiplayer odaklı bir proje; sistem tasarımcısı olarak en çok bu oyunda geliştim. Unity'nin Mirror altyapısıyla ağ üzerinden çalışan oynanış sistemleri kuruyorum, lobi, eşleştirme ve platform özellikleri için Steamworks entegrasyonunu üstleniyorum. Buradaki odağım multiplayer'ı güvenilir ve keyifli kılan sistemler: netcode mimarisi, oturum akışı ve temel oynanış tasarımı.",
    tn_role: 'Oyun Tasarımcısı & Geliştirici — Triarch Interactive',
    tn_desc: "2D, sakin tempolu bir dükkan yönetim oyunu; oyun tasarımından programlamanın tamamına ve ekip yönetimine kadar sürecin tümü bende. Zanaat ve dükkan döngülerinden ilerleme sistemlerine ve arayüze kadar her sistem baştan sona benim tarafımdan planlandı ve geliştirildi.",

    btn_steam: 'STEAM SAYFASI',
    btn_wishlist: "STEAM'DE İSTEK LİSTESİNE EKLE",
    coming_soon: 'YAKINDA',
    status_live: 'YAYINDA',
    status_dev: 'GELİŞTİRİLİYOR',
    gc_skills_label: 'YETENEKLER',

    personal_tag: '// 03 — KİŞİSEL PROJELER',
    personal_title: 'PROJE<br>ARŞİVİ',

    arcade_intro: 'Öğrencilik döneminden ve kişisel çalışmalarımdan projeler. Deneyler, game jam çalışmaları ve öğrenme süreçleri. Kusursuz değiller ama gelişimimin önemli parçaları.',
    itch_link: 'Tüm projeler itch.io\'da ↗',

    tag_student: 'ÖĞRENCİ',
    tag_proto: 'PROTOTİP',
    see_all: 'TÜMÜNÜ<br>GÖR',
    all_projects: 'TÜM PROJELER',

    tag_playable: 'OYNANABİLİR',
    play_arcade_cta: 'OYNA<br>ARCADE OYUNLARI',
    play_arcade_title: '5 MİNİ KARTUŞ',
    am_select_title: 'KARTUŞ SEÇ',
    arcade_select_hint: 'AŞAĞIDAN BİR KARTUŞ SEÇ',
    arcade_default_hint: 'YÖN TUŞLARI İLE HAREKET',

    sylvara_info: 'Sıra tabanlı açık dünya RPG. Savaş dışındaki her sistemi sıfırdan ben yazdım: oyuncu kontrolörü, envanter, zanaat, zaman sistemi, birden fazla bulmaca mekaniği, diyalog sistemi, görev sistemi ve tüm UI implementasyonu.',
    lightyears_info: 'Erasmus değişim programı bitirme projem. Tam bir bullet hell: düşman yapay zekası ve davranış ağaçları, birden fazla oyuncu silahı, yetenek ağaçları, yükseltme sistemleri, çok aşamalı patron savaşları. Her sistem, her tasarım kararı, her kod satırı: benim.',

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
    hero_desc:       'Game developer &amp; co-founder of Triarch Interactive.<br>Making games people actually want to play.',
    hero_btn_work:   'SEE MY WORK',
    hero_btn_contact:'GET IN TOUCH',
    ticker_label:    'NOW PLAYING:',
    ticker_1:        "Tinker's Nook — Designer &amp; Developer",
    ticker_2:        'Take That Shot — Developer',

    about_tag:   '// 01 — ABOUT',
    about_title: 'PLAYER<br>PROFILE',
    about_p1:    'I\'m Ali Yiğit — full-stack game developer and co-founder of <a href="https://triarchinteractive.com" target="_blank" class="tlink">Triarch Interactive</a>. Making games since 2021; studied in Istanbul and Germany. Around 6 years total, 3 professional.',
    about_p2:    'Google Game &amp; App Academy alumnus. I own the full pipeline — from game design and level design to code, VFX, UI, and Steam integration. Unity is my primary tool and I know it deeply. I work in small, focused teams that actually ship.',
    about_p3:    'What drives me is seeing a system come alive — a dialogue tree branching at exactly the right moment, an inventory that feels natural, a quest system tying story to mechanics. That moment when your code does exactly what it\'s supposed to? That\'s the feeling I\'m chasing.',
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
    games_studio_note: '// All titles below are developed under <a href="https://triarchinteractive.com" target="_blank" class="tlink">Triarch Interactive</a>.',

    kic_role:  'Game Developer — Triarch Interactive',
    kic_desc:  "My first commercially shipped title, and the project where I owned the entire production pipeline: core loop and systems design, gameplay programming, lighting, VFX, shader work, level design, UI design and implementation, plus the Steam store page and capsule art. It's where I learned, first-hand, what it actually takes to carry a game from concept to launch.",
    kic2_role: 'Game Developer — Triarch Interactive',
    kic2_desc: "The second entry in the series, built in Unity with a procedural-generation pipeline and HDRP for high-fidelity lighting and visuals. As with the first title, I own the full stack — gameplay systems, environment and level design, lighting, VFX, UI, and the Steam store presence — now with the production efficiency of a team that's shipped before.",
    ec_role:   'Designer & Developer — Triarch Interactive',
    ec_desc:   "My most ambitious project to date, and the one where I wear every hat: game design, full systems architecture, gameplay programming, VFX, lighting, UI design and code, and the Steam store presence. It's where I've pushed my design thinking the furthest — meaningful player decisions, a difficulty curve you can actually feel, and systems that reward mastery.",
    tts_role:  'Game Developer & Game Systems Designer — Triarch Interactive',
    tts_desc:  "A multiplayer-focused title, and the project where I've grown the most as a systems designer. I build networked gameplay with Unity's Mirror framework and handle Steamworks integration for lobbies, matchmaking, and platform features. My focus is on the systems that make multiplayer feel reliable and fun: netcode architecture, session flow, and core gameplay design.",
    tn_role:   'Game Designer & Developer — Triarch Interactive',
    tn_desc:   'A 2D cozy shop-management game where I own the full scope: game design, complete programming, and team leadership. Every system — from the crafting and shop loops to progression and UI — was planned and built by me, end to end.',

    btn_steam:    'GET ON STEAM',
    btn_wishlist: 'WISHLIST ON STEAM',
    coming_soon:  'COMING SOON',
    status_live:  'LIVE',
    status_dev:   'IN DEVELOPMENT',
    gc_skills_label: 'SKILLS',

    personal_tag:   '// 03 — PERSONAL PROJECTS',
    personal_title: 'ARCADE<br>CABINET',
    arcade_intro:   'Student and personal projects — experiments, jam games, learning by doing. Not polished, not finished, but honest.',
    itch_link:      'Full library on itch.io ↗',
    tag_student:    'STUDENT',
    tag_proto:      'PROTOTYPE',
    see_all:        'SEE ALL<br>ON ITCH.IO',
    all_projects:   'ALL PROJECTS',

    tag_playable:      'PLAYABLE',
    play_arcade_cta:   'PLAY<br>ARCADE GAMES',
    play_arcade_title: '5 MINI CARTRIDGES',
    am_select_title:   'SELECT CARTRIDGE',
    arcade_select_hint:'SELECT A CARTRIDGE BELOW',
    arcade_default_hint:'ARROW KEYS TO MOVE',

    sylvara_info:    'Turn-based open world RPG. I built every system outside of combat: player controller, inventory, crafting, time system, multiple puzzle mechanics, dialogue system, quest system, and all UI implementation — from scratch.',
    lightyears_info: 'My Erasmus exchange capstone project. A full bullet hell — enemy AI and behaviour trees, multiple player weapons, skill trees, upgrade systems, boss fights with multi-phase patterns. Every system, every design decision, every line of code: mine.',

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
    hero_desc: 'Spieleentwickler und Mitgründer von Triarch Interactive.<br>Ich entwickle Spiele, die Spieler wirklich spielen wollen.',
    hero_btn_work: 'MEINE PROJEKTE',
    hero_btn_contact: 'KONTAKT',

    ticker_label: 'AKTUELL:',
    ticker_1: "Tinker's Nook — Design & Entwicklung",
    ticker_2: 'Take That Shot — Entwickler',

    about_tag: '// 01 — ÜBER MICH',
    about_title: 'PROFIL',

    about_p1: 'Ich bin Ali Yiğit — Full-Stack-Spieleentwickler und Mitgründer von <a href="https://triarchinteractive.com" target="_blank" class="tlink">Triarch Interactive</a>. Seit 2021 entwickle ich Spiele und habe sowohl in Istanbul als auch in Deutschland studiert. Insgesamt verfüge ich über rund sechs Jahre Erfahrung, davon drei Jahre im professionellen Umfeld.',
    about_p2: 'Als Absolvent der Google Game & App Academy verantworte ich die gesamte Produktionspipeline — von Game Design und Level Design bis hin zu Code, VFX, UI und Steam-Integration. Unity ist mein primäres Werkzeug, das ich tiefgreifend beherrsche. Ich arbeite in kleinen, fokussierten Teams, die tatsächlich liefern.',
    about_p3: 'Was mich antreibt, ist der Moment, in dem ein System zum Leben erwacht — ein Dialogbaum, der genau im richtigen Augenblick verzweigt, ein Inventar, das sich natürlich anfühlt, ein Questsystem, das Geschichte und Mechanik verbindet. Der Moment, in dem der Code exakt das tut, was er soll? Genau dieses Gefühl jage ich.',

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
    games_studio_note: '// Alle folgenden Projekte entstehen unter <a href="https://triarchinteractive.com" target="_blank" class="tlink">Triarch Interactive</a>.',

    kic_role: 'Spieleentwickler — Triarch Interactive',
    kic_desc: 'Mein erstes kommerziell veröffentlichtes Spiel — und das Projekt, bei dem ich die gesamte Produktionspipeline verantwortet habe: Core-Loop- und Systemdesign, Gameplay-Programmierung, Beleuchtung, VFX, Shader-Arbeit, Level-Design, UI-Design und -Implementierung sowie die Steam-Store-Seite und das Capsule-Art. Hier habe ich aus erster Hand gelernt, was es wirklich bedeutet, ein Spiel vom Konzept bis zum Launch zu bringen.',
    kic2_role: 'Spieleentwickler — Triarch Interactive',
    kic2_desc: 'Der zweite Teil der Reihe, entwickelt in Unity mit einer prozedural gesteuerten Pipeline und HDRP für hochwertige Beleuchtung und Optik. Wie beim ersten Titel liegt der gesamte Stack bei mir — Gameplay-Systeme, Umgebungs- und Level-Design, Beleuchtung, VFX, UI und der Steam-Store-Auftritt — diesmal mit der Erfahrung eines Teams, das bereits erfolgreich veröffentlicht hat.',
    ec_role: 'Design & Entwicklung — Triarch Interactive',
    ec_desc: 'Mein bislang ambitioniertestes Projekt, und das, bei dem ich jeden Hut trage: Game Design, gesamte Systemarchitektur, Gameplay-Programmierung, VFX, Beleuchtung, UI-Design und Code sowie der Steam-Store-Auftritt. Dies ist das Projekt, bei dem ich mein Designdenken am weitesten vorangetrieben habe — bedeutungsvolle Spielerentscheidungen, eine Schwierigkeitskurve, die man wirklich spürt, und Systeme, die Können belohnen.',
    tts_role: 'Spieleentwickler & Game-Systems-Designer — Triarch Interactive',
    tts_desc: 'Ein Multiplayer-fokussiertes Projekt, bei dem ich mich als Systemdesigner am meisten weiterentwickelt habe. Ich baue vernetztes Gameplay mit Unitys Mirror-Framework auf und übernehme die Steamworks-Integration für Lobbys, Matchmaking und Plattformfunktionen. Mein Fokus liegt auf den Systemen, die Multiplayer zuverlässig und unterhaltsam machen: Netcode-Architektur, Session-Ablauf und das grundlegende Gameplay-Design.',
    tn_role: 'Game Designer & Entwickler — Triarch Interactive',
    tn_desc: 'Ein gemütliches 2D-Shop-Management-Spiel, bei dem ich den gesamten Umfang verantworte: Game Design, die komplette Programmierung und die Teamleitung. Jedes System — von den Handwerks- und Shop-Loops bis hin zu Progression und UI — wurde von mir geplant und von Grund auf umgesetzt.',

    btn_steam: 'AUF STEAM',
    btn_wishlist: 'AUF STEAM WUNSCHLISTE SETZEN',
    coming_soon: 'DEMNÄCHST',
    status_live: 'LIVE',
    status_dev: 'IN ENTWICKLUNG',
    gc_skills_label: 'FÄHIGKEITEN',

    personal_tag: '// 03 — PERSÖNLICHE PROJEKTE',
    personal_title: 'PROJEKT<br>ARCHIV',
    arcade_intro: 'Studien- und Privatprojekte, Experimente sowie Game-Jam-Beiträge. Nicht jedes Projekt wurde vollständig ausgearbeitet, aber jedes einzelne war ein wichtiger Schritt auf meinem Weg als Entwickler.',
    itch_link: 'Alle Projekte auf itch.io ↗',

    tag_student: 'STUDIUM',
    tag_proto: 'PROTOTYP',
    see_all: 'ALLE<br>PROJEKTE',
    all_projects: 'ALLE PROJEKTE',

    tag_playable: 'SPIELBAR',
    play_arcade_cta: 'SPIELEN<br>ARCADE-SPIELE',
    play_arcade_title: '5 MINI-MODULE',
    am_select_title: 'MODUL WÄHLEN',
    arcade_select_hint: 'WÄHLE UNTEN EIN MODUL',
    arcade_default_hint: 'PFEILTASTEN ZUM BEWEGEN',

    sylvara_info: 'Rundenbasiertes Open-World-RPG. Ich habe jedes System außerhalb des Kampfes von Grund auf entwickelt: Spielersteuerung, Inventar, Handwerk, Zeitsystem, mehrere Rätselmechaniken, Dialogsystem, Questsystem und die gesamte UI-Implementierung.',
    lightyears_info: 'Mein Abschlussprojekt aus dem Erasmus-Austauschprogramm. Ein vollständiges Bullet Hell — Gegner-KI und Verhaltensbäume, mehrere Spielerwaffen, Fähigkeitenbäume, Upgradesysteme, Bosskämpfe mit mehrphasigen Mustern. Jedes System, jede Designentscheidung, jede Codezeile: von mir.',

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
   PHOTO FALLBACK
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

  document.querySelectorAll('.boot-line').forEach(line => {
    const delay = parseInt(line.dataset.delay || 0, 10);
    setTimeout(() => line.classList.add('show'), delay + 200);
  });
  if (nameBlock) {
    setTimeout(() => nameBlock.classList.add('show'), 1800);
  }

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

});

/* ═══════════════════════════════════════════════════════════
   SITE INIT
═══════════════════════════════════════════════════════════ */
function initSite() {
  initPhoto();
  initLangSwitcher();

  const headerEl = document.getElementById('site-header');
  if (headerEl) {
    window.addEventListener('scroll', function() {
      headerEl.classList.toggle('scrolled', window.scrollY > 40);
    }, { passive: true });
  }

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

  document.addEventListener('click', function(e) {
    const a = e.target.closest('a[href^="#"]');
    if (!a) return;
    const href = a.getAttribute('href');
    if (href === '#') return;
    const target = document.querySelector(href);
    if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth' }); }
  });
}