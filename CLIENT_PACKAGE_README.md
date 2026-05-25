# CFO Decision Cockpit Client Demo Package

## Purpose

This package contains a static, client-demo-ready CFO Cashflow Decision Cockpit prototype aligned to the CFO Decision Engine storyline:

Forecast -> Scenario -> Action -> Governance

It is designed for executive walkthroughs, pilot scoping and product validation discussions.

## How To Run Locally

No installation is required.

Option 1: open directly

1. Open `index.html` in a browser.

Option 2: run a local static server

```bash
python3 -m http.server 8000
```

Then open:

```text
http://127.0.0.1:8000/index.html
```

Recommended browser: Chrome or Edge.

## Files Included

- `index.html` - static application shell
- `styles.css` - cockpit layout, visual styling and responsive CSS
- `app.js` - demo dataset, navigation, chart rendering, scenario logic and assistant behavior
- `README.md` - prototype run notes
- `SYSTEM_ANALYSIS.md` - analysis of source presentation and dashboard references
- `QA_CHECKLIST.md` - manual QA checklist
- `QA_REPORT.md` - validation report and visual QA summary
- `DEMO_SCRIPT.md` - 5-minute and 12-minute demo scripts
- `PILOT_BACKLOG.md` - hardening, pilot, integration, model, governance and security backlog
- `CLIENT_PACKAGE_README.md` - this package guide

Visual QA screenshots:

- `visual-qa-1440-cfo-overview.png`
- `visual-qa-1440-scenario-lab.png`
- `visual-qa-1440-ai-assistant.png`
- `visual-qa-1440-data-drivers.png`
- `visual-qa-1920-cfo-overview.png`
- `visual-qa-1920-scenario-lab.png`

## Excluded From Client Package

Backup and scratch files are intentionally excluded:

- `index.backup.html`
- `styles.backup.css`
- `app.backup.js`
- `pdf_text_extract.txt`
- temporary QA scripts

## Demo Assumptions

- All figures are illustrative and shown in M TRY unless labeled otherwise.
- Forecast horizon is 90 days / 13 weeks from the May 2025 close.
- The scenario calculations are simplified demo approximations, not production forecasting models.
- Source-system quality, refresh dates and owners are illustrative.
- AI Assistant responses are static demo behavior grounded in the shared demo dataset.
- Action impacts are estimated gross cash benefits before execution risk.

## Demo-Data Disclaimer

The app displays this disclaimer:

```text
Illustrative demo data. Not production figures. Outputs require finance review.
```

Recommended talk track:

"This cockpit uses illustrative demo data, not production figures. The goal is to demonstrate the decision workflow and executive experience. In a pilot, outputs would be reconciled to source systems and reviewed by finance owners before operational use."

## Validation Summary

Completed checks:

- `node --check app.js` passed.
- DOM binding audit passed with no missing required IDs/classes.
- Navigation smoke test passed across all main screens.
- Scenario Lab smoke test passed for Base, Downside FX Shock, Upside Recovery, Reset and slider updates.
- AI Assistant prompt smoke test passed.
- Visual QA completed at 1440px and 1920px widths.
- Final visual QA screenshots are included in the package.

## Known Caveats

- This is a static prototype with no backend, authentication, database or production data connectors.
- Scenario math is simplified for demo clarity.
- No project-level Playwright test suite is included because the package intentionally has no build setup.
- Data & Drivers and AI Assistant can continue below the fold at 1440px height; this is expected and scrollable.
- A final check on the actual meeting-room or client presentation display is recommended.

## Recommended Demo Flow

Use `DEMO_SCRIPT.md`.

Short flow:

1. CFO Overview
2. Cash Forecasting
3. Scenario Lab
4. AI Assistant
5. Actions / Data & Drivers

Extended flow:

1. CFO Overview
2. Cash Forecasting
3. Treasury
4. Working Capital
5. Scenario Lab
6. AI Assistant
7. Risk
8. Actions
9. Data & Drivers

## Final Readiness

Status: client-demo ready with minor caveats.
