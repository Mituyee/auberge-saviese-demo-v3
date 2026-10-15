/* Auberge de Savièse — demo menu renderer (same engine as the Paillote demo).
   Reads window.MENU_DATA (content/menu-data.js). No content lives in this file. */
(function () {
  "use strict";
  var D = window.MENU_DATA;
  var app = document.getElementById("app");
  var sheet = document.getElementById("sheet");
  var V = D.venue;
  var state = { tab: D.groups[0].id, homeScroll: 0, lastTrigger: null };
  var missing = new Set();
  if ("scrollRestoration" in history) history.scrollRestoration = "manual"; // we restore scroll ourselves

  /* ---------- helpers ---------- */
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }
  function money(n) { return n == null ? "" : (Number.isInteger(n) ? n + ".–" : n.toFixed(2)); }
  function cat(id) { return D.categories.filter(function (c) { return c.id === id; })[0]; }
  function catIcon(id) { var c = cat(id); return c ? c.icon : ""; }
  function count(c) { return c.sections.reduce(function (a, s) { return a + s.items.length; }, 0); }

  var ICONS = {
    fondue: '<path d="M4 11h16v2.5a6 6 0 01-6 6h-4a6 6 0 01-6-6V11z"/><path d="M2.5 11h19"/><path d="M8 21h8"/><path d="M14 11l4.5-8"/><circle cx="18.8" cy="2.6" r="1"/><path d="M8.5 8c0-1.2 1.5-1.2 1.5-2.4"/>',
    fork: '<path d="M7 3v6a2 2 0 002 2v10"/><path d="M5 3v5M9 3v5"/><path d="M16 21V3c2.2 1.2 3 3.6 3 6.5V13h-3"/>',
    cheese: '<path d="M3 15l10-9 8 5v7a1 1 0 01-1 1H4a1 1 0 01-1-1v-3z"/><path d="M3 15h18"/><circle cx="8" cy="17.3" r=".9"/><circle cx="15" cy="16.8" r="1.2"/><circle cx="13.5" cy="11" r=".8"/>',
    bowl: '<path d="M3 11h18a9 9 0 01-18 0z"/><path d="M8 20.5h8"/><path d="M9 8c0-1.5 2-1.5 2-3M13.5 8c0-1.5 2-1.5 2-3"/>',
    leaf: '<path d="M5 19c0-8 5-14 15-15-1 10-7 15-15 15z"/><path d="M5 19L14 10"/>',
    pasta: '<path d="M3 12h18a9 9 0 01-18 0z"/><path d="M7 12c0-3 3-3 3-6M11 12c0-3 3-3 3-6M15 12c0-3 3-3 3-6"/>',
    steak: '<path d="M4 13c-1-5 3-9 8-9 5 0 8 3 8 7 0 5-4 9-9 9-3 0-6-3-7-7z"/><circle cx="14" cy="10" r="2.2"/><path d="M7 15c1.5 1 3.5 1.5 5.5 1"/>',
    star: '<path d="M12 3.5l2.6 5.3 5.8.8-4.2 4.1 1 5.8L12 16.8l-5.2 2.7 1-5.8-4.2-4.1 5.8-.8z"/>',
    cocktail: '<path d="M4 5h16l-8 8.5L4 5z"/><path d="M12 13.5V20M8.5 20h7"/><path d="M14.5 5l3-3"/><circle cx="9" cy="7.2" r=".8"/>',
    wine: '<path d="M8 3h8l-.4 5.2a3.6 3.6 0 01-7.2 0L8 3z"/><path d="M12 11.8V20M8.5 20h7"/><path d="M8.3 6h7.4"/>',
    beer: '<path d="M5 8h10v11a1 1 0 01-1 1H6a1 1 0 01-1-1V8z"/><path d="M15 10.5h2a2 2 0 012 2v2.5a2 2 0 01-2 2h-2"/><path d="M5 8c-.6-2 1.6-3.4 3-2.4.8-1.8 3.6-1.8 4.4 0 1.4-1 3.2.4 2.6 2.4"/><path d="M8.5 11v6M11.5 11v6"/>',
    shot: '<path d="M7 7h10l-1.4 12H8.4L7 7z"/><path d="M7.6 11.5h8.8"/><path d="M10 4l1 1.5M14 4l-1 1.5"/>',
    glass: '<path d="M7 4h10l-1.2 15H8.2L7 4z"/><path d="M7.5 9h9"/><circle cx="11" cy="13" r=".8"/><circle cx="13.2" cy="15.5" r=".7"/><circle cx="12.4" cy="11.2" r=".6"/>',
    cup: '<path d="M4 9h12v5a5 5 0 01-5 5H9a5 5 0 01-5-5V9z"/><path d="M16 10.5h1.5a2.5 2.5 0 010 5H16"/><path d="M8 3.5c-.8 1.2.8 1.8 0 3M12 3.5c-.8 1.2.8 1.8 0 3"/>',
    back: '<path d="M14.5 5.5L8 12l6.5 6.5"/>',
    close: '<path d="M6 6l12 12M18 6L6 18"/>'
  };
  var TAGS = { aop: "AOP", igp: "IGP", ch: "Suisse", bio: "Bio", biosuisse: "Bio Suisse", vegan: "Végane", af: "Sans alcool" };
  function tagHTML(list) { return (list || []).map(function (t) { return '<span class="tag t-' + t + '" title="' + esc((V.legend || {})[t] || "") + '">' + esc(TAGS[t] || t) + "</span>"; }).join(""); }
  function priceHTML(it) {
    if (it.price == null) return "";
    return '<span class="price">' + (it.cont ? '<span class="cont">' + esc(it.cont) + "</span>" : "") + money(it.price) +
      (it.unit ? '<span class="unit">' + esc(it.unit) + "</span>" : "") + "</span>";
  }
  function icon(name, cls) { return '<svg class="icon ' + (cls || "") + '" viewBox="0 0 24 24" aria-hidden="true">' + (ICONS[name] || "") + "</svg>"; }

  /* Photo frame: the illustrated fallback is always present; the photo covers it only once it loads,
     so a missing or renamed file never shows a broken-image icon.
     img = {src, small, focus, alt}; sizes = CSS width of this placement, so the browser picks the 800 px
     or full-size file. */
  var SIZES = {
    hero: "(min-width:1120px) 1088px, calc(100vw - 32px)",
    card: "(min-width:760px) 260px, calc(50vw - 23px)",
    banner: "(min-width:852px) 788px, calc(100vw - 32px)",
    thumb: "64px",
    sheet: "(min-width:700px) 520px, 100vw"
  };
  function pic(o, key) { return o && o[key] ? { src: o[key], small: o[key + "Small"], focus: o[key + "Focus"] } : null; }
  function photo(img, alt, iconName, cls, place, eager) {
    var tag = "";
    if (img && img.src) {
      tag = '<img data-src="' + esc(img.src) + '"' +
        (img.small ? ' data-srcset="' + esc(img.small) + ' 800w, ' + esc(img.src) + ' 1440w" sizes="' + SIZES[place] + '"' : "") +
        ' alt="' + esc(alt || "") + '"' + (eager ? ' fetchpriority="high"' : ' loading="lazy"') +
        ' decoding="async"' + (img.focus ? ' style="object-position:' + esc(img.focus) + '"' : "") + ">";
    }
    return '<div class="ph ' + (cls || "") + '"><div class="ph-art">' + icon(iconName) + "</div>" + tag + "</div>";
  }
  function wireImages(root) {
    root.querySelectorAll("img[data-src]").forEach(function (img) {
      var frame = img.parentNode, src = img.getAttribute("data-src"), set = img.getAttribute("data-srcset");
      img.onload = function () { frame.classList.add("has-img"); };
      img.onerror = function () {
        if (img.getAttribute("srcset")) { img.removeAttribute("srcset"); img.src = src; return; } // small file missing: try the full one
        missing.add(src); img.remove(); // illustrated frame stays, layout never jumps
      };
      if (set) img.setAttribute("srcset", set);
      img.src = src;
      img.removeAttribute("data-src");
    });
  }

  function header() {
    return '<header class="top"><div class="band"><img class="logo" src="' + esc(V.logo) + '" alt="' + esc(V.logoAlt) + '" width="1006" height="224"></div><div class="strip" aria-hidden="true"></div>' +
      '<span class="demo-tag">Démonstration de concept</span></header>';
  }
  function footer() {
    var legend = Object.keys(V.legend || {}).map(function (k) { return '<li><span class="tag t-' + k + '">' + esc(TAGS[k]) + "</span> " + esc(V.legend[k]) + "</li>"; }).join("");
    return '<footer class="foot">' +
      (V.notes || []).map(function (n) { return "<p>" + esc(n) + "</p>"; }).join("") +
      (legend ? '<ul class="legend" aria-label="Légende">' + legend + "</ul>" : "") +
      "<p>Prix en CHF.</p>" +
      (V.reservation ? '<p><a class="resa" href="' + esc(V.reservation.url) + '" target="_blank" rel="noopener">' + esc(V.reservation.label) + "</a></p>" : "") +
      '<p class="demo">Démonstration — photographies illustratives.</p>' +
      '<p class="prov">Conception : ' + esc(V.provider) + "</p></footer>";
  }

  /* ---------- Home ---------- */
  function renderHome() {
    document.title = V.title + " — " + V.name;
    var tabs = D.groups.map(function (g) {
      var on = g.id === state.tab;
      return '<button role="tab" id="tab-' + g.id + '" aria-controls="grid" aria-selected="' + on + '" tabindex="' + (on ? 0 : -1) + '" data-tab="' + g.id + '">' + esc(g.title) + "</button>";
    }).join("");
    var cards = D.categories.filter(function (c) { return c.group === state.tab; }).map(function (c) {
      var n = count(c);
      return '<a class="card" href="#/c/' + c.id + '">' + photo(pic(c, "image"), c.imageAlt, c.icon, "", "card") +
        '<div class="body"><span class="badge">' + icon(c.icon) + "</span><h3>" + esc(c.title) + "</h3><small>" + n + " choix" + "</small></div></a>";
    }).join("");
    app.innerHTML = header() +
      photo(pic(V.hero, "image"), V.hero.alt, "fondue", "hero", "hero", true) +
      '<div class="intro"><h1>' + esc(V.title) + "</h1><p>" + esc(V.notice) + "</p></div>" +
      '<div class="tabs"><div class="seg" role="tablist" aria-label="Type de carte">' + tabs + "</div></div>" +
      '<main><div class="grid" id="grid" role="tabpanel" aria-labelledby="tab-' + state.tab + '">' + cards + "</div></main>" +
      footer();
    wireImages(app);
    var tl = app.querySelector('[role="tablist"]');
    tl.addEventListener("click", function (e) {
      var b = e.target.closest("[data-tab]"); if (!b || b.dataset.tab === state.tab) return;
      state.tab = b.dataset.tab; var y = window.scrollY; renderHome(); window.scrollTo(0, y);
      app.querySelector('[data-tab="' + state.tab + '"]').focus();
    });
    tl.addEventListener("keydown", function (e) { // arrow keys between tabs
      if (e.key !== "ArrowLeft" && e.key !== "ArrowRight") return;
      var ids = D.groups.map(function (g) { return g.id; });
      var i = (ids.indexOf(state.tab) + (e.key === "ArrowRight" ? 1 : ids.length - 1)) % ids.length;
      app.querySelector('[data-tab="' + ids[i] + '"]').click();
    });
  }

  /* ---------- Category ---------- */
  function itemRow(it, catId) {
    var head = '<span class="ihead"><span class="iname">' + esc(it.name) + "</span>" + priceHTML(it) + "</span>";
    var vars = it.variants ? '<span class="vars">' + it.variants.map(function (v) {
      return '<span class="var">' + esc(v.label) + " <b>" + money(v.price) + "</b></span>"; }).join("") + "</span>" : "";
    var tags = tagHTML(it.tags);
    return '<li class="item"><button type="button" data-item="' + it.id + '" aria-haspopup="dialog">' +
      (it.image ? photo(pic(it, "image"), "", catIcon(catId), "thumb", "thumb") : "") +
      '<span class="itxt">' + head +
      (it.desc ? '<span class="idesc">' + esc(it.desc) + "</span>" : "") +
      (it.note ? '<span class="imeta">' + esc(it.note) + "</span>" : "") +
      vars + (tags ? '<span class="tags">' + tags + "</span>" : "") +
      "</span></button></li>";
  }
  function storyHTML(st) {
    if (!st) return "";
    return '<details class="story"><summary>' + esc(st.title) + "</summary>" + st.paragraphs.map(function (p) { return "<p>" + esc(p) + "</p>"; }).join("") + "</details>";
  }

  function renderCategory(id) {
    var c = cat(id); if (!c) { location.hash = "#/"; return; }
    state.tab = c.group;
    document.title = c.title + " — " + V.title;
    var lastGroup = null;
    var chips = D.categories.map(function (x) {
      var sep = lastGroup && x.group !== lastGroup ? '<span class="chip-sep" aria-hidden="true"></span>' : "";
      lastGroup = x.group;
      return sep + '<a class="chip" href="#/c/' + x.id + '"' + (x.id === id ? ' aria-current="page"' : "") + ">" + icon(x.icon) + esc(x.title) + "</a>";
    }).join("");
    var secs = c.sections.map(function (s) {
      return '<section class="sec"><h2>' + esc(s.title) + "</h2>" +
        (s.note ? '<p class="snote">' + esc(s.note) + "</p>" : "") +
        '<ul class="list">' + s.items.map(function (it) { return itemRow(it, id); }).join("") + "</ul>" + storyHTML(s.story) + "</section>";
    }).join("");
    var idx = D.categories.indexOf(c), prev = D.categories[idx - 1], next = D.categories[idx + 1];
    app.innerHTML =
      '<div class="cbar"><div class="row"><a class="back" href="#/">' + icon("back") + "La carte</a>" +
      '<img class="logo" src="' + esc(V.logo) + '" alt="' + esc(V.logoAlt) + '" width="1006" height="224"></div>' +
      '<nav class="chips" aria-label="Catégories">' + chips + "</nav></div>" +
      '<main class="cat">' + photo(pic(c, "image"), c.imageAlt, c.icon, "banner", "banner", true) +
      "<h1>" + icon(c.icon) + esc(c.title) + "</h1>" +
      (c.note ? '<p class="cnote">' + esc(c.note) + "</p>" : "") + secs + "</main>" +
      '<nav class="next" aria-label="Catégorie précédente ou suivante">' +
      (prev ? '<a href="#/c/' + prev.id + '">‹ ' + esc(prev.title) + "</a>" : "<span></span>") +
      (next ? '<a href="#/c/' + next.id + '">' + esc(next.title) + " ›</a>" : "<span></span>") + "</nav>" +
      footer();
    wireImages(app);
    var cur = app.querySelector('.chip[aria-current="page"]');
    if (cur) { var bar = cur.parentNode; bar.scrollLeft = cur.offsetLeft - (bar.clientWidth - cur.offsetWidth) / 2; }
  }

  /* ---------- Detail sheet ---------- */
  function findItem(id) {
    for (var i = 0; i < D.categories.length; i++) for (var j = 0; j < D.categories[i].sections.length; j++) {
      var s = D.categories[i].sections[j];
      for (var k = 0; k < s.items.length; k++) if (s.items[k].id === id) return { c: D.categories[i], s: s, it: s.items[k] };
    }
  }
  function openSheet(id, trigger) {
    var f = findItem(id); if (!f) return;
    var it = f.it, c = f.c, s = f.s;
    state.lastTrigger = trigger;
    var rows = it.variants ? "<table><tbody>" + it.variants.map(function (v) {
      return "<tr><td>" + esc(v.label) + "</td><td>" + money(v.price) + " CHF</td></tr>"; }).join("") + "</tbody></table>" : "";
    var sup = (it.supplements || []).map(function (x) { return '<p class="extra">' + esc(x.label) + " : + " + money(x.price) + " CHF</p>"; }).join("");
    var tags = tagHTML(it.tags);
    sheet.innerHTML = (it.image ? photo(pic(it, "image"), it.name, c.icon, "", "sheet", true) : '<div class="grab" aria-hidden="true"></div>') +
      '<button class="x" type="button" data-close aria-label="Fermer">' + icon("close") + "</button>" +
      '<div class="in"><p class="crumb">' + esc(c.title) + (s.title !== c.title ? " · " + esc(s.title) : "") + "</p>" +
      '<h2 id="sheet-title">' + esc(it.name) + "</h2>" +
      (it.desc ? '<p class="d">' + esc(it.desc) + "</p>" : "") +
      (it.note ? '<p class="extra">' + esc(it.note) + "</p>" : "") +
      (tags ? '<div class="tags">' + tags + "</div>" : "") +
      (it.price != null ? '<p class="bigprice">' + money(it.price) + " CHF" + (it.unit ? ' <span class="unit">' + esc(it.unit) + "</span>" : "") + "</p>" +
        (it.cont ? '<p class="extra">Contenance : ' + esc(it.cont) + "</p>" : "") : "") + rows + sup +
      (c.note ? '<p class="extra">' + esc(c.note) + "</p>" : "") +
      (s.note ? '<p class="extra">' + esc(s.note) + "</p>" : "") +
      '<button class="close" type="button" data-close>Retour à la carte</button></div>';
    wireImages(sheet);
    sheet.showModal();
    sheet.scrollTop = 0;
  }
  function closeSheet() { if (sheet.open) sheet.close(); }
  sheet.addEventListener("click", function (e) { if (e.target === sheet || e.target.closest("[data-close]")) closeSheet(); });
  sheet.addEventListener("close", function () { if (state.lastTrigger) state.lastTrigger.focus({ preventScroll: true }); });
  app.addEventListener("click", function (e) {
    var b = e.target.closest("[data-item]"); if (b) openSheet(b.dataset.item, b);
  });

  /* ---------- Routing (hash: works on any GitHub Pages sub-path) ---------- */
  var current = null;
  function route() {
    closeSheet();
    var h = location.hash || "#/";
    var m = h.match(/^#\/c\/([\w-]+)/);
    if (m) {
      if (current === "home") state.homeScroll = window.scrollY;
      renderCategory(m[1]); window.scrollTo(0, 0); current = m[1];
    } else {
      var prevCat = current && current !== "home" ? current : null;
      renderHome(); current = "home";
      window.scrollTo(0, prevCat ? state.homeScroll : 0);
      if (prevCat) { var back = app.querySelector('.card[href="#/c/' + prevCat + '"]'); if (back) back.focus({ preventScroll: true }); }
    }
  }
  window.addEventListener("hashchange", route);
  route();

  // For QA: window.__missingImages lists image files not yet uploaded.
  window.__missingImages = missing;
})();
