# Tijdreiziger

Een Nederlandstalig tijdvakkenspel voor onderbouw VO met vijftien geïllustreerde speelkaarten. Tik op een tijdvak, of sleep met een muis. Elke ronde bevat tien gebeurtenissen: twee per periode, willekeurig gekozen uit vijftien voorbeelden. Na een fout mag je opnieuw proberen; de score telt hoeveel gebeurtenissen je in één keer goed plaatst.

## Spelen op een iPhone

Gebruik de website in Safari. Bekijk de afbeelding en het verhaal en tik op de juiste periode. Tik op **Volgende gebeurtenis** om verder te spelen. Slepen is op een telefoon niet nodig. Je kunt de website via het deelmenu **Zet op beginscherm** als snelkoppeling toevoegen.

Een los gedownload HTML-bestand opent op een iPhone vaak als voorvertoning zonder werkend JavaScript. Gebruik daar dus het webadres van de gepubliceerde site.

Voor GitHub Pages heeft deze site geen build nodig. Kies in de repository onder **Settings → Pages → Build and deployment** voor **Deploy from a branch**, branch **main**, map **/ (root)**. Pas wanneer GitHub de deployment als geslaagd meldt is de website gepubliceerd.

De illustraties zijn met AI gemaakte, verbeelde historische scènes, geen historische bronnen of exacte reconstructies. De scènes staan samen in `assets/history-cards.png`; het spel toont met een SVG-venster de passende afbeelding per kaart.

## Zelf spelen

Open `index.html` in je browser. Er is geen installatie nodig. Het spel werkt offline en slaat geen leerlinggegevens op.

Je kunt ook vanuit deze map een lokale server starten:

```sh
python3 -m http.server 8000 --bind 0.0.0.0
```

## Je eerste codewijziging

- `index.html` bevat de opbouw en teksten van het scherm.
- `style.css` bepaalt kleuren, lettergroottes en de mobiele weergave.
- `cards.css` bepaalt de geïllustreerde speelkaarten en de compacte telefoonweergave.
- `app.js` bevat de spelregels. Zoek naar `const events` om de gebeurtenissen te veranderen. Elk voorbeeld heeft een titel, beschrijving, datum, plaats, icoon, uitleg en een `period` die naar een van de vijf periodes verwijst.

Verander bijvoorbeeld de titel van een gebeurtenis, sla het bestand op en vernieuw de browser. De indeling staat bij `const periods`.

## Een downloadbare versie maken

```sh
python3 tools/export.py
```

Dit maakt `dist/tijdreiziger.html` met alle afbeeldingen en code ingebouwd, en `dist/tijdreiziger-code.zip` met de losse bestanden. De HTML-versie werkt zonder netwerk in een browser die lokale HTML toestaat. Op de iPhone gebruik je de website.

Oefenen toont de datum op de kaart. Uitdaging verbergt die datum tot het antwoord goed is; na twee fouten wordt de datum als hint gegeven. De grenzen van de tijdvakken blijven als steun zichtbaar. Klikken op een tijdvak is ook direct mogelijk. Met het toetsenbord: Tab om te navigeren, Enter of spatie om te kiezen.

## Inhoudelijke bron

SLO, *Eindadvies referentiekaders Ruimte en Tijd* (2022, met addendum maart 2026), onderdeel **2b. Referentiekader Tijd onderbouw voortgezet onderwijs**, gedrukte pagina’s 15–16 van de aangeleverde PDF:

| Hoofdperiode | Datering |
| --- | --- |
| Prehistorie | tot ca. 3000 v. Chr. |
| Oudheid | 3000 v. Chr. – 500 na Chr. |
| Middeleeuwen | 500–1500 |
| Vroegmoderne tijd | 1500–1800 |
| Moderne tijd | 1800–heden |

De twee bijschriften bij de moderne tijd zijn geen aparte hoofdperiodes in deze tabel. De gebeurtenissen zijn eigen lesvoorbeelden bij de ontwikkelingen uit het kader, geen letterlijke overname van voorgeschreven voorbeelden. Grensjaren zijn bewust vermeden. Periodegrenzen zijn benaderingen en kunnen per gebied verschillen. Het addendum wijst op kleine verschillen tussen het advies en de kerndoelen. Dit prototype oefent tijdsordening, niet het volledige referentiekader Tijd en Ruimte.
