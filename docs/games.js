/* ═══════════════════════════════════════════════════════════
   ALI YİĞİT YILMAZ — games.js
   AYY Arcade Cabinet: 5 self-contained canvas mini-games
   (Pong, Snake, Pac-Man-style, Donkey Kong-style climb, Space Invaders)
═══════════════════════════════════════════════════════════ */
(function () {

  const ARCADE_STRINGS = {
    en: {
      score_label: 'SCORE', lives_label: 'LIVES',
      pong_intro: "AYY PONG<br>WASD OR ARROWS TO MOVE<br><br>PRESS ENTER TO START",
      pong_hint: 'WASD / ARROWS · FIRST TO 7',
      snake_intro: "AYY SNAKE<br>WASD OR ARROWS TO MOVE<br><br>PRESS ENTER TO START",
      snake_hint: 'WASD / ARROWS TO MOVE',
      pacman_intro: "AYY-MAN<br>WASD OR ARROWS TO MOVE<br>EAT ALL DOTS, AVOID GHOSTS<br><br>PRESS ENTER TO START",
      pacman_hint: 'WASD / ARROWS · AVOID GHOSTS',
      climb_intro: "AYY CLIMB<br>WASD OR ARROWS TO MOVE<br>DODGE BARRELS, REACH THE TOP<br><br>PRESS ENTER TO START",
      climb_hint: 'WASD / ARROWS · REACH THE TOP',
      invaders_intro: "AYY INVADERS<br>WASD/←→ TO MOVE · SPACE TO FIRE<br><br>PRESS ENTER TO START",
      invaders_hint: 'WASD/←→ MOVE · SPACE FIRE',
      game_over: 'GAME OVER<br>SCORE: {score}<br><br>PRESS ENTER TO RETRY',
      you_win: 'YOU WIN!<br>SCORE: {score}<br><br>PRESS ENTER TO PLAY AGAIN'
    },
    tr: {
      score_label: 'SKOR', lives_label: 'CAN',
      pong_intro: "AYY PONG<br>WASD VEYA YÖN TUŞLARIYLA HAREKET<br><br>BAŞLAMAK İÇİN ENTER",
      pong_hint: 'WASD / YÖN TUŞLARI · 7 SAYIYA KADAR',
      snake_intro: "AYY SNAKE<br>WASD VEYA YÖN TUŞLARIYLA HAREKET<br><br>BAŞLAMAK İÇİN ENTER",
      snake_hint: 'WASD / YÖN TUŞLARI İLE HAREKET',
      pacman_intro: "AYY-MAN<br>WASD VEYA YÖN TUŞLARIYLA HAREKET<br>TÜM NOKTALARI YE, HAYALETLERDEN KAÇ<br><br>BAŞLAMAK İÇİN ENTER",
      pacman_hint: 'WASD / YÖN TUŞLARI · HAYALETLERDEN KAÇ',
      climb_intro: "AYY CLIMB<br>WASD VEYA YÖN TUŞLARIYLA HAREKET<br>VARİLLERDEN KAÇ, ZİRVEYE ULAŞ<br><br>BAŞLAMAK İÇİN ENTER",
      climb_hint: 'WASD / YÖN TUŞLARI · ZİRVEYE ULAŞ',
      invaders_intro: "AYY INVADERS<br>WASD/←→ HAREKET · ATEŞ İÇİN SPACE<br><br>BAŞLAMAK İÇİN ENTER",
      invaders_hint: 'WASD/←→ HAREKET · SPACE ATEŞ',
      game_over: 'OYUN BİTTİ<br>SKOR: {score}<br><br>TEKRAR DENEMEK İÇİN ENTER',
      you_win: 'KAZANDIN!<br>SKOR: {score}<br><br>TEKRAR OYNAMAK İÇİN ENTER'
    },
    de: {
      score_label: 'PUNKTE', lives_label: 'LEBEN',
      pong_intro: "AYY PONG<br>WASD ODER PFEILTASTEN BEWEGEN<br><br>ENTER ZUM START",
      pong_hint: 'WASD / PFEILTASTEN · ERSTER BIS 7',
      snake_intro: "AYY SNAKE<br>WASD ODER PFEILTASTEN BEWEGEN<br><br>ENTER ZUM START",
      snake_hint: 'WASD / PFEILTASTEN BEWEGEN',
      pacman_intro: "AYY-MAN<br>WASD ODER PFEILTASTEN BEWEGEN<br>ALLE PUNKTE SAMMELN, GEISTERN AUSWEICHEN<br><br>ENTER ZUM START",
      pacman_hint: 'WASD / PFEILTASTEN · GEISTERN AUSWEICHEN',
      climb_intro: "AYY CLIMB<br>WASD ODER PFEILTASTEN BEWEGEN<br>FÄSSERN AUSWEICHEN, GIPFEL ERREICHEN<br><br>ENTER ZUM START",
      climb_hint: 'WASD / PFEILTASTEN · GIPFEL ERREICHEN',
      invaders_intro: "AYY INVADERS<br>WASD/←→ BEWEGEN · SPACE ZUM SCHIESSEN<br><br>ENTER ZUM START",
      invaders_hint: 'WASD/←→ BEWEGEN · SPACE SCHIESSEN',
      game_over: 'GAME OVER<br>PUNKTE: {score}<br><br>ENTER FÜR NEUVERSUCH',
      you_win: 'GEWONNEN!<br>PUNKTE: {score}<br><br>ENTER FÜR NEUES SPIEL'
    }
  };

  function t(key, vars) {
    const lang = document.documentElement.lang || 'en';
    const dict = ARCADE_STRINGS[lang] || ARCADE_STRINGS.en;
    let s = dict[key] || ARCADE_STRINGS.en[key] || key;
    if (vars) Object.keys(vars).forEach(function (k) { s = s.replace('{' + k + '}', vars[k]); });
    return s;
  }

  const DIR_MAP = {
    ArrowUp: { x: 0, y: -1 }, w: { x: 0, y: -1 }, W: { x: 0, y: -1 },
    ArrowDown: { x: 0, y: 1 }, s: { x: 0, y: 1 }, S: { x: 0, y: 1 },
    ArrowLeft: { x: -1, y: 0 }, a: { x: -1, y: 0 }, A: { x: -1, y: 0 },
    ArrowRight: { x: 1, y: 0 }, d: { x: 1, y: 0 }, D: { x: 1, y: 0 }
  };
  function held(A, ...keys) { return keys.some(function (k) { return A.keys[k]; }); }

  /* ── PONG ──────────────────────────────────────────────── */
  function createPong(A) {
    const S = A.SIZE, PW = 10, PH = 70, BS = 10, SPEED = 1.05;
    let leftY, rightY, bx, by, vx, vy, sL, sR, state;
    function resetBall(dir) {
      bx = S / 2 - BS / 2; by = S / 2 - BS / 2;
      vx = SPEED * (dir || (Math.random() < 0.5 ? 1 : -1));
      vy = (Math.random() * 1 - 0.5);
    }
    const api = {
      init() {
        leftY = S / 2 - PH / 2; rightY = S / 2 - PH / 2; sL = 0; sR = 0; state = 'intro';
        resetBall();
        A.setScore(sL + ' : ' + sR);
        A.setOverlay(t('pong_intro'));
      },
      onKeyDown(k) {
        if (k !== 'Enter') return;
        if (state === 'intro') { state = 'playing'; A.hideOverlay(); }
        else if (state === 'over') api.init();
      },
      update() {
        if (state !== 'playing') return;
        if (held(A, 'ArrowUp', 'w', 'W')) leftY -= 1.4;
        if (held(A, 'ArrowDown', 's', 'S')) leftY += 1.4;
        leftY = A.clamp(leftY, 0, S - PH);
        const targetCenter = by + BS / 2, rc = rightY + PH / 2;
        if (Math.abs(targetCenter - rc) > 4) rightY += Math.sign(targetCenter - rc) * 0.85;
        rightY = A.clamp(rightY, 0, S - PH);
        bx += vx; by += vy;
        if (by <= 0) { by = 0; vy = Math.abs(vy); }
        if (by >= S - BS) { by = S - BS; vy = -Math.abs(vy); }
        if (vx < 0 && bx <= 10 + PW && bx >= 4 && by + BS >= leftY && by <= leftY + PH) { bx = 10 + PW; vx = Math.abs(vx) * 1.04; vy += (Math.random() * 0.5 - 0.25); }
        if (vx > 0 && bx + BS >= S - 10 - PW && bx + BS <= S - 4 && by + BS >= rightY && by <= rightY + PH) { bx = S - 10 - PW - BS; vx = -Math.abs(vx) * 1.04; vy += (Math.random() * 0.5 - 0.25); }
        if (bx < -30) {
          sR++; A.setScore(sL + ' : ' + sR);
          if (sR >= 7) { state = 'over'; A.setOverlay(t('game_over', { score: sL + ' : ' + sR })); } else resetBall(1);
        }
        if (bx > S + 30) {
          sL++; A.setScore(sL + ' : ' + sR);
          if (sL >= 7) { state = 'over'; A.setOverlay(t('game_over', { score: sL + ' : ' + sR })); } else resetBall(-1);
        }
      },
      draw(ctx) {
        ctx.fillStyle = '#000'; ctx.fillRect(0, 0, S, S);
        ctx.strokeStyle = 'rgba(255,204,0,0.25)'; ctx.lineWidth = 2; ctx.setLineDash([6, 10]);
        ctx.beginPath(); ctx.moveTo(S / 2, 0); ctx.lineTo(S / 2, S); ctx.stroke(); ctx.setLineDash([]);
        ctx.fillStyle = A.accent;
        ctx.fillRect(10, leftY, PW, PH);
        ctx.fillRect(S - 10 - PW, rightY, PW, PH);
        ctx.fillStyle = '#ffcc00';
        ctx.fillRect(bx, by, BS, BS);
      },
      destroy() {}
    };
    return api;
  }

  /* ── SNAKE ─────────────────────────────────────────────── */
  function createSnake(A) {
    const S = A.SIZE, CELL = 20, N = S / CELL;
    let snake, dir, nextDir, food, score, state, tick, speedFrames;
    function randFood() {
      let p;
      do { p = { x: Math.floor(Math.random() * N), y: Math.floor(Math.random() * N) }; }
      while (snake.some(function (s) { return s.x === p.x && s.y === p.y; }));
      return p;
    }
    const api = {
      init() {
        snake = [{ x: 8, y: 12 }, { x: 7, y: 12 }, { x: 6, y: 12 }];
        dir = { x: 1, y: 0 }; nextDir = { x: 1, y: 0 };
        food = randFood(); score = 0; state = 'intro'; tick = 0; speedFrames = 34;
        A.setScore(t('score_label') + ': 0');
        A.setOverlay(t('snake_intro'));
      },
      onKeyDown(k) {
        if (k === 'Enter') {
          if (state === 'intro') { state = 'playing'; A.hideOverlay(); return; }
          if (state === 'over') { api.init(); return; }
        }
        const d = DIR_MAP[k];
        if (d && !(d.x === -dir.x && d.y === -dir.y)) nextDir = d;
      },
      update() {
        if (state !== 'playing') return;
        tick++;
        if (tick < speedFrames) return;
        tick = 0;
        dir = nextDir;
        const head = { x: snake[0].x + dir.x, y: snake[0].y + dir.y };
        if (head.x < 0 || head.y < 0 || head.x >= N || head.y >= N || snake.some(function (s) { return s.x === head.x && s.y === head.y; })) {
          state = 'over'; A.setOverlay(t('game_over', { score: score }));
          return;
        }
        snake.unshift(head);
        if (head.x === food.x && head.y === food.y) {
          score += 10; A.setScore(t('score_label') + ': ' + score);
          food = randFood();
          if (speedFrames > 26) speedFrames -= 1;
        } else {
          snake.pop();
        }
      },
      draw(ctx) {
        ctx.fillStyle = '#000'; ctx.fillRect(0, 0, S, S);
        ctx.fillStyle = '#ffcc00';
        ctx.fillRect(food.x * CELL + 3, food.y * CELL + 3, CELL - 6, CELL - 6);
        snake.forEach(function (s, i) {
          ctx.fillStyle = i === 0 ? A.accent : 'rgba(52,214,255,0.6)';
          ctx.fillRect(s.x * CELL + 1, s.y * CELL + 1, CELL - 2, CELL - 2);
        });
      },
      destroy() {}
    };
    return api;
  }

  /* ── AYY-MAN (Pac-Man-style, 4-way mirrored full map) ───── */
  function createPacman(A) {
    const S = A.SIZE, CELL = 30, N = 16;
    // Design one 8x8 quadrant, then mirror it horizontally + vertically
    // for a full, symmetric 16x16 maze — the classic Pac-Man look.
    const QUAD = [
      '11111111',
      '10000000',
      '10111010',
      '10100010',
      '10101110',
      '10100000',
      '10111110',
      '10000000'
    ];
    function mirrorRow(r) { return r + r.split('').reverse().join(''); }
    const TOP = QUAD.map(mirrorRow);
    const LAYOUT = TOP.concat(TOP.slice().reverse());

    function isWall(x, y) { if (x < 0 || y < 0 || x >= N || y >= N) return true; return LAYOUT[y][x] === '1'; }
    let grid, dotsLeft, player, dir, nextDir, ghosts, score, state, tick, gTick;
    function resetState() {
      grid = LAYOUT.map(function (r) { return r.split(''); });
      dotsLeft = 0;
      for (let y = 0; y < N; y++) for (let x = 0; x < N; x++) if (grid[y][x] === '0') dotsLeft++;
      player = { x: 1, y: 1 };
      dir = { x: 1, y: 0 }; nextDir = { x: 1, y: 0 };
      if (grid[1][1] === '0') { grid[1][1] = '2'; dotsLeft--; }
      ghosts = [
        { x: 14, y: 1, color: '#ff5fa8', dir: { x: 0, y: 0 } },
        { x: 1, y: 14, color: '#ff5b45', dir: { x: 0, y: 0 } }
      ];
      score = 0; tick = 0; gTick = 0;
    }
    const api = {
      init() {
        resetState(); state = 'intro';
        A.setScore(t('score_label') + ': 0');
        A.setOverlay(t('pacman_intro'));
      },
      onKeyDown(k) {
        if (k === 'Enter') {
          if (state === 'intro') { state = 'playing'; A.hideOverlay(); return; }
          if (state === 'over') { api.init(); return; }
        }
        const d = DIR_MAP[k];
        if (d) nextDir = d;
      },
      update() {
        if (state !== 'playing') return;
        tick++;
        if (tick >= 28) {
          tick = 0;
          if (!isWall(player.x + nextDir.x, player.y + nextDir.y)) dir = nextDir;
          if (!isWall(player.x + dir.x, player.y + dir.y)) { player.x += dir.x; player.y += dir.y; }
          if (grid[player.y][player.x] === '0') {
            grid[player.y][player.x] = '2'; dotsLeft--; score += 10;
            A.setScore(t('score_label') + ': ' + score);
            if (dotsLeft <= 0) { state = 'over'; A.setOverlay(t('you_win', { score: score })); return; }
          }
        }
        gTick++;
        if (gTick >= 36) {
          gTick = 0;
          ghosts.forEach(function (g) {
            const opts = [{ x: 1, y: 0 }, { x: -1, y: 0 }, { x: 0, y: 1 }, { x: 0, y: -1 }].filter(function (d) {
              return !isWall(g.x + d.x, g.y + d.y) && !(d.x === -g.dir.x && d.y === -g.dir.y);
            });
            let choice;
            if (opts.length === 0) { choice = { x: -g.dir.x, y: -g.dir.y }; }
            else if (Math.random() < 0.25) { choice = opts[Math.floor(Math.random() * opts.length)]; }
            else {
              choice = opts.reduce(function (best, d) {
                const nd = Math.abs((g.x + d.x) - player.x) + Math.abs((g.y + d.y) - player.y);
                const bd = Math.abs((g.x + best.x) - player.x) + Math.abs((g.y + best.y) - player.y);
                return nd < bd ? d : best;
              }, opts[0]);
            }
            g.dir = choice; g.x += choice.x; g.y += choice.y;
          });
        }
        if (ghosts.some(function (g) { return g.x === player.x && g.y === player.y; })) {
          state = 'over'; A.setOverlay(t('game_over', { score: score }));
        }
      },
      draw(ctx) {
        ctx.fillStyle = '#000'; ctx.fillRect(0, 0, S, S);
        for (let y = 0; y < N; y++) for (let x = 0; x < N; x++) {
          if (grid[y][x] === '1') { ctx.fillStyle = 'rgba(52,214,255,0.22)'; ctx.fillRect(x * CELL, y * CELL, CELL, CELL); }
          else if (grid[y][x] === '0') { ctx.fillStyle = '#ffcc00'; ctx.beginPath(); ctx.arc(x * CELL + CELL / 2, y * CELL + CELL / 2, 3, 0, Math.PI * 2); ctx.fill(); }
        }
        ctx.fillStyle = A.accent;
        ctx.fillRect(player.x * CELL + 5, player.y * CELL + 5, CELL - 10, CELL - 10);
        ghosts.forEach(function (g) { ctx.fillStyle = g.color; ctx.fillRect(g.x * CELL + 5, g.y * CELL + 5, CELL - 10, CELL - 10); });
      },
      destroy() {}
    };
    return api;
  }

  /* ── AYY CLIMB (Donkey Kong-style barrel dodge) ─────────── */
  function createClimb(A) {
    const S = A.SIZE, PS = 22;
    let px, py, barrels, score, state, spawnTick, spawnEvery, elapsed;
    function reset() {
      px = S / 2 - PS / 2; py = S - 60;
      barrels = []; score = 0; spawnTick = 0; spawnEvery = 220; elapsed = 0;
    }
    const api = {
      init() {
        reset(); state = 'intro';
        A.setScore(t('score_label') + ': 0');
        A.setOverlay(t('climb_intro'));
      },
      onKeyDown(k) {
        if (k === 'Enter') {
          if (state === 'intro') { state = 'playing'; A.hideOverlay(); return; }
          if (state === 'over') { api.init(); return; }
        }
      },
      update() {
        if (state !== 'playing') return;
        elapsed++;
        score = Math.floor(elapsed / 6);
        const speed = 1.05;
        if (held(A, 'ArrowLeft', 'a', 'A')) px -= speed;
        if (held(A, 'ArrowRight', 'd', 'D')) px += speed;
        if (held(A, 'ArrowUp', 'w', 'W')) py -= speed;
        if (held(A, 'ArrowDown', 's', 'S')) py += speed;
        px = A.clamp(px, 0, S - PS);
        py = A.clamp(py, 40, S - PS);
        if (py <= 42) {
          score += 100; py = S - 60; spawnEvery = Math.max(88, spawnEvery - 12);
        }
        A.setScore(t('score_label') + ': ' + score);
        spawnTick++;
        if (spawnTick >= spawnEvery) {
          spawnTick = 0;
          barrels.push({ x: Math.random() * (S - 20) + 10, y: 40, r: 11, vy: 0.6 + Math.random() * 0.4, vx: (Math.random() * 2 - 1) * 0.3 });
        }
        barrels.forEach(function (b) { b.y += b.vy; b.x += b.vx; if (b.x < 10 || b.x > S - 10) b.vx *= -1; });
        barrels = barrels.filter(function (b) { return b.y < S + 30; });
        const pcx = px + PS / 2, pcy = py + PS / 2;
        for (let i = 0; i < barrels.length; i++) {
          const b = barrels[i];
          const dx = pcx - b.x, dy = pcy - b.y;
          if (Math.sqrt(dx * dx + dy * dy) < b.r + PS / 2 - 4) {
            state = 'over'; A.setOverlay(t('game_over', { score: score })); break;
          }
        }
      },
      draw(ctx) {
        ctx.fillStyle = '#000'; ctx.fillRect(0, 0, S, S);
        ctx.fillStyle = 'rgba(185,139,255,0.35)';
        ctx.fillRect(0, 40, S, 6);
        for (let i = 1; i <= 4; i++) ctx.fillRect(0, 40 + i * 88, S, 4);
        ctx.fillStyle = '#ffe033';
        ctx.fillRect(S / 2 - 16, 18, 32, 18);
        ctx.fillStyle = '#ff5b45';
        barrels.forEach(function (b) { ctx.beginPath(); ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2); ctx.fill(); });
        ctx.fillStyle = A.accent;
        ctx.fillRect(px, py, PS, PS);
      },
      destroy() {}
    };
    return api;
  }

  /* ── AYY INVADERS ──────────────────────────────────────── */
  function createInvaders(A) {
    const S = A.SIZE, COLS = 6, ROWS = 4, IW = 32, IH = 20, GAP = 10;
    const startX = (S - (COLS * (IW + GAP) - GAP)) / 2, startY = 50;
    let invaders, dirX, ship, bullets, ebullets, score, lives, state, tick, fireTick;
    function spawnWave() {
      invaders = [];
      for (let r = 0; r < ROWS; r++) for (let c = 0; c < COLS; c++) {
        invaders.push({ x: startX + c * (IW + GAP), y: startY + r * (IH + GAP), alive: true });
      }
      dirX = 1.2;
    }
    function reset() {
      spawnWave();
      ship = { x: S / 2 - 16, y: S - 40, w: 32, h: 16 };
      bullets = []; ebullets = []; score = 0; lives = 3; tick = 0; fireTick = 0;
    }
    const api = {
      init() {
        reset(); state = 'intro';
        A.setScore(t('score_label') + ': 0  ' + t('lives_label') + ': 3');
        A.setOverlay(t('invaders_intro'));
      },
      onKeyDown(k) {
        if (k === 'Enter') {
          if (state === 'intro') { state = 'playing'; A.hideOverlay(); return; }
          if (state === 'over') { api.init(); return; }
        }
        if (k === ' ' && state === 'playing' && bullets.length < 3) {
          bullets.push({ x: ship.x + ship.w / 2 - 2, y: ship.y - 8 });
        }
      },
      update() {
        if (state !== 'playing') return;
        const speed = 1.25;
        if (held(A, 'ArrowLeft', 'a', 'A')) ship.x -= speed;
        if (held(A, 'ArrowRight', 'd', 'D')) ship.x += speed;
        ship.x = A.clamp(ship.x, 0, S - ship.w);

        tick++;
        const alive = invaders.filter(function (i) { return i.alive; });
        const liveSpeed = Math.max(40, 136 - Math.floor((ROWS * COLS - alive.length) / 3) * 4);
        if (tick >= liveSpeed) {
          tick = 0;
          let hitEdge = false;
          alive.forEach(function (inv) { inv.x += dirX; if (inv.x < 10 || inv.x + IW > S - 10) hitEdge = true; });
          if (hitEdge) { dirX *= -1; alive.forEach(function (inv) { inv.y += 16; }); }
        }
        bullets.forEach(function (b) { b.y -= 1.75; });
        bullets = bullets.filter(function (b) { return b.y > -10; });
        fireTick++;
        if (fireTick > 100 && alive.length) {
          fireTick = 0;
          if (Math.random() < 0.5) {
            const shooter = alive[Math.floor(Math.random() * alive.length)];
            ebullets.push({ x: shooter.x + IW / 2 - 2, y: shooter.y + IH });
          }
        }
        ebullets.forEach(function (b) { b.y += 1.1; });
        ebullets = ebullets.filter(function (b) { return b.y < S + 10; });

        bullets.forEach(function (b) {
          invaders.forEach(function (inv) {
            if (inv.alive && b.x > inv.x && b.x < inv.x + IW && b.y > inv.y && b.y < inv.y + IH) {
              inv.alive = false; b.hit = true; score += 15;
              A.setScore(t('score_label') + ': ' + score + '  ' + t('lives_label') + ': ' + lives);
            }
          });
        });
        bullets = bullets.filter(function (b) { return !b.hit; });

        ebullets.forEach(function (b) {
          if (b.x > ship.x && b.x < ship.x + ship.w && b.y > ship.y && b.y < ship.y + ship.h) {
            b.hit = true; lives--;
            A.setScore(t('score_label') + ': ' + score + '  ' + t('lives_label') + ': ' + lives);
            if (lives <= 0) { state = 'over'; A.setOverlay(t('game_over', { score: score })); }
          }
        });
        ebullets = ebullets.filter(function (b) { return !b.hit; });

        if (state === 'playing' && alive.some(function (inv) { return inv.y + IH >= ship.y; })) {
          state = 'over'; A.setOverlay(t('game_over', { score: score }));
        }
        if (state === 'playing' && alive.length === 0) {
          score += 100;
          A.setScore(t('score_label') + ': ' + score + '  ' + t('lives_label') + ': ' + lives);
          spawnWave();
        }
      },
      draw(ctx) {
        ctx.fillStyle = '#000'; ctx.fillRect(0, 0, S, S);
        ctx.fillStyle = A.accent;
        invaders.forEach(function (inv) { if (inv.alive) ctx.fillRect(inv.x, inv.y, IW, IH); });
        ctx.fillStyle = '#ffcc00';
        bullets.forEach(function (b) { ctx.fillRect(b.x, b.y, 4, 10); });
        ctx.fillStyle = '#ff5fa8';
        ebullets.forEach(function (b) { ctx.fillRect(b.x, b.y, 4, 10); });
        ctx.fillStyle = '#34d6ff';
        ctx.fillRect(ship.x, ship.y, ship.w, ship.h);
      },
      destroy() {}
    };
    return api;
  }

  /* ── MODAL / HARNESS WIRING ──────────────────────────────── */
  document.addEventListener('DOMContentLoaded', function () {
    const openBtn = document.getElementById('arcade-play-btn');
    const modal = document.getElementById('arcade-modal');
    const closeBtn = document.getElementById('am-close');
    const canvas = document.getElementById('am-canvas');
    const overlay = document.getElementById('am-overlay');
    const overlayText = document.getElementById('am-overlay-text');
    const scoreEl = document.getElementById('am-score');
    const hintEl = document.getElementById('am-hint');
    const titleEl = document.getElementById('am-title');
    const cartBtns = document.querySelectorAll('.am-cart');
    const dpadBtns = document.querySelectorAll('.am-dbtn');
    const actionBtn = document.getElementById('am-action');
    if (!openBtn || !modal || !canvas) return;
    const ctx = canvas.getContext('2d');

    const ACCENTS = { pong: '#45e08a', snake: '#34d6ff', pacman: '#ffe033', climb: '#b98bff', invaders: '#ff5b45' };
    const FACTORIES = { pong: createPong, snake: createSnake, pacman: createPacman, climb: createClimb, invaders: createInvaders };
    const HINTS = { pong: 'pong_hint', snake: 'snake_hint', pacman: 'pacman_hint', climb: 'climb_hint', invaders: 'invaders_hint' };
    const NAMES = { pong: 'AYY PONG', snake: 'AYY SNAKE', pacman: 'AYY-MAN', climb: 'AYY CLIMB', invaders: 'AYY INVADERS' };

    let currentGame = null, rafId = null;
    const A = {
      SIZE: 480,
      keys: {},
      accent: '#ffcc00',
      clamp(v, min, max) { return Math.max(min, Math.min(max, v)); },
      setScore(text) { scoreEl.textContent = text; },
      setOverlay(html) { overlayText.innerHTML = html; overlay.hidden = false; },
      hideOverlay() { overlay.hidden = true; }
    };

    function loop() {
      if (currentGame) { currentGame.update(); currentGame.draw(ctx); }
      rafId = requestAnimationFrame(loop);
    }
    function stopLoop() { if (rafId) { cancelAnimationFrame(rafId); rafId = null; } }

    function loadGame(key) {
      if (currentGame && currentGame.destroy) currentGame.destroy();
      A.accent = ACCENTS[key];
      currentGame = FACTORIES[key](A);
      titleEl.textContent = NAMES[key];
      hintEl.textContent = t(HINTS[key]);
      cartBtns.forEach(function (b) { b.classList.toggle('active', b.dataset.game === key); });
      currentGame.init();
    }

    function onKeyDown(e) {
      if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', ' ', 'Enter'].indexOf(e.key) !== -1) e.preventDefault();
      A.keys[e.key] = true;
      if (currentGame && currentGame.onKeyDown) currentGame.onKeyDown(e.key);
    }
    function onKeyUp(e) { A.keys[e.key] = false; }

    function openModal() {
      modal.hidden = false;
      document.addEventListener('keydown', onKeyDown, { passive: false });
      document.addEventListener('keyup', onKeyUp);
      if (!currentGame) loadGame('pong');
      if (!rafId) rafId = requestAnimationFrame(loop);
    }
    function closeModal() {
      modal.hidden = true;
      stopLoop();
      document.removeEventListener('keydown', onKeyDown);
      document.removeEventListener('keyup', onKeyUp);
    }

    openBtn.addEventListener('click', openModal);
    closeBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', function (e) { if (e.target === modal) closeModal(); });
    document.addEventListener('keydown', function (e) { if (!modal.hidden && e.key === 'Escape') closeModal(); });
    cartBtns.forEach(function (b) { b.addEventListener('click', function () { loadGame(b.dataset.game); }); });

    /* On-screen D-pad + action button — mouse & touch, held-key aware */
    dpadBtns.forEach(function (b) {
      const key = b.dataset.key;
      const press = function (e) { e.preventDefault(); b.classList.add('pressed'); A.keys[key] = true; if (currentGame && currentGame.onKeyDown) currentGame.onKeyDown(key); };
      const release = function () { b.classList.remove('pressed'); A.keys[key] = false; };
      b.addEventListener('pointerdown', press);
      b.addEventListener('pointerup', release);
      b.addEventListener('pointerleave', release);
      b.addEventListener('pointercancel', release);
    });
    if (actionBtn) {
      const press = function (e) {
        e.preventDefault(); actionBtn.classList.add('pressed'); A.keys[' '] = true;
        if (currentGame && currentGame.onKeyDown) { currentGame.onKeyDown('Enter'); currentGame.onKeyDown(' '); }
      };
      const release = function () { actionBtn.classList.remove('pressed'); A.keys[' '] = false; };
      actionBtn.addEventListener('pointerdown', press);
      actionBtn.addEventListener('pointerup', release);
      actionBtn.addEventListener('pointerleave', release);
      actionBtn.addEventListener('pointercancel', release);
    }
  });

})();
