# webcl-fs21-2
**Klasse**: 6iCbb

Die *Aufzeichnungen* sowie der aktuelle *Punktestand* der Studierenden sind im jeweiligen Wochenchannel innerhalb von Teams verfügbar.

## Woche 7 - SVG & Canvas
**Datum/Uhrzeit:** 13.04.2021 - 12:15 bis 15:00

### Themen
- Heutiges Goodie: [Rippleeffekt auf Buttons](./week7/CssRipple.html) - Timestamps Präsentation (1. Lektion): [00:00] - [38:00]
  - Hauptthema des [Goodies sind die CSS-Custom-Properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties), welche in diesem Beispiel auch innerhalb von JS genutzt werden. Es wurden verschiedene Möglichkeiten vorgeschlagen, wie man gewisse Daten zentral halten kann, wobei diese Lösung explizit präsentiert wurde.
  - Weitere behandelte Themen: [Clip-Path](https://developer.mozilla.org/de/docs/Web/CSS/clip-path), [mix-blend-mode](https://developer.mozilla.org/de/docs/Web/CSS/mix-blend-mode), [animation mit keyframes](https://developer.mozilla.org/de/docs/Web/CSS/CSS_Animations/Using_CSS_animations) (Man beachte z.B. die Prozentangabe für den Zeitfortschritt, um das Element am Ende wieder auszublenden)
- Präsentation der Spezialaufgabe über das Multi project planning tool (D. Lagger, M. de Laat)
  - Präsentation UI und UX: (2. Lektion) [02:00] - [09:00]
  - Fragen und weiterführende Diskussion [09:00] - [44:42]
    - Diverse Inputs und Ideen für die präsentierte Lösung
- SVG & Canvas anhand des [Progress-Gauge Beispiels](./week7/canvas-gauge-sketch/View.html)
  - Intro (3. Lektion) [00:00] - [08:00]
  - Walkthrough durch den Code, mehr Details zu bestimmten Teilen (3.Lektion) [08:00] - [40:00]
  - Diskussion
    - Hinweis auf "Problematik", dass eine .onclick-Zuweisung im Gegensatz zu addEventListener destruktiv ist bzw. die bisherigen Listener überschreibt/entfernt
    - Die Verwendung von Canvas ist sehr performant und wird GPU-beschleunigt, sofern dies möglich ist.
- Weitere Beispiele (3.Lektion) [40:00] - [52:00]
  - [SVG Eyes](./week7/svg-eyes-sketch/Eyes.html)
    - Hinweis darauf, dass SVGs bei Grafiktools beim Exportieren teilweise "vereinfacht" werden bzw. Informationen verlieren und so eine inkonsistente Darstellung entsteht. Man kann sich dazu meist nur mit einer "händischen" Korrektur helfen
    - Man kann mit Caching und Ebenen arbeiten, damit man bei umfangreicherer Verwendung von Canvas nicht bei jeder Änderung das gesamte Bild neu rendern muss
  - [Steelseries Canvas](https://github.com/HanSolo/SteelSeries-Canvas)
    - Diverse UI-Elemente, welche mit Canvas umgesetzt wurden und in den Demos jeweilig "frei" konfigurierbar sind
### Empfohlene Aktivitäten auf nächste Woche
- Review

### Vergebene Aufgaben
- Einführung in Bezier-Kurven (P.Schmid, J.Christ)

---

## Woche 6 - Projector Pattern mit spezifischem CSS (CSS++)
**Datum/Uhrzeit:** 30.03.2021 - 12:15 bis 15:00

### Themen
- Heutiges Goodie: CSS Specificity (L.Kern) - Timestamps Präsentation (1. Lektion): [19:30] - [29:00]
  - Die Präsentation sowie den dazugehörigen Code findet sich in den MS Teams-Files unter Woche 6
  - Behandelte Themen: [The Cascade](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance#the_cascade), [Specificity](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance#specificity), [Inheritance](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance#inheritance), [Specificity Calculator](https://specificity.keegan.st/) & Live-Coding
  - Anmerkungen von D. König sowie Beantwortung von Fragen: 1. Lektion: [29:00] - [34:00] & 2. Lektion: [00:00] - [09:00]
- Präsentation über die [Table Projectoren](https://github.com/WebEngineering-FHNW/webcl-fs21-2/pull/9/files) (J.Hadorn, J.Kennedy)
  - Timestamps (2. Lektion): [09:00] - [20:00]
  - Vorstellung der Änderungen innerhalb der Sturktur, welche vorgenommen wurden (Generalisierung des Codes)
  - Vorführen des Nutzens anhand des "Car.js"-Beispiels
- Projector Pattern mit spezifischem CSS
  - Einführung in die Thematik und den Nutzen (2. Lektion) [20:00] - [36:36]
    - Wie wird das CSS organiseriert, welches für den Projector spezifsich ist, wie wird es gruppiert
    - Analogie mit einem Interface in Java, in JS gelöst über die expliziten Modulexports / -imports (agiert als "Interfaceersatz")
  - Livecoding (3. Lektion) [00:00] - [21:45]
    - Mittels pageCSS im JS (als Konstante) den Style dynamisch halten & als Export angeben (geschlossene Variante - mehr Kontrolle)
    - Alternative Variante: in einem eigenen CSS-File definieren und dieses importieren (offenere Variante - mehr Flexibilität für Zusammenarbeit)
### Empfohlene Aktivitäten auf nächste Woche
- Review

### Vergebene Aufgaben
- UX/UI Gestaltungskonzept für Entwickler/Projektzuweisung (D. Lagger, M. de Laat)

---

## Woche 5 - Projector Pattern
**Datum/Uhrzeit:** 23.03.2021 - 12:15 bis 15:00

### Themen
- Heutiges [Goodie: Blurred gradient border](./week5/BackBlur.html) ([z-index](https://developer.mozilla.org/de/docs/Web/CSS/z-index), [linear-gradient()](https://developer.mozilla.org/de/docs/Web/CSS/linear-gradient()), [blur()](https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/blur()), [position](https://developer.mozilla.org/de/docs/Web/CSS/position))
  - Timestamps im Recording (1. Lektion): [4:30] - [31:30]
- Diskussion über den Modus der Punktevergabe
  - Begründung des derzeitigen Modus
  - Einführen von CSS-Goodie Aufgaben, welche Studenten bearbeiten (analog zu den anderen Vorträgen)
  - Timestamps im Recording (1. Lektion: [31:30] - [56:04])
- Präsentation der Aufgaben auf diese Woche
    - Tests für Master-Detail (O.Studer & R.von Arx)
        - Code ist in diesem Repo ([Siehe hier](./week5/person/personTest.js))
        - Timestamps im Recording (2. Lektion): Vorstellung [1:30] - [9:30], Fragen [9:30] - [19:00]
- Projector Pattern
  - Theorie (Problemstellung, Lösung, Nutzen) (Timestamps 3. Lektion: [23:00] - [46:00])
  - Livecoding innerhalb des Projekts (Timestamps 3. Lektion: [2:00] - [30:00])
### Empfohlene Aktivitäten auf nächste Woche
- Review

### Vergebene Aufgaben
- CSS-Goodie: Specificity (L.Kern)
- HTML-Table Projector (J.Hardorn & J.Kennedy)

---

## Woche 4 - Master Detail & spezialisierter Projektor
**Datum/Uhrzeit:** 16.03.2021 - 12:15 bis 15:00

### Themen
- Heutiges [Goodie: CSS Collapsible](./week4/Goodie-4-CSSCollapse.html) ([Custom-Properties](https://developer.mozilla.org/en-US/docs/Web/CSS/--*), [display](https://developer.mozilla.org/de/docs/Web/CSS/display)/[visibility](https://developer.mozilla.org/de/docs/Web/CSS/visibility), [Sibling selector](https://developer.mozilla.org/de/docs/Web/CSS/Adjacent_sibling_combinator))
  - Timestamps im Recording(1. Lektion): [2:30] - [43:00]
- Präsentation der Aufgaben auf diese Woche
    - Kurzeinführung in JSDoc (L.Jacobs & R.Koch)
        - [Github Repo](https://github.com/leonievaynie/JSDoc) mit Präsentation und Beispielen
        - Timestamps im Recording (2. Lektion): Vorstellung [0:30] - [14:00], Fragen [14:00] - [29:30]
        - [Praxisbeispiel](https://github.com/mattwolf-corporation/ip6_lambda-calculus-in-js) - Projektarbeit mit einer guten Dokumentation
- Spezialisierter Projector für Person
  - Timestamps im Recording (3. Lektion gesamt)

### Empfohlene Aktivitäten auf nächste Woche
- Livecoding der 3. Lektion nachvollziehen (siehe Recording). Am besten einen Teil herauslöschen (Vorschlag: die mit "todo" markierten Stellen im Ausgangscode) und probieren, diese Teile selbst zu programmieren

### Vergebene Aufgaben
- Tests für Master-Detail vervollständigen (O.Studer & R.von Arx)

---

## Woche 3 - Attribute Projector
**Datum/Uhrzeit:** 09.03.2021 - 12:15 bis 15:00

### Themen
- Heutiges [Goodie: CSS Triangle](./week3/CSSTriangle.html) ([Border](https://developer.mozilla.org/de/docs/Web/CSS/border), [clip-path](https://developer.mozilla.org/de/docs/Web/CSS/clip-path), [Filter](https://developer.mozilla.org/de/docs/Web/CSS/filter), [box-shadow](https://developer.mozilla.org/de/docs/Web/CSS/box-shadow))
- Präsentation der Aufgaben auf diese Woche
    - Media Queries (J.Hadorn & J.Hänggi)
        - [Github Repo](https://github.com/Hazzeldorn/MediaQueriesSummary)
        - Timestamps im Recording (1. Lektion): Vorstellung [28:30] - [40:00], Fragen [40:00 - 1:02:30]
    - Master-Detail-View (L.Kern & R.Winkelmann)
        - [Github Repo](https://github.com/lukecore/webcl-fs21-2/tree/master-detail-view)
        - Timestamps im Recording (2. Lektion): Vorstellung [0:50] - [14:20]
- Attribute Projector
    - reichhaltige Attribute

### Empfohlene Aktivitäten auf nächste Woche
- Review von Attribute Projector

### Vergebene Aufgaben
- Kurzeinführung in JSDoc (L.Jacobs & R.Koch)

---

## Woche 2 - Validation, Conversion & Attribute
**Datum/Uhrzeit:** 02.03.2021 - 12:15 bis 15:00
### Themen
- Heutiges [Goodie: HTML/CSS Validierung](./week2/CSSValidation.html) eines Formulars ([Valid Pseudoklasse](https://developer.mozilla.org/en-US/docs/Web/CSS/:valid), [Grid](https://developer.mozilla.org/de/docs/Web/CSS/CSS_Grid_Layout), [Values and Units](https://developer.mozilla.org/de/docs/Learn/CSS/Building_blocks/Values_and_units))
- Präsentation "Konvertierung und Validierung" (J.Christ, L.Dietiker)
- Nähere Betrachtung MVC
    - Mögliche Fallstricke (Falscher Dataflow, zu viele Abhängigkeiten)
    - Hierarchie MVC
- Einführung Attribute & LiveCoding Presentation-Model

### Empfohlene Aktivitäten auf nächste Woche
- Livecoding dieser Woche nochmals anschauen und nachvollziehen (Als Einstiegspunkt am besten View.html & Commit-History)

### Vergebene Aufgaben
- Master-Detail-View (L.Kern & R.Winkelmann)
- Media Queries (J.Hadorn & J.Hänggi)

---

## Woche 1 - Anschluss an WebPr finden
**Datum/Uhrzeit:** 23.02.2021 - 12:15 bis 15:00
### Themen
- Organisatorisches klären (Modulinhalt, Notengebung etc.)
- Wiedereinstieg von webpr anhand der Todo MVC-App (Onlineversion auf [*Github pages*](https://webengineering-fhnw.github.io/webcl-fs21-2/week1/todo/View.html)) mittels Codereading.

### Empfohlene Aktivitäten auf nächste Woche
- TodoMVC App durchgehen und verstehen (Vorschlag: Kommentare zum Verstandenen, Unklares und Fragen für nächste Woche notieren)
- Webpr-Kenntnisse im Allgemeinen auffrischen (u.a. Promises, Scheduler, [Arrow-Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions) und weitere Konzepte, welche im Todo-Projekt verwendet werden)

### Vergebene Aufgaben
- Wie kann man Validation und Konvertierungen in die Todo-MVC App eingbauen (J.Christ, L.Dietiker)
- Protokoll / Readme nachführen (R.Bürkli)