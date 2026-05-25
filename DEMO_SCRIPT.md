# CFO Decision Cockpit Demo Script

## Demo Positioning

This is a static executive demo of a CFO Decision Engine cockpit. It shows the intended operating model: Forecast -> Scenario -> Action -> Governance.

Use the disclaimer early:

"This cockpit uses illustrative demo data, not production figures. The purpose is to show the decision workflow, the executive experience and the integration points. In a pilot, all outputs would require finance review, source-system reconciliation and model-owner sign-off before operational use."

## 5-Minute Demo Flow

### 0:00-0:30 - CFO Overview

Screen: CFO Overview

Talk track:

"We start with the CFO landing page. It gives the executive view of cash position, 90-day / 13-week forecast, liquidity coverage, funding need and risk alerts. The storyline is intentionally simple: forecast, scenario, action and governance. The top banner is a reminder that this is demo data, so the values are illustrative."

Point out:

- Net cash forecast and cash position
- Liquidity coverage and risk alerts
- Cash forecast bridge
- Management takeaway

### 0:30-1:30 - Forecast Explanation

Screen: Cash Forecasting

Talk track:

"The forecast view explains how the 90-day outlook is built and why it moved. The same demo dataset feeds the KPIs, bridge, scenario table, drivers, sources and recommended actions. This is where the CFO can see both the number and the reason behind the number."

Point out:

- Scenario comparison
- Key drivers
- Source systems
- Recommended actions

### 1:30-3:00 - Scenario Lab

Screen: Scenario Lab

Talk track:

"Now we move from forecast to scenario. The Scenario Lab lets finance stress the main cash drivers: FX, DSO, sales growth, commodity prices, supplier terms, capex shift and inventory reduction. Changes update cash balance, liquidity coverage, risk level, working-capital impact and actions."

Use:

1. Click `Downside FX Shock`.
2. Point out cash balance deterioration, liquidity coverage drop and High risk.
3. Click `Upside Recovery`.
4. Point out improved ending cash and free cash flow.
5. Click `Reset` before moving on.

### 3:00-4:15 - AI Assistant

Screen: AI Assistant

Talk track:

"The AI Assistant turns the same model into an executive explanation. It does not invent a different answer; it references the current scenario, assumptions, sources and actions. The assistant is designed to accelerate analysis, not replace finance review."

Use exact prompts:

1. Click `Forecast deterioration`.
2. Click `Downside scenario`.
3. Click `Liquidity actions`.

Optional typed prompt:

`Which levers improve liquidity fastest and who owns them?`

### 4:15-5:00 - Actions and Governance

Screens: Actions, Data & Drivers

Talk track:

"The final step is governance. The cockpit converts forecast and scenario outputs into owner-based actions, then shows the data lineage, assumptions, refresh dates and data-quality indicators behind the decision. This is the bridge from insight to accountable execution."

Point out:

- Action owner, impact, timing, priority and status
- Source systems
- Assumptions and data-quality summary

## 12-Minute Extended Demo Flow

### 0:00-1:00 - Executive Setup

Screen: CFO Overview

Talk track:

"The cockpit is designed for the CFO monthly cash review and weekly liquidity stand-up. It compresses forecast, scenario testing, action tracking and governance into a single decision surface."

Explain disclaimer:

"The banner is deliberately visible because this is illustrative demo data. It protects the interpretation: the workflow is representative, but the numbers are not production figures and require finance review."

### 1:00-2:30 - CFO Overview Deep Dive

Screen: CFO Overview

Talk track:

"The landing page answers four executive questions: where are we today, where will cash land in the next 90 days, what risks matter most and what actions should be taken."

Point out:

- Cash forecast bridge as the movement explanation
- Cash forecast scenarios as base/upside/downside outlook
- Liquidity runway as downside resilience
- Covenant monitor as governance guardrail
- Actions tracker as execution handoff

### 2:30-3:45 - Cash Forecasting

Screen: Cash Forecasting

Talk track:

"Forecasting gives more detail on the bridge and source evidence. This is where finance can defend the number: which drivers changed, what systems fed the forecast and which actions are recommended."

Point out:

- Scenario details table
- Key drivers vs plan
- Sources and data lineage
- Recommended actions

### 3:45-4:45 - Treasury

Screen: Treasury

Talk track:

"Treasury focuses on liquidity coverage, funding calendar and FX exposure. This view is useful when the conversation moves from forecast accuracy to funding capacity and timing."

Point out:

- Available liquidity vs minimum buffer
- Funding calendar
- Covenant / liquidity indicators
- FX exposure mix

### 4:45-5:45 - Working Capital

Screen: Working Capital

Talk track:

"Working Capital identifies operational levers behind the cash forecast. The CFO can see DSO, DPO, inventory days, aging heatmaps and the actions that release cash."

Point out:

- Receivables aging
- Payables composition
- Driver impact
- Working-capital actions

### 5:45-8:00 - Scenario Lab

Screen: Scenario Lab

Talk track:

"This is the core decision engine moment. The model lets the CFO ask: what happens if FX weakens, collections slow, inventory remains high or capex is rephased?"

Use presets:

1. Click `Base`.
2. Click `Downside FX Shock`.
3. Explain: "FX and DSO stress lowers cash, weakens liquidity coverage and raises risk."
4. Click `Upside Recovery`.
5. Explain: "Better DSO, lower commodity pressure, longer supplier terms and inventory reduction improve cash and free cash flow."
6. Click `Reset`.

Use sliders:

1. Move `EUR/TRY Exchange Rate` higher.
2. Move `DSO` higher.
3. Explain downside pressure on ending cash and liquidity.
4. Move `Supplier Terms (DPO)` higher.
5. Move `Inventory Reduction vs Plan` higher.
6. Explain working-capital release and cash improvement.
7. Click `Reset`.

### 8:00-9:30 - AI Assistant

Screen: AI Assistant

Talk track:

"The assistant is there to turn model outputs into finance-ready narrative. It is constrained to the demo data, assumptions and sources shown in the cockpit."

Use exact prompts:

1. `Why did the cash forecast deteriorate?`
2. `Show me a downside scenario if EUR/TRY rises to 48 and collections slow by 15%.`
3. `What actions can improve liquidity fastest?`

Buttons map to these prompts:

- `Forecast deterioration`
- `Downside scenario`
- `Liquidity actions`

What to emphasize:

- Responses reference current scenario values.
- Responses include source and assumption references.
- The assistant recommends actions with impact, owner and timing.

### 9:30-10:30 - Risk

Screen: Risk

Talk track:

"The Risk view highlights where the forecast can fail: FX, collections, inventory, capex and funding. The goal is to move risk from a static warning into a decision queue."

Point out:

- Risk distribution
- Alerts
- Risk heatmap
- Early warning signals

### 10:30-11:15 - Actions

Screen: Actions

Talk track:

"Actions convert the analytics into accountability. Each action has an owner, timing, priority, status and estimated impact, so the cockpit can support weekly follow-up."

Point out:

- Decision log
- Action impact mix
- Owner and status fields

### 11:15-12:00 - Data & Drivers

Screen: Data & Drivers

Talk track:

"This closes the governance loop. The cockpit shows where data comes from, how assumptions are managed, what refresh dates are visible and where data quality is monitored. This is what makes the workflow pilotable rather than just a dashboard."

Point out:

- Enterprise data
- External and risk data
- Decision engine
- Governance
- CFO cockpit outputs
- Source systems, assumptions and data quality

## AI Assistant Prompt Set

Use these exact prompts during the demo:

```text
Why did the cash forecast deteriorate?
```

```text
Show me a downside scenario if EUR/TRY rises to 48 and collections slow by 15%.
```

```text
What actions can improve liquidity fastest?
```

Optional follow-up:

```text
Which levers improve liquidity fastest and who owns them?
```

## Scenario Lab Slider Guidance

Use sliders only after showing presets, so the audience first understands the baseline story.

Downside demonstration:

- Increase `EUR/TRY Exchange Rate`.
- Increase `DSO`.
- Decrease `Sales Growth vs Plan`.
- Increase `Commodity Prices vs Plan`.

Upside / mitigation demonstration:

- Increase `Supplier Terms (DPO)`.
- Decrease `Capex Shift vs Plan`.
- Increase `Inventory Reduction vs Plan`.

Always click `Reset` before moving to another storyline.

## Demo Close

"The value of the cockpit is not another finance dashboard. It is a decision workflow: explain the forecast, test scenarios, assign actions and preserve the governance trail."
