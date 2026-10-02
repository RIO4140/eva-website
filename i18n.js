// EVA Website i18n dictionary — auto-detects visitor device language (ar/en)
const I18N = {
en: {
  dir: "ltr", langName: "العربية",
  nav: { about:"About", benefits:"Why EVA", problems:"Problems Solved", immune:"Immune System", tokenomics:"Tokenomics", trade:"Trade", contracts:"Contracts" },
  wallet: { connect:"Connect Wallet", connected:"Connected", wrongNetwork:"Switch to Base", disconnect:"Disconnect" },
  hero: {
    badge:"DeFi Token on Base",
    title:"EVA",
    tagline:"21 million coins. Not a single admin key.",
    sub:"Priced by a bonding curve on Base — no liquidity pool to drain.",
    ctaBuy:"Buy EVA", ctaLearn:"Learn more",
    price:"Price", perEva:"per EVA"
  },
  stats: { price:"Price", mcap:"Market Cap", supply:"Total Supply", reserve:"Reserve" },
  about: {
    title:"What is EVA?",
    p1:"EVA is a digital currency on the Base network with a permanently fixed supply of 21,000,000 — not one coin can ever be added.",
    p2:"Its price is set by a bonding curve, not a liquidity pool: there is no shared pool to drain, and every purchase funds the reserve that pays future sales. There are no admin keys — any change must pass a public on-chain vote. Around the core, 15 smart contracts are already deployed on Base: soulbound loyalty badges, permissionless automation, a live 12-signal danger score, a multisig treasury, streaming payments, vesting, and more."
  },
  benefits: {
    title:"Why EVA?",
    items:[
      {t:"Fixed supply: 21,000,000.", d:"The number can never change. Scarcity is written into the contract, not promised in a roadmap."},
      {t:"Zero admin keys.", d:"No master switch exists. Nobody can freeze, mint, or drain anything — every change requires a public on-chain vote."},
      {t:"Price is a math formula.", d:"A bonding curve sets the price — not market makers, not sentiment. Every trade executes at its own curve price."},
      {t:"15 contracts deployed on Base.", d:"A working ecosystem around the core: loyalty badges, automation, risk monitoring, multisig treasury, streaming payments, vesting, subscriptions, and a token factory."},
      {t:"Loyalty that can't be bought.", d:"Soulbound badges grow with your balance and holding time — on-chain standing that can't be transferred, only earned."},
      {t:"Automatic buy-and-burn.", d:"1% on buys and 1.5% on sells flow into buybacks and burns once activity thresholds are met — the supply only shrinks."},
      {t:"Every purchase strengthens the next sale.", d:"Buyers fund a dedicated reserve that pays future sellers. The deeper the reserve, the stronger every exit."},
      {t:"A live danger reading.", d:"Twelve market and incident signals fuse into a single on-chain score — from calm to critical — published for everyone to see."}
    ]
  },
  problems: {
    title:"Problems EVA solves",
    sub:"Reasons real tokens have collapsed — addressed by design, not by promises.",
    items:[
      {p:"Rug pulls and admin drains", s:"EVA has no admin keys and no privileged drain functions. No one can drain the reserve."},
      {p:"Liquidity pool drains", s:"Sales are paid from a dedicated reserve, not a shared pool — every seller exits at their own curve price, in order."},
      {p:"Death spirals", s:"Integral-price sales and the self-funding reserve are designed to break the panic cycle: each purchase deepens the reserve backing future sales."},
      {p:"Large-holder manipulation", s:"Per-transaction caps, per-block trade limits, and a circuit breaker limit the extent to which any single actor can move the market at once."},
      {p:"Hacks with no response", s:"The immune system logs every reported incident on-chain and publishes its defense assessment; countermeasures beyond pre-authorized bounds require a governance vote."}
    ]
  },
  immune: {
    title:"The Immune System",
    sub:"Two independent smart contracts support the EVA core. They cannot access funds or change parameters — they monitor, record, and advise.",
    registry:{t:"Incident Registry", d:"A permanent on-chain record of every reported incident — hacks, anomalies, market shocks — each with a severity rating. Spam-resistant by design, with priority handling for critical reports."},
    defense:{t:"Adaptive Defense", d:"Reads the incident log and live market signals (volatility, depth, time-weighted average price) and computes a defense level from 0 to 3. The published level rises immediately under genuine pressure and falls after sustained calm. Incidents alone cannot trigger escalation without market corroboration."},
    note:"Like a smoke detector, not a firefighter: it monitors and raises the alarm — a governance vote decides the response. It cannot halt trading, move funds, or modify parameters."
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
    taxes:"Current trading taxes: 1.0% on purchases · 1.5% on sales — used for token burns, staker rewards, and the treasury."
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
    notLive:"Trading is not live yet — it opens at launch.",
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
      ["Engine Hub H2", "0x57025c9B3d2E691422EE9026f7eb2B582A2e0b51"],
      ["Incident Registry", "0x51a8c2205e51900Df394f85184a2A4E0A36EF0cc"],
      ["Adaptive Defense", "0xe51e89D9E81F775F694C852be01B2b9d41c82158"]
    ],
    view:"View on BaseScan", copied:"Copied"
  },
  sound: { toggleOn:"Play ambient music", toggleOff:"Mute music" },
  footer: { rights:"EVA — a token on Base. Built in the open.", risk:"Crypto assets are volatile. Do your own research." }
},
ar: {
  dir: "rtl", langName: "English",
  nav: { about:"عن العملة", benefits:"لماذا EVA", problems:"التحديات المحلولة", immune:"نظام المناعة", tokenomics:"الاقتصاد الرمزي", trade:"التداول", contracts:"العقود" },
  wallet: { connect:"ربط المحفظة", connected:"متصلة", wrongNetwork:"التبديل إلى شبكة Base", disconnect:"قطع الاتصال" },
  hero: {
    badge:"عملة رقمية على شبكة Base",
    title:"EVA",
    tagline:"21 مليون عملة. ولا مفتاح تحكم واحد.",
    sub:"عملة يُحتسب سعرها وفق المنحنى الرياضي على شبكة Base — بلا مجمع سيولة يمكن استنزافه.",
    ctaBuy:"شراء EVA", ctaLearn:"اعرف المزيد",
    price:"السعر", perEva:"لكل EVA"
  },
  stats: { price:"السعر", mcap:"القيمة السوقية", supply:"إجمالي المعروض", reserve:"الاحتياطي" },
  about: {
    title:"ما هي EVA؟",
    p1:"EVA عملة رقمية على شبكة Base بإجمالي معروض ثابت نهائيًا: 21,000,000 عملة — لا يمكن إضافة عملة واحدة أبدًا.",
    p2:"يُحدَّد سعرها عبر منحنى رياضي لا عبر مجمع سيولة: لا يوجد مجمع مشترك يمكن استنزافه، وكل عملية شراء تموّل الاحتياطي الذي يدفع المبيعات اللاحقة. ولا توجد مفاتيح تحكم — أي تغيير يجب أن يعبر تصويتًا علنيًا على البلوكتشين. وحول النواة، تم نشر 15 عقدًا ذكيًا على Base: شارات ولاء ملازمة للروح، وأتمتة بلا إذن، ودرجة خطر حيّة من 12 إشارة، وخزانة متعددة التوقيعات، ومدفوعات متدفقة، واستحقاقات، وغيرها."
  },
  benefits: {
    title:"لماذا EVA؟",
    items:[
      {t:"معروض ثابت: 21,000,000.", d:"الرقم لا يتغير أبدًا — الندرة مكتوبة في العقد لا موعودة في خارطة طريق."},
      {t:"صفر مفاتيح تحكم.", d:"لا يوجد زر رئيسي — لا أحد يستطيع تجميد شيء أو سكّ عملات أو سحب أموال؛ كل تغيير يتطلب تصويتًا علنيًا."},
      {t:"السعر معادلة رياضية.", d:"المنحنى الرياضي يحدد السعر — لا صناع سوق ولا معنويات؛ كل صفقة تُنفَّذ بسعرها الخاص على المنحنى."},
      {t:"15 عقدًا منشورًا على Base.", d:"منظومة عاملة حول النواة: شارات ولاء، وأتمتة، ومراقبة مخاطر، وخزانة متعددة التوقيعات، ومدفوعات متدفقة، واستحقاقات، واشتراكات، ومصنع عملات."},
      {t:"ولاءٌ لا يُشترى.", d:"شارات ملازمة للروح تنمو مع الرصيد ومدة الاحتفاظ — مكانة على البلوكتشين لا تُنقَل، بل تُستحَق."},
      {t:"شراء وحرق تلقائي.", d:"1% على الشراء و1.5% على البيع تتدفق إلى إعادة الشراء والحرق عند تحقق عتبات النشاط — المعروض يتناقص فقط."},
      {t:"كل شراء يقوّي البيع التالي.", d:"يموّل المشترون احتياطيًا مخصصًا يدفع البائعين اللاحقين — كلما عمُق الاحتياطي قويت كل عملية خروج."},
      {t:"قراءة خطر حيّة.", d:"تندمج 12 إشارة سوق وحوادث في درجة واحدة على البلوكتشين — من الهدوء إلى الحرج — منشورة للجميع."}
    ]
  },
  problems: {
    title:"تحديات تعالجها EVA",
    sub:"أسباب انهيار عملات حقيقية — عولجت بالتصميم لا بالوعود.",
    items:[
      {p:"سحب البساط والاستنزاف الإداري", s:"لا توجد في EVA مفاتيح تحكم أو دوال خفية لسحب الأموال — ولا يملك أحد صلاحية استنزاف الاحتياطي."},
      {p:"استنزاف مجمعات السيولة", s:"تُدفع عمليات البيع من احتياطي مخصص لا من مجمع مشترك — كل بائع يخرج بسعره الخاص على المنحنى بحسب الترتيب."},
      {p:"الدوامة السعرية المدمرة", s:"البيع بالسعر التكاملي والاحتياطي ذاتي التمويل مصممان لكسر حلقة الهلع: كل عملية شراء تعمّق الاحتياطي الداعم للمبيعات اللاحقة."},
      {p:"تلاعب كبار الحائزين", s:"حد أقصى لكل معاملة، ومعاملة واحدة في الكتلة، وقاطع طوارئ يحدّ من قدرة أي طرف على تحريك السوق دفعة واحدة."},
      {p:"اختراقات بلا استجابة", s:"يسجّل نظام المناعة كل حادثة مُبلَّغ عنها على البلوكتشين وينشر تقييمه الدفاعي؛ والإجراءات التي تتجاوز الحدود المعتمدة تتطلب تصويت الحوكمة."}
    ]
  },
  immune: {
    title:"نظام المناعة",
    sub:"عقدان ذكيان مستقلان يدعمان نواة EVA؛ لا يمسان الأموال ولا يغيّران أي إعدادات — يرصدان ويسجّلان ويقدّمان التوصيات.",
    registry:{t:"سجل الحوادث", d:"سجل دائم على البلوكتشين لكل حادثة مُبلَّغ عنها — اختراقات وحالات شاذة وصدمات سوقية — مصنّف ومقيَّم الخطورة. مضاد للرسائل المزعجة بالتصميم: قيود على معدل البلاغات مع مسارات طوارئ للبلاغات الحرجة."},
    defense:{t:"الدفاع التكيّفي", d:"يقرأ سجل الحوادث وإشارات السوق المباشرة (التقلب والعمق ومتوسط السعر) ويحتسب مستوى دفاع من 0 إلى 3. يرتفع المستوى المعلن فورًا مع الضغط الحقيقي، وينخفض بعد استقرار متواصل. لا يمكن للحوادث وحدها رفع المستوى دون تأكيد من السوق."},
    note:"ككاشف الدخان لا كرجل الإطفاء: يرصد ويطلق الإنذار — ويُبت في الاستجابة عبر تصويت الحوكمة. لا يمكنه إيقاف التداول أو تحريك الأموال أو تعديل الإعدادات."
  },
  tokenomics: {
    title:"الاقتصاد الرمزي",
    supply:"إجمالي المعروض 21,000,000 EVA — ثابت إلى الأبد.",
    rows:[
      ["المنحنى الرياضي", "9,870,000", "47%"],
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
    price:"السعر", slippage:"أقصى انزلاق سعري",
    balance:"الرصيد", max:"الحد الأقصى",
    approveNote:"بيع بنقرة واحدة — لا حاجة لمعاملة موافقة منفصلة.",
    buyBtn:"شراء EVA", sellBtn:"بيع EVA",
    notLive:"التداول غير متاح بعد — سيُفتتح عند الإطلاق.",
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
      ["مركز المحركات H2", "0x57025c9B3d2E691422EE9026f7eb2B582A2e0b51"],
      ["سجل الحوادث", "0x51a8c2205e51900Df394f85184a2A4E0A36EF0cc"],
      ["الدفاع التكيّفي", "0xe51e89D9E81F775F694C852be01B2b9d41c82158"]
    ],
    view:"عرض على BaseScan", copied:"تم النسخ"
  },
  sound: { toggleOn:"تشغيل الموسيقى الهادئة", toggleOff:"كتم الموسيقى" },
  footer: { rights:"EVA — عملة رقمية على Base. تُبنى في العلن.", risk:"العملات الرقمية متقلبة. قم بأبحاثك الخاصة." }
}
};
