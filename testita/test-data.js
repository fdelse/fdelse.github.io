/* TEST-DATA.JS — Banca esercizi del TEST — versione aggiornata. */
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
            "q": "Marco e Giulia ___ italiani e hanno trent'anni.",
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
            "q": "Marco e Paolo, voi ___ italiani.",
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
        "instr": "Individua e clicca la parola sbagliata o la parola di troppo.",
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
            "q": "Mario e Antonio, voi avete spagnoli?",
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
        "instr": "Volgi al plurale: scegli la forma corretta.",
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
              "hanno una sorelle",
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
            "q": "In aula ___ ragazze sono già qui.",
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
        "instr": "Individua e clicca la parola sbagliata o la parola di troppo.",
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
            "q": "A casa lo cane è in giardino.",
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
        "instr": "Individua e clicca la parola sbagliata o la parola di troppo.",
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
            "q": "Ho due ___ in soggiorno. (divano)",
            "options": [
              "divani",
              "divano",
              "divane"
            ],
            "answer": 0
          },
          {
            "q": "In camera ho tre ___. (libro)",
            "options": [
              "libri",
              "libro",
              "libre"
            ],
            "answer": 0
          },
          {
            "q": "Ho due ___ in cucina. (sedia)",
            "options": [
              "sedie",
              "sedia",
              "sedii"
            ],
            "answer": 0
          },
          {
            "q": "In casa ho due ___. (porta)",
            "options": [
              "porte",
              "porta",
              "porti"
            ],
            "answer": 0
          },
          {
            "q": "Ho due ___ in camera. (letto)",
            "options": [
              "letti",
              "letto",
              "lette"
            ],
            "answer": 0
          },
          {
            "q": "La casa ha due ___. (camera da letto)",
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
        "instr": "Volgi al singolare: scegli la forma corretta.",
        "items": [
          {
            "q": "In camera c’è un solo ___. (tavoli)",
            "options": [
              "tavolo",
              "tavoli",
              "tavola"
            ],
            "answer": 0
          },
          {
            "q": "In cucina c’è una sola ___. (finestre)",
            "options": [
              "finestra",
              "finestre",
              "finestro"
            ],
            "answer": 0
          },
          {
            "q": "Anna ha una sola ___. (borse)",
            "options": [
              "borsa",
              "borse",
              "borso"
            ],
            "answer": 0
          },
          {
            "q": "In soggiorno c’è un solo ___. (quadri)",
            "options": [
              "quadro",
              "quadri",
              "quadra"
            ],
            "answer": 0
          },
          {
            "q": "Marco ha una sola ___. (macchine)",
            "options": [
              "macchina",
              "macchine",
              "macchino"
            ],
            "answer": 0
          },
          {
            "q": "Sara ha una sola ___. (scarpe)",
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
        "instr": "Individua e clicca la parola sbagliata o la parola di troppo.",
        "items": [
          {
            "q": "In soggiorno ho due posto per gli ospiti.",
            "wrong": "posto",
            "fix": "posti"
          },
          {
            "q": "Marta ha tre quaderno per la scuola.",
            "wrong": "quaderno",
            "fix": "quaderni"
          },
          {
            "q": "In camera Anna ha due lampada.",
            "wrong": "lampada",
            "fix": "lampade"
          },
          {
            "q": "Per la festa ho quattro torta.",
            "wrong": "torta",
            "fix": "torte"
          },
          {
            "q": "In albergo abbiamo due camera.",
            "wrong": "camera",
            "fix": "camere"
          },
          {
            "q": "Ho tre albero in giardino.",
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
        "instr": "Individua e clicca la parola sbagliata o la parola di troppo.",
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
            "q": "In strada ci sono molto rumore e poca gente.",
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
            "q": "Marco e Paolo sono due amici ___.",
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
        "instr": "Individua e clicca la parola sbagliata o la parola di troppo.",
        "items": [
          {
            "q": "Il cappotto è rossa e molto caldo.",
            "wrong": "rossa",
            "fix": "rosso"
          },
          {
            "q": "In cucina le sedie sono bianco.",
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
            "q": "I ragazzi della squadra sono alto.",
            "wrong": "alto",
            "fix": "alti"
          }
        ]
      },
      {
        "type": "Trasformazione",
        "fmt": "buco",
        "instr": "Volgi al plurale: scegli la forma corretta.",
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
            "q": "Mi chiamo Luca e ___ in centro, vicino alla stazione. (abitare)",
            "options": [
              "abito",
              "abita",
              "abiti"
            ],
            "answer": 0
          },
          {
            "q": "Paolo, ___ una canzone per Anna? (cantare)",
            "options": [
              "canti",
              "canta",
              "canto"
            ],
            "answer": 0
          },
          {
            "q": "Marta ___ in banca dal lunedì al venerdì. (lavorare)",
            "options": [
              "lavora",
              "lavori",
              "lavoro"
            ],
            "answer": 0
          },
          {
            "q": "Io e Sara ___ italiano ogni giorno. (studiare)",
            "options": [
              "studiamo",
              "studiate",
              "studiano"
            ],
            "answer": 0
          },
          {
            "q": "Ragazzi, ___ la pizza ogni venerdì sera? (mangiare)",
            "options": [
              "mangiate",
              "mangiamo",
              "mangiano"
            ],
            "answer": 0
          },
          {
            "q": "Marco e Luca ___ a casa tardi ogni sera. (tornare)",
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
        "instr": "Individua e clicca la parola sbagliata o la parola di troppo.",
        "items": [
          {
            "q": "La sera noi guarda la televisione e voi ascoltate la radio.",
            "wrong": "guarda",
            "fix": "guardiamo"
          },
          {
            "q": "A casa Anna cucinano la cena.",
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
            "q": "Ogni mattina Marco ___ una mail prima di iniziare il lavoro. (scrivere)",
            "options": [
              "scrive",
              "scrivi",
              "scrivo"
            ],
            "answer": 0
          },
          {
            "q": "Ogni mattina, a colazione, io e Sara ___ la radio. (accendere)",
            "options": [
              "accendiamo",
              "accendete",
              "accendono"
            ],
            "answer": 0
          },
          {
            "q": "Ragazzi, ___ in centro o in periferia? (vivere)",
            "options": [
              "vivete",
              "viviamo",
              "vivono"
            ],
            "answer": 0
          },
          {
            "q": "Quando entrano in classe, gli studenti ___ la borsa accanto alla sedia. (mettere)",
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
        "instr": "Individua e clicca la parola sbagliata o la parola di troppo.",
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
            "q": "In aula Luca ___ la finestra ogni mattina. (aprire)",
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
            "q": "Quando siete in vacanza, ___ fino a tardi la mattina? (dormire)",
            "options": [
              "dormite",
              "dormisce",
              "dormiamo"
            ],
            "answer": 0
          },
          {
            "q": "Al bar Marco e Anna ___ una bibita fresca. (preferire)",
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
        "instr": "Individua e clicca la parola sbagliata o la parola di troppo.",
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
        "instr": "Scegli tra piace e piacciono.",
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
        "instr": "Individua e clicca la parola sbagliata o la parola di troppo.",
        "items": [
          {
            "q": "Ho un pesce rosso e mi piacciono molto.",
            "wrong": "piacciono",
            "fix": "piace"
          },
          {
            "q": "In fattoria ci sono le galline. Ti piace molto?",
            "wrong": "piace",
            "fix": "piacciono"
          },
          {
            "q": "In fattoria c'è un maiale e mi piacciono molto.",
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
            "q": "Ho una tartaruga. Ti piacciono molto?",
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
            "q": "Mi piace il gatto. → Mi ___ i gatti.",
            "options": [
              "piacciono",
              "piace",
              "piaci"
            ],
            "answer": 0
          },
          {
            "q": "Ti piacciono gli uccelli? → Ti ___ l'uccello?",
            "options": [
              "piace",
              "piacciono",
              "piaci"
            ],
            "answer": 0
          },
          {
            "q": "Non mi piace la pecora. → Non mi ___ le pecore.",
            "options": [
              "piacciono",
              "piace",
              "piaci"
            ],
            "answer": 0
          },
          {
            "q": "Mi piacciono le mucche. → Mi ___ la mucca.",
            "options": [
              "piace",
              "piacciono",
              "piaci"
            ],
            "answer": 0
          },
          {
            "q": "Ti piace il coniglio? → Ti ___ i conigli?",
            "options": [
              "piacciono",
              "piace",
              "piaci"
            ],
            "answer": 0
          },
          {
            "q": "Non mi piacciono i cavalli. → Non mi ___ il cavallo.",
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
            "q": "Quest'estate, ragazzi, ___ in Italia con alcuni amici.",
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
        "instr": "Individua e clicca la parola sbagliata o la parola di troppo.",
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
            "q": "Domenica preparo la pasta e Marco e Anna viene a cena.",
            "wrong": "viene",
            "fix": "vengono"
          },
          {
            "q": "Domani io e Sara vanno in montagna.",
            "wrong": "vanno",
            "fix": "andiamo"
          },
          {
            "q": "Luca, veniamo al cinema con me stasera?",
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
        "instr": "Individua e clicca la parola sbagliata o la parola di troppo.",
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
            "q": "Vado a scuola con piedi perché è vicina.",
            "wrong": "con",
            "fix": "a"
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
            "q": "Da tre anni vivo ___ Lisbona per lavoro.",
            "options": [
              "a",
              "in",
              "da"
            ],
            "answer": 0
          },
          {
            "q": "Da tre anni vivo ___ Portogallo per lavoro.",
            "options": [
              "in",
              "a",
              "da"
            ],
            "answer": 0
          },
          {
            "q": "Da gennaio lavoro ___ Italia in un albergo.",
            "options": [
              "in",
              "a",
              "da"
            ],
            "answer": 0
          },
          {
            "q": "Da gennaio lavoro ___ Firenze in un albergo.",
            "options": [
              "a",
              "in",
              "da"
            ],
            "answer": 0
          },
          {
            "q": "Abito ___ Spagna con la famiglia.",
            "options": [
              "in",
              "a",
              "da"
            ],
            "answer": 0
          },
          {
            "q": "Da settembre studio ___ Bologna per un corso.",
            "options": [
              "a",
              "in",
              "da"
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
        "instr": "Individua e clicca la parola sbagliata o la parola di troppo.",
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
            "q": "Marta lavora lontano e ___ partire presto. (dovere)",
            "options": [
              "deve",
              "devi",
              "devo"
            ],
            "answer": 0
          },
          {
            "q": "Il cameriere porta il conto e noi ___ pagare. (dovere)",
            "options": [
              "dobbiamo",
              "dovete",
              "devono"
            ],
            "answer": 0
          },
          {
            "q": "Ragazzi, il dottore non c'è ancora e ___ aspettare qui. (dovere)",
            "options": [
              "dovete",
              "dobbiamo",
              "devono"
            ],
            "answer": 0
          },
          {
            "q": "Marco e Sara hanno molto lavoro e ___ finire tutto oggi. (dovere)",
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
        "instr": "Individua e clicca la parola sbagliata o la parola di troppo.",
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
            "q": "Io devo uscire. → Noi ___",
            "options": [
              "dobbiamo uscire.",
              "dovete uscire.",
              "devono uscire."
            ],
            "answer": 0
          },
          {
            "q": "Tu devi studiare. → Voi ___",
            "options": [
              "dovete studiare.",
              "dobbiamo studiare.",
              "devono studiare."
            ],
            "answer": 0
          },
          {
            "q": "Lui deve lavorare. → Loro ___",
            "options": [
              "devono lavorare.",
              "dobbiamo lavorare.",
              "dovete lavorare."
            ],
            "answer": 0
          },
          {
            "q": "Noi dobbiamo partire. → Io ___",
            "options": [
              "devo partire.",
              "deve partire.",
              "devi partire."
            ],
            "answer": 0
          },
          {
            "q": "Voi dovete pagare. → Tu ___",
            "options": [
              "devi pagare.",
              "deve pagare.",
              "devo pagare."
            ],
            "answer": 0
          },
          {
            "q": "Loro devono aspettare. → Lei ___",
            "options": [
              "deve aspettare.",
              "devo aspettare.",
              "devi aspettare."
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
            "q": "Prima di uscire, dove sono ___ occhiali? (di te)",
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
        "instr": "Individua e clicca la parola sbagliata o la parola di troppo.",
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
            "q": "Prima di uscire Marco cerca i suo occhiali neri.",
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
        "instr": "Volgi al plurale la cosa posseduta.",
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
            "q": "Guardo l'orologio perché ___ mezzogiorno.",
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
            "q": "Adesso ___ nove meno un quarto e la lezione comincia alle nove.",
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
        "instr": "Individua e clicca la parola sbagliata o la parola di troppo.",
        "items": [
          {
            "q": "Guardo l'orologio e vedo che è le cinque.",
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
            "q": "La lezione comincia presto e manca un quarto alle le nove.",
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
            "q": "Per il viaggio il treno parte ___ due.",
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
            "q": "Il mio turno è lungo e comincio ___ per finire alle nove.",
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
        "instr": "Riscrivi il piano futuro usando il presente: scegli la frase corretta.",
        "items": [
          {
            "q": "Oggi parto per Roma. → Domani ___",
            "options": [
              "parto per Roma.",
              "parte per Roma.",
              "partiamo per Roma."
            ],
            "answer": 0
          },
          {
            "q": "Oggi compriamo la macchina. → A giugno ___",
            "options": [
              "compriamo la macchina.",
              "comprano la macchina.",
              "compra la macchina."
            ],
            "answer": 0
          },
          {
            "q": "Oggi partono per Milano. → In primavera ___",
            "options": [
              "partono per Milano.",
              "parte per Milano.",
              "partiamo per Milano."
            ],
            "answer": 0
          },
          {
            "q": "Oggi esci? → Stasera ___",
            "options": [
              "esci?",
              "esce?",
              "uscite?"
            ],
            "answer": 0
          },
          {
            "q": "Oggi torna a casa. → A settembre ___",
            "options": [
              "torna a casa.",
              "tornano a casa.",
              "torno a casa."
            ],
            "answer": 0
          },
          {
            "q": "Oggi studiate? → Domani ___",
            "options": [
              "studiate?",
              "studiamo?",
              "studiano?"
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
            "q": "Bevo ___ il caffè.",
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
        "type": "Correzione",
        "fmt": "errore",
        "instr": "Individua e clicca la parola sbagliata o la parola di troppo.",
        "items": [
          {
            "q": "Il mio amico Luca va raramente in palestra. Va tutti i giorni.",
            "wrong": "raramente",
            "fix": "sempre"
          },
          {
            "q": "Marta telefona sempre a Marco. Telefona due volte all'anno.",
            "wrong": "sempre",
            "fix": "raramente"
          },
          {
            "q": "D’estate Marco viaggia spesso. Parte una volta ogni quattro anni.",
            "wrong": "spesso",
            "fix": "raramente"
          },
          {
            "q": "Anna fa raramente colazione. Mangia qualcosa ogni mattina.",
            "wrong": "raramente",
            "fix": "sempre"
          },
          {
            "q": "Paolo gioca a tennis raramente. Ha una partita due volte a settimana.",
            "wrong": "raramente",
            "fix": "spesso"
          },
          {
            "q": "Sara prende spesso il treno. Va in stazione una volta ogni tre anni.",
            "wrong": "spesso",
            "fix": "raramente"
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
            "q": "Vado al cinema nel fine settimana. (spesso)",
            "options": [
              "Vado spesso al cinema nel fine settimana.",
              "Vado al spesso cinema nel fine settimana.",
              "Spesso al cinema vado nel fine settimana."
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
            "q": "Lui dorme fino a tardi. (quasi sempre)",
            "options": [
              "Lui dorme quasi sempre fino a tardi.",
              "Lui dorme fino quasi sempre a tardi.",
              "Lui quasi dorme sempre fino a tardi."
            ],
            "answer": 0
          },
          {
            "q": "Usciamo la sera. (raramente)",
            "options": [
              "Usciamo raramente la sera.",
              "Usciamo la raramente sera.",
              "Raramente la sera usciamo noi."
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
            "q": "Signor Rossi, dove ___ a Roma?",
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
            "q": "Signor Bianchi, ___ inglese con i clienti stranieri? (parlare)",
            "options": [
              "parla",
              "parli",
              "parlate"
            ],
            "answer": 0
          },
          {
            "q": "Signora, ___ a Roma da molto tempo? (vivere)",
            "options": [
              "vive",
              "vivi",
              "vivete"
            ],
            "answer": 0
          },
          {
            "q": "Ingegnere, ___ il treno ogni mattina? (prendere)",
            "options": [
              "prende",
              "prendi",
              "prendete"
            ],
            "answer": 0
          },
          {
            "q": "Dottoressa, ___ bene lo spagnolo? (capire)",
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
        "instr": "Individua e clicca la parola sbagliata o la parola di troppo.",
        "items": [
          {
            "q": "Buonasera, signore, dove lavori?",
            "wrong": "lavori",
            "fix": "lavora"
          },
          {
            "q": "Signora, leggi questo libro?",
            "wrong": "leggi",
            "fix": "legge"
          },
          {
            "q": "Professore, insegni anche il sabato?",
            "wrong": "insegni",
            "fix": "insegna"
          },
          {
            "q": "Dottoressa, prendi il caffè senza zucchero?",
            "wrong": "prendi",
            "fix": "prende"
          },
          {
            "q": "Signor Rossi, scrivi molte mail?",
            "wrong": "scrivi",
            "fix": "scrive"
          },
          {
            "q": "Ingegnere, parli inglese?",
            "wrong": "parli",
            "fix": "parla"
          }
        ]
      },
      {
        "type": "Trasformazione",
        "fmt": "buco",
        "instr": "Passa dal «tu» al «Lei»: scegli la frase corretta.",
        "items": [
          {
            "q": "Lavori qui?",
            "options": [
              "Lavora qui?",
              "Lavori qui Lei?",
              "Lavorate qui?"
            ],
            "answer": 0
          },
          {
            "q": "Leggi molto?",
            "options": [
              "Legge molto?",
              "Leggi molto Lei?",
              "Leggete molto?"
            ],
            "answer": 0
          },
          {
            "q": "Vivi a Roma?",
            "options": [
              "Vive a Roma?",
              "Vivi a Roma Lei?",
              "Vivete a Roma?"
            ],
            "answer": 0
          },
          {
            "q": "Prendi il treno?",
            "options": [
              "Prende il treno?",
              "Prendi il treno Lei?",
              "Prendete il treno?"
            ],
            "answer": 0
          },
          {
            "q": "Scrivi a Marco?",
            "options": [
              "Scrive a Marco?",
              "Scrivi a Marco Lei?",
              "Scrivete a Marco?"
            ],
            "answer": 0
          },
          {
            "q": "Parli italiano?",
            "options": [
              "Parla italiano?",
              "Parli italiano Lei?",
              "Parlate italiano?"
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
        "instr": "Individua e clicca la parola sbagliata o la parola di troppo.",
        "items": [
          {
            "q": "Stasera vado a il cinema per vedere un film nuovo.",
            "wrong": "a",
            "fix": "al"
          },
          {
            "q": "Dopo la visita esco dal studio.",
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
            "q": "Marco e Anna ___ venire alla festa? (potere)",
            "options": [
              "possono",
              "può",
              "possiamo"
            ],
            "answer": 0
          },
          {
            "q": "Vivo a Roma da poco e ___ imparare l'italiano. (volere)",
            "options": [
              "voglio",
              "vuole",
              "vogliamo"
            ],
            "answer": 0
          },
          {
            "q": "Luca, ___ portare questa scatola? (potere)",
            "options": [
              "puoi",
              "può",
              "posso"
            ],
            "answer": 0
          },
          {
            "q": "Io e Marco ___ finire il progetto entro domani. (dovere)",
            "options": [
              "dobbiamo",
              "dovete",
              "devono"
            ],
            "answer": 0
          },
          {
            "q": "Luca ___ parlare con te perché ha una domanda importante. (volere)",
            "options": [
              "vuole",
              "voglio",
              "vogliono"
            ],
            "answer": 0
          },
          {
            "q": "Ragazzi, ___ prenotare prima perché il ristorante è sempre pieno. (dovere)",
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
        "instr": "Individua e clicca la parola sbagliata o la parola di troppo.",
        "items": [
          {
            "q": "Domani mattina vogliamo di partire subito.",
            "wrong": "di",
            "fix": "(togliere)"
          },
          {
            "q": "Oggi Marta puoi venire al cinema con noi.",
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
            "q": "Marco e Anna può arrivare tardi perché c'è traffico.",
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
            "q": "Ho fame e ___ una fetta di torta.",
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
            "q": "Dopo un anno di lavoro, quest'estate ___ andare al mare.",
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
            "q": "Stasera Marco ___ a cena da noi. (venire)",
            "options": [
              "viene",
              "vengo",
              "vieni"
            ],
            "answer": 0
          },
          {
            "q": "Oggi io e Sara ___ a casa perché aspettiamo un pacco. (stare)",
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
            "q": "Nel fine settimana Marco e Anna ___ spesso sport. (fare)",
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
        "instr": "Individua e clicca la parola sbagliata o la parola di troppo.",
        "items": [
          {
            "q": "Dopo cena io fa una passeggiata nel quartiere.",
            "wrong": "fa",
            "fix": "faccio"
          },
          {
            "q": "Paolo, va al lavoro a piedi ogni mattina?",
            "wrong": "va",
            "fix": "vai"
          },
          {
            "q": "Domani i miei amici viene a cena da me.",
            "wrong": "viene",
            "fix": "vengono"
          },
          {
            "q": "Questa settimana io e Sara sta a casa.",
            "wrong": "sta",
            "fix": "stiamo"
          },
          {
            "q": "Se un amico ha un dubbio, Marco do un consiglio.",
            "wrong": "do",
            "fix": "dà"
          },
          {
            "q": "Ragazzi, il sabato fanno la spesa al mercato.",
            "wrong": "fanno",
            "fix": "fate"
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
            "q": "Ieri sera ho ___ una pizza al ristorante con gli amici.",
            "options": [
              "mangiato",
              "mangiata",
              "mangiare"
            ],
            "answer": 0
          },
          {
            "q": "Prima di uscire abbiamo ___ la porta a chiave. (chiudere)",
            "options": [
              "chiuso",
              "chiudato",
              "chiudito"
            ],
            "answer": 0
          },
          {
            "q": "Hai ___ il libro per la lezione di domani? (leggere)",
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
            "q": "Sono in ritardo perché ho ___ una mail al capo. (scrivere)",
            "options": [
              "scritto",
              "scrivuto",
              "scriveto"
            ],
            "answer": 0
          },
          {
            "q": "È molto stanco perché ha ___ tutto il giorno. (lavorare)",
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
        "instr": "Individua e clicca la parola sbagliata o la parola di troppo.",
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
            "q": "Hai prenduto il treno delle otto?",
            "wrong": "prenduto",
            "fix": "preso"
          },
          {
            "q": "Dopo anni di risparmi Marco e Anna sono comprato una casa.",
            "wrong": "sono",
            "fix": "hanno"
          },
          {
            "q": "Ragazzi, ieri sera al ristorante siete bevuto un bicchiere di vino?",
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
            "q": "Oggi telefono a Sara. → Ieri ___",
            "options": [
              "ho telefonato a Sara.",
              "hai telefonato a Sara.",
              "ha telefonato a Sara."
            ],
            "answer": 0
          },
          {
            "q": "Stamattina beviamo una spremuta. → Ieri mattina ___",
            "options": [
              "abbiamo bevuto una spremuta.",
              "avete bevuto una spremuta.",
              "hanno bevuto una spremuta."
            ],
            "answer": 0
          },
          {
            "q": "Adesso finisci il lavoro. → Un'ora fa ___",
            "options": [
              "hai finito il lavoro.",
              "ha finito il lavoro.",
              "ho finito il lavoro."
            ],
            "answer": 0
          },
          {
            "q": "Oggi guardano la partita. → Domenica scorsa ___",
            "options": [
              "hanno guardato la partita.",
              "abbiamo guardato la partita.",
              "avete guardato la partita."
            ],
            "answer": 0
          },
          {
            "q": "Ora prendiamo l'autobus. → Poco fa ___",
            "options": [
              "abbiamo preso l'autobus.",
              "avete preso l'autobus.",
              "hanno preso l'autobus."
            ],
            "answer": 0
          },
          {
            "q": "Oggi ricevo un pacco. → Due giorni fa ___",
            "options": [
              "ho ricevuto un pacco.",
              "hai ricevuto un pacco.",
              "ha ricevuto un pacco."
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
            "q": "Per il weekend Maria è ___ a Roma con due amiche. (andare)",
            "options": [
              "andata",
              "andato",
              "andate"
            ],
            "answer": 0
          },
          {
            "q": "Ieri, dopo il concerto, i ragazzi sono ___ tardi. (arrivare)",
            "options": [
              "arrivati",
              "arrivate",
              "arrivato"
            ],
            "answer": 0
          },
          {
            "q": "Le mie amiche sono ___ ieri per andare in vacanza. (partire)",
            "options": [
              "partite",
              "partiti",
              "partita"
            ],
            "answer": 0
          },
          {
            "q": "Gli altri sono usciti. Marco è ___ in ufficio. (restare)",
            "options": [
              "restato",
              "restata",
              "restati"
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
            "q": "Ragazzi, siete ___ alla riunione ieri sera? (venire)",
            "options": [
              "venuti",
              "venute",
              "venuto"
            ],
            "answer": 0
          }
        ]
      },
      {
        "type": "Correzione",
        "fmt": "errore",
        "instr": "Individua e clicca la parola sbagliata o la parola di troppo.",
        "items": [
          {
            "q": "Maria ha andata al mercato per comprare la frutta.",
            "wrong": "ha",
            "fix": "è"
          },
          {
            "q": "Per il torneo i ragazzi sono arrivate ieri.",
            "wrong": "arrivate",
            "fix": "arrivati"
          },
          {
            "q": "Dopo il concerto Anna è tornato tardi.",
            "wrong": "tornato",
            "fix": "tornata"
          },
          {
            "q": "Per evitare il traffico abbiamo partiti alle sei.",
            "wrong": "abbiamo",
            "fix": "siamo"
          },
          {
            "q": "Ieri Marco è rimasta in ufficio fino a tardi.",
            "wrong": "rimasta",
            "fix": "rimasto"
          },
          {
            "q": "Ieri Marco e Luca hanno venuti alla festa con alcuni amici.",
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
            "q": "Paolo è andato via. → Le ragazze ___",
            "options": [
              "sono andate via.",
              "sono andati via.",
              "sono andata via."
            ],
            "answer": 0
          },
          {
            "q": "Anna è partita. → I miei fratelli ___",
            "options": [
              "sono partiti.",
              "sono partite.",
              "sono partita."
            ],
            "answer": 0
          },
          {
            "q": "I turisti sono arrivati. → La guida ___",
            "options": [
              "è arrivata.",
              "è arrivati.",
              "sono arrivata."
            ],
            "answer": 0
          },
          {
            "q": "Luca è uscito presto. → Noi (ragazze) ___",
            "options": [
              "siamo uscite.",
              "siamo usciti.",
              "siamo uscita."
            ],
            "answer": 0
          },
          {
            "q": "I colleghi sono venuti. → Mia sorella ___",
            "options": [
              "è venuta.",
              "è venuti.",
              "sono venuta."
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
            "q": "Ogni mattina, quando suona la sveglia, ___ alle sette. (io – alzarsi)",
            "options": [
              "mi alzo",
              "si alzo",
              "mi alza"
            ],
            "answer": 0
          },
          {
            "q": "Lavori alle otto e tu ___ presto ogni mattina? (svegliarsi)",
            "options": [
              "ti svegli",
              "si svegli",
              "ti sveglia"
            ],
            "answer": 0
          },
          {
            "q": "Prima di uscire per la festa lei ___ i capelli. (lavarsi)",
            "options": [
              "si lava",
              "ti lava",
              "si lavo"
            ],
            "answer": 0
          },
          {
            "q": "Siamo in ritardo e ___ in fretta. (vestirsi)",
            "options": [
              "ci vestiamo",
              "si vestiamo",
              "ci veste"
            ],
            "answer": 0
          },
          {
            "q": "Prima della festa, tu e Luca ___ davanti allo specchio. (pettinarsi)",
            "options": [
              "vi pettinate",
              "si pettinate",
              "vi pettina"
            ],
            "answer": 0
          },
          {
            "q": "Dopo il film i bambini ___ sul divano alle undici. (addormentarsi)",
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
        "instr": "Individua e clicca la parola sbagliata o la parola di troppo.",
        "items": [
          {
            "q": "Per andare al lavoro io si alzo alle sei.",
            "wrong": "si",
            "fix": "mi"
          },
          {
            "q": "La domenica, quando non lavori, tu si svegli tardi.",
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
            "q": "Io mi alzo presto. → Noi ___",
            "options": [
              "ci alziamo presto.",
              "si alziamo presto.",
              "ci alzano presto."
            ],
            "answer": 0
          },
          {
            "q": "Anna si veste in fretta. → Tu ___",
            "options": [
              "ti vesti in fretta.",
              "si vesti in fretta.",
              "ti veste in fretta."
            ],
            "answer": 0
          },
          {
            "q": "I bambini si lavano le mani. → Io ___",
            "options": [
              "mi lavo le mani.",
              "si lavo le mani.",
              "mi lava le mani."
            ],
            "answer": 0
          },
          {
            "q": "Noi ci divertiamo molto. → Loro ___",
            "options": [
              "si divertono molto.",
              "ci divertono molto.",
              "si divertiamo molto."
            ],
            "answer": 0
          },
          {
            "q": "Tu ti riposi un’ora. → Voi ___",
            "options": [
              "vi riposate un’ora.",
              "si riposate un’ora.",
              "vi riposa un’ora."
            ],
            "answer": 0
          },
          {
            "q": "Voi vi scusate. → Lei ___",
            "options": [
              "si scusa.",
              "vi scusa.",
              "si scusano."
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
            "q": "___ bene la salsa nella pentola.",
            "options": [
              "Mescola",
              "Mescoli",
              "Mescolate"
            ],
            "answer": 0
          },
          {
            "q": "Quando la minestra è quasi pronta, ___ un po’ di sale. (aggiungere)",
            "options": [
              "aggiungi",
              "aggiunge",
              "aggiungete"
            ],
            "answer": 0
          },
          {
            "q": "Quando l'acqua bolle, ___ la pasta nella pentola. (mettere)",
            "options": [
              "metti",
              "mette",
              "mettete"
            ],
            "answer": 0
          },
          {
            "q": "Quando il forno è caldo, ___ la torta. (infornare)",
            "options": [
              "inforna",
              "inforni",
              "infornate"
            ],
            "answer": 0
          },
          {
            "q": "Prima di cucinare, ___ le verdure. (lavare)",
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
        "instr": "Individua e clicca la parola sbagliata o la parola di troppo.",
        "items": [
          {
            "q": "Marco, prima di tutto prenda una pentola grande.",
            "wrong": "prenda",
            "fix": "prendi"
          },
          {
            "q": "Anna, accenda il fuoco sotto la padella.",
            "wrong": "accenda",
            "fix": "accendi"
          },
          {
            "q": "In cucina, Luca, apra la finestra.",
            "wrong": "apra",
            "fix": "apri"
          },
          {
            "q": "Sara, serva la pasta ben calda.",
            "wrong": "serva",
            "fix": "servi"
          },
          {
            "q": "Adesso, Giulia, finisca di cuocere le uova.",
            "wrong": "finisca",
            "fix": "finisci"
          },
          {
            "q": "Paolo, faccia bollire l'acqua con il sale.",
            "wrong": "faccia",
            "fix": "fai"
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
            "q": "Signora, ___ questa medicina dopo pranzo. (prendere)",
            "options": [
              "prenda",
              "prendi",
              "prendete"
            ],
            "answer": 0
          },
          {
            "q": "Signore, con questo caldo ___ molta acqua. (bere)",
            "options": [
              "beva",
              "bevi",
              "bevete"
            ],
            "answer": 0
          },
          {
            "q": "Signora, mentre preparo i documenti ___ qui un momento. (sedersi)",
            "options": [
              "si sieda",
              "si siede",
              "si siedono"
            ],
            "answer": 0
          },
          {
            "q": "Signore, per il controllo ___ bene la bocca. (aprire)",
            "options": [
              "apra",
              "apri",
              "aprite"
            ],
            "answer": 0
          },
          {
            "q": "Signora, durante l’esame ___ lentamente. (respirare)",
            "options": [
              "respiri",
              "respira",
              "respirate"
            ],
            "answer": 0
          },
          {
            "q": "Signore, ha la febbre, quindi ___ a letto oggi. (restare)",
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
            "q": "Marco, non ___ troppi dolci! (mangiare)",
            "options": [
              "mangiare",
              "mangia",
              "mangi"
            ],
            "answer": 0
          },
          {
            "q": "Luca, non ___ caffè stasera! (bere)",
            "options": [
              "bere",
              "bevi",
              "beva"
            ],
            "answer": 0
          },
          {
            "q": "Paolo, non ___ con la febbre! (uscire)",
            "options": [
              "uscire",
              "esci",
              "esca"
            ],
            "answer": 0
          },
          {
            "q": "Giulia, non ___ questa medicina prima di mangiare! (prendere)",
            "options": [
              "prendere",
              "prendi",
              "prenda"
            ],
            "answer": 0
          },
          {
            "q": "Anna, non ___ fino a tardi! (lavorare)",
            "options": [
              "lavorare",
              "lavora",
              "lavori"
            ],
            "answer": 0
          },
          {
            "q": "Luca, non ___ qui! (fumare)",
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
        "instr": "Individua e clicca la parola sbagliata o la parola di troppo.",
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
        "instr": "Individua e clicca la parola sbagliata o la parola di troppo.",
        "items": [
          {
            "q": "In centro questo casa è grande.",
            "wrong": "questo",
            "fix": "questa"
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
            "q": "Vicino alla porta quei zaini sono pesanti.",
            "wrong": "quei",
            "fix": "quegli"
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
            "q": "Prima dell’esame studiare è più utile ___ dormire.",
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
        "instr": "Individua e clicca la parola sbagliata o la parola di troppo.",
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
            "q": "In ufficio Anna è più giovane come me.",
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
            "q": "8 sedie — 4 tavoli (più)",
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
            "q": "Questo corso / quel corso (meno utile)",
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
      "A2 L13",
      "B1 L12"
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
        "instr": "Individua e clicca la parola sbagliata o la parola di troppo.",
        "items": [
          {
            "q": "Il vino la compro io; i dolci li porta Marta.",
            "wrong": "la",
            "fix": "lo"
          },
          {
            "q": "Quando vedo Anna, lo saluto subito.",
            "wrong": "lo",
            "fix": "la"
          },
          {
            "q": "I quaderni le porto io; i libri li lasci qui.",
            "wrong": "le",
            "fix": "li"
          },
          {
            "q": "Le lettere le spedisco oggi; il pacco li mando domani.",
            "wrong": "li",
            "fix": "lo"
          },
          {
            "q": "I colleghi le avviso subito; la segretaria la chiamo dopo.",
            "wrong": "le",
            "fix": "li"
          },
          {
            "q": "Le mie cugine le vedo raramente; mio zio li chiamo spesso.",
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
            "q": "Il lavoro è quasi pronto e ti ___ un'ora per finirlo?",
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
        "instr": "Individua e clicca la parola sbagliata o la parola di troppo.",
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
            "q": "Da quando Anna vive lontano da casa, le mancano la sua città.",
            "wrong": "mancano",
            "fix": "manca"
          },
          {
            "q": "Per pagare due caffè al bar ci basta cinque euro.",
            "wrong": "basta",
            "fix": "bastano"
          },
          {
            "q": "Marco vive a Milano e gli manca i vecchi colleghi.",
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
            "q": "Sono stanco ___ vado a dormire perché è mezzanotte.",
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
            "q": "Non voglio la pizza, ___ voglio la pasta.",
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
            "q": "Domani il museo è chiuso, ___ andiamo sabato.",
            "options": [
              "quindi",
              "però",
              "anche"
            ],
            "answer": 0
          },
          {
            "q": "Marco non viene al cinema, ___ resta a casa a studiare.",
            "options": [
              "invece",
              "anche",
              "quindi"
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
            "q": "Hai ancora la febbre e ___ chiamare il medico.",
            "options": [
              "devi",
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
        "instr": "Individua e clicca la parola sbagliata o la parola di troppo.",
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
            "q": "Per questa richiesta Bisogni rispondere entro venerdì mattina.",
            "wrong": "Bisogni",
            "fix": "Bisogna"
          },
          {
            "q": "Bisogniamo ripassare tutta la lezione prima del test.",
            "wrong": "Bisogniamo",
            "fix": "Bisogna"
          },
          {
            "q": "Per la visita di domani bisogna arrivi in orario.",
            "wrong": "arrivi",
            "fix": "arrivare"
          },
          {
            "q": "In segreteria bisogna di consegnare il modulo.",
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
            "q": "Non devi correre in ospedale.",
            "options": [
              "Non bisogna correre in ospedale.",
              "Non bisogni correre in ospedale.",
              "Non bisognano correre in ospedale."
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
        "instr": "Scegli la forma corretta per chiedere un favore.",
        "items": [
          {
            "q": "Signora, ___ chiudere la finestra?",
            "options": [
              "Le dispiace",
              "Le dispiacciono",
              "Le dispiaci"
            ],
            "answer": 0
          },
          {
            "q": "Marco, ___ prestarmi la penna un attimo?",
            "options": [
              "ti dispiace",
              "ti dispiaci",
              "ti dispiacciono"
            ],
            "answer": 0
          },
          {
            "q": "Le dispiace ___ un attimo qui fuori? (aspettare)",
            "options": [
              "aspettare",
              "aspetta",
              "aspetti"
            ],
            "answer": 0
          },
          {
            "q": "Anna, ti dispiace ___ la porta? (chiudere)",
            "options": [
              "chiudere",
              "chiudi",
              "chiuda"
            ],
            "answer": 0
          },
          {
            "q": "Signore, Le dispiace ___ più lentamente? (parlare)",
            "options": [
              "parlare",
              "parla",
              "parli"
            ],
            "answer": 0
          },
          {
            "q": "Luca, ti dispiace ___ con me in banca? (venire)",
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
        "instr": "Individua e clicca la parola sbagliata o la parola di troppo.",
        "items": [
          {
            "q": "Io vorrebbe un cappuccino, per favore.",
            "wrong": "vorrebbe",
            "fix": "vorrei"
          },
          {
            "q": "Al telefono io potrebbe parlare con il direttore?",
            "wrong": "potrebbe",
            "fix": "potrei"
          },
          {
            "q": "Il medico dice che io dovrebbe mangiare meno sale.",
            "wrong": "dovrebbe",
            "fix": "dovrei"
          },
          {
            "q": "In ufficio vorrei di parlare con il responsabile.",
            "wrong": "di",
            "fix": "(togliere)"
          },
          {
            "q": "In negozio potrei a provare la giacca?",
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
            "q": "Sei in un ufficio e chiedi: «Posso usare il bagno?» →",
            "options": [
              "Potrei usare il bagno?",
              "Potrei uso il bagno?",
              "Potrei di usare il bagno?"
            ],
            "answer": 0
          },
          {
            "q": "Hai un problema e dici: «Devo parlare con un impiegato.» →",
            "options": [
              "Dovrei parlare con un impiegato.",
              "Dovrei parlo con un impiegato.",
              "Dovrei di parlare con un impiegato."
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
            "q": "Hai mal di testa e dici: «Devo andare in farmacia.» →",
            "options": [
              "Dovrei andare in farmacia.",
              "Dovrei vado in farmacia.",
              "Dovrei di andare in farmacia."
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
            "q": "___ nuotare bene perché ha fatto un corso da piccola. (lei)",
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
            "q": "___ guidare la moto o non hai mai imparato? (tu)",
            "options": [
              "Sai",
              "Puoi",
              "Sa"
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
            "q": "___ suonare il pianoforte perché hanno studiato pianoforte per dieci anni. (loro)",
            "options": [
              "Sanno",
              "Possono",
              "Stanno"
            ],
            "answer": 0
          },
          {
            "q": "La porta è chiusa e lei non ___ entrare. (potere)",
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
            "q": "Ha imparato a sciare. (capacità)",
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
            "q": "Ha studiato il tedesco per anni. (capacità)",
            "options": [
              "Sa parlare tedesco.",
              "Può parlare tedesco.",
              "Vuole parlare tedesco."
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
            "q": "Ha imparato a guidare. (capacità)",
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
            "q": "Per la cena ho comprato ___ verdura fresca.",
            "options": [
              "della",
              "delle",
              "dei"
            ],
            "answer": 0
          },
          {
            "q": "Ho preso ___ pomodori maturi al mercato.",
            "options": [
              "dei",
              "qualche",
              "alcuno"
            ],
            "answer": 0
          },
          {
            "q": "A colazione bevo una tazza ___ latte fresco.",
            "options": [
              "di",
              "del",
              "dello"
            ],
            "answer": 0
          },
          {
            "q": "Per merenda prendo ___ yogurt naturale.",
            "options": [
              "dello",
              "del",
              "della"
            ],
            "answer": 0
          },
          {
            "q": "Al banco ci sono ___ persone in attesa.",
            "options": [
              "alcune",
              "qualche",
              "della"
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
        "instr": "Individua e clicca la parola sbagliata o la parola di troppo.",
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
            "q": "Mi dia mezzo chilo delle olive.",
            "wrong": "delle",
            "fix": "di"
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
            "q": "Buongiorno, vorrei del prosciutto. → (due etti)",
            "options": [
              "Buongiorno, vorrei due etti di prosciutto.",
              "Buongiorno, vorrei due etti del prosciutto.",
              "Buongiorno, vorrei due etti prosciutto."
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
        "instr": "Completa l'istruzione con l'infinito del verbo indicato.",
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
          }
        ]
      },
      {
        "type": "Correzione",
        "fmt": "errore",
        "instr": "Individua e clicca la parola sbagliata o la parola di troppo.",
        "items": [
          {
            "q": "Per il sugo, tritando l’aglio con un coltello affilato e scaldare l’olio.",
            "wrong": "tritando",
            "fix": "tritare"
          },
          {
            "q": "Scaldare l’olio nella padella e soffriggendo l’aglio a fuoco medio.",
            "wrong": "soffriggendo",
            "fix": "soffriggere"
          },
          {
            "q": "Quando l’acqua bolle, buttare gli spaghetti e mescolato subito con cura.",
            "wrong": "mescolato",
            "fix": "mescolare"
          },
          {
            "q": "Riempito una pentola d’acqua e portarla a ebollizione.",
            "wrong": "Riempito",
            "fix": "Riempire"
          },
          {
            "q": "Scolare la pasta e versandola nella padella con il sugo caldo.",
            "wrong": "versandola",
            "fix": "versarla"
          },
          {
            "q": "Spegnere il fuoco e servito subito con il parmigiano.",
            "wrong": "servito",
            "fix": "servire"
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
              "Premire il tasto verde per accendere."
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
              "Chiudire la porta prima di uscire."
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
              "Compilire il modulo con la penna nera.",
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
        "instr": "Individua e clicca la parola sbagliata o la parola di troppo.",
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
            "q": "Apro la finestra della cucina. →",
            "options": [
              "Ho aperto la finestra della cucina.",
              "Ho aprito la finestra della cucina.",
              "Ho aprire la finestra della cucina."
            ],
            "answer": 0
          },
          {
            "q": "Prendi il treno delle sette. →",
            "options": [
              "Hai preso il treno delle sette.",
              "Hai prenduto il treno delle sette.",
              "Sei preso il treno delle sette."
            ],
            "answer": 0
          },
          {
            "q": "Metto le chiavi sul tavolo. →",
            "options": [
              "Ho messo le chiavi sul tavolo.",
              "Sono messo le chiavi sul tavolo.",
              "Messo le chiavi sul tavolo."
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
        "instr": "Individua e clicca la parola sbagliata o la parola di troppo.",
        "items": [
          {
            "q": "Noi essaremo in stazione alle sei e aspetteremo sul binario.",
            "wrong": "essaremo",
            "fix": "saremo"
          },
          {
            "q": "Domani spiegherò tutto al direttore e poi parlarò con te.",
            "wrong": "parlarò",
            "fix": "parlerò"
          },
          {
            "q": "Se vieni con noi, ti daramo un passaggio e torneremo insieme.",
            "wrong": "daramo",
            "fix": "daremo"
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
            "q": "Parto domani con il primo treno. →",
            "options": [
              "Partirò domani con il primo treno.",
              "Parterò domani con il primo treno.",
              "Partarò domani con il primo treno."
            ],
            "answer": 0
          },
          {
            "q": "Vai in vacanza ad agosto? →",
            "options": [
              "Andrai in vacanza ad agosto?",
              "Anderai in vacanza ad agosto?",
              "Andrerai in vacanza ad agosto?"
            ],
            "answer": 0
          },
          {
            "q": "Vengono alle otto per la riunione. →",
            "options": [
              "Verranno alle otto per la riunione.",
              "Veniranno alle otto per la riunione.",
              "Venaranno alle otto per la riunione."
            ],
            "answer": 0
          },
          {
            "q": "Faccio la spesa prima di cena. →",
            "options": [
              "Farò la spesa prima di cena.",
              "Facerò la spesa prima di cena.",
              "Farerò la spesa prima di cena."
            ],
            "answer": 0
          },
          {
            "q": "Hai tempo domani pomeriggio? →",
            "options": [
              "Avrai tempo domani pomeriggio?",
              "Averai tempo domani pomeriggio?",
              "Avarai tempo domani pomeriggio?"
            ],
            "answer": 0
          },
          {
            "q": "Diamo una mano ai colleghi nuovi. →",
            "options": [
              "Daremo una mano ai colleghi nuovi.",
              "Diaremo una mano ai colleghi nuovi.",
              "Dararemo una mano ai colleghi nuovi."
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
            "q": "___ due ore per arrivare a Roma.",
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
            "q": "___ molta pazienza in questo lavoro.",
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
        "instr": "Individua e clicca la parola sbagliata o la parola di troppo.",
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
            "q": "Sara ci vogliono due giorni a finire la relazione.",
            "wrong": "vogliono",
            "fix": "mette"
          },
          {
            "q": "Per superare l’esame ci vuole costanza e metodo.",
            "wrong": "vuole",
            "fix": "vogliono"
          },
          {
            "q": "Voi quanto ci mettono a rispondere alle email?",
            "wrong": "mettono",
            "fix": "mettete"
          },
          {
            "q": "Da casa mia alla stazione ci mettono dieci minuti a piedi.",
            "wrong": "mettono",
            "fix": "vogliono"
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
            "q": "Ci metto un anno a finire la tesi. →",
            "options": [
              "Ci ho messo un anno a finire la tesi.",
              "Ci sono messo un anno a finire la tesi.",
              "Ci ho messa un anno a finire la tesi."
            ],
            "answer": 0
          },
          {
            "q": "Per cambiare città ci vuole molto coraggio. →",
            "options": [
              "Per cambiare città c’è voluto molto coraggio.",
              "Per cambiare città ci ha voluto molto coraggio.",
              "Per cambiare città c’è voluta molto coraggio."
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
            "q": "Per il permesso di soggiorno ci vuole una settimana. →",
            "options": [
              "Per il permesso di soggiorno c’è voluta una settimana.",
              "Per il permesso di soggiorno ci ha voluto una settimana.",
              "Per il permesso di soggiorno c’è voluto una settimana."
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
            "q": "Dopo cena io ___ i compiti in cucina. (fare)",
            "a": "facevo",
            "no": [
              "feci",
              "faceva",
              "facevano"
            ]
          },
          {
            "q": "Marta ___ una bambina timida. (essere)",
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
        "instr": "Individua e clicca la parola sbagliata o la parola di troppo.",
        "items": [
          {
            "q": "Mia nonna mi rispondeva sempre quando le scrivavo dal collegio.",
            "wrong": "scrivavo",
            "fix": "scrivevo"
          },
          {
            "q": "In quella casa i miei nonni dormevano con la finestra aperta anche quando faceva freddo.",
            "wrong": "dormevano",
            "fix": "dormivano"
          },
          {
            "q": "Al bar sotto casa io berevo sempre un caffè prima di uscire.",
            "wrong": "berevo",
            "fix": "bevevo"
          },
          {
            "q": "Quando eravamo piccoli mia madre ci facava la torta la domenica.",
            "wrong": "facava",
            "fix": "faceva"
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
            "q": "Ha molti amici in quartiere. →",
            "options": [
              "Aveva molti amici in quartiere.",
              "Avava molti amici in quartiere.",
              "Avevo molti amici in quartiere."
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
            "q": "Mentre ___ la doccia, è saltata la luce.",
            "options": [
              "facevo",
              "ho fatto",
              "faceva"
            ],
            "answer": 0
          },
          {
            "q": "Ieri ___ un bel film al cinema con Sara.",
            "options": [
              "ho visto",
              "vedevo",
              "sono visto"
            ],
            "answer": 0
          },
          {
            "q": "Da bambino ___ sempre in bicicletta fino al fiume.",
            "options": [
              "andavo",
              "sono andato",
              "ho andato"
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
              "sono chiamato"
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
        "instr": "Individua e clicca la parola sbagliata o la parola di troppo.",
        "items": [
          {
            "q": "Ieri finivo il libro che mi hai prestato la settimana scorsa.",
            "wrong": "finivo",
            "fix": "ho finito"
          },
          {
            "q": "Ieri andavo al parco ogni domenica con mia sorella.",
            "wrong": "Ieri",
            "fix": "Prima"
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
            "q": "Ieri i miei nonni scrivevano lettere ogni settimana ai parenti lontani.",
            "wrong": "Ieri",
            "fix": "Prima"
          },
          {
            "q": "Ieri sera ti chiamavo tre volte mentre aspettavo una tua risposta.",
            "wrong": "chiamavo",
            "fix": "ho chiamato"
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
            "q": "Mentre (cucinare, lei), (bruciarsi) un dito.",
            "options": [
              "Mentre cucinava, si è bruciata un dito.",
              "Mentre ha cucinato, si bruciava un dito.",
              "Mentre cucinava, si bruciava un dito."
            ],
            "answer": 0
          },
          {
            "q": "(piovere) quando (uscire, noi) dal cinema.",
            "options": [
              "Pioveva quando siamo usciti dal cinema.",
              "Ha piovuto quando uscivamo dal cinema.",
              "Ha piovuto quando siamo usciti dal cinema."
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
        "instr": "Individua e clicca la parola sbagliata o la parola di troppo.",
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
            "q": "Adesso l'inquilino sta ___ il contratto davanti al proprietario. (firmare)",
            "a": "firmando",
            "no": [
              "firmendo"
            ]
          },
          {
            "q": "Il tubo sotto il lavandino sta ___ acqua da stamattina. (perdere)",
            "a": "perdendo",
            "no": [
              "perdando"
            ]
          },
          {
            "q": "Sto ___ i documenti richiesti all'agenzia. (spedire)",
            "a": "spedendo",
            "no": [
              "spedando",
              "spediscendo"
            ]
          },
          {
            "q": "In cucina stiamo ___ la cena per gli ospiti. (preparare)",
            "a": "preparando",
            "no": [
              "preparendo"
            ]
          },
          {
            "q": "Fuori sta ___ da tre ore e il tetto non tiene. (piovere)",
            "a": "piovendo",
            "no": [
              "piovando"
            ]
          },
          {
            "q": "Da ieri sto ___ un rumore strano in bagno. (sentire)",
            "a": "sentendo",
            "no": [
              "sentando"
            ]
          }
        ]
      },
      {
        "type": "Correzione",
        "fmt": "errore",
        "instr": "Individua e clicca la parola sbagliata o la parola di troppo.",
        "items": [
          {
            "q": "Sto telefonendo all'amministratore perché continua a mancare la corrente e i vicini stanno protestando.",
            "wrong": "telefonendo",
            "fix": "telefonando"
          },
          {
            "q": "L'idraulico sta scendando in cantina e il portiere lo sta accompagnando.",
            "wrong": "scendando",
            "fix": "scendendo"
          },
          {
            "q": "Gli operai stanno pulando il cortile mentre il custode sta chiudendo il cancello.",
            "wrong": "pulando",
            "fix": "pulendo"
          },
          {
            "q": "Il muratore sta farendo un preventivo mentre l'amministratore sta prendendo appunti.",
            "wrong": "farendo",
            "fix": "facendo"
          },
          {
            "q": "Al bar sotto casa sto berendo un caffè mentre l'idraulico sta finendo il lavoro.",
            "wrong": "berendo",
            "fix": "bevendo"
          },
          {
            "q": "Adesso il tecnico mi sta direndo qualcosa mentre sta smontando il termosifone.",
            "wrong": "direndo",
            "fix": "dicendo"
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
        "instr": "Individua e clicca la parola sbagliata o la parola di troppo.",
        "items": [{"q":"So che Paolo sia in riunione, ma non credo che torni presto.","wrong":"sia","fix":"è"},{"q":"Sento che il vicino suona il piano ogni sera e ho paura che i condomini protestano.","wrong":"protestano","fix":"protestino"},{"q":"Preferisco che il corriere consegni il pacco in ufficio, ed è chiaro che il portiere lo ritiri volentieri.","wrong":"ritiri","fix":"ritira"},{"q":"Credo che l'autobus passa ogni dieci minuti, ma so che la domenica cambia orario.","wrong":"passa","fix":"passi"},{"q":"Mi sembra che i prezzi crescano ogni mese e purtroppo è vero che gli stipendi restino uguali.","wrong":"restino","fix":"restano"},{"q":"Non sono sicuro che in agosto voi ricevete molti ordini, anche se vedo che il negozio apre tutti i giorni.","wrong":"ricevete","fix":"riceviate"}]
      },
      {
        "type": "Trasformazione",
        "fmt": "buco",
        "instr": "Scegli la trasformazione corretta.",
        "items": [{"q":"Il tecnico aspetta fuori dal portone. →","options":["Suppongo che il tecnico aspetta fuori dal portone.","Suppongo che il tecnico aspetti fuori dal portone.","Suppongo che il tecnico aspettino fuori dal portone."],"answer":1},{"q":"Tu scrivi troppe email il sabato. →","options":["È probabile che tu scriva troppe email il sabato.","È probabile che tu scrivi troppe email il sabato.","È probabile che tu scrivano troppe email il sabato."],"answer":0},{"q":"I bambini dormono con la luce accesa. →","options":["È possibile che i bambini dormono con la luce accesa.","È possibile che i bambini dormino con la luce accesa.","È possibile che i bambini dormano con la luce accesa."],"answer":2},{"q":"Io leggo il contratto prima della firma. →","options":["È necessario che io leggo il contratto prima della firma.","È necessario che io legga il contratto prima della firma.","È necessario che io leggi il contratto prima della firma."],"answer":1},{"q":"Voi vendete i biglietti online. →","options":["Sono felice che voi vendiate i biglietti online.","Sono felice che voi vendate i biglietti online.","Sono felice che voi vendete i biglietti online."],"answer":0},{"q":"Lei guida sempre con prudenza. →","options":["Mi auguro che lei guidino sempre con prudenza.","Mi auguro che lei guida sempre con prudenza.","Mi auguro che lei guidi sempre con prudenza."],"answer":2}]
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
        "items": [{"q":"Con questi prezzi noi non ___ mai in centro. (vivere)","a":"vivremmo","no":["vivremo"]},{"q":"Marta ___ in treno, ma il biglietto costa troppo. (venire)","a":"verrebbe","no":["verebbe"]},{"q":"Da vicino voi ___ subito la differenza fra le due case. (vedere)","a":"vedreste","no":["vedrete"]},{"q":"Al posto tuo, io ___ dal medico oggi stesso. (andare)","a":"andrei","no":["anderei"]},{"q":"Che cosa ___ tu al mio posto? (fare)","a":"faresti","no":["farresti"]},{"q":"I ragazzi ___ un altro gelato, ma la gelateria chiude adesso. (volere)","a":"vorrebbero","no":["vorebbero"]}]
      },
      {
        "type": "Correzione",
        "fmt": "errore",
        "instr": "Individua e clicca la parola sbagliata o la parola di troppo.",
        "items": [{"q":"Noi lavoraremmo anche di sabato, ma preferiremmo riposare.","wrong":"lavoraremmo","fix":"lavoreremmo"},{"q":"Domani chiederei il permesso e poi parterei presto.","wrong":"parterei","fix":"partirei"},{"q":"Chiameresti un taxi o prendiresti l'autobus?","wrong":"prendiresti","fix":"prenderesti"},{"q":"Loro aspetterebbe volentieri, ma con questo freddo nessuno resterebbe fuori.","wrong":"aspetterebbe","fix":"aspetterebbero"},{"q":"In vacanza noi dormiremmo fino a tardi e camminaremmo sulla spiaggia.","wrong":"camminaremmo","fix":"cammineremmo"},{"q":"Il tecnico finerebbe il lavoro in due giorni e chiederebbe un anticipo.","wrong":"finerebbe","fix":"finirebbe"}]
      },
      {
        "type": "Trasformazione",
        "fmt": "buco",
        "instr": "Scegli la trasformazione corretta.",
        "items": [{"q":"Avete un tavolo vicino alla finestra? →","options":["Avreste un tavolo vicino alla finestra?","Avereste un tavolo vicino alla finestra?","Avrei un tavolo vicino alla finestra?"],"answer":0},{"q":"Mi può ripetere l'orario del volo? →","options":["Mi poterebbe ripetere l'orario del volo?","Mi potrebbe ripetere l'orario del volo?","Mi potrei ripetere l'orario del volo?"],"answer":1},{"q":"Devi cambiare le gomme prima dell'inverno. →","options":["Dovrei cambiare le gomme prima dell'inverno.","Doveresti cambiare le gomme prima dell'inverno.","Dovresti cambiare le gomme prima dell'inverno."],"answer":2},{"q":"È meglio pagare con la carta? →","options":["Sarei meglio pagare con la carta?","Sarebbe meglio pagare con la carta?","Esserebbe meglio pagare con la carta?"],"answer":1},{"q":"Quanto costa la consegna al piano? →","options":["Quanto costerebbe la consegna al piano?","Quanto costerebbero la consegna al piano?","Quanto costarebbe la consegna al piano?"],"answer":0},{"q":"Spedite anche all'estero? →","options":["Spediscereste anche all'estero?","Spedirebbero anche all'estero?","Spedireste anche all'estero?"],"answer":2}]
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
        "items": [{"q":"Penso che Marta ___ di casa prima delle sette. (uscire)","a":"sia uscita","no":["è uscita"]},{"q":"Dubito che voi ___ la ricevuta del pagamento. (conservare)","a":"abbiate conservato","no":["avete conservato"]},{"q":"Mi dispiace che i tuoi amici ___ senza salutare. (partire)","a":"siano partiti","no":["sono partiti"]},{"q":"Sospetto che tu ___ la password a qualcuno. (dare)","a":"abbia dato","no":["hai dato"]},{"q":"È strano che il tecnico non ___ ancora in officina. (tornare)","a":"sia tornato","no":["è tornato"]},{"q":"È possibile che io ___ la data dell'appuntamento. (sbagliare)","a":"abbia sbagliato","no":["ho sbagliato"]}]
      },
      {
        "type": "Correzione",
        "fmt": "errore",
        "instr": "Individua e clicca la parola sbagliata o la parola di troppo.",
        "items": [{"q":"Credo che Marco sia dormito male e che tu abbia fatto tardi.","wrong":"sia","fix":"abbia"},{"q":"Immagino che Paolo ha andato a casa presto e che voi abbiate ricevuto il messaggio.","wrong":"ha","fix":"sia"},{"q":"Dubito che l'avvocato abbia controllato le clausole e che voi avete letto il contratto.","wrong":"avete","fix":"abbiate"},{"q":"È strano che loro sono rientrati così tardi e che nessuno abbia sentito la porta.","wrong":"sono","fix":"siano"},{"q":"Penso che il guasto sia durato tutta la notte e che i vicini abbia chiamato il tecnico.","wrong":"abbia","fix":"abbiano"},{"q":"Sospetto che il portiere abbia firmato la ricevuta e che il pacco ha arrivato ieri.","wrong":"ha","fix":"sia"}]
      },
      {
        "type": "Trasformazione",
        "fmt": "buco",
        "instr": "Scegli la forma corretta.",
        "items": [{"q":"Penso che Marco ___ il treno delle sette ieri mattina.","options":["abbia preso","prenda","ha preso"],"answer":0},{"q":"Spero che tu ___ meglio domani.","options":["sia stato","starai","stia"],"answer":2},{"q":"Mi sembra che stamattina Anna ___ l'ombrello sul tram.","options":["dimentichi","abbia dimenticato","ha dimenticato"],"answer":1},{"q":"È probabile che lui ___ ogni sera dopo cena.","options":["studi","sia studiato","studia"],"answer":0},{"q":"Credo che la settimana scorsa loro ___ in ufficio anche di sabato.","options":["vengano","sono venuti","siano venuti"],"answer":2},{"q":"Dubito che adesso lui ___ fame.","options":["ha","abbia","abbia avuto"],"answer":1}]
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
        "items": [{"q":"Il treno ___ per partire: sbrigati!","a":"sta","no":["è"]},{"q":"Ieri io ___ per addormentarmi quando è saltata la corrente.","a":"stavo","no":["ero"]},{"q":"Noi ___ per sederci a tavola: arrivi in tempo.","a":"stiamo","no":["siamo"]},{"q":"I bambini ___ per aprire i regali quando è suonato il campanello.","a":"stavano","no":["erano"]},{"q":"Voi ___ per atterrare o siete ancora in volo?","a":"state","no":["siete","stiate"]},{"q":"Tu ___ per chiedermi qualcosa, poi ti sei fermato.","a":"stavi","no":["eri"]}]
      },
      {
        "type": "Correzione",
        "fmt": "errore",
        "instr": "Individua e clicca la parola sbagliata o la parola di troppo.",
        "items": [{"q":"Lo spettacolo è per iniziare e gli spettatori stanno per entrare.","wrong":"è","fix":"sta"},{"q":"Io sto per cucinare e mia sorella sta per finendo i compiti.","wrong":"finendo","fix":"finire"},{"q":"I clienti stanno per uscire e il locale sta di chiudere.","wrong":"di","fix":"per"},{"q":"Il sole sta per tramonta e le luci stanno per accendersi.","wrong":"tramonta","fix":"tramontare"},{"q":"Io sto per apparecchiare e i vostri amici sta per arrivare da Milano.","wrong":"sta","fix":"stanno"},{"q":"Ieri la sfilata era per passare quando è scoppiato il temporale e la gente stava per andarsene.","wrong":"era","fix":"stava"}]
      },
      {
        "type": "Trasformazione",
        "fmt": "buco",
        "instr": "Scegli la forma corretta.",
        "items": [{"q":"Copriti: il vento ___ da un momento all'altro.","options":["sta per alzarsi","sta alzandosi","sta per alzandosi"],"answer":0},{"q":"Non disturbarmi: in questo momento ___ con un cliente.","options":["sto per parlare","sto parlando","ero per parlare"],"answer":1},{"q":"Sbrigati, l'aereo ___ fra pochi minuti.","options":["sta per decollare","sta decollando","è per decollare"],"answer":0},{"q":"In questo momento i tecnici ___ l'impianto elettrico.","options":["stanno per controllare","stanno controllando","stanno per controllando"],"answer":1},{"q":"Non ho ancora finito: ___ la risposta in questo momento.","options":["sto per scrivere","sto scrivendo","sono per scrivere"],"answer":1},{"q":"Mancano due minuti: ___ i fuochi d'artificio.","options":["stanno per cominciare","stanno cominciando","sono per cominciare"],"answer":0}]
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
        "items": [{"q":"Ho letto le recensioni negative, ___ non ho scaricato l'app.","options":["quindi","però","prima di tutto"],"answer":0},{"q":"___ la password era troppo semplice, è stata indovinata subito.","options":["Siccome","Perciò","Inoltre"],"answer":0},{"q":"Il sito non funzionava; ___ ho telefonato all'assistenza.","options":["di conseguenza","nel frattempo","cioè"],"answer":0},{"q":"Non ho aperto l'allegato ___ il mittente era sconosciuto.","options":["perché","quindi","invece"],"answer":0},{"q":"___ il pacco è in ritardo, chiedo un rimborso.","options":["Dato che","Tuttavia","In particolare"],"answer":0},{"q":"L'ufficio è chiuso per ferie; ___ le pratiche restano ferme.","options":["perciò","cioè","poi"],"answer":0}]
      },
      {
        "type": "Correzione",
        "fmt": "errore",
        "instr": "Individua e clicca la parola sbagliata o la parola di troppo.",
        "items": [{"q":"Ho attivato l'antivirus e in particolare ho cambiato la password, quindi il computer era già infetto.","wrong":"quindi","fix":"però"},{"q":"Il sito era lento e nel frattempo la connessione cadeva; infatti ho chiuso la pagina.","wrong":"infatti","fix":"infine"},{"q":"Il museo era chiuso; poi era lunedì, tuttavia il cartello non c'era.","wrong":"poi","fix":"infatti"},{"q":"Marta prende sempre il treno, perché io vado in ufficio in bici; alla fine arriviamo insieme.","wrong":"perché","fix":"invece"},{"q":"Siccome sia stanco, continuo a lavorare e successivamente finisco la relazione.","wrong":"Siccome","fix":"Nonostante"},{"q":"Innanzitutto scegli una password lunga; cioè attiva la verifica in due passaggi.","wrong":"cioè","fix":"poi"}]
      },
      {
        "type": "Trasformazione",
        "fmt": "buco",
        "instr": "Unisci le due frasi con il connettivo adatto.",
        "items": [{"q":"Ho cambiato la password. Ho attivato le notifiche.","options":["Ho cambiato la password e inoltre ho attivato le notifiche.","Ho cambiato la password e infatti ho attivato le notifiche.","Ho cambiato la password e invece ho attivato le notifiche."],"answer":0},{"q":"Il social era nuovo. Aveva già milioni di utenti.","options":["Il social era nuovo, però aveva già milioni di utenti.","Il social era nuovo, quindi aveva già milioni di utenti.","Il social era nuovo, poi aveva già milioni di utenti."],"answer":0},{"q":"Lui usa i social tutti i giorni. Io scrivo solo email.","options":["Lui usa i social tutti i giorni, io invece scrivo solo email.","Lui usa i social tutti i giorni, io infatti scrivo solo email.","Lui usa i social tutti i giorni, io inoltre scrivo solo email."],"answer":0},{"q":"Apri le impostazioni. Seleziona la privacy. Salva le modifiche.","options":["Prima di tutto apri le impostazioni, poi seleziona la privacy, infine salva le modifiche.","Infine apri le impostazioni, poi seleziona la privacy, prima di tutto salva le modifiche.","Poi apri le impostazioni, prima di tutto seleziona la privacy, infine salva le modifiche."],"answer":0},{"q":"Non ha risposto al messaggio. Ha bloccato il contatto.","options":["Non solo non ha risposto al messaggio, ma ha anche bloccato il contatto.","Non ha risposto al messaggio, cioè ha bloccato il contatto.","Non ha risposto al messaggio, nel frattempo ha bloccato il contatto."],"answer":0},{"q":"L'app chiede molte autorizzazioni. Accede alla fotocamera e ai contatti.","options":["L'app chiede molte autorizzazioni: infatti accede alla fotocamera e ai contatti.","L'app chiede molte autorizzazioni: però accede alla fotocamera e ai contatti.","L'app chiede molte autorizzazioni: prima di tutto accede alla fotocamera e ai contatti."],"answer":0}]
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
        "items": [{"q":"Lava la frutta. → ___ con acqua fredda.","a":"Lavala","no":["Lavarla"]},{"q":"Prendi i pomodori. → ___ dal cesto in cucina.","a":"Prendili","no":["Prenderli"]},{"q":"Pulisci le verdure. → ___ sotto l'acqua corrente.","a":"Puliscile","no":["Pulile"]},{"q":"Mescola il sugo. → ___ con il cucchiaio di legno.","a":"Mescolalo","no":["Mescolarlo"]},{"q":"Aggiungi del pepe. → ___ solo un pizzico.","a":"Aggiungine","no":["Aggiungilo"]},{"q":"Compra le mele. → ___ due chili al mercato.","a":"Comprane","no":["Comprarne"]}]
      },
      {
        "type": "Correzione",
        "fmt": "errore",
        "instr": "Individua e clicca la parola sbagliata o la parola di troppo.",
        "items": [{"q":"Scegli le patate, sbucciala bene e mettile in padella.","wrong":"sbucciala","fix":"sbucciale"},{"q":"Affetta il pane, servili con l'olio e coprilo con un panno.","wrong":"servili","fix":"servilo"},{"q":"Prova la pasta, scolala subito e condiscilo con il burro.","wrong":"condiscilo","fix":"condiscila"},{"q":"Metti il latte in un pentolino, scaldale piano e assaggialo prima di servire.","wrong":"scaldale","fix":"scaldalo"},{"q":"Trita le cipolle, girali spesso in padella e toglile dal fuoco dopo dieci minuti.","wrong":"girali","fix":"girale"},{"q":"Apri il vino, versali nei bicchieri e offrine anche a Marco.","wrong":"versali","fix":"versalo"}]
      },
      {
        "type": "Trasformazione",
        "fmt": "buco",
        "instr": "Scegli la forma corretta.",
        "items": [{"q":"Ecco il pesce fresco: ___ in forno per venti minuti.","options":["cuocilo","cuocila","cuocine"],"answer":0},{"q":"Le uova sono nel frigo: ___ con la forchetta.","options":["sbattile","sbattili","sbattilo"],"answer":0},{"q":"Il brodo è insipido: ___ ancora un poco.","options":["salalo","salali","salane"],"answer":0},{"q":"Il pane è di ieri: ___ a fette piccole.","options":["taglialo","tagliala","tagliali"],"answer":0},{"q":"Il parmigiano è nel frigo: ___ sulla pasta.","options":["grattugialo","grattugiali","grattugiale"],"answer":0},{"q":"Le lasagne sono pronte: ___ subito.","options":["infornale","infornali","infornalo"],"answer":0}]
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
            "q": "La città in ___ vivo è tranquilla.",
            "options": [
              "cui",
              "che",
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
            "q": "Ho incontrato una scrittrice ___ romanzo ha vinto un premio.",
            "options": [
              "il cui",
              "che",
              "cui"
            ],
            "answer": 0
          }
        ]
      },
      {
        "type": "Correzione",
        "fmt": "errore",
        "instr": "Individua e clicca la parola sbagliata o la parola di troppo.",
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
            "q": "L'amico con che studio è tedesco.",
            "wrong": "che",
            "fix": "cui"
          },
          {
            "q": "La scrittrice cui romanzo ha vinto il premio vive qui.",
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
            "q": "Ho un amico. Lui abita a Roma.",
            "options": [
              "Ho un amico che abita a Roma.",
              "Ho un amico cui abita a Roma.",
              "Ho un amico chi abita a Roma."
            ],
            "answer": 0
          },
          {
            "q": "Ho ascoltato un concerto. Il concerto era bellissimo.",
            "options": [
              "Il concerto che ho ascoltato era bellissimo.",
              "Il concerto cui ho ascoltato era bellissimo.",
              "Il concerto chi ho ascoltato era bellissimo."
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
            "q": "Ho un collega. Lavoro con lui.",
            "options": [
              "Ho un collega con cui lavoro.",
              "Ho un collega che lavoro con.",
              "Ho un collega con che lavoro."
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
            "q": "Conosco un medico. Suo figlio studia con me.",
            "options": [
              "Conosco un medico il cui figlio studia con me.",
              "Conosco un medico cui figlio studia con me.",
              "Conosco un medico che il figlio studia con me."
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
            "q": "Regalo un libro a Luca. → ___ regalo un libro.",
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
            "q": "Mandano una mail a noi. → ___ mandano una mail.",
            "options": [
              "Ci",
              "Ce",
              "Noi"
            ],
            "answer": 0
          }
        ]
      },
      {
        "type": "Correzione",
        "fmt": "errore",
        "instr": "Individua e clicca la parola sbagliata o la parola di troppo.",
        "items": [
          {
            "q": "Marco aspetta una risposta, quindi stasera lo telefono.",
            "wrong": "lo",
            "fix": "gli"
          },
          {
            "q": "Sara aspetta notizie, quindi domani la scrivo una mail.",
            "wrong": "la",
            "fix": "le"
          },
          {
            "q": "Luca compie dieci anni, quindi li regalo un libro per il compleanno.",
            "wrong": "li",
            "fix": "gli"
          },
          {
            "q": "Domani te porto il pacco in ufficio.",
            "wrong": "te",
            "fix": "ti"
          },
          {
            "q": "Stasera ve preparo la cena perché arrivate tardi.",
            "wrong": "ve",
            "fix": "vi"
          },
          {
            "q": "Ieri ce hanno dato una risposta dopo una lunga attesa.",
            "wrong": "ce",
            "fix": "ci"
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
            "q": "Parlo al collega. →",
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
            "q": "Mandano un pacco a noi. →",
            "options": [
              "Ci mandano un pacco.",
              "Ce mandano un pacco.",
              "Noi mandano un pacco."
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
        "instr": "Completa la seconda frase con il pronome combinato corretto.",
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
            "q": "Parlo del problema ad Anna. → ___ parlo.",
            "a": "Gliene",
            "no": [
              "Gli ne",
              "Ne gli",
              "Glielo"
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
        "instr": "Individua e clicca la parola sbagliata o la parola di troppo.",
        "items": [
          {
            "q": "Visto che hai il mio libro, mi lo dai domani?",
            "wrong": "mi",
            "fix": "me"
          },
          {
            "q": "Le regole sono complicate, quindi domani il professore ci le spiega.",
            "wrong": "ci",
            "fix": "ce"
          },
          {
            "q": "Marco è già informato perché glil'ho già detto.",
            "wrong": "glil'ho",
            "fix": "gliel'ho"
          },
          {
            "q": "Luca conosce bene il progetto e ieri mi ne ha parlato.",
            "wrong": "mi",
            "fix": "me"
          },
          {
            "q": "Domani ve gli porto perché i biglietti sono per voi.",
            "wrong": "gli",
            "fix": "li"
          },
          {
            "q": "La lettera era per Sara, quindi ieri glil'ho spedita.",
            "wrong": "glil'ho",
            "fix": "gliel'ho"
          }
        ]
      },
      {
        "type": "Composizione",
        "fmt": "ordina",
        "instr": "Clicca le parole nell'ordine giusto.",
        "items": [
          {
            "q": "Un amico ha il mio libro e io lo voglio indietro.",
            "sol": [
              "me",
              "lo",
              "dai"
            ]
          },
          {
            "q": "Ti dico che la porto io visto che hai dimenticato la torta.",
            "sol": [
              "te",
              "la",
              "porto"
            ]
          },
          {
            "q": "Il mio collega sa già tutto.",
            "sol": [
              "gliel'ho",
              "detto"
            ]
          },
          {
            "q": "Volete informazioni sul nuovo progetto.",
            "sol": [
              "ve",
              "ne",
              "parlo"
            ]
          },
          {
            "q": "Mi chiedi se ho comprato per te i biglietti.",
            "sol": [
              "te",
              "li",
              "ho",
              "comprati"
            ]
          },
          {
            "q": "Il professore ha già comunicato il risultato a noi.",
            "sol": [
              "ce",
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
        "instr": "Individua e clicca la parola sbagliata o la parola di troppo.",
        "items": [
          {
            "q": "Il maglione che ho visto in vetrina l'ho comprata in saldo.",
            "wrong": "comprata",
            "fix": "comprato"
          },
          {
            "q": "Gli occhiali li ho perso.",
            "wrong": "perso",
            "fix": "persi"
          },
          {
            "q": "Le lenzuola le ho steso ieri mattina al sole.",
            "wrong": "steso",
            "fix": "stese"
          },
          {
            "q": "Lo scontrino che mi hanno dato l'ho conservata in tasca.",
            "wrong": "conservata",
            "fix": "conservato"
          },
          {
            "q": "I fiori li ho raccolta.",
            "wrong": "raccolta",
            "fix": "raccolti"
          },
          {
            "q": "La torta che ho preparato l'ho decorato con la panna.",
            "wrong": "decorato",
            "fix": "decorata"
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
            "q": "Ho consegnato la domanda in segreteria. →",
            "options": [
              "L'ho consegnata in segreteria.",
              "L'ho consegnato in segreteria.",
              "La ho consegnato in segreteria."
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
        "instr": "Clicca le parole nell'ordine giusto.",
        "items": [
          {
            "q": "È tardi e decido di andare via.",
            "sol": [
              "me",
              "ne",
              "vado"
            ]
          },
          {
            "q": "Il compito è troppo difficile per me.",
            "sol": [
              "non",
              "ce",
              "la",
              "faccio"
            ]
          },
          {
            "q": "Luca, ti chiedo se sei già andato via dalla festa.",
            "sol": [
              "te",
              "ne",
              "sei",
              "andato"
            ]
          },
          {
            "q": "Ti chiedo se riesci a finire questo compito.",
            "sol": [
              "ce",
              "la",
              "fai"
            ]
          },
          {
            "q": "Marco riesce a gestire bene le situazioni difficili.",
            "sol": [
              "se",
              "la",
              "cava"
            ]
          },
          {
            "q": "Con l’italiano riesco a gestirmi abbastanza bene.",
            "sol": [
              "me",
              "la",
              "cavo"
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
            "q": "Dato che il progetto è enorme, non ___ da soli. (farcela)",
            "options": [
              "ce la facciamo",
              "ci la facciamo",
              "ce lo facciamo"
            ],
            "answer": 0
          },
          {
            "q": "Quando viaggia da sola, Marta ___ benissimo. (cavarsela)",
            "options": [
              "se la cava",
              "si la cava",
              "se lo cava"
            ],
            "answer": 0
          },
          {
            "q": "___ con lo spagnolo. (cavarsela)",
            "options": [
              "Me la cavo",
              "Mi la cavo",
              "Me lo cavo"
            ],
            "answer": 0
          },
          {
            "q": "Alla fine ___ da solo. (farcela)",
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
            "q": "___ subito dopo cena. (andarsene)",
            "options": [
              "Ve ne andate",
              "Vi ne andate",
              "Ve lo andate"
            ],
            "answer": 0
          }
        ]
      },
      {
        "type": "Correzione",
        "fmt": "errore",
        "instr": "Individua e clicca la parola sbagliata o la parola di troppo.",
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
            "q": "Ti la cavi bene in cucina.",
            "wrong": "Ti",
            "fix": "Te"
          },
          {
            "q": "Alla fine loro ci l'hanno fatta.",
            "wrong": "ci",
            "fix": "ce"
          },
          {
            "q": "Vi ne siete andati subito.",
            "wrong": "Vi",
            "fix": "Ve"
          },
          {
            "q": "Mi la cavo con il tedesco.",
            "wrong": "Mi",
            "fix": "Me"
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
            "q": "Qui ___ bene e si spende poco.",
            "options": [
              "si mangia",
              "si mangiano",
              "si mangi"
            ],
            "answer": 0
          },
          {
            "q": "In biblioteca non ___.",
            "options": [
              "si parla",
              "si parlano",
              "si parlare"
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
            "q": "Al mare ___ e si prende il sole.",
            "options": [
              "si nuota",
              "si nuotano",
              "si nuoti"
            ],
            "answer": 0
          }
        ]
      },
      {
        "type": "Correzione",
        "fmt": "errore",
        "instr": "Individua e clicca la parola sbagliata o la parola di troppo.",
        "items": [
          {
            "q": "In quel paese si dormono poco durante la settimana.",
            "wrong": "dormono",
            "fix": "dorme"
          },
          {
            "q": "Al museo non si entrano senza prenotazione.",
            "wrong": "entrano",
            "fix": "entra"
          },
          {
            "q": "D’inverno sulle piste si sciano molto volentieri.",
            "wrong": "sciano",
            "fix": "scia"
          },
          {
            "q": "In ospedale a volte si aspettano molto prima della visita.",
            "wrong": "aspettano",
            "fix": "aspetta"
          },
          {
            "q": "Durante una visita al museo si camminano molto.",
            "wrong": "camminano",
            "fix": "cammina"
          },
          {
            "q": "A quest’ora si telefonano raramente agli amici.",
            "wrong": "telefonano",
            "fix": "telefona"
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
        "instr": "Scegli i tempi corretti: la condizione è reale.",
        "items": [
          {
            "q": "Se ___ bel tempo, andremo al mare.",
            "options": [
              "farà",
              "farebbe",
              "farò"
            ],
            "answer": 0
          },
          {
            "q": "Se studi, ___ l'esame.",
            "options": [
              "passerai",
              "passeresti",
              "passerà"
            ],
            "answer": 0
          },
          {
            "q": "Se ___ presto, arriviamo in tempo.",
            "options": [
              "partiamo",
              "partiremmo",
              "partirò"
            ],
            "answer": 0
          },
          {
            "q": "Se io ___ tempo, ti aiuto volentieri.",
            "options": [
              "ho",
              "avrei",
              "hai"
            ],
            "answer": 0
          },
          {
            "q": "Se prenoti oggi, ___ meno.",
            "options": [
              "spenderai",
              "spenderesti",
              "spenderà"
            ],
            "answer": 0
          },
          {
            "q": "Se ___ questa strada, arrivi prima.",
            "options": [
              "prendi",
              "prenderesti",
              "prende"
            ],
            "answer": 0
          }
        ]
      },
      {
        "type": "Correzione",
        "fmt": "errore",
        "instr": "Individua e clicca la parola sbagliata o la parola di troppo.",
        "items": [
          {
            "q": "Se ci sarà il sole, faremmo una gita.",
            "wrong": "faremmo",
            "fix": "faremo"
          },
          {
            "q": "Se ti alleneresti, migliorerai presto.",
            "wrong": "alleneresti",
            "fix": "alleni"
          },
          {
            "q": "Se usciremmo adesso, evitiamo la coda.",
            "wrong": "usciremmo",
            "fix": "usciamo"
          },
          {
            "q": "Se avrei fame, ti preparo qualcosa.",
            "wrong": "avrei",
            "fix": "ho"
          },
          {
            "q": "Se compri online, risparmieresti tempo.",
            "wrong": "risparmieresti",
            "fix": "risparmierai"
          },
          {
            "q": "Se leggeresti il manuale, capisci meglio.",
            "wrong": "leggeresti",
            "fix": "leggi"
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
              "Se prenotereste adesso, troverete posto.",
              "Se prenotate adesso, troverà posto."
            ],
            "answer": 0
          },
          {
            "q": "(lui – insistere) → (loro – accettare)",
            "options": [
              "Se insiste, accetteranno.",
              "Se insisterebbe, accetteranno.",
              "Se insiste, accetterà."
            ],
            "answer": 0
          },
          {
            "q": "(il pacco – arrivare oggi) → (io – aprirlo subito)",
            "options": [
              "Se il pacco arriva oggi, lo apro subito.",
              "Se il pacco arriverebbe oggi, lo apro subito.",
              "Se il pacco arriva oggi, lo apriamo subito."
            ],
            "answer": 0
          },
          {
            "q": "(tu – bere troppo caffè) → (tu – dormire male)",
            "options": [
              "Se bevi troppo caffè, dormirai male.",
              "Se berresti troppo caffè, dormirai male.",
              "Se bevi troppo caffè, dormirà male."
            ],
            "answer": 0
          },
          {
            "q": "(esserci uno sciopero) → (io – lavorare da casa)",
            "options": [
              "Se c'è sciopero, lavoro da casa.",
              "Se ci sarebbe sciopero, lavoro da casa.",
              "Se c'è sciopero, lavoriamo da casa."
            ],
            "answer": 0
          },
          {
            "q": "(il negozio – essere chiuso) → (noi – tornare domani)",
            "options": [
              "Se il negozio è chiuso, torniamo domani.",
              "Se il negozio sarebbe chiuso, torniamo domani.",
              "Se il negozio è chiuso, torno domani."
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
              "ha",
              "viene"
            ],
            "answer": 0
          },
          {
            "q": "Ogni mattina i pacchi ___ consegnati dal corriere.",
            "options": [
              "vengono",
              "sono stati",
              "ha"
            ],
            "answer": 0
          },
          {
            "q": "La lettera ___ scritta ieri pomeriggio.",
            "options": [
              "è stata",
              "viene",
              "ha"
            ],
            "answer": 0
          },
          {
            "q": "Durante la visita guidata, ogni sala ___ presentata da un esperto.",
            "options": [
              "viene",
              "è stata",
              "ha"
            ],
            "answer": 0
          },
          {
            "q": "La casa ___ costruita nel 1920.",
            "options": [
              "è stata",
              "viene",
              "ha"
            ],
            "answer": 0
          },
          {
            "q": "Il contratto ___ firmato ieri dal direttore.",
            "options": [
              "è stato",
              "viene",
              "ha"
            ],
            "answer": 0
          }
        ]
      },
      {
        "type": "Correzione",
        "fmt": "errore",
        "instr": "Individua e clicca la parola sbagliata o la parola di troppo.",
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
              "Il progetto ha presentato dal direttore."
            ],
            "answer": 0
          },
          {
            "q": "Servono la colazione dalle sette. (venire) →",
            "options": [
              "La colazione viene servita dalle sette.",
              "La colazione è servita dalle sette.",
              "La colazione ha servita dalle sette."
            ],
            "answer": 0
          },
          {
            "q": "Marco ha riparato la bicicletta. (essere) →",
            "options": [
              "La bicicletta è stata riparata da Marco.",
              "La bicicletta viene riparata da Marco.",
              "La bicicletta ha riparata da Marco."
            ],
            "answer": 0
          },
          {
            "q": "Gli impiegati controllano i biglietti all’ingresso. (venire) →",
            "options": [
              "I biglietti vengono controllati dagli impiegati all’ingresso.",
              "I biglietti sono stati controllati dagli impiegati all’ingresso.",
              "I biglietti hanno controllati dagli impiegati all’ingresso."
            ],
            "answer": 0
          },
          {
            "q": "Il professore ha corretto il test. (essere) →",
            "options": [
              "Il test è stato corretto dal professore.",
              "Il test viene corretto dal professore.",
              "Il test ha corretto dal professore."
            ],
            "answer": 0
          },
          {
            "q": "Gli insegnanti controllano i compiti ogni giorno. (venire) →",
            "options": [
              "I compiti vengono controllati dagli insegnanti ogni giorno.",
              "I compiti sono stati controllati dagli insegnanti ogni giorno.",
              "I compiti hanno controllati dagli insegnanti ogni giorno."
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
            "q": "___ appartamenti in centro.",
            "options": [
              "Si affittano",
              "Si affitta",
              "Si affittare"
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
        "instr": "Individua e clicca la parola sbagliata o la parola di troppo.",
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
            "q": "Si ripara biciclette in questa officina.",
            "wrong": "ripara",
            "fix": "riparano"
          },
          {
            "q": "In questa scuola si corregge i test.",
            "wrong": "corregge",
            "fix": "correggono"
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
            "q": "Firmano il contratto in ufficio. →",
            "options": [
              "Il contratto si firma in ufficio.",
              "Il contratto si firmano in ufficio.",
              "Il contratto ci si firma in ufficio."
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
            "q": "Cuociono la pizza nel forno a legna. →",
            "options": [
              "La pizza si cuoce nel forno a legna.",
              "La pizza si cuociono nel forno a legna.",
              "La pizza ci si cuoce nel forno a legna."
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
        "instr": "Riporta le parole con un verbo dichiarativo al presente: scegli la forma corretta.",
        "items": [
          {
            "q": "Marco: «Il film è divertente». → Marco dice che il film ___ divertente.",
            "options": [
              "è",
              "era",
              "sia"
            ],
            "answer": 0
          },
          {
            "q": "Sara: «Non mi piace il finale». → Sara dice che non ___ piace il finale.",
            "options": [
              "le",
              "mi",
              "gli"
            ],
            "answer": 0
          },
          {
            "q": "Luca e Anna: «Preferiamo il teatro». → Luca e Anna dicono che ___ il teatro.",
            "options": [
              "preferiscono",
              "preferiamo",
              "preferivano"
            ],
            "answer": 0
          },
          {
            "q": "Paolo: «Vado al cinema ogni sabato». → Paolo dice che ___ al cinema ogni sabato.",
            "options": [
              "va",
              "andava",
              "vada"
            ],
            "answer": 0
          },
          {
            "q": "Giulia: «Ho due biglietti». → Giulia dice che ___ due biglietti.",
            "options": [
              "ha",
              "ho",
              "aveva"
            ],
            "answer": 0
          },
          {
            "q": "Marta: «Non conosco il regista». → Marta dice che non ___ il regista.",
            "options": [
              "conosce",
              "conosceva",
              "conosca"
            ],
            "answer": 0
          }
        ]
      },
      {
        "type": "Correzione",
        "fmt": "errore",
        "instr": "Individua e clicca la parola sbagliata o la parola di troppo.",
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
            "q": "Sara e Luca dicono: «Il nostro spettacolo inizia alle nove». → Sara e Luca dicono che il vostro spettacolo inizia alle nove.",
            "wrong": "vostro",
            "fix": "loro"
          }
        ]
      },
      {
        "type": "Trasformazione",
        "fmt": "buco",
        "instr": "Trasforma in discorso indiretto mantenendo il resoconto nel presente.",
        "items": [
          {
            "q": "«Adoro questo film», dice Elena. →",
            "options": [
              "Elena dice che adora questo film.",
              "Elena dice che adorava questo film.",
              "Elena dice che adori questo film."
            ],
            "answer": 0
          },
          {
            "q": "«Non capisco il finale», dice Carlo. →",
            "options": [
              "Carlo dice che non capisce il finale.",
              "Carlo dice che non capivo il finale.",
              "Carlo dice che non capisca il finale."
            ],
            "answer": 0
          },
          {
            "q": "«Andiamo spesso a teatro», dicono Marta e Leo. →",
            "options": [
              "Marta e Leo dicono che vanno spesso a teatro.",
              "Marta e Leo dicono che andiamo spesso a teatro.",
              "Marta e Leo dicono che vadano spesso a teatro."
            ],
            "answer": 0
          },
          {
            "q": "«Il mio posto è in prima fila», dice Anna. →",
            "options": [
              "Anna dice che il suo posto è in prima fila.",
              "Anna dice che il mio posto è in prima fila.",
              "Anna dice che il suo posto era in prima fila."
            ],
            "answer": 0
          },
          {
            "q": "«Ti consiglio la commedia», dice Luca a Sara. →",
            "options": [
              "Luca dice a Sara che le consiglia la commedia.",
              "Luca dice a Sara che mi consiglia la commedia.",
              "Luca dice a Sara che le consigliava la commedia."
            ],
            "answer": 0
          },
          {
            "q": "«Siamo soddisfatti dello spettacolo», dicono i clienti. →",
            "options": [
              "I clienti dicono che sono soddisfatti dello spettacolo.",
              "I clienti dicono che siamo soddisfatti dello spettacolo.",
              "I clienti dicono che fossero soddisfatti dello spettacolo."
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
        "instr": "Individua e clicca la parola sbagliata o la parola di troppo.",
        "items": [
          {
            "q": "Quando sarò finito il lavoro, ti chiamerò.",
            "wrong": "sarò",
            "fix": "avrò"
          },
          {
            "q": "Appena avranno partiti, chiuderemo il cancello.",
            "wrong": "avranno",
            "fix": "saranno"
          },
          {
            "q": "Quando Anna sarà uscito, chiuderemo noi.",
            "wrong": "uscito",
            "fix": "uscita"
          },
          {
            "q": "Quando avrò partito, ti scriverò un messaggio.",
            "wrong": "avrò",
            "fix": "sarò"
          },
          {
            "q": "Quando saranno tornate i ragazzi, ceneremo.",
            "wrong": "tornate",
            "fix": "tornati"
          },
          {
            "q": "Appena saranno arrivato le scatole, apritele.",
            "wrong": "arrivato",
            "fix": "arrivate"
          }
        ]
      },
      {
        "type": "Trasformazione",
        "fmt": "buco",
        "instr": "Scegli la versione con il futuro anteriore.",
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
            "q": "Prima si laurea, poi cerca lavoro. →",
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
        "instr": "Individua e clicca la parola sbagliata o la parola di troppo.",
        "items": [
          {
            "q": "Questa è una soluzione più pessima.",
            "wrong": "più",
            "fix": "(togliere)"
          },
          {
            "q": "Il risultato finale è più ottimo.",
            "wrong": "più",
            "fix": "(togliere)"
          },
          {
            "q": "Ha ottenuto il punteggio più massimo della classe.",
            "wrong": "più",
            "fix": "(togliere)"
          },
          {
            "q": "Mio fratello più maggiore vive a Roma.",
            "wrong": "più",
            "fix": "(togliere)"
          },
          {
            "q": "È la sorella più minore della famiglia.",
            "wrong": "più",
            "fix": "(togliere)"
          },
          {
            "q": "Ha scelto la dose più minima possibile.",
            "wrong": "più",
            "fix": "(togliere)"
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
              "Un pranzo buonissimo ottimo"
            ],
            "answer": 0
          },
          {
            "q": "Un servizio molto cattivo →",
            "options": [
              "Un servizio pessimo",
              "Un servizio più cattivo",
              "Un servizio cattivissimo pessimo"
            ],
            "answer": 0
          },
          {
            "q": "Il livello più alto →",
            "options": [
              "Il livello massimo",
              "Il livello più massimo",
              "Il livello altissimo massimo"
            ],
            "answer": 0
          },
          {
            "q": "La quantità più bassa →",
            "options": [
              "La quantità minima",
              "La quantità più minima",
              "La quantità bassissima minima"
            ],
            "answer": 0
          },
          {
            "q": "Il figlio più anziano →",
            "options": [
              "Il figlio maggiore",
              "Il figlio più maggiore",
              "Il figlio grandissimo"
            ],
            "answer": 0
          },
          {
            "q": "La figlia più giovane →",
            "options": [
              "La figlia minore",
              "La figlia più minore",
              "La figlia piccolissima minore"
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
        "instr": "Scegli il pronome relativo corretto.",
        "items": [
          {
            "q": "L'azienda per ___ lavoro è tedesca.",
            "options": [
              "cui",
              "che",
              "chi"
            ],
            "answer": 0
          },
          {
            "q": "Il collega a ___ ho scritto è in ferie.",
            "options": [
              "cui",
              "che",
              "chi"
            ],
            "answer": 0
          },
          {
            "q": "La città in ___ sono nato è sul mare.",
            "options": [
              "cui",
              "che",
              "chi"
            ],
            "answer": 0
          },
          {
            "q": "Il progetto ___ abbiamo presentato ieri è pronto.",
            "options": [
              "che",
              "cui",
              "chi"
            ],
            "answer": 0
          },
          {
            "q": "La collega con ___ lavoro vive a Bari.",
            "options": [
              "cui",
              "che",
              "chi"
            ],
            "answer": 0
          },
          {
            "q": "Il libro ___ mi hai consigliato è interessante.",
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
        "instr": "Individua e clicca la parola sbagliata o la parola di troppo.",
        "items": [
          {
            "q": "La società per che lavoro è francese.",
            "wrong": "che",
            "fix": "cui"
          },
          {
            "q": "Il direttore a che ho parlato è nuovo.",
            "wrong": "che",
            "fix": "cui"
          },
          {
            "q": "Il paese in che vivo è tranquillo.",
            "wrong": "che",
            "fix": "cui"
          },
          {
            "q": "La relazione cui abbiamo consegnato ieri è lunga.",
            "wrong": "cui",
            "fix": "che"
          },
          {
            "q": "La collega con che lavoro ogni giorno è molto precisa.",
            "wrong": "che",
            "fix": "cui"
          },
          {
            "q": "Il libro cui ho comprato ieri è sul tavolo.",
            "wrong": "cui",
            "fix": "che"
          }
        ]
      },
      {
        "type": "Trasformazione",
        "fmt": "buco",
        "instr": "Unisci le due frasi con «che» o «cui».",
        "items": [
          {
            "q": "Ecco il libro. Ne abbiamo parlato ieri.",
            "options": [
              "Ecco il libro di cui abbiamo parlato ieri.",
              "Ecco il libro che abbiamo parlato ieri.",
              "Ecco il libro di chi abbiamo parlato ieri."
            ],
            "answer": 0
          },
          {
            "q": "Questo è il museo. Ci vado spesso.",
            "options": [
              "Questo è il museo in cui vado spesso.",
              "Questo è il museo che vado spesso.",
              "Questo è il museo in chi vado spesso."
            ],
            "answer": 0
          },
          {
            "q": "Ho una collega. Lavoro con lei.",
            "options": [
              "Ho una collega con cui lavoro.",
              "Ho una collega che lavoro.",
              "Ho una collega con chi lavoro."
            ],
            "answer": 0
          },
          {
            "q": "Ho letto un articolo. L'articolo era interessante.",
            "options": [
              "L'articolo che ho letto era interessante.",
              "L'articolo cui ho letto era interessante.",
              "L'articolo chi ho letto era interessante."
            ],
            "answer": 0
          },
          {
            "q": "Conosco un tecnico. Il tecnico lavora qui.",
            "options": [
              "Conosco un tecnico che lavora qui.",
              "Conosco un tecnico cui lavora qui.",
              "Conosco un tecnico chi lavora qui."
            ],
            "answer": 0
          },
          {
            "q": "Questo è il paese. Sono cresciuto qui.",
            "options": [
              "Questo è il paese in cui sono cresciuto.",
              "Questo è il paese che sono cresciuto.",
              "Questo è il paese in chi sono cresciuto."
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
      "B2 L8"
    ],
    "title": "I verbi pronominali avanzati",
    "exercises": [
      {
        "type": "Composizione",
        "fmt": "ordina",
        "instr": "Clicca le parole nell'ordine giusto.",
        "items": [
          {
            "q": "Marco si offende facilmente anche per piccole critiche.",
            "sol": [
              "se",
              "la",
              "prende"
            ]
          },
          {
            "q": "A Luca non importa affatto del giudizio degli altri.",
            "sol": [
              "se",
              "ne",
              "frega"
            ]
          },
          {
            "q": "Oggi non ho il coraggio di affrontare il capo.",
            "sol": [
              "non",
              "me",
              "la",
              "sento"
            ]
          },
          {
            "q": "Per superare l’esame, promettiamo il massimo impegno.",
            "sol": [
              "ce",
              "la",
              "mettiamo",
              "tutta"
            ]
          },
          {
            "q": "A me non importa affatto di quelle critiche.",
            "sol": [
              "me",
              "ne",
              "frego"
            ]
          },
          {
            "q": "Ti chiedo se hai il coraggio di ricominciare da capo.",
            "sol": [
              "te",
              "la",
              "senti"
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
            "q": "___ per una battuta e ha reagito male. (prendersela)",
            "options": [
              "Se l'è presa",
              "Si l'è presa",
              "Se l'ha presa"
            ],
            "answer": 0
          },
          {
            "q": "___ del giudizio altrui e fa sempre di testa sua. (fregarsene)",
            "options": [
              "Se ne frega",
              "Si ne frega",
              "Se lo frega"
            ],
            "answer": 0
          },
          {
            "q": "Non ___ di affrontare il viaggio. (sentirsela)",
            "options": [
              "me la sento",
              "mi la sento",
              "me lo sento"
            ],
            "answer": 0
          },
          {
            "q": "Per la maratona ___ tutta. (mettercela)",
            "options": [
              "ce l'ho messa",
              "ci l'ho messa",
              "ce l'ho messo"
            ],
            "answer": 0
          },
          {
            "q": "Marco ___ con il vicino da mesi. (avercela)",
            "options": [
              "ce l'ha",
              "ci l'ha",
              "ce lo ha"
            ],
            "answer": 0
          },
          {
            "q": "Non ___ di ricominciare. (sentirsela)",
            "options": [
              "ve la sentite",
              "vi la sentite",
              "ve lo sentite"
            ],
            "answer": 0
          }
        ]
      },
      {
        "type": "Correzione",
        "fmt": "errore",
        "instr": "Individua e clicca la parola sbagliata o la parola di troppo.",
        "items": [
          {
            "q": "Lui si la prende per ogni critica.",
            "wrong": "si",
            "fix": "se"
          },
          {
            "q": "Dei commenti mi ne frego completamente.",
            "wrong": "mi",
            "fix": "me"
          },
          {
            "q": "Oggi non ci la sentiamo di uscire.",
            "wrong": "ci",
            "fix": "ce"
          },
          {
            "q": "Per il progetto ce lo mettiamo tutta.",
            "wrong": "lo",
            "fix": "la"
          },
          {
            "q": "Dopo il litigio, Anna ci l'ha ancora con me.",
            "wrong": "ci",
            "fix": "ce"
          },
          {
            "q": "Davanti a una nuova sfida, non vi la sentite di provarci.",
            "wrong": "vi",
            "fix": "ve"
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
        "instr": "Individua e clicca la parola sbagliata o la parola di troppo.",
        "items": [
          {
            "q": "Ieri pomeriggio vorrei aiutarti, ma non c'ero.",
            "wrong": "vorrei",
            "fix": "avrei voluto"
          },
          {
            "q": "Dovremmo consegnare il progetto ieri, ma non abbiamo finito in tempo.",
            "wrong": "Dovremmo",
            "fix": "Avremmo dovuto"
          },
          {
            "q": "Il collega verrebbe alla festa, ma era malato.",
            "wrong": "verrebbe",
            "fix": "sarebbe venuto"
          },
          {
            "q": "In quel caso potresti avvisarmi, invece hai taciuto.",
            "wrong": "potresti",
            "fix": "avresti potuto"
          },
          {
            "q": "Le ragazze partirebbero prima, ma il maltempo le ha fermate.",
            "wrong": "partirebbero",
            "fix": "sarebbero partite"
          },
          {
            "q": "Ti chiamerei prima, ma non avevo credito.",
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
            "q": "Penso che Marco ___ ragione. (avere)",
            "a": "abbia",
            "no": [
              "ha",
              "abbi",
              "abbiano"
            ]
          },
          {
            "q": "Credo che Marco e Luca ___ in ritardo. (essere)",
            "a": "siano",
            "no": [
              "sono",
              "sia",
              "è"
            ]
          },
          {
            "q": "Spero che tu ___ i compiti. (fare)",
            "a": "faccia",
            "no": [
              "fai",
              "fa",
              "facciamo"
            ]
          },
          {
            "q": "Penso che Marta ___ a casa. (andare)",
            "a": "vada",
            "no": [
              "va",
              "vadi",
              "vanno"
            ]
          },
          {
            "q": "Spero che Marco e Luca ___ presto. (venire)",
            "a": "vengano",
            "no": [
              "vengono",
              "venghino",
              "venga"
            ]
          },
          {
            "q": "Credo che tu ___ la risposta. (sapere)",
            "a": "sappia",
            "no": [
              "sai",
              "sappi",
              "sa"
            ]
          }
        ]
      },
      {
        "type": "Correzione",
        "fmt": "errore",
        "instr": "Individua e clicca la parola sbagliata o la parola di troppo.",
        "items": [
          {
            "q": "Mi pare che Marco abbi torto, ma non vuole ammetterlo.",
            "wrong": "abbi",
            "fix": "abbia"
          },
          {
            "q": "Non credo che Marco e Luca sono pronti per partire.",
            "wrong": "sono",
            "fix": "siano"
          },
          {
            "q": "Dubito che tu fa tutto da solo.",
            "wrong": "fa",
            "fix": "faccia"
          },
          {
            "q": "Immagino che Marta vadi spesso in quell’ufficio.",
            "wrong": "vadi",
            "fix": "vada"
          },
          {
            "q": "Spero che gli ospiti venghino alla riunione in orario.",
            "wrong": "venghino",
            "fix": "vengano"
          },
          {
            "q": "È improbabile che tu sappi già tutti i dettagli.",
            "wrong": "sappi",
            "fix": "sappia"
          }
        ]
      },
      {
        "type": "Trasformazione",
        "fmt": "buco",
        "instr": "Riformula la frase con l’espressione indicata e il congiuntivo presente.",
        "items": [
          {
            "q": "Marco ha un buon motivo. (Non credo che...)",
            "options": [
              "Non credo che Marco abbia un buon motivo.",
              "Non credo che Marco ha un buon motivo.",
              "Non credo che Marco abbiano un buon motivo."
            ],
            "answer": 0
          },
          {
            "q": "I ragazzi sono già pronti. (Dubito che...)",
            "options": [
              "Dubito che i ragazzi siano già pronti.",
              "Dubito che i ragazzi sono già pronti.",
              "Dubito che i ragazzi sia già pronti."
            ],
            "answer": 0
          },
          {
            "q": "Tu fai abbastanza. (Penso che...)",
            "options": [
              "Penso che tu faccia abbastanza.",
              "Penso che tu fai abbastanza.",
              "Penso che tu facciamo abbastanza."
            ],
            "answer": 0
          },
          {
            "q": "Laura va spesso in ufficio. (Non credo che...)",
            "options": [
              "Non credo che Laura vada spesso in ufficio.",
              "Non credo che Laura va spesso in ufficio.",
              "Non credo che Laura vanno spesso in ufficio."
            ],
            "answer": 0
          },
          {
            "q": "Gli ospiti vengono stasera. (Spero che...)",
            "options": [
              "Spero che gli ospiti vengano stasera.",
              "Spero che gli ospiti vengono stasera.",
              "Spero che gli ospiti venga stasera."
            ],
            "answer": 0
          },
          {
            "q": "Tu sai già tutto. (Dubito che...)",
            "options": [
              "Dubito che tu sappia già tutto.",
              "Dubito che tu sai già tutto.",
              "Dubito che tu sa già tutto."
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
            "q": "Dante ___ la Divina Commedia. (scrivere)",
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
            "q": "Gli antichi Greci ___ sacrifici agli dèi. (fare)",
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
        "instr": "Individua e clicca la parola sbagliata o la parola di troppo.",
        "items": [
          {
            "q": "Dante nacque a Firenze e moriva in esilio.",
            "wrong": "moriva",
            "fix": "morì"
          },
          {
            "q": "Colombo partiva da Palos e arrivò in America.",
            "wrong": "partiva",
            "fix": "partì"
          },
          {
            "q": "I Romani costruirono le strade e fondavano le colonie.",
            "wrong": "fondavano",
            "fix": "fondarono"
          },
          {
            "q": "L'artista dipinse il soffitto e riceveva molti premi.",
            "wrong": "riceveva",
            "fix": "ricevette"
          },
          {
            "q": "La città cadde nel 1453 e passava sotto un nuovo governo.",
            "wrong": "passava",
            "fix": "passò"
          },
          {
            "q": "L'esercito conquistò la città e tornava in patria.",
            "wrong": "tornava",
            "fix": "tornò"
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
              "Umberto II divenne re d'Italia nel 1946.",
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
            "q": "Volevo che ___ con noi. (venire)",
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
            "q": "Pensavo che Marco ___ aiutarci. (potere)",
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
        "instr": "Individua e clicca la parola sbagliata o la parola di troppo.",
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
            "q": "Preferivo che guidavate voi stasera.",
            "wrong": "guidavate",
            "fix": "guidaste"
          },
          {
            "q": "Sospettavo che nascondeva qualcosa di importante.",
            "wrong": "nascondeva",
            "fix": "nascondesse"
          },
          {
            "q": "Avevo paura che sbagliavano strada di nuovo.",
            "wrong": "sbagliavano",
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
            "q": "Se vivessi al mare, ___ ogni giorno.",
            "options": [
              "nuoterei",
              "nuotassi",
              "nuoterò"
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
        "instr": "Individua e clicca la parola sbagliata o la parola di troppo.",
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
            "q": "Credevo che ___ arrivati prima. (essere)",
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
        "instr": "Individua e clicca la parola sbagliata o la parola di troppo.",
        "items": [
          {
            "q": "Immaginavo che si era già iscritto al corso.",
            "wrong": "era",
            "fix": "fosse"
          },
          {
            "q": "Supponevo che avevano risolto il guasto.",
            "wrong": "avevano",
            "fix": "avessero"
          },
          {
            "q": "Non sapevo che tu avevi prenotato il tavolo.",
            "wrong": "avevi",
            "fix": "avessi"
          },
          {
            "q": "Dubitavo che voi avevate letto il regolamento.",
            "wrong": "avevate",
            "fix": "aveste"
          },
          {
            "q": "Non credevo che eravamo saliti fino in cima.",
            "wrong": "eravamo",
            "fix": "fossimo"
          },
          {
            "q": "Speravo che ti eri riposato abbastanza.",
            "wrong": "eri",
            "fix": "fossi"
          }
        ]
      },
      {
        "type": "Trasformazione",
        "fmt": "buco",
        "instr": "Riscrivi la frase al passato mantenendo il congiuntivo.",
        "items": [
          {
            "q": "È un peccato che non abbiano avvisato. →",
            "options": [
              "Era un peccato che non avessero avvisato.",
              "Era un peccato che non avevano avvisato.",
              "Era un peccato che non abbiano avvisato."
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
            "q": "Penso che ___ ragione. (adesso)",
            "options": [
              "abbia",
              "avesse",
              "avrà avuto"
            ],
            "answer": 0
          },
          {
            "q": "Pensavo che ___ ragione. (allora)",
            "options": [
              "avesse",
              "abbia",
              "abbia avuto"
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
            "q": "Credevo che ___ partito il giorno prima.",
            "options": [
              "fosse",
              "sia",
              "sarà"
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
            "q": "Mi pareva che ___ tutto bene fino a quel momento.",
            "options": [
              "fosse andato",
              "sia andato",
              "vada"
            ],
            "answer": 0
          }
        ]
      },
      {
        "type": "Correzione",
        "fmt": "errore",
        "instr": "Individua e clicca la parola sbagliata o la parola di troppo.",
        "items": [
          {
            "q": "Pensavo che Marco abbia sbagliato strada e che fosse in ritardo.",
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
        "instr": "Individua e clicca la parola sbagliata o la parola di troppo.",
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
    "title": "Il discorso indiretto al passato",
    "exercises": [
      {
        "type": "Riempimento",
        "fmt": "buco",
        "instr": "Riporta la frase al passato: scegli la forma corretta.",
        "items": [
          {
            "q": "«Arriveremo tardi» → Dissero che ___ tardi.",
            "options": [
              "sarebbero arrivati",
              "arriveranno",
              "arrivassero"
            ],
            "answer": 0
          },
          {
            "q": "«Partirò lunedì» → Annunciò che ___ il lunedì successivo.",
            "options": [
              "sarebbe partito",
              "partirà",
              "partisse"
            ],
            "answer": 0
          },
          {
            "q": "«Vi chiameremo» → Promisero che ci ___.",
            "options": [
              "avrebbero chiamato",
              "chiameranno",
              "chiamassero"
            ],
            "answer": 0
          },
          {
            "q": "«Finirò domani» → Assicurò che ___ il giorno dopo.",
            "options": [
              "avrebbe finito",
              "finirà",
              "finisse"
            ],
            "answer": 0
          },
          {
            "q": "«Ci penseremo» → Dissero che ci ___.",
            "options": [
              "avrebbero pensato",
              "penseranno",
              "pensassero"
            ],
            "answer": 0
          },
          {
            "q": "«Torneranno presto» → Comunicò che ___ presto.",
            "options": [
              "sarebbero tornati",
              "torneranno",
              "tornassero"
            ],
            "answer": 0
          }
        ]
      },
      {
        "type": "Correzione",
        "fmt": "errore",
        "instr": "Individua e clicca la parola sbagliata o la parola di troppo.",
        "items": [
          {
            "q": "Disse che mi scriverà appena possibile.",
            "wrong": "scriverà",
            "fix": "avrebbe scritto"
          },
          {
            "q": "Rispose che ci penserà lui.",
            "wrong": "penserà",
            "fix": "avrebbe pensato"
          },
          {
            "q": "Assicurò che finirà il lavoro entro sera.",
            "wrong": "finirà",
            "fix": "avrebbe finito"
          },
          {
            "q": "Avvertì che non verrà alla riunione.",
            "wrong": "verrà",
            "fix": "sarebbe venuto"
          },
          {
            "q": "Garantì che mi aiuterà con il progetto.",
            "wrong": "aiuterà",
            "fix": "avrebbe aiutato"
          },
          {
            "q": "Scrisse che manderà i documenti in giornata.",
            "wrong": "manderà",
            "fix": "avrebbe mandato"
          }
        ]
      },
      {
        "type": "Trasformazione",
        "fmt": "buco",
        "instr": "Riporta la frase al passato: scegli la versione corretta.",
        "items": [
          {
            "q": "«Arriveremo per le otto», dissero. →",
            "options": [
              "Dissero che sarebbero arrivati per le otto.",
              "Dissero che arriveranno per le otto.",
              "Dissero che arrivavano per le otto."
            ],
            "answer": 0
          },
          {
            "q": "«Me ne occuperò io», rispose. →",
            "options": [
              "Rispose che se ne sarebbe occupato lui.",
              "Rispose che se ne occuperà lui.",
              "Rispose che se ne occupava lui."
            ],
            "answer": 0
          },
          {
            "q": "«Partirò la settimana prossima», annunciò. →",
            "options": [
              "Annunciò che sarebbe partito la settimana dopo.",
              "Annunciò che partirà la settimana dopo.",
              "Annunciò che partiva la settimana dopo."
            ],
            "answer": 0
          },
          {
            "q": "«Vi avviseremo», promisero. →",
            "options": [
              "Promisero che ci avrebbero avvisati.",
              "Promisero che ci avviseranno.",
              "Promisero che ci avvisavano."
            ],
            "answer": 0
          },
          {
            "q": "«Rientreranno a giugno», comunicò. →",
            "options": [
              "Comunicò che sarebbero rientrati a giugno.",
              "Comunicò che rientreranno a giugno.",
              "Comunicò che rientravano a giugno."
            ],
            "answer": 0
          },
          {
            "q": "«Pagheremo il saldo», scrissero. →",
            "options": [
              "Scrissero che avrebbero pagato il saldo.",
              "Scrissero che pagheranno il saldo.",
              "Scrissero che pagavano il saldo."
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
            "q": "Il direttore, ___ ho parlato, è tedesco.",
            "options": [
              "al quale",
              "alla quale",
              "ai quali"
            ],
            "answer": 0
          },
          {
            "q": "La dottoressa, ___ mi sono rivolto, è brava.",
            "options": [
              "alla quale",
              "al quale",
              "alle quali"
            ],
            "answer": 0
          },
          {
            "q": "I colleghi, ___ ho scritto, non rispondono.",
            "options": [
              "ai quali",
              "alle quali",
              "al quale"
            ],
            "answer": 0
          },
          {
            "q": "Le ricerche, ___ si basa il testo, sono recenti.",
            "options": [
              "sulle quali",
              "sui quali",
              "sul quale"
            ],
            "answer": 0
          },
          {
            "q": "Gli strumenti ___ misuriamo la temperatura sono precisi.",
            "options": [
              "con i quali",
              "con le quali",
              "con il quale"
            ],
            "answer": 0
          },
          {
            "q": "I dati, ___ discutiamo, sono riservati.",
            "options": [
              "dei quali",
              "delle quali",
              "del quale"
            ],
            "answer": 0
          }
        ]
      },
      {
        "type": "Correzione",
        "fmt": "errore",
        "instr": "Individua e clicca la parola sbagliata o la parola di troppo.",
        "items": [
          {
            "q": "Il responsabile del reparto, alla quale ho scritto, è assente.",
            "wrong": "alla",
            "fix": "al"
          },
          {
            "q": "La collega, al quale ho parlato, è brava.",
            "wrong": "al",
            "fix": "alla"
          },
          {
            "q": "I tecnici alle quali ho telefonato arriveranno tra poco.",
            "wrong": "alle",
            "fix": "ai"
          },
          {
            "q": "Le prove, sui quali si basa, sono deboli.",
            "wrong": "sui",
            "fix": "sulle"
          },
          {
            "q": "Gli attrezzi da giardino, con le quali lavoro, sono vecchi.",
            "wrong": "le",
            "fix": "i"
          },
          {
            "q": "Tutti i documenti, delle quali parliamo, sono qui.",
            "wrong": "delle",
            "fix": "dei"
          }
        ]
      },
      {
        "type": "Trasformazione",
        "fmt": "buco",
        "instr": "Riscrivi la frase sostituendo «cui» con una forma di «il quale».",
        "items": [
          {
            "q": "Il collega a cui ho scritto. →",
            "options": [
              "Il collega al quale ho scritto.",
              "Il collega alla quale ho scritto.",
              "Il collega ai quali ho scritto."
            ],
            "answer": 0
          },
          {
            "q": "La persona con cui lavoro. →",
            "options": [
              "La persona con la quale lavoro.",
              "La persona con il quale lavoro.",
              "La persona con le quali lavoro."
            ],
            "answer": 0
          },
          {
            "q": "Gli amici di cui parlo. →",
            "options": [
              "Gli amici dei quali parlo.",
              "Gli amici delle quali parlo.",
              "Gli amici del quale parlo."
            ],
            "answer": 0
          },
          {
            "q": "Le regole su cui insistiamo. →",
            "options": [
              "Le regole sulle quali insistiamo.",
              "Le regole sui quali insistiamo.",
              "Le regole sul quale insistiamo."
            ],
            "answer": 0
          },
          {
            "q": "I motivi per cui rifiuto. →",
            "options": [
              "I motivi per i quali rifiuto.",
              "I motivi per le quali rifiuto.",
              "I motivi per il quale rifiuto."
            ],
            "answer": 0
          },
          {
            "q": "Le amiche a cui scrivo. →",
            "options": [
              "Le amiche alle quali scrivo.",
              "Le amiche ai quali scrivo.",
              "Le amiche alla quale scrivo."
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
        "instr": "Individua e clicca la parola sbagliata o la parola di troppo.",
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
            "q": "___ verso casa, ho incontrato Anna. (camminare: azione simultanea)",
            "options": [
              "Camminando",
              "Avendo camminato",
              "Camminato"
            ],
            "answer": 0
          },
          {
            "q": "___ il contratto, ho notato un errore. (leggere: azione simultanea)",
            "options": [
              "Leggendo",
              "Avendo letto",
              "Letto"
            ],
            "answer": 0
          },
          {
            "q": "___ con metodo, ottieni risultati migliori. (studiare: azione simultanea)",
            "options": [
              "Studiando",
              "Avendo studiato",
              "Studiato"
            ],
            "answer": 0
          },
          {
            "q": "___ già quel film, ne abbiamo scelto un altro. (vedere: azione precedente)",
            "options": [
              "Avendo visto",
              "Vedendo",
              "Visto"
            ],
            "answer": 0
          },
          {
            "q": "___ tardi alla stazione, Luca ha perso il treno. (arrivare: azione precedente)",
            "options": [
              "Essendo arrivato",
              "Arrivando",
              "Avendo arrivato"
            ],
            "answer": 0
          },
          {
            "q": "___ il lavoro, siamo andati a casa. (finire: azione precedente)",
            "options": [
              "Avendo finito",
              "Finendo",
              "Essendo finito"
            ],
            "answer": 0
          }
        ]
      },
      {
        "type": "Correzione",
        "fmt": "errore",
        "instr": "Individua e clicca la parola sbagliata o la parola di troppo.",
        "items": [
          {
            "q": "Nello stesso momento, camminare verso casa, parlavo al telefono.",
            "wrong": "camminare",
            "fix": "camminando"
          },
          {
            "q": "Nello stesso momento, ascoltare la musica, preparavo la cena.",
            "wrong": "ascoltare",
            "fix": "ascoltando"
          },
          {
            "q": "Per questo motivo, sapere la risposta, Luca alza subito la mano.",
            "wrong": "sapere",
            "fix": "sapendo"
          },
          {
            "q": "Subito dopo, finendo il lavoro, è uscito.",
            "wrong": "finendo",
            "fix": "avendo finito"
          },
          {
            "q": "Essendo appena arrivando, Marta ha parlato subito con noi.",
            "wrong": "arrivando",
            "fix": "arrivata"
          },
          {
            "q": "Subito dopo, leggendo il messaggio, abbiamo risposto.",
            "wrong": "leggendo",
            "fix": "avendo letto"
          }
        ]
      },
      {
        "type": "Trasformazione",
        "fmt": "buco",
        "instr": "Riscrivi la frase usando il gerundio semplice o composto.",
        "items": [
          {
            "q": "Mentre tornavo a casa, ho incontrato Anna. →",
            "options": [
              "Tornando a casa, ho incontrato Anna.",
              "Avendo tornato a casa, ho incontrato Anna.",
              "Tornato a casa, ho incontrato Anna."
            ],
            "answer": 0
          },
          {
            "q": "Dopo che avevo letto il messaggio, ho risposto. →",
            "options": [
              "Avendo letto il messaggio, ho risposto.",
              "Leggendo il messaggio, ho risposto.",
              "Essendo letto il messaggio, ho risposto."
            ],
            "answer": 0
          },
          {
            "q": "Poiché sapeva la risposta, ha alzato la mano. →",
            "options": [
              "Sapendo la risposta, ha alzato la mano.",
              "Avendo saputo la risposta, ha alzato la mano.",
              "Saputo la risposta, ha alzato la mano."
            ],
            "answer": 0
          },
          {
            "q": "Dopo che era uscita dall’ufficio, Marta ha chiamato un taxi. →",
            "options": [
              "Essendo uscita dall’ufficio, Marta ha chiamato un taxi.",
              "Uscendo dall’ufficio, Marta ha chiamato un taxi.",
              "Avendo uscita dall’ufficio, Marta ha chiamato un taxi."
            ],
            "answer": 0
          },
          {
            "q": "Se studi con metodo, impari più in fretta. →",
            "options": [
              "Studiando con metodo, impari più in fretta.",
              "Avendo studiato con metodo, impari più in fretta.",
              "Studiato con metodo, impari più in fretta."
            ],
            "answer": 0
          },
          {
            "q": "Dopo che avevano finito la riunione, sono usciti. →",
            "options": [
              "Avendo finito la riunione, sono usciti.",
              "Finendo la riunione, sono usciti.",
              "Essendo finito la riunione, sono usciti."
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
        "instr": "Scegli la locuzione o la preposizione adatta alla sfumatura.",
        "items": [
          {
            "q": "Camminiamo ___ il fiume.",
            "options": [
              "lungo",
              "attraverso",
              "presso"
            ],
            "answer": 0
          },
          {
            "q": "La biblioteca si trova ___ l'università.",
            "options": [
              "presso",
              "verso",
              "lungo"
            ],
            "answer": 0
          },
          {
            "q": "I protagonisti fuggono ___ il confine.",
            "options": [
              "oltre",
              "presso",
              "lungo"
            ],
            "answer": 0
          },
          {
            "q": "L'albergo si trova ___ del centro storico.",
            "options": [
              "nei pressi",
              "oltre",
              "lungo"
            ],
            "answer": 0
          },
          {
            "q": "Il treno passa ___ il tunnel.",
            "options": [
              "attraverso",
              "presso",
              "lungo"
            ],
            "answer": 0
          },
          {
            "q": "Il gruppo parte ___ della campagna.",
            "options": [
              "alla volta",
              "per mezzo",
              "a ridosso"
            ],
            "answer": 0
          }
        ]
      },
      {
        "type": "Correzione",
        "fmt": "errore",
        "instr": "Individua e clicca la parola sbagliata o la parola di troppo.",
        "items": [
          {
            "q": "Marco cammina lungo del corridoio.",
            "wrong": "del",
            "fix": "il"
          },
          {
            "q": "Passiamo attraverso della piazza centrale.",
            "wrong": "della",
            "fix": "la"
          },
          {
            "q": "L'albergo è nei pressi la fermata del bus.",
            "wrong": "la",
            "fix": "della"
          },
          {
            "q": "Sono andati oltre del confine di notte.",
            "wrong": "del",
            "fix": "il"
          },
          {
            "q": "Lo studio si trova al di là la piazza.",
            "wrong": "la",
            "fix": "della"
          },
          {
            "q": "Il gruppo partì alla volta a Roma.",
            "wrong": "a",
            "fix": "di"
          }
        ]
      },
      {
        "type": "Trasformazione",
        "fmt": "buco",
        "instr": "Scegli la frase che rende la sfumatura indicata.",
        "items": [
          {
            "q": "La macchina segue il percorso della strada senza attraversarla.",
            "options": [
              "La macchina procede lungo la strada.",
              "La macchina procede attraverso la strada.",
              "La macchina procede presso la strada."
            ],
            "answer": 0
          },
          {
            "q": "Passiamo da un lato all’altro della piazza.",
            "options": [
              "Attraversiamo la piazza.",
              "Procediamo lungo la piazza.",
              "Andiamo presso la piazza."
            ],
            "answer": 0
          },
          {
            "q": "Il nostro viaggio ha Milano come destinazione.",
            "options": [
              "Partiamo alla volta di Milano.",
              "Partiamo a ridosso di Milano.",
              "Partiamo lungo Milano."
            ],
            "answer": 0
          },
          {
            "q": "I protagonisti superano il confine e proseguono il viaggio.",
            "options": [
              "Sono andati oltre il confine.",
              "Sono andati lungo il confine.",
              "Sono andati presso il confine."
            ],
            "answer": 0
          },
          {
            "q": "Marco vive vicino allo stadio.",
            "options": [
              "Abita nei pressi dello stadio.",
              "Abita alla volta dello stadio.",
              "Abita oltre lo stadio, molto vicino."
            ],
            "answer": 0
          },
          {
            "q": "Giulia lavora nella sede dell’università.",
            "options": [
              "Lavora presso l'università.",
              "Lavora lungo l'università.",
              "Lavora oltre l'università."
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
            "q": "Dopo ___, siamo usciti. (mangiare)",
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
            "q": "Dopo ___, si è sentito meglio. (riposarsi)",
            "options": [
              "essersi riposato",
              "riposarsi",
              "riposandosi"
            ],
            "answer": 0
          },
          {
            "q": "Dopo ___ in hotel, sono usciti a cena. (arrivare)",
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
        "instr": "Individua e clicca la parola sbagliata o la parola di troppo.",
        "items": [
          {
            "q": "Ieri, dopo cenare, siamo usciti a passeggiare.",
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
            "q": "Ha aperto le finestre dopo alzarsi.",
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
              "Il dormire poco stanca.",
              "Dormendo poco stanca.",
              "Dormito poco stanca."
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
        "instr": "Individua e clicca la parola sbagliata o la parola di troppo.",
        "items": [
          {
            "q": "Poiché fosse già tardi, siamo rientrati subito.",
            "wrong": "fosse",
            "fix": "era"
          },
          {
            "q": "Siccome avesse fame, Marta ha ordinato un panino.",
            "wrong": "avesse",
            "fix": "aveva"
          },
          {
            "q": "Dato che sia in ritardo, avvisiamo il cliente.",
            "wrong": "sia",
            "fix": "è"
          },
          {
            "q": "Visto che il negozio fosse chiuso, siamo tornati indietro.",
            "wrong": "fosse",
            "fix": "era"
          },
          {
            "q": "Dal momento che abbia perso il treno, Luca arriverà più tardi.",
            "wrong": "abbia",
            "fix": "ha"
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
            "q": "Le vendite sono aumentate. L'azienda ha aperto due nuove filiali.",
            "options": [
              "Il mercato è cresciuto, di conseguenza hanno aperto due filiali.",
              "Il mercato è cresciuto, poiché hanno aperto due filiali.",
              "Il mercato è cresciuto, siccome hanno aperto."
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
        "instr": "Individua e clicca la parola sbagliata o la parola di troppo.",
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
        "instr": "Scegli la forma verbale corretta.",
        "items": [
          {
            "q": "Cerco una segretaria che ___ il tedesco. (non so se esiste)",
            "options": [
              "sappia",
              "sa",
              "saprebbe"
            ],
            "answer": 0
          },
          {
            "q": "Ho una segretaria che ___ il tedesco. (esiste)",
            "options": [
              "sa",
              "sappia",
              "sapesse"
            ],
            "answer": 0
          },
          {
            "q": "Voglio un ufficio che ___ luminoso. (ancora da trovare)",
            "options": [
              "sia",
              "è",
              "sarebbe"
            ],
            "answer": 0
          },
          {
            "q": "Ho un ufficio che ___ luminoso. (ce l'ho)",
            "options": [
              "è",
              "sia",
              "fosse"
            ],
            "answer": 0
          },
          {
            "q": "Non c'è nessuno che ___ risolvere il problema.",
            "options": [
              "sappia",
              "sa",
              "saprebbe"
            ],
            "answer": 0
          },
          {
            "q": "C'è una persona che ___ risolvere il problema.",
            "options": [
              "sa",
              "sappia",
              "sapesse"
            ],
            "answer": 0
          }
        ]
      },
      {
        "type": "Correzione",
        "fmt": "errore",
        "instr": "Individua e clicca la parola sbagliata o la parola di troppo.",
        "items": [
          {
            "q": "Cerco da tempo un collaboratore che parla cinese, ma non l'ho ancora trovato.",
            "wrong": "parla",
            "fix": "parli"
          },
          {
            "q": "Conosco personalmente un tecnico che ripari le caldaie.",
            "wrong": "ripari",
            "fix": "ripara"
          },
          {
            "q": "Da anni cerco una casa che ha un giardino, ma non l’ho ancora trovata.",
            "wrong": "ha",
            "fix": "abbia"
          },
          {
            "q": "Vivo già in un palazzo che abbia l’ascensore.",
            "wrong": "abbia",
            "fix": "ha"
          },
          {
            "q": "Non conosco nessuno che sa rispondere.",
            "wrong": "sa",
            "fix": "sappia"
          },
          {
            "q": "Ho un amico che sappia risolvere questo tipo di problema.",
            "wrong": "sappia",
            "fix": "sa"
          }
        ]
      },
      {
        "type": "Trasformazione",
        "fmt": "buco",
        "instr": "Scegli la frase adatta alla situazione.",
        "items": [
          {
            "q": "Sto cercando un idraulico disponibile la domenica, ma non so se esista.",
            "options": [
              "Cerco un idraulico che sia disponibile la domenica.",
              "Cerco un idraulico che è disponibile la domenica.",
              "Cerco un idraulico che fosse disponibile."
            ],
            "answer": 0
          },
          {
            "q": "Ho già trovato un idraulico disponibile la domenica.",
            "options": [
              "Ho un idraulico che è disponibile la domenica.",
              "Ho un idraulico che sia disponibile la domenica.",
              "Ho un idraulico che fosse disponibile."
            ],
            "answer": 0
          },
          {
            "q": "Non esiste nessuno capace di tradurre subito.",
            "options": [
              "Non c'è nessuno che sappia tradurre subito.",
              "Non c'è nessuno che sa tradurre subito.",
              "Non c'è nessuno che saprebbe tradurre."
            ],
            "answer": 0
          },
          {
            "q": "Qui c'è qualcuno capace di tradurre subito.",
            "options": [
              "C'è una persona che sa tradurre subito.",
              "C'è una persona che sappia tradurre subito.",
              "C'è una persona che sapesse tradurre."
            ],
            "answer": 0
          },
          {
            "q": "Sto ancora cercando un appartamento con terrazzo.",
            "options": [
              "Cerco un appartamento che abbia il terrazzo.",
              "Cerco un appartamento che ha il terrazzo.",
              "Cerco un appartamento che avesse il terrazzo."
            ],
            "answer": 0
          },
          {
            "q": "Abito già in un appartamento con terrazzo.",
            "options": [
              "Abito in un appartamento che ha il terrazzo.",
              "Abito in un appartamento che abbia il terrazzo.",
              "Abito in un appartamento che avesse il terrazzo."
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
      "B2 L29"
    ],
    "title": "Il costrutto causativo (far fare, farsi fare, lasciare + infinito)",
    "exercises": [
      {
        "type": "Composizione",
        "fmt": "ordina",
        "instr": "Clicca le parole nell'ordine giusto.",
        "items": [
          {
            "q": "La macchina era guasta e l’ho portata dal meccanico.",
            "sol": [
              "ho",
              "fatto",
              "riparare",
              "la",
              "macchina"
            ]
          },
          {
            "q": "Sono andato dal parrucchiere perché avevo i capelli troppo lunghi.",
            "sol": [
              "mi",
              "sono",
              "fatto",
              "tagliare",
              "i",
              "capelli"
            ]
          },
          {
            "q": "Marco doveva vedere il documento che avevo con me.",
            "sol": [
              "gliel'ho",
              "fatto",
              "vedere"
            ]
          },
          {
            "q": "Voglio vedere la foto che hai sul telefono.",
            "sol": [
              "fammi",
              "vedere",
              "la",
              "foto"
            ]
          },
          {
            "q": "I genitori permettono ai bambini di giocare fuori.",
            "sol": [
              "li",
              "lasciano",
              "giocare"
            ]
          },
          {
            "q": "Il capo ci dà il permesso di uscire prima.",
            "sol": [
              "ci",
              "lascia",
              "uscire"
            ]
          }
        ]
      },
      {
        "type": "Riempimento",
        "fmt": "buco",
        "instr": "Scegli la forma corretta del causativo.",
        "items": [
          {
            "q": "___ dipingere le pareti dall'imbianchino. (io)",
            "options": [
              "Ho fatto",
              "Ho fatta",
              "Sono fatto"
            ],
            "answer": 0
          },
          {
            "q": "___ fare un vestito su misura. (io, uomo, da un sarto)",
            "options": [
              "Mi sono fatto",
              "Mi ho fatto",
              "Ho fatto mi"
            ],
            "answer": 0
          },
          {
            "q": "Il maestro ___ ripetere la poesia.",
            "options": [
              "ci ha fatto",
              "ci ha fatti",
              "ci è fatto"
            ],
            "answer": 0
          },
          {
            "q": "___ installare il condizionatore. (loro, uomini)",
            "options": [
              "Si sono fatti",
              "Si hanno fatti",
              "Hanno fatti si"
            ],
            "answer": 0
          },
          {
            "q": "Il direttore ci ___ andare via alle quattro.",
            "options": [
              "lascia",
              "fa",
              "lascia di"
            ],
            "answer": 0
          },
          {
            "q": "I genitori lo ___ usare il computer dopo cena.",
            "options": [
              "lasciano",
              "fanno a",
              "lasciano di"
            ],
            "answer": 0
          }
        ]
      },
      {
        "type": "Correzione",
        "fmt": "errore",
        "instr": "Individua e clicca la parola sbagliata o la parola di troppo.",
        "items": [
          {
            "q": "Ho fatto dipinta la parete dall'imbianchino.",
            "wrong": "dipinta",
            "fix": "dipingere"
          },
          {
            "q": "Mi ho fatto fare un vestito nuovo.",
            "wrong": "ho",
            "fix": "sono"
          },
          {
            "q": "L'allenatore ci ha fatto correndo per un'ora.",
            "wrong": "correndo",
            "fix": "correre"
          },
          {
            "q": "Il responsabile ci lascia usciti prima quando il lavoro è finito.",
            "wrong": "usciti",
            "fix": "uscire"
          },
          {
            "q": "I genitori lasciano giocando i bambini in giardino.",
            "wrong": "giocando",
            "fix": "giocare"
          },
          {
            "q": "Si l'è fatto spedire dal corriere.",
            "wrong": "Si",
            "fix": "Se"
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
        "instr": "Scegli il connettivo adatto alla relazione.",
        "items": [
          {
            "q": "L'ipotesi è suggestiva; ___, mancano prove sperimentali.",
            "options": [
              "tuttavia",
              "pertanto",
              "anzi"
            ],
            "answer": 0
          },
          {
            "q": "Non si è limitato a rifiutare; ___, ha criticato l'intero progetto.",
            "options": [
              "anzi",
              "tuttavia",
              "dunque"
            ],
            "answer": 0
          },
          {
            "q": "I dati sono parziali; ___, meritano attenzione.",
            "options": [
              "nondimeno",
              "pertanto",
              "ossia"
            ],
            "answer": 0
          },
          {
            "q": "Mancavano fondi; ___, il progetto fu sospeso.",
            "options": [
              "di conseguenza",
              "tuttavia",
              "ossia"
            ],
            "answer": 0
          },
          {
            "q": "È un termine specialistico, ___ appartiene al linguaggio tecnico.",
            "options": [
              "ossia",
              "tuttavia",
              "dunque"
            ],
            "answer": 0
          },
          {
            "q": "Il saggio elenca molti dati; ___, non li interpreta.",
            "options": [
              "peraltro",
              "quindi",
              "cioè"
            ],
            "answer": 0
          }
        ]
      },
      {
        "type": "Scelta",
        "fmt": "buco",
        "instr": "Scegli il connettivo adatto alla relazione.",
        "items": [
          {
            "q": "Se hai già letto la lista dei finalisti, ___ dovresti sapere chi è il vincitore.",
            "options": [
              "a maggior ragione",
              "ciononostante",
              "in altre parole"
            ],
            "answer": 0
          },
          {
            "q": "Le sue opere sono tradotte in quaranta lingue; ___, è l’autrice italiana più letta.",
            "options": [
              "non a caso",
              "tuttavia",
              "più precisamente"
            ],
            "answer": 0
          },
          {
            "q": "Tutti dicevano che era un capolavoro; ___, a me non è piaciuto.",
            "options": [
              "eppure",
              "non a caso",
              "in definitiva"
            ],
            "answer": 0
          },
          {
            "q": "___, il libro merita di essere letto nonostante i difetti.",
            "options": [
              "In definitiva",
              "Per di più",
              "D'altronde"
            ],
            "answer": 0
          },
          {
            "q": "Usa un narratore inattendibile; ___, chi racconta non dice tutta la verità.",
            "options": [
              "in altre parole",
              "a maggior ragione",
              "non a caso"
            ],
            "answer": 0
          },
          {
            "q": "Sembra un romanzo leggero; ___, affronta temi molto profondi.",
            "options": [
              "a ben vedere",
              "in particolare",
              "in definitiva"
            ],
            "answer": 0
          }
        ]
      },
      {
        "type": "Trasformazione",
        "fmt": "buco",
        "instr": "Collega le due frasi con il connettivo adatto alla relazione indicata.",
        "items": [
          {
            "q": "Non ha taciuto. Ha parlato apertamente. (rafforzamento)",
            "options": [
              "Non ha taciuto; anzi, ha parlato apertamente.",
              "Non ha taciuto; tuttavia, ha parlato apertamente.",
              "Non ha taciuto; ossia, ha parlato apertamente."
            ],
            "answer": 0
          },
          {
            "q": "La ricerca è costosa. I risultati sono però molto promettenti. (contrapposizione)",
            "options": [
              "La ricerca è costosa; per contro, i risultati sono molto promettenti.",
              "La ricerca è costosa; difatti, i risultati sono molto promettenti.",
              "La ricerca è costosa; ossia, i risultati sono molto promettenti."
            ],
            "answer": 0
          },
          {
            "q": "Mancavano risorse. Il piano fu abbandonato. (conseguenza)",
            "options": [
              "Mancavano risorse; di conseguenza, il piano fu abbandonato.",
              "Mancavano risorse; semmai, il piano fu abbandonato.",
              "Mancavano risorse; peraltro, il piano fu abbandonato."
            ],
            "answer": 0
          },
          {
            "q": "Era impreparato. Ha superato la prova. (opposizione forte)",
            "options": [
              "Era impreparato; ciononostante, ha superato la prova.",
              "Era impreparato; pertanto, ha superato la prova.",
              "Era impreparato; difatti, ha superato la prova."
            ],
            "answer": 0
          },
          {
            "q": "Si tratta di un refuso. È un errore di stampa. (riformulazione)",
            "options": [
              "Si tratta di un refuso, ossia di un errore di stampa.",
              "Si tratta di un refuso, tuttavia di un errore di stampa.",
              "Si tratta di un refuso, semmai di un errore di stampa."
            ],
            "answer": 0
          },
          {
            "q": "L'analisi è rigorosa. Le conclusioni sono affidabili. (conseguenza logica)",
            "options": [
              "L'analisi è rigorosa; pertanto, le conclusioni sono affidabili.",
              "L'analisi è rigorosa; semmai, le conclusioni sono affidabili.",
              "L'analisi è rigorosa; per contro, le conclusioni sono affidabili."
            ],
            "answer": 0
          }
        ]
      }
    ],
    "lez": [
      "C1 L1",
      "C1 L9",
      "C1 L16",
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
        "type": "Riempimento",
        "fmt": "buco",
        "instr": "Scegli i tempi corretti nell'espressione iperbolica.",
        "items": [
          {
            "q": "Se te lo ___ mille volte, non cambierebbe nulla.",
            "options": [
              "dicessi",
              "dico",
              "direi"
            ],
            "answer": 0
          },
          {
            "q": "Se avessi un euro per ogni scusa, ___ ricco.",
            "options": [
              "sarei",
              "fossi",
              "sarò"
            ],
            "answer": 0
          },
          {
            "q": "Se ___ per lui, staremmo ancora qui a discutere.",
            "options": [
              "fosse",
              "sarebbe",
              "è"
            ],
            "answer": 0
          },
          {
            "q": "Se dovessi aspettare te, ___ sempre al palo.",
            "options": [
              "sarei",
              "fossi",
              "sarò"
            ],
            "answer": 0
          },
          {
            "q": "Se le parole ___ oro, sarebbe milionario.",
            "options": [
              "fossero",
              "sarebbero",
              "sono"
            ],
            "answer": 0
          },
          {
            "q": "Se ci fosse un premio per i ritardi, lo ___ lui.",
            "options": [
              "vincerebbe",
              "vincesse",
              "vince"
            ],
            "answer": 0
          }
        ]
      },
      {
        "type": "Correzione",
        "fmt": "errore",
        "instr": "Individua e clicca la parola sbagliata o la parola di troppo.",
        "items": [
          {
            "q": "Se avrei un centesimo per ogni ritardo, comprerei una casa.",
            "wrong": "avrei",
            "fix": "avessi"
          },
          {
            "q": "Se glielo spiegassi in dieci lingue, non capissi comunque.",
            "wrong": "capissi",
            "fix": "capirebbe"
          },
          {
            "q": "Se sarebbe per mia madre, mangerei ogni due ore.",
            "wrong": "sarebbe",
            "fix": "fosse"
          },
          {
            "q": "Se dovrei riordinare tutta questa roba, ci vorrebbe un mese.",
            "wrong": "dovrei",
            "fix": "dovessi"
          },
          {
            "q": "Se le scuse sarebbero medaglie, ne avrebbe un cassetto pieno.",
            "wrong": "sarebbero",
            "fix": "fossero"
          },
          {
            "q": "Se esistesse un record di distrazione, lo detenesse lui.",
            "wrong": "detenesse",
            "fix": "deterrebbe"
          }
        ]
      },
      {
        "type": "Trasformazione",
        "fmt": "buco",
        "instr": "Rendi l'esagerazione con il periodo ipotetico.",
        "items": [
          {
            "q": "Si lamenta continuamente. (una moneta per ogni lamentela)",
            "options": [
              "Se avessi una moneta per ogni sua lamentela, sarei ricco.",
              "Se avrei una moneta per ogni lamentela, sarei ricco.",
              "Se ho una moneta per ogni lamentela, sarò ricco."
            ],
            "answer": 0
          },
          {
            "q": "Non capisce mai. (ripeterlo cento volte)",
            "options": [
              "Se glielo ripetessi cento volte, non capirebbe lo stesso.",
              "Se glielo ripeterei cento volte, non capirebbe.",
              "Se glielo ripeto cento volte, non capisce."
            ],
            "answer": 0
          },
          {
            "q": "Decide sempre lui. (dipendesse da lui)",
            "options": [
              "Se dipendesse da lui, non cambieremmo mai nulla.",
              "Se dipenderebbe da lui, non cambieremmo nulla.",
              "Se dipende da lui, non cambiamo nulla."
            ],
            "answer": 0
          },
          {
            "q": "Ha mille difetti. (doverli elencare)",
            "options": [
              "Se dovessi elencare i suoi difetti, non finirei più.",
              "Se dovrei elencare i suoi difetti, non finirei.",
              "Se devo elencare i suoi difetti, non finisco."
            ],
            "answer": 0
          },
          {
            "q": "Promette e non mantiene. (le promesse come soldi)",
            "options": [
              "Se le promesse fossero soldi, sarebbe milionario.",
              "Se le promesse sarebbero soldi, sarebbe milionario.",
              "Se le promesse sono soldi, è milionario."
            ],
            "answer": 0
          },
          {
            "q": "È lentissimo. (una gara di lentezza)",
            "options": [
              "Se ci fosse una gara di lentezza, la vincerebbe lui.",
              "Se ci sarebbe una gara di lentezza, la vincerebbe.",
              "Se c'è una gara di lentezza, la vince lui."
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
        "type": "Riempimento",
        "fmt": "buco",
        "instr": "Scegli la forma corretta per esprimere il significato indicato.",
        "items": [
          {
            "q": "___ meno plastica, si riduce l'inquinamento. (condizione)",
            "options": [
              "Usando",
              "Usato",
              "Uso"
            ],
            "answer": 0
          },
          {
            "q": "___ la raccolta, il quartiere è più pulito. (causa)",
            "options": [
              "Essendo migliorata",
              "Migliorando",
              "Migliorata essendo"
            ],
            "answer": 0
          },
          {
            "q": "___ l'etichetta, ho capito la provenienza. (tempo)",
            "options": [
              "Letta",
              "Leggente",
              "Legge"
            ],
            "answer": 0
          },
          {
            "q": "___ in bicicletta, inquini meno. (condizione)",
            "options": [
              "Andando",
              "Andato",
              "Andare"
            ],
            "answer": 0
          },
          {
            "q": "___ pochi rifiuti, l’impianto riduce i costi di smaltimento. (causa)",
            "options": [
              "Producendo",
              "Prodotto",
              "Produrre"
            ],
            "answer": 0
          },
          {
            "q": "Una volta ___ il progetto, hanno chiesto i fondi. (tempo)",
            "options": [
              "Approvato",
              "Approvando essere",
              "Approvare"
            ],
            "answer": 0
          }
        ]
      },
      {
        "type": "Correzione",
        "fmt": "errore",
        "instr": "Individua e clicca la parola sbagliata o la parola di troppo.",
        "items": [
          {
            "q": "Solo riciclato la carta, si salvano alberi.",
            "wrong": "riciclato",
            "fix": "riciclando"
          },
          {
            "q": "Una volta concludendo la riunione, la sala è rimasta vuota.",
            "wrong": "concludendo",
            "fix": "conclusa"
          },
          {
            "q": "Una volta terminando i lavori, la strada è stata riaperta al traffico.",
            "wrong": "terminando",
            "fix": "terminati"
          },
          {
            "q": "Camminato ogni giorno, si sta meglio.",
            "wrong": "Camminato",
            "fix": "Camminando"
          },
          {
            "q": "Ricevendo la conferma, abbiamo prenotato subito il viaggio.",
            "wrong": "Ricevendo",
            "fix": "Ricevuta"
          },
          {
            "q": "Evitato semplicemente gli sprechi, si risparmia molto.",
            "wrong": "Evitato",
            "fix": "Evitando"
          }
        ]
      },
      {
        "type": "Trasformazione",
        "fmt": "buco",
        "instr": "Riscrivi la frase usando un gerundio o un participio.",
        "items": [
          {
            "q": "Se separi i rifiuti, aiuti l'ambiente. →",
            "options": [
              "Separando i rifiuti, aiuti l'ambiente.",
              "Separato i rifiuti, aiuti l'ambiente.",
              "Separare i rifiuti, aiuti l'ambiente."
            ],
            "answer": 0
          },
          {
            "q": "Dopo che ebbe letto la relazione, firmò. →",
            "options": [
              "Letta la relazione, firmò.",
              "Leggendo la relazione, firmò.",
              "Leggere la relazione, firmò."
            ],
            "answer": 0
          },
          {
            "q": "Poiché abita lontano, parte presto. →",
            "options": [
              "Abitando lontano, parte presto.",
              "Abitato lontano, parte presto.",
              "Abitare lontano, parte presto."
            ],
            "answer": 0
          },
          {
            "q": "Dopo che ebbero terminato la cena, uscirono. →",
            "options": [
              "Terminata la cena, uscirono.",
              "Terminando la cena, uscirono.",
              "Terminare la cena, uscirono."
            ],
            "answer": 0
          },
          {
            "q": "Poiché non aveva l'auto, prese il treno. →",
            "options": [
              "Non avendo l'auto, prese il treno.",
              "Non avuto l'auto, prese il treno.",
              "Non avere l'auto, prese il treno."
            ],
            "answer": 0
          },
          {
            "q": "Se usi meno l'auto, risparmi carburante. →",
            "options": [
              "Usando meno l'auto, risparmi carburante.",
              "Usato meno l'auto, risparmi carburante.",
              "Usare meno l'auto, risparmi carburante."
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
        "instr": "Scegli la forma passiva corretta nel tempo richiesto dal contesto.",
        "items": [
          {
            "q": "Ogni mattina i documenti ___ dal responsabile.",
            "options": [
              "sono controllati",
              "erano controllati",
              "saranno controllati"
            ],
            "answer": 0
          },
          {
            "q": "Ieri la proposta ___ dalla commissione.",
            "options": [
              "è stata approvata",
              "era approvata",
              "sarà approvata"
            ],
            "answer": 0
          },
          {
            "q": "Quando lavoravo lì, le richieste ___ entro due giorni.",
            "options": [
              "erano esaminate",
              "sono esaminate",
              "saranno esaminate"
            ],
            "answer": 0
          },
          {
            "q": "I risultati ___ sul sito domani mattina.",
            "options": [
              "saranno pubblicati",
              "sono stati pubblicati",
              "erano pubblicati"
            ],
            "answer": 0
          },
          {
            "q": "Con più personale, il lavoro ___ in meno tempo.",
            "options": [
              "sarebbe completato",
              "sarà completato",
              "era completato"
            ],
            "answer": 0
          },
          {
            "q": "È possibile che il contratto ___ entro oggi.",
            "options": [
              "sia firmato",
              "è firmato",
              "sarebbe firmato"
            ],
            "answer": 0
          }
        ]
      },
      {
        "type": "Correzione",
        "fmt": "errore",
        "instr": "Individua e clicca la parola sbagliata o la parola di troppo.",
        "items": [
          {
            "q": "La merce è consegnata ieri mattina.",
            "wrong": "è",
            "fix": "è stata"
          },
          {
            "q": "Durante gli anni Novanta, molte pratiche sono archiviate su carta.",
            "wrong": "sono",
            "fix": "erano"
          },
          {
            "q": "La prossima settimana, le nuove regole sono applicate in tutti gli uffici.",
            "wrong": "sono",
            "fix": "saranno"
          },
          {
            "q": "Senza il guasto di ieri, il ponte sarà stato riaperto già ieri sera.",
            "wrong": "sarà",
            "fix": "sarebbe"
          },
          {
            "q": "Non credo che la sala è stata prenotata per domani.",
            "wrong": "è",
            "fix": "sia"
          },
          {
            "q": "Quando tornammo, le finestre sono già state chiuse.",
            "wrong": "sono",
            "fix": "erano"
          }
        ]
      },
      {
        "type": "Trasformazione",
        "fmt": "buco",
        "instr": "Volgi al passivo mantenendo lo stesso tempo verbale.",
        "items": [
          {
            "q": "Gli addetti puliscono le sale ogni sera. →",
            "options": [
              "Le sale sono pulite dagli addetti ogni sera.",
              "Le sale erano pulite dagli addetti ogni sera.",
              "Le sale saranno pulite dagli addetti ogni sera."
            ],
            "answer": 0
          },
          {
            "q": "I tecnici hanno riparato l'ascensore ieri. →",
            "options": [
              "L'ascensore è stato riparato dai tecnici ieri.",
              "L'ascensore era riparato dai tecnici ieri.",
              "L'ascensore sarà riparato dai tecnici ieri."
            ],
            "answer": 0
          },
          {
            "q": "Un custode chiudeva il cancello alle ventidue. →",
            "options": [
              "Il cancello era chiuso da un custode alle ventidue.",
              "Il cancello è chiuso da un custode alle ventidue.",
              "Il cancello sarà chiuso da un custode alle ventidue."
            ],
            "answer": 0
          },
          {
            "q": "Il comune inaugurerà la biblioteca domani. →",
            "options": [
              "La biblioteca sarà inaugurata dal comune domani.",
              "La biblioteca è stata inaugurata dal comune domani.",
              "La biblioteca era inaugurata dal comune domani."
            ],
            "answer": 0
          },
          {
            "q": "Con un budget maggiore, l'impresa restaurerebbe la facciata. →",
            "options": [
              "Con un budget maggiore, la facciata sarebbe restaurata dall'impresa.",
              "Con un budget maggiore, la facciata sarà restaurata dall'impresa.",
              "Con un budget maggiore, la facciata era restaurata dall'impresa."
            ],
            "answer": 0
          },
          {
            "q": "È probabile che la giuria scelga il vincitore oggi. →",
            "options": [
              "È probabile che il vincitore sia scelto oggi dalla giuria.",
              "È probabile che il vincitore è scelto oggi dalla giuria.",
              "È probabile che il vincitore sarebbe scelto oggi dalla giuria."
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
    "lez": [
      "C1 L8",
      "C1 L20"
    ],
    "title": "Il discorso indiretto in contesto professionale",
    "exercises": [
      {
        "type": "Riempimento",
        "fmt": "buco",
        "instr": "Riferisci oggi, da un momento successivo, parole dette ieri in ambito professionale: scegli la forma coerente.",
        "items": [
          {
            "q": "«Consegnerò domani» → Scrisse che ___ il giorno dopo.",
            "options": [
              "avrebbe consegnato",
              "consegnerà",
              "consegnasse"
            ],
            "answer": 0
          },
          {
            "q": "«Il progetto è in ritardo» → Ammise che il progetto ___ in ritardo.",
            "options": [
              "era",
              "è",
              "fosse"
            ],
            "answer": 0
          },
          {
            "q": "«Abbiamo risolto il problema» → Comunicarono che ___ il problema.",
            "options": [
              "avevano risolto",
              "hanno risolto",
              "avessero risolto"
            ],
            "answer": 0
          },
          {
            "q": "«Non posso partecipare» → Rispose che non ___ partecipare.",
            "options": [
              "poteva",
              "può",
              "potesse"
            ],
            "answer": 0
          },
          {
            "q": "«Vi manderò il preventivo» → Assicurò che ci ___ il preventivo.",
            "options": [
              "avrebbe mandato",
              "manderà",
              "mandasse"
            ],
            "answer": 0
          },
          {
            "q": "«Rispondete entro martedì» → Sollecitò una risposta entro il martedì ___.",
            "options": [
              "successivo",
              "prossimo",
              "scorso"
            ],
            "answer": 0
          }
        ]
      },
      {
        "type": "Correzione",
        "fmt": "errore",
        "instr": "Individua e clicca la parola sbagliata o la parola di troppo.",
        "items": [
          {
            "q": "La responsabile disse che avrebbe risposto oggi stesso.",
            "wrong": "oggi",
            "fix": "quel giorno"
          },
          {
            "q": "Segnalò che il pagamento è arrivato il mese prima.",
            "wrong": "è",
            "fix": "era"
          },
          {
            "q": "Scrisse che sarebbe passato qui in mattinata.",
            "wrong": "qui",
            "fix": "lì"
          },
          {
            "q": "Garantì che consegnerà il materiale entro la fine del mese.",
            "wrong": "consegnerà",
            "fix": "avrebbe consegnato"
          },
          {
            "q": "Riconobbe che il preventivo è troppo alto per il cliente.",
            "wrong": "è",
            "fix": "era"
          },
          {
            "q": "Verificò che hanno registrato tutte le fatture fino ad allora.",
            "wrong": "hanno",
            "fix": "avevano"
          }
        ]
      },
      {
        "type": "Trasformazione",
        "fmt": "buco",
        "instr": "Trasforma in discorso indiretto collocando il resoconto in un momento successivo.",
        "items": [
          {
            "q": "«Invierò il rapporto domani», scrisse il responsabile. →",
            "options": [
              "Il responsabile scrisse che avrebbe inviato il rapporto il giorno dopo.",
              "Il responsabile scrisse che invierà il rapporto domani.",
              "Il responsabile scrisse che inviava il rapporto domani."
            ],
            "answer": 0
          },
          {
            "q": "«Il budget è insufficiente», ammise il direttore. →",
            "options": [
              "Il direttore ammise che il budget era insufficiente.",
              "Il direttore ammise che il budget è insufficiente.",
              "Il direttore ammise che il budget fosse insufficiente."
            ],
            "answer": 0
          },
          {
            "q": "«Abbiamo chiuso il contratto ieri», comunicarono. →",
            "options": [
              "Comunicarono che avevano chiuso il contratto il giorno prima.",
              "Comunicarono che hanno chiuso il contratto ieri.",
              "Comunicarono che chiudevano il contratto ieri."
            ],
            "answer": 0
          },
          {
            "q": "«Ci occuperemo noi della spedizione», assicurarono. →",
            "options": [
              "Assicurarono che si sarebbero occupati loro della spedizione.",
              "Assicurarono che si occuperanno loro della spedizione.",
              "Assicurarono che si occupavano loro della spedizione."
            ],
            "answer": 0
          },
          {
            "q": "«Questo preventivo è troppo alto», obiettò. →",
            "options": [
              "Obiettò che quel preventivo era troppo alto.",
              "Obiettò che questo preventivo è troppo alto.",
              "Obiettò che quel preventivo fosse troppo alto."
            ],
            "answer": 0
          },
          {
            "q": "«Il fornitore ha sbagliato l'ordine», riferì. →",
            "options": [
              "Riferì che il fornitore aveva sbagliato l'ordine.",
              "Riferì che il fornitore ha sbagliato l'ordine.",
              "Riferì che il fornitore avesse sbagliato l'ordine."
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
      "C1 L8"
    ],
    "title": "La concordanza dei tempi nella narrazione",
    "exercises": [
      {
        "type": "Riempimento",
        "fmt": "buco",
        "instr": "Nel racconto al passato, scegli la forma verbale corretta.",
        "items": [
          {
            "q": "Ci spiegò che il ritardo ___ da un guasto. (causa anteriore)",
            "options": [
              "era dipeso",
              "dipende",
              "dipenderà"
            ],
            "answer": 0
          },
          {
            "q": "Disse che il giorno dopo ___ una soluzione. (posteriore)",
            "options": [
              "avrebbe proposto",
              "proporrà",
              "proponeva"
            ],
            "answer": 0
          },
          {
            "q": "Raccontò che in quel momento ___ i dati. (contemporanea)",
            "options": [
              "stava controllando",
              "sta controllando",
              "avrebbe controllato"
            ],
            "answer": 0
          },
          {
            "q": "Ammise che ___ un errore nel preventivo. (anteriore)",
            "options": [
              "aveva commesso",
              "ha commesso",
              "commetterà"
            ],
            "answer": 0
          },
          {
            "q": "Aggiunse che ___ tutti entro sera. (posteriore)",
            "options": [
              "avrebbe avvisato",
              "avviserà",
              "avvisava"
            ],
            "answer": 0
          },
          {
            "q": "Riferì che in quei giorni il team ___ molto. (contemporanea)",
            "options": [
              "lavorava",
              "lavora",
              "avrebbe lavorato"
            ],
            "answer": 0
          }
        ]
      },
      {
        "type": "Correzione",
        "fmt": "errore",
        "instr": "Individua e clicca la parola sbagliata o la parola di troppo.",
        "items": [
          {
            "q": "Ci avvertì che il fornitore ha cambiato le condizioni.",
            "wrong": "ha",
            "fix": "aveva"
          },
          {
            "q": "Annunciò che presenterà il bilancio il mese dopo.",
            "wrong": "presenterà",
            "fix": "avrebbe presentato"
          },
          {
            "q": "Spiegò che in quel periodo il reparto sta crescendo.",
            "wrong": "sta",
            "fix": "stava"
          },
          {
            "q": "Confessò che ha ignorato i primi segnali.",
            "wrong": "ha",
            "fix": "aveva"
          },
          {
            "q": "Promise che invierà il verbale entro sera.",
            "wrong": "invierà",
            "fix": "avrebbe inviato"
          },
          {
            "q": "Ricordò che in quei mesi l'ufficio resta aperto di sabato.",
            "wrong": "resta",
            "fix": "restava"
          }
        ]
      },
      {
        "type": "Trasformazione",
        "fmt": "buco",
        "instr": "Scegli la frase corretta nel racconto al passato.",
        "items": [
          {
            "q": "Il guasto era avvenuto prima. Ce lo spiegò dopo. →",
            "options": [
              "Ci spiegò che il guasto era avvenuto.",
              "Ci spiegò che il guasto è avvenuto.",
              "Ci spiegò che il guasto sarebbe avvenuto."
            ],
            "answer": 0
          },
          {
            "q": "Avrebbe risolto dopo. Lo disse prima. →",
            "options": [
              "Disse che avrebbe risolto il problema.",
              "Disse che risolverà il problema.",
              "Disse che risolveva il problema."
            ],
            "answer": 0
          },
          {
            "q": "Lavorava in quel momento. Lo raccontò. →",
            "options": [
              "Raccontò che stava lavorando al progetto.",
              "Raccontò che sta lavorando al progetto.",
              "Raccontò che avrebbe lavorato al progetto."
            ],
            "answer": 0
          },
          {
            "q": "Aveva sbagliato prima. Lo ammise dopo. →",
            "options": [
              "Ammise che aveva sbagliato i calcoli.",
              "Ammise che ha sbagliato i calcoli.",
              "Ammise che avrebbe sbagliato i calcoli."
            ],
            "answer": 0
          },
          {
            "q": "Avrebbe avvisato più tardi. Lo aggiunse. →",
            "options": [
              "Aggiunse che avrebbe avvisato i colleghi.",
              "Aggiunse che avviserà i colleghi.",
              "Aggiunse che avvisava i colleghi."
            ],
            "answer": 0
          },
          {
            "q": "Il team era sotto pressione allora. Lo riferì. →",
            "options": [
              "Riferì che il team era sotto pressione.",
              "Riferì che il team è sotto pressione.",
              "Riferì che il team sarebbe stato sotto pressione."
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
        "instr": "Scegli la forma verbale corretta.",
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
            "q": "Nonostante ___ molto, sono partiti in macchina.",
            "options": [
              "nevicasse",
              "nevicava",
              "nevicherebbe"
            ],
            "answer": 0
          },
          {
            "q": "Anche se ___ molto, l’ho comprato perché mi serviva.",
            "options": [
              "costava",
              "costasse",
              "costerebbe"
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
        "instr": "Individua e clicca la parola sbagliata o la parola di troppo.",
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
            "q": "L'ufficio è aperto anche se oggi sia domenica.",
            "wrong": "sia",
            "fix": "è"
          },
          {
            "q": "Sebbene ha dormito poco, è in forma.",
            "wrong": "ha",
            "fix": "abbia"
          },
          {
            "q": "Per quanto ci provo, non ci riesco.",
            "wrong": "provo",
            "fix": "provi"
          },
          {
            "q": "Sebbene sapeva la risposta, è stato zitto.",
            "wrong": "sapeva",
            "fix": "sapesse"
          }
        ]
      },
      {
        "type": "Trasformazione",
        "fmt": "buco",
        "instr": "Riscrivi la frase usando la parola tra parentesi.",
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
            "q": "Parla piano, ma si sente bene. (anche se)",
            "options": [
              "Anche se parla piano, si sente bene.",
              "Anche se parli piano, si sente bene.",
              "Anche se parlasse piano, si sente bene."
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
        "instr": "Scegli la forma corretta con «prima che», «prima di», «dopo che», «finché» e «non appena».",
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
            "q": "Ogni sera resto qui finché non ___ il mio turno.",
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
            "q": "Non appena ___ la notizia, ha chiamato.",
            "options": [
              "ha saputo",
              "abbia saputo",
              "sapesse"
            ],
            "answer": 0
          }
        ]
      },
      {
        "type": "Correzione",
        "fmt": "errore",
        "instr": "Individua e clicca la parola sbagliata o la parola di troppo.",
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
            "q": "Rimani qui finché non arriverei io.",
            "wrong": "arriverei",
            "fix": "arrivo"
          },
          {
            "q": "Salutami prima che io esco.",
            "wrong": "esco",
            "fix": "esca"
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
          }
        ]
      },
      {
        "type": "Trasformazione",
        "fmt": "buco",
        "instr": "Unisci le due azioni: scegli la costruzione corretta.",
        "items": [
          {
            "q": "Vuoi ordinare, ma prima devi guardare il menù.",
            "options": [
              "Prima di ordinare, guarda il menù.",
              "Prima che il cameriere ordini, guarda il menù.",
              "Prima di che ordini, guarda il menù."
            ],
            "answer": 0
          },
          {
            "q": "Voglio andare via prima della fine del concerto.",
            "options": [
              "Vado via prima che il concerto finisca.",
              "Vado via prima che il concerto finisce.",
              "Vado via prima di il concerto finisce."
            ],
            "answer": 0
          },
          {
            "q": "Vogliamo preparare la cena prima del ritorno degli amici.",
            "options": [
              "Prepariamo la cena prima che tornino.",
              "Prepariamo la cena prima che tornano.",
              "Prepariamo la cena prima di tornano."
            ],
            "answer": 0
          },
          {
            "q": "Lei deve controllare il conto prima di pagare.",
            "options": [
              "Prima di pagare, controlli il conto.",
              "Prima che il cameriere paghi, controlli il conto.",
              "Prima di che paghi, controlli il conto."
            ],
            "answer": 0
          },
          {
            "q": "Abbiamo finito il lavoro e poi abbiamo festeggiato.",
            "options": [
              "Dopo che abbiamo finito il lavoro, abbiamo festeggiato.",
              "Dopo che avessimo finito il lavoro, abbiamo festeggiato.",
              "Dopo di finire il lavoro, abbiamo festeggiato."
            ],
            "answer": 0
          },
          {
            "q": "Voglio comprare i popcorn prima dell’inizio del film.",
            "options": [
              "Compro i popcorn prima che il film cominci.",
              "Compro i popcorn prima che il film comincia.",
              "Compro i popcorn prima di il film comincia."
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
            "q": "Benché ___ studiato il caso, non trovò la causa. (avere)",
            "a": "avesse",
            "no": [
              "aveva",
              "abbia",
              "avessi"
            ]
          },
          {
            "q": "Sebbene ___ arrivati in anticipo, non trovarono posto. (essere)",
            "a": "fossero",
            "no": [
              "erano",
              "siano",
              "fosse"
            ]
          },
          {
            "q": "Nonostante ___ ripetuto l'esperimento, il dato non tornò. (avere)",
            "a": "avesse",
            "no": [
              "aveva",
              "abbia",
              "avessi"
            ]
          },
          {
            "q": "Prima che ___ pubblicato lo studio, la notizia circolava già. (essere)",
            "a": "fosse",
            "no": [
              "era",
              "sia",
              "fossi"
            ]
          },
          {
            "q": "Sebbene ___ verificato tutto, restava un dubbio. (avere)",
            "a": "avessero",
            "no": [
              "avevano",
              "abbiano",
              "avesse"
            ]
          },
          {
            "q": "Sebbene tu ___ avvisato tutti, nessuno reagì. (avere)",
            "a": "avessi",
            "no": [
              "avevi",
              "abbia",
              "avesse"
            ]
          }
        ]
      },
      {
        "type": "Correzione",
        "fmt": "errore",
        "instr": "Individua e clicca la parola sbagliata o la parola di troppo.",
        "items": [
          {
            "q": "Benché aveva controllato i dati, sbagliò il calcolo.",
            "wrong": "aveva",
            "fix": "avesse"
          },
          {
            "q": "Sebbene erano usciti prima, persero il treno.",
            "wrong": "erano",
            "fix": "fossero"
          },
          {
            "q": "Nonostante aveva firmato, cambiò idea.",
            "wrong": "aveva",
            "fix": "avesse"
          },
          {
            "q": "Prima che era finito il congresso, se ne andò.",
            "wrong": "era",
            "fix": "fosse"
          },
          {
            "q": "Sebbene avevano insistito, non ottennero nulla.",
            "wrong": "avevano",
            "fix": "avessero"
          },
          {
            "q": "Sebbene tu avevi promesso di aiutarmi, non l'hai fatto.",
            "wrong": "avevi",
            "fix": "avessi"
          }
        ]
      },
      {
        "type": "Trasformazione",
        "fmt": "buco",
        "instr": "Unisci le due frasi usando la parola tra parentesi.",
        "items": [
          {
            "q": "Aveva ripetuto la prova. Il risultato non cambiò. (benché)",
            "options": [
              "Benché avesse ripetuto la prova, il risultato non cambiò.",
              "Benché aveva ripetuto la prova, il risultato non cambiò.",
              "Benché abbia ripetuto la prova, il risultato non cambiò."
            ],
            "answer": 0
          },
          {
            "q": "Erano partiti presto. Arrivarono in ritardo. (sebbene)",
            "options": [
              "Sebbene fossero partiti presto, arrivarono in ritardo.",
              "Sebbene erano partiti presto, arrivarono in ritardo.",
              "Sebbene siano partiti presto, arrivarono in ritardo."
            ],
            "answer": 0
          },
          {
            "q": "Aveva letto tutto. Non ricordava nulla. (nonostante)",
            "options": [
              "Nonostante avesse letto tutto, non ricordava nulla.",
              "Nonostante aveva letto tutto, non ricordava nulla.",
              "Nonostante abbia letto tutto, non ricordava nulla."
            ],
            "answer": 0
          },
          {
            "q": "Avevano promesso aiuto. Nessuno intervenne. (sebbene)",
            "options": [
              "Sebbene avessero promesso aiuto, nessuno intervenne.",
              "Sebbene avevano promesso aiuto, nessuno intervenne.",
              "Sebbene abbiano promesso aiuto, nessuno intervenne."
            ],
            "answer": 0
          },
          {
            "q": "Si era preparata a lungo. Non superò la prova. (benché)",
            "options": [
              "Benché si fosse preparata a lungo, non superò la prova.",
              "Benché si era preparata a lungo, non superò la prova.",
              "Benché si sia preparata a lungo, non superò la prova."
            ],
            "answer": 0
          },
          {
            "q": "Lo studio era stato pubblicato. Nessuno lo lesse. (nonostante)",
            "options": [
              "Nonostante lo studio fosse stato pubblicato, nessuno lo lesse.",
              "Nonostante lo studio era stato pubblicato, nessuno lo lesse.",
              "Nonostante lo studio sia stato pubblicato, nessuno lo lesse."
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
      "C1 L15"
    ],
    "title": "I tre costrutti passivi: venire, andare e si passivante",
    "exercises": [
      {
        "type": "Riempimento",
        "fmt": "buco",
        "instr": "Scegli il costrutto passivo adatto al contesto.",
        "items": [
          {
            "q": "Il modulo ___ compilato in ogni sua parte. (obbligo)",
            "options": [
              "va",
              "viene",
              "si"
            ],
            "answer": 0
          },
          {
            "q": "La cerimonia ___ celebrata ogni anno a giugno. (azione)",
            "options": [
              "viene",
              "va",
              "si"
            ],
            "answer": 0
          },
          {
            "q": "In queste zone ___ ancora il dialetto. (consuetudine)",
            "options": [
              "si parla",
              "viene parlato",
              "va parlato"
            ],
            "answer": 0
          },
          {
            "q": "Le domande ___ presentate entro venerdì. (obbligo)",
            "options": [
              "vanno",
              "vengono",
              "si presentano"
            ],
            "answer": 0
          },
          {
            "q": "Il premio ___ consegnato dal sindaco. (azione)",
            "options": [
              "viene",
              "va",
              "si"
            ],
            "answer": 0
          },
          {
            "q": "Da noi ___ piatti tradizionali ogni domenica. (consuetudine)",
            "options": [
              "si preparano",
              "vengono preparati",
              "vanno preparati"
            ],
            "answer": 0
          }
        ]
      },
      {
        "type": "Correzione",
        "fmt": "errore",
        "instr": "Individua e clicca la parola sbagliata o la parola di troppo.",
        "items": [
          {
            "q": "La ricetta va tramandato di generazione in generazione.",
            "wrong": "tramandato",
            "fix": "tramandata"
          },
          {
            "q": "I costumi viene indossati durante la sfilata.",
            "wrong": "viene",
            "fix": "vengono"
          },
          {
            "q": "Nel borgo si racconta molte leggende.",
            "wrong": "racconta",
            "fix": "raccontano"
          },
          {
            "q": "Le foto di famiglia va custodite con cura.",
            "wrong": "va",
            "fix": "vanno"
          },
          {
            "q": "La processione vengono aperta dal parroco.",
            "wrong": "vengono",
            "fix": "viene"
          },
          {
            "q": "Questi riti va celebrati in primavera.",
            "wrong": "va",
            "fix": "vanno"
          }
        ]
      },
      {
        "type": "Trasformazione",
        "fmt": "buco",
        "instr": "Scegli il costrutto che rende il senso indicato.",
        "items": [
          {
            "q": "Bisogna consegnare la relazione entro lunedì. (obbligo)",
            "options": [
              "La relazione va consegnata entro lunedì.",
              "La relazione viene consegnata entro lunedì.",
              "La relazione si consegna entro lunedì."
            ],
            "answer": 0
          },
          {
            "q": "Il direttore apre la mostra ogni anno. (azione)",
            "options": [
              "La mostra viene aperta dal direttore ogni anno.",
              "La mostra va aperta dal direttore ogni anno.",
              "La mostra si apre ogni anno."
            ],
            "answer": 0
          },
          {
            "q": "Da queste parti la gente mangia il pesce il venerdì. (consuetudine)",
            "options": [
              "Da queste parti si mangia il pesce il venerdì.",
              "Da queste parti viene mangiato il pesce.",
              "Da queste parti va mangiato il pesce."
            ],
            "answer": 0
          },
          {
            "q": "Bisogna firmare i moduli in due copie. (obbligo)",
            "options": [
              "I moduli vanno firmati in due copie.",
              "I moduli vengono firmati in due copie.",
              "I moduli si firmano in due copie."
            ],
            "answer": 0
          },
          {
            "q": "Una giuria assegna il premio ogni giugno. (azione)",
            "options": [
              "Il premio viene assegnato da una giuria ogni giugno.",
              "Il premio va assegnato da una giuria ogni giugno.",
              "Il premio si assegna ogni giugno."
            ],
            "answer": 0
          },
          {
            "q": "In questa regione la gente produce diversi tipi di olio. (consuetudine)",
            "options": [
              "In questa regione si produce molto olio.",
              "In questa regione viene prodotto molto olio da tutti.",
              "In questa regione va prodotto molto olio."
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
            "q": "Se non ___ quel treno, ora saremmo già a destinazione.",
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
              "avrei",
              "avrò",
              "avessi"
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
            "q": "Se Marco ___ la verità, ora ci fideremmo di lui.",
            "options": [
              "avesse detto",
              "diceva",
              "avrebbe detto"
            ],
            "answer": 0
          }
        ]
      },
      {
        "type": "Correzione",
        "fmt": "errore",
        "instr": "Individua e clicca la parola sbagliata o la parola di troppo.",
        "items": [
          {
            "q": "Se risparmiavo prima, ora comprerei la casa.",
            "wrong": "risparmiavo",
            "fix": "avessi risparmiato"
          },
          {
            "q": "Se prendevamo l'aereo, ora saremmo in Italia.",
            "wrong": "prendevamo",
            "fix": "avessimo preso"
          },
          {
            "q": "Se fosse partito prima, oggi era a Roma.",
            "wrong": "era",
            "fix": "sarebbe"
          },
          {
            "q": "Se avrei firmato ieri, oggi sarei tranquillo.",
            "wrong": "avrei",
            "fix": "avessi"
          },
          {
            "q": "Se avessimo insistito, ora avremo la risposta.",
            "wrong": "avremo",
            "fix": "avremmo"
          },
          {
            "q": "Se Marta accettava l'offerta, ora lavorerebbe qui.",
            "wrong": "accettava",
            "fix": "avesse accettato"
          }
        ]
      },
      {
        "type": "Trasformazione",
        "fmt": "buco",
        "instr": "Costruisci il periodo ipotetico misto: scegli la versione corretta.",
        "items": [
          {
            "q": "Da ragazzo non facevo sport; oggi non sono in forma.",
            "options": [
              "Se avessi fatto sport da ragazzo, ora sarei in forma.",
              "Se facevo sport da ragazzo, ora sarei in forma.",
              "Se avrei fatto sport da ragazzo, ora fossi in forma."
            ],
            "answer": 0
          },
          {
            "q": "Non abbiamo comprato quella casa e oggi viviamo in affitto.",
            "options": [
              "Se avessimo comprato quella casa, oggi non vivremmo in affitto.",
              "Se compravamo quella casa, oggi non vivremmo in affitto.",
              "Se avremmo comprato quella casa, oggi non vivessimo in affitto."
            ],
            "answer": 0
          },
          {
            "q": "Non ho accettato quel posto; oggi guadagno meno.",
            "options": [
              "Se avessi accettato quel posto, ora guadagnerei di più.",
              "Se accettavo quel posto, ora guadagnerei di più.",
              "Se avrei accettato quel posto, ora guadagnassi di più."
            ],
            "answer": 0
          },
          {
            "q": "Non sei venuto alla riunione; adesso non sai tutto.",
            "options": [
              "Se fossi venuto alla riunione, ora sapresti tutto.",
              "Se venivi alla riunione, ora sapresti tutto.",
              "Se saresti venuto alla riunione, ora sapessi tutto."
            ],
            "answer": 0
          },
          {
            "q": "Non ha chiesto aiuto; adesso è nei guai.",
            "options": [
              "Se avesse chiesto aiuto, ora non sarebbe nei guai.",
              "Se chiedeva aiuto, ora non sarebbe nei guai.",
              "Se avrebbe chiesto aiuto, ora non fosse nei guai."
            ],
            "answer": 0
          },
          {
            "q": "Non ho dato retta al medico; adesso non sto bene.",
            "options": [
              "Se avessi dato retta al medico, ora starei bene.",
              "Se davo retta al medico, ora starei bene.",
              "Se avrei dato retta al medico, ora stessi bene."
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
    "lez": [
      "C1 L18"
    ],
    "title": "Il congiuntivo nelle proposizioni finali",
    "exercises": [
      {
        "type": "Riempimento",
        "fmt": "fill",
        "instr": "Scrivi la forma corretta del verbo tra parentesi.",
        "items": [
          {
            "q": "Ristrutturarono le case perché il quartiere ___ più attraente. (diventare)",
            "a": "diventasse",
            "no": [
              "diventava",
              "diventi",
              "diventerebbe"
            ]
          },
          {
            "q": "Chiusero la strada affinché i pedoni ___ più al sicuro. (essere)",
            "a": "fossero",
            "no": [
              "erano",
              "siano",
              "sarebbero"
            ]
          },
          {
            "q": "Costruirono il parco perché i bambini ___ giocare. (potere)",
            "a": "potessero",
            "no": [
              "potevano",
              "possano",
              "potrebbero"
            ]
          },
          {
            "q": "Spostarono il mercato affinché il traffico ___. (diminuire)",
            "a": "diminuisse",
            "no": [
              "diminuiva",
              "diminuisca",
              "diminuirebbe"
            ]
          },
          {
            "q": "Illuminarono le piazze affinché la gente si ___ più sicura. (sentirsi)",
            "a": "sentisse",
            "no": [
              "sentiva",
              "senta",
              "sentirebbe"
            ]
          },
          {
            "q": "Piantarono alberi affinché l'aria ___ più pulita. (essere)",
            "a": "fosse",
            "no": [
              "era",
              "sia",
              "sarebbe"
            ]
          }
        ]
      },
      {
        "type": "Correzione",
        "fmt": "errore",
        "instr": "Individua e clicca la parola sbagliata o la parola di troppo.",
        "items": [
          {
            "q": "Rifecero le facciate affinché il quartiere sembrava più curato.",
            "wrong": "sembrava",
            "fix": "sembrasse"
          },
          {
            "q": "Vietarono il transito affinché i bambini potevano giocare in sicurezza.",
            "wrong": "potevano",
            "fix": "potessero"
          },
          {
            "q": "Aprirono un asilo affinché le famiglie restano in centro.",
            "wrong": "restano",
            "fix": "restassero"
          },
          {
            "q": "Aumentarono i controlli affinché nessuno abusava degli spazi comuni.",
            "wrong": "abusava",
            "fix": "abusasse"
          },
          {
            "q": "Sgomberarono l’area affinché i lavori possano iniziare subito.",
            "wrong": "possano",
            "fix": "potessero"
          },
          {
            "q": "Interrarono i cavi affinché la piazza è più bella.",
            "wrong": "è",
            "fix": "fosse"
          }
        ]
      },
      {
        "type": "Trasformazione",
        "fmt": "buco",
        "instr": "Unisci le due frasi scegliendo la versione corretta.",
        "items": [
          {
            "q": "Aprirono un centro civico. Volevano che il quartiere si animasse.",
            "options": [
              "Aprirono un centro civico affinché il quartiere si animasse.",
              "Aprirono un centro civico affinché il quartiere si anima.",
              "Aprirono un centro civico affinché il quartiere si sarebbe animato."
            ],
            "answer": 0
          },
          {
            "q": "Restaurarono il teatro. Volevano che i cittadini potessero usarlo.",
            "options": [
              "Restaurarono il teatro perché la città lo usasse.",
              "Restaurarono il teatro perché la città lo usa.",
              "Restaurarono il teatro perché la città lo userebbe."
            ],
            "answer": 0
          },
          {
            "q": "Piantarono siepi. Volevano che il rumore diminuisse.",
            "options": [
              "Piantarono siepi affinché il rumore diminuisse.",
              "Piantarono siepi affinché il rumore diminuisce.",
              "Piantarono siepi affinché il rumore diminuirebbe."
            ],
            "answer": 0
          },
          {
            "q": "Spostarono la fermata. Volevano che gli anziani facessero meno strada.",
            "options": [
              "Spostarono la fermata perché gli anziani facessero meno strada.",
              "Spostarono la fermata perché gli anziani fanno meno strada.",
              "Spostarono la fermata perché gli anziani farebbero meno strada."
            ],
            "answer": 0
          },
          {
            "q": "Illuminarono i vicoli. Volevano che fossero più sicuri.",
            "options": [
              "Illuminarono i vicoli affinché fossero più sicuri.",
              "Illuminarono i vicoli affinché sono più sicuri.",
              "Illuminarono i vicoli affinché sarebbero più sicuri."
            ],
            "answer": 0
          },
          {
            "q": "Comprarono l'area. Volevano che nessuno ci costruisse.",
            "options": [
              "Comprarono l'area perché nessuno ci costruisse.",
              "Comprarono l'area perché nessuno ci costruisce.",
              "Comprarono l'area perché nessuno ci costruirebbe."
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
      "C1 L19"
    ],
    "title": "Il condizionale passato nell'ironia e nel rimprovero",
    "exercises": [
      {
        "type": "Riempimento",
        "fmt": "buco",
        "instr": "Scegli la forma che esprime rimprovero o aspettativa delusa.",
        "items": [
          {
            "q": "___ almeno rispondere al messaggio, non credi?",
            "options": [
              "Avrebbe potuto",
              "Può",
              "Potrebbe"
            ],
            "answer": 0
          },
          {
            "q": "___ verificare le fonti prima di pubblicare.",
            "options": [
              "Avresti dovuto",
              "Dovresti",
              "Devi"
            ],
            "answer": 0
          },
          {
            "q": "Non ___ rovinare tutto meglio di così, bravo davvero.",
            "options": [
              "avresti potuto",
              "puoi",
              "potrai"
            ],
            "answer": 0
          },
          {
            "q": "___ essere una riunione breve, ma siamo andati via a notte fonda.",
            "options": [
              "Sarebbe dovuta",
              "È",
              "Sarà"
            ],
            "answer": 0
          },
          {
            "q": "___ ammettere l'errore, e invece ha incolpato gli altri.",
            "options": [
              "Avrebbe dovuto",
              "Deve",
              "Dovrebbe"
            ],
            "answer": 0
          },
          {
            "q": "A giudicare dal curriculum, ___ il più esperto, ma ha commesso più errori di tutti.",
            "options": [
              "sarebbe dovuto essere",
              "doveva essere",
              "sarà stato"
            ],
            "answer": 0
          }
        ]
      },
      {
        "type": "Correzione",
        "fmt": "errore",
        "instr": "Individua e clicca la parola sbagliata o la parola di troppo.",
        "items": [
          {
            "q": "Almeno potresti chiamarmi ieri sera, invece niente.",
            "wrong": "potresti",
            "fix": "avresti potuto"
          },
          {
            "q": "Forse dovresti controllare i dati prima di inviarli, ormai è tardi.",
            "wrong": "dovresti",
            "fix": "avresti dovuto"
          },
          {
            "q": "Puoi prenotare il tavolo per tempo, ormai è tutto pieno.",
            "wrong": "Puoi",
            "fix": "Avresti potuto"
          },
          {
            "q": "A quel punto deve ammettere lo sbaglio, e invece tacque.",
            "wrong": "deve",
            "fix": "avrebbe dovuto"
          },
          {
            "q": "Il viaggio dovrebbe durare due ore, ma ne è durato cinque.",
            "wrong": "dovrebbe",
            "fix": "sarebbe dovuto"
          },
          {
            "q": "In teoria spetterebbe a loro decidere, e invece ho deciso io.",
            "wrong": "spetterebbe",
            "fix": "sarebbe spettato"
          }
        ]
      },
      {
        "type": "Trasformazione",
        "fmt": "buco",
        "instr": "Esprimi il rimprovero, l'ironia o l'aspettativa delusa con il condizionale passato.",
        "items": [
          {
            "q": "Non ci ha avvisati. (rimprovero)",
            "options": [
              "Avrebbe potuto avvisarci.",
              "Potrebbe avvisarci.",
              "Può avvisarci."
            ],
            "answer": 0
          },
          {
            "q": "Non ci hai pensato prima. (rimprovero)",
            "options": [
              "Avresti dovuto pensarci prima.",
              "Dovresti pensarci prima.",
              "Devi pensarci prima."
            ],
            "answer": 0
          },
          {
            "q": "È arrivato con solo due ore di ritardo. (ironia)",
            "options": [
              "Avrebbe potuto arrivare anche più tardi.",
              "Potrebbe arrivare più tardi.",
              "Può arrivare più tardi."
            ],
            "answer": 0
          },
          {
            "q": "Non ha chiesto scusa. (rimprovero)",
            "options": [
              "Avrebbe dovuto chiedere scusa.",
              "Dovrebbe chiedere scusa.",
              "Deve chiedere scusa."
            ],
            "answer": 0
          },
          {
            "q": "Siamo finiti alle nove invece che alle sei. (aspettativa delusa)",
            "options": [
              "Avremmo dovuto finire alle sei.",
              "Dovremmo finire alle sei.",
              "Dobbiamo finire alle sei."
            ],
            "answer": 0
          },
          {
            "q": "La festa doveva essere una sorpresa, ma lo sapevano tutti. (ironia)",
            "options": [
              "Sarebbe dovuta essere una sorpresa.",
              "Sarebbe una sorpresa.",
              "È una sorpresa."
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
    "title": "Le forme implicite",
    "exercises": [
      {
        "type": "Riempimento",
        "fmt": "buco",
        "instr": "Scegli la forma corretta.",
        "items": [
          {
            "q": "___ il marchio, si riconosce l'origine del prodotto.",
            "options": [
              "Controllando",
              "Controllato che",
              "Controllare"
            ],
            "answer": 0
          },
          {
            "q": "Il produttore dichiara di ___ solo materie locali.",
            "options": [
              "usare",
              "usando",
              "uso"
            ],
            "answer": 0
          },
          {
            "q": "Sostiene di ___ ricevuto la certificazione.",
            "options": [
              "aver",
              "avendo",
              "avere stato"
            ],
            "answer": 0
          },
          {
            "q": "___ analizzato il campione, hanno pubblicato i dati.",
            "options": [
              "Avendo",
              "Avuto di",
              "Avere"
            ],
            "answer": 0
          },
          {
            "q": "___ verificata la provenienza, il carico è partito.",
            "options": [
              "Una volta",
              "Avendo di",
              "Essere"
            ],
            "answer": 0
          },
          {
            "q": "Ammette di ___ trascurato un passaggio.",
            "options": [
              "aver",
              "avendo",
              "avere stato"
            ],
            "answer": 0
          }
        ]
      },
      {
        "type": "Correzione",
        "fmt": "errore",
        "instr": "Individua e clicca la parola sbagliata o la parola di troppo.",
        "items": [
          {
            "q": "Sostiene di avendo ispezionato il magazzino.",
            "wrong": "avendo",
            "fix": "aver"
          },
          {
            "q": "Una volta ispezionando il carico, si emette il certificato.",
            "wrong": "ispezionando",
            "fix": "ispezionato"
          },
          {
            "q": "Ritiene di essere commesso un errore.",
            "wrong": "essere",
            "fix": "aver"
          },
          {
            "q": "Avendo di ispezionato i locali, hanno chiuso il caso.",
            "wrong": "di",
            "fix": "(togliere)"
          },
          {
            "q": "Rispettato tutte le norme, il prodotto può ottenere il marchio.",
            "wrong": "Rispettato",
            "fix": "Rispettate"
          },
          {
            "q": "Una volta ispezionando il magazzino, se ne andarono.",
            "wrong": "ispezionando",
            "fix": "ispezionato"
          }
        ]
      },
      {
        "type": "Trasformazione",
        "fmt": "buco",
        "instr": "Riscrivi la frase scegliendo la versione corretta.",
        "items": [
          {
            "q": "Afferma che ha firmato il contratto. →",
            "options": [
              "Afferma di aver firmato il contratto.",
              "Afferma di avendo firmato il contratto.",
              "Afferma di essere firmato il contratto."
            ],
            "answer": 0
          },
          {
            "q": "Poiché aveva letto le clausole, rifiutò. →",
            "options": [
              "Avendo letto le clausole, rifiutò.",
              "Avendo di letto le clausole, rifiutò.",
              "Letto che le clausole, rifiutò."
            ],
            "answer": 0
          },
          {
            "q": "Sostiene che ha rispettato i termini. →",
            "options": [
              "Sostiene di aver rispettato i termini.",
              "Sostiene di avendo rispettato i termini.",
              "Sostiene di essere rispettato i termini."
            ],
            "answer": 0
          },
          {
            "q": "Dopo che fu stipulato l'accordo, iniziarono i lavori. →",
            "options": [
              "Stipulato l'accordo, iniziarono i lavori.",
              "Stipulando l'accordo, iniziarono i lavori.",
              "Stipulare l'accordo, iniziarono i lavori."
            ],
            "answer": 0
          },
          {
            "q": "Mentre mescoli il sugo, aggiungi sale. →",
            "options": [
              "Mescolando il sugo, aggiungi sale.",
              "Mescolato il sugo, aggiungi sale.",
              "Mescolare il sugo, aggiungi sale."
            ],
            "answer": 0
          },
          {
            "q": "Poiché non aveva la licenza, sospese la vendita. →",
            "options": [
              "Non avendo la licenza, sospese la vendita.",
              "Non avuto la licenza, sospese la vendita.",
              "Non avere la licenza, sospese la vendita."
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
        "fmt": "buco",
        "instr": "Scegli il condizionale adatto a presentare una percezione o una reazione ipotetica.",
        "items": [
          {
            "q": "Un turista che conoscesse solo gli stereotipi ___ l'Italia come un paese uniforme.",
            "options": [
              "immaginerebbe",
              "vede",
              "vedesse"
            ],
            "answer": 0
          },
          {
            "q": "Se cenasse per la prima volta alle dieci, Marta ___ sorpresa.",
            "options": [
              "rimarrebbe",
              "rimane",
              "rimanesse"
            ],
            "answer": 0
          },
          {
            "q": "Chi visitasse regioni diverse ___ quanto cambiano cucina e abitudini.",
            "options": [
              "noterebbe",
              "nota",
              "notasse"
            ],
            "answer": 0
          },
          {
            "q": "Senza conoscere la cultura, qualcuno ___ male certi gesti italiani.",
            "options": [
              "potrebbe interpretare",
              "interpreta",
              "interpretasse"
            ],
            "answer": 0
          },
          {
            "q": "Dopo un’esperienza positiva, un visitatore ___ facilmente idea sul paese.",
            "options": [
              "cambierebbe",
              "cambia",
              "cambiasse"
            ],
            "answer": 0
          },
          {
            "q": "Di fronte a un commento offensivo basato su uno stereotipo del proprio paese, un italiano all'estero ___ male.",
            "options": [
              "reagirebbe",
              "reagisce",
              "reagisse"
            ],
            "answer": 0
          }
        ]
      },
      {
        "type": "Correzione",
        "fmt": "errore",
        "instr": "Individua e clicca la parola sbagliata o la parola di troppo.",
        "items": [
          {
            "q": "Se visitasse il paese solo in estate, Paolo pensa che il clima sia sempre mite.",
            "wrong": "pensa",
            "fix": "penserebbe"
          },
          {
            "q": "Se entrasse in un negozio durante la pausa pranzo, Anna trova strano che sia chiuso.",
            "wrong": "trova",
            "fix": "troverebbe"
          },
          {
            "q": "Chi parlasse con persone di età diverse scopre abitudini molto varie.",
            "wrong": "scopre",
            "fix": "scoprirebbe"
          },
          {
            "q": "Senza aver mai visto una festa locale, qualcuno giudica eccessivi certi rituali.",
            "wrong": "giudica",
            "fix": "giudicherebbe"
          },
          {
            "q": "Se Paul passasse un mese in Italia, modifica la sua opinione iniziale.",
            "wrong": "modifica",
            "fix": "modificherebbe"
          },
          {
            "q": "Se sentisse una battuta sul proprio paese, Marco risponde con fastidio.",
            "wrong": "risponde",
            "fix": "risponderebbe"
          }
        ]
      },
      {
        "type": "Trasformazione",
        "fmt": "buco",
        "instr": "Riformula la situazione come ipotesi usando il condizionale.",
        "items": [
          {
            "q": "Una studentessa vede solo film ambientati in piccoli borghi e immagina un’Italia tutta tradizionale.",
            "options": [
              "Una studentessa che vedesse solo film ambientati in piccoli borghi immaginerebbe un’Italia tutta tradizionale.",
              "Una studentessa che vede solo film ambientati in piccoli borghi immagina un’Italia tutta tradizionale.",
              "Una studentessa che vedesse solo film ambientati in piccoli borghi immaginasse un’Italia tutta tradizionale."
            ],
            "answer": 0
          },
          {
            "q": "Un viaggiatore arriva in una città dove i negozi chiudono a pranzo e si stupisce.",
            "options": [
              "Un viaggiatore si stupirebbe trovando i negozi chiusi a pranzo.",
              "Un viaggiatore si stupisce trovando i negozi chiusi a pranzo.",
              "Un viaggiatore si stupisse trovando i negozi chiusi a pranzo."
            ],
            "answer": 0
          },
          {
            "q": "Una persona visita il nord e il sud e percepisce forti differenze.",
            "options": [
              "Una persona che visitasse il nord e il sud percepirebbe forti differenze.",
              "Una persona che visita il nord e il sud percepisce forti differenze.",
              "Una persona che visitasse il nord e il sud percepisse forti differenze."
            ],
            "answer": 0
          },
          {
            "q": "Un turista non conosce le regole sociali locali e fraintende un comportamento.",
            "options": [
              "Un turista che non conoscesse le regole sociali locali potrebbe fraintendere un comportamento.",
              "Un turista che non conosce le regole sociali locali fraintende un comportamento.",
              "Un turista che non conoscesse le regole sociali locali fraintendesse un comportamento."
            ],
            "answer": 0
          },
          {
            "q": "Dopo alcune settimane nel paese, un visitatore rivede molti pregiudizi.",
            "options": [
              "Dopo alcune settimane nel paese, un visitatore rivedrebbe molti pregiudizi.",
              "Dopo alcune settimane nel paese, un visitatore rivede molti pregiudizi.",
              "Dopo alcune settimane nel paese, un visitatore rivedesse molti pregiudizi."
            ],
            "answer": 0
          },
          {
            "q": "Un italiano sente all’estero una generalizzazione sul proprio paese e protesta.",
            "options": [
              "Un italiano protesterebbe sentendo all’estero una generalizzazione sul proprio paese.",
              "Un italiano protesta sentendo all’estero una generalizzazione sul proprio paese.",
              "Un italiano protestasse sentendo all’estero una generalizzazione sul proprio paese."
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
    "title": "Comprensione: fatti e percezioni",
    "exercises": [
      {
        "type": "Comprensione",
        "fmt": "buco",
        "instr": "Leggi il testo e rispondi.",
        "testo": "Un istituto europeo ha pubblicato un'indagine sull'immagine internazionale dell'Italia. Il 68% degli intervistati associa il paese a cucina, arte e clima: il dato è confermato da tre rilevazioni successive. La ricercatrice che ha coordinato il lavoro resta prudente: «Sembrerebbe che l'Italia sia percepita soprattutto come luogo di vacanza, ma il campione è ancora ristretto». Un intervistato tedesco racconta che, prima di trasferirsi, avrebbe pensato che gli orari di lavoro italiani fossero più brevi dei suoi; oggi sa che gli italiani lavorano in media più ore dei tedeschi. Benché il luogo comune sulla lentezza sia ancora diffuso, l'indagine non lo conferma. Sulle differenze regionali la ricercatrice aggiunge soltanto: «Direi che contano più della nazionalità».",
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
        "testo": "A un incontro sulla comunicazione interculturale un docente italiano ha spiegato che i gesti cambiano significato secondo la regione e la situazione: su questo, ha precisato, gli studi sono concordi. Una partecipante giapponese ha raccontato che all'inizio avrebbe interpretato ogni gesto come segno di forte emotività, e che solo dopo due anni si è accorta dell'errore. Un imprenditore tedesco si è detto sorpreso: «Non mi sarei aspettato riunioni così puntuali a Torino». Il moderatore ha chiuso con una nota di cautela: «Sembrerebbe che la puntualità dipenda più dal settore che dalla regione, ma nessuno di noi ha dati». Malgrado gli esempi siano numerosi, ha aggiunto, restano esperienze individuali.",
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
            "q": "Quale affermazione il testo dà come sostenuta da ricerche?",
            "options": [
              "Il significato dei gesti cambia con la regione e la situazione.",
              "A Torino le riunioni sono sempre puntuali.",
              "La puntualità dipende dal settore più che dalla regione."
            ],
            "answer": 0
          }
        ]
      },
      {
        "type": "Comprensione",
        "fmt": "buco",
        "instr": "Leggi il testo e rispondi.",
        "testo": "Un articolo universitario ha confrontato gli spot turistici sull'Italia con una serie di interviste a giovani italiani. Negli spot prevalgono borghi, cucina tradizionale e ritmi lenti; nelle interviste compaiono pendolarismo, lavoro digitale e costi abitativi. L'autrice registra il contrasto senza schierarsi: «Direi che nessuna delle due immagini sia completa». Un dato invece lo dà per acquisito: chi resta nel paese più di un mese usa meno generalizzazioni assolute di chi si ferma un giorno; il campione, scrive, è ampio e il risultato si ripete da cinque anni. In chiusura avanza un'ipotesi: un contatto prolungato favorirebbe una percezione più sfumata del paese. Benché l'ipotesi sia plausibile, l'articolo non la verifica.",
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
              "Arte, monumenti e clima mite."
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
  }
,
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
        "instr": "Scegli la forma corretta del passato remoto.",
        "items": [
          {
            "q": "Leonardo ___ la Gioconda a Firenze.",
            "options": [
              "dipinse",
              "dipingé",
              "dipingette"
            ],
            "answer": 0
          },
          {
            "q": "Michelangelo ___ la Pietà in marmo bianco.",
            "options": [
              "scolpì",
              "scolpette",
              "scolpiò"
            ],
            "answer": 0
          },
          {
            "q": "Brunelleschi ___ la cupola del Duomo.",
            "options": [
              "fece",
              "facé",
              "facette"
            ],
            "answer": 0
          },
          {
            "q": "Botticelli ___ a Firenze nel 1445.",
            "options": [
              "nacque",
              "nascì",
              "nascé"
            ],
            "answer": 0
          },
          {
            "q": "Raffaello ___ a Roma a trentasette anni.",
            "options": [
              "morì",
              "morette",
              "moriò"
            ],
            "answer": 0
          },
          {
            "q": "Vasari ___ le biografie dei grandi artisti.",
            "options": [
              "scrisse",
              "scrivé",
              "scrivette"
            ],
            "answer": 0
          }
        ]
      },
      {
        "type": "Correzione",
        "fmt": "errore",
        "instr": "Individua e clicca la parola sbagliata o la parola di troppo.",
        "items": [
          {
            "q": "Giotto dipingiò la cappella di Padova con grande cura.",
            "wrong": "dipingiò",
            "fix": "dipinse"
          },
          {
            "q": "Dopo il processo il pittore andiede a Napoli in cerca di lavoro.",
            "wrong": "andiede",
            "fix": "andò"
          },
          {
            "q": "Canova scolpé due statue per il palazzo del principe.",
            "wrong": "scolpé",
            "fix": "scolpì"
          },
          {
            "q": "Il maestro faciò molti disegni prima di cominciare la tela.",
            "wrong": "faciò",
            "fix": "fece"
          },
          {
            "q": "Nel 1520 morié a Roma il pittore più famoso della sua epoca.",
            "wrong": "morié",
            "fix": "morì"
          },
          {
            "q": "L'artista vivette a Venezia per quasi vent'anni.",
            "wrong": "vivette",
            "fix": "visse"
          }
        ]
      },
      {
        "type": "Scelta",
        "fmt": "buco",
        "instr": "Scegli l'infinito del verbo al passato remoto.",
        "items": [
          {
            "q": "Il pittore visse a Urbino fino ai vent'anni. → visse",
            "options": [
              "vivere",
              "vedere",
              "venire"
            ],
            "answer": 0
          },
          {
            "q": "Il segretario del duca scrisse una lunga relazione. → scrisse",
            "options": [
              "scrivere",
              "scendere",
              "scegliere"
            ],
            "answer": 0
          },
          {
            "q": "L'allievo dipinse il fondo del quadro. → dipinse",
            "options": [
              "dipingere",
              "dipendere",
              "difendere"
            ],
            "answer": 0
          },
          {
            "q": "Il figlio del mercante nacque durante un viaggio. → nacque",
            "options": [
              "nascere",
              "nascondere",
              "nuocere"
            ],
            "answer": 0
          },
          {
            "q": "Il vecchio maestro morì l'inverno seguente. → morì",
            "options": [
              "morire",
              "mordere",
              "mostrare"
            ],
            "answer": 0
          },
          {
            "q": "Lo scultore scolpì un leone di pietra. → scolpì",
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
  }
];
