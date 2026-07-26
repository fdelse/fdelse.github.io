/* TEST-DATA.JS — Banca esercizi del TEST
   A0·A1: 13 strutture · C1: 5 strutture — tutte 10 item/esercizio,
   SOLO formati autocorreggibili al 100%: nessun campo di testo libero.
   Nessuna frase si ripete tra esercizi diversi della stessa struttura.
   Formati: buco {q,options,answer} · errore {q,wrong,fix} */
const TEST_STRUCTURES = [
  {
    "lvl": "a",
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
            "q": "Lui ha ragione. → Loro ___.",
            "options": [
              "hanno ragione",
              "hanno ragioni",
              "sono ragione"
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
            "q": "___ studenti sono in ritardo.",
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
            "q": "lo zaino",
            "options": [
              "gli zaini",
              "i zaini",
              "le zaini"
            ],
            "answer": 0
          },
          {
            "q": "l'amico",
            "options": [
              "gli amici",
              "i amici",
              "le amici"
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
            "q": "la città",
            "options": [
              "le città",
              "le cittàs",
              "i città"
            ],
            "answer": 0
          },
          {
            "q": "lo studente",
            "options": [
              "gli studenti",
              "i studenti",
              "le studenti"
            ],
            "answer": 0
          },
          {
            "q": "l'ora",
            "options": [
              "le ore",
              "le ora",
              "gli ore"
            ],
            "answer": 0
          },
          {
            "q": "il libro",
            "options": [
              "i libri",
              "gli libri",
              "le libri"
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
            "q": "lo specchio",
            "options": [
              "gli specchi",
              "i specchi",
              "le specchi"
            ],
            "answer": 0
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
        "instr": "Scegli l'articolo giusto per completare.",
        "items": [
          {
            "q": "Marco è ___ studente.",
            "options": [
              "uno",
              "un",
              "un'"
            ],
            "answer": 0
          },
          {
            "q": "Anna è ___ amica.",
            "options": [
              "un'",
              "una",
              "un"
            ],
            "answer": 0
          },
          {
            "q": "Ho ___ zio a Roma.",
            "options": [
              "uno",
              "un",
              "un'"
            ],
            "answer": 1
          },
          {
            "q": "C'è ___ specchio in camera.",
            "options": [
              "uno",
              "un",
              "un'"
            ],
            "answer": 0
          },
          {
            "q": "Leggo ___ storia.",
            "options": [
              "una",
              "un",
              "un'"
            ],
            "answer": 0
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
              "un'",
              "una",
              "un"
            ],
            "answer": 0
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
              "uno",
              "un'"
            ],
            "answer": 0
          },
          {
            "q": "Ha ___ sorella.",
            "options": [
              "una",
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
              "caffè s",
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
            "q": "gli studenti ___",
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
        "fmt": "buco",
        "instr": "Volgi al plurale: scegli la forma corretta.",
        "items": [
          {
            "q": "la casa grande",
            "options": [
              "le case grandi",
              "le case grande",
              "le casa grandi"
            ],
            "answer": 0
          },
          {
            "q": "il libro rosso",
            "options": [
              "i libri rossi",
              "i libri rosso",
              "i libri rosse"
            ],
            "answer": 0
          },
          {
            "q": "l'amica simpatica",
            "options": [
              "le amiche simpatiche",
              "le amiche simpatica",
              "gli amici simpatiche"
            ],
            "answer": 0
          },
          {
            "q": "lo zaino pesante",
            "options": [
              "gli zaini pesanti",
              "gli zaini pesante",
              "i zaini pesanti"
            ],
            "answer": 0
          },
          {
            "q": "la ragazza alta",
            "options": [
              "le ragazze alte",
              "le ragazze alta",
              "le ragazza alte"
            ],
            "answer": 0
          },
          {
            "q": "il film interessante",
            "options": [
              "i film interessanti",
              "i film interessante",
              "i filmi interessanti"
            ],
            "answer": 0
          },
          {
            "q": "l'esercizio difficile",
            "options": [
              "gli esercizi difficili",
              "gli esercizi difficile",
              "i esercizi difficili"
            ],
            "answer": 0
          },
          {
            "q": "la macchina veloce",
            "options": [
              "le macchine veloci",
              "le macchine veloce",
              "le macchina veloci"
            ],
            "answer": 0
          },
          {
            "q": "il vestito nuovo",
            "options": [
              "i vestiti nuovi",
              "i vestiti nuovo",
              "i vestiti nuove"
            ],
            "answer": 0
          },
          {
            "q": "la storia bella",
            "options": [
              "le storie belle",
              "le storie bella",
              "le storia belle"
            ],
            "answer": 0
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
        "instr": "Clicca la parola sbagliata.",
        "items": [
          {
            "q": "Nel museo c'è molti quadri.",
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
    "title": "Presente indicativo: verbi regolari",
    "exercises": [
      {
        "type": "Riempimento",
        "fmt": "buco",
        "instr": "Scegli la coniugazione corretta al presente.",
        "items": [
          {
            "q": "Noi ___ una lettera. (scrivere)",
            "options": [
              "scriviamo",
              "scrivete",
              "scrivono"
            ],
            "answer": 0
          },
          {
            "q": "Lei ___ molto. (dormire)",
            "options": [
              "dorme",
              "dormi",
              "dormono"
            ],
            "answer": 0
          },
          {
            "q": "Tu ___ il lavoro? (finire)",
            "options": [
              "finisci",
              "finisce",
              "finisco"
            ],
            "answer": 0
          },
          {
            "q": "Loro ___ a Milano. (abitare)",
            "options": [
              "abitano",
              "abitiamo",
              "abitate"
            ],
            "answer": 0
          },
          {
            "q": "Io ___ il giornale. (leggere)",
            "options": [
              "leggo",
              "leggi",
              "legge"
            ],
            "answer": 0
          },
          {
            "q": "Voi ___ spagnolo. (parlare)",
            "options": [
              "parlate",
              "parliamo",
              "parlano"
            ],
            "answer": 0
          },
          {
            "q": "Noi ___ la porta. (aprire)",
            "options": [
              "apriamo",
              "aprite",
              "aprono"
            ],
            "answer": 0
          },
          {
            "q": "Lui ___ la domanda. (capire)",
            "options": [
              "capisce",
              "capisci",
              "capisco"
            ],
            "answer": 0
          },
          {
            "q": "Tu ___ alle otto. (partire)",
            "options": [
              "parti",
              "parte",
              "parto"
            ],
            "answer": 0
          },
          {
            "q": "Loro ___ in centro. (vivere)",
            "options": [
              "vivono",
              "viviamo",
              "vivete"
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
        "fmt": "buco",
        "instr": "Cambia il soggetto a «noi»: scegli la forma corretta.",
        "items": [
          {
            "q": "Io scrivo un'email. → Noi ___",
            "options": [
              "scriviamo",
              "scrivete",
              "scrivano"
            ],
            "answer": 0
          },
          {
            "q": "Io parto domani. → Noi ___",
            "options": [
              "partiamo",
              "partite",
              "partano"
            ],
            "answer": 0
          },
          {
            "q": "Io capisco la domanda. → Noi ___",
            "options": [
              "capiamo",
              "capite",
              "capischiamo"
            ],
            "answer": 0
          },
          {
            "q": "Io apro la finestra. → Noi ___",
            "options": [
              "apriamo",
              "aprite",
              "apriano"
            ],
            "answer": 0
          },
          {
            "q": "Io leggo il giornale. → Noi ___",
            "options": [
              "leggiamo",
              "leggete",
              "legghiamo"
            ],
            "answer": 0
          },
          {
            "q": "Io dormo poco. → Noi ___",
            "options": [
              "dormiamo",
              "dormite",
              "dormimo"
            ],
            "answer": 0
          },
          {
            "q": "Io finisco presto. → Noi ___",
            "options": [
              "finiamo",
              "finite",
              "finischiamo"
            ],
            "answer": 0
          },
          {
            "q": "Io vivo a Roma. → Noi ___",
            "options": [
              "viviamo",
              "vivete",
              "vivimo"
            ],
            "answer": 0
          },
          {
            "q": "Io parlo tre lingue. → Noi ___",
            "options": [
              "parliamo",
              "parlate",
              "parlamo"
            ],
            "answer": 0
          },
          {
            "q": "Io preferisco il tè. → Noi ___",
            "options": [
              "preferiamo",
              "preferite",
              "preferischiamo"
            ],
            "answer": 0
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
        "fmt": "buco",
        "instr": "Rendi negativa la frase: scegli la versione corretta.",
        "items": [
          {
            "q": "Parlo francese.",
            "options": [
              "Non parlo francese.",
              "Parlo non francese.",
              "No parlo francese."
            ],
            "answer": 0
          },
          {
            "q": "Lei abita qui.",
            "options": [
              "Lei non abita qui.",
              "Lei abita non qui.",
              "Non lei abita qui."
            ],
            "answer": 0
          },
          {
            "q": "Abbiamo tempo.",
            "options": [
              "Non abbiamo tempo.",
              "Abbiamo non tempo.",
              "No abbiamo tempo."
            ],
            "answer": 0
          },
          {
            "q": "Loro lavorano oggi.",
            "options": [
              "Loro non lavorano oggi.",
              "Loro lavorano non oggi.",
              "Non loro lavorano oggi."
            ],
            "answer": 0
          },
          {
            "q": "Mangio la carne.",
            "options": [
              "Non mangio la carne.",
              "Mangio non la carne.",
              "No mangio la carne."
            ],
            "answer": 0
          },
          {
            "q": "Tu capisci tutto.",
            "options": [
              "Tu non capisci tutto.",
              "Tu capisci non tutto.",
              "Non tu capisci tutto."
            ],
            "answer": 0
          },
          {
            "q": "Vado al cinema.",
            "options": [
              "Non vado al cinema.",
              "Vado non al cinema.",
              "No vado al cinema."
            ],
            "answer": 0
          },
          {
            "q": "Lui beve il caffè.",
            "options": [
              "Lui non beve il caffè.",
              "Lui beve non il caffè.",
              "No lui beve il caffè."
            ],
            "answer": 0
          },
          {
            "q": "Studiamo insieme.",
            "options": [
              "Non studiamo insieme.",
              "Studiamo non insieme.",
              "No studiamo insieme."
            ],
            "answer": 0
          },
          {
            "q": "Voi partite oggi.",
            "options": [
              "Voi non partite oggi.",
              "Voi partite non oggi.",
              "Non voi partite oggi."
            ],
            "answer": 0
          }
        ]
      },
      {
        "type": "Riempimento",
        "fmt": "buco",
        "instr": "Scegli la parola negativa giusta.",
        "items": [
          {
            "q": "Non c'è ___ di interessante.",
            "options": [
              "niente",
              "nessuno",
              "mai"
            ],
            "answer": 0
          },
          {
            "q": "Non c'è ___ in ufficio oggi.",
            "options": [
              "nessuno",
              "niente",
              "più"
            ],
            "answer": 0
          },
          {
            "q": "Non sono ___ stato in Italia.",
            "options": [
              "mai",
              "niente",
              "nessuno"
            ],
            "answer": 0
          },
          {
            "q": "Non abito ___ a Roma.",
            "options": [
              "più",
              "mai",
              "niente"
            ],
            "answer": 0
          },
          {
            "q": "Non voglio ___, grazie.",
            "options": [
              "niente",
              "nessuno",
              "mai"
            ],
            "answer": 0
          },
          {
            "q": "Non conosco ___ qui.",
            "options": [
              "nessuno",
              "niente",
              "più"
            ],
            "answer": 0
          },
          {
            "q": "Non ho ___ finito, aspetta.",
            "options": [
              "ancora",
              "mai",
              "più"
            ],
            "answer": 0
          },
          {
            "q": "Non guardo ___ la televisione.",
            "options": [
              "mai",
              "niente",
              "nessuno"
            ],
            "answer": 0
          },
          {
            "q": "Non c'è ___ da fare.",
            "options": [
              "niente",
              "nessuno",
              "mai"
            ],
            "answer": 0
          },
          {
            "q": "Non viene ___ alla festa.",
            "options": [
              "nessuno",
              "niente",
              "più"
            ],
            "answer": 0
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
            "q": "Non conosco qualcuno qui.",
            "wrong": "qualcuno",
            "fix": "nessuno"
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
            "q": "Non voglio nulla di speciale.",
            "wrong": "nulla",
            "fix": "niente"
          },
          {
            "q": "Non viene qualcuno stasera.",
            "wrong": "qualcuno",
            "fix": "nessuno"
          },
          {
            "q": "Non bevo sempre il caffè la sera.",
            "wrong": "sempre",
            "fix": "mai"
          },
          {
            "q": "Non ho visto qualcuno.",
            "wrong": "qualcuno",
            "fix": "nessuno"
          },
          {
            "q": "Non compro qualcosa oggi.",
            "wrong": "qualcosa",
            "fix": "niente"
          },
          {
            "q": "Non parlo con qualcuno di questo.",
            "wrong": "qualcuno",
            "fix": "nessuno"
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
        "fmt": "buco",
        "instr": "Volgi al passato prossimo: scegli la forma corretta.",
        "items": [
          {
            "q": "Mi piace la cena.",
            "options": [
              "Mi è piaciuta la cena.",
              "Mi è piaciuto la cena.",
              "Mi ha piaciuto la cena."
            ],
            "answer": 0
          },
          {
            "q": "Ti piacciono i regali.",
            "options": [
              "Ti sono piaciuti i regali.",
              "Ti è piaciuti i regali.",
              "Ti hanno piaciuto i regali."
            ],
            "answer": 0
          },
          {
            "q": "Le piace la festa.",
            "options": [
              "Le è piaciuta la festa.",
              "Le è piaciuto la festa.",
              "Le ha piaciuta la festa."
            ],
            "answer": 0
          },
          {
            "q": "Ci piacciono le vacanze.",
            "options": [
              "Ci sono piaciute le vacanze.",
              "Ci è piaciute le vacanze.",
              "Ci hanno piaciute le vacanze."
            ],
            "answer": 0
          },
          {
            "q": "Mi piace il film.",
            "options": [
              "Mi è piaciuto il film.",
              "Mi è piaciuta il film.",
              "Mi ha piaciuto il film."
            ],
            "answer": 0
          },
          {
            "q": "Ti piace la pizza.",
            "options": [
              "Ti è piaciuta la pizza.",
              "Ti è piaciuto la pizza.",
              "Ti ha piaciuta la pizza."
            ],
            "answer": 0
          },
          {
            "q": "Le piacciono i dolci.",
            "options": [
              "Le sono piaciuti i dolci.",
              "Le è piaciuti i dolci.",
              "Le hanno piaciuti i dolci."
            ],
            "answer": 0
          },
          {
            "q": "Ci piace il concerto.",
            "options": [
              "Ci è piaciuto il concerto.",
              "Ci è piaciuta il concerto.",
              "Ci ha piaciuto il concerto."
            ],
            "answer": 0
          },
          {
            "q": "Vi piacciono le foto.",
            "options": [
              "Vi sono piaciute le foto.",
              "Vi è piaciute le foto.",
              "Vi hanno piaciute le foto."
            ],
            "answer": 0
          },
          {
            "q": "Mi piacciono le canzoni.",
            "options": [
              "Mi sono piaciute le canzoni.",
              "Mi è piaciute le canzoni.",
              "Mi hanno piaciute le canzoni."
            ],
            "answer": 0
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
            "q": "Lei ___ partire presto. (dovere)",
            "options": [
              "deve",
              "dove",
              "devono"
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
            "q": "Io ___ aiutarti domani. (potere)",
            "options": [
              "posso",
              "poto",
              "puosso"
            ],
            "answer": 0
          },
          {
            "q": "Tu ___ studiare di più. (dovere)",
            "options": [
              "devi",
              "dovi",
              "deve"
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
              "posst"
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
            "q": "Vogliamo di partire.",
            "wrong": "di",
            "fix": "(togliere)"
          },
          {
            "q": "Devi a finire i compiti.",
            "wrong": "a",
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
            "fix": "(togliere)"
          },
          {
            "q": "Loro deve partire.",
            "wrong": "deve",
            "fix": "devono"
          },
          {
            "q": "Noi possiamo di aiutare.",
            "wrong": "di",
            "fix": "(togliere)"
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
            "q": "La lezione è ___ le tre e le quattro.",
            "options": [
              "tra",
              "in",
              "a"
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
            "q": "Questo è un regalo ___ Anna.",
            "options": [
              "per",
              "di",
              "a"
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
            "q": "La borsa è su Anna.",
            "wrong": "su",
            "fix": "di"
          },
          {
            "q": "Lavoro a Spagna.",
            "wrong": "a",
            "fix": "in"
          },
          {
            "q": "Studio per tre anni all'università... Studio per due ore.",
            "wrong": "per",
            "fix": "da"
          },
          {
            "q": "Parto in Napoli domani.",
            "wrong": "in",
            "fix": "da"
          },
          {
            "q": "Sono stato a Grecia l'anno scorso.",
            "wrong": "a",
            "fix": "in"
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
        "fmt": "buco",
        "instr": "Scegli il possessivo corretto (con o senza articolo).",
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
        "instr": "Clicca la parola sbagliata (articolo di troppo/mancante o accordo).",
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
        "instr": "Volgi al plurale la cosa posseduta: scegli la forma corretta.",
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
            "q": "il mio amico",
            "options": [
              "i miei amici",
              "i mie amici",
              "i miei amico"
            ],
            "answer": 0
          },
          {
            "q": "la tua chiave",
            "options": [
              "le tue chiavi",
              "le tue chiave",
              "le tuoi chiavi"
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
            "q": "la loro casa",
            "options": [
              "le loro case",
              "le loro casa",
              "i loro case"
            ],
            "answer": 0
          },
          {
            "q": "il suo cane",
            "options": [
              "i suoi cani",
              "i sue cani",
              "i suoi cane"
            ],
            "answer": 0
          },
          {
            "q": "la nostra macchina",
            "options": [
              "le nostre macchine",
              "le nostra macchine",
              "le nostri macchine"
            ],
            "answer": 0
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
            "q": "È le sei e mezza.",
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
        "instr": "Scegli come si dice l'ora indicata.",
        "items": [
          {
            "q": "2:00",
            "options": [
              "Sono le due.",
              "È le due.",
              "È la due."
            ],
            "answer": 0
          },
          {
            "q": "1:00",
            "options": [
              "È l'una.",
              "Sono l'una.",
              "È le una."
            ],
            "answer": 0
          },
          {
            "q": "12:00 (giorno)",
            "options": [
              "È mezzogiorno.",
              "Sono mezzogiorno.",
              "È le mezzogiorno."
            ],
            "answer": 0
          },
          {
            "q": "00:00",
            "options": [
              "È mezzanotte.",
              "Sono mezzanotte.",
              "È la mezzanotte."
            ],
            "answer": 0
          },
          {
            "q": "5:00",
            "options": [
              "Sono le cinque.",
              "È le cinque.",
              "È cinque."
            ],
            "answer": 0
          },
          {
            "q": "7:30",
            "options": [
              "Sono le sette e mezza.",
              "È le sette e mezza.",
              "Sono sette e mezza."
            ],
            "answer": 0
          },
          {
            "q": "10:15",
            "options": [
              "Sono le dieci e un quarto.",
              "È le dieci e un quarto.",
              "Sono dieci e un quarto."
            ],
            "answer": 0
          },
          {
            "q": "3:00",
            "options": [
              "Sono le tre.",
              "È le tre.",
              "È la tre."
            ],
            "answer": 0
          },
          {
            "q": "1:30",
            "options": [
              "È l'una e mezza.",
              "Sono l'una e mezza.",
              "È le una e mezza."
            ],
            "answer": 0
          },
          {
            "q": "9:45",
            "options": [
              "Sono le dieci meno un quarto.",
              "È le dieci meno un quarto.",
              "Sono le nove e tre quarti."
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
            "q": "(tu – firmare) + (tu – leggere il contratto)",
            "options": [
              "Prima di firmare, leggi il contratto.",
              "Prima che firmi, leggi il contratto.",
              "Prima che tu firmi, leggi il contratto."
            ],
            "answer": 0
          },
          {
            "q": "(io – uscire) + (la riunione – iniziare)",
            "options": [
              "Esco prima che la riunione inizi.",
              "Esco prima di la riunione inizia.",
              "Esco prima che la riunione inizia."
            ],
            "answer": 0
          },
          {
            "q": "(noi – arrivare) + (noi – salutarci)",
            "options": [
              "Dopo che siamo arrivati, ci siamo salutati.",
              "Dopo che siamo arrivati, ci salutiamo prima.",
              "Dopo di arrivare, ci siamo salutati."
            ],
            "answer": 0
          },
          {
            "q": "(voi – partire) + (io – tornare)",
            "options": [
              "Partite prima che io torni.",
              "Partite prima di io torno.",
              "Partite prima che io torno."
            ],
            "answer": 0
          },
          {
            "q": "(tu – decidere) + (tu – riflettere)",
            "options": [
              "Prima di decidere, rifletti.",
              "Prima che decidi, rifletti.",
              "Prima di che decidi, rifletti."
            ],
            "answer": 0
          },
          {
            "q": "(lui – uscire) + (lui – spegnere la luce)",
            "options": [
              "Prima di uscire, spegne la luce.",
              "Prima che esca, spegne la luce.",
              "Prima di esce, spegne la luce."
            ],
            "answer": 0
          },
          {
            "q": "(io – parlare) + (tu – ascoltare)",
            "options": [
              "Ascolta prima che io parli.",
              "Ascolta prima di io parlo.",
              "Ascolta prima che io parlo."
            ],
            "answer": 0
          },
          {
            "q": "(lei – sapere la notizia) + (lei – chiamare)",
            "options": [
              "Dopo che ha saputo la notizia, ha chiamato.",
              "Dopo che abbia saputo la notizia, ha chiamato.",
              "Dopo di sapere la notizia, ha chiamato."
            ],
            "answer": 0
          },
          {
            "q": "(noi – mangiare) + (noi – lavarci le mani)",
            "options": [
              "Prima di mangiare, ci laviamo le mani.",
              "Prima che mangiamo, ci laviamo le mani.",
              "Prima di che mangiamo, ci laviamo le mani."
            ],
            "answer": 0
          },
          {
            "q": "(loro – arrivare) + (noi – preparare tutto)",
            "options": [
              "Prepariamo tutto prima che arrivino.",
              "Prepariamo tutto prima di arrivano.",
              "Prepariamo tutto prima che arrivano."
            ],
            "answer": 0
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
            "q": "(lavorare di più da giovane) → ora (avere più risparmi)",
            "options": [
              "Se avessi lavorato di più da giovane, ora avrei più risparmi.",
              "Se lavoravo di più da giovane, ora avrei più risparmi.",
              "Se avrei lavorato di più, ora avessi più risparmi."
            ],
            "answer": 0
          },
          {
            "q": "(ascoltare i consigli) → ora (non essere in difficoltà)",
            "options": [
              "Se avessi ascoltato i consigli, ora non sarei in difficoltà.",
              "Se ascoltavo i consigli, ora non sarei in difficoltà.",
              "Se avrei ascoltato i consigli, ora non fossi in difficoltà."
            ],
            "answer": 0
          },
          {
            "q": "(non perdere il treno) → ora (essere già arrivati)",
            "options": [
              "Se non avessimo perso il treno, ora saremmo già arrivati.",
              "Se non perdevamo il treno, ora saremmo già arrivati.",
              "Se non avremmo perso il treno, ora fossimo già arrivati."
            ],
            "answer": 0
          },
          {
            "q": "(studiare di più) → ora (avere un buon lavoro)",
            "options": [
              "Se avessi studiato di più, ora avrei un buon lavoro.",
              "Se studiavo di più, ora avrei un buon lavoro.",
              "Se avrei studiato di più, ora avessi un buon lavoro."
            ],
            "answer": 0
          },
          {
            "q": "(prenotare) → ora (avere un tavolo)",
            "options": [
              "Se avessimo prenotato, ora avremmo un tavolo.",
              "Se prenotavamo, ora avremmo un tavolo.",
              "Se avremmo prenotato, ora avessimo un tavolo."
            ],
            "answer": 0
          },
          {
            "q": "(imparare l'italiano prima) → ora (parlare meglio)",
            "options": [
              "Se avessi imparato l'italiano prima, ora parlerei meglio.",
              "Se imparavo l'italiano prima, ora parlerei meglio.",
              "Se avrei imparato l'italiano, ora parlassi meglio."
            ],
            "answer": 0
          },
          {
            "q": "(non andare a letto tardi) → ora (non essere stanco)",
            "options": [
              "Se non fossi andato a letto tardi, ora non sarei stanco.",
              "Se non andavo a letto tardi, ora non sarei stanco.",
              "Se non sarei andato a letto tardi, ora non fossi stanco."
            ],
            "answer": 0
          },
          {
            "q": "(dire la verità) → ora (fidarsi di lui)",
            "options": [
              "Se avesse detto la verità, ora ci fideremmo di lui.",
              "Se diceva la verità, ora ci fideremmo di lui.",
              "Se avrebbe detto la verità, ora ci fidassimo di lui."
            ],
            "answer": 0
          },
          {
            "q": "(partire prima) → ora (essere già là)",
            "options": [
              "Se fossi partito prima, ora sarei già là.",
              "Se partivo prima, ora sarei già là.",
              "Se sarei partito prima, ora fossi già là."
            ],
            "answer": 0
          },
          {
            "q": "(non mangiare tanto) → ora (stare meglio)",
            "options": [
              "Se non avessi mangiato tanto, ora starei meglio.",
              "Se non mangiavo tanto, ora starei meglio.",
              "Se non avrei mangiato tanto, ora stessi meglio."
            ],
            "answer": 0
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
    ]
  }
];
