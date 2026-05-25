# CFO Decision Cockpit Pilot Backlog

## 30-Day Hardening Backlog

Goal: make the demo stable enough for controlled stakeholder walkthroughs and pilot planning.

1. Confirm CFO demo storyline and success criteria.
2. Validate all demo labels, period references and unit conventions with finance stakeholders.
3. Replace any remaining illustrative copy with client-approved terminology.
4. Add a simple release checklist for demo runs.
5. Confirm browser support for Chrome, Edge and Safari.
6. Perform visual QA on the exact meeting-room display resolution.
7. Create a controlled demo data dictionary.
8. Define data-owner review checkpoints.
9. Add export-ready screenshots for leadership packs.
10. Document known non-production assumptions and limitations.

## 90-Day Pilot Backlog

Goal: move from static demo to pilot-ready operating workflow.

1. Select pilot entities, business units and treasury scope.
2. Define pilot KPI set: cash position, 13-week forecast, liquidity coverage, DSO, DPO, inventory and funding need.
3. Agree base, downside and upside scenario definitions.
4. Build repeatable data refresh pipeline for pilot data.
5. Introduce role-based pilot access.
6. Add pilot action workflow with owner, due date, status and evidence.
7. Add finance review and sign-off process for forecast outputs.
8. Create model validation pack for forecast and scenario logic.
9. Define weekly liquidity meeting workflow using the cockpit.
10. Prepare pilot readout pack with adoption, accuracy and action-impact measures.

## Data Integration Backlog

1. ERP actuals integration for cash, GL, AP and AR.
2. Treasury system integration for bank balances, debt, funding calendar and FX exposure.
3. CRM / collections integration for invoices, overdue status and promise-to-pay data.
4. Inventory / supply-chain data integration for stock levels, DIO and slow-moving SKUs.
5. Capex tracker integration for approved spend and phasing.
6. Market data integration for FX, rates and commodity curves.
7. Counterparty risk signal integration for customer and supplier risk.
8. Data-quality scoring by source, field and refresh cycle.
9. Reconciliation checks between ERP, treasury and reporting balances.
10. Refresh monitoring with failed-load alerts.

## Model / Scenario Backlog

1. Replace demo-linear scenario math with validated driver models.
2. Build customer payment behavior model for collections forecasting.
3. Build DSO sensitivity by customer segment and business unit.
4. Build FX exposure model by currency, payable, receivable, debt and hedge.
5. Add working-capital scenario model for DSO, DPO and DIO.
6. Add capex rephasing model by project and approval status.
7. Add probabilistic confidence bands for 13-week cash forecast.
8. Add forecast accuracy tracking by entity and horizon.
9. Add scenario comparison history.
10. Add manual override workflow with reason codes.

## Governance / Audit Backlog

1. Define model owners, data owners and business process owners.
2. Add assumption register with owner, effective date and approval status.
3. Add decision log persistence.
4. Add action audit trail with status changes and evidence links.
5. Add override audit trail for forecast and scenario changes.
6. Add source-lineage drill-through from dashboard metrics.
7. Add review status indicators for CFO pack readiness.
8. Add monthly model performance review.
9. Add issue register for data-quality and model exceptions.
10. Add governance reporting for internal control review.

## Security / Access Backlog

1. Define user roles: Group CFO, treasury, FP&A, AR, procurement, supply chain and viewer.
2. Add single sign-on integration.
3. Add role-based screen and data access.
4. Add business-unit and entity-level data entitlements.
5. Add read-only executive mode.
6. Add audit logging for access and key user actions.
7. Add secrets management for data connectors.
8. Add data retention and deletion policy.
9. Add secure export controls.
10. Complete security review before production pilot.

## Pilot Acceptance Criteria

- Finance signs off pilot data definitions and source mapping.
- Forecast output reconciles to approved source systems.
- Scenario logic is documented and reviewed by model owners.
- CFO can run base, downside and upside review without analyst intervention.
- Actions have named owners, status and follow-up cadence.
- Data lineage and assumptions are visible to finance reviewers.
- Access controls match pilot governance requirements.
