// EVA Website i18n dictionary — auto-detects visitor device language (ar/en)
const I18N = {
en: {
  dir: "ltr", langName: "العربية",
  nav: { about:"About", benefits:"Benefits", problems:"Problems Solved", immune:"Immune System", tokenomics:"Tokenomics", trade:"Trade", contracts:"Contracts" },
  wallet: { connect:"Connect Wallet", connected:"Connected", wrongNetwork:"Switch to Base", disconnect:"Disconnect" },
  hero: {
    badge:"DeFi Token on Base",
    title:"EVA",
    tagline:"Decentralized finance on Base.",
    sub:"A decentralized token with bonding-curve pricing and an on-chain immune system.",
    ctaBuy:"Buy EVA", ctaLearn:"How it works",
    price:"Live price", perEva:"per EVA"
  },
  stats: { price:"Price", mcap:"Market Cap", supply:"Total Supply", reserve:"Curve Reserve" },
  about: {
    title:"What is EVA?",
    p1:"EVA is a token on the Base network. Its price comes from bonding-curve mathematics — not from a liquidity pool that can be drained. Every buy funds future sells through a self-funding reserve, so the market can never be emptied by panic.",
    p2:"On top of that, EVA carries an on-chain immune system: it watches for incidents and market pressure, responds within strictly pre-authorized bounds, and learns from every event through community governance — without ever touching the core token code."
  },
  benefits: {
    title:"Why EVA?",
    items:[
      {t:"Decentralized", d:"No single party controls EVA."},
      {t:"Rug-proof", d:"No admin keys, no backdoors."},
      {t:"Self-funding", d:"Trading fees sustain the protocol."},
      {t:"Deflationary", d:"Buy-and-burn reduces supply."},
      {t:"Staking rewards", d:"Earn yield by locking EVA."},
      {t:"On-chain immunity", d:"Watches threats and adapts."}
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
    connectFirst:"Connect your wallet to trade",
    noWallet:"No wallet detected",
    noWalletMsg:"Open this page inside your wallet's built-in browser (MetaMask or Coinbase Wallet app), or install the MetaMask extension on desktop — then tap Connect again."
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
  footer: { rights:"EVA — a token on Base. Built in the open.", risk:"Crypto assets are volatile. Do your own research." }
},
ar: {
  dir: "rtl", langName: "English",
  nav: { about:"عن العملة", benefits:"المزايا", problems:"تحديات نعالجها", immune:"نظام المناعة", tokenomics:"الاقتصاد الرمزي", trade:"التداول", contracts:"العقود" },
  wallet: { connect:"ربط المحفظة", connected:"متصلة", wrongNetwork:"التبديل إلى شبكة Base", disconnect:"قطع الاتصال" },
  hero: {
    badge:"عملة رقمية على شبكة Base",
    title:"EVA",
    tagline:"التمويل اللامركزي على شبكة Base.",
    sub:"عملة لامركزية يُحتسب سعرها عبر منحنى رياضي، ونظام مناعة يعمل على البلوكشين.",
    ctaBuy:"شراء EVA", ctaLearn:"كيف تعمل",
    price:"السعر الحالي", perEva:"لكل EVA"
  },
  stats: { price:"السعر", mcap:"القيمة السوقية", supply:"إجمالي المعروض", reserve:"احتياطي المنحنى" },
  about: {
    title:"ما هي EVA؟",
    p1:"EVA عملة رقمية على شبكة Base، يُستمد سعرها من معادلات منحنى رياضي — لا من مجمع سيولة يمكن استنزافه. كل عملية شراء تموّل عمليات البيع اللاحقة عبر احتياطي ذاتي التمويل، فلا يمكن إفراغ السوق بدافع الهلع.",
    p2:"إضافة إلى ذلك، تضم EVA نظام مناعة يعمل على البلوكشين: يرصد الحوادث وضغوط السوق، ويستجيب ضمن حدود معتمدة مسبقًا، ويتعلم من كل حدث عبر حوكمة المجتمع — دون المساس بالكود الأساسي للعملة."
  },
  benefits: {
    title:"لماذا EVA؟",
    items:[
      {t:"اللامركزية", d:"لا يتحكم فيها طرف واحد."},
      {t:"محصنة ضد سحب البساط", d:"بلا مفاتيح تحكم أو أبواب خلفية."},
      {t:"تمويل ذاتي", d:"رسوم التداول تدعم البروتوكول."},
      {t:"انكماشية", d:"الحرق يقلّص المعروض."},
      {t:"مكافآت التخزين", d:"عائد مقابل حبس العملة."},
      {t:"مناعة على السلسلة", d:"ترصد التهديدات وتتكيف معها."}
    ]
  },
  problems: {
    title:"تحديات تعالجها EVA",
    sub:"أسباب حقيقية أدت إلى انهيار عملات فعلية — عولجت بالتصميم لا بالوعود.",
    items:[
      {p:"سحب البساط وسرقة الإدارة", s:"لا توجد في EVA مفاتيح تحكم أو دوال خفية لسحب الأموال — لا يوجد ما يمكن سرقته أصلًا."},
      {p:"استنزاف مجمعات السيولة", s:"لا يوجد مجمع تداول يمكن استنزافه؛ يُحتسب السعر من المنحنى، وتُدفع عمليات البيع من الاحتياطي."},
      {p:"الدوامة السعرية المميتة", s:"البيع بالسعر التكاملي والاحتياطي ذاتي التمويل يكسران حلقة الهلع: كل عملية شراء تعمّق الاحتياطي الداعم للمبيعات اللاحقة."},
      {p:"تلاعب الحيتان", s:"حد أقصى لكل معاملة، ومعاملة واحدة في الكتلة، وقاطع طوارئ يمنع أي طرف من تحريك السوق منفردًا."},
      {p:"اختراقات بلا استجابة", s:"يسجّل نظام المناعة كل حادثة على السلسلة ويرفع مستوى الدفاع تلقائيًا ضمن الحدود المعتمدة."}
    ]
  },
  immune: {
    title:"نظام المناعة",
    sub:"محركان ملحَقان بقلب EVA؛ لا يمسان الأموال ولا يغيّران أي إعدادات — يرصدان ويسجّلان ويقدّمان التوصيات.",
    registry:{t:"سجل الحوادث", d:"سجل علني على السلسلة لكل حادثة — اختراقات وشذوذ وصدمات سوقية — مصنّف ومقيَّم الخطورة ومؤرّخ بشكل دائم. مضاد للرسائل المزعجة بالتصميم: حدود للمعدل مع مسارات طوارئ للبلاغات الحرجة."},
    defense:{t:"الدفاع التكيّفي", d:"يقرأ سجل الحوادث وإشارات السوق الحية (التقلب والعمق ومتوسط السعر) ويحتسب مستوى دفاع من 0 إلى 3. يتصاعد فورًا مع الضغط الحقيقي، ويهدأ بعد استقرار متواصل. لا يمكن للحوادث وحدها رفع المستوى دون تأكيد من السوق."},
    note:"دور استشاري فقط: لا يمكنه إيقاف التداول أو تحريك الأموال أو تعديل الإعدادات. الاستجابات الأوسع تتم عبر حوكمة المجتمع."
  },
  tokenomics: {
    title:"الاقتصاد الرمزي",
    supply:"إجمالي المعروض 21,000,000 EVA — ثابت للأبد.",
    rows:[
      ["منحنى البيع والشراء", "9,870,000", "47%"],
      ["المؤسس (مغلق + سائل)", "3,000,000", "14.3%"],
      ["مكافآت التخزين (4 سنوات)", "2,100,000", "10%"],
      ["احتياطي الترحيل", "2,100,000", "10%"],
      ["التوزيع المجاني", "1,680,000", "8%"],
      ["الخزانة", "1,250,000", "6%"],
      ["النظام البيئي", "1,000,000", "4.7%"]
    ],
    taxes:"ضرائب التداول: 1% على الشراء · 1.5% على البيع — تموّل الحرق والمخزِّنين والخزانة."
  },
  trade: {
    title:"تداول EVA",
    sub:"تداول مباشر مع منحنى السعر. أنت من يوقّع كل معاملة من محفظتك — الموقع لا يمس مفاتيحك أبدًا.",
    buyTab:"شراء", sellTab:"بيع",
    youPay:"تدفع", youReceive:"تستلم (تقديري)",
    evaPay:"تدفع", ethReceive:"تستلم (تقديري)",
    price:"السعر", slippage:"تحمّل الانزلاق",
    balance:"الرصيد", max:"الحد الأقصى",
    approveNote:"لا حاجة لموافقة مسبقة — ينقل العقد عملات EVA مباشرة عند البيع.",
    buyBtn:"شراء EVA", sellBtn:"بيع EVA",
    notLive:"لم يتم تفعيل التداول بعد — سيعمل المنحنى عقب الإطلاق.",
    txSent:"تم إرسال المعاملة", txConfirmed:"تم التأكيد", txFailed:"فشلت المعاملة",
    disclaimer:"تداول العملات الرقمية محفوف بالمخاطر. قد تنخفض الأسعار. لا تتداول إلا بما يمكنك تحمّل خسارته.",
    connectFirst:"اربط محفظتك للتداول",
    noWallet:"لم يتم العثور على محفظة",
    noWalletMsg:"افتح الصفحة من المتصفح المدمج في تطبيق محفظتك (MetaMask أو Coinbase Wallet)، أو ثبّت إضافة MetaMask على الحاسوب — ثم اضغط ربط المحفظة مجددًا."
  },
  contracts: {
    title:"العقود",
    sub:"جميع العناوين موثقة على BaseScan.",
    rows:[
      ["عملة EVA الأساسية", "0x0A834888B15d249f55498Dd16ac8a64B8c258396"],
      ["استحقاق المؤسس", "0x5247Ca840cc570daAd69a02Aeb90C011Ab1D1A43"],
      ["مركز المحركات H2", "0x57025c9B3d2E691422EE9026f7eb2B582A2e0b51"],
      ["سجل الحوادث", "0x51a8c2205e51900Df394f85184a2A4E0A36EF0cc"],
      ["الدفاع التكيّفي", "0xe51e89D9E81F775F694C852be01B2b9d41c82158"]
    ],
    view:"عرض على BaseScan", copied:"تم النسخ!"
  },
  footer: { rights:"EVA — عملة رقمية على Base. تُبنى في العلن.", risk:"العملات الرقمية متقلبة. قم بأبحاثك الخاصة." }
}
};
