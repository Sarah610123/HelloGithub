# TDEE & Calorie-Deficit Calculator

An interactive, mobile-friendly calculator for a lean, athletic user whose
priority is **preserving lean mass while losing fat**. It uses a
**component-based energy model** (BMR + NEAT + Exercise + TEF) rather than a
single activity multiplier, so step count is added explicitly and never
double-counted with structured training.

## Run it

```bash
npm install
npm run dev
```

Then open the printed local URL (default http://localhost:5173).

To build a static version:

```bash
npm run build && npm run preview
```

## What's inside

- `src/TDEECalculator.jsx` — the self-contained React component (inline
  styling, no UI dependencies). Pure calc helpers (`calcBmr`, `calcNeat`,
  `calcExercise`, `calcTdee`) are exported for easy testing.
- `src/main.jsx`, `index.html`, `vite.config.js` — minimal Vite scaffolding
  to render it in the browser.

## How the numbers work

| Component | Formula |
|---|---|
| **BMR** | Katch-McArdle `370 + 21.6 × lean mass` when body fat % is given, else Mifflin-St Jeor (female) `(10×kg)+(6.25×cm)−(5×age)−161` |
| **NEAT** | `steps × 0.04 × (weight kg / 70)` |
| **Exercise** | `(sessions/week × kcal/session) ÷ 7` |
| **TEF** | `10% × (BMR + NEAT + Exercise)` |
| **TDEE** | sum of the four above |

Target intake = TDEE − chosen deficit. Projected fat loss uses
7,700 kcal ≈ 1 kg, shown per week and per month.

**Lean-mass guardrails** warn when the target intake drops below BMR or below
1,350 kcal, or when the deficit exceeds 20% of TDEE. A protein target of
1.8–2.2 g/kg bodyweight is always shown.
