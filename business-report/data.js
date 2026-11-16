window.REPORT={
  title:'AI Video Monetization Plan 2027',
  asOf:'2026-11-16',
  fx:0.9,
  fxNote:'Hypothetical EUR per USD conversion, not a current FX quote.',
  ypp:true,
  defaults:{views:100000,rpm:5,videos:1,cost:44.55,fixed:100,other:0,hours:120,hourly:25},
  tiers:[
    {id:'lean',name:'Lean · budget generative',motion:60,share:10,rate:.05,stills:40,hours:80,hourly:25,videoUsd:7.5,imageUsd:4,voiceUsd:6,musicUsd:0,directUsd:17.5,variableEur:15.75,cashEur:115.75,laborEur:2000,loadedEur:2115.75,capacity:2,desc:'Mostly original AI-generated stills with light designed movement; generated video only where motion adds explanatory value.'},
    {id:'balanced',name:'Balanced · hybrid generative',motion:180,share:30,rate:.09,stills:30,hours:120,hourly:25,videoUsd:40.5,imageUsd:3,voiceUsd:6,musicUsd:0,directUsd:49.5,variableEur:44.55,cashEur:144.55,laborEur:3000,loadedEur:3144.55,capacity:1,desc:'Generated video for motion-critical scenes; original generated images, diagrams and narration carry the rest.'},
    {id:'premium',name:'Premium · fully generative',motion:420,share:70,rate:.20,stills:10,hours:160,hourly:30,videoUsd:210,imageUsd:1,voiceUsd:6,musicUsd:0,directUsd:217,variableEur:195.3,cashEur:295.3,laborEur:4800,loadedEur:5095.3,capacity:1,desc:'Predominantly generated video footage, with realistic retries and curation; not a promise of higher quality or performance.'}
  ],
  yields:[.25,.40,.60],
  pipeline:[
    ['Editorial thesis','Choose a question with stakes; decide what the video can establish and what remains uncertain.','Human-led: founders set thesis, boundaries, audience and quality bar.'],
    ['Research and claim map','Build a dated source dossier, fact table and contradiction log before generating visuals.','Human-led: source quality, attribution, uncertainty and fact checks.'],
    ['Narrative and storyboard','Write original narration, then map each claim to an explanatory scene and visual method.','Human-led creative direction; AI assists ideation, never substitutes for source review.'],
    ['Generate references and assets','Create original stills, keyframes and motion clips; test model inputs and output limits.','AI-generated assets; log model, prompt, settings, attempts and billed credits.'],
    ['Curate and repair','Reject artifacts, continuity breaks and misleading imagery; regenerate only where useful.','Human selection and repair decisions; retry yield is unmeasured and assumed in scenarios.'],
    ['Narrate, edit and sound','Use AI narration if licensed; combine generated video, original images, charts, designed movement and sound.','Human owns pacing, emphasis, chart meaning, mix and story coherence.'],
    ['Fact, rights and disclosure QA','Review every claim and asset, captions, synthetic disclosure, full playback and export.','Both founders approve; retain evidence and final sign-off.']
  ],
  scenes:[
    ['0:00–0:40','Hook / question','Frame a decision question; cite any implied factual claim.','Abstract handset-to-touch transition; text-to-video test.',20,10,4,'No logos; title must match evidence.'],
    ['0:40–2:00','Prior advantage','Explain sourced customer value without claiming a single cause.','Generated keyframes, restrained image-to-video, original labeled diagram.',25,13,4,'Source-check names and dates.'],
    ['2:00–3:20','Historical context','Place product and company in a verified timeline.','Abstract product evolution, generated motion plus custom timeline.',20,10,3,'Cite dates; avoid fabricated UI.'],
    ['3:20–4:50','Platform shift','Compare sourced changes and competing explanations.','Image-to-video metaphor plus original data diagram.',30,15,4,'Check labels and values before motion.'],
    ['4:50–6:20','Company response','Separate documented actions from hindsight.','Generated abstract objects/scene plus source-led timeline.',30,15,4,'No fabricated real people or events.'],
    ['6:20–7:40','Constraints','Present sourced limits and alternative explanations.','Generated transition motion plus original causal diagram.',25,13,4,'Mark facts separately from inference.'],
    ['7:40–9:00','Consequences','Explain outcome with cited dates, data and caveats.','Generated atmosphere and custom chart; chart is source of truth.',25,13,4,'Verify values, axes and units.'],
    ['9:00–10:00','Nuanced close','Summarize multiple factors; avoid a monocausal lesson.','Generated image and short closing motion; editorial recap.',5,3,3,'Proof-listen; include citations.']
  ],
  assumptions:[
    '40% usable-video yield is assumed, not a vendor-published failure rate; 25% and 60% are sensitivities. Log attempts and accepted seconds in a pilot.',
    'Video price cards are Runway Developer API route prices retrieved 2026-11-16, not direct Google/Kling subscriptions or complete license terms.',
    'The scenario rates are $0.05/s Runway Gen-4 Turbo, $0.09/s Kling 3.0 Standard and $0.20/s Veo 3.1; model, input-mode, duration and resolution limits vary.',
    'Still generation assumes two attempts per final still at $0.05/image; ElevenLabs narration assumes $6/month; music/sound assumes a suitable YouTube Audio Library track at $0 only if its terms are followed.',
    'Editing software fees are assumed $0; editing/assembly is not free: founder labor is separately valued. No storage, paid music, legal, tax, VAT, FX fees, extra subscriptions or unpriced tools are included.',
    '€100/month bookkeeping/admin is an unverified placeholder; EUR/USD 0.90 is hypothetical. RPM €2/€5/€8 and 160 combined founder hours/month are assumptions, not forecasts.',
    'Production hours and monthly capacity are planning assumptions, not measured throughput. Recommend one quality-first 8–12 minute episode/month until actual work logs exist.'
  ],
  sources:[
    ['Reconciled AI-first feasibility study','../generative-ai-first-correction-2026-11-16/11 Reconciled AI-first Feasibility Study.md','Research source; dated scenario math and qualifications.'],
    ['Vendor pricing and scenarios','../generative-ai-first-correction-2026-11-16/10 Vendor Pricing and Scenario Calculations.md','Research source; retrieved vendor pricing snapshot and scenario calculations.'],
    ['AI-first production economics','../generative-ai-first-correction-2026-11-16/01 Production Economics.md','Research source; formulas and assumed retry yields.'],
    ['AI-first pilot blueprint','../generative-ai-first-correction-2026-11-16/02 Pilot Blueprint.md','Research source; scene-level pilot plan.'],
    ['Source audit and disposition','../generative-ai-first-correction-2026-11-16/03 Source Audit and Disposition.md','Research source; what is retained, corrected or unresolved.'],
    ['YouTube Advertising & Operating Costs.md','../YouTube Advertising & Operating Costs.md','Original primary research; preserved unchanged.'],
    ['AI Video Monetization Plan 2027.md','../AI Video Monetization Plan 2027.md','Original primary research; preserved unchanged.'],
    ['Pilot Production Budget.md','../Pilot Production Budget.md','Original primary research; preserved unchanged.'],
    ['Founder Decision Brief.md','../Founder Decision Brief.md','Original primary research; preserved unchanged.'],
    ['Production Pipeline.md','../Production Pipeline.md','Original primary research; preserved unchanged.'],
    ['Google video capabilities','https://docs.cloud.google.com/gemini-enterprise-agent-platform/models/video/overview','Official documentation; retrieved 2026-11-16.'],
    ['Google video generation','https://docs.cloud.google.com/gemini-enterprise-agent-platform/models/video/generate-videos-from-text','Official documentation; retrieved 2026-11-16.'],
    ['Runway Developer API pricing','https://docs.dev.runwayml.com/guides/pricing/','Official API price table; retrieved 2026-11-16; dynamic, recheck before purchase.'],
    ['YouTube Partner Program eligibility','https://support.google.com/youtube/answer/72851?hl=en','Official policy; recheck current eligibility and Studio notices.'],
    ['YouTube monetization policies','https://support.google.com/youtube/answer/1311392?hl=en','Official policy; originality/reused-content review.'],
    ['Synthetic-content disclosure','https://support.google.com/youtube/answer/14328491?hl=en','Official policy; disclosure guidance.'],
    ['YouTube creator earnings','https://support.google.com/youtube/answer/72902?hl=en','Official policy; revenue shares are not RPM forecasts.'],
    ['ElevenLabs pricing','https://elevenlabs.io/pricing','Vendor plan snapshot carried from dated research; recheck exact terms.'],
    ['Google Cloud Text-to-Speech pricing','https://cloud.google.com/text-to-speech/pricing','Official API price source; exact voice/terms need recheck.']
  ],
  historical:'The original five research files remain unchanged. Their qualitative niche screen, YPP and copyright distinctions, source/rights process, founder/legal questions and stop-gates remain useful, but the old €120/€320/€950 per-video production budgets, €1,660 pilot, €610 monthly cash, 100h/video and 122k/622k views at €5 RPM describe the previous conventional inputs—not the AI-first production plan. They are retained as historical context, not current AI-first estimates.'
};
