# QA Checklist - CFO Decision Cockpit

Use this checklist after running a local static server:

```bash
python3 -m http.server 8000
```

Open `http://127.0.0.1:8000/index.html`.

## 1. Navigation Test

- Open CFO Overview.
- Click each sidebar item:
  - CFO Overview
  - Cash Forecasting
  - Treasury
  - Working Capital
  - Scenario Lab
  - Risk
  - AI Assistant
  - Actions
  - Data & Drivers
- Expected: active nav highlight moves, each section renders without blank charts or missing tables.

## 2. Scenario Slider Test

- Go to Scenario Lab.
- Move EUR/TRY higher, DSO higher, sales lower and commodity prices higher.
- Expected: ending cash decreases, liquidity coverage decreases, risk level worsens and recommendations remain visible.
- Move supplier terms higher, capex shift lower and inventory reduction higher.
- Expected: working-capital release improves and cash/free-cash-flow metrics improve.

## 3. Scenario Preset Test

- Click Base.
- Expected: values return to base case.
- Click Downside FX Shock.
- Expected: cash balance and liquidity visibly worsen.
- Click Upside Recovery.
- Expected: cash balance and free cash flow visibly improve.
- Click Reset.
- Expected: base case is restored.

## 4. AI Assistant Test

- Go to AI Assistant.
- Click Forecast deterioration.
- Expected: response references the base forecast, current scenario values and source systems.
- Click Downside scenario.
- Expected: Scenario Lab state changes to downside assumptions and response references EUR/TRY, DSO, free cash flow and liquidity.
- Click Liquidity actions.
- Expected: response lists actions with impact, owner and timing.

## 5. Actions Rendering Test

- Go to Actions.
- Confirm decision log shows date, decision, impact, owner, timing, priority and status.
- Confirm Action Impact Mix chart matches the listed action stack.

## 6. Data & Drivers / Lineage Test

- Go to Data & Drivers.
- Confirm all five columns render:
  - Enterprise Data
  - External & Risk Data
  - CFO Decision Engine
  - Governance
  - CFO Cockpit
- Confirm source systems, assumptions and data-quality / refresh indicators are visible.

## 7. Responsive Visual Check

- Test at 1440px width.
- Test at 1920px width.
- Expected: no overlapping KPI text, tables remain readable and charts render within panels.
