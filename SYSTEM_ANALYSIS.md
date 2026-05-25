# CFO Decision Engine - Sistem Analizi

## 1. Sunumdan cikan ana ihtiyac

Sunumun ana problemi, finans ekiplerinin tek bir guvenilir nakit gorunumuyle karar alamamasi. Nakit tahmini sadece bir forecast cizgisi olarak degil, senaryo, risk, aciklama, aksiyon ve denetim iziyle birlikte calismali.

Temel aci noktalar:

- Gelecek 13 hafta / 90 gun icin tek ve guvenilir nakit gorunumu yok.
- AR gecikmeleri, FX oynakligi, buyuk cikislar ve capex zamanlamasi likidite surprizleri yaratiyor.
- Fonlama kararlari forecast guveni ve risk bantlariyla yeterince baglanmiyor.
- CFO icin asil deger, forecast hatasini azaltmaktan cok nakit baskisini erken gormek ve hangi aksiyonun ne kadar etki edecegini bilmek.

## 2. Gorsellerdeki dashboard tasarim mantigi

Ortak ekran dili:

- Sol navigasyon: Overview, Forecasting, Treasury, Working Capital, Risk, Scenario Lab, AI Assistant, Actions, Data.
- Ust filtreler: grup / periyot / para birimi / senaryo.
- KPI satiri: net cash forecast, cash balance, liquidity coverage, funding need, key risk.
- Orta bolum: cash forecast bridge, scenario lines, liquidity risk distribution, working capital heatmap.
- Sag veya alt bolum: management takeaway, AI assistant, recommended actions, decision log.
- Senaryo laboratuvari: FX, DSO, satis buyumesi, emtia, supplier terms, capex ve inventory slider'lari.

## 3. Hazirlanan sistem kapsamı

Bu klasorde hazirlanan prototip su modul akisini kapsar:

- Overview: CFO seviyesinde KPI'lar, cash bridge, senaryo karsilastirma, runway, covenant, aksiyon takibi ve business-unit cash pozisyonu.
- Cash Forecasting: 90 gunluk forecast, base / downside / upside senaryolari, driver detaylari, veri kaynaklari ve aksiyon onerileri.
- Treasury: likidite gorunumu, fonlama takvimi, debt / covenant KPI'lari ve FX exposure.
- Working Capital: receivables aging heatmap, payables kompozisyonu, DSO/DPO/inventory driver etkileri.
- Scenario Lab: slider tabanli what-if simulasyonu, otomatik impact summary, driver contribution ve scenario comparison.
- Risk: risk dagilimi, erken uyari sinyalleri, risk heatmap ve alert listesi.
- AI Assistant: forecast hareketini aciklayan, downside senaryo ureten ve aksiyon oneren CFO yardimcisi.
- Data & Drivers: enterprise data, external data, model factory, governance ve cockpit mimarisi.

## 4. Veri ve model mimarisi

Hedef mimari bes katmandan olusur:

1. Enterprise data: ERP GL, AR/AP, invoices, orders, inventory, capex, debt schedules.
2. External and risk data: FX, rates, inflation, commodity, sector and counterparty signals.
3. CFO Decision Engine: direct cash forecasts, driver forecasts, customer payment models, scenario models, anomaly detection.
4. Governance: reconciliation, cross-entity coherence, explainability, overrides, audit trail, drift monitoring.
5. CFO cockpit: base/upside/downside, risk heatmap, variance explanation, action levers, decision log.

## 5. Pilot basari kriterleri

- Forecast accuracy ve forecast bias iyilesmesi.
- Varyans aciklama suresinin kisalmasi.
- Senaryo uretme hizinin artmasi.
- Downside likidite pencerelerinin erken gorulmesi.
- Aksiyonlarin sahip, zaman ve tahmini etkiyle izlenmesi.
- CFO ve finance kullanicilarinin cockpit guveni ve kullanimi.

## 6. Uygulama notu

Bu teslim, statik fakat etkilesimli bir prototiptir. Gercek entegrasyon icin SAP/ERP, treasury, CRM, banka bakiyeleri ve market data kaynaklarina baglanan bir veri katmani; model servisleri; kullanici yetkilendirmesi; ve audit log gereklidir.
