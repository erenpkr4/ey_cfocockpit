const demoData = {
  meta: {
    entity: "Eczacibasi Group",
    period: "May 2025",
    currency: "TRY",
    unit: "M TRY",
    selectedScenario: "Base Case",
    horizonLabel: "90 days / 13 weeks",
    forecastPeriod: "Jun 1 - Aug 29, 2025",
    refreshDate: "May 29, 2025 08:30",
    scenarioRunTime: "Today, 10:24 AM",
    dataQuality: 97,
    disclaimer: "Illustrative demo data. Not production figures. Outputs require finance review.",
    storyline: ["Forecast", "Scenario", "Action", "Governance"]
  },
  thresholds: {
    minimumCash: 3000,
    baseLiquidityCoverage: 2.64,
    downsideRunwayDays: 78,
    downsideRunwayDate: "Sep 1, 2025"
  },
  overview: {
    netCashForecast90: 3242,
    forecastDelta: 512,
    cashPosition: 7916,
    cashDeltaVsPriorMonth: 1128,
    operatingCashFlowYtd: 4685,
    operatingCashFlowGrowthPct: 18,
    fundingNeed12m: 2150,
    fundingNeedDelta: 300,
    topRisk: "Medium",
    topRiskDetail: "FX volatility and customer DSO",
    workingCapital: 15850,
    workingCapitalRelease: 1850
  },
  forecastBridge: [
    { label: "Prior Forecast", value: 2730, type: "total" },
    { label: "Collections", value: 1820, explanation: "Faster collection focus on overdue receivables" },
    { label: "FX Impact", value: 520, explanation: "Favorable TRY impact on net exposures" },
    { label: "Vendor Payments", value: -780, explanation: "Higher supplier cash outflows" },
    { label: "Capex Timing", value: -610, explanation: "Near-term capex pull-forward" },
    { label: "Inventory Build", value: -438, explanation: "Safety-stock increase in building products" },
    { label: "Revised Forecast", value: 3242, type: "total" }
  ],
  scenarioForecast: {
    labels: ["Jun 2025", "Jul 2025", "Aug 2025", "Sep 2025"],
    base: [7000, 4200, 3300, 3242],
    upside: [7000, 5800, 5600, 6180],
    downside: [7000, 2400, 600, -1480]
  },
  scenarioDetails: [
    { metric: "Ending Cash", base: 3242, downside: -1480, upside: 6180 },
    { metric: "Minimum Cash", base: 3000, downside: -1360, upside: 5050 },
    { metric: "Operating Cash Inflow", base: 28940, downside: 24599, upside: 31834 },
    { metric: "Operating Cash Outflow", base: 25698, downside: 26079, upside: 25654 },
    { metric: "Free Cash Flow", base: 512, downside: -2490, upside: 2105 },
    { metric: "FX Impact", base: 520, downside: -1784, upside: 736 }
  ],
  forecastBalance: {
    labels: ["May", "W2", "W4", "W6", "W8", "W10", "W12", "W13"],
    actual: [7916, null, null, null, null, null, null, null],
    base: [7916, 7000, 5600, 4200, 3600, 3300, 3242, 3242],
    upside: [7916, 7400, 6500, 5800, 5650, 5700, 6000, 6180],
    downside: [7916, 6200, 3600, 2400, 1000, 600, -900, -1480]
  },
  covenants: [
    { covenant: "Net Debt / EBITDA", actual: "1.45x", limit: "< 2.75x", headroom: "1.30x", status: "OK" },
    { covenant: "Interest Coverage", actual: "6.10x", limit: "> 3.00x", headroom: "3.10x", status: "OK" },
    { covenant: "Net Debt / Equity", actual: "0.48x", limit: "< 1.00x", headroom: "0.52x", status: "OK" },
    { covenant: "Minimum Cash", actual: "7,916", limit: "> 3,000", headroom: "4,916", status: "OK" }
  ],
  actions: [
    { rank: 1, action: "Accelerate overdue collections", owner: "Head of AR", impact: 1150, timing: "0-15 days", priority: "High", status: "In Progress", detail: "Prioritize customers >60 days overdue" },
    { rank: 2, action: "Reduce slow-moving inventory", owner: "SCM Director", impact: 680, timing: "0-30 days", priority: "High", status: "In Progress", detail: "Focus on top SKUs with low velocity" },
    { rank: 3, action: "Rephase non-critical capex", owner: "CFO Office", impact: 420, timing: "15-30 days", priority: "Medium", status: "Pending", detail: "Defer non-critical projects" },
    { rank: 4, action: "Optimize FX hedge ratio", owner: "Treasury Manager", impact: 310, timing: "0-30 days", priority: "Medium", status: "Approved", detail: "Increase EUR/TRY hedge ratio to 70%" },
    { rank: 5, action: "Renegotiate supplier terms", owner: "Procurement Director", impact: 250, timing: "30-60 days", priority: "Medium", status: "In Progress", detail: "Extend key vendor terms by 10 days" }
  ],
  businessUnits: [
    { name: "Consumer Products", cash: 2512, delta: 312 },
    { name: "Pharma", cash: 2103, delta: 245 },
    { name: "Building Products", cash: 1286, delta: 78 },
    { name: "Healthcare Services", cash: 1012, delta: 56 },
    { name: "Other", cash: 1003, delta: -32 }
  ],
  workingCapital: {
    dso: 58,
    dsoTarget: 45,
    dpo: 49,
    dpoDelta: 5,
    inventoryDays: 61,
    inventoryDeltaPct: 14,
    ratio: 312,
    ratioDeltaPct: 7.3,
    receivablesAging: [
      { label: "Consumer Products", values: [118, 70, 40, 28, 28] },
      { label: "Building Products", values: [120, 85, 45, 25, 30] },
      { label: "Healthcare", values: [95, 60, 35, 22, 18] },
      { label: "Other", values: [47, 30, 18, 12, 4] },
      { label: "Total", values: [380, 245, 138, 87, 80] }
    ],
    payables: [
      { counter: "Trade Payables", values: [22.4, 12.6, 8.7, 6.3, 50.0] },
      { counter: "Accrued Expenses", values: [4.2, 2.8, 1.8, 1.1, 10.0] },
      { counter: "Taxes Payable", values: [3.6, 1.9, 1.2, 0.8, 7.5] },
      { counter: "Other Liabilities", values: [2.1, 1.4, 1.0, 0.5, 5.0] },
      { counter: "Total Payables", values: [32.3, 18.7, 12.7, 8.7, 72.5], total: true }
    ],
    driverImpact: [
      { label: "DSO (AR Days)", value: -68 },
      { label: "Inventory Days", value: -41 },
      { label: "DPO (AP Days)", value: 26 },
      { label: "Purchase Price / Mix", value: -15 },
      { label: "Sales Growth", value: 8 },
      { label: "Other", value: 5 }
    ]
  },
  treasury: {
    liquidityLabels: ["W1", "W2", "W3", "W4", "W5", "W6", "W7", "W8", "W9", "W10", "W11", "W13"],
    availableLiquidity: [7916, 7600, 7000, 6600, 6100, 5200, 4500, 3900, 3600, 3400, 3300, 3242],
    minimumBuffer: [3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000],
    fundingCalendar: [
      { date: "Jun 05", item: "Interest Payment", amount: -6.5, priority: "Medium" },
      { date: "Jun 12", item: "CAPEX Payment", amount: -12.0, priority: "Medium" },
      { date: "Jun 20", item: "Dividend Payment", amount: -25.0, priority: "High" },
      { date: "Jul 08", item: "Loan Principal Payment", amount: -18.0, priority: "High" },
      { date: "Aug 15", item: "Corporate Tax Payment", amount: -32.0, priority: "High" }
    ],
    metrics: [
      { label: "Liquidity Coverage", value: "2.64x", delta: "+0.12x vs threshold", tone: "up" },
      { label: "Debt / EBITDA", value: "1.45x", delta: "1.30x headroom", tone: "up" },
      { label: "Interest Coverage", value: "6.10x", delta: "3.10x headroom", tone: "up" }
    ],
    fxExposure: [
      { label: "EUR Payables", value: -520 },
      { label: "USD Payables", value: -320 },
      { label: "EUR Cash", value: 280 },
      { label: "USD Cash", value: 170 },
      { label: "Hedges", value: 410 }
    ]
  },
  risk: {
    alerts: [
      { text: "Downside cash balance below threshold in week 11", priority: "High" },
      { text: "Five customers over 60 days overdue", priority: "High" },
      { text: "Inventory DIO above target by 14 days", priority: "Medium" },
      { text: "EUR/TRY volatility above planning band", priority: "Medium" }
    ],
    distribution: [
      { label: "High at risk", value: -2 },
      { label: "High secure", value: 5 },
      { label: "Medium at risk", value: -3 },
      { label: "Medium secure", value: 4 },
      { label: "Low at risk", value: -3 },
      { label: "Low secure", value: 2 },
      { label: "Critical at risk", value: -1 },
      { label: "Critical secure", value: 1 }
    ],
    heatmap: [
      { label: "Collections", values: [4, 5, 5, 4] },
      { label: "FX", values: [3, 4, 5, 5] },
      { label: "Inventory", values: [2, 4, 4, 3] },
      { label: "Capex", values: [2, 3, 4, 4] },
      { label: "Funding", values: [1, 2, 3, 4] }
    ],
    signals: [
      { label: "DSO", value: "58 days vs 45 target", tone: "down" },
      { label: "FX Volatility", value: "Above planning band", tone: "down" },
      { label: "Covenant", value: "All covenants compliant", tone: "up" },
      { label: "Forecast Drift", value: "Monitored weekly", tone: "down" }
    ]
  },
  scenarioControls: [
    { key: "fx", label: "EUR/TRY Exchange Rate", min: 32, max: 50, step: 0.1, suffix: " TRY", base: 35.2, goodDirection: -1, impactPerUnit: 180 },
    { key: "dso", label: "DSO (Days Sales Outstanding)", min: 45, max: 110, step: 1, suffix: " days", base: 60, goodDirection: -1, impactPerUnit: 45 },
    { key: "sales", label: "Sales Growth vs Plan", min: -10, max: 10, step: 0.5, suffix: "%", base: 0, goodDirection: 1, impactPerUnit: 120 },
    { key: "commodity", label: "Commodity Prices vs Plan", min: -20, max: 20, step: 0.5, suffix: "%", base: 0, goodDirection: -1, impactPerUnit: 30 },
    { key: "supplier", label: "Supplier Terms (DPO)", min: 30, max: 90, step: 1, suffix: " days", base: 55, goodDirection: 1, impactPerUnit: 28 },
    { key: "capex", label: "Capex Shift vs Plan", min: -50, max: 50, step: 1, suffix: "%", base: 0, goodDirection: -1, impactPerUnit: 18 },
    { key: "inventory", label: "Inventory Reduction vs Plan", min: -30, max: 30, step: 1, suffix: "%", base: 0, goodDirection: 1, impactPerUnit: 25 }
  ],
  scenarioPresets: {
    base: { label: "Base", values: { fx: 35.2, dso: 60, sales: 0, commodity: 0, supplier: 55, capex: 0, inventory: 0 } },
    downside: { label: "Downside FX Shock", values: { fx: 48, dso: 78, sales: -5, commodity: 12, supplier: 48, capex: 15, inventory: -12 } },
    upside: { label: "Upside Recovery", values: { fx: 34, dso: 50, sales: 5, commodity: -5, supplier: 70, capex: -20, inventory: 15 } }
  },
  sources: [
    { name: "ERP - SAP S/4HANA", detail: "Actuals to May 29, 2025", quality: 98, owner: "Finance Data" },
    { name: "Treasury System", detail: "Bank balances and exposures", quality: 97, owner: "Treasury" },
    { name: "CRM / Collections", detail: "Open invoices and collection promises", quality: 95, owner: "AR" },
    { name: "Market Data", detail: "FX, rates and commodity curves", quality: 96, owner: "Treasury" },
    { name: "Capex Tracker", detail: "Approved projects and spend phasing", quality: 94, owner: "Strategy" }
  ],
  assumptions: [
    "All figures shown in M TRY unless noted.",
    "Forecast horizon is 90 days / 13 weeks from May 31, 2025.",
    "Scenario impact is linearized for demo clarity; production model would use segmented driver models.",
    "Downside assumes EUR/TRY 48, DSO 78 days and collections slowing materially.",
    "Action impacts are estimated gross cash benefits before execution risk."
  ],
  dataLineage: {
    enterprise: ["ERP GL | Quality 98% | May 29", "AR / AP invoices | Quality 95% | May 29", "Orders & shipments | Quality 94% | May 28", "Inventory / production | Quality 96% | May 28", "Capex and debt schedules | Quality 94% | May 27"],
    external: ["EUR/TRY and USD/TRY rates | Quality 96% | May 29", "Interest-rate curves | Quality 96% | May 29", "Commodity prices | Quality 93% | May 28", "Sector payment signals | Quality 90% | Weekly", "Counterparty risk flags | Quality 91% | Weekly"],
    engine: ["Direct cash forecast model | FP&A owner | Weekly refresh", "Driver-based forecast layer | Finance analytics | Weekly refresh", "Customer payment behavior model | AR owner | Daily refresh", "Scenario and stress model | Treasury owner | On demand", "Anomaly and drift detection | Data office | Weekly review"],
    governance: ["Cross-entity reconciliation | Finance control | Daily", "Assumption owner sign-off | CFO office | Monthly", "Override and audit trail | Internal control | Continuous", "Weekly drift monitoring | Finance analytics | Weekly", "Decision log and action ownership | CFO office | Continuous"],
    cockpit: ["Base / upside / downside view | Executive view | Real time", "Risk heat map | Treasury and FP&A | Daily", "Variance explanation | AI assistant | On demand", "Action levers | Owner workflow | Weekly", "Source lineage and data quality | Data office | Daily"]
  }
};

const state = {
  activeSection: "overview",
  theme: "light",
  scenarioName: "base",
  scenario: { ...demoData.scenarioPresets.base.values }
};

const baseColors = {
  navy: "--navy",
  gold: "--gold",
  red: "--red",
  green: "--green",
  blue: "--blue",
  orange: "--orange",
  muted: "--muted",
  line: "--line",
  surface: "--surface",
  soft: "--surface-soft",
  text: "--text"
};

function cssVar(name) {
  return getComputedStyle(document.body).getPropertyValue(name).trim();
}

function color(key) {
  return cssVar(baseColors[key] || key);
}

function formatNumber(value, digits = 0) {
  return Number(value).toLocaleString("en-US", {
    minimumFractionDigits: digits,
    maximumFractionDigits: digits
  });
}

function formatM(value, options = {}) {
  const abs = Math.abs(value);
  const unit = options.unit === false ? "" : "M";
  const sign = value < 0 ? "-" : options.signed && value > 0 ? "+" : "";
  return `${sign}${formatNumber(abs, options.digits || 0)}${unit}`;
}

function formatDelta(value, suffix = "M") {
  const sign = value > 0 ? "+" : value < 0 ? "-" : "";
  return `${sign}${formatNumber(Math.abs(value))}${suffix}`;
}

function toneClass(tone) {
  if (tone === "bad" || tone === "down" || tone === "High") return "down";
  if (tone === "good" || tone === "up" || tone === "Low") return "up";
  return "";
}

function setText(id, text) {
  const node = document.getElementById(id);
  if (node) node.textContent = text;
}

function svgNode(name, attrs = {}, children = []) {
  const node = document.createElementNS("http://www.w3.org/2000/svg", name);
  Object.entries(attrs).forEach(([key, value]) => {
    if (key === "text") node.textContent = value;
    else if (key === "className") node.setAttribute("class", value);
    else node.setAttribute(key, value);
  });
  children.forEach(child => node.appendChild(child));
  return node;
}

function clear(el) {
  if (el) el.innerHTML = "";
}

function getChartSize(el, fallbackHeight = 280) {
  const rect = el.getBoundingClientRect();
  const viewportWidth = Math.max(320, window.innerWidth || 720);
  const minChartWidth = Math.min(480, viewportWidth - 48);
  const width = Math.max(minChartWidth, rect.width || el.clientWidth || 720);
  const minHeight = parseInt(getComputedStyle(el).minHeight, 10);
  const height = Math.max(fallbackHeight, minHeight || fallbackHeight);
  return { width, height };
}

function scaleLinear(domainMin, domainMax, rangeMin, rangeMax) {
  const span = domainMax - domainMin || 1;
  return value => rangeMax - ((value - domainMin) / span) * (rangeMax - rangeMin);
}

function xScale(count, left, right) {
  const span = Math.max(1, count - 1);
  return index => left + (index / span) * (right - left);
}

function pathFromValues(values, x, y) {
  let d = "";
  let drawing = false;
  values.forEach((value, index) => {
    if (value === null || value === undefined || Number.isNaN(value)) {
      drawing = false;
      return;
    }
    d += `${drawing ? "L" : "M"} ${x(index).toFixed(1)} ${y(value).toFixed(1)} `;
    drawing = true;
  });
  return d.trim();
}

function drawLineChart(id, labels, series, options = {}) {
  const el = document.getElementById(id);
  if (!el) return;
  clear(el);
  const { width, height } = getChartSize(el, options.height || 280);
  const margin = { top: 32, right: 48, bottom: 48, left: 58 };
  const plotW = width - margin.left - margin.right;
  const plotH = height - margin.top - margin.bottom;
  const allValues = series.flatMap(s => s.values).filter(v => v !== null && v !== undefined);
  if (options.band) {
    allValues.push(...options.band.upper.filter(v => v !== null && v !== undefined), ...options.band.lower.filter(v => v !== null && v !== undefined));
  }
  const min = options.min ?? Math.min(0, ...allValues);
  const max = options.max ?? Math.max(...allValues) * 1.08;
  const x = xScale(labels.length, margin.left, margin.left + plotW);
  const y = scaleLinear(min, max, margin.top, margin.top + plotH);
  const svg = svgNode("svg", { viewBox: `0 0 ${width} ${height}`, role: "img" });

  for (let i = 0; i <= 4; i += 1) {
    const gy = margin.top + (plotH / 4) * i;
    const value = max - ((max - min) / 4) * i;
    svg.appendChild(svgNode("line", { x1: margin.left, y1: gy, x2: margin.left + plotW, y2: gy, className: "grid-line" }));
    svg.appendChild(svgNode("text", { x: 10, y: gy + 4, className: "axis text", text: formatNumber(value) }));
  }

  if (options.band) {
    const upper = options.band.upper;
    const lower = options.band.lower;
    let d = "";
    upper.forEach((value, index) => {
      if (value === null) return;
      d += `${d === "" ? "M" : "L"} ${x(index).toFixed(1)} ${y(value).toFixed(1)} `;
    });
    lower.slice().reverse().forEach((value, revIndex) => {
      const index = lower.length - 1 - revIndex;
      if (value === null) return;
      d += `L ${x(index).toFixed(1)} ${y(value).toFixed(1)} `;
    });
    svg.appendChild(svgNode("path", { d: `${d}Z`, className: "line-band" }));
  }

  labels.forEach((label, index) => {
    const tx = x(index);
    svg.appendChild(svgNode("text", { x: tx, y: height - 14, "text-anchor": "middle", className: "axis text", text: label }));
  });

  series.forEach(item => {
    const d = pathFromValues(item.values, x, y);
    svg.appendChild(svgNode("path", {
      d,
      fill: "none",
      stroke: item.color,
      "stroke-width": item.width || 3,
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-dasharray": item.dashed ? "6 6" : "0"
    }));
    item.values.forEach((value, index) => {
      if (value === null || value === undefined) return;
      svg.appendChild(svgNode("circle", { cx: x(index), cy: y(value), r: item.dot ? 3.2 : 0, fill: item.color }));
    });
    if (item.labelLast) {
      const lastIndex = item.values.map(v => v !== null && v !== undefined).lastIndexOf(true);
      const lastValue = item.values[lastIndex];
      svg.appendChild(svgNode("text", {
        x: Math.min(width - 8, x(lastIndex) + 10),
        y: y(lastValue) + 4,
        fill: item.color,
        "font-weight": "800",
        "font-size": "12",
        text: item.labelLast
      }));
    }
  });

  if (options.legend !== false) {
    let legendX = margin.left;
    series.forEach(item => {
      svg.appendChild(svgNode("line", { x1: legendX, y1: 16, x2: legendX + 18, y2: 16, stroke: item.color, "stroke-width": 3, "stroke-dasharray": item.dashed ? "5 5" : "0" }));
      svg.appendChild(svgNode("text", { x: legendX + 24, y: 20, className: "legend text", text: item.name }));
      legendX += item.name.length * 7 + 58;
    });
  }

  el.appendChild(svg);
}

function drawWaterfall(id, items) {
  const el = document.getElementById(id);
  if (!el) return;
  clear(el);
  const { width, height } = getChartSize(el, 300);
  const margin = { top: 32, right: 24, bottom: 60, left: 58 };
  const plotW = width - margin.left - margin.right;
  const plotH = height - margin.top - margin.bottom;
  const runningValues = [];
  let running = items[0].value;
  items.forEach((item, index) => {
    if (index === 0 || item.type === "total") runningValues.push(item.value);
    else {
      running += item.value;
      runningValues.push(running);
    }
  });
  const max = Math.max(...runningValues, ...items.map(i => i.value), 0) * 1.18;
  const min = Math.min(0, ...runningValues, ...items.map(i => i.value)) * 1.2;
  const y = scaleLinear(min, max, margin.top, margin.top + plotH);
  const barW = Math.min(64, plotW / (items.length * 1.75));
  const gap = (plotW - items.length * barW) / (items.length - 1);
  const svg = svgNode("svg", { viewBox: `0 0 ${width} ${height}` });

  for (let i = 0; i <= 4; i += 1) {
    const gy = margin.top + (plotH / 4) * i;
    const value = max - ((max - min) / 4) * i;
    svg.appendChild(svgNode("line", { x1: margin.left, y1: gy, x2: margin.left + plotW, y2: gy, className: "grid-line" }));
    svg.appendChild(svgNode("text", { x: 10, y: gy + 4, className: "axis text", text: formatNumber(value) }));
  }

  running = items[0].value;
  items.forEach((item, index) => {
    const x = margin.left + index * (barW + gap);
    const start = index === 0 || item.type === "total" ? 0 : running;
    const end = index === 0 || item.type === "total" ? item.value : running + item.value;
    const y1 = y(Math.max(start, end));
    const y2 = y(Math.min(start, end));
    const fill = item.type === "total" ? color("navy") : item.value >= 0 ? color("green") : color("red");
    svg.appendChild(svgNode("rect", { x, y: y1, width: barW, height: Math.max(3, y2 - y1), rx: 2, fill }));
    svg.appendChild(svgNode("text", {
      x: x + barW / 2,
      y: y1 - 8,
      "text-anchor": "middle",
      "font-size": "12",
      "font-weight": "800",
      fill: color("text"),
      text: item.value < 0 ? `(${formatNumber(Math.abs(item.value))})` : formatNumber(item.value)
    }));
    svg.appendChild(svgNode("text", { x: x + barW / 2, y: height - 22, "text-anchor": "middle", className: "axis text", text: item.label }));
    if (index !== 0 && item.type !== "total") running += item.value;
  });

  el.appendChild(svg);
}

function drawHorizontalBars(id, bars, options = {}) {
  const el = document.getElementById(id);
  if (!el) return;
  clear(el);
  const { width, height } = getChartSize(el, options.height || 230);
  const margin = { top: 18, right: 44, bottom: 32, left: options.left || 130 };
  const plotW = width - margin.left - margin.right;
  const rowH = (height - margin.top - margin.bottom) / bars.length;
  const maxAbs = options.maxAbs ?? Math.max(...bars.map(b => Math.abs(b.value)), 1);
  const zeroX = margin.left + plotW / 2;
  const svg = svgNode("svg", { viewBox: `0 0 ${width} ${height}` });
  svg.appendChild(svgNode("line", { x1: zeroX, y1: margin.top - 6, x2: zeroX, y2: height - margin.bottom + 6, stroke: color("muted"), "stroke-width": 1 }));

  bars.forEach((bar, index) => {
    const y = margin.top + index * rowH + rowH * 0.25;
    const w = Math.abs(bar.value) / maxAbs * (plotW / 2 - 8);
    const x = bar.value >= 0 ? zeroX : zeroX - w;
    const fill = bar.value >= 0 ? color("green") : color("red");
    svg.appendChild(svgNode("text", { x: 8, y: y + 15, className: "bar-label", text: bar.label }));
    svg.appendChild(svgNode("rect", { x, y, width: Math.max(2, w), height: Math.max(8, rowH * 0.5), rx: 2, fill }));
    svg.appendChild(svgNode("text", {
      x: bar.value >= 0 ? x + w + 5 : x - 5,
      y: y + 14,
      "text-anchor": bar.value >= 0 ? "start" : "end",
      fill,
      "font-size": "11",
      "font-weight": "800",
      text: formatDelta(bar.value)
    }));
  });
  el.appendChild(svg);
}

function renderHeatmap(id, rows, columns, maxValue, mode = "aging") {
  const table = document.getElementById(id);
  if (!table) return;
  const head = `<thead><tr><th>${mode === "risk" ? "Driver" : "Aging Bucket"}</th>${columns.map(c => `<th>${c}</th>`).join("")}</tr></thead>`;
  const body = rows.map(row => {
    const cells = row.values.map((value, index) => {
      const intensity = Math.min(1, Math.abs(value) / maxValue);
      const isBad = mode === "risk" || index > 1;
      const rgb = isBad ? "214,75,66" : "39,131,92";
      return `<td style="background: rgba(${rgb}, ${0.12 + intensity * 0.55});">${value}</td>`;
    }).join("");
    return `<tr><td>${row.label}</td>${cells}</tr>`;
  }).join("");
  table.innerHTML = `${head}<tbody>${body}</tbody>`;
}

function renderKpis(id, cards) {
  const container = document.getElementById(id);
  if (!container) return;
  container.innerHTML = cards.map(card => `
    <article class="kpi-card ${card.alert ? "alert" : ""}">
      <div class="kpi-top"><span>${card.title}</span><svg><use href="#${card.icon || "i-trend"}"></use></svg></div>
      <strong class="${card.valueTone || ""}">${card.value}${card.unit ? ` <small>${card.unit}</small>` : ""}</strong>
      <p class="${card.deltaTone || ""}">${card.delta}</p>
      <em>${card.note}</em>
    </article>
  `).join("");
}

function renderSourceGrid(id, sources) {
  const node = document.getElementById(id);
  if (!node) return;
  node.innerHTML = sources.map(source => `
    <span>${source.name}<em>${source.detail} | Q${source.quality}% | ${source.owner}</em></span>
  `).join("");
}

function renderActionList(id, actions) {
  const node = document.getElementById(id);
  if (!node) return;
  node.innerHTML = actions.map(action => `
    <div><b>${action.rank}</b><span>${action.action}</span><strong>${formatDelta(action.impact)}</strong></div>
  `).join("");
}

function renderActionRows(id, actions, compact = true) {
  const node = document.getElementById(id);
  if (!node) return;
  node.innerHTML = actions.map(action => `
    <tr>
      <td>${action.action}</td>
      <td>${compact ? action.owner : formatDelta(action.impact)}</td>
      <td>${compact ? action.timing : action.owner}</td>
      <td><span class="badge ${badgeClass(action.status)}">${compact ? action.status : action.priority}</span></td>
    </tr>
  `).join("");
}

function badgeClass(value) {
  if (value === "High") return "bad";
  if (value === "Medium" || value === "In Progress" || value === "Pending") return "warn";
  if (value === "Approved" || value === "Low" || value === "OK") return "good";
  return "neutral";
}

function renderMeta() {
  const { meta } = demoData;
  setText("filterEntity", meta.entity);
  setText("filterPeriod", meta.period);
  setText("filterCurrency", meta.currency);
  setText("filterScenario", demoData.scenarioPresets[state.scenarioName].label);
  setText("sidebarRefresh", meta.refreshDate);
  setText("sidebarQuality", `Live data quality ${meta.dataQuality}%`);
  setText("demoDisclaimer", meta.disclaimer);
  setText("scenarioRunNote", `Last run: ${meta.scenarioRunTime}`);
}

function renderStaticData() {
  renderMeta();
  const moneyUnit = demoData.meta.unit;
  renderKpis("overviewKpis", [
    { title: "Net Cash Forecast (90D / 13W)", value: formatNumber(demoData.overview.netCashForecast90), unit: moneyUnit, delta: `${formatDelta(demoData.overview.forecastDelta)} vs prior forecast`, deltaTone: "up", note: demoData.meta.forecastPeriod, icon: "i-trend" },
    { title: "Cash Position Today", value: formatNumber(demoData.overview.cashPosition), unit: moneyUnit, delta: `${formatDelta(demoData.overview.cashDeltaVsPriorMonth)} vs Apr 30`, deltaTone: "up", note: "Total cash and equivalents", icon: "i-coins" },
    { title: "Liquidity Coverage", value: `${demoData.thresholds.baseLiquidityCoverage.toFixed(2)}x`, delta: `Threshold ${demoData.thresholds.minimumCash.toLocaleString("en-US")}M`, deltaTone: "up", note: "Base case coverage", icon: "i-shield" },
    { title: "Funding Need (12M)", value: formatNumber(demoData.overview.fundingNeed12m), unit: moneyUnit, delta: `${formatDelta(demoData.overview.fundingNeedDelta)} vs prior`, deltaTone: "down", note: "Jun 2025 - May 2026", icon: "i-wallet" },
    { title: "Risk Alerts", value: `${demoData.risk.alerts.length}`, delta: `${demoData.risk.alerts.filter(a => a.priority === "High").length} high priority`, deltaTone: "down", note: demoData.overview.topRiskDetail, icon: "i-alert", alert: true }
  ]);
  renderKpis("forecastKpis", [
    { title: "90-Day / 13-Week Forecast", value: formatNumber(demoData.overview.netCashForecast90), unit: moneyUnit, delta: `${formatDelta(demoData.overview.forecastDelta)} vs prior forecast`, deltaTone: "up", note: demoData.meta.forecastPeriod, icon: "i-trend" },
    { title: "Cash Balance", value: formatNumber(demoData.overview.cashPosition), unit: moneyUnit, delta: `${formatDelta(demoData.overview.cashDeltaVsPriorMonth)} vs Apr 30`, deltaTone: "up", note: "May 31, 2025", icon: "i-coins" },
    { title: "Liquidity Coverage", value: `${demoData.thresholds.baseLiquidityCoverage.toFixed(2)}x`, delta: "Above management threshold", deltaTone: "up", note: "90-day base case", icon: "i-shield" },
    { title: "Top Risk", value: "FX + DSO", delta: "Medium risk", deltaTone: "", note: "Scenario-sensitive driver pair", icon: "i-alert", alert: true },
    { title: "Working Capital", value: formatNumber(demoData.overview.workingCapital), unit: moneyUnit, delta: `${formatDelta(demoData.overview.workingCapitalRelease)} release opportunity`, deltaTone: "up", note: "Net working capital base", icon: "i-cycle" }
  ]);
  renderKpis("workingKpis", [
    { title: "Working Capital Ratio", value: formatNumber(demoData.workingCapital.ratio), unit: moneyUnit, delta: `+${demoData.workingCapital.ratioDeltaPct}% vs budget`, deltaTone: "up", note: "YTD", icon: "i-cycle" },
    { title: "DSO", value: `${demoData.workingCapital.dso} days`, delta: `+${demoData.workingCapital.dso - demoData.workingCapital.dsoTarget} vs target`, deltaTone: "down", note: "High priority", icon: "i-alert", alert: true },
    { title: "DPO", value: `${demoData.workingCapital.dpo} days`, delta: `+${demoData.workingCapital.dpoDelta} days`, deltaTone: "up", note: "Supplier-term opportunity", icon: "i-bank" },
    { title: "Inventory Days", value: `${demoData.workingCapital.inventoryDays} days`, delta: `+${demoData.workingCapital.inventoryDeltaPct}% vs last month`, deltaTone: "down", note: "Watch list", icon: "i-data" }
  ]);

  setText("bridgeInsight", "Key drivers: collections and FX improve the forecast, partly offset by vendor payments, capex timing and inventory build.");
  document.getElementById("managementTakeaways").innerHTML = [
    `Base ${demoData.meta.horizonLabel} forecast ends at ${formatM(demoData.overview.netCashForecast90)}.`,
    `Downside scenario reaches ${formatM(demoData.scenarioDetails[0].downside)} ending cash if FX and DSO risks materialize.`,
    `Top five actions identify ${formatM(demoData.actions.reduce((sum, action) => sum + action.impact, 0))} gross cash impact.`,
    "All covenants remain compliant in the base case; downside liquidity requires active management."
  ].map(item => `<li>${item}</li>`).join("");
  const runway = document.getElementById("runwayDonut");
  if (runway) {
    runway.style.setProperty("--value", demoData.thresholds.downsideRunwayDays);
    runway.querySelector("strong").textContent = demoData.thresholds.downsideRunwayDays;
  }
  setText("runwayDate", demoData.thresholds.downsideRunwayDate);
  setText("minimumCashThreshold", `${formatM(demoData.thresholds.minimumCash)} ${demoData.meta.currency}`);
  setText("runwayNote", "Downside remains manageable only if priority actions start within 15 days.");
  setText("covenantPeriod", demoData.meta.period);
  document.getElementById("covenantRows").innerHTML = demoData.covenants.map(row => `
    <tr><td>${row.covenant}</td><td>${row.actual}</td><td>${row.limit}</td><td class="up">${row.headroom}</td><td><span class="badge good">${row.status}</span></td></tr>
  `).join("");
  document.getElementById("overviewActionRows").innerHTML = demoData.actions.slice(0, 4).map(action => `
    <tr><td>${action.action}</td><td>${action.owner}</td><td>${action.timing}</td><td><span class="badge ${badgeClass(action.status)}">${action.status}</span></td></tr>
  `).join("");
  const buRows = demoData.businessUnits.map(bu => `<tr><td>${bu.name}</td><td>${formatNumber(bu.cash)}</td><td class="${bu.delta >= 0 ? "up" : "down"}">${formatDelta(bu.delta, "")}</td></tr>`);
  const buTotal = demoData.businessUnits.reduce((sum, bu) => sum + bu.cash, 0);
  const buDelta = demoData.businessUnits.reduce((sum, bu) => sum + bu.delta, 0);
  buRows.push(`<tr><td><strong>Total</strong></td><td><strong>${formatNumber(buTotal)}</strong></td><td class="up">${formatDelta(buDelta, "")}</td></tr>`);
  document.getElementById("businessUnitRows").innerHTML = buRows.join("");

  renderForecastTables();
  renderTreasuryTables();
  renderWorkingTables();
  renderRiskTables();
  renderAssistantSidePanel();
  renderDecisionLog();
  renderDataLineage();
}

function renderForecastTables() {
  document.getElementById("forecastScenarioTable").innerHTML = `
    <thead><tr><th>Metric</th><th>Base</th><th>Downside</th><th>Upside</th><th>Delta Down</th></tr></thead>
    <tbody>${demoData.scenarioDetails.map(row => `
      <tr><td>${row.metric}</td><td>${formatNumber(row.base)}</td><td>${formatNumber(row.downside)}</td><td>${formatNumber(row.upside)}</td><td class="down">${formatDelta(row.downside - row.base, "")}</td></tr>
    `).join("")}</tbody>
  `;
  document.getElementById("forecastDrivers").innerHTML = demoData.forecastBridge.filter(item => !item.type).map(item => `
    <div><span>${item.label}</span><strong class="${item.value >= 0 ? "up" : "down"}">${formatDelta(item.value)}</strong><em>${item.explanation}</em></div>
  `).join("");
  renderSourceGrid("forecastSources", demoData.sources);
  renderActionList("forecastActions", demoData.actions);
}

function renderTreasuryTables() {
  document.getElementById("fundingCalendar").innerHTML = demoData.treasury.fundingCalendar.map(item => `
    <div><span>${item.date}</span><strong>${item.item}</strong><em class="${item.priority === "High" ? "high" : "medium"}">${formatM(item.amount)}</em></div>
  `).join("");
  document.getElementById("treasuryMetrics").innerHTML = demoData.treasury.metrics.map(metric => `
    <div><span>${metric.label}</span><strong>${metric.value}</strong><em class="${metric.tone}">${metric.delta}</em></div>
  `).join("");
}

function renderWorkingTables() {
  document.getElementById("payablesTable").innerHTML = `
    <thead><tr><th>Counter</th><th>0-30</th><th>31-60</th><th>61-90</th><th>90+</th><th>Total</th></tr></thead>
    <tbody>${demoData.workingCapital.payables.map(row => `
      <tr><td>${row.total ? `<strong>${row.counter}</strong>` : row.counter}</td>${row.values.map(value => `<td>${row.total ? `<strong>${formatNumber(value, 1)}</strong>` : formatNumber(value, 1)}</td>`).join("")}</tr>
    `).join("")}</tbody>
  `;
  document.getElementById("workingActionsTable").innerHTML = `
    <thead><tr><th>Action</th><th>Impact</th><th>Owner</th><th>Priority</th></tr></thead>
    <tbody>${demoData.actions.slice(0, 4).map(action => `
      <tr><td>${action.action}</td><td class="up">${formatDelta(action.impact)}</td><td>${action.owner}</td><td><span class="badge ${badgeClass(action.priority)}">${action.priority}</span></td></tr>
    `).join("")}</tbody>
  `;
}

function renderRiskTables() {
  document.getElementById("riskAlerts").innerHTML = demoData.risk.alerts.map(alert => `
    <div><svg><use href="#i-alert"></use></svg><span>${alert.text}</span><b>${alert.priority}</b></div>
  `).join("");
  document.getElementById("earlySignals").innerHTML = demoData.risk.signals.map(signal => `
    <span><b>${signal.label}</b><em class="${signal.tone}">${signal.value}</em></span>
  `).join("");
}

function renderAssistantSidePanel() {
  document.getElementById("assistantExplanation").textContent =
    `Base forecast ends at ${formatM(demoData.overview.netCashForecast90)} over ${demoData.meta.horizonLabel}. The main deterioration risks are customer DSO, FX depreciation, inventory build and capex timing.`;
  renderSourceGrid("assistantSources", demoData.sources.slice(0, 4));
}

function renderDecisionLog() {
  document.getElementById("decisionLogRows").innerHTML = demoData.actions.map(action => `
    <tr>
      <td>${demoData.meta.refreshDate.split(" ")[0]} ${demoData.meta.refreshDate.split(" ")[1]}</td>
      <td>${action.detail}</td>
      <td class="up">${formatDelta(action.impact)}</td>
      <td>${action.owner}</td>
      <td>${action.timing}</td>
      <td><span class="badge ${badgeClass(action.priority)}">${action.priority}</span></td>
      <td><span class="badge ${badgeClass(action.status)}">${action.status}</span></td>
    </tr>
  `).join("");
}

function renderDataLineage() {
  const columns = [
    ["enterpriseDataColumn", "Enterprise Data", demoData.dataLineage.enterprise],
    ["externalDataColumn", "External & Risk Data", demoData.dataLineage.external],
    ["engineDataColumn", "CFO Decision Engine", demoData.dataLineage.engine],
    ["governanceDataColumn", "Governance", demoData.dataLineage.governance],
    ["cockpitDataColumn", "CFO Cockpit", demoData.dataLineage.cockpit]
  ];
  columns.forEach(([id, title, items]) => {
    const node = document.getElementById(id);
    if (!node) return;
    node.innerHTML = `<h2>${title}</h2>${items.map(item => {
      const [name, quality, refresh] = item.split(" | ");
      return `<span>${name}${quality ? `<em>${quality}${refresh ? ` | ${refresh}` : ""}</em>` : ""}</span>`;
    }).join("")}`;
  });
  renderSourceGrid("dataSources", demoData.sources);
  const assumptions = document.getElementById("dataAssumptions");
  if (assumptions) {
    assumptions.innerHTML = demoData.assumptions.map(item => `<li>${item}</li>`).join("");
  }
  setText("dataRefreshSummary", `Last refresh ${demoData.meta.refreshDate}`);
  const quality = document.getElementById("dataQualitySummary");
  if (quality) {
    quality.innerHTML = [
      ["Overall quality", `${demoData.meta.dataQuality}%`, "Weighted across source systems"],
      ["Source checks", `${demoData.sources.length}`, "ERP, treasury, CRM, market and capex"],
      ["Forecast horizon", demoData.meta.horizonLabel, demoData.meta.forecastPeriod]
    ].map(([label, value, note]) => `<div><span>${label}</span><strong>${value}</strong><em>${note}</em></div>`).join("");
  }
}

function scenarioImpact(control) {
  const value = state.scenario[control.key];
  const delta = value - control.base;
  return delta * control.goodDirection * control.impactPerUnit;
}

function scenarioComputation() {
  const impacts = demoData.scenarioControls.map(control => ({
    label: control.label,
    value: scenarioImpact(control),
    current: state.scenario[control.key],
    base: control.base,
    suffix: control.suffix
  }));
  const totalImpact = impacts.reduce((sum, item) => sum + item.value, 0);
  const baseCash = demoData.overview.netCashForecast90;
  const endCash = baseCash + totalImpact;
  const minCash = demoData.thresholds.minimumCash + (totalImpact >= 0 ? totalImpact * 0.78 : totalImpact * 0.9);
  const freeCashFlow = demoData.scenarioDetails.find(row => row.metric === "Free Cash Flow").base + totalImpact * 0.62;
  const liquidity = Math.max(-0.6, demoData.thresholds.baseLiquidityCoverage + totalImpact / 2100);
  const release = Math.max(0, impacts.filter(item => ["Supplier Terms (DPO)", "Capex Shift vs Plan", "Inventory Reduction vs Plan"].includes(item.label)).reduce((sum, item) => sum + Math.max(0, item.value), 0));
  const risk = endCash < demoData.thresholds.minimumCash || liquidity < 1.5 ? "High" : liquidity < 2.8 ? "Medium" : "Low";
  const runwayDays = Math.max(24, Math.round(112 + totalImpact / 140));
  return { impacts, totalImpact, baseCash, endCash, minCash, freeCashFlow, liquidity, release, risk, runwayDays };
}

function scenarioValues(result) {
  const labels = ["May", "W2", "W4", "W6", "W8", "W10", "W12", "W13"];
  const actual = [demoData.overview.cashPosition, null, null, null, null, null, null, null];
  const base = demoData.forecastBalance.base;
  const downside = demoData.forecastBalance.downside;
  const upside = demoData.forecastBalance.upside;
  const current = base.map((value, index) => {
    if (index === 0) return value;
    const progress = index / (base.length - 1);
    return value + result.totalImpact * progress;
  });
  return { labels, actual, base, downside, upside, current };
}

function updateScenario() {
  const result = scenarioComputation();
  setText("filterScenario", demoData.scenarioPresets[state.scenarioName]?.label || "Custom Scenario");
  setText("impactCash", formatNumber(result.endCash));
  const cashDelta = result.endCash - result.baseCash;
  const cashDeltaNode = document.getElementById("impactCashDelta");
  cashDeltaNode.textContent = `${formatDelta(cashDelta, "")} vs base`;
  cashDeltaNode.className = cashDelta >= 0 ? "up" : "down";
  setText("impactLiquidity", `${result.liquidity.toFixed(2)}x`);
  const liquidityDeltaNode = document.getElementById("impactLiquidityDelta");
  liquidityDeltaNode.textContent = `${(result.liquidity - demoData.thresholds.baseLiquidityCoverage).toFixed(2)}x vs base`;
  liquidityDeltaNode.className = result.liquidity >= demoData.thresholds.baseLiquidityCoverage ? "up" : "down";
  setText("impactRelease", formatNumber(result.release));
  const releaseDeltaNode = document.getElementById("impactReleaseDelta");
  releaseDeltaNode.textContent = `${formatDelta(result.release, "")} controllable cash release`;
  releaseDeltaNode.className = result.release > 0 ? "up" : "";
  setText("impactRisk", result.risk);
  const riskDeltaNode = document.getElementById("impactRiskDelta");
  riskDeltaNode.textContent = `${result.runwayDays} days runway under current scenario`;
  riskDeltaNode.className = result.risk === "High" ? "down" : "up";

  demoData.scenarioControls.forEach(control => {
    const value = state.scenario[control.key];
    const valueNode = document.querySelector(`[data-value-for="${control.key}"]`);
    const deltaNode = document.querySelector(`[data-delta-for="${control.key}"]`);
    if (valueNode) valueNode.textContent = `${formatNumber(value, control.step < 1 ? 1 : 0)}${control.suffix}`;
    if (deltaNode) {
      const delta = value - control.base;
      deltaNode.textContent = `${delta >= 0 ? "+" : ""}${formatNumber(delta, control.step < 1 ? 1 : 0)}${control.suffix}`;
      deltaNode.className = delta * control.goodDirection >= 0 ? "up" : "down";
    }
  });

  renderScenarioCharts(result);
}

function renderScenarioCharts(result = scenarioComputation()) {
  const values = scenarioValues(result);
  const showBand = document.getElementById("bandToggle")?.checked ?? true;
  drawLineChart("scenarioLabChart", values.labels, [
    { name: "Actual", values: values.actual, color: color("muted"), width: 3, dot: true },
    { name: "Base Case", values: values.base, color: color("navy"), dashed: true, width: 3, labelLast: formatNumber(demoData.overview.netCashForecast90) },
    { name: "Current Scenario", values: values.current, color: color("gold"), width: 3, dot: true, labelLast: formatNumber(result.endCash) },
    { name: "Upside", values: values.upside, color: color("green"), dashed: true, width: 2, labelLast: formatNumber(demoData.scenarioDetails[0].upside) },
    { name: "Downside", values: values.downside, color: color("red"), dashed: true, width: 2, labelLast: `(${formatNumber(Math.abs(demoData.scenarioDetails[0].downside))})` }
  ], {
    min: -2500,
    max: 8500,
    band: showBand ? {
      upper: values.current.map(v => v === null ? null : v + 950),
      lower: values.current.map(v => v === null ? null : v - 950)
    } : null
  });
  drawHorizontalBars("contributionChart", result.impacts.map(item => ({ label: item.label, value: Math.round(item.value) })), { maxAbs: 2800, left: 138 });
  renderScenarioTable(result);
  renderRecommendations(result);
}

function renderScenarioTable(result) {
  const table = document.getElementById("scenarioTable");
  if (!table) return;
  table.innerHTML = `
    <thead><tr><th>Metric</th><th>Base</th><th>Current</th><th>Upside</th><th>Delta</th></tr></thead>
    <tbody>
      <tr><td>Ending Cash</td><td>${formatNumber(result.baseCash)}</td><td>${formatNumber(result.endCash)}</td><td>${formatNumber(demoData.scenarioDetails[0].upside)}</td><td class="${result.totalImpact >= 0 ? "up" : "down"}">${formatDelta(result.totalImpact, "")}</td></tr>
      <tr><td>Minimum Cash</td><td>${formatNumber(demoData.thresholds.minimumCash)}</td><td>${formatNumber(result.minCash)}</td><td>${formatNumber(demoData.scenarioDetails[1].upside)}</td><td class="${result.minCash >= demoData.thresholds.minimumCash ? "up" : "down"}">${formatDelta(result.minCash - demoData.thresholds.minimumCash, "")}</td></tr>
      <tr><td>Free Cash Flow</td><td>${formatNumber(demoData.scenarioDetails[4].base)}</td><td>${formatNumber(result.freeCashFlow)}</td><td>${formatNumber(demoData.scenarioDetails[4].upside)}</td><td class="${result.freeCashFlow >= demoData.scenarioDetails[4].base ? "up" : "down"}">${formatDelta(result.freeCashFlow - demoData.scenarioDetails[4].base, "")}</td></tr>
      <tr><td>Liquidity Coverage</td><td>${demoData.thresholds.baseLiquidityCoverage.toFixed(2)}x</td><td>${result.liquidity.toFixed(2)}x</td><td>3.86x</td><td class="${result.liquidity >= demoData.thresholds.baseLiquidityCoverage ? "up" : "down"}">${(result.liquidity - demoData.thresholds.baseLiquidityCoverage).toFixed(2)}x</td></tr>
      <tr><td>Risk Level</td><td>Medium</td><td>${result.risk}</td><td>Low</td><td class="${result.risk === "High" ? "down" : "up"}">${result.runwayDays} days</td></tr>
    </tbody>
  `;
}

function renderRecommendations(result) {
  const box = document.getElementById("recommendations");
  if (!box) return;
  const ranked = result.risk === "High" ? demoData.actions.slice(0, 4) : demoData.actions.slice(0, 3);
  box.innerHTML = ranked.map(action => `
    <div>
      <span><strong>${action.action}</strong><p>${action.detail}. Est. impact ${formatDelta(action.impact)}.</p></span>
      <strong>${action.priority}</strong>
    </div>
  `).join("");
}

function renderSliders() {
  const holder = document.getElementById("sliders");
  if (!holder) return;
  holder.innerHTML = demoData.scenarioControls.map(control => `
    <label class="slider-control">
      <span class="slider-top">
        <strong>${control.label}</strong>
        <span data-value-for="${control.key}">${formatNumber(state.scenario[control.key], control.step < 1 ? 1 : 0)}${control.suffix}</span>
      </span>
      <input type="range" min="${control.min}" max="${control.max}" step="${control.step}" value="${state.scenario[control.key]}" data-scenario-key="${control.key}">
      <span class="slider-meta"><em>${control.min}${control.suffix}</em><em data-delta-for="${control.key}"></em><em>${control.max}${control.suffix}</em></span>
    </label>
  `).join("");
  holder.querySelectorAll("input[type='range']").forEach(input => {
    input.addEventListener("input", event => {
      const key = event.target.dataset.scenarioKey;
      state.scenario[key] = Number(event.target.value);
      state.scenarioName = "custom";
      updateScenario();
    });
  });
  renderScenarioPresets();
  updateScenario();
}

function renderScenarioPresets() {
  const node = document.getElementById("scenarioPresets");
  if (!node) return;
  node.innerHTML = Object.entries(demoData.scenarioPresets).map(([key, preset]) => `
    <button class="tiny-button ${state.scenarioName === key ? "active" : ""}" data-preset="${key}">${preset.label}</button>
  `).join("");
  node.querySelectorAll("[data-preset]").forEach(button => {
    button.addEventListener("click", () => applyScenarioPreset(button.dataset.preset));
  });
}

function applyScenarioPreset(name) {
  const preset = demoData.scenarioPresets[name];
  if (!preset) return;
  state.scenarioName = name;
  state.scenario = { ...preset.values };
  renderSliders();
}

function renderOverview() {
  drawWaterfall("bridgeChart", demoData.forecastBridge);
  drawLineChart("scenarioChart", demoData.scenarioForecast.labels, [
    { name: "Upside", values: demoData.scenarioForecast.upside, color: color("green"), dot: true, labelLast: formatNumber(demoData.scenarioDetails[0].upside) },
    { name: "Base", values: demoData.scenarioForecast.base, color: color("navy"), dot: true, labelLast: formatNumber(demoData.overview.netCashForecast90) },
    { name: "Downside", values: demoData.scenarioForecast.downside, color: color("red"), dashed: true, labelLast: `(${formatNumber(Math.abs(demoData.scenarioDetails[0].downside))})` }
  ], { min: -2500, max: 8200 });
}

function renderForecast() {
  drawLineChart("cashBalanceChart", demoData.forecastBalance.labels, [
    { name: "Actual", values: demoData.forecastBalance.actual, color: color("muted"), width: 3, dot: true },
    { name: "Base Case", values: demoData.forecastBalance.base, color: color("navy"), width: 3, dot: true, labelLast: formatNumber(demoData.overview.netCashForecast90) },
    { name: "Upside", values: demoData.forecastBalance.upside, color: color("green"), dashed: true, labelLast: formatNumber(demoData.scenarioDetails[0].upside) },
    { name: "Downside", values: demoData.forecastBalance.downside, color: color("red"), dashed: true, labelLast: `(${formatNumber(Math.abs(demoData.scenarioDetails[0].downside))})` }
  ], { min: -2500, max: 8500 });
}

function renderTreasury() {
  drawLineChart("treasuryChart", demoData.treasury.liquidityLabels, [
    { name: "Available Liquidity", values: demoData.treasury.availableLiquidity, color: color("blue"), width: 3, dot: true, labelLast: formatNumber(demoData.overview.netCashForecast90) },
    { name: "Minimum Buffer", values: demoData.treasury.minimumBuffer, color: color("red"), dashed: true, labelLast: formatNumber(demoData.thresholds.minimumCash) }
  ], { min: 0, max: 8500 });
  drawHorizontalBars("fxExposureChart", demoData.treasury.fxExposure, { maxAbs: 650, left: 108 });
}

function renderWorking() {
  renderHeatmap("receivablesHeatmap", demoData.workingCapital.receivablesAging, ["1-30", "31-60", "61-90", ">90", "Risk"], 380);
  drawHorizontalBars("wcDriverChart", demoData.workingCapital.driverImpact, { maxAbs: 80, left: 124 });
}

function renderRisk() {
  drawHorizontalBars("riskDistributionChart", demoData.risk.distribution, { maxAbs: 6, left: 130 });
  renderHeatmap("riskHeatmap", demoData.risk.heatmap, ["W1", "W4", "W8", "W13"], 5, "risk");
}

function renderActions() {
  drawHorizontalBars("actionImpactChart", demoData.actions.map(action => ({ label: action.action, value: action.impact })), { maxAbs: 1200, left: 150 });
}

function renderSection(id) {
  if (id === "overview") renderOverview();
  if (id === "forecast") renderForecast();
  if (id === "treasury") renderTreasury();
  if (id === "working") renderWorking();
  if (id === "scenario") updateScenario();
  if (id === "risk") renderRisk();
  if (id === "actions") renderActions();
}

function setActiveSection(id) {
  state.activeSection = id;
  document.querySelectorAll(".section").forEach(section => section.classList.toggle("active", section.id === id));
  document.querySelectorAll(".nav-item").forEach(item => item.classList.toggle("active", item.dataset.section === id));
  requestAnimationFrame(() => renderSection(id));
}

function sourcesSummary() {
  return demoData.sources.slice(0, 4).map(source => `${source.name} (${source.detail})`).join("; ");
}

function assumptionsSummary() {
  return demoData.assumptions.slice(0, 3).join(" ");
}

function botReply(prompt) {
  const normalized = prompt.toLowerCase();
  const scenario = scenarioComputation();
  if (normalized.includes("deteriorate") || normalized.includes("weaken")) {
    const negatives = demoData.forecastBridge.filter(item => item.value < 0);
    return `<strong>CFO Decision Engine AI Assistant</strong>
      Base forecast ends at ${formatM(demoData.overview.netCashForecast90)} over ${demoData.meta.horizonLabel}. Deterioration pressure comes from ${negatives.map(item => `${item.label} ${formatM(item.value)}`).join(", ")}. Current scenario ending cash is ${formatM(scenario.endCash)} with liquidity coverage ${scenario.liquidity.toFixed(2)}x. Sources: ${sourcesSummary()}.`;
  }
  if (normalized.includes("downside") || normalized.includes("eur/try")) {
    applyScenarioPreset("downside");
    const downside = scenarioComputation();
    return `<strong>CFO Decision Engine AI Assistant</strong>
      Downside scenario applied: EUR/TRY ${state.scenario.fx}, DSO ${state.scenario.dso} days, sales ${state.scenario.sales}%, commodity ${state.scenario.commodity}%. Ending cash moves to ${formatM(downside.endCash)}, free cash flow to ${formatM(downside.freeCashFlow)} and liquidity coverage to ${downside.liquidity.toFixed(2)}x. Assumptions: ${assumptionsSummary()}`;
  }
  if (normalized.includes("action") || normalized.includes("liquidity")) {
    const totalImpact = demoData.actions.reduce((sum, action) => sum + action.impact, 0);
    return `<strong>CFO Decision Engine AI Assistant</strong>
      Recommended action stack totals ${formatM(totalImpact)} gross cash impact: ${demoData.actions.map(action => `${action.action} (${formatDelta(action.impact)}, ${action.owner}, ${action.timing})`).join("; ")}. These actions are tied to the decision log and should be governed through owner status updates.`;
  }
  return `<strong>CFO Decision Engine AI Assistant</strong>
    Current scenario ends at ${formatM(scenario.endCash)} with ${scenario.liquidity.toFixed(2)}x liquidity coverage. I would trace the question through ${sourcesSummary()} and use the active assumptions in the Scenario Lab.`;
}

function addChatMessage(type, html) {
  const log = document.getElementById("chatLog");
  if (!log) return;
  const node = document.createElement("div");
  node.className = `message ${type}`;
  node.innerHTML = html;
  log.appendChild(node);
  log.scrollTop = log.scrollHeight;
}

function initChat() {
  const log = document.getElementById("chatLog");
  if (!log) return;
  log.innerHTML = "";
  addChatMessage("assistant", `<strong>CFO Decision Engine AI Assistant</strong>Good morning. Base forecast ends at ${formatM(demoData.overview.netCashForecast90)} over ${demoData.meta.horizonLabel}. Ask for forecast deterioration, downside scenario or liquidity actions.`);
  document.querySelectorAll("[data-prompt]").forEach(button => {
    button.addEventListener("click", () => {
      const prompt = button.dataset.prompt;
      addChatMessage("user", prompt);
      addChatMessage("assistant", botReply(prompt));
    });
  });
  document.getElementById("chatForm")?.addEventListener("submit", event => {
    event.preventDefault();
    const input = document.getElementById("chatInput");
    const prompt = input.value.trim();
    if (!prompt) return;
    addChatMessage("user", prompt);
    addChatMessage("assistant", botReply(prompt));
    input.value = "";
  });
}

function initNavigation() {
  document.querySelectorAll(".nav-item").forEach(button => {
    button.addEventListener("click", () => setActiveSection(button.dataset.section));
  });
}

function initTheme() {
  document.getElementById("themeToggle")?.addEventListener("click", () => {
    state.theme = state.theme === "light" ? "dark" : "light";
    document.body.classList.toggle("dark", state.theme === "dark");
    requestAnimationFrame(() => renderSection(state.activeSection));
  });
}

function initScenarioControls() {
  renderSliders();
  document.getElementById("resetScenario")?.addEventListener("click", () => applyScenarioPreset("base"));
  document.getElementById("runScenario")?.addEventListener("click", () => updateScenario());
  document.getElementById("bandToggle")?.addEventListener("change", () => updateScenario());
}

function initResize() {
  let timeout;
  window.addEventListener("resize", () => {
    clearTimeout(timeout);
    timeout = setTimeout(() => renderSection(state.activeSection), 160);
  });
}

function boot() {
  renderStaticData();
  initNavigation();
  initTheme();
  initScenarioControls();
  initChat();
  initResize();
  renderSection("overview");
}

document.addEventListener("DOMContentLoaded", boot);
