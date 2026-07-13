# bgm deck

A brushed-metal CD player for the web. It turns a public YouTube playlist into
spinning CDs you can play, with an inline ambient sound mixer and listening-time
tracking. Built as a single static page — no build step, no backend.

Live at **https://bgms.studio**

## Features
- Live playlist pulled from the YouTube Data API (falls back to a built-in list).
- CDs fly into a center-stage deck and spin while playing; pause freezes the angle.
- Progress bar with seek, minimize-to-pill so you can browse while playing.
- "Most Played" rack backed by localStorage listening-time tracking.
- Inline ambient mixer (Rain / Cafe / Fountain) with lit volume meters.
- Synthesized mechanical button sounds (no audio assets required).

## Setup (run locally)
This is a static site, but the YouTube player needs a real `http://` origin —
opening `index.html` from `file://` will fail with player Error 153. Serve it:

```bash
# 1. Add your API key
cp config.example.js config.js
#    then edit config.js and paste your YouTube Data API v3 key

# 2. Serve over http (any static server works)
python3 -m http.server 8000
#    open http://localhost:8000
```

### Getting a YouTube Data API key
1. https://console.cloud.google.com → create/select a project.
2. APIs & Services → Library → enable **YouTube Data API v3**.
3. Credentials → Create credentials → API key.
4. Restrict the key → Application restrictions → **HTTP referrers** →
   add `bgms.studio/*` and `https://bgms.studio/*` (and `localhost:8000/*` for local dev).

## Ambient audio
The mixer looks for loop files in an `audio/` folder:
- `audio/rain.mp3`
- `audio/cafe.mp3`
- `audio/ocean.wav`  (the Fountain channel)

Missing files show a hint and stay silent. Sources like Pixabay (no attribution)
and Freesound (filter to CC0) have suitable loops.

## Security note
This is a static site, so the API key is visible to anyone who inspects the live
page — that is unavoidable for client-side YouTube calls. Two things protect you:
1. `config.js` is gitignored, so the key is never in the repo / commit history.
2. The key is **restricted to bgms.studio** in Google Cloud Console, so even if
   someone reads it, it only works on your domain.

## Deploying to GitHub Pages (bgms.studio)
See the commands your assistant provided, or:
1. Push this repo to GitHub.
2. Repo → Settings → Pages → Source: `main` branch, root.
3. Custom domain: `bgms.studio` (the included `CNAME` file sets this).
4. In your domain registrar's DNS, point the apex domain at GitHub Pages:
   - Four `A` records → `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - (Optional) `CNAME` for `www` → `<your-username>.github.io`
5. Enable "Enforce HTTPS" once the domain verifies.

## Files
- `index.html` — the whole app.
- `config.example.js` — template; copy to `config.js` and add your key.
- `config.js` — your local key (gitignored, not committed).
- `CNAME` — custom domain for GitHub Pages.
- `audio/` — your ambient loop files.
