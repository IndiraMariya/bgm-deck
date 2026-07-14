// ===========================================================================
// CONFIG TEMPLATE — this file IS committed to the repo.
// Copy it to config.js and fill in your own values:
//     cp config.example.js config.js
// Then edit config.js (which is gitignored and never pushed).
//
// YouTube key: https://console.cloud.google.com -> enable "YouTube Data API v3"
//   -> Credentials -> Create API key. Restrict it to your domain (HTTP referrer).
//
// Supabase (optional, for the cross-device account): create a free project at
//   https://supabase.com, then Project Settings -> API to find the URL and the
//   "anon public" key. The anon key is safe to expose in client code.
//   Leave both blank to disable accounts and use on-device stats only.
// ===========================================================================
window.BGM_CONFIG = {
  API_KEY: "PASTE_YOUR_YOUTUBE_DATA_API_KEY_HERE",
  PLAYLIST_ID: "PLH8SHOnkERCM",
  SUPABASE_URL: "",       // e.g. "https://xxxxx.supabase.co"
  SUPABASE_ANON_KEY: ""   // the "anon public" key
};

