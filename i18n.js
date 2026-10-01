// EVA Website i18n dictionary — auto-detects visitor device language (ar/en)
const I18N = {
en: {
  dir: "ltr", langName: "العربية",
  nav: { about:"About", benefits:"Benefits", problems:"Problems Solved", immune:"Immune System", tokenomics:"Tokenomics", trade:"Trade", contracts:"Contracts" },
  wallet: { connect:"Connect Wallet", connected:"Connected", wrongNetwork:"Switch to Base", disconnect:"Disconnect" },
  hero: {
    badge:"Sovereign DeFi Token on Base",
    title:"EVA",
    tagline:"The token that can't be killed.",
    sub:"A sovereign token with bonding-curve pricing, a self-funding reserve, and an on-chain immune system — no admin keys, no backdoors, no rug pulls.",
    ctaBuy:"Buy EVA", ctaLearn:"How it works",
    price:"Live price", perEva:"per EVA"
  },
  stats: { price:"Price", mcap:"Market Cap", supply:"Total Supply", reserve:"Curve Reserve" },
  about: {
    title:"What is EVA?",
    p1:"EVA is a sovereign token on the Base network. Its price comes from bonding-curve mathematics — not from a liquidity pool that can be drained. Every buy funds future sells through a self-funding reserve, so the market can never be emptied by panic.",
    p2:"On top of that, EVA carries an on-chain immune system: it watches for incidents and market pressure, responds within strictly pre-authorized bounds, and learns from every event through community governance — without ever touching the core token code."
  },
  benefits: {
    title:"Why EVA?",
    items:[
      {t:"Can't be rugged", d:"No admin keys, no backdoors, no owner functions that can drain funds. The rules are immutable and public."},
      {t:"No drainable pool", d:"Price comes from curve math, not a DEX pool. There is nothing for an attacker to drain."},
      {t:"Self-funding reserve", d:"Buys fund the reserve that pays future sells. The system finances its own liquidity."},
      {t:"Buy-and-burn", d:"A share of trading taxes buys EVA and burns it, reducing supply as activity grows."},
      {t:"Staking rewards", d:"Lock EVA and earn a share of protocol fees with multipliers up to 4x for long-term lockers."},
      {t:"On-chain immune system", d:"An incident registry plus adaptive defense that monitors pressure and responds within pre-authorized bounds."}
    ]
  },
  problems: {
    title:"Problems EVA solves",
    sub:"Real failure modes that killed real tokens — addressed by design, not by promises.",
    items:[
      {p:"Rug pulls & admin drains", s:"EVA has no admin keys and no privileged drain functions. There is simply nothing to steal."},
      {p:"Liquidity pool drains", s:"There is no DEX pool to drain. Price is computed from the bonding curve, and sells are paid from the reserve."},
      {p:"Death spirals", s:"Integral-price sells and the self-funding reserve break the panic loop: every buy deepens the reserve that backs future sells."},
      {p:"Whale manipulation", s:"Per-transaction caps, per-block trade limits, and a circuit breaker keep single actors from swinging the market."},
      {p:"Hacks with no response", s:"The immune system logs every incident on-chain and escalates defense levels automatically within pre-authorized bounds."}
    ]
  },
  immune: {
    title:"The Immune System",
    sub:"Two satellite engines orbit the EVA core. They never touch funds and never change parameters — they watch, record, and advise.",
    registry:{t:"Incident Registry", d:"An append-only on-chain log of every incident — hacks, anomalies, market shocks. Categorized, severity-scored, and timestamped forever. Anti-spam by design: rate limits with bypass lanes for critical reports."},
    defense:{t:"Adaptive Defense", d:"Reads the incident log plus live market signals (volatility, depth, TWAP) and computes a defense level 0–3. Escalates instantly on real pressure, stands down after sustained calm. Incidents alone can never trigger escalation without market corroboration."},
    note:"Advisory only: it cannot halt trading, move funds, or modify parameters. Wider responses go through community governance."
  },
  tokenomics: {
    title:"Tokenomics",
    supply:"21,000,000 EVA total supply — fixed forever.",
    rows:[
      ["Bonding curve", "9,870,000", "47%"],
      ["Founder (vested + liquid)", "3,000,000", "14.3%"],
      ["Staking emissions (4y)", "2,100,000", "10%"],
      ["Migration pool", "2,100,000", "10%"],
      ["Airdrop", "1,680,000", "8%"],
      ["Treasury", "1,250,000", "6%"],
      ["Ecosystem", "1,000,000", "4.7%"]
    ],
    taxes:"Trading taxes: 1.0% on buys · 1.5% on sells — funding burns, stakers, and the treasury."
  },
  trade: {
    title:"Trade EVA",
    sub:"Trade directly with the bonding curve. You sign every transaction in your own wallet — this site never touches your keys.",
    buyTab:"Buy", sellTab:"Sell",
    youPay:"You pay", youReceive:"You receive (est.)",
    evaPay:"You pay", ethReceive:"You receive (est.)",
    price:"Price", slippage:"Slippage tolerance",
    balance:"Balance", max:"MAX",
    approveNote:"No approval needed — the contract moves EVA directly on sell.",
    buyBtn:"Buy EVA", sellBtn:"Sell EVA",
    notLive:"Trading is not live yet — the curve activates after launch.",
    txSent:"Transaction sent", txConfirmed:"Confirmed", txFailed:"Transaction failed",
    disclaimer:"Trading crypto is risky. Prices can go down. Only trade what you can afford to lose.",
    connectFirst:"Connect your wallet to trade"
  },
  contracts: {
    title:"Contracts",
    sub:"Every address, verified on BaseScan.",
    rows:[
      ["EVA Core Token", "0x0A834888B15d249f55498Dd16ac8a64B8c258396"],
      ["Founder Vesting", "0x5247Ca840cc570daAd69a02Aeb90C011Ab1D1A43"],
      ["Engine Hub H2", "0x57025c9B3d2E691422EE9026f7eb2B582A2e0b51"],
      ["Incident Registry", "0x51a8c2205e51900Df394f85184a2A4E0A36EF0cc"],
      ["Adaptive Defense", "0xe51e89D9E81F775F694C852be01B2b9d41c82158"]
    ],
    view:"View on BaseScan", copied:"Copied!"
  },
  footer: { rights:"EVA — a sovereign token on Base. Built in the open.", risk:"Crypto assets are volatile. Do your own research." }
},
ar: {
  dir: "rtl", langName: "English",
  nav: { about:"عن العملة", benefits:"المميزات", problems:"مشاكل بتحلها", immune:"جهاز المناعة", tokenomics:"الاقتصاد", trade:"تداول", contracts:"العقود" },
  wallet: { connect:"اربط المحفظة", connected:"متصلة", wrongNetwork:"حوّل لشبكة Base", disconnect:"افصل" },
  hero: {
    badge:"عملة سيادية على شبكة Base",
    title:"EVA",
    tagline:"العملة اللي مستحيل تموت.",
    sub:"عملة سيادية بسعر من منحنى رياضي، واحتياطي بيموّل نفسه، وجهاز مناعة على البلوكشين — من غير مفاتيح تحكم، ومن غير أبواب خلفية، ومن غير سحب بساط.",
    ctaBuy:"اشتري EVA", ctaLearn:"إزاي بتشتغل",
    price:"السعر الحالي", perEva:"لكل EVA"
  },
  stats: { price:"السعر", mcap:"القيمة السوقية", supply:"إجمالي المعروض", reserve:"احتياطي المنحنى" },
  about: {
    title:"إيه هي EVA؟",
    p1:"EVA عملة سيادية على شبكة Base. سعرها جاي من معادلات منحنى رياضي — مش من مجمع سيولة ممكن يتفضّى. كل عملية شراء بتموّل عمليات البيع اللي جاية عن طريق احتياطي بيموّل نفسه، فالسوق مستحيل يتفضّى بالهلع.",
    p2:"وفوق ده، EVA شايلة جهاز مناعة على البلوكشين: بيراقب الحوادث والضغط على السوق، وبيرد في حدود متفق عليها مسبقًا، وبيتعلم من كل حدث عن طريق حوكمة المجتمع — من غير ما يلمس كود العملة الأساسي أبدًا."
  },
  benefits: {
    title:"ليه EVA؟",
    items:[
      {t:"مستحيل تتسرق", d:"مفيش مفاتيح تحكم ولا أبواب خلفية ولا دوال تسحب الفلوس. القواعد ثابتة وعلنية."},
      {t:"مفيش مجمع يتفضّى", d:"السعر من معادلة المنحنى مش من مجمع تداول. مفيش حاجة أصلًا تتسرق."},
      {t:"احتياطي بيموّل نفسه", d:"المشتريات بتموّل الاحتياطي اللي بيدفع البيع اللي جاي. النظام بيموّل سيولته بنفسه."},
      {t:"شراء وحرق", d:"جزء من ضرائب التداول بيشتري EVA ويحرقها، فالمعروض بيقل كل ما النشاط يزيد."},
      {t:"مكافآت تخزين", d:"اقفل عملاتك واكسب نصيب من رسوم البروتوكول بمضاعفات لحد 4x للحابسين الطويلين."},
      {t:"جهاز مناعة على السلسلة", d:"سجل حوادث + دفاع تكيّفي بيراقب الضغط وبيرد في حدود مسموحة مسبقًا."}
    ]
  },
  problems: {
    title:"مشاكل EVA بتحلها",
    sub:"أسباب حقيقية موتت عملات حقيقية — محلولة بالتصميم مش بالوعود.",
    items:[
      {p:"سحب البساط وسرقة الإدارة", s:"EVA مفيهاش مفاتيح تحكم ولا دوال سرية تسحب الفلوس. ببساطة مفيش حاجة تتسرق."},
      {p:"تفريغ مجمعات السيولة", s:"مفيش مجمع تداول يتفضّى. السعر محسوب من منحنى البيع والشراء، والبيع بيتدفع من الاحتياطي."},
      {p:"الدوامة المميتة", s:"البيع بسعر تكاملي والاحتياطي الممول ذاتيًا بيكسروا حلقة الهلع: كل شراء بيعمّق الاحتياطي اللي بيدعم البيع اللي جاي."},
      {p:"تلاعب الحيتان", s:"حد أقصى لكل معاملة، وحد لمعاملة واحدة في البلوك، وقاطع طوارئ بيمنع أي طرف يحرّك السوق لوحده."},
      {p:"اختراقات من غير رد", s:"جهاز المناعة بيسجّل كل حادثة على السلسلة وبيرفع مستوى الدفاع تلقائيًا في الحدود المسموحة."}
    ]
  },
  immune: {
    title:"جهاز المناعة",
    sub:"محركان تابعان حوالين قلب EVA. مش بيلمسوا الفلوس ومش بيغيّروا أي إعدادات — بيراقبوا ويسجّلوا وينصحوا.",
    registry:{t:"سجل الحوادث", d:"سجل علني على السلسلة لكل حادثة — اختراقات، شذوذ، صدمات سوق. مصنّف ومتقيّم الخطورة ومؤرّخ للأبد. ضد السبام بالتصميم: حدود معدل مع ممرات طوارئ للبلاغات الحرجة."},
    defense:{t:"الدفاع التكيّفي", d:"بيقرأ سجل الحوادث وإشارات السوق الحية (التقلب، العمق، متوسط السعر) وبيحسب مستوى دفاع من 0 لـ 3. بيتصعّد فورًا مع الضغط الحقيقي، وبيهدى بعد استقرار مستمر. الحوادث لوحدها مستحيل ترفع المستوى من غير تأكيد من السوق."},
    note:"استشاري فقط: ميقدرش يوقف التداول ولا يحرّك فلوس ولا يعدّل إعدادات. الردود الأوسع بتم عن طريق حوكمة المجتمع."
  },
  tokenomics: {
    title:"اقتصاد العملة",
    supply:"21,000,000 EVA إجمالي المعروض — ثابت للأبد.",
    rows:[
      ["منحنى البيع والشراء", "9,870,000", "47%"],
      ["المؤسس (مقفول + سائل)", "3,000,000", "14.3%"],
      ["مكافآت التخزين (4 سنين)", "2,100,000", "10%"],
      ["احتياطي الترحيل", "2,100,000", "10%"],
      ["إيردروب", "1,680,000", "8%"],
      ["الخزانة", "1,250,000", "6%"],
      ["النظام البيئي", "1,000,000", "4.7%"]
    ],
    taxes:"ضرائب التداول: 1% على الشراء · 1.5% على البيع — بتموّل الحرق والمخزّنين والخزانة."
  },
  trade: {
    title:"تداول EVA",
    sub:"تداول مباشر مع منحنى السعر. انت اللي بتوقّع كل معاملة من محفظتك — الموقع مش بيلمس مفاتيحك أبدًا.",
    buyTab:"شراء", sellTab:"بيع",
    youPay:"هتدفع", youReceive:"هتستلم (تقريبي)",
    evaPay:"هتدفع", ethReceive:"هتستلم (تقريبي)",
    price:"السعر", slippage:"تحمّل الانزلاق",
    balance:"الرصيد", max:"الأقصى",
    approveNote:"مش محتاج موافقة مسبقة — العقد بينقل الـ EVA مباشرة عند البيع.",
    buyBtn:"اشتري EVA", sellBtn:"بيع EVA",
    notLive:"التداول لسه متفعلش — المنحنى هيشتغل بعد الإطلاق.",
    txSent:"اتبعَت المعاملة", txConfirmed:"اتأكدت", txFailed:"المعاملة فشلت",
    disclaimer:"تداول العملات خطر. الأسعار ممكن تنزل. تداول بس اللي تقدر تخسره.",
    connectFirst:"اربط محفظتك عشان تتداول"
  },
  contracts: {
    title:"العقود",
    sub:"كل العناوين متوثقة على BaseScan.",
    rows:[
      ["عملة EVA الأساسية", "0x0A834888B15d249f55498Dd16ac8a64B8c258396"],
      ["استحقاق المؤسس", "0x5247Ca840cc570daAd69a02Aeb90C011Ab1D1A43"],
      ["مركز المحركات H2", "0x57025c9B3d2E691422EE9026f7eb2B582A2e0b51"],
      ["سجل الحوادث", "0x51a8c2205e51900Df394f85184a2A4E0A36EF0cc"],
      ["الدفاع التكيّفي", "0xe51e89D9E81F775F694C852be01B2b9d41c82158"]
    ],
    view:"شوف على BaseScan", copied:"اتنسخ!"
  },
  footer: { rights:"EVA — عملة سيادية على Base. مبنية في العلن.", risk:"العملات الرقمية متقلبة. اعمل بحثك بنفسك." }
}
};
