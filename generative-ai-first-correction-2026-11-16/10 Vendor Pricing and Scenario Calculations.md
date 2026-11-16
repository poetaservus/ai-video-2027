# Vendor rate snapshot & video-cost scenarios
Source: Runway Dev API Pricing & Costs, https://docs.dev.runwayml.com/guides/pricing/ (official page retrieved 2026-11-16 19:46 UTC in this research session). It states 1 credit=$0.01 before tax. Listed output-only rates: Veo 3.1 no audio 20 credits/s=$0.20/s; Kling 3.0 Standard no audio 9 credits/s=$0.09/s; Gen-4 Turbo 5 credits/s=$0.05/s. Prices are API proxy rates through Runway, not model-owner direct prices or license clearance. Do not add generated audio when narration/music are mixed separately.

Illustrative 10-min model: Fully generative 420 usable motion seconds; Hybrid 180; Budget 60. Cost = usable seconds × rate ÷ acceptance yield p. USD, video output only:

|Pipeline / rate|p25%|p40%|p60%|
|Fully / Veo 3.1|$336|$210|$140|
|Hybrid / Kling 3 Std|$64.80|$40.50|$27|
|Budget / Gen-4 Turbo|$12|$7.50|$5|

These yields (25/40/60%) are sensitivity assumptions, not measured failure rates. Generated seconds at p=40%: 1,050 / 450 / 150; rejected share = 60% by assumption. Video-only cost/finished minute at p=40%: $21 / $4.05 / $0.75, respectively. These are not complete episode costs.

Same official price page lists Gen-4 Image at 5 credits per 720p image ($0.05). At an assumption of 10/30/40 final stills and 2 attempts each, still-generation spend is $1/$3/$4. This excludes narration, music/SFX, subscription minimums, taxes, FX, editing, compute/storage and provider terms. Usage-mode surcharges may apply, especially input video. Combined video+still API bill at p25/40/60: Full $337/$211/$141; Hybrid $67.80/$43.50/$30; Budget $16/$11.50/$9. Per 10-min finished minute, those are $33.70/$21.10/$14.10, $6.78/$4.35/$3.00, and $1.60/$1.15/$0.90. These omit all other episode costs. For break-even, convert USD media spend at the actual EUR/USD rate, add monthly EUR overhead and other costs, then multiply by 1,000/RPM. No FX or complete expense total is assumed. Obtain current quote and rights confirmation before production.