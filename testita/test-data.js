/* TEST-DATA.JS — Banca esercizi del TEST
   Strutture mappate sulle lezioni dell indice standard (campo "lez").
   A1: 17 strutture (lezioni A1) · C1: 5 strutture — 10 item per esercizio.
   Solo formati autocorreggibili: buco {q,options,answer} · errore {q,wrong,fix}.
   Nessuna frase si ripete tra esercizi diversi della stessa struttura. */
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
            "q": "Voi ___ in ritardo.",
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
    ]
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
    ]
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
    ]
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
            "q": "Io ___ la porta. (chiudere)",
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
            "q": "Io ___ alle sette. (partire)",
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
    ]
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
    ]
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
    ]
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
            "q": "La fattura va saldato entro 30 giorni.",
            "wrong": "saldato",
            "fix": "saldata"
          },
          {
            "q": "Le foto viene stampate oggi.",
            "wrong": "viene",
            "fix": "vengono"
          },
          {
            "q": "Le finestre si pulisce ogni settimana.",
            "wrong": "pulisce",
            "fix": "puliscono"
          },
          {
            "q": "Il modulo va compilata in stampatello.",
            "wrong": "compilata",
            "fix": "compilato"
          },
          {
            "q": "Le chiavi va restituite alla reception.",
            "wrong": "va",
            "fix": "vanno"
          },
          {
            "q": "I documenti viene firmati oggi.",
            "wrong": "viene",
            "fix": "vengono"
          },
          {
            "q": "Questo vino va servita freddo.",
            "wrong": "servita",
            "fix": "servito"
          },
          {
            "q": "Le domande vanno presentato entro venerdì.",
            "wrong": "presentato",
            "fix": "presentate"
          },
          {
            "q": "Qui si mangiano molto pesce.",
            "wrong": "mangiano",
            "fix": "mangia"
          },
          {
            "q": "La lettera vengono spedita domani.",
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
            "q": "Bisogna saldare la fattura.",
            "options": [
              "La fattura va saldata.",
              "La fattura viene saldare.",
              "La fattura va saldato."
            ],
            "answer": 0
          },
          {
            "q": "Pubblicano i risultati domani.",
            "options": [
              "I risultati vengono pubblicati domani.",
              "I risultati viene pubblicati domani.",
              "I risultati vanno pubblicato domani."
            ],
            "answer": 0
          },
          {
            "q": "La gente beve molta acqua qui.",
            "options": [
              "Qui si beve molta acqua.",
              "Qui si bevono molta acqua.",
              "Qui viene bevere molta acqua."
            ],
            "answer": 0
          },
          {
            "q": "Un tecnico controlla gli impianti.",
            "options": [
              "Gli impianti vengono controllati da un tecnico.",
              "Gli impianti viene controllati da un tecnico.",
              "Gli impianti vanno controllato da un tecnico."
            ],
            "answer": 0
          },
          {
            "q": "Bisogna firmare i documenti.",
            "options": [
              "I documenti vanno firmati.",
              "I documenti va firmati.",
              "I documenti vengono firmare."
            ],
            "answer": 0
          },
          {
            "q": "Servono il vino freddo.",
            "options": [
              "Il vino viene servito freddo.",
              "Il vino viene servita freddo.",
              "Il vino va servire freddo."
            ],
            "answer": 0
          },
          {
            "q": "Devono presentare le domande.",
            "options": [
              "Le domande vanno presentate.",
              "Le domande va presentate.",
              "Le domande vengono presentare."
            ],
            "answer": 0
          },
          {
            "q": "Qualcuno ha rubato la macchina.",
            "options": [
              "La macchina è stata rubata.",
              "La macchina è stato rubata.",
              "La macchina viene stata rubata."
            ],
            "answer": 0
          },
          {
            "q": "Puliscono le finestre ogni settimana.",
            "options": [
              "Le finestre vengono pulite ogni settimana.",
              "Le finestre viene pulite ogni settimana.",
              "Le finestre vanno pulito ogni settimana."
            ],
            "answer": 0
          },
          {
            "q": "Bisogna compilare il modulo.",
            "options": [
              "Il modulo va compilato.",
              "Il modulo va compilata.",
              "Il modulo viene compilare."
            ],
            "answer": 0
          }
        ]
      }
    ],
    "lez": [
      "C1 L7"
    ]
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
            "q": "Benché è stanco, lavora.",
            "wrong": "è",
            "fix": "sia"
          },
          {
            "q": "Nonostante nevica, sono usciti.",
            "wrong": "nevica",
            "fix": "nevichi"
          },
          {
            "q": "Anche se sia tardi, vengo lo stesso.",
            "wrong": "sia",
            "fix": "è"
          },
          {
            "q": "Sebbene ha studiato poco, ha superato l'esame.",
            "wrong": "ha",
            "fix": "abbia"
          },
          {
            "q": "Benché era giovane, era competente.",
            "wrong": "era",
            "fix": "fosse"
          },
          {
            "q": "Anche se faccia freddo, esco.",
            "wrong": "faccia",
            "fix": "fa"
          },
          {
            "q": "Nonostante è ricco, vive con poco.",
            "wrong": "è",
            "fix": "sia"
          },
          {
            "q": "Per quanto mi sforzo, non ci riesco più.",
            "wrong": "sforzo",
            "fix": "sforzi"
          },
          {
            "q": "Sebbene aveva ragione, non ha insistito.",
            "wrong": "aveva",
            "fix": "avesse"
          },
          {
            "q": "Anche se piova, partiamo.",
            "wrong": "piova",
            "fix": "piove"
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
    ]
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
            "q": "Avvisami prima che inizia la riunione.",
            "wrong": "inizia",
            "fix": "inizi"
          },
          {
            "q": "Dopo che fosse arrivato, ci siamo salutati.",
            "wrong": "fosse",
            "fix": "era"
          },
          {
            "q": "Aspetta finché non torni io.",
            "wrong": "torni",
            "fix": "torno"
          },
          {
            "q": "Prima che io parta, chiamami tu.",
            "wrong": "parta",
            "fix": "parto (prima di partire)"
          },
          {
            "q": "Prima di esci, chiudi la finestra.",
            "wrong": "esci",
            "fix": "uscire"
          },
          {
            "q": "Dopo che abbia mangiato, è uscito.",
            "wrong": "abbia",
            "fix": "aveva"
          },
          {
            "q": "Prima che sarà tardi, decidiamo.",
            "wrong": "sarà",
            "fix": "sia"
          },
          {
            "q": "Resta qui finché non arrivi il treno stasera.",
            "wrong": "arrivi",
            "fix": "arriva"
          },
          {
            "q": "Prima di che chiami, pensa bene.",
            "wrong": "che",
            "fix": "(togliere: prima di chiamare)"
          },
          {
            "q": "Dopo che sarebbe partito, ha telefonato.",
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
            "q": "Se tu ascoltavi i consigli, non saresti in difficoltà.",
            "wrong": "ascoltavi",
            "fix": "avessi ascoltato"
          },
          {
            "q": "Se prendevamo l'aereo, ora saremmo in Italia.",
            "wrong": "prendevamo",
            "fix": "avessimo preso"
          },
          {
            "q": "Se fossi stato più attento, ora avrai meno problemi.",
            "wrong": "avrai",
            "fix": "avresti"
          },
          {
            "q": "Se avrei studiato, ora avrei un buon lavoro.",
            "wrong": "avrei",
            "fix": "avessi"
          },
          {
            "q": "Se studiavo di più, ora parlerei meglio.",
            "wrong": "studiavo",
            "fix": "avessi studiato"
          },
          {
            "q": "Se avessimo prenotato, ora avremo un tavolo.",
            "wrong": "avremo",
            "fix": "avremmo"
          },
          {
            "q": "Se lei accettava l'offerta, ora lavorerebbe qui.",
            "wrong": "accettava",
            "fix": "avesse accettato"
          },
          {
            "q": "Se non avessi mangiato tanto, ora starò meglio.",
            "wrong": "starò",
            "fix": "starei"
          },
          {
            "q": "Se sarei partito prima, ora sarei già là.",
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
    ]
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
            "q": "Non è venuto, pertanto era malato.",
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
