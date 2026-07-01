/* ===================================================================
   TEST-DATA.JS - Banca esercizi del TEST
   Schema item per formato (campo fmt in ogni esercizio):
     fill   -> { q:"... ___ ...", a:"risposta" }  (buco digitato; alt con |, buchi multipli con /)
     buco   -> { q:"... ___ ...", options:[...], answer:idx }  (scelta multipla)
     errore -> { q:"frase", wrong:"parola", fix:"corretta" }  (clicca lerrore)
     giusta -> { q:"consegna", options:[frasi], answer:idx }  (scegli la frase giusta)
   A0.A1: 13 strutture, 10 item/esercizio, formato misto.
   C1: 5 strutture, 4 item/esercizio (fill, da espandere).
   =================================================================== */
const TEST_STRUCTURES = [
  {
    "lvl": "a",
    "title": "Essere e avere",
    "exercises": [
      {
        "type": "Riempimento",
        "fmt": "fill",
        "instr": "Completa con la forma giusta di essere o avere al presente.",
        "items": [
          {
            "q": "Lei ___ spagnola e ___ trent'anni.",
            "a": "è / ha"
          },
          {
            "q": "Noi ___ studenti e ___ molti libri.",
            "a": "siamo / abbiamo"
          },
          {
            "q": "Loro ___ stanchi perché ___ molto lavoro.",
            "a": "sono / hanno"
          },
          {
            "q": "Voi ___ pronti? Sì, ___ solo bisogno di un minuto.",
            "a": "siete / abbiamo"
          },
          {
            "q": "Io ___ italiano ma ___ una casa in Spagna.",
            "a": "sono / ho"
          },
          {
            "q": "Tu ___ fortunato: ___ molti amici qui.",
            "a": "sei / hai"
          },
          {
            "q": "Marco ___ ingegnere e ___ due figli.",
            "a": "è / ha"
          },
          {
            "q": "Noi non ___ in ritardo, ___ ancora tempo.",
            "a": "siamo / abbiamo"
          },
          {
            "q": "Le ragazze ___ contente perché ___ un giorno libero.",
            "a": "sono / hanno"
          },
          {
            "q": "Voi ___ sicuri? Io ___ dei dubbi.",
            "a": "siete / ho"
          }
        ]
      },
      {
        "type": "Correzione",
        "fmt": "errore",
        "instr": "Clicca la parola sbagliata nella frase.",
        "items": [
          {
            "q": "Noi siamo sete.",
            "wrong": "siamo",
            "fix": "abbiamo"
          },
          {
            "q": "Loro sono tre figli.",
            "wrong": "sono",
            "fix": "hanno"
          },
          {
            "q": "Io sono venticinque anni.",
            "wrong": "sono",
            "fix": "ho"
          },
          {
            "q": "Tu hai italiano?",
            "wrong": "hai",
            "fix": "sei"
          },
          {
            "q": "Lei ha molto simpatica.",
            "wrong": "ha",
            "fix": "è"
          },
          {
            "q": "Voi avete in ritardo.",
            "wrong": "avete",
            "fix": "siete"
          },
          {
            "q": "Marco è fame.",
            "wrong": "è",
            "fix": "ha"
          },
          {
            "q": "Noi abbiamo felici oggi.",
            "wrong": "abbiamo",
            "fix": "siamo"
          },
          {
            "q": "I bambini hanno stanchi.",
            "wrong": "hanno",
            "fix": "sono"
          },
          {
            "q": "Tu sei ragione.",
            "wrong": "sei",
            "fix": "hai"
          }
        ]
      },
      {
        "type": "Trasformazione",
        "fmt": "fill",
        "instr": "Volgi al plurale. Scrivi solo la parte che cambia (verbo + eventuale aggettivo).",
        "items": [
          {
            "q": "Lei è felice. → Loro ___.",
            "a": "sono felici"
          },
          {
            "q": "Io ho caldo. → Noi ___.",
            "a": "abbiamo caldo"
          },
          {
            "q": "Tu sei alto. → Voi ___.",
            "a": "siete alti"
          },
          {
            "q": "Lui ha ragione. → Loro ___.",
            "a": "hanno ragione"
          },
          {
            "q": "Io sono stanco. → Noi ___.",
            "a": "siamo stanchi"
          },
          {
            "q": "Tu hai sonno. → Voi ___.",
            "a": "avete sonno"
          },
          {
            "q": "Lei è italiana. → Loro ___.",
            "a": "sono italiane"
          },
          {
            "q": "Lui è contento. → Loro ___.",
            "a": "sono contenti"
          },
          {
            "q": "Io ho fretta. → Noi ___.",
            "a": "abbiamo fretta"
          },
          {
            "q": "Tu sei gentile. → Voi ___.",
            "a": "siete gentili"
          }
        ]
      }
    ]
  },
  {
    "lvl": "a",
    "title": "Articoli determinativi",
    "exercises": [
      {
        "type": "Riempimento",
        "fmt": "fill",
        "instr": "Inserisci l'articolo determinativo (il, lo, l', la, i, gli, le).",
        "items": [
          {
            "q": "___ studente è bravo.",
            "a": "Lo"
          },
          {
            "q": "___ ragazze sono in classe.",
            "a": "Le"
          },
          {
            "q": "___ zio di Marco abita qui.",
            "a": "Lo"
          },
          {
            "q": "___ ombrelli sono nuovi.",
            "a": "Gli"
          },
          {
            "q": "___ amica di Anna è francese.",
            "a": "L'"
          },
          {
            "q": "___ problemi sono difficili.",
            "a": "I"
          },
          {
            "q": "___ ora di pranzo è alle 13.",
            "a": "L'"
          },
          {
            "q": "___ psicologo lavora in ospedale.",
            "a": "Lo"
          },
          {
            "q": "___ studenti sono in ritardo.",
            "a": "Gli"
          },
          {
            "q": "___ isole italiane sono belle.",
            "a": "Le"
          }
        ]
      },
      {
        "type": "Correzione",
        "fmt": "errore",
        "instr": "Clicca l'articolo sbagliato.",
        "items": [
          {
            "q": "il amico di Luca",
            "wrong": "il",
            "fix": "l'"
          },
          {
            "q": "i studenti americani",
            "wrong": "i",
            "fix": "gli"
          },
          {
            "q": "la ora di cena",
            "wrong": "la",
            "fix": "l'"
          },
          {
            "q": "lo libro nuovo",
            "wrong": "lo",
            "fix": "il"
          },
          {
            "q": "il zaino pesante",
            "wrong": "il",
            "fix": "lo"
          },
          {
            "q": "le amici simpatici",
            "wrong": "le",
            "fix": "gli"
          },
          {
            "q": "gli ragazze italiane",
            "wrong": "gli",
            "fix": "le"
          },
          {
            "q": "l' studente bravo",
            "wrong": "l'",
            "fix": "lo"
          },
          {
            "q": "i zii di Marco",
            "wrong": "i",
            "fix": "gli"
          },
          {
            "q": "la elefante africano",
            "wrong": "la",
            "fix": "l'"
          }
        ]
      },
      {
        "type": "Trasformazione",
        "fmt": "fill",
        "instr": "Volgi al plurale (articolo + nome). Scrivi tutto il gruppo.",
        "items": [
          {
            "q": "la stazione",
            "a": "le stazioni"
          },
          {
            "q": "lo zaino",
            "a": "gli zaini"
          },
          {
            "q": "l'amico",
            "a": "gli amici"
          },
          {
            "q": "il problema",
            "a": "i problemi"
          },
          {
            "q": "la città",
            "a": "le città"
          },
          {
            "q": "lo studente",
            "a": "gli studenti"
          },
          {
            "q": "l'ora",
            "a": "le ore"
          },
          {
            "q": "il libro",
            "a": "i libri"
          },
          {
            "q": "la moglie",
            "a": "le mogli"
          },
          {
            "q": "lo specchio",
            "a": "gli specchi"
          }
        ]
      }
    ]
  },
  {
    "lvl": "a",
    "title": "Articoli indeterminativi",
    "exercises": [
      {
        "type": "Scelta multipla",
        "fmt": "buco",
        "instr": "Scegli l'articolo indeterminativo corretto.",
        "items": [
          {
            "q": "C'è ___ studente in aula.",
            "options": [
              "un",
              "uno",
              "una"
            ],
            "answer": 1
          },
          {
            "q": "Vorrei ___ informazione.",
            "options": [
              "un",
              "una",
              "un'"
            ],
            "answer": 2
          },
          {
            "q": "Ho ___ zaino nuovo.",
            "options": [
              "un",
              "uno",
              "un'"
            ],
            "answer": 1
          },
          {
            "q": "È ___ bella giornata.",
            "options": [
              "un",
              "una",
              "un'"
            ],
            "answer": 1
          },
          {
            "q": "Prendo ___ caffè.",
            "options": [
              "un",
              "uno",
              "un'"
            ],
            "answer": 0
          },
          {
            "q": "C'è ___ amica che ti aspetta.",
            "options": [
              "un",
              "una",
              "un'"
            ],
            "answer": 2
          },
          {
            "q": "Compro ___ orologio.",
            "options": [
              "un",
              "uno",
              "un'"
            ],
            "answer": 0
          },
          {
            "q": "Ho ___ idea.",
            "options": [
              "un",
              "una",
              "un'"
            ],
            "answer": 2
          },
          {
            "q": "È ___ psicologo bravo.",
            "options": [
              "un",
              "uno",
              "un'"
            ],
            "answer": 1
          },
          {
            "q": "Voglio ___ pizza.",
            "options": [
              "un",
              "una",
              "un'"
            ],
            "answer": 1
          }
        ]
      },
      {
        "type": "Correzione",
        "fmt": "errore",
        "instr": "Clicca l'articolo sbagliato.",
        "items": [
          {
            "q": "uno amico simpatico",
            "wrong": "uno",
            "fix": "un"
          },
          {
            "q": "una uomo alto",
            "wrong": "una",
            "fix": "un"
          },
          {
            "q": "un studente straniero",
            "wrong": "un",
            "fix": "uno"
          },
          {
            "q": "una informazione utile",
            "wrong": "una",
            "fix": "un'"
          },
          {
            "q": "un zaino rosso",
            "wrong": "un",
            "fix": "uno"
          },
          {
            "q": "uno caffè caldo",
            "wrong": "uno",
            "fix": "un"
          },
          {
            "q": "una problema serio",
            "wrong": "una",
            "fix": "un"
          },
          {
            "q": "una ora fa",
            "wrong": "una",
            "fix": "un'"
          },
          {
            "q": "uno tavolo grande",
            "wrong": "uno",
            "fix": "un"
          },
          {
            "q": "uno orologio nuovo",
            "wrong": "uno",
            "fix": "un"
          }
        ]
      },
      {
        "type": "Trasformazione",
        "fmt": "buco",
        "instr": "Scegli l'articolo giusto per completare.",
        "items": [
          {
            "q": "Marco è ___ studente.",
            "options": [
              "un",
              "uno",
              "un'"
            ],
            "answer": 1
          },
          {
            "q": "Anna è ___ amica.",
            "options": [
              "un",
              "una",
              "un'"
            ],
            "answer": 2
          },
          {
            "q": "Ho ___ zio a Roma.",
            "options": [
              "un",
              "uno",
              "un'"
            ],
            "answer": 0
          },
          {
            "q": "C'è ___ specchio in camera.",
            "options": [
              "un",
              "uno",
              "un'"
            ],
            "answer": 1
          },
          {
            "q": "Leggo ___ storia.",
            "options": [
              "un",
              "una",
              "un'"
            ],
            "answer": 1
          },
          {
            "q": "Vedo ___ elefante.",
            "options": [
              "un",
              "uno",
              "un'"
            ],
            "answer": 0
          },
          {
            "q": "Bevo ___ aranciata.",
            "options": [
              "un",
              "una",
              "un'"
            ],
            "answer": 2
          },
          {
            "q": "Aspetto ___ autobus.",
            "options": [
              "un",
              "uno",
              "un'"
            ],
            "answer": 0
          },
          {
            "q": "Cerco ___ appartamento.",
            "options": [
              "un",
              "una",
              "un'"
            ],
            "answer": 0
          },
          {
            "q": "Ha ___ sorella.",
            "options": [
              "un",
              "una",
              "un'"
            ],
            "answer": 1
          }
        ]
      }
    ]
  },
  {
    "lvl": "a",
    "title": "Il plurale dei nomi",
    "exercises": [
      {
        "type": "Trasformazione",
        "fmt": "fill",
        "instr": "Volgi al plurale (articolo + nome).",
        "items": [
          {
            "q": "la mano",
            "a": "le mani"
          },
          {
            "q": "il problema",
            "a": "i problemi"
          },
          {
            "q": "l'uovo",
            "a": "le uova"
          },
          {
            "q": "la moglie",
            "a": "le mogli"
          },
          {
            "q": "il braccio",
            "a": "le braccia"
          },
          {
            "q": "la casa",
            "a": "le case"
          },
          {
            "q": "lo zio",
            "a": "gli zii"
          },
          {
            "q": "l'amico",
            "a": "gli amici"
          },
          {
            "q": "il dito",
            "a": "le dita"
          },
          {
            "q": "la radio",
            "a": "le radio"
          }
        ]
      },
      {
        "type": "Riempimento",
        "fmt": "fill",
        "instr": "Scrivi il plurale del nome tra parentesi (i nomi invariabili non cambiano).",
        "items": [
          {
            "q": "Ci sono due ___ in città. (università)",
            "a": "università"
          },
          {
            "q": "Ho comprato tre ___. (kiwi)",
            "a": "kiwi"
          },
          {
            "q": "Le ___ economiche sono difficili. (crisi)",
            "a": "crisi"
          },
          {
            "q": "Abbiamo visto molti ___. (film)",
            "a": "film"
          },
          {
            "q": "Bevo due ___ al giorno. (caffè)",
            "a": "caffè"
          },
          {
            "q": "Ci sono molte ___ oggi. (città)",
            "a": "città"
          },
          {
            "q": "Guardo due ___ diverse. (serie)",
            "a": "serie"
          },
          {
            "q": "Compro delle ___ nuove. (foto)",
            "a": "foto"
          },
          {
            "q": "Prendo tre ___. (tè)",
            "a": "tè"
          },
          {
            "q": "Ci sono due ___ in classe. (computer)",
            "a": "computer"
          }
        ]
      },
      {
        "type": "Correzione",
        "fmt": "errore",
        "instr": "Clicca la parola con il plurale sbagliato.",
        "items": [
          {
            "q": "tre sportes diversi",
            "wrong": "sportes",
            "fix": "sport"
          },
          {
            "q": "due manos piccole",
            "wrong": "manos",
            "fix": "mani"
          },
          {
            "q": "i problemas seri",
            "wrong": "problemas",
            "fix": "problemi"
          },
          {
            "q": "le universitàs italiane",
            "wrong": "universitàs",
            "fix": "università"
          },
          {
            "q": "molti filmi belli",
            "wrong": "filmi",
            "fix": "film"
          },
          {
            "q": "due camice bianche",
            "wrong": "camice",
            "fix": "camicie"
          },
          {
            "q": "due amice greche",
            "wrong": "amice",
            "fix": "amiche"
          },
          {
            "q": "tre baris aperti",
            "wrong": "baris",
            "fix": "bar"
          },
          {
            "q": "i medicos bravi",
            "wrong": "medicos",
            "fix": "medici"
          },
          {
            "q": "le manos fredde",
            "wrong": "manos",
            "fix": "mani"
          }
        ]
      }
    ]
  },
  {
    "lvl": "a",
    "title": "L'accordo dell'aggettivo",
    "exercises": [
      {
        "type": "Riempimento",
        "fmt": "fill",
        "instr": "Accorda in genere e numero l'aggettivo tra parentesi.",
        "items": [
          {
            "q": "una casa ___ (grande)",
            "a": "grande"
          },
          {
            "q": "due ragazzi ___ (simpatico)",
            "a": "simpatici"
          },
          {
            "q": "le scarpe ___ (nuovo)",
            "a": "nuove"
          },
          {
            "q": "un problema ___ (difficile)",
            "a": "difficile"
          },
          {
            "q": "delle idee ___ (interessante)",
            "a": "interessanti"
          },
          {
            "q": "i libri ___ (rosso)",
            "a": "rossi"
          },
          {
            "q": "una storia ___ (bello)",
            "a": "bella"
          },
          {
            "q": "gli studenti ___ (bravo)",
            "a": "bravi"
          },
          {
            "q": "le città ___ (grande)",
            "a": "grandi"
          },
          {
            "q": "una macchina ___ (veloce)",
            "a": "veloce"
          }
        ]
      },
      {
        "type": "Correzione",
        "fmt": "errore",
        "instr": "Clicca l'aggettivo con l'accordo sbagliato.",
        "items": [
          {
            "q": "una macchina giallo",
            "wrong": "giallo",
            "fix": "gialla"
          },
          {
            "q": "le case bianco",
            "wrong": "bianco",
            "fix": "bianche"
          },
          {
            "q": "i ragazzi italiana",
            "wrong": "italiana",
            "fix": "italiani"
          },
          {
            "q": "una storia interessanti",
            "wrong": "interessanti",
            "fix": "interessante"
          },
          {
            "q": "due amiche simpatico",
            "wrong": "simpatico",
            "fix": "simpatiche"
          },
          {
            "q": "dei libri rosse",
            "wrong": "rosse",
            "fix": "rossi"
          },
          {
            "q": "una ragazza alto",
            "wrong": "alto",
            "fix": "alta"
          },
          {
            "q": "gli studenti brava",
            "wrong": "brava",
            "fix": "bravi"
          },
          {
            "q": "le scarpe nero",
            "wrong": "nero",
            "fix": "nere"
          },
          {
            "q": "un problema difficili",
            "wrong": "difficili",
            "fix": "difficile"
          }
        ]
      },
      {
        "type": "Trasformazione",
        "fmt": "fill",
        "instr": "Volgi al plurale l'intero gruppo (articolo + nome + aggettivo).",
        "items": [
          {
            "q": "la casa grande",
            "a": "le case grandi"
          },
          {
            "q": "il libro rosso",
            "a": "i libri rossi"
          },
          {
            "q": "l'amica simpatica",
            "a": "le amiche simpatiche"
          },
          {
            "q": "lo zaino pesante",
            "a": "gli zaini pesanti"
          },
          {
            "q": "la ragazza alta",
            "a": "le ragazze alte"
          },
          {
            "q": "il film interessante",
            "a": "i film interessanti"
          },
          {
            "q": "l'esercizio difficile",
            "a": "gli esercizi difficili"
          },
          {
            "q": "la macchina veloce",
            "a": "le macchine veloci"
          },
          {
            "q": "il vestito nuovo",
            "a": "i vestiti nuovi"
          },
          {
            "q": "la storia bella",
            "a": "le storie belle"
          }
        ]
      }
    ]
  },
  {
    "lvl": "a",
    "title": "C'è / Ci sono",
    "exercises": [
      {
        "type": "Scelta multipla",
        "fmt": "buco",
        "instr": "Scegli tra c'è e ci sono.",
        "items": [
          {
            "q": "In aula ___ molti studenti.",
            "options": [
              "c'è",
              "ci sono"
            ],
            "answer": 1
          },
          {
            "q": "Sul tavolo ___ un libro.",
            "options": [
              "c'è",
              "ci sono"
            ],
            "answer": 0
          },
          {
            "q": "In frigo ___ delle uova.",
            "options": [
              "c'è",
              "ci sono"
            ],
            "answer": 1
          },
          {
            "q": "Qui vicino ___ una farmacia?",
            "options": [
              "c'è",
              "ci sono"
            ],
            "answer": 0
          },
          {
            "q": "In città ___ molti turisti.",
            "options": [
              "c'è",
              "ci sono"
            ],
            "answer": 1
          },
          {
            "q": "___ un problema con il treno.",
            "options": [
              "C'è",
              "Ci sono"
            ],
            "answer": 0
          },
          {
            "q": "Nel parco ___ tanti bambini.",
            "options": [
              "c'è",
              "ci sono"
            ],
            "answer": 1
          },
          {
            "q": "In camera ___ due letti.",
            "options": [
              "c'è",
              "ci sono"
            ],
            "answer": 1
          },
          {
            "q": "Sulla tavola ___ del pane.",
            "options": [
              "c'è",
              "ci sono"
            ],
            "answer": 0
          },
          {
            "q": "In centro ___ una bella piazza.",
            "options": [
              "c'è",
              "ci sono"
            ],
            "answer": 0
          }
        ]
      },
      {
        "type": "Correzione",
        "fmt": "errore",
        "instr": "Clicca l'espressione sbagliata (c'è / ci sono).",
        "items": [
          {
            "q": "In città c'è molti turisti.",
            "wrong": "c'è",
            "fix": "ci sono"
          },
          {
            "q": "Ci sono un gatto sul divano.",
            "wrong": "sono",
            "fix": "è (c'è)"
          },
          {
            "q": "Sul tavolo c'è due piatti.",
            "wrong": "c'è",
            "fix": "ci sono"
          },
          {
            "q": "In strada ci sono molto rumore.",
            "wrong": "sono",
            "fix": "è (c'è)"
          },
          {
            "q": "Nel bicchiere ci sono acqua.",
            "wrong": "sono",
            "fix": "è (c'è)"
          },
          {
            "q": "In classe c'è venti studenti.",
            "wrong": "c'è",
            "fix": "ci sono"
          },
          {
            "q": "Qui c'è tre ristoranti.",
            "wrong": "c'è",
            "fix": "ci sono"
          },
          {
            "q": "Sul muro ci sono un quadro.",
            "wrong": "sono",
            "fix": "è (c'è)"
          },
          {
            "q": "In giardino c'è molti fiori.",
            "wrong": "c'è",
            "fix": "ci sono"
          },
          {
            "q": "Davanti alla casa ci sono un albero.",
            "wrong": "sono",
            "fix": "è (c'è)"
          }
        ]
      },
      {
        "type": "Trasformazione",
        "fmt": "fill",
        "instr": "Riscrivi al plurale usando il partitivo (dei, delle, degli). Scrivi la frase.",
        "items": [
          {
            "q": "C'è un libro.",
            "a": "Ci sono dei libri."
          },
          {
            "q": "C'è una mela.",
            "a": "Ci sono delle mele."
          },
          {
            "q": "C'è uno studente.",
            "a": "Ci sono degli studenti."
          },
          {
            "q": "C'è un'amica.",
            "a": "Ci sono delle amiche."
          },
          {
            "q": "C'è un problema.",
            "a": "Ci sono dei problemi."
          },
          {
            "q": "C'è una macchina.",
            "a": "Ci sono delle macchine."
          },
          {
            "q": "C'è uno zaino.",
            "a": "Ci sono degli zaini."
          },
          {
            "q": "C'è un errore.",
            "a": "Ci sono degli errori."
          },
          {
            "q": "C'è una sedia.",
            "a": "Ci sono delle sedie."
          },
          {
            "q": "C'è un cane.",
            "a": "Ci sono dei cani."
          }
        ]
      }
    ]
  },
  {
    "lvl": "a",
    "title": "Presente indicativo: verbi regolari",
    "exercises": [
      {
        "type": "Riempimento",
        "fmt": "fill",
        "instr": "Coniuga al presente indicativo il verbo tra parentesi.",
        "items": [
          {
            "q": "Noi ___ una lettera. (scrivere)",
            "a": "scriviamo"
          },
          {
            "q": "Lei ___ molto. (dormire)",
            "a": "dorme"
          },
          {
            "q": "Tu ___ il lavoro? (finire)",
            "a": "finisci"
          },
          {
            "q": "Loro ___ a Milano. (abitare)",
            "a": "abitano"
          },
          {
            "q": "Io ___ il giornale. (leggere)",
            "a": "leggo"
          },
          {
            "q": "Voi ___ spagnolo. (parlare)",
            "a": "parlate"
          },
          {
            "q": "Noi ___ la porta. (aprire)",
            "a": "apriamo"
          },
          {
            "q": "Lui ___ la domanda. (capire)",
            "a": "capisce"
          },
          {
            "q": "Tu ___ alle otto. (partire)",
            "a": "parti"
          },
          {
            "q": "Loro ___ in centro. (vivere)",
            "a": "vivono"
          }
        ]
      },
      {
        "type": "Correzione",
        "fmt": "errore",
        "instr": "Clicca il verbo coniugato in modo sbagliato.",
        "items": [
          {
            "q": "Noi parlate spagnolo.",
            "wrong": "parlate",
            "fix": "parliamo"
          },
          {
            "q": "Tu finite il lavoro.",
            "wrong": "finite",
            "fix": "finisci"
          },
          {
            "q": "Io vivono qui.",
            "wrong": "vivono",
            "fix": "vivo"
          },
          {
            "q": "Voi dormono troppo.",
            "wrong": "dormono",
            "fix": "dormite"
          },
          {
            "q": "Lei scrivo una mail.",
            "wrong": "scrivo",
            "fix": "scrive"
          },
          {
            "q": "Loro parla italiano.",
            "wrong": "parla",
            "fix": "parlano"
          },
          {
            "q": "Noi capisce tutto.",
            "wrong": "capisce",
            "fix": "capiamo"
          },
          {
            "q": "Tu apriamo la finestra.",
            "wrong": "apriamo",
            "fix": "apri"
          },
          {
            "q": "Io leggiamo un libro.",
            "wrong": "leggiamo",
            "fix": "leggo"
          },
          {
            "q": "Voi partono domani.",
            "wrong": "partono",
            "fix": "partite"
          }
        ]
      },
      {
        "type": "Trasformazione",
        "fmt": "fill",
        "instr": "Cambia il soggetto da «io» a «noi». Scrivi solo il verbo.",
        "items": [
          {
            "q": "Io scrivo un'email. → Noi ___ un'email.",
            "a": "scriviamo"
          },
          {
            "q": "Io parto domani. → Noi ___ domani.",
            "a": "partiamo"
          },
          {
            "q": "Io capisco la domanda. → Noi ___ la domanda.",
            "a": "capiamo"
          },
          {
            "q": "Io apro la finestra. → Noi ___ la finestra.",
            "a": "apriamo"
          },
          {
            "q": "Io leggo il giornale. → Noi ___ il giornale.",
            "a": "leggiamo"
          },
          {
            "q": "Io dormo poco. → Noi ___ poco.",
            "a": "dormiamo"
          },
          {
            "q": "Io finisco presto. → Noi ___ presto.",
            "a": "finiamo"
          },
          {
            "q": "Io vivo a Roma. → Noi ___ a Roma.",
            "a": "viviamo"
          },
          {
            "q": "Io parlo tre lingue. → Noi ___ tre lingue.",
            "a": "parliamo"
          },
          {
            "q": "Io preferisco il tè. → Noi ___ il tè.",
            "a": "preferiamo"
          }
        ]
      }
    ]
  },
  {
    "lvl": "a",
    "title": "La negazione",
    "exercises": [
      {
        "type": "Trasformazione",
        "fmt": "fill",
        "instr": "Rendi negativa la frase. Scrivila per intero.",
        "items": [
          {
            "q": "Parlo francese.",
            "a": "Non parlo francese."
          },
          {
            "q": "Lei abita qui.",
            "a": "Lei non abita qui."
          },
          {
            "q": "Abbiamo tempo.",
            "a": "Non abbiamo tempo."
          },
          {
            "q": "Loro lavorano oggi.",
            "a": "Loro non lavorano oggi."
          },
          {
            "q": "Mangio la carne.",
            "a": "Non mangio la carne."
          },
          {
            "q": "Tu capisci tutto.",
            "a": "Tu non capisci tutto."
          },
          {
            "q": "Vado al cinema.",
            "a": "Non vado al cinema."
          },
          {
            "q": "Lui beve il caffè.",
            "a": "Lui non beve il caffè."
          },
          {
            "q": "Studiamo insieme.",
            "a": "Non studiamo insieme."
          },
          {
            "q": "Voi partite oggi.",
            "a": "Voi non partite oggi."
          }
        ]
      },
      {
        "type": "Riempimento",
        "fmt": "fill",
        "instr": "Completa con la parola negativa giusta (niente, nessuno, mai, più, ancora).",
        "items": [
          {
            "q": "Non c'è ___ di interessante.",
            "a": "niente"
          },
          {
            "q": "Non vado ___ al cinema, costa troppo.",
            "a": "più | mai"
          },
          {
            "q": "Non ho ___ visto quel film, lo vedo stasera.",
            "a": "ancora"
          },
          {
            "q": "Non c'è ___ in ufficio oggi.",
            "a": "nessuno"
          },
          {
            "q": "Non mangio ___ la carne, sono vegetariano.",
            "a": "mai"
          },
          {
            "q": "Non conosco ___ qui.",
            "a": "nessuno"
          },
          {
            "q": "Non voglio ___, grazie.",
            "a": "niente"
          },
          {
            "q": "Non abito ___ a Roma, mi sono trasferito.",
            "a": "più"
          },
          {
            "q": "Non sono ___ stato in Italia, ci vado quest'anno.",
            "a": "mai"
          },
          {
            "q": "Non ho ___ finito, dammi un minuto.",
            "a": "ancora"
          }
        ]
      },
      {
        "type": "Correzione",
        "fmt": "errore",
        "instr": "Clicca la parola sbagliata nella frase negativa.",
        "items": [
          {
            "q": "Non ho mangiato qualcosa.",
            "wrong": "qualcosa",
            "fix": "niente"
          },
          {
            "q": "Ho mai visto Roma.",
            "wrong": "Ho",
            "fix": "Non ho"
          },
          {
            "q": "Viene nessuno alla festa.",
            "wrong": "Viene",
            "fix": "Non viene"
          },
          {
            "q": "C'è niente da mangiare.",
            "wrong": "C'è",
            "fix": "Non c'è"
          },
          {
            "q": "Non conosco qualcuno qui.",
            "wrong": "qualcuno",
            "fix": "nessuno"
          },
          {
            "q": "Non voglio nulla di speciale.",
            "wrong": "nulla",
            "fix": "niente"
          },
          {
            "q": "Non vado sempre al mare.",
            "wrong": "sempre",
            "fix": "mai"
          },
          {
            "q": "Non c'è qualcosa nel frigo.",
            "wrong": "qualcosa",
            "fix": "niente"
          },
          {
            "q": "Non vado sempre in palestra.",
            "wrong": "sempre",
            "fix": "mai"
          },
          {
            "q": "Non mangio niente mai.",
            "wrong": "mai",
            "fix": "Non mangio mai niente (posizione)"
          }
        ]
      }
    ]
  },
  {
    "lvl": "a",
    "title": "Il verbo piacere",
    "exercises": [
      {
        "type": "Scelta multipla",
        "fmt": "buco",
        "instr": "Scegli tra piace e piacciono.",
        "items": [
          {
            "q": "Mi ___ viaggiare.",
            "options": [
              "piace",
              "piacciono"
            ],
            "answer": 0
          },
          {
            "q": "Ti ___ le lingue straniere?",
            "options": [
              "piace",
              "piacciono"
            ],
            "answer": 1
          },
          {
            "q": "Le ___ il caffè amaro.",
            "options": [
              "piace",
              "piacciono"
            ],
            "answer": 0
          },
          {
            "q": "Ci ___ i film italiani.",
            "options": [
              "piace",
              "piacciono"
            ],
            "answer": 1
          },
          {
            "q": "Mi ___ i dolci.",
            "options": [
              "piace",
              "piacciono"
            ],
            "answer": 1
          },
          {
            "q": "Vi ___ la musica classica?",
            "options": [
              "piace",
              "piacciono"
            ],
            "answer": 0
          },
          {
            "q": "Non mi ___ gli spinaci.",
            "options": [
              "piace",
              "piacciono"
            ],
            "answer": 1
          },
          {
            "q": "Ti ___ ballare?",
            "options": [
              "piace",
              "piacciono"
            ],
            "answer": 0
          },
          {
            "q": "Le ___ le scarpe rosse.",
            "options": [
              "piace",
              "piacciono"
            ],
            "answer": 1
          },
          {
            "q": "Ci ___ questo ristorante.",
            "options": [
              "piace",
              "piacciono"
            ],
            "answer": 0
          }
        ]
      },
      {
        "type": "Correzione",
        "fmt": "errore",
        "instr": "Clicca la parola sbagliata (accordo di piacere o pronome).",
        "items": [
          {
            "q": "Mi piacciono la pizza.",
            "wrong": "piacciono",
            "fix": "piace"
          },
          {
            "q": "Ti piace gli animali?",
            "wrong": "piace",
            "fix": "piacciono"
          },
          {
            "q": "Mi piace i dolci.",
            "wrong": "piace",
            "fix": "piacciono"
          },
          {
            "q": "Ci piacciono studiare.",
            "wrong": "piacciono",
            "fix": "piace"
          },
          {
            "q": "Le piacciono il gelato.",
            "wrong": "piacciono",
            "fix": "piace"
          },
          {
            "q": "Vi piace le vacanze?",
            "wrong": "piace",
            "fix": "piacciono"
          },
          {
            "q": "Mi piacciono viaggiare.",
            "wrong": "piacciono",
            "fix": "piace"
          },
          {
            "q": "Ti piace i tuoi regali?",
            "wrong": "piace",
            "fix": "piacciono"
          },
          {
            "q": "Ci piace le canzoni italiane.",
            "wrong": "piace",
            "fix": "piacciono"
          },
          {
            "q": "Le piace i fiori.",
            "wrong": "piace",
            "fix": "piacciono"
          }
        ]
      },
      {
        "type": "Trasformazione",
        "fmt": "fill",
        "instr": "Riscrivi al passato prossimo (essere + participio accordato). Scrivi la frase.",
        "items": [
          {
            "q": "Mi piace la cena.",
            "a": "Mi è piaciuta la cena."
          },
          {
            "q": "Ti piacciono i regali.",
            "a": "Ti sono piaciuti i regali."
          },
          {
            "q": "Le piace la festa.",
            "a": "Le è piaciuta la festa."
          },
          {
            "q": "Ci piacciono le vacanze.",
            "a": "Ci sono piaciute le vacanze."
          },
          {
            "q": "Mi piace il film.",
            "a": "Mi è piaciuto il film."
          },
          {
            "q": "Ti piace la pizza.",
            "a": "Ti è piaciuta la pizza."
          },
          {
            "q": "Le piacciono i dolci.",
            "a": "Le sono piaciuti i dolci."
          },
          {
            "q": "Ci piace il concerto.",
            "a": "Ci è piaciuto il concerto."
          },
          {
            "q": "Vi piacciono le foto.",
            "a": "Vi sono piaciute le foto."
          },
          {
            "q": "Mi piacciono le canzoni.",
            "a": "Mi sono piaciute le canzoni."
          }
        ]
      }
    ]
  },
  {
    "lvl": "a",
    "title": "Modali: dovere, potere, volere",
    "exercises": [
      {
        "type": "Riempimento",
        "fmt": "fill",
        "instr": "Completa con il modale al presente (soggetto e verbo tra parentesi).",
        "items": [
          {
            "q": "___ un caffè, grazie. (noi – volere)",
            "a": "vogliamo"
          },
          {
            "q": "___ partire presto. (lei – dovere)",
            "a": "deve"
          },
          {
            "q": "___ venire alla festa? (loro – potere)",
            "a": "possono"
          },
          {
            "q": "___ imparare l'italiano. (io – volere)",
            "a": "voglio"
          },
          {
            "q": "___ aiutarti domani. (io – potere)",
            "a": "posso"
          },
          {
            "q": "___ studiare di più. (tu – dovere)",
            "a": "devi"
          },
          {
            "q": "___ uscire stasera? (voi – volere)",
            "a": "volete"
          },
          {
            "q": "___ finire il progetto. (noi – dovere)",
            "a": "dobbiamo"
          },
          {
            "q": "___ parlare con te. (lui – volere)",
            "a": "vuole"
          },
          {
            "q": "___ entrare? (io – potere)",
            "a": "posso"
          }
        ]
      },
      {
        "type": "Correzione",
        "fmt": "errore",
        "instr": "Clicca la parola sbagliata (forma del modale o preposizione di troppo).",
        "items": [
          {
            "q": "Vogliamo di partire.",
            "wrong": "di",
            "fix": "(niente)"
          },
          {
            "q": "Devi a finire i compiti.",
            "wrong": "a",
            "fix": "(niente)"
          },
          {
            "q": "Lei pole aiutarmi?",
            "wrong": "pole",
            "fix": "può"
          },
          {
            "q": "Loro vuoglio uscire.",
            "wrong": "vuoglio",
            "fix": "vogliono"
          },
          {
            "q": "Posso di entrare?",
            "wrong": "di",
            "fix": "(niente)"
          },
          {
            "q": "Dovemo studiare.",
            "wrong": "Dovemo",
            "fix": "Dobbiamo"
          },
          {
            "q": "Volio un gelato.",
            "wrong": "Volio",
            "fix": "Voglio"
          },
          {
            "q": "Puoi a venire con me?",
            "wrong": "a",
            "fix": "(niente)"
          },
          {
            "q": "Loro deve partire.",
            "wrong": "deve",
            "fix": "devono"
          },
          {
            "q": "Noi possiamo di aiutare.",
            "wrong": "di",
            "fix": "(niente)"
          }
        ]
      },
      {
        "type": "Scelta multipla",
        "fmt": "buco",
        "instr": "Scegli il modale adatto al senso della frase.",
        "items": [
          {
            "q": "Per entrare ___ avere il biglietto.",
            "options": [
              "devi",
              "vuoi",
              "puoi"
            ],
            "answer": 0
          },
          {
            "q": "___ un po' d'acqua, per favore?",
            "options": [
              "Devo",
              "Posso avere",
              "Voglio avere"
            ],
            "answer": 1
          },
          {
            "q": "Sono stanco, ___ riposare.",
            "options": [
              "voglio",
              "devo",
              "posso"
            ],
            "answer": 0
          },
          {
            "q": "Non ___ venire, ho da fare.",
            "options": [
              "posso",
              "voglio",
              "devo"
            ],
            "answer": 0
          },
          {
            "q": "È tardi, ___ andare a casa.",
            "options": [
              "voglio",
              "devo",
              "posso"
            ],
            "answer": 1
          },
          {
            "q": "___ aprire la finestra? Fa caldo.",
            "options": [
              "Devo",
              "Posso",
              "Voglio"
            ],
            "answer": 1
          },
          {
            "q": "Se vuoi dimagrire ___ mangiare meno.",
            "options": [
              "puoi",
              "devi",
              "vuoi"
            ],
            "answer": 1
          },
          {
            "q": "___ un gelato, ho voglia di dolce.",
            "options": [
              "Devo",
              "Posso",
              "Voglio"
            ],
            "answer": 2
          },
          {
            "q": "Scusa, ___ ripetere? Non ho capito.",
            "options": [
              "devi",
              "puoi",
              "vuoi"
            ],
            "answer": 1
          },
          {
            "q": "Domani ___ lavorare, è festa.",
            "options": [
              "non devo",
              "non posso",
              "non voglio"
            ],
            "answer": 0
          }
        ]
      }
    ]
  },
  {
    "lvl": "a",
    "title": "Le preposizioni semplici",
    "exercises": [
      {
        "type": "Scelta multipla",
        "fmt": "buco",
        "instr": "Città o Paese? Scegli tra «a» e «in».",
        "items": [
          {
            "q": "Vivo ___ Lisbona.",
            "options": [
              "a",
              "in"
            ],
            "answer": 0
          },
          {
            "q": "Vivo ___ Portogallo.",
            "options": [
              "a",
              "in"
            ],
            "answer": 1
          },
          {
            "q": "Lavoro ___ Italia.",
            "options": [
              "a",
              "in"
            ],
            "answer": 1
          },
          {
            "q": "Lavoro ___ Firenze.",
            "options": [
              "a",
              "in"
            ],
            "answer": 0
          },
          {
            "q": "Abito ___ Spagna.",
            "options": [
              "a",
              "in"
            ],
            "answer": 1
          },
          {
            "q": "Studio ___ Roma.",
            "options": [
              "a",
              "in"
            ],
            "answer": 0
          },
          {
            "q": "Vado ___ Francia.",
            "options": [
              "a",
              "in"
            ],
            "answer": 1
          },
          {
            "q": "Torno ___ Napoli.",
            "options": [
              "a",
              "in"
            ],
            "answer": 0
          },
          {
            "q": "Sono nato ___ Germania.",
            "options": [
              "a",
              "in"
            ],
            "answer": 1
          },
          {
            "q": "Passo l'estate ___ Sicilia.",
            "options": [
              "a",
              "in"
            ],
            "answer": 1
          }
        ]
      },
      {
        "type": "Riempimento",
        "fmt": "fill",
        "instr": "Inserisci la preposizione semplice (di, a, da, in, con, su, per, tra).",
        "items": [
          {
            "q": "Questo regalo è ___ te.",
            "a": "per"
          },
          {
            "q": "Il gatto è ___ il tavolo.",
            "a": "su"
          },
          {
            "q": "Studio italiano ___ due anni.",
            "a": "da"
          },
          {
            "q": "Vado ___ scuola in autobus.",
            "a": "a"
          },
          {
            "q": "Parlo ___ mio fratello.",
            "a": "con"
          },
          {
            "q": "Il libro è ___ Marco.",
            "a": "di"
          },
          {
            "q": "Parto ___ Milano domani.",
            "a": "per | da"
          },
          {
            "q": "La lezione è ___ le tre e le quattro.",
            "a": "tra"
          },
          {
            "q": "Vengo ___ Spagna.",
            "a": "dalla"
          },
          {
            "q": "Metto il libro ___ borsa.",
            "a": "in"
          }
        ]
      },
      {
        "type": "Correzione",
        "fmt": "errore",
        "instr": "Clicca la preposizione sbagliata.",
        "items": [
          {
            "q": "Vado a Portogallo.",
            "wrong": "a",
            "fix": "in"
          },
          {
            "q": "Abito in Roma.",
            "wrong": "in",
            "fix": "a"
          },
          {
            "q": "Studio per tre anni.",
            "wrong": "per",
            "fix": "da"
          },
          {
            "q": "Il regalo è di te.",
            "wrong": "di",
            "fix": "per"
          },
          {
            "q": "Vivo a Italia.",
            "wrong": "a",
            "fix": "in"
          },
          {
            "q": "Torno in Firenze.",
            "wrong": "in",
            "fix": "a"
          },
          {
            "q": "Parlo di mio padre al telefono adesso.",
            "wrong": "di",
            "fix": "con"
          },
          {
            "q": "Il libro è su Marco.",
            "wrong": "su",
            "fix": "di"
          },
          {
            "q": "Lavoro a Spagna.",
            "wrong": "a",
            "fix": "in"
          },
          {
            "q": "Torno da Italia domani.",
            "wrong": "da",
            "fix": "dall'"
          }
        ]
      }
    ]
  },
  {
    "lvl": "a",
    "title": "Gli aggettivi possessivi",
    "exercises": [
      {
        "type": "Riempimento",
        "fmt": "fill",
        "instr": "Completa con il possessivo, con l'articolo dove serve (persona tra parentesi).",
        "items": [
          {
            "q": "Questa è ___ casa. (noi)",
            "a": "la nostra"
          },
          {
            "q": "___ padre lavora molto. (lei)",
            "a": "Suo"
          },
          {
            "q": "Dove sono ___ chiavi? (io)",
            "a": "le mie"
          },
          {
            "q": "___ fratello è simpatico. (tu)",
            "a": "Tuo"
          },
          {
            "q": "___ macchina è nuova. (loro)",
            "a": "La loro"
          },
          {
            "q": "___ madre è gentile. (io)",
            "a": "Mia"
          },
          {
            "q": "Ecco ___ libri. (voi)",
            "a": "i vostri"
          },
          {
            "q": "___ sorella studia a Roma. (noi)",
            "a": "Nostra"
          },
          {
            "q": "___ amici sono simpatici. (tu)",
            "a": "I tuoi"
          },
          {
            "q": "___ cane è piccolo. (lei)",
            "a": "Il suo"
          }
        ]
      },
      {
        "type": "Correzione",
        "fmt": "errore",
        "instr": "Clicca la parola sbagliata (articolo di troppo/mancante o accordo).",
        "items": [
          {
            "q": "il mia padre",
            "wrong": "il",
            "fix": "(niente: mio padre)"
          },
          {
            "q": "il sua libro",
            "wrong": "sua",
            "fix": "suo"
          },
          {
            "q": "le miei scarpe",
            "wrong": "miei",
            "fix": "mie"
          },
          {
            "q": "tuo sorella",
            "wrong": "tuo",
            "fix": "tua"
          },
          {
            "q": "la nostro casa",
            "wrong": "nostro",
            "fix": "nostra"
          },
          {
            "q": "mia fratello",
            "wrong": "mia",
            "fix": "mio"
          },
          {
            "q": "i sue amici",
            "wrong": "sue",
            "fix": "suoi"
          },
          {
            "q": "il loro macchina",
            "wrong": "il",
            "fix": "la"
          },
          {
            "q": "le tuo chiavi",
            "wrong": "tuo",
            "fix": "tue"
          },
          {
            "q": "mio madre è qui",
            "wrong": "mio",
            "fix": "mia"
          }
        ]
      },
      {
        "type": "Trasformazione",
        "fmt": "fill",
        "instr": "Volgi al plurale la cosa posseduta (articolo + possessivo + nome).",
        "items": [
          {
            "q": "la mia amica",
            "a": "le mie amiche"
          },
          {
            "q": "il tuo libro",
            "a": "i tuoi libri"
          },
          {
            "q": "il nostro problema",
            "a": "i nostri problemi"
          },
          {
            "q": "la sua idea",
            "a": "le sue idee"
          },
          {
            "q": "il mio amico",
            "a": "i miei amici"
          },
          {
            "q": "la tua chiave",
            "a": "le tue chiavi"
          },
          {
            "q": "il vostro esame",
            "a": "i vostri esami"
          },
          {
            "q": "la loro casa",
            "a": "le loro case"
          },
          {
            "q": "il suo cane",
            "a": "i suoi cani"
          },
          {
            "q": "la nostra macchina",
            "a": "le nostre macchine"
          }
        ]
      }
    ]
  },
  {
    "lvl": "a",
    "title": "L'ora",
    "exercises": [
      {
        "type": "Scelta multipla",
        "fmt": "buco",
        "instr": "Scegli la forma corretta per dire l'ora.",
        "items": [
          {
            "q": "___ mezzogiorno.",
            "options": [
              "È",
              "Sono le",
              "Sono l'"
            ],
            "answer": 0
          },
          {
            "q": "___ tre del pomeriggio.",
            "options": [
              "È",
              "Sono le",
              "È l'"
            ],
            "answer": 1
          },
          {
            "q": "___ una e mezza.",
            "options": [
              "Sono le",
              "È l'",
              "È le"
            ],
            "answer": 1
          },
          {
            "q": "___ dieci di sera.",
            "options": [
              "È",
              "Sono le",
              "È l'"
            ],
            "answer": 1
          },
          {
            "q": "___ mezzanotte.",
            "options": [
              "È",
              "Sono le",
              "Sono l'"
            ],
            "answer": 0
          },
          {
            "q": "___ cinque in punto.",
            "options": [
              "È le",
              "Sono le",
              "È l'"
            ],
            "answer": 1
          },
          {
            "q": "___ una precisa.",
            "options": [
              "Sono le",
              "È l'",
              "È le"
            ],
            "answer": 1
          },
          {
            "q": "___ sette e un quarto.",
            "options": [
              "È le",
              "Sono le",
              "È l'"
            ],
            "answer": 1
          },
          {
            "q": "___ ora di pranzo, è l'una.",
            "options": [
              "Sono le",
              "È l'",
              "È le"
            ],
            "answer": 1
          },
          {
            "q": "___ nove meno un quarto.",
            "options": [
              "È le",
              "Sono le",
              "È l'"
            ],
            "answer": 1
          }
        ]
      },
      {
        "type": "Correzione",
        "fmt": "errore",
        "instr": "Clicca la parola sbagliata nella frase sull'ora.",
        "items": [
          {
            "q": "È le cinque.",
            "wrong": "È",
            "fix": "Sono"
          },
          {
            "q": "Sono l'una.",
            "wrong": "Sono",
            "fix": "È"
          },
          {
            "q": "Sono mezzanotte.",
            "wrong": "Sono",
            "fix": "È"
          },
          {
            "q": "È le nove e un quarto.",
            "wrong": "È",
            "fix": "Sono"
          },
          {
            "q": "Sono mezzogiorno.",
            "wrong": "Sono",
            "fix": "È"
          },
          {
            "q": "È le tre e mezza.",
            "wrong": "È",
            "fix": "Sono"
          },
          {
            "q": "Sono le una.",
            "wrong": "le",
            "fix": "l' (È l'una)"
          },
          {
            "q": "È sette in punto.",
            "wrong": "È",
            "fix": "Sono le"
          },
          {
            "q": "È le una e dieci.",
            "wrong": "le",
            "fix": "l'"
          },
          {
            "q": "È le dodici e mezza.",
            "wrong": "È",
            "fix": "Sono"
          }
        ]
      },
      {
        "type": "Trasformazione",
        "fmt": "fill",
        "instr": "Scrivi l'ora in lettere (usa È / Sono le).",
        "items": [
          {
            "q": "2:00",
            "a": "Sono le due."
          },
          {
            "q": "1:15",
            "a": "È l'una e un quarto. | È l'una e quindici."
          },
          {
            "q": "7:30",
            "a": "Sono le sette e mezza. | Sono le sette e trenta."
          },
          {
            "q": "12:00 (giorno)",
            "a": "È mezzogiorno."
          },
          {
            "q": "5:00",
            "a": "Sono le cinque."
          },
          {
            "q": "3:45",
            "a": "Sono le quattro meno un quarto. | Sono le tre e quarantacinque."
          },
          {
            "q": "1:00",
            "a": "È l'una."
          },
          {
            "q": "10:30",
            "a": "Sono le dieci e mezza. | Sono le dieci e trenta."
          },
          {
            "q": "00:00",
            "a": "È mezzanotte."
          },
          {
            "q": "8:15",
            "a": "Sono le otto e un quarto. | Sono le otto e quindici."
          }
        ]
      }
    ]
  },
  {
    "lvl": "c1",
    "title": "La forma passiva: tutte le forme",
    "exercises": [
      {
        "type": "Riempimento",
        "fmt": "fill",
        "instr": "Completa con la forma passiva indicata tra parentesi.",
        "items": [
          {
            "q": "La fattura ___ (andare + saldare) entro 30 giorni.",
            "a": "va saldata"
          },
          {
            "q": "I risultati ___ (venire + pubblicare) domani.",
            "a": "vengono pubblicati"
          },
          {
            "q": "In biblioteca non ___ (si + parlare) ad alta voce.",
            "a": "si parla"
          },
          {
            "q": "Le chiavi ___ (andare + restituire) alla reception.",
            "a": "vanno restituite"
          }
        ]
      },
      {
        "type": "Correzione",
        "fmt": "fill",
        "instr": "Correggi l'accordo o l'uso di «andare/venire + participio».",
        "items": [
          {
            "q": "La fattura va saldato entro 30 giorni.",
            "a": "La fattura va saldata entro 30 giorni."
          },
          {
            "q": "I risultati viene pubblicati domani.",
            "a": "I risultati vengono pubblicati domani."
          },
          {
            "q": "Le chiavi è andato restituite alla reception.",
            "a": "Le chiavi sono state restituite alla reception. (composto → essere)"
          },
          {
            "q": "Le finestre si pulisce ogni settimana.",
            "a": "Le finestre si puliscono ogni settimana."
          }
        ]
      },
      {
        "type": "Trasformazione",
        "fmt": "fill",
        "instr": "Riscrivi con la forma passiva indicata tra parentesi.",
        "items": [
          {
            "q": "Bisogna saldare la fattura. (andare)",
            "a": "La fattura va saldata."
          },
          {
            "q": "Pubblicano i risultati domani. (venire)",
            "a": "I risultati vengono pubblicati domani."
          },
          {
            "q": "La gente beve molta acqua qui. (si)",
            "a": "Qui si beve molta acqua."
          },
          {
            "q": "Un tecnico controlla gli impianti. (venire)",
            "a": "Gli impianti vengono controllati da un tecnico."
          }
        ]
      }
    ]
  },
  {
    "lvl": "c1",
    "title": "Le proposizioni concessive",
    "exercises": [
      {
        "type": "Riempimento",
        "fmt": "fill",
        "instr": "Completa con il congiuntivo (o l'indicativo dopo «anche se»).",
        "items": [
          {
            "q": "Benché ___ (essere) stanco, ha finito il lavoro.",
            "a": "fosse"
          },
          {
            "q": "Nonostante ___ (nevicare), sono andati a sciare.",
            "a": "nevicasse"
          },
          {
            "q": "Anche se ___ (costare, lui) molto, lo comprerò.",
            "a": "costa"
          },
          {
            "q": "Per quanto ___ (insistere, loro), non ho cambiato idea.",
            "a": "insistessero"
          }
        ]
      },
      {
        "type": "Correzione",
        "fmt": "fill",
        "instr": "Correggi il modo (concessive «colte» → congiuntivo; «anche se» → indicativo).",
        "items": [
          {
            "q": "Benché è stanco, lavora.",
            "a": "Benché sia stanco, lavora."
          },
          {
            "q": "Nonostante nevica, sono usciti.",
            "a": "Nonostante nevicasse, sono usciti."
          },
          {
            "q": "Anche se sia tardi, vengo lo stesso.",
            "a": "Anche se è tardi, vengo lo stesso."
          },
          {
            "q": "Sebbene ha studiato poco, ha superato l'esame.",
            "a": "Sebbene abbia studiato poco, ha superato l'esame."
          }
        ]
      },
      {
        "type": "Trasformazione",
        "fmt": "fill",
        "instr": "Riscrivi con la concessiva indicata tra parentesi.",
        "items": [
          {
            "q": "È stanco, ma lavora. (benché)",
            "a": "Benché sia stanco, lavora."
          },
          {
            "q": "Nevica, ma escono. (nonostante)",
            "a": "Nonostante nevichi, escono."
          },
          {
            "q": "Costa molto, ma lo comprerò. (anche se)",
            "a": "Anche se costa molto, lo comprerò. (indicativo)"
          },
          {
            "q": "Ha studiato poco, ma ha superato l'esame. (sebbene)",
            "a": "Sebbene abbia studiato poco, ha superato l'esame."
          }
        ]
      }
    ]
  },
  {
    "lvl": "c1",
    "title": "Le proposizioni temporali avanzate",
    "exercises": [
      {
        "type": "Riempimento",
        "fmt": "fill",
        "instr": "Completa con il modo giusto (congiuntivo dopo «prima che»; indicativo dopo «dopo che»; infinito dopo «prima di»).",
        "items": [
          {
            "q": "Avvisami prima che ___ (iniziare) la riunione.",
            "a": "inizi"
          },
          {
            "q": "Prima di ___ (firmare), leggi bene il contratto.",
            "a": "firmare"
          },
          {
            "q": "Dopo che ___ (arrivare, loro), abbiamo cenato.",
            "a": "sono arrivati / arrivarono"
          },
          {
            "q": "Resta finché non ___ (finire, io).",
            "a": "finisco"
          }
        ]
      },
      {
        "type": "Correzione",
        "fmt": "fill",
        "instr": "Correggi (prima che + congiuntivo; stesso soggetto → prima di + infinito; dopo che + indicativo).",
        "items": [
          {
            "q": "Avvisami prima che inizia la riunione.",
            "a": "Avvisami prima che inizi la riunione."
          },
          {
            "q": "Prima che tu firmi, leggi il contratto. (stesso soggetto: tu)",
            "a": "Prima di firmare, leggi il contratto. (stesso soggetto → infinito)"
          },
          {
            "q": "Dopo che fosse arrivato, ci siamo salutati.",
            "a": "Dopo che era arrivato, ci siamo salutati."
          },
          {
            "q": "Aspetta finché non torni io.",
            "a": "Aspetta finché non torno."
          }
        ]
      },
      {
        "type": "Trasformazione",
        "fmt": "fill",
        "instr": "Unisci le due azioni: stesso soggetto → «prima di + infinito»; soggetti diversi → «prima che + congiuntivo».",
        "items": [
          {
            "q": "(tu – firmare) + (tu – leggere il contratto)",
            "a": "Prima di firmare, leggi il contratto."
          },
          {
            "q": "(io – uscire) + (la riunione – iniziare)",
            "a": "Esco prima che la riunione inizi."
          },
          {
            "q": "(noi – arrivare) + (noi – salutarci)",
            "a": "Dopo che siamo arrivati, ci siamo salutati."
          },
          {
            "q": "(voi – partire) + (io – tornare)",
            "a": "Partite prima che io torni."
          }
        ]
      }
    ]
  },
  {
    "lvl": "c1",
    "title": "Il periodo ipotetico misto",
    "exercises": [
      {
        "type": "Riempimento",
        "fmt": "fill",
        "instr": "Completa il periodo ipotetico misto (causa passata → effetto presente).",
        "items": [
          {
            "q": "Se ___ (lavorare, io) di più da giovane, ora avrei più risparmi.",
            "a": "avessi lavorato"
          },
          {
            "q": "Se tu ___ (ascoltare) i consigli, ora non saresti in difficoltà.",
            "a": "avessi ascoltato"
          },
          {
            "q": "Se non ___ (perdere, noi) quel treno, ora saremmo già arrivati.",
            "a": "avessimo perso"
          },
          {
            "q": "Se fossi stato più attento, ora ___ (avere, tu) meno problemi.",
            "a": "avresti"
          }
        ]
      },
      {
        "type": "Correzione",
        "fmt": "fill",
        "instr": "Correggi l'incrocio dei tempi (cong. trapassato ↔ condizionale presente/passato).",
        "items": [
          {
            "q": "Se lavoravo di più da giovane, ora avrei più risparmi.",
            "a": "Se avessi lavorato di più da giovane, ora avrei più risparmi."
          },
          {
            "q": "Se tu ascoltavi i consigli, non saresti in difficoltà.",
            "a": "Se tu avessi ascoltato i consigli, non saresti in difficoltà."
          },
          {
            "q": "Se non perdevamo il treno, ora saremmo arrivati.",
            "a": "Se non avessimo perso il treno, ora saremmo arrivati."
          },
          {
            "q": "Se fossi stato più attento, ora avrai meno problemi.",
            "a": "Se fossi stato più attento, ora avresti meno problemi."
          }
        ]
      },
      {
        "type": "Trasformazione",
        "fmt": "fill",
        "instr": "Costruisci il periodo ipotetico misto (ipotesi sul passato → effetto sul presente).",
        "items": [
          {
            "q": "(lavorare di più da giovane) → ora (avere più risparmi)",
            "a": "Se avessi lavorato di più da giovane, ora avrei più risparmi."
          },
          {
            "q": "(ascoltare i consigli) → ora (non essere in difficoltà)",
            "a": "Se avessi ascoltato i consigli, ora non saresti in difficoltà."
          },
          {
            "q": "(non perdere il treno) → ora (essere già arrivati)",
            "a": "Se non avessimo perso il treno, ora saremmo già arrivati."
          },
          {
            "q": "(studiare di più) → ora (avere un buon lavoro)",
            "a": "Se avessi studiato di più, ora avrei un buon lavoro."
          }
        ]
      }
    ]
  },
  {
    "lvl": "c1",
    "title": "Connettivi argomentativi avanzati",
    "exercises": [
      {
        "type": "Riempimento",
        "fmt": "fill",
        "instr": "Completa con un connettivo adatto alla relazione logica (banca: pertanto, inoltre, poiché, tuttavia, in definitiva, di conseguenza, d'altra parte).",
        "items": [
          {
            "q": "Si è preparato bene; ___, ha superato il colloquio.",
            "a": "pertanto / di conseguenza"
          },
          {
            "q": "È competente; ___, è anche disponibile.",
            "a": "inoltre"
          },
          {
            "q": "Rimango a casa ___ piove forte.",
            "a": "poiché / dato che"
          },
          {
            "q": "Il progetto è ambizioso; ___, è realizzabile.",
            "a": "tuttavia"
          }
        ]
      },
      {
        "type": "Riempimento",
        "fmt": "fill",
        "instr": "Riformula introducendo un marcatore di opinione (a mio avviso, secondo me, dal mio punto di vista, a mio parere, personalmente...).",
        "items": [
          {
            "q": "Questo metodo è efficace.",
            "a": "A mio avviso, questo metodo è efficace."
          },
          {
            "q": "Conviene aspettare.",
            "a": "Secondo me, conviene aspettare."
          },
          {
            "q": "La decisione è sbagliata.",
            "a": "A mio parere, la decisione è sbagliata."
          },
          {
            "q": "Vale la pena rischiare.",
            "a": "Personalmente, vale la pena rischiare."
          }
        ]
      },
      {
        "type": "Correzione",
        "fmt": "fill",
        "instr": "Il connettivo esprime la relazione logica sbagliata: correggilo.",
        "items": [
          {
            "q": "Ha lavorato poco, pertanto ha ottenuto buoni risultati.",
            "a": "Ha lavorato poco, tuttavia ha ottenuto buoni risultati."
          },
          {
            "q": "Fa caldo, inoltre resto in casa.",
            "a": "Fa caldo, quindi resto in casa."
          },
          {
            "q": "È simpatico, tuttavia è gentile.",
            "a": "È simpatico, inoltre è gentile."
          },
          {
            "q": "Sono le cinque, poiché dobbiamo andare.",
            "a": "Sono le cinque, quindi dobbiamo andare."
          }
        ]
      }
    ]
  }
];
