/* EVA docs page — renders the bilingual documentation from I18N[lang].docs */
let lang = localStorage.getItem("eva-lang") ||
  (((navigator.language || "en").toLowerCase().startsWith("ar")) ? "ar" : "en");

const t = path => path.split(".").reduce((o, k) => (o ? o[k] : undefined), I18N[lang]);
const $ = (s, r) => (r || document).querySelector(s);
const $$ = (s, r) => Array.prototype.slice.call((r || document).querySelectorAll(s));

function blockHTML(b) {
  if (b.p) return "<p>" + b.p + "</p>";
  if (b.note) return '<p class="doc-note">' + b.note + "</p>";
  if (b.list) return '<ul class="doc-list">' + b.list.map(function(i){ return "<li>" + i + "</li>"; }).join("") + "</ul>";
  if (b.table) {
    return '<div class="glass table-card"><table class="doc-table"><thead><tr>' +
      b.table.head.map(function(h){ return "<th>" + h + "</th>"; }).join("") +
      "</tr></thead><tbody>" +
      b.table.rows.map(function(r){ return "<tr>" + r.map(function(c){ return "<td>" + c + "</td>"; }).join("") + "</tr>"; }).join("") +
      "</tbody></table></div>";
  }
  if (b.proof) return '<a class="proof-link" target="_blank" rel="noopener" href="' + b.proof + '">' + t("benefits.verify") + " ↗</a>";
  if (b.contracts) {
    return '<div id="docs-contracts">' + t("contracts.rows").map(function(r){
      return '<div class="contract-row glass"><span class="contract-name">' + r[0] + '</span>' +
        '<code class="contract-addr">' + r[1] + '</code>' +
        '<span class="contract-actions"><a class="mini-btn" target="_blank" rel="noopener" href="https://basescan.org/address/' + r[1] + '">' + t("contracts.view") + "</a></span></div>";
    }).join("") + "</div>";
  }
  return "";
}

function renderDocs() {
  const d = t("docs");
  $("#docs-main").innerHTML = d.sections.map(function(s){
    return '<section class="doc-section glass doc-anchor" id="' + s.id + '"><h2>' + s.t + "</h2>" +
      s.blocks.map(blockHTML).join("") + "</section>";
  }).join("");
}

function applyI18n() {
  document.documentElement.lang = lang;
  document.documentElement.dir = I18N[lang].dir;
  document.title = "EVA — " + t("docs.title");
  $$("[data-i18n]").forEach(function(el){
    const v = t(el.dataset.i18n);
    if (typeof v === "string") el.textContent = v;
  });
  $("#lang-toggle").textContent = I18N[lang].langName;
  renderDocs();
}

$("#lang-toggle").addEventListener("click", function(){
  lang = lang === "en" ? "ar" : "en";
  localStorage.setItem("eva-lang", lang);
  applyI18n();
});
$("#menu-toggle").addEventListener("click", function(){
  $("#nav-links").classList.toggle("open");
});
addEventListener("scroll", function(){ $("#nav").classList.toggle("scrolled", scrollY > 12); }, { passive:true });

applyI18n();
