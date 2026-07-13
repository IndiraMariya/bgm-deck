# bgm deck

A brushed-metal CD player for the web. It turns a public YouTube playlist into
spinning CDs you can play, with an inline ambient sound mixer, light/dark modes,
and listening-time tracking. Single static page — no build step, no backend.

Live at **https://bgms.studio**

## Features
- Live playlist via the YouTube Data API (falls back to a built-in list).
- CDs fly into a center-stage deck and spin while playing; pause freezes the angle.
- Progress bar with seek, and minimize-to-pill so you can browse while playing.
- "Most Played" rack backed by local listening-time tracking.
- Inline ambient mixer (Rain / Cafe / Fountain) with lit volume meters.
- Light and dark brushed-metal themes.
- Synthesized mechanical button sounds — no audio assets required.

## Run locally
The YouTube player needs a real `http://` origin, so serve the folder rather than
opening `index.html` directly:

```bash
cp config.example.js config.js   # then paste your API key into config.js
python3 -m http.server 8000       # open http://localhost:8000
```

### YouTube Data API key
1. In the Google Cloud Console, create a project and enable **YouTube Data API v3**.
2. Create an API key under Credentials.
3. Restrict it (Application restrictions → HTTP referrers) to the domains you serve
   from. Paste the key into `config.js`.

`config.js` is gitignored and never committed. Use `config.example.js` as the template.

## Ambient audio
The mixer loads loop files from an `audio/` folder:
`audio/rain.mp3`, `audio/cafe.mp3`, `audio/ocean.wav` (Fountain).
Missing files show a hint and stay silent. Pixabay and CC0 Freesound have suitable loops.

## Files
- `index.html` — the app.
- `config.example.js` — config template; copy to `config.js` and add your key.
- `audio/` — ambient loop files.
- `favicon.svg` — animated LED icon.
