// EVA Website i18n dictionary — auto-detects visitor device language (ar/en)
const I18N = {
en: {
  dir: "ltr", langName: "العربية",
  nav: { about:"About", benefits:"Benefits", problems:"Threats Addressed", immune:"Immune System", tokenomics:"Tokenomics", trade:"Trade", contracts:"Contracts" },
  wallet: { connect:"Connect Wallet", connected:"Connected", wrongNetwork:"Switch to Base", disconnect:"Disconnect" },
  hero: {
    badge:"DeFi Token on Base",
    title:"EVA",
    tagline:"Engineered against rug pulls and pool drains.",
    sub:"A token with bonding-curve pricing and an on-chain immune system.",
    ctaBuy:"Buy EVA", ctaLearn:"Learn more",
    price:"Price", perEva:"per EVA"
  },
  stats: { price:"Price", mcap:"Market Cap", supply:"Total Supply", reserve:"Reserve" },
  about: {
    title:"What is EVA?",
    p1:"EVA is a token on the Base network. Its price is derived from a bonding curve — not from a liquidity pool that can be drained. Each buy funds future sells through a self-funding reserve, so there is no pool for panic to empty.",
    p2:"EVA also includes an on-chain immune system: it monitors incidents and market pressure and publishes its assessment on-chain — without modifying the core token code. Any response beyond the protocol's pre-authorized bounds requires community governance."
  },
  benefits: {
    title:"Why EVA?",
    items:[
      {t:"No admin keys", d:"No one can move the reserve."},
      {t:"No pool to drain", d:"Price comes from the bonding curve, not a shared pool."},
      {t:"Self-funding", d:"Buys fund the reserve that pays future sells."},
      {t:"Buy-and-burn", d:"Trading taxes buy back and burn EVA once activity thresholds are met."},
      {t:"Staking rewards", d:"Earn yield by locking EVA."},
      {t:"On-chain immune system", d:"Monitors threats and publishes its assessment."}
    ]
  },
  problems: {
    title:"Problems EVA solves",
    sub:"Real reasons real tokens collapsed — fixed by design, not by promises.",
    items:[
      {p:"Rug pulls and admin drains", s:"EVA has no admin keys and no privileged drain functions. No one can move the reserve."},
      {p:"Liquidity pool drains", s:"Sells are paid from a dedicated reserve, not a shared pool — so a wave of exits cannot empty it."},
      {p:"Death spirals", s:"Integral-price sells and the self-funding reserve are designed to break the panic cycle: each buy deepens the reserve backing future sells."},
      {p:"Large-holder manipulation", s:"Per-transaction caps, per-block trade limits, and a circuit breaker limit how much any single actor can move the market at once."},
      {p:"Hacks with no response", s:"The immune system logs every incident on-chain and publishes its defense assessment; countermeasures beyond pre-authorized bounds require a governance vote."}
    ]
  },
  immune: {
    title:"The Immune System",
    sub:"Two independent smart contracts support the EVA core. They cannot access funds or change parameters — they monitor, record, and advise.",
    registry:{t:"Incident Registry", d:"A permanent on-chain record of every reported incident — hacks, anomalies, market shocks — each with a severity rating. Spam-resistant by design, with priority handling for critical reports."},
    defense:{t:"Adaptive Defense", d:"Reads the incident log and live market signals (volatility, depth, time-weighted average price) and computes a defense level from 0 to 3. It escalates immediately under genuine pressure and de-escalates after sustained calm. Incidents alone cannot trigger escalation without market corroboration."},
    note:"Advisory only: it cannot halt trading, move funds, or modify parameters. Wider responses go through community governance."
  },
  tokenomics: {
    title:"Tokenomics",
    supply:"Total supply of 21,000,000 EVA — fixed permanently.",
    rows:[
      ["Bonding curve", "9,870,000", "47%"],
      ["Founder (vested + liquid)", "3,000,000", "14.3%"],
      ["Staking emissions (4 years)", "2,100,000", "10%"],
      ["Migration pool", "2,100,000", "10%"],
      ["Airdrop", "1,680,000", "8%"],
      ["Treasury", "1,250,000", "6%"],
      ["Ecosystem", "1,000,000", "4.7%"]
    ],
    taxes:"Current trading taxes: 1.0% on purchases · 1.5% on sales — used for burns, staker rewards, and the treasury."
  },
  trade: {
    title:"Trade EVA",
    sub:"Trade directly with the bonding curve. You sign every transaction in your own wallet — this site never accesses your private keys.",
    buyTab:"Buy", sellTab:"Sell",
    youPay:"You pay", youReceive:"You receive (estimate)",
    evaPay:"You pay", ethReceive:"You receive (estimate)",
    price:"Price", slippage:"Slippage limit",
    balance:"Balance", max:"Max",
    approveNote:"One-tap sell — no separate approval transaction needed.",
    buyBtn:"Buy EVA", sellBtn:"Sell EVA",
    notLive:"Trading is not live yet — it opens at launch.",
    txSent:"Transaction sent", txConfirmed:"Confirmed", txFailed:"Transaction failed",
    disclaimer:"Trading crypto is risky. Prices can go down. Only trade what you can afford to lose.",
    connectFirst:"Connect Wallet",
    waitingWallet:"Confirm in your wallet…",
    noWallet:"No wallet detected",
    noWalletMsg:"Open this page inside your wallet's built-in browser (MetaMask or Coinbase Wallet app), or install the MetaMask extension on desktop — then choose Connect again."
  },
  contracts: {
    title:"Contracts",
    sub:"All contract addresses, linked on BaseScan.",
    rows:[
      ["EVA Core Token", "0x0A834888B15d249f55498Dd16ac8a64B8c258396"],
      ["Founder Vesting", "0x5247Ca840cc570daAd69a02Aeb90C011Ab1D1A43"],
      ["Engine Hub H2", "0x57025c9B3d2E691422EE9026f7eb2B582A2e0b51"],
      ["Incident Registry", "0x51a8c2205e51900Df394f85184a2A4E0A36EF0cc"],
      ["Adaptive Defense", "0xe51e89D9E81F775F694C852be01B2b9d41c82158"]
    ],
    view:"View on BaseScan", copied:"Copied"
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
    tagline:"مصمَّمة ضد سحب البساط واستنزاف المجمعات.",
    sub:"عملة يُحتسب سعرها عبر المنحنى الرياضي، ونظام مناعة يعمل على البلوكشين.",
    ctaBuy:"شراء EVA", ctaLearn:"اقرأ المزيد",
    price:"السعر", perEva:"لكل EVA"
  },
  stats: { price:"السعر", mcap:"القيمة السوقية", supply:"إجمالي المعروض", reserve:"الاحتياطي" },
  about: {
    title:"ما هي EVA؟",
    p1:"EVA عملة رقمية على شبكة Base، يُستمد سعرها من معادلة المنحنى الرياضي — لا من مجمع سيولة يمكن استنزافه. كل عملية شراء تموّل عمليات البيع اللاحقة عبر احتياطي ذاتي التمويل، فلا يوجد مجمع يمكن للهلع إفراغه.",
    p2:"وتشتمل EVA على نظام مناعة يعمل على البلوكتشين: يرصد الحوادث وضغوط السوق وينشر تقييمه على البلوكتشين — دون المساس بالشيفرة الأساسية للعملة. وأي استجابة تتجاوز الحدود المعتمدة مسبقًا في البروتوكول تتطلب حوكمة المجتمع."
  },
  benefits: {
    title:"لماذا EVA؟",
    items:[
      {t:"بلا مفاتيح تحكم", d:"لا يملك أحد صلاحية تحريك الاحتياطي."},
      {t:"بلا مجمع قابل للاستنزاف", d:"السعر من منحنى البيع والشراء لا من مجمع مشترك."},
      {t:"تمويل ذاتي", d:"المشتريات تموّل الاحتياطي الذي يدفع المبيعات اللاحقة."},
      {t:"الحرق", d:"ضرائب التداول تشتري EVA وتحرقها مع نمو النشاط."},
      {t:"مكافآت التخزين", d:"عائد مقابل تجميد العملة."},
      {t:"مناعة على البلوكتشين", d:"يرصد التهديدات وينشر تقييمه على البلوكتشين."}
    ]
  },
  problems: {
    title:"تحديات تعالجها EVA",
    sub:"أسباب حقيقية أدت إلى انهيار عملات فعلية — عولجت بالتصميم لا بالوعود.",
    items:[
      {p:"سحب البساط والاستنزاف الإداري", s:"لا توجد في EVA مفاتيح تحكم أو دوال خفية لسحب الأموال — ولا يملك أحد صلاحية تحريك الاحتياطي."},
      {p:"استنزاف مجمعات السيولة", s:"تُدفع عمليات البيع من احتياطي مخصص لا من مجمع مشترك — فلا يمكن لموجة خروج إفراغه."},
      {p:"الدوامة السعرية المدمرة", s:"البيع بالسعر التكاملي والاحتياطي ذاتي التمويل مصممان لكسر حلقة الهلع: كل عملية شراء تعمّق الاحتياطي الداعم للمبيعات اللاحقة."},
      {p:"تلاعب كبار الحائزين", s:"حد أقصى لكل معاملة، ومعاملة واحدة في الكتلة، وقاطع طوارئ يحدّ من قدرة أي طرف على تحريك السوق دفعة واحدة."},
      {p:"اختراقات بلا استجابة", s:"يسجّل نظام المناعة كل حادثة على البلوكتشين وينشر تقييمه الدفاعي؛ والإجراءات التي تتجاوز الحدود المعتمدة تتطلب تصويت حوكمة."}
    ]
  },
  immune: {
    title:"نظام المناعة",
    sub:"عقدان ذكيان مستقلان يدعمان قلب EVA؛ لا يمسان الأموال ولا يغيّران أي إعدادات — يرصدان ويسجّلان ويقدّمان التوصيات.",
    registry:{t:"سجل الحوادث", d:"سجل دائم على البلوكتشين لكل حادثة مُبلَّغ عنها — اختراقات وحالات شاذة وصدمات سوقية — مصنّف ومقيَّم الخطورة. مضاد للرسائل المزعجة بالتصميم: قيود على معدل البلاغات مع مسارات طوارئ للبلاغات الحرجة."},
    defense:{t:"الدفاع التكيّفي", d:"يقرأ سجل الحوادث وإشارات السوق الحية (التقلب والعمق ومتوسط السعر) ويحتسب مستوى دفاع من 0 إلى 3. يتصاعد فورًا مع الضغط الحقيقي، ويهدأ بعد استقرار متواصل. لا يمكن للحوادث وحدها رفع المستوى دون تأكيد من السوق."},
    note:"دور استشاري فقط: لا يمكنه إيقاف التداول أو تحريك الأموال أو تعديل الإعدادات. الاستجابات الأوسع تتم عبر حوكمة المجتمع."
  },
  tokenomics: {
    title:"الاقتصاد الرمزي",
    supply:"إجمالي المعروض 21,000,000 EVA — ثابت للأبد.",
    rows:[
      ["منحنى البيع والشراء", "9,870,000", "47%"],
      ["المؤسس (مُستحَق + سائل)", "3,000,000", "14.3%"],
      ["مكافآت التخزين (4 سنوات)", "2,100,000", "10%"],
      ["احتياطي الترحيل", "2,100,000", "10%"],
      ["التوزيع المجاني", "1,680,000", "8%"],
      ["الخزانة", "1,250,000", "6%"],
      ["النظام البيئي", "1,000,000", "4.7%"]
    ],
    taxes:"ضرائب التداول الحالية: 1% على الشراء · 1.5% على البيع — تُستخدم للحرق ومكافآت المخزِّنين والخزانة."
  },
  trade: {
    title:"تداول EVA",
    sub:"تداول مباشر مع منحنى السعر. أنت من يوقّع كل معاملة من محفظتك — الموقع لا يمسُّ مفاتيحك الخاصة أبدًا.",
    buyTab:"شراء", sellTab:"بيع",
    youPay:"تدفع", youReceive:"تستلم (تقديري)",
    evaPay:"تدفع", ethReceive:"تستلم (تقديري)",
    price:"السعر", slippage:"حد الانزلاق السعري",
    balance:"الرصيد", max:"الحد الأقصى",
    approveNote:"بيع بنقرة واحدة — لا حاجة لمعاملة موافقة منفصلة.",
    buyBtn:"شراء EVA", sellBtn:"بيع EVA",
    notLive:"التداول غير متاح بعد — سيُفتتح عند الإطلاق.",
    txSent:"تم إرسال المعاملة", txConfirmed:"تم التأكيد", txFailed:"فشلت المعاملة",
    disclaimer:"تداول العملات الرقمية محفوف بالمخاطر. قد تنخفض الأسعار. لا تتداول إلا بما يمكنك تحمّل خسارته.",
    connectFirst:"ربط المحفظة",
    waitingWallet:"أكِّد المعاملة من محفظتك…",
    noWallet:"لم يتم العثور على محفظة",
    noWalletMsg:"افتح الصفحة من المتصفح المدمج في تطبيق محفظتك (MetaMask أو Coinbase Wallet)، أو ثبّت إضافة MetaMask على الحاسوب — ثم اضغط ربط المحفظة مجددًا."
  },
  contracts: {
    title:"العقود",
    sub:"جميع العناوين على BaseScan.",
    rows:[
      ["عملة EVA الأساسية", "0x0A834888B15d249f55498Dd16ac8a64B8c258396"],
      ["استحقاق المؤسس", "0x5247Ca840cc570daAd69a02Aeb90C011Ab1D1A43"],
      ["مركز المحركات H2", "0x57025c9B3d2E691422EE9026f7eb2B582A2e0b51"],
      ["سجل الحوادث", "0x51a8c2205e51900Df394f85184a2A4E0A36EF0cc"],
      ["الدفاع التكيّفي", "0xe51e89D9E81F775F694C852be01B2b9d41c82158"]
    ],
    view:"عرض على BaseScan", copied:"تم النسخ"
  },
  footer: { rights:"EVA — عملة رقمية على Base. تُبنى في العلن.", risk:"العملات الرقمية متقلبة. قم بأبحاثك الخاصة." }
}
};
