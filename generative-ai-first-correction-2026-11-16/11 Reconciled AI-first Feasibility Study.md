# Reconciled AI-first feasibility study

**Evidence snapshot:** official documentation retrieved 2026-11-16; other dated sources are identified below. Scenario math is illustrative, not a quote or forecast. The five root research files remain preserved unchanged in Git.

## Verdict
**Conditional pilot only; profitability is unproven.** The business model is generative-AI-first: founders own research, story, visual direction, fact checks, editing decisions and final QA. Generated video is only one means; generated stills and designed animation are not generic stock slideshows. QUALITY BEFORE QUANTITY.

## Reconciliation with the five originals
Still useful: qualitative niche screen (business cases 82/100, tech/AI 81, economics 78; analyst judgments), YPP/copyright distinctions, cross-border professional-advice gates, zero default paid promotion, cited RPM arithmetic, source/rights logs, QA, founder agreement, stop gates. Not independently measured: audience demand, niche ranking, views or RPM.

Withdraw as AI-first estimates: legacy €120/€320/€950 per-video variable budgets, €1,660 pilot cash, €610 monthly cash, 100h per episode, and €122k/€622k at €5 RPM. Those figures remain arithmetically correct for their older conventional inputs, not this production model. Keep original text intact; this dated study supersedes those assumptions only for AI-first decisions.

## Verified facts and evidence limits
Google's official Agent Platform guide documents text-to-video, image-to-video, first/last-frame and reference workflows; its Gemini Omni 1.2 Flash supports 3–15 second clips, 360p–4K and seeds. This is a Google capability snapshot, not measured quality or a guarantee that each option is available in every region/account. Veo output limits, direct price and owner terms were not verified here.

Runway Dev's live pricing page (https://docs.dev.runwayml.com/guides/pricing/, read 2026-11-16) states $0.01/credit. Published no-audio rates: Veo 3.1 $0.20/output-second, Kling 3.0 Standard $0.09/s, Gen-4 Turbo $0.05/s; Gen-4 image $0.05 at 720p. These are Runway Dev route prices, not Google/Kling direct prices or licensing statements. The page also lists Gemini Omni Flash, Wan and Seedance alternatives; rates vary by version, resolution, audio and references. No direct Kling owner terms, acceptance rates, or complete license analysis was verified. Do not assume paid API access clears monetization/copyright.

The original research's dated vendor snapshots state ElevenLabs Starter $6/month with a commercial license, and Google Cloud TTS Neural2 $16/1M characters. An 8,000-character script at that API rate is $0.128. These are 2026-11-16 snapshots from the existing plan, not re-opened in this pass; terms for exact voices/models and any 30k-credit subscription limits require provider recheck. This model cost comparison uses ElevenLabs subscription $6/month for all tiers as an estimated monthly expense; music and sound use YouTube Audio Library at $0 only when the selected track's current terms are followed. Resolve Free/Blender/Audacity are assumed $0 software fees; human edit/assembly is costed as labor, not free. Check each exact commercial-use term before launch.

## Three AI-first production tiers (10-minute finished episode)
Lean/budget: 60 usable generated-video seconds (10% of runtime) at $0.05/output-second Gen-4 Turbo; 40 final generated stills. Balanced/hybrid: 180 usable video seconds (30%) at $0.09/s Kling 3 Standard; 30 final stills. Premium/mostly generative: 420 usable video seconds (70%) at $0.20/s Veo 3.1. Remaining scenes use original generated images, diagrams and designed movement, never stock-slide montages. The chosen API route generates silent video; narration/music are separate.

Assume usable yield p=40%; rejection/unusable output share = 1−p = 60% (assumed, not sourced). Generated seconds = target usable seconds ÷ p; retries = generated seconds ÷ 5-second outputs; direct video spend = output seconds × rate; cost/usable second = rate ÷ p. API output bills are proportional; for scene-level 5s rounding see pilot below. Images: assumed 2 attempts per final still at $0.05/image. Narration uses $6/month subscription (assumption based on dated Starter listing); editing uses free software; music uses compliant library tracks at $0. API costs omit FX, taxes, storage, missing subscriptions and unresolved licenses.

|Tier|Video usable / output sec at p40|Attempts (5s)|Video cost / gen sec / usable sec|Images|Narration|Music|Direct subtotal at p40|
|---|---:|---:|---:|---:|---:|---:|---:|
|Lean|60 / 150|30|$7.50 / $0.05 / $0.125|40×2=$4|$6|$0|$17.50|
|Balanced|180 / 450|90|$40.50 / $0.09 / $0.225|30×2=$3|$6|$0|$49.50|
|Premium|420 / 1,050|210|$210 / $0.20 / $0.50|10×2=$1|$6|$0|$217|

|Tier|p25 direct subtotal|p40 subtotal|p60 subtotal|
|---|---:|---:|---:|
|Lean|$22|$17.50|$15|
|Balanced|$73.80|$49.50|$36|
|Premium|$343|$217|$147|

Each subtotal = generated video + stills + $6 TTS subscription; assumes 1 episode/month and 2 attempts/still. The underlying per-second video rates and still rate above are official Runway Dev route prices; p, scene durations, count of stills and attempt counts are assumptions. “Unusable share” = 75%/60%/40% at p25/40/60. These retries are not sourced model failure rates. A pilot must log total attempts, rejected seconds, accepted seconds, credits billed and time. Cost per finished minute at p40 for direct media only is $1.75/$4.95/$21.70 in USD for Lean/Balanced/Premium; not an all-in cost.

## Cash, labor and audience thresholds
For a transparent illustration assume one episode/month, €100/month bookkeeping (unverified legacy placeholder), no paid ads, $6 TTS account subscription, free editing tools, $0 library music, no taxes, and EUR-per-USD x=€0.90 (hypothetical only; use actual transaction-date FX). No monthly storage, tax, legal, paid music, premium-editing or extra AI-platform fee is priced; €100 admin and $6 TTS are placeholders/budgeted costs. These are a priced floor, not total quotes. Cash formula: €100 + (direct USD episode bill × x). Labor is hours × shadow rate. Use 8–12-minute video; per-minute below assumes exactly 10 minutes.

|Tier|Hours/video × rate|Cash/video at p40|Cash €/finished min|Labor|Loaded total|Loaded €/min|Capacity at assumed 160 founder-h/month|
|---|---:|---:|---:|---:|---:|---:|---:|
|Lean|80×€25|€115.75|€11.58|€2,000|€2,115.75|€211.58|2 (upper bound)|
|Balanced|120×€25|€144.55|€14.46|€3,000|€3,144.55|€314.46|1|
|Premium|160×€30|€295.30|€29.53|€4,800|€5,095.30|€509.53|1|

Hours/capacity are planning assumptions, not observed throughput; 160 combined hours means 80 each. Recommend one monthly video at first regardless of nominal Lean capacity. Cash floors exclude all unpriced items above. Gross ad revenue = monetized views × assumed RPM ÷ 1,000 (only after full YPP acceptance); pre-approval ads are €0. Cash break-even views = cash cost × 1,000 ÷ RPM; labor-adjusted threshold = (cash + imputed labor) × 1,000 ÷ RPM. Assumed RPM €2/€5/€8 is not a sourced benchmark. At hypothetical x=€0.90/$, p40 cash costs are €115.75/€144.55/€295.30; loaded costs €2,115.75/€3,144.55/€5,095.30. Rounded up to whole views:

|Tier|Cash views at €2/€5/€8 RPM|Loaded views at €2/€5/€8 RPM|
|---|---|---|
|Lean|57,875 / 23,150 / 14,469|1,057,875 / 423,150 / 264,469|
|Balanced|72,275 / 28,910 / 18,069|1,572,275 / 628,910 / 393,069|
|Premium|147,650 / 59,060 / 36,913|2,547,650 / 1,019,060 / 636,913|

No tax rate or take-home is calculated. Taxes, VAT, FX, withholding, sponsor income, legal costs and founder compensation remain unmodeled. Other revenue reduces cash and labor-adjusted threshold euro-for-euro only when actually earned. These low API-cost figures do not establish profitability; founder labor dominates. Two founders could reach cash profitability if monetized monthly views exceed the cash threshold and gross earnings exceed all actual costs. At 100,000 views × €5 RPM, gross creator ad revenue is €500/month after YPP acceptance; the illustrative p40 cash surpluses are €384.25/€355.45/€204.70, but labor-adjusted results are −€1,615.75/−€2,644.55/−€4,595.30. Those figures are before taxes and omit unpriced costs, so they do not establish a business profit. Before YPP, ad revenue is zero. No tax rate is invented.

## Balanced pilot blueprint: BlackBerry strategy case
Ten minutes, ~1,300 words remains a target from the original pilot. Human narration script must cite every factual claim and balance explanations; the table below describes scene intent, not verified story copy. Each scene mixes short generated video, original generated stills, custom diagrams/timelines and editorial assembly. Planned 5s output length and p=40% are assumptions; validate endpoint limits and task modes first.

|Time / purpose|Narration intent (not checked script)|Visual / method|Usable video target|Attempts, video cost|Stills + edit gate|
|---|---|---|---:|---:|---|
|0:00–0:40 Hook / question|Frame a decision question; cite any implied claim.|Abstract handset-to-touch transition; T2V test.|20s|10 × 5s; $4.50|4 stills; no logos, title must match evidence.|
|0:40–2:00 Establish prior advantage|Explain sourced customer value without claiming a single cause.|Generated keyframes, restrained I2V, original labeled diagram.|25s|13 × 5s; $5.85|4 stills; source-check names/date labels.|
|2:00–3:20 Set historical context|Place the product/company in a verified timeline.|Abstract product evolution; generated motion + custom timeline.|20s|10 × 5s; $4.50|3 stills; cite each date, avoid fabricated UI.|
|3:20–4:50 Explain platform shift|Compare sourced changes and competing explanations.|I2V ecosystem metaphor + original data diagram.|30s|15 × 5s; $6.75|4 stills; animate only after labels/values checked.|
|4:50–6:20 Examine response|Separate documented actions from hindsight.|Generated abstract meeting/objects, plus source-led timeline.|30s|15 × 5s; $6.75|4 stills; no fabricated real people/events.|
|6:20–7:40 Identify constraints|Present sourced limits and alternative explanations.|Generated motion only for transitions; original causal diagram.|25s|13 × 5s; $5.85|4 stills; distinguish fact from inference.|
|7:40–9:00 Show consequences|Explain outcome with cited dates/data and caveats.|Generated atmosphere plus custom chart; chart is source of truth.|25s|13 × 5s; $5.85|4 stills; fact-check values/axes/units.|
|9:00–10:00 Conclude carefully|Summarize multiple factors; avoid monocausal lesson.|Generated image/short closing move; editorial recap.|5s|3 × 5s; $1.35|3 stills; proof-listen and include citations.|

Scene rounding: 92 attempts × 5s = 460 billed output seconds; at assumed 40% yield expected 184 usable seconds to cover 180s target. Video = 460×$0.09=$41.40; 30 finals require 60 image attempts ×$0.05=$3; plus $6/month TTS and $0 library audio = $50.40 direct API/subscription. No FX, tax, storage or license costs. Human edit/assembly is included in the scenario hours × shadow rate, not treated as free. Source dossier and final script must be completed before generation.

## YouTube, originality, disclosure and legal uncertainty
The five-source plan recorded full ad-sharing YPP thresholds as 1,000 subscribers plus 4,000 valid public long-form hours/12 months or 10m valid Shorts views/90 days; expanded YPP begins at 500 subscribers plus additional upload/watch or Shorts criteria but does not itself grant watch-page ad share. These were read in the original dated research (2026-11-16); recheck eligibility, region, Studio terms and policy before 2027 publication. Eligibility is not acceptance or earnings. Before full approval, model ad revenue as zero.

YouTube's cited policy snapshot requires disclosure for realistic synthetic/altered depictions of real people, events or places. AI assistance does not automatically bar YPP, but repetitive, mass-produced, generic or minimally transformed/reused work can fail originality review. Copyright permission, policy eligibility, disclosure and monetization are separate. Preserve original source dossiers, claim tables, scripts, prompts, edit decisions, asset logs and releases to show episode-specific human contribution. Founders should author the thesis and script, select visuals, verify factual claims, direct narration, edit for meaning, and approve each cut. AI narration, music or images do not itself make an episode inauthentic; neither do they guarantee approval. Avoid cloned third-party voice, copyrighted characters/logos/UI imitations, or realistic depictions that imply untrue events without proper disclosure and rights review. AI-output copyright ownership and third-party resemblance remain unsettled; obtain legal advice, don't present licensing as legal certainty.

YouTube's dated source says creators receive 55% of net Watch Page ad revenue; Shorts creators receive 45% of their allocation from the Shorts pool. These are shares, not RPM forecasts. No universal RPM/CPM verified; Google Ads prices are auction- and audience-specific. Paid promotion stays €0 by default; paid-campaign views don't replace valid public watch hours. Sponsor/affiliate income is not forecast. Tax, VAT and compensation aren't modeled.

For founder setup, preserve the original unresolved split: Roland's Hungarian sole-proprietor tax regime, activities, VAT, contracting/payee entity and records require Hungarian advice; Attila's Dutch registration, tax, VAT, social-security and contractor status require Dutch advice. A sole proprietorship does not automatically make Attila a co-owner. Sign written IP, contribution, payment, rights, channel access, exit and dispute terms before work; do not label a revenue formula a partnership without advice. No legal conclusion or tax rate is asserted.

## Official sources and verification register
Directly retrieved 2026-11-16:
- Google video overview/capabilities: https://docs.cloud.google.com/gemini-enterprise-agent-platform/models/video/overview (retrieved 2026-11-16; page listed publication 2026-11-12).
- Google text-to-video task/API and Omni duration: https://docs.cloud.google.com/gemini-enterprise-agent-platform/models/video/generate-videos-from-text (retrieved 2026-11-16; page listed publication 2026-05-29). Google Veo-specific duration/direct rate were not visible in the readable response.
- Runway Dev API pricing, including model-routed Veo/Kling, Runway Gen-4 and image rates: https://docs.dev.runwayml.com/guides/pricing/ (retrieved 2026-11-16; page listed publication 2024-11-06; dynamic price table, use current page before purchase).

Carried from original primary sources, marked read 2026-11-16 (not re-opened during this pass):
- YouTube YPP: https://support.google.com/youtube/answer/72851?hl=en ; expanded YPP: https://support.google.com/youtube/answer/13429240?hl=en
- Originality/reused content: https://support.google.com/youtube/answer/1311392?hl=en ; synthetic disclosure: https://support.google.com/youtube/answer/14328491?hl=en
- Creator earnings/revenue share: https://support.google.com/youtube/answer/72902?hl=en ; advertiser suitability: https://support.google.com/youtube/answer/6162278?hl=en
- TTS price/plan sources in the main plan: https://elevenlabs.io/pricing ; https://cloud.google.com/text-to-speech/pricing
- Editing reference in the original plan: https://www.blackmagicdesign.com