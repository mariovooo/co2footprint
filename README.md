
# CO₂-Footprint Dashboard

Webanwendung, die exemplarisch die globalen CO₂-Emissionen von Ländern und Unternehmen visualisiert.

## Technologien

- **Frontend**: [React](https://reactjs.org/)
- **Design**: [Material UI (MUI)](https://mui.com/)
- **Datenbasis**: JSON-Datei mit Beispieldaten aus öffentlich zugänglichen Quellen
- **Deployment**: statisches Hosting auf `co2.mariovogel.de`
- **Versionierung**: Git / GitHub

## Installation

1. **Voraussetzung:** Node.js ≥ 14

2. **Projekt clonen:**
   ```bash
   git clone https://github.com/mariovooo/co2footprint.git
   cd co2footprint/frontend
   ```

3. **Abhängigkeiten installieren:**
   ```bash
   npm install
   ```

4. **Lokale Entwicklung starten:**
   ```bash
   npm start
   ```

5. **Build für Deployment:**
   ```bash
   npm run build
   ```

## Live-Demo

**https://co2.mariovogel.de**

> Hinweis: Die Seite befindet sich aktuell in der Entwicklung. Crawler werden per `robots.txt` und `meta`-Tags blockiert.

## Funktionen

- Tabellenansicht mit Filter- und Suchfunktion
- Diagramm-Visualisierung der gefilterten Daten
- Burger-Menü
- Lokales Inhaltsverzeichnis per Drawer mit Sprachrichtungs-Erkennung (LTR/RTL)
- Footer mit Sprachauswahl und rechtlichen Links

## ToDo

- (optional) Integration eines Backends
- (optional) Integration TypeScript
- (optional) Migration auf Next.js für Server Side Rendering (-> SEO)
- ScrollToTop fix wenn Seite ausgewählt wird
- Ankerlink Scroll Header Offset (momentan Workaround scroll-margin-top mit festem Pixelwert)

## Lizenz

MIT-Lizenz – freie Nutzung für nicht-kommerzielle Zwecke (Non-Profit-Projekt).

## Datenquellen

- Unternehmen: [Carbon Majors Report (2017)](https://climateaccountability.org/pdf/CarbonMajorsRpt2017%20Jul17.pdf)
- Länder: [Climate Watch – GHG Emissions](https://www.climatewatchdata.org/ghg-emissions)
