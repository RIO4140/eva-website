// EVA Website i18n dictionary — auto-detects visitor device language (ar/en)
const I18N = {
en: {
  dir: "ltr", langName: "العربية",
  nav: { about:"About", benefits:"Why EVA", problems:"Problems Solved", immune:"Monitoring & Alerts", tokenomics:"Tokenomics", trade:"Trade", contracts:"Contracts" },
  wallet: { connect:"Connect Wallet", connected:"Connected", wrongNetwork:"Switch to Base", disconnect:"Disconnect" },
  hero: {
    badge:"DeFi Token on Base",
    title:"EVA",
    tagline:"21 million coins. Fixed. No individual admin powers.",
    sub:"Priced by a bonding curve on Base — no liquidity pool to drain.",
    ctaBuy:"Trading soon", ctaLearn:"Learn more",
    price:"Price", perEva:"per EVA",
    risk:"For informational purposes only — not financial advice. The contracts have not undergone an independent external audit yet."
  },
  common: { unavailable:"Not available" },
  stats: { price:"Price", mcap:"Market Cap", supply:"Circulating Supply", reserve:"Reserve" },
  about: {
    title:"What is EVA?",
    p1:"EVA is a digital currency on the Base network with a hard cap of 21,000,000 — written into the smart contract, never to rise.",
    p2:"Its price is set by a bonding curve, not a liquidity pool: there is no shared pool to drain, and every purchase funds the reserve that pays future sales. Any change must pass a public on-chain vote. Around the core contract, 15 smart contracts are deployed on Base: non-transferable loyalty badges, open automation, a live danger score, a multisig treasury, streaming payments, vesting schedules, subscriptions, conditional escrow, a reward distributor, and a token factory."
  },
  benefits: {
    title:"Why EVA?",
    items:[
      {t:"Hard cap: 21,000,000 coins.", d:"The cap is written into the smart contract and can never rise; burns reduce the circulating supply."},
      {t:"No individual admin powers.", d:"No centralized control exists — every change goes through a public on-chain vote."},
      {t:"Bonding-curve pricing.", d:"Every trade executes at its own curve price — no shared liquidity pool."},
      {t:"15 smart contracts on Base.", d:"A working system around the core contract — the full list with addresses is in the Contracts section below."},
      {t:"Non-transferable loyalty badges.", d:"Standing earned by holding: badges grow with your balance and holding time, and cannot be sent to another address."},
      {t:"Automatic buy-and-burn.", d:"Trading fees (1% on buys, 1.5% on sells) are split: 50% to stakers, 30% to the treasury, 20% to buy-and-burn."},
      {t:"A reserve funding future sales.", d:"Today's purchases flow into a dedicated reserve that pays tomorrow's sellers."},
      {t:"A live on-chain danger reading.", d:"Twelve market and incident signals fuse into one public score — from calm to critical."}
    ]
  },
  problems: {
    title:"Problems EVA solves",
    sub:"Why real tokens have collapsed — and how EVA's design addresses each cause.",
    items:[
      {p:"Rug pulls (liquidity-draining scams)", s:"According to the published code — not yet independently audited — there are no hidden drain functions, and no party can drain the reserve."},
      {p:"Liquidity pool drains", s:"Sales are paid from a dedicated reserve, not a shared pool — every seller exits at their own curve price, in order."},
      {p:"Accelerating price crashes", s:"Curve-based selling and the self-funding reserve are designed to soften sell waves: each purchase deepens the reserve backing future sales."},
      {p:"Large-holder manipulation", s:"Per-transaction caps, per-block trade limits, and an automatic circuit breaker (triggered by the contract itself on sharp drops, with no human involved) limit how far any single actor can move the market at once."},
      {p:"Hacks with no response", s:"The monitoring system logs every reported incident on-chain and publishes its defense assessment; countermeasures beyond pre-authorized bounds require a governance vote."}
    ]
  },
  immune: {
    title:"Monitoring & Alert System",
    sub:"Two independent smart contracts support the EVA core. They cannot access funds or change parameters — they monitor, record, and alert.",
    registry:{t:"Incident Registry", d:"A permanent on-chain record of every reported incident — hacks, anomalies, market shocks — each with a severity rating. It limits repeated reports, with priority handling for critical ones."},
    defense:{t:"Adaptive Defense", d:"Reads the incident log and live market signals (volatility, depth, time-weighted average price) and computes a defense level from 0 to 3. The published level rises immediately under genuine pressure and falls after sustained calm. Incidents alone cannot trigger escalation without market corroboration."},
    note:"It monitors and alerts only — it takes no action: responses are decided by governance vote. It cannot halt trading, move funds, or modify parameters."
  },
  tokenomics: {
    title:"Tokenomics",
    supply:"21,000,000 EVA — the hard cap is fixed in the contract and can never rise.",
    founder:"Vesting schedule: 500,000 liquid at launch + 2,000,000 over 3 years with a 1-year cliff + 500,000 over 1 year with no cliff.",
    rows:[
      ["Bonding curve", "9,870,000", "47%"],
      ["Founder (500K liquid + 2.5M vested)", "3,000,000", "14.3%"],
      ["Staking emissions (4 years)", "2,100,000", "10%"],
      ["AVA holder migration pool", "2,100,000", "10%"],
      ["Airdrop", "1,680,000", "8%"],
      ["Treasury", "1,250,000", "6%"],
      ["Ecosystem", "1,000,000", "4.7%"]
    ],
    taxes:"Current trading fees: 1% on buys · 1.5% on sells — split 50% to stakers, 30% to the treasury, 20% to buy-and-burn."
  },
  trade: {
    title:"Trade EVA",
    sub:"Trade directly with the bonding curve. You sign every transaction in your own wallet — this site never accesses your private keys.",
    buyTab:"Buy", sellTab:"Sell",
    youPay:"You pay", youReceive:"You receive (estimate)",
    evaPay:"You pay", ethReceive:"You receive (estimate)",
    price:"Price", slippage:"Max slippage",
    balance:"Balance", max:"Max",
    approveNote:"One-tap sell — no separate approval transaction needed.",
    buyBtn:"Buy EVA", sellBtn:"Sell EVA",
    notLive:"Could not reach the Base network — check your connection.",
    comingSoon:"Trading opens soon.",
    txSent:"Transaction sent", txConfirmed:"Confirmed", txFailed:"Transaction failed",
    disclaimer:"Trading crypto is risky. Prices can go down. Only trade what you can afford to lose.",
    connectFirst:"Connect Wallet",
    waitingWallet:"Confirm in your wallet…", enterAmount:"Enter an amount to continue.",
    noWallet:"No wallet detected",
    noWalletMsg:"Open this page inside your wallet's built-in browser (MetaMask or Coinbase Wallet app), or install the MetaMask extension on desktop — then choose Connect again."
  },
  contracts: {
    title:"Contracts",
    sub:"All contract addresses, with links to BaseScan.",
    rows:[
      ["EVA Core Token", "0x0A834888B15d249f55498Dd16ac8a64B8c258396"],
      ["Founder Vesting", "0x5247Ca840cc570daAd69a02Aeb90C011Ab1D1A43"],
      ["Engine Hub H2 (engine registry)", "0x57025c9B3d2E691422EE9026f7eb2B582A2e0b51"],
      ["Incident Registry", "0x51a8c2205e51900Df394f85184a2A4E0A36EF0cc"],
      ["Adaptive Defense", "0xe51e89D9E81F775F694C852be01B2b9d41c82158"],
      ["Multisig Wallet", "0x9B66852aD70bB2A9F5c24B85121B4d92e735FcD3"],
      ["EVA Treasury", "0xf4F33F0E9Bde1F52Fb365b48b32A230cAe1CaF72"],
      ["Bounded Governance", "0xA91beA308d3Af1C39198381Bc49138579b8eB5cB"],
      ["Payment Splitter", "0xBa87A5F96D9363AC4A5c53178bfA2c11591c6B4A"],
      ["Keeper Scheduler", "0x278AeA29E5bDEDEB1Ecb6Ff019635260c3dEdC16"],
      ["Danger Score", "0x3409accF2CA1E793D11EeF5D61bD33003691DAda"],
      ["Adaptive Fee Engine V2", "0x504c162Aa48C21122371246Cdfd0C48ab22F8082"],
      ["Loyalty Badge", "0xCBFB07577508118864cBeF3f177C834fdc161e6E"],
      ["Reward Distributor", "0x4Fea207a3d52Ae883993a45E87883311827388Db"],
      ["EVA NFT Badges", "0xe76AE7Df69D6fc1343b17E5f0fB3dEb0f766A3D0"],
      ["Conditional Escrow", "0x05f52c742B6cd0f2b063A244014d265FDdD81Ca4"],
      ["Payment Streams", "0x3FC58Dd718ffbE60b7AD8d92c91B90B1b370959f"],
      ["Subscriptions", "0xe31DF8fC121bdBEA96eD4FA48Ce10ce678b3dda6"],
      ["Token Factory (create new tokens)", "0x830F2d58A5F4395A6d2464A878FBC45D8bA3aDda"],
      ["Vesting Schedules", "0x699C3C8a59b28110BB27152D777B4e7b1CC11d76"]
    ],
    view:"View on BaseScan", copied:"Copied"
  },
  sound: { toggleOn:"Play ambient music", toggleOff:"Mute music" },
  footer: { rights:"EVA — a token on Base. Open-source code.", risk:"Crypto assets are volatile. Do your own research before trading." }
},
ar: {
  dir: "rtl", langName: "English",
  nav: { about:"عن العملة", benefits:"لماذا EVA", problems:"التحديات المحلولة", immune:"الرصد والإنذار", tokenomics:"الاقتصاد الرمزي", trade:"التداول", contracts:"العقود" },
  wallet: { connect:"ربط المحفظة", connected:"متصلة", wrongNetwork:"التبديل إلى شبكة Base", disconnect:"قطع الاتصال" },
  hero: {
    badge:"عملة رقمية على شبكة Base",
    title:"EVA",
    tagline:"21 مليون عملة ثابتة. بلا صلاحيات إدارية فردية.",
    sub:"يُحدَّد السعر عبر منحنى الربط على شبكة Base — بلا مجمع سيولة يمكن استنزافه.",
    ctaBuy:"التداول قريبًا", ctaLearn:"اعرف المزيد",
    price:"السعر", perEva:"لكل EVA",
    risk:"المحتوى لأغراض معلوماتية وليس نصيحة مالية. لم تخضع العقود لتدقيق خارجي مستقل بعد."
  },
  common: { unavailable:"غير متاح حاليًا" },
  stats: { price:"السعر", mcap:"القيمة السوقية", supply:"المعروض المتداول", reserve:"الاحتياطي" },
  about: {
    title:"ما هي EVA؟",
    p1:"EVA عملة رقمية على شبكة Base بسقف أقصى 21,000,000 عملة — مكتوب في العقد الذكي، ولا يرتفع أبدًا.",
    p2:"يُحدَّد سعرها عبر منحنى الربط (Bonding Curve) لا عبر مجمع سيولة: لا يوجد مجمع مشترك يمكن استنزافه، وكل عملية شراء تموّل الاحتياطي الذي يدفع المبيعات اللاحقة. أي تغيير يجب أن يعبر تصويتًا علنيًا على البلوكتشين. وحول العقد الأساسي، تم نشر 15 عقدًا ذكيًا على Base: شارات ولاء غير قابلة للتحويل، وأتمتة مفتوحة للجميع، ودرجة خطر حيّة، وخزانة متعددة التوقيعات، ومدفوعات متدفقة، وجداول استحقاق، واشتراكات، وضمان مشروط، وموزّع مكافآت، ومصنع عملات."
  },
  benefits: {
    title:"لماذا EVA؟",
    items:[
      {t:"السقف الأقصى: 21,000,000 عملة.", d:"السقف محدد في العقد الذكي ولا يرتفع أبدًا؛ وعمليات الحرق تخفض المعروض المتداول."},
      {t:"بلا صلاحيات تحكم فردية.", d:"لا توجد صلاحية تحكم مركزية — أي تغيير يمر عبر تصويت علني على البلوكتشين."},
      {t:"التسعير عبر منحنى الربط.", d:"كل صفقة تُنفَّذ بسعرها الخاص على المنحنى — بلا مجمع سيولة مشترك."},
      {t:"15 عقدًا ذكيًا على Base.", d:"منظومة عاملة حول العقد الأساسي — القائمة الكاملة بالعناوين في قسم العقود أدناه."},
      {t:"شارات ولاء غير قابلة للتحويل.", d:"مكانة تُكتسب بالاحتفاظ: تنمو الشارات مع الرصيد ومدة الاحتفاظ، ولا يمكن إرسالها إلى عنوان آخر."},
      {t:"إعادة شراء وحرق تلقائية.", d:"تُوزَّع رسوم التداول (1% على الشراء و1.5% على البيع): 50% للمخزِّنين، و30% للخزانة، و20% لإعادة الشراء والحرق."},
      {t:"احتياطي يموّل المبيعات اللاحقة.", d:"تتدفق مشتريات اليوم إلى احتياطي مخصص يدفع مبيعات الغد."},
      {t:"قراءة خطر حيّة على البلوكتشين.", d:"تندمج 12 إشارة من السوق والحوادث في درجة واحدة منشورة للجميع — من الهدوء إلى الحرج."}
    ]
  },
  problems: {
    title:"تحديات تعالجها EVA",
    sub:"أسباب انهيار عملات حقيقية — وكيف يتعامل معها تصميم EVA.",
    items:[
      {p:"الاحتيال بسحب السيولة (Rug Pull)", s:"وفق الكود المنشور — الذي لم يخضع لتدقيق خارجي مستقل بعد — لا توجد دوال خفية لسحب الأموال، ولا تملك أي جهة صلاحية استنزاف الاحتياطي."},
      {p:"استنزاف مجمعات السيولة", s:"تُدفع عمليات البيع من احتياطي مخصص لا من مجمع مشترك — كل بائع يخرج بسعره الخاص على المنحنى بحسب الترتيب."},
      {p:"الهبوط السعري المتسارع", s:"البيع على المنحنى والاحتياطي ذاتي التمويل مصممان للتخفيف من حدّة موجات البيع: كل عملية شراء تعمّق الاحتياطي الداعم للمبيعات اللاحقة."},
      {p:"تلاعب كبار الحائزين", s:"حد أقصى لكل معاملة، ومعاملة واحدة في الكتلة، وقاطع طوارئ تلقائي (يُفعَّل ذاتيًا عند الهبوط الحاد دون تدخل بشري) يحدّ من قدرة أي طرف على تحريك السوق دفعة واحدة."},
      {p:"اختراقات بلا استجابة", s:"يسجّل نظام الرصد كل حادثة مُبلَّغ عنها على البلوكتشين وينشر تقييمه الدفاعي؛ والإجراءات التي تتجاوز الحدود المعتمدة تتطلب تصويت الحوكمة."}
    ]
  },
  immune: {
    title:"نظام الرصد والإنذار",
    sub:"عقدان ذكيان مستقلان يدعمان العقد الأساسي لـEVA؛ لا يمسان الأموال ولا يغيّران الإعدادات — يرصدان ويسجّلان وينبّهان.",
    registry:{t:"سجل الحوادث", d:"سجل دائم على البلوكتشين لكل حادثة مُبلَّغ عنها — اختراقات وحالات شاذة وصدمات سوقية — مصنّف ومقيَّم الخطورة، ويحدّ من البلاغات المتكررة مع مسارات طوارئ للبلاغات الحرجة."},
    defense:{t:"الدفاع التكيّفي", d:"يقرأ سجل الحوادث وإشارات السوق المباشرة (التقلب والعمق ومتوسط السعر) ويحتسب مستوى دفاع من 0 إلى 3. يرتفع المستوى المعلن فورًا مع الضغط الحقيقي، وينخفض بعد استقرار متواصل. لا يمكن للحوادث وحدها رفع المستوى دون تأكيد من السوق."},
    note:"يرصد وينبّه فقط، ولا ينفذ إجراءات: يُبت في الاستجابة عبر تصويت الحوكمة. لا يمكنه إيقاف التداول أو تحريك الأموال أو تعديل الإعدادات."
  },
  tokenomics: {
    title:"الاقتصاد الرمزي",
    supply:"21,000,000 EVA — السقف الأقصى ثابت في العقد ولا يرتفع أبدًا.",
    founder:"جدول الاستحقاق: 500,000 سائلة عند الإطلاق + 2,000,000 على 3 سنوات بمنحدر سنة + 500,000 على سنة بدون منحدر.",
    rows:[
      ["منحنى الربط", "9,870,000", "47%"],
      ["المؤسس (500 ألف سائل + 2.5 مليون باستحقاق)", "3,000,000", "14.3%"],
      ["مكافآت التخزين (4 سنوات)", "2,100,000", "10%"],
      ["احتياطي ترحيل حاملي AVA", "2,100,000", "10%"],
      ["التوزيع المجاني (Airdrop)", "1,680,000", "8%"],
      ["الخزانة", "1,250,000", "6%"],
      ["النظام البيئي", "1,000,000", "4.7%"]
    ],
    taxes:"رسوم التداول الحالية: 1% على الشراء و1.5% على البيع — تُوزَّع: 50% للمخزِّنين، و30% للخزانة، و20% لإعادة الشراء والحرق."
  },
  trade: {
    title:"تداول EVA",
    sub:"تداول مباشر مع منحنى السعر. أنت من يوقّع كل معاملة من محفظتك — الموقع لا يمسُّ مفاتيحك الخاصة أبدًا.",
    buyTab:"شراء", sellTab:"بيع",
    youPay:"تدفع", youReceive:"تستلم (تقديري)",
    evaPay:"تدفع", ethReceive:"تستلم (تقديري)",
    price:"السعر", slippage:"أقصى انزلاق سعري",
    balance:"الرصيد", max:"الحد الأقصى",
    approveNote:"بيع بنقرة واحدة — لا حاجة لمعاملة موافقة منفصلة.",
    buyBtn:"شراء EVA", sellBtn:"بيع EVA",
    notLive:"تعذّر الاتصال بشبكة Base — تحقق من اتصالك بالإنترنت.",
    comingSoon:"التداول سيُفتتح قريبًا.",
    txSent:"تم إرسال المعاملة", txConfirmed:"تم التأكيد", txFailed:"فشلت المعاملة",
    disclaimer:"تداول العملات الرقمية محفوف بالمخاطر. قد تنخفض الأسعار. لا تتداول إلا بما يمكنك تحمّل خسارته.",
    connectFirst:"ربط المحفظة",
    waitingWallet:"أكِّد المعاملة من محفظتك…", enterAmount:"أدخل المبلغ أولًا للمتابعة.",
    noWallet:"لم يتم العثور على محفظة",
    noWalletMsg:"افتح الصفحة من المتصفح المدمج في تطبيق محفظتك (MetaMask أو Coinbase Wallet)، أو ثبّت إضافة MetaMask على الحاسوب — ثم اضغط ربط المحفظة مجددًا."
  },
  contracts: {
    title:"العقود",
    sub:"جميع العناوين على BaseScan.",
    rows:[
      ["عملة EVA الأساسية", "0x0A834888B15d249f55498Dd16ac8a64B8c258396"],
      ["استحقاق المؤسس", "0x5247Ca840cc570daAd69a02Aeb90C011Ab1D1A43"],
      ["مركز المحركات H2 (سجل المحركات)", "0x57025c9B3d2E691422EE9026f7eb2B582A2e0b51"],
      ["سجل الحوادث", "0x51a8c2205e51900Df394f85184a2A4E0A36EF0cc"],
      ["الدفاع التكيّفي", "0xe51e89D9E81F775F694C852be01B2b9d41c82158"],
      ["المحفظة متعددة التوقيعات", "0x9B66852aD70bB2A9F5c24B85121B4d92e735FcD3"],
      ["خزانة EVA", "0xf4F33F0E9Bde1F52Fb365b48b32A230cAe1CaF72"],
      ["الحوكمة المقيّدة", "0xA91beA308d3Af1C39198381Bc49138579b8eB5cB"],
      ["موزّع المدفوعات", "0xBa87A5F96D9363AC4A5c53178bfA2c11591c6B4A"],
      ["مجدول الأتمتة", "0x278AeA29E5bDEDEB1Ecb6Ff019635260c3dEdC16"],
      ["درجة الخطر", "0x3409accF2CA1E793D11EeF5D61bD33003691DAda"],
      ["محرك الرسوم التكيفي", "0x504c162Aa48C21122371246Cdfd0C48ab22F8082"],
      ["شارة الولاء", "0xCBFB07577508118864cBeF3f177C834fdc161e6E"],
      ["موزّع المكافآت", "0x4Fea207a3d52Ae883993a45E87883311827388Db"],
      ["شارات EVA", "0xe76AE7Df69D6fc1343b17E5f0fB3dEb0f766A3D0"],
      ["الضمان المشروط", "0x05f52c742B6cd0f2b063A244014d265FDdD81Ca4"],
      ["المدفوعات المتدفقة", "0x3FC58Dd718ffbE60b7AD8d92c91B90B1b370959f"],
      ["الاشتراكات", "0xe31DF8fC121bdBEA96eD4FA48Ce10ce678b3dda6"],
      ["مصنع العملات (إنشاء عملات جديدة)", "0x830F2d58A5F4395A6d2464A878FBC45D8bA3aDda"],
      ["جداول الاستحقاق", "0x699C3C8a59b28110BB27152D777B4e7b1CC11d76"]
    ],
    view:"عرض على BaseScan", copied:"تم النسخ"
  },
  sound: { toggleOn:"تشغيل الموسيقى الهادئة", toggleOff:"كتم الموسيقى" },
  footer: { rights:"EVA — عملة رقمية على Base. الكود مفتوح المصدر.", risk:"العملات الرقمية متقلبة. أجرِ أبحاثك بنفسك قبل التداول." }
}
};
