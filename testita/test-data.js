/* TEST-DATA.JS — Banca esercizi del TEST
   Strutture mappate sulle lezioni dell indice standard (campo "lez").
   Campo "stima": livello a cui la struttura pesa nel calcolo, se diverso da quello
   di raggruppamento (strutture introdotte presto e controllate tardi).
   Campo "diag": struttura diagnostica, usata dal preset «Test di posizionamento».
   A1: 18 · A2: 17 · B1: 25 · C1: 5 — 10 item per esercizio, 3 esercizi per struttura.
   Formati: buco {q,options,answer} · errore {q,wrong,fix} · fill {q,a,no} · ordina {q,sol}.
   Nessuna frase si ripete tra esercizi diversi, né tra strutture imparentate. */
const TEST_STRUCTURES = [
  {
    "lvl": "a",
    "lez": [
      "A1 L1"
    ],
    "title": "Essere e avere",
    "exercises": [
      {
        "type": "Riempimento",
        "fmt": "buco",
        "instr": "Scegli la forma giusta di essere o avere.",
        "items": [
          {
            "q": "Lei ___ spagnola.",
            "options": [
              "è",
              "ha",
              "hai"
            ],
            "answer": 0
          },
          {
            "q": "Noi ___ molti libri.",
            "options": [
              "siamo",
              "abbiamo",
              "avete"
            ],
            "answer": 1
          },
          {
            "q": "Loro ___ stanchi.",
            "options": [
              "hanno",
              "sono",
              "siete"
            ],
            "answer": 1
          },
          {
            "q": "Io ___ trent'anni.",
            "options": [
              "sono",
              "ho",
              "hai"
            ],
            "answer": 1
          },
          {
            "q": "Tu ___ molti amici.",
            "options": [
              "sei",
              "hai",
              "ha"
            ],
            "answer": 1
          },
          {
            "q": "Marco ___ ingegnere.",
            "options": [
              "ha",
              "è",
              "hanno"
            ],
            "answer": 1
          },
          {
            "q": "Voi ___ simpatici.",
            "options": [
              "avete",
              "siete",
              "sono"
            ],
            "answer": 1
          },
          {
            "q": "Le ragazze ___ contente.",
            "options": [
              "hanno",
              "sono",
              "siamo"
            ],
            "answer": 1
          },
          {
            "q": "Noi ___ bisogno di aiuto.",
            "options": [
              "siamo",
              "abbiamo",
              "avete"
            ],
            "answer": 1
          },
          {
            "q": "Tu ___ italiano?",
            "options": [
              "hai",
              "sei",
              "è"
            ],
            "answer": 1
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
            "q": "Tu hai francese?",
            "wrong": "hai",
            "fix": "sei"
          },
          {
            "q": "Lei ha molto simpatica.",
            "wrong": "ha",
            "fix": "è"
          },
          {
            "q": "Voi avete in ufficio.",
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
            "q": "I bambini hanno piccoli.",
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
        "fmt": "buco",
        "instr": "Volgi al plurale: scegli la forma corretta.",
        "items": [
          {
            "q": "Lei è felice. → Loro ___.",
            "options": [
              "sono felici",
              "sono felice",
              "siamo felici"
            ],
            "answer": 0
          },
          {
            "q": "Io ho caldo. → Noi ___.",
            "options": [
              "abbiamo caldo",
              "avete caldo",
              "hanno caldo"
            ],
            "answer": 0
          },
          {
            "q": "Tu sei alto. → Voi ___.",
            "options": [
              "siete alti",
              "siete alto",
              "sono alti"
            ],
            "answer": 0
          },
          {
            "q": "Lui ha paura. → Loro ___.",
            "options": [
              "hanno paura",
              "hanno paure",
              "sono paura"
            ],
            "answer": 0
          },
          {
            "q": "Io sono stanco. → Noi ___.",
            "options": [
              "siamo stanchi",
              "siamo stanco",
              "abbiamo stanchi"
            ],
            "answer": 0
          },
          {
            "q": "Tu hai sonno. → Voi ___.",
            "options": [
              "avete sonno",
              "avete sonni",
              "siete sonno"
            ],
            "answer": 0
          },
          {
            "q": "Lei è italiana. → Loro ___.",
            "options": [
              "sono italiane",
              "sono italiani",
              "siete italiane"
            ],
            "answer": 0
          },
          {
            "q": "Lui è contento. → Loro ___.",
            "options": [
              "sono contenti",
              "sono contento",
              "hanno contenti"
            ],
            "answer": 0
          },
          {
            "q": "Io ho fretta. → Noi ___.",
            "options": [
              "abbiamo fretta",
              "abbiamo frette",
              "siamo fretta"
            ],
            "answer": 0
          },
          {
            "q": "Tu sei gentile. → Voi ___.",
            "options": [
              "siete gentili",
              "siete gentile",
              "sono gentili"
            ],
            "answer": 0
          }
        ]
      }
    ],
    "diag": true
  },
  {
    "lvl": "a",
    "lez": [
      "A1 L2",
      "A1 L3"
    ],
    "title": "Articoli determinativi",
    "exercises": [
      {
        "type": "Riempimento",
        "fmt": "buco",
        "instr": "Scegli l'articolo determinativo corretto.",
        "items": [
          {
            "q": "___ studente è bravo.",
            "options": [
              "Lo",
              "Il",
              "L'"
            ],
            "answer": 0
          },
          {
            "q": "___ ragazze sono in classe.",
            "options": [
              "Le",
              "I",
              "Gli"
            ],
            "answer": 0
          },
          {
            "q": "___ zio di Marco abita qui.",
            "options": [
              "Lo",
              "Il",
              "L'"
            ],
            "answer": 0
          },
          {
            "q": "___ ombrelli sono nuovi.",
            "options": [
              "Gli",
              "I",
              "Le"
            ],
            "answer": 0
          },
          {
            "q": "___ amica di Anna è francese.",
            "options": [
              "L'",
              "La",
              "Le"
            ],
            "answer": 0
          },
          {
            "q": "___ problemi sono difficili.",
            "options": [
              "I",
              "Gli",
              "Le"
            ],
            "answer": 0
          },
          {
            "q": "___ ora di pranzo è alle 13.",
            "options": [
              "L'",
              "La",
              "Il"
            ],
            "answer": 0
          },
          {
            "q": "___ psicologo lavora in ospedale.",
            "options": [
              "Lo",
              "Il",
              "L'"
            ],
            "answer": 0
          },
          {
            "q": "___ spagnoli arrivano domani.",
            "options": [
              "Gli",
              "I",
              "Le"
            ],
            "answer": 0
          },
          {
            "q": "___ isole italiane sono belle.",
            "options": [
              "Le",
              "I",
              "Gli"
            ],
            "answer": 0
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
            "q": "i zii di Marco",
            "wrong": "i",
            "fix": "gli"
          },
          {
            "q": "la elefante africano",
            "wrong": "la",
            "fix": "l'"
          },
          {
            "q": "lo cane nero",
            "wrong": "lo",
            "fix": "il"
          }
        ]
      },
      {
        "type": "Trasformazione",
        "fmt": "buco",
        "instr": "Volgi al plurale: scegli la forma corretta.",
        "items": [
          {
            "q": "la stazione",
            "options": [
              "le stazioni",
              "le stazione",
              "i stazioni"
            ],
            "answer": 0
          },
          {
            "q": "lo specchio",
            "options": [
              "gli specchi",
              "i specchi",
              "le specchi"
            ],
            "answer": 0
          },
          {
            "q": "l'albergo",
            "options": [
              "gli alberghi",
              "i alberghi",
              "le alberghi"
            ],
            "answer": 0
          },
          {
            "q": "il giornale",
            "options": [
              "i giornali",
              "gli giornali",
              "le giornali"
            ],
            "answer": 0
          },
          {
            "q": "la chiave",
            "options": [
              "le chiavi",
              "le chiave",
              "i chiavi"
            ],
            "answer": 0
          },
          {
            "q": "lo sport",
            "options": [
              "gli sport",
              "i sport",
              "le sport"
            ],
            "answer": 0
          },
          {
            "q": "l'esame",
            "options": [
              "gli esami",
              "i esami",
              "le esami"
            ],
            "answer": 0
          },
          {
            "q": "il fiore",
            "options": [
              "i fiori",
              "gli fiori",
              "le fiori"
            ],
            "answer": 0
          },
          {
            "q": "la notte",
            "options": [
              "le notti",
              "le notte",
              "i notti"
            ],
            "answer": 0
          },
          {
            "q": "lo studio",
            "options": [
              "gli studi",
              "i studi",
              "le studi"
            ],
            "answer": 0
          }
        ]
      }
    ],
    "diag": true
  },
  {
    "lvl": "a",
    "lez": [
      "A1 L2",
      "A1 L3"
    ],
    "title": "Articoli indeterminativi",
    "exercises": [
      {
        "type": "Riempimento",
        "fmt": "buco",
        "instr": "Scegli l'articolo indeterminativo corretto.",
        "items": [
          {
            "q": "C'è ___ studente in aula.",
            "options": [
              "uno",
              "un",
              "una"
            ],
            "answer": 0
          },
          {
            "q": "Vorrei ___ informazione.",
            "options": [
              "un'",
              "una",
              "un"
            ],
            "answer": 0
          },
          {
            "q": "Ho ___ zaino nuovo.",
            "options": [
              "uno",
              "un",
              "un'"
            ],
            "answer": 0
          },
          {
            "q": "È ___ bella giornata.",
            "options": [
              "una",
              "un",
              "un'"
            ],
            "answer": 0
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
              "un'",
              "una",
              "un"
            ],
            "answer": 0
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
              "un'",
              "una",
              "un"
            ],
            "answer": 0
          },
          {
            "q": "È ___ psicologo bravo.",
            "options": [
              "uno",
              "un",
              "un'"
            ],
            "answer": 0
          },
          {
            "q": "Voglio ___ pizza.",
            "options": [
              "una",
              "un",
              "un'"
            ],
            "answer": 0
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
          },
          {
            "q": "un aranciata fresca",
            "wrong": "un",
            "fix": "un'"
          }
        ]
      },
      {
        "type": "Trasformazione",
        "fmt": "buco",
        "instr": "Metti l'articolo indeterminativo davanti al nome.",
        "items": [
          {
            "q": "___ specchio",
            "options": [
              "uno",
              "un",
              "un'"
            ],
            "answer": 0
          },
          {
            "q": "___ elefante",
            "options": [
              "un",
              "uno",
              "un'"
            ],
            "answer": 0
          },
          {
            "q": "___ aranciata",
            "options": [
              "un'",
              "una",
              "un"
            ],
            "answer": 0
          },
          {
            "q": "___ autobus",
            "options": [
              "un",
              "uno",
              "un'"
            ],
            "answer": 0
          },
          {
            "q": "___ sorella",
            "options": [
              "una",
              "un",
              "un'"
            ],
            "answer": 0
          },
          {
            "q": "___ studio",
            "options": [
              "uno",
              "un",
              "un'"
            ],
            "answer": 0
          },
          {
            "q": "___ arancia",
            "options": [
              "un'",
              "una",
              "un"
            ],
            "answer": 0
          },
          {
            "q": "___ appartamento",
            "options": [
              "un",
              "uno",
              "un'"
            ],
            "answer": 0
          },
          {
            "q": "___ zia",
            "options": [
              "una",
              "un'",
              "uno"
            ],
            "answer": 0
          },
          {
            "q": "___ sbaglio",
            "options": [
              "uno",
              "un",
              "un'"
            ],
            "answer": 0
          }
        ]
      }
    ]
  },
  {
    "lvl": "a",
    "lez": [
      "A1 L2"
    ],
    "title": "Il plurale dei nomi",
    "exercises": [
      {
        "type": "Trasformazione",
        "fmt": "buco",
        "instr": "Volgi al plurale: scegli la forma corretta.",
        "items": [
          {
            "q": "la mano",
            "options": [
              "le mani",
              "le mano",
              "i mani"
            ],
            "answer": 0
          },
          {
            "q": "il problema",
            "options": [
              "i problemi",
              "le probleme",
              "i problema"
            ],
            "answer": 0
          },
          {
            "q": "l'uovo",
            "options": [
              "le uova",
              "gli uovi",
              "le uove"
            ],
            "answer": 0
          },
          {
            "q": "la moglie",
            "options": [
              "le mogli",
              "le moglie",
              "i mogli"
            ],
            "answer": 0
          },
          {
            "q": "il braccio",
            "options": [
              "le braccia",
              "i bracci",
              "le bracce"
            ],
            "answer": 0
          },
          {
            "q": "la casa",
            "options": [
              "le case",
              "le casa",
              "i case"
            ],
            "answer": 0
          },
          {
            "q": "lo zio",
            "options": [
              "gli zii",
              "i zii",
              "gli zi"
            ],
            "answer": 0
          },
          {
            "q": "l'amico",
            "options": [
              "gli amici",
              "i amici",
              "gli amichi"
            ],
            "answer": 0
          },
          {
            "q": "il dito",
            "options": [
              "le dita",
              "i diti",
              "le dite"
            ],
            "answer": 0
          },
          {
            "q": "la radio",
            "options": [
              "le radio",
              "le radii",
              "i radio"
            ],
            "answer": 0
          }
        ]
      },
      {
        "type": "Riempimento",
        "fmt": "buco",
        "instr": "Scegli il plurale corretto (i nomi invariabili non cambiano).",
        "items": [
          {
            "q": "Ci sono due ___ in città.",
            "options": [
              "università",
              "universitàs",
              "universite"
            ],
            "answer": 0
          },
          {
            "q": "Ho comprato tre ___.",
            "options": [
              "kiwi",
              "kiwis",
              "kiwii"
            ],
            "answer": 0
          },
          {
            "q": "Le ___ economiche sono difficili.",
            "options": [
              "crisi",
              "crisis",
              "crise"
            ],
            "answer": 0
          },
          {
            "q": "Abbiamo visto molti ___.",
            "options": [
              "film",
              "filmi",
              "films"
            ],
            "answer": 0
          },
          {
            "q": "Bevo due ___ al giorno.",
            "options": [
              "caffè",
              "caffés",
              "caffei"
            ],
            "answer": 0
          },
          {
            "q": "Ci sono molte ___ oggi.",
            "options": [
              "città",
              "cittàs",
              "citte"
            ],
            "answer": 0
          },
          {
            "q": "Guardo due ___ diverse.",
            "options": [
              "serie",
              "serii",
              "series"
            ],
            "answer": 0
          },
          {
            "q": "Compro delle ___ nuove.",
            "options": [
              "foto",
              "fotos",
              "foti"
            ],
            "answer": 0
          },
          {
            "q": "Prendo tre ___.",
            "options": [
              "tè",
              "tès",
              "tei"
            ],
            "answer": 0
          },
          {
            "q": "Ci sono due ___ in classe.",
            "options": [
              "computer",
              "computers",
              "computeri"
            ],
            "answer": 0
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
            "q": "le citte italiane",
            "wrong": "citte",
            "fix": "città"
          }
        ]
      }
    ]
  },
  {
    "lvl": "a",
    "lez": [
      "A1 L3",
      "A1 L22"
    ],
    "title": "C'è / Ci sono",
    "exercises": [
      {
        "type": "Riempimento",
        "fmt": "buco",
        "instr": "Scegli tra c'è e ci sono.",
        "items": [
          {
            "q": "In aula ___ molti studenti.",
            "options": [
              "ci sono",
              "c'è"
            ],
            "answer": 0
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
              "ci sono",
              "c'è"
            ],
            "answer": 0
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
            "q": "Nel parco ___ tanti bambini.",
            "options": [
              "ci sono",
              "c'è"
            ],
            "answer": 0
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
            "q": "In camera ___ due letti.",
            "options": [
              "ci sono",
              "c'è"
            ],
            "answer": 0
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
          },
          {
            "q": "Davanti alla scuola ___ tre alberi.",
            "options": [
              "ci sono",
              "c'è"
            ],
            "answer": 0
          }
        ]
      },
      {
        "type": "Correzione",
        "fmt": "errore",
        "instr": "Clicca la parola sbagliata.",
        "items": [
          {
            "q": "In città c'è molti turisti.",
            "wrong": "c'è",
            "fix": "ci sono"
          },
          {
            "q": "Sul tavolo c'è due piatti.",
            "wrong": "c'è",
            "fix": "ci sono"
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
            "q": "In giardino c'è molti fiori.",
            "wrong": "c'è",
            "fix": "ci sono"
          },
          {
            "q": "Ci sono un gatto sul divano.",
            "wrong": "sono",
            "fix": "è"
          },
          {
            "q": "In strada ci sono molto rumore.",
            "wrong": "sono",
            "fix": "è"
          },
          {
            "q": "Nel bicchiere ci sono acqua.",
            "wrong": "sono",
            "fix": "è"
          },
          {
            "q": "Sul muro ci sono un quadro.",
            "wrong": "sono",
            "fix": "è"
          },
          {
            "q": "Davanti alla casa ci sono un albero.",
            "wrong": "sono",
            "fix": "è"
          }
        ]
      },
      {
        "type": "Trasformazione",
        "fmt": "buco",
        "instr": "Volgi al plurale col partitivo: scegli la forma corretta.",
        "items": [
          {
            "q": "C'è un libro. →",
            "options": [
              "Ci sono dei libri.",
              "C'è dei libri.",
              "Ci sono un libri."
            ],
            "answer": 0
          },
          {
            "q": "C'è una mela. →",
            "options": [
              "Ci sono delle mele.",
              "C'è delle mele.",
              "Ci sono della mele."
            ],
            "answer": 0
          },
          {
            "q": "C'è uno studente. →",
            "options": [
              "Ci sono degli studenti.",
              "Ci sono dei studenti.",
              "C'è degli studenti."
            ],
            "answer": 0
          },
          {
            "q": "C'è un'amica. →",
            "options": [
              "Ci sono delle amiche.",
              "Ci sono degli amiche.",
              "C'è delle amiche."
            ],
            "answer": 0
          },
          {
            "q": "C'è un problema. →",
            "options": [
              "Ci sono dei problemi.",
              "Ci sono degli problemi.",
              "C'è dei problemi."
            ],
            "answer": 0
          },
          {
            "q": "C'è una macchina. →",
            "options": [
              "Ci sono delle macchine.",
              "C'è delle macchine.",
              "Ci sono dei macchine."
            ],
            "answer": 0
          },
          {
            "q": "C'è uno zaino. →",
            "options": [
              "Ci sono degli zaini.",
              "Ci sono dei zaini.",
              "Ci sono delle zaini."
            ],
            "answer": 0
          },
          {
            "q": "C'è un errore. →",
            "options": [
              "Ci sono degli errori.",
              "Ci sono dei errori.",
              "Ci sono delle errori."
            ],
            "answer": 0
          },
          {
            "q": "C'è una sedia. →",
            "options": [
              "Ci sono delle sedie.",
              "Ci sono dei sedie.",
              "C'è delle sedie."
            ],
            "answer": 0
          },
          {
            "q": "C'è un cane. →",
            "options": [
              "Ci sono dei cani.",
              "Ci sono degli cani.",
              "Ci sono delle cani."
            ],
            "answer": 0
          }
        ]
      }
    ]
  },
  {
    "lvl": "a",
    "lez": [
      "A1 L3",
      "A1 L6"
    ],
    "title": "L'accordo dell'aggettivo",
    "exercises": [
      {
        "type": "Riempimento",
        "fmt": "buco",
        "instr": "Scegli la forma corretta dell'aggettivo.",
        "items": [
          {
            "q": "una casa ___",
            "options": [
              "grande",
              "granda",
              "grandi"
            ],
            "answer": 0
          },
          {
            "q": "due ragazzi ___",
            "options": [
              "simpatici",
              "simpatiche",
              "simpatico"
            ],
            "answer": 0
          },
          {
            "q": "le scarpe ___",
            "options": [
              "nuove",
              "nuovi",
              "nuova"
            ],
            "answer": 0
          },
          {
            "q": "un problema ___",
            "options": [
              "difficile",
              "difficili",
              "difficila"
            ],
            "answer": 0
          },
          {
            "q": "delle idee ___",
            "options": [
              "interessanti",
              "interessante",
              "interessanta"
            ],
            "answer": 0
          },
          {
            "q": "i libri ___",
            "options": [
              "rossi",
              "rosse",
              "rosso"
            ],
            "answer": 0
          },
          {
            "q": "una storia ___",
            "options": [
              "bella",
              "bello",
              "belle"
            ],
            "answer": 0
          },
          {
            "q": "i bambini ___",
            "options": [
              "bravi",
              "brave",
              "bravo"
            ],
            "answer": 0
          },
          {
            "q": "le città ___",
            "options": [
              "grandi",
              "grande",
              "granda"
            ],
            "answer": 0
          },
          {
            "q": "una macchina ___",
            "options": [
              "veloce",
              "veloci",
              "veloca"
            ],
            "answer": 0
          }
        ]
      },
      {
        "type": "Correzione",
        "fmt": "errore",
        "instr": "Clicca l'aggettivo con l'accordo sbagliato.",
        "items": [
          {
            "q": "un cappotto rossa",
            "wrong": "rossa",
            "fix": "rosso"
          },
          {
            "q": "le sedie bianco",
            "wrong": "bianco",
            "fix": "bianche"
          },
          {
            "q": "i piatti sporca",
            "wrong": "sporca",
            "fix": "sporchi"
          },
          {
            "q": "una lettera lungo",
            "wrong": "lungo",
            "fix": "lunga"
          },
          {
            "q": "gli occhiali nuova",
            "wrong": "nuova",
            "fix": "nuovi"
          },
          {
            "q": "un maglione pesanti",
            "wrong": "pesanti",
            "fix": "pesante"
          },
          {
            "q": "il giardino grandi",
            "wrong": "grandi",
            "fix": "grande"
          },
          {
            "q": "delle foto bellissimo",
            "wrong": "bellissimo",
            "fix": "bellissime"
          },
          {
            "q": "un albero alta",
            "wrong": "alta",
            "fix": "alto"
          },
          {
            "q": "le porte chiuso",
            "wrong": "chiuso",
            "fix": "chiuse"
          }
        ]
      },
      {
        "type": "Trasformazione",
        "fmt": "buco",
        "instr": "Volgi al plurale: scegli la forma corretta.",
        "items": [
          {
            "q": "la finestra aperta",
            "options": [
              "le finestre aperte",
              "le finestre aperta",
              "le finestra aperte"
            ],
            "answer": 0
          },
          {
            "q": "il quaderno verde",
            "options": [
              "i quaderni verdi",
              "i quaderni verde",
              "i quaderni verdo"
            ],
            "answer": 0
          },
          {
            "q": "l'esercizio facile",
            "options": [
              "gli esercizi facili",
              "gli esercizi facile",
              "i esercizi facili"
            ],
            "answer": 0
          },
          {
            "q": "lo studente straniero",
            "options": [
              "gli studenti stranieri",
              "gli studenti straniero",
              "i studenti stranieri"
            ],
            "answer": 0
          },
          {
            "q": "la giacca pesante",
            "options": [
              "le giacche pesanti",
              "le giacche pesante",
              "le giacca pesanti"
            ],
            "answer": 0
          },
          {
            "q": "il ponte antico",
            "options": [
              "i ponti antichi",
              "i ponti antico",
              "i ponti antici"
            ],
            "answer": 0
          },
          {
            "q": "l'amica gentile",
            "options": [
              "le amiche gentili",
              "le amiche gentile",
              "gli amici gentili"
            ],
            "answer": 0
          },
          {
            "q": "la stanza piccola",
            "options": [
              "le stanze piccole",
              "le stanze piccola",
              "le stanza piccole"
            ],
            "answer": 0
          },
          {
            "q": "il fiore giallo",
            "options": [
              "i fiori gialli",
              "i fiori giallo",
              "i fiori gialle"
            ],
            "answer": 0
          },
          {
            "q": "la borsa leggera",
            "options": [
              "le borse leggere",
              "le borse leggera",
              "le borsa leggere"
            ],
            "answer": 0
          }
        ]
      }
    ],
    "diag": true
  },
  {
    "lvl": "a",
    "lez": [
      "A1 L5",
      "A2 L1"
    ],
    "title": "Verbi regolari in -ARE",
    "exercises": [
      {
        "type": "Riempimento",
        "fmt": "buco",
        "instr": "Scegli la coniugazione corretta al presente.",
        "items": [
          {
            "q": "Io ___ in centro. (abitare)",
            "options": [
              "abito",
              "abita",
              "abiti"
            ],
            "answer": 0
          },
          {
            "q": "Tu ___ molto bene. (cantare)",
            "options": [
              "canti",
              "canta",
              "canto"
            ],
            "answer": 0
          },
          {
            "q": "Lei ___ in banca. (lavorare)",
            "options": [
              "lavora",
              "lavori",
              "lavoro"
            ],
            "answer": 0
          },
          {
            "q": "Noi ___ italiano. (studiare)",
            "options": [
              "studiamo",
              "studiate",
              "studiano"
            ],
            "answer": 0
          },
          {
            "q": "Voi ___ la pizza. (mangiare)",
            "options": [
              "mangiate",
              "mangiamo",
              "mangiano"
            ],
            "answer": 0
          },
          {
            "q": "Loro ___ a casa. (tornare)",
            "options": [
              "tornano",
              "torniamo",
              "tornate"
            ],
            "answer": 0
          },
          {
            "q": "Io ___ il treno. (aspettare)",
            "options": [
              "aspetto",
              "aspetta",
              "aspetti"
            ],
            "answer": 0
          },
          {
            "q": "Tu ___ spesso? (viaggiare)",
            "options": [
              "viaggi",
              "viaggia",
              "viaggio"
            ],
            "answer": 0
          },
          {
            "q": "Noi ___ una casa. (comprare)",
            "options": [
              "compriamo",
              "comprate",
              "comprano"
            ],
            "answer": 0
          },
          {
            "q": "Loro ___ in piscina. (nuotare)",
            "options": [
              "nuotano",
              "nuotiamo",
              "nuotate"
            ],
            "answer": 0
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
            "q": "Io lavorano in ufficio.",
            "wrong": "lavorano",
            "fix": "lavoro"
          },
          {
            "q": "Tu abitiamo a Roma.",
            "wrong": "abitiamo",
            "fix": "abiti"
          },
          {
            "q": "Voi studia molto.",
            "wrong": "studia",
            "fix": "studiate"
          },
          {
            "q": "Lei cantano bene.",
            "wrong": "cantano",
            "fix": "canta"
          },
          {
            "q": "Loro mangia alle otto.",
            "wrong": "mangia",
            "fix": "mangiano"
          },
          {
            "q": "Noi torno domani.",
            "wrong": "torno",
            "fix": "torniamo"
          },
          {
            "q": "Tu compra il pane.",
            "wrong": "compra",
            "fix": "compri"
          },
          {
            "q": "Io aspettiamo Anna.",
            "wrong": "aspettiamo",
            "fix": "aspetto"
          },
          {
            "q": "Voi nuotano bene.",
            "wrong": "nuotano",
            "fix": "nuotate"
          }
        ]
      },
      {
        "type": "Trasformazione",
        "fmt": "buco",
        "instr": "Cambia il soggetto: scegli la forma corretta.",
        "items": [
          {
            "q": "Io parlo italiano. → Noi ___",
            "options": [
              "parliamo",
              "parlate",
              "parlano"
            ],
            "answer": 0
          },
          {
            "q": "Tu lavori qui. → Voi ___",
            "options": [
              "lavorate",
              "lavoriamo",
              "lavorano"
            ],
            "answer": 0
          },
          {
            "q": "Lei studia storia. → Loro ___",
            "options": [
              "studiano",
              "studiamo",
              "studiate"
            ],
            "answer": 0
          },
          {
            "q": "Noi mangiamo tardi. → Io ___",
            "options": [
              "mangio",
              "mangia",
              "mangi"
            ],
            "answer": 0
          },
          {
            "q": "Voi cantate insieme. → Tu ___",
            "options": [
              "canti",
              "canta",
              "canto"
            ],
            "answer": 0
          },
          {
            "q": "Loro tornano lunedì. → Lui ___",
            "options": [
              "torna",
              "torno",
              "torni"
            ],
            "answer": 0
          },
          {
            "q": "Io compro il latte. → Loro ___",
            "options": [
              "comprano",
              "compriamo",
              "comprate"
            ],
            "answer": 0
          },
          {
            "q": "Tu aspetti l'autobus. → Noi ___",
            "options": [
              "aspettiamo",
              "aspettate",
              "aspettano"
            ],
            "answer": 0
          },
          {
            "q": "Lui viaggia spesso. → Voi ___",
            "options": [
              "viaggiate",
              "viaggiamo",
              "viaggiano"
            ],
            "answer": 0
          },
          {
            "q": "Noi nuotiamo il sabato. → Lei ___",
            "options": [
              "nuota",
              "nuoto",
              "nuoti"
            ],
            "answer": 0
          }
        ]
      }
    ]
  },
  {
    "lvl": "a",
    "lez": [
      "A1 L10",
      "A2 L2"
    ],
    "title": "Verbi regolari in -ERE",
    "exercises": [
      {
        "type": "Riempimento",
        "fmt": "buco",
        "instr": "Scegli la coniugazione corretta al presente.",
        "items": [
          {
            "q": "Io ___ un libro. (leggere)",
            "options": [
              "leggo",
              "legge",
              "leggi"
            ],
            "answer": 0
          },
          {
            "q": "Tu ___ il caffè. (prendere)",
            "options": [
              "prendi",
              "prende",
              "prendo"
            ],
            "answer": 0
          },
          {
            "q": "Lui ___ una mail. (scrivere)",
            "options": [
              "scrive",
              "scrivi",
              "scrivo"
            ],
            "answer": 0
          },
          {
            "q": "Noi ___ la musica. (accendere)",
            "options": [
              "accendiamo",
              "accendete",
              "accendono"
            ],
            "answer": 0
          },
          {
            "q": "Voi ___ in centro. (vivere)",
            "options": [
              "vivete",
              "viviamo",
              "vivono"
            ],
            "answer": 0
          },
          {
            "q": "Loro ___ la borsa qui. (mettere)",
            "options": [
              "mettono",
              "mettiamo",
              "mettete"
            ],
            "answer": 0
          },
          {
            "q": "Io ___ il cancello. (chiudere)",
            "options": [
              "chiudo",
              "chiude",
              "chiudi"
            ],
            "answer": 0
          },
          {
            "q": "Tu ___ bene? (vedere)",
            "options": [
              "vedi",
              "vede",
              "vedo"
            ],
            "answer": 0
          },
          {
            "q": "Noi ___ una risposta. (ricevere)",
            "options": [
              "riceviamo",
              "ricevete",
              "ricevono"
            ],
            "answer": 0
          },
          {
            "q": "Loro ___ il pacco. (perdere)",
            "options": [
              "perdono",
              "perdiamo",
              "perdete"
            ],
            "answer": 0
          }
        ]
      },
      {
        "type": "Correzione",
        "fmt": "errore",
        "instr": "Clicca il verbo coniugato in modo sbagliato.",
        "items": [
          {
            "q": "Io leggiamo il giornale.",
            "wrong": "leggiamo",
            "fix": "leggo"
          },
          {
            "q": "Tu prende il treno.",
            "wrong": "prende",
            "fix": "prendi"
          },
          {
            "q": "Lei scrivo una lettera.",
            "wrong": "scrivo",
            "fix": "scrive"
          },
          {
            "q": "Noi vivete a Milano.",
            "wrong": "vivete",
            "fix": "viviamo"
          },
          {
            "q": "Voi ricevono molti messaggi.",
            "wrong": "ricevono",
            "fix": "ricevete"
          },
          {
            "q": "Loro chiude la finestra.",
            "wrong": "chiude",
            "fix": "chiudono"
          },
          {
            "q": "Io vedete bene.",
            "wrong": "vedete",
            "fix": "vedo"
          },
          {
            "q": "Tu mettiamo la giacca.",
            "wrong": "mettiamo",
            "fix": "metti"
          },
          {
            "q": "Noi perde sempre le chiavi.",
            "wrong": "perde",
            "fix": "perdiamo"
          },
          {
            "q": "Voi accendo la luce.",
            "wrong": "accendo",
            "fix": "accendete"
          }
        ]
      },
      {
        "type": "Trasformazione",
        "fmt": "buco",
        "instr": "Cambia il soggetto: scegli la forma corretta.",
        "items": [
          {
            "q": "Io scrivo una mail. → Noi ___",
            "options": [
              "scriviamo",
              "scrivete",
              "scrivono"
            ],
            "answer": 0
          },
          {
            "q": "Tu leggi molto. → Voi ___",
            "options": [
              "leggete",
              "leggiamo",
              "leggono"
            ],
            "answer": 0
          },
          {
            "q": "Lui vive a Torino. → Loro ___",
            "options": [
              "vivono",
              "viviamo",
              "vivete"
            ],
            "answer": 0
          },
          {
            "q": "Noi prendiamo il bus. → Io ___",
            "options": [
              "prendo",
              "prende",
              "prendi"
            ],
            "answer": 0
          },
          {
            "q": "Voi chiudete il negozio. → Tu ___",
            "options": [
              "chiudi",
              "chiude",
              "chiudo"
            ],
            "answer": 0
          },
          {
            "q": "Loro vedono il film. → Lei ___",
            "options": [
              "vede",
              "vedo",
              "vedi"
            ],
            "answer": 0
          },
          {
            "q": "Io ricevo un regalo. → Loro ___",
            "options": [
              "ricevono",
              "riceviamo",
              "ricevete"
            ],
            "answer": 0
          },
          {
            "q": "Tu metti la sciarpa. → Noi ___",
            "options": [
              "mettiamo",
              "mettete",
              "mettono"
            ],
            "answer": 0
          },
          {
            "q": "Lui perde tempo. → Voi ___",
            "options": [
              "perdete",
              "perdiamo",
              "perdono"
            ],
            "answer": 0
          },
          {
            "q": "Noi accendiamo il forno. → Lei ___",
            "options": [
              "accende",
              "accendo",
              "accendi"
            ],
            "answer": 0
          }
        ]
      }
    ]
  },
  {
    "lvl": "a",
    "lez": [
      "A1 L11",
      "A2 L3"
    ],
    "title": "Verbi regolari in -IRE (con e senza -ISC-)",
    "exercises": [
      {
        "type": "Riempimento",
        "fmt": "buco",
        "instr": "Scegli la forma corretta: alcuni verbi prendono -ISC-.",
        "items": [
          {
            "q": "Io ___ alle nove di sera. (partire)",
            "options": [
              "parto",
              "partisco",
              "parte"
            ],
            "answer": 0
          },
          {
            "q": "Tu ___ la lezione? (capire)",
            "options": [
              "capisci",
              "capi",
              "capite"
            ],
            "answer": 0
          },
          {
            "q": "Lui ___ la finestra. (aprire)",
            "options": [
              "apre",
              "aprisce",
              "apri"
            ],
            "answer": 0
          },
          {
            "q": "Noi ___ il lavoro. (finire)",
            "options": [
              "finiamo",
              "finisciamo",
              "finite"
            ],
            "answer": 0
          },
          {
            "q": "Voi ___ bene? (dormire)",
            "options": [
              "dormite",
              "dormisce",
              "dormiamo"
            ],
            "answer": 0
          },
          {
            "q": "Loro ___ il tè al caffè. (preferire)",
            "options": [
              "preferiscono",
              "preferono",
              "preferite"
            ],
            "answer": 0
          },
          {
            "q": "Io ___ la porta. (aprire)",
            "options": [
              "apro",
              "aprisco",
              "apre"
            ],
            "answer": 0
          },
          {
            "q": "Tu ___ un regalo. (offrire)",
            "options": [
              "offri",
              "offrisci",
              "offre"
            ],
            "answer": 0
          },
          {
            "q": "Lei ___ la casa. (pulire)",
            "options": [
              "pulisce",
              "pule",
              "pulisci"
            ],
            "answer": 0
          },
          {
            "q": "Noi ___ una storia. (sentire)",
            "options": [
              "sentiamo",
              "sentisciamo",
              "sentite"
            ],
            "answer": 0
          }
        ]
      },
      {
        "type": "Correzione",
        "fmt": "errore",
        "instr": "Clicca il verbo coniugato in modo sbagliato.",
        "items": [
          {
            "q": "Tu finisco il lavoro.",
            "wrong": "finisco",
            "fix": "finisci"
          },
          {
            "q": "Noi capisce tutto.",
            "wrong": "capisce",
            "fix": "capiamo"
          },
          {
            "q": "Voi partono domani.",
            "wrong": "partono",
            "fix": "partite"
          },
          {
            "q": "Lei dormo poco.",
            "wrong": "dormo",
            "fix": "dorme"
          },
          {
            "q": "Loro pulisce la stanza.",
            "wrong": "pulisce",
            "fix": "puliscono"
          },
          {
            "q": "Io capite la domanda.",
            "wrong": "capite",
            "fix": "capisco"
          },
          {
            "q": "Tu preferisce il mare.",
            "wrong": "preferisce",
            "fix": "preferisci"
          },
          {
            "q": "Noi sentite un rumore.",
            "wrong": "sentite",
            "fix": "sentiamo"
          },
          {
            "q": "Voi offro il caffè.",
            "wrong": "offro",
            "fix": "offrite"
          },
          {
            "q": "Lui partiamo stasera.",
            "wrong": "partiamo",
            "fix": "parte"
          }
        ]
      },
      {
        "type": "Trasformazione",
        "fmt": "buco",
        "instr": "Cambia il soggetto: scegli la forma corretta.",
        "items": [
          {
            "q": "Io capisco tutto. → Noi ___",
            "options": [
              "capiamo",
              "capite",
              "capiscono"
            ],
            "answer": 0
          },
          {
            "q": "Tu parti presto. → Voi ___",
            "options": [
              "partite",
              "partiamo",
              "partono"
            ],
            "answer": 0
          },
          {
            "q": "Lei finisce ora. → Loro ___",
            "options": [
              "finiscono",
              "finiamo",
              "finite"
            ],
            "answer": 0
          },
          {
            "q": "Noi apriamo il negozio. → Io ___",
            "options": [
              "apro",
              "apre",
              "apri"
            ],
            "answer": 0
          },
          {
            "q": "Voi dormite tardi. → Tu ___",
            "options": [
              "dormi",
              "dorme",
              "dormo"
            ],
            "answer": 0
          },
          {
            "q": "Loro preferiscono il tè. → Lui ___",
            "options": [
              "preferisce",
              "preferisco",
              "preferisci"
            ],
            "answer": 0
          },
          {
            "q": "Io pulisco la cucina. → Loro ___",
            "options": [
              "puliscono",
              "puliamo",
              "pulite"
            ],
            "answer": 0
          },
          {
            "q": "Tu senti la musica. → Noi ___",
            "options": [
              "sentiamo",
              "sentite",
              "sentono"
            ],
            "answer": 0
          },
          {
            "q": "Lui offre un gelato. → Voi ___",
            "options": [
              "offrite",
              "offriamo",
              "offrono"
            ],
            "answer": 0
          },
          {
            "q": "Noi seguiamo il corso. → Lei ___",
            "options": [
              "segue",
              "seguo",
              "segui"
            ],
            "answer": 0
          }
        ]
      }
    ],
    "diag": true
  },
  {
    "lvl": "a",
    "lez": [
      "A1 L7"
    ],
    "title": "Il verbo piacere",
    "exercises": [
      {
        "type": "Riempimento",
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
              "piacciono",
              "piace"
            ],
            "answer": 0
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
              "piacciono",
              "piace"
            ],
            "answer": 0
          },
          {
            "q": "Mi ___ i dolci.",
            "options": [
              "piacciono",
              "piace"
            ],
            "answer": 0
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
              "piacciono",
              "piace"
            ],
            "answer": 0
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
              "piacciono",
              "piace"
            ],
            "answer": 0
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
        "instr": "Clicca la parola sbagliata.",
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
            "q": "Mi piace i biscotti.",
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
            "q": "Mi piacciono nuotare.",
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
        "fmt": "buco",
        "instr": "Cambia il pronome: scegli la frase corretta.",
        "items": [
          {
            "q": "Mi piace il mare. → (a te)",
            "options": [
              "Ti piace il mare.",
              "Ti piacciono il mare.",
              "Ti piaci il mare."
            ],
            "answer": 0
          },
          {
            "q": "Ti piacciono i gatti. → (a noi)",
            "options": [
              "Ci piacciono i gatti.",
              "Ci piace i gatti.",
              "Ci piacete i gatti."
            ],
            "answer": 0
          },
          {
            "q": "Le piace leggere. → (a voi)",
            "options": [
              "Vi piace leggere.",
              "Vi piacciono leggere.",
              "Vi piacete leggere."
            ],
            "answer": 0
          },
          {
            "q": "Ci piace la città. → (a lei)",
            "options": [
              "Le piace la città.",
              "Le piacciono la città.",
              "Gli piace la città."
            ],
            "answer": 0
          },
          {
            "q": "Mi piacciono le mele. → (a lui)",
            "options": [
              "Gli piacciono le mele.",
              "Gli piace le mele.",
              "Le piacciono le mele."
            ],
            "answer": 0
          },
          {
            "q": "Vi piace il teatro. → (a me)",
            "options": [
              "Mi piace il teatro.",
              "Mi piacciono il teatro.",
              "Mi piaccio il teatro."
            ],
            "answer": 0
          },
          {
            "q": "Ti piace correre. → (a loro)",
            "options": [
              "Gli piace correre.",
              "Gli piacciono correre.",
              "Le piace correre."
            ],
            "answer": 0
          },
          {
            "q": "Gli piacciono i cani. → (a te)",
            "options": [
              "Ti piacciono i cani.",
              "Ti piace i cani.",
              "Ti piaci i cani."
            ],
            "answer": 0
          },
          {
            "q": "Mi piace la neve. → (a noi)",
            "options": [
              "Ci piace la neve.",
              "Ci piacciono la neve.",
              "Ci piacete la neve."
            ],
            "answer": 0
          },
          {
            "q": "Ci piacciono i viaggi. → (a voi)",
            "options": [
              "Vi piacciono i viaggi.",
              "Vi piace i viaggi.",
              "Vi piacete i viaggi."
            ],
            "answer": 0
          }
        ]
      }
    ],
    "diag": true
  },
  {
    "lvl": "a",
    "lez": [
      "A1 L8"
    ],
    "title": "Andare e venire",
    "exercises": [
      {
        "type": "Riempimento",
        "fmt": "buco",
        "instr": "Scegli la forma corretta di andare o venire.",
        "items": [
          {
            "q": "Io ___ al cinema stasera.",
            "options": [
              "vado",
              "vai",
              "va"
            ],
            "answer": 0
          },
          {
            "q": "Tu ___ con noi?",
            "options": [
              "vieni",
              "viene",
              "vengo"
            ],
            "answer": 0
          },
          {
            "q": "Lei ___ a scuola in bici.",
            "options": [
              "va",
              "vado",
              "vai"
            ],
            "answer": 0
          },
          {
            "q": "Noi ___ da te domani.",
            "options": [
              "veniamo",
              "venite",
              "vengono"
            ],
            "answer": 0
          },
          {
            "q": "Voi ___ in Italia quest'estate.",
            "options": [
              "andate",
              "andiamo",
              "vanno"
            ],
            "answer": 0
          },
          {
            "q": "Loro ___ alla festa.",
            "options": [
              "vengono",
              "veniamo",
              "venite"
            ],
            "answer": 0
          },
          {
            "q": "Io ___ volentieri con voi.",
            "options": [
              "vengo",
              "vieni",
              "viene"
            ],
            "answer": 0
          },
          {
            "q": "Tu ___ spesso al mare?",
            "options": [
              "vai",
              "va",
              "vado"
            ],
            "answer": 0
          },
          {
            "q": "Noi ___ a piedi.",
            "options": [
              "andiamo",
              "andate",
              "vanno"
            ],
            "answer": 0
          },
          {
            "q": "Loro ___ in ufficio presto.",
            "options": [
              "vanno",
              "andiamo",
              "andate"
            ],
            "answer": 0
          }
        ]
      },
      {
        "type": "Correzione",
        "fmt": "errore",
        "instr": "Clicca il verbo sbagliato.",
        "items": [
          {
            "q": "Io vai a casa.",
            "wrong": "vai",
            "fix": "vado"
          },
          {
            "q": "Tu vengo con me?",
            "wrong": "vengo",
            "fix": "vieni"
          },
          {
            "q": "Noi vanno al parco.",
            "wrong": "vanno",
            "fix": "andiamo"
          },
          {
            "q": "Voi veniamo domani?",
            "wrong": "veniamo",
            "fix": "venite"
          },
          {
            "q": "Lei vado in centro.",
            "wrong": "vado",
            "fix": "va"
          },
          {
            "q": "Loro venite alla riunione.",
            "wrong": "venite",
            "fix": "vengono"
          },
          {
            "q": "Io viene subito.",
            "wrong": "viene",
            "fix": "vengo"
          },
          {
            "q": "Tu andiamo a scuola.",
            "wrong": "andiamo",
            "fix": "vai"
          },
          {
            "q": "Noi vieni con voi.",
            "wrong": "vieni",
            "fix": "veniamo"
          },
          {
            "q": "Voi va in vacanza.",
            "wrong": "va",
            "fix": "andate"
          }
        ]
      },
      {
        "type": "Trasformazione",
        "fmt": "buco",
        "instr": "Cambia il soggetto: scegli la forma corretta.",
        "items": [
          {
            "q": "Io vado in centro. → Noi ___",
            "options": [
              "andiamo",
              "andate",
              "vanno"
            ],
            "answer": 0
          },
          {
            "q": "Tu vieni con me. → Voi ___",
            "options": [
              "venite",
              "veniamo",
              "vengono"
            ],
            "answer": 0
          },
          {
            "q": "Lui va al lavoro. → Loro ___",
            "options": [
              "vanno",
              "andiamo",
              "andate"
            ],
            "answer": 0
          },
          {
            "q": "Noi veniamo stasera. → Io ___",
            "options": [
              "vengo",
              "vieni",
              "viene"
            ],
            "answer": 0
          },
          {
            "q": "Voi andate al mare. → Tu ___",
            "options": [
              "vai",
              "va",
              "vado"
            ],
            "answer": 0
          },
          {
            "q": "Loro vengono presto. → Lei ___",
            "options": [
              "viene",
              "vengo",
              "vieni"
            ],
            "answer": 0
          },
          {
            "q": "Io vengo a piedi. → Loro ___",
            "options": [
              "vengono",
              "veniamo",
              "venite"
            ],
            "answer": 0
          },
          {
            "q": "Tu vai in treno. → Noi ___",
            "options": [
              "andiamo",
              "andate",
              "vanno"
            ],
            "answer": 0
          },
          {
            "q": "Lei viene con noi. → Voi ___",
            "options": [
              "venite",
              "veniamo",
              "vengono"
            ],
            "answer": 0
          },
          {
            "q": "Noi andiamo domani. → Lui ___",
            "options": [
              "va",
              "vado",
              "vai"
            ],
            "answer": 0
          }
        ]
      }
    ]
  },
  {
    "lvl": "a",
    "lez": [
      "A1 L8",
      "A1 L12",
      "A1 L16"
    ],
    "title": "Le preposizioni semplici",
    "exercises": [
      {
        "type": "Riempimento",
        "fmt": "buco",
        "instr": "Scegli la preposizione semplice corretta.",
        "items": [
          {
            "q": "Questo regalo è ___ te.",
            "options": [
              "per",
              "di",
              "a"
            ],
            "answer": 0
          },
          {
            "q": "Il gatto è ___ il tavolo.",
            "options": [
              "su",
              "in",
              "a"
            ],
            "answer": 0
          },
          {
            "q": "Studio italiano ___ due anni.",
            "options": [
              "da",
              "per",
              "in"
            ],
            "answer": 0
          },
          {
            "q": "Vado ___ scuola in autobus.",
            "options": [
              "a",
              "in",
              "da"
            ],
            "answer": 0
          },
          {
            "q": "Parlo ___ mio fratello.",
            "options": [
              "con",
              "di",
              "a"
            ],
            "answer": 0
          },
          {
            "q": "Il libro è ___ Marco.",
            "options": [
              "di",
              "da",
              "a"
            ],
            "answer": 0
          },
          {
            "q": "Il treno parte ___ Milano.",
            "options": [
              "da",
              "di",
              "in"
            ],
            "answer": 0
          },
          {
            "q": "Metto il libro ___ borsa.",
            "options": [
              "in",
              "a",
              "su"
            ],
            "answer": 0
          },
          {
            "q": "Il corso comincia ___ settembre.",
            "options": [
              "a",
              "di",
              "da"
            ],
            "answer": 0
          },
          {
            "q": "Torno ___ casa alle sei.",
            "options": [
              "a",
              "in",
              "da"
            ],
            "answer": 0
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
            "q": "La penna è su Anna.",
            "wrong": "su",
            "fix": "di"
          },
          {
            "q": "Lavoro a Spagna.",
            "wrong": "a",
            "fix": "in"
          },
          {
            "q": "Studio per tre anni.",
            "wrong": "per",
            "fix": "da"
          },
          {
            "q": "Parto in Napoli domani.",
            "wrong": "in",
            "fix": "da"
          },
          {
            "q": "Sono stato a Grecia.",
            "wrong": "a",
            "fix": "in"
          }
        ]
      },
      {
        "type": "Trasformazione",
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
              "in",
              "a"
            ],
            "answer": 0
          },
          {
            "q": "Lavoro ___ Italia.",
            "options": [
              "in",
              "a"
            ],
            "answer": 0
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
              "in",
              "a"
            ],
            "answer": 0
          },
          {
            "q": "Studio ___ Bologna.",
            "options": [
              "a",
              "in"
            ],
            "answer": 0
          },
          {
            "q": "Vado ___ Francia.",
            "options": [
              "in",
              "a"
            ],
            "answer": 0
          },
          {
            "q": "Torno ___ Venezia.",
            "options": [
              "a",
              "in"
            ],
            "answer": 0
          },
          {
            "q": "Sono nato ___ Germania.",
            "options": [
              "in",
              "a"
            ],
            "answer": 0
          },
          {
            "q": "Passo l'estate ___ Sicilia.",
            "options": [
              "in",
              "a"
            ],
            "answer": 0
          }
        ]
      }
    ],
    "diag": true,
    "stima": "a2"
  },
  {
    "lvl": "a",
    "lez": [
      "A1 L9"
    ],
    "title": "Maschile e femminile dei nomi",
    "exercises": [
      {
        "type": "Trasformazione",
        "fmt": "buco",
        "instr": "Volgi al femminile: scegli la forma corretta.",
        "items": [
          {
            "q": "il direttore",
            "options": [
              "la direttrice",
              "la direttora",
              "la direttoressa"
            ],
            "answer": 0
          },
          {
            "q": "lo studente",
            "options": [
              "la studentessa",
              "la studenta",
              "la studentrice"
            ],
            "answer": 0
          },
          {
            "q": "il cameriere",
            "options": [
              "la cameriera",
              "la camerierice",
              "la camerieressa"
            ],
            "answer": 0
          },
          {
            "q": "il dottore",
            "options": [
              "la dottoressa",
              "la dottrice",
              "la dottora"
            ],
            "answer": 0
          },
          {
            "q": "l'attore",
            "options": [
              "l'attrice",
              "l'attora",
              "l'attoressa"
            ],
            "answer": 0
          },
          {
            "q": "il professore",
            "options": [
              "la professoressa",
              "la professora",
              "la professrice"
            ],
            "answer": 0
          },
          {
            "q": "il maestro",
            "options": [
              "la maestra",
              "la maestressa",
              "la maestrice"
            ],
            "answer": 0
          },
          {
            "q": "lo scrittore",
            "options": [
              "la scrittrice",
              "la scrittora",
              "la scrittoressa"
            ],
            "answer": 0
          },
          {
            "q": "il pittore",
            "options": [
              "la pittrice",
              "la pittora",
              "la pittoressa"
            ],
            "answer": 0
          },
          {
            "q": "il commesso",
            "options": [
              "la commessa",
              "la commessrice",
              "la commessoressa"
            ],
            "answer": 0
          }
        ]
      },
      {
        "type": "Riempimento",
        "fmt": "buco",
        "instr": "Scegli la forma adatta al soggetto.",
        "items": [
          {
            "q": "Anna è una brava ___.",
            "options": [
              "insegnante",
              "insegnanto",
              "insegnantessa"
            ],
            "answer": 0
          },
          {
            "q": "Mio zio fa il ___.",
            "options": [
              "giornalista",
              "giornalisto",
              "giornalistore"
            ],
            "answer": 0
          },
          {
            "q": "Sua sorella è ___.",
            "options": [
              "infermiera",
              "infermiere",
              "infermierice"
            ],
            "answer": 0
          },
          {
            "q": "Il fratello di Lucia è ___.",
            "options": [
              "cuoco",
              "cuoca",
              "cuochessa"
            ],
            "answer": 0
          },
          {
            "q": "La moglie di Paolo è ___.",
            "options": [
              "avvocata",
              "avvocato",
              "avvocatrice"
            ],
            "answer": 0
          },
          {
            "q": "Marco è un ___ famoso.",
            "options": [
              "cantante",
              "cantanto",
              "cantantore"
            ],
            "answer": 0
          },
          {
            "q": "Sua madre è una ___ brava.",
            "options": [
              "farmacista",
              "farmacisto",
              "farmacistessa"
            ],
            "answer": 0
          },
          {
            "q": "Il nonno era un ___.",
            "options": [
              "operaio",
              "operaia",
              "operaiessa"
            ],
            "answer": 0
          },
          {
            "q": "Giulia è la nuova ___.",
            "options": [
              "preside",
              "presida",
              "presidessa"
            ],
            "answer": 0
          },
          {
            "q": "Suo padre fa l'___.",
            "options": [
              "ingegnere",
              "ingegnera",
              "ingegnerice"
            ],
            "answer": 0
          }
        ]
      },
      {
        "type": "Correzione",
        "fmt": "errore",
        "instr": "Clicca la parola con il genere sbagliato.",
        "items": [
          {
            "q": "Maria è una brava dottore.",
            "wrong": "dottore",
            "fix": "dottoressa"
          },
          {
            "q": "Anna è la direttore della scuola.",
            "wrong": "direttore",
            "fix": "direttrice"
          },
          {
            "q": "Mia cugina è un studentessa.",
            "wrong": "un",
            "fix": "una"
          },
          {
            "q": "Lucia è una attore famosa.",
            "wrong": "attore",
            "fix": "attrice"
          },
          {
            "q": "Mio zio è una cameriera.",
            "wrong": "cameriera",
            "fix": "cameriere"
          },
          {
            "q": "Paolo è una professoressa.",
            "wrong": "professoressa",
            "fix": "professore"
          },
          {
            "q": "Elena è un maestro simpatico.",
            "wrong": "maestro",
            "fix": "maestra"
          },
          {
            "q": "Carla è uno scrittore bravo.",
            "wrong": "scrittore",
            "fix": "scrittrice"
          },
          {
            "q": "Luca è una commessa.",
            "wrong": "commessa",
            "fix": "commesso"
          },
          {
            "q": "Sara è un pittore famoso.",
            "wrong": "pittore",
            "fix": "pittrice"
          }
        ]
      }
    ]
  },
  {
    "lvl": "a",
    "lez": [
      "A1 L15"
    ],
    "title": "Il modale dovere + infinito",
    "exercises": [
      {
        "type": "Riempimento",
        "fmt": "buco",
        "instr": "Scegli la forma corretta di dovere.",
        "items": [
          {
            "q": "Io ___ studiare stasera.",
            "options": [
              "devo",
              "deve",
              "devi"
            ],
            "answer": 0
          },
          {
            "q": "Tu ___ finire il lavoro.",
            "options": [
              "devi",
              "deve",
              "devo"
            ],
            "answer": 0
          },
          {
            "q": "Lei ___ partire presto.",
            "options": [
              "deve",
              "devi",
              "devo"
            ],
            "answer": 0
          },
          {
            "q": "Noi ___ pagare il conto.",
            "options": [
              "dobbiamo",
              "dovete",
              "devono"
            ],
            "answer": 0
          },
          {
            "q": "Voi ___ aspettare qui.",
            "options": [
              "dovete",
              "dobbiamo",
              "devono"
            ],
            "answer": 0
          },
          {
            "q": "Loro ___ tornare a casa.",
            "options": [
              "devono",
              "dobbiamo",
              "dovete"
            ],
            "answer": 0
          },
          {
            "q": "Io ___ prendere le medicine.",
            "options": [
              "devo",
              "deve",
              "dobbiamo"
            ],
            "answer": 0
          },
          {
            "q": "Tu ___ chiamare il medico.",
            "options": [
              "devi",
              "dovete",
              "deve"
            ],
            "answer": 0
          },
          {
            "q": "Noi ___ prenotare un tavolo.",
            "options": [
              "dobbiamo",
              "devono",
              "devi"
            ],
            "answer": 0
          },
          {
            "q": "Loro ___ arrivare alle otto.",
            "options": [
              "devono",
              "dovete",
              "deve"
            ],
            "answer": 0
          }
        ]
      },
      {
        "type": "Correzione",
        "fmt": "errore",
        "instr": "Clicca la parola sbagliata (forma del verbo o preposizione di troppo).",
        "items": [
          {
            "q": "Devi a finire i compiti.",
            "wrong": "a",
            "fix": "(togliere)"
          },
          {
            "q": "Dovemo studiare di più.",
            "wrong": "Dovemo",
            "fix": "Dobbiamo"
          },
          {
            "q": "Loro deve partire subito.",
            "wrong": "deve",
            "fix": "devono"
          },
          {
            "q": "Io devi lavorare domani.",
            "wrong": "devi",
            "fix": "devo"
          },
          {
            "q": "Noi dovete pagare adesso.",
            "wrong": "dovete",
            "fix": "dobbiamo"
          },
          {
            "q": "Devo di andare a casa.",
            "wrong": "di",
            "fix": "(togliere)"
          },
          {
            "q": "Voi devono aspettare fuori.",
            "wrong": "devono",
            "fix": "dovete"
          },
          {
            "q": "Tu dobbiamo chiamare Anna.",
            "wrong": "dobbiamo",
            "fix": "devi"
          },
          {
            "q": "Lei devo prenotare il volo.",
            "wrong": "devo",
            "fix": "deve"
          },
          {
            "q": "Dobbiamo per uscire presto.",
            "wrong": "per",
            "fix": "(togliere)"
          }
        ]
      },
      {
        "type": "Trasformazione",
        "fmt": "buco",
        "instr": "Cambia il soggetto: scegli la forma corretta.",
        "items": [
          {
            "q": "Io devo uscire. → Noi ___",
            "options": [
              "dobbiamo uscire",
              "dovete uscire",
              "devono uscire"
            ],
            "answer": 0
          },
          {
            "q": "Tu devi studiare. → Voi ___",
            "options": [
              "dovete studiare",
              "dobbiamo studiare",
              "devono studiare"
            ],
            "answer": 0
          },
          {
            "q": "Lui deve lavorare. → Loro ___",
            "options": [
              "devono lavorare",
              "dobbiamo lavorare",
              "dovete lavorare"
            ],
            "answer": 0
          },
          {
            "q": "Noi dobbiamo partire. → Io ___",
            "options": [
              "devo partire",
              "deve partire",
              "devi partire"
            ],
            "answer": 0
          },
          {
            "q": "Voi dovete pagare. → Tu ___",
            "options": [
              "devi pagare",
              "deve pagare",
              "devo pagare"
            ],
            "answer": 0
          },
          {
            "q": "Loro devono aspettare. → Lei ___",
            "options": [
              "deve aspettare",
              "devo aspettare",
              "devi aspettare"
            ],
            "answer": 0
          },
          {
            "q": "Io devo tornare. → Loro ___",
            "options": [
              "devono tornare",
              "dobbiamo tornare",
              "dovete tornare"
            ],
            "answer": 0
          },
          {
            "q": "Tu devi chiamare. → Noi ___",
            "options": [
              "dobbiamo chiamare",
              "dovete chiamare",
              "devono chiamare"
            ],
            "answer": 0
          },
          {
            "q": "Lei deve prenotare. → Voi ___",
            "options": [
              "dovete prenotare",
              "dobbiamo prenotare",
              "devono prenotare"
            ],
            "answer": 0
          },
          {
            "q": "Noi dobbiamo scrivere. → Lui ___",
            "options": [
              "deve scrivere",
              "devo scrivere",
              "devi scrivere"
            ],
            "answer": 0
          }
        ]
      }
    ]
  },
  {
    "lvl": "a",
    "lez": [
      "A1 L17"
    ],
    "title": "I possessivi",
    "exercises": [
      {
        "type": "Riempimento",
        "fmt": "buco",
        "instr": "Scegli il possessivo corretto, con o senza articolo.",
        "items": [
          {
            "q": "Questa è ___ casa. (di noi)",
            "options": [
              "la nostra",
              "nostra",
              "il nostro"
            ],
            "answer": 0
          },
          {
            "q": "___ padre lavora molto. (di lei)",
            "options": [
              "Suo",
              "Il suo",
              "Sua"
            ],
            "answer": 0
          },
          {
            "q": "Dove sono ___ chiavi? (di me)",
            "options": [
              "le mie",
              "mie",
              "i miei"
            ],
            "answer": 0
          },
          {
            "q": "___ fratello è simpatico. (di te)",
            "options": [
              "Tuo",
              "Il tuo",
              "Tua"
            ],
            "answer": 0
          },
          {
            "q": "___ macchina è nuova. (di loro)",
            "options": [
              "La loro",
              "Loro",
              "Il loro"
            ],
            "answer": 0
          },
          {
            "q": "___ madre è gentile. (di me)",
            "options": [
              "Mia",
              "La mia",
              "Mio"
            ],
            "answer": 0
          },
          {
            "q": "Ecco ___ libri. (di voi)",
            "options": [
              "i vostri",
              "vostri",
              "le vostre"
            ],
            "answer": 0
          },
          {
            "q": "___ sorella studia a Roma. (di noi)",
            "options": [
              "Nostra",
              "La nostra",
              "Nostro"
            ],
            "answer": 0
          },
          {
            "q": "___ amici sono simpatici. (di te)",
            "options": [
              "I tuoi",
              "Tuoi",
              "Le tue"
            ],
            "answer": 0
          },
          {
            "q": "___ cane è piccolo. (di lei)",
            "options": [
              "Il suo",
              "Suo",
              "La sua"
            ],
            "answer": 0
          }
        ]
      },
      {
        "type": "Correzione",
        "fmt": "errore",
        "instr": "Clicca la parola sbagliata.",
        "items": [
          {
            "q": "il mio padre",
            "wrong": "il",
            "fix": "(togliere)"
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
            "q": "mio madre",
            "wrong": "mio",
            "fix": "mia"
          }
        ]
      },
      {
        "type": "Trasformazione",
        "fmt": "buco",
        "instr": "Volgi al plurale la cosa posseduta.",
        "items": [
          {
            "q": "la mia amica",
            "options": [
              "le mie amiche",
              "le mie amica",
              "le miei amiche"
            ],
            "answer": 0
          },
          {
            "q": "il tuo libro",
            "options": [
              "i tuoi libri",
              "i tue libri",
              "i tuoi libro"
            ],
            "answer": 0
          },
          {
            "q": "il nostro problema",
            "options": [
              "i nostri problemi",
              "i nostre problemi",
              "i nostri problema"
            ],
            "answer": 0
          },
          {
            "q": "la sua idea",
            "options": [
              "le sue idee",
              "le sue idea",
              "le suoi idee"
            ],
            "answer": 0
          },
          {
            "q": "il mio quaderno",
            "options": [
              "i miei quaderni",
              "i mie quaderni",
              "i miei quaderno"
            ],
            "answer": 0
          },
          {
            "q": "la tua penna",
            "options": [
              "le tue penne",
              "le tue penna",
              "le tuoi penne"
            ],
            "answer": 0
          },
          {
            "q": "il vostro esame",
            "options": [
              "i vostri esami",
              "i vostre esami",
              "i vostri esame"
            ],
            "answer": 0
          },
          {
            "q": "la loro valigia",
            "options": [
              "le loro valigie",
              "le loro valigia",
              "i loro valigie"
            ],
            "answer": 0
          },
          {
            "q": "il suo gatto",
            "options": [
              "i suoi gatti",
              "i sue gatti",
              "i suoi gatto"
            ],
            "answer": 0
          },
          {
            "q": "la nostra lezione",
            "options": [
              "le nostre lezioni",
              "le nostra lezioni",
              "le nostri lezioni"
            ],
            "answer": 0
          }
        ]
      }
    ]
  },
  {
    "lvl": "a",
    "lez": [
      "A1 L18"
    ],
    "title": "L'ora",
    "exercises": [
      {
        "type": "Riempimento",
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
              "Sono le",
              "È",
              "È l'"
            ],
            "answer": 0
          },
          {
            "q": "___ una e mezza.",
            "options": [
              "È l'",
              "Sono le",
              "È le"
            ],
            "answer": 0
          },
          {
            "q": "___ dieci di sera.",
            "options": [
              "Sono le",
              "È",
              "È l'"
            ],
            "answer": 0
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
              "Sono le",
              "È le",
              "È l'"
            ],
            "answer": 0
          },
          {
            "q": "___ una precisa.",
            "options": [
              "È l'",
              "Sono le",
              "È le"
            ],
            "answer": 0
          },
          {
            "q": "___ sette e un quarto.",
            "options": [
              "Sono le",
              "È le",
              "È l'"
            ],
            "answer": 0
          },
          {
            "q": "___ due e venti.",
            "options": [
              "Sono le",
              "È le",
              "È l'"
            ],
            "answer": 0
          },
          {
            "q": "___ nove meno un quarto.",
            "options": [
              "Sono le",
              "È le",
              "È l'"
            ],
            "answer": 0
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
            "q": "È sette in punto.",
            "wrong": "È",
            "fix": "Sono le"
          },
          {
            "q": "È le dodici e mezza.",
            "wrong": "È",
            "fix": "Sono"
          },
          {
            "q": "È le sei e venti.",
            "wrong": "È",
            "fix": "Sono"
          },
          {
            "q": "È le otto e dieci.",
            "wrong": "È",
            "fix": "Sono"
          }
        ]
      },
      {
        "type": "Trasformazione",
        "fmt": "buco",
        "instr": "Scegli la preposizione giusta davanti all'ora.",
        "items": [
          {
            "q": "Il treno parte ___ due.",
            "options": [
              "alle",
              "all'",
              "a"
            ],
            "answer": 0
          },
          {
            "q": "Ci vediamo ___ una.",
            "options": [
              "all'",
              "alle",
              "a"
            ],
            "answer": 0
          },
          {
            "q": "Pranziamo ___ mezzogiorno.",
            "options": [
              "a",
              "alle",
              "all'"
            ],
            "answer": 0
          },
          {
            "q": "Il negozio apre ___ nove.",
            "options": [
              "alle",
              "all'",
              "a"
            ],
            "answer": 0
          },
          {
            "q": "Torno ___ mezzanotte.",
            "options": [
              "a",
              "alle",
              "all'"
            ],
            "answer": 0
          },
          {
            "q": "La riunione comincia ___ tre.",
            "options": [
              "alle",
              "all'",
              "a"
            ],
            "answer": 0
          },
          {
            "q": "Mi alzo ___ sette.",
            "options": [
              "alle",
              "all'",
              "a"
            ],
            "answer": 0
          },
          {
            "q": "Comincio ___ una.",
            "options": [
              "all'",
              "alle",
              "a"
            ],
            "answer": 0
          },
          {
            "q": "Cena ___ otto.",
            "options": [
              "alle",
              "all'",
              "a"
            ],
            "answer": 0
          },
          {
            "q": "Parto ___ undici.",
            "options": [
              "alle",
              "all'",
              "a"
            ],
            "answer": 0
          }
        ]
      }
    ]
  },
  {
    "lvl": "a",
    "lez": [
      "A1 L21",
      "A2 L17"
    ],
    "title": "Il presente con valore di futuro",
    "exercises": [
      {
        "type": "Riempimento",
        "fmt": "buco",
        "instr": "Scegli il verbo al presente per parlare di un piano futuro.",
        "items": [
          {
            "q": "Domani ___ a Roma. (io – partire)",
            "options": [
              "parto",
              "partirò",
              "partivo"
            ],
            "answer": 0
          },
          {
            "q": "La settimana prossima ___ un esame. (noi – avere)",
            "options": [
              "abbiamo",
              "avremo",
              "avevamo"
            ],
            "answer": 0
          },
          {
            "q": "Stasera ___ al cinema. (loro – andare)",
            "options": [
              "vanno",
              "andranno",
              "andavano"
            ],
            "answer": 0
          },
          {
            "q": "Sabato ___ i miei amici. (io – vedere)",
            "options": [
              "vedo",
              "vedrò",
              "vedevo"
            ],
            "answer": 0
          },
          {
            "q": "L'anno prossimo ci ___ in Spagna. (noi – trasferirsi)",
            "options": [
              "trasferiamo",
              "trasferiremo",
              "trasferivamo"
            ],
            "answer": 0
          },
          {
            "q": "Domenica ___ a casa dei nonni. (voi – pranzare)",
            "options": [
              "pranzate",
              "pranzerete",
              "pranzavate"
            ],
            "answer": 0
          },
          {
            "q": "Fra due giorni ___ il risultato. (tu – sapere)",
            "options": [
              "sai",
              "saprai",
              "sapevi"
            ],
            "answer": 0
          },
          {
            "q": "Lunedì ___ il nuovo lavoro. (lei – cominciare)",
            "options": [
              "comincia",
              "comincerà",
              "cominciava"
            ],
            "answer": 0
          },
          {
            "q": "Stanotte ___ dai miei. (io – dormire)",
            "options": [
              "dormo",
              "dormirò",
              "dormivo"
            ],
            "answer": 0
          },
          {
            "q": "Ad agosto ___ le vacanze. (noi – prendere)",
            "options": [
              "prendiamo",
              "prenderemo",
              "prendevamo"
            ],
            "answer": 0
          }
        ]
      },
      {
        "type": "Correzione",
        "fmt": "errore",
        "instr": "Clicca l'espressione di tempo che non va con un piano futuro.",
        "items": [
          {
            "q": "Ieri parto per Milano.",
            "wrong": "Ieri",
            "fix": "Domani"
          },
          {
            "q": "La settimana scorsa andiamo al mare.",
            "wrong": "scorsa",
            "fix": "prossima"
          },
          {
            "q": "Due giorni fa arriva mia sorella.",
            "wrong": "fa",
            "fix": "fra due giorni"
          },
          {
            "q": "L'anno passato cambio casa.",
            "wrong": "passato",
            "fix": "prossimo"
          },
          {
            "q": "Stamattina presto vedo Anna alle nove di sera.",
            "wrong": "Stamattina",
            "fix": "Stasera"
          },
          {
            "q": "Il mese scorso comincio il corso.",
            "wrong": "scorso",
            "fix": "prossimo"
          },
          {
            "q": "Poco fa parto per Napoli.",
            "wrong": "fa",
            "fix": "fra poco"
          },
          {
            "q": "Domenica passata pranziamo insieme.",
            "wrong": "passata",
            "fix": "prossima"
          },
          {
            "q": "Un'ora fa ti chiamo.",
            "wrong": "fa",
            "fix": "fra un'ora"
          },
          {
            "q": "L'estate scorsa andiamo in Grecia.",
            "wrong": "scorsa",
            "fix": "prossima"
          }
        ]
      },
      {
        "type": "Trasformazione",
        "fmt": "buco",
        "instr": "Riscrivi il piano futuro usando il presente: scegli la frase corretta.",
        "items": [
          {
            "q": "Ho intenzione di partire domani.",
            "options": [
              "Domani parto.",
              "Domani partivo.",
              "Domani sono partito."
            ],
            "answer": 0
          },
          {
            "q": "Ho intenzione di vedere Luca sabato.",
            "options": [
              "Sabato vedo Luca.",
              "Sabato vedevo Luca.",
              "Sabato ho visto Luca."
            ],
            "answer": 0
          },
          {
            "q": "Abbiamo intenzione di traslocare a giugno.",
            "options": [
              "A giugno traslochiamo.",
              "A giugno traslocavamo.",
              "A giugno abbiamo traslocato."
            ],
            "answer": 0
          },
          {
            "q": "Hanno intenzione di sposarsi in primavera.",
            "options": [
              "In primavera si sposano.",
              "In primavera si sposavano.",
              "In primavera si sono sposati."
            ],
            "answer": 0
          },
          {
            "q": "Ho intenzione di cominciare lunedì.",
            "options": [
              "Lunedì comincio.",
              "Lunedì cominciavo.",
              "Lunedì ho cominciato."
            ],
            "answer": 0
          },
          {
            "q": "Hai intenzione di uscire stasera?",
            "options": [
              "Stasera esci?",
              "Stasera uscivi?",
              "Stasera sei uscito?"
            ],
            "answer": 0
          },
          {
            "q": "Abbiamo intenzione di cenare fuori.",
            "options": [
              "Stasera ceniamo fuori.",
              "Stasera cenavamo fuori.",
              "Stasera abbiamo cenato fuori."
            ],
            "answer": 0
          },
          {
            "q": "Ha intenzione di tornare a settembre.",
            "options": [
              "A settembre torna.",
              "A settembre tornava.",
              "A settembre è tornato."
            ],
            "answer": 0
          },
          {
            "q": "Avete intenzione di studiare domani?",
            "options": [
              "Domani studiate?",
              "Domani studiavate?",
              "Domani avete studiato?"
            ],
            "answer": 0
          },
          {
            "q": "Ho intenzione di chiamarti più tardi.",
            "options": [
              "Più tardi ti chiamo.",
              "Più tardi ti chiamavo.",
              "Più tardi ti ho chiamato."
            ],
            "answer": 0
          }
        ]
      }
    ]
  },
  {
    "lvl": "a",
    "lez": [
      "A1 L23",
      "A2 L27"
    ],
    "title": "Gli avverbi di frequenza",
    "exercises": [
      {
        "type": "Riempimento",
        "fmt": "buco",
        "instr": "Scegli l'avverbio adatto alla frequenza indicata.",
        "items": [
          {
            "q": "Vado in palestra tutti i giorni: ci vado ___.",
            "options": [
              "sempre",
              "mai",
              "raramente"
            ],
            "answer": 0
          },
          {
            "q": "Non mangio carne: non la mangio ___.",
            "options": [
              "mai",
              "sempre",
              "spesso"
            ],
            "answer": 0
          },
          {
            "q": "Vado al cinema due volte a settimana: ci vado ___.",
            "options": [
              "spesso",
              "mai",
              "raramente"
            ],
            "answer": 0
          },
          {
            "q": "Bevo il caffè una volta all'anno: lo bevo ___.",
            "options": [
              "raramente",
              "spesso",
              "sempre"
            ],
            "answer": 0
          },
          {
            "q": "Di solito la domenica dormo: ___ dormo la domenica.",
            "options": [
              "di solito",
              "mai",
              "già"
            ],
            "answer": 0
          },
          {
            "q": "Ogni tanto esco la sera: esco ___.",
            "options": [
              "qualche volta",
              "sempre",
              "mai"
            ],
            "answer": 0
          },
          {
            "q": "Non sono ___ stato in Cina.",
            "options": [
              "mai",
              "sempre",
              "spesso"
            ],
            "answer": 0
          },
          {
            "q": "Faccio colazione ogni mattina: la faccio ___.",
            "options": [
              "sempre",
              "mai",
              "raramente"
            ],
            "answer": 0
          },
          {
            "q": "Guardo la TV quasi ogni sera: la guardo ___.",
            "options": [
              "spesso",
              "mai",
              "raramente"
            ],
            "answer": 0
          },
          {
            "q": "Non vado ___ in discoteca, non mi piace.",
            "options": [
              "mai",
              "sempre",
              "spesso"
            ],
            "answer": 0
          }
        ]
      },
      {
        "type": "Correzione",
        "fmt": "errore",
        "instr": "Clicca l'avverbio fuori posto o incoerente con il senso della frase.",
        "items": [
          {
            "q": "Sempre io faccio colazione al bar.",
            "wrong": "Sempre",
            "fix": "Io faccio sempre"
          },
          {
            "q": "Ho mai visto quel documentario.",
            "wrong": [
              "Ho",
              "mai"
            ],
            "fix": "Non ho mai (serve la negazione)"
          },
          {
            "q": "Lei va mai in ufficio ogni giorno.",
            "wrong": "mai",
            "fix": "sempre"
          },
          {
            "q": "Non bevo sempre alcol, non mi piace per niente.",
            "wrong": "sempre",
            "fix": "mai"
          },
          {
            "q": "Spesso non sono stato in Grecia.",
            "wrong": "Spesso",
            "fix": "Non sono mai"
          },
          {
            "q": "Raramente mangio la verdura tutti i giorni.",
            "wrong": "Raramente",
            "fix": "Sempre"
          },
          {
            "q": "Guardo raramente la TV tutte le sere.",
            "wrong": "raramente",
            "fix": "sempre"
          },
          {
            "q": "Ho sempre visitato il Giappone una sola volta.",
            "wrong": "sempre",
            "fix": "solo"
          },
          {
            "q": "Mangio mai il pesce ogni venerdì.",
            "wrong": "mai",
            "fix": "sempre"
          },
          {
            "q": "Lui non arriva spesso puntuale: è sempre in orario.",
            "wrong": "spesso",
            "fix": "mai"
          }
        ]
      },
      {
        "type": "Trasformazione",
        "fmt": "buco",
        "instr": "Metti l'avverbio al posto giusto: scegli la frase corretta.",
        "items": [
          {
            "q": "Io leggo il giornale. (sempre)",
            "options": [
              "Io leggo sempre il giornale.",
              "Io sempre leggo il giornale.",
              "Sempre io leggo il giornale."
            ],
            "answer": 0
          },
          {
            "q": "Non vado in centro. (mai)",
            "options": [
              "Non vado mai in centro.",
              "Non mai vado in centro.",
              "Mai non vado in centro."
            ],
            "answer": 0
          },
          {
            "q": "Lei arriva in ritardo. (spesso)",
            "options": [
              "Lei arriva spesso in ritardo.",
              "Lei spesso arriva in ritardo.",
              "Spesso lei arriva in ritardo."
            ],
            "answer": 0
          },
          {
            "q": "Ho visto quel film. (già)",
            "options": [
              "Ho già visto quel film.",
              "Ho visto già quel film.",
              "Già ho visto quel film."
            ],
            "answer": 0
          },
          {
            "q": "Non ho mangiato il pesce crudo. (mai)",
            "options": [
              "Non ho mai mangiato il pesce crudo.",
              "Non ho mangiato mai il pesce crudo.",
              "Mai non ho mangiato il pesce crudo."
            ],
            "answer": 0
          },
          {
            "q": "Beviamo il vino a cena. (di solito)",
            "options": [
              "Di solito beviamo il vino a cena.",
              "Beviamo di solito il vino a cena.",
              "Beviamo il vino di solito a cena."
            ],
            "answer": 0
          },
          {
            "q": "Sono andato a Parigi. (due volte)",
            "options": [
              "Sono andato due volte a Parigi.",
              "Due volte sono andato a Parigi.",
              "Sono due volte andato a Parigi."
            ],
            "answer": 0
          },
          {
            "q": "Lui dorme fino a tardi. (quasi sempre)",
            "options": [
              "Lui dorme quasi sempre fino a tardi.",
              "Lui quasi sempre dorme fino a tardi.",
              "Quasi sempre lui dorme fino a tardi."
            ],
            "answer": 0
          },
          {
            "q": "Non usciamo la sera. (quasi mai)",
            "options": [
              "Non usciamo quasi mai la sera.",
              "Non quasi mai usciamo la sera.",
              "Quasi mai non usciamo la sera."
            ],
            "answer": 0
          },
          {
            "q": "Hanno finito il lavoro. (appena)",
            "options": [
              "Hanno appena finito il lavoro.",
              "Hanno finito appena il lavoro.",
              "Appena hanno finito il lavoro."
            ],
            "answer": 0
          }
        ]
      }
    ]
  },
  {
    "lvl": "a2",
    "lez": [
      "A2 L2"
    ],
    "title": "Tu e Lei: formale e informale",
    "exercises": [
      {
        "type": "Riempimento",
        "fmt": "buco",
        "instr": "Scegli la forma adatta alla situazione formale (Lei).",
        "items": [
          {
            "q": "Buongiorno dottore, come ___?",
            "options": [
              "sta",
              "stai",
              "state"
            ],
            "answer": 0
          },
          {
            "q": "Signora, ___ un documento?",
            "options": [
              "ha",
              "hai",
              "avete"
            ],
            "answer": 0
          },
          {
            "q": "Professore, ___ ripetere per favore?",
            "options": [
              "può",
              "puoi",
              "potete"
            ],
            "answer": 0
          },
          {
            "q": "Signore, dove ___?",
            "options": [
              "abita",
              "abiti",
              "abitate"
            ],
            "answer": 0
          },
          {
            "q": "Dottoressa, ___ italiano?",
            "options": [
              "parla",
              "parli",
              "parlate"
            ],
            "answer": 0
          },
          {
            "q": "Signora, ___ bisogno di aiuto?",
            "options": [
              "ha",
              "hai",
              "avete"
            ],
            "answer": 0
          },
          {
            "q": "Ingegnere, ___ firmare qui.",
            "options": [
              "deve",
              "devi",
              "dovete"
            ],
            "answer": 0
          },
          {
            "q": "Signor Rossi, ___ un caffè?",
            "options": [
              "vuole",
              "vuoi",
              "volete"
            ],
            "answer": 0
          },
          {
            "q": "Dottore, ___ domani in ufficio?",
            "options": [
              "viene",
              "vieni",
              "venite"
            ],
            "answer": 0
          },
          {
            "q": "Signora, ___ aspettare un momento.",
            "options": [
              "deve",
              "devi",
              "dovete"
            ],
            "answer": 0
          }
        ]
      },
      {
        "type": "Correzione",
        "fmt": "errore",
        "instr": "La frase è rivolta a un cliente: clicca la parola troppo informale.",
        "items": [
          {
            "q": "Buonasera signore, come stai?",
            "wrong": "stai",
            "fix": "sta"
          },
          {
            "q": "Signora, hai una prenotazione?",
            "wrong": "hai",
            "fix": "ha"
          },
          {
            "q": "Dottore, puoi aspettare qui?",
            "wrong": "puoi",
            "fix": "può"
          },
          {
            "q": "Signor Bianchi, dove lavori?",
            "wrong": "lavori",
            "fix": "lavora"
          },
          {
            "q": "Professoressa, vuoi un tè?",
            "wrong": "vuoi",
            "fix": "vuole"
          },
          {
            "q": "Signora, devi compilare il modulo.",
            "wrong": "devi",
            "fix": "deve"
          },
          {
            "q": "Avvocato, sai il numero?",
            "wrong": "sai",
            "fix": "sa"
          },
          {
            "q": "Signore, vieni con me per favore.",
            "wrong": "vieni",
            "fix": "venga"
          },
          {
            "q": "Dottoressa, parli inglese?",
            "wrong": "parli",
            "fix": "parla"
          },
          {
            "q": "Signora, conosci questo posto?",
            "wrong": "conosci",
            "fix": "conosce"
          }
        ]
      },
      {
        "type": "Trasformazione",
        "fmt": "buco",
        "instr": "Passa dal «tu» al «Lei»: scegli la frase corretta.",
        "items": [
          {
            "q": "Come ti chiami?",
            "options": [
              "Come si chiama?",
              "Come Lei chiami?",
              "Come ti chiama?"
            ],
            "answer": 0
          },
          {
            "q": "Dove abiti?",
            "options": [
              "Dove abita?",
              "Dove abiti Lei?",
              "Dove abitate?"
            ],
            "answer": 0
          },
          {
            "q": "Hai tempo domani?",
            "options": [
              "Ha tempo domani?",
              "Hai tempo Lei?",
              "Avete tempo domani?"
            ],
            "answer": 0
          },
          {
            "q": "Puoi aiutarmi?",
            "options": [
              "Può aiutarmi?",
              "Puoi aiutarLa?",
              "Potete aiutarmi?"
            ],
            "answer": 0
          },
          {
            "q": "Vuoi un caffè?",
            "options": [
              "Vuole un caffè?",
              "Vuoi un caffè Lei?",
              "Volete un caffè?"
            ],
            "answer": 0
          },
          {
            "q": "Sei italiano?",
            "options": [
              "È italiano?",
              "Sei italiano Lei?",
              "Siete italiano?"
            ],
            "answer": 0
          },
          {
            "q": "Parli spagnolo?",
            "options": [
              "Parla spagnolo?",
              "Parli spagnolo Lei?",
              "Parlate spagnolo?"
            ],
            "answer": 0
          },
          {
            "q": "Conosci Milano?",
            "options": [
              "Conosce Milano?",
              "Conosci Milano Lei?",
              "Conoscete Milano?"
            ],
            "answer": 0
          },
          {
            "q": "Sai dov'è la stazione?",
            "options": [
              "Sa dov'è la stazione?",
              "Sai dov'è Lei?",
              "Sapete dov'è la stazione?"
            ],
            "answer": 0
          },
          {
            "q": "Devi firmare qui.",
            "options": [
              "Deve firmare qui.",
              "Devi firmare Lei qui.",
              "Dovete firmare qui."
            ],
            "answer": 0
          }
        ]
      }
    ]
  },
  {
    "lvl": "a2",
    "lez": [
      "A2 L4"
    ],
    "title": "Le preposizioni articolate",
    "exercises": [
      {
        "type": "Riempimento",
        "fmt": "buco",
        "instr": "Scegli la preposizione articolata corretta.",
        "items": [
          {
            "q": "Vado ___ supermercato.",
            "options": [
              "al",
              "allo",
              "alla"
            ],
            "answer": 0
          },
          {
            "q": "Il libro è ___ tavolo.",
            "options": [
              "sul",
              "sullo",
              "sulla"
            ],
            "answer": 0
          },
          {
            "q": "Torno ___ ufficio alle sei.",
            "options": [
              "dall'",
              "dal",
              "dallo"
            ],
            "answer": 0
          },
          {
            "q": "La chiave è ___ borsa.",
            "options": [
              "nella",
              "nel",
              "nello"
            ],
            "answer": 0
          },
          {
            "q": "Parlo ___ studenti.",
            "options": [
              "agli",
              "ai",
              "alle"
            ],
            "answer": 0
          },
          {
            "q": "Il colore ___ pareti è chiaro.",
            "options": [
              "delle",
              "dei",
              "degli"
            ],
            "answer": 0
          },
          {
            "q": "Andiamo ___ zoo domenica.",
            "options": [
              "allo",
              "al",
              "alla"
            ],
            "answer": 0
          },
          {
            "q": "Il gatto dorme ___ divano.",
            "options": [
              "sul",
              "sullo",
              "sulla"
            ],
            "answer": 0
          },
          {
            "q": "Vengo ___ stazione.",
            "options": [
              "dalla",
              "dal",
              "dallo"
            ],
            "answer": 0
          },
          {
            "q": "Metto i soldi ___ portafoglio.",
            "options": [
              "nel",
              "nello",
              "nella"
            ],
            "answer": 0
          }
        ]
      },
      {
        "type": "Correzione",
        "fmt": "errore",
        "instr": "Clicca la preposizione articolata sbagliata.",
        "items": [
          {
            "q": "Vado a il cinema stasera.",
            "wrong": [
              "a",
              "il"
            ],
            "fix": "al (a + il si fondono)"
          },
          {
            "q": "Il quaderno è su la sedia.",
            "wrong": [
              "su",
              "la"
            ],
            "fix": "sulla (su + la)"
          },
          {
            "q": "Esco da lo studio adesso.",
            "wrong": [
              "da",
              "lo"
            ],
            "fix": "dallo (da + lo)"
          },
          {
            "q": "I nomi di gli studenti sono qui.",
            "wrong": [
              "di",
              "gli"
            ],
            "fix": "degli (di + gli)"
          },
          {
            "q": "Entro in la stanza.",
            "wrong": [
              "in",
              "la"
            ],
            "fix": "nella (in + la)"
          },
          {
            "q": "Il regalo è per il bambini.",
            "wrong": "il",
            "fix": "i (per i bambini)"
          },
          {
            "q": "Scrivo a le mie amiche.",
            "wrong": [
              "a",
              "le"
            ],
            "fix": "alle (a + le)"
          },
          {
            "q": "Vengo da l'aeroporto.",
            "wrong": [
              "da",
              "l'aeroporto"
            ],
            "fix": "dall'aeroporto (da + l')"
          },
          {
            "q": "La foto è su lo scaffale.",
            "wrong": [
              "su",
              "lo"
            ],
            "fix": "sullo (su + lo)"
          },
          {
            "q": "Penso a i miei genitori.",
            "wrong": [
              "a",
              "i"
            ],
            "fix": "ai (a + i)"
          }
        ]
      },
      {
        "type": "Trasformazione",
        "fmt": "buco",
        "instr": "Unisci preposizione e articolo: scegli la forma corretta.",
        "items": [
          {
            "q": "di + il →",
            "options": [
              "del",
              "dil",
              "dello"
            ],
            "answer": 0
          },
          {
            "q": "a + lo →",
            "options": [
              "allo",
              "alo",
              "al"
            ],
            "answer": 0
          },
          {
            "q": "da + le →",
            "options": [
              "dalle",
              "dale",
              "dai"
            ],
            "answer": 0
          },
          {
            "q": "in + i →",
            "options": [
              "nei",
              "ni",
              "negli"
            ],
            "answer": 0
          },
          {
            "q": "su + l' →",
            "options": [
              "sull'",
              "sul",
              "sulla"
            ],
            "answer": 0
          },
          {
            "q": "di + gli →",
            "options": [
              "degli",
              "digli",
              "dei"
            ],
            "answer": 0
          },
          {
            "q": "a + la →",
            "options": [
              "alla",
              "ala",
              "al"
            ],
            "answer": 0
          },
          {
            "q": "da + lo →",
            "options": [
              "dallo",
              "dalo",
              "dal"
            ],
            "answer": 0
          },
          {
            "q": "in + la →",
            "options": [
              "nella",
              "nla",
              "nel"
            ],
            "answer": 0
          },
          {
            "q": "su + i →",
            "options": [
              "sui",
              "si",
              "sugli"
            ],
            "answer": 0
          }
        ]
      }
    ],
    "diag": true
  },
  {
    "lvl": "a2",
    "lez": [
      "A2 L4",
      "A2 L18"
    ],
    "title": "Modali: potere, volere, dovere",
    "exercises": [
      {
        "type": "Riempimento",
        "fmt": "buco",
        "instr": "Scegli la forma corretta del modale.",
        "items": [
          {
            "q": "Noi ___ un caffè, grazie. (volere)",
            "options": [
              "vogliamo",
              "volemo",
              "volete"
            ],
            "answer": 0
          },
          {
            "q": "Loro ___ venire alla festa? (potere)",
            "options": [
              "possono",
              "potono",
              "possiamo"
            ],
            "answer": 0
          },
          {
            "q": "Io ___ imparare l'italiano. (volere)",
            "options": [
              "voglio",
              "volio",
              "vuolo"
            ],
            "answer": 0
          },
          {
            "q": "Tu ___ aiutarmi? (potere)",
            "options": [
              "puoi",
              "poti",
              "può"
            ],
            "answer": 0
          },
          {
            "q": "Voi ___ uscire stasera? (volere)",
            "options": [
              "volete",
              "vogliete",
              "volite"
            ],
            "answer": 0
          },
          {
            "q": "Noi ___ finire il progetto. (dovere)",
            "options": [
              "dobbiamo",
              "devemo",
              "dovemo"
            ],
            "answer": 0
          },
          {
            "q": "Lui ___ parlare con te. (volere)",
            "options": [
              "vuole",
              "vole",
              "voglie"
            ],
            "answer": 0
          },
          {
            "q": "Io ___ entrare? (potere)",
            "options": [
              "posso",
              "poto",
              "puosso"
            ],
            "answer": 0
          },
          {
            "q": "Loro ___ studiare di più. (dovere)",
            "options": [
              "devono",
              "dovono",
              "dobbono"
            ],
            "answer": 0
          },
          {
            "q": "Voi ___ prenotare prima. (dovere)",
            "options": [
              "dovete",
              "devete",
              "dobbiate"
            ],
            "answer": 0
          }
        ]
      },
      {
        "type": "Correzione",
        "fmt": "errore",
        "instr": "Clicca la parola sbagliata (forma del modale o preposizione di troppo).",
        "items": [
          {
            "q": "Vogliamo di partire subito.",
            "wrong": "di",
            "fix": "(togliere)"
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
            "fix": "(togliere)"
          },
          {
            "q": "Volio un gelato.",
            "wrong": "Volio",
            "fix": "Voglio"
          },
          {
            "q": "Puoi a venire con me?",
            "wrong": "a",
            "fix": "(togliere)"
          },
          {
            "q": "Noi possiamo di aiutare.",
            "wrong": "di",
            "fix": "(togliere)"
          },
          {
            "q": "Loro pote arrivare tardi.",
            "wrong": "pote",
            "fix": "possono"
          },
          {
            "q": "Voi volite un dolce?",
            "wrong": "volite",
            "fix": "volete"
          },
          {
            "q": "Vuoi per uscire adesso?",
            "wrong": "per",
            "fix": "(togliere)"
          }
        ]
      },
      {
        "type": "Trasformazione",
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
              "Posso avere",
              "Devo avere",
              "Voglio avere"
            ],
            "answer": 0
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
              "devo",
              "voglio",
              "posso"
            ],
            "answer": 0
          },
          {
            "q": "___ aprire la finestra? Fa caldo.",
            "options": [
              "Posso",
              "Devo",
              "Voglio"
            ],
            "answer": 0
          },
          {
            "q": "Se vuoi dimagrire ___ mangiare meno.",
            "options": [
              "devi",
              "puoi",
              "vuoi"
            ],
            "answer": 0
          },
          {
            "q": "___ un gelato, ho voglia di dolce.",
            "options": [
              "Voglio",
              "Devo",
              "Posso"
            ],
            "answer": 0
          },
          {
            "q": "Scusa, ___ ripetere? Non ho capito.",
            "options": [
              "puoi",
              "devi",
              "vuoi"
            ],
            "answer": 0
          },
          {
            "q": "Domani è festa, non ___ lavorare.",
            "options": [
              "devo",
              "posso",
              "voglio"
            ],
            "answer": 0
          }
        ]
      }
    ]
  },
  {
    "lvl": "a2",
    "lez": [
      "A2 L5"
    ],
    "title": "Verbi irregolari al presente (fare, stare, dare, dire, uscire)",
    "exercises": [
      {
        "type": "Riempimento",
        "fmt": "buco",
        "instr": "Scegli la forma irregolare corretta.",
        "items": [
          {
            "q": "Io ___ colazione alle otto. (fare)",
            "options": [
              "faccio",
              "fao",
              "faco"
            ],
            "answer": 0
          },
          {
            "q": "Tu ___ bene oggi? (stare)",
            "options": [
              "stai",
              "stì",
              "stae"
            ],
            "answer": 0
          },
          {
            "q": "Lei ___ una mano a Marco. (dare)",
            "options": [
              "dà",
              "da'",
              "dai"
            ],
            "answer": 0
          },
          {
            "q": "Noi ___ sempre la verità. (dire)",
            "options": [
              "diciamo",
              "dicemo",
              "diamo"
            ],
            "answer": 0
          },
          {
            "q": "Voi ___ stasera? (uscire)",
            "options": [
              "uscite",
              "escite",
              "usciate"
            ],
            "answer": 0
          },
          {
            "q": "Loro ___ un viaggio in Italia. (fare)",
            "options": [
              "fanno",
              "fano",
              "facciono"
            ],
            "answer": 0
          },
          {
            "q": "Io ___ a casa oggi. (stare)",
            "options": [
              "sto",
              "stao",
              "stò"
            ],
            "answer": 0
          },
          {
            "q": "Tu ___ sempre le stesse cose. (dire)",
            "options": [
              "dici",
              "dii",
              "dicii"
            ],
            "answer": 0
          },
          {
            "q": "Lui ___ presto la mattina. (uscire)",
            "options": [
              "esce",
              "usce",
              "escie"
            ],
            "answer": 0
          },
          {
            "q": "Noi ___ un regalo a Lucia. (dare)",
            "options": [
              "diamo",
              "damo",
              "dava"
            ],
            "answer": 0
          }
        ]
      },
      {
        "type": "Correzione",
        "fmt": "errore",
        "instr": "Clicca il verbo irregolare sbagliato.",
        "items": [
          {
            "q": "Io fao i compiti.",
            "wrong": "fao",
            "fix": "faccio"
          },
          {
            "q": "Tu stae bene?",
            "wrong": "stae",
            "fix": "stai"
          },
          {
            "q": "Noi dicemo tutto al capo.",
            "wrong": "dicemo",
            "fix": "diciamo"
          },
          {
            "q": "Loro escano alle nove.",
            "wrong": "escano",
            "fix": "escono"
          },
          {
            "q": "Lei da un consiglio utile.",
            "wrong": "da",
            "fix": "dà"
          },
          {
            "q": "Voi facete troppo rumore.",
            "wrong": "facete",
            "fix": "fate"
          },
          {
            "q": "Io dio sempre di sì.",
            "wrong": "dio",
            "fix": "dico"
          },
          {
            "q": "Tu usci con noi?",
            "wrong": "usci",
            "fix": "esci"
          },
          {
            "q": "Noi stamo a Roma.",
            "wrong": "stamo",
            "fix": "stiamo"
          },
          {
            "q": "Loro dano una festa.",
            "wrong": "dano",
            "fix": "danno"
          }
        ]
      },
      {
        "type": "Trasformazione",
        "fmt": "buco",
        "instr": "Cambia il soggetto: scegli la forma corretta.",
        "items": [
          {
            "q": "Io faccio la spesa. → Noi ___",
            "options": [
              "facciamo",
              "fate",
              "fanno"
            ],
            "answer": 0
          },
          {
            "q": "Tu stai a casa. → Voi ___",
            "options": [
              "state",
              "stiamo",
              "stanno"
            ],
            "answer": 0
          },
          {
            "q": "Lui dice di sì. → Loro ___",
            "options": [
              "dicono",
              "diciamo",
              "dite"
            ],
            "answer": 0
          },
          {
            "q": "Noi usciamo presto. → Io ___",
            "options": [
              "esco",
              "esce",
              "esci"
            ],
            "answer": 0
          },
          {
            "q": "Voi date una mano. → Tu ___",
            "options": [
              "dai",
              "dà",
              "do"
            ],
            "answer": 0
          },
          {
            "q": "Loro fanno tardi. → Lei ___",
            "options": [
              "fa",
              "faccio",
              "fai"
            ],
            "answer": 0
          },
          {
            "q": "Io sto meglio. → Loro ___",
            "options": [
              "stanno",
              "stiamo",
              "state"
            ],
            "answer": 0
          },
          {
            "q": "Tu dici tutto. → Noi ___",
            "options": [
              "diciamo",
              "dite",
              "dicono"
            ],
            "answer": 0
          },
          {
            "q": "Lei esce con gli amici. → Voi ___",
            "options": [
              "uscite",
              "usciamo",
              "escono"
            ],
            "answer": 0
          },
          {
            "q": "Noi diamo un esame. → Lui ___",
            "options": [
              "dà",
              "do",
              "dai"
            ],
            "answer": 0
          }
        ]
      }
    ]
  },
  {
    "lvl": "a2",
    "lez": [
      "A2 L6",
      "A2 L9",
      "A2 L26"
    ],
    "title": "Il passato prossimo con avere",
    "exercises": [
      {
        "type": "Riempimento",
        "fmt": "buco",
        "instr": "Scegli il participio passato corretto.",
        "items": [
          {
            "q": "Ieri ho ___ una pizza. (mangiare)",
            "options": [
              "mangiato",
              "mangiata",
              "mangiare"
            ],
            "answer": 0
          },
          {
            "q": "Abbiamo ___ un film bellissimo. (vedere)",
            "options": [
              "visto",
              "vedato",
              "veduto"
            ],
            "answer": 0
          },
          {
            "q": "Hai ___ il libro? (leggere)",
            "options": [
              "letto",
              "leggiuto",
              "legguto"
            ],
            "answer": 0
          },
          {
            "q": "Hanno ___ la finestra. (aprire)",
            "options": [
              "aperto",
              "aprito",
              "apruto"
            ],
            "answer": 0
          },
          {
            "q": "Ho ___ una mail al capo. (scrivere)",
            "options": [
              "scritto",
              "scrivuto",
              "scriveto"
            ],
            "answer": 0
          },
          {
            "q": "Avete ___ le chiavi? (perdere)",
            "options": [
              "perso",
              "perduto",
              "perdito"
            ],
            "answer": 0
          },
          {
            "q": "Ha ___ tutto il giorno. (lavorare)",
            "options": [
              "lavorato",
              "lavorata",
              "lavorito"
            ],
            "answer": 0
          },
          {
            "q": "Abbiamo ___ un caffè. (prendere)",
            "options": [
              "preso",
              "prenduto",
              "prendito"
            ],
            "answer": 0
          },
          {
            "q": "Ho ___ la lezione. (capire)",
            "options": [
              "capito",
              "capiuto",
              "caputo"
            ],
            "answer": 0
          },
          {
            "q": "Hai ___ la porta? (chiudere)",
            "options": [
              "chiuso",
              "chiudito",
              "chiuduto"
            ],
            "answer": 0
          }
        ]
      },
      {
        "type": "Correzione",
        "fmt": "errore",
        "instr": "Clicca la parola sbagliata (ausiliare o participio).",
        "items": [
          {
            "q": "Io sono mangiato una mela.",
            "wrong": "sono",
            "fix": "ho"
          },
          {
            "q": "Noi abbiamo vedato il museo.",
            "wrong": "vedato",
            "fix": "visto"
          },
          {
            "q": "Tu hai leggiuto quel libro.",
            "wrong": "leggiuto",
            "fix": "letto"
          },
          {
            "q": "Loro sono comprato una casa.",
            "wrong": "sono",
            "fix": "hanno"
          },
          {
            "q": "Lei ha scrivuto una lettera.",
            "wrong": "scrivuto",
            "fix": "scritto"
          },
          {
            "q": "Voi siete bevuto il vino.",
            "wrong": "siete",
            "fix": "avete"
          },
          {
            "q": "Ho aprito la porta.",
            "wrong": "aprito",
            "fix": "aperto"
          },
          {
            "q": "Abbiamo prenduto il treno.",
            "wrong": "prenduto",
            "fix": "preso"
          },
          {
            "q": "Lui è studiato tutta la notte.",
            "wrong": "è",
            "fix": "ha"
          },
          {
            "q": "Hanno chiudito il negozio.",
            "wrong": "chiudito",
            "fix": "chiuso"
          }
        ]
      },
      {
        "type": "Trasformazione",
        "fmt": "buco",
        "instr": "Metti al passato con l'espressione di tempo indicata.",
        "items": [
          {
            "q": "Oggi telefono a Sara. → Ieri ___",
            "options": [
              "ho telefonato a Sara",
              "sono telefonato a Sara",
              "telefonavo a Sara"
            ],
            "answer": 0
          },
          {
            "q": "Stamattina beviamo una spremuta. → Ieri mattina ___",
            "options": [
              "abbiamo bevuto una spremuta",
              "siamo bevuti una spremuta",
              "bevevamo una spremuta"
            ],
            "answer": 0
          },
          {
            "q": "Adesso finisci il lavoro. → Un'ora fa ___",
            "options": [
              "hai finito il lavoro",
              "sei finito il lavoro",
              "finivi il lavoro"
            ],
            "answer": 0
          },
          {
            "q": "Oggi guardano la partita. → Domenica scorsa ___",
            "options": [
              "hanno guardato la partita",
              "sono guardati la partita",
              "guardavano la partita"
            ],
            "answer": 0
          },
          {
            "q": "Questa settimana studio molto. → La settimana scorsa ___",
            "options": [
              "ho studiato molto",
              "sono studiato molto",
              "studiavo molto"
            ],
            "answer": 0
          },
          {
            "q": "Oggi pulisce la casa. → Sabato scorso ___",
            "options": [
              "ha pulito la casa",
              "è pulita la casa",
              "puliva la casa"
            ],
            "answer": 0
          },
          {
            "q": "Ora prendiamo l'autobus. → Poco fa ___",
            "options": [
              "abbiamo preso l'autobus",
              "siamo presi l'autobus",
              "prendevamo l'autobus"
            ],
            "answer": 0
          },
          {
            "q": "Quest'anno vendono la macchina. → L'anno scorso ___",
            "options": [
              "hanno venduto la macchina",
              "sono venduti la macchina",
              "vendevano la macchina"
            ],
            "answer": 0
          },
          {
            "q": "Oggi ricevo un pacco. → Due giorni fa ___",
            "options": [
              "ho ricevuto un pacco",
              "sono ricevuto un pacco",
              "ricevevo un pacco"
            ],
            "answer": 0
          },
          {
            "q": "Stasera cucini tu. → Ieri sera ___",
            "options": [
              "hai cucinato tu",
              "sei cucinato tu",
              "cucinavi tu"
            ],
            "answer": 0
          }
        ]
      }
    ]
  },
  {
    "lvl": "a2",
    "lez": [
      "A2 L6",
      "A2 L9",
      "A2 L26"
    ],
    "title": "Il passato prossimo con essere",
    "exercises": [
      {
        "type": "Riempimento",
        "fmt": "buco",
        "instr": "Scegli il participio con l'accordo giusto.",
        "items": [
          {
            "q": "Maria è ___ a Roma. (andare)",
            "options": [
              "andata",
              "andato",
              "andate"
            ],
            "answer": 0
          },
          {
            "q": "I ragazzi sono ___ tardi. (arrivare)",
            "options": [
              "arrivati",
              "arrivate",
              "arrivato"
            ],
            "answer": 0
          },
          {
            "q": "Le mie amiche sono ___ ieri. (partire)",
            "options": [
              "partite",
              "partiti",
              "partita"
            ],
            "answer": 0
          },
          {
            "q": "Marco è ___ in ufficio. (restare)",
            "options": [
              "restato",
              "restata",
              "restati"
            ],
            "answer": 0
          },
          {
            "q": "Noi (donne) siamo ___ presto. (uscire)",
            "options": [
              "uscite",
              "usciti",
              "uscita"
            ],
            "answer": 0
          },
          {
            "q": "Anna è ___ alle sette. (tornare)",
            "options": [
              "tornata",
              "tornato",
              "tornate"
            ],
            "answer": 0
          },
          {
            "q": "I bambini sono ___ subito. (entrare)",
            "options": [
              "entrati",
              "entrate",
              "entrato"
            ],
            "answer": 0
          },
          {
            "q": "Lucia è ___ a casa. (rimanere)",
            "options": [
              "rimasta",
              "rimasto",
              "rimaste"
            ],
            "answer": 0
          },
          {
            "q": "Voi (ragazzi) siete ___ in ritardo? (venire)",
            "options": [
              "venuti",
              "venute",
              "venuto"
            ],
            "answer": 0
          },
          {
            "q": "Le studentesse sono ___ in classe. (scendere)",
            "options": [
              "scese",
              "scesi",
              "scesa"
            ],
            "answer": 0
          }
        ]
      },
      {
        "type": "Correzione",
        "fmt": "errore",
        "instr": "Clicca la parola sbagliata (ausiliare o accordo).",
        "items": [
          {
            "q": "Maria ha andata al mercato.",
            "wrong": "ha",
            "fix": "è"
          },
          {
            "q": "I ragazzi sono arrivate ieri.",
            "wrong": "arrivate",
            "fix": "arrivati"
          },
          {
            "q": "Anna è tornato tardi.",
            "wrong": "tornato",
            "fix": "tornata"
          },
          {
            "q": "Noi abbiamo partiti alle sei.",
            "wrong": "abbiamo",
            "fix": "siamo"
          },
          {
            "q": "Le mie amiche sono usciti insieme.",
            "wrong": "usciti",
            "fix": "uscite"
          },
          {
            "q": "Marco è rimasta a casa.",
            "wrong": "rimasta",
            "fix": "rimasto"
          },
          {
            "q": "Loro hanno venuti alla festa.",
            "wrong": "hanno",
            "fix": "sono"
          },
          {
            "q": "Lucia è entrato in ufficio.",
            "wrong": "entrato",
            "fix": "entrata"
          },
          {
            "q": "I bambini sono nate a marzo.",
            "wrong": "nate",
            "fix": "nati"
          },
          {
            "q": "Le ragazze sono scesi adesso.",
            "wrong": "scesi",
            "fix": "scese"
          }
        ]
      },
      {
        "type": "Trasformazione",
        "fmt": "buco",
        "instr": "Cambia il soggetto e accorda il participio.",
        "items": [
          {
            "q": "Paolo è andato via. → Le ragazze ___",
            "options": [
              "sono andate via",
              "sono andati via",
              "sono andata via"
            ],
            "answer": 0
          },
          {
            "q": "Anna è partita. → I miei fratelli ___",
            "options": [
              "sono partiti",
              "sono partite",
              "sono partita"
            ],
            "answer": 0
          },
          {
            "q": "I turisti sono arrivati. → La guida ___",
            "options": [
              "è arrivata",
              "è arrivati",
              "sono arrivata"
            ],
            "answer": 0
          },
          {
            "q": "Luca è uscito presto. → Noi (ragazze) ___",
            "options": [
              "siamo uscite",
              "siamo usciti",
              "siamo uscita"
            ],
            "answer": 0
          },
          {
            "q": "Le mie amiche sono tornate. → Mio padre ___",
            "options": [
              "è tornato",
              "è tornate",
              "sono tornato"
            ],
            "answer": 0
          },
          {
            "q": "Sara è rimasta a cena. → I nonni ___",
            "options": [
              "sono rimasti",
              "sono rimaste",
              "è rimasti"
            ],
            "answer": 0
          },
          {
            "q": "I colleghi sono venuti. → Mia sorella ___",
            "options": [
              "è venuta",
              "è venuti",
              "sono venuta"
            ],
            "answer": 0
          },
          {
            "q": "Il bambino è caduto. → Le bambine ___",
            "options": [
              "sono cadute",
              "sono caduti",
              "è cadute"
            ],
            "answer": 0
          },
          {
            "q": "Marta è salita in treno. → Gli studenti ___",
            "options": [
              "sono saliti",
              "sono salite",
              "è saliti"
            ],
            "answer": 0
          },
          {
            "q": "Noi (uomini) siamo entrati. → Lei ___",
            "options": [
              "è entrata",
              "è entrati",
              "sono entrata"
            ],
            "answer": 0
          }
        ]
      }
    ],
    "diag": true
  },
  {
    "lvl": "a2",
    "lez": [
      "A2 L7",
      "A2 L14"
    ],
    "title": "I verbi riflessivi",
    "exercises": [
      {
        "type": "Riempimento",
        "fmt": "buco",
        "instr": "Scegli il pronome riflessivo e la forma corretta.",
        "items": [
          {
            "q": "Io ___ alle sette. (alzarsi)",
            "options": [
              "mi alzo",
              "si alzo",
              "mi alza"
            ],
            "answer": 0
          },
          {
            "q": "Tu ___ presto? (svegliarsi)",
            "options": [
              "ti svegli",
              "si svegli",
              "ti sveglia"
            ],
            "answer": 0
          },
          {
            "q": "Lei ___ i capelli. (lavarsi)",
            "options": [
              "si lava",
              "ti lava",
              "si lavo"
            ],
            "answer": 0
          },
          {
            "q": "Noi ___ in fretta. (vestirsi)",
            "options": [
              "ci vestiamo",
              "si vestiamo",
              "ci veste"
            ],
            "answer": 0
          },
          {
            "q": "Voi ___ prima di uscire. (pettinarsi)",
            "options": [
              "vi pettinate",
              "si pettinate",
              "vi pettina"
            ],
            "answer": 0
          },
          {
            "q": "Loro ___ alle undici. (addormentarsi)",
            "options": [
              "si addormentano",
              "ci addormentano",
              "si addormenta"
            ],
            "answer": 0
          },
          {
            "q": "Io ___ Marco. (chiamarsi)",
            "options": [
              "mi chiamo",
              "si chiamo",
              "mi chiama"
            ],
            "answer": 0
          },
          {
            "q": "Tu ___ per il ritardo. (scusarsi)",
            "options": [
              "ti scusi",
              "si scusi",
              "ti scusa"
            ],
            "answer": 0
          },
          {
            "q": "Noi ___ al mare. (divertirsi)",
            "options": [
              "ci divertiamo",
              "si divertiamo",
              "ci diverte"
            ],
            "answer": 0
          },
          {
            "q": "Lui ___ la barba. (radersi)",
            "options": [
              "si rade",
              "ti rade",
              "si rado"
            ],
            "answer": 0
          }
        ]
      },
      {
        "type": "Correzione",
        "fmt": "errore",
        "instr": "Clicca il pronome o il verbo sbagliato.",
        "items": [
          {
            "q": "Io si alzo alle sei.",
            "wrong": "si",
            "fix": "mi"
          },
          {
            "q": "Tu mi svegli tardi.",
            "wrong": "mi",
            "fix": "ti"
          },
          {
            "q": "Noi si laviamo le mani.",
            "wrong": "si",
            "fix": "ci"
          },
          {
            "q": "Loro ci vestono in fretta.",
            "wrong": "ci",
            "fix": "si"
          },
          {
            "q": "Lei ti pettina ogni mattina.",
            "wrong": "ti",
            "fix": "si"
          },
          {
            "q": "Voi si riposano dopo pranzo.",
            "wrong": "si",
            "fix": "vi"
          },
          {
            "q": "Io mi chiama Anna.",
            "wrong": "chiama",
            "fix": "chiamo"
          },
          {
            "q": "Tu ti sveglia presto.",
            "wrong": "sveglia",
            "fix": "svegli"
          },
          {
            "q": "Noi ci divertono molto.",
            "wrong": "divertono",
            "fix": "divertiamo"
          },
          {
            "q": "Lui si mettono la giacca.",
            "wrong": "mettono",
            "fix": "mette"
          }
        ]
      },
      {
        "type": "Trasformazione",
        "fmt": "buco",
        "instr": "Metti al passato prossimo: attenzione all'ausiliare e all'accordo.",
        "items": [
          {
            "q": "Mi alzo presto. (io, uomo) →",
            "options": [
              "Mi sono alzato presto.",
              "Mi ho alzato presto.",
              "Mi sono alzata presto."
            ],
            "answer": 0
          },
          {
            "q": "Anna si veste in fretta. →",
            "options": [
              "Anna si è vestita in fretta.",
              "Anna si ha vestita in fretta.",
              "Anna si è vestito in fretta."
            ],
            "answer": 0
          },
          {
            "q": "I bambini si lavano le mani. →",
            "options": [
              "I bambini si sono lavati le mani.",
              "I bambini si hanno lavati le mani.",
              "I bambini si sono lavate le mani."
            ],
            "answer": 0
          },
          {
            "q": "Ci divertiamo molto. (noi, donne) →",
            "options": [
              "Ci siamo divertite molto.",
              "Ci abbiamo divertite molto.",
              "Ci siamo divertiti molto."
            ],
            "answer": 0
          },
          {
            "q": "Ti riposi un'ora. (tu, donna) →",
            "options": [
              "Ti sei riposata un'ora.",
              "Ti hai riposata un'ora.",
              "Ti sei riposato un'ora."
            ],
            "answer": 0
          },
          {
            "q": "Le ragazze si preparano. →",
            "options": [
              "Le ragazze si sono preparate.",
              "Le ragazze si hanno preparate.",
              "Le ragazze si sono preparati."
            ],
            "answer": 0
          },
          {
            "q": "Mi addormento tardi. (io, donna) →",
            "options": [
              "Mi sono addormentata tardi.",
              "Mi ho addormentata tardi.",
              "Mi sono addormentato tardi."
            ],
            "answer": 0
          },
          {
            "q": "Vi scusate con il capo. (voi, uomini) →",
            "options": [
              "Vi siete scusati con il capo.",
              "Vi avete scusati con il capo.",
              "Vi siete scusate con il capo."
            ],
            "answer": 0
          },
          {
            "q": "Marco si sveglia alle sei. →",
            "options": [
              "Marco si è svegliato alle sei.",
              "Marco si ha svegliato alle sei.",
              "Marco si è svegliata alle sei."
            ],
            "answer": 0
          },
          {
            "q": "Si trasferiscono a Milano. (loro, donne) →",
            "options": [
              "Si sono trasferite a Milano.",
              "Si hanno trasferite a Milano.",
              "Si sono trasferiti a Milano."
            ],
            "answer": 0
          }
        ]
      }
    ]
  },
  {
    "lvl": "a2",
    "lez": [
      "A2 L11"
    ],
    "title": "L'imperativo informale (tu)",
    "exercises": [
      {
        "type": "Riempimento",
        "fmt": "buco",
        "instr": "Scegli l'imperativo con «tu».",
        "items": [
          {
            "q": "___ la porta, per favore! (chiudere)",
            "options": [
              "Chiudi",
              "Chiuda",
              "Chiudo"
            ],
            "answer": 0
          },
          {
            "q": "___ più piano! (parlare)",
            "options": [
              "Parla",
              "Parli",
              "Parlo"
            ],
            "answer": 0
          },
          {
            "q": "___ questo libro, è bello! (leggere)",
            "options": [
              "Leggi",
              "Legga",
              "Leggo"
            ],
            "answer": 0
          },
          {
            "q": "___ la finestra! (aprire)",
            "options": [
              "Apri",
              "Apra",
              "Apro"
            ],
            "answer": 0
          },
          {
            "q": "___ a casa presto! (tornare)",
            "options": [
              "Torna",
              "Torni",
              "Torno"
            ],
            "answer": 0
          },
          {
            "q": "___ attenzione! (fare)",
            "options": [
              "Fa'",
              "Fai tu",
              "Faccia"
            ],
            "answer": 0
          },
          {
            "q": "___ qui un momento! (venire)",
            "options": [
              "Vieni",
              "Venga",
              "Vengo"
            ],
            "answer": 0
          },
          {
            "q": "___ tranquillo! (stare)",
            "options": [
              "Sta'",
              "Stia",
              "Sto"
            ],
            "answer": 0
          },
          {
            "q": "___ la verità! (dire)",
            "options": [
              "Di'",
              "Dica",
              "Dico"
            ],
            "answer": 0
          },
          {
            "q": "___ a destra! (girare)",
            "options": [
              "Gira",
              "Giri",
              "Giro"
            ],
            "answer": 0
          }
        ]
      },
      {
        "type": "Correzione",
        "fmt": "errore",
        "instr": "La frase è rivolta a un amico: clicca la forma sbagliata.",
        "items": [
          {
            "q": "Marco, chiuda la porta!",
            "wrong": "chiuda",
            "fix": "chiudi"
          },
          {
            "q": "Luca, parli più forte!",
            "wrong": "parli",
            "fix": "parla"
          },
          {
            "q": "Anna, legga questo!",
            "wrong": "legga",
            "fix": "leggi"
          },
          {
            "q": "Sara, venga qui!",
            "wrong": "venga",
            "fix": "vieni"
          },
          {
            "q": "Paolo, faccia presto!",
            "wrong": "faccia",
            "fix": "fa'"
          },
          {
            "q": "Giulia, dica la verità!",
            "wrong": "dica",
            "fix": "di'"
          },
          {
            "q": "Luca, stia zitto!",
            "wrong": "stia",
            "fix": "sta'"
          },
          {
            "q": "Anna, apra la finestra!",
            "wrong": "apra",
            "fix": "apri"
          },
          {
            "q": "Marco, prenda un caffè!",
            "wrong": "prenda",
            "fix": "prendi"
          },
          {
            "q": "Sara, scriva a Luca!",
            "wrong": "scriva",
            "fix": "scrivi"
          }
        ]
      },
      {
        "type": "Trasformazione",
        "fmt": "buco",
        "instr": "Trasforma il consiglio in imperativo con «tu».",
        "items": [
          {
            "q": "Devi bere più acqua. →",
            "options": [
              "Bevi più acqua!",
              "Beva più acqua!",
              "Bevete più acqua!"
            ],
            "answer": 0
          },
          {
            "q": "Devi mangiare la verdura. →",
            "options": [
              "Mangia la verdura!",
              "Mangi la verdura!",
              "Mangiate la verdura!"
            ],
            "answer": 0
          },
          {
            "q": "Devi dormire di più. →",
            "options": [
              "Dormi di più!",
              "Dorma di più!",
              "Dormite di più!"
            ],
            "answer": 0
          },
          {
            "q": "Devi finire i compiti. →",
            "options": [
              "Finisci i compiti!",
              "Finisca i compiti!",
              "Finite i compiti!"
            ],
            "answer": 0
          },
          {
            "q": "Devi prendere le medicine. →",
            "options": [
              "Prendi le medicine!",
              "Prenda le medicine!",
              "Prendete le medicine!"
            ],
            "answer": 0
          },
          {
            "q": "Devi chiamare il medico. →",
            "options": [
              "Chiama il medico!",
              "Chiami il medico!",
              "Chiamate il medico!"
            ],
            "answer": 0
          },
          {
            "q": "Devi partire subito. →",
            "options": [
              "Parti subito!",
              "Parta subito!",
              "Partite subito!"
            ],
            "answer": 0
          },
          {
            "q": "Devi scendere qui. →",
            "options": [
              "Scendi qui!",
              "Scenda qui!",
              "Scendete qui!"
            ],
            "answer": 0
          },
          {
            "q": "Devi aspettare fuori. →",
            "options": [
              "Aspetta fuori!",
              "Aspetti fuori!",
              "Aspettate fuori!"
            ],
            "answer": 0
          },
          {
            "q": "Devi salire al terzo piano. →",
            "options": [
              "Sali al terzo piano!",
              "Salga al terzo piano!",
              "Salite al terzo piano!"
            ],
            "answer": 0
          }
        ]
      }
    ]
  },
  {
    "lvl": "a2",
    "lez": [
      "A2 L12"
    ],
    "title": "L'imperativo formale (Lei) e negativo",
    "exercises": [
      {
        "type": "Riempimento",
        "fmt": "buco",
        "instr": "Scegli l'imperativo formale con «Lei».",
        "items": [
          {
            "q": "___ pure, signora! (entrare)",
            "options": [
              "Entri",
              "Entra",
              "Entrate"
            ],
            "answer": 0
          },
          {
            "q": "___ qui, prego. (firmare)",
            "options": [
              "Firmi",
              "Firma",
              "Firmate"
            ],
            "answer": 0
          },
          {
            "q": "___ un momento, per favore. (aspettare)",
            "options": [
              "Aspetti",
              "Aspetta",
              "Aspettate"
            ],
            "answer": 0
          },
          {
            "q": "___ la porta, grazie. (chiudere)",
            "options": [
              "Chiuda",
              "Chiudi",
              "Chiudete"
            ],
            "answer": 0
          },
          {
            "q": "___ pure, l'ascolto. (dire)",
            "options": [
              "Dica",
              "Di'",
              "Dite"
            ],
            "answer": 0
          },
          {
            "q": "___ con me, prego. (venire)",
            "options": [
              "Venga",
              "Vieni",
              "Venite"
            ],
            "answer": 0
          },
          {
            "q": "___ attenzione al gradino. (fare)",
            "options": [
              "Faccia",
              "Fa'",
              "Fate"
            ],
            "answer": 0
          },
          {
            "q": "___ questo modulo. (compilare)",
            "options": [
              "Compili",
              "Compila",
              "Compilate"
            ],
            "answer": 0
          },
          {
            "q": "___ tranquillo, non è grave. (stare)",
            "options": [
              "Stia",
              "Sta'",
              "State"
            ],
            "answer": 0
          },
          {
            "q": "___ a sinistra al semaforo. (girare)",
            "options": [
              "Giri",
              "Gira",
              "Girate"
            ],
            "answer": 0
          }
        ]
      },
      {
        "type": "Riempimento",
        "fmt": "buco",
        "instr": "Scegli l'imperativo negativo (con «tu» si usa NON + infinito).",
        "items": [
          {
            "q": "Marco, non ___ così forte! (parlare)",
            "options": [
              "parlare",
              "parla",
              "parli"
            ],
            "answer": 0
          },
          {
            "q": "Anna, non ___ in ritardo! (arrivare)",
            "options": [
              "arrivare",
              "arriva",
              "arrivi"
            ],
            "answer": 0
          },
          {
            "q": "Luca, non ___ la finestra! (aprire)",
            "options": [
              "aprire",
              "apri",
              "apra"
            ],
            "answer": 0
          },
          {
            "q": "Sara, non ___ troppo! (mangiare)",
            "options": [
              "mangiare",
              "mangia",
              "mangi"
            ],
            "answer": 0
          },
          {
            "q": "Paolo, non ___ adesso! (uscire)",
            "options": [
              "uscire",
              "esci",
              "esca"
            ],
            "answer": 0
          },
          {
            "q": "Giulia, non ___ quel libro! (prendere)",
            "options": [
              "prendere",
              "prendi",
              "prenda"
            ],
            "answer": 0
          },
          {
            "q": "Marco, non ___ tardi! (fare)",
            "options": [
              "fare",
              "fa'",
              "faccia"
            ],
            "answer": 0
          },
          {
            "q": "Anna, non ___ nulla! (dire)",
            "options": [
              "dire",
              "di'",
              "dica"
            ],
            "answer": 0
          },
          {
            "q": "Luca, non ___ qui! (fermarsi)",
            "options": [
              "fermarti",
              "fermati",
              "si fermi"
            ],
            "answer": 0
          },
          {
            "q": "Sara, non ___ adesso! (partire)",
            "options": [
              "partire",
              "parti",
              "parta"
            ],
            "answer": 0
          }
        ]
      },
      {
        "type": "Correzione",
        "fmt": "errore",
        "instr": "La frase è rivolta a un cliente: clicca la forma sbagliata.",
        "items": [
          {
            "q": "Signora, siediti qui!",
            "wrong": "siediti",
            "fix": "si sieda"
          },
          {
            "q": "Dottore, aspetta un momento!",
            "wrong": "aspetta",
            "fix": "aspetti"
          },
          {
            "q": "Signor Rossi, firma qui!",
            "wrong": "firma",
            "fix": "firmi"
          },
          {
            "q": "Professore, vieni con me!",
            "wrong": "vieni",
            "fix": "venga"
          },
          {
            "q": "Signora, ascolta bene!",
            "wrong": "ascolta",
            "fix": "ascolti"
          },
          {
            "q": "Dottoressa, fa' attenzione!",
            "wrong": "fa'",
            "fix": "faccia"
          },
          {
            "q": "Signore, sta' tranquillo!",
            "wrong": "sta'",
            "fix": "stia"
          },
          {
            "q": "Signora, gira a destra!",
            "wrong": "gira",
            "fix": "giri"
          },
          {
            "q": "Avvocato, prendi posto!",
            "wrong": "prendi",
            "fix": "prenda"
          },
          {
            "q": "Signor Bianchi, scusa il ritardo!",
            "wrong": "scusa",
            "fix": "scusi"
          }
        ]
      }
    ]
  },
  {
    "lvl": "a2",
    "lez": [
      "A2 L13"
    ],
    "title": "I dimostrativi: questo e quello",
    "exercises": [
      {
        "type": "Riempimento",
        "fmt": "buco",
        "instr": "Scegli la forma corretta di questo o quello.",
        "items": [
          {
            "q": "___ libro è mio. (vicino)",
            "options": [
              "Questo",
              "Questa",
              "Questi"
            ],
            "answer": 0
          },
          {
            "q": "___ ragazze sono simpatiche. (vicino)",
            "options": [
              "Queste",
              "Questi",
              "Questa"
            ],
            "answer": 0
          },
          {
            "q": "___ palazzo è antico. (lontano)",
            "options": [
              "Quel",
              "Quello",
              "Quella"
            ],
            "answer": 0
          },
          {
            "q": "___ studente è bravo. (lontano)",
            "options": [
              "Quello",
              "Quel",
              "Quelli"
            ],
            "answer": 0
          },
          {
            "q": "___ amica abita qui. (vicino)",
            "options": [
              "Quest'",
              "Questo",
              "Queste"
            ],
            "answer": 0
          },
          {
            "q": "___ scarpe sono care. (lontano)",
            "options": [
              "Quelle",
              "Quei",
              "Quegli"
            ],
            "answer": 0
          },
          {
            "q": "___ zaino è pesante. (lontano)",
            "options": [
              "Quello",
              "Quel",
              "Quella"
            ],
            "answer": 0
          },
          {
            "q": "___ ragazzi giocano bene. (lontano)",
            "options": [
              "Quei",
              "Quegli",
              "Quelle"
            ],
            "answer": 0
          },
          {
            "q": "___ alberi sono alti. (lontano)",
            "options": [
              "Quegli",
              "Quei",
              "Quelle"
            ],
            "answer": 0
          },
          {
            "q": "___ casa è grande. (vicino)",
            "options": [
              "Questa",
              "Questo",
              "Queste"
            ],
            "answer": 0
          }
        ]
      },
      {
        "type": "Correzione",
        "fmt": "errore",
        "instr": "Clicca il dimostrativo sbagliato.",
        "items": [
          {
            "q": "Questo casa è bella.",
            "wrong": "Questo",
            "fix": "Questa"
          },
          {
            "q": "Quelli libri sono nuovi.",
            "wrong": "Quelli",
            "fix": "Quei"
          },
          {
            "q": "Quello ragazzo è simpatico.",
            "wrong": "Quello",
            "fix": "Quel"
          },
          {
            "q": "Questi ragazze sono brave.",
            "wrong": "Questi",
            "fix": "Queste"
          },
          {
            "q": "Quel studente studia molto.",
            "wrong": "Quel",
            "fix": "Quello"
          },
          {
            "q": "Quei zaini sono pesanti.",
            "wrong": "Quei",
            "fix": "Quegli"
          },
          {
            "q": "Questa problema è serio.",
            "wrong": "Questa",
            "fix": "Questo"
          },
          {
            "q": "Quelle quadri sono famosi.",
            "wrong": "Quelle",
            "fix": "Quei"
          },
          {
            "q": "Quel zaino è tuo?",
            "wrong": "Quel",
            "fix": "Quello"
          },
          {
            "q": "Queste tavolo è sporco.",
            "wrong": "Queste",
            "fix": "Questo"
          }
        ]
      },
      {
        "type": "Trasformazione",
        "fmt": "buco",
        "instr": "Cambia da vicino a lontano: scegli la forma corretta.",
        "items": [
          {
            "q": "questo libro →",
            "options": [
              "quel libro",
              "quello libro",
              "quei libro"
            ],
            "answer": 0
          },
          {
            "q": "questo studente →",
            "options": [
              "quello studente",
              "quel studente",
              "quegli studente"
            ],
            "answer": 0
          },
          {
            "q": "questa casa →",
            "options": [
              "quella casa",
              "quel casa",
              "quelle casa"
            ],
            "answer": 0
          },
          {
            "q": "questi ragazzi →",
            "options": [
              "quei ragazzi",
              "quegli ragazzi",
              "quelli ragazzi"
            ],
            "answer": 0
          },
          {
            "q": "questi alberi →",
            "options": [
              "quegli alberi",
              "quei alberi",
              "quelli alberi"
            ],
            "answer": 0
          },
          {
            "q": "queste scarpe →",
            "options": [
              "quelle scarpe",
              "quei scarpe",
              "quegli scarpe"
            ],
            "answer": 0
          },
          {
            "q": "questo zaino →",
            "options": [
              "quello zaino",
              "quel zaino",
              "quegli zaino"
            ],
            "answer": 0
          },
          {
            "q": "quest'amica →",
            "options": [
              "quell'amica",
              "quella amica",
              "quel amica"
            ],
            "answer": 0
          },
          {
            "q": "questo bambino →",
            "options": [
              "quel bambino",
              "quello bambino",
              "quei bambino"
            ],
            "answer": 0
          },
          {
            "q": "questi zii →",
            "options": [
              "quegli zii",
              "quei zii",
              "quelli zii"
            ],
            "answer": 0
          }
        ]
      }
    ]
  },
  {
    "lvl": "a2",
    "lez": [
      "A2 L13"
    ],
    "title": "I comparativi",
    "exercises": [
      {
        "type": "Riempimento",
        "fmt": "buco",
        "instr": "Scegli la parola giusta per il confronto.",
        "items": [
          {
            "q": "Marco è più alto ___ Luca.",
            "options": [
              "di",
              "che",
              "come"
            ],
            "answer": 0
          },
          {
            "q": "Studiare è più utile ___ dormire.",
            "options": [
              "che",
              "di",
              "come"
            ],
            "answer": 0
          },
          {
            "q": "Anna è meno timida ___ sua sorella.",
            "options": [
              "di",
              "che",
              "come"
            ],
            "answer": 0
          },
          {
            "q": "Roma è grande ___ Milano.",
            "options": [
              "come",
              "di",
              "che"
            ],
            "answer": 0
          },
          {
            "q": "Ho più libri ___ quaderni.",
            "options": [
              "che",
              "di",
              "come"
            ],
            "answer": 0
          },
          {
            "q": "Questo film è più bello ___ quello.",
            "options": [
              "di",
              "che",
              "come"
            ],
            "answer": 0
          },
          {
            "q": "È più facile parlare ___ scrivere.",
            "options": [
              "che",
              "di",
              "come"
            ],
            "answer": 0
          },
          {
            "q": "Mio fratello è alto ___ me.",
            "options": [
              "quanto",
              "di",
              "che"
            ],
            "answer": 0
          },
          {
            "q": "Il treno è più veloce ___ l'autobus.",
            "options": [
              "dell'",
              "che l'",
              "come l'"
            ],
            "answer": 0
          },
          {
            "q": "Ci sono meno turisti ___ l'anno scorso.",
            "options": [
              "di",
              "che",
              "come"
            ],
            "answer": 0
          }
        ]
      },
      {
        "type": "Correzione",
        "fmt": "errore",
        "instr": "Clicca la parola sbagliata nel confronto.",
        "items": [
          {
            "q": "Paolo è più forte che Gianni.",
            "wrong": "che",
            "fix": "di"
          },
          {
            "q": "È più sano mangiare di bere.",
            "wrong": "di",
            "fix": "che"
          },
          {
            "q": "Sara è meno veloce che me.",
            "wrong": "che",
            "fix": "di"
          },
          {
            "q": "Ho più penne di matite.",
            "wrong": "di",
            "fix": "che"
          },
          {
            "q": "Questo quadro è più caro che quello.",
            "wrong": "che",
            "fix": "di"
          },
          {
            "q": "Napoli è calda di Bari.",
            "wrong": "di",
            "fix": "come"
          },
          {
            "q": "È meglio correre di camminare.",
            "wrong": "di",
            "fix": "che"
          },
          {
            "q": "Mio cugino è più magro che suo padre.",
            "wrong": "che",
            "fix": "di"
          },
          {
            "q": "Bevo più acqua di succo.",
            "wrong": "di",
            "fix": "che"
          },
          {
            "q": "La moto è più rumorosa che la bici.",
            "wrong": "che",
            "fix": "della"
          }
        ]
      },
      {
        "type": "Trasformazione",
        "fmt": "buco",
        "instr": "Costruisci il confronto: scegli la frase corretta.",
        "items": [
          {
            "q": "Chiara 22 anni — Elisa 30 anni (più giovane)",
            "options": [
              "Chiara è più giovane di Elisa.",
              "Chiara è più giovane che Elisa.",
              "Chiara è più giovane come Elisa."
            ],
            "answer": 0
          },
          {
            "q": "nuotare / sciare (più faticoso)",
            "options": [
              "Nuotare è più faticoso che sciare.",
              "Nuotare è più faticoso di sciare.",
              "Nuotare è più faticoso come sciare."
            ],
            "answer": 0
          },
          {
            "q": "il gatto 4 kg — il cane 4 kg (uguale)",
            "options": [
              "Il gatto pesa quanto il cane.",
              "Il gatto pesa di cane.",
              "Il gatto pesa che il cane."
            ],
            "answer": 0
          },
          {
            "q": "Firenze — Pisa (meno affollata)",
            "options": [
              "Pisa è meno affollata di Firenze.",
              "Pisa è meno affollata che Firenze.",
              "Pisa è meno affollata come Firenze."
            ],
            "answer": 0
          },
          {
            "q": "8 sedie — 4 tavoli (più)",
            "options": [
              "Ci sono più sedie che tavoli.",
              "Ci sono più sedie di tavoli.",
              "Ci sono più sedie come tavoli."
            ],
            "answer": 0
          },
          {
            "q": "cantare / ballare (meno difficile)",
            "options": [
              "Cantare è meno difficile che ballare.",
              "Cantare è meno difficile di ballare.",
              "Cantare è meno difficile come ballare."
            ],
            "answer": 0
          },
          {
            "q": "lo zio 70 anni — la zia 60 anni (più anziano)",
            "options": [
              "Lo zio è più anziano della zia.",
              "Lo zio è più anziano che la zia.",
              "Lo zio è più anziano come la zia."
            ],
            "answer": 0
          },
          {
            "q": "l'aereo / la nave (più rapido)",
            "options": [
              "L'aereo è più rapido della nave.",
              "L'aereo è più rapido che la nave.",
              "L'aereo è più rapido come la nave."
            ],
            "answer": 0
          },
          {
            "q": "Torino — Genova (piovosa uguale)",
            "options": [
              "Torino è piovosa come Genova.",
              "Torino è piovosa di Genova.",
              "Torino è piovosa che Genova."
            ],
            "answer": 0
          },
          {
            "q": "questo corso / quel corso (meno utile)",
            "options": [
              "Questo corso è meno utile di quello.",
              "Questo corso è meno utile che quello.",
              "Questo corso è meno utile come quello."
            ],
            "answer": 0
          }
        ]
      }
    ]
  },
  {
    "lvl": "a2",
    "lez": [
      "A2 L13"
    ],
    "title": "I pronomi diretti",
    "exercises": [
      {
        "type": "Riempimento",
        "fmt": "buco",
        "instr": "Scegli il pronome diretto che sostituisce la parola in corsivo.",
        "items": [
          {
            "q": "Compro il pane. → ___ compro.",
            "options": [
              "Lo",
              "La",
              "Li"
            ],
            "answer": 0
          },
          {
            "q": "Vedo Maria. → ___ vedo.",
            "options": [
              "La",
              "Lo",
              "Le"
            ],
            "answer": 0
          },
          {
            "q": "Leggo i giornali. → ___ leggo.",
            "options": [
              "Li",
              "Le",
              "Lo"
            ],
            "answer": 0
          },
          {
            "q": "Guardo le foto. → ___ guardo.",
            "options": [
              "Le",
              "Li",
              "La"
            ],
            "answer": 0
          },
          {
            "q": "Chiamo Marco. → ___ chiamo.",
            "options": [
              "Lo",
              "La",
              "Li"
            ],
            "answer": 0
          },
          {
            "q": "Prendo la macchina. → ___ prendo.",
            "options": [
              "La",
              "Lo",
              "Le"
            ],
            "answer": 0
          },
          {
            "q": "Invito i miei amici. → ___ invito.",
            "options": [
              "Li",
              "Le",
              "Lo"
            ],
            "answer": 0
          },
          {
            "q": "Conosco quelle ragazze. → ___ conosco.",
            "options": [
              "Le",
              "Li",
              "La"
            ],
            "answer": 0
          },
          {
            "q": "Bevo il caffè. → ___ bevo.",
            "options": [
              "Lo",
              "La",
              "Li"
            ],
            "answer": 0
          },
          {
            "q": "Aspetto mia sorella. → ___ aspetto.",
            "options": [
              "La",
              "Lo",
              "Le"
            ],
            "answer": 0
          }
        ]
      },
      {
        "type": "Correzione",
        "fmt": "errore",
        "instr": "Clicca il pronome diretto sbagliato.",
        "items": [
          {
            "q": "Il vino? La bevo rosso.",
            "wrong": "La",
            "fix": "Lo"
          },
          {
            "q": "Anna? Lo incontro domani.",
            "wrong": "Lo",
            "fix": "La"
          },
          {
            "q": "I quaderni? Le porto io.",
            "wrong": "Le",
            "fix": "Li"
          },
          {
            "q": "Le lettere? Li spedisco oggi.",
            "wrong": "Li",
            "fix": "Le"
          },
          {
            "q": "Paolo? La ringrazio dopo.",
            "wrong": "La",
            "fix": "Lo"
          },
          {
            "q": "La bicicletta? Lo uso ogni giorno.",
            "wrong": "Lo",
            "fix": "La"
          },
          {
            "q": "I colleghi? Le avviso subito.",
            "wrong": "Le",
            "fix": "Li"
          },
          {
            "q": "Le mie cugine? Li vedo raramente.",
            "wrong": "Li",
            "fix": "Le"
          },
          {
            "q": "Il tè? La preferisco freddo.",
            "wrong": "La",
            "fix": "Lo"
          },
          {
            "q": "Mia madre? Lo accompagno io.",
            "wrong": "Lo",
            "fix": "La"
          }
        ]
      },
      {
        "type": "Trasformazione",
        "fmt": "buco",
        "instr": "Riscrivi con il pronome diretto: scegli la frase corretta.",
        "items": [
          {
            "q": "Mangio la mela.",
            "options": [
              "La mangio.",
              "Lo mangio.",
              "Le mangio."
            ],
            "answer": 0
          },
          {
            "q": "Ascolto la radio.",
            "options": [
              "La ascolto.",
              "Lo ascolto.",
              "Li ascolto."
            ],
            "answer": 0
          },
          {
            "q": "Compriamo i biglietti.",
            "options": [
              "Li compriamo.",
              "Le compriamo.",
              "Lo compriamo."
            ],
            "answer": 0
          },
          {
            "q": "Saluto le colleghe.",
            "options": [
              "Le saluto.",
              "Li saluto.",
              "La saluto."
            ],
            "answer": 0
          },
          {
            "q": "Studio l'italiano.",
            "options": [
              "Lo studio.",
              "La studio.",
              "Li studio."
            ],
            "answer": 0
          },
          {
            "q": "Aiuto mio padre.",
            "options": [
              "Lo aiuto.",
              "La aiuto.",
              "Li aiuto."
            ],
            "answer": 0
          },
          {
            "q": "Porto le valigie.",
            "options": [
              "Le porto.",
              "Li porto.",
              "La porto."
            ],
            "answer": 0
          },
          {
            "q": "Chiamiamo i clienti.",
            "options": [
              "Li chiamiamo.",
              "Le chiamiamo.",
              "Lo chiamiamo."
            ],
            "answer": 0
          },
          {
            "q": "Cerco la chiave.",
            "options": [
              "La cerco.",
              "Lo cerco.",
              "Le cerco."
            ],
            "answer": 0
          },
          {
            "q": "Preparo i documenti.",
            "options": [
              "Li preparo.",
              "Le preparo.",
              "Lo preparo."
            ],
            "answer": 0
          }
        ]
      }
    ],
    "diag": true
  },
  {
    "lvl": "a2",
    "lez": [
      "A2 L15"
    ],
    "title": "Verbi a struttura invertita (interessare, servire, mancare, bastare)",
    "exercises": [
      {
        "type": "Riempimento",
        "fmt": "buco",
        "instr": "Scegli la forma corretta: il soggetto è la cosa, non la persona.",
        "items": [
          {
            "q": "Mi ___ molto la politica.",
            "options": [
              "interessa",
              "interessano",
              "interesso"
            ],
            "answer": 0
          },
          {
            "q": "Ti ___ questi documenti?",
            "options": [
              "servono",
              "serve",
              "servi"
            ],
            "answer": 0
          },
          {
            "q": "Le ___ la sua famiglia.",
            "options": [
              "manca",
              "mancano",
              "manco"
            ],
            "answer": 0
          },
          {
            "q": "Ci ___ dieci euro.",
            "options": [
              "bastano",
              "basta",
              "bastiamo"
            ],
            "answer": 0
          },
          {
            "q": "Vi ___ i film storici?",
            "options": [
              "interessano",
              "interessa",
              "interessate"
            ],
            "answer": 0
          },
          {
            "q": "Mi ___ una penna.",
            "options": [
              "serve",
              "servono",
              "servo"
            ],
            "answer": 0
          },
          {
            "q": "Gli ___ gli amici di Roma.",
            "options": [
              "mancano",
              "manca",
              "mancano loro"
            ],
            "answer": 0
          },
          {
            "q": "Ti ___ un'ora per finire?",
            "options": [
              "basta",
              "bastano",
              "basti"
            ],
            "answer": 0
          },
          {
            "q": "Non ci ___ questo argomento.",
            "options": [
              "interessa",
              "interessano",
              "interessiamo"
            ],
            "answer": 0
          },
          {
            "q": "Le ___ due sedie in più.",
            "options": [
              "servono",
              "serve",
              "servite"
            ],
            "answer": 0
          }
        ]
      },
      {
        "type": "Correzione",
        "fmt": "errore",
        "instr": "Clicca il verbo con l'accordo sbagliato.",
        "items": [
          {
            "q": "Mi interessano la musica classica.",
            "wrong": "interessano",
            "fix": "interessa"
          },
          {
            "q": "Ti serve le chiavi di casa?",
            "wrong": "serve",
            "fix": "servono"
          },
          {
            "q": "Le mancano la sua città.",
            "wrong": "mancano",
            "fix": "manca"
          },
          {
            "q": "Ci basta cinque euro.",
            "wrong": "basta",
            "fix": "bastano"
          },
          {
            "q": "Vi interessa le mostre d'arte?",
            "wrong": "interessa",
            "fix": "interessano"
          },
          {
            "q": "Mi servono una firma.",
            "wrong": "servono",
            "fix": "serve"
          },
          {
            "q": "Gli manca i vecchi colleghi.",
            "wrong": "manca",
            "fix": "mancano"
          },
          {
            "q": "Ti bastano mezz'ora?",
            "wrong": "bastano",
            "fix": "basta"
          },
          {
            "q": "Non ci interessano quel tema.",
            "wrong": "interessano",
            "fix": "interessa"
          },
          {
            "q": "Le serve tre bicchieri.",
            "wrong": "serve",
            "fix": "servono"
          }
        ]
      },
      {
        "type": "Trasformazione",
        "fmt": "buco",
        "instr": "Riscrivi con la struttura invertita: scegli la frase corretta.",
        "items": [
          {
            "q": "Ho bisogno di un martello.",
            "options": [
              "Mi serve un martello.",
              "Mi servono un martello.",
              "Io servo un martello."
            ],
            "answer": 0
          },
          {
            "q": "Abbiamo bisogno di più tempo.",
            "options": [
              "Ci serve più tempo.",
              "Ci servono più tempo.",
              "Noi serviamo più tempo."
            ],
            "answer": 0
          },
          {
            "q": "Sento la mancanza di mia nonna.",
            "options": [
              "Mi manca mia nonna.",
              "Mi mancano mia nonna.",
              "Io manco mia nonna."
            ],
            "answer": 0
          },
          {
            "q": "Trova interessante l'archeologia.",
            "options": [
              "Gli interessa l'archeologia.",
              "Gli interessano l'archeologia.",
              "Lui interessa l'archeologia."
            ],
            "answer": 0
          },
          {
            "q": "Trenta euro sono sufficienti per loro.",
            "options": [
              "Gli bastano trenta euro.",
              "Gli basta trenta euro.",
              "Loro bastano trenta euro."
            ],
            "answer": 0
          },
          {
            "q": "Hai bisogno di un consiglio?",
            "options": [
              "Ti serve un consiglio?",
              "Ti servono un consiglio?",
              "Tu servi un consiglio?"
            ],
            "answer": 0
          },
          {
            "q": "Sentiamo la mancanza delle montagne.",
            "options": [
              "Ci mancano le montagne.",
              "Ci manca le montagne.",
              "Noi manchiamo le montagne."
            ],
            "answer": 0
          },
          {
            "q": "Trovate interessanti i documentari?",
            "options": [
              "Vi interessano i documentari?",
              "Vi interessa i documentari?",
              "Voi interessate i documentari?"
            ],
            "answer": 0
          },
          {
            "q": "Dieci minuti sono sufficienti per lui.",
            "options": [
              "Gli bastano dieci minuti.",
              "Gli basta dieci minuti.",
              "Lui basta dieci minuti."
            ],
            "answer": 0
          },
          {
            "q": "Ho bisogno di scarpe nuove.",
            "options": [
              "Mi servono scarpe nuove.",
              "Mi serve scarpe nuove.",
              "Io servo scarpe nuove."
            ],
            "answer": 0
          }
        ]
      }
    ]
  },
  {
    "lvl": "a2",
    "lez": [
      "A2 L16"
    ],
    "title": "I connettivi di base (e, ma, o, perché)",
    "exercises": [
      {
        "type": "Riempimento",
        "fmt": "buco",
        "instr": "Scegli il connettivo adatto al senso.",
        "items": [
          {
            "q": "Sono stanco ___ vado a dormire.",
            "options": [
              "e",
              "ma",
              "o"
            ],
            "answer": 0
          },
          {
            "q": "Vorrei uscire ___ piove.",
            "options": [
              "ma",
              "e",
              "perché"
            ],
            "answer": 0
          },
          {
            "q": "Prendi il tè ___ il caffè?",
            "options": [
              "o",
              "e",
              "ma"
            ],
            "answer": 0
          },
          {
            "q": "Resto a casa ___ sono malato.",
            "options": [
              "perché",
              "ma",
              "o"
            ],
            "answer": 0
          },
          {
            "q": "Studio italiano ___ mi piace molto.",
            "options": [
              "perché",
              "ma",
              "o"
            ],
            "answer": 0
          },
          {
            "q": "Lei parla inglese ___ francese.",
            "options": [
              "e",
              "ma",
              "perché"
            ],
            "answer": 0
          },
          {
            "q": "Vorrei aiutarti ___ non ho tempo.",
            "options": [
              "ma",
              "e",
              "perché"
            ],
            "answer": 0
          },
          {
            "q": "Andiamo al cinema ___ a teatro?",
            "options": [
              "o",
              "e",
              "ma"
            ],
            "answer": 0
          },
          {
            "q": "Ho mangiato ___ avevo fame.",
            "options": [
              "perché",
              "ma",
              "o"
            ],
            "answer": 0
          },
          {
            "q": "Il film è lungo ___ interessante.",
            "options": [
              "ma",
              "o",
              "perché"
            ],
            "answer": 0
          }
        ]
      },
      {
        "type": "Correzione",
        "fmt": "errore",
        "instr": "Clicca il connettivo che non ha senso nella frase.",
        "items": [
          {
            "q": "Ho sonno ma vado a letto.",
            "wrong": "ma",
            "fix": "quindi/e"
          },
          {
            "q": "Volevo telefonare e non avevo credito.",
            "wrong": "e",
            "fix": "ma"
          },
          {
            "q": "Salto la cena ma non ho fame.",
            "wrong": "ma",
            "fix": "perché"
          },
          {
            "q": "Ho freddo perché apro la finestra.",
            "wrong": "perché",
            "fix": "ma"
          },
          {
            "q": "È presto e sono già stanco.",
            "wrong": "e",
            "fix": "ma"
          },
          {
            "q": "Mi alleno ogni giorno ma voglio migliorare.",
            "wrong": "ma",
            "fix": "perché"
          },
          {
            "q": "Il biglietto costa poco ma non lo prendo.",
            "wrong": "ma",
            "fix": "quindi"
          },
          {
            "q": "Nevica e vado in bici lo stesso.",
            "wrong": "e",
            "fix": "ma"
          },
          {
            "q": "Non rispondo o sono in riunione.",
            "wrong": "o",
            "fix": "perché"
          },
          {
            "q": "Suona il piano ma la chitarra.",
            "wrong": "ma",
            "fix": "e"
          }
        ]
      },
      {
        "type": "Trasformazione",
        "fmt": "buco",
        "instr": "Unisci le due frasi: scegli la versione corretta.",
        "items": [
          {
            "q": "Ho sete. Bevo un'aranciata.",
            "options": [
              "Ho sete e bevo un'aranciata.",
              "Ho sete ma bevo un'aranciata.",
              "Ho sete o bevo un'aranciata."
            ],
            "answer": 0
          },
          {
            "q": "Volevo venire. Ero occupato.",
            "options": [
              "Volevo venire ma ero occupato.",
              "Volevo venire e ero occupato.",
              "Volevo venire perché ero occupato."
            ],
            "answer": 0
          },
          {
            "q": "Non esco. Fa troppo freddo.",
            "options": [
              "Non esco perché fa troppo freddo.",
              "Non esco ma fa troppo freddo.",
              "Non esco o fa troppo freddo."
            ],
            "answer": 0
          },
          {
            "q": "Preferisci il mare? Preferisci la montagna?",
            "options": [
              "Preferisci il mare o la montagna?",
              "Preferisci il mare e la montagna?",
              "Preferisci il mare ma la montagna?"
            ],
            "answer": 0
          },
          {
            "q": "Ho finito. Posso uscire.",
            "options": [
              "Ho finito e posso uscire.",
              "Ho finito ma posso uscire.",
              "Ho finito o posso uscire."
            ],
            "answer": 0
          },
          {
            "q": "Il corso è utile. Costa molto.",
            "options": [
              "Il corso è utile ma costa molto.",
              "Il corso è utile e costa molto.",
              "Il corso è utile perché costa molto."
            ],
            "answer": 0
          },
          {
            "q": "Studio la sera. Lavoro di giorno.",
            "options": [
              "Studio la sera perché lavoro di giorno.",
              "Studio la sera ma lavoro di giorno.",
              "Studio la sera o lavoro di giorno."
            ],
            "answer": 0
          },
          {
            "q": "Vuoi il rosso? Vuoi il blu?",
            "options": [
              "Vuoi il rosso o il blu?",
              "Vuoi il rosso e il blu?",
              "Vuoi il rosso perché il blu?"
            ],
            "answer": 0
          },
          {
            "q": "Mi piace cucinare. Mi piace mangiare.",
            "options": [
              "Mi piace cucinare e mangiare.",
              "Mi piace cucinare ma mangiare.",
              "Mi piace cucinare o mangiare."
            ],
            "answer": 0
          },
          {
            "q": "Non compro la giacca. È troppo cara.",
            "options": [
              "Non compro la giacca perché è troppo cara.",
              "Non compro la giacca ma è troppo cara.",
              "Non compro la giacca e è troppo cara."
            ],
            "answer": 0
          }
        ]
      }
    ]
  },
  {
    "lvl": "a2",
    "lez": [
      "A2 L18"
    ],
    "title": "Bisogna (impersonale)",
    "exercises": [
      {
        "type": "Riempimento",
        "fmt": "buco",
        "instr": "Scegli la forma corretta dell'espressione impersonale.",
        "items": [
          {
            "q": "___ prenotare in anticipo.",
            "options": [
              "Bisogna",
              "Bisognano",
              "Bisogno"
            ],
            "answer": 0
          },
          {
            "q": "Per entrare ___ mostrare il documento.",
            "options": [
              "bisogna",
              "bisognano",
              "bisogni"
            ],
            "answer": 0
          },
          {
            "q": "___ arrivare puntuali alla riunione.",
            "options": [
              "Bisogna",
              "Bisognano",
              "Bisogniamo"
            ],
            "answer": 0
          },
          {
            "q": "Non ___ preoccuparsi troppo.",
            "options": [
              "bisogna",
              "bisognano",
              "bisogni"
            ],
            "answer": 0
          },
          {
            "q": "___ studiare ogni giorno.",
            "options": [
              "Bisogna",
              "Bisognano",
              "Bisogno"
            ],
            "answer": 0
          },
          {
            "q": "Per guidare ___ avere la patente.",
            "options": [
              "bisogna",
              "bisognano",
              "bisogniamo"
            ],
            "answer": 0
          },
          {
            "q": "___ chiamare prima di passare.",
            "options": [
              "Bisogna",
              "Bisognano",
              "Bisogni"
            ],
            "answer": 0
          },
          {
            "q": "Non ___ fumare qui.",
            "options": [
              "bisogna",
              "bisognano",
              "bisogniamo"
            ],
            "answer": 0
          },
          {
            "q": "___ pagare alla cassa.",
            "options": [
              "Bisogna",
              "Bisognano",
              "Bisogno"
            ],
            "answer": 0
          },
          {
            "q": "Per iscriversi ___ compilare il modulo.",
            "options": [
              "bisogna",
              "bisognano",
              "bisogni"
            ],
            "answer": 0
          }
        ]
      },
      {
        "type": "Correzione",
        "fmt": "errore",
        "instr": "Clicca la parola sbagliata (bisogna è invariabile e regge l'infinito).",
        "items": [
          {
            "q": "Bisognano confermare la prenotazione.",
            "wrong": "Bisognano",
            "fix": "Bisogna"
          },
          {
            "q": "Bisogna arrivi puntuale.",
            "wrong": "arrivi",
            "fix": "arrivare"
          },
          {
            "q": "Noi bisogniamo ripassare la lezione.",
            "wrong": "bisogniamo",
            "fix": "bisogna"
          },
          {
            "q": "Bisogna di consegnare il modulo.",
            "wrong": "di",
            "fix": "(togliere)"
          },
          {
            "q": "Bisognano allacciare le cinture.",
            "wrong": "Bisognano",
            "fix": "Bisogna"
          },
          {
            "q": "Io bisogno rientrare adesso.",
            "wrong": "bisogno",
            "fix": "devo"
          },
          {
            "q": "Bisogna a controllare i documenti.",
            "wrong": "a",
            "fix": "(togliere)"
          },
          {
            "q": "Bisogni rispondere entro venerdì.",
            "wrong": "Bisogni",
            "fix": "Bisogna"
          },
          {
            "q": "Bisogna scendiamo alla prossima.",
            "wrong": "scendiamo",
            "fix": "scendere"
          },
          {
            "q": "Voi bisognate consegnare il compito.",
            "wrong": "bisognate",
            "fix": "dovete"
          }
        ]
      },
      {
        "type": "Trasformazione",
        "fmt": "buco",
        "instr": "Rendi impersonale la frase: scegli la versione corretta.",
        "items": [
          {
            "q": "Devi timbrare il biglietto.",
            "options": [
              "Bisogna timbrare il biglietto.",
              "Bisogni timbrare il biglietto.",
              "Bisognano timbrare il biglietto."
            ],
            "answer": 0
          },
          {
            "q": "Dobbiamo spegnere il telefono.",
            "options": [
              "Bisogna spegnere il telefono.",
              "Bisogniamo spegnere il telefono.",
              "Bisognano spegnere il telefono."
            ],
            "answer": 0
          },
          {
            "q": "Dovete togliere le scarpe.",
            "options": [
              "Bisogna togliere le scarpe.",
              "Bisognate togliere le scarpe.",
              "Bisognano togliere le scarpe."
            ],
            "answer": 0
          },
          {
            "q": "Devono presentare la domanda.",
            "options": [
              "Bisogna presentare la domanda.",
              "Bisognano presentare la domanda.",
              "Bisogni presentare la domanda."
            ],
            "answer": 0
          },
          {
            "q": "Devi indossare il casco.",
            "options": [
              "Bisogna indossare il casco.",
              "Bisogni indossare il casco.",
              "Bisogna di indossare il casco."
            ],
            "answer": 0
          },
          {
            "q": "Non devi correre in corsia.",
            "options": [
              "Non bisogna correre in corsia.",
              "Non bisogni correre in corsia.",
              "Non bisognano correre in corsia."
            ],
            "answer": 0
          },
          {
            "q": "Dobbiamo firmare il registro.",
            "options": [
              "Bisogna firmare il registro.",
              "Bisogniamo firmare il registro.",
              "Bisogna di firmare il registro."
            ],
            "answer": 0
          },
          {
            "q": "Devi rispettare gli orari.",
            "options": [
              "Bisogna rispettare gli orari.",
              "Bisogni rispettare gli orari.",
              "Bisogna rispetti gli orari."
            ],
            "answer": 0
          },
          {
            "q": "Dovete lasciare i bagagli qui.",
            "options": [
              "Bisogna lasciare i bagagli qui.",
              "Bisognate lasciare i bagagli qui.",
              "Bisogna lasciate i bagagli qui."
            ],
            "answer": 0
          },
          {
            "q": "Devono avvisare in anticipo.",
            "options": [
              "Bisogna avvisare in anticipo.",
              "Bisognano avvisare in anticipo.",
              "Bisogna avvisano in anticipo."
            ],
            "answer": 0
          }
        ]
      }
    ]
  },
  {
    "lvl": "a2",
    "lez": [
      "A2 L21"
    ],
    "title": "Le richieste cortesi (vorrei, potrei, dovrei)",
    "exercises": [
      {
        "type": "Riempimento",
        "fmt": "buco",
        "instr": "Scegli la forma di cortesia adatta.",
        "items": [
          {
            "q": "___ un caffè, per favore.",
            "options": [
              "Vorrei",
              "Voglio",
              "Vorrebbe"
            ],
            "answer": 0
          },
          {
            "q": "___ lasciare un messaggio?",
            "options": [
              "Potrei",
              "Posso io",
              "Vorrebbe io"
            ],
            "answer": 0
          },
          {
            "q": "___ parlare con il direttore?",
            "options": [
              "Potrei",
              "Voglio",
              "Devo io"
            ],
            "answer": 0
          },
          {
            "q": "___ prenotare un tavolo per due.",
            "options": [
              "Vorrei",
              "Voglio",
              "Vorrebbero"
            ],
            "answer": 0
          },
          {
            "q": "Scusi, mi ___ aiutare?",
            "options": [
              "potrebbe",
              "può lei",
              "vorrebbe io"
            ],
            "answer": 0
          },
          {
            "q": "___ chiedere un'informazione.",
            "options": [
              "Vorrei",
              "Voglio",
              "Vorrebbe"
            ],
            "answer": 0
          },
          {
            "q": "Le ___ se apro la porta?",
            "options": [
              "dispiace",
              "dispiacerebbe io",
              "dispiaci"
            ],
            "answer": 0
          },
          {
            "q": "___ sapere l'orario del treno.",
            "options": [
              "Vorrei",
              "Voglio",
              "Vorresti"
            ],
            "answer": 0
          },
          {
            "q": "___ ripetere più lentamente?",
            "options": [
              "Potrebbe",
              "Puoi lei",
              "Vorrei lei"
            ],
            "answer": 0
          },
          {
            "q": "Ti ___ se chiudo la finestra?",
            "options": [
              "dispiace",
              "dispiaci",
              "dispiacete"
            ],
            "answer": 0
          }
        ]
      },
      {
        "type": "Correzione",
        "fmt": "errore",
        "instr": "La richiesta è troppo diretta: clicca la parola da rendere cortese.",
        "items": [
          {
            "q": "Voglio un bicchiere d'acqua.",
            "wrong": "Voglio",
            "fix": "Vorrei"
          },
          {
            "q": "Devi aprirmi la porta.",
            "wrong": "Devi",
            "fix": "Potrebbe"
          },
          {
            "q": "Dammi il conto.",
            "wrong": "Dammi",
            "fix": "Mi darebbe"
          },
          {
            "q": "Voglio prenotare un tavolo.",
            "wrong": "Voglio",
            "fix": "Vorrei"
          },
          {
            "q": "Devi ripetere più piano.",
            "wrong": "Devi",
            "fix": "Potrebbe"
          },
          {
            "q": "Voglio sapere il prezzo.",
            "wrong": "Voglio",
            "fix": "Vorrei"
          },
          {
            "q": "Aiutami subito, per favore.",
            "wrong": "Aiutami",
            "fix": "Mi potrebbe aiutare"
          },
          {
            "q": "Voglio due biglietti.",
            "wrong": "Voglio",
            "fix": "Vorrei"
          },
          {
            "q": "Devi chiamare un taxi per me.",
            "wrong": "Devi",
            "fix": "Potrebbe"
          },
          {
            "q": "Voglio parlare con il responsabile.",
            "wrong": "Voglio",
            "fix": "Vorrei"
          }
        ]
      },
      {
        "type": "Trasformazione",
        "fmt": "buco",
        "instr": "Rendi cortese la richiesta: scegli la versione corretta.",
        "items": [
          {
            "q": "Voglio un tè.",
            "options": [
              "Vorrei un tè, per favore.",
              "Vorrebbe un tè, per favore.",
              "Volerei un tè, per favore."
            ],
            "answer": 0
          },
          {
            "q": "Puoi chiudere la porta?",
            "options": [
              "Potrebbe chiudere la porta?",
              "Potresti lei chiudere la porta?",
              "Vorrebbe io chiudere la porta?"
            ],
            "answer": 0
          },
          {
            "q": "Voglio due caffè.",
            "options": [
              "Vorrei due caffè.",
              "Vorrebbero due caffè.",
              "Voglierei due caffè."
            ],
            "answer": 0
          },
          {
            "q": "Mi dai il menù?",
            "options": [
              "Mi darebbe il menù?",
              "Mi darei il menù?",
              "Mi daresti lei il menù?"
            ],
            "answer": 0
          },
          {
            "q": "Devo parlare con lei.",
            "options": [
              "Dovrei parlare con lei.",
              "Doverei parlare con lei.",
              "Dovrebbe io parlare con lei."
            ],
            "answer": 0
          },
          {
            "q": "Apri la finestra.",
            "options": [
              "Potrebbe aprire la finestra?",
              "Potrei lei aprire la finestra?",
              "Vorrei lei aprire la finestra?"
            ],
            "answer": 0
          },
          {
            "q": "Voglio prenotare per sabato.",
            "options": [
              "Vorrei prenotare per sabato.",
              "Vorrebbe prenotare per sabato.",
              "Vorremmo io prenotare per sabato."
            ],
            "answer": 0
          },
          {
            "q": "Ripeti l'indirizzo.",
            "options": [
              "Potrebbe ripetere l'indirizzo?",
              "Potrei ripetere lei l'indirizzo?",
              "Dovrei lei ripetere l'indirizzo?"
            ],
            "answer": 0
          },
          {
            "q": "Voglio un'informazione.",
            "options": [
              "Vorrei un'informazione.",
              "Vorrebbe un'informazione.",
              "Volerei un'informazione."
            ],
            "answer": 0
          },
          {
            "q": "Chiama un taxi.",
            "options": [
              "Potrebbe chiamare un taxi?",
              "Potrei chiamare lei un taxi?",
              "Vorrebbe io chiamare un taxi?"
            ],
            "answer": 0
          }
        ]
      }
    ]
  },
  {
    "lvl": "a2",
    "lez": [
      "A2 L28"
    ],
    "title": "Sapere e potere",
    "exercises": [
      {
        "type": "Riempimento",
        "fmt": "buco",
        "instr": "Scegli tra sapere (capacità appresa) e potere (possibilità).",
        "items": [
          {
            "q": "___ nuotare molto bene. (io)",
            "options": [
              "So",
              "Posso",
              "Sono"
            ],
            "answer": 0
          },
          {
            "q": "Oggi non ___ venire, ho la febbre. (io)",
            "options": [
              "posso",
              "so",
              "potrei"
            ],
            "answer": 0
          },
          {
            "q": "___ parlare tre lingue. (lei)",
            "options": [
              "Sa",
              "Può",
              "Sta"
            ],
            "answer": 0
          },
          {
            "q": "Con questo rumore non ___ sentirti. (io)",
            "options": [
              "posso",
              "so",
              "sono"
            ],
            "answer": 0
          },
          {
            "q": "___ guidare la moto? (tu)",
            "options": [
              "Sai",
              "Puoi",
              "Stai"
            ],
            "answer": 0
          },
          {
            "q": "Non ___ uscire, sta piovendo. (noi)",
            "options": [
              "possiamo",
              "sappiamo",
              "siamo"
            ],
            "answer": 0
          },
          {
            "q": "___ suonare il pianoforte. (loro)",
            "options": [
              "Sanno",
              "Possono",
              "Stanno"
            ],
            "answer": 0
          },
          {
            "q": "Scusi, ___ dirmi dov'è la stazione? (lei formale)",
            "options": [
              "può",
              "sa fare",
              "potrebbe sapere"
            ],
            "answer": 0
          },
          {
            "q": "Non ___ cucinare, non ho mai imparato. (io)",
            "options": [
              "so",
              "posso",
              "sono"
            ],
            "answer": 0
          },
          {
            "q": "___ entrare? La porta è aperta. (io)",
            "options": [
              "Posso",
              "So",
              "Sto"
            ],
            "answer": 0
          }
        ]
      },
      {
        "type": "Correzione",
        "fmt": "errore",
        "instr": "Clicca il verbo sbagliato tra sapere e potere.",
        "items": [
          {
            "q": "Posso nuotare da quando ero bambino.",
            "wrong": "Posso",
            "fix": "So"
          },
          {
            "q": "Oggi non so venire, sono impegnato.",
            "wrong": "so",
            "fix": "posso"
          },
          {
            "q": "Lei può parlare cinese perfettamente.",
            "wrong": "può",
            "fix": "sa"
          },
          {
            "q": "Con questa nebbia non so vedere niente.",
            "wrong": "so",
            "fix": "posso"
          },
          {
            "q": "Sai uscire stasera? Hai tempo?",
            "wrong": "Sai",
            "fix": "Puoi"
          },
          {
            "q": "Non possiamo cucinare, non abbiamo imparato.",
            "wrong": "possiamo",
            "fix": "sappiamo"
          },
          {
            "q": "Loro possono suonare la chitarra da anni.",
            "wrong": "possono",
            "fix": "sanno"
          },
          {
            "q": "Non so entrare, la porta è chiusa a chiave.",
            "wrong": "so",
            "fix": "posso"
          },
          {
            "q": "Puoi guidare? Hai la patente?",
            "wrong": "Puoi",
            "fix": "Sai"
          },
          {
            "q": "So aiutarti oggi, sono libero.",
            "wrong": "So",
            "fix": "Posso"
          }
        ]
      },
      {
        "type": "Trasformazione",
        "fmt": "buco",
        "instr": "Scegli la frase che esprime il senso indicato.",
        "items": [
          {
            "q": "Ha imparato a sciare. (capacità)",
            "options": [
              "Sa sciare.",
              "Può sciare.",
              "Sta sciando."
            ],
            "answer": 0
          },
          {
            "q": "Ha un impegno e non è libero. (possibilità)",
            "options": [
              "Non può venire.",
              "Non sa venire.",
              "Non è venire."
            ],
            "answer": 0
          },
          {
            "q": "Ha studiato il tedesco per anni. (capacità)",
            "options": [
              "Sa il tedesco.",
              "Può il tedesco.",
              "Sta il tedesco."
            ],
            "answer": 0
          },
          {
            "q": "La finestra è bloccata. (possibilità)",
            "options": [
              "Non posso aprirla.",
              "Non so aprirla.",
              "Non sono aprirla."
            ],
            "answer": 0
          },
          {
            "q": "Non ha mai imparato a cucinare. (capacità)",
            "options": [
              "Non sa cucinare.",
              "Non può cucinare.",
              "Non è cucinare."
            ],
            "answer": 0
          },
          {
            "q": "Oggi è libero tutto il giorno. (possibilità)",
            "options": [
              "Può uscire.",
              "Sa uscire.",
              "È uscire."
            ],
            "answer": 0
          },
          {
            "q": "Ha preso la patente. (capacità)",
            "options": [
              "Sa guidare.",
              "Può guidare.",
              "Sta guidare."
            ],
            "answer": 0
          },
          {
            "q": "Il negozio è chiuso. (possibilità)",
            "options": [
              "Non possiamo comprare niente.",
              "Non sappiamo comprare niente.",
              "Non siamo comprare niente."
            ],
            "answer": 0
          },
          {
            "q": "Ha frequentato un corso di nuoto. (capacità)",
            "options": [
              "Sa nuotare.",
              "Può nuotare.",
              "Sta nuotare."
            ],
            "answer": 0
          },
          {
            "q": "Ha terminato il turno prima. (possibilità)",
            "options": [
              "Può rientrare a casa.",
              "Sa rientrare a casa.",
              "È rientrare a casa."
            ],
            "answer": 0
          }
        ]
      }
    ]
  },
  {
    "lvl": "b1",
    "lez": [
      "B1 L4"
    ],
    "title": "Il partitivo",
    "exercises": [
      {
        "type": "Riempimento",
        "fmt": "buco",
        "instr": "Scegli il partitivo corretto.",
        "items": [
          {
            "q": "Compro ___ pane.",
            "options": [
              "del",
              "dei",
              "della"
            ],
            "answer": 0
          },
          {
            "q": "Vorrei ___ acqua.",
            "options": [
              "dell'",
              "del",
              "delle"
            ],
            "answer": 0
          },
          {
            "q": "Ho comprato ___ mele.",
            "options": [
              "delle",
              "dei",
              "degli"
            ],
            "answer": 0
          },
          {
            "q": "Servono ___ zucchero e ___ uova.",
            "options": [
              "dello / delle",
              "del / dei",
              "della / degli"
            ],
            "answer": 0
          },
          {
            "q": "Mangio ___ formaggio.",
            "options": [
              "del",
              "della",
              "dei"
            ],
            "answer": 0
          },
          {
            "q": "Ci sono ___ studenti in aula.",
            "options": [
              "degli",
              "dei",
              "delle"
            ],
            "answer": 0
          },
          {
            "q": "Prendo ___ latte.",
            "options": [
              "del",
              "dello",
              "della"
            ],
            "answer": 0
          },
          {
            "q": "Metti ___ olio nell'insalata.",
            "options": [
              "dell'",
              "del",
              "dello"
            ],
            "answer": 0
          },
          {
            "q": "Ho visto ___ amici ieri.",
            "options": [
              "degli",
              "dei",
              "delle"
            ],
            "answer": 0
          },
          {
            "q": "Vorrei ___ patate, per favore.",
            "options": [
              "delle",
              "dei",
              "degli"
            ],
            "answer": 0
          }
        ]
      },
      {
        "type": "Correzione",
        "fmt": "errore",
        "instr": "Clicca il partitivo sbagliato.",
        "items": [
          {
            "q": "Compro dei pane fresco.",
            "wrong": "dei",
            "fix": "del"
          },
          {
            "q": "Vorrei della acqua naturale.",
            "wrong": "della",
            "fix": "dell'"
          },
          {
            "q": "Ho preso dei mele rosse.",
            "wrong": "dei",
            "fix": "delle"
          },
          {
            "q": "Serve del zucchero di canna.",
            "wrong": "del",
            "fix": "dello"
          },
          {
            "q": "Ci sono dei studenti stranieri.",
            "wrong": "dei",
            "fix": "degli"
          },
          {
            "q": "Metti del olio d'oliva.",
            "wrong": "del",
            "fix": "dell'"
          },
          {
            "q": "Ho comprato della patate.",
            "wrong": "della",
            "fix": "delle"
          },
          {
            "q": "Prendo della latte fresco.",
            "wrong": "della",
            "fix": "del"
          },
          {
            "q": "Vedo dei amiche in piazza.",
            "wrong": "dei",
            "fix": "delle"
          },
          {
            "q": "Aggiungi dei sale.",
            "wrong": "dei",
            "fix": "del"
          }
        ]
      },
      {
        "type": "Trasformazione",
        "fmt": "buco",
        "instr": "Sostituisci «un po' di» con il partitivo.",
        "items": [
          {
            "q": "Vorrei un po' di vino. →",
            "options": [
              "Vorrei del vino.",
              "Vorrei dei vino.",
              "Vorrei della vino."
            ],
            "answer": 0
          },
          {
            "q": "Prendo un po' di insalata. →",
            "options": [
              "Prendo dell'insalata.",
              "Prendo del insalata.",
              "Prendo dello insalata."
            ],
            "answer": 0
          },
          {
            "q": "Serve un po' di burro. →",
            "options": [
              "Serve del burro.",
              "Serve dello burro.",
              "Serve della burro."
            ],
            "answer": 0
          },
          {
            "q": "Compro un po' di frutta. →",
            "options": [
              "Compro della frutta.",
              "Compro del frutta.",
              "Compro dei frutta."
            ],
            "answer": 0
          },
          {
            "q": "Aggiungi un po' di spezie. →",
            "options": [
              "Aggiungi delle spezie.",
              "Aggiungi dei spezie.",
              "Aggiungi degli spezie."
            ],
            "answer": 0
          },
          {
            "q": "Voglio un po' di zucchero. →",
            "options": [
              "Voglio dello zucchero.",
              "Voglio del zucchero.",
              "Voglio della zucchero."
            ],
            "answer": 0
          },
          {
            "q": "Metti un po' di erbe. →",
            "options": [
              "Metti delle erbe.",
              "Metti dei erbe.",
              "Metti degli erbe."
            ],
            "answer": 0
          },
          {
            "q": "Bevo un po' di succo. →",
            "options": [
              "Bevo del succo.",
              "Bevo dello succo.",
              "Bevo dei succo."
            ],
            "answer": 0
          },
          {
            "q": "Ho un po' di dubbi. →",
            "options": [
              "Ho dei dubbi.",
              "Ho delle dubbi.",
              "Ho degli dubbi."
            ],
            "answer": 0
          },
          {
            "q": "Serve un po' di aceto. →",
            "options": [
              "Serve dell'aceto.",
              "Serve del aceto.",
              "Serve dello aceto."
            ],
            "answer": 0
          }
        ]
      }
    ]
  },
  {
    "lvl": "b1",
    "stima": "a2",
    "lez": [
      "B1 L4"
    ],
    "title": "L'infinito istruttivo",
    "exercises": [
      {
        "type": "Riempimento",
        "fmt": "fill",
        "instr": "Le ricette impersonali usano l'infinito: scrivi l'infinito del verbo indicato.",
        "items": [
          {
            "q": "___ le uova in una ciotola. (sbattere)",
            "a": "Sbattere",
            "no": [
              "Sbattendo",
              "Sbattuto",
              "Sbatter"
            ]
          },
          {
            "q": "___ la farina poco a poco. (aggiungere)",
            "a": "Aggiungere",
            "no": [
              "Aggiungendo",
              "Aggiunto",
              "Aggiunger"
            ]
          },
          {
            "q": "___ il tutto per dieci minuti. (mescolare)",
            "a": "Mescolare",
            "no": [
              "Mescolando",
              "Mescolato",
              "Mescolar"
            ]
          },
          {
            "q": "___ in forno a 180 gradi. (cuocere)",
            "a": "Cuocere",
            "no": [
              "Cuocendo",
              "Cotto",
              "Cuocer"
            ]
          },
          {
            "q": "___ le verdure a pezzetti. (tagliare)",
            "a": "Tagliare",
            "no": [
              "Tagliando",
              "Tagliato",
              "Tagliar"
            ]
          },
          {
            "q": "___ il sale a piacere. (unire)",
            "a": "Unire",
            "no": [
              "Unendo",
              "Unito",
              "Unir"
            ]
          },
          {
            "q": "___ riposare l'impasto. (lasciare)",
            "a": "Lasciare",
            "no": [
              "Lasciando",
              "Lasciato",
              "Lasciar"
            ]
          },
          {
            "q": "___ con olio e limone. (condire)",
            "a": "Condire",
            "no": [
              "Condendo",
              "Condito",
              "Condir"
            ]
          },
          {
            "q": "___ a fuoco lento. (scaldare)",
            "a": "Scaldare",
            "no": [
              "Scaldando",
              "Scaldato",
              "Scaldar"
            ]
          },
          {
            "q": "___ prima di servire. (raffreddare)",
            "a": "Raffreddare",
            "no": [
              "Raffreddando",
              "Raffreddato",
              "Raffreddar"
            ]
          }
        ]
      },
      {
        "type": "Correzione",
        "fmt": "errore",
        "instr": "La ricetta comincia con l'infinito: clicca il verbo che cambia registro.",
        "items": [
          {
            "q": "Versare il latte e poi mescola bene.",
            "wrong": "mescola",
            "fix": "mescolare"
          },
          {
            "q": "Sbucciare le patate e tagliatele a fette.",
            "wrong": "tagliatele",
            "fix": "tagliarle"
          },
          {
            "q": "Scaldare il forno e infornate la teglia.",
            "wrong": "infornate",
            "fix": "infornare"
          },
          {
            "q": "Unire le uova e sbatti il composto.",
            "wrong": "sbatti",
            "fix": "sbattere"
          },
          {
            "q": "Lasciare riposare e servite freddo.",
            "wrong": "servite",
            "fix": "servire"
          },
          {
            "q": "Tritare il prezzemolo e aggiungilo alla salsa.",
            "wrong": "aggiungilo",
            "fix": "aggiungerlo"
          },
          {
            "q": "Cuocere a fuoco lento e girate spesso.",
            "wrong": "girate",
            "fix": "girare"
          },
          {
            "q": "Sciogliere il burro e versalo nella ciotola.",
            "wrong": "versalo",
            "fix": "versarlo"
          },
          {
            "q": "Montare la panna e mettila in frigo.",
            "wrong": "mettila",
            "fix": "metterla"
          },
          {
            "q": "Salare l'acqua e calate la pasta.",
            "wrong": "calate",
            "fix": "calare"
          }
        ]
      },
      {
        "type": "Trasformazione",
        "fmt": "buco",
        "instr": "Riscrivi l'istruzione con l'infinito, il registro impersonale delle ricette scritte.",
        "items": [
          {
            "q": "Metti la pasta nell'acqua. →",
            "options": [
              "Mettere la pasta nell'acqua.",
              "Mettendo la pasta nell'acqua.",
              "Messo la pasta nell'acqua."
            ],
            "answer": 0
          },
          {
            "q": "Aggiungi il sale. →",
            "options": [
              "Aggiungere il sale.",
              "Aggiungendo il sale.",
              "Aggiunto il sale."
            ],
            "answer": 0
          },
          {
            "q": "Fai cuocere per otto minuti. →",
            "options": [
              "Far cuocere per otto minuti.",
              "Facendo cuocere per otto minuti.",
              "Fatto cuocere per otto minuti."
            ],
            "answer": 0
          },
          {
            "q": "Scola la pasta. →",
            "options": [
              "Scolare la pasta.",
              "Scolando la pasta.",
              "Scolato la pasta."
            ],
            "answer": 0
          },
          {
            "q": "Trita il prezzemolo. →",
            "options": [
              "Tritare il prezzemolo.",
              "Tritando il prezzemolo.",
              "Tritato il prezzemolo."
            ],
            "answer": 0
          },
          {
            "q": "Sciogli il burro. →",
            "options": [
              "Sciogliere il burro.",
              "Sciogliendo il burro.",
              "Sciolto il burro."
            ],
            "answer": 0
          },
          {
            "q": "Monta la panna. →",
            "options": [
              "Montare la panna.",
              "Montando la panna.",
              "Montato la panna."
            ],
            "answer": 0
          },
          {
            "q": "Spegni il fuoco. →",
            "options": [
              "Spegnere il fuoco.",
              "Spegnendo il fuoco.",
              "Spento il fuoco."
            ],
            "answer": 0
          },
          {
            "q": "Distribuisci il ripieno. →",
            "options": [
              "Distribuire il ripieno.",
              "Distribuendo il ripieno.",
              "Distribuito il ripieno."
            ],
            "answer": 0
          },
          {
            "q": "Inforna per venti minuti. →",
            "options": [
              "Infornare per venti minuti.",
              "Infornando per venti minuti.",
              "Infornato per venti minuti."
            ],
            "answer": 0
          }
        ]
      }
    ]
  },
  {
    "lvl": "b1",
    "lez": [
      "B1 L5"
    ],
    "title": "I participi passati irregolari",
    "exercises": [
      {
        "type": "Riempimento",
        "fmt": "fill",
        "instr": "Scrivi il participio passato del verbo tra parentesi.",
        "items": [
          {
            "q": "Ho ___ una mail al direttore. (scrivere)",
            "a": "scritto",
            "no": [
              "scrivuto",
              "scriveto",
              "scrivato"
            ]
          },
          {
            "q": "Abbiamo ___ un film ieri sera. (vedere)",
            "a": "visto",
            "no": [
              "vedato",
              "veduto",
              "vedito"
            ]
          },
          {
            "q": "Hai ___ il pacco? (aprire)",
            "a": "aperto",
            "no": [
              "aprito",
              "apruto",
              "aprato"
            ]
          },
          {
            "q": "Hanno ___ la porta a chiave. (chiudere)",
            "a": "chiuso",
            "no": [
              "chiudito",
              "chiuduto",
              "chiudato"
            ]
          },
          {
            "q": "Ho ___ una decisione difficile. (prendere)",
            "a": "preso",
            "no": [
              "prenduto",
              "prendito",
              "prendato"
            ]
          },
          {
            "q": "Abbiamo ___ molte cose. (dire)",
            "a": "detto",
            "no": [
              "dicuto",
              "dito",
              "diciuto"
            ]
          },
          {
            "q": "Ha ___ il compito in tempo. (fare)",
            "a": "fatto",
            "no": [
              "facuto",
              "fato",
              "facciuto"
            ]
          },
          {
            "q": "Hanno ___ le chiavi in ufficio. (perdere)",
            "a": "perso",
            "no": [
              "perdito",
              "perdato",
              "perduto2"
            ]
          },
          {
            "q": "Ho ___ un caffè al bar. (bere)",
            "a": "bevuto",
            "no": [
              "beuto",
              "bevito",
              "bevato"
            ]
          },
          {
            "q": "Abbiamo ___ tardi ieri. (rimanere)",
            "a": "rimasto",
            "no": [
              "rimanuto",
              "rimanito",
              "rimanato"
            ]
          }
        ]
      },
      {
        "type": "Correzione",
        "fmt": "errore",
        "instr": "Clicca il participio sbagliato.",
        "items": [
          {
            "q": "Ho scrivuto una lettera lunga.",
            "wrong": "scrivuto",
            "fix": "scritto"
          },
          {
            "q": "Abbiamo vedato un bel film.",
            "wrong": "vedato",
            "fix": "visto"
          },
          {
            "q": "Hai aprito la finestra?",
            "wrong": "aprito",
            "fix": "aperto"
          },
          {
            "q": "Hanno chiudito il negozio.",
            "wrong": "chiudito",
            "fix": "chiuso"
          },
          {
            "q": "Ho prenduto l'autobus.",
            "wrong": "prenduto",
            "fix": "preso"
          },
          {
            "q": "Abbiamo dicuto la verità.",
            "wrong": "dicuto",
            "fix": "detto"
          },
          {
            "q": "Ha facuto un errore.",
            "wrong": "facuto",
            "fix": "fatto"
          },
          {
            "q": "Hanno perdito il treno.",
            "wrong": "perdito",
            "fix": "perso"
          },
          {
            "q": "Ho beuto troppo caffè.",
            "wrong": "beuto",
            "fix": "bevuto"
          },
          {
            "q": "Siamo rimanuti a casa.",
            "wrong": "rimanuti",
            "fix": "rimasti"
          }
        ]
      },
      {
        "type": "Trasformazione",
        "fmt": "buco",
        "instr": "Metti al passato prossimo: scegli la forma corretta.",
        "items": [
          {
            "q": "Metto la giacca. →",
            "options": [
              "Ho messo la giacca.",
              "Ho mettuto la giacca.",
              "Sono messo la giacca."
            ],
            "answer": 0
          },
          {
            "q": "Leggo il giornale. →",
            "options": [
              "Ho letto il giornale.",
              "Ho leggiuto il giornale.",
              "Sono letto il giornale."
            ],
            "answer": 0
          },
          {
            "q": "Rispondo alla mail. →",
            "options": [
              "Ho risposto alla mail.",
              "Ho rispondito alla mail.",
              "Sono risposto alla mail."
            ],
            "answer": 0
          },
          {
            "q": "Scelgo il colore. →",
            "options": [
              "Ho scelto il colore.",
              "Ho scegliuto il colore.",
              "Sono scelto il colore."
            ],
            "answer": 0
          },
          {
            "q": "Vinco la partita. →",
            "options": [
              "Ho vinto la partita.",
              "Ho vinciuto la partita.",
              "Sono vinto la partita."
            ],
            "answer": 0
          },
          {
            "q": "Offro il caffè. →",
            "options": [
              "Ho offerto il caffè.",
              "Ho offrito il caffè.",
              "Sono offerto il caffè."
            ],
            "answer": 0
          },
          {
            "q": "Spengo la luce. →",
            "options": [
              "Ho spento la luce.",
              "Ho spegnuto la luce.",
              "Sono spento la luce."
            ],
            "answer": 0
          },
          {
            "q": "Traduco il testo. →",
            "options": [
              "Ho tradotto il testo.",
              "Ho traducuto il testo.",
              "Sono tradotto il testo."
            ],
            "answer": 0
          },
          {
            "q": "Rompo il bicchiere. →",
            "options": [
              "Ho rotto il bicchiere.",
              "Ho romputo il bicchiere.",
              "Sono rotto il bicchiere."
            ],
            "answer": 0
          },
          {
            "q": "Chiedo un favore. →",
            "options": [
              "Ho chiesto un favore.",
              "Ho chieduto un favore.",
              "Sono chiesto un favore."
            ],
            "answer": 0
          }
        ]
      }
    ]
  },
  {
    "lvl": "b1",
    "lez": [
      "B1 L7",
      "B1 L11",
      "B1 L12"
    ],
    "title": "Il futuro semplice",
    "exercises": [
      {
        "type": "Riempimento",
        "fmt": "fill",
        "instr": "Scrivi il futuro semplice del verbo tra parentesi.",
        "items": [
          {
            "q": "Domani ___ a Milano. (io – andare)",
            "a": "andrò",
            "no": [
              "andarò",
              "anderò",
              "andrò io"
            ]
          },
          {
            "q": "L'anno prossimo ___ una casa. (noi – comprare)",
            "a": "compreremo",
            "no": [
              "compriremo",
              "comprearemo",
              "compraremo"
            ]
          },
          {
            "q": "___ tu alla riunione? (venire)",
            "a": "verrai",
            "no": [
              "venirai",
              "vieni",
              "verai"
            ]
          },
          {
            "q": "Loro ___ tutto in tempo. (fare)",
            "a": "faranno",
            "no": [
              "fareranno",
              "facaranno",
              "farano"
            ]
          },
          {
            "q": "Lei ___ la risposta domani. (sapere)",
            "a": "saprà",
            "no": [
              "saperà",
              "sapirà",
              "saprai"
            ]
          },
          {
            "q": "Voi ___ contenti del risultato. (essere)",
            "a": "sarete",
            "no": [
              "essarete",
              "serete",
              "sareste"
            ]
          },
          {
            "q": "Io ___ più tempo libero. (avere)",
            "a": "avrò",
            "no": [
              "averò",
              "avrei",
              "avrà"
            ]
          },
          {
            "q": "Noi ___ presto la decisione. (prendere)",
            "a": "prenderemo",
            "no": [
              "prendaremo",
              "prendiremo",
              "prendremo"
            ]
          },
          {
            "q": "Tu ___ molto in questo lavoro. (imparare)",
            "a": "imparerai",
            "no": [
              "imparirai",
              "impararai",
              "imparerà"
            ]
          },
          {
            "q": "Loro ___ a casa alle otto. (rimanere)",
            "a": "rimarranno",
            "no": [
              "rimaneranno",
              "rimanaranno",
              "rimarano"
            ]
          }
        ]
      },
      {
        "type": "Correzione",
        "fmt": "errore",
        "instr": "Clicca il futuro coniugato in modo sbagliato.",
        "items": [
          {
            "q": "Domani anderò in ufficio.",
            "wrong": "anderò",
            "fix": "andrò"
          },
          {
            "q": "Noi compraremo il biglietto.",
            "wrong": "compraremo",
            "fix": "compreremo"
          },
          {
            "q": "Tu venirai con noi?",
            "wrong": "venirai",
            "fix": "verrai"
          },
          {
            "q": "Loro fareranno il possibile.",
            "wrong": "fareranno",
            "fix": "faranno"
          },
          {
            "q": "Lei saperà la verità.",
            "wrong": "saperà",
            "fix": "saprà"
          },
          {
            "q": "Voi essarete stanchi.",
            "wrong": "essarete",
            "fix": "sarete"
          },
          {
            "q": "Io averò una risposta domani.",
            "wrong": "averò",
            "fix": "avrò"
          },
          {
            "q": "Noi vedaremo cosa succede.",
            "wrong": "vedaremo",
            "fix": "vedremo"
          },
          {
            "q": "Loro rimaneranno qui.",
            "wrong": "rimaneranno",
            "fix": "rimarranno"
          },
          {
            "q": "Tu potirai partire domani.",
            "wrong": "potirai",
            "fix": "potrai"
          }
        ]
      },
      {
        "type": "Trasformazione",
        "fmt": "buco",
        "instr": "Trasforma il presente in futuro semplice.",
        "items": [
          {
            "q": "Parto domani. →",
            "options": [
              "Partirò domani.",
              "Parterò domani.",
              "Partarò domani."
            ],
            "answer": 0
          },
          {
            "q": "Finiamo il lavoro. →",
            "options": [
              "Finiremo il lavoro.",
              "Finiramo il lavoro.",
              "Finaremo il lavoro."
            ],
            "answer": 0
          },
          {
            "q": "Vai in vacanza? →",
            "options": [
              "Andrai in vacanza?",
              "Anderai in vacanza?",
              "Vaderai in vacanza?"
            ],
            "answer": 0
          },
          {
            "q": "Beviamo un caffè. →",
            "options": [
              "Berremo un caffè.",
              "Beveremo un caffè.",
              "Bevaremo un caffè."
            ],
            "answer": 0
          },
          {
            "q": "Vengono alle otto. →",
            "options": [
              "Verranno alle otto.",
              "Veniranno alle otto.",
              "Venaranno alle otto."
            ],
            "answer": 0
          },
          {
            "q": "Devo studiare. →",
            "options": [
              "Dovrò studiare.",
              "Doverò studiare.",
              "Devrò studiare."
            ],
            "answer": 0
          },
          {
            "q": "Puoi aiutarmi? →",
            "options": [
              "Potrai aiutarmi?",
              "Poterai aiutarmi?",
              "Puoterai aiutarmi?"
            ],
            "answer": 0
          },
          {
            "q": "Vogliamo partire. →",
            "options": [
              "Vorremo partire.",
              "Voleremo partire.",
              "Volaremo partire."
            ],
            "answer": 0
          },
          {
            "q": "Sta bene. →",
            "options": [
              "Starà bene.",
              "Staverà bene.",
              "Sterà bene."
            ],
            "answer": 0
          },
          {
            "q": "Diamo una mano. →",
            "options": [
              "Daremo una mano.",
              "Diaremo una mano.",
              "Daramo una mano."
            ],
            "answer": 0
          }
        ]
      }
    ]
  },
  {
    "lvl": "b1",
    "lez": [
      "B1 L7",
      "B1 L22"
    ],
    "title": "Volerci e metterci",
    "exercises": [
      {
        "type": "Riempimento",
        "fmt": "buco",
        "instr": "Scegli tra «volerci» (tempo necessario) e «metterci» (tempo impiegato da qualcuno).",
        "items": [
          {
            "q": "___ due ore per arrivare a Roma.",
            "options": [
              "Ci vogliono",
              "Ci mettono",
              "Ci vuole"
            ],
            "answer": 0
          },
          {
            "q": "Io ___ venti minuti per prepararmi.",
            "options": [
              "ci metto",
              "ci voglio",
              "ci mette"
            ],
            "answer": 0
          },
          {
            "q": "___ molta pazienza in questo lavoro.",
            "options": [
              "Ci vuole",
              "Ci mette",
              "Ci vogliono"
            ],
            "answer": 0
          },
          {
            "q": "Quanto tempo ___ per finire? (tu)",
            "options": [
              "ci metti",
              "ci vuoi",
              "ci vuole"
            ],
            "answer": 0
          },
          {
            "q": "___ tre uova per questa torta.",
            "options": [
              "Ci vogliono",
              "Ci mettono",
              "Ci vuole"
            ],
            "answer": 0
          },
          {
            "q": "Noi ___ un'ora ad arrivare.",
            "options": [
              "ci mettiamo",
              "ci vogliamo",
              "ci mette"
            ],
            "answer": 0
          },
          {
            "q": "___ tanto coraggio per dirlo.",
            "options": [
              "Ci vuole",
              "Ci mette",
              "Ci vogliono"
            ],
            "answer": 0
          },
          {
            "q": "Loro ___ sempre troppo tempo.",
            "options": [
              "ci mettono",
              "ci vogliono",
              "ci mette"
            ],
            "answer": 0
          },
          {
            "q": "___ dieci minuti a piedi da qui.",
            "options": [
              "Ci vogliono",
              "Ci mettono",
              "Ci vuole"
            ],
            "answer": 0
          },
          {
            "q": "Lei ___ poco a capire le cose.",
            "options": [
              "ci mette",
              "ci vuole",
              "ci mettono"
            ],
            "answer": 0
          }
        ]
      },
      {
        "type": "Correzione",
        "fmt": "errore",
        "instr": "Clicca la parola sbagliata.",
        "items": [
          {
            "q": "Ci vuole due ore per andare a Napoli.",
            "wrong": "vuole",
            "fix": "vogliono"
          },
          {
            "q": "Io ci voglio mezz'ora per vestirmi.",
            "wrong": "voglio",
            "fix": "metto"
          },
          {
            "q": "Ci vogliono molta pazienza qui.",
            "wrong": "vogliono",
            "fix": "vuole"
          },
          {
            "q": "Quanto ci vuoi per finire il compito?",
            "wrong": "vuoi",
            "fix": "metti"
          },
          {
            "q": "Ci mette tre ingredienti per la ricetta.",
            "wrong": "mette",
            "fix": "vogliono"
          },
          {
            "q": "Noi ci vogliamo due giorni a finire.",
            "wrong": "vogliamo",
            "fix": "mettiamo"
          },
          {
            "q": "Ci vogliono tanto coraggio.",
            "wrong": "vogliono",
            "fix": "vuole"
          },
          {
            "q": "Loro ci vogliono un secolo a rispondere.",
            "wrong": "vogliono",
            "fix": "mettono"
          },
          {
            "q": "Ci vuole dieci minuti a piedi.",
            "wrong": "vuole",
            "fix": "vogliono"
          },
          {
            "q": "Lei ci vuole poco a capire.",
            "wrong": "vuole",
            "fix": "mette"
          }
        ]
      },
      {
        "type": "Trasformazione",
        "fmt": "buco",
        "instr": "Riscrivi con volerci o metterci.",
        "items": [
          {
            "q": "Sono necessarie due ore. →",
            "options": [
              "Ci vogliono due ore.",
              "Ci mettono due ore.",
              "Ci vuole due ore."
            ],
            "answer": 0
          },
          {
            "q": "Impiego venti minuti. →",
            "options": [
              "Ci metto venti minuti.",
              "Ci voglio venti minuti.",
              "Mi mette venti minuti."
            ],
            "answer": 0
          },
          {
            "q": "È necessaria molta calma. →",
            "options": [
              "Ci vuole molta calma.",
              "Ci vogliono molta calma.",
              "Ci mette molta calma."
            ],
            "answer": 0
          },
          {
            "q": "Impieghiamo un'ora. →",
            "options": [
              "Ci mettiamo un'ora.",
              "Ci vogliamo un'ora.",
              "Ci mette un'ora."
            ],
            "answer": 0
          },
          {
            "q": "Sono necessari tre giorni. →",
            "options": [
              "Ci vogliono tre giorni.",
              "Ci mettono tre giorni.",
              "Ci vuole tre giorni."
            ],
            "answer": 0
          },
          {
            "q": "Impieghi troppo tempo. →",
            "options": [
              "Ci metti troppo tempo.",
              "Ci vuoi troppo tempo.",
              "Ti metti troppo tempo."
            ],
            "answer": 0
          },
          {
            "q": "È necessario un documento. →",
            "options": [
              "Ci vuole un documento.",
              "Ci vogliono un documento.",
              "Ci mette un documento."
            ],
            "answer": 0
          },
          {
            "q": "Impiegano due settimane. →",
            "options": [
              "Ci mettono due settimane.",
              "Ci vogliono loro due settimane.",
              "Ci mette due settimane."
            ],
            "answer": 0
          },
          {
            "q": "Sono necessarie molte prove. →",
            "options": [
              "Ci vogliono molte prove.",
              "Ci vuole molte prove.",
              "Ci mettono molte prove."
            ],
            "answer": 0
          },
          {
            "q": "Impiego poco a decidere. →",
            "options": [
              "Ci metto poco a decidere.",
              "Ci voglio poco a decidere.",
              "Mi metto poco a decidere."
            ],
            "answer": 0
          }
        ]
      }
    ]
  },
  {
    "lvl": "b1",
    "lez": [
      "B1 L8",
      "B1 L11"
    ],
    "title": "L'imperfetto",
    "exercises": [
      {
        "type": "Riempimento",
        "fmt": "fill",
        "instr": "Scrivi l'imperfetto del verbo tra parentesi.",
        "items": [
          {
            "q": "Da bambino ___ molto. (io – giocare)",
            "a": "giocavo",
            "no": [
              "giocai",
              "giocavi",
              "giocavano"
            ]
          },
          {
            "q": "Mia nonna ___ ogni domenica. (cucinare)",
            "a": "cucinava",
            "no": [
              "cucinò",
              "cucinavo",
              "cucinavano"
            ]
          },
          {
            "q": "Noi ___ in campagna d'estate. (andare)",
            "a": "andavamo",
            "no": [
              "andammo",
              "andavate",
              "andavo"
            ]
          },
          {
            "q": "Voi ___ sempre in ritardo. (arrivare)",
            "a": "arrivavate",
            "no": [
              "arrivaste",
              "arrivavamo",
              "arrivavano"
            ]
          },
          {
            "q": "Loro ___ vicino al mare. (vivere)",
            "a": "vivevano",
            "no": [
              "vissero",
              "vivevamo",
              "viveva"
            ]
          },
          {
            "q": "Tu ___ molto da piccolo. (leggere)",
            "a": "leggevi",
            "no": [
              "leggesti",
              "leggeva",
              "leggevo"
            ]
          },
          {
            "q": "Lui si ___ ogni mattina alle sei. (svegliarsi)",
            "a": "svegliava",
            "no": [
              "svegliò",
              "svegliavo",
              "svegliavano"
            ]
          },
          {
            "q": "Io ___ i compiti dopo cena. (fare)",
            "a": "facevo",
            "no": [
              "feci",
              "faceva",
              "facevano"
            ]
          },
          {
            "q": "Noi ___ tanti amici allora. (avere)",
            "a": "avevamo",
            "no": [
              "avemmo",
              "avevate",
              "aveva"
            ]
          },
          {
            "q": "Lei ___ una bambina timida. (essere)",
            "a": "era",
            "no": [
              "fu",
              "ero",
              "erano"
            ]
          }
        ]
      },
      {
        "type": "Correzione",
        "fmt": "errore",
        "instr": "Clicca il verbo coniugato in modo sbagliato.",
        "items": [
          {
            "q": "Da piccolo io giocavamo in cortile.",
            "wrong": "giocavamo",
            "fix": "giocavo"
          },
          {
            "q": "Mia zia cucinavano ogni festa.",
            "wrong": "cucinavano",
            "fix": "cucinava"
          },
          {
            "q": "Noi andavate al mare ogni anno.",
            "wrong": "andavate",
            "fix": "andavamo"
          },
          {
            "q": "Voi arrivavamo sempre tardi.",
            "wrong": "arrivavamo",
            "fix": "arrivavate"
          },
          {
            "q": "Loro viveva in centro.",
            "wrong": "viveva",
            "fix": "vivevano"
          },
          {
            "q": "Tu leggeva molti libri.",
            "wrong": "leggeva",
            "fix": "leggevi"
          },
          {
            "q": "Io facevi sempre gli stessi errori.",
            "wrong": "facevi",
            "fix": "facevo"
          },
          {
            "q": "Noi avevate una casa grande.",
            "wrong": "avevate",
            "fix": "avevamo"
          },
          {
            "q": "Lei erano molto simpatica.",
            "wrong": "erano",
            "fix": "era"
          },
          {
            "q": "Voi bevevo troppo caffè.",
            "wrong": "bevevo",
            "fix": "bevevate"
          }
        ]
      },
      {
        "type": "Trasformazione",
        "fmt": "buco",
        "instr": "Trasforma dal presente all'imperfetto.",
        "items": [
          {
            "q": "Abito in centro. →",
            "options": [
              "Abitavo in centro.",
              "Abitai in centro.",
              "Abitavi in centro."
            ],
            "answer": 0
          },
          {
            "q": "Facciamo colazione al bar. →",
            "options": [
              "Facevamo colazione al bar.",
              "Facemmo colazione al bar.",
              "Facevate colazione al bar."
            ],
            "answer": 0
          },
          {
            "q": "Bevi molto tè? →",
            "options": [
              "Bevevi molto tè?",
              "Bevesti molto tè?",
              "Beveva molto tè?"
            ],
            "answer": 0
          },
          {
            "q": "Dicono sempre di sì. →",
            "options": [
              "Dicevano sempre di sì.",
              "Dissero sempre di sì.",
              "Diceva sempre di sì."
            ],
            "answer": 0
          },
          {
            "q": "Sono contento. →",
            "options": [
              "Ero contento.",
              "Fui contento.",
              "Era contento."
            ],
            "answer": 0
          },
          {
            "q": "Andate a scuola a piedi. →",
            "options": [
              "Andavate a scuola a piedi.",
              "Andaste a scuola a piedi.",
              "Andavamo a scuola a piedi."
            ],
            "answer": 0
          },
          {
            "q": "Ha molti amici. →",
            "options": [
              "Aveva molti amici.",
              "Ebbe molti amici.",
              "Avevo molti amici."
            ],
            "answer": 0
          },
          {
            "q": "Traduciamo dal francese. →",
            "options": [
              "Traducevamo dal francese.",
              "Traducemmo dal francese.",
              "Traducevate dal francese."
            ],
            "answer": 0
          },
          {
            "q": "Stai bene? →",
            "options": [
              "Stavi bene?",
              "Stesti bene?",
              "Stava bene?"
            ],
            "answer": 0
          },
          {
            "q": "Escono ogni sera. →",
            "options": [
              "Uscivano ogni sera.",
              "Uscirono ogni sera.",
              "Usciva ogni sera."
            ],
            "answer": 0
          }
        ]
      }
    ]
  },
  {
    "lvl": "b1",
    "lez": [
      "B1 L8",
      "B1 L12",
      "B1 L27"
    ],
    "title": "Imperfetto o passato prossimo?",
    "exercises": [
      {
        "type": "Riempimento",
        "fmt": "buco",
        "instr": "Scegli il tempo adatto: descrizione e abitudine → imperfetto; fatto concluso → passato prossimo.",
        "items": [
          {
            "q": "Mentre ___ , è suonato il telefono.",
            "options": [
              "dormivo",
              "ho dormito",
              "dormii"
            ],
            "answer": 0
          },
          {
            "q": "Ieri ___ un bel film al cinema.",
            "options": [
              "ho visto",
              "vedevo",
              "vedrò"
            ],
            "answer": 0
          },
          {
            "q": "Da bambino ___ sempre in bicicletta.",
            "options": [
              "andavo",
              "sono andato",
              "andrò"
            ],
            "answer": 0
          },
          {
            "q": "L'anno scorso ___ in Spagna per un mese.",
            "options": [
              "sono stato",
              "ero",
              "sarò"
            ],
            "answer": 0
          },
          {
            "q": "___ le otto quando è arrivato.",
            "options": [
              "Erano",
              "Sono state",
              "Furono"
            ],
            "answer": 0
          },
          {
            "q": "Stamattina ___ presto per il treno.",
            "options": [
              "mi sono alzato",
              "mi alzavo",
              "mi alzerò"
            ],
            "answer": 0
          },
          {
            "q": "Quando ero piccolo ___ i cartoni.",
            "options": [
              "guardavo",
              "ho guardato",
              "guarderò"
            ],
            "answer": 0
          },
          {
            "q": "Ieri sera ___ tre volte ma non rispondevi.",
            "options": [
              "ho chiamato",
              "chiamavo",
              "chiamerò"
            ],
            "answer": 0
          },
          {
            "q": "La casa ___ grande e luminosa.",
            "options": [
              "era",
              "è stata",
              "fu"
            ],
            "answer": 0
          },
          {
            "q": "Improvvisamente ___ a piovere.",
            "options": [
              "ha cominciato",
              "cominciava",
              "comincerà"
            ],
            "answer": 0
          }
        ]
      },
      {
        "type": "Correzione",
        "fmt": "errore",
        "instr": "Clicca il verbo con il tempo sbagliato.",
        "items": [
          {
            "q": "Mentre ho camminato, ho incontrato Luca.",
            "wrong": "camminato",
            "fix": "camminavo"
          },
          {
            "q": "Ieri vedevo un film bellissimo.",
            "wrong": "vedevo",
            "fix": "ho visto"
          },
          {
            "q": "Da bambina sono andata sempre al parco.",
            "wrong": "andata",
            "fix": "andavo"
          },
          {
            "q": "L'anno scorso ero in Francia due settimane.",
            "wrong": "ero",
            "fix": "sono stato"
          },
          {
            "q": "Sono state le nove quando è uscito.",
            "wrong": "state",
            "fix": "Erano"
          },
          {
            "q": "Stamattina mi alzavo alle sei in punto.",
            "wrong": "alzavo",
            "fix": "sono alzato"
          },
          {
            "q": "Quando ero piccolo ho giocato ogni giorno.",
            "wrong": "giocato",
            "fix": "giocavo"
          },
          {
            "q": "Ieri sera ti chiamavo tre volte.",
            "wrong": "chiamavo",
            "fix": "ho chiamato"
          },
          {
            "q": "La stanza è stata piccola e buia.",
            "wrong": "stata",
            "fix": "era"
          },
          {
            "q": "Improvvisamente nevicava molto forte.",
            "wrong": "nevicava",
            "fix": "ha cominciato a nevicare"
          }
        ]
      },
      {
        "type": "Trasformazione",
        "fmt": "buco",
        "instr": "Completa il racconto scegliendo la coppia di tempi giusta.",
        "items": [
          {
            "q": "(essere) tardi quando (arrivare, noi).",
            "options": [
              "Era tardi quando siamo arrivati.",
              "È stato tardi quando arrivavamo.",
              "Fu tardi quando arrivavamo."
            ],
            "answer": 0
          },
          {
            "q": "Mentre (leggere, io), (bussare) qualcuno.",
            "options": [
              "Mentre leggevo, ha bussato qualcuno.",
              "Mentre ho letto, bussava qualcuno.",
              "Mentre leggevo, bussava qualcuno."
            ],
            "answer": 0
          },
          {
            "q": "(fare) freddo, così (restare, noi) a casa.",
            "options": [
              "Faceva freddo, così siamo restati a casa.",
              "Ha fatto freddo, così restavamo a casa.",
              "Faceva freddo, così restavamo a casa."
            ],
            "answer": 0
          },
          {
            "q": "(conoscere, io) Anna mentre (lavorare) a Roma.",
            "options": [
              "Ho conosciuto Anna mentre lavoravo a Roma.",
              "Conoscevo Anna mentre ho lavorato a Roma.",
              "Ho conosciuto Anna mentre ho lavorato a Roma."
            ],
            "answer": 0
          },
          {
            "q": "(essere) stanchi, perciò (andare, noi) a dormire.",
            "options": [
              "Eravamo stanchi, perciò siamo andati a dormire.",
              "Siamo stati stanchi, perciò andavamo a dormire.",
              "Eravamo stanchi, perciò andavamo a dormire."
            ],
            "answer": 0
          },
          {
            "q": "Ogni estate (andare, noi) al lago.",
            "options": [
              "Ogni estate andavamo al lago.",
              "Ogni estate siamo andati al lago.",
              "Ogni estate andammo al lago."
            ],
            "answer": 0
          },
          {
            "q": "(vivere, lei) a Torino per tre anni.",
            "options": [
              "Ha vissuto a Torino per tre anni.",
              "Viveva a Torino per tre anni.",
              "Vivrà a Torino per tre anni."
            ],
            "answer": 0
          },
          {
            "q": "Mentre (cucinare, lei), (bruciarsi) un dito.",
            "options": [
              "Mentre cucinava, si è bruciata un dito.",
              "Mentre ha cucinato, si bruciava un dito.",
              "Mentre cucinava, si bruciava un dito."
            ],
            "answer": 0
          },
          {
            "q": "(avere, io) fame, così (mangiare) un panino.",
            "options": [
              "Avevo fame, così ho mangiato un panino.",
              "Ho avuto fame, così mangiavo un panino.",
              "Avevo fame, così mangiavo un panino."
            ],
            "answer": 0
          },
          {
            "q": "(piovere) quando (uscire, noi).",
            "options": [
              "Pioveva quando siamo usciti.",
              "Ha piovuto quando uscivamo.",
              "Pioveva quando uscivamo."
            ],
            "answer": 0
          }
        ]
      }
    ],
    "diag": true
  },
  {
    "lvl": "b1",
    "lez": [
      "B1 L9"
    ],
    "title": "I superlativi assoluto e relativo",
    "exercises": [
      {
        "type": "Riempimento",
        "fmt": "fill",
        "instr": "Scrivi il superlativo assoluto in -ISSIMO.",
        "items": [
          {
            "q": "È un lavoro ___ . (difficile)",
            "a": "difficilissimo",
            "no": [
              "difficilmente",
              "difficilissima",
              "molto difficile"
            ]
          },
          {
            "q": "La torta è ___ . (buono)",
            "a": "buonissima",
            "no": [
              "buonissimo",
              "bonissima",
              "molto buona"
            ]
          },
          {
            "q": "Sono ___ oggi. (stanco)",
            "a": "stanchissimo",
            "no": [
              "stancissimo",
              "stanchissima",
              "molto stanco"
            ]
          },
          {
            "q": "Le scarpe sono ___ . (caro)",
            "a": "carissime",
            "no": [
              "carissimi",
              "carissima",
              "molto care"
            ]
          },
          {
            "q": "Il film era ___ . (lungo)",
            "a": "lunghissimo",
            "no": [
              "lungissimo",
              "lunghissima",
              "molto lungo"
            ]
          },
          {
            "q": "La casa è ___ . (grande)",
            "a": "grandissima",
            "no": [
              "grandissimo",
              "grandissime",
              "molto grande"
            ]
          },
          {
            "q": "I bambini sono ___ . (simpatico)",
            "a": "simpaticissimi",
            "no": [
              "simpaticissime",
              "simpaticissimo",
              "molto simpatici"
            ]
          },
          {
            "q": "L'esame è stato ___ . (facile)",
            "a": "facilissimo",
            "no": [
              "facilissima",
              "facillissimo",
              "molto facile"
            ]
          },
          {
            "q": "La stanza è ___ . (piccolo)",
            "a": "piccolissima",
            "no": [
              "piccolissimo",
              "piccolissime",
              "molto piccola"
            ]
          },
          {
            "q": "Le vacanze sono state ___ . (bello)",
            "a": "bellissime",
            "no": [
              "bellissimi",
              "bellissima",
              "molto belle"
            ]
          }
        ]
      },
      {
        "type": "Riempimento",
        "fmt": "buco",
        "instr": "Scegli il superlativo relativo corretto.",
        "items": [
          {
            "q": "È ___ ristorante della città.",
            "options": [
              "il migliore",
              "il più migliore",
              "più buono"
            ],
            "answer": 0
          },
          {
            "q": "Marco è ___ alto della classe.",
            "options": [
              "il più",
              "più di",
              "il molto"
            ],
            "answer": 0
          },
          {
            "q": "Questa è ___ soluzione di tutte.",
            "options": [
              "la peggiore",
              "la più peggiore",
              "più cattiva"
            ],
            "answer": 0
          },
          {
            "q": "Sono ___ giorni dell'anno.",
            "options": [
              "i più freddi",
              "i molto freddi",
              "più freddi di"
            ],
            "answer": 0
          },
          {
            "q": "È ___ film che abbia visto.",
            "options": [
              "il più bello",
              "il molto bello",
              "più bello di"
            ],
            "answer": 0
          },
          {
            "q": "Anna è ___ brava del gruppo.",
            "options": [
              "la più",
              "più della",
              "la molto"
            ],
            "answer": 0
          },
          {
            "q": "Sono ___ scarpe del negozio.",
            "options": [
              "le meno care",
              "le più meno care",
              "meno care di"
            ],
            "answer": 0
          },
          {
            "q": "È ___ esercizio del libro.",
            "options": [
              "il più difficile",
              "il molto difficile",
              "più difficile di"
            ],
            "answer": 0
          },
          {
            "q": "Queste sono ___ foto della serie.",
            "options": [
              "le più belle",
              "le molto belle",
              "più belle di"
            ],
            "answer": 0
          },
          {
            "q": "Lui è ___ giovane della squadra.",
            "options": [
              "il più",
              "più il",
              "il molto"
            ],
            "answer": 0
          }
        ]
      },
      {
        "type": "Correzione",
        "fmt": "errore",
        "instr": "Clicca la parola sbagliata nel superlativo.",
        "items": [
          {
            "q": "Il caffè è amarissima stamattina.",
            "wrong": "amarissima",
            "fix": "amarissimo"
          },
          {
            "q": "Le strade sono strettissimi qui.",
            "wrong": "strettissimi",
            "fix": "strettissime"
          },
          {
            "q": "I compiti erano noiosissima.",
            "wrong": "noiosissima",
            "fix": "noiosissimi"
          },
          {
            "q": "È il più ottimo albergo della zona.",
            "wrong": "più",
            "fix": "(togliere: il migliore)"
          },
          {
            "q": "Questa valigia è molto pesantissima.",
            "wrong": "molto",
            "fix": "(togliere: pesantissima)"
          },
          {
            "q": "Anna è più giovane del gruppo.",
            "wrong": "più",
            "fix": "la più"
          },
          {
            "q": "È la più pessima scelta possibile.",
            "wrong": "più",
            "fix": "(togliere: la peggiore)"
          },
          {
            "q": "Sono i molto lunghi giorni dell'estate.",
            "wrong": "molto",
            "fix": "più"
          },
          {
            "q": "La piazza è affollatissimo di sera.",
            "wrong": "affollatissimo",
            "fix": "affollatissima"
          },
          {
            "q": "Sono le esercizi più difficili del corso.",
            "wrong": "le",
            "fix": "gli"
          }
        ]
      }
    ]
  },
  {
    "lvl": "b1",
    "lez": [
      "B1 L10"
    ],
    "title": "Stare + gerundio",
    "exercises": [
      {
        "type": "Riempimento",
        "fmt": "fill",
        "instr": "Scrivi il gerundio del verbo tra parentesi.",
        "items": [
          {
            "q": "Sto ___ la posta. (leggere)",
            "a": "leggendo",
            "no": [
              "leggando",
              "leggiendo",
              "legendo"
            ]
          },
          {
            "q": "Stiamo ___ la cena. (preparare)",
            "a": "preparando",
            "no": [
              "preparendo",
              "preparanto",
              "preparendo2"
            ]
          },
          {
            "q": "Stai ___ ? (dormire)",
            "a": "dormendo",
            "no": [
              "dormando",
              "dormiendo",
              "dormento"
            ]
          },
          {
            "q": "Stanno ___ una casa nuova. (costruire)",
            "a": "costruendo",
            "no": [
              "costruando",
              "costruiendo",
              "costrundo"
            ]
          },
          {
            "q": "Sta ___ molto forte. (piovere)",
            "a": "piovendo",
            "no": [
              "piovando",
              "piovenno",
              "piuvendo"
            ]
          },
          {
            "q": "Sto ___ un caffè. (bere)",
            "a": "bevendo",
            "no": [
              "berendo",
              "bevando",
              "bevendo2"
            ]
          },
          {
            "q": "Stiamo ___ il problema. (risolvere)",
            "a": "risolvendo",
            "no": [
              "risolvando",
              "risolviendo",
              "risolgendo"
            ]
          },
          {
            "q": "Stai ___ troppo. (lavorare)",
            "a": "lavorando",
            "no": [
              "lavorendo",
              "lavoranto",
              "laborando"
            ]
          },
          {
            "q": "Sta ___ la verità. (dire)",
            "a": "dicendo",
            "no": [
              "direndo",
              "dicando",
              "dicenno"
            ]
          },
          {
            "q": "Stanno ___ i compiti. (fare)",
            "a": "facendo",
            "no": [
              "farendo",
              "facando",
              "faciendo"
            ]
          }
        ]
      },
      {
        "type": "Correzione",
        "fmt": "errore",
        "instr": "Clicca la parola sbagliata.",
        "items": [
          {
            "q": "Sto scrivando una relazione.",
            "wrong": "scrivando",
            "fix": "scrivendo"
          },
          {
            "q": "Stiamo aspettendo il treno.",
            "wrong": "aspettendo",
            "fix": "aspettando"
          },
          {
            "q": "Stai guardendo la partita?",
            "wrong": "guardendo",
            "fix": "guardando"
          },
          {
            "q": "Sono correndo verso casa.",
            "wrong": "Sono",
            "fix": "Sto"
          },
          {
            "q": "Sta nevicanto sulle montagne.",
            "wrong": "nevicanto",
            "fix": "nevicando"
          },
          {
            "q": "Sto cucinendo la cena.",
            "wrong": "cucinendo",
            "fix": "cucinando"
          },
          {
            "q": "Stiamo di uscire adesso.",
            "wrong": "di",
            "fix": "(togliere)"
          },
          {
            "q": "Sta traducando un articolo.",
            "wrong": "traducando",
            "fix": "traducendo"
          },
          {
            "q": "Stanno pulando la casa.",
            "wrong": "pulando",
            "fix": "pulendo"
          },
          {
            "q": "Siamo salendo le scale.",
            "wrong": "Siamo",
            "fix": "Stiamo"
          }
        ]
      },
      {
        "type": "Trasformazione",
        "fmt": "buco",
        "instr": "Trasforma il presente in azione in corso.",
        "items": [
          {
            "q": "Mangio adesso. →",
            "options": [
              "Sto mangiando adesso.",
              "Sono mangiando adesso.",
              "Sto a mangiare adesso."
            ],
            "answer": 0
          },
          {
            "q": "Studiamo per l'esame. →",
            "options": [
              "Stiamo studiando per l'esame.",
              "Siamo studiando per l'esame.",
              "Stiamo a studiare per l'esame."
            ],
            "answer": 0
          },
          {
            "q": "Che cosa fai? →",
            "options": [
              "Che cosa stai facendo?",
              "Che cosa sei facendo?",
              "Che cosa stai fare?"
            ],
            "answer": 0
          },
          {
            "q": "Scrivono una mail. →",
            "options": [
              "Stanno scrivendo una mail.",
              "Sono scrivendo una mail.",
              "Stanno a scrivere una mail."
            ],
            "answer": 0
          },
          {
            "q": "Piove forte. →",
            "options": [
              "Sta piovendo forte.",
              "È piovendo forte.",
              "Sta a piovere forte."
            ],
            "answer": 0
          },
          {
            "q": "Aspetto il treno. →",
            "options": [
              "Sto aspettando il treno.",
              "Sono aspettando il treno.",
              "Sto ad aspettare il treno."
            ],
            "answer": 0
          },
          {
            "q": "Cucinate voi? →",
            "options": [
              "State cucinando voi?",
              "Siete cucinando voi?",
              "State a cucinare voi?"
            ],
            "answer": 0
          },
          {
            "q": "Dorme ancora. →",
            "options": [
              "Sta ancora dormendo.",
              "È ancora dormendo.",
              "Sta ancora a dormire."
            ],
            "answer": 0
          },
          {
            "q": "Leggiamo il contratto. →",
            "options": [
              "Stiamo leggendo il contratto.",
              "Siamo leggendo il contratto.",
              "Stiamo a leggere il contratto."
            ],
            "answer": 0
          },
          {
            "q": "Parlano al telefono. →",
            "options": [
              "Stanno parlando al telefono.",
              "Sono parlando al telefono.",
              "Stanno a parlare al telefono."
            ],
            "answer": 0
          }
        ]
      }
    ]
  },
  {
    "lvl": "b1",
    "lez": [
      "B1 L13"
    ],
    "title": "Il congiuntivo presente: forme regolari",
    "exercises": [
      {
        "type": "Riempimento",
        "fmt": "fill",
        "instr": "Scrivi il congiuntivo presente del verbo tra parentesi.",
        "items": [
          {
            "q": "Penso che lui ___ ragione. (avere)",
            "a": "abbia",
            "no": [
              "ha",
              "avesse",
              "abbi"
            ]
          },
          {
            "q": "Credo che loro ___ stanchi. (essere)",
            "a": "siano",
            "no": [
              "sono",
              "fossero",
              "sia"
            ]
          },
          {
            "q": "Spero che tu ___ presto. (arrivare)",
            "a": "arrivi",
            "no": [
              "arrivo",
              "arriva",
              "arrivassi"
            ]
          },
          {
            "q": "Penso che voi ___ troppo. (lavorare)",
            "a": "lavoriate",
            "no": [
              "lavorate",
              "lavoraste",
              "lavorate2"
            ]
          },
          {
            "q": "Credo che noi ___ in tempo. (finire)",
            "a": "finiamo",
            "no": [
              "finiremo",
              "finissimo",
              "finite"
            ]
          },
          {
            "q": "Spero che lei ___ la lezione. (capire)",
            "a": "capisca",
            "no": [
              "capisce",
              "capissi",
              "capisci"
            ]
          },
          {
            "q": "Penso che loro ___ presto. (partire)",
            "a": "partano",
            "no": [
              "partono",
              "partissero",
              "parta"
            ]
          },
          {
            "q": "Credo che tu ___ bene. (dormire)",
            "a": "dorma",
            "no": [
              "dormi",
              "dormissi",
              "dorme"
            ]
          },
          {
            "q": "Spero che voi ___ contenti. (essere)",
            "a": "siate",
            "no": [
              "siete",
              "foste",
              "siano"
            ]
          },
          {
            "q": "Penso che lui ___ la risposta. (sapere)",
            "a": "sappia",
            "no": [
              "sa",
              "sapesse",
              "sappi"
            ]
          }
        ]
      },
      {
        "type": "Correzione",
        "fmt": "errore",
        "instr": "Clicca il verbo che dovrebbe essere al congiuntivo.",
        "items": [
          {
            "q": "Mi sembra che Marco esce troppo.",
            "wrong": "esce",
            "fix": "esca"
          },
          {
            "q": "È probabile che loro rispondono domani.",
            "wrong": "rispondono",
            "fix": "rispondano"
          },
          {
            "q": "Dubito che tu ricorda il nome.",
            "wrong": "ricorda",
            "fix": "ricordi"
          },
          {
            "q": "Immagino che voi preferite il mare.",
            "wrong": "preferite",
            "fix": "preferiate"
          },
          {
            "q": "Non credo che noi arriveremo puntuali.",
            "wrong": "arriveremo",
            "fix": "arriviamo"
          },
          {
            "q": "Mi auguro che lei guarisce presto.",
            "wrong": "guarisce",
            "fix": "guarisca"
          },
          {
            "q": "Sembra che i vicini traslocano.",
            "wrong": "traslocano",
            "fix": "traslochino"
          },
          {
            "q": "Temo che tu ti annoia.",
            "wrong": "annoia",
            "fix": "annoi"
          },
          {
            "q": "È meglio che voi restate a casa.",
            "wrong": "restate",
            "fix": "restiate\" "
          },
          {
            "q": "Bisogna che lui firma il modulo.",
            "wrong": "firma",
            "fix": "firmi"
          }
        ]
      },
      {
        "type": "Trasformazione",
        "fmt": "buco",
        "instr": "Trasforma la frase con «Penso che».",
        "items": [
          {
            "q": "Marco è in ritardo. →",
            "options": [
              "Penso che Marco sia in ritardo.",
              "Penso che Marco è in ritardo.",
              "Penso che Marco fosse in ritardo."
            ],
            "answer": 0
          },
          {
            "q": "Loro hanno fretta. →",
            "options": [
              "Penso che loro abbiano fretta.",
              "Penso che loro hanno fretta.",
              "Penso che loro avessero fretta."
            ],
            "answer": 0
          },
          {
            "q": "Tu studi molto. →",
            "options": [
              "Penso che tu studi molto.",
              "Penso che tu studia molto.",
              "Penso che tu studiassi molto."
            ],
            "answer": 0
          },
          {
            "q": "Voi capite il problema. →",
            "options": [
              "Penso che voi capiate il problema.",
              "Penso che voi capite il problema.",
              "Penso che voi capiste il problema."
            ],
            "answer": 0
          },
          {
            "q": "Noi arriviamo presto. →",
            "options": [
              "Penso che noi arriviamo presto.",
              "Penso che noi arriveremo presto.",
              "Penso che noi arrivassimo presto."
            ],
            "answer": 0
          },
          {
            "q": "Lei parte domani. →",
            "options": [
              "Penso che lei parta domani.",
              "Penso che lei parte domani.",
              "Penso che lei partisse domani."
            ],
            "answer": 0
          },
          {
            "q": "Il negozio apre alle nove. →",
            "options": [
              "Penso che il negozio apra alle nove.",
              "Penso che il negozio apre alle nove.",
              "Penso che il negozio aprisse alle nove."
            ],
            "answer": 0
          },
          {
            "q": "Loro sanno tutto. →",
            "options": [
              "Penso che loro sappiano tutto.",
              "Penso che loro sanno tutto.",
              "Penso che loro sapessero tutto."
            ],
            "answer": 0
          },
          {
            "q": "Tu puoi venire. →",
            "options": [
              "Penso che tu possa venire.",
              "Penso che tu puoi venire.",
              "Penso che tu potessi venire."
            ],
            "answer": 0
          },
          {
            "q": "Fa freddo fuori. →",
            "options": [
              "Penso che faccia freddo fuori.",
              "Penso che fa freddo fuori.",
              "Penso che facesse freddo fuori."
            ],
            "answer": 0
          }
        ]
      }
    ],
    "diag": true
  },
  {
    "lvl": "b1",
    "lez": [
      "B1 L14",
      "B1 L15"
    ],
    "title": "Il condizionale presente",
    "exercises": [
      {
        "type": "Riempimento",
        "fmt": "fill",
        "instr": "Scrivi il condizionale presente del verbo tra parentesi.",
        "items": [
          {
            "q": "___ un caffè, grazie. (io – volere)",
            "a": "Vorrei",
            "no": [
              "Voglierei",
              "Volerei",
              "Vorrebbe"
            ]
          },
          {
            "q": "___ aiutarmi? (tu – potere)",
            "a": "Potresti",
            "no": [
              "Poteresti",
              "Potrei",
              "Puoteresti"
            ]
          },
          {
            "q": "Noi ___ partire prima. (dovere)",
            "a": "dovremmo",
            "no": [
              "doveremmo",
              "dovremo",
              "dovressimo"
            ]
          },
          {
            "q": "Lei ___ volentieri. (venire)",
            "a": "verrebbe",
            "no": [
              "venirebbe",
              "verebbe",
              "verrebbero"
            ]
          },
          {
            "q": "Loro ___ una casa più grande. (comprare)",
            "a": "comprerebbero",
            "no": [
              "compriremmo",
              "comprarebbero",
              "compreranno"
            ]
          },
          {
            "q": "Io ___ in Italia volentieri. (vivere)",
            "a": "vivrei",
            "no": [
              "viverei",
              "vivrebbe",
              "vivirei"
            ]
          },
          {
            "q": "Voi ___ un consiglio? (avere)",
            "a": "avreste",
            "no": [
              "avereste",
              "avrete",
              "avresti"
            ]
          },
          {
            "q": "Tu ___ contento di vederlo. (essere)",
            "a": "saresti",
            "no": [
              "essaresti",
              "sarai",
              "sareste"
            ]
          },
          {
            "q": "Noi ___ un tavolo per due. (prenotare)",
            "a": "prenoteremmo",
            "no": [
              "prenotaremmo",
              "prenoteremo",
              "prenotiremmo"
            ]
          },
          {
            "q": "Lui ___ la verità. (dire)",
            "a": "direbbe",
            "no": [
              "dicerebbe",
              "dirà",
              "dirrebbe"
            ]
          }
        ]
      },
      {
        "type": "Correzione",
        "fmt": "errore",
        "instr": "Clicca il condizionale coniugato in modo sbagliato.",
        "items": [
          {
            "q": "Io mangierei volentieri una pizza.",
            "wrong": "mangierei",
            "fix": "mangerei"
          },
          {
            "q": "Tu legerresti quel libro?",
            "wrong": "legerresti",
            "fix": "leggeresti"
          },
          {
            "q": "Noi restaremmo un altro giorno.",
            "wrong": "restaremmo",
            "fix": "resteremmo"
          },
          {
            "q": "Lei uscerebbe più spesso.",
            "wrong": "uscerebbe",
            "fix": "uscirebbe"
          },
          {
            "q": "Loro pagarebbero subito.",
            "wrong": "pagarebbero",
            "fix": "pagherebbero"
          },
          {
            "q": "Voi partereste domani?",
            "wrong": "partereste",
            "fix": "partireste"
          },
          {
            "q": "Io cercarei un altro lavoro.",
            "wrong": "cercarei",
            "fix": "cercherei"
          },
          {
            "q": "Tu rimaneresti ancora un po'?",
            "wrong": "rimaneresti",
            "fix": "rimarresti"
          },
          {
            "q": "Noi tenaremmo la casa.",
            "wrong": "tenaremmo",
            "fix": "terremmo"
          },
          {
            "q": "Lui berebbe volentieri un tè.",
            "wrong": "berebbe",
            "fix": "berrebbe"
          }
        ]
      },
      {
        "type": "Trasformazione",
        "fmt": "buco",
        "instr": "Rendi la richiesta o il desiderio più cortese col condizionale.",
        "items": [
          {
            "q": "Voglio un bicchiere d'acqua. →",
            "options": [
              "Vorrei un bicchiere d'acqua.",
              "Volerei un bicchiere d'acqua.",
              "Vorrebbe un bicchiere d'acqua."
            ],
            "answer": 0
          },
          {
            "q": "Puoi ripetere? →",
            "options": [
              "Potresti ripetere?",
              "Poteresti ripetere?",
              "Potrei ripetere?"
            ],
            "answer": 0
          },
          {
            "q": "Devi riposare di più. →",
            "options": [
              "Dovresti riposare di più.",
              "Doveresti riposare di più.",
              "Dovrei riposare di più."
            ],
            "answer": 0
          },
          {
            "q": "Mi piace andare al mare. →",
            "options": [
              "Mi piacerebbe andare al mare.",
              "Mi piacerei andare al mare.",
              "Mi piacerebbero andare al mare."
            ],
            "answer": 0
          },
          {
            "q": "Vengo volentieri. →",
            "options": [
              "Verrei volentieri.",
              "Venirei volentieri.",
              "Verrebbe volentieri."
            ],
            "answer": 0
          },
          {
            "q": "Mi dai una mano? →",
            "options": [
              "Mi daresti una mano?",
              "Mi dareresti una mano?",
              "Mi darei una mano?"
            ],
            "answer": 0
          },
          {
            "q": "È meglio partire presto. →",
            "options": [
              "Sarebbe meglio partire presto.",
              "Sarei meglio partire presto.",
              "Essarebbe meglio partire presto."
            ],
            "answer": 0
          },
          {
            "q": "Preferiamo un tavolo fuori. →",
            "options": [
              "Preferiremmo un tavolo fuori.",
              "Preferiremo un tavolo fuori.",
              "Preferiressimo un tavolo fuori."
            ],
            "answer": 0
          },
          {
            "q": "Sai dirmi l'orario? →",
            "options": [
              "Sapresti dirmi l'orario?",
              "Saperesti dirmi l'orario?",
              "Saprei dirmi l'orario?"
            ],
            "answer": 0
          },
          {
            "q": "Voglio parlare col direttore. →",
            "options": [
              "Vorrei parlare col direttore.",
              "Vorrebbe parlare col direttore.",
              "Volerei parlare col direttore."
            ],
            "answer": 0
          }
        ]
      }
    ],
    "diag": true
  },
  {
    "lvl": "b1",
    "stima": "b2",
    "lez": [
      "B1 L16"
    ],
    "title": "Il congiuntivo passato",
    "exercises": [
      {
        "type": "Riempimento",
        "fmt": "fill",
        "instr": "Scrivi l'ausiliare al congiuntivo presente.",
        "items": [
          {
            "q": "Penso che lui ___ già partito.",
            "a": "sia",
            "no": [
              "è",
              "fosse",
              "abbia"
            ]
          },
          {
            "q": "Credo che loro ___ finito il lavoro.",
            "a": "abbiano",
            "no": [
              "hanno",
              "avessero",
              "abbia"
            ]
          },
          {
            "q": "Spero che tu ___ capito bene.",
            "a": "abbia",
            "no": [
              "hai",
              "avessi",
              "abbi"
            ]
          },
          {
            "q": "Penso che lei ___ tornata ieri.",
            "a": "sia",
            "no": [
              "è",
              "fosse",
              "abbia"
            ]
          },
          {
            "q": "Credo che voi ___ studiato molto.",
            "a": "abbiate",
            "no": [
              "avete",
              "aveste",
              "abbiano"
            ]
          },
          {
            "q": "Mi pare che noi ___ sbagliato strada.",
            "a": "abbiamo",
            "no": [
              "avevamo",
              "avessimo",
              "abbiate"
            ]
          },
          {
            "q": "Penso che i ragazzi ___ usciti.",
            "a": "siano",
            "no": [
              "sono",
              "fossero",
              "sia"
            ]
          },
          {
            "q": "Spero che il pacco ___ arrivato.",
            "a": "sia",
            "no": [
              "è",
              "fosse",
              "abbia"
            ]
          },
          {
            "q": "Credo che tu ___ scelto giusto.",
            "a": "abbia",
            "no": [
              "hai",
              "avessi",
              "abbi"
            ]
          },
          {
            "q": "Mi sembra che loro ___ già mangiato.",
            "a": "abbiano",
            "no": [
              "hanno",
              "avessero",
              "abbia"
            ]
          }
        ]
      },
      {
        "type": "Correzione",
        "fmt": "errore",
        "instr": "Clicca l'ausiliare sbagliato.",
        "items": [
          {
            "q": "Mi sembra che Marco ha traslocato.",
            "wrong": "ha",
            "fix": "abbia"
          },
          {
            "q": "È probabile che loro sono rientrati.",
            "wrong": "sono",
            "fix": "siano"
          },
          {
            "q": "Dubito che tu hai letto il contratto.",
            "wrong": "hai",
            "fix": "abbia"
          },
          {
            "q": "Immagino che lei è guarita.",
            "wrong": "è",
            "fix": "sia"
          },
          {
            "q": "Non credo che voi avete prenotato.",
            "wrong": "avete",
            "fix": "abbiate"
          },
          {
            "q": "Temo che noi avevamo dimenticato tutto.",
            "wrong": "avevamo",
            "fix": "abbiamo"
          },
          {
            "q": "Sembra che i vicini hanno venduto casa.",
            "wrong": "hanno",
            "fix": "abbiano"
          },
          {
            "q": "Peccato che il negozio ha chiuso.",
            "wrong": "ha",
            "fix": "abbia"
          },
          {
            "q": "Mi auguro che tu ti sei divertito.",
            "wrong": "sei",
            "fix": "sia"
          },
          {
            "q": "È strano che loro non hanno risposto.",
            "wrong": "hanno",
            "fix": "abbiano"
          }
        ]
      },
      {
        "type": "Trasformazione",
        "fmt": "buco",
        "instr": "Trasforma con «Credo che».",
        "items": [
          {
            "q": "Hanno chiuso il locale. →",
            "options": [
              "Credo che abbiano chiuso il locale.",
              "Credo che hanno chiuso il locale.",
              "Credo che avessero chiuso il locale."
            ],
            "answer": 0
          },
          {
            "q": "Il pacco è stato consegnato. →",
            "options": [
              "Credo che il pacco sia stato consegnato.",
              "Credo che il pacco è stato consegnato.",
              "Credo che il pacco fosse stato consegnato."
            ],
            "answer": 0
          },
          {
            "q": "Avete prenotato il volo. →",
            "options": [
              "Credo che abbiate prenotato il volo.",
              "Credo che avete prenotato il volo.",
              "Credo che aveste prenotato il volo."
            ],
            "answer": 0
          },
          {
            "q": "Luca si è trasferito. →",
            "options": [
              "Credo che Luca si sia trasferito.",
              "Credo che Luca si è trasferito.",
              "Credo che Luca si fosse trasferito."
            ],
            "answer": 0
          },
          {
            "q": "Hai spedito la lettera. →",
            "options": [
              "Credo che tu abbia spedito la lettera.",
              "Credo che tu hai spedito la lettera.",
              "Credo che tu avessi spedito la lettera."
            ],
            "answer": 0
          },
          {
            "q": "Le ragazze sono uscite. →",
            "options": [
              "Credo che le ragazze siano uscite.",
              "Credo che le ragazze sono uscite.",
              "Credo che le ragazze fossero uscite."
            ],
            "answer": 0
          },
          {
            "q": "Abbiamo dimenticato le chiavi. →",
            "options": [
              "Credo che abbiamo dimenticato le chiavi.",
              "Credo che avevamo dimenticato le chiavi.",
              "Credo che avessimo dimenticato le chiavi."
            ],
            "answer": 0
          },
          {
            "q": "Ha vinto il concorso. →",
            "options": [
              "Credo che abbia vinto il concorso.",
              "Credo che ha vinto il concorso.",
              "Credo che avesse vinto il concorso."
            ],
            "answer": 0
          },
          {
            "q": "Vi siete divertiti. →",
            "options": [
              "Credo che vi siate divertiti.",
              "Credo che vi siete divertiti.",
              "Credo che vi foste divertiti."
            ],
            "answer": 0
          },
          {
            "q": "Hanno cambiato idea. →",
            "options": [
              "Credo che abbiano cambiato idea.",
              "Credo che hanno cambiato idea.",
              "Credo che avessero cambiato idea."
            ],
            "answer": 0
          }
        ]
      }
    ]
  },
  {
    "lvl": "b1",
    "stima": "a2",
    "lez": [
      "B1 L17"
    ],
    "title": "Stare per + infinito",
    "exercises": [
      {
        "type": "Riempimento",
        "fmt": "buco",
        "instr": "Scegli la forma corretta di «stare per».",
        "items": [
          {
            "q": "Il treno ___ partire.",
            "options": [
              "sta per",
              "è per",
              "sta a"
            ],
            "answer": 0
          },
          {
            "q": "___ uscire quando ha telefonato. (io)",
            "options": [
              "Stavo per",
              "Ero per",
              "Stavo a"
            ],
            "answer": 0
          },
          {
            "q": "Noi ___ cenare, vieni?",
            "options": [
              "stiamo per",
              "siamo per",
              "stiamo a"
            ],
            "answer": 0
          },
          {
            "q": "Il film ___ cominciare.",
            "options": [
              "sta per",
              "è per",
              "sta a"
            ],
            "answer": 0
          },
          {
            "q": "___ chiamarti proprio adesso. (io)",
            "options": [
              "Stavo per",
              "Ero per",
              "Stavo a"
            ],
            "answer": 0
          },
          {
            "q": "Loro ___ arrivare, li aspettiamo.",
            "options": [
              "stanno per",
              "sono per",
              "stanno a"
            ],
            "answer": 0
          },
          {
            "q": "___ piovere, prendi l'ombrello.",
            "options": [
              "Sta per",
              "È per",
              "Sta a"
            ],
            "answer": 0
          },
          {
            "q": "Voi ___ partire? Vi accompagno.",
            "options": [
              "state per",
              "siete per",
              "state a"
            ],
            "answer": 0
          },
          {
            "q": "Il negozio ___ chiudere.",
            "options": [
              "sta per",
              "è per",
              "sta a"
            ],
            "answer": 0
          },
          {
            "q": "___ dirtelo ma mi hai interrotto. (io)",
            "options": [
              "Stavo per",
              "Ero per",
              "Stavo a"
            ],
            "answer": 0
          }
        ]
      },
      {
        "type": "Correzione",
        "fmt": "errore",
        "instr": "Clicca la parola sbagliata.",
        "items": [
          {
            "q": "Il concerto è per cominciare.",
            "wrong": "è",
            "fix": "sta"
          },
          {
            "q": "Sto per mangiando qualcosa.",
            "wrong": "mangiando",
            "fix": "mangiare"
          },
          {
            "q": "Noi siamo per traslocare.",
            "wrong": "siamo",
            "fix": "stiamo"
          },
          {
            "q": "Sta a chiudere il museo.",
            "wrong": "a",
            "fix": "per"
          },
          {
            "q": "Ero per addormentarmi.",
            "wrong": "Ero",
            "fix": "Stavo"
          },
          {
            "q": "Loro sono per laurearsi.",
            "wrong": "sono",
            "fix": "stanno"
          },
          {
            "q": "Sta per tramonta il sole.",
            "wrong": "tramonta",
            "fix": "tramontare"
          },
          {
            "q": "Voi siete per rientrare?",
            "wrong": "siete",
            "fix": "state"
          },
          {
            "q": "Il corso sta di iniziare.",
            "wrong": "di",
            "fix": "per"
          },
          {
            "q": "Stavo per chiamato il medico.",
            "wrong": "chiamato",
            "fix": "chiamare"
          }
        ]
      },
      {
        "type": "Trasformazione",
        "fmt": "buco",
        "instr": "Riscrivi indicando un'azione imminente.",
        "items": [
          {
            "q": "La riunione finisce fra poco. →",
            "options": [
              "La riunione sta per finire.",
              "La riunione è per finire.",
              "La riunione sta finendo per."
            ],
            "answer": 0
          },
          {
            "q": "Ordiniamo adesso. →",
            "options": [
              "Stiamo per ordinare.",
              "Siamo per ordinare.",
              "Stiamo a ordinare."
            ],
            "answer": 0
          },
          {
            "q": "Il contratto scade a giorni. →",
            "options": [
              "Il contratto sta per scadere.",
              "Il contratto è per scadere.",
              "Il contratto sta a scadere."
            ],
            "answer": 0
          },
          {
            "q": "Rispondevo proprio ora. →",
            "options": [
              "Stavo per rispondere.",
              "Ero per rispondere.",
              "Stavo a rispondere."
            ],
            "answer": 0
          },
          {
            "q": "Firmano fra un attimo. →",
            "options": [
              "Stanno per firmare.",
              "Sono per firmare.",
              "Stanno a firmare."
            ],
            "answer": 0
          },
          {
            "q": "Nevica sulle Alpi tra poco. →",
            "options": [
              "Sta per nevicare sulle Alpi.",
              "È per nevicare sulle Alpi.",
              "Sta a nevicare sulle Alpi."
            ],
            "answer": 0
          },
          {
            "q": "Atterrate fra cinque minuti? →",
            "options": [
              "State per atterrare?",
              "Siete per atterrare?",
              "State ad atterrare?"
            ],
            "answer": 0
          },
          {
            "q": "La banca apre adesso. →",
            "options": [
              "La banca sta per aprire.",
              "La banca è per aprire.",
              "La banca sta ad aprire."
            ],
            "answer": 0
          },
          {
            "q": "Spedivo il pacco proprio ora. →",
            "options": [
              "Stavo per spedire il pacco.",
              "Ero per spedire il pacco.",
              "Stavo a spedire il pacco."
            ],
            "answer": 0
          },
          {
            "q": "Esco fra un minuto. →",
            "options": [
              "Sto per uscire.",
              "Sono per uscire.",
              "Sto a uscire."
            ],
            "answer": 0
          }
        ]
      }
    ]
  },
  {
    "lvl": "b1",
    "lez": [
      "B1 L17",
      "B1 L18"
    ],
    "title": "I connettivi logici",
    "exercises": [
      {
        "type": "Riempimento",
        "fmt": "buco",
        "instr": "Scegli il connettivo adatto alla relazione logica.",
        "items": [
          {
            "q": "Ho studiato molto, ___ ho superato l'esame.",
            "options": [
              "quindi",
              "invece",
              "anche se"
            ],
            "answer": 0
          },
          {
            "q": "Volevo uscire, ___ è cominciato a piovere.",
            "options": [
              "però",
              "quindi",
              "perciò"
            ],
            "answer": 0
          },
          {
            "q": "Non ha risposto ___ era occupato.",
            "options": [
              "perché",
              "quindi",
              "invece"
            ],
            "answer": 0
          },
          {
            "q": "Lui preferisce il mare, io ___ la montagna.",
            "options": [
              "invece",
              "quindi",
              "perciò"
            ],
            "answer": 0
          },
          {
            "q": "Il locale era pieno, ___ siamo andati altrove.",
            "options": [
              "perciò",
              "perché",
              "invece"
            ],
            "answer": 0
          },
          {
            "q": "___ fosse stanco, ha continuato.",
            "options": [
              "Anche se",
              "Quindi",
              "Perciò"
            ],
            "answer": 0
          },
          {
            "q": "Ho perso il treno, ___ sono arrivato tardi.",
            "options": [
              "così",
              "perché",
              "invece"
            ],
            "answer": 0
          },
          {
            "q": "Non solo è bravo, ___ è anche simpatico.",
            "options": [
              "ma",
              "quindi",
              "perché"
            ],
            "answer": 0
          },
          {
            "q": "Studia molto, ___ non ottiene buoni voti.",
            "options": [
              "eppure",
              "quindi",
              "perciò"
            ],
            "answer": 0
          },
          {
            "q": "___ del ritardo, siamo arrivati in tempo.",
            "options": [
              "Nonostante",
              "Quindi",
              "Perché"
            ],
            "answer": 0
          }
        ]
      },
      {
        "type": "Correzione",
        "fmt": "errore",
        "instr": "Clicca il connettivo che esprime la relazione sbagliata.",
        "items": [
          {
            "q": "Ho studiato poco, quindi ho preso un bel voto.",
            "wrong": "quindi",
            "fix": "eppure"
          },
          {
            "q": "Era tardi, perché siamo tornati a casa.",
            "wrong": "perché",
            "fix": "perciò"
          },
          {
            "q": "Non è uscito quindi era malato.",
            "wrong": "quindi",
            "fix": "perché"
          },
          {
            "q": "Piove forte, invece prendo l'ombrello.",
            "wrong": "invece",
            "fix": "quindi"
          },
          {
            "q": "È molto bravo, perciò non lo assumono.",
            "wrong": "perciò",
            "fix": "eppure"
          },
          {
            "q": "Ho fame, però mangio qualcosa.",
            "wrong": "però",
            "fix": "quindi"
          },
          {
            "q": "Nonostante il sole, siamo andati al mare per il caldo.",
            "wrong": "Nonostante",
            "fix": "Grazie a"
          },
          {
            "q": "Non ho soldi, così compro la macchina.",
            "wrong": "così",
            "fix": "perciò non"
          },
          {
            "q": "Lui ama il calcio, quindi io preferisco il tennis.",
            "wrong": "quindi",
            "fix": "invece"
          },
          {
            "q": "Era stanco, anche se è andato a dormire.",
            "wrong": [
              "anche",
              "se"
            ],
            "fix": "perciò"
          }
        ]
      },
      {
        "type": "Trasformazione",
        "fmt": "buco",
        "instr": "Unisci le due frasi con il connettivo adatto.",
        "items": [
          {
            "q": "Ho fretta. Prendo un taxi.",
            "options": [
              "Ho fretta, quindi prendo un taxi.",
              "Ho fretta, però prendo un taxi.",
              "Ho fretta, perché prendo un taxi."
            ],
            "answer": 0
          },
          {
            "q": "Volevo aiutarti. Non avevo tempo.",
            "options": [
              "Volevo aiutarti, però non avevo tempo.",
              "Volevo aiutarti, quindi non avevo tempo.",
              "Volevo aiutarti, perché non avevo tempo."
            ],
            "answer": 0
          },
          {
            "q": "Resto a casa. Sono raffreddato.",
            "options": [
              "Resto a casa perché sono raffreddato.",
              "Resto a casa quindi sono raffreddato.",
              "Resto a casa invece sono raffreddato."
            ],
            "answer": 0
          },
          {
            "q": "Lei studia legge. Io studio medicina.",
            "options": [
              "Lei studia legge, io invece medicina.",
              "Lei studia legge, io quindi medicina.",
              "Lei studia legge, io perché medicina."
            ],
            "answer": 0
          },
          {
            "q": "Era stanco. Ha finito il lavoro.",
            "options": [
              "Anche se era stanco, ha finito il lavoro.",
              "Perché era stanco, ha finito il lavoro.",
              "Quindi era stanco, ha finito il lavoro."
            ],
            "answer": 0
          },
          {
            "q": "Ha nevicato. Le strade sono chiuse.",
            "options": [
              "Ha nevicato, perciò le strade sono chiuse.",
              "Ha nevicato, però le strade sono chiuse.",
              "Ha nevicato, invece le strade sono chiuse."
            ],
            "answer": 0
          },
          {
            "q": "È tardi. Non è ancora arrivato.",
            "options": [
              "È tardi eppure non è ancora arrivato.",
              "È tardi quindi non è ancora arrivato.",
              "È tardi perché non è ancora arrivato."
            ],
            "answer": 0
          },
          {
            "q": "Il corso è utile. Il corso è costoso.",
            "options": [
              "Il corso è utile ma costoso.",
              "Il corso è utile perciò costoso.",
              "Il corso è utile perché costoso."
            ],
            "answer": 0
          },
          {
            "q": "Piove. Portiamo l'ombrello.",
            "options": [
              "Piove, così portiamo l'ombrello.",
              "Piove, però portiamo l'ombrello.",
              "Piove, invece portiamo l'ombrello."
            ],
            "answer": 0
          },
          {
            "q": "Non conosce la città. Si orienta bene.",
            "options": [
              "Non conosce la città, eppure si orienta bene.",
              "Non conosce la città, quindi si orienta bene.",
              "Non conosce la città, perché si orienta bene."
            ],
            "answer": 0
          }
        ]
      }
    ]
  },
  {
    "lvl": "b1",
    "lez": [
      "B1 L18",
      "B1 L23"
    ],
    "title": "L'imperativo con i pronomi",
    "exercises": [
      {
        "type": "Composizione",
        "fmt": "ordina",
        "instr": "Clicca le parole nell'ordine giusto.",
        "items": [
          {
            "q": "All'imperativo affermativo il pronome si attacca al verbo.",
            "sol": [
              "Dammelo",
              "subito"
            ]
          },
          {
            "q": "Il pronome si attacca anche qui.",
            "sol": [
              "Portami",
              "il",
              "conto"
            ]
          },
          {
            "q": "Con l'imperativo negativo il pronome può stare prima.",
            "sol": [
              "Non",
              "me",
              "lo",
              "dire"
            ]
          },
          {
            "q": "Attenzione alla posizione del pronome.",
            "sol": [
              "Aspettami",
              "fuori"
            ]
          },
          {
            "q": "Il pronome combinato si attacca al verbo.",
            "sol": [
              "Diglielo",
              "tu"
            ]
          },
          {
            "q": "Nella forma di cortesia il pronome sta prima.",
            "sol": [
              "Mi",
              "dia",
              "il",
              "documento"
            ]
          },
          {
            "q": "Il pronome resta attaccato all'imperativo.",
            "sol": [
              "Scrivimi",
              "presto"
            ]
          },
          {
            "q": "Con il Lei il pronome precede il verbo.",
            "sol": [
              "Si",
              "accomodi",
              "prego"
            ]
          },
          {
            "q": "Il pronome combinato si attacca all'imperativo.",
            "sol": [
              "Mandamela",
              "per",
              "favore"
            ]
          },
          {
            "q": "Nell'imperativo negativo con «tu» si usa l'infinito.",
            "sol": [
              "Non",
              "farlo",
              "adesso"
            ]
          }
        ]
      },
      {
        "type": "Correzione",
        "fmt": "errore",
        "instr": "Clicca la parola sbagliata.",
        "items": [
          {
            "q": "Mi dai il libro subito!",
            "wrong": "dai",
            "fix": "Dammi"
          },
          {
            "q": "Lo dire a Marco!",
            "wrong": "dire",
            "fix": "Diglielo"
          },
          {
            "q": "Signora, accomodati pure!",
            "wrong": "accomodati",
            "fix": "si accomodi"
          },
          {
            "q": "Non dammelo adesso!",
            "wrong": "dammelo",
            "fix": "me lo dare"
          },
          {
            "q": "Mi aspetta fuori, per favore! (a un amico)",
            "wrong": "aspetta",
            "fix": "Aspettami"
          },
          {
            "q": "Signore, dammi il documento!",
            "wrong": "dammi",
            "fix": "mi dia"
          },
          {
            "q": "Scrivi mi presto!",
            "wrong": "mi",
            "fix": "Scrivimi (attaccato)"
          },
          {
            "q": "Signora, alzati per favore!",
            "wrong": "alzati",
            "fix": "si alzi"
          },
          {
            "q": "Manda mela per favore!",
            "wrong": "mela",
            "fix": "Mandamela (attaccato)"
          },
          {
            "q": "Non fare lo adesso!",
            "wrong": "lo",
            "fix": "farlo (attaccato)"
          }
        ]
      },
      {
        "type": "Trasformazione",
        "fmt": "buco",
        "instr": "Trasforma con il pronome attaccato.",
        "items": [
          {
            "q": "Presta la penna a me. →",
            "options": [
              "Prestamela.",
              "Mi prestala.",
              "Presta mela."
            ],
            "answer": 0
          },
          {
            "q": "Racconta la storia a noi. →",
            "options": [
              "Raccontacela.",
              "Ci raccontala.",
              "Racconta cela."
            ],
            "answer": 0
          },
          {
            "q": "Mostra le foto a lui. →",
            "options": [
              "Mostragliele.",
              "Gli mostrale.",
              "Mostra gliele."
            ],
            "answer": 0
          },
          {
            "q": "Chiama me più tardi. →",
            "options": [
              "Chiamami più tardi.",
              "Mi chiama più tardi.",
              "Chiama mi più tardi."
            ],
            "answer": 0
          },
          {
            "q": "Restituisci il libro a lei. →",
            "options": [
              "Restituisciglielo.",
              "Le restituiscilo.",
              "Restituisci glielo."
            ],
            "answer": 0
          },
          {
            "q": "Prepara il caffè per noi. →",
            "options": [
              "Preparacelo.",
              "Ci preparalo.",
              "Prepara celo."
            ],
            "answer": 0
          },
          {
            "q": "Non regalare questo a me. →",
            "options": [
              "Non regalarmelo.",
              "Non mi regalalo.",
              "Non regala melo."
            ],
            "answer": 0
          },
          {
            "q": "Ripeti la domanda a loro. →",
            "options": [
              "Ripetigliela.",
              "Gli ripetila.",
              "Ripeti gliela."
            ],
            "answer": 0
          },
          {
            "q": "Aiuta noi adesso. →",
            "options": [
              "Aiutaci adesso.",
              "Ci aiuta adesso.",
              "Aiuta ci adesso."
            ],
            "answer": 0
          },
          {
            "q": "Non dire questo a lui. →",
            "options": [
              "Non dirglielo.",
              "Non gli dillo.",
              "Non dire glielo."
            ],
            "answer": 0
          }
        ]
      }
    ]
  },
  {
    "lvl": "b1",
    "lez": [
      "B1 L19"
    ],
    "title": "Il pronome relativo «che»",
    "exercises": [
      {
        "type": "Riempimento",
        "fmt": "buco",
        "instr": "Scegli il pronome relativo corretto.",
        "items": [
          {
            "q": "Il libro ___ ho letto è bellissimo.",
            "options": [
              "che",
              "cui",
              "chi"
            ],
            "answer": 0
          },
          {
            "q": "La ragazza ___ abita qui è mia cugina.",
            "options": [
              "che",
              "cui",
              "chi"
            ],
            "answer": 0
          },
          {
            "q": "L'amico di ___ ti ho parlato arriva domani.",
            "options": [
              "cui",
              "che",
              "chi"
            ],
            "answer": 0
          },
          {
            "q": "Il film ___ abbiamo visto era noioso.",
            "options": [
              "che",
              "cui",
              "chi"
            ],
            "answer": 0
          },
          {
            "q": "La città in ___ vivo è tranquilla.",
            "options": [
              "cui",
              "che",
              "chi"
            ],
            "answer": 0
          },
          {
            "q": "Le persone ___ lavorano qui sono gentili.",
            "options": [
              "che",
              "cui",
              "chi"
            ],
            "answer": 0
          },
          {
            "q": "Il motivo per ___ sono venuto è semplice.",
            "options": [
              "cui",
              "che",
              "chi"
            ],
            "answer": 0
          },
          {
            "q": "La casa ___ abbiamo comprato è grande.",
            "options": [
              "che",
              "cui",
              "chi"
            ],
            "answer": 0
          },
          {
            "q": "Il collega con ___ lavoro è bravo.",
            "options": [
              "cui",
              "che",
              "chi"
            ],
            "answer": 0
          },
          {
            "q": "I documenti ___ servono sono pronti.",
            "options": [
              "che",
              "cui",
              "chi"
            ],
            "answer": 0
          }
        ]
      },
      {
        "type": "Correzione",
        "fmt": "errore",
        "instr": "Clicca il pronome relativo sbagliato.",
        "items": [
          {
            "q": "Il quadro cui ho comprato è antico.",
            "wrong": "cui",
            "fix": "che"
          },
          {
            "q": "Il vicino cui abita sopra è rumoroso.",
            "wrong": "cui",
            "fix": "che"
          },
          {
            "q": "La collega di che ti ho scritto è brava.",
            "wrong": "che",
            "fix": "cui"
          },
          {
            "q": "Il paese in che sono nato è piccolo.",
            "wrong": "che",
            "fix": "cui"
          },
          {
            "q": "Gli operai cui lavorano qui sono esperti.",
            "wrong": "cui",
            "fix": "che"
          },
          {
            "q": "La ragione per che ho rifiutato è chiara.",
            "wrong": "che",
            "fix": "cui"
          },
          {
            "q": "L'amico con che studio è tedesco.",
            "wrong": "che",
            "fix": "cui"
          },
          {
            "q": "Le pratiche cui mancano sono due.",
            "wrong": "cui",
            "fix": "che"
          },
          {
            "q": "La ditta chi ha vinto l'appalto è locale.",
            "wrong": "chi",
            "fix": "che"
          },
          {
            "q": "La città da che arrivo è lontana.",
            "wrong": "che",
            "fix": "cui"
          }
        ]
      },
      {
        "type": "Trasformazione",
        "fmt": "buco",
        "instr": "Unisci le due frasi con «che».",
        "items": [
          {
            "q": "Ho un amico. Lui abita a Roma.",
            "options": [
              "Ho un amico che abita a Roma.",
              "Ho un amico cui abita a Roma.",
              "Ho un amico chi abita a Roma."
            ],
            "answer": 0
          },
          {
            "q": "Ho letto un libro. Il libro era interessante.",
            "options": [
              "Il libro che ho letto era interessante.",
              "Il libro cui ho letto era interessante.",
              "Il libro chi ho letto era interessante."
            ],
            "answer": 0
          },
          {
            "q": "Conosco una ragazza. La ragazza parla cinese.",
            "options": [
              "Conosco una ragazza che parla cinese.",
              "Conosco una ragazza cui parla cinese.",
              "Conosco una ragazza chi parla cinese."
            ],
            "answer": 0
          },
          {
            "q": "Ho comprato una macchina. La macchina consuma poco.",
            "options": [
              "Ho comprato una macchina che consuma poco.",
              "Ho comprato una macchina cui consuma poco.",
              "Ho comprato una macchina chi consuma poco."
            ],
            "answer": 0
          },
          {
            "q": "Ci sono studenti. Gli studenti studiano molto.",
            "options": [
              "Ci sono studenti che studiano molto.",
              "Ci sono studenti cui studiano molto.",
              "Ci sono studenti chi studiano molto."
            ],
            "answer": 0
          },
          {
            "q": "Ho visto un film. Il film mi è piaciuto.",
            "options": [
              "Il film che ho visto mi è piaciuto.",
              "Il film cui ho visto mi è piaciuto.",
              "Il film chi ho visto mi è piaciuto."
            ],
            "answer": 0
          },
          {
            "q": "Ho una collega. La collega parla tedesco.",
            "options": [
              "Ho una collega che parla tedesco.",
              "Ho una collega cui parla tedesco.",
              "Ho una collega chi parla tedesco."
            ],
            "answer": 0
          },
          {
            "q": "Aspetto un pacco. Il pacco arriva domani.",
            "options": [
              "Il pacco che aspetto arriva domani.",
              "Il pacco cui aspetto arriva domani.",
              "Il pacco chi aspetto arriva domani."
            ],
            "answer": 0
          },
          {
            "q": "C'è una strada. La strada porta al mare.",
            "options": [
              "C'è una strada che porta al mare.",
              "C'è una strada cui porta al mare.",
              "C'è una strada chi porta al mare."
            ],
            "answer": 0
          },
          {
            "q": "Ho scritto una mail. La mail non è arrivata.",
            "options": [
              "La mail che ho scritto non è arrivata.",
              "La mail cui ho scritto non è arrivata.",
              "La mail chi ho scritto non è arrivata."
            ],
            "answer": 0
          }
        ]
      }
    ],
    "diag": true
  },
  {
    "lvl": "b1",
    "lez": [
      "B1 L20"
    ],
    "title": "I pronomi indiretti",
    "exercises": [
      {
        "type": "Riempimento",
        "fmt": "buco",
        "instr": "Scegli il pronome indiretto corretto.",
        "items": [
          {
            "q": "Scrivo a Marco. → ___ scrivo.",
            "options": [
              "Gli",
              "Le",
              "Lo"
            ],
            "answer": 0
          },
          {
            "q": "Telefono a Sara. → ___ telefono.",
            "options": [
              "Le",
              "Gli",
              "La"
            ],
            "answer": 0
          },
          {
            "q": "Regalo un libro ai bambini. → ___ regalo un libro.",
            "options": [
              "Gli",
              "Le",
              "Li"
            ],
            "answer": 0
          },
          {
            "q": "Chiedo un favore a te. → ___ chiedo un favore.",
            "options": [
              "Ti",
              "Te",
              "Tu"
            ],
            "answer": 0
          },
          {
            "q": "Dico la verità a voi. → ___ dico la verità.",
            "options": [
              "Vi",
              "Ve",
              "Voi"
            ],
            "answer": 0
          },
          {
            "q": "Rispondo a mia madre. → ___ rispondo.",
            "options": [
              "Le",
              "Gli",
              "La"
            ],
            "answer": 0
          },
          {
            "q": "Mandano una mail a noi. → ___ mandano una mail.",
            "options": [
              "Ci",
              "Ce",
              "Noi"
            ],
            "answer": 0
          },
          {
            "q": "Spiego la regola agli studenti. → ___ spiego la regola.",
            "options": [
              "Gli",
              "Le",
              "Li"
            ],
            "answer": 0
          },
          {
            "q": "Presto la macchina a Luca. → ___ presto la macchina.",
            "options": [
              "Gli",
              "Le",
              "Lo"
            ],
            "answer": 0
          },
          {
            "q": "Offro un caffè a te. → ___ offro un caffè.",
            "options": [
              "Ti",
              "Te",
              "Tu"
            ],
            "answer": 0
          }
        ]
      },
      {
        "type": "Correzione",
        "fmt": "errore",
        "instr": "Clicca il pronome sbagliato (diretto invece di indiretto o viceversa).",
        "items": [
          {
            "q": "Lo telefono stasera.",
            "wrong": "Lo",
            "fix": "Gli"
          },
          {
            "q": "La scrivo una mail.",
            "wrong": "La",
            "fix": "Le"
          },
          {
            "q": "Li regalo un libro.",
            "wrong": "Li",
            "fix": "Gli"
          },
          {
            "q": "Te porto una buona notizia.",
            "wrong": "Te",
            "fix": "Ti"
          },
          {
            "q": "Ve dico la verità.",
            "wrong": "Ve",
            "fix": "Vi"
          },
          {
            "q": "La rispondo subito.",
            "wrong": "La",
            "fix": "Le"
          },
          {
            "q": "Ce mandano una mail.",
            "wrong": "Ce",
            "fix": "Ci"
          },
          {
            "q": "Le spiego la regola ai ragazzi.",
            "wrong": "Le",
            "fix": "Gli"
          },
          {
            "q": "Lo presto la macchina.",
            "wrong": "Lo",
            "fix": "Gli"
          },
          {
            "q": "Le offro un caffè a Marco.",
            "wrong": "Le",
            "fix": "Gli"
          }
        ]
      },
      {
        "type": "Trasformazione",
        "fmt": "buco",
        "instr": "Sostituisci con il pronome indiretto.",
        "items": [
          {
            "q": "Telefono a mio padre. →",
            "options": [
              "Gli telefono.",
              "Lo telefono.",
              "Le telefono."
            ],
            "answer": 0
          },
          {
            "q": "Scrivo a mia sorella. →",
            "options": [
              "Le scrivo.",
              "La scrivo.",
              "Gli scrivo."
            ],
            "answer": 0
          },
          {
            "q": "Parlo ai colleghi. →",
            "options": [
              "Gli parlo.",
              "Li parlo.",
              "Le parlo."
            ],
            "answer": 0
          },
          {
            "q": "Do un consiglio a te. →",
            "options": [
              "Ti do un consiglio.",
              "Te do un consiglio.",
              "Tu do un consiglio."
            ],
            "answer": 0
          },
          {
            "q": "Chiedo aiuto a voi. →",
            "options": [
              "Vi chiedo aiuto.",
              "Ve chiedo aiuto.",
              "Voi chiedo aiuto."
            ],
            "answer": 0
          },
          {
            "q": "Rispondo alla direttrice. →",
            "options": [
              "Le rispondo.",
              "La rispondo.",
              "Gli rispondo."
            ],
            "answer": 0
          },
          {
            "q": "Mandano un pacco a noi. →",
            "options": [
              "Ci mandano un pacco.",
              "Ce mandano un pacco.",
              "Noi mandano un pacco."
            ],
            "answer": 0
          },
          {
            "q": "Insegno l'italiano agli stranieri. →",
            "options": [
              "Gli insegno l'italiano.",
              "Li insegno l'italiano.",
              "Le insegno l'italiano."
            ],
            "answer": 0
          },
          {
            "q": "Presto i libri a Marco. →",
            "options": [
              "Gli presto i libri.",
              "Lo presto i libri.",
              "Le presto i libri."
            ],
            "answer": 0
          },
          {
            "q": "Offro la cena a mia moglie. →",
            "options": [
              "Le offro la cena.",
              "La offro la cena.",
              "Gli offro la cena."
            ],
            "answer": 0
          }
        ]
      }
    ]
  },
  {
    "lvl": "b1",
    "stima": "b2",
    "lez": [
      "B1 L21",
      "B2 L7"
    ],
    "title": "I pronomi combinati",
    "exercises": [
      {
        "type": "Riempimento",
        "fmt": "fill",
        "instr": "Scrivi il pronome combinato che sostituisce le parti sottolineate.",
        "items": [
          {
            "q": "Do il libro a Marco. → ___ do.",
            "a": "Glielo",
            "no": [
              "Gli lo",
              "Lo gli",
              "Glielà"
            ]
          },
          {
            "q": "Porto la torta a Sara. → ___ porto.",
            "a": "Gliela",
            "no": [
              "Gli la",
              "La gli",
              "Glielo"
            ]
          },
          {
            "q": "Mando le foto a Luca. → ___ mando.",
            "a": "Gliele",
            "no": [
              "Gli le",
              "Le gli",
              "Glieli"
            ]
          },
          {
            "q": "Presto i libri ai ragazzi. → ___ presto.",
            "a": "Glieli",
            "no": [
              "Gli li",
              "Li gli",
              "Gliele"
            ]
          },
          {
            "q": "Parlo del problema a Anna. → ___ parlo.",
            "a": "Gliene",
            "no": [
              "Gli ne",
              "Ne gli",
              "Glielo"
            ]
          },
          {
            "q": "Mi dai il numero? → ___ dai?",
            "a": "Me lo",
            "no": [
              "Mi lo",
              "Lo mi",
              "Mi il"
            ]
          },
          {
            "q": "Ti mando la mail. → ___ mando.",
            "a": "Te la",
            "no": [
              "Ti la",
              "La ti",
              "Te lo"
            ]
          },
          {
            "q": "Ci spiega le regole. → ___ spiega.",
            "a": "Ce le",
            "no": [
              "Ci le",
              "Le ci",
              "Ce li"
            ]
          },
          {
            "q": "Vi porto i documenti. → ___ porto.",
            "a": "Ve li",
            "no": [
              "Vi li",
              "Li vi",
              "Ve le"
            ]
          },
          {
            "q": "Mi parla dei suoi viaggi. → ___ parla.",
            "a": "Me ne",
            "no": [
              "Mi ne",
              "Ne mi",
              "Me li"
            ]
          }
        ]
      },
      {
        "type": "Correzione",
        "fmt": "errore",
        "instr": "Clicca la parola sbagliata nella frase.",
        "items": [
          {
            "q": "Mi lo dai domani?",
            "wrong": "Mi",
            "fix": "Me (me lo)"
          },
          {
            "q": "Ti la restituisco domani.",
            "wrong": "Ti",
            "fix": "Te (te la)"
          },
          {
            "q": "Ci le spiega il professore.",
            "wrong": "Ci",
            "fix": "Ce (ce le)"
          },
          {
            "q": "Vi li porto io.",
            "wrong": "Vi",
            "fix": "Ve (ve li)"
          },
          {
            "q": "Gli lo ho già detto.",
            "wrong": [
              "Gli",
              "lo"
            ],
            "fix": "Glielo (si fondono in una parola)"
          },
          {
            "q": "Lo me presti un momento?",
            "wrong": [
              "Lo",
              "me"
            ],
            "fix": "Me lo (l'indiretto viene prima)"
          },
          {
            "q": "Mi ne ha parlato ieri.",
            "wrong": "Mi",
            "fix": "Me (me ne)"
          },
          {
            "q": "Te lo ho comprate ieri.",
            "wrong": "comprate",
            "fix": "comprato"
          },
          {
            "q": "Ce li ha portato Marco.",
            "wrong": "portato",
            "fix": "portati"
          },
          {
            "q": "Gliela ho spedite la settimana scorsa.",
            "wrong": "spedite",
            "fix": "spedita"
          }
        ]
      },
      {
        "type": "Composizione",
        "fmt": "ordina",
        "instr": "Clicca le parole nell'ordine giusto per formare la frase.",
        "items": [
          {
            "q": "Il pronome combinato va prima del verbo.",
            "sol": [
              "Me",
              "lo",
              "dai"
            ]
          },
          {
            "q": "Attenzione all'ordine dei due pronomi.",
            "sol": [
              "Te",
              "la",
              "porto"
            ]
          },
          {
            "q": "Con i tempi composti il pronome resta prima.",
            "sol": [
              "Glielo",
              "ho",
              "detto"
            ]
          },
          {
            "q": "Il pronome indiretto viene per primo.",
            "sol": [
              "Ce",
              "li",
              "mandano"
            ]
          },
          {
            "q": "Con «ne» vale la stessa regola.",
            "sol": [
              "Ve",
              "ne",
              "parlo"
            ]
          },
          {
            "q": "All'imperativo negativo il pronome sta prima.",
            "sol": [
              "Non",
              "me",
              "lo",
              "dare"
            ]
          },
          {
            "q": "Il participio si accorda con il pronome diretto.",
            "sol": [
              "Te",
              "li",
              "ho",
              "comprati"
            ]
          },
          {
            "q": "Attenzione all'accordo del participio.",
            "sol": [
              "Gliele",
              "abbiamo",
              "spedite"
            ]
          },
          {
            "q": "Il pronome combinato precede il verbo.",
            "sol": [
              "Me",
              "ne",
              "ha",
              "parlato"
            ]
          },
          {
            "q": "Con «lo» davanti a vocale si usa l'apostrofo.",
            "sol": [
              "Ce",
              "l'ha",
              "detto"
            ]
          }
        ]
      }
    ]
  },
  {
    "lvl": "b1",
    "stima": "b2",
    "lez": [
      "B1 L21"
    ],
    "title": "L'accordo del participio con il pronome diretto",
    "exercises": [
      {
        "type": "Riempimento",
        "fmt": "fill",
        "instr": "Scrivi il participio passato accordato con il pronome.",
        "items": [
          {
            "q": "La borsa? L'ho ___ in treno. (dimenticare)",
            "a": "dimenticata",
            "no": [
              "dimenticato",
              "dimenticate",
              "dimenticati"
            ]
          },
          {
            "q": "I regali? Li ho ___ ieri. (incartare)",
            "a": "incartati",
            "no": [
              "incartato",
              "incartate",
              "incartata"
            ]
          },
          {
            "q": "Le camicie? Le ho ___ in lavanderia. (portare)",
            "a": "portate",
            "no": [
              "portato",
              "portati",
              "portata"
            ]
          },
          {
            "q": "Il conto? L'ho ___ io. (pagare)",
            "a": "pagato",
            "no": [
              "pagata",
              "pagati",
              "pagate"
            ]
          },
          {
            "q": "Le mele? Le ho ___ al mercato. (scegliere)",
            "a": "scelte",
            "no": [
              "scelto",
              "scelti",
              "scelta"
            ]
          },
          {
            "q": "I passaporti? Li ho ___ nel cassetto. (mettere)",
            "a": "messi",
            "no": [
              "messo",
              "messe",
              "messa"
            ]
          },
          {
            "q": "La finestra? L'ho ___ io. (rompere)",
            "a": "rotta",
            "no": [
              "rotto",
              "rotte",
              "rotti"
            ]
          },
          {
            "q": "Le risposte? Le ho ___ tutte. (correggere)",
            "a": "corrette",
            "no": [
              "corretto",
              "corretti",
              "corretta"
            ]
          },
          {
            "q": "Il modulo? L'ho ___ online. (inviare)",
            "a": "inviato",
            "no": [
              "inviata",
              "inviati",
              "inviate"
            ]
          },
          {
            "q": "Le bottiglie? Le ho ___ in cantina. (nascondere)",
            "a": "nascoste",
            "no": [
              "nascosto",
              "nascosti",
              "nascosta"
            ]
          }
        ]
      },
      {
        "type": "Correzione",
        "fmt": "errore",
        "instr": "Clicca il participio con l'accordo sbagliato.",
        "items": [
          {
            "q": "Il maglione? L'ho comprata in saldo.",
            "wrong": "comprata",
            "fix": "comprato"
          },
          {
            "q": "Gli occhiali? Li ho perso al mare.",
            "wrong": "perso",
            "fix": "persi"
          },
          {
            "q": "Le lenzuola? Le ho steso al sole.",
            "wrong": "steso",
            "fix": "stese"
          },
          {
            "q": "Le fotografie? Le ho stampato ieri.",
            "wrong": "stampato",
            "fix": "stampate"
          },
          {
            "q": "I bicchieri? Li ho asciugato adesso.",
            "wrong": "asciugato",
            "fix": "asciugati"
          },
          {
            "q": "Lo scontrino? L ho conservata in tasca.",
            "wrong": "conservata",
            "fix": "conservato"
          },
          {
            "q": "Le poltrone? Le ho coperto con un telo.",
            "wrong": "coperto",
            "fix": "coperte"
          },
          {
            "q": "I fiori? Li ho raccolta in giardino.",
            "wrong": "raccolta",
            "fix": "raccolti"
          },
          {
            "q": "La torta? L'ho decorato con la panna.",
            "wrong": "decorato",
            "fix": "decorata"
          },
          {
            "q": "Le lampadine? Le ho cambiato tutte.",
            "wrong": "cambiato",
            "fix": "cambiate"
          }
        ]
      },
      {
        "type": "Trasformazione",
        "fmt": "buco",
        "instr": "Riscrivi con il pronome diretto e l'accordo.",
        "items": [
          {
            "q": "Ho stirato la camicia. →",
            "options": [
              "L'ho stirata.",
              "L'ho stirato.",
              "La ho stirato."
            ],
            "answer": 0
          },
          {
            "q": "Ho prenotato i biglietti. →",
            "options": [
              "Li ho prenotati.",
              "Li ho prenotato.",
              "Le ho prenotati."
            ],
            "answer": 0
          },
          {
            "q": "Ho lavato le tende. →",
            "options": [
              "Le ho lavate.",
              "Le ho lavato.",
              "Li ho lavate."
            ],
            "answer": 0
          },
          {
            "q": "Ho spostato le sedie. →",
            "options": [
              "Le ho spostate.",
              "Le ho spostato.",
              "Li ho spostate."
            ],
            "answer": 0
          },
          {
            "q": "Ho appeso i quadri. →",
            "options": [
              "Li ho appesi.",
              "Li ho appeso.",
              "Le ho appesi."
            ],
            "answer": 0
          },
          {
            "q": "Ho venduto la bici. →",
            "options": [
              "L'ho venduta.",
              "L'ho venduto.",
              "La ho venduto."
            ],
            "answer": 0
          },
          {
            "q": "Ho copiato le ricette. →",
            "options": [
              "Le ho copiate.",
              "Le ho copiato.",
              "Li ho copiate."
            ],
            "answer": 0
          },
          {
            "q": "Ho annaffiato le piante. →",
            "options": [
              "Le ho annaffiate.",
              "Le ho annaffiato.",
              "Li ho annaffiate."
            ],
            "answer": 0
          },
          {
            "q": "Ho consegnato la pratica. →",
            "options": [
              "L'ho consegnata.",
              "L'ho consegnato.",
              "La ho consegnato."
            ],
            "answer": 0
          },
          {
            "q": "Ho compilato i moduli. →",
            "options": [
              "Li ho compilati.",
              "Li ho compilato.",
              "Le ho compilati."
            ],
            "answer": 0
          }
        ]
      }
    ]
  },
  {
    "lvl": "b1",
    "stima": "b2",
    "lez": [
      "B1 L22"
    ],
    "title": "I verbi pronominali (andarsene, farcela, cavarsela)",
    "exercises": [
      {
        "type": "Composizione",
        "fmt": "ordina",
        "instr": "Clicca le parole nell'ordine giusto.",
        "items": [
          {
            "q": "I pronomi restano prima del verbo.",
            "sol": [
              "Me",
              "ne",
              "vado",
              "ora"
            ]
          },
          {
            "q": "Attenzione all'ordine delle particelle.",
            "sol": [
              "Non",
              "ce",
              "la",
              "faccio"
            ]
          },
          {
            "q": "La negazione sta all'inizio.",
            "sol": [
              "Non",
              "me",
              "ne",
              "pento"
            ]
          },
          {
            "q": "Al passato l'ausiliare è essere.",
            "sol": [
              "Te",
              "ne",
              "sei",
              "andato"
            ]
          },
          {
            "q": "L'ordine è fisso.",
            "sol": [
              "Ce",
              "la",
              "siamo",
              "presa"
            ]
          },
          {
            "q": "Con «tu» il pronome cambia.",
            "sol": [
              "Te",
              "la",
              "prendi",
              "sempre"
            ]
          },
          {
            "q": "Il pronome precede il verbo.",
            "sol": [
              "Se",
              "ne",
              "vergogna",
              "molto"
            ]
          },
          {
            "q": "Attenzione alla posizione.",
            "sol": [
              "Ce",
              "ne",
              "siamo",
              "pentiti"
            ]
          },
          {
            "q": "L'ordine delle particelle è obbligato.",
            "sol": [
              "Ve",
              "la",
              "prendete",
              "con",
              "me"
            ]
          },
          {
            "q": "Il pronome resta prima.",
            "sol": [
              "Se",
              "ne",
              "stanno",
              "zitti"
            ]
          }
        ]
      },
      {
        "type": "Riempimento",
        "fmt": "buco",
        "instr": "Scegli la forma corretta del verbo pronominale.",
        "items": [
          {
            "q": "Il progetto è enorme: non ___ da soli. (farcela)",
            "options": [
              "ce la facciamo",
              "ci la facciamo",
              "ce lo facciamo"
            ],
            "answer": 0
          },
          {
            "q": "In viaggio lei ___ sempre benissimo. (cavarsela)",
            "options": [
              "se la cava",
              "si la cava",
              "se lo cava"
            ],
            "answer": 0
          },
          {
            "q": "Dei pettegolezzi non ___ nulla. (importarsene)",
            "options": [
              "ce ne importa",
              "ci ne importa",
              "ce lo importa"
            ],
            "answer": 0
          },
          {
            "q": "Voi ___ del guasto? (accorgersene)",
            "options": [
              "ve ne siete accorti",
              "vi ne siete accorti",
              "ve ne avete accorto"
            ],
            "answer": 0
          },
          {
            "q": "Loro ___ del nostro aiuto. (approfittarsene)",
            "options": [
              "se ne approfittano",
              "si ne approfittano",
              "se lo approfittano"
            ],
            "answer": 0
          },
          {
            "q": "Io ___ con lo spagnolo. (cavarsela)",
            "options": [
              "me la cavo",
              "mi la cavo",
              "me lo cavo"
            ],
            "answer": 0
          },
          {
            "q": "Alla fine tu ___ da solo. (farcela)",
            "options": [
              "ce l'hai fatta",
              "ci l'hai fatta",
              "ce l'hai fatto"
            ],
            "answer": 0
          },
          {
            "q": "Lui ___ senza salutare. (andarsene)",
            "options": [
              "se n'è andato",
              "si n'è andato",
              "se ne ha andato"
            ],
            "answer": 0
          },
          {
            "q": "Noi non ___ mai del tempo. (lamentarsene)",
            "options": [
              "ce ne lamentiamo",
              "ci ne lamentiamo",
              "ce lo lamentiamo"
            ],
            "answer": 0
          },
          {
            "q": "Voi ___ subito dopo cena. (andarsene)",
            "options": [
              "ve ne andate",
              "vi ne andate",
              "ve lo andate"
            ],
            "answer": 0
          }
        ]
      },
      {
        "type": "Correzione",
        "fmt": "errore",
        "instr": "Clicca la particella o l'ausiliare sbagliato.",
        "items": [
          {
            "q": "Questo compito è duro, non ci la faccio.",
            "wrong": "ci",
            "fix": "ce"
          },
          {
            "q": "Con i clienti lui si la cava bene.",
            "wrong": "si",
            "fix": "se"
          },
          {
            "q": "Della critica non mi ne importa.",
            "wrong": "mi",
            "fix": "me"
          },
          {
            "q": "Loro se ne hanno accorti tardi.",
            "wrong": "hanno",
            "fix": "sono"
          },
          {
            "q": "Noi non ci ne approfittiamo mai.",
            "wrong": "ci",
            "fix": "ce"
          },
          {
            "q": "Tu ti la cavi bene in cucina.",
            "wrong": "ti",
            "fix": "te"
          },
          {
            "q": "Alla fine loro ci l'hanno fatta.",
            "wrong": "ci",
            "fix": "ce"
          },
          {
            "q": "Voi vi ne siete andati subito.",
            "wrong": "vi",
            "fix": "ve"
          },
          {
            "q": "Lei si ne lamenta sempre.",
            "wrong": "si",
            "fix": "se"
          },
          {
            "q": "Io mi la cavo con il tedesco.",
            "wrong": "mi",
            "fix": "me"
          }
        ]
      }
    ]
  },
  {
    "lvl": "b1",
    "lez": [
      "B1 L23"
    ],
    "title": "Il «si» impersonale",
    "exercises": [
      {
        "type": "Riempimento",
        "fmt": "buco",
        "instr": "Scegli la forma impersonale corretta.",
        "items": [
          {
            "q": "In Italia ___ molto caffè.",
            "options": [
              "si beve",
              "si bevono",
              "si bere"
            ],
            "answer": 0
          },
          {
            "q": "Qui ___ bene e ___ poco.",
            "options": [
              "si mangia / si spende",
              "si mangiano / si spendono",
              "si mangia / si spendono"
            ],
            "answer": 0
          },
          {
            "q": "In biblioteca non ___ .",
            "options": [
              "si parla",
              "si parlano",
              "si parlare"
            ],
            "answer": 0
          },
          {
            "q": "D'estate ___ tardi la sera.",
            "options": [
              "si cena",
              "si cenano",
              "si cenare"
            ],
            "answer": 0
          },
          {
            "q": "In montagna ___ aria pulita.",
            "options": [
              "si respira",
              "si respirano",
              "si respirare"
            ],
            "answer": 0
          },
          {
            "q": "Come ___ questa parola?",
            "options": [
              "si scrive",
              "si scrivono",
              "si scrivere"
            ],
            "answer": 0
          },
          {
            "q": "In questo paese ___ presto.",
            "options": [
              "si lavora",
              "si lavorano",
              "si lavorare"
            ],
            "answer": 0
          },
          {
            "q": "Al mare ___ e ___ .",
            "options": [
              "si nuota / si riposa",
              "si nuotano / si riposano",
              "si nuota / si riposano"
            ],
            "answer": 0
          },
          {
            "q": "Non ___ mai abbastanza.",
            "options": [
              "si studia",
              "si studiano",
              "si studiare"
            ],
            "answer": 0
          },
          {
            "q": "Qui ___ in fretta.",
            "options": [
              "si vive",
              "si vivono",
              "si vivere"
            ],
            "answer": 0
          }
        ]
      },
      {
        "type": "Correzione",
        "fmt": "errore",
        "instr": "Clicca il verbo sbagliato nella forma impersonale.",
        "items": [
          {
            "q": "In quel paese si dormono poco.",
            "wrong": "dormono",
            "fix": "dorme"
          },
          {
            "q": "Al museo non si fotografano.",
            "wrong": "fotografano",
            "fix": "fotografa"
          },
          {
            "q": "D'inverno si sciano volentieri.",
            "wrong": "sciano",
            "fix": "scia"
          },
          {
            "q": "In ospedale si aspettano molto.",
            "wrong": "aspettano",
            "fix": "aspetta"
          },
          {
            "q": "Qui si guadagnano bene.",
            "wrong": "guadagnano",
            "fix": "guadagna"
          },
          {
            "q": "In treno si leggono comodamente.",
            "wrong": "leggono",
            "fix": "legge"
          },
          {
            "q": "Nei musei si camminano tanto.",
            "wrong": "camminano",
            "fix": "cammina"
          },
          {
            "q": "In quel corso si imparano in fretta.",
            "wrong": "imparano",
            "fix": "impara"
          },
          {
            "q": "A quest'ora si telefonano raramente.",
            "wrong": "telefonano",
            "fix": "telefona"
          },
          {
            "q": "In montagna si sudano molto.",
            "wrong": "sudano",
            "fix": "suda"
          }
        ]
      },
      {
        "type": "Trasformazione",
        "fmt": "buco",
        "instr": "Rendi impersonale la frase.",
        "items": [
          {
            "q": "La gente parte presto il lunedì. →",
            "options": [
              "Il lunedì si parte presto.",
              "Il lunedì si partono presto.",
              "Il lunedì ci si parte presto."
            ],
            "answer": 0
          },
          {
            "q": "In quel ristorante le persone spendono poco. →",
            "options": [
              "In quel ristorante si spende poco.",
              "In quel ristorante si spendono poco.",
              "In quel ristorante ci si spende poco."
            ],
            "answer": 0
          },
          {
            "q": "Al mare la gente si abbronza. →",
            "options": [
              "Al mare ci si abbronza.",
              "Al mare si abbronza.",
              "Al mare si abbronzano."
            ],
            "answer": 0
          },
          {
            "q": "In città le persone corrono sempre. →",
            "options": [
              "In città si corre sempre.",
              "In città si corrono sempre.",
              "In città ci si corre sempre."
            ],
            "answer": 0
          },
          {
            "q": "In quel corso la gente ride molto. →",
            "options": [
              "In quel corso si ride molto.",
              "In quel corso si ridono molto.",
              "In quel corso ci si ride molto."
            ],
            "answer": 0
          },
          {
            "q": "Di domenica le persone si riposano. →",
            "options": [
              "Di domenica ci si riposa.",
              "Di domenica si riposa.",
              "Di domenica si riposano."
            ],
            "answer": 0
          },
          {
            "q": "In biblioteca la gente studia in silenzio. →",
            "options": [
              "In biblioteca si studia in silenzio.",
              "In biblioteca si studiano in silenzio.",
              "In biblioteca ci si studia in silenzio."
            ],
            "answer": 0
          },
          {
            "q": "In aereo le persone si annoiano. →",
            "options": [
              "In aereo ci si annoia.",
              "In aereo si annoia.",
              "In aereo si annoiano."
            ],
            "answer": 0
          },
          {
            "q": "In quel paese la gente vota a maggio. →",
            "options": [
              "In quel paese si vota a maggio.",
              "In quel paese si votano a maggio.",
              "In quel paese ci si vota a maggio."
            ],
            "answer": 0
          },
          {
            "q": "D'estate le persone si svegliano presto. →",
            "options": [
              "D'estate ci si sveglia presto.",
              "D'estate si sveglia presto.",
              "D'estate si svegliano presto."
            ],
            "answer": 0
          }
        ]
      }
    ]
  },
  {
    "lvl": "b1",
    "lez": [
      "B1 L25"
    ],
    "title": "Il periodo ipotetico del 1° tipo",
    "exercises": [
      {
        "type": "Riempimento",
        "fmt": "buco",
        "instr": "Scegli i tempi corretti: la condizione è reale.",
        "items": [
          {
            "q": "Se ___ bel tempo, andremo al mare.",
            "options": [
              "farà",
              "facesse",
              "avesse fatto"
            ],
            "answer": 0
          },
          {
            "q": "Se studi, ___ l'esame.",
            "options": [
              "passerai",
              "passeresti",
              "passassi"
            ],
            "answer": 0
          },
          {
            "q": "Se ___ presto, arriviamo in tempo.",
            "options": [
              "partiamo",
              "partissimo",
              "fossimo partiti"
            ],
            "answer": 0
          },
          {
            "q": "Se nevica, le strade ___ chiuse.",
            "options": [
              "saranno",
              "sarebbero",
              "fossero"
            ],
            "answer": 0
          },
          {
            "q": "Se ___ tempo, ti aiuto volentieri.",
            "options": [
              "ho",
              "avessi",
              "avrei"
            ],
            "answer": 0
          },
          {
            "q": "Se prenoti oggi, ___ meno.",
            "options": [
              "spenderai",
              "spenderesti",
              "spendessi"
            ],
            "answer": 0
          },
          {
            "q": "Se ___ il treno, prenderemo il pullman.",
            "options": [
              "perdiamo",
              "perdessimo",
              "avessimo perso"
            ],
            "answer": 0
          },
          {
            "q": "Se piove, ___ a casa.",
            "options": [
              "restiamo",
              "resteremmo",
              "restassimo"
            ],
            "answer": 0
          },
          {
            "q": "Se ___ questa strada, arrivi prima.",
            "options": [
              "prendi",
              "prendessi",
              "prenderesti"
            ],
            "answer": 0
          },
          {
            "q": "Se non ___ , chiamami.",
            "options": [
              "capisci",
              "capissi",
              "capiresti"
            ],
            "answer": 0
          }
        ]
      },
      {
        "type": "Correzione",
        "fmt": "errore",
        "instr": "Clicca il verbo con il tempo sbagliato.",
        "items": [
          {
            "q": "Se ci sarà il sole, faremmo una gita.",
            "wrong": "faremmo",
            "fix": "faremo"
          },
          {
            "q": "Se ti allenassi, migliorerai presto.",
            "wrong": "allenassi",
            "fix": "alleni"
          },
          {
            "q": "Se uscissimo adesso, evitiamo la coda.",
            "wrong": "uscissimo",
            "fix": "usciamo"
          },
          {
            "q": "Se gela, le tubature sarebbero rotte.",
            "wrong": "sarebbero",
            "fix": "saranno"
          },
          {
            "q": "Se avessi fame, ti preparo qualcosa.",
            "wrong": "avessi",
            "fix": "hai"
          },
          {
            "q": "Se compri online, risparmieresti tempo.",
            "wrong": "risparmieresti",
            "fix": "risparmierai"
          },
          {
            "q": "Se saltassimo la riunione, ci chiamano.",
            "wrong": "saltassimo",
            "fix": "saltiamo"
          },
          {
            "q": "Se nevica, chiuderebbero le scuole.",
            "wrong": "chiuderebbero",
            "fix": "chiuderanno"
          },
          {
            "q": "Se leggessi il manuale, capisci meglio.",
            "wrong": "leggessi",
            "fix": "leggi"
          },
          {
            "q": "Se non ti sbrighi, perderemmo il volo.",
            "wrong": "perderemmo",
            "fix": "perderemo"
          }
        ]
      },
      {
        "type": "Trasformazione",
        "fmt": "buco",
        "instr": "Costruisci il periodo ipotetico della realtà.",
        "items": [
          {
            "q": "(voi – prenotare adesso) → (voi – trovare posto)",
            "options": [
              "Se prenotate adesso, troverete posto.",
              "Se prenotaste adesso, trovereste posto.",
              "Se prenotate adesso, trovereste posto."
            ],
            "answer": 0
          },
          {
            "q": "(lui – insistere) → (loro – cedere)",
            "options": [
              "Se insiste, cederanno.",
              "Se insistesse, cederebbero.",
              "Se insiste, cederebbero."
            ],
            "answer": 0
          },
          {
            "q": "(il pacco – arrivare oggi) → (io – aprirlo subito)",
            "options": [
              "Se il pacco arriva oggi, lo apro subito.",
              "Se il pacco arrivasse oggi, lo aprirei subito.",
              "Se il pacco arriva oggi, lo aprirei subito."
            ],
            "answer": 0
          },
          {
            "q": "(noi – vincere) → (noi – festeggiare)",
            "options": [
              "Se vinciamo, festeggeremo.",
              "Se vincessimo, festeggeremmo.",
              "Se vinciamo, festeggeremmo."
            ],
            "answer": 0
          },
          {
            "q": "(tu – bere troppo caffè) → (tu – dormire male)",
            "options": [
              "Se bevi troppo caffè, dormirai male.",
              "Se bevessi troppo caffè, dormiresti male.",
              "Se bevi troppo caffè, dormiresti male."
            ],
            "answer": 0
          },
          {
            "q": "(loro – accettare) → (noi – firmare domani)",
            "options": [
              "Se accettano, firmiamo domani.",
              "Se accettassero, firmeremmo domani.",
              "Se accettano, firmeremmo domani."
            ],
            "answer": 0
          },
          {
            "q": "(esserci sciopero) → (io – lavorare da casa)",
            "options": [
              "Se c'è sciopero, lavoro da casa.",
              "Se ci fosse sciopero, lavorerei da casa.",
              "Se c'è sciopero, lavorerei da casa."
            ],
            "answer": 0
          },
          {
            "q": "(voi – studiare insieme) → (voi – finire prima)",
            "options": [
              "Se studiate insieme, finirete prima.",
              "Se studiaste insieme, finireste prima.",
              "Se studiate insieme, finireste prima."
            ],
            "answer": 0
          },
          {
            "q": "(il negozio – essere chiuso) → (noi – tornare domani)",
            "options": [
              "Se il negozio è chiuso, torniamo domani.",
              "Se il negozio fosse chiuso, torneremmo domani.",
              "Se il negozio è chiuso, torneremmo domani."
            ],
            "answer": 0
          },
          {
            "q": "(tu – dimenticare il codice) → (tu – chiamare la banca)",
            "options": [
              "Se dimentichi il codice, chiama la banca.",
              "Se dimenticassi il codice, chiameresti la banca.",
              "Se dimentichi il codice, chiameresti la banca."
            ],
            "answer": 0
          }
        ]
      }
    ]
  },
  {
    "lvl": "b1",
    "lez": [
      "B1 L26"
    ],
    "title": "La forma passiva con essere e venire",
    "exercises": [
      {
        "type": "Riempimento",
        "fmt": "buco",
        "instr": "Scegli la forma passiva corretta.",
        "items": [
          {
            "q": "La cena ___ preparata da mia madre.",
            "options": [
              "è",
              "ha",
              "viene stata"
            ],
            "answer": 0
          },
          {
            "q": "I pacchi ___ consegnati ogni mattina.",
            "options": [
              "vengono",
              "viene",
              "hanno"
            ],
            "answer": 0
          },
          {
            "q": "La lettera ___ scritta ieri.",
            "options": [
              "è stata",
              "ha stata",
              "viene stata"
            ],
            "answer": 0
          },
          {
            "q": "Le aule ___ pulite ogni sera.",
            "options": [
              "vengono",
              "viene",
              "sono state pulite ogni sera"
            ],
            "answer": 0
          },
          {
            "q": "Il museo ___ visitato da molti turisti.",
            "options": [
              "è",
              "ha",
              "viene stato"
            ],
            "answer": 0
          },
          {
            "q": "Gli elenchi ___ affissi domani.",
            "options": [
              "saranno",
              "avranno",
              "verrà"
            ],
            "answer": 0
          },
          {
            "q": "La casa ___ costruita nel 1920.",
            "options": [
              "è stata",
              "ha stata",
              "viene stata"
            ],
            "answer": 0
          },
          {
            "q": "Le regole ___ rispettate da tutti.",
            "options": [
              "vanno",
              "va",
              "viene"
            ],
            "answer": 0
          },
          {
            "q": "Il contratto ___ firmato dal direttore.",
            "options": [
              "è stato",
              "ha stato",
              "viene stato"
            ],
            "answer": 0
          },
          {
            "q": "Gli errori ___ corretti dall'insegnante.",
            "options": [
              "vengono",
              "viene",
              "hanno"
            ],
            "answer": 0
          }
        ]
      },
      {
        "type": "Correzione",
        "fmt": "errore",
        "instr": "Clicca la parola sbagliata (ausiliare o accordo).",
        "items": [
          {
            "q": "Il giardino è curata dal nonno.",
            "wrong": "curata",
            "fix": "curato"
          },
          {
            "q": "Le finestre viene lavate ogni mese.",
            "wrong": "viene",
            "fix": "vengono"
          },
          {
            "q": "Il quadro ha stato dipinto nel 1800.",
            "wrong": "ha",
            "fix": "è"
          },
          {
            "q": "I marciapiedi viene puliti di notte.",
            "wrong": "viene",
            "fix": "vengono"
          },
          {
            "q": "La biblioteca è chiuso alle otto.",
            "wrong": "chiuso",
            "fix": "chiusa"
          },
          {
            "q": "Gli inviti avranno spediti lunedì.",
            "wrong": "avranno",
            "fix": "saranno"
          },
          {
            "q": "Il ponte ha costruito dieci anni fa.",
            "wrong": "ha",
            "fix": "è stato"
          },
          {
            "q": "La domanda è respinto dall ufficio.",
            "wrong": "respinto",
            "fix": "respinta"
          },
          {
            "q": "I compiti viene corretti dalla maestra.",
            "wrong": "viene",
            "fix": "vengono"
          },
          {
            "q": "Le scadenze vengono rispettato da tutti.",
            "wrong": "rispettato",
            "fix": "rispettate"
          }
        ]
      },
      {
        "type": "Trasformazione",
        "fmt": "buco",
        "instr": "Trasforma dall'attivo al passivo.",
        "items": [
          {
            "q": "Il sindaco inaugura la scuola. →",
            "options": [
              "La scuola è inaugurata dal sindaco.",
              "La scuola ha inaugurata dal sindaco.",
              "La scuola viene stata inaugurata."
            ],
            "answer": 0
          },
          {
            "q": "Servono la colazione dalle sette. →",
            "options": [
              "La colazione viene servita dalle sette.",
              "La colazione viene servito dalle sette.",
              "La colazione ha servita dalle sette."
            ],
            "answer": 0
          },
          {
            "q": "Un tecnico ha riparato la caldaia. →",
            "options": [
              "La caldaia è stata riparata da un tecnico.",
              "La caldaia ha riparata da un tecnico.",
              "La caldaia viene stata riparata."
            ],
            "answer": 0
          },
          {
            "q": "Annaffiano le piante ogni due giorni. →",
            "options": [
              "Le piante vengono annaffiate ogni due giorni.",
              "Le piante viene annaffiate ogni due giorni.",
              "Le piante hanno annaffiate ogni due giorni."
            ],
            "answer": 0
          },
          {
            "q": "Premieranno i vincitori sabato. →",
            "options": [
              "I vincitori saranno premiati sabato.",
              "I vincitori avranno premiati sabato.",
              "I vincitori verranno stati premiati."
            ],
            "answer": 0
          },
          {
            "q": "Hanno restaurato la chiesa nel 2019. →",
            "options": [
              "La chiesa è stata restaurata nel 2019.",
              "La chiesa ha restaurata nel 2019.",
              "La chiesa viene restaurata nel 2019."
            ],
            "answer": 0
          },
          {
            "q": "La commissione ha respinto il ricorso. →",
            "options": [
              "Il ricorso è stato respinto dalla commissione.",
              "Il ricorso ha respinto dalla commissione.",
              "Il ricorso viene stato respinto."
            ],
            "answer": 0
          },
          {
            "q": "Il custode chiude il cancello alle nove. →",
            "options": [
              "Il cancello viene chiuso dal custode alle nove.",
              "Il cancello viene chiusa dal custode.",
              "Il cancello ha chiuso dal custode."
            ],
            "answer": 0
          },
          {
            "q": "Tutti apprezzano il suo lavoro. →",
            "options": [
              "Il suo lavoro è apprezzato da tutti.",
              "Il suo lavoro ha apprezzato da tutti.",
              "Il suo lavoro viene stato apprezzato."
            ],
            "answer": 0
          },
          {
            "q": "Consegneranno le chiavi domani. →",
            "options": [
              "Le chiavi saranno consegnate domani.",
              "Le chiavi avranno consegnate domani.",
              "Le chiavi verranno state consegnate."
            ],
            "answer": 0
          }
        ]
      }
    ]
  },
  {
    "lvl": "b1",
    "lez": [
      "B1 L26"
    ],
    "title": "Il «si» passivante",
    "exercises": [
      {
        "type": "Riempimento",
        "fmt": "buco",
        "instr": "Scegli la forma corretta: il verbo si accorda con il soggetto.",
        "items": [
          {
            "q": "In questo negozio ___ scarpe italiane.",
            "options": [
              "si vendono",
              "si vende",
              "si vendere"
            ],
            "answer": 0
          },
          {
            "q": "Qui ___ un ottimo caffè.",
            "options": [
              "si beve",
              "si bevono",
              "si bevere"
            ],
            "answer": 0
          },
          {
            "q": "___ molte lingue in questa scuola.",
            "options": [
              "Si insegnano",
              "Si insegna",
              "Si insegnare"
            ],
            "answer": 0
          },
          {
            "q": "In estate ___ molta frutta.",
            "options": [
              "si mangia",
              "si mangiano",
              "si mangiare"
            ],
            "answer": 0
          },
          {
            "q": "___ appartamenti in centro.",
            "options": [
              "Si affittano",
              "Si affitta",
              "Si affittare"
            ],
            "answer": 0
          },
          {
            "q": "In quel bar ___ ottimi dolci.",
            "options": [
              "si trovano",
              "si trova",
              "si trovare"
            ],
            "answer": 0
          },
          {
            "q": "___ il pane fresco ogni mattina.",
            "options": [
              "Si compra",
              "Si comprano",
              "Si comprare"
            ],
            "answer": 0
          },
          {
            "q": "In questa zona ___ case antiche.",
            "options": [
              "si restaurano",
              "si restaura",
              "si restaurare"
            ],
            "answer": 0
          },
          {
            "q": "___ molto vino in questa regione.",
            "options": [
              "Si produce",
              "Si producono",
              "Si produrre"
            ],
            "answer": 0
          },
          {
            "q": "___ nuovi corsi ogni anno.",
            "options": [
              "Si organizzano",
              "Si organizza",
              "Si organizzare"
            ],
            "answer": 0
          }
        ]
      },
      {
        "type": "Correzione",
        "fmt": "errore",
        "instr": "Clicca il verbo che non concorda con il soggetto.",
        "items": [
          {
            "q": "In quel mercato si compra prodotti locali.",
            "wrong": "compra",
            "fix": "comprano"
          },
          {
            "q": "Nella sala si proiettano un documentario.",
            "wrong": "proiettano",
            "fix": "proietta"
          },
          {
            "q": "Si costruisce nuovi edifici in periferia.",
            "wrong": "costruisce",
            "fix": "costruiscono"
          },
          {
            "q": "In cantina si conservano il vino buono.",
            "wrong": "conservano",
            "fix": "conserva"
          },
          {
            "q": "Si ripara biciclette in questa officina.",
            "wrong": "ripara",
            "fix": "riparano"
          },
          {
            "q": "In quel laboratorio si analizza i campioni.",
            "wrong": "analizza",
            "fix": "analizzano"
          },
          {
            "q": "Si stampano il giornale ogni notte.",
            "wrong": "stampano",
            "fix": "stampa"
          },
          {
            "q": "Nel forno si prepara torte artigianali.",
            "wrong": "prepara",
            "fix": "preparano"
          },
          {
            "q": "Si raccolgono la frutta a settembre.",
            "wrong": "raccolgono",
            "fix": "raccoglie"
          },
          {
            "q": "In quel negozio si ripara orologi antichi.",
            "wrong": "ripara",
            "fix": "riparano"
          }
        ]
      },
      {
        "type": "Trasformazione",
        "fmt": "buco",
        "instr": "Riscrivi con il «si» passivante.",
        "items": [
          {
            "q": "Servono il pesce il venerdì. →",
            "options": [
              "Il pesce si serve il venerdì.",
              "Il pesce si servono il venerdì.",
              "Il pesce ci si serve il venerdì."
            ],
            "answer": 0
          },
          {
            "q": "Noleggiano ombrelloni sulla spiaggia. →",
            "options": [
              "Sulla spiaggia si noleggiano ombrelloni.",
              "Sulla spiaggia si noleggia ombrelloni.",
              "Sulla spiaggia ci si noleggiano ombrelloni."
            ],
            "answer": 0
          },
          {
            "q": "Coltivano olive in collina. →",
            "options": [
              "In collina si coltivano olive.",
              "In collina si coltiva olive.",
              "In collina ci si coltivano olive."
            ],
            "answer": 0
          },
          {
            "q": "Espongono quadri moderni. →",
            "options": [
              "Si espongono quadri moderni.",
              "Si espone quadri moderni.",
              "Ci si espongono quadri moderni."
            ],
            "answer": 0
          },
          {
            "q": "Firmano il contratto in ufficio. →",
            "options": [
              "Il contratto si firma in ufficio.",
              "Il contratto si firmano in ufficio.",
              "Il contratto ci si firma in ufficio."
            ],
            "answer": 0
          },
          {
            "q": "Distribuiscono i volantini in piazza. →",
            "options": [
              "In piazza si distribuiscono i volantini.",
              "In piazza si distribuisce i volantini.",
              "In piazza ci si distribuiscono i volantini."
            ],
            "answer": 0
          },
          {
            "q": "Traducono il manuale in tre lingue. →",
            "options": [
              "Il manuale si traduce in tre lingue.",
              "Il manuale si traducono in tre lingue.",
              "Il manuale ci si traduce in tre lingue."
            ],
            "answer": 0
          },
          {
            "q": "Restituiscono i libri entro un mese. →",
            "options": [
              "I libri si restituiscono entro un mese.",
              "I libri si restituisce entro un mese.",
              "I libri ci si restituiscono entro un mese."
            ],
            "answer": 0
          },
          {
            "q": "Cuociono la pizza nel forno a legna. →",
            "options": [
              "La pizza si cuoce nel forno a legna.",
              "La pizza si cuociono nel forno a legna.",
              "La pizza ci si cuoce nel forno a legna."
            ],
            "answer": 0
          },
          {
            "q": "Spediscono i pacchi ogni lunedì. →",
            "options": [
              "I pacchi si spediscono ogni lunedì.",
              "I pacchi si spedisce ogni lunedì.",
              "I pacchi ci si spediscono ogni lunedì."
            ],
            "answer": 0
          }
        ]
      }
    ]
  },
  {
    "lvl": "b1",
    "stima": "b2",
    "lez": [
      "B1 L27"
    ],
    "title": "Il discorso indiretto",
    "exercises": [
      {
        "type": "Riempimento",
        "fmt": "buco",
        "instr": "Scegli la forma corretta nel discorso indiretto.",
        "items": [
          {
            "q": "«Sono stanco» → Ha detto che ___ stanco.",
            "options": [
              "era",
              "è",
              "sarà"
            ],
            "answer": 0
          },
          {
            "q": "«Arrivo domani» → Ha detto che ___ il giorno dopo.",
            "options": [
              "arrivava",
              "arriva",
              "arriverà"
            ],
            "answer": 0
          },
          {
            "q": "«Ho finito» → Ha detto che ___ finito.",
            "options": [
              "aveva",
              "ha",
              "avrà"
            ],
            "answer": 0
          },
          {
            "q": "«Vengo con voi» → Ha detto che ___ con noi.",
            "options": [
              "veniva",
              "viene",
              "verrà"
            ],
            "answer": 0
          },
          {
            "q": "«Non lo so» → Ha detto che non lo ___ .",
            "options": [
              "sapeva",
              "sa",
              "saprà"
            ],
            "answer": 0
          },
          {
            "q": "«Ti chiamo stasera» → Ha detto che mi ___ quella sera.",
            "options": [
              "chiamava",
              "chiama",
              "chiamerà"
            ],
            "answer": 0
          },
          {
            "q": "«Siamo pronti» → Hanno detto che ___ pronti.",
            "options": [
              "erano",
              "sono",
              "saranno"
            ],
            "answer": 0
          },
          {
            "q": "«Ho comprato la casa» → Ha detto che ___ comprato la casa.",
            "options": [
              "aveva",
              "ha",
              "avrà"
            ],
            "answer": 0
          },
          {
            "q": "«Devo partire» → Ha detto che ___ partire.",
            "options": [
              "doveva",
              "deve",
              "dovrà"
            ],
            "answer": 0
          },
          {
            "q": "«Non posso venire» → Ha detto che non ___ venire.",
            "options": [
              "poteva",
              "può",
              "potrà"
            ],
            "answer": 0
          }
        ]
      },
      {
        "type": "Correzione",
        "fmt": "errore",
        "instr": "Clicca il verbo con il tempo sbagliato nel discorso indiretto.",
        "items": [
          {
            "q": "Ha detto che sta male da giorni.",
            "wrong": "sta",
            "fix": "stava"
          },
          {
            "q": "Ha risposto che parte la settimana dopo.",
            "wrong": "parte",
            "fix": "partiva"
          },
          {
            "q": "Ha spiegato che ha capito tutto.",
            "wrong": "ha",
            "fix": "aveva"
          },
          {
            "q": "Ha aggiunto che torna presto.",
            "wrong": "torna",
            "fix": "tornava"
          },
          {
            "q": "Ha ammesso che non ricorda niente.",
            "wrong": "ricorda",
            "fix": "ricordava"
          },
          {
            "q": "Hanno confermato che vengono anche loro.",
            "wrong": "vengono",
            "fix": "venivano"
          },
          {
            "q": "Ha promesso che paga il conto.",
            "wrong": "paga",
            "fix": "avrebbe pagato"
          },
          {
            "q": "Ha raccontato che ha visitato il museo.",
            "wrong": "ha",
            "fix": "aveva"
          },
          {
            "q": "Ha avvertito che vuole cambiare data.",
            "wrong": "vuole",
            "fix": "voleva"
          },
          {
            "q": "Ha scritto che sarà in ufficio lunedì.",
            "wrong": "sarà",
            "fix": "sarebbe stato"
          }
        ]
      },
      {
        "type": "Trasformazione",
        "fmt": "buco",
        "instr": "Trasforma in discorso indiretto.",
        "items": [
          {
            "q": "«Ho perso le chiavi», ha detto. →",
            "options": [
              "Ha detto che aveva perso le chiavi.",
              "Ha detto che ha perso le chiavi.",
              "Ha detto che avrà perso le chiavi."
            ],
            "answer": 0
          },
          {
            "q": "«Non conosco nessuno qui», ha mormorato. →",
            "options": [
              "Ha mormorato che non conosceva nessuno lì.",
              "Ha mormorato che non conosce nessuno lì.",
              "Ha mormorato che non conoscerà nessuno lì."
            ],
            "answer": 0
          },
          {
            "q": "«Siamo in ritardo», hanno esclamato. →",
            "options": [
              "Hanno esclamato che erano in ritardo.",
              "Hanno esclamato che sono in ritardo.",
              "Hanno esclamato che saranno in ritardo."
            ],
            "answer": 0
          },
          {
            "q": "«Studio ingegneria», ha precisato. →",
            "options": [
              "Ha precisato che studiava ingegneria.",
              "Ha precisato che studia ingegneria.",
              "Ha precisato che studierà ingegneria."
            ],
            "answer": 0
          },
          {
            "q": "«Abbiamo già mangiato», hanno replicato. →",
            "options": [
              "Hanno replicato che avevano già mangiato.",
              "Hanno replicato che hanno già mangiato.",
              "Hanno replicato che avranno già mangiato."
            ],
            "answer": 0
          },
          {
            "q": "«Ti aiuterò», ha assicurato. →",
            "options": [
              "Ha assicurato che mi avrebbe aiutato.",
              "Ha assicurato che mi aiuterà.",
              "Ha assicurato che mi aiutava."
            ],
            "answer": 0
          },
          {
            "q": "«Abito in periferia», ha specificato. →",
            "options": [
              "Ha specificato che abitava in periferia.",
              "Ha specificato che abita in periferia.",
              "Ha specificato che abiterà in periferia."
            ],
            "answer": 0
          },
          {
            "q": "«Ho scritto al direttore», ha comunicato. →",
            "options": [
              "Ha comunicato che aveva scritto al direttore.",
              "Ha comunicato che ha scritto al direttore.",
              "Ha comunicato che avrà scritto al direttore."
            ],
            "answer": 0
          },
          {
            "q": "«Non firmo nulla», ha protestato. →",
            "options": [
              "Ha protestato che non firmava nulla.",
              "Ha protestato che non firma nulla.",
              "Ha protestato che non firmerà nulla."
            ],
            "answer": 0
          },
          {
            "q": "«Chiuderemo alle sei», hanno annunciato. →",
            "options": [
              "Hanno annunciato che avrebbero chiuso alle sei.",
              "Hanno annunciato che chiuderanno alle sei.",
              "Hanno annunciato che chiudevano alle sei."
            ],
            "answer": 0
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
        "fmt": "buco",
        "instr": "Scegli la forma passiva corretta.",
        "items": [
          {
            "q": "La fattura ___ entro 30 giorni.",
            "options": [
              "va saldata",
              "va saldato",
              "viene saldare"
            ],
            "answer": 0
          },
          {
            "q": "I risultati ___ domani.",
            "options": [
              "vengono pubblicati",
              "viene pubblicati",
              "vanno pubblicato"
            ],
            "answer": 0
          },
          {
            "q": "In biblioteca non ___ ad alta voce.",
            "options": [
              "si parla",
              "si parlano",
              "viene parlato"
            ],
            "answer": 0
          },
          {
            "q": "Le chiavi ___ alla reception.",
            "options": [
              "vanno restituite",
              "va restituite",
              "vengono restituito"
            ],
            "answer": 0
          },
          {
            "q": "Il modulo ___ in stampatello.",
            "options": [
              "va compilato",
              "va compilata",
              "viene compilare"
            ],
            "answer": 0
          },
          {
            "q": "Le domande ___ entro venerdì.",
            "options": [
              "vanno presentate",
              "va presentate",
              "vengono presentato"
            ],
            "answer": 0
          },
          {
            "q": "Questo vino ___ freddo.",
            "options": [
              "va servito",
              "va servita",
              "viene servire"
            ],
            "answer": 0
          },
          {
            "q": "I documenti ___ dal direttore.",
            "options": [
              "vengono firmati",
              "viene firmati",
              "vanno firmato"
            ],
            "answer": 0
          },
          {
            "q": "Qui ___ molto pesce.",
            "options": [
              "si mangia",
              "si mangiano",
              "viene mangiare"
            ],
            "answer": 0
          },
          {
            "q": "Le finestre ___ ogni settimana.",
            "options": [
              "vengono pulite",
              "viene pulite",
              "va pulite"
            ],
            "answer": 0
          }
        ]
      },
      {
        "type": "Correzione",
        "fmt": "errore",
        "instr": "Clicca la parola sbagliata (accordo o ausiliare del passivo).",
        "items": [
          {
            "q": "La ricevuta va emesso subito.",
            "wrong": "emesso",
            "fix": "emessa"
          },
          {
            "q": "Gli avvisi viene affissi in bacheca.",
            "wrong": "viene",
            "fix": "vengono"
          },
          {
            "q": "Le aule si pulisce ogni sera.",
            "wrong": "pulisce",
            "fix": "puliscono"
          },
          {
            "q": "Il contratto va firmata dal titolare.",
            "wrong": "firmata",
            "fix": "firmato"
          },
          {
            "q": "Le targhe va sostituite entro maggio.",
            "wrong": "va",
            "fix": "vanno"
          },
          {
            "q": "I pacchi viene consegnati di mattina.",
            "wrong": "viene",
            "fix": "vengono"
          },
          {
            "q": "Questa pasta va cotto al dente.",
            "wrong": "cotto",
            "fix": "cotta"
          },
          {
            "q": "Le bollette vanno pagato entro il 20.",
            "wrong": "pagato",
            "fix": "pagate"
          },
          {
            "q": "Qui si vendono molta frutta.",
            "wrong": "vendono",
            "fix": "vende"
          },
          {
            "q": "L'annuncio vengono pubblicato domani.",
            "wrong": "vengono",
            "fix": "viene"
          }
        ]
      },
      {
        "type": "Trasformazione",
        "fmt": "buco",
        "instr": "Volgi al passivo: scegli la versione corretta.",
        "items": [
          {
            "q": "Bisogna spedire il pacco.",
            "options": [
              "Il pacco va spedito.",
              "Il pacco va spedita.",
              "Il pacco viene spedire."
            ],
            "answer": 0
          },
          {
            "q": "Consegnano la posta ogni mattina.",
            "options": [
              "La posta viene consegnata ogni mattina.",
              "La posta viene consegnato ogni mattina.",
              "La posta va consegnare ogni mattina."
            ],
            "answer": 0
          },
          {
            "q": "La gente coltiva molto grano qui.",
            "options": [
              "Qui si coltiva molto grano.",
              "Qui si coltivano molto grano.",
              "Qui viene coltivare molto grano."
            ],
            "answer": 0
          },
          {
            "q": "Un esperto valuta i danni.",
            "options": [
              "I danni vengono valutati da un esperto.",
              "I danni viene valutati da un esperto.",
              "I danni vanno valutato da un esperto."
            ],
            "answer": 0
          },
          {
            "q": "Bisogna conservare le ricevute.",
            "options": [
              "Le ricevute vanno conservate.",
              "Le ricevute va conservate.",
              "Le ricevute vengono conservare."
            ],
            "answer": 0
          },
          {
            "q": "Servono il dolce alla fine.",
            "options": [
              "Il dolce viene servito alla fine.",
              "Il dolce viene servita alla fine.",
              "Il dolce va servire alla fine."
            ],
            "answer": 0
          },
          {
            "q": "Devono presentare i preventivi.",
            "options": [
              "I preventivi vanno presentati.",
              "I preventivi va presentati.",
              "I preventivi vengono presentare."
            ],
            "answer": 0
          },
          {
            "q": "Qualcuno ha rubato la bicicletta.",
            "options": [
              "La bicicletta è stata rubata.",
              "La bicicletta è stato rubata.",
              "La bicicletta viene stata rubata."
            ],
            "answer": 0
          },
          {
            "q": "Riparano le strade in estate.",
            "options": [
              "Le strade vengono riparate in estate.",
              "Le strade viene riparate in estate.",
              "Le strade vanno riparato in estate."
            ],
            "answer": 0
          },
          {
            "q": "Bisogna leggere il regolamento.",
            "options": [
              "Il regolamento va letto.",
              "Il regolamento va letta.",
              "Il regolamento viene leggere."
            ],
            "answer": 0
          }
        ]
      }
    ],
    "lez": [
      "C1 L7"
    ],
    "diag": true
  },
  {
    "lvl": "c1",
    "title": "Le proposizioni concessive",
    "exercises": [
      {
        "type": "Riempimento",
        "fmt": "buco",
        "instr": "Scegli il modo corretto (congiuntivo con benché/nonostante/sebbene; indicativo con «anche se»).",
        "items": [
          {
            "q": "Benché ___ stanco, ha finito il lavoro.",
            "options": [
              "fosse",
              "era",
              "sarebbe"
            ],
            "answer": 0
          },
          {
            "q": "Nonostante ___, sono andati a sciare.",
            "options": [
              "nevicasse",
              "nevicava",
              "nevicherebbe"
            ],
            "answer": 0
          },
          {
            "q": "Anche se ___ molto, lo comprerò.",
            "options": [
              "costa",
              "costi",
              "costasse"
            ],
            "answer": 0
          },
          {
            "q": "Per quanto ___, non ho cambiato idea.",
            "options": [
              "insistessero",
              "insistevano",
              "insisterebbero"
            ],
            "answer": 0
          },
          {
            "q": "Sebbene ___ poco, ha superato l'esame.",
            "options": [
              "abbia studiato",
              "ha studiato",
              "avrebbe studiato"
            ],
            "answer": 0
          },
          {
            "q": "Benché ___ tardi, sono usciti.",
            "options": [
              "fosse",
              "era",
              "sarà"
            ],
            "answer": 0
          },
          {
            "q": "Anche se ___ freddo, esco.",
            "options": [
              "fa",
              "faccia",
              "facesse"
            ],
            "answer": 0
          },
          {
            "q": "Nonostante ___ giovane, è molto competente.",
            "options": [
              "sia",
              "è",
              "sarebbe"
            ],
            "answer": 0
          },
          {
            "q": "Per quanto ___, non riesco a capire.",
            "options": [
              "mi sforzi",
              "mi sforzo",
              "mi sforzerei"
            ],
            "answer": 0
          },
          {
            "q": "Sebbene ___ ragione, non ha insistito.",
            "options": [
              "avesse",
              "aveva",
              "avrebbe"
            ],
            "answer": 0
          }
        ]
      },
      {
        "type": "Correzione",
        "fmt": "errore",
        "instr": "Clicca il verbo con il modo sbagliato.",
        "items": [
          {
            "q": "Benché è tardi, continuano a lavorare.",
            "wrong": "è",
            "fix": "sia"
          },
          {
            "q": "Nonostante piove, escono lo stesso.",
            "wrong": "piove",
            "fix": "piova"
          },
          {
            "q": "Anche se sia domenica, l'ufficio è aperto.",
            "wrong": "sia",
            "fix": "è"
          },
          {
            "q": "Sebbene ha dormito poco, è in forma.",
            "wrong": "ha",
            "fix": "abbia"
          },
          {
            "q": "Benché era esperto, ha sbagliato.",
            "wrong": "era",
            "fix": "fosse"
          },
          {
            "q": "Anche se costi tanto, lo prendo.",
            "wrong": "costi",
            "fix": "costa"
          },
          {
            "q": "Nonostante è lontano, ci va a piedi.",
            "wrong": "è",
            "fix": "sia"
          },
          {
            "q": "Per quanto io provo, non ci riesco.",
            "wrong": "provo",
            "fix": "provi"
          },
          {
            "q": "Sebbene sapeva la risposta, è stato zitto.",
            "wrong": "sapeva",
            "fix": "sapesse"
          },
          {
            "q": "Anche se nevichi, partiamo.",
            "wrong": "nevichi",
            "fix": "nevica"
          }
        ]
      },
      {
        "type": "Trasformazione",
        "fmt": "buco",
        "instr": "Riscrivi con la concessiva: scegli la versione corretta.",
        "items": [
          {
            "q": "Ha poco tempo, ma ci aiuta. (benché)",
            "options": [
              "Benché abbia poco tempo, ci aiuta.",
              "Benché ha poco tempo, ci aiuta.",
              "Benché avesse poco tempo, ci aiuta."
            ],
            "answer": 0
          },
          {
            "q": "Il film è lungo, ma non annoia. (nonostante)",
            "options": [
              "Nonostante sia lungo, il film non annoia.",
              "Nonostante è lungo, il film non annoia.",
              "Nonostante fosse lungo, il film non annoia."
            ],
            "answer": 0
          },
          {
            "q": "Guadagna bene, ma non è felice. (sebbene)",
            "options": [
              "Sebbene guadagni bene, non è felice.",
              "Sebbene guadagna bene, non è felice.",
              "Sebbene guadagnasse bene, non è felice."
            ],
            "answer": 0
          },
          {
            "q": "Parla piano, ma si sente. (anche se)",
            "options": [
              "Anche se parla piano, si sente.",
              "Anche se parli piano, si sente.",
              "Anche se parlasse piano, si sente."
            ],
            "answer": 0
          },
          {
            "q": "Conosce la città, ma si perde. (benché)",
            "options": [
              "Benché conosca la città, si perde.",
              "Benché conosce la città, si perde.",
              "Benché conoscesse la città, si perde."
            ],
            "answer": 0
          },
          {
            "q": "Il lavoro è duro, ma lo fa volentieri. (nonostante)",
            "options": [
              "Nonostante sia duro, fa il lavoro volentieri.",
              "Nonostante è duro, fa il lavoro volentieri.",
              "Nonostante fosse duro, fa il lavoro volentieri."
            ],
            "answer": 0
          },
          {
            "q": "Dormo poco, ma non sono stanco. (anche se)",
            "options": [
              "Anche se dormo poco, non sono stanco.",
              "Anche se dorma poco, non sono stanco.",
              "Anche se dormissi poco, non sono stanco."
            ],
            "answer": 0
          },
          {
            "q": "Sono in ritardo, ma nessuno si lamenta. (sebbene)",
            "options": [
              "Sebbene sia in ritardo, nessuno si lamenta.",
              "Sebbene sono in ritardo, nessuno si lamenta.",
              "Sebbene fossi in ritardo, nessuno si lamenta."
            ],
            "answer": 0
          },
          {
            "q": "Costa poco, ma funziona bene. (benché)",
            "options": [
              "Benché costi poco, funziona bene.",
              "Benché costa poco, funziona bene.",
              "Benché costasse poco, funziona bene."
            ],
            "answer": 0
          },
          {
            "q": "Vive lontano, ma viene ogni giorno. (nonostante)",
            "options": [
              "Nonostante viva lontano, viene ogni giorno.",
              "Nonostante vive lontano, viene ogni giorno.",
              "Nonostante vivesse lontano, viene ogni giorno."
            ],
            "answer": 0
          }
        ]
      }
    ],
    "lez": [
      "C1 L11",
      "C1 L13",
      "C1 L21"
    ],
    "diag": true
  },
  {
    "lvl": "c1",
    "title": "Le proposizioni temporali avanzate",
    "exercises": [
      {
        "type": "Riempimento",
        "fmt": "buco",
        "instr": "Scegli la forma corretta (congiuntivo con «prima che», infinito con «prima di», indicativo con «dopo che»).",
        "items": [
          {
            "q": "Avvisami prima che ___ la riunione.",
            "options": [
              "inizi",
              "inizia",
              "iniziasse"
            ],
            "answer": 0
          },
          {
            "q": "Prima di ___, leggi bene il contratto.",
            "options": [
              "firmare",
              "firmi",
              "firmare tu"
            ],
            "answer": 0
          },
          {
            "q": "Dopo che ___, abbiamo cenato.",
            "options": [
              "sono arrivati",
              "siano arrivati",
              "arrivassero"
            ],
            "answer": 0
          },
          {
            "q": "Resta finché non ___.",
            "options": [
              "finisco",
              "finisca",
              "finissi"
            ],
            "answer": 0
          },
          {
            "q": "Prima che tu ___, ti spiego tutto.",
            "options": [
              "parta",
              "parti",
              "partissi"
            ],
            "answer": 0
          },
          {
            "q": "Prima di ___, spegni la luce.",
            "options": [
              "uscire",
              "esci",
              "che esci"
            ],
            "answer": 0
          },
          {
            "q": "Dopo che ___ la notizia, ha chiamato.",
            "options": [
              "ha saputo",
              "abbia saputo",
              "sapesse"
            ],
            "answer": 0
          },
          {
            "q": "Aspetta qui finché non ___ il treno.",
            "options": [
              "arriva",
              "arrivi",
              "arrivasse"
            ],
            "answer": 0
          },
          {
            "q": "Prima che ___ troppo tardi, decidiamo.",
            "options": [
              "sia",
              "è",
              "fosse"
            ],
            "answer": 0
          },
          {
            "q": "Prima di ___ una decisione, riflettici.",
            "options": [
              "prendere",
              "prendi",
              "che prendi"
            ],
            "answer": 0
          }
        ]
      },
      {
        "type": "Correzione",
        "fmt": "errore",
        "instr": "Clicca la parola sbagliata (modo verbale o costruzione).",
        "items": [
          {
            "q": "Chiamami prima che arriva il treno.",
            "wrong": "arriva",
            "fix": "arrivi"
          },
          {
            "q": "Dopo che fosse uscito, ho chiuso a chiave.",
            "wrong": "fosse",
            "fix": "era"
          },
          {
            "q": "Rimani qui finché non arrivi io.",
            "wrong": "arrivi",
            "fix": "arrivo"
          },
          {
            "q": "Prima che io esca, salutami tu.",
            "wrong": "esca",
            "fix": "esco"
          },
          {
            "q": "Prima di esci, chiudi la finestra.",
            "wrong": "esci",
            "fix": "uscire"
          },
          {
            "q": "Dopo che abbia cenato, è uscito.",
            "wrong": "abbia",
            "fix": "aveva"
          },
          {
            "q": "Prima che sarà buio, torniamo.",
            "wrong": "sarà",
            "fix": "sia"
          },
          {
            "q": "Aspetta qui finché non suoni la campana stasera.",
            "wrong": "suoni",
            "fix": "suona"
          },
          {
            "q": "Prima di che chiami, pensa bene.",
            "wrong": "che",
            "fix": "(togliere: prima di chiamare)"
          },
          {
            "q": "Dopo che sarebbe rientrato, ha cenato.",
            "wrong": "sarebbe",
            "fix": "era"
          }
        ]
      },
      {
        "type": "Trasformazione",
        "fmt": "buco",
        "instr": "Unisci le due azioni: scegli la costruzione corretta.",
        "items": [
          {
            "q": "(tu – ordinare) + (tu – guardare il menù)",
            "options": [
              "Prima di ordinare, guarda il menù.",
              "Prima che ordini, guarda il menù.",
              "Prima di che ordini, guarda il menù."
            ],
            "answer": 0
          },
          {
            "q": "(io – andare via) + (il concerto – finire)",
            "options": [
              "Vado via prima che il concerto finisca.",
              "Vado via prima che il concerto finisce.",
              "Vado via prima di il concerto finisce."
            ],
            "answer": 0
          },
          {
            "q": "(loro – tornare) + (noi – preparare la cena)",
            "options": [
              "Prepariamo la cena prima che tornino.",
              "Prepariamo la cena prima che tornano.",
              "Prepariamo la cena prima di tornano."
            ],
            "answer": 0
          },
          {
            "q": "(lei – pagare) + (lei – controllare il conto)",
            "options": [
              "Prima di pagare, controlla il conto.",
              "Prima che paghi, controlla il conto.",
              "Prima di che paga, controlla il conto."
            ],
            "answer": 0
          },
          {
            "q": "(noi – finire il lavoro) + (noi – festeggiare)",
            "options": [
              "Dopo che abbiamo finito il lavoro, abbiamo festeggiato.",
              "Dopo che avessimo finito il lavoro, abbiamo festeggiato.",
              "Dopo di finire il lavoro, abbiamo festeggiato."
            ],
            "answer": 0
          },
          {
            "q": "(voi – entrare) + (voi – togliere le scarpe)",
            "options": [
              "Prima di entrare, toglietevi le scarpe.",
              "Prima che entriate, toglietevi le scarpe.",
              "Prima di che entrate, toglietevi le scarpe."
            ],
            "answer": 0
          },
          {
            "q": "(il film – cominciare) + (io – comprare i popcorn)",
            "options": [
              "Compro i popcorn prima che il film cominci.",
              "Compro i popcorn prima che il film comincia.",
              "Compro i popcorn prima di il film comincia."
            ],
            "answer": 0
          },
          {
            "q": "(lui – rispondere) + (lui – riflettere)",
            "options": [
              "Prima di rispondere, riflette.",
              "Prima che risponda, riflette.",
              "Prima di che risponde, riflette."
            ],
            "answer": 0
          },
          {
            "q": "(lei – ricevere la lettera) + (lei – scrivere)",
            "options": [
              "Dopo che ha ricevuto la lettera, ha scritto.",
              "Dopo che abbia ricevuto la lettera, ha scritto.",
              "Dopo di ricevere la lettera, ha scritto."
            ],
            "answer": 0
          },
          {
            "q": "(noi – uscire) + (voi – svegliarvi)",
            "options": [
              "Usciamo prima che vi svegliate.",
              "Usciamo prima che vi svegliato.",
              "Usciamo prima di vi svegliate."
            ],
            "answer": 0
          }
        ]
      }
    ],
    "lez": [
      "C1 L12"
    ]
  },
  {
    "lvl": "c1",
    "title": "Il periodo ipotetico misto",
    "exercises": [
      {
        "type": "Riempimento",
        "fmt": "buco",
        "instr": "Scegli la forma corretta (ipotesi sul passato → effetto sul presente).",
        "items": [
          {
            "q": "Se ___ di più da giovane, ora avrei più risparmi.",
            "options": [
              "avessi lavorato",
              "lavoravo",
              "avrei lavorato"
            ],
            "answer": 0
          },
          {
            "q": "Se tu ___ i consigli, ora non saresti in difficoltà.",
            "options": [
              "avessi ascoltato",
              "ascoltavi",
              "avresti ascoltato"
            ],
            "answer": 0
          },
          {
            "q": "Se non ___ quel treno, ora saremmo già arrivati.",
            "options": [
              "avessimo perso",
              "perdevamo",
              "avremmo perso"
            ],
            "answer": 0
          },
          {
            "q": "Se fossi stato più attento, ora ___ meno problemi.",
            "options": [
              "avresti",
              "avrai",
              "avessi"
            ],
            "answer": 0
          },
          {
            "q": "Se ___ di più, ora avrei un buon lavoro.",
            "options": [
              "avessi studiato",
              "studiavo",
              "avrei studiato"
            ],
            "answer": 0
          },
          {
            "q": "Se non ___ così tardi, ora non sarei stanco.",
            "options": [
              "fossi andato a letto",
              "andavo a letto",
              "sarei andato a letto"
            ],
            "answer": 0
          },
          {
            "q": "Se avessimo prenotato, ora ___ un tavolo.",
            "options": [
              "avremmo",
              "avremo",
              "avessimo"
            ],
            "answer": 0
          },
          {
            "q": "Se ___ l'italiano prima, ora parlerei meglio.",
            "options": [
              "avessi imparato",
              "imparavo",
              "avrei imparato"
            ],
            "answer": 0
          },
          {
            "q": "Se lui ___ la verità, ora ci fideremmo di lui.",
            "options": [
              "avesse detto",
              "diceva",
              "avrebbe detto"
            ],
            "answer": 0
          },
          {
            "q": "Se non avessi mangiato tanto, ora ___ meglio.",
            "options": [
              "starei",
              "starò",
              "stessi"
            ],
            "answer": 0
          }
        ]
      },
      {
        "type": "Correzione",
        "fmt": "errore",
        "instr": "Clicca il verbo con il tempo sbagliato.",
        "items": [
          {
            "q": "Se risparmiavo prima, ora comprerei la casa.",
            "wrong": "risparmiavo",
            "fix": "avessi risparmiato"
          },
          {
            "q": "Se tu leggevi le istruzioni, non avresti sbagliato.",
            "wrong": "leggevi",
            "fix": "avessi letto"
          },
          {
            "q": "Se prendevamo l'aereo, ora saremmo in Italia.",
            "wrong": "prendevamo",
            "fix": "avessimo preso"
          },
          {
            "q": "Se fosse partito prima, oggi sarà a Roma.",
            "wrong": "sarà",
            "fix": "sarebbe"
          },
          {
            "q": "Se avrei firmato ieri, oggi sarei tranquillo.",
            "wrong": "avrei",
            "fix": "avessi"
          },
          {
            "q": "Se allenavo di più, ora correrei meglio.",
            "wrong": "allenavo",
            "fix": "mi fossi allenato"
          },
          {
            "q": "Se avessimo insistito, ora avremo la risposta.",
            "wrong": "avremo",
            "fix": "avremmo"
          },
          {
            "q": "Se lei accettava l'offerta, ora lavorerebbe qui.",
            "wrong": "accettava",
            "fix": "avesse accettato"
          },
          {
            "q": "Se non avessi dormito poco, ora sarò lucido.",
            "wrong": "sarò",
            "fix": "sarei"
          },
          {
            "q": "Se sarei uscito prima, ora sarei già là.",
            "wrong": "sarei",
            "fix": "fossi"
          }
        ]
      },
      {
        "type": "Trasformazione",
        "fmt": "buco",
        "instr": "Costruisci il periodo ipotetico misto: scegli la versione corretta.",
        "items": [
          {
            "q": "(fare sport da ragazzo) → ora (essere in forma)",
            "options": [
              "Se avessi fatto sport da ragazzo, ora sarei in forma.",
              "Se facevo sport da ragazzo, ora sarei in forma.",
              "Se avrei fatto sport da ragazzo, ora fossi in forma."
            ],
            "answer": 0
          },
          {
            "q": "(comprare quella casa) → ora (non pagare l'affitto)",
            "options": [
              "Se avessimo comprato quella casa, ora non pagheremmo l'affitto.",
              "Se compravamo quella casa, ora non pagheremmo l'affitto.",
              "Se avremmo comprato quella casa, ora non pagassimo l'affitto."
            ],
            "answer": 0
          },
          {
            "q": "(accettare quel posto) → ora (guadagnare di più)",
            "options": [
              "Se avessi accettato quel posto, ora guadagnerei di più.",
              "Se accettavo quel posto, ora guadagnerei di più.",
              "Se avrei accettato quel posto, ora guadagnassi di più."
            ],
            "answer": 0
          },
          {
            "q": "(venire alla riunione) → ora (sapere tutto)",
            "options": [
              "Se fossi venuto alla riunione, ora sapresti tutto.",
              "Se venivi alla riunione, ora sapresti tutto.",
              "Se saresti venuto alla riunione, ora sapessi tutto."
            ],
            "answer": 0
          },
          {
            "q": "(chiedere aiuto) → ora (non essere nei guai)",
            "options": [
              "Se avesse chiesto aiuto, ora non sarebbe nei guai.",
              "Se chiedeva aiuto, ora non sarebbe nei guai.",
              "Se avrebbe chiesto aiuto, ora non fosse nei guai."
            ],
            "answer": 0
          },
          {
            "q": "(vendere la moto) → ora (avere i soldi)",
            "options": [
              "Se avessi venduto la moto, ora avrei i soldi.",
              "Se vendevo la moto, ora avrei i soldi.",
              "Se avrei venduto la moto, ora avessi i soldi."
            ],
            "answer": 0
          },
          {
            "q": "(iscriversi al corso) → ora (avere il diploma)",
            "options": [
              "Se mi fossi iscritto al corso, ora avrei il diploma.",
              "Se mi iscrivevo al corso, ora avrei il diploma.",
              "Se mi sarei iscritto al corso, ora avessi il diploma."
            ],
            "answer": 0
          },
          {
            "q": "(dare retta al medico) → ora (stare bene)",
            "options": [
              "Se avessi dato retta al medico, ora starei bene.",
              "Se davo retta al medico, ora starei bene.",
              "Se avrei dato retta al medico, ora stessi bene."
            ],
            "answer": 0
          },
          {
            "q": "(comprare i biglietti prima) → ora (spendere meno)",
            "options": [
              "Se avessimo comprato i biglietti prima, ora spenderemmo meno.",
              "Se compravamo i biglietti prima, ora spenderemmo meno.",
              "Se avremmo comprato i biglietti prima, ora spendessimo meno."
            ],
            "answer": 0
          },
          {
            "q": "(finire gli studi) → ora (lavorare in banca)",
            "options": [
              "Se avesse finito gli studi, ora lavorerebbe in banca.",
              "Se finiva gli studi, ora lavorerebbe in banca.",
              "Se avrebbe finito gli studi, ora lavorasse in banca."
            ],
            "answer": 0
          }
        ]
      }
    ],
    "lez": [
      "C1 L17"
    ],
    "diag": true
  },
  {
    "lvl": "c1",
    "title": "Connettivi argomentativi avanzati",
    "exercises": [
      {
        "type": "Riempimento",
        "fmt": "buco",
        "instr": "Scegli il connettivo adatto alla relazione logica.",
        "items": [
          {
            "q": "Si è preparato bene; ___, ha superato il colloquio.",
            "options": [
              "pertanto",
              "tuttavia",
              "inoltre"
            ],
            "answer": 0
          },
          {
            "q": "È competente; ___, è anche disponibile.",
            "options": [
              "inoltre",
              "tuttavia",
              "pertanto"
            ],
            "answer": 0
          },
          {
            "q": "Rimango a casa ___ piove forte.",
            "options": [
              "poiché",
              "tuttavia",
              "inoltre"
            ],
            "answer": 0
          },
          {
            "q": "Il progetto è ambizioso; ___, è realizzabile.",
            "options": [
              "tuttavia",
              "pertanto",
              "inoltre"
            ],
            "answer": 0
          },
          {
            "q": "Ha lavorato poco; ___, i risultati sono scarsi.",
            "options": [
              "di conseguenza",
              "tuttavia",
              "d'altra parte"
            ],
            "answer": 0
          },
          {
            "q": "Costa molto; ___, la qualità è ottima.",
            "options": [
              "d'altra parte",
              "pertanto",
              "poiché"
            ],
            "answer": 0
          },
          {
            "q": "Abbiamo valutato tutto; ___, la scelta è chiara.",
            "options": [
              "in definitiva",
              "tuttavia",
              "poiché"
            ],
            "answer": 0
          },
          {
            "q": "Non è venuto ___ era malato.",
            "options": [
              "poiché",
              "tuttavia",
              "inoltre"
            ],
            "answer": 0
          },
          {
            "q": "Il servizio è lento; ___, il personale è gentile.",
            "options": [
              "tuttavia",
              "pertanto",
              "di conseguenza"
            ],
            "answer": 0
          },
          {
            "q": "Ha studiato molto; ___ merita il voto.",
            "options": [
              "pertanto",
              "tuttavia",
              "d'altra parte"
            ],
            "answer": 0
          }
        ]
      },
      {
        "type": "Riempimento",
        "fmt": "buco",
        "instr": "Scegli il marcatore di opinione corretto.",
        "items": [
          {
            "q": "___, questo metodo è efficace.",
            "options": [
              "A mio avviso",
              "Secondo mio",
              "Per mio parere"
            ],
            "answer": 0
          },
          {
            "q": "___, conviene aspettare.",
            "options": [
              "Secondo me",
              "Secondo mio",
              "A mio vedere"
            ],
            "answer": 0
          },
          {
            "q": "___, la decisione è sbagliata.",
            "options": [
              "A mio parere",
              "Al mio parere",
              "Per mio avviso"
            ],
            "answer": 0
          },
          {
            "q": "___, vale la pena rischiare.",
            "options": [
              "Personalmente",
              "Personale",
              "In persona"
            ],
            "answer": 0
          },
          {
            "q": "___, il progetto va rivisto.",
            "options": [
              "Dal mio punto di vista",
              "Del mio punto di vista",
              "Da mio punto di vista"
            ],
            "answer": 0
          },
          {
            "q": "___, non è la scelta migliore.",
            "options": [
              "A mio giudizio",
              "Al mio giudizio",
              "Per mio giudizio"
            ],
            "answer": 0
          },
          {
            "q": "___, bisogna intervenire subito.",
            "options": [
              "Secondo me",
              "Secondo mio",
              "Come me"
            ],
            "answer": 0
          },
          {
            "q": "___, la proposta è interessante.",
            "options": [
              "A mio avviso",
              "In mio avviso",
              "Per mio avviso"
            ],
            "answer": 0
          },
          {
            "q": "___, preferirei rimandare.",
            "options": [
              "Personalmente",
              "Personale",
              "Di persona"
            ],
            "answer": 0
          },
          {
            "q": "___, i dati non sono affidabili.",
            "options": [
              "A mio parere",
              "Al mio parere",
              "Nel mio parere"
            ],
            "answer": 0
          }
        ]
      },
      {
        "type": "Correzione",
        "fmt": "errore",
        "instr": "Clicca il connettivo che esprime la relazione logica sbagliata.",
        "items": [
          {
            "q": "Ha lavorato poco, pertanto ha ottenuto buoni risultati.",
            "wrong": "pertanto",
            "fix": "tuttavia"
          },
          {
            "q": "Fa caldo, inoltre resto in casa.",
            "wrong": "inoltre",
            "fix": "quindi"
          },
          {
            "q": "È simpatico, tuttavia è gentile.",
            "wrong": "tuttavia",
            "fix": "inoltre"
          },
          {
            "q": "Sono le cinque, poiché dobbiamo andare.",
            "wrong": "poiché",
            "fix": "quindi"
          },
          {
            "q": "Piove molto, inoltre non esco.",
            "wrong": "inoltre",
            "fix": "quindi"
          },
          {
            "q": "Ha studiato tanto, tuttavia ha passato l'esame.",
            "wrong": "tuttavia",
            "fix": "pertanto"
          },
          {
            "q": "È tardi, poiché devo andare.",
            "wrong": "poiché",
            "fix": "quindi"
          },
          {
            "q": "Costa poco, tuttavia è conveniente.",
            "wrong": "tuttavia",
            "fix": "quindi"
          },
          {
            "q": "Ha rinunciato, pertanto era stanco.",
            "wrong": "pertanto",
            "fix": "poiché"
          },
          {
            "q": "Il servizio è ottimo, tuttavia lo consiglio.",
            "wrong": "tuttavia",
            "fix": "pertanto"
          }
        ]
      }
    ],
    "lez": [
      "B2 L26",
      "C1 L1",
      "C1 L9",
      "C1 L16",
      "C1 L21"
    ]
  }
];
