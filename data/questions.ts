
import { Question } from '../types';

export const ALL_QUESTIONS: Question[] = [
  {
    question: "Was ist die normale Körpertemperatur eines erwachsenen Menschen?",
    options: ["35.5 - 36.5 °C", "36.5 - 37.5 °C", "37.5 - 38.5 °C", "38.5 - 39.5 °C"],
    correctAnswer: "36.5 - 37.5 °C",
    explanation: "Die normale Körperkerntemperatur eines gesunden Erwachsenen liegt im Bereich von 36,5 °C bis 37,5 °C. Werte darüber oder darunter können auf eine Erkrankung hinweisen."
  },
  {
    question: "Welcher Pulsbereich gilt bei einem gesunden Erwachsenen in Ruhe als normal?",
    options: ["40-60 Schläge/Minute", "60-80 Schläge/Minute", "80-100 Schläge/Minute", "100-120 Schläge/Minute"],
    correctAnswer: "60-80 Schläge/Minute",
    explanation: "Ein Ruhepuls von 60 bis 80 Schlägen pro Minute ist bei Erwachsenen typisch. Bei Sportlern kann er auch niedriger sein."
  },
  {
    question: "Was bedeutet die Abkürzung 'RR' in der medizinischen Dokumentation?",
    options: ["Regelmässiger Rhythmus", "Rechter Rippenbogen", "Riva-Rocci (Blutdruck)", "Respiratorische Rate"],
    correctAnswer: "Riva-Rocci (Blutdruck)",
    explanation: "RR steht für die Blutdruckmessung nach der Methode von Scipione Riva-Rocci, dem Erfinder der Blutdruckmanschette."
  },
  {
    question: "Welche der folgenden Maßnahmen gehört zur Standard-Händehygiene?",
    options: ["Händewaschen nur mit Wasser", "Händedesinfektion für 30 Sekunden", "Tragen von Handschuhen bei allen Tätigkeiten", "Händewaschen nach jedem Patientenkontakt, Desinfektion ist optional"],
    correctAnswer: "Händedesinfektion für 30 Sekunden",
    explanation: "Die hygienische Händedesinfektion mit einem alkoholischen Präparat für 30 Sekunden ist die wichtigste Maßnahme zur Verhütung von Infektionen."
  },
  {
    question: "Was ist eine Aspiration?",
    options: ["Eine Form der Lungenentzündung", "Das Einatmen von Fremdkörpern oder Flüssigkeiten in die Lunge", "Eine allergische Reaktion", "Ein plötzlicher Blutdruckabfall"],
    correctAnswer: "Das Einatmen von Fremdkörpern oder Flüssigkeiten in die Lunge",
    explanation: "Aspiration bezeichnet das Verschlucken, bei dem Speisen, Flüssigkeiten oder andere Substanzen in die Atemwege gelangen, was zu ernsthaften Komplikationen führen kann."
  },
  {
    question: "Welche Lagerungsposition wird bei Atemnot oft als erleichternd empfunden?",
    options: ["Flache Rückenlage", "Bauchlage", "Oberkörperhochlagerung (sitzend)", "Seitenlage"],
    correctAnswer: "Oberkörperhochlagerung (sitzend)",
    explanation: "Eine aufrechte Sitzposition oder Oberkörperhochlagerung erleichtert die Atmung, da die Lunge sich besser ausdehnen kann und der Druck auf das Zwerchfell reduziert wird."
  },
  {
    question: "Was versteht man unter Prophylaxe?",
    options: ["Die Behandlung einer bestehenden Krankheit", "Die Diagnose einer Krankheit", "Vorbeugende Maßnahmen zur Verhinderung von Krankheiten", "Die Rehabilitation nach einer Krankheit"],
    correctAnswer: "Vorbeugende Maßnahmen zur Verhinderung von Krankheiten",
    explanation: "Prophylaxe umfasst alle Maßnahmen, die dazu dienen, das Entstehen von Krankheiten oder Komplikationen (z.B. Dekubitus, Thrombose) zu verhindern."
  },
  {
    question: "Ein Patient hat einen systolischen Blutdruck von 160 mmHg. Wie ist dieser Wert einzuordnen?",
    options: ["Hypotonie (zu niedrig)", "Normal", "Hypertonie (Bluthochdruck)", "Nicht messbar"],
    correctAnswer: "Hypertonie (Bluthochdruck)",
    explanation: "Ein systolischer Wert von 140 mmHg oder höher bei wiederholten Messungen wird als Hypertonie (Bluthochdruck) klassifiziert."
  },
  {
    question: "Was ist das Hauptziel bei der Mobilisation von Patienten?",
    options: ["Patienten möglichst schnell zu bewegen", "Die Selbstständigkeit des Patienten zu fördern und Komplikationen zu vermeiden", "Den Patienten zu ermüden, damit er besser schläft", "Pflegepersonal zu entlasten"],
    correctAnswer: "Die Selbstständigkeit des Patienten zu fördern und Komplikationen zu vermeiden",
    explanation: "Mobilisation dient der Aktivierung des Kreislaufs, der Vorbeugung von Kontrakturen und Thrombosen und der Förderung der Eigenständigkeit des Patienten."
  },
  {
    question: "Welches Vitamin wird durch Sonneneinstrahlung in der Haut gebildet?",
    options: ["Vitamin A", "Vitamin C", "Vitamin D", "Vitamin B12"],
    correctAnswer: "Vitamin D",
    explanation: "Unter Einwirkung von UV-B-Strahlen der Sonne kann der Körper Vitamin D in der Haut selbst synthetisieren. Es ist wichtig für die Knochengesundheit."
  },
  {
    question: "Was bedeutet 'subkutan'?",
    options: ["In den Muskel", "In die Vene", "Unter die Haut", "Auf die Haut"],
    correctAnswer: "Unter die Haut",
    explanation: "Eine subkutane Injektion wird in das Unterhautfettgewebe (Subcutis) verabreicht, z.B. bei Insulin oder Heparin."
  },
  {
    question: "Welche Aufgabe hat das Hämoglobin im Blut?",
    options: ["Blutgerinnung", "Abwehr von Krankheitserregern", "Transport von Sauerstoff", "Transport von Nährstoffen"],
    correctAnswer: "Transport von Sauerstoff",
    explanation: "Hämoglobin ist der rote Blutfarbstoff in den Erythrozyten (roten Blutkörperchen) und ist für den Transport von Sauerstoff von der Lunge zu den Körperzellen verantwortlich."
  },
  {
    question: "Was ist ein Dekubitus?",
    options: ["Eine Hautinfektion", "Eine allergische Hautreaktion", "Ein Druckgeschwür", "Ein blauer Fleck"],
    correctAnswer: "Ein Druckgeschwür",
    explanation: "Ein Dekubitus ist eine lokale Schädigung der Haut und des darunterliegenden Gewebes, die durch langanhaltenden Druck oder Reibung entsteht."
  },
  {
    question: "Was ist bei der Kommunikation mit einem schwerhörigen Patienten wichtig?",
    options: ["Sehr laut schreien", "Deutlich, langsam und in normaler Lautstärke sprechen", "Nur schriftlich kommunizieren", "Den Patienten nicht direkt ansehen"],
    correctAnswer: "Deutlich, langsam und in normaler Lautstärke sprechen",
    explanation: "Lautes Schreien verzerrt das Klangbild. Deutliche Aussprache, Blickkontakt und eine normale Lautstärke unterstützen das Lippenlesen und Verstehen."
  },
  {
    question: "Wie viele Lappen hat die rechte Lunge eines Menschen?",
    options: ["Einen", "Zwei", "Drei", "Vier"],
    correctAnswer: "Drei",
    explanation: "Die menschliche Lunge ist asymmetrisch. Die rechte Lunge besteht aus drei Lungenlappen (Ober-, Mittel- und Unterlappen), die linke nur aus zwei, um Platz für das Herz zu schaffen."
  },
  {
    question: "Was ist die Hauptfunktion der Nieren?",
    options: ["Verdauung von Fetten", "Produktion von Hormonen für das Wachstum", "Filterung des Blutes und Ausscheidung von Abfallstoffen", "Speicherung von Galle"],
    correctAnswer: "Filterung des Blutes und Ausscheidung von Abfallstoffen",
    explanation: "Die Nieren filtern Abfallprodukte und überschüssige Flüssigkeit aus dem Blut, die dann als Urin ausgeschieden werden. Sie regulieren auch den Blutdruck und den Elektrolythaushalt."
  },
  {
    question: "Was versteht man unter Empathie in der Pflege?",
    options: ["Mitleid mit dem Patienten haben", "Die Gefühle und Perspektive des Patienten nachvollziehen können", "Alle Wünsche des Patienten erfüllen", "Dem Patienten zustimmen, auch wenn er Unrecht hat"],
    correctAnswer: "Die Gefühle und Perspektive des Patienten nachvollziehen können",
    explanation: "Empathie ist die Fähigkeit, sich in die Lage einer anderen Person hineinzuversetzen, ohne deren Gefühle zu den eigenen zu machen. Es ist eine wichtige Grundlage für eine vertrauensvolle Pflegebeziehung."
  },
  {
    question: "Welche der folgenden Maßnahmen ist eine wichtige Thromboseprophylaxe?",
    options: ["Ruhigstellung der Beine", "Ausreichende Flüssigkeitszufuhr und Bewegung", "Tragen von engen Socken", "Vermeidung von Kompressionsstrümpfen"],
    correctAnswer: "Ausreichende Flüssigkeitszufuhr und Bewegung",
    explanation: "Bewegung (z.B. Fußgymnastik) aktiviert die Muskelpumpe und fördert den venösen Rückfluss. Ausreichend Flüssigkeit hält das Blut fließfähig. Beides wirkt der Bildung von Blutgerinnseln entgegen."
  },
  {
    question: "Was ist ein Apoplex?",
    options: ["Ein Herzinfarkt", "Ein epileptischer Anfall", "Ein Schlaganfall", "Eine schwere Infektion"],
    correctAnswer: "Ein Schlaganfall",
    explanation: "Apoplex oder apoplektischer Insult ist der medizinische Fachbegriff für einen Schlaganfall, der durch eine plötzliche Durchblutungsstörung im Gehirn verursacht wird."
  },
  {
    question: "Welcher Blutzuckerwert (nüchtern) gilt als normal?",
    options: ["< 100 mg/dl (5.6 mmol/l)", "120 - 140 mg/dl", "150 - 180 mg/dl", "> 200 mg/dl"],
    correctAnswer: "< 100 mg/dl (5.6 mmol/l)",
    explanation: "Ein Nüchternblutzucker unter 100 mg/dl (5.6 mmol/l) wird als normal angesehen. Werte zwischen 100 und 125 mg/dl deuten auf eine gestörte Glukosetoleranz (Prädiabetes) hin."
  },
  {
    question: "Was ist die '5-R-Regel' bei der Medikamentenverabreichung?",
    options: ["Richtiger Patient, Richtiges Medikament, Richtige Dosierung, Richtige Applikationsform, Richtiger Zeitpunkt", "Ruhiger Patient, Ruhiger Raum, Reines Wasser, Richtige Hand, Rasche Gabe", "Rezept, Rücksprache, Ruhe, Reinigung, Rhythmus", "Riechen, Raten, Reichen, Rufen, Rennen"],
    correctAnswer: "Richtiger Patient, Richtiges Medikament, Richtige Dosierung, Richtige Applikationsform, Richtiger Zeitpunkt",
    explanation: "Die 5-R-Regel (inzwischen oft erweitert auf 6R oder mehr) ist eine grundlegende Sicherheitsüberprüfung, um Medikationsfehler zu vermeiden."
  },
  {
    question: "Welcher Erreger verursacht am häufigsten Harnwegsinfekte?",
    options: ["Staphylokokken", "Streptokokken", "Escherichia coli (E. coli)", "Noroviren"],
    correctAnswer: "Escherichia coli (E. coli)",
    explanation: "Das Bakterium Escherichia coli, das normalerweise im Darm vorkommt, ist für die meisten unkomplizierten Harnwegsinfekte verantwortlich."
  },
  {
    question: "Was ist bei der Lagerung von Insulin zu beachten?",
    options: ["Muss immer eingefroren werden", "Sollte bei direkter Sonneneinstrahlung gelagert werden", "Angebrochene Pens bei Raumtemperatur, Vorräte im Kühlschrank", "Kann bei beliebiger Temperatur gelagert werden"],
    correctAnswer: "Angebrochene Pens bei Raumtemperatur, Vorräte im Kühlschrank",
    explanation: "Ungeöffnetes Insulin wird im Kühlschrank (nicht in der Tür!) gelagert. Einmal in Gebrauch, sollte es bei Raumtemperatur aufbewahrt werden, um Hautreizungen zu vermeiden, und ist ca. 4 Wochen haltbar."
  },
  {
    question: "Was bedeutet Dysphagie?",
    options: ["Sprachstörung", "Schluckstörung", "Hörstörung", "Sehstörung"],
    correctAnswer: "Schluckstörung",
    explanation: "Dysphagie ist der medizinische Fachbegriff für Schwierigkeiten oder Schmerzen beim Schlucken. Dies erfordert besondere Aufmerksamkeit bei der Nahrungs- und Flüssigkeitsgabe."
  },
  {
    question: "Welches Organ ist primär für die Entgiftung des Körpers zuständig?",
    options: ["Magen", "Lunge", "Leber", "Milz"],
    correctAnswer: "Leber",
    explanation: "Die Leber ist das zentrale Stoffwechselorgan und spielt eine entscheidende Rolle bei der Entgiftung, indem sie schädliche Substanzen wie Alkohol und Medikamentenrückstände abbaut."
  },
  {
    question: "Was ist der Glasgow Coma Scale (GCS)?",
    options: ["Eine Schmerzskala", "Ein Instrument zur Beurteilung von Bewusstseinsstörungen", "Ein Test für die Lungenfunktion", "Eine Skala zur Messung des Ernährungszustands"],
    correctAnswer: "Ein Instrument zur Beurteilung von Bewusstseinsstörungen",
    explanation: "Der GCS ist ein standardisiertes Schema zur Beurteilung der Bewusstseinslage eines Patienten nach Punkten, basierend auf Augenöffnen, verbaler Reaktion und motorischer Reaktion."
  },
  {
    question: "Was ist eine Kontraktur?",
    options: ["Ein Muskelkrampf", "Eine Gelenkversteifung durch Verkürzung von Muskeln und Sehnen", "Eine Nervenentzündung", "Ein Knochenbruch"],
    correctAnswer: "Eine Gelenkversteifung durch Verkürzung von Muskeln und Sehnen",
    explanation: "Eine Kontraktur entsteht oft durch Bewegungsmangel und führt zu einer dauerhaften, schmerzhaften Bewegungseinschränkung eines Gelenks. Regelmäßige Mobilisation ist die beste Prophylaxe."
  },
  {
    question: "Welche Aussage zur Schweigepflicht ist korrekt?",
    options: ["Sie gilt nur für Ärzte, nicht für Pflegepersonal.", "Sie darf gebrochen werden, wenn Familienangehörige nachfragen.", "Sie gilt über den Tod des Patienten hinaus.", "Informationen dürfen an Kollegen weitergegeben werden, auch wenn sie nicht an der Behandlung beteiligt sind."],
    correctAnswer: "Sie gilt über den Tod des Patienten hinaus.",
    explanation: "Die Schweigepflicht ist eine gesetzliche Verpflichtung für alle im Gesundheitswesen Tätigen. Sie schützt die Privatsphäre des Patienten und erlischt nicht mit dessen Tod."
  },
  {
    question: "Was misst die Pulsoxymetrie?",
    options: ["Den Puls und die arterielle Sauerstoffsättigung", "Den Blutdruck", "Den Blutzucker", "Die Atemfrequenz"],
    correctAnswer: "Den Puls und die arterielle Sauerstoffsättigung",
    explanation: "Ein Pulsoxymeter ist ein nicht-invasives Gerät (meist ein Clip am Finger), das die Pulsfrequenz und den prozentualen Anteil des mit Sauerstoff gesättigten Hämoglobins im arteriellen Blut (SpO2) misst."
  },
  {
    question: "Welche Pflegemaßnahme ist bei einem Patienten mit trockener Haut besonders wichtig?",
    options: ["Häufiges Waschen mit Seife", "Verwendung von alkoholhaltigen Lotionen", "Anwendung von rückfettenden Wasser-in-Öl-Emulsionen", "Kräftiges Abrubbeln mit dem Handtuch"],
    correctAnswer: "Anwendung von rückfettenden Wasser-in-Öl-Emulsionen",
    explanation: "Trockene Haut benötigt Feuchtigkeit und Fett. Rückfettende Präparate (W/O-Emulsionen) unterstützen die Wiederherstellung der Hautbarriere, während Seife und Alkohol die Haut zusätzlich austrocknen."
  }
];
