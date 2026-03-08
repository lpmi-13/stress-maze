# Stress Maze - Implementation Plan

## Overview
A browser-based game where players navigate a maze of hexagonal tiles containing 2-3 syllable academic English words. The correct path through the maze (left to right) consists entirely of words sharing the same stress pattern. Distractor tiles use words with different stress patterns.

## Tech Stack
- **Single-page app**: `index.html` with inline CSS and JS (no build tools, no dependencies)
- **Rendering**: HTML5 Canvas for the hexagonal grid
- **Data**: Embedded JSON of AWL words with stress annotations (sourced from CMU Pronouncing Dictionary patterns)

## Data Preparation

### Step 1: Filter words from AWL
- Extract all 569 base words from the YAML wordlist
- Keep only 2-syllable and 3-syllable words (~250-300 words)
- Group them by stress pattern:
  - **2-syllable patterns**: `10` (STRESSed-un), `01` (un-STRESSed) — e.g., "access" = `10`, "achieve" = `01`
  - **3-syllable patterns**: `100`, `010`, `001` — e.g., "area" = `100`, "approach" could be 2-syl `01`, "adequate" = `100`
- Stress notation: `1` = stressed, `0` = unstressed

### Step 2: Embed as JS data
- A JS object mapping each word to its stress pattern string
- Words grouped by pattern for easy maze generation

## Game Mechanics

### Maze Structure
- A grid of **hexagonal tiles**, roughly 5 columns × 5 rows (adjustable per difficulty)
- Each tile contains one word displayed inside the hexagon
- The leftmost column has one **entry tile** (highlighted green)
- The rightmost column has one **exit tile** (highlighted green)

### Path Generation Algorithm
1. Pick a random stress pattern for this round (e.g., `01` — second syllable stressed)
2. Generate a valid path from a random left-edge cell to a random right-edge cell using only adjacent hexagons, snaking through the grid (each column visited at least once)
3. Fill the path tiles with randomly chosen words matching the target stress pattern
4. Fill all remaining tiles with words that do **NOT** match the target pattern (distractors)
5. Verify there is exactly one contiguous path of the target pattern from left to right

### Player Interaction
- The game displays the target stress pattern visually at the top (e.g., "Find the path: da-DA" or "da-DA-da") using large/small circles or syllable boxes
- Player taps/clicks hexagons one at a time to build their path
- Each selected tile highlights; only adjacent tiles to the last selected tile are valid next moves
- Player can undo (tap the last selected tile to deselect)
- When the player reaches the right edge, the game checks if the path is correct
- **Correct**: celebration animation, score +1, new maze
- **Incorrect**: shake animation, show the correct path highlighted, then new maze

### Stress Pattern Display
- Show the pattern as a visual: small and large dots/circles
  - Large dot = stressed syllable
  - Small dot = unstressed syllable
- Example: "da-DA" shown as `○ ●` and "DA-da" shown as `● ○`

## UI Layout

```
┌─────────────────────────────────────┐
│  STRESS MAZE           Score: 3     │
│                                     │
│  Find the path:  ○ ● ○             │
│  (un-STRESS-ed)                     │
│                                     │
│    ╱‾‾╲   ╱‾‾╲   ╱‾‾╲   ╱‾‾╲      │
│   │area│ │edit│  │fund│ │cite│      │
│    ╲__╱   ╲__╱   ╲__╱   ╲__╱       │
│  ╱‾‾╲   ╱‾‾╲   ╱‾‾╲   ╱‾‾╲       │
│ │goal│ │layer│ │focus│ │brief│      │
│  ╲__╱   ╲__╱   ╲__╱   ╲__╱        │
│    ╱‾‾╲   ╱‾‾╲   ╱‾‾╲   ╱‾‾╲      │
│   │sum │ │seek│  │deny│ │bond│      │
│    ╲__╱   ╲__╱   ╲__╱   ╲__╱       │
│                                     │
│  [New Maze]                         │
└─────────────────────────────────────┘
```

## Hex Grid Details
- **Offset hex grid** (even-row offset): alternating rows shifted right by half a hex width
- Each hex is large enough to fit a word (~80-100px wide)
- Adjacency: each hex has up to 6 neighbors
- Canvas rendering: draw hexagons with `moveTo`/`lineTo`, fill with word text centered

## File Structure
```
index.html          — single file containing everything:
                      - embedded CSS (in <style>)
                      - word data with stress patterns (in <script>)
                      - maze generation logic
                      - canvas rendering
                      - game state & interaction handling
```

## Implementation Steps

1. **Create word data** — Curate the 2-3 syllable AWL words with correct stress patterns, embed as JS
2. **Hex grid rendering** — Canvas-based hex grid with click/tap detection
3. **Maze/path generation** — Algorithm to create a single valid path and fill distractors
4. **Game loop** — Pattern display, tile selection, path validation, scoring
5. **Polish** — Responsive sizing, mobile touch support, animations, color scheme

## Stress Pattern Reference (sample words)

| Pattern | Notation | Example Words |
|---------|----------|---------------|
| STRESSed-un | `10` | access, adult, area, author, bias, channel, chart |
| un-STRESSed | `01` | achieve, acquire, adapt, adjust, affect, appeal |
| STRESSed-un-un | `100` | adequate, category, classical, document, generate |
| un-STRESSed-un | `010` | abandon, accompany, alternative, apparent, assessment |
| un-un-STRESSed | `001` | guarantee, volunteer, intervene |
