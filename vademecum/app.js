/* Vademecum di grammatica italiana — app.js — versione 3.4
   Le schede stanno in dati/<livello>.json.
   Quando modifichi un file di dati, aggiorna la sua versione qui sotto in DATI
   (e il campo "versione" nel file): serve a far riscaricare il file al browser. */
const VERSIONE = "3.4";
const DATI = {a:"1.4", a2:"1.4", b1:"1.9", b2:"1.4", c1:"1.3"};

/* ===== Livelli ===== */
const LEVELS = [
  {id:"a",  tag:"A0 · A1", name:"Fondamenta",        color:"var(--c-a)"},
  {id:"a2", tag:"A2",      name:"Elementare",        color:"var(--c-a2)"},
  {id:"b1", tag:"B1",      name:"Intermedio",        color:"var(--c-b1)"},
  {id:"b2", tag:"B2",      name:"Intermedio-avanzato",color:"var(--c-b2)"},
  {id:"c1", tag:"C1",      name:"Avanzato",          color:"var(--c-c1)"},
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

/* La ricerca legge solo il contenuto della scheda (titolo, categoria, spiegazione,
   formazione, usi, esempi, avviso): esercizi ed errori tipici restano fuori. */
function searchText(e){
  let parts = [e.title, e.cat, e.def, e.form||""];
  if(e.uses) e.uses.forEach(u=>parts.push(u.label, u.ex));
  if(e.ex) parts = parts.concat(e.ex);
  if(e.warn) parts.push(e.warn);
  return unapo(fold(strip(parts.join(" ")).toLowerCase())).replace(/"/g,"");
}

function cardHTML(e, lvlId, idx){
  let h = "<article class='card' id='card-"+lvlId+"-"+idx+"' data-search=\""+searchText(e)+"\" data-t=\""+unapo(fold((e.title+" "+e.cat).toLowerCase()))+"\" style='--lvl:"+colorById[e.lvl]+"'>";
  h += "<p class='card__cat'>"+e.cat+"</p>";
  h += "<h3 class='card__title'>"+e.title+"</h3>";
  h += "<p class='card__def'>"+e.def+"</p>";

  if(e.form || (e.tables && e.tables.length)){
    h += "<div class='sec'><p class='sec__h'>Formazione</p>";
    if(e.form) h += "<div class='sec__t'>"+e.form+"</div>";
    h += tablesBlock(e.tables) + "</div>";
  }
  if(e.uses && e.uses.length){
    h += "<div class='sec'><p class='sec__h'>Quando si usa</p><ul class='uses'>"
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
    e.exercises.forEach(x=>{
      h += "<div class='ex-block'>"
        + "<p class='ex-type'>"+x.type+"</p>"
        + "<p class='ex-instr'>"+x.instr+"</p>"
        + "<ol class='ex-items'>"+x.items.map(it=>"<li>"+it+"</li>").join("")+"</ol>"
        + "<details class='ex-key'><summary>Soluzioni (docente)</summary><ol>"
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

  legend.innerHTML = LEVELS.map(l=>
    "<span><i style='background:"+l.color+"'></i>"+l.tag+"</span>").join("");

  let navHTML = "", contentHTML = "";
  LEVELS.forEach(l=>{
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
}).catch(err=>{
  console.error(err);
  document.getElementById("content").innerHTML =
    "<p class=\"empty\" style=\"display:block\">Impossibile caricare le schede ("+err.message+"). Se hai aperto il file dal computer, usa Live Server o la versione su GitHub.</p>";
});
