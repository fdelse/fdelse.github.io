/* Vademecum dell'italiano per le professioni — app.js — versione 2.2
   Le schede stanno in dati/<settore>.json.
   Quando modifichi un file di dati, aggiorna la sua versione qui sotto in DATI
   (e il campo "versione" nel file): serve a far riscaricare il file al browser. */
const VERSIONE = "2.2";
const DATI = {medicina:"1.4", diritto:"1.1", banca:"1.1", vendite:"1.1", colloqui:"1.1"};

/* ===== Settori =====
   (si chiamano LEVELS come nel vademecum di grammatica, per tenere il codice uguale) */
const LEVELS = [
  {id:"medicina", tag:"Medicina", name:"Medici", color:"var(--c-c1)"},
  {id:"diritto",  tag:"Diritto",  name:"Giuristi e contratti",  color:"var(--c-b2)"},
  {id:"banca",    tag:"Banca",    name:"Banche e finanza",      color:"var(--c-a)"},
  {id:"vendite",  tag:"Vendite",  name:"Venditori e commerciali", color:"var(--c-a2)"},
  {id:"colloqui", tag:"Colloqui", name:"Per tutti i settori",     color:"var(--c-b1)"},
];

/* ===== Voci =====
   Schema di ogni scheda: {lvl, cat, title, def, form?, tables?, uses?[{label,ex}], ex?[], warn?, errors?[{wrong,right,why}], exercises?} */
let ENTRIES = [];

const colorById = Object.fromEntries(LEVELS.map(l=>[l.id,l.color]));
const strip = s => (s||"").replace(/<[^>]+>/g,"");
const fold = s => (s||"").normalize("NFD").replace(/[\u0300-\u036f]/g,"");
const unapo = s => (s||"").replace(/['\u2019\u2018\u02bc\u00b4`]/g,"");

function tableHTML(t){
  let h = "<table>";
  if(t.caption) h += "<caption>"+t.caption+"</caption>";
  if(t.headers) h += "<tr>"+t.headers.map(x=>"<th>"+x+"</th>").join("")+"</tr>";
  t.rows.forEach(r=>{
    h += "<tr>"+r.map((c,i)=> i===0 ? "<td>"+c+"</td>" : (t.plain ? "<td class='ex-cell'>"+c+"</td>" : "<td><span class='form'>"+c+"</span></td>")).join("")+"</tr>";
  });
  return h+"</table>";
}

function tablesBlock(tables){
  if(!tables || !tables.length) return "";
  const withIntro = tables.some(t=>t.before || t.after);
  if(withIntro) return tables.map(t=>
      (t.before ? "<p class='sec__t tbl-intro'>"+t.before+"</p>" : "")
      + tableHTML(t)
      + (t.after ? "<p class='sec__t tbl-intro'>"+t.after+"</p>" : "")
    ).join("");
  if(tables.length>1) return "<div class='tbl-wrap'>"+tables.map(t=>"<div>"+tableHTML(t)+"</div>").join("")+"</div>";
  return tableHTML(tables[0]);
}

/* La ricerca legge il contenuto della scheda (titolo, categoria, spiegazione,
   lessico, tabelle, frasi utili, esempi, avviso): esercizi ed errori tipici restano fuori.
   A differenza del vademecum di grammatica legge anche le tabelle, perché qui contengono il lessico. */
function searchText(e){
  let parts = [e.title, e.cat, e.def, e.form||""];
  if(e.tables) e.tables.forEach(t=>{
    parts.push(t.caption||"", t.before||"", t.after||"");
    if(t.headers) parts = parts.concat(t.headers);
    t.rows.forEach(r=>{ parts = parts.concat(r); });
  });
  if(e.uses) e.uses.forEach(u=>parts.push(u.label, u.ex));
  if(e.ex) parts = parts.concat(e.ex);
  if(e.warn) parts.push(e.warn);
  return unapo(fold(strip(parts.join(" ")).toLowerCase())).replace(/"/g,"");
}

function cardHTML(e, lvlId, idx){
  let h = "<article class='card' id='card-"+lvlId+"-"+idx+"' data-k='"+ENTRIES.indexOf(e)+"' data-search=\""+searchText(e)+"\" data-t=\""+unapo(fold((e.title+" "+e.cat).toLowerCase()))+"\" style='--lvl:"+colorById[e.lvl]+"'>";
  h += "<div class='card-tools'><button type='button' class='copy-btn copy-card' data-copy='scheda' title='Copia la spiegazione (senza esercizi)' aria-label='Copia la spiegazione della scheda'>Copia</button>"
    + "<button type='button' class='copy-btn print-card' data-print='scheda' title='Stampa la spiegazione (senza esercizi); dalla finestra di stampa si può anche salvare in PDF' aria-label='Stampa la spiegazione della scheda'>Stampa</button></div>";
  h += "<p class='card__cat'>"+e.cat+"</p>";
  h += "<h3 class='card__title'>"+e.title+"</h3>";
  h += "<p class='card__def'>"+e.def+"</p>";

  if(e.form || (e.tables && e.tables.length)){
    h += "<div class='sec'><p class='sec__h'>Lessico</p>";
    if(e.form) h += "<div class='sec__t'>"+e.form+"</div>";
    h += tablesBlock(e.tables) + "</div>";
  }
  if(e.uses && e.uses.length){
    h += "<div class='sec'><p class='sec__h'>Frasi utili</p><ul class='uses'>"
      + e.uses.map(u=>"<li><span class='use-l'>"+u.label+"</span><span class='use-e'>"+u.ex+"</span></li>").join("")
      + "</ul></div>";
  }
  if(e.ex && e.ex.length){
    h += "<div class='sec'><p class='sec__h'>Esempi</p><div class='ex'>"
      + e.ex.map(x=>"<p>"+x+"</p>").join("") + "</div></div>";
  }
  if(e.warn) h += "<p class='warn'>"+e.warn+"</p>";
  if(e.errors && e.errors.length){
    h += "<div class='sec'><p class='sec__h'>Errori tipici</p><ul class='errs'>"
      + e.errors.map(x=>"<li><span class='err-w'>"+x.wrong+"</span><span class='err-a'>→</span><span class='err-r'>"+x.right+"</span>"
        + (x.why ? "<span class='err-why'>"+x.why+"</span>" : "") + "</li>").join("")
      + "</ul></div>";
  }
  if(e.exercises && e.exercises.length){
    h += "<details class='sec sec-eser'><summary class='sec__h eser-toggle'>Esercizi<span class='eser-n'>"
      + e.exercises.reduce((n,x)=>n+x.items.length,0) + "</span></summary>";
    h += "<div class='eser-tools'><button type='button' class='copy-btn' data-copy='esercizi' title='Copia gli esercizi (senza soluzioni)' aria-label='Copia gli esercizi della scheda, senza soluzioni'>Copia esercizi</button>"
      + "<button type='button' class='copy-btn' data-print='esercizi' title='Stampa gli esercizi (senza soluzioni); dalla finestra di stampa si può anche salvare in PDF' aria-label='Stampa gli esercizi della scheda, senza soluzioni'>Stampa esercizi</button></div>";
    e.exercises.forEach(x=>{
      h += "<div class='ex-block'>"
        + "<p class='ex-type'>"+x.type+"</p>"
        + "<p class='ex-instr'>"+x.instr+"</p>"
        + "<ol class='ex-items'>"+x.items.map(it=>"<li>"+it+"</li>").join("")+"</ol>"
        + "<details class='ex-key'><summary>Soluzioni</summary><ol>"
        + x.key.map(k=>"<li>"+k+"</li>").join("")+"</ol></details>"
        + "</div>";
    });
    h += "</details>";
  }
  return h+"</article>";
}

function build(){
  const content = document.getElementById("content");
  const nav = document.getElementById("nav");
  const legend = document.getElementById("legend");

  const attivi = LEVELS.filter(l=>ENTRIES.some(e=>e.lvl===l.id)); // i settori ancora vuoti non si mostrano
  legend.innerHTML = attivi.map(l=>
    "<span><i style='background:"+l.color+"'></i>"+l.tag+"</span>").join("");

  let navHTML = "", contentHTML = "";
  attivi.forEach(l=>{
    const items = ENTRIES.filter(e=>e.lvl===l.id);
    const sublinks = items.map((e,i)=>"<a href='#card-"+l.id+"-"+i+"'>"+e.title+"</a>").join("");
    navHTML += "<div class='nav-group'>"
      + "<a href='#lvl-"+l.id+"' class='nav-level' data-lvl='"+l.id+"' style='--lvl:"+l.color+"'>"
      + "<span class='dot'></span><span class='lbl'>"+l.tag+"</span><span class='n'>"+items.length+"</span>"
      + "<span class='chevron'>›</span></a>"
      + "<div class='subnav' id='subnav-"+l.id+"'>"+sublinks+"</div></div>";
    contentHTML += "<section class='level' id='lvl-"+l.id+"' style='--lvl:"+l.color+"'>"
      + "<div class='level__head'><span class='level__tag'>"+l.tag+"</span>"
      + "<span class='level__name'>"+l.name+"</span>"
      + "<span class='level__count'>"+items.length+" voci</span></div>"
      + "<div class='grid'>"+items.map((e,i)=>cardHTML(e,l.id,i)).join("")+"</div></section>";
  });
  nav.innerHTML = navHTML;
  content.innerHTML = contentHTML;
}

/* ===== Ricerca ===== */
let showCited = false;
let lastTerm = null;

function applyFilter(term){
  const raw = (term||"").trim();
  term = unapo(fold(raw.toLowerCase()));
  if(term !== lastTerm){ showCited = false; lastTerm = term; }

  const cards = Array.prototype.slice.call(document.querySelectorAll(".card"));
  const hits = cards.map(c=>({
    el: c,
    match: !term || (c.dataset.search||"").includes(term),
    inTitle: !!term && (c.dataset.t||"").includes(term)
  }));
  const strong = hits.filter(h=>h.match && h.inTitle).length;
  const cited  = hits.filter(h=>h.match && !h.inTitle).length;
  const split  = !!term && strong > 0 && cited > 0;

  let anyVisible = false;
  hits.forEach(h=>{
    const show = h.match && (!split || h.inTitle || showCited);
    h.el.style.display = show ? "" : "none";
    if(show) anyVisible = true;
  });
  document.querySelectorAll(".level").forEach(sec=>{
    const visible = sec.querySelectorAll(".card:not([style*='display: none'])").length;
    sec.style.display = visible ? "" : "none";
  });

  const bar = document.getElementById("cited");
  if(bar){
    if(split){
      bar.hidden = false;
      document.getElementById("cited-n").textContent =
        cited + (cited===1 ? " altra scheda cita" : " altre schede citano") + " «"+raw+"» senza trattarlo.";
      document.getElementById("cited-btn").textContent = showCited ? "nascondi" : "mostra anche queste";
    } else {
      bar.hidden = true;
    }
  }

  const empty = document.getElementById("empty");
  if(empty) empty.style.display = (term && !anyVisible) ? "block" : "none";
  const emptyQ = document.getElementById("empty-q");
  if(emptyQ) emptyQ.textContent = "«"+raw+"»";
}

function setupSearch(){
  const inputs = [document.getElementById("q"), document.getElementById("q-m")].filter(Boolean);
  inputs.forEach(inp=>{
    inp.addEventListener("input", ()=>{
      const v = inp.value;
      inputs.forEach(o=>{ if(o!==inp) o.value = v; });
      applyFilter(v);
    });
  });
  const btn = document.getElementById("cited-btn");
  if(btn) btn.addEventListener("click", ()=>{
    showCited = !showCited;
    applyFilter(inputs.length ? inputs[0].value : "");
  });
}

/* ===== Nav attiva + torna su ===== */
function setupScroll(){
  const links = [...document.querySelectorAll(".nav-level")];
  const sections = links.map(a=>document.querySelector(a.getAttribute("href")));
  const totop = document.getElementById("totop");

  const obs = new IntersectionObserver((entries)=>{
    entries.forEach(en=>{
      if(en.isIntersecting){
        const id = en.target.id;
        links.forEach(a=>a.classList.toggle("active", a.getAttribute("href")==="#"+id));
      }
    });
  }, {rootMargin:"-20% 0px -70% 0px"});
  sections.forEach(s=>s && obs.observe(s));

  window.addEventListener("scroll", ()=>{
    totop.classList.toggle("show", window.scrollY>500);
  });
  totop.addEventListener("click", ()=>window.scrollTo({top:0, behavior:"smooth"}));
}

/* ===== Sottomenu a tendina ===== */
function setupNav(){
  document.querySelectorAll(".nav-level").forEach(a=>{
    a.addEventListener("click",()=>{
      const lvl = a.dataset.lvl;
      const subnav = document.getElementById("subnav-"+lvl);
      const isOpen = a.classList.contains("open");
      document.querySelectorAll(".nav-level").forEach(l=>l.classList.remove("open"));
      document.querySelectorAll(".subnav").forEach(s=>s.classList.remove("open"));
      if(!isOpen){a.classList.add("open");subnav.classList.add("open");}
    });
  });
  document.querySelectorAll(".subnav a").forEach(a=>{
    a.addEventListener("click",()=>{
      if(window.matchMedia("(max-width:900px)").matches){
        document.querySelectorAll(".nav-level,.subnav").forEach(x=>x.classList.remove("open"));
      }
    });
  });
}

function setupDrawer(){
  const btn=document.getElementById("menuBtn");
  const spine=document.querySelector(".spine");
  const ov=document.getElementById("overlay");
  if(!btn||!spine||!ov) return;
  function open(){spine.classList.add("open");ov.classList.add("show");btn.classList.add("open");btn.setAttribute("aria-expanded","true");document.body.style.overflow="hidden";}
  function close(){spine.classList.remove("open");ov.classList.remove("show");btn.classList.remove("open");btn.setAttribute("aria-expanded","false");document.body.style.overflow="";}
  btn.addEventListener("click",()=>{spine.classList.contains("open")?close():open();});
  ov.addEventListener("click",close);
  document.addEventListener("keydown",e=>{if(e.key==="Escape")close();});
  // toccando una struttura nel sottomenu, chiudi il drawer
  document.querySelectorAll(".subnav a").forEach(a=>{
    a.addEventListener("click",()=>{if(window.matchMedia("(max-width:900px)").matches)close();});
  });
}

/* ===== Copia =====
   «Copia» (in alto nella scheda) copia la spiegazione: definizione, lessico, tabelle,
   frasi utili, esempi, avviso, errori tipici. «Copia esercizi» (dentro Esercizi) copia gli esercizi
   senza le soluzioni. Ogni copia mette negli appunti due formati: HTML per Docs, Word ed
   email; testo semplice per WhatsApp e le chat. Il programma in cui si incolla sceglie da solo. */

const CELL = "border:1px solid #bbb;padding:4px 8px;text-align:left;vertical-align:top";

/* Trasforma un pezzo di HTML in testo semplice: elenchi con «- » o «1. », a capo per <br> e <p>. */
function toText(html){
  const box = document.createElement("div");
  box.innerHTML = html || "";
  let out = "";
  (function walk(node, depth){
    node.childNodes.forEach(n=>{
      if(n.nodeType===3){ out += n.nodeValue; return; }
      if(n.nodeType!==1) return;
      const tag = n.tagName;
      if(tag==="BR"){ out += "\n"; return; }
      if(tag==="UL" || tag==="OL"){
        let k = 0;
        n.childNodes.forEach(li=>{
          if(li.nodeType!==1 || li.tagName!=="LI") return;
          k++;
          out += "\n" + "  ".repeat(depth) + (tag==="OL" ? k+". " : "- ");
          walk(li, depth+1);
        });
        out += "\n";
        return;
      }
      if(tag==="P" || tag==="DIV"){ out += "\n"; walk(n, depth); out += "\n"; return; }
      walk(n, depth);
    });
  })(box, 0);
  return out;
}

function tidy(s){
  return s.replace(/ /g," ").replace(/[ \t]+\n/g,"\n").replace(/\n{3,}/g,"\n\n").trim()+"\n";
}

function clipTableHTML(t){
  let h = "";
  if(t.before) h += "<p>"+t.before+"</p>";
  if(t.caption) h += "<p><b>"+t.caption+"</b></p>";
  h += "<table style='border-collapse:collapse'>";
  if(t.headers) h += "<tr>"+t.headers.map(x=>"<th style='"+CELL+"'>"+x+"</th>").join("")+"</tr>";
  t.rows.forEach(r=>{
    h += "<tr>"+r.map((c,i)=>"<td style='"+CELL+"'>"+(i===0 ? c : (t.plain ? "<i>"+c+"</i>" : "<b>"+c+"</b>"))+"</td>").join("")+"</tr>";
  });
  h += "</table>";
  if(t.after) h += "<p>"+t.after+"</p>";
  return h;
}

/* Nel testo semplice ogni riga di tabella diventa una riga: «io sono» per le coniugazioni,
   «etichetta: valore | valore» per le altre tabelle. */
function clipTableText(t){
  const cell = c => toText(c).replace(/\s+/g," ").trim();
  const line = r => {
    const c = r.map(cell);
    if(!t.headers && c.length===2) return c[0]+" "+c[1];
    return (c[0] ? c[0]+": " : "") + c.slice(1).join(" | ");
  };
  let out = "";
  if(t.before) out += toText(t.before)+"\n";
  if(t.caption) out += cell(t.caption)+"\n";
  if(t.headers) out += line(t.headers)+"\n";
  t.rows.forEach(r=>{ out += line(r)+"\n"; });
  if(t.after) out += toText(t.after)+"\n";
  return out+"\n";
}

function cardClipHTML(e){
  let h = "<p style='color:#777'>"+e.cat+"</p><h3>"+e.title+"</h3><p>"+e.def+"</p>";
  if(e.form || (e.tables && e.tables.length)){
    h += "<h4>Lessico</h4>";
    if(e.form) h += "<div>"+e.form+"</div>";
    (e.tables||[]).forEach(t=>{ h += clipTableHTML(t); });
  }
  if(e.uses && e.uses.length){
    h += "<h4>Frasi utili</h4><ul>"
      + e.uses.map(u=>"<li><b>"+u.label+"</b><br><i>"+u.ex+"</i></li>").join("") + "</ul>";
  }
  if(e.ex && e.ex.length){
    h += "<h4>Esempi</h4>" + e.ex.map(x=>"<p><i>"+x+"</i></p>").join("");
  }
  if(e.warn) h += "<p><b>Attenzione — </b>"+e.warn+"</p>";
  if(e.errors && e.errors.length){
    h += "<h4>Errori tipici</h4><ul>"
      + e.errors.map(x=>"<li><i><span style='text-decoration:line-through'>"+x.wrong+"</span></i> → <i>"+x.right+"</i>"
        + (x.why ? "<br>"+x.why : "") + "</li>").join("") + "</ul>";
  }
  return h;
}

function cardClipText(e){
  let out = e.cat.toUpperCase()+"\n"+toText(e.title)+"\n\n"+toText(e.def)+"\n\n";
  if(e.form || (e.tables && e.tables.length)){
    out += "LESSICO\n";
    if(e.form) out += toText(e.form)+"\n\n";
    (e.tables||[]).forEach(t=>{ out += clipTableText(t); });
  }
  if(e.uses && e.uses.length){
    out += "\nFRASI UTILI\n";
    e.uses.forEach(u=>{ out += "- "+toText(u.label).trim()+"\n  "+toText(u.ex).trim()+"\n"; });
  }
  if(e.ex && e.ex.length){
    out += "\nESEMPI\n" + e.ex.map(x=>toText(x).trim()).join("\n") + "\n";
  }
  if(e.warn) out += "\nAttenzione — "+toText(e.warn).trim()+"\n";
  if(e.errors && e.errors.length){
    out += "\nERRORI TIPICI\n";
    e.errors.forEach(x=>{
      out += "✗ "+toText(x.wrong).trim()+" → ✓ "+toText(x.right).trim()+"\n";
      if(x.why) out += "  "+toText(x.why).trim()+"\n";
    });
  }
  return out;
}

/* Nei role play la consegna finisce con «Difficoltà da introdurre: …», la mossa a sorpresa
   del docente: non si copia, così allo studente arrivano ruoli, situazione e obiettivi. */
function instrForStudent(s){
  return (s||"").replace(/\s*Difficoltà da introdurre:[\s\S]*$/, "");
}

function exercisesClipHTML(e){
  return "<h3>"+e.title+"</h3><h4>Esercizi</h4>"
    + e.exercises.map(x=>"<p><b>"+x.type+".</b> "+instrForStudent(x.instr)+"</p><ol>"
      + x.items.map(it=>"<li>"+it+"</li>").join("") + "</ol>").join("");
}

/* Negli esercizi il grassetto serve (es. «sostituisci le parole in grassetto»):
   nel testo semplice diventa *parola*, che WhatsApp mostra in grassetto. */
function exercisesClipText(e){
  let out = toText(e.title)+" — ESERCIZI\n";
  e.exercises.forEach(x=>{
    out += "\n"+x.type.toUpperCase()+" — "+toText(instrForStudent(x.instr)).trim()+"\n";
    x.items.forEach((it,i)=>{ out += (i+1)+". "+toText(it.replace(/<\/?b>/g,"*")).trim()+"\n"; });
  });
  return out;
}

function legacyCopy(html, text){
  return new Promise((resolve, reject)=>{
    const onCopy = ev=>{
      ev.preventDefault();
      ev.clipboardData.setData("text/html", html);
      ev.clipboardData.setData("text/plain", text);
    };
    document.addEventListener("copy", onCopy);
    let ok = false;
    try{ ok = document.execCommand("copy"); }catch(err){ ok = false; }
    document.removeEventListener("copy", onCopy);
    if(ok) resolve(); else reject(new Error("copia non riuscita"));
  });
}

function writeClip(html, text){
  if(navigator.clipboard && window.ClipboardItem){
    try{
      return navigator.clipboard.write([new ClipboardItem({
        "text/html": new Blob([html], {type:"text/html"}),
        "text/plain": new Blob([text], {type:"text/plain"})
      })]).catch(()=>legacyCopy(html, text));
    }catch(err){ return legacyCopy(html, text); }
  }
  return legacyCopy(html, text);
}

function flash(btn, label, ok){
  if(!btn.dataset.label) btn.dataset.label = btn.textContent;
  btn.textContent = label;
  btn.classList.toggle("ok", ok);
  clearTimeout(btn._t);
  btn._t = setTimeout(()=>{ btn.textContent = btn.dataset.label; btn.classList.remove("ok"); }, 2000);
}

/* ===== Stampa =====
   «Stampa» (accanto a «Copia») stampa la spiegazione; «Stampa esercizi» (accanto a «Copia
   esercizi») stampa gli esercizi senza soluzioni. Il contenuto è lo stesso della copia, su un
   foglio pulito in bianco e nero. Dalla finestra di stampa si può anche salvare in PDF. */
const PRINT_CSS = "@page{size:A4;margin:18mm 16mm}"
  + "body{font-family:Arial,Helvetica,sans-serif;font-size:11.5pt;line-height:1.45;color:#000;margin:0}"
  + "h3{font-family:Georgia,'Times New Roman',serif;font-size:17pt;margin:0 0 8px}"
  + "h4{font-size:9.5pt;letter-spacing:.08em;text-transform:uppercase;margin:16px 0 6px;border-bottom:1px solid #999;padding-bottom:2px}"
  + "p{margin:0 0 7px}ul{padding-left:18px;margin:0 0 8px}ul li{margin:0 0 5px}"
  + "ol{padding-left:22px;margin:0 0 12px}ol li{margin:0 0 14px}"
  + "table{border-collapse:collapse;width:100%;margin:6px 0 10px}tr{page-break-inside:avoid}"
  + "th,td{border:1px solid #999;padding:3px 7px;text-align:left;vertical-align:top}"
  + "h3,h4{page-break-after:avoid}";

function printDoc(title, body){
  const old = document.getElementById("print-frame");
  if(old) old.remove();
  const f = document.createElement("iframe");
  f.id = "print-frame";
  f.setAttribute("aria-hidden", "true");
  f.style.cssText = "position:fixed;right:0;bottom:0;width:0;height:0;border:0;visibility:hidden";
  f.onload = ()=>{ try{ f.contentWindow.focus(); f.contentWindow.print(); }catch(err){ console.error("Stampa non riuscita:", err); } };
  f.srcdoc = "<!DOCTYPE html><html lang='it'><head><meta charset='utf-8'><title>"
    + strip(title).replace(/</g,"&lt;") + "</title><style>" + PRINT_CSS + "</style></head><body>"
    + body + "</body></html>";
  document.body.appendChild(f);
}

function setupCopy(){
  const content = document.getElementById("content");
  if(!content) return;
  content.addEventListener("click", ev=>{
    const btn = ev.target.closest(".copy-btn");
    if(!btn) return;
    const card = btn.closest(".card");
    const e = card ? ENTRIES[+card.dataset.k] : null;
    if(!e) return;
    if(btn.dataset.print){
      const pe = btn.dataset.print === "esercizi";
      printDoc(e.title + (pe ? " — esercizi" : ""), pe ? exercisesClipHTML(e) : cardClipHTML(e));
      return;
    }
    if(!btn.dataset.copy) return;
    const ex = btn.dataset.copy === "esercizi";
    const html = "<meta charset='utf-8'><div style='font-family:Arial,Helvetica,sans-serif'>"
      + (ex ? exercisesClipHTML(e) : cardClipHTML(e)) + "</div>";
    const text = tidy(ex ? exercisesClipText(e) : cardClipText(e));
    writeClip(html, text).then(()=>flash(btn, "Copiato", true), ()=>flash(btn, "Non copiato", false));
  });
}

function safe(fn,name){ try{ fn(); }catch(e){ console.error("Errore in "+name+":", e); } }

function loadData(){
  return Promise.all(LEVELS.map(l=>
    fetch("dati/"+l.id+".json?v="+(DATI[l.id]||VERSIONE))
      .then(r=>{ if(!r.ok) throw new Error("dati/"+l.id+".json: "+r.status); return r.json(); })
      .then(d=>d.schede)
  )).then(lists=>{ ENTRIES = [].concat(...lists); });
}

loadData().then(()=>{
  safe(build,"build");
  safe(setupSearch,"setupSearch");
  safe(setupScroll,"setupScroll");
  safe(setupNav,"setupNav");
  safe(setupDrawer,"setupDrawer");
  safe(setupCopy,"setupCopy");
}).catch(err=>{
  console.error(err);
  document.getElementById("content").innerHTML =
    "<p class=\"empty\" style=\"display:block\">Impossibile caricare le schede ("+err.message+"). Se hai aperto il file dal computer, usa Live Server o la versione su GitHub.</p>";
});
