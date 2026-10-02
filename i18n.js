// EVA Website i18n dictionary — auto-detects visitor device language (ar/en)
const I18N = {
en: {
  dir: "ltr", langName: "العربية",
  nav: { about:"About", benefits:"Why EVA", problems:"Risks", immune:"Monitoring & Alerts", tokenomics:"Tokenomics", trade:"Trade", contracts:"Contracts", docs:"Docs" },
  wallet: { connect:"Connect Wallet", connected:"Connected", wrongNetwork:"Switch to Base", disconnect:"Disconnect" },
  hero: {
    badge:"DeFi Token on Base",
    title:"EVA",
    tagline:"A digital currency priced by a published formula — not by any single party's decision — capped at 21 million units.",
    sub:"Priced by a bonding curve on Base.",
    ctaBuy:"Trading soon", ctaLearn:"Learn more",
    price:"Price", perEva:"per EVA",
    risk:"For informational purposes only — not financial advice. The contracts have not undergone an independent external audit yet."
  },
  common: { unavailable:"Not available" },
  stats: { price:"Price", mcap:"Market Cap", supply:"Circulating Supply", reserve:"Reserve" },
  about: {
    title:"What is EVA?",
    p1:"EVA is a digital currency on the Base network. Its units never exceed 21,000,000 — fixed in the contract code and cannot be raised.",
    p2:"No seller or broker sets its price — a published mathematical formula called the bonding curve does: the price rises with every buy and falls with every sell.",
    p3:"EVA is used for trading on the price curve, for staking in exchange for a share of trading fees, and for voting in governance.",
    p4:"The contracts' source code is available for review in an open repository, and the core contract's code is published on BaseScan. The contracts have not yet undergone an independent external security audit."
  },
  benefits: {
    title:"Why EVA?",
    verify:"Verify on BaseScan",
    items:[
      {t:"Hard cap: 21,000,000 coins.", d:"Burns reduce the circulating supply without exceeding the hard cap.", proof:"https://basescan.org/address/0x0A834888B15d249f55498Dd16ac8a64B8c258396"},
      {t:"No hidden admin keys.", d:"The core contract includes no administrative powers — changes happen only through public on-chain voting within programmed bounds. Note: voting power is currently concentrated with the founder and distributes gradually as trading spreads the supply.", proof:"https://basescan.org/address/0x0A834888B15d249f55498Dd16ac8a64B8c258396"},
      {t:"Bonding-curve pricing.", d:"Every trade executes at its own curve price. The curve does not guarantee a price floor; the price can fall during sell waves.", proof:"https://basescan.org/address/0x0A834888B15d249f55498Dd16ac8a64B8c258396"},
      {t:"A published smart-contract system.", d:"Supporting contracts for payments, vesting, subscriptions, and escrow — the full list with addresses is in the Contracts section below.", proof:"#contracts", proofLabel:"View the list"},
      {t:"Non-transferable loyalty badges.", d:"Standing earned by holding: badges grow with your balance and holding time, and cannot be sent to another address.", proof:"https://basescan.org/address/0xCBFB07577508118864cBeF3f177C834fdc161e6E"},
      {t:"Trading-fee distribution.", d:"Buy fees (1%) are split: 50% to stakers, 30% to the treasury, 20% to buy-and-burn. Sell fees (1.5%): 50% to stakers, 50% to the treasury. <a href='docs.html#fees'>Fee schedule</a>.", proof:"https://basescan.org/address/0x0A834888B15d249f55498Dd16ac8a64B8c258396"},
      {t:"A reserve funding future sales.", d:"Today's purchases flow into a dedicated reserve that pays future sales. The reserve guarantees neither a specific sale price nor coverage of large simultaneous sales.", proof:"https://basescan.org/address/0x0A834888B15d249f55498Dd16ac8a64B8c258396"},
      {t:"An advisory risk indicator.", d:"Market and incident signals fuse into one public indicator. Advisory only: it cannot halt trading or intervene.", proof:"https://basescan.org/address/0x3409accF2CA1E793D11EeF5D61bD33003691DAda"}
    ]
  },
  problems: {
    title:"Risks the design addresses",
    sub:"Common risks in digital-asset projects — and how EVA's design addresses each.",
    items:[
      {p:"Rug pulls (liquidity-draining scams)", s:"According to the published code — not yet independently audited — the published contracts include no function for draining the reserve, per our internal review."},
      {p:"Liquidity pool drains", s:"Sales are paid from a dedicated reserve, not a shared pool — every seller sells at their own curve price, according to their position on it."},
      {p:"Accelerating price crashes", s:"Curve-based selling and the dedicated reserve are designed to soften sell waves."},
      {p:"Large-holder manipulation", s:"Per-transaction caps, one trade per block, and an automatic circuit breaker in the core contract that temporarily halts trading on sharp drops — reducing the impact of large trades."},
      {p:"Hacks with no response", s:"The monitoring system logs every reported incident on-chain and publishes its defense assessment; countermeasures beyond pre-authorized bounds require a governance vote."}
    ]
  },
  immune: {
    title:"Monitoring & Alert System",
    sub:"Two independent smart contracts support the EVA core. They cannot access funds or change parameters — they monitor, record, and alert.",
    registry:{t:"Incident Registry", d:"A permanent on-chain record of every reported incident — hacks, anomalies, market shocks — each with a severity rating. It limits repeated reports, with priority handling for critical ones."},
    defense:{t:"Adaptive Alert Level", d:"Reads the incident log and live market signals (volatility, depth, time-weighted average price) and computes a published alert level. The published level rises immediately under genuine pressure and falls after sustained calm. Incidents alone cannot trigger escalation without market corroboration."},
    note:"It monitors and alerts only — it takes no action: responses are decided by governance vote. It cannot halt trading, move funds, or modify parameters. (The circuit breaker is a separate mechanism in the core contract.)"
  },
  tokenomics: {
    title:"Tokenomics",
    supply:"21,000,000 EVA — the maximum supply.",
    founder:"The founder's total share is 14.3%, most of it subject to vesting schedules. <a href='docs.html#vesting'>Details</a>.",
    rows:[
      ["Bonding curve", "9,870,000", "47%"],
      ["Founder (500K liquid + 2.5M vested)", "3,000,000", "14.3%"],
      ["Staking program allocation (4 years)", "2,100,000", "10%"],
      ["AVA holder migration pool", "2,100,000", "10%"],
      ["Airdrop", "1,680,000", "8%"],
      ["Treasury", "1,250,000", "6%"],
      ["Ecosystem", "1,000,000", "4.7%"]
    ],
    taxes:"Trading fees: 1% on buys · 1.5% on sells. <a href='docs.html#fees'>Fee schedule</a>.",
    migration:"\u201cMigration\u201d refers to holders of the previous AVA coin, under the migration mechanism in the contract."
  },
  trade: {
    title:"Trading interface",
    titleOff:"Trading interface (currently unavailable)",
    sub:"You sign every transaction from your own wallet — the site never asks for your private keys and never stores them.",
    buyTab:"Buy", sellTab:"Sell",
    youPay:"You pay", youReceive:"You receive (estimate)",
    evaPay:"You pay", ethReceive:"You receive (estimate)",
    price:"Price", slippage:"Max slippage",
    balance:"Balance", max:"Max",
    approveNote:"One-tap sell — no separate approval transaction needed.",
    buyBtn:"Buy EVA", sellBtn:"Sell EVA",
    notLive:"Network data is currently unavailable.",
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
      ["Detection-engine registry (H2)", "0x57025c9B3d2E691422EE9026f7eb2B582A2e0b51"],
      ["Incident Registry", "0x51a8c2205e51900Df394f85184a2A4E0A36EF0cc"],
      ["Adaptive Defense", "0xe51e89D9E81F775F694C852be01B2b9d41c82158"],
      ["Multisig Wallet", "0x9B66852aD70bB2A9F5c24B85121B4d92e735FcD3"],
      ["EVA Treasury", "0xf4F33F0E9Bde1F52Fb365b48b32A230cAe1CaF72"],
      ["Governance unit (limited scope)", "0xA91beA308d3Af1C39198381Bc49138579b8eB5cB"],
      ["Payment Splitter", "0xBa87A5F96D9363AC4A5c53178bfA2c11591c6B4A"],
      ["Keeper Scheduler", "0x278AeA29E5bDEDEB1Ecb6Ff019635260c3dEdC16"],
      ["Danger Score", "0x3409accF2CA1E793D11EeF5D61bD33003691DAda"],
      ["Adaptive Fee Engine V2", "0x504c162Aa48C21122371246Cdfd0C48ab22F8082"],
      ["Loyalty badges (non-transferable)", "0xCBFB07577508118864cBeF3f177C834fdc161e6E"],
      ["Reward Distributor", "0x4Fea207a3d52Ae883993a45E87883311827388Db"],
      ["NFT badges (transferable)", "0xe76AE7Df69D6fc1343b17E5f0fB3dEb0f766A3D0"],
      ["Conditional Escrow", "0x05f52c742B6cd0f2b063A244014d265FDdD81Ca4"],
      ["Payment Streams", "0x3FC58Dd718ffbE60b7AD8d92c91B90B1b370959f"],
      ["Subscriptions", "0xe31DF8fC121bdBEA96eD4FA48Ce10ce678b3dda6"],
      ["Token creation tool, separate from EVA", "0x830F2d58A5F4395A6d2464A878FBC45D8bA3aDda"],
      ["Vesting Schedules", "0x699C3C8a59b28110BB27152D777B4e7b1CC11d76"]
    ],
    view:"View on BaseScan", copied:"Copied"
  },
  sound: { toggleOn:"Play ambient music", toggleOff:"Mute music" },
  footer: { rights:"EVA — a token on Base.", code:"Code available for review", risk:"Crypto assets are volatile. Do your own research before trading." },
  docs: {
    title:"Documentation",
    sub:"Precise details behind the summary on the main page — with verification links.",
    back:"Back to main page",
    sections:[
      {id:"fees", t:"Fee schedule", blocks:[
        {p:"Trading fees in the core contract: 1% on buys (100 basis points) and 1.5% on sells (150 basis points)."},
        {table:{head:["Destination","Buy fee","Sell fee"], rows:[["Stakers","50%","50%"],["Treasury","30%","50%"],["Buy-and-burn","20%","—"]]}},
        {p:"Note: the buy-and-burn share executes only when sufficient curve liquidity is available; otherwise it is redirected to stakers."},
        {p:"Fees can only change through a public governance vote, and only within immutable programmed bounds: buys between 0.5% and 5%, sells between 1% and 8%. The values above are the current ones."},
        {p:"Engine signals are advisory: the engine hub may suggest values inside the same bounds; the core contract rejects anything outside them. The separate \u201cAdaptive Fee Engine V2\u201d contract is advisory only and does not control core fees."},
        {proof:"https://basescan.org/address/0x0A834888B15d249f55498Dd16ac8a64B8c258396"}
      ]},
      {id:"vesting", t:"Founder share & vesting", blocks:[
        {p:"The founder's total share is 3,000,000 EVA (14.3% of the maximum supply)."},
        {table:{head:["Tranche","Amount","Schedule"], rows:[["Liquid at launch","500,000","Available immediately"],["First tranche","2,000,000","Over 3 years with a 1-year initial lock (cliff)"],["Second tranche","500,000","Over 1 year, linear, no cliff"]]}},
        {p:"Vested funds are managed by the vesting contract."},
        {proof:"https://basescan.org/address/0x5247Ca840cc570daAd69a02Aeb90C011Ab1D1A43"}
      ]},
      {id:"governance", t:"Governance", blocks:[
        {p:"Who votes: EVA holders. A proposal passes with a quorum of 4% of the votable supply (frozen when the proposal is created), followed by a timelock before execution."},
        {p:"Voting power = balance + staked amount. At launch, the votable supply (500,000 coins) is entirely held by the founder; power distributes gradually as the coin sells on the curve."},
        {p:"Scope: voting changes parameters only within immutable programmed bounds (fees, thresholds, the engine hub). Nothing outside those bounds can be changed by vote."},
        {p:"Treasury: managed by a multisig wallet with a 1-of-1 threshold. The sole signer is currently the founder's address 0xE9B0CebeF9e93cAc7727A06D5ED5f8e3AE71e5F8. Any treasury spending requires that signature."},
        {p:"Governance unit: a separate contract with programmed limited powers; it currently has no compatible targets in the live system."},
        {proof:"https://basescan.org/address/0x0A834888B15d249f55498Dd16ac8a64B8c258396"}
      ]},
      {id:"monitor", t:"Risk indicator & circuit breaker", blocks:[
        {p:"The risk indicator fuses market signals (volatility, depth, time-weighted average price) with the incident registry into one public on-chain indicator. It is advisory only."},
        {p:"Numerical detail: 12 signals on a scale from 0 (calm) to 3 (critical)."},
        {p:"Circuit breaker: an automatic mechanism in the core contract \u2014 if the time-weighted average price falls more than 40% below its hourly reference, trading halts for 24 hours. No one can trigger it manually; the reference resets every hour."},
        {p:"Key distinction: the risk indicator is advisory and never halts trading, while the circuit breaker halts it automatically when its condition is met — two separate mechanisms."},
        {proof:"https://basescan.org/address/0x3409accF2CA1E793D11EeF5D61bD33003691DAda"}
      ]},
      {id:"migration", t:"Migration reserve", blocks:[
        {p:"\u201cMigration\u201d refers to holders of the previous AVA coin. 2,100,000 EVA (10%) is reserved for their migration under the migration mechanism in the core contract."},
        {p:"There is no migration deadline in the contract — unmigrated amounts remain in the reserve."},
        {proof:"https://basescan.org/address/0x0A834888B15d249f55498Dd16ac8a64B8c258396"}
      ]},
      {id:"contracts", t:"Contracts & verification", blocks:[
        {p:"Every contract below is deployed on Base and verifiable on BaseScan."},
        {contracts:true},
        {note:"The contracts have not undergone an independent external audit yet."}
      ]},
      {id:"risks", t:"EVA's own risks", blocks:[
        {p:"Price volatility: EVA's price rises with buys and falls with sells along the curve — it can drop sharply in sell waves, with no guaranteed floor."},
        {p:"No audit: the contracts have not undergone an independent external security audit — undiscovered vulnerabilities remain possible."},
        {p:"Reserve adequacy: the reserve is the ETH balance collected from purchases after fees. Every sale deducts its full value from the reserve, and sell fees leave it for stakers and the treasury. If simultaneous sales exceed the available balance, the transaction fails — there is no guarantee of covering all sales."},
        {p:"Wallet powers: the treasury is a 1-of-1 multisig, and the sole signer is the founder's address."},
        {p:"Founder share: 14.3% of the maximum supply, including 500,000 coins liquid since launch."},
        {p:"Regulatory: crypto regulatory frameworks differ across countries and may change — check your legal position before transacting."},
        {proof:"https://basescan.org/address/0x0A834888B15d249f55498Dd16ac8a64B8c258396"}
      ]},
      {id:"audit", t:"Audit status & risks", blocks:[
        {p:"No independent external security audit has been completed. Internal reviews were performed, including automated scanning (Slither), multiple reviewer passes, and 342 passing automated tests for the satellite suite."},
        {p:"Crypto assets are volatile and prices can fall. This content is for informational purposes only \u2014 not financial advice. Do your own research before trading."}
      ]}
    ]
  }
},
ar: {
  dir: "rtl", langName: "English",
  nav: { about:"عن العملة", benefits:"لماذا EVA", problems:"المخاطر", immune:"الرصد والإنذار", tokenomics:"الاقتصاد الرمزي", trade:"التداول", contracts:"العقود", docs:"التوثيق" },
  wallet: { connect:"ربط المحفظة", connected:"متصلة", wrongNetwork:"التبديل إلى شبكة Base", disconnect:"قطع الاتصال" },
  hero: {
    badge:"عملة رقمية على شبكة Base",
    title:"EVA",
    tagline:"عملة رقمية يُحسب سعرها بمعادلة منشورة لا بقرار جهة بعينها، وبحد أقصى 21 مليون وحدة.",
    sub:"يُحدَّد السعر عبر منحنى الربط على شبكة Base.",
    ctaBuy:"التداول قريبًا", ctaLearn:"اعرف المزيد",
    price:"السعر", perEva:"لكل EVA",
    risk:"المحتوى لأغراض معلوماتية وليس نصيحة مالية. لم تخضع العقود لتدقيق خارجي مستقل بعد."
  },
  common: { unavailable:"غير متاح حاليًا" },
  stats: { price:"السعر", mcap:"القيمة السوقية", supply:"المعروض المتداول", reserve:"الاحتياطي" },
  about: {
    title:"ما هي EVA؟",
    p1:"EVA عملة رقمية تعمل على شبكة Base، وعدد وحداتها لا يتجاوز 21,000,000 — محدد في كود العقد ولا يمكن رفعه.",
    p2:"لا يحدد سعرها بائع أو وسيط، بل معادلة رياضية منشورة تُسمى «منحنى الربط»: يرتفع السعر مع كل عملية شراء وينخفض مع كل عملية بيع.",
    p3:"تُستخدم EVA للتداول على منحنى السعر، وللتخزين مقابل حصة من رسوم التداول، وللتصويت في الحوكمة.",
    p4:"الكود المصدري للعقود متاح للمراجعة في مستودع مفتوح، وكود العقد الأساسي منشور على BaseScan. ولم تخضع العقود بعد لتدقيق أمني خارجي مستقل."
  },
  benefits: {
    title:"لماذا EVA؟",
    verify:"تحقق على BaseScan",
    items:[
      {t:"السقف الأقصى: 21,000,000 عملة.", d:"عمليات الحرق تخفض المعروض المتداول دون تجاوز الحد الأقصى.", proof:"https://basescan.org/address/0x0A834888B15d249f55498Dd16ac8a64B8c258396"},
      {t:"لا مفاتيح إدارية خفية.", d:"العقد الأساسي لا يتضمن صلاحيات إدارية — التغيير يتم فقط عبر تصويت علني على البلوكتشين ضمن حدود مبرمجة. ملاحظة: القوة التصويتية تتركز حاليًا بيد المؤسس وتتوزع تدريجيًا مع التداول.", proof:"https://basescan.org/address/0x0A834888B15d249f55498Dd16ac8a64B8c258396"},
      {t:"التسعير عبر منحنى الربط.", d:"كل صفقة تُنفَّذ بسعرها الخاص على المنحنى. المنحنى لا يضمن حدًا أدنى للسعر؛ فقد يهبط مع موجات البيع.", proof:"https://basescan.org/address/0x0A834888B15d249f55498Dd16ac8a64B8c258396"},
      {t:"منظومة عقود ذكية منشورة.", d:"عقود مساندة للمدفوعات والاستحقاق والاشتراكات والضمان — القائمة الكاملة بالعناوين في قسم العقود أدناه.", proof:"#contracts", proofLabel:"عرض القائمة"},
      {t:"شارات ولاء غير قابلة للتحويل.", d:"مكانة تُكتسب بالاحتفاظ: تنمو الشارات مع الرصيد ومدة الاحتفاظ، ولا يمكن إرسالها إلى عنوان آخر.", proof:"https://basescan.org/address/0xCBFB07577508118864cBeF3f177C834fdc161e6E"},
      {t:"توزيع رسوم التداول.", d:"رسوم الشراء (1%) تُوزَّع: 50% للمخزِّنين و30% للخزانة و20% لإعادة الشراء والحرق. رسوم البيع (1.5%): 50% للمخزِّنين و50% للخزانة. <a href='docs.html#fees'>جدول الرسوم</a>.", proof:"https://basescan.org/address/0x0A834888B15d249f55498Dd16ac8a64B8c258396"},
      {t:"احتياطي يموّل المبيعات اللاحقة.", d:"تتدفق مشتريات اليوم إلى احتياطي مخصص يدفع عمليات البيع اللاحقة. الاحتياطي لا يضمن سعر بيع محددًا، وقد لا يكفي لتغطية مبيعات متزامنة كبيرة.", proof:"https://basescan.org/address/0x0A834888B15d249f55498Dd16ac8a64B8c258396"},
      {t:"مؤشر مخاطر استشاري.", d:"تندمج إشارات السوق والحوادث في مؤشر واحد منشور للجميع. استشاري فقط: لا يوقف التداول ولا يتدخل فيه.", proof:"https://basescan.org/address/0x3409accF2CA1E793D11EeF5D61bD33003691DAda"}
    ]
  },
  problems: {
    title:"مخاطر يتناولها التصميم",
    sub:"مخاطر شائعة في المشاريع الرقمية — وكيف يتناولها تصميم EVA.",
    items:[
      {p:"الاحتيال بسحب السيولة (Rug Pull)", s:"وفق الكود المنشور — الذي لم يخضع لتدقيق خارجي مستقل بعد — لا تتضمن العقود المنشورة دالة لسحب الاحتياطي بحسب المراجعة الداخلية."},
      {p:"استنزاف مجمعات السيولة", s:"تُدفع عمليات البيع من احتياطي مخصص لا من مجمع مشترك — كل بائع يبيع بسعره الخاص على المنحنى بحسب موقعه عليه."},
      {p:"الهبوط السعري المتسارع", s:"البيع على المنحنى والاحتياطي المخصص مصممان للتخفيف من حدّة موجات البيع."},
      {p:"تلاعب كبار الحائزين", s:"حد أقصى لكل معاملة، ومعاملة واحدة في الكتلة، وقاطع طوارئ تلقائي في العقد الأساسي يوقف التداول مؤقتًا عند الهبوط الحاد، مما يقلّل أثر الصفقات الكبيرة."},
      {p:"اختراقات بلا استجابة", s:"يسجّل نظام الرصد كل حادثة مُبلَّغ عنها على البلوكتشين وينشر تقييمه الدفاعي؛ والإجراءات التي تتجاوز الحدود المعتمدة تتطلب تصويت الحوكمة."}
    ]
  },
  immune: {
    title:"نظام الرصد والإنذار",
    sub:"عقدان ذكيان مستقلان يدعمان العقد الأساسي لـEVA؛ لا يمسان الأموال ولا يغيّران الإعدادات — يرصدان ويسجّلان وينبّهان.",
    registry:{t:"سجل الحوادث", d:"سجل دائم على البلوكتشين لكل حادثة مُبلَّغ عنها — اختراقات وحالات شاذة وصدمات سوقية — مصنّف ومقيَّم الخطورة، ويحدّ من البلاغات المتكررة مع مسارات طوارئ للبلاغات الحرجة."},
    defense:{t:"مستوى التنبيه التكيّفي", d:"يقرأ سجل الحوادث وإشارات السوق المباشرة (التقلب والعمق ومتوسط السعر) ويحتسب مستوى تنبيه معلنًا. يرتفع المستوى المعلن فورًا مع الضغط الحقيقي، وينخفض بعد استقرار متواصل. لا يمكن للحوادث وحدها رفع المستوى دون تأكيد من السوق."},
    note:"يرصد وينبّه فقط، ولا ينفذ إجراءات: يُبت في الاستجابة عبر تصويت الحوكمة. لا يمكنه إيقاف التداول أو تحريك الأموال أو تعديل الإعدادات. (قاطع الطوارئ آلية منفصلة في العقد الأساسي.)"
  },
  tokenomics: {
    title:"الاقتصاد الرمزي",
    supply:"21,000,000 EVA — الحد الأقصى للمعروض.",
    founder:"إجمالي حصة المؤسس 14.3%، والجزء الأكبر منها يخضع لجداول استحقاق. <a href='docs.html#vesting'>التفاصيل</a>.",
    rows:[
      ["منحنى الربط", "9,870,000", "47%"],
      ["المؤسس (500 ألف سائل + 2.5 مليون باستحقاق)", "3,000,000", "14.3%"],
      ["مخصصات برنامج التخزين (4 سنوات)", "2,100,000", "10%"],
      ["احتياطي الترحيل", "2,100,000", "10%"],
      ["التوزيع المجاني (Airdrop)", "1,680,000", "8%"],
      ["الخزانة", "1,250,000", "6%"],
      ["النظام البيئي", "1,000,000", "4.7%"]
    ],
    taxes:"رسوم التداول: 1% على الشراء و1.5% على البيع. <a href='docs.html#fees'>جدول الرسوم</a>.",
    migration:"«الترحيل» يشير إلى حاملي عملة AVA السابقة، وفق آلية الترحيل في العقد."
  },
  trade: {
    title:"واجهة التداول",
    titleOff:"واجهة التداول (غير متاحة حاليًا)",
    sub:"أنت من يوقّع كل معاملة من محفظتك — لا يطلب الموقع مفاتيحك الخاصة ولا يخزّنها.",
    buyTab:"شراء", sellTab:"بيع",
    youPay:"تدفع", youReceive:"تستلم (تقديري)",
    evaPay:"تدفع", ethReceive:"تستلم (تقديري)",
    price:"السعر", slippage:"أقصى انزلاق سعري",
    balance:"الرصيد", max:"الحد الأقصى",
    approveNote:"بيع بنقرة واحدة — لا حاجة لمعاملة موافقة منفصلة.",
    buyBtn:"شراء EVA", sellBtn:"بيع EVA",
    notLive:"بيانات الشبكة غير متاحة حاليًا.",
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
      ["سجل محركات الرصد (H2)", "0x57025c9B3d2E691422EE9026f7eb2B582A2e0b51"],
      ["سجل الحوادث", "0x51a8c2205e51900Df394f85184a2A4E0A36EF0cc"],
      ["الدفاع التكيّفي", "0xe51e89D9E81F775F694C852be01B2b9d41c82158"],
      ["المحفظة متعددة التوقيعات", "0x9B66852aD70bB2A9F5c24B85121B4d92e735FcD3"],
      ["خزانة EVA", "0xf4F33F0E9Bde1F52Fb365b48b32A230cAe1CaF72"],
      ["وحدة الحوكمة (نطاق محدود)", "0xA91beA308d3Af1C39198381Bc49138579b8eB5cB"],
      ["موزّع المدفوعات", "0xBa87A5F96D9363AC4A5c53178bfA2c11591c6B4A"],
      ["مجدول الأتمتة", "0x278AeA29E5bDEDEB1Ecb6Ff019635260c3dEdC16"],
      ["مؤشر المخاطر", "0x3409accF2CA1E793D11EeF5D61bD33003691DAda"],
      ["محرك الرسوم التكيفي", "0x504c162Aa48C21122371246Cdfd0C48ab22F8082"],
      ["شارات الولاء (غير قابلة للتحويل)", "0xCBFB07577508118864cBeF3f177C834fdc161e6E"],
      ["موزّع المكافآت", "0x4Fea207a3d52Ae883993a45E87883311827388Db"],
      ["شارات NFT (قابلة للتحويل)", "0xe76AE7Df69D6fc1343b17E5f0fB3dEb0f766A3D0"],
      ["الضمان المشروط", "0x05f52c742B6cd0f2b063A244014d265FDdD81Ca4"],
      ["المدفوعات المتدفقة", "0x3FC58Dd718ffbE60b7AD8d92c91B90B1b370959f"],
      ["الاشتراكات", "0xe31DF8fC121bdBEA96eD4FA48Ce10ce678b3dda6"],
      ["أداة إنشاء رموز منفصلة عن EVA", "0x830F2d58A5F4395A6d2464A878FBC45D8bA3aDda"],
      ["جداول الاستحقاق", "0x699C3C8a59b28110BB27152D777B4e7b1CC11d76"]
    ],
    view:"عرض على BaseScan", copied:"تم النسخ"
  },
  sound: { toggleOn:"تشغيل الموسيقى الهادئة", toggleOff:"كتم الموسيقى" },
  footer: { rights:"EVA — عملة رقمية على Base.", code:"الكود متاح للمراجعة", risk:"العملات الرقمية متقلبة. أجرِ أبحاثك بنفسك قبل التداول." },
  docs: {
    title:"التوثيق",
    sub:"التفاصيل الدقيقة وراء الملخص في الصفحة الرئيسية — مع روابط التحقق.",
    back:"عودة إلى الصفحة الرئيسية",
    sections:[
      {id:"fees", t:"جدول الرسوم", blocks:[
        {p:"رسوم التداول في العقد الأساسي: 1% على الشراء (100 نقطة أساس) و1.5% على البيع (150 نقطة أساس)."},
        {table:{head:["الوجهة","رسوم الشراء","رسوم البيع"], rows:[["المخزِّنون","50%","50%"],["الخزانة","30%","50%"],["إعادة الشراء والحرق","20%","—"]]}},
        {p:"ملاحظة: حصة إعادة الشراء والحرق تُنفَّذ عند توفر سيولة كافية على المنحنى، وإلا أُعيد توجيهها للمخزِّنين."},
        {p:"لا يمكن تغيير الرسوم إلا عبر تصويت حوكمة علني، وضمن حدود ثابتة مبرمجة: الشراء بين 0.5% و5%، والبيع بين 1% و8%. القيم أعلاه هي القيم الحالية."},
        {p:"إشارات المحركات استشارية: قد يقترح مركز المحركات قيمًا ضمن الحدود نفسها، ويرفض العقد الأساسي أي قيمة خارجها. وعقد \u00abمحرك الرسوم التكيفي\u00bb المنفصل استشاري فقط ولا يتحكم في رسوم العقد الأساسي."},
        {proof:"https://basescan.org/address/0x0A834888B15d249f55498Dd16ac8a64B8c258396"}
      ]},
      {id:"vesting", t:"حصة المؤسس والاستحقاق", blocks:[
        {p:"إجمالي حصة المؤسس 3,000,000 عملة (14.3% من الحد الأقصى للمعروض)."},
        {table:{head:["الشريحة","المقدار","الجدول"], rows:[["سائلة عند الإطلاق","500,000","متاحة فورًا"],["الشريحة الأولى","2,000,000","على 3 سنوات مع فترة قفل أولية سنة"],["الشريحة الثانية","500,000","على سنة واحدة بدون فترة قفل"]]}},
        {p:"تُدار الأموال الخاضعة للاستحقاق عبر عقد الاستحقاق."},
        {proof:"https://basescan.org/address/0x5247Ca840cc570daAd69a02Aeb90C011Ab1D1A43"}
      ]},
      {id:"governance", t:"الحوكمة", blocks:[
        {p:"من يصوّت: حاملو عملة EVA. يُقر الاقتراح بنصاب 4% من المعروض القابل للتصويت (يُجمَّد عند إنشاء الاقتراح)، تليه مهلة زمنية قبل التنفيذ."},
        {p:"القوة التصويتية = الرصيد + الكمية المخزَّنة. يوم الإطلاق، المعروض القابل للتصويت (500 ألف عملة) بيد المؤسس بالكامل، وتتوزع القوة تدريجيًا مع بيع العملة على المنحنى."},
        {p:"النطاق: يغيّر التصويت المعاملات ضمن حدود ثابتة مبرمجة فقط (الرسوم، العتبات، مركز المحركات). لا يمكن تغيير أي شيء خارج تلك الحدود بالتصويت."},
        {p:"الخزانة: تُدار عبر محفظة متعددة التوقيعات بعتبة 1 من 1. الموقّع الوحيد حاليًا هو عنوان المؤسس 0xE9B0CebeF9e93cAc7727A06D5ED5f8e3AE71e5F8. أي صرف من الخزانة يتطلب توقيعه."},
        {p:"وحدة الحوكمة: عقد منفصل بصلاحيات محدودة مبرمجة؛ ولا يملك حاليًا أهدافًا متوافقة في المنظومة الحية."},
        {proof:"https://basescan.org/address/0x0A834888B15d249f55498Dd16ac8a64B8c258396"}
      ]},
      {id:"monitor", t:"مؤشر المخاطر وقاطع الطوارئ", blocks:[
        {p:"يجمع مؤشر المخاطر إشارات السوق (التقلب والعمق ومتوسط السعر المرجح زمنيًا) مع سجل الحوادث في مؤشر واحد منشور على البلوكتشين. وهو استشاري فقط."},
        {p:"التفاصيل العددية: 12 إشارة على مقياس من 0 (هدوء) إلى 3 (حرج)."},
        {p:"قاطع الطوارئ: آلية تلقائية في العقد الأساسي \u2014 إذا هبط متوسط السعر المرجح زمنيًا بأكثر من 40% عن القيمة المرجعية خلال ساعة، يتوقف التداول 24 ساعة. لا يملك أي شخص تفعيله يدويًا؛ وتُعاد ضبط القيمة المرجعية كل ساعة."},
        {p:"فرق مهم: مؤشر المخاطر استشاري ولا يوقف التداول أبدًا، أما قاطع الطوارئ فيوقفه تلقائيًا عند تحقق شرطه — آليتان منفصلتان."},
        {proof:"https://basescan.org/address/0x3409accF2CA1E793D11EeF5D61bD33003691DAda"}
      ]},
      {id:"migration", t:"احتياطي الترحيل", blocks:[
        {p:"\u00abالترحيل\u00bb يشير إلى حاملي عملة AVA السابقة. خُصص 2,100,000 عملة (10%) لترحيلهم وفق آلية الترحيل في العقد الأساسي."},
        {p:"لا توجد مهلة زمنية للترحيل في العقد — الكمية غير المُرحَّلة تبقى في الاحتياطي."},
        {proof:"https://basescan.org/address/0x0A834888B15d249f55498Dd16ac8a64B8c258396"}
      ]},
      {id:"contracts", t:"العقود والتحقق", blocks:[
        {p:"كل عقد أدناه منشور على شبكة Base ويمكن التحقق منه على BaseScan."},
        {contracts:true},
        {note:"لم تخضع العقود لتدقيق خارجي مستقل بعد."}
      ]},
      {id:"risks", t:"مخاطر EVA نفسها", blocks:[
        {p:"تقلب السعر: سعر EVA يرتفع مع الشراء وينخفض مع البيع وفق المنحنى — قد يهبط بشدة في موجات البيع، ولا يوجد حد أدنى مضمون للسعر."},
        {p:"عدم التدقيق: لم تخضع العقود لتدقيق أمني خارجي مستقل بعد — احتمال وجود ثغرات غير مكتشفة قائم."},
        {p:"كفاية الاحتياطي: الاحتياطي هو رصيد ETH المجمَّع من المشتريات بعد خصم الرسوم. كل عملية بيع تخصم كامل قيمتها من الاحتياطي، ورسوم البيع تخرج منه إلى المخزِّنين والخزانة. إذا تجاوزت المبيعات المتزامنة الرصيد المتاح، تفشل المعاملة — لا يوجد ضمان بتغطية كل عمليات البيع."},
        {p:"صلاحيات المحفظة: الخزانة محفظة متعددة التوقيعات بعتبة 1 من 1، والموقّع الوحيد هو عنوان المؤسس."},
        {p:"حصة المؤسس: 14.3% من الحد الأقصى للمعروض، منها 500 ألف عملة سائلة منذ الإطلاق."},
        {p:"الجانب التنظيمي: الأطر التنظيمية للعملات الرقمية تختلف بين الدول وقد تتغير — تحقق من وضعك القانوني قبل التعامل."},
        {proof:"https://basescan.org/address/0x0A834888B15d249f55498Dd16ac8a64B8c258396"}
      ]},
      {id:"audit", t:"حالة التدقيق والمخاطر", blocks:[
        {p:"لم يكتمل أي تدقيق أمني خارجي مستقل. أُجريت مراجعات داخلية شملت فحصًا آليًا (Slither) ومراجعات متعددة و342 اختبارًا آليًا ناجحًا لحزمة العقود المساندة."},
        {p:"العملات الرقمية متقلبة وقد تنخفض أسعارها. المحتوى لأغراض معلوماتية وليس نصيحة مالية. أجرِ أبحاثك بنفسك قبل التداول."}
      ]}
    ]
  }
}
};
