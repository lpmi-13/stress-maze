# Stress Maze

A browser game for practising English word stress patterns using academic vocabulary.

## How it works

A 5×5 hexagonal grid is filled with 2–3 syllable words from the [Academic Word List](https://en.wikipedia.org/wiki/Academic_Word_List). One contiguous path from the left edge to the right edge is made up of words that share the same stress pattern (e.g. DA-da or da-DA-da). All other tiles are distractors with a different pattern.

The target stress pattern is displayed at the top of the screen as large and small dots. Tap adjacent hexagons to trace a path through matching words. When you reach the right side the game checks your answer, shows the correct path if needed, and loads a new maze.

## Stress patterns

| Pattern | Example | Words |
|---------|---------|-------|
| **DA-da** (10) | access, method | ~175 |
| **da-DA** (01) | achieve, define | ~110 |
| **DA-da-da** (100) | document, energy | ~60 |
| **da-DA-da** (010) | establish, potential | ~65 |
| **da-da-DA** (001) | guarantee, volunteer | ~20 |

## Running

Open `index.html` in any modern browser. No build step or dependencies required.

## Word source

Words are drawn from the Academic Word List (AWL), sourced from [machine_readable_wordlists](https://github.com/lpmi-13/machine_readable_wordlists/blob/master/Academic/AWL/AWL.yml).
