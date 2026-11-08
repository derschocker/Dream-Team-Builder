# Dream Team Builder

Die Dream Team Builder Website zeigt dem Nutzer an, welche Athleten ein Dream Team bilden.
Es besteht die Möglichkeit, zwischen Fußball und Basketball zu entscheiden.
Anwender können diese Website nutzen, um sich in ihren Fantasy-Ligen einen Vorteil zu sichern.

## Frontend (Vue.js 3 + TypeScript + Vite)

- Entität: `Athlete` (`src/types/Athlete.ts`)
- Eigene Komponente: `AthleteList` (`src/components/AthleteList.vue`) rendert eine Liste von Athleten mit `v-for`
- Beispieldaten: `src/views/HomeView.vue`

## Setup

```sh
npm install
npm run dev        # Dev-Server
npm run test:unit  # Unit-Tests (Vitest)
npm run build      # Production-Build
```
