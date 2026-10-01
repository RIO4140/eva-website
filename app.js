/* ================= EVA website app ================= */
"use strict";
const $  = (s, r=document) => r.querySelector(s);
const $$ = (s, r=document) => [...r.querySelectorAll(s)];

/* ---------- i18n ---------- */
let lang = localStorage.getItem("eva-lang") ||
  (((navigator.language || "en").toLowerCase().startsWith("ar")) ? "ar" : "en");

const t = path => path.split(".").reduce((o, k) => (o ? o[k] : undefined), I18N[lang]);

function applyI18n() {
  document.documentElement.lang = lang;
  document.documentElement.dir = I18N[lang].dir;
  document.title = "EVA — " + t("hero.badge");
  $$("[data-i18n]").forEach(el => {
    const v = t(el.dataset.i18n);
    if (typeof v === "string") el.textContent = v;
  });
  $("#lang-toggle").textContent = I18N[lang].langName;
  renderBenefits(); renderProblems(); renderTokenomics(); renderContracts();
  updateWalletBtn(); refreshTradeButtons(); observeReveals();
}

/* ---------- dynamic sections ---------- */
function renderBenefits() {
  $("#benefits-grid").innerHTML = t("benefits.items").map((b, i) => `
    <div class="benefit-card glass tilt-card reveal">
      <span class="benefit-num">${String(i + 1).padStart(2, "0")}</span>
      <h3>${b.t}</h3><p>${b.d}</p>
    </div>`).join("");
}
function renderProblems() {
  $("#problems-list").innerHTML = t("problems.items").map(p => `
    <div class="problem-row glass reveal">
      <div class="problem">${p.p}</div>
      <div class="prob-arrow" aria-hidden="true">→</div>
      <div class="solution">${p.s}</div>
    </div>`).join("");
}
function renderTokenomics() {
  $("#tokenomics-table tbody").innerHTML = t("tokenomics.rows").map(r => `
    <tr><td>${r[0]}</td><td>${r[1]}</td><td>${r[2]}</td></tr>`).join("");
}
const trunc = a => a.slice(0, 6) + "…" + a.slice(-4);
function renderContracts() {
  $("#contracts-list").innerHTML = t("contracts.rows").map(r => `
    <div class="contract-row glass reveal">
      <span class="contract-name">${r[0]}</span>
      <code class="contract-addr">${trunc(r[1])}</code>
      <span class="contract-actions">
        <button class="mini-btn copy-btn" type="button" data-addr="${r[1]}">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="12" height="12" rx="2"/><path d="M5 15V5a2 2 0 0 1 2-2h10"/></svg>
        </button>
        <a class="mini-btn" target="_blank" rel="noopener" href="https://basescan.org/address/${r[1]}">${t("contracts.view")}</a>
      </span>
    </div>`).join("");
  $$(".copy-btn").forEach(b => b.addEventListener("click", async () => {
    const addr = b.dataset.addr;
    try { await navigator.clipboard.writeText(addr); }
    catch {
      const ta = document.createElement("textarea");
      ta.value = addr; document.body.appendChild(ta); ta.select();
      document.execCommand("copy"); ta.remove();
    }
    const old = b.textContent;
    b.textContent = t("contracts.copied"); b.classList.add("copied");
    setTimeout(() => { b.textContent = old; b.classList.remove("copied"); }, 1600);
  }));
}

/* ---------- reveal on scroll ---------- */
let revealObs;
function observeReveals() {
  if (!revealObs) {
    revealObs = new IntersectionObserver(es => es.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add("visible"); revealObs.unobserve(e.target); }
    }), { threshold: 0.12 });
  }
  $$(".reveal:not(.visible)").forEach(el => revealObs.observe(el));
}

/* ---------- background: particles + constellation ---------- */
const reducedMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
const mouse = { x: -9999, y: -9999 };
function initCanvas() {
  const cv = $("#stars"), ctx = cv.getContext("2d");
  let W, H, parts = [];
  const resize = () => {
    W = cv.width = innerWidth; H = cv.height = innerHeight;
    const n = Math.min(130, Math.floor(W * H / 16000));
    parts = Array.from({ length: n }, () => ({
      x: Math.random() * W, y: Math.random() * H,
      vx: (Math.random() - .5) * .35, vy: (Math.random() - .5) * .35,
      r: Math.random() * 1.8 + .6
    }));
  };
  resize(); addEventListener("resize", resize);
  addEventListener("mousemove", e => { mouse.x = e.clientX; mouse.y = e.clientY; }, { passive: true });
  let running = true;
  document.addEventListener("visibilitychange", () => { running = !document.hidden; });
  (function tick() {
    requestAnimationFrame(tick);
    if (!running || reducedMotion) return;
    ctx.clearRect(0, 0, W, H);
    for (const p of parts) {
      const dx = p.x - mouse.x, dy = p.y - mouse.y, d = Math.hypot(dx, dy);
      if (d < 140 && d > 1) { p.x += dx / d * .7; p.y += dy / d * .7; }
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0) p.x = W; if (p.x > W) p.x = 0;
      if (p.y < 0) p.y = H; if (p.y > H) p.y = 0;
      ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, 7);
      ctx.fillStyle = "rgba(0,170,255,.55)"; ctx.fill();
    }
    ctx.lineWidth = .7;
    for (let i = 0; i < parts.length; i++) for (let j = i + 1; j < parts.length; j++) {
      const a = parts[i], b = parts[j], d = Math.hypot(a.x - b.x, a.y - b.y);
      if (d < 130) {
        ctx.strokeStyle = `rgba(0,170,255,${(1 - d / 130) * .16})`;
        ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
      }
    }
  })();
}

/* ---------- orbs parallax (mouse + scroll) ---------- */
function initOrbs() {
  if (reducedMotion) return;
  const orbs = $$(".orb");
  let tx = 0, ty = 0, cx = 0, cy = 0;
  addEventListener("mousemove", e => {
    tx = (e.clientX / innerWidth - .5); ty = (e.clientY / innerHeight - .5);
  }, { passive: true });
  (function loop() {
    requestAnimationFrame(loop);
    cx += (tx - cx) * .04; cy += (ty - cy) * .04;
    const sy = scrollY;
    for (const o of orbs) {
      const d = parseFloat(o.dataset.depth || .08);
      o.style.transform = `translate3d(${cx * d * 900}px, ${cy * d * 900 + sy * d * .5}px, 0)`;
    }
  })();
}

/* ---------- cursor follower / magnetic / tilt ---------- */
function initCursor() {
  if (!matchMedia("(pointer:fine)").matches || reducedMotion) return;
  const ring = $("#cursor-ring"), dot = $("#cursor-dot");
  let x = -99, y = -99, rx = -99, ry = -99;
  addEventListener("mousemove", e => { x = e.clientX; y = e.clientY; }, { passive: true });
  (function loop() {
    requestAnimationFrame(loop);
    rx += (x - rx) * .16; ry += (y - ry) * .16;
    ring.style.left = rx + "px"; ring.style.top = ry + "px";
    dot.style.left = x + "px"; dot.style.top = y + "px";
  })();
  document.addEventListener("mouseover", e => {
    ring.classList.toggle("hovering", !!e.target.closest("a,button,.tilt-card,input"));
  });
}
function initMagnetic() {
  if (!matchMedia("(pointer:fine)").matches || reducedMotion) return;
  $$(".magnetic").forEach(el => {
    el.addEventListener("mousemove", e => {
      const r = el.getBoundingClientRect();
      const dx = e.clientX - (r.left + r.width / 2), dy = e.clientY - (r.top + r.height / 2);
      el.style.transform = `translate(${dx * .12}px, ${dy * .18}px)`;
    });
    el.addEventListener("mouseleave", () => { el.style.transform = ""; });
  });
}
function initTilt() {
  if (!matchMedia("(pointer:fine)").matches || reducedMotion) return;
  $$(".tilt-card").forEach(el => {
    el.addEventListener("mousemove", e => {
      const r = el.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - .5, py = (e.clientY - r.top) / r.height - .5;
      el.style.transform = `perspective(800px) rotateX(${-py * 7}deg) rotateY(${px * 9}deg) translateY(-4px)`;
    });
    el.addEventListener("mouseleave", () => { el.style.transform = ""; });
  });
}

/* ---------- nav ---------- */
function initNav() {
  addEventListener("scroll", () => $("#nav").classList.toggle("scrolled", scrollY > 12), { passive: true });
  $("#menu-toggle").addEventListener("click", () => $("#nav-links").classList.toggle("open"));
  $$("#nav-links a").forEach(a => a.addEventListener("click", () => $("#nav-links").classList.remove("open")));
  $("#lang-toggle").addEventListener("click", () => {
    lang = lang === "en" ? "ar" : "en";
    localStorage.setItem("eva-lang", lang);
    applyI18n();
  });
}

/* ================= dApp ================= */
const CORE = "0x0A834888B15d249f55498Dd16ac8a64B8c258396";
const BASE_CHAIN_ID = 8453n;
const RPC = "https://mainnet.base.org";
const ABI = [
  "function buy(uint256 minEvaOut, uint256 deadline) payable returns (uint256)",
  "function sell(uint256 evaAmt, uint256 minEthOut, uint256 deadline) returns (uint256)",
  "function buyPreview(uint256 ethIn) view returns (uint256 evaOut, uint256 priceUSD8)",
  "function sellPreview(uint256 evaAmt) view returns (uint256 ethOut, uint256 priceUSD8)",
  "function curveReserveETH() view returns (uint256)",
  "function totalSupply() view returns (uint256)",
  "function decimals() view returns (uint8)",
  "function balanceOf(address) view returns (uint256)"
];
const roProvider = () => new ethers.JsonRpcProvider(RPC);
const coreRO = () => new ethers.Contract(CORE, ABI, roProvider());
let signer = null, coreSigner = null, account = null, chainOk = false, tradingLive = false;

const fmtUSD = p => {
  if (!isFinite(p) || p <= 0) return "—";
  if (p >= 1000) return "$" + p.toLocaleString("en-US", { maximumFractionDigits: 2 });
  if (p >= 1) return "$" + p.toFixed(4);
  return "$" + p.toFixed(6);
};
const fmtMcap = m => {
  if (!isFinite(m) || m <= 0) return "—";
  if (m >= 1e9) return "$" + (m / 1e9).toFixed(2) + "B";
  if (m >= 1e6) return "$" + (m / 1e6).toFixed(2) + "M";
  if (m >= 1e3) return "$" + (m / 1e3).toFixed(2) + "K";
  return "$" + m.toFixed(2);
};
const fmtEVA = v => { const n = Number(v); return isFinite(n) ? n.toLocaleString("en-US", { maximumFractionDigits: 2 }) : "—"; };
const fmtETH = v => { const n = Number(v); return isFinite(n) ? n.toLocaleString("en-US", { maximumFractionDigits: 5 }) : "—"; };
const trimDec = (s, d=4) => { const [i, f=""] = String(s).split("."); return f ? `${i}.${f.slice(0,d)}`.replace(/\.?0+$/,"") : i; };

/* ----- live stats ----- */
let statsAnimated = false;
function animateValue(el, target, fmt, dur = 1500) {
  const t0 = performance.now();
  (function step(now) {
    const k = Math.min(1, (now - t0) / dur), e = 1 - Math.pow(1 - k, 3);
    el.textContent = fmt(target * e);
    if (k < 1) requestAnimationFrame(step); else el.textContent = fmt(target);
  })(t0);
}
async function refreshStats() {
  try {
    const c = coreRO();
    const [, priceUSD8] = await c.buyPreview(ethers.parseEther("1"));
    const price = Number(priceUSD8) / 1e8;
    const mcap = price * 21_000_000;
    let supply = null, reserve = null;
    try { supply = Number(ethers.formatUnits(await c.totalSupply(), 18)); } catch {}
    try { reserve = Number(ethers.formatEther(await c.curveReserveETH())); } catch {}
    tradingLive = true;
    $("#trade-notlive").classList.add("hidden");
    const set = (id, v, fmt) => {
      const el = $(id);
      if (!statsAnimated) animateValue(el, v, fmt); else el.textContent = fmt(v);
    };
    set("#hero-price", price, fmtUSD);
    set("#stat-price", price, fmtUSD);
    set("#stat-mcap", mcap, fmtMcap);
    if (supply !== null) set("#stat-supply", supply, v => fmtEVA(v) + " EVA");
    if (reserve !== null) set("#stat-reserve", reserve, v => fmtETH(v) + " ETH");
    statsAnimated = true;
    refreshTradeButtons();
  } catch {
    tradingLive = false;
    $("#trade-notlive").classList.remove("hidden");
    ["#hero-price", "#stat-price", "#stat-mcap", "#stat-supply", "#stat-reserve"].forEach(id => $(id).textContent = "—");
    refreshTradeButtons();
  }
}

/* ----- wallet ----- */
const shortAddr = a => a.slice(0, 6) + "…" + a.slice(-4);
function updateWalletBtn() {
  const b = $("#wallet-btn");
  if (!account) { b.textContent = t("wallet.connect"); b.disabled = false; }
  else if (!chainOk) { b.textContent = t("wallet.wrongNetwork"); b.disabled = false; }
  else { b.textContent = shortAddr(account); b.disabled = false; }
  b.title = account ? t("wallet.disconnect") : "";
}
async function ensureChain() {
  const net = await new ethers.BrowserProvider(window.ethereum).getNetwork();
  if (net.chainId === BASE_CHAIN_ID) return true;
  try {
    await window.ethereum.request({ method: "wallet_switchEthereumChain", params: [{ chainId: "0x2105" }] });
    return (await new ethers.BrowserProvider(window.ethereum).getNetwork()).chainId === BASE_CHAIN_ID;
  } catch (e) {
    if (e.code === 4902) {
      try {
        await window.ethereum.request({ method: "wallet_addEthereumChain", params: [{
          chainId: "0x2105", chainName: "Base",
          nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
          rpcUrls: [RPC], blockExplorerUrls: ["https://basescan.org"]
        }]});
        return true;
      } catch { return false; }
    }
    return false;
  }
}
async function connectWallet() {
  if (typeof window.ethereum === "undefined") { txMsg("err", t("trade.connectFirst")); return; }
  try {
    const bp = new ethers.BrowserProvider(window.ethereum);
    const accs = await bp.send("eth_requestAccounts", []);
    account = accs[0];
    chainOk = await ensureChain();
    if (chainOk) {
      signer = await bp.getSigner();
      coreSigner = new ethers.Contract(CORE, ABI, signer);
    }
    updateWalletBtn(); refreshBalances(); refreshTradeButtons();
  } catch (e) {
    if (e.code !== 4001) txMsg("err", t("trade.txFailed"));
  }
}
function disconnect() {
  account = null; signer = null; coreSigner = null; chainOk = false;
  $("#eth-bal").textContent = "—"; $("#eva-bal").textContent = "—";
  updateWalletBtn(); refreshTradeButtons();
}
function initWallet() {
  $("#wallet-btn").addEventListener("click", async () => {
    if (!account) return connectWallet();
    if (!chainOk) { chainOk = await ensureChain(); if (chainOk) { const bp = new ethers.BrowserProvider(window.ethereum); signer = await bp.getSigner(); coreSigner = new ethers.Contract(CORE, ABI, signer); refreshBalances(); } updateWalletBtn(); refreshTradeButtons(); return; }
    disconnect();
  });
  if (window.ethereum) {
    window.ethereum.on("accountsChanged", a => { a.length ? (account = a[0], updateWalletBtn(), refreshBalances(), refreshTradeButtons()) : disconnect(); });
    window.ethereum.on("chainChanged", () => location.reload());
  }
}
async function refreshBalances() {
  if (!account || !chainOk) return;
  try {
    const p = roProvider(), c = coreRO();
    const [eth, eva] = await Promise.all([p.getBalance(account), c.balanceOf(account)]);
    $("#eth-bal").textContent = fmtETH(ethers.formatEther(eth));
    $("#eva-bal").textContent = fmtEVA(ethers.formatUnits(eva, 18));
  } catch {}
}

/* ----- trade UI ----- */
function txMsg(cls, html) {
  $("#tx-status").innerHTML = html ? `<span class="${cls}">${html}</span>` : "";
}
const txLink = h => `<a target="_blank" rel="noopener" href="https://basescan.org/tx/${h}">${h.slice(0, 10)}…</a>`;
function refreshTradeButtons() {
  const connected = account && chainOk;
  // enabled while live so the button itself can trigger wallet connect
  $("#buy-btn").disabled = !tradingLive;
  $("#sell-btn").disabled = !tradingLive;
  if (!account) {
    $("#buy-btn").textContent = t("trade.connectFirst");
    $("#sell-btn").textContent = t("trade.connectFirst");
  } else {
    $("#buy-btn").textContent = t("trade.buyBtn");
    $("#sell-btn").textContent = t("trade.sellBtn");
  }
}
const debounce = (fn, ms) => { let h; return (...a) => { clearTimeout(h); h = setTimeout(() => fn(...a), ms); }; };

async function previewBuy() {
  const inp = $("#buy-in").value.trim();
  if (!inp || Number(inp) <= 0 || !tradingLive) { $("#buy-out").textContent = "—"; $("#buy-price").textContent = "—"; return; }
  try {
    const [evaOut, priceUSD8] = await coreRO().buyPreview(ethers.parseEther(inp));
    $("#buy-out").textContent = trimDec(ethers.formatUnits(evaOut, 18));
    $("#buy-price").textContent = fmtUSD(Number(priceUSD8) / 1e8);
  } catch { $("#buy-out").textContent = "—"; $("#buy-price").textContent = "—"; }
}
async function previewSell() {
  const inp = $("#sell-in").value.trim();
  if (!inp || Number(inp) <= 0 || !tradingLive) { $("#sell-out").textContent = "—"; $("#sell-price").textContent = "—"; return; }
  try {
    const [ethOut, priceUSD8] = await coreRO().sellPreview(ethers.parseEther(inp));
    $("#sell-out").textContent = trimDec(ethers.formatEther(ethOut), 6);
    $("#sell-price").textContent = fmtUSD(Number(priceUSD8) / 1e8);
  } catch { $("#sell-out").textContent = "—"; $("#sell-price").textContent = "—"; }
}
const errText = e => {
  if (e.code === 4001) return "—";
  const m = (e.reason || e.shortMessage || e.message || "").toString();
  return m.length > 140 ? m.slice(0, 140) + "…" : m;
};
async function doBuy() {
  if (!coreSigner) return;
  const inp = $("#buy-in").value.trim();
  let val;
  try { val = ethers.parseEther(inp); } catch { return; }
  if (val <= 0n) return;
  txMsg("pending", t("trade.txSent") + "…");
  try {
    const [evaOut] = await coreRO().buyPreview(val);
    const minEvaOut = evaOut * 98n / 100n;
    const deadline = BigInt(Math.floor(Date.now() / 1000) + 1200);
    const tx = await coreSigner.buy(minEvaOut, deadline, { value: val });
    txMsg("pending", `${t("trade.txSent")}: ${txLink(tx.hash)}`);
    const rc = await tx.wait();
    txMsg(rc && rc.status === 1 ? "ok" : "err",
      `${rc && rc.status === 1 ? t("trade.txConfirmed") : t("trade.txFailed")}: ${txLink(tx.hash)}`);
    refreshBalances(); refreshStats();
  } catch (e) {
    const d = errText(e);
    txMsg("err", d === "—" ? t("trade.txFailed") : `${t("trade.txFailed")}: ${d}`);
  }
}
async function doSell() {
  if (!coreSigner) return;
  const inp = $("#sell-in").value.trim();
  let amt;
  try { amt = ethers.parseEther(inp); } catch { return; }
  if (amt <= 0n) return;
  txMsg("pending", t("trade.txSent") + "…");
  try {
    const [ethOut] = await coreRO().sellPreview(amt);
    const minEthOut = ethOut * 98n / 100n;
    const deadline = BigInt(Math.floor(Date.now() / 1000) + 1200);
    const tx = await coreSigner.sell(amt, minEthOut, deadline);
    txMsg("pending", `${t("trade.txSent")}: ${txLink(tx.hash)}`);
    const rc = await tx.wait();
    txMsg(rc && rc.status === 1 ? "ok" : "err",
      `${rc && rc.status === 1 ? t("trade.txConfirmed") : t("trade.txFailed")}: ${txLink(tx.hash)}`);
    refreshBalances(); refreshStats();
  } catch (e) {
    const d = errText(e);
    txMsg("err", d === "—" ? t("trade.txFailed") : `${t("trade.txFailed")}: ${d}`);
  }
}
function initTrade() {
  $("#tab-buy").addEventListener("click", () => {
    $("#tab-buy").classList.add("active"); $("#tab-sell").classList.remove("active");
    $("#panel-buy").classList.remove("hidden"); $("#panel-sell").classList.add("hidden");
  });
  $("#tab-sell").addEventListener("click", () => {
    $("#tab-sell").classList.add("active"); $("#tab-buy").classList.remove("active");
    $("#panel-sell").classList.remove("hidden"); $("#panel-buy").classList.add("hidden");
  });
  $("#buy-in").addEventListener("input", debounce(previewBuy, 450));
  $("#sell-in").addEventListener("input", debounce(previewSell, 450));
  $("#buy-btn").addEventListener("click", () => account ? doBuy() : connectWallet());
  $("#sell-btn").addEventListener("click", () => account ? doSell() : connectWallet());
  $("#eth-max").addEventListener("click", async () => {
    if (!account) return;
    try {
      const bal = await roProvider().getBalance(account);
      const gas = ethers.parseEther("0.0008");
      $("#buy-in").value = bal > gas ? ethers.formatEther(bal - gas) : "0";
      previewBuy();
    } catch {}
  });
  $("#eva-max").addEventListener("click", async () => {
    if (!account) return;
    try {
      $("#sell-in").value = ethers.formatUnits(await coreRO().balanceOf(account), 18);
      previewSell();
    } catch {}
  });
}

/* ---------- boot ---------- */
document.addEventListener("DOMContentLoaded", () => {
  applyI18n();
  initNav(); initCanvas(); initOrbs(); initCursor(); initMagnetic(); initTilt();
  initWallet(); initTrade();
  if (typeof ethers === "undefined") {
    tradingLive = false;
    $("#trade-notlive").classList.remove("hidden");
    refreshTradeButtons();
  } else {
    refreshStats();
    setInterval(refreshStats, 30000);
    setInterval(() => { if (account && chainOk) refreshBalances(); }, 30000);
  }
});
