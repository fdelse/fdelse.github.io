#!/usr/bin/env node
/* ===================================================================
   CONTROLLA.JS — verifica la banca esercizi del test di italiano.

   Uso:   node controlla.js            (cerca test-data.js e test.html
                                        nella cartella corrente)
          node controlla.js /percorso/test-data.js /percorso/test.html

   Ogni controllo nasce da un difetto trovato davvero. Quando ne salta
   fuori uno nuovo, aggiungerlo qui: serve a non doverselo ricordare.
   =================================================================== */

const fs = require('fs');
const path = require('path');

const fileDati = process.argv[2] || 'test-data.js';
const fileTest = process.argv[3] || 'test.html';

if (!fs.existsSync(fileDati)) {
  console.error('Non trovo ' + fileDati);
  process.exit(1);
}
const S = eval(fs.readFileSync(fileDati, 'utf8') + '\n; TEST_STRUCTURES');
const HTML = fs.existsSync(fileTest) ? fs.readFileSync(fileTest, 'utf8') : '';

const N = { a: 'A1', a2: 'A2', b1: 'B1', b2: 'B2', c1: 'C1' };
let problemi = 0;
const sez = t => console.log('\n\x1b[1m' + t + '\x1b[0m');
const ok = t => console.log('  \x1b[32m✓\x1b[0m ' + t);
const ko = (t, righe) => {
  problemi++;
  console.log('  \x1b[31m✗\x1b[0m ' + t);
  (righe || []).slice(0, 12).forEach(r => console.log('      ' + r));
  if ((righe || []).length > 12) console.log('      … altre ' + (righe.length - 12));
};

/* ---------- utilità ---------- */
const parole = t => (t || '').toLowerCase()
  .replace(/[.,;:!?«»"()→_–]/g, ' ').split(/\s+/).filter(w => w.length > 1);
const jaccard = (a, b) => {
  const A = new Set(a), B = new Set(b);
  let i = 0; A.forEach(x => { if (B.has(x)) i++; });
  return i / (A.size + B.size - i);
};
const testoItem = it => [it.q, ...(it.options || []), it.a || '',
  (it.sol || []).join(' '), it.fix || ''].join(' ');
const soluzione = (e, it) => {
  if (e.fmt === 'buco' || e.fmt === 'giusta') return it.options[it.answer];
  if (e.fmt === 'errore') return it.fix;
  if (e.fmt === 'fill') return it.a;
  if (e.fmt === 'ordina') return it.sol.join(' ');
};
const perOgniItem = fn => S.forEach(s => s.exercises.forEach((e, i) =>
  e.items.forEach((it, k) => fn(s, e, i, it, k))));
const dove = (s, i, k) => '[' + N[s.lvl] + '] ' + s.title + ' es' + i + '#' + k;

/* ---------- 1. conteggi ---------- */
sez('1. Conteggi');
const nEs = S.reduce((a, s) => a + s.exercises.length, 0);
const nIt = S.reduce((a, s) => a + s.exercises.reduce((b, e) => b + e.items.length, 0), 0);
console.log('  ' + S.length + ' strutture · ' + nEs + ' esercizi · ' + nIt + ' item');
const strane = [];
S.forEach(s => {
  if (s.exercises.length !== 3) strane.push(s.title + ': ' + s.exercises.length + ' esercizi');
  s.exercises.forEach((e, i) => {
    if (e.items.length !== 10) strane.push(s.title + ' es' + i + ': ' + e.items.length + ' item');
  });
});
strane.length ? ko('Esercizi o item fuori dallo schema 3×10', strane)
              : ok('Tutte le strutture hanno 3 esercizi da 10 item');

const perLvl = {};
S.forEach(s => perLvl[s.lvl] = (perLvl[s.lvl] || 0) + 1);
console.log('  per livello: ' + ['a','a2','b1','b2','c1']
  .filter(l => perLvl[l]).map(l => N[l] + ' ' + perLvl[l]).join(' · '));

/* ---------- 2. validità strutturale ---------- */
sez('2. Validità strutturale');
const err = [];
const LOC = (() => {
  const m = HTML.match(/const LOCUZIONI = \[([\s\S]*?)\];/);
  if (!m) return null;
  const out = []; const re = /'((?:[^'\\]|\\.)*)'|"((?:[^"\\]|\\.)*)"/g; let x;
  while ((x = re.exec(m[1])) !== null) out.push((x[1] !== undefined ? x[1] : x[2]).toLowerCase());
  return out;
})();
perOgniItem((s, e, i, it, k) => {
  const d = dove(s, i, k);
  if (!it.q) err.push(d + ' — q mancante');
  if (e.fmt === 'buco' || e.fmt === 'giusta') {
    if (!Array.isArray(it.options) || it.options.length < 2) err.push(d + ' — options mancanti');
    else {
      if (typeof it.answer !== 'number' || it.answer < 0 || it.answer >= it.options.length)
        err.push(d + ' — answer fuori range');
      if (new Set(it.options).size !== it.options.length)
        err.push(d + ' — opzioni duplicate: ' + it.q);
    }
  }
  if (e.fmt === 'errore') {
    if (!it.wrong || !it.fix) { err.push(d + ' — wrong/fix mancante'); return; }
    const w = Array.isArray(it.wrong) ? null : it.wrong.trim();
    if (w === null) return;
    const composto = /\s/.test(w);
    const ws = it.q.replace(/[.,;:!?«»"]/g, ' ').split(/\s+/).filter(Boolean);
    if (composto) {
      if (LOC && !LOC.includes(w.toLowerCase()))
        err.push(d + ' — wrong composto NON raggruppato, incliccabile: «' + w + '»');
      if (!it.q.toLowerCase().includes(w.toLowerCase()))
        err.push(d + ' — locuzione assente dalla frase: «' + w + '»');
    } else if (!ws.includes(w)) {
      err.push(d + ' — wrong non presente nella frase: «' + w + '»');
    }
    if (w === it.fix) err.push(d + ' — wrong uguale a fix');
  }
  if (e.fmt === 'fill') {
    if (!it.a) err.push(d + ' — risposta mancante');
    if (it.no && !Array.isArray(it.no)) err.push(d + ' — «no» non è un elenco');
    if (it.no && it.a && it.no.includes(it.a)) err.push(d + ' — la risposta è anche fra le forme rifiutate');
    if (it.no && new Set(it.no).size !== it.no.length) err.push(d + ' — forme rifiutate duplicate: ' + it.q);
  }
  if (e.fmt === 'ordina' && !Array.isArray(it.sol)) err.push(d + ' — sol mancante');
});
err.length ? ko(err.length + ' problemi di struttura', err) : ok('Nessun problema di struttura');

/* ---------- 3. refusi ---------- */
sez('3. Refusi');
const refusi = [];
perOgniItem((s, e, i, it, k) => {
  const tutte = [...(it.options || []), ...(it.no || []), it.a || '', it.fix || '', it.q || ''];
  tutte.forEach(o => {
    const t = String(o);
    if (/[a-zà-ù]\d\b/.test(t)) refusi.push(dove(s, i, k) + ' — cifra attaccata: «' + t + '»');
    if (/\b[lLdDnNcCvVsS] [aeiouAEIOU]/.test(t) && !/\b(la|le|lo|li|da|di|do|no|ne|ci|ce|vi|ve|si|se) /i.test(t))
      refusi.push(dove(s, i, k) + ' — forse manca un apostrofo: «' + t + '»');
  });
});
refusi.length ? ko(refusi.length + ' possibili refusi', refusi) : ok('Nessun refuso evidente');

/* ---------- 4. ordina: la prima parola non deve avere la maiuscola ---------- */
sez('4. Formato «ordina»');
const maiusc = [];
const fuoriLivello = [];
perOgniItem((s, e, i, it, k) => {
  if (e.fmt !== 'ordina') return;
  if (s.lvl !== 'b1' && s.lvl !== 'b2') fuoriLivello.push(dove(s, i, k));
  if (Array.isArray(it.sol) && /^[A-ZÀ-Ù]/.test(it.sol[0]))
    maiusc.push(dove(s, i, k) + ' — «' + it.sol.join(' ') + '»');
});
maiusc.length
  ? ko(maiusc.length + ' soluzioni cominciano con la maiuscola: rivela la prima parola', maiusc)
  : ok('Nessuna soluzione rivela la prima parola con la maiuscola');
fuoriLivello.length
  ? ko('«ordina» fuori da B1/B2', fuoriLivello)
  : ok('«ordina» solo su B1 e B2');

/* ---------- 5. posizione dell'errore troppo concentrata ----------
   Si conta da sinistra E da destra: allungando la frase a sinistra
   l'indice cambia, ma se l'errore resta incollato alla fine la
   regolarità è intatta — e lo studente la vede. */
sez('5. Posizione dell\'errore negli esercizi «errore»');
const concentrati = [];
S.forEach(s => s.exercises.forEach((e, i) => {
  if (e.fmt !== 'errore') return;
  const sx = {}, dx = {};
  e.items.forEach(it => {
    const w = Array.isArray(it.wrong) ? it.wrong[0] : String(it.wrong || '');
    const ws = (it.q || '').replace(/[.,;:!?«»"]/g, '').split(' ').filter(Boolean);
    /* Il bersaglio può essere una locuzione raggruppata («ci sono»): cercarlo
       con indexOf su parole singole non lo trova, e l'item sparisce dal
       conteggio — così interi esercizi restavano fuori dal controllo. */
    const nw = w.trim().split(/\s+/).length;
    let p = -1;
    for (let j = 0; j <= ws.length - nw; j++)
      if (ws.slice(j, j + nw).join(' ') === w) { p = j; break; }
    if (p < 0) return;
    sx[p + 1] = (sx[p + 1] || 0) + 1;
    dx[ws.length - p - nw + 1] = (dx[ws.length - p - nw + 1] || 0) + 1;
  });
  const maxSx = Math.max(...Object.values(sx), 0);
  const maxDx = Math.max(...Object.values(dx), 0);
  const dove = '[' + N[s.lvl] + '] ' + s.title + ' es' + i;
  if (maxSx >= 8) concentrati.push(dove + ' — ' + maxSx +
    '/10 in posizione ' + Object.keys(sx).find(p => sx[p] === maxSx) + ' da sinistra');
  else if (maxDx >= 8) concentrati.push(dove + ' — ' + maxDx +
    '/10 in posizione ' + Object.keys(dx).find(p => dx[p] === maxDx) + ' DA DESTRA');
}));
concentrati.length
  ? ko(concentrati.length + ' esercizi con l\'errore quasi sempre nella stessa posizione', concentrati)
  : ok('Nessun esercizio con posizione dell\'errore prevedibile');

/* ---------- 5-bis. il bersaglio compare due volte nella frase ----------
   test.html confronta la parola cliccata per testo: se la parola sbagliata
   ricorre altrove nella frase, cliccando quella GIUSTA si prende il punto. */
sez('5-bis. Bersaglio ripetuto nella frase');
const doppi = [];
perOgniItem((s, e, i, it, k) => {
  if (e.fmt !== 'errore' || Array.isArray(it.wrong)) return;
  const ws = (it.q || '').replace(/[.,;:!?«»"]/g, ' ').split(/\s+/).filter(Boolean);
  const n = ws.filter(w => w === it.wrong).length;
  if (n > 1) doppi.push(dove(s, i, k) + ' — «' + it.wrong + '» ×' + n + ': ' + it.q);
});
doppi.length
  ? ko(doppi.length + ' item dove la parola sbagliata ricorre: si prende il punto cliccando quella giusta', doppi)
  : ok('Nessun bersaglio ripetuto');

/* ---------- 5-ter. istruzione muta sulla parola da togliere ---------- */
sez('5-ter. Istruzioni e parole da togliere');
const muti = [];
S.forEach(s => s.exercises.forEach((e, i) => {
  if (e.fmt !== 'errore') return;
  const tog = e.items.filter(it => /togliere|di troppo|superflu/i.test(String(it.fix || ''))).length;
  if (tog && !/troppo|togli|superflu|in più/i.test(e.instr || ''))
    muti.push('[' + N[s.lvl] + '] ' + s.title + ' es' + i + ' — ' + tog + ' item da togliere, istruzione muta');
}));
muti.length
  ? ko(muti.length + ' esercizi non avvertono che l\'errore può essere una parola di troppo', muti)
  : ok('Le istruzioni avvertono sempre della parola di troppo');

/* ---------- 5-quater. il verbo dell'istruzione corrisponde al formato ----------
   «Clicca…» chiede un gesto che solo il formato «errore» permette. Un buco che
   dice «clicca» (o un errore che dice «scegli») manda lo studente a vuoto.
   Nasce da un refuso vero: un'istruzione da «errore» finita su un «buco». */
sez('5-quater. Verbo dell\'istruzione contro formato');
const gesto = [];
S.forEach(s => s.exercises.forEach((e, i) => {
  const t = (e.instr || '').toLowerCase();
  if (!t) return;
  const d = '[' + N[s.lvl] + '] ' + s.title + ' es' + i + ' [' + e.fmt + '] — «' + e.instr + '»';
  if (/\bclicca\b/.test(t) && e.fmt !== 'errore' && e.fmt !== 'ordina') gesto.push(d);
  if (e.fmt === 'errore' && !/\bclicca\b/.test(t)) gesto.push(d);
}));
gesto.length
  ? ko(gesto.length + ' istruzioni chiedono un gesto che il formato non permette', gesto)
  : ok('Ogni istruzione chiede il gesto che il suo formato permette');

/* ---------- 5-quinquies. bersaglio di più parole e istruzione ----------
   Dove il bersaglio è una locuzione raggruppata («ci sono»), lo studente
   clicca un blocco, non una parola: l'istruzione deve dirlo. Nasce da una
   distinzione vera che era stata scambiata per un doppione e appiattita. */
sez('5-quinquies. Bersagli di più parole');
const blocchi = [];
S.forEach(s => s.exercises.forEach((e, i) => {
  if (e.fmt !== 'errore') return;
  const n = e.items.filter(it => {
    const w = Array.isArray(it.wrong) ? it.wrong.join(' ') : String(it.wrong || '');
    return /\s/.test(w.trim());
  }).length;
  if (!n) return;
  if (!/forma|locuzione|espressione|gruppo/i.test(e.instr || ''))
    blocchi.push('[' + N[s.lvl] + '] ' + s.title + ' es' + i + ' — ' + n +
      '/10 bersagli sono blocchi di più parole, ma l\'istruzione dice solo «parola»');
}));
blocchi.length
  ? ko(blocchi.length + ' esercizi con bersaglio di più parole non annunciato', blocchi)
  : ok('Dove si clicca un blocco, l\'istruzione lo dice');

/* ---------- 6. la correzione deve essere sostituibile ---------- */
sez('6. Correzioni sostituibili');
const nonSost = [];
perOgniItem((s, e, i, it, k) => {
  if (e.fmt !== 'errore') return;
  let f = String(it.fix || '');
  if (/^\(|togliere|clicca comunque|corretto:|attaccato/i.test(f)) return;  // casi ammessi
  f = f.replace(/\s*\(.*$/, '').trim();          // via la glossa fra parentesi
  const w = Array.isArray(it.wrong) ? it.wrong.join(' ') : String(it.wrong || '');
  const nw = w.trim().split(/\s+/).length, nf = f.split(/\s+/).length;
  if (nf > nw + 1)
    nonSost.push(dove(s, i, k) + ' — «' + w + '» → «' + f + '» (' + nw + '→' + nf + ' parole)');
});
nonSost.length
  ? ko(nonSost.length + ' correzioni molto più lunghe del bersaglio: verificare che la sostituzione funzioni', nonSost)
  : ok('Tutte le correzioni sono sostituibili');

/* ---------- 7. rivelazioni fra esercizi ---------- */
sez('7. Rivelazioni fra esercizi della stessa struttura');
const rivel = [];
S.forEach(s => {
  const all = [];
  s.exercises.forEach((e, ei) => e.items.forEach((it, k) => {
    let risolta;
    if ((e.fmt === 'buco' || e.fmt === 'fill') && /___/.test(it.q))
      risolta = it.q.replace('___', soluzione(e, it));
    else if (e.fmt === 'errore' && !Array.isArray(it.wrong))
      risolta = it.q.replace(it.wrong, it.fix);
    else risolta = String(soluzione(e, it) || '');
    all.push({ ei, k, it, risolta: (risolta || '').toLowerCase().replace(/[.,;:!?«»"()→]/g, '').trim() });
  }));
  all.forEach(a => all.forEach(b => {
    if (a.ei === b.ei) return;
    if (a.risolta.length > 12 && (b.it.q || '').toLowerCase().includes(a.risolta))
      rivel.push(s.title + ' — es' + a.ei + '#' + a.k + ' è risolto da es' + b.ei + '#' + b.k);
  }));
});
rivel.length ? ko(rivel.length + ' rivelazioni', rivel) : ok('Nessun item rivela la risposta di un altro');

/* ---------- 8. collisioni ---------- */
sez('8. Somiglianza fra esercizi (Jaccard ≥ 0,60)');
const coll = [];
S.forEach(s => {
  const all = [];
  s.exercises.forEach((e, ei) => e.items.forEach((it, k) => all.push({ ei, k, tok: parole(testoItem(it)), q: it.q })));
  for (let a = 0; a < all.length; a++) for (let b = a + 1; b < all.length; b++) {
    if (all[a].ei === all[b].ei) continue;
    const j = jaccard(all[a].tok, all[b].tok);
    if (j >= 0.60) coll.push(j.toFixed(2) + '  ' + s.title + '  «' + all[a].q + '» / «' + all[b].q + '»');
  }
});
coll.length
  ? ko(coll.length + ' coppie sopra soglia (l\'anti-collisione a runtime le evita, ma vanno guardate)', coll)
  : ok('Nessuna coppia sopra soglia');

/* ---------- 9. diluizione delle locuzioni raggruppate ---------- */
if (LOC) {
  sez('9. Locuzioni raggruppate');
  let innocenti = 0, bersagli = 0;
  perOgniItem((s, e, i, it) => {
    if (e.fmt !== 'errore') return;
    const q = (it.q || '').toLowerCase();
    const w = (Array.isArray(it.wrong) ? it.wrong.join(' ') : String(it.wrong || '')).toLowerCase();
    LOC.forEach(l => { if (!q.includes(l)) return; l === w ? bersagli++ : innocenti++; });
  });
  const pct = 100 * bersagli / (innocenti + bersagli || 1);
  pct < 17
    ? ok('Un blocco unito è l\'errore nel ' + pct.toFixed(1) + '% dei casi (sotto il caso puro, ~17%)')
    : ko('Un blocco unito è l\'errore nel ' + pct.toFixed(1) + '% dei casi: è un indizio, allargare la lista');
}

/* ---------- 10. preset diagnostico ---------- */
sez('10. Preset di piazzamento');
const diag = {};
S.forEach(s => { if (s.diag) (diag[s.lvl] = diag[s.lvl] || []).push(s.title); });
const squil = Object.entries(diag).filter(([, v]) => v.length !== 4);
squil.length
  ? ko('Livelli senza 4 strutture diagnostiche', squil.map(([l, v]) => N[l] + ': ' + v.length))
  : ok('4 strutture diagnostiche per livello');
Object.entries(diag).forEach(([l, v]) => console.log('  ' + N[l] + ': ' + v.join(' · ')));

/* ---------- 11. etichette «stima» ---------- */
sez('11. Etichette di calcolo (stima)');
const st = S.filter(s => s.stima);
st.length
  ? st.forEach(s => console.log('  ' + s.title + ' — insegnata a ' + s.lez[0] + ', calcolata come ' + N[s.stima]))
  : console.log('  nessuna');
ok('Ricorda: «stima» solo dove l\'indice mostra un ripasso reale a un livello superiore');

/* ---------- esito ---------- */
console.log('\n' + '─'.repeat(60));
if (problemi === 0) console.log('\x1b[32mTutti i controlli superati.\x1b[0m');
else console.log('\x1b[31m' + problemi + ' controlli non superati.\x1b[0m');
console.log('\nControlli che nessuno script può fare — restano da leggere:');
console.log('  · la frase è sbagliata SEMPRE, o esiste un contesto in cui regge?');
console.log('  · i distrattori sono davvero sbagliati, o sono varianti valide?');
console.log('  · la frase suona naturale, o è stata forzata per far tornare la regola?');
console.log('  · il lessico è alla portata del livello?');
