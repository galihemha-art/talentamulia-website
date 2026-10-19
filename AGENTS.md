<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->
- Build uses a plain vite.config.ts (tanstackStart + nitro cloudflare-module to dist/, React, Tailwind, tsconfig paths) without @lovable.dev/vite-tanstack-config, so the project builds outside Lovable.
- The /risway product landing uses its own shell and scoped theme; demo requests are handed to the existing company WhatsApp without claiming database submission or live product availability.

- Team portraits and the wordmark use the shared team-images module and bundled WebP assets (the asset-serving URLs return 404 on the local preview server) so responsive variants stay consistent without bundling obsolete originals.

- SEO route rules share a browser-safe service inventory for indexing and sitemap inclusion, preventing unavailable services from becoming discoverable URLs.
- WordPress article listing reads one REST page with total-page headers; sitemap reads every page strictly and uses only each post’s modification timestamp, so failed reads never publish partial XML.
- Route boundaries are shared with the root to keep resource 404s visually identical to unmatched-site 404s.
