# Palia Villager Gift Finder

A static page for the exact search "palia villager gifts": hold an item, find out in
seconds which villagers love or like it, or pick a villager to see their full gift list.

## Source

Data is parsed from a single source page:

- https://ggrecon.com/guides/palia-best-villager-gifts
- Page last modified: 2026-08-15 (per the page's own `dateModified` metadata)
- Re-fetched and parsed: 2026-11-23

That source lists 23 villagers with "Loved gifts" and "Liked gifts" columns. It does not
list disliked gifts, so this tool cannot answer "what does X dislike," and it does not
cover weekly want rotations. Because it is a single source that may predate later game
patches, the page itself discloses this limitation to the reader.

A handful of source list entries appear to merge two gift names into one line in the
original HTML (for example Auni's "Garden Leafhopper Common Field Cricket"). These are
kept verbatim rather than guessed apart, since splitting them would be adding information
not actually present in the source.

## Files

- `index.html` — the page: item search box + villager picker, no build step.
- `data.js` — the 23-villager dataset plus `findGiftMatches` / `findVillager` lookup
  functions, parsed from the source HTML.
- `test.js` — known-answer tests against the parsed data, run with `node test.js`.
- `.nojekyll` — disables Jekyll processing if served from GitHub Pages.

## Running

Open `index.html` directly in a browser, or serve the directory with any static file
server. No build step, no dependencies.

To run the tests: `node test.js`
