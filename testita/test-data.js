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
            "q": "Marta ___ spagnola.",
            "options": [
              "è",
              "ha",
              "hai"
            ],
            "answer": 0
          },
          {
            "q": "Io e Luca ___ un fratello di nome Paolo.",
            "options": [
              "abbiamo",
              "siamo",
              "avete"
            ],
            "answer": 0
          },
          {
            "q": "Marco e Giulia ___ italiani, di Milano.",
            "options": [
              "sono",
              "hanno",
              "siamo"
            ],
            "answer": 0
          },
          {
            "q": "Mi chiamo Anna e ___ trentacinque anni.",
            "options": [
              "ho",
              "sono",
              "hai"
            ],
            "answer": 0
          },
          {
            "q": "Marco e Paolo, voi ___ italiani?",
            "options": [
              "siete",
              "avete",
              "sono"
            ],
            "answer": 0
          },
          {
            "q": "Luca, ___ una sorella più grande?",
            "options": [
              "hai",
              "sei",
              "ha"
            ],
            "answer": 0
          }
        ]
      },
      {
        "type": "Correzione",
        "fmt": "errore",
        "instr": "Individua e clicca dove c'è l'errore.",
        "items": [
          {
            "q": "Marco è trent'anni.",
            "wrong": "è",
            "fix": "ha"
          },
          {
            "q": "Anna ha italiana.",
            "wrong": "ha",
            "fix": "è"
          },
          {
            "q": "Io e Sara siamo una macchina.",
            "wrong": "siamo",
            "fix": "abbiamo"
          },
          {
            "q": "Ragazzi, voi avete francesi o svizzeri?",
            "wrong": "avete",
            "fix": "siete"
          },
          {
            "q": "Marco e Anna sono una casa grande in centro.",
            "wrong": "sono",
            "fix": "hanno"
          },
          {
            "q": "Mi chiamo Pierre e ho francese.",
            "wrong": "ho",
            "fix": "sono"
          }
        ]
      },
      {
        "type": "Trasformazione",
        "fmt": "buco",
        "instr": "Metti al plurale: scegli la forma corretta.",
        "items": [
          {
            "q": "Lei è qui. → Loro ___.",
            "options": [
              "sono qui",
              "è qui",
              "siamo qui"
            ],
            "answer": 0
          },
          {
            "q": "Io ho un fratello. → Noi ___.",
            "options": [
              "abbiamo un fratello",
              "avete un fratello",
              "hanno un fratello"
            ],
            "answer": 0
          },
          {
            "q": "Tu sei a Roma. → Voi ___.",
            "options": [
              "siete a Roma",
              "sono a Roma",
              "siamo a Roma"
            ],
            "answer": 0
          },
          {
            "q": "Lui ha una sorella. → Loro ___.",
            "options": [
              "hanno una sorella",
              "avete una sorella",
              "sono una sorella"
            ],
            "answer": 0
          },
          {
            "q": "Lei è a casa. → Loro ___.",
            "options": [
              "sono a casa",
              "è a casa",
              "siete a casa"
            ],
            "answer": 0
          },
          {
            "q": "Io ho vent'anni. → Noi ___.",
            "options": [
              "abbiamo vent'anni",
              "avete vent'anni",
              "siamo vent'anni"
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
            "q": "___ studente nuovo è molto bravo in matematica.",
            "options": [
              "Lo",
              "Il",
              "La"
            ],
            "answer": 0
          },
          {
            "q": "La maestra apre ___ finestre della classe.",
            "options": [
              "le",
              "i",
              "gli"
            ],
            "answer": 0
          },
          {
            "q": "___ studenti nuovi sono già in aula.",
            "options": [
              "Gli",
              "I",
              "Le"
            ],
            "answer": 0
          },
          {
            "q": "Anna ha ___ borsa in camera.",
            "options": [
              "la",
              "il",
              "le"
            ],
            "answer": 0
          },
          {
            "q": "In camera ho ___ libri.",
            "options": [
              "i",
              "gli",
              "le"
            ],
            "answer": 0
          },
          {
            "q": "Marco ha ___ quaderno in aula.",
            "options": [
              "il",
              "lo",
              "la"
            ],
            "answer": 0
          }
        ]
      },
      {
        "type": "Correzione",
        "fmt": "errore",
        "instr": "Individua e clicca dove c'è l'errore.",
        "items": [
          {
            "q": "In aula c'è la studente nuovo.",
            "wrong": "la",
            "fix": "lo"
          },
          {
            "q": "Il zaino è qui e Marco è in aula.",
            "wrong": "Il",
            "fix": "Lo"
          },
          {
            "q": "Lo casa è in centro.",
            "wrong": "Lo",
            "fix": "La"
          },
          {
            "q": "In centro gli amiche di Marta aspettano il taxi.",
            "wrong": "gli",
            "fix": "le"
          },
          {
            "q": "In aula c'è il psicologo.",
            "wrong": "il",
            "fix": "lo"
          },
          {
            "q": "A casa lo gatto dorme tutto il giorno.",
            "wrong": "lo",
            "fix": "il"
          }
        ]
      },
      {
        "type": "Trasformazione",
        "fmt": "buco",
        "instr": "Metti al plurale: scegli la forma corretta.",
        "items": [
          {
            "q": "La stazione",
            "options": [
              "Le stazioni",
              "Le stazione",
              "I stazioni"
            ],
            "answer": 0
          },
          {
            "q": "Lo specchio",
            "options": [
              "Gli specchi",
              "I specchi",
              "Le specchi"
            ],
            "answer": 0
          },
          {
            "q": "La porta",
            "options": [
              "Le porte",
              "I porte",
              "Le porta"
            ],
            "answer": 0
          },
          {
            "q": "Il giornale",
            "options": [
              "I giornali",
              "Gli giornali",
              "Le giornali"
            ],
            "answer": 0
          },
          {
            "q": "Lo sport",
            "options": [
              "Gli sport",
              "I sport",
              "Le sport"
            ],
            "answer": 0
          },
          {
            "q": "Il tavolo",
            "options": [
              "I tavoli",
              "Gli tavoli",
              "Le tavoli"
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
            "q": "In aula c'è ___ studente nuovo.",
            "options": [
              "uno",
              "un",
              "una"
            ],
            "answer": 0
          },
          {
            "q": "In borsa ho ___ mappa.",
            "options": [
              "una",
              "un",
              "uno"
            ],
            "answer": 0
          },
          {
            "q": "Anna ha ___ casa in centro.",
            "options": [
              "una",
              "un",
              "uno"
            ],
            "answer": 0
          },
          {
            "q": "A casa Marco ha ___ libro interessante.",
            "options": [
              "un",
              "uno",
              "una"
            ],
            "answer": 0
          },
          {
            "q": "Paolo ha ___ orologio in borsa.",
            "options": [
              "un",
              "uno",
              "una"
            ],
            "answer": 0
          },
          {
            "q": "Paolo è ___ psicologo in ospedale.",
            "options": [
              "uno",
              "un",
              "una"
            ],
            "answer": 0
          }
        ]
      },
      {
        "type": "Correzione",
        "fmt": "errore",
        "instr": "Individua e clicca dove c'è l'errore.",
        "items": [
          {
            "q": "Stasera c'è uno amico di Marco a casa.",
            "wrong": "uno",
            "fix": "un"
          },
          {
            "q": "In camera c'è un sedia.",
            "wrong": "un",
            "fix": "una"
          },
          {
            "q": "Ho uno libro per il corso.",
            "wrong": "uno",
            "fix": "un"
          },
          {
            "q": "Qui c'è uno bicchiere.",
            "wrong": "uno",
            "fix": "un"
          },
          {
            "q": "Per la scuola ho una zaino nuovo.",
            "wrong": "una",
            "fix": "uno"
          },
          {
            "q": "Per Marco ho uno regalo.",
            "wrong": "uno",
            "fix": "un"
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
              "Uno",
              "Un",
              "Una"
            ],
            "answer": 0
          },
          {
            "q": "___ libro",
            "options": [
              "Un",
              "Uno",
              "Una"
            ],
            "answer": 0
          },
          {
            "q": "___ borsa",
            "options": [
              "Una",
              "Un",
              "Uno"
            ],
            "answer": 0
          },
          {
            "q": "___ sorella",
            "options": [
              "Una",
              "Un",
              "Uno"
            ],
            "answer": 0
          },
          {
            "q": "___ studio",
            "options": [
              "Uno",
              "Un",
              "Una"
            ],
            "answer": 0
          },
          {
            "q": "___ zia",
            "options": [
              "Una",
              "Un",
              "Uno"
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
      "A1 L7"
    ],
    "title": "Il plurale dei nomi",
    "exercises": [
      {
        "type": "Trasformazione",
        "fmt": "buco",
        "instr": "Metti al plurale: scegli la forma corretta.",
        "items": [
          {
            "q": "Ho due ___ in soggiorno.",
            "options": [
              "divani",
              "divano",
              "divane"
            ],
            "answer": 0
          },
          {
            "q": "In camera ho tre ___.",
            "options": [
              "libri",
              "libro",
              "libre"
            ],
            "answer": 0
          },
          {
            "q": "Nella borsa ho due ___.",
            "options": [
              "chiavi",
              "chiave",
              "chiavo"
            ],
            "answer": 0
          },
          {
            "q": "In casa ho due ___.",
            "options": [
              "porte",
              "porta",
              "porti"
            ],
            "answer": 0
          },
          {
            "q": "Ho due ___ in camera.",
            "options": [
              "letti",
              "letto",
              "lette"
            ],
            "answer": 0
          },
          {
            "q": "La casa ha due ___.",
            "options": [
              "camere da letto",
              "camere da letti",
              "camera da letti"
            ],
            "answer": 0
          }
        ]
      },
      {
        "type": "Riempimento",
        "fmt": "buco",
        "instr": "Metti al singolare: scegli la forma corretta.",
        "items": [
          {
            "q": "In camera c’è un solo ___.",
            "options": [
              "tavolo",
              "tavoli",
              "tavola"
            ],
            "answer": 0
          },
          {
            "q": "In cucina c’è una sola ___.",
            "options": [
              "finestra",
              "finestre",
              "finestro"
            ],
            "answer": 0
          },
          {
            "q": "Sul vassoio c’è un solo ___.",
            "options": [
              "bicchiere",
              "bicchieri",
              "bicchiera"
            ],
            "answer": 0
          },
          {
            "q": "In soggiorno c’è un solo ___.",
            "options": [
              "quadro",
              "quadri",
              "quadra"
            ],
            "answer": 0
          },
          {
            "q": "Marco ha una sola ___.",
            "options": [
              "macchina",
              "macchine",
              "macchino"
            ],
            "answer": 0
          },
          {
            "q": "Sara ha una sola ___.",
            "options": [
              "scarpa",
              "scarpe",
              "scarpo"
            ],
            "answer": 0
          }
        ]
      },
      {
        "type": "Correzione",
        "fmt": "errore",
        "instr": "Individua e clicca dove c'è l'errore.",
        "items": [
          {
            "q": "In soggiorno ho alcuni posto per gli ospiti.",
            "wrong": "posto",
            "fix": "posti"
          },
          {
            "q": "Marta ha tanti quaderno per la scuola.",
            "wrong": "quaderno",
            "fix": "quaderni"
          },
          {
            "q": "Nel vaso ho messo molti fiore.",
            "wrong": "fiore",
            "fix": "fiori"
          },
          {
            "q": "Per la festa ho comprato molte torta.",
            "wrong": "torta",
            "fix": "torte"
          },
          {
            "q": "In albergo abbiamo diverse camera.",
            "wrong": "camera",
            "fix": "camere"
          },
          {
            "q": "Ho molti albero in giardino.",
            "wrong": "albero",
            "fix": "alberi"
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
        "instr": "Scegli la forma corretta.",
        "items": [
          {
            "q": "In giardino ___ due bambini.",
            "options": [
              "ci sono",
              "c'è",
              "ci è"
            ],
            "answer": 0
          },
          {
            "q": "In borsa ___ una penna per Anna.",
            "options": [
              "c'è",
              "ci sono",
              "ci è"
            ],
            "answer": 0
          },
          {
            "q": "In cucina ___ quattro uova per la cena.",
            "options": [
              "ci sono",
              "c'è",
              "ci è"
            ],
            "answer": 0
          },
          {
            "q": "In centro ___ una farmacia.",
            "options": [
              "c'è",
              "ci sono",
              "ci è"
            ],
            "answer": 0
          },
          {
            "q": "In cucina ___ un panino per Luca.",
            "options": [
              "c'è",
              "ci sono",
              "ci è"
            ],
            "answer": 0
          },
          {
            "q": "Davanti alla scuola ___ tre alberi.",
            "options": [
              "ci sono",
              "c'è",
              "ci è"
            ],
            "answer": 0
          }
        ]
      },
      {
        "type": "Correzione",
        "fmt": "errore",
        "instr": "Individua e clicca dove c'è l'errore.",
        "items": [
          {
            "q": "Oggi in città c'è molti negozi e una banca.",
            "wrong": "c'è",
            "fix": "ci sono"
          },
          {
            "q": "In cucina c'è due piatti e tre bicchieri.",
            "wrong": "c'è",
            "fix": "ci sono"
          },
          {
            "q": "A casa mia ci sono un gatto.",
            "wrong": "ci sono",
            "fix": "c'è"
          },
          {
            "q": "In strada ci sono molto rumore a quest'ora.",
            "wrong": "ci sono",
            "fix": "c'è"
          },
          {
            "q": "Qui ci sono un bicchiere.",
            "wrong": "ci sono",
            "fix": "c'è"
          },
          {
            "q": "Davanti alla casa ci sono un albero.",
            "wrong": "ci sono",
            "fix": "c'è"
          }
        ]
      },
      {
        "type": "Trasformazione",
        "fmt": "buco",
        "instr": "Passa dal singolare al plurale usando «ci sono» e il numero indicato.",
        "items": [
          {
            "q": "C'è un libro in camera. → (due)",
            "options": [
              "Ci sono due libri in camera.",
              "C'è due libri in camera.",
              "Ci sono due libro in camera."
            ],
            "answer": 0
          },
          {
            "q": "C'è una mela in cucina. → (tre)",
            "options": [
              "Ci sono tre mele in cucina.",
              "C'è tre mele in cucina.",
              "Ci sono tre mela in cucina."
            ],
            "answer": 0
          },
          {
            "q": "C'è uno studente in aula. → (due)",
            "options": [
              "Ci sono due studenti in aula.",
              "C'è due studenti in aula.",
              "Ci sono due studente in aula."
            ],
            "answer": 0
          },
          {
            "q": "C'è un'amica a casa. → (due)",
            "options": [
              "Ci sono due amiche a casa.",
              "C'è due amiche a casa.",
              "Ci sono due amica a casa."
            ],
            "answer": 0
          },
          {
            "q": "C'è uno zaino in camera. → (tre)",
            "options": [
              "Ci sono tre zaini in camera.",
              "C'è tre zaini in camera.",
              "Ci sono tre zaino in camera."
            ],
            "answer": 0
          },
          {
            "q": "C'è un errore qui. → (due)",
            "options": [
              "Ci sono due errori qui.",
              "C'è due errori qui.",
              "Ci sono due errore qui."
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
            "q": "Anna ha una casa ___.",
            "options": [
              "grande",
              "granda",
              "grandi"
            ],
            "answer": 0
          },
          {
            "q": "Marco e Paolo sono due ragazzi ___.",
            "options": [
              "simpatici",
              "simpatiche",
              "simpatico"
            ],
            "answer": 0
          },
          {
            "q": "Anna ha due scarpe ___.",
            "options": [
              "nuove",
              "nuovi",
              "nuova"
            ],
            "answer": 0
          },
          {
            "q": "Il problema è ___.",
            "options": [
              "difficile",
              "difficili",
              "difficila"
            ],
            "answer": 0
          },
          {
            "q": "Per il progetto abbiamo due idee ___. ",
            "options": [
              "interessanti",
              "interessante",
              "interessanta"
            ],
            "answer": 0
          },
          {
            "q": "La nonna ha una storia molto ___.",
            "options": [
              "bella",
              "bello",
              "belle"
            ],
            "answer": 0
          }
        ]
      },
      {
        "type": "Correzione",
        "fmt": "errore",
        "instr": "Individua e clicca dove c'è l'errore.",
        "items": [
          {
            "q": "Il cappotto è rossa e molto caldo.",
            "wrong": "rossa",
            "fix": "rosso"
          },
          {
            "q": "Le sedie della cucina sono bianco e molto comode.",
            "wrong": "bianco",
            "fix": "bianche"
          },
          {
            "q": "Marco ha una matita lungo e sottile.",
            "wrong": "lungo",
            "fix": "lunga"
          },
          {
            "q": "Marco ha gli occhiali nuova.",
            "wrong": "nuova",
            "fix": "nuovi"
          },
          {
            "q": "Anna ha tre foto nuovo del viaggio.",
            "wrong": "nuovo",
            "fix": "nuove"
          },
          {
            "q": "I ragazzi della squadra sono alto quasi come me.",
            "wrong": "alto",
            "fix": "alti"
          }
        ]
      },
      {
        "type": "Trasformazione",
        "fmt": "buco",
        "instr": "Metti al plurale: scegli la forma corretta.",
        "items": [
          {
            "q": "La finestra aperta",
            "options": [
              "Le finestre aperte",
              "Le finestre aperta",
              "Le finestra aperte"
            ],
            "answer": 0
          },
          {
            "q": "Il quaderno verde",
            "options": [
              "I quaderni verdi",
              "I quaderni verde",
              "I quaderni verdo"
            ],
            "answer": 0
          },
          {
            "q": "L'esercizio facile",
            "options": [
              "Gli esercizi facili",
              "Gli esercizi facile",
              "I esercizi facili"
            ],
            "answer": 0
          },
          {
            "q": "Lo studente straniero",
            "options": [
              "Gli studenti stranieri",
              "Gli studenti straniero",
              "I studenti stranieri"
            ],
            "answer": 0
          },
          {
            "q": "La giacca pesante",
            "options": [
              "Le giacche pesanti",
              "Le giacche pesante",
              "Le giacca pesanti"
            ],
            "answer": 0
          },
          {
            "q": "L'amica gentile",
            "options": [
              "Le amiche gentili",
              "Le amiche gentile",
              "Gli amici gentili"
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
            "q": "Mi chiamo Luca e ___ in centro, vicino alla stazione.",
            "options": [
              "abito",
              "abita",
              "abiti"
            ],
            "answer": 0
          },
          {
            "q": "Paolo, ___ una canzone per Anna?",
            "options": [
              "canti",
              "canta",
              "canto"
            ],
            "answer": 0
          },
          {
            "q": "Marta ___ in banca dal lunedì al venerdì.",
            "options": [
              "lavora",
              "lavori",
              "lavoro"
            ],
            "answer": 0
          },
          {
            "q": "Io e Sara ___ italiano ogni giorno.",
            "options": [
              "studiamo",
              "studiate",
              "studiano"
            ],
            "answer": 0
          },
          {
            "q": "Ragazzi, ___ il nome della professoressa nuova?",
            "options": [
              "ricordate",
              "ricordiamo",
              "ricordano"
            ],
            "answer": 0
          },
          {
            "q": "Marco e Luca ___ a casa tardi ogni sera.",
            "options": [
              "tornano",
              "torniamo",
              "tornate"
            ],
            "answer": 0
          }
        ]
      },
      {
        "type": "Correzione",
        "fmt": "errore",
        "instr": "Individua e clicca dove c'è l'errore.",
        "items": [
          {
            "q": "La sera noi guarda la televisione e voi ascoltate la radio.",
            "wrong": "guarda",
            "fix": "guardiamo"
          },
          {
            "q": "Anna cucinano la cena a casa.",
            "wrong": "cucinano",
            "fix": "cucina"
          },
          {
            "q": "Marco e Luca gioca a calcio ogni sabato.",
            "wrong": "gioca",
            "fix": "giocano"
          },
          {
            "q": "A scuola io imparo il francese e tu studia lo spagnolo.",
            "wrong": "studia",
            "fix": "studi"
          },
          {
            "q": "Per la festa Anna e Sara cantano e io suona il piano.",
            "wrong": "suona",
            "fix": "suono"
          },
          {
            "q": "Nel tempo libero noi suoniamo la chitarra e voi disegna.",
            "wrong": "disegna",
            "fix": "disegnate"
          }
        ]
      },
      {
        "type": "Trasformazione",
        "fmt": "buco",
        "instr": "Scegli la forma corretta con il nuovo soggetto.",
        "items": [
          {
            "q": "Io parlo italiano. → Noi ___ italiano.",
            "options": [
              "parliamo",
              "parlate",
              "parlano"
            ],
            "answer": 0
          },
          {
            "q": "Tu lavori qui. → Voi ___ qui.",
            "options": [
              "lavorate",
              "lavoriamo",
              "lavorano"
            ],
            "answer": 0
          },
          {
            "q": "Lei studia storia. → Loro ___ storia.",
            "options": [
              "studiano",
              "studiamo",
              "studiate"
            ],
            "answer": 0
          },
          {
            "q": "Noi mangiamo tardi. → Io ___ tardi.",
            "options": [
              "mangio",
              "mangia",
              "mangi"
            ],
            "answer": 0
          },
          {
            "q": "Voi cantate insieme. → Tu ___ insieme.",
            "options": [
              "canti",
              "canta",
              "canto"
            ],
            "answer": 0
          },
          {
            "q": "Loro tornano lunedì. → Lui ___ lunedì.",
            "options": [
              "torna",
              "torno",
              "torni"
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
            "q": "La sera ___ un libro. (io – leggere)",
            "options": [
              "leggo",
              "legge",
              "leggi"
            ],
            "answer": 0
          },
          {
            "q": "La mattina, prima di andare al lavoro, ___ un caffè al bar? (tu – prendere)",
            "options": [
              "prendi",
              "prende",
              "prendo"
            ],
            "answer": 0
          },
          {
            "q": "Ogni mattina Marco ___ una mail prima di iniziare il lavoro.",
            "options": [
              "scrive",
              "scrivi",
              "scrivo"
            ],
            "answer": 0
          },
          {
            "q": "Ogni mattina, a colazione, io e Sara ___ la radio.",
            "options": [
              "accendiamo",
              "accendete",
              "accendono"
            ],
            "answer": 0
          },
          {
            "q": "Ragazzi, ___ in centro o in periferia?",
            "options": [
              "vivete",
              "viviamo",
              "vivono"
            ],
            "answer": 0
          },
          {
            "q": "Quando entrano in classe, gli studenti ___ la borsa accanto alla sedia.",
            "options": [
              "mettono",
              "mettiamo",
              "mettete"
            ],
            "answer": 0
          }
        ]
      },
      {
        "type": "Correzione",
        "fmt": "errore",
        "instr": "Individua e clicca dove c'è l'errore.",
        "items": [
          {
            "q": "Ogni sera mia zia rispondono al telefono.",
            "wrong": "rispondono",
            "fix": "risponde"
          },
          {
            "q": "Durante la visita voi chiede molte cose.",
            "wrong": "chiede",
            "fix": "chiedete"
          },
          {
            "q": "Ogni fine settimana i miei fratelli spende molti soldi al centro commerciale.",
            "wrong": "spende",
            "fix": "spendono"
          },
          {
            "q": "Ogni mattina io e Luca corre nel parco.",
            "wrong": "corre",
            "fix": "corriamo"
          },
          {
            "q": "Paolo, tu conosciamo bene Maria?",
            "wrong": "conosciamo",
            "fix": "conosci"
          },
          {
            "q": "Ogni mattina Marco e Luca legge il giornale al bar.",
            "wrong": "legge",
            "fix": "leggono"
          }
        ]
      },
      {
        "type": "Trasformazione",
        "fmt": "buco",
        "instr": "Scegli la forma corretta con il nuovo soggetto.",
        "items": [
          {
            "q": "Io scrivo una mail. → Noi ___ una mail.",
            "options": [
              "scriviamo",
              "scrivete",
              "scrivono"
            ],
            "answer": 0
          },
          {
            "q": "Tu leggi molto. → Voi ___ molto.",
            "options": [
              "leggete",
              "leggiamo",
              "leggono"
            ],
            "answer": 0
          },
          {
            "q": "Lui vive a Torino. → Loro ___ a Torino.",
            "options": [
              "vivono",
              "viviamo",
              "vivete"
            ],
            "answer": 0
          },
          {
            "q": "Noi prendiamo l'autobus. → Io ___ l'autobus.",
            "options": [
              "prendo",
              "prende",
              "prendi"
            ],
            "answer": 0
          },
          {
            "q": "Voi chiudete il negozio. → Tu ___ il negozio.",
            "options": [
              "chiudi",
              "chiude",
              "chiudo"
            ],
            "answer": 0
          },
          {
            "q": "Loro vedono il film. → Lei ___ il film.",
            "options": [
              "vede",
              "vedo",
              "vedi"
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
        "instr": "Scegli la forma corretta del verbo.",
        "items": [
          {
            "q": "Ogni lunedì ___ presto per il lavoro. (io – partire)",
            "options": [
              "parto",
              "partisco",
              "parte"
            ],
            "answer": 0
          },
          {
            "q": "Adesso ___ meglio la spiegazione? (tu – capire)",
            "options": [
              "capisci",
              "capi",
              "capite"
            ],
            "answer": 0
          },
          {
            "q": "In aula Luca ___ la finestra ogni mattina.",
            "options": [
              "apre",
              "aprisce",
              "apri"
            ],
            "answer": 0
          },
          {
            "q": "Ogni venerdì ___ il lavoro. (noi – finire)",
            "options": [
              "finiamo",
              "finisciamo",
              "finite"
            ],
            "answer": 0
          },
          {
            "q": "Quando siete in vacanza, ___ fino a tardi la mattina?",
            "options": [
              "dormite",
              "dormisce",
              "dormiamo"
            ],
            "answer": 0
          },
          {
            "q": "Al bar Marco e Anna ___ una bibita fresca.",
            "options": [
              "preferiscono",
              "preferono",
              "preferite"
            ],
            "answer": 0
          }
        ]
      },
      {
        "type": "Correzione",
        "fmt": "errore",
        "instr": "Individua e clicca dove c'è l'errore.",
        "items": [
          {
            "q": "La notte Anna dormono poco.",
            "wrong": "dormono",
            "fix": "dorme"
          },
          {
            "q": "Ragazzi, voi finisco tardi il venerdì?",
            "wrong": "finisco",
            "fix": "finite"
          },
          {
            "q": "La maestra spiega lentamente e i bambini capisce tutto.",
            "wrong": "capisce",
            "fix": "capiscono"
          },
          {
            "q": "Ogni estate io e Luca partite per le vacanze a luglio.",
            "wrong": "partite",
            "fix": "partiamo"
          },
          {
            "q": "Paolo, tu preferiscono il tè a colazione?",
            "wrong": "preferiscono",
            "fix": "preferisci"
          },
          {
            "q": "Oggi io spedisce un pacco per Marco.",
            "wrong": "spedisce",
            "fix": "spedisco"
          }
        ]
      },
      {
        "type": "Trasformazione",
        "fmt": "buco",
        "instr": "Scegli la forma corretta con il nuovo soggetto.",
        "items": [
          {
            "q": "Io capisco tutto. → Noi ___ tutto.",
            "options": [
              "capiamo",
              "capite",
              "capiscono"
            ],
            "answer": 0
          },
          {
            "q": "Tu parti presto. → Voi ___ presto.",
            "options": [
              "partite",
              "partiamo",
              "partono"
            ],
            "answer": 0
          },
          {
            "q": "Lei finisce ora. → Loro ___ ora.",
            "options": [
              "finiscono",
              "finiamo",
              "finite"
            ],
            "answer": 0
          },
          {
            "q": "Noi apriamo il negozio. → Io ___ il negozio.",
            "options": [
              "apro",
              "apre",
              "apri"
            ],
            "answer": 0
          },
          {
            "q": "Voi dormite molto. → Tu ___ molto.",
            "options": [
              "dormi",
              "dorme",
              "dormo"
            ],
            "answer": 0
          },
          {
            "q": "Loro preferiscono il tè. → Lui ___ il tè.",
            "options": [
              "preferisce",
              "preferisco",
              "preferisci"
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
        "instr": "Scegli la forma corretta di piacere.",
        "items": [
          {
            "q": "Il cane bianco mi ___ molto.",
            "options": [
              "piace",
              "piacciono",
              "piaci"
            ],
            "answer": 0
          },
          {
            "q": "Hai due gatti. Ti ___ molto?",
            "options": [
              "piacciono",
              "piace",
              "piaci"
            ],
            "answer": 0
          },
          {
            "q": "Mi ___ molto il cavallo di Marco.",
            "options": [
              "piace",
              "piacciono",
              "piaci"
            ],
            "answer": 0
          },
          {
            "q": "Ho due conigli e mi ___ molto.",
            "options": [
              "piacciono",
              "piace",
              "piaci"
            ],
            "answer": 0
          },
          {
            "q": "Ti ___ la mucca della fattoria?",
            "options": [
              "piace",
              "piacciono",
              "piaci"
            ],
            "answer": 0
          },
          {
            "q": "Ti ___ molto le pecore della fattoria?",
            "options": [
              "piacciono",
              "piace",
              "piaci"
            ],
            "answer": 0
          }
        ]
      },
      {
        "type": "Correzione",
        "fmt": "errore",
        "instr": "Individua e clicca dove c'è l'errore.",
        "items": [
          {
            "q": "Mi piacciono molto il pesce rosso di Luca.",
            "wrong": "piacciono",
            "fix": "piace"
          },
          {
            "q": "Le galline della nonna piace molto ai bambini.",
            "wrong": "piace",
            "fix": "piacciono"
          },
          {
            "q": "Mi piacciono molto il maiale della fattoria.",
            "wrong": "piacciono",
            "fix": "piace"
          },
          {
            "q": "A Marco piace le anatre della fattoria.",
            "wrong": "piace",
            "fix": "piacciono"
          },
          {
            "q": "A Sara piacciono la capra bianca.",
            "wrong": "piacciono",
            "fix": "piace"
          },
          {
            "q": "Ti piacciono molto la mia tartaruga?",
            "wrong": "piacciono",
            "fix": "piace"
          }
        ]
      },
      {
        "type": "Trasformazione",
        "fmt": "buco",
        "instr": "Trasforma la frase: scegli la forma corretta.",
        "items": [
          {
            "q": "Mi piace il gelato al limone. → Mi ___ i gelati al limone.",
            "options": [
              "piacciono",
              "piace",
              "piaci"
            ],
            "answer": 0
          },
          {
            "q": "Non mi piacciono i fiori gialli. → Non mi ___ il fiore giallo.",
            "options": [
              "piace",
              "piacciono",
              "piaci"
            ],
            "answer": 0
          },
          {
            "q": "Ti piacciono le canzoni italiane? → Ti ___ la canzone italiana?",
            "options": [
              "piace",
              "piacciono",
              "piaci"
            ],
            "answer": 0
          },
          {
            "q": "Mi piace la foto di Roma. → Mi ___ le foto di Roma.",
            "options": [
              "piacciono",
              "piace",
              "piaci"
            ],
            "answer": 0
          },
          {
            "q": "Non mi piace il film lungo. → Non mi ___ i film lunghi.",
            "options": [
              "piacciono",
              "piace",
              "piaci"
            ],
            "answer": 0
          },
          {
            "q": "Mi piacciono le città piccole. → Mi ___ la città piccola.",
            "options": [
              "piace",
              "piacciono",
              "piaci"
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
            "q": "Stasera ___ al cinema per vedere un bel film. (io – andare)",
            "options": [
              "vado",
              "vai",
              "va"
            ],
            "answer": 0
          },
          {
            "q": "Luca, ___ con noi alle otto?",
            "options": [
              "vieni",
              "viene",
              "vengo"
            ],
            "answer": 0
          },
          {
            "q": "Marta ___ a scuola in bici perché abita vicino.",
            "options": [
              "va",
              "vado",
              "vai"
            ],
            "answer": 0
          },
          {
            "q": "Domani sera io e Luca ___ da te.",
            "options": [
              "veniamo",
              "venite",
              "vengono"
            ],
            "answer": 0
          },
          {
            "q": "Chiara e Simone, ___ allo stadio senza di me?",
            "options": [
              "andate",
              "andiamo",
              "vanno"
            ],
            "answer": 0
          },
          {
            "q": "Stasera Marco e Anna ___ alla mia festa.",
            "options": [
              "vengono",
              "veniamo",
              "venite"
            ],
            "answer": 0
          }
        ]
      },
      {
        "type": "Correzione",
        "fmt": "errore",
        "instr": "Individua e clicca dove c'è l'errore.",
        "items": [
          {
            "q": "Per comprare la frutta mio padre vanno al mercato ogni sabato.",
            "wrong": "vanno",
            "fix": "va"
          },
          {
            "q": "Ragazzi, veniamo a teatro con noi questa sera?",
            "wrong": "veniamo",
            "fix": "venite"
          },
          {
            "q": "Domenica Elena e Davide viene a prendermi in stazione.",
            "wrong": "viene",
            "fix": "vengono"
          },
          {
            "q": "Domani io e Sara vanno in montagna.",
            "wrong": "vanno",
            "fix": "andiamo"
          },
          {
            "q": "Giulia, veniamo in pizzeria con me sabato?",
            "wrong": "veniamo",
            "fix": "vieni"
          },
          {
            "q": "Ogni anno io va in vacanza.",
            "wrong": "va",
            "fix": "vado"
          }
        ]
      },
      {
        "type": "Trasformazione",
        "fmt": "buco",
        "instr": "Scegli la forma corretta con il nuovo soggetto.",
        "items": [
          {
            "q": "Io vado in centro. → Noi ___ in centro.",
            "options": [
              "andiamo",
              "andate",
              "vanno"
            ],
            "answer": 0
          },
          {
            "q": "Lui viene a pranzo. → Voi ___ a pranzo.",
            "options": [
              "venite",
              "veniamo",
              "vengono"
            ],
            "answer": 0
          },
          {
            "q": "Lui va al lavoro. → Loro ___ al lavoro.",
            "options": [
              "vanno",
              "andiamo",
              "andate"
            ],
            "answer": 0
          },
          {
            "q": "Noi veniamo da te stasera. → Io ___.",
            "options": [
              "vengo da te stasera",
              "vieni da te stasera",
              "viene da te stasera"
            ],
            "answer": 0
          },
          {
            "q": "Voi andate al mare. → Tu ___ al mare.",
            "options": [
              "vai",
              "va",
              "vado"
            ],
            "answer": 0
          },
          {
            "q": "Loro vengono presto. → Lei ___ presto.",
            "options": [
              "viene",
              "vengo",
              "vieni"
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
            "q": "Aspetto Marco ___ dieci minuti perché è in ritardo.",
            "options": [
              "da",
              "a",
              "con"
            ],
            "answer": 0
          },
          {
            "q": "Ogni mattina vado ___ scuola in autobus.",
            "options": [
              "a",
              "in",
              "da"
            ],
            "answer": 0
          },
          {
            "q": "Il film ___ stasera parla di sport.",
            "options": [
              "di",
              "a",
              "con"
            ],
            "answer": 0
          },
          {
            "q": "Il treno per Roma parte ___ Milano.",
            "options": [
              "da",
              "di",
              "in"
            ],
            "answer": 0
          },
          {
            "q": "Prima di uscire metto il libro ___ borsa.",
            "options": [
              "in",
              "a",
              "con"
            ],
            "answer": 0
          },
          {
            "q": "Domani, dopo il lavoro, torno ___ casa alle sei.",
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
        "instr": "Individua e clicca dove c'è l'errore.",
        "items": [
          {
            "q": "Il quaderno è a Sara.",
            "wrong": "a",
            "fix": "di"
          },
          {
            "q": "Sono a Roma di due giorni per lavoro.",
            "wrong": "di",
            "fix": "da"
          },
          {
            "q": "Quest’estate vado a Portogallo con Marco.",
            "wrong": "a",
            "fix": "in"
          },
          {
            "q": "Domenica vado a mio zio per il pranzo.",
            "wrong": "a",
            "fix": "da"
          },
          {
            "q": "Da tre anni abito in Roma e lavoro vicino alla stazione.",
            "wrong": "in",
            "fix": "a"
          },
          {
            "q": "Da due anni vivo a Italia e studio italiano ogni giorno.",
            "wrong": "a",
            "fix": "in"
          }
        ]
      },
      {
        "type": "Trasformazione",
        "fmt": "buco",
        "instr": "Scegli la preposizione corretta.",
        "items": [
          {
            "q": "Da settembre vivo ___ Lisbona per lavoro.",
            "options": [
              "a",
              "in",
              "da"
            ],
            "answer": 0
          },
          {
            "q": "Da gennaio lavoro ___ Grecia in un albergo.",
            "options": [
              "in",
              "a",
              "da"
            ],
            "answer": 0
          },
          {
            "q": "Questa borsa è ___ pelle, non è sintetica.",
            "options": [
              "di",
              "con",
              "da"
            ],
            "answer": 0
          },
          {
            "q": "Per andare in centro vado sempre ___ bicicletta.",
            "options": [
              "in",
              "con",
              "a"
            ],
            "answer": 0
          },
          {
            "q": "Il nonno taglia il salame ___ un coltellino.",
            "options": [
              "con",
              "di",
              "a"
            ],
            "answer": 0
          },
          {
            "q": "Ho dato le chiavi ___ mia sorella prima di partire.",
            "options": [
              "a",
              "da",
              "di"
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
        "instr": "Metti al femminile: scegli la forma corretta.",
        "items": [
          {
            "q": "Direttore",
            "options": [
              "direttrice",
              "direttora",
              "direttoressa"
            ],
            "answer": 0
          },
          {
            "q": "Studente",
            "options": [
              "studentessa",
              "studenta",
              "studentrice"
            ],
            "answer": 0
          },
          {
            "q": "Cameriere",
            "options": [
              "cameriera",
              "camerierice",
              "camerieressa"
            ],
            "answer": 0
          },
          {
            "q": "Attore",
            "options": [
              "attrice",
              "attora",
              "attoressa"
            ],
            "answer": 0
          },
          {
            "q": "Maestro",
            "options": [
              "maestra",
              "maestressa",
              "maestrice"
            ],
            "answer": 0
          },
          {
            "q": "Scrittore",
            "options": [
              "scrittrice",
              "scrittora",
              "scrittoressa"
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
            "q": "Anna lavora in una scuola ed è una brava ___.",
            "options": [
              "insegnante",
              "insegnanto",
              "insegnantessa"
            ],
            "answer": 0
          },
          {
            "q": "Paolo lavora per un giornale ed è ___.",
            "options": [
              "giornalista",
              "giornalisto",
              "giornalistore"
            ],
            "answer": 0
          },
          {
            "q": "Anna lavora in ospedale ed è ___.",
            "options": [
              "infermiera",
              "infermiere",
              "infermierice"
            ],
            "answer": 0
          },
          {
            "q": "Luca lavora in un ristorante ed è ___.",
            "options": [
              "cuoco",
              "cuoca",
              "cuochessa"
            ],
            "answer": 0
          },
          {
            "q": "Maria lavora in farmacia ed è una brava ___.",
            "options": [
              "farmacista",
              "farmacisto",
              "farmacistessa"
            ],
            "answer": 0
          },
          {
            "q": "Sara dipinge quadri ed è una brava ___.",
            "options": [
              "pittrice",
              "pittora",
              "pittoressa"
            ],
            "answer": 0
          }
        ]
      },
      {
        "type": "Correzione",
        "fmt": "errore",
        "instr": "Individua e clicca dove c'è l'errore.",
        "items": [
          {
            "q": "In ospedale Maria è una brava dottore e Luca è un bravo infermiere.",
            "wrong": "dottore",
            "fix": "dottoressa"
          },
          {
            "q": "In questa scuola Anna è la direttore e Marco è un insegnante.",
            "wrong": "direttore",
            "fix": "direttrice"
          },
          {
            "q": "Anna è una studente e Luca è un operaio.",
            "wrong": "studente",
            "fix": "studentessa"
          },
          {
            "q": "Lucia e Anna sono due attore famose e Marco e Luca sono due cantanti.",
            "wrong": "attore",
            "fix": "attrici"
          },
          {
            "q": "Al ristorante Paolo è un cameriera e Anna è una cuoca.",
            "wrong": "cameriera",
            "fix": "cameriere"
          },
          {
            "q": "Carla lavora in biblioteca ed è scrittore.",
            "wrong": "scrittore",
            "fix": "scrittrice"
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
            "q": "Domani ho un esame e ___ studiare stasera. (io – dovere)",
            "options": [
              "devo",
              "deve",
              "devi"
            ],
            "answer": 0
          },
          {
            "q": "Hai molto lavoro e ___ finire tutto oggi. (tu – dovere)",
            "options": [
              "devi",
              "deve",
              "devo"
            ],
            "answer": 0
          },
          {
            "q": "Marta lavora lontano e ___ partire presto.",
            "options": [
              "deve",
              "devi",
              "devo"
            ],
            "answer": 0
          },
          {
            "q": "Il cameriere porta il conto e noi ___ pagare.",
            "options": [
              "dobbiamo",
              "dovete",
              "devono"
            ],
            "answer": 0
          },
          {
            "q": "Ragazzi, il dottore non c'è ancora e ___ aspettare qui.",
            "options": [
              "dovete",
              "dobbiamo",
              "devono"
            ],
            "answer": 0
          },
          {
            "q": "Marco e Sara hanno molto lavoro e ___ finire tutto oggi.",
            "options": [
              "devono",
              "dobbiamo",
              "dovete"
            ],
            "answer": 0
          }
        ]
      },
      {
        "type": "Correzione",
        "fmt": "errore",
        "instr": "Individua e clicca dove c'è l'errore.",
        "items": [
          {
            "q": "Per il test di domani devi a finire i compiti stasera.",
            "wrong": "a",
            "fix": "(togliere)"
          },
          {
            "q": "Domani Marco e Anna deve partire presto.",
            "wrong": "deve",
            "fix": "devono"
          },
          {
            "q": "Stasera io e Luca dovete lavare i piatti.",
            "wrong": "dovete",
            "fix": "dobbiamo"
          },
          {
            "q": "Per l'esame voi deve studiare di più.",
            "wrong": "deve",
            "fix": "dovete"
          },
          {
            "q": "Domani io dovete andare dal dentista.",
            "wrong": "dovete",
            "fix": "devo"
          },
          {
            "q": "Oggi il medico devo lavorare fino a tardi.",
            "wrong": "devo",
            "fix": "deve"
          }
        ]
      },
      {
        "type": "Trasformazione",
        "fmt": "buco",
        "instr": "Scegli la forma corretta con il nuovo soggetto.",
        "items": [
          {
            "q": "Io devo uscire. → Noi ___.",
            "options": [
              "dobbiamo uscire",
              "dovete uscire",
              "devono uscire"
            ],
            "answer": 0
          },
          {
            "q": "Tu devi studiare. → Voi ___.",
            "options": [
              "dovete studiare",
              "dobbiamo studiare",
              "devono studiare"
            ],
            "answer": 0
          },
          {
            "q": "Lui deve lavorare. → Loro ___.",
            "options": [
              "devono lavorare",
              "dobbiamo lavorare",
              "dovete lavorare"
            ],
            "answer": 0
          },
          {
            "q": "Noi dobbiamo partire. → Io ___.",
            "options": [
              "devo partire",
              "deve partire",
              "devi partire"
            ],
            "answer": 0
          },
          {
            "q": "Voi dovete pagare. → Tu ___.",
            "options": [
              "devi pagare",
              "deve pagare",
              "devo pagare"
            ],
            "answer": 0
          },
          {
            "q": "Loro devono aspettare. → Lei ___.",
            "options": [
              "deve aspettare",
              "devo aspettare",
              "devi aspettare"
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
        "instr": "Scegli il possessivo corretto e concordalo con la cosa posseduta.",
        "items": [
          {
            "q": "Devo uscire ma non trovo ___ chiavi. (di me)",
            "options": [
              "le mie",
              "i miei",
              "la mia"
            ],
            "answer": 0
          },
          {
            "q": "Il libro sul tavolo è ___?",
            "options": [
              "il tuo",
              "la tua",
              "i tuoi"
            ],
            "answer": 0
          },
          {
            "q": "Prima di uscire Maria cerca ___ borsa. (di lei)",
            "options": [
              "la sua",
              "il suo",
              "le sue"
            ],
            "answer": 0
          },
          {
            "q": "___ due biciclette sono rosse. (di me)",
            "options": [
              "Le mie",
              "I miei",
              "La mia"
            ],
            "answer": 0
          },
          {
            "q": "Sul divano ci sono ___ occhiali nuovi.",
            "options": [
              "i tuoi",
              "le tue",
              "il tuo"
            ],
            "answer": 0
          },
          {
            "q": "Per chiamare il taxi Marco usa ___ telefono. (di lui)",
            "options": [
              "il suo",
              "la sua",
              "i suoi"
            ],
            "answer": 0
          }
        ]
      },
      {
        "type": "Correzione",
        "fmt": "errore",
        "instr": "Individua e clicca dove c'è l'errore.",
        "items": [
          {
            "q": "Sul tavolo ci sono il mio telefono e le mia chiavi.",
            "wrong": "mia",
            "fix": "mie"
          },
          {
            "q": "La borsa rossa sul tavolo è tuo.",
            "wrong": "tuo",
            "fix": "tua"
          },
          {
            "q": "Marco non trova più i suo occhiali neri.",
            "wrong": "suo",
            "fix": "suoi"
          },
          {
            "q": "Quando torno a casa, trovo le miei scarpe qui.",
            "wrong": "miei",
            "fix": "mie"
          },
          {
            "q": "A lezione prendi il tua quaderno.",
            "wrong": "tua",
            "fix": "tuo"
          },
          {
            "q": "Durante la lezione Sara usa la suoi penna blu.",
            "wrong": "suoi",
            "fix": "sua"
          }
        ]
      },
      {
        "type": "Trasformazione",
        "fmt": "buco",
        "instr": "Metti al plurale la cosa posseduta.",
        "items": [
          {
            "q": "La mia amica",
            "options": [
              "Le mie amiche",
              "Le mie amica",
              "Le miei amiche"
            ],
            "answer": 0
          },
          {
            "q": "Il tuo libro",
            "options": [
              "I tuoi libri",
              "I tue libri",
              "I tuoi libro"
            ],
            "answer": 0
          },
          {
            "q": "La sua idea",
            "options": [
              "Le sue idee",
              "Le sue idea",
              "Le suoi idee"
            ],
            "answer": 0
          },
          {
            "q": "Il mio quaderno",
            "options": [
              "I miei quaderni",
              "I mie quaderni",
              "I miei quaderno"
            ],
            "answer": 0
          },
          {
            "q": "La tua penna",
            "options": [
              "Le tue penne",
              "Le tue penna",
              "Le tuoi penne"
            ],
            "answer": 0
          },
          {
            "q": "Il suo gatto",
            "options": [
              "I suoi gatti",
              "I sue gatti",
              "I suoi gatto"
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
            "q": "Guardo l'orologio e vedo che ___ mezzogiorno.",
            "options": [
              "è",
              "sono le",
              "sono l'"
            ],
            "answer": 0
          },
          {
            "q": "___ sette del pomeriggio e il museo chiude fra poco.",
            "options": [
              "Sono le",
              "È",
              "È l'"
            ],
            "answer": 0
          },
          {
            "q": "Il treno è in ritardo e ___.",
            "options": [
              "sono già le nove",
              "è già le nove",
              "sono già la nove"
            ],
            "answer": 0
          },
          {
            "q": "___ mezzanotte e spegniamo la luce per andare a dormire.",
            "options": [
              "È",
              "Sono le",
              "Sono l'"
            ],
            "answer": 0
          },
          {
            "q": "Fra un quarto d’ora esco e adesso ___ sette e un quarto.",
            "options": [
              "sono le",
              "è le",
              "è l'"
            ],
            "answer": 0
          },
          {
            "q": "Adesso ___ undici meno un quarto e la lezione comincia alle undici.",
            "options": [
              "sono le",
              "è le",
              "è l'"
            ],
            "answer": 0
          }
        ]
      },
      {
        "type": "Correzione",
        "fmt": "errore",
        "instr": "Individua e clicca dove c'è l'errore.",
        "items": [
          {
            "q": "Alla stazione controllo il tabellone e leggo che è le cinque.",
            "wrong": "è",
            "fix": "sono"
          },
          {
            "q": "È ora di pranzo perché sono l'una.",
            "wrong": "sono",
            "fix": "è"
          },
          {
            "q": "Sono mezzanotte e in casa tutti dormono.",
            "wrong": "Sono",
            "fix": "È"
          },
          {
            "q": "La farmacia chiude presto e mancano dieci minuti alle le otto.",
            "wrong": "le",
            "fix": "(togliere)"
          },
          {
            "q": "Il treno parte fra poco e sono gli tre e mezza.",
            "wrong": "gli",
            "fix": "le"
          },
          {
            "q": "Il film comincia alle mezzanotte.",
            "wrong": "alle",
            "fix": "a"
          }
        ]
      },
      {
        "type": "Trasformazione",
        "fmt": "buco",
        "instr": "Scegli la preposizione giusta davanti all'ora.",
        "items": [
          {
            "q": "L’aereo per Madrid arriva ___ due.",
            "options": [
              "alle",
              "all'",
              "a"
            ],
            "answer": 0
          },
          {
            "q": "Domani l'appuntamento con il medico è ___.",
            "options": [
              "all'una",
              "alle una",
              "a una"
            ],
            "answer": 0
          },
          {
            "q": "In questa casa pranziamo ___ mezzogiorno.",
            "options": [
              "a",
              "alle",
              "all'"
            ],
            "answer": 0
          },
          {
            "q": "Domani il negozio apre ___ nove.",
            "options": [
              "alle",
              "all'",
              "a"
            ],
            "answer": 0
          },
          {
            "q": "Lavoro di sera e il mio turno finisce ___ mezzanotte.",
            "options": [
              "a",
              "alle",
              "all'"
            ],
            "answer": 0
          },
          {
            "q": "Il mio turno è lungo e comincio ___ per finire alle sette.",
            "options": [
              "all'una",
              "alle una",
              "a una"
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
        "instr": "Scegli l'espressione di tempo adatta.",
        "items": [
          {
            "q": "___ parto per Roma con il treno delle otto.",
            "options": [
              "Domani",
              "Ieri",
              "La settimana scorsa"
            ],
            "answer": 0
          },
          {
            "q": "___ firmiamo il documento in ufficio.",
            "options": [
              "Lunedì prossimo",
              "Lunedì scorso",
              "L'anno scorso"
            ],
            "answer": 0
          },
          {
            "q": "___ partiamo per le vacanze.",
            "options": [
              "Fra un'ora",
              "Un'ora fa",
              "L'estate scorsa"
            ],
            "answer": 0
          },
          {
            "q": "___ ceniamo fuori in un ristorante italiano.",
            "options": [
              "Stasera",
              "Ieri sera",
              "Sabato scorso"
            ],
            "answer": 0
          },
          {
            "q": "Il corso comincia ___ e io sono già pronto.",
            "options": [
              "a settembre",
              "il mese scorso",
              "l'anno scorso"
            ],
            "answer": 0
          },
          {
            "q": "___ partiamo per Roma per una settimana di vacanza.",
            "options": [
              "Fra due giorni",
              "Due giorni fa",
              "La settimana scorsa"
            ],
            "answer": 0
          }
        ]
      },
      {
        "type": "Scelta",
        "fmt": "buco",
        "instr": "L'azione è futura: scegli la forma del verbo.",
        "items": [
          {
            "q": "Domani io ___ il documento in ufficio.",
            "options": [
              "firmo",
              "firma",
              "firmiamo"
            ],
            "answer": 0
          },
          {
            "q": "La settimana prossima noi ___ il museo.",
            "options": [
              "visitiamo",
              "visitate",
              "visitano"
            ],
            "answer": 0
          },
          {
            "q": "Fra due giorni mia sorella ___ qui.",
            "options": [
              "arriva",
              "arrivano",
              "arrivo"
            ],
            "answer": 0
          },
          {
            "q": "Il mese prossimo loro ___ il negozio.",
            "options": [
              "aprono",
              "apre",
              "apriamo"
            ],
            "answer": 0
          },
          {
            "q": "La lezione ___ fra cinque minuti.",
            "options": [
              "finisce",
              "finiscono",
              "finisco"
            ],
            "answer": 0
          },
          {
            "q": "Fra un'ora io ___ una mail a Marco.",
            "options": [
              "scrivo",
              "scrive",
              "scriviamo"
            ],
            "answer": 0
          }
        ]
      },
      {
        "type": "Trasformazione",
        "fmt": "buco",
        "instr": "Leggi la situazione e scegli la frase adatta.",
        "items": [
          {
            "q": "Hai già preso l'appuntamento con il meccanico per giovedì. Come lo dici?",
            "options": [
              "Giovedì porto la macchina dal meccanico.",
              "Giovedì vorrei portare la macchina dal meccanico.",
              "Giovedì penso di portare la macchina dal meccanico."
            ],
            "answer": 0
          },
          {
            "q": "Ti piacerebbe suonare il piano, ma non hai ancora fatto niente per impararlo. Come lo dici?",
            "options": [
              "Un giorno vorrei imparare a suonare il piano.",
              "Un giorno imparo a suonare il piano.",
              "Un giorno ho intenzione di imparare il piano."
            ],
            "answer": 0
          },
          {
            "q": "Sei a casa con un amico e vuoi proporgli di cenare insieme. Che cosa dici?",
            "options": [
              "Stasera ordiniamo una pizza?",
              "Stasera ordino una pizza.",
              "Stasera vorrei ordinare una pizza."
            ],
            "answer": 0
          },
          {
            "q": "Hai deciso di iscriverti in palestra, ma non hai ancora scelto quando. Come lo dici?",
            "options": [
              "Ho intenzione di iscrivermi in palestra.",
              "Mi iscrivo in palestra lunedì.",
              "Vorrei iscrivermi in palestra."
            ],
            "answer": 0
          },
          {
            "q": "Il trasloco è fissato per il quindici. Come lo dici?",
            "options": [
              "Il quindici traslochiamo nella casa nuova.",
              "Il quindici vorremmo traslocare.",
              "Il quindici pensiamo di traslocare."
            ],
            "answer": 0
          },
          {
            "q": "Chiudi la telefonata e vuoi proporre a un collega di risentirvi domani. Che cosa dici?",
            "options": [
              "Ci sentiamo domani mattina?",
              "Domani mattina ti chiamo di sicuro.",
              "Vorrei sentirti domani mattina."
            ],
            "answer": 0
          }
        ]
      }
    ],
    "stima": "a2"
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
            "q": "Vado ___ in piscina. (tutti i giorni)",
            "options": [
              "sempre",
              "mai",
              "raramente"
            ],
            "answer": 0
          },
          {
            "q": "Non mangio ___ carne. (zero volte)",
            "options": [
              "mai",
              "sempre",
              "spesso"
            ],
            "answer": 0
          },
          {
            "q": "Vado ___ al cinema. (due volte a settimana)",
            "options": [
              "spesso",
              "mai",
              "raramente"
            ],
            "answer": 0
          },
          {
            "q": "Bevo ___ il caffè. (una volta al mese)",
            "options": [
              "raramente",
              "spesso",
              "sempre"
            ],
            "answer": 0
          },
          {
            "q": "La domenica dormo ___ fino a tardi. (quasi tutte le settimane)",
            "options": [
              "di solito",
              "raramente",
              "mai"
            ],
            "answer": 0
          },
          {
            "q": "Esco ___ la sera. (ogni tanto)",
            "options": [
              "qualche volta",
              "sempre",
              "mai"
            ],
            "answer": 0
          }
        ]
      },
      {
        "type": "Trasformazione",
        "fmt": "buco",
        "instr": "Metti l'avverbio al posto giusto nella frase.",
        "items": [
          {
            "q": "Io leggo il giornale. (sempre)",
            "options": [
              "Io leggo sempre il giornale.",
              "Io leggo il sempre giornale.",
              "Io sempre il giornale leggo."
            ],
            "answer": 0
          },
          {
            "q": "Non vado in centro. (mai)",
            "options": [
              "Non vado mai in centro.",
              "Non mai vado in centro.",
              "Non vado in mai centro."
            ],
            "answer": 0
          },
          {
            "q": "Mangio il pesce a pranzo. (spesso)",
            "options": [
              "Mangio spesso il pesce a pranzo.",
              "Mangio il spesso pesce a pranzo.",
              "Mangio il pesce a spesso pranzo."
            ],
            "answer": 0
          },
          {
            "q": "Beviamo il vino a cena. (di solito)",
            "options": [
              "Di solito beviamo il vino a cena.",
              "Beviamo il di solito vino a cena.",
              "Beviamo il vino a di solito cena."
            ],
            "answer": 0
          },
          {
            "q": "Lui parla al telefono. (quasi sempre)",
            "options": [
              "Lui parla quasi sempre al telefono.",
              "Lui parla al quasi sempre telefono.",
              "Lui quasi parla sempre al telefono."
            ],
            "answer": 0
          },
          {
            "q": "Usciamo la sera. (raramente)",
            "options": [
              "Usciamo raramente la sera.",
              "Usciamo la raramente sera.",
              "Usciamo la sera raramente noi."
            ],
            "answer": 0
          }
        ]
      }
    ],
    "stima": "a2"
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
            "q": "Signor Rossi, in che zona ___ a Milano?",
            "options": [
              "abita",
              "abiti",
              "abitate"
            ],
            "answer": 0
          },
          {
            "q": "Professore, ___ questo giornale ogni mattina?",
            "options": [
              "legge",
              "leggi",
              "leggete"
            ],
            "answer": 0
          },
          {
            "q": "Signor Bianchi, ___ inglese con i clienti stranieri?",
            "options": [
              "parla",
              "parli",
              "parlate"
            ],
            "answer": 0
          },
          {
            "q": "Signora, ___ a Roma da molto tempo?",
            "options": [
              "vive",
              "vivi",
              "vivete"
            ],
            "answer": 0
          },
          {
            "q": "Ingegnere, ___ il treno ogni mattina?",
            "options": [
              "prende",
              "prendi",
              "prendete"
            ],
            "answer": 0
          },
          {
            "q": "Dottoressa, ___ bene lo spagnolo?",
            "options": [
              "capisce",
              "capisci",
              "capite"
            ],
            "answer": 0
          }
        ]
      },
      {
        "type": "Correzione",
        "fmt": "errore",
        "instr": "In un contesto formale, individua e clicca dove c'è l'errore.",
        "items": [
          {
            "q": "Buonasera, signore, dove lavori?",
            "wrong": "lavori",
            "fix": "lavora"
          },
          {
            "q": "Signora, mi lasci il tuo numero di telefono.",
            "wrong": "tuo",
            "fix": "Suo"
          },
          {
            "q": "Professore, insegni anche il sabato?",
            "wrong": "insegni",
            "fix": "insegna"
          },
          {
            "q": "Dottoressa, grazie per la ricetta che mi hai dato.",
            "wrong": "hai",
            "fix": "ha"
          },
          {
            "q": "Signor Rossi, scrivi molte mail?",
            "wrong": "scrivi",
            "fix": "scrive"
          },
          {
            "q": "Ingegnere, posso offrirti un caffè?",
            "wrong": "offrirti",
            "fix": "offrirLe"
          }
        ]
      },
      {
        "type": "Trasformazione",
        "fmt": "buco",
        "instr": "Passa dal «tu» al «Lei»: scegli la frase corretta.",
        "items": [
          {
            "q": "Ti aspetto in ufficio alle nove.",
            "options": [
              "L'aspetto in ufficio alle nove.",
              "Le aspetto in ufficio alle nove.",
              "Vi aspetto in ufficio alle nove."
            ],
            "answer": 0
          },
          {
            "q": "Ti trovi bene in questo albergo?",
            "options": [
              "Si trova bene in questo albergo?",
              "Ti trova bene in questo albergo?",
              "Vi trovate bene in questo albergo?"
            ],
            "answer": 0
          },
          {
            "q": "Scusa, puoi ripetere più lentamente?",
            "options": [
              "Scusi, può ripetere più lentamente?",
              "Scusa, può ripetere più lentamente?",
              "Scusi, puoi ripetere più lentamente?"
            ],
            "answer": 0
          },
          {
            "q": "Mi fai sapere se ti va bene giovedì?",
            "options": [
              "Mi fa sapere se Le va bene giovedì?",
              "Mi fa sapere se ti va bene giovedì?",
              "Mi fate sapere se vi va bene giovedì?"
            ],
            "answer": 0
          },
          {
            "q": "Sei stato tu a prenotare la sala?",
            "options": [
              "È stato Lei a prenotare la sala?",
              "Sei stato Lei a prenotare la sala?",
              "Siete stati voi a prenotare la sala?"
            ],
            "answer": 0
          },
          {
            "q": "Grazie, sei molto gentile.",
            "options": [
              "Grazie, è molto gentile.",
              "Grazie, Lei sei molto gentile.",
              "Grazie, siete molto gentili."
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
            "q": "Vado ___ supermercato per comprare il latte.",
            "options": [
              "al",
              "allo",
              "alla"
            ],
            "answer": 0
          },
          {
            "q": "Il quaderno è ___ zaino.",
            "options": [
              "nello",
              "nel",
              "nella"
            ],
            "answer": 0
          },
          {
            "q": "Alle sei torno a casa ___.",
            "options": [
              "dall'ufficio",
              "dal ufficio",
              "dallo ufficio"
            ],
            "answer": 0
          },
          {
            "q": "Prima dell'esame il professore parla ___ studenti.",
            "options": [
              "agli",
              "ai",
              "alle"
            ],
            "answer": 0
          },
          {
            "q": "In camera il colore ___ pareti è chiaro.",
            "options": [
              "delle",
              "dei",
              "degli"
            ],
            "answer": 0
          },
          {
            "q": "Il gatto non è in cucina perché dorme ___ divano.",
            "options": [
              "sul",
              "sullo",
              "sulla"
            ],
            "answer": 0
          }
        ]
      },
      {
        "type": "Correzione",
        "fmt": "errore",
        "instr": "Individua e clicca dove c'è l'errore.",
        "items": [
          {
            "q": "Stasera vado alla cinema per vedere un film nuovo.",
            "wrong": "alla",
            "fix": "al"
          },
          {
            "q": "Dopo la visita esco dal studio medico.",
            "wrong": "dal",
            "fix": "dallo"
          },
          {
            "q": "In questo elenco ci sono i nomi dei studenti.",
            "wrong": "dei",
            "fix": "degli"
          },
          {
            "q": "Entro nel stanza principale.",
            "wrong": "nel",
            "fix": "nella"
          },
          {
            "q": "Scrivo ai mie amiche ogni settimana perché vivono lontano.",
            "wrong": "ai",
            "fix": "alle"
          },
          {
            "q": "La foto è sul scaffale.",
            "wrong": "sul",
            "fix": "sullo"
          }
        ]
      },
      {
        "type": "Trasformazione",
        "fmt": "buco",
        "instr": "Unisci preposizione e articolo: scegli la forma corretta.",
        "items": [
          {
            "q": "Di + il →",
            "options": [
              "Del",
              "Dil",
              "Dello"
            ],
            "answer": 0
          },
          {
            "q": "A + lo →",
            "options": [
              "Allo",
              "Alo",
              "Al"
            ],
            "answer": 0
          },
          {
            "q": "Da + le →",
            "options": [
              "Dalle",
              "Dale",
              "Dai"
            ],
            "answer": 0
          },
          {
            "q": "In + i →",
            "options": [
              "Nei",
              "Ni",
              "Negli"
            ],
            "answer": 0
          },
          {
            "q": "Su + gli →",
            "options": [
              "Sugli",
              "Sugl'",
              "Sui"
            ],
            "answer": 0
          },
          {
            "q": "A + la →",
            "options": [
              "Alla",
              "Ala",
              "Al"
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
            "q": "Marco e Anna ___ venire alla festa?",
            "options": [
              "possono",
              "può",
              "possiamo"
            ],
            "answer": 0
          },
          {
            "q": "Vivo a Roma da poco e ___ imparare l'italiano.",
            "options": [
              "voglio",
              "vuole",
              "vogliamo"
            ],
            "answer": 0
          },
          {
            "q": "Luca, ___ portare questa scatola?",
            "options": [
              "puoi",
              "può",
              "posso"
            ],
            "answer": 0
          },
          {
            "q": "Io e Silvia ___ finire il progetto entro domani.",
            "options": [
              "dobbiamo",
              "dovete",
              "devono"
            ],
            "answer": 0
          },
          {
            "q": "Elena ___ parlare con te perché ha una domanda importante.",
            "options": [
              "vuole",
              "voglio",
              "vogliono"
            ],
            "answer": 0
          },
          {
            "q": "Ragazzi, ___ prenotare prima se non volete aspettare in piedi.",
            "options": [
              "dovete",
              "dobbiamo",
              "devono"
            ],
            "answer": 0
          }
        ]
      },
      {
        "type": "Correzione",
        "fmt": "errore",
        "instr": "Individua e clicca dove c'è l'errore.",
        "items": [
          {
            "q": "Domani mattina vogliamo di partire subito.",
            "wrong": "di",
            "fix": "(togliere)"
          },
          {
            "q": "Oggi Marta puoi venire al cinema perché ha finito presto.",
            "wrong": "puoi",
            "fix": "può"
          },
          {
            "q": "Stasera i ragazzi vuole uscire.",
            "wrong": "vuole",
            "fix": "vogliono"
          },
          {
            "q": "Posso di entrare?",
            "wrong": "di",
            "fix": "(togliere)"
          },
          {
            "q": "Giulia e Davide può arrivare tardi perché c'è traffico.",
            "wrong": "può",
            "fix": "possono"
          },
          {
            "q": "Ragazzi, dopo cena vuole un dolce?",
            "wrong": "vuole",
            "fix": "volete"
          }
        ]
      },
      {
        "type": "Trasformazione",
        "fmt": "buco",
        "instr": "Scegli il modale adatto al senso della frase.",
        "items": [
          {
            "q": "Per entrare al concerto ___ avere il biglietto.",
            "options": [
              "devi",
              "vuoi",
              "puoi"
            ],
            "answer": 0
          },
          {
            "q": "Cameriere, ___ un po' d'acqua, per favore?",
            "options": [
              "posso avere",
              "devo avere",
              "voglio avere"
            ],
            "answer": 0
          },
          {
            "q": "Non ho fame, ma ___ mangiare un'altra fetta di torta.",
            "options": [
              "voglio",
              "devo",
              "posso"
            ],
            "answer": 0
          },
          {
            "q": "La porta è chiusa a chiave e non ___ entrare.",
            "options": [
              "posso",
              "voglio",
              "devo"
            ],
            "answer": 0
          },
          {
            "q": "Prima di entrare ___ firmare il modulo.",
            "options": [
              "devo",
              "voglio",
              "posso"
            ],
            "answer": 0
          },
          {
            "q": "L'anno scorso sono stato in montagna, quest'estate ___ andare al mare.",
            "options": [
              "voglio",
              "devo",
              "posso"
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
    "title": "Verbi irregolari al presente (fare, andare, venire, stare, dare)",
    "exercises": [
      {
        "type": "Riempimento",
        "fmt": "buco",
        "instr": "Scegli la forma corretta del verbo irregolare fra parentesi.",
        "items": [
          {
            "q": "Ogni mattina, prima di uscire, ___ colazione. (io – fare)",
            "options": [
              "faccio",
              "fa",
              "facciamo"
            ],
            "answer": 0
          },
          {
            "q": "Paolo, ___ in ufficio in autobus?",
            "options": [
              "vai",
              "vado",
              "va"
            ],
            "answer": 0
          },
          {
            "q": "Stasera Marco ___ a cena da noi.",
            "options": [
              "viene",
              "vengo",
              "vieni"
            ],
            "answer": 0
          },
          {
            "q": "Oggi io e Sara ___ a casa perché aspettiamo un pacco.",
            "options": [
              "stiamo",
              "sto",
              "stanno"
            ],
            "answer": 0
          },
          {
            "q": "Quando un collega ha un problema, ___ un consiglio. (io – dare)",
            "options": [
              "do",
              "dà",
              "dai"
            ],
            "answer": 0
          },
          {
            "q": "Nel fine settimana Elena e Davide ___ spesso sport.",
            "options": [
              "fanno",
              "fate",
              "facciamo"
            ],
            "answer": 0
          }
        ]
      },
      {
        "type": "Correzione",
        "fmt": "errore",
        "instr": "Individua e clicca dove c'è l'errore.",
        "items": [
          {
            "q": "Dopo cena io fa una passeggiata nel quartiere.",
            "wrong": "fa",
            "fix": "faccio"
          },
          {
            "q": "Matteo, va al lavoro a piedi o preferisci la bicicletta?",
            "wrong": "va",
            "fix": "vai"
          },
          {
            "q": "Domani i miei amici viene a cena da me.",
            "wrong": "viene",
            "fix": "vengono"
          },
          {
            "q": "Questa settimana io e Chiara sta in ufficio fino a tardi.",
            "wrong": "sta",
            "fix": "stiamo"
          },
          {
            "q": "Se un amico ha un dubbio, Giulia do un consiglio.",
            "wrong": "do",
            "fix": "dà"
          },
          {
            "q": "Ragazzi, il sabato va al mercato con i vostri genitori?",
            "wrong": "va",
            "fix": "andate"
          }
        ]
      },
      {
        "type": "Trasformazione",
        "fmt": "buco",
        "instr": "Scegli la forma corretta con il nuovo soggetto.",
        "items": [
          {
            "q": "Io faccio la spesa. → Noi ___ la spesa.",
            "options": [
              "facciamo",
              "fate",
              "fanno"
            ],
            "answer": 0
          },
          {
            "q": "Tu vai in centro. → Voi ___ in centro.",
            "options": [
              "andate",
              "andiamo",
              "vanno"
            ],
            "answer": 0
          },
          {
            "q": "Lui viene a pranzo. → Loro ___ a pranzo.",
            "options": [
              "vengono",
              "veniamo",
              "venite"
            ],
            "answer": 0
          },
          {
            "q": "Noi stiamo bene. → Io ___ bene.",
            "options": [
              "sto",
              "stai",
              "sta"
            ],
            "answer": 0
          },
          {
            "q": "Voi date una mano. → Tu ___ una mano.",
            "options": [
              "dai",
              "dà",
              "do"
            ],
            "answer": 0
          },
          {
            "q": "Loro fanno tardi. → Lei ___ tardi.",
            "options": [
              "fa",
              "faccio",
              "fai"
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
      "A2 L26",
      "B1 L5"
    ],
    "title": "Il passato prossimo con avere",
    "exercises": [
      {
        "type": "Riempimento",
        "fmt": "buco",
        "instr": "Scegli il participio passato corretto.",
        "items": [
          {
            "q": "Ieri sera ho ___ una pizza al ristorante con gli amici.",
            "options": [
              "mangiato",
              "mangiata",
              "mangiare"
            ],
            "answer": 0
          },
          {
            "q": "Prima di uscire abbiamo ___ la porta a chiave.",
            "options": [
              "chiuso",
              "chiudato",
              "chiudito"
            ],
            "answer": 0
          },
          {
            "q": "Hai ___ il libro per la lezione di domani?",
            "options": [
              "letto",
              "leggiuto",
              "legguto"
            ],
            "answer": 0
          },
          {
            "q": "Hanno ___ la finestra per far entrare un po' d'aria.",
            "options": [
              "aperto",
              "aprito",
              "apruto"
            ],
            "answer": 0
          },
          {
            "q": "Sono in ritardo perché ho ___ una mail al capo.",
            "options": [
              "scritto",
              "scrivuto",
              "scriveto"
            ],
            "answer": 0
          },
          {
            "q": "È molto stanco perché ha ___ tutto il giorno.",
            "options": [
              "lavorato",
              "lavorata",
              "lavorito"
            ],
            "answer": 0
          }
        ]
      },
      {
        "type": "Correzione",
        "fmt": "errore",
        "instr": "Individua e clicca dove c'è l'errore.",
        "items": [
          {
            "q": "Durante la pausa sono mangiato una mela.",
            "wrong": "sono",
            "fix": "ho"
          },
          {
            "q": "Durante il viaggio abbiamo vedato il Duomo.",
            "wrong": "vedato",
            "fix": "visto"
          },
          {
            "q": "Hai spendito molto per il biglietto del treno?",
            "wrong": "spendito",
            "fix": "speso"
          },
          {
            "q": "Dopo anni di risparmi Marco e Anna sono comprato una casa.",
            "wrong": "sono",
            "fix": "hanno"
          },
          {
            "q": "Ragazzi, alla festa di Elena siete bevuto lo spumante?",
            "wrong": "siete",
            "fix": "avete"
          },
          {
            "q": "Quando hanno bussato, ho aprito la porta.",
            "wrong": "aprito",
            "fix": "aperto"
          }
        ]
      },
      {
        "type": "Trasformazione",
        "fmt": "buco",
        "instr": "Riscrivi la frase al passato prossimo usando l'espressione di tempo indicata.",
        "items": [
          {
            "q": "Oggi telefono a Sara. → Ieri ___.",
            "options": [
              "ho telefonato a Sara",
              "hai telefonato a Sara",
              "ha telefonato a Sara"
            ],
            "answer": 0
          },
          {
            "q": "Stamattina beviamo una spremuta. → Ieri mattina ___.",
            "options": [
              "abbiamo bevuto una spremuta",
              "avete bevuto una spremuta",
              "hanno bevuto una spremuta"
            ],
            "answer": 0
          },
          {
            "q": "Adesso finisci il lavoro. → Un'ora fa ___.",
            "options": [
              "hai finito il lavoro",
              "ha finito il lavoro",
              "ho finito il lavoro"
            ],
            "answer": 0
          },
          {
            "q": "Oggi guardano la partita. → Domenica scorsa ___.",
            "options": [
              "hanno guardato la partita",
              "abbiamo guardato la partita",
              "avete guardato la partita"
            ],
            "answer": 0
          },
          {
            "q": "Ora prendiamo l'autobus. → Poco fa ___.",
            "options": [
              "abbiamo preso l'autobus",
              "avete preso l'autobus",
              "hanno preso l'autobus"
            ],
            "answer": 0
          },
          {
            "q": "Oggi ricevo un pacco. → Due giorni fa ___.",
            "options": [
              "ho ricevuto un pacco",
              "hai ricevuto un pacco",
              "ha ricevuto un pacco"
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
      "A2 L26",
      "B1 L5"
    ],
    "title": "Il passato prossimo con essere",
    "exercises": [
      {
        "type": "Riempimento",
        "fmt": "buco",
        "instr": "Scegli il participio con l'accordo giusto.",
        "items": [
          {
            "q": "Chiara è ___ dal treno con la valigia.",
            "options": [
              "scesa",
              "sceso",
              "scese"
            ],
            "answer": 0
          },
          {
            "q": "Ieri, dopo il concerto, i ragazzi sono ___ tardi.",
            "options": [
              "arrivati",
              "arrivate",
              "arrivato"
            ],
            "answer": 0
          },
          {
            "q": "Le mie amiche sono ___ ieri per andare in vacanza.",
            "options": [
              "partite",
              "partiti",
              "partita"
            ],
            "answer": 0
          },
          {
            "q": "Gli altri sono usciti. Marco è ___ in ufficio.",
            "options": [
              "rimasto",
              "rimasta",
              "rimasti"
            ],
            "answer": 0
          },
          {
            "q": "Ieri Lucia è ___ a casa con la febbre.",
            "options": [
              "rimasta",
              "rimasto",
              "rimaste"
            ],
            "answer": 0
          },
          {
            "q": "Ragazzi, siete ___ alla riunione ieri sera?",
            "options": [
              "andati",
              "andate",
              "andato"
            ],
            "answer": 0
          }
        ]
      },
      {
        "type": "Correzione",
        "fmt": "errore",
        "instr": "Individua e clicca dove c'è l'errore.",
        "items": [
          {
            "q": "Maria ha andata al mercato per comprare la frutta.",
            "wrong": "ha",
            "fix": "è"
          },
          {
            "q": "Gli atleti sono arrivate sabato mattina per il torneo.",
            "wrong": "arrivate",
            "fix": "arrivati"
          },
          {
            "q": "Dopo cena Silvia è tornato a piedi.",
            "wrong": "tornato",
            "fix": "tornata"
          },
          {
            "q": "Per evitare il traffico abbiamo partiti alle sei.",
            "wrong": "abbiamo",
            "fix": "siamo"
          },
          {
            "q": "Sabato Lorenzo è rimasta in biblioteca fino a sera.",
            "wrong": "rimasta",
            "fix": "rimasto"
          },
          {
            "q": "Ieri Matteo e Davide hanno venuti alla festa con alcuni amici.",
            "wrong": "hanno",
            "fix": "sono"
          }
        ]
      },
      {
        "type": "Trasformazione",
        "fmt": "buco",
        "instr": "Scegli la forma corretta e accorda il participio con il nuovo soggetto.",
        "items": [
          {
            "q": "Paolo è andato via. → Le ragazze ___.",
            "options": [
              "sono andate via",
              "sono andati via",
              "sono andata via"
            ],
            "answer": 0
          },
          {
            "q": "Anna è partita. → I miei fratelli ___.",
            "options": [
              "sono partiti",
              "sono partite",
              "sono partita"
            ],
            "answer": 0
          },
          {
            "q": "I turisti sono arrivati. → La guida ___.",
            "options": [
              "è arrivata",
              "è arrivati",
              "sono arrivata"
            ],
            "answer": 0
          },
          {
            "q": "Luca è uscito presto. → Noi (ragazze) ___.",
            "options": [
              "siamo uscite",
              "siamo usciti",
              "siamo uscita"
            ],
            "answer": 0
          },
          {
            "q": "I colleghi sono venuti. → Mia sorella ___.",
            "options": [
              "è venuta",
              "è venuti",
              "sono venuta"
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
      "A2 L14",
      "B1 L5"
    ],
    "title": "I verbi riflessivi",
    "exercises": [
      {
        "type": "Riempimento",
        "fmt": "buco",
        "instr": "Scegli il pronome riflessivo e la forma corretta.",
        "items": [
          {
            "q": "Ogni mattina, quando suona la sveglia, ___ alle sette. (io – alzarsi)",
            "options": [
              "mi alzo",
              "si alzo",
              "mi alza"
            ],
            "answer": 0
          },
          {
            "q": "Lavori alle otto e ___ presto ogni mattina?",
            "options": [
              "ti svegli",
              "si svegli",
              "ti sveglia"
            ],
            "answer": 0
          },
          {
            "q": "Prima di uscire per la festa lei ___ i capelli.",
            "options": [
              "si lava",
              "ti lava",
              "si lavo"
            ],
            "answer": 0
          },
          {
            "q": "Siamo in ritardo e ___ in fretta.",
            "options": [
              "ci vestiamo",
              "si vestiamo",
              "ci veste"
            ],
            "answer": 0
          },
          {
            "q": "Prima della festa, tu e Luca ___ davanti allo specchio.",
            "options": [
              "vi pettinate",
              "si pettinate",
              "vi pettina"
            ],
            "answer": 0
          },
          {
            "q": "Dopo il film i bambini ___ sul divano alle undici.",
            "options": [
              "si addormentano",
              "ci addormentano",
              "si addormenta"
            ],
            "answer": 0
          }
        ]
      },
      {
        "type": "Correzione",
        "fmt": "errore",
        "instr": "Individua e clicca dove c'è l'errore.",
        "items": [
          {
            "q": "Per andare al lavoro io si alzo alle sei.",
            "wrong": "si",
            "fix": "mi"
          },
          {
            "q": "La domenica, quando non lavori, si svegli tardi e fai colazione con calma.",
            "wrong": "si",
            "fix": "ti"
          },
          {
            "q": "Prima di mangiare noi si laviamo le mani.",
            "wrong": "si",
            "fix": "ci"
          },
          {
            "q": "I ragazzi sono in ritardo e si veste in fretta.",
            "wrong": "veste",
            "fix": "vestono"
          },
          {
            "q": "Davanti allo specchio lei si pettinano ogni mattina.",
            "wrong": "pettinano",
            "fix": "pettina"
          },
          {
            "q": "Quando siete stanchi voi si riposate dopo pranzo.",
            "wrong": "si",
            "fix": "vi"
          }
        ]
      },
      {
        "type": "Trasformazione",
        "fmt": "buco",
        "instr": "Scegli il pronome riflessivo e la forma verbale corretti con il nuovo soggetto.",
        "items": [
          {
            "q": "Io mi alzo presto. → Noi ___.",
            "options": [
              "ci alziamo presto",
              "si alziamo presto",
              "ci alzano presto"
            ],
            "answer": 0
          },
          {
            "q": "Anna si veste in fretta. → Tu ___.",
            "options": [
              "ti vesti in fretta",
              "si vesti in fretta",
              "ti veste in fretta"
            ],
            "answer": 0
          },
          {
            "q": "I bambini si lavano le mani. → Io ___.",
            "options": [
              "mi lavo le mani",
              "si lavo le mani",
              "mi lava le mani"
            ],
            "answer": 0
          },
          {
            "q": "Noi ci divertiamo molto. → Loro ___.",
            "options": [
              "si divertono molto",
              "ci divertono molto",
              "si divertiamo molto"
            ],
            "answer": 0
          },
          {
            "q": "Tu ti riposi un’ora. → Voi ___.",
            "options": [
              "vi riposate un’ora",
              "si riposate un’ora",
              "vi riposa un’ora"
            ],
            "answer": 0
          },
          {
            "q": "Voi vi scusate. → Lei ___.",
            "options": [
              "si scusa",
              "vi scusa",
              "si scusano"
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
      "A2 L11",
      "B1 L2",
      "B1 L6",
      "B1 L18",
      "B2 L6"
    ],
    "title": "L'imperativo informale (tu)",
    "exercises": [
      {
        "type": "Riempimento",
        "fmt": "buco",
        "instr": "Scegli l'imperativo con «tu».",
        "items": [
          {
            "q": "Per prima cosa, ___ le carote a pezzi.",
            "options": [
              "taglia",
              "tagli",
              "tagliate"
            ],
            "answer": 0
          },
          {
            "q": "Marta, ___ bene la salsa nella pentola.",
            "options": [
              "Mescola",
              "Mescoli",
              "Mescolate"
            ],
            "answer": 0
          },
          {
            "q": "Quando la minestra è quasi pronta, ___ un po’ di sale.",
            "options": [
              "aggiungi",
              "aggiunge",
              "aggiungete"
            ],
            "answer": 0
          },
          {
            "q": "Quando l'acqua bolle, ___ la pasta nella pentola.",
            "options": [
              "metti",
              "mette",
              "mettete"
            ],
            "answer": 0
          },
          {
            "q": "Quando il forno è caldo, ___ la torta.",
            "options": [
              "inforna",
              "inforni",
              "infornate"
            ],
            "answer": 0
          },
          {
            "q": "Prima di cucinare, ___ le verdure.",
            "options": [
              "lava",
              "lavi",
              "lavate"
            ],
            "answer": 0
          }
        ]
      },
      {
        "type": "Correzione",
        "fmt": "errore",
        "instr": "Le persone si danno del tu. Individua e clicca dove c'è l'errore.",
        "items": [
          {
            "q": "Prenda una pentola grande e mettila sul fuoco.",
            "wrong": "Prenda",
            "fix": "Prendi"
          },
          {
            "q": "Metti il pane sul tagliere e tagli le fette sottili.",
            "wrong": "tagli",
            "fix": "taglia"
          },
          {
            "q": "Apri la finestra e accenda il fuoco sotto la padella.",
            "wrong": "accenda",
            "fix": "accendi"
          },
          {
            "q": "Serva la pasta ben calda e portala subito in tavola.",
            "wrong": "Serva",
            "fix": "Servi"
          },
          {
            "q": "Controlla le uova e finisca di cuocerle piano.",
            "wrong": "finisca",
            "fix": "finisci"
          },
          {
            "q": "Faccia scaldare il brodo e uniscilo al risotto.",
            "wrong": "Faccia",
            "fix": "Fai"
          }
        ]
      },
      {
        "type": "Trasformazione",
        "fmt": "buco",
        "instr": "Trasforma il consiglio in imperativo con «tu».",
        "items": [
          {
            "q": "Devi sbucciare le patate. →",
            "options": [
              "Sbuccia le patate!",
              "Sbucci le patate!",
              "Sbucciate le patate!"
            ],
            "answer": 0
          },
          {
            "q": "Devi versare l'acqua. →",
            "options": [
              "Versa l'acqua!",
              "Versi l'acqua!",
              "Versate l'acqua!"
            ],
            "answer": 0
          },
          {
            "q": "Devi cuocere il riso. →",
            "options": [
              "Cuoci il riso!",
              "Cuoce il riso!",
              "Cuocete il riso!"
            ],
            "answer": 0
          },
          {
            "q": "Devi girare la frittata. →",
            "options": [
              "Gira la frittata!",
              "Giri la frittata!",
              "Girate la frittata!"
            ],
            "answer": 0
          },
          {
            "q": "Devi preparare il sugo. →",
            "options": [
              "Prepara il sugo!",
              "Prepari il sugo!",
              "Preparate il sugo!"
            ],
            "answer": 0
          },
          {
            "q": "Devi spegnere il forno. →",
            "options": [
              "Spegni il forno!",
              "Spegne il forno!",
              "Spegnete il forno!"
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
      "A2 L12",
      "B1 L2",
      "B1 L6",
      "B1 L18",
      "B2 L6"
    ],
    "title": "L'imperativo formale (Lei) e negativo",
    "exercises": [
      {
        "type": "Riempimento",
        "fmt": "buco",
        "instr": "Scegli l'imperativo formale con «Lei».",
        "items": [
          {
            "q": "Signora, ___ questa medicina dopo pranzo.",
            "options": [
              "prenda",
              "prendi",
              "prendete"
            ],
            "answer": 0
          },
          {
            "q": "Signore, con questo caldo ___ molta acqua.",
            "options": [
              "beva",
              "bevi",
              "bevete"
            ],
            "answer": 0
          },
          {
            "q": "Signora, mentre preparo i documenti ___ qui un momento.",
            "options": [
              "si sieda",
              "si siede",
              "si siedono"
            ],
            "answer": 0
          },
          {
            "q": "Signore, per il controllo ___ bene la bocca.",
            "options": [
              "apra",
              "apri",
              "aprite"
            ],
            "answer": 0
          },
          {
            "q": "Signora, durante l’esame ___ lentamente.",
            "options": [
              "respiri",
              "respira",
              "respirate"
            ],
            "answer": 0
          },
          {
            "q": "Signore, ha la febbre, quindi ___ a letto oggi.",
            "options": [
              "resti",
              "resta",
              "restate"
            ],
            "answer": 0
          }
        ]
      },
      {
        "type": "Riempimento",
        "fmt": "buco",
        "instr": "Scegli la forma corretta dell'imperativo negativo.",
        "items": [
          {
            "q": "Marco, non ___ troppi dolci!",
            "options": [
              "mangiare",
              "mangia",
              "mangi"
            ],
            "answer": 0
          },
          {
            "q": "Luca, non ___ caffè stasera!",
            "options": [
              "bere",
              "bevi",
              "beva"
            ],
            "answer": 0
          },
          {
            "q": "Paolo, non ___ con la febbre!",
            "options": [
              "uscire",
              "esci",
              "esca"
            ],
            "answer": 0
          },
          {
            "q": "Giulia, non ___ questa medicina prima di mangiare!",
            "options": [
              "prendere",
              "prendi",
              "prenda"
            ],
            "answer": 0
          },
          {
            "q": "Anna, non ___ fino a tardi!",
            "options": [
              "lavorare",
              "lavora",
              "lavori"
            ],
            "answer": 0
          },
          {
            "q": "Luca, non ___ qui!",
            "options": [
              "fumare",
              "fuma",
              "fumi"
            ],
            "answer": 0
          }
        ]
      },
      {
        "type": "Correzione",
        "fmt": "errore",
        "instr": "Individua e clicca dove c'è l'errore.",
        "items": [
          {
            "q": "Signora, fai una passeggiata ogni giorno!",
            "wrong": "fai",
            "fix": "faccia"
          },
          {
            "q": "Signore, la notte dormi almeno otto ore!",
            "wrong": "dormi",
            "fix": "dorma"
          },
          {
            "q": "Signora, a pranzo mangia più verdura!",
            "wrong": "mangia",
            "fix": "mangi"
          },
          {
            "q": "Signore, controlla la temperatura ogni mattina!",
            "wrong": "controlla",
            "fix": "controlli"
          },
          {
            "q": "Signora, domani telefona al medico!",
            "wrong": "telefona",
            "fix": "telefoni"
          },
          {
            "q": "Signor Bianchi, torna domani per il controllo!",
            "wrong": "torna",
            "fix": "torni"
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
            "q": "___ libro sul tavolo accanto a me è mio. (vicino)",
            "options": [
              "Questo",
              "Questa",
              "Questi"
            ],
            "answer": 0
          },
          {
            "q": "___ ragazze qui accanto a noi sono simpatiche. (vicino)",
            "options": [
              "Queste",
              "Questi",
              "Questa"
            ],
            "answer": 0
          },
          {
            "q": "___ palazzo in fondo alla strada è antico. (lontano)",
            "options": [
              "Quel",
              "Quello",
              "Quella"
            ],
            "answer": 0
          },
          {
            "q": "___ studente in fondo all’aula è bravo. (lontano)",
            "options": [
              "Quello",
              "Quel",
              "Quelli"
            ],
            "answer": 0
          },
          {
            "q": "___ scarpe laggiù in vetrina sono care. (lontano)",
            "options": [
              "Quelle",
              "Quei",
              "Quegli"
            ],
            "answer": 0
          },
          {
            "q": "___ alberi in fondo al parco sono alti. (lontano)",
            "options": [
              "Quegli",
              "Quei",
              "Quelle"
            ],
            "answer": 0
          }
        ]
      },
      {
        "type": "Correzione",
        "fmt": "errore",
        "instr": "Individua e clicca dove c'è l'errore.",
        "items": [
          {
            "q": "Questo casa vicino alla spiaggia è costosa.",
            "wrong": "Questo",
            "fix": "Questa"
          },
          {
            "q": "Ieri ho comprato quelli libri in libreria.",
            "wrong": "quelli",
            "fix": "quei"
          },
          {
            "q": "Parlo spesso con quel studente della mia classe.",
            "wrong": "quel",
            "fix": "quello"
          },
          {
            "q": "Quei zaini vicino alla porta sono pesanti.",
            "wrong": "Quei",
            "fix": "Quegli"
          },
          {
            "q": "Oggi dobbiamo risolvere questa problema serio.",
            "wrong": "questa",
            "fix": "questo"
          },
          {
            "q": "Hai visto quelle quadri molto costosi in vetrina?",
            "wrong": "quelle",
            "fix": "quei"
          }
        ]
      },
      {
        "type": "Trasformazione",
        "fmt": "buco",
        "instr": "Cambia da vicino a lontano: scegli la forma corretta.",
        "items": [
          {
            "q": "Questo libro →",
            "options": [
              "Quel libro",
              "Quello libro",
              "Quei libro"
            ],
            "answer": 0
          },
          {
            "q": "Questo studente →",
            "options": [
              "Quello studente",
              "Quel studente",
              "Quegli studente"
            ],
            "answer": 0
          },
          {
            "q": "Questa casa →",
            "options": [
              "Quella casa",
              "Quel casa",
              "Quelle casa"
            ],
            "answer": 0
          },
          {
            "q": "Questi ragazzi →",
            "options": [
              "Quei ragazzi",
              "Quegli ragazzi",
              "Quelli ragazzi"
            ],
            "answer": 0
          },
          {
            "q": "Questi alberi →",
            "options": [
              "Quegli alberi",
              "Quei alberi",
              "Quelli alberi"
            ],
            "answer": 0
          },
          {
            "q": "Queste scarpe →",
            "options": [
              "Quelle scarpe",
              "Quei scarpe",
              "Quegli scarpe"
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
      "A2 L13",
      "B2 L4"
    ],
    "title": "I comparativi",
    "exercises": [
      {
        "type": "Riempimento",
        "fmt": "buco",
        "instr": "Scegli la parola giusta per il confronto.",
        "items": [
          {
            "q": "Nella foto dei due fratelli Marco è più alto ___ Luca.",
            "options": [
              "di",
              "che",
              "come"
            ],
            "answer": 0
          },
          {
            "q": "La notte prima dell'esame dormire è più utile ___ studiare.",
            "options": [
              "che",
              "di",
              "come"
            ],
            "answer": 0
          },
          {
            "q": "Il mio appartamento è grande ___ il tuo.",
            "options": [
              "come",
              "di",
              "che"
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
            "q": "Per arrivare prima, il treno è più veloce ___.",
            "options": [
              "dell'autobus",
              "che l'autobus",
              "come l'autobus"
            ],
            "answer": 0
          },
          {
            "q": "In questo paese quest'anno ci sono meno turisti ___ abitanti.",
            "options": [
              "che",
              "di",
              "come"
            ],
            "answer": 0
          }
        ]
      },
      {
        "type": "Correzione",
        "fmt": "errore",
        "instr": "Individua e clicca dove c'è l'errore.",
        "items": [
          {
            "q": "Paolo è forte ma è meno veloce che Gianni.",
            "wrong": "che",
            "fix": "di"
          },
          {
            "q": "Per la salute è più sano mangiare verdure di bere bibite zuccherate.",
            "wrong": "di",
            "fix": "che"
          },
          {
            "q": "Ho più penne di matite nell'astuccio.",
            "wrong": "di",
            "fix": "che"
          },
          {
            "q": "Anna è più giovane come me, ma lavora qui da più tempo.",
            "wrong": "come",
            "fix": "di"
          },
          {
            "q": "In famiglia mio cugino è più magro che suo padre.",
            "wrong": "che",
            "fix": "di"
          },
          {
            "q": "A colazione bevo più latte di caffè.",
            "wrong": "di",
            "fix": "che"
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
            "q": "Correre per un'ora / camminare per dieci minuti (più faticoso)",
            "options": [
              "Correre per un'ora è più faticoso che camminare per dieci minuti.",
              "Correre per un'ora è più faticoso di camminare per dieci minuti.",
              "Correre per un'ora è più faticoso come camminare per dieci minuti."
            ],
            "answer": 0
          },
          {
            "q": "Il gatto 4 kg — il cane 4 kg (uguale)",
            "options": [
              "Il gatto pesa quanto il cane.",
              "Il gatto pesa di cane.",
              "Il gatto pesa che il cane."
            ],
            "answer": 0
          },
          {
            "q": "8 sedie — 4 tavoli (più sedie)",
            "options": [
              "Ci sono più sedie che tavoli.",
              "Ci sono più sedie di tavoli.",
              "Ci sono più sedie come tavoli."
            ],
            "answer": 0
          },
          {
            "q": "Roma: 20 mm — Milano: 20 mm (pioggia uguale)",
            "options": [
              "A Roma piove quanto a Milano.",
              "A Roma piove di Milano.",
              "A Roma piove che Milano."
            ],
            "answer": 0
          },
          {
            "q": "Il mio telefono 2019 — il tuo 2023 (meno recente)",
            "options": [
              "Il mio telefono è meno recente del tuo.",
              "Il mio telefono è meno recente che il tuo.",
              "Il mio telefono è meno recente come il tuo."
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
      "A2 L13",
      "B1 L12"
    ],
    "title": "I pronomi diretti",
    "exercises": [
      {
        "type": "Riempimento",
        "fmt": "buco",
        "instr": "Scegli il pronome diretto che sostituisce il nome della prima frase.",
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
            "q": "Invito i miei amici. → ___ invito.",
            "options": [
              "Li",
              "Le",
              "Lo"
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
        "instr": "Individua e clicca dove c'è l'errore.",
        "items": [
          {
            "q": "Il vino la compro io e i dolci li porta Marta.",
            "wrong": "la",
            "fix": "lo"
          },
          {
            "q": "Quando vedo Anna, lo saluto subito.",
            "wrong": "lo",
            "fix": "la"
          },
          {
            "q": "I quaderni le porto io e i libri li lasci qui.",
            "wrong": "le",
            "fix": "li"
          },
          {
            "q": "Le lettere le spedisco oggi e il pacco li mando domani.",
            "wrong": "li",
            "fix": "lo"
          },
          {
            "q": "I colleghi le avviso subito e la segretaria la chiamo dopo.",
            "wrong": "le",
            "fix": "li"
          },
          {
            "q": "Le mie cugine le vedo raramente e mio zio li chiamo spesso.",
            "wrong": "li",
            "fix": "lo"
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
        "instr": "Scegli la forma corretta del verbo.",
        "items": [
          {
            "q": "Leggo di politica ogni giorno. La politica mi ___ molto.",
            "options": [
              "interessa",
              "interessano",
              "interesso"
            ],
            "answer": 0
          },
          {
            "q": "Per compilare il modulo, ti ___ questi documenti?",
            "options": [
              "servono",
              "serve",
              "servi"
            ],
            "answer": 0
          },
          {
            "q": "Sara vive all’estero da sei mesi e le ___ la sua famiglia.",
            "options": [
              "manca",
              "mancano",
              "manco"
            ],
            "answer": 0
          },
          {
            "q": "Per andare in stazione in taxi ci ___ dieci euro.",
            "options": [
              "bastano",
              "basta",
              "bastiamo"
            ],
            "answer": 0
          },
          {
            "q": "Da quando Marco vive a Milano, gli ___ gli amici di Roma.",
            "options": [
              "mancano",
              "manca",
              "mancano loro"
            ],
            "answer": 0
          },
          {
            "q": "Il lavoro è quasi pronto, ti ___ un’ora per finirlo?",
            "options": [
              "basta",
              "bastano",
              "basti"
            ],
            "answer": 0
          }
        ]
      },
      {
        "type": "Correzione",
        "fmt": "errore",
        "instr": "Individua e clicca dove c'è l'errore.",
        "items": [
          {
            "q": "Quando scelgo un concerto, mi interessano soprattutto la musica classica.",
            "wrong": "interessano",
            "fix": "interessa"
          },
          {
            "q": "Per rientrare stasera ti serve le chiavi di casa?",
            "wrong": "serve",
            "fix": "servono"
          },
          {
            "q": "Anna si è trasferita a Torino e le mancano il vecchio quartiere.",
            "wrong": "mancano",
            "fix": "manca"
          },
          {
            "q": "Per pagare due caffè al bar ci basta cinque euro.",
            "wrong": "basta",
            "fix": "bastano"
          },
          {
            "q": "Da settembre Marta studia a Bologna e le manca i suoi fratelli.",
            "wrong": "manca",
            "fix": "mancano"
          },
          {
            "q": "Secondo te, ti bastano mezz'ora per finire il lavoro?",
            "wrong": "bastano",
            "fix": "basta"
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
            "q": "Sento la mancanza di mia nonna.",
            "options": [
              "Mi manca mia nonna.",
              "Mi mancano mia nonna.",
              "Io manco mia nonna."
            ],
            "answer": 0
          },
          {
            "q": "Paolo trova interessante la musica.",
            "options": [
              "Gli interessa la musica.",
              "Gli interessano la musica.",
              "Lui interessa la musica."
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
            "q": "Sentiamo la mancanza delle montagne.",
            "options": [
              "Ci mancano le montagne.",
              "Ci manca le montagne.",
              "Noi manchiamo le montagne."
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
            "q": "È tardi ___ prendo un taxi per tornare a casa.",
            "options": [
              "e",
              "ma",
              "o"
            ],
            "answer": 0
          },
          {
            "q": "Voglio fare una passeggiata ___ piove.",
            "options": [
              "ma",
              "e",
              "perché"
            ],
            "answer": 0
          },
          {
            "q": "Quando fai colazione al bar prendi il tè ___ il caffè?",
            "options": [
              "o",
              "e",
              "ma"
            ],
            "answer": 0
          },
          {
            "q": "Oggi resto a casa ___ sono malato e non vado al lavoro.",
            "options": [
              "perché",
              "ma",
              "o"
            ],
            "answer": 0
          },
          {
            "q": "Voglio aiutarti con il lavoro, ___ non ho tempo oggi.",
            "options": [
              "ma",
              "e",
              "perché"
            ],
            "answer": 0
          },
          {
            "q": "Durante la pausa mangio un panino ___ ho fame.",
            "options": [
              "perché",
              "ma",
              "o"
            ],
            "answer": 0
          }
        ]
      },
      {
        "type": "Scelta",
        "fmt": "buco",
        "instr": "Scegli il connettivo adatto al senso della frase.",
        "items": [
          {
            "q": "Sono molto stanco ___ stasera non esco.",
            "options": [
              "quindi",
              "invece",
              "anche"
            ],
            "answer": 0
          },
          {
            "q": "Il film è lungo, ___ gli attori sono bravissimi.",
            "options": [
              "però",
              "quindi",
              "anche"
            ],
            "answer": 0
          },
          {
            "q": "Luca va in palestra la mattina presto, io ___ ci vado la sera.",
            "options": [
              "invece",
              "quindi",
              "però"
            ],
            "answer": 0
          },
          {
            "q": "Mi piace questo regista e ___ i suoi film.",
            "options": [
              "anche",
              "però",
              "invece"
            ],
            "answer": 0
          },
          {
            "q": "Domani il museo è chiuso, ___ sabato è aperto tutto il giorno.",
            "options": [
              "però",
              "quindi",
              "anche"
            ],
            "answer": 0
          },
          {
            "q": "Marco ha un esame difficile domani, ___ resta a casa a studiare.",
            "options": [
              "quindi",
              "invece",
              "anche"
            ],
            "answer": 0
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
            "q": "Voglio venire. Sono occupato.",
            "options": [
              "Voglio venire ma sono occupato.",
              "Voglio venire e sono occupato.",
              "Voglio venire perché sono occupato."
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
            "q": "Il corso è utile. Costa troppo per me.",
            "options": [
              "Il corso è utile ma costa troppo per me.",
              "Il corso è utile perché costa troppo per me.",
              "Il corso è utile e costa troppo per me."
            ],
            "answer": 0
          },
          {
            "q": "Mi piace cucinare. Mi piace mangiare.",
            "options": [
              "Mi piace cucinare e mangiare.",
              "Mi piace cucinare ma mangiare.",
              "Mi piace cucinare perché mangiare."
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
    "title": "Bisogna o dovere: impersonale e personale",
    "exercises": [
      {
        "type": "Riempimento",
        "fmt": "buco",
        "instr": "Scegli la forma corretta.",
        "items": [
          {
            "q": "Prima della visita anche voi ___ compilare il modulo.",
            "options": [
              "dovete",
              "bisogna",
              "bisognate"
            ],
            "answer": 0
          },
          {
            "q": "In questa casa, prima di entrare, ___ togliersi le scarpe.",
            "options": [
              "bisogna",
              "devi",
              "dovete"
            ],
            "answer": 0
          },
          {
            "q": "Marco ___ arrivare in orario domani perché la riunione è importante.",
            "options": [
              "deve",
              "bisogna",
              "bisogni"
            ],
            "answer": 0
          },
          {
            "q": "Per fare bene l’esame ___ prepararsi con calma.",
            "options": [
              "bisogna",
              "devi",
              "dovete"
            ],
            "answer": 0
          },
          {
            "q": "Con questa febbre Anna ___ chiamare il medico.",
            "options": [
              "deve",
              "bisogna",
              "bisogni"
            ],
            "answer": 0
          },
          {
            "q": "Il ristorante è sempre pieno e noi ___ prenotare un tavolo.",
            "options": [
              "dobbiamo",
              "bisogna",
              "bisogniamo"
            ],
            "answer": 0
          }
        ]
      },
      {
        "type": "Correzione",
        "fmt": "errore",
        "instr": "Individua e clicca dove c'è l'errore.",
        "items": [
          {
            "q": "Prima di uscire bisogna a controllare i documenti.",
            "wrong": "a",
            "fix": "(togliere)"
          },
          {
            "q": "In aereo bisognano mettere la cintura di sicurezza.",
            "wrong": "bisognano",
            "fix": "bisogna"
          },
          {
            "q": "Per questa richiesta bisogni rispondere entro venerdì mattina.",
            "wrong": "bisogni",
            "fix": "bisogna"
          },
          {
            "q": "Bisogniamo ripassare tutta la lezione prima del test.",
            "wrong": "Bisogniamo",
            "fix": "Bisogna"
          },
          {
            "q": "Per l'iscrizione bisogna arrivi con i documenti pronti.",
            "wrong": "arrivi",
            "fix": "arrivare"
          },
          {
            "q": "Bisogna di consegnare il modulo in segreteria.",
            "wrong": "di",
            "fix": "(togliere)"
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
              "Hai bisogno di timbrare il biglietto.",
              "Bisogna di timbrare il biglietto."
            ],
            "answer": 0
          },
          {
            "q": "Dobbiamo spegnere il telefono.",
            "options": [
              "Bisogna spegnere il telefono.",
              "Abbiamo bisogno di spegnere il telefono.",
              "Bisogna spegniamo il telefono."
            ],
            "answer": 0
          },
          {
            "q": "Dovete togliere le scarpe.",
            "options": [
              "Bisogna togliere le scarpe.",
              "Si bisogna togliere le scarpe.",
              "Avete bisogno di togliere le scarpe."
            ],
            "answer": 0
          },
          {
            "q": "Devono presentare la domanda entro il termine.",
            "options": [
              "Bisogna presentare la domanda entro il termine.",
              "Bisogna presentano la domanda entro il termine.",
              "Hanno bisogno di presentare la domanda entro il termine."
            ],
            "answer": 0
          },
          {
            "q": "Non devi correre nei corridoi.",
            "options": [
              "Non bisogna correre nei corridoi.",
              "Non bisogna di correre nei corridoi.",
              "Non hai bisogno di correre nei corridoi."
            ],
            "answer": 0
          },
          {
            "q": "Devono avvisare in anticipo.",
            "options": [
              "Bisogna avvisare in anticipo.",
              "Si bisogna avvisare in anticipo.",
              "Bisogna che avvisare in anticipo."
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
        "instr": "Scegli la forma corretta per chiedere un favore.",
        "items": [
          {
            "q": "Signore, ___ abbassare un po' il volume?",
            "options": [
              "Le dispiace",
              "Le dispiacciono",
              "Le dispiaci"
            ],
            "answer": 0
          },
          {
            "q": "Marco, ___ accompagnarmi alla fermata?",
            "options": [
              "ti dispiace",
              "ti dispiaci",
              "ti dispiacciono"
            ],
            "answer": 0
          },
          {
            "q": "Le dispiace ___ qui il Suo nome?",
            "options": [
              "scrivere",
              "scrivi",
              "scriva"
            ],
            "answer": 0
          },
          {
            "q": "Anna, ti dispiace ___ le piante del balcone?",
            "options": [
              "annaffiare",
              "annaffi",
              "annaffia"
            ],
            "answer": 0
          },
          {
            "q": "Signore, Le dispiace ___ più lentamente?",
            "options": [
              "parlare",
              "parla",
              "parli"
            ],
            "answer": 0
          },
          {
            "q": "Luca, ti dispiace ___ con me in banca?",
            "options": [
              "venire",
              "vieni",
              "venga"
            ],
            "answer": 0
          }
        ]
      },
      {
        "type": "Correzione",
        "fmt": "errore",
        "instr": "Individua e clicca dove c'è l'errore.",
        "items": [
          {
            "q": "Vorrebbe due etti di prosciutto, per favore.",
            "wrong": "Vorrebbe",
            "fix": "Vorrei"
          },
          {
            "q": "Buongiorno, potrebbe parlare con il direttore? Sono Elena Ferri.",
            "wrong": "potrebbe",
            "fix": "potrei"
          },
          {
            "q": "Il medico dice che dovrebbe mangiare meno sale, ma il sale mi piace.",
            "wrong": "dovrebbe",
            "fix": "dovrei"
          },
          {
            "q": "In ufficio vorrei di parlare con il responsabile.",
            "wrong": "di",
            "fix": "(togliere)"
          },
          {
            "q": "Potrei a lasciare il cappotto al guardaroba?",
            "wrong": "a",
            "fix": "(togliere)"
          },
          {
            "q": "Non sto bene e dovrei di andare in farmacia.",
            "wrong": "di",
            "fix": "(togliere)"
          }
        ]
      },
      {
        "type": "Trasformazione",
        "fmt": "buco",
        "instr": "Rendi cortese la richiesta: scegli la versione corretta.",
        "items": [
          {
            "q": "Sei al bar e dici: «Voglio un caffè.» →",
            "options": [
              "Vorrei un caffè.",
              "Dovrei un caffè.",
              "Vorrei prendo un caffè."
            ],
            "answer": 0
          },
          {
            "q": "Sei a casa di un'amica e chiedi: «Posso usare il bagno?» →",
            "options": [
              "Potrei usare il bagno?",
              "Potrei uso il bagno?",
              "Potrei di usare il bagno?"
            ],
            "answer": 0
          },
          {
            "q": "Dal dentista dici: «Devo spostare la visita di giovedì.» →",
            "options": [
              "Dovrei spostare la visita di giovedì.",
              "Dovrei sposto la visita di giovedì.",
              "Dovrei di spostare la visita di giovedì."
            ],
            "answer": 0
          },
          {
            "q": "Telefoni al ristorante e dici: «Voglio prenotare un tavolo.» →",
            "options": [
              "Vorrei prenotare un tavolo.",
              "Vorrei prenoto un tavolo.",
              "Vorrei di prenotare un tavolo."
            ],
            "answer": 0
          },
          {
            "q": "In negozio chiedi: «Posso provare questa giacca?» →",
            "options": [
              "Potrei provare questa giacca?",
              "Potrei provo questa giacca?",
              "Potrei a provare questa giacca?"
            ],
            "answer": 0
          },
          {
            "q": "Dici al medico: «Devo prenotare un altro appuntamento.» →",
            "options": [
              "Dovrei prenotare un altro appuntamento.",
              "Dovrei prenoto un altro appuntamento.",
              "Dovrei di prenotare un altro appuntamento."
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
        "instr": "Scegli il verbo corretto.",
        "items": [
          {
            "q": "Ha fatto un corso di nuoto da piccola e ora ___ nuotare bene. (lei)",
            "options": [
              "Sa",
              "Può",
              "Sta"
            ],
            "answer": 0
          },
          {
            "q": "Oggi non ___ venire alla riunione perché ho la febbre. (io)",
            "options": [
              "posso",
              "so",
              "potrei"
            ],
            "answer": 0
          },
          {
            "q": "Non ha mai preso lezioni, quindi non ___ guidare la moto. (lui)",
            "options": [
              "sa",
              "può",
              "sta"
            ],
            "answer": 0
          },
          {
            "q": "Con questo temporale non ___ uscire di casa. (noi)",
            "options": [
              "possiamo",
              "sappiamo",
              "siamo"
            ],
            "answer": 0
          },
          {
            "q": "Hanno studiato dieci anni al conservatorio e ___ suonare il pianoforte. (loro)",
            "options": [
              "sanno",
              "possono",
              "stanno"
            ],
            "answer": 0
          },
          {
            "q": "La porta è chiusa e lei non ___ entrare.",
            "options": [
              "può",
              "sa",
              "sta"
            ],
            "answer": 0
          }
        ]
      },
      {
        "type": "Scelta",
        "fmt": "buco",
        "instr": "Scegli il verbo adatto alla frase.",
        "items": [
          {
            "q": "Non ___ dove abita Marco. (io)",
            "options": [
              "so",
              "posso",
              "sono"
            ],
            "answer": 0
          },
          {
            "q": "___ che domani il museo è chiuso? (tu)",
            "options": [
              "Sai",
              "Puoi",
              "Stai"
            ],
            "answer": 0
          },
          {
            "q": "Non ___ come arrivare in stazione. (noi)",
            "options": [
              "sappiamo",
              "possiamo",
              "siamo"
            ],
            "answer": 0
          },
          {
            "q": "Con questo traffico non ___ arrivare in orario. (io)",
            "options": [
              "posso",
              "so",
              "sono"
            ],
            "answer": 0
          },
          {
            "q": "___ a che ora parte il treno? (voi)",
            "options": [
              "Sapete",
              "Potete",
              "State"
            ],
            "answer": 0
          },
          {
            "q": "La biblioteca è chiusa e non ___ studiare qui. (loro)",
            "options": [
              "possono",
              "sanno",
              "sono"
            ],
            "answer": 0
          }
        ]
      },
      {
        "type": "Trasformazione",
        "fmt": "buco",
        "instr": "Scegli la frase che esprime il senso indicato.",
        "items": [
          {
            "q": "Ha imparato a sciare con un maestro. (capacità)",
            "options": [
              "Sa sciare.",
              "Può sciare.",
              "Vuole sciare."
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
            "q": "Non ha mai studiato il tedesco. (capacità)",
            "options": [
              "Non sa parlare tedesco.",
              "Non può parlare tedesco.",
              "Non vuole parlare tedesco."
            ],
            "answer": 0
          },
          {
            "q": "La finestra non si apre. (possibilità)",
            "options": [
              "Non posso aprirla.",
              "Non so aprirla.",
              "Non sono aprirla."
            ],
            "answer": 0
          },
          {
            "q": "Ha superato l'esame di scuola guida. (capacità)",
            "options": [
              "Sa guidare.",
              "Può guidare.",
              "Vuole guidare."
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
        "instr": "Scegli la forma corretta del partitivo o dell’espressione di quantità.",
        "items": [
          {
            "q": "Nel carrello ho messo ___ zucchero di canna.",
            "options": [
              "dello",
              "del",
              "dei"
            ],
            "answer": 0
          },
          {
            "q": "Per il condimento serve ___ buono.",
            "options": [
              "dell'olio",
              "del olio",
              "dello olio"
            ],
            "answer": 0
          },
          {
            "q": "Ho preso ___ spinaci freschi al banco.",
            "options": [
              "degli",
              "dei",
              "delle"
            ],
            "answer": 0
          },
          {
            "q": "In frigo ci sono ancora ___ uova.",
            "options": [
              "delle",
              "degli",
              "dei"
            ],
            "answer": 0
          },
          {
            "q": "Per la torta serve ancora ___ farina.",
            "options": [
              "della",
              "dello",
              "delle"
            ],
            "answer": 0
          },
          {
            "q": "Oggi non ho comprato ___ perché il fruttivendolo era chiuso.",
            "options": [
              "frutta",
              "della frutta",
              "qualche frutta"
            ],
            "answer": 0
          }
        ]
      },
      {
        "type": "Correzione",
        "fmt": "errore",
        "instr": "Individua e clicca dove c'è l'errore.",
        "items": [
          {
            "q": "Al mercato ho comprato del pane e delle formaggio.",
            "wrong": "delle",
            "fix": "del"
          },
          {
            "q": "Vorrei un chilo delle arance, per favore.",
            "wrong": "delle",
            "fix": "di"
          },
          {
            "q": "Sul tavolo c'è ancora alcuni pane caldo.",
            "wrong": "alcuni",
            "fix": "del"
          },
          {
            "q": "Per la torta ho comprato della zucchero e delle uova.",
            "wrong": "della",
            "fix": "dello"
          },
          {
            "q": "Ho messo nel carrello qualche bottiglie d’acqua minerale.",
            "wrong": "bottiglie",
            "fix": "bottiglia"
          },
          {
            "q": "Al mercato ho preso dei asparagi e delle zucchine.",
            "wrong": "dei",
            "fix": "degli"
          }
        ]
      },
      {
        "type": "Trasformazione",
        "fmt": "buco",
        "instr": "Riscrivi la frase con la quantità o l’espressione indicata.",
        "items": [
          {
            "q": "Al forno ho comprato del pane. → (mezzo chilo)",
            "options": [
              "Al forno ho comprato mezzo chilo di pane.",
              "Al forno ho comprato mezzo chilo del pane.",
              "Al forno ho comprato mezzo chilo dei pane."
            ],
            "answer": 0
          },
          {
            "q": "Stamattina ho preso delle mele. → (un chilo)",
            "options": [
              "Stamattina ho preso un chilo di mele.",
              "Stamattina ho preso un chilo delle mele.",
              "Stamattina ho preso un chilo dei mele."
            ],
            "answer": 0
          },
          {
            "q": "Davanti alla cassa ci sono dei clienti. → (con «alcuni»)",
            "options": [
              "Davanti alla cassa ci sono alcuni clienti.",
              "Davanti alla cassa c’è alcuni clienti.",
              "Davanti alla cassa ci sono qualche clienti."
            ],
            "answer": 0
          },
          {
            "q": "Per la festa prendiamo dell'aranciata. → (tre bottiglie)",
            "options": [
              "Per la festa prendiamo tre bottiglie di aranciata.",
              "Per la festa prendiamo tre bottiglie dell'aranciata.",
              "Per la festa prendiamo tre bottiglie aranciata."
            ],
            "answer": 0
          },
          {
            "q": "Questa settimana ci sono delle offerte. → (con «qualche»)",
            "options": [
              "Questa settimana c’è qualche offerta.",
              "Questa settimana ci sono qualche offerte.",
              "Questa settimana c’è qualche offerte."
            ],
            "answer": 0
          },
          {
            "q": "A cena mangio della verdura. → (un po’)",
            "options": [
              "A cena mangio un po’ di verdura.",
              "A cena mangio un po’ della verdura.",
              "A cena mangio un po’ verdura."
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
    "title": "L'infinito istruttivo",
    "exercises": [
      {
        "type": "Riempimento",
        "fmt": "fill",
        "instr": "Completa con la forma adatta al contesto. Fra parentesi non c'è mai la forma da scrivere.",
        "items": [
          {
            "q": "Sulla bottiglia dello sciroppo: «___ bene prima dell'uso.» (agita)",
            "a": "Agitare",
            "no": [
              "Agita",
              "Agitando",
              "Agitato"
            ]
          },
          {
            "q": "Nel foglietto del medicinale: «___ una compressa al giorno dopo i pasti.» (prendete)",
            "a": "Prendere",
            "no": [
              "Prendete",
              "Prendendo",
              "Preso"
            ]
          },
          {
            "q": "Sul cartello del cantiere: «___ il casco prima di entrare.» (indossate)",
            "a": "Indossare",
            "no": [
              "Indossate",
              "Indossando",
              "Indossato"
            ]
          },
          {
            "q": "Sull'etichetta del maglione: «___ il capo a rovescio.» (stirate)",
            "a": "Stirare",
            "no": [
              "Stirate",
              "Stirando",
              "Stirato"
            ]
          },
          {
            "q": "Messaggio alla vicina: «Anna, ___ il pacco se non ci sono.» (ritirare)",
            "a": "ritira",
            "no": [
              "ritirare",
              "ritirando",
              "ritirato"
            ]
          },
          {
            "q": "Biglietto lasciato al coinquilino: «Luca, ___ tu la spesa oggi, io torno tardi.» (fare)",
            "a": "fai",
            "no": [
              "fare",
              "facendo",
              "fatto"
            ]
          }
        ]
      },
      {
        "type": "Correzione",
        "fmt": "errore",
        "instr": "Individua e clicca dove c'è l'errore.",
        "items": [
          {
            "q": "Per il montaggio, appoggiando il pannello a terra e avvitare le gambe.",
            "wrong": "appoggiando",
            "fix": "appoggiare"
          },
          {
            "q": "Inserire la spina e premendo il tasto per tre secondi.",
            "wrong": "premendo",
            "fix": "premere"
          },
          {
            "q": "Quando la spia si accende, aprire lo sportello ed estratto il filtro.",
            "wrong": "estratto",
            "fix": "estrarre"
          },
          {
            "q": "Compilato il modulo e allegare una copia del documento.",
            "wrong": "Compilato",
            "fix": "Compilare"
          },
          {
            "q": "Staccare la corrente e aspettando che il motore si fermi.",
            "wrong": "aspettando",
            "fix": "aspettare"
          },
          {
            "q": "Chiudere il rubinetto e avvisato subito l'amministratore.",
            "wrong": "avvisato",
            "fix": "avvisare"
          }
        ]
      },
      {
        "type": "Trasformazione",
        "fmt": "buco",
        "instr": "Riscrivi l'istruzione con l'infinito.",
        "items": [
          {
            "q": "Premi il tasto verde per accendere. →",
            "options": [
              "Premere il tasto verde per accendere.",
              "Premendo il tasto verde per accendere.",
              "Premuto il tasto verde per accendere."
            ],
            "answer": 0
          },
          {
            "q": "Firma il modulo in fondo alla pagina. →",
            "options": [
              "Firmare il modulo in fondo alla pagina.",
              "Firmato il modulo in fondo alla pagina.",
              "Firmarlo il modulo in fondo alla pagina."
            ],
            "answer": 0
          },
          {
            "q": "Conserva la ricevuta fino alla scadenza. →",
            "options": [
              "Conservare la ricevuta fino alla scadenza.",
              "Conservando la ricevuta fino alla scadenza.",
              "Conservarla la ricevuta fino alla scadenza."
            ],
            "answer": 0
          },
          {
            "q": "Chiudi la porta prima di uscire. →",
            "options": [
              "Chiudere la porta prima di uscire.",
              "Chiuso la porta prima di uscire.",
              "Chiudendo la porta prima di uscire."
            ],
            "answer": 0
          },
          {
            "q": "Spedisci la domanda entro venerdì. →",
            "options": [
              "Spedire la domanda entro venerdì.",
              "Spedendo la domanda entro venerdì.",
              "Spedito la domanda entro venerdì."
            ],
            "answer": 0
          },
          {
            "q": "Compila il modulo con la penna nera. →",
            "options": [
              "Compilare il modulo con la penna nera.",
              "Compilato il modulo con la penna nera.",
              "Compilarlo il modulo con la penna nera."
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
            "q": "Abbiamo ___ la macchina in garage. (mettere)",
            "a": "messo",
            "no": [
              "mettuto",
              "mettito",
              "metato"
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
            "q": "Ho ___ una decisione difficile. (prendere)",
            "a": "preso",
            "no": [
              "prenduto",
              "prendito",
              "prendato"
            ]
          },
          {
            "q": "Durante la riunione abbiamo ___ molte cose importanti. (dire)",
            "a": "detto",
            "no": [
              "dicuto",
              "dito",
              "diciuto"
            ]
          },
          {
            "q": "Dopo pranzo ho ___ un caffè al bar. (bere)",
            "a": "bevuto",
            "no": [
              "beuto",
              "bevito",
              "bevato"
            ]
          }
        ]
      },
      {
        "type": "Correzione",
        "fmt": "errore",
        "instr": "Individua e clicca dove c'è l'errore.",
        "items": [
          {
            "q": "Ieri sono andato in banca e ho chiedato un appuntamento.",
            "wrong": "chiedato",
            "fix": "chiesto"
          },
          {
            "q": "Hanno chiudito il museo prima del previsto e siamo tornati a casa.",
            "wrong": "chiudito",
            "fix": "chiuso"
          },
          {
            "q": "Dopo aver parlato con i colleghi, abbiamo decidato di partire.",
            "wrong": "decidato",
            "fix": "deciso"
          },
          {
            "q": "Ho facuto colazione al bar e poi sono uscito di corsa.",
            "wrong": "facuto",
            "fix": "fatto"
          },
          {
            "q": "Non ha rispondato al telefono, così le ho mandato un messaggio.",
            "wrong": "rispondato",
            "fix": "risposto"
          },
          {
            "q": "Siamo arrivati tardi e non abbiamo vedato l’inizio del film.",
            "wrong": "vedato",
            "fix": "visto"
          }
        ]
      },
      {
        "type": "Trasformazione",
        "fmt": "buco",
        "instr": "Riscrivi la frase al passato prossimo.",
        "items": [
          {
            "q": "Leggo il giornale in treno. →",
            "options": [
              "Ho letto il giornale in treno.",
              "Ho leggiuto il giornale in treno.",
              "Letto il giornale in treno."
            ],
            "answer": 0
          },
          {
            "q": "Vengo in ufficio con la metropolitana. →",
            "options": [
              "Sono venuto in ufficio con la metropolitana.",
              "Ho venuto in ufficio con la metropolitana.",
              "Sono venuti in ufficio con la metropolitana."
            ],
            "answer": 0
          },
          {
            "q": "Sono in ritardo per il traffico. →",
            "options": [
              "Sono stato in ritardo per il traffico.",
              "Ho stato in ritardo per il traffico.",
              "Sono essuto in ritardo per il traffico."
            ],
            "answer": 0
          },
          {
            "q": "Esco di casa alle sette. →",
            "options": [
              "Sono uscito di casa alle sette.",
              "Ho uscito di casa alle sette.",
              "Sono uscite di casa alle sette."
            ],
            "answer": 0
          },
          {
            "q": "Rimani in ufficio fino alle otto. →",
            "options": [
              "Sei rimasto in ufficio fino alle otto.",
              "Hai rimasto in ufficio fino alle otto.",
              "Sei rimanuto in ufficio fino alle otto."
            ],
            "answer": 0
          },
          {
            "q": "I ragazzi scendono in cortile dopo cena. →",
            "options": [
              "I ragazzi sono scesi in cortile dopo cena.",
              "I ragazzi hanno sceso in cortile dopo cena.",
              "I ragazzi sono sceso in cortile dopo cena."
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
      "B1 L12",
      "B2 L3"
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
            "q": "___ alla riunione di domani? (tu – venire)",
            "a": "Verrai",
            "no": [
              "Venirai",
              "Vieni",
              "Verai"
            ]
          },
          {
            "q": "Con questo ritmo Marco e Anna ___ tutto in tempo. (fare)",
            "a": "faranno",
            "no": [
              "fareranno",
              "facaranno",
              "farano"
            ]
          },
          {
            "q": "Marta ___ i risultati domani. (vedere)",
            "a": "vedrà",
            "no": [
              "vederà",
              "vedirà",
              "vedrai"
            ]
          },
          {
            "q": "Dal mese prossimo io ___ più tempo libero. (avere)",
            "a": "avrò",
            "no": [
              "averò",
              "avrei",
              "avrà"
            ]
          },
          {
            "q": "Stasera Marco e Luca ___ a casa perché sono stanchi. (stare)",
            "a": "staranno",
            "no": [
              "stareranno",
              "staranno loro",
              "starano"
            ]
          }
        ]
      },
      {
        "type": "Correzione",
        "fmt": "errore",
        "instr": "Individua e clicca dove c'è l'errore.",
        "items": [
          {
            "q": "Noi cominciaremo alle sei e aspetteremo gli altri sul binario.",
            "wrong": "cominciaremo",
            "fix": "cominceremo"
          },
          {
            "q": "Domani spiegherò tutto al direttore e poi parlarò con te.",
            "wrong": "parlarò",
            "fix": "parlerò"
          },
          {
            "q": "Se vieni con noi, ti accompagnaremo alla stazione e torneremo insieme.",
            "wrong": "accompagnaremo",
            "fix": "accompagneremo"
          },
          {
            "q": "Il corso finerà a giugno e riprenderà a settembre.",
            "wrong": "finerà",
            "fix": "finirà"
          },
          {
            "q": "Loro arriveranno alle sei e noi partaremo subito dopo.",
            "wrong": "partaremo",
            "fix": "partiremo"
          },
          {
            "q": "Chi prenota adesso aspettarà meno e pagherà di meno.",
            "wrong": "aspettarà",
            "fix": "aspetterà"
          }
        ]
      },
      {
        "type": "Trasformazione",
        "fmt": "buco",
        "instr": "Trasforma il presente in futuro semplice.",
        "items": [
          {
            "q": "Alle sei c’è la riunione di reparto. →",
            "options": [
              "Alle sei ci sarà la riunione di reparto.",
              "Alle sei ci saranno la riunione di reparto.",
              "Alle sei ci sarebbe la riunione di reparto."
            ],
            "answer": 0
          },
          {
            "q": "In sala ci sono venti posti prenotati.",
            "options": [
              "In sala ci saranno venti posti prenotati.",
              "In sala ci sarà venti posti prenotati.",
              "In sala ci saremo venti posti prenotati."
            ],
            "answer": 0
          },
          {
            "q": "Sabato non c’è nessuno in ufficio. →",
            "options": [
              "Sabato non ci sarà nessuno in ufficio.",
              "Sabato non ci saranno nessuno in ufficio.",
              "Sabato non ci sarebbe nessuno in ufficio."
            ],
            "answer": 0
          },
          {
            "q": "Ci vuole il permesso del proprietario. →",
            "options": [
              "Ci vorrà il permesso del proprietario.",
              "Ci vorranno il permesso del proprietario.",
              "Ci volerà il permesso del proprietario."
            ],
            "answer": 0
          },
          {
            "q": "Ci vogliono due settimane per la risposta. →",
            "options": [
              "Ci vorranno due settimane per la risposta.",
              "Ci vorrà due settimane per la risposta.",
              "Ci voleranno due settimane per la risposta."
            ],
            "answer": 0
          },
          {
            "q": "Ci metto poco a preparare la sala. →",
            "options": [
              "Ci metterò poco a preparare la sala.",
              "Ci metteranno poco a preparare la sala.",
              "Ci mettarò poco a preparare la sala."
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
        "instr": "Scegli la forma corretta di volerci o metterci.",
        "items": [
          {
            "q": "___ tre ore per attraversare la città in tangenziale.",
            "options": [
              "Ci vogliono",
              "Ci mettono",
              "Ci vuole"
            ],
            "answer": 0
          },
          {
            "q": "___ venti minuti a prepararmi.",
            "options": [
              "Ci metto",
              "Ci voglio",
              "Ci mette"
            ],
            "answer": 0
          },
          {
            "q": "___ molta calma per parlare con quel cliente.",
            "options": [
              "Ci vuole",
              "Ci mette",
              "Ci vogliono"
            ],
            "answer": 0
          },
          {
            "q": "Il treno ___ tre ore da Milano a Roma.",
            "options": [
              "ci mette",
              "ci vuole",
              "ci mettono"
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
            "q": "Tu quanto ___ ad arrivare in ufficio?",
            "options": [
              "ci metti",
              "ci vuole",
              "ci mettete"
            ],
            "answer": 0
          }
        ]
      },
      {
        "type": "Correzione",
        "fmt": "errore",
        "instr": "Individua e clicca dove c'è l'errore.",
        "items": [
          {
            "q": "Per il concorso ci vuole due certificati, ma li abbiamo già.",
            "wrong": "vuole",
            "fix": "vogliono"
          },
          {
            "q": "In autobus ci vuole mezz’ora, ma a piedi ci voglio il doppio.",
            "wrong": "voglio",
            "fix": "metto"
          },
          {
            "q": "Sara ci vogliono due giorni per finire la relazione.",
            "wrong": "vogliono",
            "fix": "mette"
          },
          {
            "q": "I miei colleghi ci mettiamo sempre troppo a decidere.",
            "wrong": "mettiamo",
            "fix": "mettono"
          },
          {
            "q": "Voi quanto ci mettono a rispondere alle email?",
            "wrong": "mettono",
            "fix": "mettete"
          },
          {
            "q": "Quando c'è traffico io ci mette il doppio del solito.",
            "wrong": "mette",
            "fix": "metto"
          }
        ]
      },
      {
        "type": "Trasformazione",
        "fmt": "buco",
        "instr": "Riscrivi la frase al passato prossimo.",
        "items": [
          {
            "q": "Sul contratto ci vogliono due firme. →",
            "options": [
              "Sul contratto ci sono volute due firme.",
              "Sul contratto ci hanno voluto due firme.",
              "Sul contratto ci sono voluti due firme."
            ],
            "answer": 0
          },
          {
            "q": "Ci metto mezza giornata a sistemare il garage. →",
            "options": [
              "Ci ho messo mezza giornata a sistemare il garage.",
              "Ci sono messo mezza giornata a sistemare il garage.",
              "Ci ho messa mezza giornata a sistemare il garage."
            ],
            "answer": 0
          },
          {
            "q": "Per organizzare la festa ci vuole molto impegno. →",
            "options": [
              "Per organizzare la festa c’è voluto molto impegno.",
              "Per organizzare la festa ci ha voluto molto impegno.",
              "Per organizzare la festa ci sono voluti molto impegno."
            ],
            "answer": 0
          },
          {
            "q": "Ci mettiamo tutto il pomeriggio a montare l’armadio. →",
            "options": [
              "Ci abbiamo messo tutto il pomeriggio a montare l’armadio.",
              "Ci siamo messi tutto il pomeriggio a montare l’armadio.",
              "Ci abbiamo messi tutto il pomeriggio a montare l’armadio."
            ],
            "answer": 0
          },
          {
            "q": "Per il rinnovo della carta d'identità ci vuole una settimana. →",
            "options": [
              "Per il rinnovo della carta d'identità c’è voluta una settimana.",
              "Per il rinnovo della carta d'identità ci ha voluto una settimana.",
              "Per il rinnovo della carta d'identità c’è voluto una settimana."
            ],
            "answer": 0
          },
          {
            "q": "Per consegnare il divano ci mettono due mesi. →",
            "options": [
              "Per consegnare il divano ci hanno messo due mesi.",
              "Per consegnare il divano ci sono messi due mesi.",
              "Per consegnare il divano ci hanno messi due mesi."
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
      "B1 L11",
      "B2 L2"
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
            "q": "D'estate io e i miei cugini ___ in campagna. (andare)",
            "a": "andavamo",
            "no": [
              "andammo",
              "andavate",
              "andavo"
            ]
          },
          {
            "q": "Marco e Anna ___ vicino al mare. (vivere)",
            "a": "vivevano",
            "no": [
              "vissero",
              "vivevamo",
              "viveva"
            ]
          },
          {
            "q": "Mio padre si ___ ogni mattina alle sei. (svegliarsi)",
            "a": "svegliava",
            "no": [
              "svegliò",
              "svegliavo",
              "svegliavano"
            ]
          },
          {
            "q": "Da ragazzo ___ sempre la verità ai miei genitori. (io – dire)",
            "a": "dicevo",
            "no": [
              "dicavo",
              "dicievo",
              "diceva"
            ]
          },
          {
            "q": "Da piccoli non ___ mai le spiegazioni della maestra. (noi – capire)",
            "a": "capivamo",
            "no": [
              "capevamo",
              "capivano"
            ]
          }
        ]
      },
      {
        "type": "Correzione",
        "fmt": "errore",
        "instr": "Individua e clicca dove c'è l'errore.",
        "items": [
          {
            "q": "Negli anni del collegio mia nonna mi rispondeva sempre quando le scrivo.",
            "wrong": "scrivo",
            "fix": "scrivevo"
          },
          {
            "q": "Al liceo io studiava in biblioteca insieme a due compagni.",
            "wrong": "studiava",
            "fix": "studiavo"
          },
          {
            "q": "Prima del trasloco i miei nonni vivevano al terzo piano e noi abitiamo al quinto.",
            "wrong": "abitiamo",
            "fix": "abitavamo"
          },
          {
            "q": "Quando eravamo piccoli mia madre ci ha faceva la torta la domenica.",
            "wrong": "ha",
            "fix": "(togliere)"
          },
          {
            "q": "A quei tempi noi non avevate il telefono e usavamo le cabine.",
            "wrong": "avevate",
            "fix": "avevamo"
          },
          {
            "q": "Ogni estate i miei zii ci portava al mare e restavamo un mese.",
            "wrong": "portava",
            "fix": "portavano"
          }
        ]
      },
      {
        "type": "Trasformazione",
        "fmt": "buco",
        "instr": "Trasforma dal presente all'imperfetto.",
        "items": [
          {
            "q": "Abito in centro con i miei. →",
            "options": [
              "Abitavo in centro con i miei.",
              "Abitevo in centro con i miei.",
              "Abitavi in centro con i miei."
            ],
            "answer": 0
          },
          {
            "q": "Facciamo colazione al bar prima del lavoro. →",
            "options": [
              "Facevamo colazione al bar prima del lavoro.",
              "Facavamo colazione al bar prima del lavoro.",
              "Facevate colazione al bar prima del lavoro."
            ],
            "answer": 0
          },
          {
            "q": "Bevi molto tè la sera? →",
            "options": [
              "Bevevi molto tè la sera?",
              "Berevi molto tè la sera?",
              "Bevivi molto tè la sera?"
            ],
            "answer": 0
          },
          {
            "q": "Sono contento del mio lavoro. →",
            "options": [
              "Ero contento del mio lavoro.",
              "Essevo contento del mio lavoro.",
              "Era contento del mio lavoro."
            ],
            "answer": 0
          },
          {
            "q": "Ha molti amici nel quartiere. →",
            "options": [
              "Aveva molti amici nel quartiere.",
              "Avava molti amici nel quartiere.",
              "Avevo molti amici nel quartiere."
            ],
            "answer": 0
          },
          {
            "q": "Stai bene in quella casa? →",
            "options": [
              "Stavi bene in quella casa?",
              "Stevi bene in quella casa?",
              "Stavevi bene in quella casa?"
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
      "B1 L27",
      "B2 L1"
    ],
    "title": "Imperfetto o passato prossimo?",
    "exercises": [
      {
        "type": "Riempimento",
        "fmt": "buco",
        "instr": "Scegli tra imperfetto e passato prossimo.",
        "items": [
          {
            "q": "Mentre ___ la doccia, è saltata la luce e sono rimasto al buio.",
            "options": [
              "facevo",
              "ho fatto",
              "faceva"
            ],
            "answer": 0
          },
          {
            "q": "Ieri io e Sara ___ un bel film al cinema.",
            "options": [
              "abbiamo visto",
              "ho visto",
              "vedevamo"
            ],
            "answer": 0
          },
          {
            "q": "Da bambini ___ sempre in bicicletta fino al fiume.",
            "options": [
              "andavamo",
              "andavo",
              "siamo andati"
            ],
            "answer": 0
          },
          {
            "q": "___ le otto quando è arrivato il taxi.",
            "options": [
              "Erano",
              "Sono state",
              "Era"
            ],
            "answer": 0
          },
          {
            "q": "Ieri sera ti ___ tre volte ma non rispondevi.",
            "options": [
              "ho chiamato",
              "chiamavo",
              "hai chiamato"
            ],
            "answer": 0
          },
          {
            "q": "Improvvisamente ___ a piovere e siamo entrati in un bar.",
            "options": [
              "ha cominciato",
              "cominciava",
              "cominciavo"
            ],
            "answer": 0
          }
        ]
      },
      {
        "type": "Correzione",
        "fmt": "errore",
        "instr": "Individua e clicca dove c'è l'errore.",
        "items": [
          {
            "q": "Ieri finivo il libro che mi hai prestato la settimana scorsa.",
            "wrong": "finivo",
            "fix": "ho finito"
          },
          {
            "q": "Domenica scorsa io e mia sorella andavamo a trovare i nonni e siamo tornati tardi.",
            "wrong": "andavamo",
            "fix": "siamo andati"
          },
          {
            "q": "Nel 2025 visitavo Parigi una sola volta durante un viaggio di lavoro.",
            "wrong": "visitavo",
            "fix": "ho visitato"
          },
          {
            "q": "Stamattina la sveglia ha suonato alle sei e mi alzavo subito.",
            "wrong": "alzavo",
            "fix": "sono alzato"
          },
          {
            "q": "Quella mattina mio nonno leggeva tutto il giornale in mezz'ora.",
            "wrong": "leggeva",
            "fix": "ha letto"
          },
          {
            "q": "Sabato scorso mio zio ci portava al mare con la sua barca.",
            "wrong": "portava",
            "fix": "ha portato"
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
              "Era tardi quando arrivavamo."
            ],
            "answer": 0
          },
          {
            "q": "Mentre (leggere, io), qualcuno (bussare).",
            "options": [
              "Mentre leggevo, ha bussato qualcuno.",
              "Mentre ho letto, bussava qualcuno.",
              "Mentre ho letto, ha bussato qualcuno."
            ],
            "answer": 0
          },
          {
            "q": "Quella sera (fare) freddo, così (restare, noi) a casa.",
            "options": [
              "Quella sera faceva freddo, così siamo restati a casa.",
              "Quella sera ha fatto freddo, così restavamo a casa.",
              "Quella sera faceva freddo, così restavamo a casa."
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
            "q": "Mentre (cucinare, lei), (bruciarsi) un dito.",
            "options": [
              "Mentre cucinava, si è bruciata un dito.",
              "Mentre ha cucinato, si bruciava un dito.",
              "Mentre cucinava, si bruciava un dito."
            ],
            "answer": 0
          },
          {
            "q": "(nevicare) già quando (finire, noi) la partita.",
            "options": [
              "Nevicava già quando abbiamo finito la partita.",
              "Ha nevicato già quando finivamo la partita.",
              "Ha nevicato già quando abbiamo finito la partita."
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
      "B1 L9",
      "B2 L4"
    ],
    "title": "I superlativi assoluto e relativo",
    "exercises": [
      {
        "type": "Riempimento",
        "fmt": "fill",
        "instr": "Scrivi il superlativo assoluto in -ISSIMO.",
        "items": [
          {
            "q": "Per il colloquio Marta si è messa una giacca ___. (elegante)",
            "a": "elegantissima",
            "no": [
              "elegantissimo",
              "elegantissimi",
              "elegantissime"
            ]
          },
          {
            "q": "Il maglione che mi hai regalato è ___. (morbido)",
            "a": "morbidissimo",
            "no": [
              "morbidissima",
              "morbidissimi",
              "morbidissime"
            ]
          },
          {
            "q": "I commessi di quel negozio sono stati ___ con noi. (gentile)",
            "a": "gentilissimi",
            "no": [
              "gentilissimo",
              "gentilissima",
              "gentilissime"
            ]
          },
          {
            "q": "Dopo tre lavaggi le tende sono ancora ___. (pulito)",
            "a": "pulitissime",
            "no": [
              "pulitissimo",
              "pulitissima",
              "pulitissimi"
            ]
          },
          {
            "q": "Con due valigie in mano la salita fino all'albergo è stata ___. (faticoso)",
            "a": "faticosissima",
            "no": [
              "faticosissimo",
              "faticosissimi",
              "faticosissime"
            ]
          },
          {
            "q": "Il rumore dei lavori sotto casa è ___. (forte)",
            "a": "fortissimo",
            "no": [
              "fortissima",
              "fortissimi",
              "fortissime"
            ]
          }
        ]
      },
      {
        "type": "Riempimento",
        "fmt": "buco",
        "instr": "Scegli la forma corretta.",
        "items": [
          {
            "q": "La pizzeria di via Roma è ___ del quartiere.",
            "options": [
              "la più famosa",
              "molto famosa",
              "famosissima"
            ],
            "answer": 0
          },
          {
            "q": "Dopo otto ore di viaggio eravamo ___.",
            "options": [
              "davvero stanchi",
              "molto stanchissimi",
              "il più stanchi"
            ],
            "answer": 0
          },
          {
            "q": "Per me il lunedì è ___ della settimana.",
            "options": [
              "il giorno più pesante",
              "più pesante giorno",
              "un giorno più pesante"
            ],
            "answer": 0
          },
          {
            "q": "Abbiamo preso il treno delle sei perché è ___ della giornata.",
            "options": [
              "il meno affollato",
              "meno affollato",
              "poco affollato"
            ],
            "answer": 0
          },
          {
            "q": "Fra tutti i compiti di questa settimana, quello di matematica era ___.",
            "options": [
              "il più lungo",
              "il più lunghissimo",
              "il lunghissimo"
            ],
            "answer": 0
          },
          {
            "q": "Non ci credo, questa storia è ___.",
            "options": [
              "molto strana",
              "molto stranissima",
              "molto strano"
            ],
            "answer": 0
          }
        ]
      },
      {
        "type": "Correzione",
        "fmt": "errore",
        "instr": "Individua e clicca dove c'è l'errore.",
        "items": [
          {
            "q": "Da quando ha cambiato allenatore la squadra gioca migliore, però la difesa resta pessima.",
            "wrong": "migliore",
            "fix": "meglio"
          },
          {
            "q": "Speravo in un risultato migliore, invece ho preso un voto peggio del solito.",
            "wrong": "peggio",
            "fix": "peggiore"
          },
          {
            "q": "In quella pasticceria le torte sono le più migliori della città e anche i cornetti sono ottimi.",
            "wrong": "più",
            "fix": "(togliere)"
          },
          {
            "q": "Il costo finale dei lavori è maggiori del previsto, anche se il ritardo è stato minimo.",
            "wrong": "maggiori",
            "fix": "maggiore"
          },
          {
            "q": "Il servizio di questo hotel è pessimo dell'anno scorso, anche se la colazione resta ottima.",
            "wrong": "pessimo",
            "fix": "peggiore"
          },
          {
            "q": "Marco parla buono l'italiano, però scrive ancora male.",
            "wrong": "buono",
            "fix": "bene"
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
            "q": "In questo momento la maestra sta ___ i compiti. (correggere)",
            "a": "correggendo",
            "no": [
              "correggando",
              "corregendo"
            ]
          },
          {
            "q": "Sto ___ una mail al mio professore. (scrivere)",
            "a": "scrivendo",
            "no": [
              "scrivando"
            ]
          },
          {
            "q": "I bambini stanno ___ in giardino. (giocare)",
            "a": "giocando",
            "no": [
              "giocendo"
            ]
          },
          {
            "q": "Stiamo ___ il treno delle sei. (aspettare)",
            "a": "aspettando",
            "no": [
              "aspettendo"
            ]
          },
          {
            "q": "Solo adesso sto ___ il problema. (capire)",
            "a": "capendo",
            "no": [
              "capiscendo",
              "capando"
            ]
          },
          {
            "q": "L'acqua sta ___ nella pentola. (bollire)",
            "a": "bollendo",
            "no": [
              "bollando"
            ]
          }
        ]
      },
      {
        "type": "Correzione",
        "fmt": "errore",
        "instr": "Individua e clicca dove c'è l'errore.",
        "items": [
          {
            "q": "Gli operai sta pulendo il cortile davanti al portone.",
            "wrong": "sta",
            "fix": "stanno"
          },
          {
            "q": "Adesso sono parlando al telefono con l'amministratore.",
            "wrong": "sono",
            "fix": "sto"
          },
          {
            "q": "Finalmente sto capire perché la lavatrice perde acqua.",
            "wrong": "capire",
            "fix": "capendo"
          },
          {
            "q": "Il tecnico ha smontando il termosifone del salotto.",
            "wrong": "ha",
            "fix": "sta"
          },
          {
            "q": "Noi stanno aspettando il preventivo del muratore.",
            "wrong": "stanno",
            "fix": "stiamo"
          },
          {
            "q": "L'elettricista sta controllando l'impianto e voi stiamo guardando come lavora.",
            "wrong": "stiamo",
            "fix": "state"
          }
        ]
      },
      {
        "type": "Trasformazione",
        "fmt": "buco",
        "instr": "Trasforma il presente in azione in corso.",
        "items": [
          {
            "q": "Mangio adesso, poi esco. →",
            "options": [
              "Sto mangiando adesso, poi esco.",
              "Sono mangiando adesso, poi esco.",
              "Sto mangiato adesso, poi esco."
            ],
            "answer": 0
          },
          {
            "q": "Studiamo per l'esame di domani. →",
            "options": [
              "Stiamo studiando per l'esame di domani.",
              "Stiamo studiare per l'esame di domani.",
              "Stanno studiando per l'esame di domani."
            ],
            "answer": 0
          },
          {
            "q": "Nevica forte sulle montagne. →",
            "options": [
              "Sta nevicando forte sulle montagne.",
              "È nevicando forte sulle montagne.",
              "Sta nevicare forte sulle montagne."
            ],
            "answer": 0
          },
          {
            "q": "Leggete il contratto in ufficio? →",
            "options": [
              "State leggendo il contratto in ufficio?",
              "Siete leggendo il contratto in ufficio?",
              "Stanno leggendo il contratto in ufficio?"
            ],
            "answer": 0
          },
          {
            "q": "Dormo ancora alle dieci di mattina. →",
            "options": [
              "Sto dormendo ancora alle dieci di mattina.",
              "Sto dormito ancora alle dieci di mattina.",
              "Sto dormire ancora alle dieci di mattina."
            ],
            "answer": 0
          },
          {
            "q": "Gli operai lavorano sul tetto. →",
            "options": [
              "Gli operai stanno lavorando sul tetto.",
              "Gli operai hanno lavorando sul tetto.",
              "Gli operai stiamo lavorando sul tetto."
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
            "q": "Penso che Marta ___ troppo al telefono. (parlare)",
            "a": "parli",
            "no": [
              "parla",
              "parlano",
              "parliate"
            ]
          },
          {
            "q": "Spero che tu ___ la porta a chiave stasera. (chiudere)",
            "a": "chiuda",
            "no": [
              "chiudi",
              "chiude",
              "chiudiate"
            ]
          },
          {
            "q": "Temo che voi ___ senza di me. (partire)",
            "a": "partiate",
            "no": [
              "partite",
              "partono",
              "parta"
            ]
          },
          {
            "q": "È meglio che Luca ___ i compiti prima di uscire. (finire)",
            "a": "finisca",
            "no": [
              "finisce",
              "finisci",
              "finiscano"
            ]
          },
          {
            "q": "Dubito che i vicini ___ al citofono a quest'ora. (rispondere)",
            "a": "rispondano",
            "no": [
              "rispondono",
              "risponde",
              "rispondiate"
            ]
          },
          {
            "q": "Mi dispiace che voi ___ così lontano da noi. (abitare)",
            "a": "abitiate",
            "no": [
              "abitate",
              "abitano",
              "abiti"
            ]
          }
        ]
      },
      {
        "type": "Correzione",
        "fmt": "errore",
        "instr": "Individua e clicca dove c'è l'errore.",
        "items": [
          {
            "q": "So che Paolo sia in riunione, ma non credo che torni presto.",
            "wrong": "sia",
            "fix": "è"
          },
          {
            "q": "Sento che il vicino suona il piano ogni sera e ho paura che i condomini protestano.",
            "wrong": "protestano",
            "fix": "protestino"
          },
          {
            "q": "Preferisco che il corriere consegni il pacco in ufficio, dato che il portiere lo ritiri volentieri.",
            "wrong": "ritiri",
            "fix": "ritira"
          },
          {
            "q": "Credo che l'autobus passa ogni dieci minuti, ma so che la domenica cambia orario.",
            "wrong": "passa",
            "fix": "passi"
          },
          {
            "q": "Mi sembra che i prezzi crescano ogni mese e purtroppo è vero che gli stipendi restino uguali.",
            "wrong": "restino",
            "fix": "restano"
          },
          {
            "q": "Non sono sicuro che in agosto voi ricevete molti ordini, anche se vedo che il negozio apre tutti i giorni.",
            "wrong": "ricevete",
            "fix": "riceviate"
          }
        ]
      },
      {
        "type": "Trasformazione",
        "fmt": "buco",
        "instr": "In un testo scritto formale, scegli la trasformazione corretta.",
        "items": [
          {
            "q": "Il tecnico aspetta fuori dal portone. →",
            "options": [
              "Suppongo che il tecnico aspetta fuori dal portone.",
              "Suppongo che il tecnico aspetti fuori dal portone.",
              "Suppongo che il tecnico aspettino fuori dal portone."
            ],
            "answer": 1
          },
          {
            "q": "Tu scrivi troppe email il sabato. →",
            "options": [
              "È probabile che tu scriva troppe email il sabato.",
              "È probabile che tu scrivi troppe email il sabato.",
              "È probabile che tu scrivano troppe email il sabato."
            ],
            "answer": 0
          },
          {
            "q": "I bambini dormono con la luce accesa. →",
            "options": [
              "Credo che i bambini dormono con la luce accesa.",
              "Credo che i bambini dormino con la luce accesa.",
              "Credo che i bambini dormano con la luce accesa."
            ],
            "answer": 2
          },
          {
            "q": "Io leggo il contratto prima della firma. →",
            "options": [
              "È necessario che io leggo il contratto prima della firma.",
              "È necessario che io legga il contratto prima della firma.",
              "È necessario che io leggi il contratto prima della firma."
            ],
            "answer": 1
          },
          {
            "q": "Voi vendete i biglietti online. →",
            "options": [
              "Sono felice che voi vendiate i biglietti online.",
              "Sono felice che voi vendate i biglietti online.",
              "Sono felice che voi vendete i biglietti online."
            ],
            "answer": 0
          },
          {
            "q": "Lei guida sempre con prudenza. →",
            "options": [
              "Mi auguro che lei guidino sempre con prudenza.",
              "Mi auguro che lei guida sempre con prudenza.",
              "Mi auguro che lei guidi sempre con prudenza."
            ],
            "answer": 2
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
      "B1 L15",
      "B2 L9",
      "B2 L12"
    ],
    "title": "Il condizionale presente",
    "exercises": [
      {
        "type": "Riempimento",
        "fmt": "fill",
        "instr": "Scrivi il condizionale presente del verbo tra parentesi.",
        "items": [
          {
            "q": "Con questi prezzi noi non ___ mai in centro. (vivere)",
            "a": "vivremmo",
            "no": [
              "vivremo"
            ]
          },
          {
            "q": "Marta ___ in treno, ma il biglietto costa troppo. (venire)",
            "a": "verrebbe",
            "no": [
              "verebbe"
            ]
          },
          {
            "q": "Da vicino voi ___ subito la differenza fra le due case. (vedere)",
            "a": "vedreste",
            "no": [
              "vedrete"
            ]
          },
          {
            "q": "Al posto tuo, io ___ dal medico oggi stesso. (andare)",
            "a": "andrei",
            "no": [
              "anderei"
            ]
          },
          {
            "q": "Che cosa ___ tu al mio posto? (fare)",
            "a": "faresti",
            "no": [
              "farresti"
            ]
          },
          {
            "q": "I ragazzi ___ un altro gelato, ma la gelateria chiude adesso. (volere)",
            "a": "vorrebbero",
            "no": [
              "vorebbero"
            ]
          }
        ]
      },
      {
        "type": "Correzione",
        "fmt": "errore",
        "instr": "Individua e clicca dove c'è l'errore.",
        "items": [
          {
            "q": "Noi lavoraremmo anche di sabato, ma preferiremmo riposare.",
            "wrong": "lavoraremmo",
            "fix": "lavoreremmo"
          },
          {
            "q": "Domani chiederei il permesso e poi parterei presto.",
            "wrong": "parterei",
            "fix": "partirei"
          },
          {
            "q": "Chiameresti un taxi o prendiresti l'autobus?",
            "wrong": "prendiresti",
            "fix": "prenderesti"
          },
          {
            "q": "Loro aspetterebbe volentieri, ma con questo freddo nessuno resterebbe fuori.",
            "wrong": "aspetterebbe",
            "fix": "aspetterebbero"
          },
          {
            "q": "Se fossimo in vacanza dormiremmo fino a tardi e non saperemmo nemmeno che giorno è.",
            "wrong": "saperemmo",
            "fix": "sapremmo"
          },
          {
            "q": "Il tecnico finerebbe il lavoro in due giorni e chiederebbe un anticipo.",
            "wrong": "finerebbe",
            "fix": "finirebbe"
          }
        ]
      },
      {
        "type": "Trasformazione",
        "fmt": "buco",
        "instr": "Scegli la trasformazione corretta.",
        "items": [
          {
            "q": "Avete un tavolo vicino alla finestra? →",
            "options": [
              "Avreste un tavolo vicino alla finestra?",
              "Avereste un tavolo vicino alla finestra?",
              "Avrei un tavolo vicino alla finestra?"
            ],
            "answer": 0
          },
          {
            "q": "Mi può ripetere l'orario del volo? →",
            "options": [
              "Mi poterebbe ripetere l'orario del volo?",
              "Mi potrebbe ripetere l'orario del volo?",
              "Mi potrei ripetere l'orario del volo?"
            ],
            "answer": 1
          },
          {
            "q": "Devi cambiare le gomme prima dell'inverno. →",
            "options": [
              "Dovrei cambiare le gomme prima dell'inverno.",
              "Doveresti cambiare le gomme prima dell'inverno.",
              "Dovresti cambiare le gomme prima dell'inverno."
            ],
            "answer": 2
          },
          {
            "q": "È meglio pagare con la carta? →",
            "options": [
              "Sarei meglio pagare con la carta?",
              "Sarebbe meglio pagare con la carta?",
              "Esserebbe meglio pagare con la carta?"
            ],
            "answer": 1
          },
          {
            "q": "Quanto costa la consegna al piano? →",
            "options": [
              "Quanto costerebbe la consegna al piano?",
              "Quanto costerebbero la consegna al piano?",
              "Quanto costarebbe la consegna al piano?"
            ],
            "answer": 0
          },
          {
            "q": "Spedite anche all'estero? →",
            "options": [
              "Spediscereste anche all'estero?",
              "Spedirebbero anche all'estero?",
              "Spedireste anche all'estero?"
            ],
            "answer": 2
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
      "B1 L16",
      "B2 L13",
      "B2 L18",
      "C1 L2"
    ],
    "title": "Il congiuntivo passato",
    "exercises": [
      {
        "type": "Riempimento",
        "fmt": "fill",
        "instr": "Scrivi il congiuntivo passato del verbo tra parentesi.",
        "items": [
          {
            "q": "Penso che Marta ___ di casa prima delle sette. (uscire)",
            "a": "sia uscita",
            "no": [
              "è uscita"
            ]
          },
          {
            "q": "Dubito che voi ___ la ricevuta del pagamento. (conservare)",
            "a": "abbiate conservato",
            "no": [
              "avete conservato"
            ]
          },
          {
            "q": "Mi dispiace che i tuoi amici ___ senza salutare. (partire)",
            "a": "siano partiti",
            "no": [
              "sono partiti"
            ]
          },
          {
            "q": "Sospetto che tu ___ la password ai tuoi colleghi. (dare)",
            "a": "abbia dato",
            "no": [
              "hai dato"
            ]
          },
          {
            "q": "Mi sembra che il capo ___ per un ritardo di cinque minuti. (arrabbiarsi)",
            "a": "si sia arrabbiato",
            "no": [
              "si è arrabbiato"
            ]
          },
          {
            "q": "È possibile che io ___ la data dell'appuntamento. (sbagliare)",
            "a": "abbia sbagliato",
            "no": [
              "ho sbagliato"
            ]
          }
        ]
      },
      {
        "type": "Correzione",
        "fmt": "errore",
        "instr": "Individua e clicca dove c'è l'errore.",
        "items": [
          {
            "q": "Credo che Marco sia dormito male e che tu abbia fatto tardi.",
            "wrong": "sia",
            "fix": "abbia"
          },
          {
            "q": "Immagino che Paolo ha andato a casa presto e che voi abbiate ricevuto il messaggio.",
            "wrong": "ha",
            "fix": "sia"
          },
          {
            "q": "Dubito che l'avvocato abbia controllato le clausole e che voi avete letto il contratto.",
            "wrong": "avete",
            "fix": "abbiate"
          },
          {
            "q": "È strano che loro sono rientrati così tardi e che nessuno abbia sentito la porta.",
            "wrong": "sono",
            "fix": "siano"
          },
          {
            "q": "Penso che il guasto sia durato tutta la notte e che i vicini abbia chiamato il tecnico.",
            "wrong": "abbia",
            "fix": "abbiano"
          },
          {
            "q": "Sospetto che il portiere abbia firmato la ricevuta e che il pacco ha arrivato ieri.",
            "wrong": "ha",
            "fix": "sia"
          }
        ]
      },
      {
        "type": "Trasformazione",
        "fmt": "buco",
        "instr": "Scegli la forma del congiuntivo adatta al tempo della frase.",
        "items": [
          {
            "q": "Non credo che Sara ___ il conto: era senza portafoglio.",
            "options": [
              "abbia pagato",
              "paghi",
              "ha pagato"
            ],
            "answer": 0
          },
          {
            "q": "Non mi pare che adesso ___ ancora.",
            "options": [
              "sia piovuto",
              "piove",
              "piova"
            ],
            "answer": 2
          },
          {
            "q": "È strano che il riscaldamento ___ solo di notte.",
            "options": [
              "funzioni",
              "abbia funzionato",
              "funziona"
            ],
            "answer": 0
          },
          {
            "q": "Mi stupisce che ieri nessuno ___ la finestra del bagno.",
            "options": [
              "apra",
              "abbia aperto",
              "ha aperto"
            ],
            "answer": 1
          },
          {
            "q": "Sono contento che ieri l'idraulico ___ il problema in mezz'ora.",
            "options": [
              "risolva",
              "ha risolto",
              "abbia risolto"
            ],
            "answer": 2
          },
          {
            "q": "Temo che questo cappotto ___ troppo per le mie tasche.",
            "options": [
              "sia costato",
              "costi",
              "costa"
            ],
            "answer": 1
          }
        ]
      }
    ]
  },
  {
    "lvl": "b1",
    "lez": [
      "B1 L17"
    ],
    "title": "Stare per + infinito",
    "exercises": [
      {
        "type": "Riempimento",
        "fmt": "fill",
        "instr": "Completa con la forma corretta di «stare».",
        "items": [
          {
            "q": "Il treno ___ per partire: sbrigati!",
            "a": "sta",
            "no": [
              "è"
            ]
          },
          {
            "q": "Ieri io ___ per addormentarmi quando è saltata la corrente.",
            "a": "stavo",
            "no": [
              "ero"
            ]
          },
          {
            "q": "Noi ___ per firmare il contratto: manca solo la tua copia.",
            "a": "stiamo",
            "no": [
              "siamo"
            ]
          },
          {
            "q": "I nonni ___ per spegnere la televisione quando ha squillato il telefono.",
            "a": "stavano",
            "no": [
              "erano"
            ]
          },
          {
            "q": "Voi ___ per atterrare o siete ancora in volo?",
            "a": "state",
            "no": [
              "siete",
              "stiate"
            ]
          },
          {
            "q": "Tu ___ per chiedermi qualcosa, poi ti sei fermato.",
            "a": "stavi",
            "no": [
              "eri"
            ]
          }
        ]
      },
      {
        "type": "Correzione",
        "fmt": "errore",
        "instr": "Individua e clicca dove c'è l'errore.",
        "items": [
          {
            "q": "Lo spettacolo è per iniziare e gli spettatori stanno per entrare.",
            "wrong": "è",
            "fix": "sta"
          },
          {
            "q": "Io preparo la cena e mia sorella sta per finendo i compiti.",
            "wrong": "finendo",
            "fix": "finire"
          },
          {
            "q": "I clienti stanno per uscire e il locale sta di chiudere.",
            "wrong": "di",
            "fix": "per"
          },
          {
            "q": "Guarda il cielo: il sole sta per tramonta.",
            "wrong": "tramonta",
            "fix": "tramontare"
          },
          {
            "q": "Ho fretta perché i vostri amici sta per arrivare da Milano.",
            "wrong": "sta",
            "fix": "stanno"
          },
          {
            "q": "La sfilata era per passare, poi è scoppiato il temporale.",
            "wrong": "era",
            "fix": "stava"
          }
        ]
      },
      {
        "type": "Trasformazione",
        "fmt": "buco",
        "instr": "Scegli la forma corretta.",
        "items": [
          {
            "q": "Andiamo a casa: il vento ___ da un momento all'altro.",
            "options": [
              "sta per alzarsi",
              "sta alzandosi",
              "stava per alzarsi"
            ],
            "answer": 0
          },
          {
            "q": "Non disturbarmi: in questo momento ___ con un cliente.",
            "options": [
              "sto parlando",
              "sto per parlare",
              "sto per parlando"
            ],
            "answer": 0
          },
          {
            "q": "Allacciate le cinture: l'aereo ___.",
            "options": [
              "sta per decollare",
              "sta decollando",
              "stava decollando"
            ],
            "answer": 0
          },
          {
            "q": "In questo momento i tecnici ___ l'impianto elettrico.",
            "options": [
              "stanno controllando",
              "stanno per controllare",
              "sta controllando"
            ],
            "answer": 0
          },
          {
            "q": "Non ho ancora finito: ___ la risposta in questo momento.",
            "options": [
              "sto scrivendo",
              "sto per scrivere",
              "stavo scrivendo"
            ],
            "answer": 0
          },
          {
            "q": "L'acqua è quasi a cento gradi: ___ tra pochi secondi.",
            "options": [
              "sta per bollire",
              "sta bollendo",
              "stava per bollire"
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
      "B1 L18",
      "B2 L17"
    ],
    "title": "I connettivi logici",
    "exercises": [
      {
        "type": "Riempimento",
        "fmt": "buco",
        "instr": "Scegli il connettivo adatto.",
        "items": [
          {
            "q": "La stampante non aveva più inchiostro, ___ ho mandato il file in copisteria.",
            "options": [
              "quindi",
              "invece",
              "infatti"
            ],
            "answer": 0
          },
          {
            "q": "___ la palestra ha chiuso senza preavviso, ho disdetto l'abbonamento.",
            "options": [
              "Siccome",
              "Perciò",
              "Inoltre"
            ],
            "answer": 0
          },
          {
            "q": "Il sito non funzionava, ___ ho telefonato all'assistenza.",
            "options": [
              "di conseguenza",
              "invece",
              "cioè"
            ],
            "answer": 0
          },
          {
            "q": "Non ho aperto l'allegato ___ il mittente era sconosciuto.",
            "options": [
              "perché",
              "quindi",
              "invece"
            ],
            "answer": 0
          },
          {
            "q": "___ il pacco è in ritardo, chiedo un rimborso.",
            "options": [
              "Dato che",
              "Tuttavia",
              "In particolare"
            ],
            "answer": 0
          },
          {
            "q": "L'ufficio è chiuso per ferie, ___ le pratiche restano ferme.",
            "options": [
              "perciò",
              "cioè",
              "poi"
            ],
            "answer": 0
          }
        ]
      },
      {
        "type": "Correzione",
        "fmt": "errore",
        "instr": "Individua e clicca dove c'è l'errore.",
        "items": [
          {
            "q": "Il computer si è infettato con un virus, invece l'ho portato dal tecnico.",
            "wrong": "invece",
            "fix": "quindi"
          },
          {
            "q": "Ho chiuso la pagina quindi la connessione cadeva ogni due minuti.",
            "wrong": "quindi",
            "fix": "perché"
          },
          {
            "q": "Il traghetto non è partito poi il mare era troppo mosso.",
            "wrong": "poi",
            "fix": "perché"
          },
          {
            "q": "Marta prende sempre il treno, io infatti vado in ufficio in bici.",
            "wrong": "infatti",
            "fix": "invece"
          },
          {
            "q": "Siccome ho molto tempo, non riesco a finire la relazione entro stasera.",
            "wrong": "Siccome",
            "fix": "Anche se"
          },
          {
            "q": "Innanzitutto compila il modulo online, cioè carica la ricevuta sul sito del ministero.",
            "wrong": "cioè",
            "fix": "poi"
          }
        ]
      },
      {
        "type": "Trasformazione",
        "fmt": "buco",
        "instr": "Unisci le due frasi con il connettivo adatto.",
        "items": [
          {
            "q": "Il ristorante era pieno. Abbiamo prenotato per giovedì.",
            "options": [
              "Il ristorante era pieno, perciò abbiamo prenotato per giovedì.",
              "Il ristorante era pieno, invece abbiamo prenotato per giovedì.",
              "Il ristorante era pieno, cioè abbiamo prenotato per giovedì."
            ],
            "answer": 0
          },
          {
            "q": "Mio fratello cucina ogni sera. Io mangio quasi sempre fuori.",
            "options": [
              "Mio fratello cucina ogni sera, io invece mangio quasi sempre fuori.",
              "Mio fratello cucina ogni sera, io infatti mangio quasi sempre fuori.",
              "Mio fratello cucina ogni sera, io inoltre mangio quasi sempre fuori."
            ],
            "answer": 0
          },
          {
            "q": "Sciogli il lievito nel latte. Aggiungi la farina. Lascia riposare l'impasto.",
            "options": [
              "Prima di tutto sciogli il lievito nel latte, poi aggiungi la farina, infine lascia riposare l'impasto.",
              "Infine sciogli il lievito nel latte, poi aggiungi la farina, prima di tutto lascia riposare l'impasto.",
              "Poi sciogli il lievito nel latte, prima di tutto aggiungi la farina, infine lascia riposare l'impasto."
            ],
            "answer": 0
          },
          {
            "q": "Il museo è chiuso il lunedì. Non c'era nessun cartello all'ingresso.",
            "options": [
              "Il museo è chiuso il lunedì, però non c'era nessun cartello all'ingresso.",
              "Il museo è chiuso il lunedì, infatti non c'era nessun cartello all'ingresso.",
              "Il museo è chiuso il lunedì, quindi non c'era nessun cartello all'ingresso."
            ],
            "answer": 0
          },
          {
            "q": "Il dentista ha rimandato l'appuntamento. Ha cambiato lo studio.",
            "options": [
              "Non solo il dentista ha rimandato l'appuntamento, ma ha anche cambiato lo studio.",
              "Il dentista ha rimandato l'appuntamento, cioè ha cambiato lo studio.",
              "Il dentista ha rimandato l'appuntamento, però ha cambiato lo studio."
            ],
            "answer": 0
          },
          {
            "q": "Il candidato conosceva bene l'azienda. Aveva letto tutti i bilanci.",
            "options": [
              "Il candidato conosceva bene l'azienda: infatti aveva letto tutti i bilanci.",
              "Il candidato conosceva bene l'azienda: però aveva letto tutti i bilanci.",
              "Il candidato conosceva bene l'azienda: prima di tutto aveva letto tutti i bilanci."
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
      "B1 L23"
    ],
    "title": "L'imperativo con i pronomi",
    "exercises": [
      {
        "type": "Riempimento",
        "fmt": "fill",
        "instr": "Riscrivi l'imperativo con il pronome attaccato.",
        "items": [
          {
            "q": "Chiama il tecnico. → ___ prima di mezzogiorno.",
            "a": "Chiamalo",
            "no": [
              "Chiamarlo"
            ]
          },
          {
            "q": "Porta i documenti. → ___ allo sportello domani.",
            "a": "Portali",
            "no": [
              "Portarli"
            ]
          },
          {
            "q": "Finisci la relazione. → ___ entro venerdì.",
            "a": "Finiscila",
            "no": [
              "Finirla",
              "Finila"
            ]
          },
          {
            "q": "Spegni le luci. → ___ prima di uscire.",
            "a": "Spegnile",
            "no": [
              "Spegnerle"
            ]
          },
          {
            "q": "Ordina delle penne. → ___ almeno venti.",
            "a": "Ordinane",
            "no": [
              "Ordinarne"
            ]
          },
          {
            "q": "Restituisci il libro. → ___ entro lunedì.",
            "a": "Restituiscilo",
            "no": [
              "Restituirlo",
              "Restituilo"
            ]
          }
        ]
      },
      {
        "type": "Correzione",
        "fmt": "errore",
        "instr": "Individua e clicca dove c'è l'errore.",
        "items": [
          {
            "q": "Scegli le patate, sbucciala bene e mettile in padella.",
            "wrong": "sbucciala",
            "fix": "sbucciale"
          },
          {
            "q": "Affetta il pane, servili con l'olio e coprilo con un panno.",
            "wrong": "servili",
            "fix": "servilo"
          },
          {
            "q": "Prova la pasta, scolala subito e condiscilo con il burro.",
            "wrong": "condiscilo",
            "fix": "condiscila"
          },
          {
            "q": "Metti il latte in un pentolino, scaldale piano e assaggialo prima di servire.",
            "wrong": "scaldale",
            "fix": "scaldalo"
          },
          {
            "q": "Trita le cipolle, girali spesso in padella e toglile dal fuoco dopo dieci minuti.",
            "wrong": "girali",
            "fix": "girale"
          },
          {
            "q": "Apri il vino, versali nei bicchieri e offrine anche a Marco.",
            "wrong": "versali",
            "fix": "versalo"
          }
        ]
      },
      {
        "type": "Trasformazione",
        "fmt": "buco",
        "instr": "Scegli la forma corretta.",
        "items": [
          {
            "q": "Ci sono ancora dei biscotti: ___ solo due.",
            "options": [
              "prendine",
              "prendili",
              "prendilo"
            ],
            "answer": 0
          },
          {
            "q": "Il pacco è arrivato: ___ subito.",
            "options": [
              "aprilo",
              "aprine",
              "aprili"
            ],
            "answer": 0
          },
          {
            "q": "Abbiamo troppe sedie in sala: ___ tre in magazzino.",
            "options": [
              "spostane",
              "spostale",
              "spostalo"
            ],
            "answer": 0
          },
          {
            "q": "Le fotocopie sono pronte: ___ tutte in sala riunioni.",
            "options": [
              "lasciale",
              "lasciane",
              "lasciali"
            ],
            "answer": 0
          },
          {
            "q": "Se hai bisogno di monete, ___ un po' alla cassa.",
            "options": [
              "chiedine",
              "chiedile",
              "chiedilo"
            ],
            "answer": 0
          },
          {
            "q": "Il contratto è sul tavolo: ___ con attenzione.",
            "options": [
              "leggilo",
              "leggine",
              "leggili"
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
    "title": "I pronomi relativi «che», «cui» e «il cui»",
    "exercises": [
      {
        "type": "Riempimento",
        "fmt": "buco",
        "instr": "Scegli il pronome relativo corretto.",
        "items": [
          {
            "q": "Il collega ___ mi ha sostituito è in ferie.",
            "options": [
              "che",
              "a cui",
              "con cui"
            ],
            "answer": 0
          },
          {
            "q": "L'ospedale ___ mi hanno portato è fuori città.",
            "options": [
              "in cui",
              "che",
              "di cui"
            ],
            "answer": 0
          },
          {
            "q": "La ditta ___ ho ordinato il materiale non risponde.",
            "options": [
              "a cui",
              "che",
              "di cui"
            ],
            "answer": 0
          },
          {
            "q": "Il ponte ___ passa il tram è chiuso.",
            "options": [
              "su cui",
              "che",
              "di cui"
            ],
            "answer": 0
          },
          {
            "q": "I documenti ___ hai firmato ieri sono già in archivio.",
            "options": [
              "che",
              "a cui",
              "di cui"
            ],
            "answer": 0
          },
          {
            "q": "La riunione ___ siamo usciti è durata tre ore.",
            "options": [
              "da cui",
              "che",
              "con cui"
            ],
            "answer": 0
          }
        ]
      },
      {
        "type": "Correzione",
        "fmt": "errore",
        "instr": "Individua e clicca dove c'è l'errore.",
        "items": [
          {
            "q": "Ho conosciuto un ingegnere il cui azienda produce turbine per navi.",
            "wrong": "il",
            "fix": "la"
          },
          {
            "q": "Da settembre lavoro in una scuola la cui insegnanti vengono da mezza provincia.",
            "wrong": "la",
            "fix": "le"
          },
          {
            "q": "Abbiamo un vicino il cui cani abbaiano tutta la notte.",
            "wrong": "il",
            "fix": "i"
          },
          {
            "q": "Ho comprato un quadro cui cornice era già rovinata.",
            "wrong": "cui",
            "fix": "la cui"
          },
          {
            "q": "Ho una collega la cui figli giocano a rugby.",
            "wrong": "la",
            "fix": "i"
          },
          {
            "q": "In vacanza ho letto un romanzo cui autore è sconosciuto.",
            "wrong": "cui",
            "fix": "il cui"
          }
        ]
      },
      {
        "type": "Trasformazione",
        "fmt": "buco",
        "instr": "Unisci le due frasi con il pronome relativo adatto.",
        "items": [
          {
            "q": "Ho un coinquilino. Gioco a tennis con lui.",
            "options": [
              "Ho un coinquilino con cui gioco a tennis.",
              "Ho un coinquilino che gioco a tennis.",
              "Ho un coinquilino cui gioco a tennis."
            ],
            "answer": 0
          },
          {
            "q": "Questa è la scuola. Mio figlio va in questa scuola.",
            "options": [
              "Questa è la scuola in cui va mio figlio.",
              "Questa è la scuola cui va mio figlio.",
              "Questa è la scuola di cui va mio figlio."
            ],
            "answer": 0
          },
          {
            "q": "Ecco il certificato. Ti avevo scritto del certificato.",
            "options": [
              "Ecco il certificato di cui ti avevo scritto.",
              "Ecco il certificato che ti avevo scritto.",
              "Ecco il certificato a cui ti avevo scritto."
            ],
            "answer": 0
          },
          {
            "q": "Il corso è finito. Mi ero iscritto al corso.",
            "options": [
              "Il corso a cui mi ero iscritto è finito.",
              "Il corso che mi ero iscritto è finito.",
              "Il corso al che mi ero iscritto è finito."
            ],
            "answer": 0
          },
          {
            "q": "Ho un cugino. Suo fratello lavora in Germania.",
            "options": [
              "Ho un cugino il cui fratello lavora in Germania.",
              "Ho un cugino che suo fratello lavora in Germania.",
              "Ho un cugino cui fratello lavora in Germania."
            ],
            "answer": 0
          },
          {
            "q": "Ho perso l'ombrello. Mi avevi regalato l'ombrello a Natale.",
            "options": [
              "Ho perso l'ombrello che mi avevi regalato a Natale.",
              "Ho perso l'ombrello che me lo avevi regalato a Natale.",
              "Ho perso l'ombrello di cui mi avevi regalato a Natale."
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
        "instr": "Scegli il pronome corretto.",
        "items": [
          {
            "q": "Aspetto Elena da mezz'ora e ___ vedo arrivare solo adesso.",
            "options": [
              "la",
              "le",
              "gli"
            ],
            "answer": 0
          },
          {
            "q": "Chiara ha bisogno di un consiglio: ___ rispondo domani.",
            "options": [
              "le",
              "la",
              "lo"
            ],
            "answer": 0
          },
          {
            "q": "Ho fatto vedere la giacca a Marco, ma non ___ piace per niente.",
            "options": [
              "gli",
              "lo",
              "la"
            ],
            "answer": 0
          },
          {
            "q": "Il tuo amico ___ chiamo da tre giorni, ma non risponde.",
            "options": [
              "lo",
              "gli",
              "le"
            ],
            "answer": 0
          },
          {
            "q": "Ai clienti ___ sembra tutto troppo caro.",
            "options": [
              "gli",
              "li",
              "le"
            ],
            "answer": 0
          },
          {
            "q": "Le tue colleghe ___ conosco da anni.",
            "options": [
              "le",
              "gli",
              "loro"
            ],
            "answer": 0
          }
        ]
      },
      {
        "type": "Correzione",
        "fmt": "errore",
        "instr": "Individua e clicca dove c'è l'errore.",
        "items": [
          {
            "q": "Le ho promessa una risposta entro sera, ma Valeria aspetta ancora.",
            "wrong": "promessa",
            "fix": "promesso"
          },
          {
            "q": "I ragazzi erano in ritardo e gli abbiamo telefonati due volte.",
            "wrong": "telefonati",
            "fix": "telefonato"
          },
          {
            "q": "Marta è tornata ieri e le ho scritta una mail lunghissima.",
            "wrong": "scritta",
            "fix": "scritto"
          },
          {
            "q": "Quando ho visto Giulia in corridoio davanti all'ascensore, le ho sorrisa senza parlare.",
            "wrong": "sorrisa",
            "fix": "sorriso"
          },
          {
            "q": "Ai vicini di sotto gli abbiamo parlate ieri sera.",
            "wrong": "parlate",
            "fix": "parlato"
          },
          {
            "q": "Ieri gli ho lasciate un messaggio in segreteria, ma il direttore non ha richiamato.",
            "wrong": "lasciate",
            "fix": "lasciato"
          }
        ]
      },
      {
        "type": "Trasformazione",
        "fmt": "buco",
        "instr": "Sostituisci con il pronome indiretto.",
        "items": [
          {
            "q": "Prima di ___, controlla bene l'indirizzo.",
            "options": [
              "scrivergli",
              "gli scrivere",
              "scriveregli"
            ],
            "answer": 0
          },
          {
            "q": "Non ho tempo di ___ adesso.",
            "options": [
              "rispondergli",
              "gli rispondere",
              "risponderegli"
            ],
            "answer": 0
          },
          {
            "q": "Voglio ___ la verità prima che la scopra da sola.",
            "options": [
              "dirle",
              "le dire",
              "direle"
            ],
            "answer": 0
          },
          {
            "q": "___ subito che l'incontro è rimandato!",
            "options": [
              "Digli",
              "Gli di'",
              "Di' gli"
            ],
            "answer": 0
          },
          {
            "q": "___ se ha ancora la ricevuta del bonifico!",
            "options": [
              "Chiedile",
              "Le chiedi",
              "Chiedi le"
            ],
            "answer": 0
          },
          {
            "q": "___ appena arrivi a casa.",
            "options": [
              "Telefonami",
              "Mi telefona",
              "Telefona mi"
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
        "instr": "Riscrivi con i pronomi combinati, aggiungendo il verbo dove manca.",
        "items": [
          {
            "q": "Sofia mi ha chiesto le chiavi. → ___ restituisco stasera.",
            "a": "Gliele",
            "no": [
              "Gli le"
            ]
          },
          {
            "q": "Hai bisogno dei documenti? → ___ porto domani.",
            "a": "Te li",
            "no": [
              "Ti li"
            ]
          },
          {
            "q": "Il proprietario deve mandarci le bollette. → ___ manda ogni due mesi.",
            "a": "Ce le",
            "no": [
              "Ci le"
            ]
          },
          {
            "q": "Non riesco a salire le scale con la spesa. → ___ tu, per favore!",
            "a": "Portamela",
            "no": [
              "Portamila"
            ]
          },
          {
            "q": "Luca non sa quanto costa. → ___ tu!",
            "a": "Diglielo",
            "no": [
              "Digli lo"
            ]
          },
          {
            "q": "Hai ancora il mio casco. → ___ domani!",
            "a": "Dammelo|Portamelo|Restituiscimelo|Riportamelo",
            "no": [
              "Dammilo",
              "Portamilo",
              "Da' me lo",
              "Porta me lo"
            ]
          }
        ]
      },
      {
        "type": "Correzione",
        "fmt": "errore",
        "instr": "Individua e clicca dove c'è l'errore.",
        "items": [
          {
            "q": "Il caricatore è tuo, quindi domani ti lo riporto.",
            "wrong": "ti",
            "fix": "te"
          },
          {
            "q": "Le fotocopie sono pronte, ma la segreteria vi le consegna domani.",
            "wrong": "vi",
            "fix": "ve"
          },
          {
            "q": "Sofia voleva la ricetta e gliel'ho scritto su un foglio.",
            "wrong": "scritto",
            "fix": "scritta"
          },
          {
            "q": "I coinquilini avevano le mie chiavi e me le hanno restituito solo ieri.",
            "wrong": "restituito",
            "fix": "restituite"
          },
          {
            "q": "I biglietti sono per voi: domani ve gli porto in ufficio.",
            "wrong": "gli",
            "fix": "li"
          },
          {
            "q": "Il tecnico voleva le foto del guasto e glielo ho mandate ieri sera.",
            "wrong": "glielo",
            "fix": "gliele"
          }
        ]
      },
      {
        "type": "Composizione",
        "fmt": "ordina",
        "instr": "Riscrivi la frase con i pronomi combinati: clicca le parole nell'ordine giusto. Alcune non servono.",
        "items": [
          {
            "q": "Il vicino ha il trapano e a me serve.",
            "sol": [
              "me",
              "lo",
              "presta"
            ],
            "extra": [
              "mi",
              "gli"
            ]
          },
          {
            "q": "Vuoi le foto della festa?",
            "sol": [
              "te",
              "le",
              "mando"
            ],
            "extra": [
              "ti",
              "li"
            ]
          },
          {
            "q": "Marco voleva vedere il contratto.",
            "sol": [
              "gliel'ho",
              "mostrato"
            ],
            "extra": [
              "glielo",
              "gli"
            ]
          },
          {
            "q": "Non abbiamo ancora ricevuto il conteggio delle spese.",
            "sol": [
              "ce",
              "lo",
              "mandano"
            ],
            "extra": [
              "ci",
              "la"
            ]
          },
          {
            "q": "Volete la fattura per email?",
            "sol": [
              "ve",
              "la",
              "spediamo"
            ],
            "extra": [
              "vi",
              "lo"
            ]
          },
          {
            "q": "Questi bicchieri erano di mia nonna.",
            "sol": [
              "me",
              "li",
              "ha",
              "regalati"
            ],
            "extra": [
              "mi",
              "le"
            ]
          }
        ]
      }
    ]
  },
  {
    "lvl": "b1",
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
            "q": "La borsa l'ho ___ in treno. (dimenticare)",
            "a": "dimenticata",
            "no": [
              "dimenticato",
              "dimenticate",
              "dimenticati"
            ]
          },
          {
            "q": "I regali li ho ___ ieri. (incartare)",
            "a": "incartati",
            "no": [
              "incartato",
              "incartate",
              "incartata"
            ]
          },
          {
            "q": "Le camicie le ho ___ in lavanderia. (portare)",
            "a": "portate",
            "no": [
              "portato",
              "portati",
              "portata"
            ]
          },
          {
            "q": "Le mele le ho ___ al mercato. (scegliere)",
            "a": "scelte",
            "no": [
              "scelto",
              "scelti",
              "scelta"
            ]
          },
          {
            "q": "I passaporti li ho ___ nel cassetto. (mettere)",
            "a": "messi",
            "no": [
              "messo",
              "messe",
              "messa"
            ]
          },
          {
            "q": "La finestra l'ho ___ io. (rompere)",
            "a": "rotta",
            "no": [
              "rotto",
              "rotte",
              "rotti"
            ]
          }
        ]
      },
      {
        "type": "Correzione",
        "fmt": "errore",
        "instr": "Individua e clicca dove c'è l'errore.",
        "items": [
          {
            "q": "Quel maglione l'ho comprata in saldo l'inverno scorso.",
            "wrong": "comprata",
            "fix": "comprato"
          },
          {
            "q": "Mia sorella cercava la ricevuta dell'affitto e l'ha trovato in un cassetto.",
            "wrong": "trovato",
            "fix": "trovata"
          },
          {
            "q": "Le lenzuola le ho steso ieri mattina al sole.",
            "wrong": "steso",
            "fix": "stese"
          },
          {
            "q": "Ieri ho firmate tutte le pagine del contratto.",
            "wrong": "firmate",
            "fix": "firmato"
          },
          {
            "q": "Prima di uscire di casa ho spente le luci del corridoio.",
            "wrong": "spente",
            "fix": "spento"
          },
          {
            "q": "Gli occhiali nuovi li ho perso al mare la settimana scorsa.",
            "wrong": "perso",
            "fix": "persi"
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
              "La ho stirata."
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
            "q": "Ho venduto la bici. →",
            "options": [
              "L'ho venduta.",
              "L'ho venduto.",
              "La ho venduta."
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
            "q": "Ho consegnato la domanda in segreteria. →",
            "options": [
              "L'ho consegnata in segreteria.",
              "L'ho consegnato in segreteria.",
              "La ho consegnata in segreteria."
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
      "B1 L22",
      "B2 L8"
    ],
    "title": "I verbi pronominali (andarsene, farcela, cavarsela)",
    "exercises": [
      {
        "type": "Composizione",
        "fmt": "ordina",
        "instr": "Riscrivi la frase con il verbo pronominale: clicca le parole nell'ordine giusto. Alcune non servono.",
        "items": [
          {
            "q": "È tardi e decido di lasciare la riunione.",
            "sol": [
              "me",
              "ne",
              "vado"
            ],
            "extra": [
              "mi",
              "ci"
            ]
          },
          {
            "q": "Voglio sapere se riesci a spostare il divano da solo.",
            "sol": [
              "ce",
              "la",
              "fai"
            ],
            "extra": [
              "ci",
              "lo"
            ]
          },
          {
            "q": "I vicini lasciano il condominio alla fine del mese.",
            "sol": [
              "se",
              "ne",
              "vanno"
            ],
            "extra": [
              "si",
              "ce"
            ]
          },
          {
            "q": "Con i turni di notte i miei colleghi sono troppo stanchi.",
            "sol": [
              "non",
              "ce",
              "la",
              "fanno"
            ],
            "extra": [
              "ci",
              "lo"
            ]
          },
          {
            "q": "In montagna noi due ci arrangiamo senza problemi.",
            "sol": [
              "ce",
              "la",
              "caviamo"
            ],
            "extra": [
              "ci",
              "le"
            ]
          },
          {
            "q": "Voi due riuscite a gestire il negozio da soli?",
            "sol": [
              "ve",
              "la",
              "cavate"
            ],
            "extra": [
              "vi",
              "lo"
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
            "q": "Dopo il secondo tempo ___ perché faceva troppo freddo.",
            "options": [
              "ce ne siamo andati",
              "ce ne siamo andata",
              "ce ne abbiamo andati"
            ],
            "answer": 0
          },
          {
            "q": "Il trasloco è durato tutto il giorno, ma alla fine ___.",
            "options": [
              "ce l'abbiamo fatta",
              "ce l'abbiamo fatti",
              "ce l'abbiamo fatto"
            ],
            "answer": 0
          },
          {
            "q": "I ragazzi hanno montato l'armadio da soli e ___ benissimo.",
            "options": [
              "se la sono cavata",
              "se la sono cavati",
              "se l'hanno cavata"
            ],
            "answer": 0
          },
          {
            "q": "Marta era stanchissima e ___ senza aspettare il dolce.",
            "options": [
              "se n'è andata",
              "se n'è andato",
              "se ne ha andata"
            ],
            "answer": 0
          },
          {
            "q": "La salita era ripida, ma ___ senza fermarmi.",
            "options": [
              "ce l'ho fatta",
              "ce l'ho fatto",
              "ce la sono fatta"
            ],
            "answer": 0
          },
          {
            "q": "Non avevamo la cartina, però ___ lo stesso.",
            "options": [
              "ce la siamo cavata",
              "ce la siamo cavati",
              "ce l'abbiamo cavata"
            ],
            "answer": 0
          }
        ]
      },
      {
        "type": "Correzione",
        "fmt": "errore",
        "instr": "Individua e clicca dove c'è l'errore.",
        "items": [
          {
            "q": "Questo turno è troppo pesante e non ci la faccio ad arrivare a mezzanotte.",
            "wrong": "ci",
            "fix": "ce"
          },
          {
            "q": "Il nuovo commesso si la cava benissimo con i clienti difficili.",
            "wrong": "si",
            "fix": "se"
          },
          {
            "q": "Allo sportello ti la cavi meglio tu, io mi innervosisco subito.",
            "wrong": "ti",
            "fix": "te"
          },
          {
            "q": "Dopo tre tentativi loro ci l'hanno fatta a montare la tenda.",
            "wrong": "ci",
            "fix": "ce"
          },
          {
            "q": "Appena è finito il temporale vi ne siete andati di corsa.",
            "wrong": "vi",
            "fix": "ve"
          },
          {
            "q": "Non sono bravo con le lingue, ma con i numeri mi la cavo.",
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
            "q": "La domenica ___ tardi e non si fa colazione.",
            "options": [
              "ci si alza",
              "si alza",
              "si alzano"
            ],
            "answer": 0
          },
          {
            "q": "Con questo caldo ___ molto male.",
            "options": [
              "si dorme",
              "ci si dorme",
              "si dormono"
            ],
            "answer": 0
          },
          {
            "q": "Prima di un colloquio ___ sempre un po'.",
            "options": [
              "ci si agita",
              "si agita",
              "si agitano"
            ],
            "answer": 0
          },
          {
            "q": "D'estate ___ molto più tardi.",
            "options": [
              "si cena",
              "ci si cena",
              "si cenano"
            ],
            "answer": 0
          },
          {
            "q": "Con i colleghi nuovi ___ in fretta.",
            "options": [
              "ci si abitua",
              "si abitua",
              "si abituano"
            ],
            "answer": 0
          },
          {
            "q": "Nei giorni di sciopero ___ per ore.",
            "options": [
              "si cammina",
              "ci si cammina",
              "si camminano"
            ],
            "answer": 0
          }
        ]
      },
      {
        "type": "Correzione",
        "fmt": "errore",
        "instr": "Individua e clicca dove c'è l'errore.",
        "items": [
          {
            "q": "Ieri sera si è tornato tardi e stamattina nessuno era in forma.",
            "wrong": "tornato",
            "fix": "tornati"
          },
          {
            "q": "Alla festa si ha mangiato troppo e si è bevuto poco.",
            "wrong": "ha",
            "fix": "è"
          },
          {
            "q": "In quella riunione si ha discusso per tre ore senza decidere niente.",
            "wrong": "ha",
            "fix": "è"
          },
          {
            "q": "Domenica ci si è alzato alle sei per prendere il traghetto.",
            "wrong": "alzato",
            "fix": "alzati"
          },
          {
            "q": "Alla stazione si è aspettati per due ore sotto la pioggia.",
            "wrong": "aspettati",
            "fix": "aspettato"
          },
          {
            "q": "Quest'anno si è stato in vacanza due volte.",
            "wrong": "stato",
            "fix": "stati"
          }
        ]
      },
      {
        "type": "Trasformazione",
        "fmt": "buco",
        "instr": "Rendi impersonale la frase.",
        "items": [
          {
            "q": "Dopo dodici ore di viaggio ___ e non si ha voglia di parlare.",
            "options": [
              "si è stanchi",
              "si è stanco",
              "si è stanche"
            ],
            "answer": 0
          },
          {
            "q": "Con una guida brava ___ e si capisce meglio.",
            "options": [
              "si è più tranquilli",
              "si è più tranquillo",
              "si è più tranquille"
            ],
            "answer": 0
          },
          {
            "q": "Dopo una brutta notizia ___ per giorni.",
            "options": [
              "si resta nervosi",
              "si resta nervoso",
              "si resta nervose"
            ],
            "answer": 0
          },
          {
            "q": "Quando si lavora da casa ___ per molti giorni.",
            "options": [
              "si resta soli",
              "si resta solo",
              "si resta sole"
            ],
            "answer": 0
          },
          {
            "q": "Fino a trent'anni ___, almeno da noi.",
            "options": [
              "si è ancora ragazzi",
              "si è ancora ragazzo",
              "si è ancora ragazze"
            ],
            "answer": 0
          },
          {
            "q": "Con uno stipendio così basso non ___ del proprio lavoro.",
            "options": [
              "si è mai contenti",
              "si è mai contento",
              "si è mai contente"
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
      "B1 L25",
      "B2 L11"
    ],
    "title": "Il periodo ipotetico del 1° tipo",
    "exercises": [
      {
        "type": "Riempimento",
        "fmt": "buco",
        "instr": "Scegli la forma corretta: l'ipotesi è possibile.",
        "items": [
          {
            "q": "Se il concerto ___ alle nove, ceneremo prima.",
            "options": [
              "comincia",
              "comincerebbe",
              "cominci"
            ],
            "answer": 0
          },
          {
            "q": "Se il volo parte in orario, ___ a Milano per cena.",
            "options": [
              "saremo",
              "saremmo",
              "sarete"
            ],
            "answer": 0
          },
          {
            "q": "Se ___ adesso il biglietto, spenderai molto meno.",
            "options": [
              "compri",
              "compreresti",
              "comprassi"
            ],
            "answer": 0
          },
          {
            "q": "Se ___ tempo domani, ti darò una mano con il trasloco.",
            "options": [
              "ho",
              "avrei",
              "abbia"
            ],
            "answer": 0
          },
          {
            "q": "Se la strada resta chiusa, ___ dal paese vecchio.",
            "options": [
              "passeremo",
              "passeremmo",
              "passerete"
            ],
            "answer": 0
          },
          {
            "q": "Se ___ questa scorciatoia, risparmierai venti minuti.",
            "options": [
              "prendi",
              "prenderesti",
              "prendessi"
            ],
            "answer": 0
          }
        ]
      },
      {
        "type": "Correzione",
        "fmt": "errore",
        "instr": "Individua e clicca dove c'è l'errore.",
        "items": [
          {
            "q": "Se la settimana prossima ci sarebbe il sole, faremo una gita al mare.",
            "wrong": "sarebbe",
            "fix": "sarà"
          },
          {
            "q": "Se tu fossi libero sabato, ti porto a vedere la mostra.",
            "wrong": "fossi",
            "fix": "sei"
          },
          {
            "q": "Se il ristorante è aperto, ci fermeremmo a cena.",
            "wrong": "fermeremmo",
            "fix": "fermeremo"
          },
          {
            "q": "Se prenderesti il treno delle sei, risparmi un'ora.",
            "wrong": "prenderesti",
            "fix": "prendi"
          },
          {
            "q": "Se Marco avesse tempo domani, viene volentieri con noi.",
            "wrong": "avesse",
            "fix": "ha"
          },
          {
            "q": "Se arrivate entro le otto, trovereste ancora posto.",
            "wrong": "trovereste",
            "fix": "troverete"
          }
        ]
      },
      {
        "type": "Trasformazione",
        "fmt": "buco",
        "instr": "Costruisci il periodo ipotetico mettendo per prima la conseguenza.",
        "items": [
          {
            "q": "(il treno – essere in orario) → (noi – arrivare per cena)",
            "options": [
              "Arriveremo per cena se il treno è in orario.",
              "Arriveremo per cena se il treno sarebbe in orario.",
              "Arriveremmo per cena se il treno è in orario."
            ],
            "answer": 0
          },
          {
            "q": "(tu – finire i compiti) → (io – accompagnarti al cinema)",
            "options": [
              "Ti accompagnerò al cinema se finisci i compiti.",
              "Ti accompagnerò al cinema se finiresti i compiti.",
              "Ti accompagnerei al cinema se finisci i compiti."
            ],
            "answer": 0
          },
          {
            "q": "(piovere) → (noi – restare a casa)",
            "options": [
              "Restiamo a casa se piove.",
              "Restiamo a casa se piovesse.",
              "Resteremmo a casa se piove."
            ],
            "answer": 0
          },
          {
            "q": "(voi – prenotare adesso) → (voi – trovare posto)",
            "options": [
              "Troverete posto se prenotate adesso.",
              "Troverete posto se prenotereste adesso.",
              "Trovereste posto se prenotate adesso."
            ],
            "answer": 0
          },
          {
            "q": "(il capo – approvare) → (noi – cominciare lunedì)",
            "options": [
              "Cominceremo lunedì se il capo approva.",
              "Cominceremo lunedì se il capo approvasse.",
              "Cominceremmo lunedì se il capo approva."
            ],
            "answer": 0
          },
          {
            "q": "(tu – bere troppo caffè) → (tu – dormire male)",
            "options": [
              "Dormirai male se bevi troppo caffè.",
              "Dormirai male se berresti troppo caffè.",
              "Dormiresti male se bevi troppo caffè."
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
      "B1 L26",
      "B2 L26"
    ],
    "title": "La forma passiva con essere e venire",
    "exercises": [
      {
        "type": "Riempimento",
        "fmt": "buco",
        "instr": "Scegli la forma passiva coerente con il tempo e con il contesto.",
        "items": [
          {
            "q": "Ieri la cena ___ preparata da mia madre.",
            "options": [
              "è stata",
              "viene",
              "è stato"
            ],
            "answer": 0
          },
          {
            "q": "Ogni mattina i pacchi ___ consegnati dal corriere.",
            "options": [
              "vengono",
              "sono stati",
              "viene"
            ],
            "answer": 0
          },
          {
            "q": "La lettera ___ scritta ieri pomeriggio.",
            "options": [
              "è stata",
              "viene",
              "sono state"
            ],
            "answer": 0
          },
          {
            "q": "Durante la visita guidata, ogni sala ___ presentata da un esperto.",
            "options": [
              "viene",
              "è stata",
              "vengono"
            ],
            "answer": 0
          },
          {
            "q": "Il museo ___ restaurato nel 1920.",
            "options": [
              "è stato",
              "viene",
              "è stata"
            ],
            "answer": 0
          },
          {
            "q": "I documenti ___ firmati ieri dal notaio.",
            "options": [
              "sono stati",
              "vengono",
              "è stato"
            ],
            "answer": 0
          }
        ]
      },
      {
        "type": "Correzione",
        "fmt": "errore",
        "instr": "Individua e clicca dove c'è l'errore.",
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
            "q": "La biblioteca viene chiuso alle otto.",
            "wrong": "chiuso",
            "fix": "chiusa"
          },
          {
            "q": "La domanda viene respinto dall'ufficio.",
            "wrong": "respinto",
            "fix": "respinta"
          },
          {
            "q": "Le regole vengono rispettato da tutti.",
            "wrong": "rispettato",
            "fix": "rispettate"
          }
        ]
      },
      {
        "type": "Trasformazione",
        "fmt": "buco",
        "instr": "Trasforma dall'attivo al passivo usando l'ausiliare indicato.",
        "items": [
          {
            "q": "Il direttore presenta il progetto. (essere) →",
            "options": [
              "Il progetto è presentato dal direttore.",
              "Il progetto viene presentato dal direttore.",
              "Il progetto è stato presentato dal direttore."
            ],
            "answer": 0
          },
          {
            "q": "Servono la colazione dalle sette. (venire) →",
            "options": [
              "La colazione viene servita dalle sette.",
              "La colazione è servita dalle sette.",
              "La colazione è stata servita dalle sette."
            ],
            "answer": 0
          },
          {
            "q": "Marco ha riparato la bicicletta. (essere) →",
            "options": [
              "La bicicletta è stata riparata da Marco.",
              "La bicicletta viene riparata da Marco.",
              "La bicicletta è venuta riparata da Marco."
            ],
            "answer": 0
          },
          {
            "q": "Gli operai posano il nuovo pavimento. (venire) →",
            "options": [
              "Il nuovo pavimento viene posato dagli operai.",
              "Il nuovo pavimento è posato dagli operai.",
              "Il nuovo pavimento viene posati dagli operai."
            ],
            "answer": 0
          },
          {
            "q": "Il professore ha corretto il test. (essere) →",
            "options": [
              "Il test è stato corretto dal professore.",
              "Il test viene corretto dal professore.",
              "Il test è stato corretta dal professore."
            ],
            "answer": 0
          },
          {
            "q": "Gli insegnanti controllano i compiti ogni giorno. (venire) →",
            "options": [
              "I compiti vengono controllati dagli insegnanti ogni giorno.",
              "I compiti sono controllati dagli insegnanti ogni giorno.",
              "I compiti viene controllati dagli insegnanti ogni giorno."
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
        "instr": "Scegli la forma corretta con il «si» passivante.",
        "items": [
          {
            "q": "In questo negozio ___ scarpe italiane.",
            "options": [
              "si vendono",
              "si vende",
              "si è venduto"
            ],
            "answer": 0
          },
          {
            "q": "Qui ___ un ottimo caffè.",
            "options": [
              "si beve",
              "si bevono",
              "si sono bevuti"
            ],
            "answer": 0
          },
          {
            "q": "___ molte lingue in questa scuola.",
            "options": [
              "Si insegnano",
              "Si insegna",
              "Si è insegnato"
            ],
            "answer": 0
          },
          {
            "q": "___ appartamenti anche per brevi periodi.",
            "options": [
              "Si affittano",
              "Si affitta",
              "Si è affittato"
            ],
            "answer": 0
          },
          {
            "q": "In quel forno ___ il pane tutte le mattine.",
            "options": [
              "si compra",
              "si comprano",
              "si sono comprati"
            ],
            "answer": 0
          },
          {
            "q": "___ nuovi corsi ogni anno.",
            "options": [
              "Si organizzano",
              "Si organizza",
              "Si è organizzato"
            ],
            "answer": 0
          }
        ]
      },
      {
        "type": "Correzione",
        "fmt": "errore",
        "instr": "Individua e clicca dove c'è l'errore.",
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
            "q": "Il telefono aziendale si riparano nel centro specializzato.",
            "wrong": "riparano",
            "fix": "ripara"
          },
          {
            "q": "In questa scuola si corregge i test entro una settimana.",
            "wrong": "corregge",
            "fix": "correggono"
          },
          {
            "q": "All'ingresso si controllano il biglietto e basta.",
            "wrong": "controllano",
            "fix": "controlla"
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
              "Il pesce servono il venerdì."
            ],
            "answer": 0
          },
          {
            "q": "Noleggiano ombrelloni sulla spiaggia. →",
            "options": [
              "Sulla spiaggia si noleggiano ombrelloni.",
              "Sulla spiaggia si noleggia ombrelloni.",
              "Sulla spiaggia noleggiano si ombrelloni."
            ],
            "answer": 0
          },
          {
            "q": "Coltivano olive in collina. →",
            "options": [
              "In collina si coltivano olive.",
              "In collina si coltiva olive.",
              "In collina coltivano le olive."
            ],
            "answer": 0
          },
          {
            "q": "Firmano il contratto in ufficio. →",
            "options": [
              "Il contratto si firma in ufficio.",
              "Il contratto si firmano in ufficio.",
              "Il contratto firmano in ufficio."
            ],
            "answer": 0
          },
          {
            "q": "Stampano le istruzioni in quattro lingue. →",
            "options": [
              "Le istruzioni si stampano in quattro lingue.",
              "Le istruzioni si stampa in quattro lingue.",
              "Le istruzioni stampano in quattro lingue."
            ],
            "answer": 0
          },
          {
            "q": "Cuociono la pizza nel forno a legna. →",
            "options": [
              "La pizza si cuoce nel forno a legna.",
              "La pizza si cuociono nel forno a legna.",
              "La pizza cuociono nel forno a legna."
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
      "B1 L27",
      "B2 L22",
      "C1 L8",
      "C1 L20"
    ],
    "title": "Il discorso indiretto",
    "exercises": [
      {
        "type": "Riempimento",
        "fmt": "buco",
        "instr": "Riporta le parole di qualcun altro: scegli la forma corretta.",
        "items": [
          {
            "q": "«La sala è troppo fredda» → Marco si è lamentato perché la sala ___ troppo fredda.",
            "options": [
              "era",
              "fu",
              "sarebbe stato"
            ],
            "answer": 0
          },
          {
            "q": "«Ho letto il romanzo prima del film» → La giornalista ha scritto che ___ il romanzo prima del film.",
            "options": [
              "aveva letto",
              "avrebbe letto",
              "leggeva"
            ],
            "answer": 0
          },
          {
            "q": "«Andrò a teatro sabato» → Giulia ha risposto che ___ a teatro il sabato dopo.",
            "options": [
              "sarebbe andata",
              "sarebbe andato",
              "andò"
            ],
            "answer": 0
          },
          {
            "q": "«Non conosco bene la strada» → Il tassista ha ammesso che non ___ bene la strada.",
            "options": [
              "conosceva",
              "conobbe",
              "avrebbe conosciuto"
            ],
            "answer": 0
          },
          {
            "q": "«Spegnete il telefono!» → Il personale ci ha chiesto ___ il telefono.",
            "options": [
              "di spegnere",
              "che spegniamo",
              "spegnere"
            ],
            "answer": 0
          },
          {
            "q": "«Torneremo prima di mezzanotte» → I ragazzi hanno spiegato che ___ prima di mezzanotte.",
            "options": [
              "sarebbero tornati",
              "torneranno",
              "sarebbero tornate"
            ],
            "answer": 0
          }
        ]
      },
      {
        "type": "Correzione",
        "fmt": "errore",
        "instr": "Individua e clicca dove c'è l'errore.",
        "items": [
          {
            "q": "Anna dice: «Mi piace questa commedia». → Anna dice che mi piace questa commedia.",
            "wrong": "mi",
            "fix": "le"
          },
          {
            "q": "Paolo dice: «Io preferisco il cinema». → Paolo dice che preferisci il cinema.",
            "wrong": "preferisci",
            "fix": "preferisce"
          },
          {
            "q": "I ragazzi dicono: «Noi usciamo alle otto». → I ragazzi dicono che uscite alle otto.",
            "wrong": "uscite",
            "fix": "escono"
          },
          {
            "q": "Laura dice a Marco: «Ti consiglio questo film». → Laura dice a Marco che mi consiglia questo film.",
            "wrong": "mi",
            "fix": "gli"
          },
          {
            "q": "Marco dice: «La mia attrice preferita è italiana». → Marco dice che la tua attrice preferita è italiana.",
            "wrong": "tua",
            "fix": "sua"
          },
          {
            "q": "Sara e Luca dicono: «Il nostro treno parte alle nove». → Sara e Luca dicono che il vostro treno parte alle nove.",
            "wrong": "vostro",
            "fix": "loro"
          }
        ]
      },
      {
        "type": "Trasformazione",
        "fmt": "buco",
        "instr": "Trasforma in discorso indiretto: attenzione ai tempi e alle parole che indicano tempo e luogo.",
        "items": [
          {
            "q": "«Ho conosciuto questo attore a Venezia», ha raccontato Elena. →",
            "options": [
              "Elena ha raccontato che aveva conosciuto quell’attore a Venezia.",
              "Elena ha raccontato che ha conosciuto quell’attore a Venezia.",
              "Elena ha raccontato che aveva conosciuto questo attore a Venezia."
            ],
            "answer": 0
          },
          {
            "q": "«Domani la piscina è chiusa», ha detto Vera. →",
            "options": [
              "Vera ha detto che il giorno dopo la piscina era chiusa.",
              "Vera ha detto che domani la piscina era chiusa.",
              "Vera ha detto che il giorno dopo la piscina è chiusa."
            ],
            "answer": 0
          },
          {
            "q": "«Non ho mai visto questo attore», ha ammesso Luca. →",
            "options": [
              "Luca ha ammesso che non aveva mai visto quell’attore.",
              "Luca ha ammesso che non ha mai visto quell’attore.",
              "Luca ha ammesso che non aveva mai visto questo attore."
            ],
            "answer": 0
          },
          {
            "q": "«Prenota i posti prima di venerdì!», mi ha detto Elena. →",
            "options": [
              "Elena mi ha detto di prenotare i posti prima di venerdì.",
              "Elena mi ha detto che prenoto i posti prima di venerdì.",
              "Elena mi ha detto prenotare i posti prima di venerdì."
            ],
            "answer": 0
          },
          {
            "q": "«Qui si vede meglio», ha detto Anna. →",
            "options": [
              "Anna ha detto che lì si vedeva meglio.",
              "Anna ha detto che qui si vedeva meglio.",
              "Anna ha detto che lì si vede meglio."
            ],
            "answer": 0
          },
          {
            "q": "«Il nostro spettacolo finirà tardi», hanno avvisato gli attori. →",
            "options": [
              "Gli attori hanno avvisato che il loro spettacolo sarebbe finito tardi.",
              "Gli attori hanno avvisato che il nostro spettacolo sarebbe finito tardi.",
              "Gli attori hanno avvisato che il loro spettacolo finirà tardi."
            ],
            "answer": 0
          }
        ]
      }
    ]
  },
  {
    "lvl": "b2",
    "lez": [
      "B2 L3"
    ],
    "title": "Il futuro anteriore",
    "exercises": [
      {
        "type": "Riempimento",
        "fmt": "fill",
        "instr": "Scrivi l'ausiliare al futuro semplice.",
        "items": [
          {
            "q": "Quando ___ finito, ti chiamerò. (io – avere)",
            "a": "avrò",
            "no": [
              "averò",
              "avrei",
              "avrà"
            ]
          },
          {
            "q": "Appena ___ arrivati, ci avviseranno. (loro – essere)",
            "a": "saranno",
            "no": [
              "seranno",
              "sarebbero",
              "essaranno"
            ]
          },
          {
            "q": "Dopo che ___ letto il contratto, firmerai. (tu – avere)",
            "a": "avrai",
            "no": [
              "averai",
              "avresti",
              "avrà"
            ]
          },
          {
            "q": "Dopo che ___ partiti, ti chiameremo. (noi – essere)",
            "a": "saremo",
            "no": [
              "seremo",
              "saremmo",
              "essaremo"
            ]
          },
          {
            "q": "Appena ___ tornati, ceneremo insieme. (voi – essere)",
            "a": "sarete",
            "no": [
              "serete",
              "sareste",
              "essarete"
            ]
          },
          {
            "q": "Dopo che ___ deciso, ci diranno. (loro – avere)",
            "a": "avranno",
            "no": [
              "averanno",
              "avrebbero",
              "avrà"
            ]
          }
        ]
      },
      {
        "type": "Correzione",
        "fmt": "errore",
        "instr": "Individua e clicca dove c'è l'errore.",
        "items": [
          {
            "q": "Appena l'odore di vernice avrà sparito, potremo rientrare in casa.",
            "wrong": "avrà",
            "fix": "sarà"
          },
          {
            "q": "Appena sarete scelto la meta, compreremo i biglietti.",
            "wrong": "sarete",
            "fix": "avrete"
          },
          {
            "q": "Quando la direttrice sarà rientrato dalla pausa, riprenderemo.",
            "wrong": "rientrato",
            "fix": "rientrata"
          },
          {
            "q": "Serviremo il dolce in terrazza appena saremo sparecchiato la tavola.",
            "wrong": "saremo",
            "fix": "avremo"
          },
          {
            "q": "Quando saranno cresciute i cuccioli, li daremo in adozione.",
            "wrong": "cresciute",
            "fix": "cresciuti"
          },
          {
            "q": "Dopo che gli escursionisti saranno salite in vetta, potranno fotografare la valle.",
            "wrong": "salite",
            "fix": "saliti"
          }
        ]
      },
      {
        "type": "Trasformazione",
        "fmt": "buco",
        "instr": "Scegli la versione corretta.",
        "items": [
          {
            "q": "Prima finisco la relazione, poi esco. →",
            "options": [
              "Quando avrò finito la relazione, uscirò.",
              "Quando sarò finito la relazione, uscirò.",
              "Quando avrei finito la relazione, uscirò."
            ],
            "answer": 0
          },
          {
            "q": "Prima ricevono l'ordine, poi spediscono. →",
            "options": [
              "Appena avranno ricevuto l'ordine, spediranno.",
              "Appena saranno ricevuto l'ordine, spediranno.",
              "Appena avrebbero ricevuto l'ordine, spediranno."
            ],
            "answer": 0
          },
          {
            "q": "Prima Marta si laurea, poi cerca lavoro. →",
            "options": [
              "Dopo che si sarà laureata, cercherà lavoro.",
              "Dopo che si avrà laureata, cercherà lavoro.",
              "Dopo che si sarebbe laureata, cercherà lavoro."
            ],
            "answer": 0
          },
          {
            "q": "Prima escono tutti, poi spengo le luci. →",
            "options": [
              "Quando saranno usciti tutti, spegnerò le luci.",
              "Quando avranno usciti tutti, spegnerò le luci.",
              "Quando sarebbero usciti tutti, spegnerò le luci."
            ],
            "answer": 0
          },
          {
            "q": "Prima si sistemano, poi visitano la città. →",
            "options": [
              "Appena si saranno sistemati, visiteranno la città.",
              "Appena si avranno sistemati, visiteranno la città.",
              "Appena si sarebbero sistemati, visiteranno la città."
            ],
            "answer": 0
          },
          {
            "q": "Prima mi rispondi, poi decido. →",
            "options": [
              "Quando mi avrai risposto, deciderò.",
              "Quando mi sarai risposto, deciderò.",
              "Quando mi avresti risposto, deciderò."
            ],
            "answer": 0
          }
        ]
      }
    ]
  },
  {
    "lvl": "b2",
    "lez": [
      "B2 L4"
    ],
    "title": "I superlativi irregolari",
    "exercises": [
      {
        "type": "Riempimento",
        "fmt": "buco",
        "instr": "Scegli il superlativo irregolare corretto.",
        "items": [
          {
            "q": "Il risultato è ___ e meglio di così non si poteva fare.",
            "options": [
              "ottimo",
              "il più buonissimo",
              "più ottimo"
            ],
            "answer": 0
          },
          {
            "q": "È stata una scelta ___.",
            "options": [
              "pessima",
              "più pessima",
              "più cattivissima"
            ],
            "answer": 0
          },
          {
            "q": "Ha ottenuto il ___ dei voti.",
            "options": [
              "massimo",
              "più massimo",
              "più altissimo"
            ],
            "answer": 0
          },
          {
            "q": "Il ___ sforzo produce grandi risultati.",
            "options": [
              "minimo",
              "più minimo",
              "meno minimo"
            ],
            "answer": 0
          },
          {
            "q": "Il fratello ___ ha vent'anni.",
            "options": [
              "maggiore",
              "più maggiore",
              "più grandissimo"
            ],
            "answer": 0
          },
          {
            "q": "La sorella ___ studia ancora.",
            "options": [
              "minore",
              "più minore",
              "più piccolissima"
            ],
            "answer": 0
          }
        ]
      },
      {
        "type": "Correzione",
        "fmt": "errore",
        "instr": "In un testo scritto formale, individua e clicca dove c'è l'errore.",
        "items": [
          {
            "q": "Questa è una soluzione più pessima.",
            "wrong": "più",
            "fix": "(togliere)"
          },
          {
            "q": "La qualità dei materiali è molto ottima.",
            "wrong": "molto",
            "fix": "(togliere)"
          },
          {
            "q": "La seconda stesura del testo era meglio della prima.",
            "wrong": "meglio",
            "fix": "migliore"
          },
          {
            "q": "Mio fratello più maggiore vive a Roma.",
            "wrong": "più",
            "fix": "(togliere)"
          },
          {
            "q": "Dopo la cura le sue condizioni sono peggio di prima.",
            "wrong": "peggio",
            "fix": "peggiori"
          },
          {
            "q": "Le previsioni per giugno sono ottimi secondo l'ufficio studi.",
            "wrong": "ottimi",
            "fix": "ottime"
          }
        ]
      },
      {
        "type": "Trasformazione",
        "fmt": "buco",
        "instr": "Sostituisci con il superlativo irregolare.",
        "items": [
          {
            "q": "Un pranzo molto buono →",
            "options": [
              "Un pranzo ottimo",
              "Un pranzo più buono",
              "Un pranzo buonissimo"
            ],
            "answer": 0
          },
          {
            "q": "Un servizio molto cattivo →",
            "options": [
              "Un servizio pessimo",
              "Un servizio più cattivo",
              "Un servizio cattivissimo"
            ],
            "answer": 0
          },
          {
            "q": "Il livello più alto →",
            "options": [
              "Il livello massimo",
              "Il livello più massimo",
              "Il livello altissimo"
            ],
            "answer": 0
          },
          {
            "q": "La quantità più bassa →",
            "options": [
              "La quantità minima",
              "La quantità più minima",
              "La quantità bassissima"
            ],
            "answer": 0
          },
          {
            "q": "Il figlio più anziano →",
            "options": [
              "Il figlio maggiore",
              "Il figlio più maggiore",
              "Il figlio anzianissimo"
            ],
            "answer": 0
          },
          {
            "q": "La figlia più giovane →",
            "options": [
              "La figlia minore",
              "La figlia più minore",
              "La figlia piccolissima"
            ],
            "answer": 0
          }
        ]
      }
    ]
  },
  {
    "lvl": "b2",
    "lez": [
      "B2 L5"
    ],
    "title": "I pronomi relativi «che» e «cui»",
    "exercises": [
      {
        "type": "Riempimento",
        "fmt": "buco",
        "instr": "Scegli la preposizione corretta davanti a «cui».",
        "items": [
          {
            "q": "Il ritardo ___ si lamentano tutti dura ormai da mesi.",
            "options": [
              "di cui",
              "su cui",
              "a cui"
            ],
            "answer": 0
          },
          {
            "q": "Il torneo ___ ha partecipato mio figlio è finito ieri.",
            "options": [
              "a cui",
              "in cui",
              "di cui"
            ],
            "answer": 0
          },
          {
            "q": "Il ragazzo ___ contavamo per il turno di notte non si è presentato.",
            "options": [
              "su cui",
              "con cui",
              "di cui"
            ],
            "answer": 0
          },
          {
            "q": "Il rumore ___ non riusciamo a difenderci comincia ogni sera alle undici.",
            "options": [
              "da cui",
              "a cui",
              "con cui"
            ],
            "answer": 0
          },
          {
            "q": "Il regalo ___ abbiamo speso tanto non le è piaciuto.",
            "options": [
              "per cui",
              "con cui",
              "di cui"
            ],
            "answer": 0
          },
          {
            "q": "Il coltello ___ ha tagliato il pane era troppo piccolo.",
            "options": [
              "con cui",
              "per cui",
              "da cui"
            ],
            "answer": 0
          }
        ]
      },
      {
        "type": "Correzione",
        "fmt": "errore",
        "instr": "Individua e clicca dove c'è l'errore.",
        "items": [
          {
            "q": "Il consolato di cui mi sono rivolto non ha risposto.",
            "wrong": "di",
            "fix": "a"
          },
          {
            "q": "Ho perso il foglio su che avevo segnato l'indirizzo.",
            "wrong": "che",
            "fix": "cui"
          },
          {
            "q": "Non trovo più la mail cui ho mandato ieri.",
            "wrong": "cui",
            "fix": "che"
          },
          {
            "q": "Il paese in cui provengono questi vini è la Francia.",
            "wrong": "in",
            "fix": "da"
          },
          {
            "q": "L'articolo cui ho letto stamattina diceva un'altra cosa.",
            "wrong": "cui",
            "fix": "che"
          },
          {
            "q": "Il numero a che hai telefonato non esiste più.",
            "wrong": "che",
            "fix": "cui"
          }
        ]
      },
      {
        "type": "Riempimento",
        "fmt": "fill",
        "instr": "Scrivi la preposizione + «cui».",
        "items": [
          {
            "q": "La pratica ___ si occupa mia sorella è ferma da mesi.",
            "a": "di cui",
            "no": [
              "che",
              "a cui",
              "con cui"
            ]
          },
          {
            "q": "Il progetto ___ tengo di più è ancora nel cassetto.",
            "a": "a cui",
            "no": [
              "che",
              "di cui",
              "per cui"
            ]
          },
          {
            "q": "Ricordo ancora il giorno ___ ci siamo conosciuti.",
            "a": "in cui",
            "no": [
              "che",
              "a cui",
              "su cui"
            ]
          },
          {
            "q": "La finestra ___ entra tutta quella luce dà sul giardino.",
            "a": "da cui",
            "no": [
              "che",
              "di cui",
              "in cui"
            ]
          },
          {
            "q": "La panchina ___ ci sedevamo da ragazzi non c'è più.",
            "a": "su cui",
            "no": [
              "che",
              "in cui",
              "di cui"
            ]
          },
          {
            "q": "L'amico ___ sono partito per il Portogallo si è ammalato subito.",
            "a": "con cui",
            "no": [
              "che",
              "da cui",
              "a cui"
            ]
          }
        ]
      }
    ]
  },
  {
    "lvl": "b2",
    "lez": [
      "B2 L8"
    ],
    "title": "I verbi pronominali avanzati",
    "exercises": [
      {
        "type": "Composizione",
        "fmt": "ordina",
        "instr": "Completa la frase: clicca le parole nell'ordine giusto. Alcune non servono.",
        "items": [
          {
            "q": "Non era niente di grave, eppure i miei fratelli ___ e adesso non mi rispondono più.",
            "sol": [
              "se",
              "la",
              "sono",
              "presa"
            ],
            "extra": [
              "si",
              "lo"
            ]
          },
          {
            "q": "Gliel'abbiamo detto mille volte, ma ___ e hanno fatto di testa loro.",
            "sol": [
              "se",
              "ne",
              "sono",
              "fregati"
            ],
            "extra": [
              "si",
              "ci"
            ]
          },
          {
            "q": "Stasera restiamo a casa: ___ in centro.",
            "sol": [
              "non",
              "ce",
              "la",
              "sentiamo",
              "di",
              "guidare"
            ],
            "extra": [
              "si",
              "lo"
            ]
          },
          {
            "q": "Alla fine non ha vinto nessuno, però ___ fino all'ultimo minuto.",
            "sol": [
              "ce",
              "l'abbiamo",
              "messa",
              "tutta"
            ],
            "extra": [
              "ci",
              "messo"
            ]
          },
          {
            "q": "Da quando abbiamo cambiato l'orario, la portinaia ___ e non ci saluta più.",
            "sol": [
              "ce",
              "l'ha",
              "con",
              "noi"
            ],
            "extra": [
              "si",
              "gli"
            ]
          },
          {
            "q": "Ogni volta che qualcosa va storto in ufficio, ___ pur sapendo che non c'entro niente.",
            "sol": [
              "se",
              "la",
              "prende",
              "con",
              "me"
            ],
            "extra": [
              "ci",
              "gli"
            ]
          }
        ]
      },
      {
        "type": "Riempimento",
        "fmt": "buco",
        "instr": "Completa con la parola corretta.",
        "items": [
          {
            "q": "Dopo quella telefonata non me la sono sentita ___ insistere.",
            "options": [
              "di",
              "a",
              "per"
            ],
            "answer": 0
          },
          {
            "q": "Se l'è presa ___ noi perché nessuno l'ha aspettata.",
            "options": [
              "con",
              "a",
              "di"
            ],
            "answer": 0
          },
          {
            "q": "Mio cognato se ne frega ___ quello che pensano i parenti.",
            "options": [
              "di",
              "a",
              "per"
            ],
            "answer": 0
          },
          {
            "q": "In cucina ce la sta mettendo ___ per non far tardi.",
            "options": [
              "tutta",
              "tutto",
              "tutte"
            ],
            "answer": 0
          },
          {
            "q": "Da settimane l'allenatore ce l'ha ___ mio figlio e non lo fa giocare.",
            "options": [
              "con",
              "per",
              "a"
            ],
            "answer": 0
          },
          {
            "q": "Te la senti ___ affrontarlo da solo?",
            "options": [
              "di",
              "a",
              "per"
            ],
            "answer": 0
          }
        ]
      },
      {
        "type": "Correzione",
        "fmt": "errore",
        "instr": "Individua e clicca dove c'è l'errore.",
        "items": [
          {
            "q": "Dopo la riunione loro se la hanno presa moltissimo.",
            "wrong": "hanno",
            "fix": "sono"
          },
          {
            "q": "Le mie colleghe non se la sono sentite di protestare.",
            "wrong": "sentite",
            "fix": "sentita"
          },
          {
            "q": "Le gemelle se ne sono fregata del divieto.",
            "wrong": "fregata",
            "fix": "fregate"
          },
          {
            "q": "Da lunedì ce la mette tutto per recuperare le lezioni perse.",
            "wrong": "tutto",
            "fix": "tutta"
          },
          {
            "q": "Da mesi ci l'ha con il suo ex socio.",
            "wrong": "ci",
            "fix": "ce"
          },
          {
            "q": "Se la prende sempre a chi gli sta vicino.",
            "wrong": "a",
            "fix": "con"
          }
        ]
      }
    ]
  },
  {
    "lvl": "b2",
    "lez": [
      "B2 L10"
    ],
    "title": "Il condizionale passato",
    "exercises": [
      {
        "type": "Riempimento",
        "fmt": "fill",
        "instr": "Scrivi l'ausiliare al condizionale presente.",
        "items": [
          {
            "q": "___ voluto avvisarti prima. (io – avere)",
            "a": "Avrei",
            "no": [
              "Averei",
              "Avrò",
              "Avrebbe"
            ]
          },
          {
            "q": "___ dovuto partire ieri. (noi – avere)",
            "a": "Avremmo",
            "no": [
              "Averemmo",
              "Avremo",
              "Avressimo"
            ]
          },
          {
            "q": "Marco ___ venuto volentieri. (essere)",
            "a": "Sarebbe",
            "no": [
              "Essarebbe",
              "Sarà",
              "Sarebbero"
            ]
          },
          {
            "q": "___ potuto aiutarmi. (tu – avere)",
            "a": "Avresti",
            "no": [
              "Avereste",
              "Avrai",
              "Avrebbe"
            ]
          },
          {
            "q": "Le ragazze ___ partite prima. (essere)",
            "a": "Sarebbero",
            "no": [
              "Essarebbero",
              "Saranno",
              "Sarebbe"
            ]
          },
          {
            "q": "___ preferito restare. (voi – avere)",
            "a": "Avreste",
            "no": [
              "Avereste",
              "Avrete",
              "Avresti"
            ]
          }
        ]
      },
      {
        "type": "Correzione",
        "fmt": "errore",
        "instr": "Individua e clicca dove c'è l'errore.",
        "items": [
          {
            "q": "Quella domenica al mare ordineremmo il pesce, ma la cucina aveva già chiuso.",
            "wrong": "ordineremmo",
            "fix": "avremmo ordinato"
          },
          {
            "q": "L'autunno scorso i volontari pianterebbero la siepe, ma il terreno era già gelato.",
            "wrong": "pianterebbero",
            "fix": "avrebbero piantato"
          },
          {
            "q": "Quel giorno Paola salirebbe volentieri fin lassù, ma il sentiero era ghiacciato.",
            "wrong": "salirebbe",
            "fix": "sarebbe salita"
          },
          {
            "q": "Quel pomeriggio guardereste la finale con noi, ma la televisione smise di funzionare.",
            "wrong": "guardereste",
            "fix": "avreste guardato"
          },
          {
            "q": "Ieri sera le mie sorelle uscirebbero con noi, ma avevano perso l'ultimo autobus.",
            "wrong": "uscirebbero",
            "fix": "sarebbero uscite"
          },
          {
            "q": "Ieri ti chiamerei prima, ma non avevo credito.",
            "wrong": "chiamerei",
            "fix": "avrei chiamato"
          }
        ]
      },
      {
        "type": "Trasformazione",
        "fmt": "buco",
        "instr": "Esprimi il rimpianto con il condizionale passato.",
        "items": [
          {
            "q": "Volevo dirtelo, ma non ho potuto. →",
            "options": [
              "Te l'avrei detto.",
              "Te lo direi.",
              "Te l'ho detto."
            ],
            "answer": 0
          },
          {
            "q": "Dovevamo prenotare, non l'abbiamo fatto. →",
            "options": [
              "Avremmo dovuto prenotare.",
              "Dovremmo prenotare.",
              "Abbiamo dovuto prenotare."
            ],
            "answer": 0
          },
          {
            "q": "Pensava di passare, ma non ha potuto. →",
            "options": [
              "Sarebbe passato volentieri.",
              "Passerebbe volentieri.",
              "È passato volentieri."
            ],
            "answer": 0
          },
          {
            "q": "Potevi avvisarmi, non l'hai fatto. →",
            "options": [
              "Avresti potuto avvisarmi.",
              "Potresti avvisarmi.",
              "Hai potuto avvisarmi."
            ],
            "answer": 0
          },
          {
            "q": "Speravamo di fermarci, ma era tardi. →",
            "options": [
              "Ci saremmo fermati volentieri.",
              "Ci fermeremmo volentieri.",
              "Ci siamo fermati volentieri."
            ],
            "answer": 0
          },
          {
            "q": "Volevo comprarlo, era troppo caro. →",
            "options": [
              "L'avrei comprato.",
              "Lo comprerei.",
              "L'ho comprato."
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
      "B1 L13",
      "B2 L12",
      "B2 L18"
    ],
    "title": "Il congiuntivo presente: forme irregolari",
    "stima": "b2",
    "exercises": [
      {
        "type": "Riempimento",
        "fmt": "fill",
        "instr": "Scrivi il congiuntivo presente irregolare.",
        "items": [
          {
            "q": "Non credo che il direttore ___ molto tempo per noi. (avere)",
            "a": "abbia",
            "no": [
              "ha",
              "abbiano"
            ]
          },
          {
            "q": "È possibile che i vicini ___ una mano in giardino. (dare)",
            "a": "diano",
            "no": [
              "danno",
              "dino"
            ]
          },
          {
            "q": "Dubito che il tecnico ___ la verità sul guasto. (dire)",
            "a": "dica",
            "no": [
              "dice",
              "dicano"
            ]
          },
          {
            "q": "Temo che i ragazzi non ___ arrivare in tempo. (potere)",
            "a": "possano",
            "no": [
              "possono",
              "possino"
            ]
          },
          {
            "q": "Mi sembra che tua sorella ___ molto d'accordo. (essere)",
            "a": "sia",
            "no": [
              "è",
              "siano"
            ]
          },
          {
            "q": "È meglio che i documenti ___ direttamente in archivio. (andare)",
            "a": "vadano",
            "no": [
              "vanno",
              "vadino"
            ]
          }
        ]
      },
      {
        "type": "Correzione",
        "fmt": "errore",
        "instr": "Individua e clicca dove c'è l'errore.",
        "items": [
          {
            "q": "Non credo che voi siete pronti per un viaggio così lungo.",
            "wrong": "siete",
            "fix": "siate"
          },
          {
            "q": "Temo che i vicini stia per traslocare senza avvisare.",
            "wrong": "stia",
            "fix": "stiano"
          },
          {
            "q": "È meglio che voi fate una copia del contratto.",
            "wrong": "fate",
            "fix": "facciate"
          },
          {
            "q": "Immagino che il tecnico possano venire domani mattina.",
            "wrong": "possano",
            "fix": "possa"
          },
          {
            "q": "Spero che voi sapete già come arrivare.",
            "wrong": "sapete",
            "fix": "sappiate"
          },
          {
            "q": "È probabile che i ragazzi dica la verità ai genitori.",
            "wrong": "dica",
            "fix": "dicano"
          }
        ]
      },
      {
        "type": "Trasformazione",
        "fmt": "buco",
        "instr": "Riformula la frase con l’espressione indicata e il congiuntivo presente.",
        "items": [
          {
            "q": "Tu hai già tutti i documenti. (Non sono sicuro che...)",
            "options": [
              "Non sono sicuro che tu abbia già tutti i documenti.",
              "Non sono sicuro che tu hai già tutti i documenti.",
              "Non sono sicuro che tu abbiate già tutti i documenti."
            ],
            "answer": 0
          },
          {
            "q": "Voi venite in macchina. (È meglio che...)",
            "options": [
              "È meglio che voi veniate in macchina.",
              "È meglio che voi venite in macchina.",
              "È meglio che voi vengano in macchina."
            ],
            "answer": 0
          },
          {
            "q": "Io vado a prenderlo in stazione. (Preferisci che...)",
            "options": [
              "Preferisci che io vada a prenderlo in stazione?",
              "Preferisci che io vado a prenderlo in stazione?",
              "Preferisci che io vadano a prenderlo in stazione?"
            ],
            "answer": 0
          },
          {
            "q": "Lei sa dove sono le chiavi. (Dubito che...)",
            "options": [
              "Dubito che lei sappia dove sono le chiavi.",
              "Dubito che lei sa dove sono le chiavi.",
              "Dubito che lei sappiano dove sono le chiavi."
            ],
            "answer": 0
          },
          {
            "q": "Tu stai bene con questo caldo. (Non mi pare che...)",
            "options": [
              "Non mi pare che tu stia bene con questo caldo.",
              "Non mi pare che tu stai bene con questo caldo.",
              "Non mi pare che tu stiate bene con questo caldo."
            ],
            "answer": 0
          },
          {
            "q": "Loro danno l'esame a giugno. (È possibile che...)",
            "options": [
              "È possibile che loro diano l'esame a giugno.",
              "È possibile che loro danno l'esame a giugno.",
              "È possibile che loro dia l'esame a giugno."
            ],
            "answer": 0
          }
        ]
      }
    ]
  },
  {
    "lvl": "b2",
    "lez": [
      "B2 L14"
    ],
    "title": "Il passato remoto",
    "exercises": [
      {
        "type": "Riempimento",
        "fmt": "fill",
        "instr": "Scrivi il passato remoto del verbo tra parentesi.",
        "items": [
          {
            "q": "Manzoni ___ i Promessi Sposi. (scrivere)",
            "a": "scrisse",
            "no": [
              "scriveva",
              "scrivette",
              "scrivé"
            ]
          },
          {
            "q": "Colombo ___ in America nel 1492. (arrivare)",
            "a": "arrivò",
            "no": [
              "arrivava",
              "arrivé",
              "arrivette"
            ]
          },
          {
            "q": "L'artista ___ a Roma per anni. (vivere)",
            "a": "visse",
            "no": [
              "viveva",
              "vivette",
              "vivé"
            ]
          },
          {
            "q": "I Romani ___ molte strade. (costruire)",
            "a": "costruirono",
            "no": [
              "costruivano",
              "costrussero",
              "costruettero"
            ]
          },
          {
            "q": "Durante il processo il testimone ___ la verità. (dire)",
            "a": "disse",
            "no": [
              "diceva",
              "dicette",
              "dì"
            ]
          },
          {
            "q": "Dopo la vittoria i Greci ___ un grande sacrificio agli dèi. (fare)",
            "a": "fecero",
            "no": [
              "facevano",
              "facerono",
              "fesero"
            ]
          }
        ]
      },
      {
        "type": "Correzione",
        "fmt": "errore",
        "instr": "La narrazione è al passato remoto: individua e clicca dove c'è l'errore.",
        "items": [
          {
            "q": "Galileo insegnò a Padova e moriva ad Arcetri.",
            "wrong": "moriva",
            "fix": "morì"
          },
          {
            "q": "I Longobardi fondò un regno nel nord della penisola.",
            "wrong": "fondò",
            "fix": "fondarono"
          },
          {
            "q": "Garibaldi ha sbarcò a Marsala nel 1860.",
            "wrong": "ha",
            "fix": "(togliere)"
          },
          {
            "q": "L'artista dipinse il soffitto e riceveva molti premi.",
            "wrong": "riceveva",
            "fix": "ricevette"
          },
          {
            "q": "Nel 1861 l'Italia diventava un regno unito, ma Venezia arrivò solo nel 1866.",
            "wrong": "diventava",
            "fix": "diventò"
          },
          {
            "q": "Leonardo lasciò l'Italia nel 1516 e si trasferirono in Francia.",
            "wrong": "trasferirono",
            "fix": "trasferì"
          }
        ]
      },
      {
        "type": "Trasformazione",
        "fmt": "buco",
        "instr": "Riscrivi il fatto storico al passato remoto.",
        "items": [
          {
            "q": "Secondo la tradizione, Romolo ha fondato Roma nel 753 a.C. →",
            "options": [
              "Secondo la tradizione, Romolo fondò Roma nel 753 a.C.",
              "Secondo la tradizione, Romolo fondava Roma nel 753 a.C.",
              "Secondo la tradizione, Romolo fondette Roma nel 753 a.C."
            ],
            "answer": 0
          },
          {
            "q": "Gli alleati hanno vinto la battaglia di Waterloo nel 1815. →",
            "options": [
              "Gli alleati vinsero la battaglia di Waterloo nel 1815.",
              "Gli alleati vincevano la battaglia di Waterloo nel 1815.",
              "Gli alleati vincettero la battaglia di Waterloo nel 1815."
            ],
            "answer": 0
          },
          {
            "q": "Dante è nato a Firenze nel 1265. →",
            "options": [
              "Dante nacque a Firenze nel 1265.",
              "Dante nasceva a Firenze nel 1265.",
              "Dante nascé a Firenze nel 1265."
            ],
            "answer": 0
          },
          {
            "q": "Michelangelo ha dipinto la volta della Cappella Sistina. →",
            "options": [
              "Michelangelo dipinse la volta della Cappella Sistina.",
              "Michelangelo dipingeva la volta della Cappella Sistina.",
              "Michelangelo dipingette la volta della Cappella Sistina."
            ],
            "answer": 0
          },
          {
            "q": "Il Teatro alla Scala ha aperto a Milano nel 1778. →",
            "options": [
              "Il Teatro alla Scala aprì a Milano nel 1778.",
              "Il Teatro alla Scala apriva a Milano nel 1778.",
              "Il Teatro alla Scala apriette a Milano nel 1778."
            ],
            "answer": 0
          },
          {
            "q": "Umberto II è diventato re d'Italia nel 1946. →",
            "options": [
              "Umberto II diventò re d'Italia nel 1946.",
              "Umberto II diventava re d'Italia nel 1946.",
              "Umberto II diventette re d'Italia nel 1946."
            ],
            "answer": 0
          }
        ]
      }
    ]
  },
  {
    "lvl": "b2",
    "lez": [
      "B2 L15",
      "B2 L18",
      "C1 L3",
      "C1 L16"
    ],
    "title": "Il congiuntivo imperfetto",
    "exercises": [
      {
        "type": "Riempimento",
        "fmt": "fill",
        "instr": "Scrivi il congiuntivo imperfetto del verbo tra parentesi.",
        "items": [
          {
            "q": "Pensavo che Marco ___ più attento. (essere)",
            "a": "fosse",
            "no": [
              "era",
              "sia",
              "fossi"
            ]
          },
          {
            "q": "Speravo che tu ___ prima. (arrivare)",
            "a": "arrivassi",
            "no": [
              "arrivavi",
              "arrivi",
              "arrivasse"
            ]
          },
          {
            "q": "Volevo che voi ___ con noi. (venire)",
            "a": "veniste",
            "no": [
              "venivate",
              "veniate",
              "venissero"
            ]
          },
          {
            "q": "Credevo che Marta ___ meglio. (stare)",
            "a": "stesse",
            "no": [
              "stava",
              "stia",
              "stessi"
            ]
          },
          {
            "q": "Speravo che Marco e Luca ___ di sì. (dire)",
            "a": "dicessero",
            "no": [
              "dicevano",
              "dicano",
              "dicesse"
            ]
          },
          {
            "q": "Immaginavo che Sofia ___ aiutarci. (potere)",
            "a": "potesse",
            "no": [
              "poteva",
              "possa",
              "potessi"
            ]
          }
        ]
      },
      {
        "type": "Correzione",
        "fmt": "errore",
        "instr": "Individua e clicca dove c'è l'errore.",
        "items": [
          {
            "q": "Mi illudevo che lui cambiava.",
            "wrong": "cambiava",
            "fix": "cambiasse"
          },
          {
            "q": "Desideravo che tu tornavi presto a casa.",
            "wrong": "tornavi",
            "fix": "tornassi"
          },
          {
            "q": "Preferivo che guidiate voi, ma alla fine ha guidato Marco.",
            "wrong": "guidiate",
            "fix": "guidaste"
          },
          {
            "q": "Sospettavo che nascondeva qualcosa di importante.",
            "wrong": "nascondeva",
            "fix": "nascondesse"
          },
          {
            "q": "Avevo paura che i ragazzi sbagliasse strada di nuovo.",
            "wrong": "sbagliasse",
            "fix": "sbagliassero"
          },
          {
            "q": "Non immaginavo che rinunciava così in fretta.",
            "wrong": "rinunciava",
            "fix": "rinunciasse"
          }
        ]
      },
      {
        "type": "Trasformazione",
        "fmt": "buco",
        "instr": "Riscrivi la frase al passato mantenendo il congiuntivo.",
        "items": [
          {
            "q": "Bisogna che lui si sbrighi. →",
            "options": [
              "Bisognava che lui si sbrigasse.",
              "Bisognava che lui si sbrigava.",
              "Bisognava che lui si sbrighi."
            ],
            "answer": 0
          },
          {
            "q": "Mi auguro che smetta di piovere. →",
            "options": [
              "Mi auguravo che smettesse di piovere.",
              "Mi auguravo che smetteva di piovere.",
              "Mi auguravo che smetta di piovere."
            ],
            "answer": 0
          },
          {
            "q": "Basta che voi arriviate in orario. →",
            "options": [
              "Bastava che voi arrivaste in orario.",
              "Bastava che voi arrivavate in orario.",
              "Bastava che voi arriviate in orario."
            ],
            "answer": 0
          },
          {
            "q": "È un peccato che non ci siano posti. →",
            "options": [
              "Era un peccato che non ci fossero posti.",
              "Era un peccato che non c’erano posti.",
              "Era un peccato che non ci siano posti."
            ],
            "answer": 0
          },
          {
            "q": "Mi dispiace che tu debba andare. →",
            "options": [
              "Mi dispiaceva che tu dovessi andare.",
              "Mi dispiaceva che tu dovevi andare.",
              "Mi dispiaceva che tu debba andare."
            ],
            "answer": 0
          },
          {
            "q": "Non vale la pena che insistiamo. →",
            "options": [
              "Non valeva la pena che insistessimo.",
              "Non valeva la pena che insistevamo.",
              "Non valeva la pena che insistiamo."
            ],
            "answer": 0
          }
        ]
      }
    ],
    "diag": true
  },
  {
    "lvl": "b2",
    "lez": [
      "B2 L16",
      "B2 L17"
    ],
    "title": "Il periodo ipotetico del 2° tipo",
    "exercises": [
      {
        "type": "Riempimento",
        "fmt": "buco",
        "instr": "Scegli i tempi corretti: l'ipotesi è possibile ma non reale.",
        "items": [
          {
            "q": "Se ___ meno traffico, arriverei prima.",
            "options": [
              "ci fosse",
              "ci sarebbe",
              "c'è"
            ],
            "answer": 0
          },
          {
            "q": "Se abitassi in campagna, ___ un cane.",
            "options": [
              "prenderei",
              "prendessi",
              "prenderò"
            ],
            "answer": 0
          },
          {
            "q": "Se ___ suonare il pianoforte, suonerei per voi.",
            "options": [
              "sapessi",
              "saprei",
              "so"
            ],
            "answer": 0
          },
          {
            "q": "Se ___ un'altra vita, farei l'archeologo.",
            "options": [
              "avessi",
              "avrei",
              "ho"
            ],
            "answer": 0
          },
          {
            "q": "Se fossimo in dieci, ___ due tavoli.",
            "options": [
              "prenoteremmo",
              "prenotassimo",
              "prenoteremo"
            ],
            "answer": 0
          },
          {
            "q": "Se ___ meglio, verrei alla festa.",
            "options": [
              "stessi",
              "starei",
              "sto"
            ],
            "answer": 0
          }
        ]
      },
      {
        "type": "Correzione",
        "fmt": "errore",
        "instr": "Individua e clicca dove c'è l'errore.",
        "items": [
          {
            "q": "Se avrei una barca, andrei a pescare.",
            "wrong": "avrei",
            "fix": "avessi"
          },
          {
            "q": "Se ti allenassi, corressi più veloce.",
            "wrong": "corressi",
            "fix": "correresti"
          },
          {
            "q": "Se io guadagnerei di più, cambierei casa.",
            "wrong": "guadagnerei",
            "fix": "guadagnassi"
          },
          {
            "q": "Se nevicasse, andassimo a sciare.",
            "wrong": "andassimo",
            "fix": "andremmo"
          },
          {
            "q": "Se adesso sarei più giovane, ricomincerei tutto.",
            "wrong": "sarei",
            "fix": "fossi"
          },
          {
            "q": "Se conoscerei il russo, tradurrei io.",
            "wrong": "conoscerei",
            "fix": "conoscessi"
          }
        ]
      },
      {
        "type": "Trasformazione",
        "fmt": "buco",
        "instr": "Costruisci l'ipotesi possibile ma non reale.",
        "items": [
          {
            "q": "(io – parlare arabo) → (io – lavorare in Egitto)",
            "options": [
              "Se parlassi arabo, lavorerei in Egitto.",
              "Se parlerei arabo, lavorerei in Egitto.",
              "Se parlo arabo, lavorerò in Egitto."
            ],
            "answer": 0
          },
          {
            "q": "(tu – uscire di meno) → (tu – risparmiare)",
            "options": [
              "Se uscissi di meno, risparmieresti.",
              "Se usciresti di meno, risparmieresti.",
              "Se esci di meno, risparmierai."
            ],
            "answer": 0
          },
          {
            "q": "(esserci il sole) → (noi – fare un picnic)",
            "options": [
              "Se ci fosse il sole, faremmo un picnic.",
              "Se ci sarebbe il sole, faremmo un picnic.",
              "Se c'è il sole, faremo un picnic."
            ],
            "answer": 0
          },
          {
            "q": "(noi – essere in vacanza) → (noi – dormire di più)",
            "options": [
              "Se fossimo in vacanza, dormiremmo di più.",
              "Se saremmo in vacanza, dormiremmo di più.",
              "Se siamo in vacanza, dormiremo di più."
            ],
            "answer": 0
          },
          {
            "q": "(voi – prenotare prima) → (voi – pagare meno)",
            "options": [
              "Se prenotaste prima, paghereste meno.",
              "Se prenotereste prima, paghereste meno.",
              "Se prenotate prima, pagherete meno."
            ],
            "answer": 0
          },
          {
            "q": "(loro – vendere la casa) → (loro – trasferirsi)",
            "options": [
              "Se vendessero la casa, si trasferirebbero.",
              "Se venderebbero la casa, si trasferirebbero.",
              "Se vendono la casa, si trasferiranno."
            ],
            "answer": 0
          }
        ]
      }
    ]
  },
  {
    "lvl": "b2",
    "lez": [
      "B2 L19",
      "C1 L4"
    ],
    "title": "Il congiuntivo trapassato",
    "exercises": [
      {
        "type": "Riempimento",
        "fmt": "fill",
        "instr": "Completa il congiuntivo trapassato con la forma corretta dell'ausiliare.",
        "items": [
          {
            "q": "Pensavo che Marco ___ già partito. (essere)",
            "a": "fosse",
            "no": [
              "era",
              "sia",
              "fossi"
            ]
          },
          {
            "q": "Credevo che ___ finito il lavoro. (loro – avere)",
            "a": "avessero",
            "no": [
              "avevano",
              "abbiano",
              "avesse"
            ]
          },
          {
            "q": "Speravo che tu ___ capito. (avere)",
            "a": "avessi",
            "no": [
              "avevi",
              "abbia",
              "avesse"
            ]
          },
          {
            "q": "Temevo che voi ___ sbagliato strada. (avere)",
            "a": "aveste",
            "no": [
              "avevate",
              "abbiate",
              "avessero"
            ]
          },
          {
            "q": "Credevo che ___ arrivati prima. (noi – essere)",
            "a": "fossimo",
            "no": [
              "eravamo",
              "siamo",
              "foste"
            ]
          },
          {
            "q": "Speravo che tu ti ___ divertito. (essere)",
            "a": "fossi",
            "no": [
              "eri",
              "sia",
              "fosse"
            ]
          }
        ]
      },
      {
        "type": "Correzione",
        "fmt": "errore",
        "instr": "Individua e clicca dove c'è l'errore.",
        "items": [
          {
            "q": "Immaginavo che si era già iscritto al corso.",
            "wrong": "era",
            "fix": "fosse"
          },
          {
            "q": "Non sapevo che tu abbia prenotato il tavolo.",
            "wrong": "abbia",
            "fix": "avessi"
          },
          {
            "q": "Dubitavo che voi avessero letto il regolamento, e infatti non sapevate niente.",
            "wrong": "avessero",
            "fix": "aveste"
          },
          {
            "q": "Speravo che ti eri riposato abbastanza.",
            "wrong": "eri",
            "fix": "fossi"
          },
          {
            "q": "Sospettavo che Elena fosse uscito senza avvisare.",
            "wrong": "uscito",
            "fix": "uscita"
          },
          {
            "q": "Credeva che i corrieri avessero consegnati i documenti in tempo.",
            "wrong": "consegnati",
            "fix": "consegnato"
          }
        ]
      },
      {
        "type": "Trasformazione",
        "fmt": "buco",
        "instr": "Riscrivi la frase al passato mantenendo il congiuntivo.",
        "items": [
          {
            "q": "Sono sorpreso che non ci abbiano risposto. →",
            "options": [
              "Ero sorpreso che non ci avessero risposto.",
              "Ero sorpreso che non ci avevano risposto.",
              "Ero sorpreso che non ci abbiano risposto."
            ],
            "answer": 0
          },
          {
            "q": "È strano che sia sparito così. →",
            "options": [
              "Era strano che fosse sparito così.",
              "Era strano che era sparito così.",
              "Era strano che sia sparito così."
            ],
            "answer": 0
          },
          {
            "q": "Mi dispiace che tu abbia rinunciato. →",
            "options": [
              "Mi dispiaceva che tu avessi rinunciato.",
              "Mi dispiaceva che tu avevi rinunciato.",
              "Mi dispiaceva che tu abbia rinunciato."
            ],
            "answer": 0
          },
          {
            "q": "Non è possibile che abbiano già consegnato. →",
            "options": [
              "Non era possibile che avessero già consegnato.",
              "Non era possibile che avevano già consegnato.",
              "Non era possibile che abbiano consegnato."
            ],
            "answer": 0
          },
          {
            "q": "Mi stupisce che siate arrivati prima. →",
            "options": [
              "Mi stupiva che foste arrivati prima.",
              "Mi stupiva che eravate arrivati prima.",
              "Mi stupiva che siate arrivati prima."
            ],
            "answer": 0
          },
          {
            "q": "Ho l'impressione che sia già successo. →",
            "options": [
              "Avevo l'impressione che fosse già successo.",
              "Avevo l'impressione che era già successo.",
              "Avevo l'impressione che sia successo."
            ],
            "answer": 0
          }
        ]
      }
    ]
  },
  {
    "lvl": "b2",
    "lez": [
      "B2 L20",
      "B2 L27"
    ],
    "title": "La concordanza dei tempi",
    "exercises": [
      {
        "type": "Riempimento",
        "fmt": "buco",
        "instr": "Scegli la forma verbale corretta.",
        "items": [
          {
            "q": "Penso che in questo momento ___ ragione lui, non tu.",
            "options": [
              "abbia",
              "avesse",
              "avrà avuto"
            ],
            "answer": 0
          },
          {
            "q": "All’epoca nessuno immaginava che il quartiere ___ così caro.",
            "options": [
              "diventasse",
              "diventi",
              "sia diventato"
            ],
            "answer": 0
          },
          {
            "q": "Credo che ___ partito ieri.",
            "options": [
              "sia",
              "fosse",
              "sarà"
            ],
            "answer": 0
          },
          {
            "q": "Dubitavo che qualcuno ___ entrato dopo la chiusura.",
            "options": [
              "fosse",
              "sia",
              "era"
            ],
            "answer": 0
          },
          {
            "q": "Mi pare che ieri ___ tutto bene.",
            "options": [
              "sia andato",
              "fosse andato",
              "vada"
            ],
            "answer": 0
          },
          {
            "q": "Temevo che tu ___ già in viaggio quando ho telefonato.",
            "options": [
              "fossi",
              "sia",
              "eri"
            ],
            "answer": 0
          }
        ]
      },
      {
        "type": "Correzione",
        "fmt": "errore",
        "instr": "Individua e clicca dove c'è l'errore.",
        "items": [
          {
            "q": "Pensavo che Marco abbia sbagliato strada e che fosse ancora lontano.",
            "wrong": "abbia",
            "fix": "avesse"
          },
          {
            "q": "Credo che oggi fossero già rientrati e che stiano bene.",
            "wrong": "fossero",
            "fix": "siano"
          },
          {
            "q": "Speravo che tu venga con noi e che restassi a cena.",
            "wrong": "venga",
            "fix": "venissi"
          },
          {
            "q": "Temevo che non capiate il problema e che vi arrabbiaste.",
            "wrong": "capiate",
            "fix": "capiste"
          },
          {
            "q": "È possibile che oggi avessero dimenticato l’appuntamento e che siano rimasti a casa.",
            "wrong": "avessero",
            "fix": "abbiano"
          },
          {
            "q": "Bisognava che arriviamo prima e che avvisassimo.",
            "wrong": "arriviamo",
            "fix": "arrivassimo"
          }
        ]
      },
      {
        "type": "Trasformazione",
        "fmt": "buco",
        "instr": "Riscrivi la frase al passato scegliendo la forma verbale corretta.",
        "items": [
          {
            "q": "Penso che sia in ritardo. →",
            "options": [
              "Pensavo che fosse in ritardo.",
              "Pensavo che sia in ritardo.",
              "Pensavo che era in ritardo."
            ],
            "answer": 0
          },
          {
            "q": "Credo che abbia già firmato. →",
            "options": [
              "Credevo che avesse già firmato.",
              "Credevo che abbia già firmato.",
              "Credevo che aveva già firmato."
            ],
            "answer": 0
          },
          {
            "q": "Spero che tu risponda. →",
            "options": [
              "Speravo che tu rispondessi.",
              "Speravo che tu risponda.",
              "Speravo che tu rispondevi."
            ],
            "answer": 0
          },
          {
            "q": "Ho paura che tu ti offenda. →",
            "options": [
              "Avevo paura che tu ti offendessi.",
              "Avevo paura che tu ti offenda.",
              "Avevo paura che tu ti offendevi."
            ],
            "answer": 0
          },
          {
            "q": "È possibile che abbiano sbagliato. →",
            "options": [
              "Era possibile che avessero sbagliato.",
              "Era possibile che abbiano sbagliato.",
              "Era possibile che avevano sbagliato."
            ],
            "answer": 0
          },
          {
            "q": "Occorre che firmiate oggi. →",
            "options": [
              "Occorreva che voi firmaste quel giorno.",
              "Occorreva che voi firmiate quel giorno.",
              "Occorreva che voi firmavate quel giorno."
            ],
            "answer": 0
          }
        ]
      }
    ],
    "diag": true
  },
  {
    "lvl": "b2",
    "lez": [
      "B2 L21",
      "C1 L14",
      "C1 L18",
      "C1 L24"
    ],
    "title": "Il periodo ipotetico del 3° tipo",
    "exercises": [
      {
        "type": "Riempimento",
        "fmt": "buco",
        "instr": "Scegli i tempi: l'ipotesi riguarda il passato e non si è realizzata.",
        "items": [
          {
            "q": "Se ___ la sveglia, non avrei perso il volo.",
            "options": [
              "avessi sentito",
              "avrei sentito",
              "sentivo"
            ],
            "answer": 0
          },
          {
            "q": "Se non si fosse distratto, ___ il rigore.",
            "options": [
              "avrebbe parato",
              "avesse parato",
              "parava"
            ],
            "answer": 0
          },
          {
            "q": "Se ___ prima, avremmo evitato la fila.",
            "options": [
              "fossimo venuti",
              "saremmo venuti",
              "venivamo"
            ],
            "answer": 0
          },
          {
            "q": "Se avessero risparmiato, ___ la casa.",
            "options": [
              "avrebbero comprato",
              "avessero comprato",
              "compravano"
            ],
            "answer": 0
          },
          {
            "q": "Se ___ meno vento, avremmo acceso il fuoco.",
            "options": [
              "ci fosse stato",
              "ci sarebbe stato",
              "c'era"
            ],
            "answer": 0
          },
          {
            "q": "Se avessi saputo l'orario, ti ___.",
            "options": [
              "avrei aspettato",
              "avessi aspettato",
              "aspettavo"
            ],
            "answer": 0
          }
        ]
      },
      {
        "type": "Correzione",
        "fmt": "errore",
        "instr": "Individua e clicca dove c'è l'errore.",
        "items": [
          {
            "q": "Se saremmo usciti prima, avremmo visto l'alba.",
            "wrong": "saremmo",
            "fix": "fossimo"
          },
          {
            "q": "Se tu avresti parlato, ti avrei aiutato.",
            "wrong": "avresti",
            "fix": "avessi"
          },
          {
            "q": "Se avrebbe controllato i conti, l'errore sarebbe emerso subito.",
            "wrong": "avrebbe",
            "fix": "avesse"
          },
          {
            "q": "Se non avesse nevicato, fossimo saliti in cima.",
            "wrong": "fossimo",
            "fix": "saremmo"
          },
          {
            "q": "Se me lo avresti chiesto, ti avrei prestato l'auto.",
            "wrong": "avresti",
            "fix": "avessi"
          },
          {
            "q": "Se si fossero iscritti, avessero avuto lo sconto.",
            "wrong": "avessero",
            "fix": "avrebbero"
          }
        ]
      },
      {
        "type": "Trasformazione",
        "fmt": "buco",
        "instr": "Costruisci l'ipotesi sul passato non realizzato.",
        "items": [
          {
            "q": "Non ha piovuto e il raccolto è andato perso.",
            "options": [
              "Se avesse piovuto, il raccolto non sarebbe andato perso.",
              "Se piovesse, il raccolto non andrebbe perso.",
              "Se avrebbe piovuto, il raccolto si sarebbe salvato."
            ],
            "answer": 0
          },
          {
            "q": "Non ci siamo iscritti e abbiamo perso l'occasione.",
            "options": [
              "Se ci fossimo iscritti, non avremmo perso l'occasione.",
              "Se ci iscrivessimo, non perderemmo l'occasione.",
              "Se ci saremmo iscritti, non avremmo perso."
            ],
            "answer": 0
          },
          {
            "q": "Ha risposto male e ha perso il posto.",
            "options": [
              "Se non avesse risposto male, non avrebbe perso il posto.",
              "Se non rispondesse male, non perderebbe il posto.",
              "Se non avrebbe risposto male, avrebbe il posto."
            ],
            "answer": 0
          },
          {
            "q": "Non hanno chiuso il gas e c'è stata una fuga.",
            "options": [
              "Se avessero chiuso il gas, non ci sarebbe stata una fuga.",
              "Se chiudessero il gas, non ci sarebbe una fuga.",
              "Se avrebbero chiuso il gas, non ci sarebbe stata fuga."
            ],
            "answer": 0
          },
          {
            "q": "Non ha preso l'ombrello ed è tornata bagnata.",
            "options": [
              "Se avesse preso l'ombrello, non sarebbe tornata bagnata.",
              "Se prendesse l'ombrello, non tornerebbe bagnata.",
              "Se avrebbe preso l'ombrello, sarebbe asciutta."
            ],
            "answer": 0
          },
          {
            "q": "Non avete prenotato e siete rimasti fuori.",
            "options": [
              "Se aveste prenotato, non sareste rimasti fuori.",
              "Se prenotaste, non restereste fuori.",
              "Se aveste prenotato, non foste rimasti fuori."
            ],
            "answer": 0
          }
        ]
      }
    ],
    "diag": true
  },
  {
    "lvl": "b2",
    "lez": [
      "B2 L22"
    ],
    "title": "Il futuro nel passato",
    "exercises": [
      {
        "type": "Riempimento",
        "fmt": "buco",
        "instr": "Riporta la frase al passato: scegli la forma corretta.",
        "items": [
          {
            "q": "Mia sorella ci aveva promesso che ci ___ un passaggio, e invece siamo andati in autobus.",
            "options": [
              "avrebbe dato",
              "darebbe",
              "darà"
            ],
            "answer": 0
          },
          {
            "q": "Prima dell'esame l'insegnante ci aveva avvisati che la prova ___ due ore.",
            "options": [
              "sarebbe durata",
              "durerebbe",
              "durerà"
            ],
            "answer": 0
          },
          {
            "q": "Giulia ci ha fatto sapere che ___ direttamente al ristorante, così l'abbiamo aspettata lì.",
            "options": [
              "sarebbe venuta",
              "sarebbe venuto",
              "verrà"
            ],
            "answer": 0
          },
          {
            "q": "I ragazzi avevano giurato che ___ per cena, e infatti alle otto e mezza erano a tavola.",
            "options": [
              "sarebbero rientrati",
              "sarebbe rientrato",
              "rientreranno"
            ],
            "answer": 0
          },
          {
            "q": "Mio nonno ripeteva sempre che un giorno ___ a vivere al mare, ma non si è mai mosso dal paese.",
            "options": [
              "sarebbe andato",
              "andrebbe",
              "andrà"
            ],
            "answer": 0
          },
          {
            "q": "Il proprietario mi aveva assicurato che ___ lui le spese del riscaldamento, poi è arrivata la bolletta.",
            "options": [
              "avrebbe pagato",
              "pagherebbe",
              "pagherà"
            ],
            "answer": 0
          }
        ]
      },
      {
        "type": "Correzione",
        "fmt": "errore",
        "instr": "Individua e clicca dove c'è l'errore.",
        "items": [
          {
            "q": "Anna mi aveva garantito che mi restituirebbe il dizionario entro venerdì, ma non me l'ha mai riportato.",
            "wrong": "restituirebbe",
            "fix": "avrebbe restituito"
          },
          {
            "q": "L'agenzia ci aveva comunicato che il volo partirà con tre ore di ritardo, e invece siamo decollati puntuali.",
            "wrong": "partirà",
            "fix": "sarebbe partito"
          },
          {
            "q": "Marta dice che ci raggiungerebbe alle otto: ha già prenotato per tutti.",
            "wrong": "raggiungerebbe",
            "fix": "raggiungerà"
          },
          {
            "q": "Mia madre aveva promesso che sarebbe venuto con noi al mare.",
            "wrong": "venuto",
            "fix": "venuta"
          },
          {
            "q": "L'elettricista ci ha assicurato che ripasserebbe il giorno dopo, e invece non si è più fatto vivo.",
            "wrong": "ripasserebbe",
            "fix": "sarebbe ripassato"
          },
          {
            "q": "Eravamo sicuri che la festa finirà presto, e invece è andata avanti fino all'alba.",
            "wrong": "finirà",
            "fix": "sarebbe finita"
          }
        ]
      },
      {
        "type": "Trasformazione",
        "fmt": "buco",
        "instr": "Riporta la frase al passato: scegli la versione corretta.",
        "items": [
          {
            "q": "«Domani ti riporto il trapano», mi ha detto Federico la settimana scorsa. →",
            "options": [
              "Federico mi ha detto che il giorno dopo mi avrebbe riportato il trapano.",
              "Federico mi ha detto che il giorno dopo mi riporterebbe il trapano.",
              "Federico mi ha detto che domani mi avrebbe riportato il trapano."
            ],
            "answer": 0
          },
          {
            "q": "«Passerò a prendervi alle otto», ci ha scritto Chiara. →",
            "options": [
              "Chiara ci ha scritto che sarebbe passata a prenderci alle otto.",
              "Chiara ci ha scritto che passerebbe a prenderci alle otto.",
              "Chiara ci ha scritto che sarebbe passata a prendervi alle otto."
            ],
            "answer": 0
          },
          {
            "q": "«Stasera non uscirò», ha detto Ilaria. →",
            "options": [
              "Ilaria ha detto che quella sera non sarebbe uscita.",
              "Ilaria ha detto che quella sera non uscirebbe.",
              "Ilaria ha detto che quella sera non sarebbe uscito."
            ],
            "answer": 0
          },
          {
            "q": "«Ci penseremo noi al giardino», hanno detto i miei cugini. →",
            "options": [
              "I miei cugini hanno detto che ci avrebbero pensato loro al giardino.",
              "I miei cugini hanno detto che ci penserebbero loro al giardino.",
              "I miei cugini hanno detto che ci avrebbero pensato noi al giardino."
            ],
            "answer": 0
          },
          {
            "q": "«Ne parleremo la settimana prossima», ha risposto la preside il mese scorso. →",
            "options": [
              "La preside ha risposto che ne avrebbero parlato la settimana successiva.",
              "La preside ha risposto che ne parlerebbero la settimana successiva.",
              "La preside ha risposto che ne avrebbero parlato la settimana prossima."
            ],
            "answer": 0
          },
          {
            "q": "«Non lo dimenticherò mai», ripeteva mia zia. →",
            "options": [
              "Mia zia ripeteva che non lo avrebbe mai dimenticato.",
              "Mia zia ripeteva che non lo dimenticherebbe mai.",
              "Mia zia ripeteva che non lo dimenticherà mai."
            ],
            "answer": 0
          }
        ]
      }
    ],
    "diag": true
  },
  {
    "lvl": "b2",
    "lez": [
      "B2 L22"
    ],
    "title": "I pronomi relativi composti (il quale)",
    "exercises": [
      {
        "type": "Riempimento",
        "fmt": "buco",
        "instr": "Scegli la forma corretta.",
        "items": [
          {
            "q": "È stato firmato un appello, ___ il sindaco non ha ancora risposto.",
            "options": [
              "al quale",
              "del quale",
              "sul quale"
            ],
            "answer": 0
          },
          {
            "q": "Il comune ha allestito due aree verdi, ___ è vietato l'ingresso ai cani.",
            "options": [
              "nelle quali",
              "sulle quali",
              "dalle quali"
            ],
            "answer": 0
          },
          {
            "q": "La giunta ha stanziato una somma, ___ verranno pagati i lavori del tetto.",
            "options": [
              "con la quale",
              "dalla quale",
              "nella quale"
            ],
            "answer": 0
          },
          {
            "q": "La relazione cita due ricerche recenti, ___ però non indica gli autori.",
            "options": [
              "delle quali",
              "alle quali",
              "dalle quali"
            ],
            "answer": 0
          },
          {
            "q": "Il contratto contiene una clausola ___ nessuno si era soffermato.",
            "options": [
              "sulla quale",
              "della quale",
              "alla quale"
            ],
            "answer": 0
          },
          {
            "q": "Il consiglio ha approvato il restauro, ___ sono stati stanziati due milioni.",
            "options": [
              "per il quale",
              "dal quale",
              "nel quale"
            ],
            "answer": 0
          }
        ]
      },
      {
        "type": "Correzione",
        "fmt": "errore",
        "instr": "Individua e clicca dove c'è l'errore.",
        "items": [
          {
            "q": "Le circolari alle quale il personale deve attenersi sono due.",
            "wrong": "quale",
            "fix": "quali"
          },
          {
            "q": "Il bando per la quale abbiamo presentato domanda l'anno scorso è scaduto.",
            "wrong": "la",
            "fix": "il"
          },
          {
            "q": "Le aule nei quali si tengono gli esami sono al secondo piano.",
            "wrong": "nei",
            "fix": "nelle"
          },
          {
            "q": "Nella relazione ci sono due tabelle sui quali si basa tutta la conclusione.",
            "wrong": "sui",
            "fix": "sulle"
          },
          {
            "q": "Le associazioni ai quali il comune ha dato il contributo sono cinque.",
            "wrong": "ai",
            "fix": "alle"
          },
          {
            "q": "I documenti con le quali si presenta la domanda vanno firmati.",
            "wrong": "le",
            "fix": "i"
          }
        ]
      },
      {
        "type": "Riempimento",
        "fmt": "buco",
        "instr": "Scegli la forma corretta: fra parentesi è indicato a chi o a che cosa si riferisce.",
        "items": [
          {
            "q": "Ho conosciuto il marito della professoressa, ___ non avevo mai sentito parlare. (del marito)",
            "options": [
              "del quale",
              "della quale",
              "dei quali"
            ],
            "answer": 0
          },
          {
            "q": "Sabato ho rivisto il fratello di Sonia, ___ non parlavo da anni. (con Sonia)",
            "options": [
              "con la quale",
              "con il quale",
              "con i quali"
            ],
            "answer": 0
          },
          {
            "q": "Mi ha risposto la segretaria del direttore, ___ era in riunione. (il direttore)",
            "options": [
              "il quale",
              "la quale",
              "i quali"
            ],
            "answer": 0
          },
          {
            "q": "Ho restituito il libro alla sorella di Lucia, ___ avevo scritto il mio nome. (sul libro)",
            "options": [
              "sul quale",
              "sulla quale",
              "sui quali"
            ],
            "answer": 0
          },
          {
            "q": "Hanno licenziato la figlia del proprietario, ___ non si presentava mai in cantiere. (la figlia)",
            "options": [
              "la quale",
              "il quale",
              "le quali"
            ],
            "answer": 0
          },
          {
            "q": "Abbiamo ospitato l'amico dei miei cugini, ___ non venivano in Italia da dieci anni. (i cugini)",
            "options": [
              "i quali",
              "il quale",
              "le quali"
            ],
            "answer": 0
          }
        ]
      }
    ]
  },
  {
    "lvl": "b2",
    "lez": [
      "B2 L23",
      "B2 L25"
    ],
    "title": "Le forme impersonali",
    "exercises": [
      {
        "type": "Riempimento",
        "fmt": "buco",
        "instr": "Scegli la forma impersonale corretta.",
        "items": [
          {
            "q": "___ molto tempo per ottenere il permesso.",
            "options": [
              "Ci vuole",
              "Ci vogliono",
              "Si vuole"
            ],
            "answer": 0
          },
          {
            "q": "___ di procedere con cautela.",
            "options": [
              "Si consiglia",
              "Si consigliano",
              "Sono consigliati"
            ],
            "answer": 0
          },
          {
            "q": "___ raro trovare un posto libero.",
            "options": [
              "È",
              "Sono",
              "Si è"
            ],
            "answer": 0
          },
          {
            "q": "___ che la ditta abbia chiuso.",
            "options": [
              "Corre voce",
              "Corrono voce",
              "Corre voci"
            ],
            "answer": 0
          },
          {
            "q": "___ poco per rovinare tutto.",
            "options": [
              "Basta",
              "Bastano",
              "Si basta"
            ],
            "answer": 0
          },
          {
            "q": "___ che i lavori finiscano a marzo.",
            "options": [
              "Si prevede",
              "Si prevedono",
              "Sono previsti che"
            ],
            "answer": 0
          }
        ]
      },
      {
        "type": "Correzione",
        "fmt": "errore",
        "instr": "Individua e clicca dove c'è l'errore.",
        "items": [
          {
            "q": "Si narrano che il castello sia infestato.",
            "wrong": "narrano",
            "fix": "narra"
          },
          {
            "q": "Paiono che manchi qualcosa.",
            "wrong": "Paiono",
            "fix": "Pare"
          },
          {
            "q": "Sono sufficiente una firma sola.",
            "wrong": "Sono",
            "fix": "È"
          },
          {
            "q": "Si suppongono che il treno sia in orario.",
            "wrong": "suppongono",
            "fix": "suppone"
          },
          {
            "q": "Occorrono avvisare la direzione.",
            "wrong": "Occorrono",
            "fix": "Occorre"
          },
          {
            "q": "Si stimano che i partecipanti siano circa mille.",
            "wrong": "stimano",
            "fix": "stima"
          }
        ]
      },
      {
        "type": "Trasformazione",
        "fmt": "buco",
        "instr": "Rendi impersonale la frase.",
        "items": [
          {
            "q": "Molti ritengono la proposta valida. →",
            "options": [
              "Si ritiene che la proposta sia valida.",
              "Si ritengono che la proposta sia valida.",
              "È ritenuto che sia valida."
            ],
            "answer": 0
          },
          {
            "q": "Probabilmente nevicherà stanotte. →",
            "options": [
              "È probabile che nevichi stanotte.",
              "Sono probabili che nevichi.",
              "Si è probabile che nevichi."
            ],
            "answer": 0
          },
          {
            "q": "Faremmo meglio ad aspettare. →",
            "options": [
              "Converrebbe aspettare.",
              "Converrebbero aspettare.",
              "Si converrebbe aspettare."
            ],
            "answer": 0
          },
          {
            "q": "La gente racconta che qui visse un poeta. →",
            "options": [
              "Si narra che qui visse un poeta.",
              "Si narrano che qui visse un poeta.",
              "È narrato che visse un poeta."
            ],
            "answer": 0
          },
          {
            "q": "Girano voci di una chiusura. →",
            "options": [
              "Si vocifera che chiuderanno.",
              "Si vociferano che chiuderanno.",
              "È vociferato che chiuderanno."
            ],
            "answer": 0
          },
          {
            "q": "Dobbiamo intervenire al più presto. →",
            "options": [
              "Occorre intervenire al più presto.",
              "Occorrono intervenire al più presto.",
              "Si occorre intervenire."
            ],
            "answer": 0
          }
        ]
      }
    ]
  },
  {
    "lvl": "b2",
    "lez": [
      "B2 L24"
    ],
    "title": "Il gerundio semplice e composto",
    "exercises": [
      {
        "type": "Riempimento",
        "fmt": "buco",
        "instr": "Scegli la forma corretta del gerundio.",
        "items": [
          {
            "q": "Ha imparato il tedesco ___ le serie in lingua originale.",
            "options": [
              "guardando",
              "avendo guardato",
              "avendo guardate"
            ],
            "answer": 0
          },
          {
            "q": "___ l'ultimo treno, ha dormito in stazione.",
            "options": [
              "Avendo perso",
              "Perdendo",
              "Avendo persa"
            ],
            "answer": 0
          },
          {
            "q": "Si è storta la caviglia ___ giù per le scale.",
            "options": [
              "correndo",
              "essendo corsa",
              "avendo corso"
            ],
            "answer": 0
          },
          {
            "q": "___ in ritardo alla cerimonia, adesso sono in fondo e non vedono quasi niente.",
            "options": [
              "Essendo arrivati",
              "Arrivando",
              "Essendo arrivate"
            ],
            "answer": 0
          },
          {
            "q": "Ci siamo conosciuti ___ in fila alla posta.",
            "options": [
              "aspettando",
              "avendo aspettato",
              "essendo aspettati"
            ],
            "answer": 0
          },
          {
            "q": "___ tutti gli scatoloni in cantina, adesso Marco non trova più i libri.",
            "options": [
              "Avendo messo",
              "Mettendo",
              "Avendo messe"
            ],
            "answer": 0
          }
        ]
      },
      {
        "type": "Correzione",
        "fmt": "errore",
        "instr": "Individua e clicca dove c'è l'errore.",
        "items": [
          {
            "q": "Marta, avendo uscita di casa più tardi del solito, ha perso il treno.",
            "wrong": "avendo",
            "fix": "essendo"
          },
          {
            "q": "Essendo perso le chiavi, ha dovuto chiamare il fabbro.",
            "wrong": "Essendo",
            "fix": "avendo"
          },
          {
            "q": "Essendo arrivato in anticipo, mia sorella ha aspettato al bar.",
            "wrong": "arrivato",
            "fix": "arrivata"
          },
          {
            "q": "Studiando in Germania per due anni, adesso parla benissimo il tedesco.",
            "wrong": "Studiando",
            "fix": "avendo studiato"
          },
          {
            "q": "La sera non ha cenato, mangiando troppo a pranzo.",
            "wrong": "mangiando",
            "fix": "avendo mangiato"
          },
          {
            "q": "Mio fratello, essendosi trasferita a Milano, viene a trovarci raramente.",
            "wrong": "trasferita",
            "fix": "trasferito"
          }
        ]
      },
      {
        "type": "Riempimento",
        "fmt": "buco",
        "instr": "Scegli il gerundio composto corretto.",
        "items": [
          {
            "q": "___ tardi, le ragazze hanno trovato il portone chiuso.",
            "options": [
              "Essendo tornate",
              "Essendo tornati",
              "Essendo tornata"
            ],
            "answer": 0
          },
          {
            "q": "___ il turno, i due infermieri sono andati a casa.",
            "options": [
              "Avendo finito",
              "Avendo finiti",
              "Essendo finiti"
            ],
            "answer": 0
          },
          {
            "q": "___ in fretta, mia zia ha dimenticato il telefono sul comodino.",
            "options": [
              "Essendosi vestita",
              "Essendosi vestito",
              "Essendo vestita"
            ],
            "answer": 0
          },
          {
            "q": "___ dal treno, i turisti hanno cercato subito un taxi.",
            "options": [
              "Essendo scesi",
              "Essendo scese",
              "Essendo sceso"
            ],
            "answer": 0
          },
          {
            "q": "___ tutti i documenti, l'avvocato ha chiuso la pratica.",
            "options": [
              "Avendo raccolto",
              "Avendo raccolta",
              "Essendo raccolto"
            ],
            "answer": 0
          },
          {
            "q": "___ presto, mio fratello è riuscito a prendere il primo treno.",
            "options": [
              "Essendosi alzato",
              "Essendosi alzata",
              "Essendo alzato"
            ],
            "answer": 0
          }
        ]
      }
    ]
  },
  {
    "lvl": "b2",
    "lez": [
      "B2 L24"
    ],
    "title": "Le preposizioni di luogo e movimento",
    "exercises": [
      {
        "type": "Riempimento",
        "fmt": "buco",
        "instr": "Scegli la preposizione corretta.",
        "items": [
          {
            "q": "Mia sorella insegna ___ una scuola di montagna.",
            "options": [
              "in",
              "a",
              "su"
            ],
            "answer": 0
          },
          {
            "q": "Hanno dipinto un murale ___ parete di fondo.",
            "options": [
              "sulla",
              "nella",
              "alla"
            ],
            "answer": 0
          },
          {
            "q": "D'inverno i miei nonni vivono ___ Puglia.",
            "options": [
              "in",
              "a",
              "da"
            ],
            "answer": 0
          },
          {
            "q": "Ci vediamo ___ Bergamo, sotto i portici.",
            "options": [
              "a",
              "in",
              "da"
            ],
            "answer": 0
          },
          {
            "q": "Sono ___ dentista, ti richiamo dopo.",
            "options": [
              "dal",
              "al",
              "da"
            ],
            "answer": 0
          },
          {
            "q": "Il distributore è ___ il ponte e la rotonda.",
            "options": [
              "tra",
              "verso",
              "oltre"
            ],
            "answer": 0
          }
        ]
      },
      {
        "type": "Correzione",
        "fmt": "errore",
        "instr": "Individua e clicca dove c'è l'errore.",
        "items": [
          {
            "q": "Studia medicina in Bologna da tre anni.",
            "wrong": "in",
            "fix": "a"
          },
          {
            "q": "L'anno prossimo andremo a Danimarca per il matrimonio.",
            "wrong": "a",
            "fix": "in"
          },
          {
            "q": "Il sabato accompagno i bambini al nonno.",
            "wrong": "al",
            "fix": "dal"
          },
          {
            "q": "Il corteo si è diretto per il municipio.",
            "wrong": "per",
            "fix": "verso"
          },
          {
            "q": "Ho lasciato la borsa nella sedia dell'ingresso.",
            "wrong": "nella",
            "fix": "sulla"
          },
          {
            "q": "Prima di andare in ufficio passo per il dentista.",
            "wrong": "per",
            "fix": "dal"
          }
        ]
      },
      {
        "type": "Riempimento",
        "fmt": "buco",
        "instr": "Scegli la preposizione corretta.",
        "items": [
          {
            "q": "Quest'estate andiamo ___ Norvegia in camper.",
            "options": [
              "in",
              "a",
              "per"
            ],
            "answer": 0
          },
          {
            "q": "Domani partiamo ___ Genova, dove ci aspetta mia zia.",
            "options": [
              "per",
              "a",
              "verso"
            ],
            "answer": 0
          },
          {
            "q": "Prima del lago si passa ___ un tunnel lungo tre chilometri.",
            "options": [
              "per",
              "in",
              "su"
            ],
            "answer": 0
          },
          {
            "q": "Appena finito il turno è tornato ___ suoi in campagna.",
            "options": [
              "dai",
              "ai",
              "nei"
            ],
            "answer": 0
          },
          {
            "q": "Ha fatto qualche passo ___ porta, poi si è fermato.",
            "options": [
              "verso la",
              "alla",
              "dalla"
            ],
            "answer": 0
          },
          {
            "q": "Vengo ___ una famiglia di panettieri.",
            "options": [
              "da",
              "di",
              "per"
            ],
            "answer": 0
          }
        ]
      }
    ]
  },
  {
    "lvl": "b2",
    "lez": [
      "B2 L25"
    ],
    "title": "L'infinito sostantivato e l'infinito passato",
    "exercises": [
      {
        "type": "Riempimento",
        "fmt": "buco",
        "instr": "Scegli la forma corretta dell'infinito.",
        "items": [
          {
            "q": "___ fa bene alla salute.",
            "options": [
              "Il camminare",
              "Camminato",
              "Camminando"
            ],
            "answer": 0
          },
          {
            "q": "Dopo ___, siamo usciti.",
            "options": [
              "aver mangiato",
              "mangiare",
              "mangiando"
            ],
            "answer": 0
          },
          {
            "q": "___ è un'arte difficile.",
            "options": [
              "Lo scrivere",
              "Scritto",
              "Scrivendo"
            ],
            "answer": 0
          },
          {
            "q": "___ troppo fa male.",
            "options": [
              "Il fumare",
              "Fumato",
              "Fumando"
            ],
            "answer": 0
          },
          {
            "q": "Dopo ___, si è sentito meglio.",
            "options": [
              "essersi riposato",
              "riposarsi",
              "riposandosi"
            ],
            "answer": 0
          },
          {
            "q": "Dopo ___ in hotel, sono usciti a cena.",
            "options": [
              "essere arrivati",
              "arrivare",
              "arrivando"
            ],
            "answer": 0
          }
        ]
      },
      {
        "type": "Correzione",
        "fmt": "errore",
        "instr": "Individua e clicca dove c'è l'errore.",
        "items": [
          {
            "q": "Ieri, dopo cenare, abbiamo giocato a carte tutta la sera.",
            "wrong": "cenare",
            "fix": "aver cenato"
          },
          {
            "q": "Anche il correndo al mattino mi rilassa.",
            "wrong": "correndo",
            "fix": "correre"
          },
          {
            "q": "Solo dopo discutere, hanno trovato un accordo.",
            "wrong": "discutere",
            "fix": "aver discusso"
          },
          {
            "q": "Il dipingendo richiede pazienza.",
            "wrong": "dipingendo",
            "fix": "dipingere"
          },
          {
            "q": "Marco ha aperto tutte le finestre dopo alzarsi dal letto.",
            "wrong": "alzarsi",
            "fix": "essersi alzato"
          },
          {
            "q": "Dopo avere mangiare troppo, si è sentito male.",
            "wrong": "mangiare",
            "fix": "mangiato"
          }
        ]
      },
      {
        "type": "Trasformazione",
        "fmt": "buco",
        "instr": "Riscrivi usando l'infinito passato o l'infinito usato come soggetto.",
        "items": [
          {
            "q": "Quando ha telefonato, si è calmata. →",
            "options": [
              "Dopo aver telefonato, si è calmata.",
              "Dopo telefonare, si è calmata.",
              "Dopo telefonando, si è calmata."
            ],
            "answer": 0
          },
          {
            "q": "Mi diverte cucinare. →",
            "options": [
              "Il cucinare mi diverte.",
              "Cucinando mi diverte.",
              "Cucinato mi diverte."
            ],
            "answer": 0
          },
          {
            "q": "Quando è salita, ha chiuso il portone. →",
            "options": [
              "Dopo essere salita, ha chiuso il portone.",
              "Dopo aver salita, ha chiuso il portone.",
              "Dopo salire, ha chiuso il portone."
            ],
            "answer": 0
          },
          {
            "q": "Quando si sono vestiti, sono usciti. →",
            "options": [
              "Dopo essersi vestiti, sono usciti.",
              "Dopo aversi vestiti, sono usciti.",
              "Dopo vestirsi, sono usciti."
            ],
            "answer": 0
          },
          {
            "q": "Mi stanca dormire poco. →",
            "options": [
              "Il dormire poco mi stanca.",
              "Dormendo poco mi stanca.",
              "Dormito poco mi stanca."
            ],
            "answer": 0
          },
          {
            "q": "Quando si è laureata, ha festeggiato. →",
            "options": [
              "Dopo essersi laureata, ha festeggiato.",
              "Dopo aversi laureata, ha festeggiato.",
              "Dopo laurearsi, ha festeggiato."
            ],
            "answer": 0
          }
        ]
      }
    ]
  },
  {
    "lvl": "b2",
    "lez": [
      "B2 L26"
    ],
    "title": "I connettivi di causa e conseguenza",
    "exercises": [
      {
        "type": "Riempimento",
        "fmt": "buco",
        "instr": "Scegli il connettivo adatto alla relazione.",
        "items": [
          {
            "q": "___ maltempo, il volo è stato cancellato.",
            "options": [
              "A causa del",
              "Grazie al",
              "Poiché il"
            ],
            "answer": 0
          },
          {
            "q": "___ al suo aiuto, ho finito in tempo.",
            "options": [
              "Grazie",
              "A causa",
              "Malgrado"
            ],
            "answer": 0
          },
          {
            "q": "Era stanco, ___ è andato a dormire.",
            "options": [
              "pertanto",
              "poiché",
              "sebbene"
            ],
            "answer": 0
          },
          {
            "q": "___ pioveva, siamo rimasti dentro.",
            "options": [
              "Poiché",
              "Pertanto",
              "Quindi"
            ],
            "answer": 0
          },
          {
            "q": "Il traffico era intenso, ___ ho tardato.",
            "options": [
              "di conseguenza",
              "poiché",
              "siccome"
            ],
            "answer": 0
          },
          {
            "q": "Ha lavorato sodo, ___ ha ottenuto il posto.",
            "options": [
              "perciò",
              "poiché",
              "dato che"
            ],
            "answer": 0
          }
        ]
      },
      {
        "type": "Correzione",
        "fmt": "errore",
        "instr": "Individua e clicca dove c'è l'errore.",
        "items": [
          {
            "q": "Poiché fosse già tardi, siamo rientrati subito.",
            "wrong": "fosse",
            "fix": "era"
          },
          {
            "q": "Marta aveva fame, siccome ha ordinato un panino.",
            "wrong": "siccome",
            "fix": "perciò"
          },
          {
            "q": "Dato che nevicava, quindi le scuole sono rimaste chiuse.",
            "wrong": "quindi",
            "fix": "(togliere)"
          },
          {
            "q": "Visto che il negozio fosse chiuso, siamo tornati indietro.",
            "wrong": "fosse",
            "fix": "era"
          },
          {
            "q": "Il locale era al completo, poiché abbiamo cambiato programma.",
            "wrong": "poiché",
            "fix": "perciò"
          },
          {
            "q": "Poiché piovesse forte, la partita è stata rinviata.",
            "wrong": "piovesse",
            "fix": "pioveva"
          }
        ]
      },
      {
        "type": "Trasformazione",
        "fmt": "buco",
        "instr": "Unisci le due frasi esprimendo causa o conseguenza.",
        "items": [
          {
            "q": "Mancava la corrente. Abbiamo cenato a lume di candela.",
            "options": [
              "Poiché mancava la corrente, abbiamo cenato a lume di candela.",
              "Pertanto mancava la corrente, abbiamo cenato al buio.",
              "Grazie alla mancanza di corrente abbiamo cenato."
            ],
            "answer": 0
          },
          {
            "q": "Il medico è stato bravo. Sono guarito in fretta.",
            "options": [
              "Grazie al medico sono guarito in fretta.",
              "A causa del medico sono guarito in fretta.",
              "Nonostante il medico sono guarito."
            ],
            "answer": 0
          },
          {
            "q": "Il ristorante era pieno. Abbiamo mangiato un panino.",
            "options": [
              "Il ristorante era pieno, perciò abbiamo mangiato un panino.",
              "Il ristorante era pieno, poiché abbiamo mangiato un panino.",
              "Il ristorante era pieno, grazie a un panino."
            ],
            "answer": 0
          },
          {
            "q": "Non aveva la patente. Ha preso il treno.",
            "options": [
              "Siccome non aveva la patente, ha preso il treno.",
              "Pertanto non aveva la patente, ha preso il treno.",
              "Grazie alla patente ha preso il treno."
            ],
            "answer": 0
          },
          {
            "q": "Lo sciopero è durato tre giorni. La merce non è arrivata.",
            "options": [
              "A causa dello sciopero la merce non è arrivata.",
              "Grazie allo sciopero la merce non è arrivata.",
              "Nonostante lo sciopero la merce non è arrivata."
            ],
            "answer": 0
          },
          {
            "q": "Il portatile si è rotto. Abbiamo perso tutti i file.",
            "options": [
              "Il portatile si è rotto, di conseguenza abbiamo perso tutti i file.",
              "Il portatile si è rotto, poiché abbiamo perso tutti i file.",
              "Il portatile si è rotto, grazie a tutti i file persi."
            ],
            "answer": 0
          }
        ]
      }
    ]
  },
  {
    "lvl": "b2",
    "lez": [
      "B2 L27"
    ],
    "title": "Il trapassato prossimo",
    "exercises": [
      {
        "type": "Riempimento",
        "fmt": "fill",
        "instr": "Scrivi l'ausiliare all'imperfetto.",
        "items": [
          {
            "q": "Quando sono arrivato, lui ___ già uscito. (essere)",
            "a": "era",
            "no": [
              "è",
              "fosse",
              "sarebbe"
            ]
          },
          {
            "q": "Mi ha detto che ___ perso il treno. (avere)",
            "a": "aveva",
            "no": [
              "ha",
              "avesse",
              "avrebbe"
            ]
          },
          {
            "q": "Quando siamo entrati, il film ___ già cominciato. (essere)",
            "a": "era",
            "no": [
              "è",
              "fosse",
              "sarebbe"
            ]
          },
          {
            "q": "Ci ha raccontato che ___ vissuto a Parigi. (avere)",
            "a": "aveva",
            "no": [
              "ha",
              "avesse",
              "avrebbe"
            ]
          },
          {
            "q": "Quando l'ho chiamata, ___ già partita. (essere)",
            "a": "era",
            "no": [
              "è",
              "fosse",
              "sarebbe"
            ]
          },
          {
            "q": "Hanno ammesso che ___ sbagliato tutto. (avere)",
            "a": "avevano",
            "no": [
              "hanno",
              "avessero",
              "avrebbero"
            ]
          }
        ]
      },
      {
        "type": "Correzione",
        "fmt": "errore",
        "instr": "Individua e clicca dove c'è l'errore.",
        "items": [
          {
            "q": "Appena entrai in sala, il concerto è già iniziato.",
            "wrong": "è",
            "fix": "era"
          },
          {
            "q": "La sera ammise che rompeva il vaso quella mattina.",
            "wrong": "rompeva",
            "fix": "aveva rotto"
          },
          {
            "q": "Al mio ritorno, i ladri sono già scappati.",
            "wrong": "sono",
            "fix": "erano"
          },
          {
            "q": "Ci rivelò più tardi che ha mentito a tutti.",
            "wrong": "ha",
            "fix": "aveva"
          },
          {
            "q": "Allo sportello mi dissero che il modulo è già scaduto.",
            "wrong": "è",
            "fix": "era"
          },
          {
            "q": "Il giorno dopo capimmo che hanno esagerato.",
            "wrong": "hanno",
            "fix": "avevano"
          }
        ]
      },
      {
        "type": "Trasformazione",
        "fmt": "buco",
        "instr": "Riscrivi la frase usando il trapassato prossimo.",
        "items": [
          {
            "q": "Prima ha piovuto, poi siamo usciti. →",
            "options": [
              "Quando siamo usciti, aveva piovuto.",
              "Quando siamo usciti, ha piovuto.",
              "Quando siamo usciti, avesse piovuto."
            ],
            "answer": 0
          },
          {
            "q": "Prima ha venduto la casa, poi ce l'ha detto. →",
            "options": [
              "Ci disse che aveva venduto la casa.",
              "Ci disse che ha venduto la casa.",
              "Ci disse che avesse venduto la casa."
            ],
            "answer": 0
          },
          {
            "q": "Prima sono partiti, poi li ho cercati. →",
            "options": [
              "Quando li ho cercati, erano partiti.",
              "Quando li ho cercati, sono partiti.",
              "Quando li ho cercati, fossero partiti."
            ],
            "answer": 0
          },
          {
            "q": "Prima è finita la benzina, poi ci siamo fermati. →",
            "options": [
              "Ci fermammo perché era finita la benzina.",
              "Ci fermammo perché è finita la benzina.",
              "Ci fermammo perché fosse finita la benzina."
            ],
            "answer": 0
          },
          {
            "q": "Prima si è rotto il vetro, poi ho visto che era rotto. →",
            "options": [
              "Vidi che il vetro si era rotto.",
              "Vidi che il vetro si è rotto.",
              "Vidi che il vetro si fosse rotto."
            ],
            "answer": 0
          },
          {
            "q": "Prima ha spento il forno, poi è uscita. →",
            "options": [
              "Uscì dopo che aveva spento il forno.",
              "Uscì dopo che ha spento il forno.",
              "Uscì dopo che avesse spento il forno."
            ],
            "answer": 0
          }
        ]
      }
    ]
  },
  {
    "lvl": "b2",
    "lez": [
      "B2 L28"
    ],
    "title": "Le relative esplicative e limitative",
    "exercises": [
      {
        "type": "Riempimento",
        "fmt": "buco",
        "instr": "Scegli la forma corretta del verbo.",
        "items": [
          {
            "q": "Cerco da settimane un centro sportivo che ___ anche di notte, ma tutti quelli della zona chiudono alle nove.",
            "options": [
              "apra",
              "apre",
              "aprisse"
            ],
            "answer": 0
          },
          {
            "q": "Ai miei genitori serve un'assicurazione che ___ anche i danni dell'acqua, ma quelle che ci hanno proposto lo escludono.",
            "options": [
              "copra",
              "copre",
              "coprisse"
            ],
            "answer": 0
          },
          {
            "q": "Alla fine ho ritrovato il vivaio che ___ quelle rose antiche: era in fondo alla provinciale.",
            "options": [
              "vende",
              "venda",
              "vendesse"
            ],
            "answer": 0
          },
          {
            "q": "Cerchiamo un corso serale che ___ prima delle otto, ma in città non ne organizzano.",
            "options": [
              "finisca",
              "finisce",
              "finisse"
            ],
            "answer": 0
          },
          {
            "q": "La clinica dove lavoro ha un veterinario che ___ anche i conigli: lo fa da vent'anni.",
            "options": [
              "visita",
              "visiti",
              "visitasse"
            ],
            "answer": 0
          },
          {
            "q": "Il torneo è stato salvato dall'arbitro che ___ alle ferie per venire.",
            "options": [
              "ha rinunciato",
              "abbia rinunciato",
              "rinunciasse"
            ],
            "answer": 0
          }
        ]
      },
      {
        "type": "Comprensione",
        "fmt": "buco",
        "instr": "Scegli l'interpretazione corretta della frase.",
        "items": [
          {
            "q": "«Gli abbonati che hanno rinnovato entro marzo pagano la vecchia tariffa.»",
            "options": [
              "Solo una parte degli abbonati paga la vecchia tariffa.",
              "Tutti gli abbonati pagano la vecchia tariffa.",
              "La vecchia tariffa vale per chiunque fino a marzo."
            ],
            "answer": 0
          },
          {
            "q": "«Non ho avvisato i corsisti, che erano già andati via.»",
            "options": [
              "Non ho avvisato nessun corsista.",
              "Ho avvisato solo i corsisti che erano ancora presenti.",
              "Ho avvisato i corsisti prima che andassero via."
            ],
            "answer": 0
          },
          {
            "q": "«I passeggeri, che avevano cambiato treno a Verona, hanno perso la coincidenza.»",
            "options": [
              "Tutti i passeggeri hanno perso la coincidenza, e tutti avevano cambiato treno a Verona.",
              "Solo i passeggeri che avevano cambiato treno a Verona hanno perso la coincidenza.",
              "I passeggeri hanno cambiato treno a Verona perché avevano perso la coincidenza."
            ],
            "answer": 0
          },
          {
            "q": "«Non ho premiato i tesserati che si sono iscritti in ritardo.»",
            "options": [
              "La frase non dice niente sui tesserati iscritti in tempo.",
              "Nessun tesserato è stato premiato.",
              "Tutti i tesserati si sono iscritti in ritardo."
            ],
            "answer": 0
          },
          {
            "q": "«I candidati che avevano presentato la domanda incompleta sono stati richiamati.»",
            "options": [
              "Solo una parte dei candidati è stata richiamata.",
              "Tutti i candidati sono stati richiamati, perché avevano presentato la domanda incompleta.",
              "I candidati sono stati richiamati prima di presentare la domanda."
            ],
            "answer": 0
          },
          {
            "q": "«Ho ringraziato i volontari, che avevano lavorato fino a tarda sera.»",
            "options": [
              "Ho ringraziato tutti i volontari.",
              "Ho ringraziato solo i volontari che avevano lavorato fino a tarda sera.",
              "I volontari hanno lavorato fino a tarda sera per essere ringraziati."
            ],
            "answer": 0
          }
        ]
      },
      {
        "type": "Correzione",
        "fmt": "errore",
        "instr": "In un testo scritto formale, individua e clicca dove c'è l'errore.",
        "items": [
          {
            "q": "La direttrice della piscina, che arrivi ogni mattina alle sette, controlla di persona l'acqua.",
            "wrong": "arrivi",
            "fix": "arriva"
          },
          {
            "q": "Da mesi cerchiamo un traduttore che consegna in giornata, ma nessuna agenzia ce ne ha proposto uno.",
            "wrong": "consegna",
            "fix": "consegni"
          },
          {
            "q": "In questa zona non c'è nessun ambulatorio che fa i prelievi il sabato mattina.",
            "wrong": "fa",
            "fix": "faccia"
          },
          {
            "q": "Ho scritto al presidente del circolo, che conosca bene la situazione da anni.",
            "wrong": "conosca",
            "fix": "conosce"
          },
          {
            "q": "Vorrei una valigia che entra nella cappelliera, ma non ne trovo una abbastanza piccola.",
            "wrong": "entra",
            "fix": "entri"
          },
          {
            "q": "L'apicoltore del paese, che abbia trecento arnie, vende il miele al mercato.",
            "wrong": "abbia",
            "fix": "ha"
          }
        ]
      }
    ]
  },
  {
    "lvl": "b2",
    "lez": [
      "B2 L29"
    ],
    "title": "Il costrutto causativo (far fare, farsi fare, lasciare + infinito)",
    "exercises": [
      {
        "type": "Composizione",
        "fmt": "ordina",
        "instr": "Completa la frase: clicca le parole nell'ordine giusto. Alcune non servono.",
        "items": [
          {
            "q": "Il menù era tutto in giapponese, così ___ dal cameriere.",
            "sol": [
              "me",
              "lo",
              "sono",
              "fatto",
              "tradurre"
            ],
            "extra": [
              "mi",
              "fatta"
            ]
          },
          {
            "q": "L'orologio di mio nonno si era fermato e ___ da un artigiano.",
            "sol": [
              "l'ho",
              "fatto",
              "riparare"
            ],
            "extra": [
              "gli",
              "fatta"
            ]
          },
          {
            "q": "So che hai una foto di quella sera: ___, sono curioso.",
            "sol": [
              "fammela",
              "vedere"
            ],
            "extra": [
              "famela",
              "fammelo"
            ]
          },
          {
            "q": "I bambini non hanno ancora finito: ___ altri dieci minuti.",
            "sol": [
              "lasciali",
              "giocare"
            ],
            "extra": [
              "lasciagli",
              "lasciare"
            ]
          },
          {
            "q": "Il pullman era in ritardo e ___ mezz'ora sotto il sole.",
            "sol": [
              "ci",
              "ha",
              "fatto",
              "aspettare"
            ],
            "extra": [
              "ce",
              "fatta"
            ]
          },
          {
            "q": "Non voglio scegliere io il film: ___.",
            "sol": [
              "lascia",
              "che",
              "decida",
              "lui"
            ],
            "extra": [
              "lascialo",
              "decide"
            ]
          }
        ]
      },
      {
        "type": "Riempimento",
        "fmt": "buco",
        "instr": "Scegli la costruzione adatta alla situazione.",
        "items": [
          {
            "q": "Il cuoco sa quello che fa: preferisco ___ in pace e non stargli addosso.",
            "options": [
              "lasciarlo lavorare",
              "farlo lavorare",
              "lasciargli lavorare"
            ],
            "answer": 0
          },
          {
            "q": "Quel parcheggio è carissimo: ___ pagare dieci euro anche per mezz'ora.",
            "options": [
              "fanno",
              "lasciano",
              "obbligano"
            ],
            "answer": 0
          },
          {
            "q": "I ragazzi hanno finito i compiti, così stasera ___ fino a tardi.",
            "options": [
              "li lasciamo uscire",
              "li facciamo uscire",
              "gli lasciamo uscire"
            ],
            "answer": 0
          },
          {
            "q": "Il ventilatore non parte più: domani ___ da un tecnico.",
            "options": [
              "lo faccio controllare",
              "lo lascio controllare",
              "me lo lascio controllare"
            ],
            "answer": 0
          },
          {
            "q": "Non sapevo a chi rivolgermi, così ___ il nome di un fotografo da un'amica.",
            "options": [
              "mi sono fatto dare",
              "ho fatto dare",
              "mi sono lasciato dare"
            ],
            "answer": 0
          },
          {
            "q": "Ho fatto stampare gli inviti ___ un tipografo del centro.",
            "options": [
              "da",
              "con",
              "per"
            ],
            "answer": 0
          }
        ]
      },
      {
        "type": "Correzione",
        "fmt": "errore",
        "instr": "Individua e clicca dove c'è l'errore.",
        "items": [
          {
            "q": "Ogni due anni faccio potare gli alberi il giardiniere del paese.",
            "wrong": "il",
            "fix": "al"
          },
          {
            "q": "Mi ho fatto spiegare il percorso da un passante.",
            "wrong": "ho",
            "fix": "sono"
          },
          {
            "q": "Conosce meglio la zona: lascia che decide lui il locale.",
            "wrong": "decide",
            "fix": "decida"
          },
          {
            "q": "Il numero? Mi lo sono fatto ripetere due volte.",
            "wrong": "Mi",
            "fix": "Me"
          },
          {
            "q": "La guida ci ha fatto camminando per tre ore sotto il sole.",
            "wrong": "camminando",
            "fix": "camminare"
          },
          {
            "q": "Mi sono fatto prestare il caricabatterie a un ragazzo del campeggio.",
            "wrong": "a",
            "fix": "da"
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
        "type": "Correzione",
        "fmt": "errore",
        "instr": "Individua e clicca dove c'è l'errore.",
        "items": [
          {
            "q": "Ha ragione lui, d'altronde chi altro sappia come funziona quella vecchia caldaia del seminterrato?",
            "wrong": "sappia",
            "fix": "sa"
          },
          {
            "q": "Il museo ha ridotto gli orari. Nondimeno, i visitatori restino gli stessi dell'anno scorso.",
            "wrong": "restino",
            "fix": "restano"
          },
          {
            "q": "Il testimone aveva cambiato versione tre volte, tuttavia il giudice gli abbia creduto fino in fondo.",
            "wrong": "abbia",
            "fix": "ha"
          },
          {
            "q": "Piove da ieri sera. Peraltro, nessuno in valle se ne lamenti più di tanto.",
            "wrong": "lamenti",
            "fix": "lamenta"
          },
          {
            "q": "Costa poco, per di più le lezioni si tengano a duecento metri dalla fermata del tram.",
            "wrong": "tengano",
            "fix": "tengono"
          },
          {
            "q": "L'ascensore funzionava, eppure quasi nessuno sia salito fino all'ultimo piano.",
            "wrong": "sia",
            "fix": "è"
          }
        ]
      },
      {
        "type": "Scelta",
        "fmt": "buco",
        "instr": "Scegli il connettivo adatto alla relazione fra i due enunciati.",
        "items": [
          {
            "q": "Il vicolo è chiuso al traffico dalle otto alle venti: ___, di giorno non ci passano automobili.",
            "options": [
              "in altre parole",
              "più precisamente",
              "a ben vedere"
            ],
            "answer": 0
          },
          {
            "q": "Il problema riguarda diversi uffici del primo piano, ___, quelli del protocollo.",
            "options": [
              "più precisamente",
              "in altre parole",
              "per così dire"
            ],
            "answer": 0
          },
          {
            "q": "Tutti lo descrivono come una persona generosa: ___, non ha mai fatto un favore a nessuno.",
            "options": [
              "a ben vedere",
              "in altre parole",
              "più precisamente"
            ],
            "answer": 0
          },
          {
            "q": "Ha lavorato all'estero per anni, ___, sette anni fra Lione e Marsiglia.",
            "options": [
              "più precisamente",
              "a ben vedere",
              "in altre parole"
            ],
            "answer": 0
          },
          {
            "q": "Il verbale parla di «differimento dei termini»: ___, la scadenza è stata spostata.",
            "options": [
              "in altre parole",
              "più precisamente",
              "per così dire"
            ],
            "answer": 0
          },
          {
            "q": "L'offerta sembrava conveniente. ___, il prezzo pieno scattava dal secondo anno.",
            "options": [
              "A ben vedere",
              "In altre parole",
              "Per così dire"
            ],
            "answer": 0
          }
        ]
      },
      {
        "type": "Comprensione",
        "fmt": "buco",
        "instr": "Leggi la frase e scegli l'affermazione vera.",
        "items": [
          {
            "q": "«Il seminario è stato annullato, d'altronde si erano iscritte solo tre persone.»",
            "options": [
              "Chi parla considera l'annullamento comprensibile.",
              "Chi parla trova sorprendente l'annullamento.",
              "Il seminario è stato annullato malgrado le molte iscrizioni."
            ],
            "answer": 0
          },
          {
            "q": "«La ditta ha vinto l'appalto. Non a caso il titolare è cugino dell'assessore.»",
            "options": [
              "Chi parla suggerisce che la parentela spieghi la vittoria.",
              "Chi parla esclude che la parentela abbia avuto peso.",
              "Chi parla si stupisce che la ditta abbia vinto."
            ],
            "answer": 0
          },
          {
            "q": "«Se non ti fidi di lui da sobrio, a maggior ragione non fidarti quando ha bevuto.»",
            "options": [
              "La seconda raccomandazione è più forte della prima.",
              "Chi parla ritira la prima raccomandazione.",
              "Chi parla lo ritiene più affidabile dopo che ha bevuto."
            ],
            "answer": 0
          },
          {
            "q": "«A conti fatti, ci conveniva noleggiare il furgone.»",
            "options": [
              "Chi parla è arrivato alla conclusione dopo aver valutato i pro e i contro.",
              "Chi parla ha deciso di getto, senza calcolare.",
              "Chi parla deve ancora decidere."
            ],
            "answer": 0
          },
          {
            "q": "«Aveva studiato pochissimo, eppure ha superato la selezione.»",
            "options": [
              "L'esito va contro le aspettative.",
              "L'esito conferma le aspettative.",
              "Chi parla spiega perché ha superato la selezione."
            ],
            "answer": 0
          },
          {
            "q": "«Tutto sommato, la giornata è andata bene.»",
            "options": [
              "Chi parla mette in conto anche qualcosa che è andato storto.",
              "Per chi parla non è successo niente di negativo.",
              "Chi parla dice che la giornata è andata male."
            ],
            "answer": 0
          }
        ]
      }
    ],
    "lez": [
      "C1 L9",
      "C1 L21"
    ]
  },
  {
    "lvl": "c1",
    "lez": [
      "C1 L5"
    ],
    "title": "Il periodo ipotetico nell'iperbole e nel parlato",
    "exercises": [
      {
        "type": "Comprensione",
        "fmt": "buco",
        "instr": "Leggi la frase e scegli che cosa vuole dire chi parla.",
        "items": [
          {
            "q": "«Se avessi le chiavi del portone, ti aprirei io.»",
            "options": [
              "Chi parla non ha quelle chiavi.",
              "Chi parla sta esagerando per far capire che è seccato.",
              "Chi parla ha le chiavi ma preferisce non aprire."
            ],
            "answer": 0
          },
          {
            "q": "«Se dovessi elencare tutte le volte che ha cambiato idea, faremmo notte.»",
            "options": [
              "Chi parla dice che cambia idea di continuo.",
              "Chi parla si offre di preparare quell’elenco.",
              "Chi parla calcola che servirebbe una notte di lavoro."
            ],
            "answer": 0
          },
          {
            "q": "«Se glielo ripetessi cento volte, non cambierebbe niente.»",
            "options": [
              "Chi parla ritiene inutile insistere.",
              "Chi parla ha intenzione di ripeterlo cento volte.",
              "Chi parla dice che dopo cento volte capirebbe."
            ],
            "answer": 0
          },
          {
            "q": "«Se il primo autobus passasse alle sei, faremmo in tempo: bisognerebbe controllare l’orario.»",
            "options": [
              "Chi parla sta valutando un orario possibile.",
              "Chi parla dice che quell’autobus non passa mai.",
              "Chi parla esagera per dire che è tutto inutile."
            ],
            "answer": 0
          },
          {
            "q": "«Se mi desse retta una volta su dieci, sarebbe già un miracolo.»",
            "options": [
              "Chi parla dice che non gli dà mai retta.",
              "Chi parla chiede di essere ascoltato una volta su dieci.",
              "Chi parla dice che gli dà retta abbastanza spesso."
            ],
            "answer": 0
          },
          {
            "q": "«Se ti fermassi un attimo, ti spiegherei la faccenda.»",
            "options": [
              "Chi parla chiede davvero di fermarsi un momento.",
              "Chi parla esagera la fretta dell’altro.",
              "Chi parla dice che non ha voglia di spiegare."
            ],
            "answer": 0
          }
        ]
      },
      {
        "type": "Scelta",
        "fmt": "buco",
        "instr": "Nel parlato molto informale si usa l’imperfetto. Scegli come si direbbe la stessa cosa in una situazione formale, per esempio scrivendo.",
        "items": [
          {
            "q": "Appena entrato alla festa: «Se lo sapevo che c’era anche lui, non venivo.»",
            "options": [
              "Se l’avessi saputo, non sarei venuto.",
              "Se lo sapessi, non verrei.",
              "Se lo saprò, non verrò."
            ],
            "answer": 0
          },
          {
            "q": "Al telefono, ancora a casa: «Se avevo la macchina ti venivo a prendere, ma è dal meccanico.»",
            "options": [
              "Se avessi la macchina, ti verrei a prendere.",
              "Se avessi avuto la macchina, ti sarei venuto a prendere.",
              "Se avrò la macchina, ti verrò a prendere."
            ],
            "answer": 0
          },
          {
            "q": "Uscendo dal teatro: «Se me lo dicevano prima, sceglievo un altro spettacolo.»",
            "options": [
              "Se me l’avessero detto prima, avrei scelto un altro spettacolo.",
              "Se me lo dicessero prima, sceglierei un altro spettacolo.",
              "Se me lo diranno prima, sceglierò un altro spettacolo."
            ],
            "answer": 0
          },
          {
            "q": "Seduto in ufficio di sabato: «Se non c’era questa consegna, oggi ero al mare.»",
            "options": [
              "Se non ci fosse questa consegna, oggi sarei al mare.",
              "Se non ci fosse stata questa consegna, oggi sarei stato al mare.",
              "Se non ci sarà questa consegna, domani sarò al mare."
            ],
            "answer": 0
          },
          {
            "q": "Rientrando dopo aver perso l’appuntamento: «Se partivo prima, arrivavo in tempo.»",
            "options": [
              "Se fossi partito prima, sarei arrivato in tempo.",
              "Se partissi prima, arriverei in tempo.",
              "Se parto prima, arrivo in tempo."
            ],
            "answer": 0
          },
          {
            "q": "Davanti alla vetrina, ancora indecisa: «Se costava meno la prendevo.»",
            "options": [
              "Se costasse meno, la prenderei.",
              "Se fosse costata meno, l’avrei presa.",
              "Se costerà meno, la prenderò."
            ],
            "answer": 0
          }
        ]
      },
      {
        "type": "Trasformazione",
        "fmt": "buco",
        "instr": "Scegli la conclusione che esprime l’esagerazione.",
        "items": [
          {
            "q": "Se le sue scuse fossero mattoni, ___.",
            "options": [
              "ci costruiremmo un palazzo",
              "ne avremmo parecchi",
              "peserebbero abbastanza"
            ],
            "answer": 0
          },
          {
            "q": "Se ci fosse un campionato di indecisione, ___.",
            "options": [
              "lui giocherebbe in nazionale",
              "lui parteciperebbe volentieri",
              "sarebbe una gara lunga"
            ],
            "answer": 0
          },
          {
            "q": "Se la coda alle casse si allungasse ancora, ___.",
            "options": [
              "girerebbe l’isolato tre volte",
              "uscirebbe dalla porta",
              "ci vorrebbe tutta la mattina"
            ],
            "answer": 0
          },
          {
            "q": "Se camminasse un po’ più piano, ___.",
            "options": [
              "lo supererebbero le lumache",
              "arriverebbe più tardi",
              "farebbe meno fatica"
            ],
            "answer": 0
          },
          {
            "q": "Se mettessimo in fila tutte le sue promesse, ___.",
            "options": [
              "arriveremmo dall’altra parte della città",
              "ne verrebbe fuori un bell’elenco",
              "ci vorrebbe un foglio grande"
            ],
            "answer": 0
          },
          {
            "q": "Se tutti guidassero come lui, ___.",
            "options": [
              "le assicurazioni chiuderebbero",
              "ci sarebbero più incidenti",
              "sarebbe pericoloso"
            ],
            "answer": 0
          }
        ]
      }
    ]
  },
  {
    "lvl": "c1",
    "lez": [
      "C1 L6"
    ],
    "title": "Gerundio e participio con valore di causa, tempo e condizione",
    "exercises": [
      {
        "type": "Comprensione",
        "fmt": "buco",
        "instr": "Leggi la frase e scegli che cosa aggiunge la parte implicita.",
        "items": [
          {
            "q": "«Non avendo trovato posto davanti alla scuola, ha lasciato la macchina in seconda fila.»",
            "options": [
              "Dice perché.",
              "Dice quando.",
              "Dice a quale condizione."
            ],
            "answer": 0
          },
          {
            "q": "«Scendendo le scale, ha incontrato il ragazzo del terzo piano.»",
            "options": [
              "Dice quando.",
              "Dice perché.",
              "Dice in che modo."
            ],
            "answer": 0
          },
          {
            "q": "«Ha risolto tutto telefonando direttamente all’ufficio tecnico.»",
            "options": [
              "Dice in che modo.",
              "Dice quando.",
              "Dice perché."
            ],
            "answer": 0
          },
          {
            "q": "«Aumentando di due unità il personale, l’ufficio smaltirebbe l’arretrato in un mese.»",
            "options": [
              "Dice a quale condizione.",
              "Dice in che modo.",
              "Dice quando."
            ],
            "answer": 0
          },
          {
            "q": "«Pur avendo ricevuto l’avviso, non si è presentata all’appuntamento.»",
            "options": [
              "Ammette un fatto contrario.",
              "Dice perché.",
              "Dice quando."
            ],
            "answer": 0
          },
          {
            "q": "«Avendo dimenticato il badge, ha dovuto farsi aprire dal portiere.»",
            "options": [
              "Dice perché.",
              "Dice in che modo.",
              "Ammette un fatto contrario."
            ],
            "answer": 0
          }
        ]
      },
      {
        "type": "Correzione",
        "fmt": "errore",
        "instr": "Individua e clicca dove c'è l'errore.",
        "items": [
          {
            "q": "Ratificando l’intesa, il testo è diventato vincolante per entrambe le parti.",
            "wrong": "Ratificando",
            "fix": "Ratificata"
          },
          {
            "q": "Gli atti sono stati trasmessi alla procura una volta chiudendo le indagini.",
            "wrong": "chiudendo",
            "fix": "chiuse"
          },
          {
            "q": "Una volta smontando i ponteggi, la piazza è tornata percorribile.",
            "wrong": "smontando",
            "fix": "smontati"
          },
          {
            "q": "Il telefono dell’ufficio ha iniziato a squillare senza sosta appena diffondendo la notizia.",
            "wrong": "diffondendo",
            "fix": "diffusa"
          },
          {
            "q": "Verificando le firme, la proposta è arrivata in consiglio comunale.",
            "wrong": "Verificando",
            "fix": "Verificate"
          },
          {
            "q": "Le scale sono rimaste l’unica via di accesso fino a quando il nuovo ascensore è stato installando.",
            "wrong": "installando",
            "fix": "installato"
          }
        ]
      },
      {
        "type": "Trasformazione",
        "fmt": "buco",
        "instr": "Si vuole dire questo. Scegli l’unica formulazione corretta e fedele al contenuto.",
        "items": [
          {
            "q": "Chi parla ha notato l’errore mentre confrontava i due elenchi.",
            "options": [
              "Confrontando i due elenchi, ho notato l’errore.",
              "Confrontando i due elenchi, l’errore è saltato fuori subito.",
              "Confrontato i due elenchi, ho notato l’errore."
            ],
            "answer": 0
          },
          {
            "q": "Il telefono ha squillato mentre chi parla rientrava a casa.",
            "options": [
              "Mentre rientravo a casa, il telefono ha squillato.",
              "Rientrando a casa, il telefono ha squillato.",
              "Rientrando a casa, il telefono squillava già."
            ],
            "answer": 0
          },
          {
            "q": "Il revisore ha firmato il verbale dopo aver riletto tutti gli allegati.",
            "options": [
              "Riletti tutti gli allegati, il revisore ha firmato il verbale.",
              "Rileggendo tutti gli allegati, il verbale convinse il revisore.",
              "Riletti tutti gli allegati, il verbale ha firmato il revisore."
            ],
            "answer": 0
          },
          {
            "q": "La commissione ha rinviato la seduta perché mancava il numero legale.",
            "options": [
              "Non avendo il numero legale, la commissione ha rinviato la seduta.",
              "Non avendo il numero legale, la seduta ha rinviato la commissione.",
              "Non avendo il numero legale, il rinvio è stato inevitabile."
            ],
            "answer": 0
          },
          {
            "q": "L’ospite ha rovesciato il bicchiere mentre si alzava da tavola.",
            "options": [
              "Alzandosi da tavola, l’ospite ha rovesciato il bicchiere.",
              "Alzandosi da tavola, il bicchiere si è rovesciato.",
              "Alzandosi da tavola, il bicchiere è finito per terra."
            ],
            "answer": 0
          },
          {
            "q": "L’allarme è scattato mentre il custode chiudeva le finestre.",
            "options": [
              "Mentre il custode chiudeva le finestre, l’allarme è scattato.",
              "Chiudendo le finestre, l’allarme è scattato.",
              "Chiudendo le finestre, il custode ha fatto scattare l’allarme."
            ],
            "answer": 0
          }
        ]
      }
    ]
  },
  {
    "lvl": "c1",
    "lez": [
      "C1 L7"
    ],
    "title": "La forma passiva: tutte le forme",
    "exercises": [
      {
        "type": "Comprensione",
        "fmt": "buco",
        "instr": "Leggi la frase e scegli l’affermazione vera.",
        "items": [
          {
            "q": "«La richiesta di trasferimento è stata respinta.»",
            "options": [
              "La frase non dice chi ha respinto.",
              "La frase dice che nessuno ha esaminato la richiesta.",
              "La frase dice che a respingere è stato chi ha ricevuto la richiesta."
            ],
            "answer": 0
          },
          {
            "q": "«Le è stato comunicato che il contratto non sarà rinnovato.»",
            "options": [
              "Non si sa chi glielo abbia comunicato.",
              "È stata lei a comunicarlo.",
              "Il contratto è stato comunicato a lei."
            ],
            "answer": 0
          },
          {
            "q": "«La data del concerto è stata spostata dagli organizzatori senza avvisare nessuno.»",
            "options": [
              "A spostare la data sono stati gli organizzatori.",
              "Gli organizzatori hanno saputo dello spostamento dopo.",
              "La frase non dice chi ha spostato la data."
            ],
            "answer": 0
          },
          {
            "q": "«Alla dipendente è stato offerto un inquadramento superiore.»",
            "options": [
              "A ricevere l’offerta è la dipendente.",
              "A fare l’offerta è la dipendente.",
              "Non si sa che cosa sia stato offerto."
            ],
            "answer": 0
          },
          {
            "q": "«Il vecchio ponte è stato demolito in una sola notte.»",
            "options": [
              "La frase non dice chi ha demolito il ponte.",
              "Il ponte è crollato da solo.",
              "Chi ha demolito il ponte ci ha messo più di una notte."
            ],
            "answer": 0
          },
          {
            "q": "«L’ultima scena è stata tagliata dal regista poco prima dell’uscita.»",
            "options": [
              "A tagliare l’ultima scena è stato il regista.",
              "L’ultima scena è stata tagliata dal produttore.",
              "La scena è stata tagliata dopo l’uscita."
            ],
            "answer": 0
          }
        ]
      },
      {
        "type": "Correzione",
        "fmt": "errore",
        "instr": "Individua e clicca dove c'è l'errore.",
        "items": [
          {
            "q": "I nonni è stato spiegato due volte come si usa la videochiamata.",
            "wrong": "I",
            "fix": "Ai"
          },
          {
            "q": "Tutte le pratiche arretrate sono stati esaminate entro venerdì sera.",
            "wrong": "stati",
            "fix": "state"
          },
          {
            "q": "Il verbale è stato firmata ieri sera dal presidente uscente.",
            "wrong": "firmata",
            "fix": "firmato"
          },
          {
            "q": "Le famiglie sono state promesse nuove case entro giugno.",
            "wrong": "Le",
            "fix": "Alle"
          },
          {
            "q": "Alla riunione di lunedì sono stati partecipati tutti i responsabili.",
            "wrong": "partecipati",
            "fix": "convocati"
          },
          {
            "q": "La delibera ha stata approvata con due soli voti contrari.",
            "wrong": "ha",
            "fix": "è"
          }
        ]
      },
      {
        "type": "Comprensione",
        "fmt": "buco",
        "instr": "La frase descrive uno stato o un’azione? Scegli l’affermazione vera.",
        "items": [
          {
            "q": "«Quando siamo arrivati, la sala era già preparata.»",
            "options": [
              "Descrive come si trovava la sala.",
              "Descrive qualcuno che in quel momento la stava preparando.",
              "Dice che la sala è stata preparata dopo il nostro arrivo."
            ],
            "answer": 0
          },
          {
            "q": "«Il cancello è chiuso ogni sera alle venti dal custode.»",
            "options": [
              "Descrive un’operazione che si ripete.",
              "Descrive lo stato in cui si trova il cancello la sera.",
              "Dice che il cancello resta chiuso tutto il giorno."
            ],
            "answer": 0
          },
          {
            "q": "«Da martedì scorso la pratica è sospesa.»",
            "options": [
              "Descrive una situazione che dura ancora.",
              "Indica il momento preciso in cui qualcuno l’ha sospesa.",
              "Dice che è stata sospesa martedì e poi ripresa."
            ],
            "answer": 0
          },
          {
            "q": "«Le domande sono controllate una per una prima dell’archiviazione.»",
            "options": [
              "Descrive un’operazione che qualcuno compie.",
              "Descrive lo stato in cui si trovano le domande.",
              "Dice che le domande sono già state archiviate."
            ],
            "answer": 0
          },
          {
            "q": "«Alle sette la serranda era ancora abbassata.»",
            "options": [
              "Descrive come si presentava la serranda.",
              "Descrive qualcuno che alle sette la stava abbassando.",
              "Dice che la serranda è stata abbassata alle sette."
            ],
            "answer": 0
          },
          {
            "q": "«Ogni lunedì mattina il magazzino è controllato dal responsabile.»",
            "options": [
              "Descrive un controllo che qualcuno esegue.",
              "Descrive lo stato in cui si trova il magazzino.",
              "Dice che il magazzino resta chiuso il lunedì."
            ],
            "answer": 0
          }
        ]
      }
    ]
  },
  {
    "lvl": "c1",
    "lez": [
      "C1 L8",
      "C1 L20"
    ],
    "title": "Il discorso indiretto in contesto professionale",
    "exercises": [
      {
        "type": "Riempimento",
        "fmt": "buco",
        "instr": "Scegli la forma adatta al discorso riportato.",
        "items": [
          {
            "q": "«La merce parte domani» → La settimana scorsa il magazziniere assicurò che la merce sarebbe partita ___.",
            "options": [
              "il giorno dopo",
              "domani",
              "il giorno prima"
            ],
            "answer": 0
          },
          {
            "q": "«Vi faremo sapere entro venerdì» → La commissione scrisse che ci ___ sapere entro il venerdì successivo.",
            "options": [
              "avrebbe fatto",
              "farà",
              "facesse"
            ],
            "answer": 0
          },
          {
            "q": "«Abbiamo spedito i referti» → Il laboratorio comunicò che ___ i referti il giorno prima.",
            "options": [
              "aveva spedito",
              "ha spedito",
              "avesse spedito"
            ],
            "answer": 0
          },
          {
            "q": "«Credo che l'archivio sia incompleto» → L'impiegato disse che credeva che l'archivio ___ incompleto.",
            "options": [
              "fosse",
              "sia",
              "era"
            ],
            "answer": 0
          },
          {
            "q": "«Vengo io in stazione a prendere Marta» → Rientrata in ufficio, spiegai che ___ lui in stazione.",
            "options": [
              "sarebbe andato",
              "sarebbe venuto",
              "veniva"
            ],
            "answer": 0
          },
          {
            "q": "«Chiudiamo oggi alle sei» → Il farmacista mi ha appena detto che chiudono ___ alle sei.",
            "options": [
              "oggi",
              "quel giorno",
              "il giorno prima"
            ],
            "answer": 0
          }
        ]
      },
      {
        "type": "Riempimento",
        "fmt": "buco",
        "instr": "Scegli il verbo che riporta fedelmente quello che è stato detto.",
        "items": [
          {
            "q": "Il portiere dell'hotel: «Quella prenotazione non ci è mai arrivata.»",
            "options": [
              "negò",
              "ammise",
              "chiese"
            ],
            "answer": 0
          },
          {
            "q": "Mia sorella: «Te l'ho ripetuto tre volte, il treno parte alle sei.»",
            "options": [
              "ribadì",
              "obiettò",
              "riconobbe"
            ],
            "answer": 0
          },
          {
            "q": "Il cuoco: «La colpa è mia, ho tenuto il forno troppo alto.»",
            "options": [
              "ammise",
              "sostenne",
              "contestò"
            ],
            "answer": 0
          },
          {
            "q": "Il tecnico: «Attenzione, la perdita è nel tubo esterno, non in bagno.»",
            "options": [
              "precisò",
              "negò",
              "ribadì"
            ],
            "answer": 0
          },
          {
            "q": "La professoressa: «Non credo affatto che abbiate letto il libro.»",
            "options": [
              "contestò",
              "minimizzò",
              "riconobbe"
            ],
            "answer": 0
          },
          {
            "q": "L'idraulico: «Sì, in effetti potevo avvisarvi prima.»",
            "options": [
              "riconobbe",
              "negò",
              "sostenne"
            ],
            "answer": 0
          }
        ]
      },
      {
        "type": "Correzione",
        "fmt": "errore",
        "instr": "In un testo scritto formale, individua e clicca dove c'è l'errore.",
        "items": [
          {
            "q": "Il vivaista negò che la serra era stata lasciata aperta durante la notte.",
            "wrong": "era",
            "fix": "fosse"
          },
          {
            "q": "Dal sopralluogo risultò che l'impianto fosse fuori norma da anni.",
            "wrong": "fosse",
            "fix": "era"
          },
          {
            "q": "La società escluse che i lavori erano stati eseguiti a regola d'arte.",
            "wrong": "erano",
            "fix": "fossero"
          },
          {
            "q": "Il verbale attestò che il controllo fosse stato fatto in mattinata.",
            "wrong": "fosse",
            "fix": "era"
          },
          {
            "q": "Il medico dubitò che la terapia aveva funzionato davvero.",
            "wrong": "aveva",
            "fix": "avesse"
          },
          {
            "q": "Dagli atti emerse che quella sera nel cortile fossero presenti due persone.",
            "wrong": "fossero",
            "fix": "erano"
          }
        ]
      }
    ]
  },
  {
    "lvl": "c1",
    "lez": [
      "C1 L8"
    ],
    "title": "La concordanza dei tempi nella narrazione",
    "exercises": [
      {
        "type": "Riempimento",
        "fmt": "buco",
        "instr": "Scegli la forma verbale coerente con l'ordine dei fatti.",
        "items": [
          {
            "q": "Il temporale è arrivato alle sei; a quell'ora noi ___ ancora in spiaggia, e la tenda l'avevamo già smontata.",
            "options": [
              "eravamo",
              "siamo stati",
              "eravamo stati"
            ],
            "answer": 0
          },
          {
            "q": "Quando finalmente ho aperto la scatola, ho capito perché era così leggera: qualcuno ___ il contenuto prima ancora che il pacco lasciasse il deposito.",
            "options": [
              "aveva tolto",
              "avesse tolto",
              "toglieva"
            ],
            "answer": 0
          },
          {
            "q": "Alle otto la sala era ancora vuota; alle nove, quando finalmente ___, gli altri erano già andati via.",
            "options": [
              "sono entrato",
              "ero entrato",
              "entravo"
            ],
            "answer": 0
          },
          {
            "q": "Quando il passaporto è saltato fuori, ___ già tutti i cassetti e in questura mi aspettavano per le tre.",
            "options": [
              "avevo svuotato",
              "ho svuotato",
              "svuotavo"
            ],
            "answer": 0
          },
          {
            "q": "Il pacco è arrivato a metà mattina, mentre ___ ancora la stanza che avevo cominciato a sistemare all'alba.",
            "options": [
              "riordinavo",
              "ho riordinato",
              "avevo riordinato"
            ],
            "answer": 0
          },
          {
            "q": "Per settimane il forno faceva un rumore strano, poi una sera ___ del tutto, proprio mentre cuocevo la torta di compleanno.",
            "options": [
              "si è fermato",
              "si fermava",
              "si era fermato"
            ],
            "answer": 0
          }
        ]
      },
      {
        "type": "Comprensione",
        "fmt": "buco",
        "instr": "Che cosa dice davvero la frase? Scegli l'interpretazione corretta.",
        "items": [
          {
            "q": "«Quando sono arrivato, il tecnico controllava il contatore.»",
            "options": [
              "Il controllo era già cominciato prima del mio arrivo.",
              "Il tecnico ha cominciato a controllare dopo il mio arrivo.",
              "Il tecnico aveva già finito il controllo."
            ],
            "answer": 0
          },
          {
            "q": "«Quella mattina Lucia partiva per Genova, ma la nebbia ha bloccato tutto e il viaggio è saltato.»",
            "options": [
              "Alla fine non è partita.",
              "È partita con qualche ora di ritardo.",
              "È partita e poi è tornata indietro."
            ],
            "answer": 0
          },
          {
            "q": "«Ho scoperto solo ieri che si erano separati in primavera.»",
            "options": [
              "La separazione è avvenuta prima che lo scoprissi.",
              "Si sono separati dopo che l'ho scoperto.",
              "L'ho saputo in primavera."
            ],
            "answer": 0
          },
          {
            "q": "«Il tram non passava, così dopo mezz'ora me ne sono andato a piedi.»",
            "options": [
              "Nella mezz'ora di attesa il tram non è passato.",
              "Il tram è arrivato dopo mezz'ora.",
              "Il tram passava ma non si fermava."
            ],
            "answer": 0
          },
          {
            "q": "«Quando l'ho conosciuto, lavorava in una libreria da tre anni.»",
            "options": [
              "Aveva cominciato tre anni prima e continuava a lavorarci.",
              "Ha cominciato a lavorare in libreria dopo che l'ho conosciuto.",
              "Aveva lavorato in libreria tre anni e poi aveva smesso."
            ],
            "answer": 0
          },
          {
            "q": "«Sapevo che la farmacia chiudeva alle cinque, e infatti alle cinque e un quarto era tutto spento.»",
            "options": [
              "La farmacia chiudeva di solito alle cinque.",
              "Quel giorno la farmacia ha chiuso prima del solito.",
              "La farmacia ha chiuso alle cinque e un quarto."
            ],
            "answer": 0
          }
        ]
      },
      {
        "type": "Correzione",
        "fmt": "errore",
        "instr": "Individua e clicca la parola che rompe la coerenza temporale del racconto.",
        "items": [
          {
            "q": "Il giorno del trasloco trovammo l'armadio vuoto: qualcuno ha portato via tutto durante la notte.",
            "wrong": "ha",
            "fix": "aveva"
          },
          {
            "q": "Per tutta la settimana ha piovuto e sabato, quando finalmente usciva il sole, eravamo già ripartiti.",
            "wrong": "usciva",
            "fix": "è uscito"
          },
          {
            "q": "Quando siamo usciti dal teatro, la pioggia smetteva già da un pezzo.",
            "wrong": "smetteva",
            "fix": "aveva smesso"
          },
          {
            "q": "Ho riconosciuto la voce subito: quella donna mi telefonava due volte, il giorno prima.",
            "wrong": "telefonava",
            "fix": "aveva telefonato"
          },
          {
            "q": "Quando è squillato il telefono, mi sono alzato di scatto e avevo rovesciato il caffè.",
            "wrong": "avevo",
            "fix": "ho"
          },
          {
            "q": "Da ragazzo, per anni, mio nonno si alzò ogni mattina alle cinque per andare nei campi.",
            "wrong": "alzò",
            "fix": "alzava"
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
        "instr": "Scegli la forma verbale richiesta dalla congiunzione.",
        "items": [
          {
            "q": "Benché il negozio ___ in pieno centro, quasi tutti i clienti ordinano online.",
            "options": [
              "sia",
              "è",
              "fosse"
            ],
            "answer": 0
          },
          {
            "q": "Sebbene il sindaco ___ contrario, il consiglio approvò il progetto in mezz'ora.",
            "options": [
              "fosse",
              "era",
              "sia"
            ],
            "answer": 0
          },
          {
            "q": "Per quanto ___ presto, in quel periodo trovavamo sempre la fila alla posta.",
            "options": [
              "uscissimo",
              "uscivamo",
              "usciamo"
            ],
            "answer": 0
          },
          {
            "q": "Malgrado ___ ancora buio, i pescatori escono ogni mattina alle quattro.",
            "options": [
              "sia",
              "è",
              "fosse"
            ],
            "answer": 0
          },
          {
            "q": "Quantunque ___ bene la lingua, preferì rivolgersi a un interprete.",
            "options": [
              "conoscesse",
              "conosceva",
              "conosca"
            ],
            "answer": 0
          },
          {
            "q": "Per quanto ___ molto, quel modello resta il più venduto della categoria.",
            "options": [
              "costi",
              "costa",
              "costasse"
            ],
            "answer": 0
          }
        ]
      },
      {
        "type": "Riempimento",
        "fmt": "buco",
        "instr": "Scegli la forma o l'espressione richiesta dal connettivo concessivo.",
        "items": [
          {
            "q": "Pur ___ tutti i documenti richiesti, non ottenne il permesso di soggiorno.",
            "options": [
              "presentando",
              "presentasse",
              "la presentazione"
            ],
            "answer": 0
          },
          {
            "q": "Benché ___ a dirotto, il concerto si è tenuto lo stesso.",
            "options": [
              "piovesse",
              "la pioggia",
              "piovendo"
            ],
            "answer": 0
          },
          {
            "q": "Con tutta ___ del mondo, non saremmo riusciti a montare la libreria in un pomeriggio.",
            "options": [
              "la pazienza",
              "pazientassimo",
              "pazientando"
            ],
            "answer": 0
          },
          {
            "q": "Malgrado ___ degli operai, la mostra ha aperto puntuale.",
            "options": [
              "i ritardi",
              "ritardassero",
              "ritardando"
            ],
            "answer": 0
          },
          {
            "q": "Pur ___ che avesse ragione, non gliel'ho mai detto apertamente.",
            "options": [
              "riconoscendo",
              "riconosca",
              "riconoscevo"
            ],
            "answer": 0
          },
          {
            "q": "Sebbene ___ di poche righe, quella lettera cambiò tutto.",
            "options": [
              "si trattasse",
              "si trattava",
              "trattandosi"
            ],
            "answer": 0
          }
        ]
      },
      {
        "type": "Correzione",
        "fmt": "errore",
        "instr": "In un testo scritto formale, individua e clicca dove c'è l'errore.",
        "items": [
          {
            "q": "Benché aveva piovuto tutta la notte, la gara si è disputata regolarmente.",
            "wrong": "aveva",
            "fix": "avesse"
          },
          {
            "q": "La multa resta dovuta anche ammettendo, per assurdo, che il cartello era coperto dai rami.",
            "wrong": "era",
            "fix": "fosse"
          },
          {
            "q": "Malgrado l'impresa aveva firmato il contratto a marzo, i lavori del cantiere non sono ancora partiti.",
            "wrong": "aveva",
            "fix": "avesse"
          },
          {
            "q": "Pur non conosceva bene la zona, si è offerto di accompagnarci tutto il giorno.",
            "wrong": "conosceva",
            "fix": "conoscendo"
          },
          {
            "q": "Sebbene la neve alta mezzo metro, la strada del passo è rimasta aperta.",
            "wrong": "Sebbene",
            "fix": "Nonostante"
          },
          {
            "q": "Sebbene Dario lavorando da vent'anni nel settore, non è stato ammesso al concorso.",
            "wrong": "lavorando",
            "fix": "lavorasse"
          }
        ]
      }
    ],
    "lez": [
      "C1 L11",
      "C1 L21"
    ]
  },
  {
    "lvl": "c1",
    "title": "Le proposizioni temporali avanzate",
    "exercises": [
      {
        "type": "Scelta",
        "fmt": "buco",
        "instr": "Scegli il connettivo adatto al rapporto fra i due fatti. Tutte le forme verbali sono corrette.",
        "items": [
          {
            "q": "Amir ha diviso l'appartamento con altri tre operai ___ ha lavorato al cantiere di Rho: a lavori conclusi ha cambiato città.",
            "options": [
              "finché",
              "dopo che",
              "non appena"
            ],
            "answer": 0
          },
          {
            "q": "___ ha ricevuto l'esito del concorso, Elena ha aspettato tre giorni per dirlo ai suoi.",
            "options": [
              "Dopo che",
              "Non appena",
              "Finché"
            ],
            "answer": 0
          },
          {
            "q": "I ragazzi smettono di correre e si siedono a bordo campo ___ l'allenatore fischia la pausa.",
            "options": [
              "ogni volta che",
              "da quando",
              "finché"
            ],
            "answer": 0
          },
          {
            "q": "Il cane si è piazzato davanti alla porta ___ ha sentito girare la chiave, e non si è più mosso.",
            "options": [
              "non appena",
              "da quando",
              "ogni volta che"
            ],
            "answer": 0
          },
          {
            "q": "Il postino bussa alla finestra della cucina ___ si è rotto il campanello.",
            "options": [
              "da quando",
              "ogni volta che",
              "non appena"
            ],
            "answer": 0
          },
          {
            "q": "___ il notaio leggeva ad alta voce, i due fratelli si guardavano senza dire una parola.",
            "options": [
              "Mentre",
              "Dopo che",
              "Non appena"
            ],
            "answer": 0
          }
        ]
      },
      {
        "type": "Correzione",
        "fmt": "errore",
        "instr": "Individua e clicca dove c'è l'errore.",
        "items": [
          {
            "q": "Dopo che avesse firmato il verbale, il presidente lasciò immediatamente la sala.",
            "wrong": "avesse",
            "fix": "ebbe"
          },
          {
            "q": "Avremmo dovuto agire prima che la situazione diventava irreversibile.",
            "wrong": "diventava",
            "fix": "diventasse"
          },
          {
            "q": "Non appena il fattorino avesse consegnato il pacco, il portiere richiuse il cancello.",
            "wrong": "avesse",
            "fix": "ebbe"
          },
          {
            "q": "Aspettammo in corridoio finché il primario non usciva dalla sala operatoria, e solo a notte fonda potemmo parlargli.",
            "wrong": "usciva",
            "fix": "uscì"
          },
          {
            "q": "Il giudice sospese l'udienza prima che il testimone poté completare la deposizione: il resto della deposizione fu rinviato all'indomani.",
            "wrong": "poté",
            "fix": "potesse"
          },
          {
            "q": "Proprio mentre il consiglio discutesse ancora il bilancio, la notizia era già stata diffusa alla stampa.",
            "wrong": "discutesse",
            "fix": "discuteva"
          }
        ]
      },
      {
        "type": "Comprensione",
        "fmt": "buco",
        "instr": "Leggi la frase e scegli l'affermazione vera.",
        "items": [
          {
            "q": "«Ho staccato la spina prima che l'aggiornamento arrivasse in fondo.»",
            "options": [
              "Quando ho staccato la spina, l'aggiornamento non era ancora terminato.",
              "L'aggiornamento era già terminato.",
              "L'aggiornamento si è concluso comunque."
            ],
            "answer": 0
          },
          {
            "q": "«Marco ha riattaccato prima di sentire la risposta.»",
            "options": [
              "Marco non ha sentito la risposta.",
              "Marco ha sentito la risposta e poi ha riattaccato.",
              "Marco ha richiamato per farsi dare la risposta."
            ],
            "answer": 0
          },
          {
            "q": "«Il sindaco ha inaugurato la piscina prima che i lavori fossero terminati.»",
            "options": [
              "Al momento dell'inaugurazione i lavori non erano ancora terminati.",
              "I lavori erano terminati da poco.",
              "I lavori non sono mai stati terminati."
            ],
            "answer": 0
          },
          {
            "q": "«Ti avviso prima che scada l'abbonamento.»",
            "options": [
              "L'abbonamento non è ancora scaduto.",
              "L'abbonamento è già scaduto.",
              "L'avviso arriverà dopo la scadenza."
            ],
            "answer": 0
          },
          {
            "q": "«Chiudi tu il gas prima che esca tua sorella.»",
            "options": [
              "A uscire sarà tua sorella.",
              "Uscirete tutti e due insieme.",
              "A uscire sarai tu."
            ],
            "answer": 0
          },
          {
            "q": "«Il treno è ripartito prima che salissero tutti.»",
            "options": [
              "Qualcuno è rimasto a terra.",
              "Sono saliti tutti e poi il treno è ripartito.",
              "Nessuno è riuscito a salire."
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
    "lez": [
      "C1 L13"
    ],
    "title": "Il congiuntivo trapassato in concessive e temporali",
    "exercises": [
      {
        "type": "Riempimento",
        "fmt": "fill",
        "instr": "Completa il congiuntivo trapassato con la forma corretta dell'ausiliare.",
        "items": [
          {
            "q": "Benché la segreteria ___ avvisato tutti con una settimana di anticipo, alla riunione non venne nessuno.",
            "a": "avesse",
            "no": [
              "aveva",
              "abbia",
              "avessi"
            ]
          },
          {
            "q": "Sebbene i ragazzi ___ partiti all'alba, arrivarono al rifugio dopo il tramonto.",
            "a": "fossero",
            "no": [
              "erano",
              "siano",
              "fosse"
            ]
          },
          {
            "q": "Nonostante i tecnici ___ arrivati puntuali, l'impianto restò fermo fino a sera.",
            "a": "fossero",
            "no": [
              "erano",
              "siano",
              "fosse"
            ]
          },
          {
            "q": "Benché le previsioni ___ annunciato pioggia per tutta la settimana, non cadde una goccia.",
            "a": "avessero",
            "no": [
              "avevano",
              "abbiano",
              "avesse"
            ]
          },
          {
            "q": "Malgrado noi ___ prenotato con mesi di anticipo, ci diedero una stanza sul retro.",
            "a": "avessimo",
            "no": [
              "avevamo",
              "abbiamo",
              "avesse"
            ]
          },
          {
            "q": "La partita finì senza che nessuno ___ segnato.",
            "a": "avesse",
            "no": [
              "aveva",
              "abbia",
              "avessero"
            ]
          }
        ]
      },
      {
        "type": "Riempimento",
        "fmt": "buco",
        "instr": "Scegli il tempo del congiuntivo richiesto dal rapporto fra i due fatti.",
        "items": [
          {
            "q": "Benché ___ la password la settimana prima, non riusciva più a entrare nel portale.",
            "options": [
              "avesse cambiato",
              "cambiasse",
              "abbia cambiato"
            ],
            "answer": 0
          },
          {
            "q": "Benché ___ poco il tedesco, in quel viaggio se la cavò benissimo.",
            "options": [
              "conoscesse",
              "avesse conosciuto",
              "conosca"
            ],
            "answer": 0
          },
          {
            "q": "Sebbene il pacco ___ due giorni prima, nessuno se n'era accorto.",
            "options": [
              "fosse arrivato",
              "arrivasse",
              "sia arrivato"
            ],
            "answer": 0
          },
          {
            "q": "Nonostante ___ ogni sera fino a tardi, in quei mesi continuava ad avere difficoltà in matematica.",
            "options": [
              "studiasse",
              "abbia studiato",
              "studi"
            ],
            "answer": 0
          },
          {
            "q": "Era strano che il negozio ___ tutto il magazzino già prima dei saldi.",
            "options": [
              "avesse svenduto",
              "svenda",
              "abbia svenduto"
            ],
            "answer": 0
          },
          {
            "q": "Nessuno mi disse perché la pratica ___ respinta il giorno prima, senza nemmeno una spiegazione.",
            "options": [
              "fosse stata",
              "fosse",
              "sia stata"
            ],
            "answer": 0
          }
        ]
      },
      {
        "type": "Correzione",
        "fmt": "errore",
        "instr": "In un testo scritto formale, individua e clicca dove c'è l'errore.",
        "items": [
          {
            "q": "Sembrava strano che nessuno si era accorto della perdita in cantina.",
            "wrong": "era",
            "fix": "fosse"
          },
          {
            "q": "Quella volta mi dispiacque che i colleghi non siano stati avvisati del cambio di orario.",
            "wrong": "siano",
            "fix": "fossero"
          },
          {
            "q": "Nonostante la compagnia avrebbe provato il finale decine di volte, alla recita nessuno ricordò le battute.",
            "wrong": "avrebbe",
            "fix": "avesse"
          },
          {
            "q": "Sebbene le colleghe fossero rimasto in sede fino a tardi, la relazione non fu consegnata.",
            "wrong": "rimasto",
            "fix": "rimaste"
          },
          {
            "q": "Non credevo che erano riusciti a finire tutto in una sola giornata.",
            "wrong": "erano",
            "fix": "fossero"
          },
          {
            "q": "Benché avesse rientrato in sede prima del previsto, il direttore non firmò nulla.",
            "wrong": "avesse",
            "fix": "fosse"
          }
        ]
      }
    ],
    "diag": true
  },
  {
    "lvl": "c1",
    "lez": [
      "C1 L15"
    ],
    "title": "I tre costrutti passivi: venire, andare e si passivante",
    "exercises": [
      {
        "type": "Comprensione",
        "fmt": "buco",
        "instr": "Leggi la frase e scegli l’affermazione vera.",
        "items": [
          {
            "q": "«In certi ambienti si tende a evitare domande troppo personali.»",
            "options": [
              "Si descrive un comportamento abituale diffuso.",
              "Si afferma che qualcuno vieta di fare domande personali.",
              "Si parla di una persona precisa che evita sempre quelle domande."
            ],
            "answer": 0
          },
          {
            "q": "«Le richieste vengono esaminate in ordine di arrivo.»",
            "options": [
              "Qualcuno le esamina, nell’ordine in cui arrivano.",
              "Chi le presenta è tenuto a rispettare l’ordine di arrivo.",
              "Le richieste risultano già esaminate al momento dell’arrivo."
            ],
            "answer": 0
          },
          {
            "q": "«All’epoca certe decisioni venivano prese senza consultare gli interessati.»",
            "options": [
              "Si descrive una pratica abituale del passato.",
              "Si dice che quelle decisioni dovevano necessariamente essere prese così.",
              "Si descrive lo stato in cui si trovavano le decisioni."
            ],
            "answer": 0
          },
          {
            "q": "«La comunicazione va inviata entro cinque giorni dal ricevimento della richiesta.»",
            "options": [
              "La frase esprime una prescrizione.",
              "La frase descrive ciò che normalmente accade.",
              "La frase informa che la comunicazione è già stata inviata."
            ],
            "answer": 0
          },
          {
            "q": "«In quel reparto si compilano ancora a mano i registri di magazzino.»",
            "options": [
              "Si descrive come si lavora abitualmente in quel reparto.",
              "I registri di magazzino risultano già compilati a mano.",
              "Si parla di una singola persona che li compila."
            ],
            "answer": 0
          },
          {
            "q": "«In casi del genere si finisce spesso per accettare un compromesso.»",
            "options": [
              "La frase descrive una conseguenza che tende a verificarsi.",
              "La frase impone di accettare un compromesso.",
              "La frase si riferisce a una decisione presa da una persona precisa."
            ],
            "answer": 0
          }
        ]
      },
      {
        "type": "Correzione",
        "fmt": "errore",
        "instr": "Individua e clicca dove c'è l'errore.",
        "items": [
          {
            "q": "Sulla confezione c’è scritto che il farmaco viene conservato in frigorifero, ma nessuno lo fa.",
            "wrong": "viene",
            "fix": "va"
          },
          {
            "q": "La scuola va ricostruita dopo il terremoto e riaprì nel 1978.",
            "wrong": "va",
            "fix": "fu"
          },
          {
            "q": "I rifiuti vengono portati via entro le nove, ma restano sui marciapiedi per giorni.",
            "wrong": "vengono",
            "fix": "vanno"
          },
          {
            "q": "Nel 1961 la tratta per il porto va elettrificata e da allora nessuno l’ha più toccata.",
            "wrong": "va",
            "fix": "fu"
          },
          {
            "q": "Le assenze vengono comunicate entro le otto, ma quasi nessuna arriva prima di mezzogiorno.",
            "wrong": "vengono",
            "fix": "vanno"
          },
          {
            "q": "Nel 1994 il borgo va evacuato in una notte e molti non tornarono più.",
            "wrong": "va",
            "fix": "fu"
          }
        ]
      },
      {
        "type": "Riempimento",
        "fmt": "fill",
        "instr": "Completa con il tempo composto del verbo indicato.",
        "items": [
          {
            "q": "In quegli anni si ___ moltissimo e si guadagnava poco. (lavorare)",
            "a": "è lavorato",
            "no": [
              "sono lavorati",
              "è lavorata",
              "ha lavorato"
            ]
          },
          {
            "q": "Le prime copie si ___ in meno di una settimana. (esaurire)",
            "a": "sono esaurite",
            "no": [
              "è esaurito",
              "sono esauriti",
              "hanno esaurito"
            ]
          },
          {
            "q": "Alla fine i fascicoli si ___ tutti in due giorni. (esaminare)",
            "a": "sono esaminati",
            "no": [
              "è esaminato",
              "sono esaminate",
              "hanno esaminato"
            ]
          },
          {
            "q": "Quella sera si ___ fino a tardi, nonostante la pioggia. (ballare)",
            "a": "è ballato",
            "no": [
              "sono ballati",
              "è ballata",
              "ha ballato"
            ]
          },
          {
            "q": "Il guasto si ___ soltanto dopo tre giorni. (notare)",
            "a": "è notato",
            "no": [
              "sono notati",
              "è notata",
              "ha notato"
            ]
          },
          {
            "q": "Quell’anno si ___ in vacanza soltanto a settembre. (andare)",
            "a": "è andati",
            "no": [
              "è andato",
              "sono andati",
              "è andata"
            ]
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
        "instr": "Ipotesi sul passato, effetto sul presente. In un testo scritto formale, completa con la forma corretta.",
        "items": [
          {
            "q": "Se avessi accettato quel posto tre anni fa, ora ___ a Berlino da un pezzo. (io – vivere)",
            "a": "vivrei",
            "no": [
              "avrei vissuto",
              "vivessi",
              "vivevo"
            ]
          },
          {
            "q": "Se ___ a studiare due anni fa, adesso parlerei già bene il tedesco. (io – cominciare)",
            "a": "avessi cominciato",
            "no": [
              "cominciassi",
              "avrei cominciato",
              "cominciavo"
            ]
          },
          {
            "q": "Se quella sera non ___ l’ultimo treno, adesso non saremmo bloccati qui. (noi – perdere)",
            "a": "avessimo perso",
            "no": [
              "perdessimo",
              "avremmo perso",
              "perdevamo"
            ]
          },
          {
            "q": "Se il tribunale avesse accolto il ricorso a marzo, oggi lei ___ ancora il suo posto. (avere)",
            "a": "avrebbe",
            "no": [
              "avesse",
              "aveva"
            ]
          },
          {
            "q": "Se non gli avessero tagliato i fondi qualche anno fa, quel reparto ___ ancora aperto. (essere)",
            "a": "sarebbe",
            "no": [
              "fosse",
              "era"
            ]
          },
          {
            "q": "Se ___ più attenzione al contratto allora, adesso non ci troveremmo in questa situazione. (tu – fare)",
            "a": "avessi fatto",
            "no": [
              "facessi",
              "avresti fatto",
              "facevi"
            ]
          }
        ]
      },
      {
        "type": "Correzione",
        "fmt": "errore",
        "instr": "In un testo scritto formale, individua e clicca dove c'è l'errore.",
        "items": [
          {
            "q": "Se avevo dato retta al medico, adesso sarei molto più tranquillo; invece ho fatto di testa mia.",
            "wrong": "avevo",
            "fix": "avessi"
          },
          {
            "q": "Se avessimo firmato allora, adesso avremo una sede tutta nostra; invece l’accordo è saltato all’ultimo.",
            "wrong": "avremo",
            "fix": "avremmo"
          },
          {
            "q": "Se avrei ascoltato i suoi consigli, oggi sarebbero tutti più sereni.",
            "wrong": "avrei",
            "fix": "avessi"
          },
          {
            "q": "Se Livia si fosse iscritta entro la scadenza, ora ha un posto in graduatoria; invece è rimasta esclusa.",
            "wrong": "ha",
            "fix": "avrebbe"
          },
          {
            "q": "Se avessero riparato il tetto in estate, adesso la palestra sarà agibile; invece tutto è rimasto com’era.",
            "wrong": "sarà",
            "fix": "sarebbe"
          },
          {
            "q": "Se imparassi il tedesco da ragazzo, ora avrei molte più possibilità.",
            "wrong": "imparassi",
            "fix": "avessi imparato"
          }
        ]
      },
      {
        "type": "Riempimento",
        "fmt": "fill",
        "instr": "Caratteristica permanente, conseguenza nel passato. Completa con la forma corretta.",
        "items": [
          {
            "q": "Se ___ meno impulsivo, non avrei accettato la prima offerta. (io – essere)",
            "a": "fossi",
            "no": [
              "fossi stato",
              "sarei",
              "ero"
            ]
          },
          {
            "q": "Se tu fossi più paziente, ___ molto di più da quella trattativa. (tu – ottenere)",
            "a": "avresti ottenuto",
            "no": [
              "otterresti",
              "ottenessi",
              "avessi ottenuto"
            ]
          },
          {
            "q": "Se Marta ___ meno diffidente, avrebbe accettato l’invito senza pensarci. (essere)",
            "a": "fosse",
            "no": [
              "fosse stata",
              "sarebbe",
              "era"
            ]
          },
          {
            "q": "Se ___ più esperienza, non avremmo cambiato fornitore tre volte. (noi – avere)",
            "a": "avessimo",
            "no": [
              "avessimo avuto",
              "avremmo",
              "avevamo"
            ]
          },
          {
            "q": "Se non fossi così pignolo, non ___ tutto tre volte. (io – rileggere)",
            "a": "avrei riletto",
            "no": [
              "rileggerei",
              "rileggessi",
              "avessi riletto"
            ]
          },
          {
            "q": "Se mio fratello fosse più prudente, non ___ tutti i risparmi in quel progetto. (lui – investire)",
            "a": "avrebbe investito",
            "no": [
              "investirebbe",
              "investisse",
              "avesse investito"
            ]
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
    "lez": [
      "C1 L18"
    ],
    "title": "Il congiuntivo nelle proposizioni finali e consecutive",
    "exercises": [
      {
        "type": "Riempimento",
        "fmt": "fill",
        "instr": "Scrivi il congiuntivo nel tempo richiesto dal verbo reggente.",
        "items": [
          {
            "q": "Il preside anticipa l'uscita affinché gli studenti ___ prendere l'autobus delle due. (potere)",
            "a": "possano",
            "no": [
              "potessero",
              "possono",
              "potrebbero"
            ]
          },
          {
            "q": "L'anno scorso spostarono la partita perché i tifosi ospiti ___ ad arrivare in tempo. (riuscire)",
            "a": "riuscissero",
            "no": [
              "riuscivano",
              "riescano",
              "riuscirebbero"
            ]
          },
          {
            "q": "La clinica aprì un secondo sportello affinché le file ___ più corte. (essere)",
            "a": "fossero",
            "no": [
              "erano",
              "siano",
              "sarebbero"
            ]
          },
          {
            "q": "Metteremo due lampioni nel vialetto in modo che gli ospiti ___ dove mettere i piedi. (vedere)",
            "a": "vedano",
            "no": [
              "vedessero",
              "vedono",
              "vedrebbero"
            ]
          },
          {
            "q": "Ogni sera lascio la luce accesa perché mia figlia ___ la porta senza cercare l'interruttore. (trovare)",
            "a": "trovi",
            "no": [
              "trovasse",
              "trova",
              "troverebbe"
            ]
          },
          {
            "q": "Il museo prolungò gli orari estivi in modo che anche i pendolari lo ___ dopo il lavoro. (visitare)",
            "a": "visitassero",
            "no": [
              "visitavano",
              "visitino",
              "visiterebbero"
            ]
          }
        ]
      },
      {
        "type": "Riempimento",
        "fmt": "buco",
        "instr": "Scegli come introdurre lo scopo.",
        "items": [
          {
            "q": "Ho lasciato la macchina fuori città ___ pagare il parcheggio in centro.",
            "options": [
              "per non",
              "affinché non",
              "in modo che non"
            ],
            "answer": 0
          },
          {
            "q": "Hanno spostato la fermata ___ gli anziani facessero meno strada.",
            "options": [
              "affinché",
              "per",
              "allo scopo di"
            ],
            "answer": 0
          },
          {
            "q": "Il tecnico ha lasciato le istruzioni sul tavolo ___ chiunque potesse riavviare il sistema.",
            "options": [
              "in modo che",
              "per",
              "allo scopo di"
            ],
            "answer": 0
          },
          {
            "q": "Sono uscito mezz'ora prima ___ un posto in prima fila.",
            "options": [
              "per trovare",
              "affinché",
              "in modo che"
            ],
            "answer": 0
          },
          {
            "q": "La scuola ha allungato il doposcuola ___ i genitori riuscissero a passare dopo il lavoro.",
            "options": [
              "affinché",
              "per",
              "in modo da"
            ],
            "answer": 0
          },
          {
            "q": "Abbiamo telefonato il giorno prima ___ il tavolo vicino alla finestra.",
            "options": [
              "per riservare",
              "affinché",
              "al fine che"
            ],
            "answer": 0
          }
        ]
      },
      {
        "type": "Correzione",
        "fmt": "errore",
        "instr": "Individua e clicca dove c'è l'errore.",
        "items": [
          {
            "q": "Hanno chiuso la strada affinché i bambini potrebbero giocare in sicurezza.",
            "wrong": "potrebbero",
            "fix": "potessero"
          },
          {
            "q": "Hanno montato le tende affinché la sala non si scaldava troppo.",
            "wrong": "scaldava",
            "fix": "scaldasse"
          },
          {
            "q": "La strada rimase chiusa per ore, al punto che molti clienti rinunciassero a raggiungere il negozio.",
            "wrong": "rinunciassero",
            "fix": "rinunciarono"
          },
          {
            "q": "Il rumore aumentò così tanto che gli inquilini si lamentassero con l'amministratore.",
            "wrong": "lamentassero",
            "fix": "lamentarono"
          },
          {
            "q": "Abbiamo anticipato la partenza in modo che i ragazzi evitavano il traffico dell'ora di punta.",
            "wrong": "evitavano",
            "fix": "evitassero"
          },
          {
            "q": "Il servizio scuolabus fu soppresso, con la conseguenza che molte famiglie dovessero cambiare scuola.",
            "wrong": "dovessero",
            "fix": "dovettero"
          }
        ]
      }
    ]
  },
  {
    "lvl": "c1",
    "lez": [
      "C1 L19"
    ],
    "title": "Il condizionale passato: notizia riferita, ironia e rimprovero",
    "exercises": [
      {
        "type": "Comprensione",
        "fmt": "buco",
        "instr": "Leggi la frase e scegli l’affermazione vera.",
        "items": [
          {
            "q": "«Secondo le prime ricostruzioni, l’incendio sarebbe partito dal seminterrato.»",
            "options": [
              "Chi scrive riferisce senza garantire che sia andata così.",
              "Chi scrive afferma che è andata così.",
              "Chi scrive esclude che sia andata così."
            ],
            "answer": 0
          },
          {
            "q": "«Il filmato conferma che il portone è rimasto aperto tutta la notte.»",
            "options": [
              "Chi scrive dà il fatto per accertato.",
              "Chi scrive riferisce una voce non verificata.",
              "Chi scrive mette in dubbio il filmato."
            ],
            "answer": 0
          },
          {
            "q": "«Il direttore comunicò che la riunione sarebbe iniziata alle tre.»",
            "options": [
              "La riunione doveva iniziare in un momento successivo rispetto alla comunicazione.",
              "La riunione era già iniziata quando il direttore parlò.",
              "Il direttore non sapeva a che ora sarebbe iniziata la riunione."
            ],
            "answer": 0
          },
          {
            "q": "«Stando ai sindacati, l’azienda avrebbe già deciso i trasferimenti.»",
            "options": [
              "La notizia circola ma chi scrive non la garantisce.",
              "L’azienda ha deciso i trasferimenti, ed è certo.",
              "L’azienda deciderà i trasferimenti più avanti."
            ],
            "answer": 0
          },
          {
            "q": "«Sapevo che non ce l’avrebbe fatta da solo.»",
            "options": [
              "Si riferisce una previsione fatta in passato.",
              "Si riferisce una voce non confermata.",
              "Si esprime un rimprovero verso di lui."
            ],
            "answer": 0
          },
          {
            "q": "«I dati del comune provano che il consumo è calato del venti per cento.»",
            "options": [
              "Chi scrive dà il calo per accertato.",
              "Chi scrive riferisce un calo di cui non risponde.",
              "Chi scrive prevede un calo futuro."
            ],
            "answer": 0
          }
        ]
      },
      {
        "type": "Correzione",
        "fmt": "errore",
        "instr": "Individua e clicca dove c'è l'errore.",
        "items": [
          {
            "q": "Secondo il primo bilancio, la frana travolgerebbe due automobili all’alba.",
            "wrong": "travolgerebbe",
            "fix": "avrebbe travolto"
          },
          {
            "q": "La perizia ha stabilito che il muro sarebbe stato costruito senza autorizzazione.",
            "wrong": "sarebbe",
            "fix": "era"
          },
          {
            "q": "Stando a fonti interne, la cooperativa assumerebbe dieci persone il mese scorso, ma nel libro paga di quel mese non compare nessun nuovo nome.",
            "wrong": "assumerebbe",
            "fix": "avrebbe assunto"
          },
          {
            "q": "La sentenza ha accertato che l’azienda avrebbe versato i contributi già quattro mesi prima dell’ispezione.",
            "wrong": "avrebbe",
            "fix": "aveva"
          },
          {
            "q": "Lunedì scorso il portavoce mi disse che il ministro passerà in aula il giorno seguente.",
            "wrong": "passerà",
            "fix": "sarebbe passato"
          },
          {
            "q": "Mi avevano garantito che il pezzo di ricambio arriverebbe entro tre giorni, e siamo alla seconda settimana.",
            "wrong": "arriverebbe",
            "fix": "sarebbe arrivato"
          }
        ]
      },
      {
        "type": "Comprensione",
        "fmt": "buco",
        "instr": "Che cosa sta facendo chi parla? Scegli l’affermazione vera.",
        "items": [
          {
            "q": "«Avresti potuto avvisarmi che non venivi.»",
            "options": [
              "Rimprovera l’altro per non averlo fatto.",
              "Chiede di essere avvisato la prossima volta.",
              "Constata un fatto senza giudicarlo."
            ],
            "answer": 0
          },
          {
            "q": "«Avrebbe dovuto essere una gita di mezza giornata: siamo rientrati a mezzanotte.»",
            "options": [
              "Sottolinea il contrasto fra la previsione e come è andata.",
              "Dice che la gita è durata meno del previsto.",
              "Dice che la gita non è mai avvenuta."
            ],
            "answer": 0
          },
          {
            "q": "«Avrei voluto salutarti prima di partire, ma il volo era alle sei.»",
            "options": [
              "Esprime un rammarico, senza accusare nessuno.",
              "Rimprovera l’altro di non essersi fatto trovare.",
              "Dice che alla fine non è partito."
            ],
            "answer": 0
          },
          {
            "q": "«Non avresti potuto scegliere un momento peggiore.»",
            "options": [
              "Sta criticando la scelta: il momento è pessimo.",
              "Dice che il momento scelto era buono.",
              "Dice che non c’era altra scelta possibile."
            ],
            "answer": 0
          },
          {
            "q": "«Il “restauro lampo” sarebbe dovuto durare due settimane, siamo al quarto mese.»",
            "options": [
              "Usa il condizionale per ironizzare sulla durata.",
              "Non sa quanto sia durato davvero il restauro.",
              "Dice che il restauro non è mai cominciato."
            ],
            "answer": 0
          },
          {
            "q": "«Avrebbe dovuto avvisarci lui, non toccava certo a noi.»",
            "options": [
              "Rimprovera una terza persona.",
              "Si assume la responsabilità di non aver avvisato.",
              "Dice che nessuno era tenuto ad avvisare."
            ],
            "answer": 0
          }
        ]
      }
    ]
  },
  {
    "lvl": "c1",
    "lez": [
      "C1 L24"
    ],
    "title": "Le forme implicite con i pronomi",
    "exercises": [
      {
        "type": "Trasformazione",
        "fmt": "fill",
        "instr": "Riscrivi con il gerundio semplice, attaccando il pronome.",
        "items": [
          {
            "q": "Quando lo rileggi con calma, ti accorgi subito dell’errore. → ___ con calma, ti accorgi subito dell’errore.",
            "a": "Rileggendolo",
            "no": [
              "Lo rileggendo",
              "Rileggendo lo",
              "Avendolo riletto"
            ]
          },
          {
            "q": "Se ne parli con lei, capisci meglio la situazione. → ___ con lei, capisci meglio la situazione.",
            "a": "Parlandone",
            "no": [
              "Ne parlando",
              "Parlando ne",
              "Avendone parlato"
            ]
          },
          {
            "q": "Mentre li ascoltava, prendeva appunti. → ___, prendeva appunti.",
            "a": "Ascoltandoli",
            "no": [
              "Li ascoltando",
              "Ascoltando li",
              "Avendoli ascoltati"
            ]
          },
          {
            "q": "Poiché mi fidavo di lui, non ho controllato niente. → ___ di lui, non ho controllato niente.",
            "a": "Fidandomi",
            "no": [
              "Mi fidando",
              "Fidando mi",
              "Essendomi fidato"
            ]
          },
          {
            "q": "Quando la incontro per strada, cambio marciapiede. → ___ per strada, cambio marciapiede.",
            "a": "Incontrandola",
            "no": [
              "La incontrando",
              "Incontrando la",
              "Avendola incontrata"
            ]
          },
          {
            "q": "Se ci pensi bene, la soluzione è più semplice di così. → ___ bene, la soluzione è più semplice di così.",
            "a": "Pensandoci",
            "no": [
              "Ci pensando",
              "Pensando ci",
              "Avendoci pensato"
            ]
          }
        ]
      },
      {
        "type": "Trasformazione",
        "fmt": "fill",
        "instr": "Riscrivi con una forma implicita: scrivi solo la parte che va nello spazio.",
        "items": [
          {
            "q": "Dopo che l’ho controllata, ho firmato la ricevuta. → ___, ho firmato la ricevuta.",
            "a": "Avendola controllata",
            "no": [
              "Controllandola",
              "Avendo controllatala",
              "La avendo controllata"
            ]
          },
          {
            "q": "Mentre ne discutevo con lui, ho capito il mio errore. → ___ con lui, ho capito il mio errore.",
            "a": "Discutendone",
            "no": [
              "Avendone discusso",
              "Ne discutendo",
              "Discutendo ne"
            ]
          },
          {
            "q": "Poiché li avevo già visti, non sono entrato. → ___, non sono entrato.",
            "a": "Avendoli già visti",
            "no": [
              "Vedendoli già",
              "Avendo già vistili",
              "Li avendo già visti"
            ]
          },
          {
            "q": "Mentre mi alzavo dalla sedia, ho sentito uno scricchiolio. → ___ dalla sedia, ho sentito uno scricchiolio.",
            "a": "Alzandomi",
            "no": [
              "Essendomi alzato",
              "Mi alzando",
              "Alzando mi"
            ]
          },
          {
            "q": "Poiché non ci aveva pensato prima, ha dovuto rifare tutto. → ___ prima, ha dovuto rifare tutto.",
            "a": "Non avendoci pensato",
            "no": [
              "Non pensandoci",
              "Non avendo pensatoci",
              "Non ci avendo pensato"
            ]
          },
          {
            "q": "Mentre la osservavo dalla finestra, ho notato che si è girata di scatto. → ___ dalla finestra, ho notato che si è girata di scatto.",
            "a": "Osservandola",
            "no": [
              "Avendola osservata",
              "La osservando",
              "Osservando la"
            ]
          }
        ]
      },
      {
        "type": "Scelta",
        "fmt": "buco",
        "instr": "Scegli la versione corretta.",
        "items": [
          {
            "q": "Dopo che l’ho aperta, non sono più riuscito a chiudere la finestra. →",
            "options": [
              "Avendola aperta, non sono più riuscito a chiudere la finestra.",
              "Avendola aperto, non sono più riuscito a chiudere la finestra.",
              "Avendo la aperta, non sono più riuscito a chiudere la finestra."
            ],
            "answer": 0
          },
          {
            "q": "Mentre lo guardavo, mi sono ricordato di lui. →",
            "options": [
              "Guardandolo, mi sono ricordato di lui.",
              "Lo guardando, mi sono ricordato di lui.",
              "Guardando lo, mi sono ricordato di lui."
            ],
            "answer": 0
          },
          {
            "q": "Poiché me ne ero accorto in tempo, ho evitato il peggio. →",
            "options": [
              "Essendomene accorto in tempo, ho evitato il peggio.",
              "Essendo accortomene in tempo, ho evitato il peggio.",
              "Mi essendone accorto in tempo, ho evitato il peggio."
            ],
            "answer": 0
          },
          {
            "q": "Se gli scrivi adesso, forse fai in tempo. →",
            "options": [
              "Scrivendogli adesso, forse fai in tempo.",
              "Gli scrivendo adesso, forse fai in tempo.",
              "Scrivendo gli adesso, forse fai in tempo."
            ],
            "answer": 0
          },
          {
            "q": "Dopo che ce lo avevano spiegato, sono passati all’argomento successivo. →",
            "options": [
              "Avendocelo spiegato, sono passati all’argomento successivo.",
              "Avendocelo spiegata, sono passati all’argomento successivo.",
              "Ce lo avendo spiegato, sono passati all’argomento successivo."
            ],
            "answer": 0
          },
          {
            "q": "Mentre ci pensavo, ho perso la fermata. →",
            "options": [
              "Pensandoci, ho perso la fermata.",
              "Ci pensando, ho perso la fermata.",
              "Pensando ci, ho perso la fermata."
            ],
            "answer": 0
          }
        ]
      }
    ],
    "diag": true
  },
  {
    "lvl": "c1",
    "lez": [
      "C1 L25"
    ],
    "title": "Il condizionale per ipotizzare percezioni e reazioni",
    "exercises": [
      {
        "type": "Riempimento",
        "fmt": "fill",
        "instr": "Completa con la forma corretta del verbo fra parentesi. La supposizione riguarda il presente.",
        "items": [
          {
            "q": "Sembrerebbe che la consegna ___ stata rinviata a lunedì. (essere)",
            "a": "sia",
            "no": [
              "è",
              "fosse",
              "sarebbe"
            ]
          },
          {
            "q": "Si direbbe che nessuno ___ fretta di rispondere. (avere)",
            "a": "abbia",
            "no": [
              "ha",
              "avesse",
              "avrebbe"
            ]
          },
          {
            "q": "Parrebbe che i responsabili ___ valutando una soluzione alternativa. (stare)",
            "a": "stiano",
            "no": [
              "stanno",
              "stessero",
              "starebbero"
            ]
          },
          {
            "q": "Sembrerebbe che i lavori ___ più lentamente del previsto. (procedere)",
            "a": "procedano",
            "no": [
              "procedono",
              "procedessero",
              "procederebbero"
            ]
          },
          {
            "q": "Si direbbe che il nuovo orario non ___ a nessuno. (piacere)",
            "a": "piaccia",
            "no": [
              "piace",
              "piacesse",
              "piacerebbe"
            ]
          },
          {
            "q": "Sembrerebbe che nessuno ___ l’ultima versione del documento. (leggere)",
            "a": "abbia letto",
            "no": [
              "ha letto",
              "avesse letto",
              "leggerebbe"
            ]
          }
        ]
      },
      {
        "type": "Correzione",
        "fmt": "errore",
        "instr": "Individua e clicca dove c'è l'errore.",
        "items": [
          {
            "q": "Sembrerebbe che i tecnici hanno rinunciato a cercare il guasto.",
            "wrong": "hanno",
            "fix": "abbiano"
          },
          {
            "q": "Parrebbe che il cantiere riaprirebbe solo a settembre.",
            "wrong": "riaprirebbe",
            "fix": "riapra"
          },
          {
            "q": "Sembrerebbe che la nuova procedura rallenta tutto il reparto.",
            "wrong": "rallenta",
            "fix": "rallenti"
          },
          {
            "q": "Allora avrei scommesso che il treno sia già partito da un pezzo.",
            "wrong": "sia",
            "fix": "fosse"
          },
          {
            "q": "Allora non avrei immaginato che tu rinunci così facilmente.",
            "wrong": "rinunci",
            "fix": "rinunciassi"
          },
          {
            "q": "Avrei creduto che tu sei più prudente.",
            "wrong": "sei",
            "fix": "fossi"
          }
        ]
      },
      {
        "type": "Riempimento",
        "fmt": "fill",
        "instr": "Il condizionale è al passato. Completa con il congiuntivo nel tempo corretto.",
        "items": [
          {
            "q": "Avrei pensato che i colleghi ___ già da un’ora. (uscire)",
            "a": "fossero usciti",
            "no": [
              "uscissero",
              "sono usciti",
              "escano"
            ]
          },
          {
            "q": "Avrei giurato che il locale ___ abitualmente prima delle undici. (chiudere)",
            "a": "chiudesse",
            "no": [
              "chiude",
              "avesse chiuso",
              "chiuda"
            ]
          },
          {
            "q": "Non avrei mai immaginato che a quell’ora ci ___ ancora tanta gente in sala. (essere)",
            "a": "fosse",
            "no": [
              "era",
              "sia",
              "fosse stata"
            ]
          },
          {
            "q": "In quel momento avrei detto che la risposta ___ già la settimana prima. (arrivare)",
            "a": "fosse arrivata",
            "no": [
              "arrivasse",
              "è arrivata",
              "sia arrivata"
            ]
          },
          {
            "q": "Avrei scommesso che in quel momento nessuno ___ la risposta. (sapere)",
            "a": "sapesse",
            "no": [
              "sa",
              "avesse saputo",
              "sappia"
            ]
          },
          {
            "q": "Non avrei creduto che loro ___ ancora in quella sede. (lavorare)",
            "a": "lavorassero",
            "no": [
              "lavorano",
              "avessero lavorato",
              "lavorino"
            ]
          }
        ]
      }
    ],
    "diag": true
  },
  {
    "lvl": "c1",
    "lez": [
      "C1 L25"
    ],
    "title": "Comprensione: fatti e percezioni",
    "exercises": [
      {
        "type": "Comprensione",
        "fmt": "buco",
        "instr": "Leggi il testo e rispondi.",
        "testo": "Un istituto europeo ha pubblicato un'indagine sull'immagine internazionale dell'Italia. Il 68% degli intervistati associa il paese a cucina, arte e clima: il dato è confermato da tre rilevazioni successive. La ricercatrice che ha coordinato il lavoro resta prudente: «Sembrerebbe che l'Italia sia percepita soprattutto come luogo di vacanza, ma il campione è ancora ristretto». Un intervistato tedesco racconta che, prima di trasferirsi, pensava che gli orari di lavoro italiani fossero più brevi dei suoi; oggi sa che gli italiani lavorano in media più ore dei tedeschi. Benché il luogo comune sulla lentezza sia ancora diffuso, l'indagine non lo conferma. Sulle differenze regionali la ricercatrice aggiunge soltanto: «Direi che contano più della nazionalità».",
        "items": [
          {
            "q": "Il testo dà per certo che l'Italia è percepita soprattutto come luogo di vacanza?",
            "options": [
              "No, lo presenta come un'impressione ancora da confermare.",
              "Sì, è il risultato principale dell'indagine.",
              "No, il testo lo smentisce apertamente."
            ],
            "answer": 0
          },
          {
            "q": "Come è presentato il dato del 68%?",
            "options": [
              "Come un risultato verificato da più rilevazioni.",
              "Come una supposizione della ricercatrice.",
              "Come l'opinione di un singolo intervistato."
            ],
            "answer": 0
          },
          {
            "q": "L'intervistato tedesco crede ancora che in Italia si lavori meno?",
            "options": [
              "No, era un'aspettativa che aveva prima di trasferirsi.",
              "Sì, è la sua opinione di oggi.",
              "Il testo non permette di saperlo."
            ],
            "answer": 0
          },
          {
            "q": "Che cosa dice il testo del luogo comune sulla lentezza?",
            "options": [
              "È ancora diffuso, ma l'indagine non lo conferma.",
              "È confermato dai risultati dell'indagine.",
              "Secondo l'indagine è ormai scomparso."
            ],
            "answer": 0
          },
          {
            "q": "L'affermazione sulle differenze regionali che valore ha?",
            "options": [
              "È un giudizio personale attenuato, non un risultato dell'indagine.",
              "È il risultato più solido dell'indagine.",
              "È la citazione di un intervistato."
            ],
            "answer": 0
          },
          {
            "q": "Quale delle tre affermazioni il testo presenta come accertata?",
            "options": [
              "Gli italiani lavorano in media più ore dei tedeschi.",
              "L'Italia è percepita soprattutto come luogo di vacanza.",
              "Le differenze regionali contano più della nazionalità."
            ],
            "answer": 0
          }
        ]
      },
      {
        "type": "Comprensione",
        "fmt": "buco",
        "instr": "Leggi il testo e rispondi.",
        "testo": "A un incontro sulla comunicazione interculturale un docente italiano ha spiegato che i gesti cambiano significato secondo la regione e la situazione: su questo, ha precisato, gli studi sono concordi. Una partecipante giapponese ha raccontato che all'inizio interpretava ogni gesto come segno di forte emotività, e che solo dopo due anni si è accorta dell'errore. Un imprenditore tedesco si è detto sorpreso: «Non mi sarei aspettato riunioni così puntuali a Torino». Il moderatore ha chiuso con una nota di cautela: «Sembrerebbe che la puntualità dipenda più dal settore che dalla regione, ma nessuno di noi ha dati». Malgrado gli esempi siano numerosi, ha aggiunto, restano esperienze individuali.",
        "items": [
          {
            "q": "Su che cosa il testo dice che gli studi sono concordi?",
            "options": [
              "Sul fatto che il significato dei gesti varia con la regione e la situazione.",
              "Sul fatto che la puntualità dipende dal settore.",
              "Sul fatto che gli italiani sono più emotivi degli altri."
            ],
            "answer": 0
          },
          {
            "q": "La partecipante giapponese legge ancora ogni gesto come forte emotività?",
            "options": [
              "No, era la sua lettura dei primi tempi.",
              "Sì, continua a interpretarli così.",
              "Il testo dice che non ha mai avuto quell'idea."
            ],
            "answer": 0
          },
          {
            "q": "L'imprenditore tedesco si aspettava riunioni puntuali a Torino?",
            "options": [
              "No, e proprio per questo si dice sorpreso.",
              "Sì, era esattamente quello che prevedeva.",
              "Il testo non permette di saperlo."
            ],
            "answer": 0
          },
          {
            "q": "L'idea che la puntualità dipenda dal settore che valore ha nel testo?",
            "options": [
              "È un'ipotesi avanzata senza dati a sostegno.",
              "È un risultato degli studi citati.",
              "È l'esperienza diretta del moderatore."
            ],
            "answer": 0
          },
          {
            "q": "Perché il moderatore invita alla cautela?",
            "options": [
              "Perché gli esempi, benché numerosi, restano esperienze individuali.",
              "Perché i dati raccolti si contraddicono fra loro.",
              "Perché i partecipanti non erano d'accordo fra loro."
            ],
            "answer": 0
          },
          {
            "q": "Che cosa rappresenta l'esperienza dell'imprenditore tedesco?",
            "options": [
              "Un'esperienza individuale che contraddice una sua aspettativa.",
              "Un dato valido per tutte le aziende italiane.",
              "Una conclusione sostenuta dagli studi citati."
            ],
            "answer": 0
          }
        ]
      },
      {
        "type": "Comprensione",
        "fmt": "buco",
        "instr": "Leggi il testo e rispondi.",
        "testo": "Un articolo universitario ha confrontato gli spot turistici sull'Italia con una serie di interviste a giovani italiani. Negli spot prevalgono borghi, cucina tradizionale e ritmi lenti, nelle interviste compaiono pendolarismo, lavoro digitale e costi abitativi. L'autrice registra il contrasto senza schierarsi: «Direi che nessuna delle due immagini sia completa». Un dato invece lo dà per acquisito: chi resta nel paese più di un mese usa meno generalizzazioni assolute di chi si ferma un giorno; il campione, scrive, è ampio e il risultato si ripete da cinque anni. In chiusura avanza un'ipotesi: un contatto prolungato favorirebbe una percezione più sfumata del paese. Benché l'ipotesi sia plausibile, l'articolo non la verifica.",
        "items": [
          {
            "q": "Che valore ha il giudizio dell'autrice sulle due immagini?",
            "options": [
              "È un'opinione attenuata, non una conclusione dimostrata.",
              "È il risultato principale della ricerca.",
              "È una citazione dei giovani intervistati."
            ],
            "answer": 0
          },
          {
            "q": "Quale risultato l'articolo dà per acquisito?",
            "options": [
              "Chi resta più di un mese generalizza meno di chi si ferma un giorno.",
              "Un contatto prolungato rende la percezione più sfumata.",
              "Nessuna delle due immagini del paese è completa."
            ],
            "answer": 0
          },
          {
            "q": "Su che cosa si regge il risultato dato per acquisito?",
            "options": [
              "Su un campione ampio e su cinque anni di rilevazioni.",
              "Su un'ipotesi formulata dall'autrice.",
              "Sul confronto fra due soli spot turistici."
            ],
            "answer": 0
          },
          {
            "q": "Quali elementi compaiono nelle interviste e non negli spot?",
            "options": [
              "Pendolarismo, lavoro digitale e costi abitativi.",
              "Borghi, ritmi lenti e cucina tradizionale.",
              "Borghi, pendolarismo e ritmi lenti."
            ],
            "answer": 0
          },
          {
            "q": "Che cosa dice il testo dell'ipotesi finale?",
            "options": [
              "La considera plausibile, ma non la verifica.",
              "La considera dimostrata dai dati raccolti.",
              "La respinge come poco credibile."
            ],
            "answer": 0
          },
          {
            "q": "L'articolo stabilisce quale delle due immagini sia più vera?",
            "options": [
              "No, registra il contrasto senza prendere posizione.",
              "Sì, sostiene quella che emerge dalle interviste.",
              "Sì, sostiene quella che emerge dagli spot."
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
      "B1 L24"
    ],
    "title": "Il passato remoto: riconoscere la forma",
    "exercises": [
      {
        "type": "Scelta",
        "fmt": "buco",
        "instr": "Riscrivi il racconto come se i fatti fossero successi da poco.",
        "items": [
          {
            "q": "Il maestro lavorò molti anni alla corte del duca. → Il maestro ___ molti anni alla corte del duca.",
            "options": [
              "ha lavorato",
              "lavorava",
              "aveva lavorato"
            ],
            "answer": 0
          },
          {
            "q": "Il giovane si trasferì a Roma nel 1490. → Il giovane ___ a Roma nel 1490.",
            "options": [
              "si è trasferito",
              "si trasferiva",
              "si era trasferito"
            ],
            "answer": 0
          },
          {
            "q": "L’allievo copiò i disegni del maestro per cinque anni. → L’allievo ___ i disegni del maestro per cinque anni.",
            "options": [
              "ha copiato",
              "copiava",
              "aveva copiato"
            ],
            "answer": 0
          },
          {
            "q": "Il committente rifiutò il primo bozzetto. → Il committente ___ il primo bozzetto.",
            "options": [
              "ha rifiutato",
              "rifiutava",
              "aveva rifiutato"
            ],
            "answer": 0
          },
          {
            "q": "L’artista partì per la Francia in autunno. → L’artista ___ per la Francia in autunno.",
            "options": [
              "è partito",
              "partiva",
              "era partito"
            ],
            "answer": 0
          },
          {
            "q": "Il maestro tornò a Firenze dopo dieci anni. → Il maestro ___ a Firenze dopo dieci anni.",
            "options": [
              "è tornato",
              "tornava",
              "era tornato"
            ],
            "answer": 0
          }
        ]
      },
      {
        "type": "Correzione",
        "fmt": "errore",
        "instr": "Il racconto è tutto al passato remoto: individua e clicca dove c'è l'errore.",
        "items": [
          {
            "q": "Il pittore nacque a Ferrara, studiò a Firenze e moriva a Roma molto giovane.",
            "wrong": "moriva",
            "fix": "morì"
          },
          {
            "q": "Il maestro apriva una bottega, prese tre allievi e insegnò a tutti il disegno.",
            "wrong": "apriva",
            "fix": "aprì"
          },
          {
            "q": "L’artista dipinse la volta, scolpiva il portale e scrisse anche dei versi.",
            "wrong": "scolpiva",
            "fix": "scolpì"
          },
          {
            "q": "Il mercante comprò il quadro, lo portò a Venezia e lo vende al doge.",
            "wrong": "vende",
            "fix": "vendette"
          },
          {
            "q": "Il duca ordina la statua, pagò l’anticipo e poi cambiò idea.",
            "wrong": "ordina",
            "fix": "ordinò"
          },
          {
            "q": "Il giovane arrivò a Roma, resta senza lavoro per mesi e poi trovò un posto.",
            "wrong": "resta",
            "fix": "restò"
          }
        ]
      },
      {
        "type": "Scelta",
        "fmt": "buco",
        "instr": "Scegli l'infinito del verbo al passato remoto.",
        "items": [
          {
            "q": "Il pittore visse a Urbino fino ai vent'anni.",
            "options": [
              "vivere",
              "vedere",
              "venire"
            ],
            "answer": 0
          },
          {
            "q": "Il segretario del duca scrisse una lunga relazione.",
            "options": [
              "scrivere",
              "scendere",
              "scegliere"
            ],
            "answer": 0
          },
          {
            "q": "L'allievo dipinse il fondo del quadro.",
            "options": [
              "dipingere",
              "dipendere",
              "difendere"
            ],
            "answer": 0
          },
          {
            "q": "Il figlio del mercante nacque durante un viaggio.",
            "options": [
              "nascere",
              "nascondere",
              "nuocere"
            ],
            "answer": 0
          },
          {
            "q": "Il vecchio maestro morì l'inverno seguente.",
            "options": [
              "morire",
              "mordere",
              "mostrare"
            ],
            "answer": 0
          },
          {
            "q": "Lo scultore scolpì un leone di pietra.",
            "options": [
              "scolpire",
              "scoprire",
              "sciogliere"
            ],
            "answer": 0
          }
        ]
      }
    ]
  },
  {
    "title": "Comprensione: attese, promesse e realtà",
    "lvl": "b2",
    "lez": [
      "B2 L19",
      "B2 L21",
      "B2 L22",
      "B2 L28"
    ],
    "exercises": [
      {
        "type": "Comprensione",
        "fmt": "buco",
        "instr": "Leggi il testo e rispondi.",
        "testo": "Paolo ha lavorato per vent'anni come cuoco nel ristorante di un albergo. Il suo progetto però era un altro: aprire una piccola trattoria di pesce vicino al porto, con pochi tavoli e il menù scritto a mano. Aveva anche trovato il locale: se il proprietario non avesse cambiato idea all'ultimo momento, la trattoria avrebbe aperto nella primavera del 2019. La caparra, Paolo non ha fatto in tempo a versarla. Il socio di allora pensava che Paolo avesse messo da parte abbastanza soldi per ripartire da solo; in realtà i risparmi coprivano appena l'affitto di un anno. Oggi Paolo dice che, se avesse versato la caparra un mese prima, il proprietario non avrebbe potuto tirarsi indietro. Sua moglie la vede diversamente: era convinta che quell'attività li avrebbe portati a lavorare sette giorni su sette, e non lo nasconde: «Se la trattoria avesse aperto, non avremmo mai più fatto una vacanza». Del vecchio progetto resta una cartella: il menù, i conti e la lista dei fornitori che Paolo aveva già contattato.",
        "items": [
          {
            "q": "La trattoria alla fine ha aperto?",
            "options": [
              "No, non ha mai aperto.",
              "Sì, ma solo nella primavera del 2019.",
              "Il testo non permette di saperlo."
            ],
            "answer": 0
          },
          {
            "q": "Paolo aveva davvero i soldi per ripartire da solo?",
            "options": [
              "No: i risparmi bastavano appena per un anno di affitto.",
              "Sì, come pensava il suo socio.",
              "Il testo non lo dice."
            ],
            "answer": 0
          },
          {
            "q": "Che valore ha l'idea che versando prima la caparra il proprietario non si sarebbe potuto tirare indietro?",
            "options": [
              "È un'opinione di Paolo su come sarebbero potute andare le cose.",
              "È un fatto che il testo dà per accaduto.",
              "È l'opinione del proprietario."
            ],
            "answer": 0
          },
          {
            "q": "Paolo ha versato la caparra?",
            "options": [
              "No, non è arrivato a versarla.",
              "Sì, un mese prima dell'apertura.",
              "Il testo non permette di saperlo."
            ],
            "answer": 0
          },
          {
            "q": "Che cosa risulta delle vacanze di Paolo e della moglie?",
            "options": [
              "Hanno potuto continuare a farle proprio perché la trattoria non ha aperto.",
              "Non ne hanno mai più fatta una.",
              "Ne avevano già programmata una per il 2019."
            ],
            "answer": 0
          },
          {
            "q": "I fornitori erano già stati contattati?",
            "options": [
              "Sì, Paolo lo aveva già fatto.",
              "No, era solo una lista di nomi da chiamare.",
              "Il testo non lo dice."
            ],
            "answer": 0
          }
        ]
      },
      {
        "type": "Comprensione",
        "fmt": "buco",
        "instr": "Leggi il testo e rispondi.",
        "testo": "Quando è arrivata al museo civico, due anni fa, la nuova direttrice aveva annunciato che il giardino interno avrebbe riaperto entro giugno e che l'ingresso sarebbe rimasto gratuito la prima domenica del mese. Il giardino ha riaperto in ottobre, con quattro mesi di ritardo; la domenica gratuita invece c'è ancora oggi. I dipendenti erano preoccupati: pensavano che la nuova gestione avrebbe chiuso la piccola caffetteria del piano terra, che invece lavora ancora e ha perfino allungato l'orario. Un giornale locale ha scritto che la direttrice voleva trasferire i laboratori per bambini in un'altra sede; lei ha sempre negato di averlo mai pensato. Il mese scorso ha fatto una nuova promessa: entro l'anno prossimo il museo avrà una biglietteria unica con la biblioteca comunale. Sui tempi, ha ammesso lei stessa, «dipenderà dal Comune».",
        "items": [
          {
            "q": "Il giardino ha riaperto entro giugno, come annunciato?",
            "options": [
              "No: ha riaperto, ma quattro mesi dopo la data promessa.",
              "Sì, puntualmente.",
              "No, non ha mai riaperto."
            ],
            "answer": 0
          },
          {
            "q": "La promessa della domenica gratuita è stata mantenuta?",
            "options": [
              "Sì, ed è ancora in vigore.",
              "Sì, ma solo per il primo anno.",
              "Il testo non lo dice."
            ],
            "answer": 0
          },
          {
            "q": "La caffetteria è stata chiusa?",
            "options": [
              "No: i dipendenti lo temevano, ma è ancora aperta.",
              "Sì, come previsto dalla nuova gestione.",
              "Il testo non permette di saperlo."
            ],
            "answer": 0
          },
          {
            "q": "Che cosa risulta dell'idea di trasferire i laboratori per bambini?",
            "options": [
              "L'ha scritta un giornale, e la direttrice l'ha sempre negata.",
              "È un progetto annunciato dalla direttrice.",
              "È stata realizzata in un'altra sede."
            ],
            "answer": 0
          },
          {
            "q": "La biglietteria unica con la biblioteca esiste già?",
            "options": [
              "No: è una promessa recente, per l'anno prossimo.",
              "Sì, dal mese scorso.",
              "Sì, ma solo la domenica."
            ],
            "answer": 0
          },
          {
            "q": "Il testo permette di dire se la biglietteria unica arriverà nei tempi promessi?",
            "options": [
              "No: la stessa direttrice lega i tempi a una decisione del Comune.",
              "Sì, è garantito entro l'anno prossimo.",
              "Sì, il Comune ha già dato i tempi."
            ],
            "answer": 0
          }
        ]
      },
      {
        "type": "Comprensione",
        "fmt": "buco",
        "instr": "Leggi il testo e rispondi.",
        "testo": "Irene e Davide hanno cercato casa per otto mesi. All'inizio volevano un appartamento che avesse un balcone abbastanza grande per mangiarci fuori e che non fosse a più di dieci minuti a piedi dalla stazione. Di annunci ne hanno letti a decine, ma non ne hanno trovato nessuno che rispettasse tutte e due le condizioni. A febbraio un'agenzia ha proposto loro l'appartamento di via Ellera, che ha un terrazzo condominiale sul tetto e costa meno degli altri della zona: l'hanno scartato perché era al piano terra. Alla fine hanno preso un bilocale che ha il balcone stretto ma è a cinque minuti dalla stazione. Davide adesso cerca un tavolo pieghevole che si possa fissare alla ringhiera; Irene, che i tavoli pieghevoli non li ha mai sopportati, propone semplicemente di mangiare dentro.",
        "items": [
          {
            "q": "L'appartamento con tutte e due le condizioni è mai saltato fuori?",
            "options": [
              "No: nessun annuncio le rispettava entrambe.",
              "Sì, dopo otto mesi di ricerca.",
              "Il testo non lo dice."
            ],
            "answer": 0
          },
          {
            "q": "Il terrazzo condominiale di via Ellera esiste?",
            "options": [
              "Sì: è una caratteristica reale di quell'appartamento.",
              "No, era solo tra le richieste della coppia.",
              "Il testo non permette di saperlo."
            ],
            "answer": 0
          },
          {
            "q": "Perché hanno scartato l'appartamento di via Ellera?",
            "options": [
              "Perché era al piano terra.",
              "Perché costava più degli altri della zona.",
              "Perché non aveva il terrazzo."
            ],
            "answer": 0
          },
          {
            "q": "Il bilocale che hanno preso ha il balcone?",
            "options": [
              "Sì, anche se stretto.",
              "No, ed è per questo che mangiano dentro.",
              "Il testo non lo dice."
            ],
            "answer": 0
          },
          {
            "q": "Il tavolo pieghevole adatto è già stato trovato?",
            "options": [
              "No: Davide lo sta ancora cercando.",
              "Sì, ed è fissato alla ringhiera.",
              "Il testo non permette di saperlo."
            ],
            "answer": 0
          },
          {
            "q": "Che cosa risulta del rapporto di Irene con i tavoli pieghevoli?",
            "options": [
              "Non le sono mai piaciuti.",
              "Le piacciono, ma non su quel balcone.",
              "Ha cambiato idea da poco."
            ],
            "answer": 0
          }
        ]
      }
    ]
  },
  {
    "title": "I connettivi nell'argomentazione",
    "lvl": "b2",
    "lez": [
      "B1 L17",
      "B2 L1",
      "B2 L17"
    ],
    "exercises": [
      {
        "type": "Scelta",
        "fmt": "buco",
        "instr": "Scegli il connettivo adatto alla relazione fra i due enunciati.",
        "items": [
          {
            "q": "La biblioteca del quartiere ha pochi fondi; ___, quest'anno ha comprato più libri dell'anno scorso.",
            "options": [
              "tuttavia",
              "di conseguenza",
              "cioè"
            ],
            "answer": 0
          },
          {
            "q": "Il treno delle 7.40 è un regionale veloce, ___ ferma solo nelle stazioni principali.",
            "options": [
              "cioè",
              "tuttavia",
              "nel frattempo"
            ],
            "answer": 0
          },
          {
            "q": "Il condominio ha approvato tre interventi, ___ il rifacimento del tetto.",
            "options": [
              "in particolare",
              "cioè",
              "nel frattempo"
            ],
            "answer": 0
          },
          {
            "q": "Il meccanico controlla i freni; ___ la cliente aspetta al bar dell'angolo.",
            "options": [
              "nel frattempo",
              "perciò",
              "in particolare"
            ],
            "answer": 0
          },
          {
            "q": "___ la pioggia di stanotte, il mercato rionale si è tenuto come ogni giovedì.",
            "options": [
              "Nonostante",
              "A causa della",
              "Grazie alla"
            ],
            "answer": 0
          },
          {
            "q": "Le analisi dell'acqua hanno dato valori regolari; ___, la fontana del parco è tornata in funzione.",
            "options": [
              "di conseguenza",
              "tuttavia",
              "in particolare"
            ],
            "answer": 0
          }
        ]
      },
      {
        "type": "Correzione",
        "fmt": "errore",
        "instr": "Individua e clicca dove c'è l'errore.",
        "items": [
          {
            "q": "Il corso era gratuito e molto atteso, perciò si è iscritto soltanto uno studente.",
            "wrong": "perciò",
            "fix": "tuttavia"
          },
          {
            "q": "L'ingresso è gratuito per i residenti, tuttavia chi abita nel comune non paga.",
            "wrong": "tuttavia",
            "fix": "cioè"
          },
          {
            "q": "L'albergo offre la colazione inclusa e, invece, il parcheggio gratuito.",
            "wrong": "invece",
            "fix": "inoltre"
          },
          {
            "q": "Ha piovuto tre giorni sulle colline, però il fiume si è ingrossato.",
            "wrong": "però",
            "fix": "perciò"
          },
          {
            "q": "La piscina comunale è chiusa il lunedì, cioè il martedì apre alle sette.",
            "wrong": "cioè",
            "fix": "invece"
          },
          {
            "q": "Gli abitanti si lamentano dei collegamenti; infatti tre linee di autobus passano ogni dieci minuti.",
            "wrong": "infatti",
            "fix": "tuttavia"
          }
        ]
      },
      {
        "type": "Trasformazione",
        "fmt": "buco",
        "instr": "Scegli la frase che unisce i due enunciati concedendo il primo punto.",
        "items": [
          {
            "q": "I biglietti del festival costano parecchio. Lo spettacolo vale la spesa.",
            "options": [
              "È vero che i biglietti costano parecchio, tuttavia lo spettacolo vale la spesa.",
              "È vero che i biglietti costano parecchio, infatti lo spettacolo vale la spesa.",
              "È vero che i biglietti costano parecchio, cioè lo spettacolo vale la spesa."
            ],
            "answer": 0
          },
          {
            "q": "Il percorso in collina è faticoso. La vista ripaga della salita.",
            "options": [
              "Nonostante la fatica, la vista ripaga della salita.",
              "Nonostante il percorso è faticoso, la vista ripaga della salita.",
              "È vero che il percorso è faticoso, cioè la vista ripaga della salita."
            ],
            "answer": 0
          },
          {
            "q": "L'appartamento è piccolo. I ragazzi ci vivono bene.",
            "options": [
              "Nonostante l'appartamento sia piccolo, i ragazzi ci vivono bene.",
              "Nonostante l'appartamento è piccolo, i ragazzi ci vivono bene.",
              "Nonostante l'appartamento fosse piccolo, i ragazzi ci vivono bene."
            ],
            "answer": 0
          },
          {
            "q": "La fiera del sabato crea traffico. Porta clienti ai negozi della via.",
            "options": [
              "È vero che la fiera crea traffico, ma porta clienti ai negozi.",
              "È vero che la fiera crea traffico, perciò porta clienti ai negozi.",
              "È vero che la fiera crea traffico, nel frattempo porta clienti ai negozi."
            ],
            "answer": 0
          },
          {
            "q": "C'era vento forte. Il traghetto è partito in orario.",
            "options": [
              "Nonostante il vento forte, il traghetto è partito in orario.",
              "Nonostante il vento era forte, il traghetto è partito in orario.",
              "C'era vento forte, infatti il traghetto è partito in orario."
            ],
            "answer": 0
          },
          {
            "q": "Il nuovo orario penalizza i pendolari. L'azienda lo difende.",
            "options": [
              "È vero che il nuovo orario penalizza i pendolari, tuttavia l'azienda lo difende.",
              "È vero che il nuovo orario penalizza i pendolari, di conseguenza l'azienda lo difende.",
              "È vero che il nuovo orario penalizza i pendolari, in particolare l'azienda lo difende."
            ],
            "answer": 0
          }
        ]
      }
    ]
  }
];
