// ============================================================
// WORD DATA: 2-3 syllable AWL words with stress patterns
// Pattern: 1 = stressed, 0 = unstressed
// ============================================================
const WORDS = {
  // ---- 2-syllable: pattern "10" (first stressed) ----
  "10": [
    "access","alter","aspect","author","bias","channel",
    "chapter","civil","classic","comment","compound",
    "concept","conflict","constant","contact","contrast",
    "convert","couple","create","credit","culture","cycle",
    "data","decade","drama","edit","error","ethic","expert",
    "factor","feature","final","finite","focus","format",
    "framework","function","gender","global","guideline",
    "highlight","image","impact","income","index","input",
    "instance","item","journal","label","labour","layer",
    "legal","levy","licence","likewise","locate","logic",
    "major","manual","margin","mental","method","migrate",
    "mindset","minor","model","motive","network","neutral",
    "normal","notion","offset","option","output","panel",
    "passive","posit","practice","prior","process","project",
    "prospect","publish","purchase","random","ratio",
    "region","research","rigid","schedule","section",
    "sector","sequence","series","somewhat","stable",
    "status","structure","survey","symbol","target",
    "tenses","topic","transit","trigger","version",
    "vision","visual","volume","welfare"
  ],

  // ---- 2-syllable: pattern "01" (second stressed) ----
  "01": [
    "achieve","acquire","adapt","adult","adjust","affect",
    "amend","append","approach","assure","attach","attain",
    "aware","behalf","cohere","commence","commit","compile",
    "complex","comprise","conceive","conclude","conduct",
    "confine","confirm","conform","consent","consist",
    "constrain","consult","consume","convene","convince",
    "debate","decline","deduce","define","denote","deny",
    "depress","derive","design","despite","detect","devote",
    "display","dispose","distinct","distort","diverse",
    "domain","emerge","enable","enforce","ensure","equate",
    "equip","erode","estate","evolve","exceed","exclude",
    "expand","exploit","export","expose","extract","finance",
    "impose","incline","induce","infer","inject","insert",
    "inspect","instruct","intense","invoke","involve",
    "maintain","mature","negate","obtain","occur","perceive",
    "percent","persist","precise","precede","predict",
    "presume","proceed","promote","pursue","react","refine",
    "regime","reject","relax","release","rely","remove",
    "require","reside","resolve","resource","respond",
    "restrain","restrict","restore","retain","reveal",
    "reverse","revise","secure","select","submit","sustain",
    "survive","technique","thereby","transfer","transform",
    "transport"
  ],

  // ---- 3-syllable: pattern "100" (first stressed) ----
  "100": [
    "adequate","aggregate","area","automate","chemical",
    "clarify","competent","complement","cultural",
    "deviate","document","dominate","element","energy",
    "entity","estimate","evident","federal","formula",
    "generate","ignorant","imagery","implement","incident",
    "indicate","industry","institute","integrate",
    "interval","liberal","maximise","mechanism","media",
    "medical","minimise","ministry","modify","monitor",
    "negative","normalise","nuclear","obvious","occupy",
    "orient","overlap","paradigm","period","physical",
    "policy","positive","primary","principal","protocol",
    "qualify","radical","rational","register","regulate",
    "simulate","specify","strategy","subsidy","summarise",
    "summary","supplement","technical","terminate",
    "ultimate","unify","uniform","video"
  ],

  // ---- 3-syllable: pattern "010" (middle stressed) ----
  "010": [
    "abandon","adjustment","amendment","apparent",
    "assemble","assumption","awareness","committee",
    "component","computer","conclusion","consumer",
    "convention","creation","criterion","departure",
    "depression","dimension","disposal","distinguish",
    "domestic","donation","dynamic","edition",
    "encounter","enormous","equipment","establish",
    "exclusion","exhibit","external","financial",
    "foundation","however","illegal","implicit",
    "incentive","initial","injection","insurance",
    "internal","investment","involvement","location",
    "objective","percentage","perspective","potential",
    "procedure","proportion","provision","reaction",
    "recovery","rejection","reluctance","retention",
    "subjective","successor","sufficient","suspension",
    "tradition","transition"
  ],

  // ---- 3-syllable: pattern "001" (last stressed) ----
  "001": [
    "coincide","circumvent","contradict","decompose",
    "disconnect","disengage","engineer","guarantee",
    "interact","interfere","intersect","intervene",
    "overcome","oversee","realign","reassess",
    "reassign","reinforce","undermine","volunteer"
  ]
};

// ============================================================
// WORD CLASS ANNOTATIONS
// Only for words whose stress pattern changes with word class.
// The label shown matches the word class implied by the stress
// pattern the word is filed under.
// ============================================================
const WORD_CLASS = {
  // "10" list — first-syllable stress = noun form
  "compound":  "n.",
  "conflict":  "n.",
  "contrast":  "n.",
  "convert":   "n.",
  "process":   "n.",
  "project":   "n.",
  "prospect":  "n.",
  "research":  "n.",
  "survey":    "n.",
  // "01" list — second-syllable stress = verb form
  "conduct":   "v.",
  "export":    "v.",
  "exploit":   "v.",
  "extract":   "v.",
  "incline":   "v.",
  "insert":    "v.",
  "reject":    "v.",
  "transfer":  "v.",
  "transport": "v.",
  // "01" list — second-syllable stress = adjective form
  "complex":   "adj.",
  "distinct":  "adj.",
  "diverse":   "adj.",
  "intense":   "adj.",
  "mature":    "adj.",
  "precise":   "adj.",
  "secure":    "adj.",
  // "100" list — first-syllable stress = noun form
  "overlap":    "n.",
  "supplement": "n.",
  "estimate":   "n.",
  "aggregate":  "n.",
  "complement": "n.",
  "document":   "n.",
  "register":   "n.",
};

// ============================================================
// GAME CONFIG
// ============================================================
const COLS = 5;
const ROWS = 5;
const MAX_HEX_SIZE = 70; // radius of hex
const MIN_HEX_SIZE = 30;
const PATH_CONSTRAINTS = {
  minExtraSteps: 2,
  minRowChanges: 2,
  maxGenerationAttempts: 240
};

let hexSize = MAX_HEX_SIZE;
let hexWidth = Math.sqrt(3) * hexSize;
let hexHeight = 2 * hexSize;
let rowHeight = hexHeight * 0.75;

// Colors
const COL = {
  bg: '#0f0f1a',
  hex: '#16162a',
  hexStroke: 'rgba(255,255,255,0.08)',
  hexHover: '#1c1c38',
  hexSelected: 'rgba(233, 69, 96, 0.85)',
  hexPath: 'rgba(78, 204, 163, 0.8)',
  hexEntry: 'rgba(78, 204, 163, 0.25)',
  hexWrong: 'rgba(233, 69, 96, 0.7)',
  textNormal: 'rgba(255,255,255,0.7)',
  textSelected: '#fff',
};

// ============================================================
// GAME STATE
// ============================================================
let canvas, ctx;
let grid = [];        // 2D array [row][col] of cell objects
let selectedPath = []; // array of {row, col}
let targetPattern = '';
let score = 0;
let correctPath = [];  // the generated solution path
let gameOver = false;
let hoveredCell = null;
let focusedCell = null;
let autoAdvanceTimer = null;
let keyboardMode = false;

// ============================================================
// HEX GEOMETRY
// ============================================================
function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function announceLiveRegion(id, text) {
  const el = document.getElementById(id);
  if (!el) return;
  el.textContent = '';
  window.requestAnimationFrame(() => {
    el.textContent = text;
  });
}

function patternToVisibleText(pattern) {
  return [...pattern].map(ch => ch === '1' ? 'DA' : 'da').join(' - ');
}

function patternToSpeechText(pattern) {
  return [...pattern].map(ch => ch === '1' ? 'stressed' : 'unstressed').join(', ');
}

function updatePatternAssistiveText() {
  const el = document.getElementById('pattern-sr');
  if (!el) return;
  el.textContent = `Current stress pattern: ${patternToVisibleText(targetPattern)}. Spoken as ${patternToSpeechText(targetPattern)}.`;
}

function expandWordClass(wordClass) {
  if (wordClass === 'n.') return 'noun';
  if (wordClass === 'v.') return 'verb';
  if (wordClass === 'adj.') return 'adjective';
  return wordClass;
}

function getEntryCell() {
  return grid.flat().find(cell => cell.isEntry) || null;
}

function getLastSelectedCell() {
  if (selectedPath.length === 0) return null;
  const last = selectedPath[selectedPath.length - 1];
  return grid[last.row]?.[last.col] || null;
}

function ensureFocusedCell() {
  if (focusedCell && grid[focusedCell.row]?.[focusedCell.col]) return;
  const fallback = getLastSelectedCell() || getEntryCell() || grid[0]?.[0] || null;
  focusedCell = fallback ? { row: fallback.row, col: fallback.col } : null;
}

function isCellSelected(row, col) {
  return selectedPath.some(p => p.row === row && p.col === col);
}

function describeCell(cell) {
  const parts = [cell.word];
  const wordClass = WORD_CLASS[cell.word];
  if (wordClass) parts.push(expandWordClass(wordClass));
  parts.push(`row ${cell.row + 1}, column ${cell.col + 1}`);
  if (cell.isEntry) parts.push('entry tile');
  if (cell.isExit) parts.push('exit tile');
  if (isCellSelected(cell.row, cell.col)) parts.push('selected');
  if (gameOver && cell.showCorrect) parts.push('part of the correct path');
  if (gameOver && cell.showWrong) parts.push('not part of the correct path');
  return parts.join(', ');
}

function announceFocusedCell(context = '') {
  ensureFocusedCell();
  if (!focusedCell) return;
  const cell = grid[focusedCell.row]?.[focusedCell.col];
  if (!cell) return;
  const base = describeCell(cell);
  announceLiveRegion('focus-status', context ? `${base}. ${context}` : base);
}

function moveFocusByKey(key) {
  ensureFocusedCell();
  if (!focusedCell) return false;

  let { row, col } = focusedCell;

  if (key === 'ArrowLeft') col = Math.max(0, col - 1);
  else if (key === 'ArrowRight') col = Math.min(COLS - 1, col + 1);
  else if (key === 'ArrowUp') row = Math.max(0, row - 1);
  else if (key === 'ArrowDown') row = Math.min(ROWS - 1, row + 1);
  else if (key === 'Home') col = 0;
  else if (key === 'End') col = COLS - 1;
  else return false;

  focusedCell = { row, col };
  draw();
  announceFocusedCell();
  return true;
}

function updateControlState() {
  const undoButton = document.getElementById('btn-undo');
  if (!undoButton) return;
  const undoDisabled = gameOver || selectedPath.length === 0;
  undoButton.disabled = undoDisabled;
  undoButton.setAttribute('aria-disabled', String(undoDisabled));
}

function updateHexMetrics() {
  hexWidth = Math.sqrt(3) * hexSize;
  hexHeight = 2 * hexSize;
  rowHeight = hexHeight * 0.75;
}

function getHorizontalRadius(size) {
  return Math.sqrt(3) * size / 2;
}

function getGameContainerInnerWidth() {
  const container = document.getElementById('game-container');
  if (!container) {
    const viewportWidth = Math.min(window.innerWidth || 1024, document.documentElement.clientWidth || 1024);
    return Math.max(260, viewportWidth - 24);
  }

  const styles = getComputedStyle(container);
  const padLeft = parseFloat(styles.paddingLeft) || 0;
  const padRight = parseFloat(styles.paddingRight) || 0;
  return Math.max(260, container.clientWidth - padLeft - padRight);
}

function getBoardPadding() {
  const xRadius = getHorizontalRadius(hexSize);
  return {
    x: Math.max(16, Math.ceil(xRadius + 6)),
    y: Math.max(18, Math.ceil(hexSize + 6))
  };
}

function estimateBoardWidth(size) {
  const width = Math.sqrt(3) * size;
  const xRadius = getHorizontalRadius(size);
  const pad = Math.max(16, Math.ceil(xRadius + 6));
  const oddRowShift = ROWS > 1 ? width / 2 : 0;
  return pad + (COLS - 1) * width + oddRowShift + (xRadius * 2) + pad;
}

function computeResponsiveHexSize() {
  const availableWidth = getGameContainerInnerWidth();
  let size = MAX_HEX_SIZE;
  while (size > MIN_HEX_SIZE && estimateBoardWidth(size) > availableWidth) {
    size -= 1;
  }
  return clamp(size, MIN_HEX_SIZE, MAX_HEX_SIZE);
}

function syncGridGeometry() {
  for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c < COLS; c++) {
      if (!grid[r] || !grid[r][c]) continue;
      const center = hexCenter(r, c);
      grid[r][c].cx = center.x;
      grid[r][c].cy = center.y;
    }
  }
}

function updateResponsiveLayout(force = false) {
  const nextSize = computeResponsiveHexSize();
  if (!force && Math.abs(nextSize - hexSize) < 0.5) return;
  hexSize = nextSize;
  updateHexMetrics();
  if (grid.length) syncGridGeometry();
}

function hexCenter(row, col) {
  const pad = getBoardPadding();
  const x = pad.x + (hexWidth / 2) + col * hexWidth + (row % 2 === 1 ? hexWidth / 2 : 0);
  const y = pad.y + row * rowHeight;
  return { x, y };
}

function hexCorners(cx, cy) {
  const corners = [];
  for (let i = 0; i < 6; i++) {
    const angle = Math.PI / 180 * (60 * i - 30);
    corners.push({
      x: cx + hexSize * Math.cos(angle),
      y: cy + hexSize * Math.sin(angle)
    });
  }
  return corners;
}

function pointInHex(px, py, cx, cy) {
  const dx = Math.abs(px - cx);
  const dy = Math.abs(py - cy);
  if (dx > hexWidth / 2 || dy > hexSize) return false;
  return hexSize * hexWidth / 2 - hexSize * dx - hexWidth / 2 * dy >= 0;
}

function getHexNeighbors(row, col) {
  const neighbors = [];
  const even = row % 2 === 0;
  const dirs = even
    ? [[-1, -1], [-1, 0], [0, -1], [0, 1], [1, -1], [1, 0]]
    : [[-1, 0], [-1, 1], [0, -1], [0, 1], [1, 0], [1, 1]];
  for (const [dr, dc] of dirs) {
    const nr = row + dr;
    const nc = col + dc;
    if (nr >= 0 && nr < ROWS && nc >= 0 && nc < COLS) {
      neighbors.push({ row: nr, col: nc });
    }
  }
  return neighbors;
}

// ============================================================
// MAZE GENERATION
// ============================================================
function pickRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function cellKey(row, col) {
  return `${row},${col}`;
}

function isLinearTargetPath(path) {
  if (!path || path.length < COLS) return false;
  if (path[0].col !== 0 || path[path.length - 1].col !== COLS - 1) return false;

  const pathSet = new Set(path.map(p => cellKey(p.row, p.col)));
  if (pathSet.size !== path.length) return false;

  const startKey = cellKey(path[0].row, path[0].col);
  const endKey = cellKey(path[path.length - 1].row, path[path.length - 1].col);
  let degreeOneCount = 0;

  for (const cell of path) {
    const key = cellKey(cell.row, cell.col);
    let degree = 0;

    for (const n of getHexNeighbors(cell.row, cell.col)) {
      if (pathSet.has(cellKey(n.row, n.col))) degree++;
    }

    if (degree > 2) return false;

    const endpoint = key === startKey || key === endKey;
    if (endpoint) {
      if (degree !== 1) return false;
    } else if (degree !== 2) {
      return false;
    }

    if (degree === 1) degreeOneCount++;
  }

  return degreeOneCount === 2;
}

function buildPathCandidate(minPathLength, minRowChanges, startRow) {
  const path = [{ row: startRow, col: 0 }];
  const visited = new Set([`${startRow},0`]);

  function dfs(row, col, rowChanges) {
    if (col === COLS - 1) {
      return path.length >= minPathLength
        && rowChanges >= minRowChanges
        && isLinearTargetPath(path);
    }

    const candidates = getHexNeighbors(row, col).filter(n => {
      if (visited.has(`${n.row},${n.col}`)) return false;
      if (n.col < col || n.col > col + 1) return false;
      if (col === 0 && n.col === 0) return false; // keep a single left-edge entry tile
      return true;
    });
    const sameCol = shuffle(candidates.filter(n => n.col === col));
    const nextCol = shuffle(candidates.filter(n => n.col === col + 1));

    let ordered;
    if (path.length < minPathLength - 1) {
      ordered = Math.random() < 0.7 ? [...sameCol, ...nextCol] : [...nextCol, ...sameCol];
    } else {
      ordered = Math.random() < 0.7 ? [...nextCol, ...sameCol] : [...sameCol, ...nextCol];
    }

    for (const next of ordered) {
      const nextLength = path.length + 1;
      const nextRowChanges = rowChanges + (next.row !== row ? 1 : 0);

      if (next.col === COLS - 1 && (nextLength < minPathLength || nextRowChanges < minRowChanges)) {
        continue;
      }

      visited.add(`${next.row},${next.col}`);
      path.push({ row: next.row, col: next.col });
      if (dfs(next.row, next.col, nextRowChanges)) return true;
      path.pop();
      visited.delete(`${next.row},${next.col}`);
    }

    return false;
  }

  return dfs(startRow, 0, 0) ? path.slice() : null;
}

function generateFallbackPath() {
  for (let attempt = 0; attempt < 400; attempt++) {
    const startRow = Math.floor(Math.random() * ROWS);
    const path = [{ row: startRow, col: 0 }];
    let row = startRow;

    for (let col = 0; col < COLS - 1; col++) {
      const rightNeighbors = shuffle(getHexNeighbors(row, col).filter(n => n.col === col + 1));
      const next = rightNeighbors.find(n => n.row !== row) || rightNeighbors[0] || { row, col: col + 1 };
      path.push({ row: next.row, col: next.col });
      row = next.row;
    }

    if (isLinearTargetPath(path)) return path;
  }

  // Last-resort deterministic path (should be rare).
  const path = [];
  const centerRow = Math.floor(ROWS / 2);
  for (let col = 0; col < COLS; col++) {
    path.push({ row: centerRow, col });
  }
  return path;
}

function generatePath() {
  const strictLength = Math.min(COLS + PATH_CONSTRAINTS.minExtraSteps, COLS * ROWS);
  const strictTurns = Math.min(PATH_CONSTRAINTS.minRowChanges, COLS * ROWS - 1);
  const tiers = [
    { minPathLength: strictLength, minRowChanges: strictTurns },
    { minPathLength: Math.min(COLS + 1, COLS * ROWS), minRowChanges: 1 },
    { minPathLength: COLS, minRowChanges: 0 }
  ];

  for (const tier of tiers) {
    for (let attempt = 0; attempt < PATH_CONSTRAINTS.maxGenerationAttempts; attempt++) {
      const startRow = Math.floor(Math.random() * ROWS);
      const candidate = buildPathCandidate(tier.minPathLength, tier.minRowChanges, startRow);
      if (candidate) return candidate;
    }
  }

  return generateFallbackPath();
}

function hasAlternatePath(grid, correctPathSet, targetPattern) {
  // Check if there's another path from col 0 to col COLS-1
  // using only cells with the target pattern that aren't all on the correct path
  const starts = [];
  for (let r = 0; r < ROWS; r++) {
    if (grid[r][0].pattern === targetPattern) {
      starts.push({ row: r, col: 0 });
    }
  }

  for (const start of starts) {
    const visited = new Set();
    const queue = [start];
    visited.add(`${start.row},${start.col}`);
    let reachesEnd = false;
    const pathCells = new Set();

    while (queue.length > 0) {
      const curr = queue.shift();
      pathCells.add(`${curr.row},${curr.col}`);
      if (curr.col === COLS - 1) {
        reachesEnd = true;
        break;
      }
      for (const n of getHexNeighbors(curr.row, curr.col)) {
        const nk = `${n.row},${n.col}`;
        if (!visited.has(nk) && grid[n.row][n.col].pattern === targetPattern) {
          visited.add(nk);
          queue.push(n);
        }
      }
    }

    if (reachesEnd) {
      // Check this path doesn't include non-correct-path cells forming an alternate
      // Actually we just need to ensure only one connected component of target pattern
      // reaches from left to right. We'll check if all target-pattern cells that
      // reach the right side form exactly the correct path.
      // For simplicity, we return true if any cell not on the correct path
      // is part of a left-to-right path
      for (const ck of pathCells) {
        if (!correctPathSet.has(ck)) return true;
      }
    }
  }
  return false;
}

function generateMaze() {
  if (autoAdvanceTimer) {
    clearTimeout(autoAdvanceTimer);
    autoAdvanceTimer = null;
  }
  gameOver = false;
  selectedPath = [];
  hoveredCell = null;
  updateResponsiveLayout(true);

  // Pick a target pattern (weight toward 2-syllable patterns which have more words)
  const patterns = Object.keys(WORDS).filter(p => WORDS[p].length >= COLS * ROWS / 2);
  targetPattern = pickRandom(patterns);

  // Generate the correct path
  correctPath = generatePath();
  const correctPathSet = new Set(correctPath.map(c => `${c.row},${c.col}`));

  // Get words for the target pattern
  const targetWords = shuffle([...WORDS[targetPattern]]);
  // Get distractor words (all other patterns)
  const distractorPatterns = Object.keys(WORDS).filter(p => p !== targetPattern && p.length === targetPattern.length);
  let distractorWords = [];
  for (const p of distractorPatterns) {
    distractorWords.push(...WORDS[p]);
  }
  distractorWords = shuffle(distractorWords);

  let targetIdx = 0;
  let distractorIdx = 0;
  let attempts = 0;

  do {
    // Build the grid
    grid = [];
    targetIdx = 0;
    distractorIdx = 0;

    for (let r = 0; r < ROWS; r++) {
      grid[r] = [];
      for (let c = 0; c < COLS; c++) {
        const center = hexCenter(r, c);
        const onPath = correctPathSet.has(`${r},${c}`);

        let word, pattern;
        if (onPath) {
          word = targetWords[targetIdx % targetWords.length];
          pattern = targetPattern;
          targetIdx++;
        } else {
          word = distractorWords[distractorIdx % distractorWords.length];
          pattern = distractorPatterns[distractorIdx % distractorPatterns.length] || '??';
          distractorIdx++;
        }

        grid[r][c] = {
          row: r,
          col: c,
          cx: center.x,
          cy: center.y,
          word: word,
          pattern: pattern,
          onPath: onPath,
          isEntry: onPath && c === 0,
          isExit: onPath && c === COLS - 1,
        };
      }
    }

    attempts++;
    // Verify no alternate path exists
  } while (hasAlternatePath(grid, correctPathSet, targetPattern) && attempts < 20);

  // If we couldn't eliminate alternate paths, replace offending distractor cells
  if (attempts >= 20) {
    // Force: any non-path cell with targetPattern gets a different word
    for (let r = 0; r < ROWS; r++) {
      for (let c = 0; c < COLS; c++) {
        if (!grid[r][c].onPath && grid[r][c].pattern === targetPattern) {
          const dp = distractorPatterns[0] || (targetPattern === '10' ? '01' : '10');
          const dw = distractorWords[distractorIdx % distractorWords.length];
          grid[r][c].word = dw;
          grid[r][c].pattern = dp;
          distractorIdx++;
        }
      }
    }
  }

  const entryCell = getEntryCell();
  focusedCell = entryCell ? { row: entryCell.row, col: entryCell.col } : null;
  updatePatternDisplay();
  updateControlState();
  setMessage('Tap a green entry tile on the left to start');
  draw();
}

// ============================================================
// RENDERING
// ============================================================
function resizeCanvas() {
  if (!grid.length) return;
  const pad = getBoardPadding();
  const xRadius = hexWidth / 2;
  const maxCX = Math.ceil(Math.max(...grid.flat().map(c => c.cx)) + xRadius + pad.x + 2);
  const maxCY = Math.ceil(Math.max(...grid.flat().map(c => c.cy)) + hexSize + pad.y + 2);
  const dpr = window.devicePixelRatio || 1;
  canvas.width = maxCX * dpr;
  canvas.height = maxCY * dpr;
  canvas.style.width = maxCX + 'px';
  canvas.style.height = maxCY + 'px';
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
}

function drawRoundedRect(x, y, width, height, radius) {
  const r = Math.min(radius, width / 2, height / 2);
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.lineTo(x + width - r, y);
  ctx.quadraticCurveTo(x + width, y, x + width, y + r);
  ctx.lineTo(x + width, y + height - r);
  ctx.quadraticCurveTo(x + width, y + height, x + width - r, y + height);
  ctx.lineTo(x + r, y + height);
  ctx.quadraticCurveTo(x, y + height, x, y + height - r);
  ctx.lineTo(x, y + r);
  ctx.quadraticCurveTo(x, y, x + r, y);
  ctx.closePath();
}

function drawFocusHex(cell) {
  const corners = hexCorners(cell.cx, cell.cy);

  ctx.save();
  ctx.beginPath();
  ctx.moveTo(corners[0].x, corners[0].y);
  for (let i = 1; i < 6; i++) {
    ctx.lineTo(corners[i].x, corners[i].y);
  }
  ctx.closePath();
  ctx.strokeStyle = 'rgba(255,255,255,0.98)';
  ctx.lineWidth = 3;
  ctx.shadowColor = 'rgba(255,255,255,0.22)';
  ctx.shadowBlur = 10;
  ctx.stroke();
  ctx.restore();
}

function drawHex(cell, state) {
  const corners = hexCorners(cell.cx, cell.cy);
  ctx.beginPath();
  ctx.moveTo(corners[0].x, corners[0].y);
  for (let i = 1; i < 6; i++) {
    ctx.lineTo(corners[i].x, corners[i].y);
  }
  ctx.closePath();

  // Fill
  let fillColor = COL.hex;
  if (state === 'selected') fillColor = COL.hexSelected;
  else if (state === 'correct') fillColor = COL.hexPath;
  else if (state === 'wrong') fillColor = COL.hexWrong;
  else if (state === 'entry') fillColor = 'rgba(78, 204, 163, 0.08)';
  else if (state === 'hover') fillColor = COL.hexHover;

  ctx.fillStyle = fillColor;
  ctx.fill();

  // Stroke
  let strokeColor = COL.hexStroke;
  if (state === 'entry') strokeColor = COL.hexEntry;
  else if (state === 'selected') strokeColor = 'rgba(233, 69, 96, 0.5)';
  else if (state === 'correct') strokeColor = 'rgba(78, 204, 163, 0.5)';

  ctx.strokeStyle = strokeColor;
  ctx.lineWidth = 1.5;
  ctx.stroke();

  // Word text
  const wordClass = WORD_CLASS[cell.word];
  const textY = wordClass ? cell.cy - Math.round(hexSize * 0.1) : cell.cy;
  const fontFamily = "'Inter', 'SF Pro Display', system-ui, sans-serif";

  ctx.fillStyle = state === 'selected' || state === 'correct' || state === 'wrong'
    ? COL.textSelected : COL.textNormal;
  const fontSize = cell.word.length > 9
    ? Math.max(8, Math.round(hexSize * 0.18))
    : cell.word.length > 7
      ? Math.max(9, Math.round(hexSize * 0.22))
      : Math.max(10, Math.round(hexSize * 0.25));
  ctx.font = `500 ${fontSize}px ${fontFamily}`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(cell.word, cell.cx, textY);

  // Word class badge for ambiguous words (n./v./adj.)
  if (wordClass) {
    const classFont = Math.max(9, Math.round(hexSize * 0.2));
    const label = wordClass.toUpperCase();
    const textPadX = Math.max(4, Math.round(classFont * 0.45));
    const badgeHeight = Math.max(12, classFont + 4);
    const badgeRadius = Math.max(4, Math.round(badgeHeight * 0.35));
    const isActive = state === 'selected' || state === 'correct' || state === 'wrong';

    ctx.font = `700 ${classFont}px ${fontFamily}`;
    const labelWidth = ctx.measureText(label).width;
    const badgeWidth = labelWidth + textPadX * 2;
    const wordBottom = textY + fontSize / 2;
    const preferredY = wordBottom + Math.max(8, Math.round(hexSize * 0.38));
    const minLabelY = wordBottom + badgeHeight / 2 + Math.max(2, Math.round(hexSize * 0.06));
    const bottomInset = Math.max(4, Math.round(hexSize * 0.12));
    const maxLabelY = Math.max(minLabelY, cell.cy + hexSize - bottomInset - badgeHeight / 2);
    const labelY = clamp(preferredY, minLabelY, maxLabelY);
    const badgeX = cell.cx - badgeWidth / 2;
    const badgeY = labelY - badgeHeight / 2;

    drawRoundedRect(badgeX, badgeY, badgeWidth, badgeHeight, badgeRadius);
    ctx.fillStyle = isActive ? 'rgba(16, 17, 32, 0.62)' : 'rgba(255,255,255,0.14)';
    ctx.fill();
    ctx.strokeStyle = isActive ? 'rgba(255,255,255,0.55)' : 'rgba(255,255,255,0.35)';
    ctx.lineWidth = 1;
    ctx.stroke();

    ctx.fillStyle = isActive ? 'rgba(255,255,255,0.98)' : 'rgba(255,255,255,0.93)';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(label, cell.cx, labelY + 0.5);
  }
}

function draw() {
  if (!canvas || !ctx || !grid.length) return;
  updateResponsiveLayout();
  resizeCanvas();
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  const selectedSet = new Set(selectedPath.map(c => `${c.row},${c.col}`));

  for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c < COLS; c++) {
      const cell = grid[r][c];
      const k = `${r},${c}`;
      let state = 'normal';

      if (gameOver && cell.showCorrect) state = 'correct';
      else if (gameOver && cell.showWrong) state = 'wrong';
      else if (selectedSet.has(k)) state = 'selected';
      else if (cell.isEntry || cell.isExit) state = 'entry';
      else if (hoveredCell && hoveredCell.row === r && hoveredCell.col === c) state = 'hover';

      drawHex(cell, state);
    }
  }

  // Draw path lines between selected cells
  if (selectedPath.length > 1) {
    ctx.beginPath();
    ctx.strokeStyle = 'rgba(233, 69, 96, 0.25)';
    ctx.lineWidth = 2.5;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    const first = grid[selectedPath[0].row][selectedPath[0].col];
    ctx.moveTo(first.cx, first.cy);
    for (let i = 1; i < selectedPath.length; i++) {
      const cell = grid[selectedPath[i].row][selectedPath[i].col];
      ctx.lineTo(cell.cx, cell.cy);
    }
    ctx.stroke();
  }

  if (keyboardMode && document.activeElement === canvas && focusedCell && grid[focusedCell.row]?.[focusedCell.col]) {
    drawFocusHex(grid[focusedCell.row][focusedCell.col]);
  }
}

// ============================================================
// UI UPDATES
// ============================================================
function updatePatternDisplay() {
  const dotsEl = document.getElementById('pattern-dots');
  const textEl = document.getElementById('pattern-text');
  dotsEl.innerHTML = '';

  for (const ch of targetPattern) {
    const dot = document.createElement('div');
    dot.className = 'dot ' + (ch === '1' ? 'stressed' : 'unstressed');
    dotsEl.appendChild(dot);
  }

  textEl.textContent = patternToVisibleText(targetPattern);
  updatePatternAssistiveText();
}

function setMessage(text, cls) {
  const el = document.getElementById('message');
  el.textContent = text;
  el.className = cls || '';
}

function updateScore() {
  document.getElementById('score-display').textContent = `Score: ${score}`;
}

// ============================================================
// GAME LOGIC
// ============================================================
function isAdjacent(a, b) {
  const neighbors = getHexNeighbors(a.row, a.col);
  return neighbors.some(n => n.row === b.row && n.col === b.col);
}

function isExactSolutionPath(selected, solution) {
  if (selected.length !== solution.length) return false;
  for (let i = 0; i < selected.length; i++) {
    if (selected[i].row !== solution[i].row || selected[i].col !== solution[i].col) {
      return false;
    }
  }
  return true;
}

function handleCellClick(row, col) {
  if (gameOver) return;
  const cell = grid[row][col];
  focusedCell = { row, col };

  // Check if clicking the last selected cell (undo)
  if (selectedPath.length > 0) {
    const last = selectedPath[selectedPath.length - 1];
    if (last.row === row && last.col === col) {
      selectedPath.pop();
      updateControlState();
      setMessage(selectedPath.length === 0
        ? 'Tap a green entry tile on the left to start'
        : 'Keep going! Tap an adjacent hex.');
      draw();
      return;
    }
  }

  // First selection must be the highlighted entry tile.
  if (selectedPath.length === 0) {
    if (!cell.isEntry) {
      setMessage('Start from the green entry tile on the left.');
      return;
    }
    selectedPath.push({ row, col });
    updateControlState();
    setMessage('Keep going! Tap an adjacent hex.');
    draw();
    return;
  }

  // Must be adjacent to the last selected cell
  const last = selectedPath[selectedPath.length - 1];
  if (!isAdjacent(last, { row, col })) {
    setMessage('That tile is not adjacent! Tap a neighboring hex.');
    return;
  }

  // Don't allow revisiting
  if (selectedPath.some(p => p.row === row && p.col === col)) {
    setMessage('Already visited that tile!');
    return;
  }

  selectedPath.push({ row, col });
  updateControlState();

  // Check if reached the right edge
  if (col === COLS - 1) {
    checkWin();
    return;
  }

  setMessage('Keep going! Tap an adjacent hex.');
  draw();
}

function checkWin() {
  gameOver = true;
  updateControlState();

  // The player's route must match the full generated chain exactly.
  const allCorrect = isExactSolutionPath(selectedPath, correctPath);

  if (allCorrect) {
    score++;
    updateScore();
    setMessage('Correct! Well done! Press "New Maze" to continue.', 'correct');

    // Highlight path green
    for (const p of selectedPath) {
      grid[p.row][p.col].showCorrect = true;
    }
  } else {
    setMessage('Not quite! Follow the full green chain to the exit. Press "New Maze" to try again.', 'incorrect');
    const correctPathSet = new Set(correctPath.map(p => cellKey(p.row, p.col)));

    // Show selected cells that are not part of the solution as wrong.
    for (const p of selectedPath) {
      if (!correctPathSet.has(cellKey(p.row, p.col))) {
        grid[p.row][p.col].showWrong = true;
      } else {
        grid[p.row][p.col].showCorrect = true;
      }
    }

    // Show correct path
    for (const p of correctPath) {
      grid[p.row][p.col].showCorrect = true;
    }
  }

  draw();
}

function undo() {
  if (gameOver || selectedPath.length === 0) return;
  selectedPath.pop();
  const fallbackCell = getLastSelectedCell() || getEntryCell();
  if (fallbackCell) {
    focusedCell = { row: fallbackCell.row, col: fallbackCell.col };
  }
  updateControlState();
  setMessage(selectedPath.length === 0
    ? 'Tap a green entry tile on the left to start'
    : 'Keep going! Tap an adjacent hex.');
  draw();
}

// ============================================================
// INPUT HANDLING
// ============================================================
function getCellAtPoint(x, y) {
  for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c < COLS; c++) {
      if (pointInHex(x, y, grid[r][c].cx, grid[r][c].cy)) {
        return { row: r, col: c };
      }
    }
  }
  return null;
}

function getCanvasPoint(e) {
  const rect = canvas.getBoundingClientRect();
  let clientX = e.clientX;
  let clientY = e.clientY;

  if ((clientX === undefined || clientY === undefined) && e.touches && e.touches.length > 0) {
    clientX = e.touches[0].clientX;
    clientY = e.touches[0].clientY;
  } else if ((clientX === undefined || clientY === undefined) && e.changedTouches && e.changedTouches.length > 0) {
    clientX = e.changedTouches[0].clientX;
    clientY = e.changedTouches[0].clientY;
  }

  return {
    x: clientX - rect.left,
    y: clientY - rect.top
  };
}

function handleCanvasKeyDown(e) {
  if (moveFocusByKey(e.key)) {
    e.preventDefault();
    return;
  }

  if (e.key === 'Enter' || e.key === ' ') {
    ensureFocusedCell();
    if (!focusedCell) return;
    e.preventDefault();
    handleCellClick(focusedCell.row, focusedCell.col);
    announceFocusedCell();
    return;
  }

  if (e.key === 'Backspace' || e.key === 'Delete' || e.key.toLowerCase() === 'u') {
    e.preventDefault();
    undo();
    announceFocusedCell();
    return;
  }

  if (e.key.toLowerCase() === 'n') {
    e.preventDefault();
    generateMaze();
    announceFocusedCell('New maze loaded.');
  }
}

// ============================================================
// INIT
// ============================================================
function init() {
  canvas = document.getElementById('maze-canvas');
  ctx = canvas.getContext('2d');

  canvas.addEventListener('pointerup', (e) => {
    if (e.pointerType === 'mouse' && e.button !== 0) return;
    const pt = getCanvasPoint(e);
    const cell = getCellAtPoint(pt.x, pt.y);
    if (cell) {
      canvas.focus({ preventScroll: true });
      handleCellClick(cell.row, cell.col);
    }
  });

  canvas.addEventListener('mousemove', (e) => {
    const pt = getCanvasPoint(e);
    const cell = getCellAtPoint(pt.x, pt.y);
    if (cell) {
      if (!hoveredCell || hoveredCell.row !== cell.row || hoveredCell.col !== cell.col) {
        hoveredCell = cell;
        draw();
      }
    } else if (hoveredCell) {
      hoveredCell = null;
      draw();
    }
  });

  canvas.addEventListener('mouseleave', () => {
    if (hoveredCell) {
      hoveredCell = null;
      draw();
    }
  });

  canvas.addEventListener('focus', () => {
    ensureFocusedCell();
    draw();
    if (keyboardMode) {
      announceFocusedCell('Use arrow keys to move and Enter or Space to select a tile.');
    }
  });

  canvas.addEventListener('blur', draw);
  canvas.addEventListener('keydown', handleCanvasKeyDown);

  document.getElementById('btn-undo').addEventListener('click', undo);
  document.getElementById('btn-new').addEventListener('click', generateMaze);
  window.addEventListener('keydown', (e) => {
    if (!e.metaKey && !e.ctrlKey && !e.altKey) keyboardMode = true;
  }, true);
  window.addEventListener('pointerdown', () => {
    keyboardMode = false;
    draw();
  }, true);
  window.addEventListener('resize', draw);
  window.addEventListener('orientationchange', draw);

  generateMaze();
}

window.addEventListener('DOMContentLoaded', init);
