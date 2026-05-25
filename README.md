# CFO Decision Cockpit Prototype

This folder contains an interactive static prototype prepared from the attached presentation and dashboard references.

## Files

- `index.html` - main application shell
- `styles.css` - cockpit layout, light/dark themes and dashboard styling
- `app.js` - charts, navigation, scenario simulation and AI assistant behavior
- `SYSTEM_ANALYSIS.md` - analysis of the presentation, dashboard patterns and target system scope

## Run

Open `index.html` directly in a browser, or run a local static server:

```bash
python3 -m http.server 8000
```

Then open `http://127.0.0.1:8000/index.html`.

No install step is required.

## Publish on GitHub Pages

This prototype is already static and GitHub Pages friendly. Keep `index.html`, `styles.css`, `app.js` and the QA/documentation files at the repository root.

1. Create a GitHub repository and push this folder.
2. In GitHub, open **Settings > Pages**.
3. Set **Source** to **Deploy from a branch**.
4. Select the branch you pushed, usually `main`, and the root folder `/`.
5. Save, then wait for the Pages URL to become available.

Because all asset references are relative, the app works from either a custom domain or the default `https://<user>.github.io/<repo>/` path.

The app includes:

- CFO overview dashboard
- Cash forecasting dashboard
- Treasury view
- Working capital view
- Scenario Lab with live sliders
- Liquidity risk dashboard
- AI assistant
- Decision log
- Data and model architecture view
