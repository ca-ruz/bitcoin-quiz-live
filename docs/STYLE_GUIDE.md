# ₿Quiz Live — Website Style Guide
> Reference for `docs/index.html` — what's what, what color is what, and how to change it.

---

## Color Palette

| Name | Variable | Hex | Used For |
|---|---|---|---|
| Electric Green | `--accent` | `#39ff14` | Logo, hero title "Bitcoin", links, step numbers, pre/code copied state, grid bg |
| Neon Orange | `--orange` | `#ff7700` | Section labels, NWC/LND titles, NWC/LND badge, step number circles |
| Electric Blue | `--blue` | `#4cc9f0` | Code block text, Características card text + modal text |
| Neon Purple | `--purple` | `#b044ff` | Nav links, "Cómo instalarlo" button, Características titles + modal titles, feature icon glow |
| Background | `--bg` | `#080b08` | Page background, demo card bg |
| Card | `--card` | `#0e1510` | All card backgrounds (demo, feature, ln-cards) |
| Border | `--border` | `#1a2e1c` | Default borders |
| Text | `--text` | `#dff5df` | Headings, NWC/LND body text, modal titles (non-feature) |
| Muted | `--muted` | `#8866cc` | Subtitles, footer text |

---

## Component Map

### Navigation Bar (`nav`)
| Element | Class | Color | Notes |
|---|---|---|---|
| Logo "₿Quiz Live" | `.nav-logo` | Green | Clickable — scrolls to top of page |
| "Live" in logo | `.nav-logo .live` | Green | Same as accent |
| Nav links | `.nav-links a` | Purple | Hover → white |
| Nav links hover | `.nav-links a:hover` | White | — |

---

### Hero Section
| Element | Class | Color | Notes |
|---|---|---|---|
| Badge "⚡ Open Source · GPL v3" | `.hero-badge` | Purple border + text | Pill shape |
| "Bitcoin" in h1 | `.hero h1 .bitcoin` | Orange with glow | — |
| Body paragraph | `.hero p` | Muted (purple-grey) | — |
| Primary button "Ver en GitHub" | `.btn-primary` | Green bg, dark text | Opens new tab |
| Secondary button "Cómo instalarlo" | `.btn-outline` | Purple border + text | Square corners |

---

### Hero Demo Cards wrapper (`demo-screen`)
| Element | Class | Color |
|---|---|---|
| Outer container glow | `.demo-screen` | Faded **purple** glow |

### Hero Demo Cards (Presentador, Jugadores, Tiempo Real, Recompensa)
| Element | Class | Color | Notes |
|---|---|---|---|
| Card border + glow | `.demo-card` | Faded green (always on) | — |
| Card hover | `.demo-card:hover` | Brighter green + lifts 3px + brightens | `filter: brightness(1.12)` |
| Icon | `.demo-card .icon` | Emoji | — |
| Title | `.demo-card strong` | White | — |
| Description | `.demo-card p` | Green (`rgba(57,255,20,.7)`) | — |
| **Modal glow** | JS `glowRgb` | Green (`57,255,20`) | — |
| **Modal title** | JS `titleColor` | White | — |
| **Modal text** | JS `textColor` | Green | — |

> Click any card → zooms into modal. Click outside or Esc to close.

---

### Características Cards (Features)
| Element | Class | Color | Notes |
|---|---|---|---|
| Card border + glow | `.feature` | Faded blue (always on) | — |
| Card hover | `.feature:hover` | Brighter blue + lifts 3px + brightens | `filter: brightness(1.12)` |
| Card active/click | `.feature:active` | Intense blue glow | — |
| Icon | `.feature .icon` | Emoji with purple drop-shadow glow | — |
| Title (h3) | `.feature h3` | Purple | — |
| Description | `.feature p` | Blue (`rgba(76,201,240,.8)`) | — |
| **Modal glow** | JS `glowRgb` | Blue (`76,201,240`) | Standard intensity |
| **Modal title** | JS `titleColor` | Purple | — |
| **Modal text** | JS `textColor` | Blue | — |

> Icons: 🟠 ⚡ ⚙️ 📡 🏆 💸 📲 🌐

---

### Instalación Steps
| Element | Class | Color |
|---|---|---|
| Step number circles | `.step-num` | Orange bg, dark text, orange glow |
| Step title | `.step-body h3` | White |
| Step description | `.step-body p` | Muted (purple-grey) |

#### Code Blocks (`pre`) and Inline Code (`code`)
| State | Border | Text |
|---|---|---|
| Default | Faded blue | Faded blue |
| Hover | Bright blue glow + lifts 2px | Bright blue |
| Clicked / copied | Green glow (1 second) | Green (1 second) |

> Click any `pre` block or inline `code` to copy to clipboard.

---

### Lightning Section (NWC & LND Cards)
| Element | Class | Color | Notes |
|---|---|---|---|
| Card border + glow | `.ln-card` | Faded orange (always on) | `rgba(255,119,0,.2)` border |
| Card hover | `.ln-card:hover` | Bright orange + lifts 3px + brightens | `filter: brightness(1.12)` |
| Card active/click | `.ln-card:active` | Intense orange glow | — |
| "Recomendado" badge | `.ln-badge` | Orange bg, dark text | — |
| Title (h3) | `.ln-card h3` | Orange | — |
| Description | `.ln-card p` | White | — |
| Wallet/option list | `.ln-card ul` | White | — |
| Code block inside card | `pre` | Same as install section | Click to copy |
| **Modal glow** | JS `glowRgb` | Orange (`255,119,0`) | **Bright** intensity (`.45`/`.2`) |
| **Modal title** | JS `titleColor` | Orange | — |
| **Modal text** | JS `textColor` | White | — |
| **Modal code block** | `.modal-code` | Faded blue → bright blue hover → green copied | Click to copy |

> Click any card → zooms into modal with full content (title, description, list, code).

---

### Footer
| Element | Class | Color |
|---|---|---|
| "₿Quiz Live" logo | `.footer-logo` | Green with glow |
| Right side text | — | Muted (purple-grey) |

---

## Modal System

Modals are built dynamically in JS when any card is clicked. The glow, title color, text color, and glow intensity all vary by card type:

| Card Type | Glow Color | Glow Intensity | Title | Body Text |
|---|---|---|---|---|
| Hero demo cards | Green | Normal | White | Green |
| Características cards | Blue | Normal | Purple | Blue |
| NWC / LND cards | Orange | **Bright** | Orange | White |

**To change modal colors:** edit `glowRgb`, `titleColor`, `textColor` in `openCardModal()` in the `<script>` at the bottom of `index.html`.

**To change modal glow brightness:** edit the opacity values in the inline `box-shadow` style — currently `isLn ? '.45' : '.18'` for outer glow.

---

## Hover Behavior (all interactive elements)

All cards, buttons, and code blocks share the same hover philosophy:
- **Lift**: `transform: translateY(-2px)` or `-3px`
- **Brighten**: `filter: brightness(1.12)` (cards only)
- **Glow intensifies**: border opacity and box-shadow increase
- **Transition**: `border-color`, `box-shadow`, `transform`, `filter` — all smooth

---

## Quick Reference: How to Change Things

| I want to change… | Find… |
|---|---|
| Main green accent | `--accent` in `:root` + update `rgba(57,255,20,…)` throughout |
| Orange color | `--orange` in `:root` + update `rgba(255,119,0,…)` throughout |
| Blue color | `--blue` in `:root` + update `rgba(76,201,240,…)` throughout |
| Purple color | `--purple` in `:root` + update `rgba(176,68,255,…)` throughout |
| Background grid | `background-image` on `body` |
| Hero wrapper glow color | `.demo-screen` box-shadow |
| Feature card glow | `.feature` and `.feature:hover` |
| Demo card glow | `.demo-card` and `.demo-card:hover` |
| NWC/LND card glow | `.ln-card` and `.ln-card:hover` |
| NWC/LND permanent glow | `.ln-card` base `border-color` and `box-shadow` |
| Card brightness on hover | `filter: brightness(…)` in each card's `:hover` rule |
| Copy flash duration | `setTimeout(…, 1000)` in `<script>` (1 second) |
| Modal animation speed | `cardZoomIn` keyframe — currently `.28s` |
| Nav link color | `.nav-links a { color: … }` |
| Section label color | `.section-label { color: … }` |
| GitHub links | Both have `target="_blank" rel="noopener noreferrer"` |
