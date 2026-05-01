# Restaurant Landing Page - Tier 2 Ejecutivo

A premium, conversion-focused restaurant landing page built with React, Tailwind CSS, and Vite. Features multi‑language support (English/Spanish), dark mode, WhatsApp ordering system, and professional UX designed to increase trust and conversions.

## 🚀 Features

- **Multi‑language support** (EN/ES) with React Context API
- **Dark/light mode** with system preference detection
- **Hero section** with strong branding and trust indicators
- **Interactive menu** with “Most Popular” highlights
- **Testimonials section** showcasing social proof
- **Google Maps integration** for location trust
- **Contact section** with full details
- **WhatsApp ordering system** with structured message templates
- **Sticky CTA** (order button) always visible
- **Fully responsive** design (mobile, tablet, desktop)
- **Professional spacing & typography** for premium feel

## 🧠 Psychology & Conversion Principles

1. **Social Proof** – Customer reviews, ratings, trust badges
2. **Authority** – Premium design, established since 2005
3. **Reduced Friction** – Direct WhatsApp ordering, minimal form fields
4. **Trust Signals** – Contact info, physical address, Google Maps
5. **Urgency/Scarcity** – “Most Popular” badges, fast response times

## 🛠️ Tech Stack

- **React 19** (with React Compiler)
- **TypeScript**
- **Vite** (build tool)
- **Tailwind CSS v4** (styling)
- **React Icons** (icon library)
- **Context API** (state management)

## 📁 Project Structure

```
src/
├── components/
│   ├── Hero/           # Hero section
│   ├── Menu/           # Menu cards
│   ├── Testimonials/   # Customer reviews
│   ├── Contact/        # Contact info & map
│   ├── Order/          # WhatsApp ordering form
│   ├── Layout/         # Header, Footer, StickyCTA
│   └── Shared/         # Language/theme toggles
├── contexts/           # Language & Theme providers
├── data/              # Translation dictionary
└── utils/             # Helpers (if any)
```

## 🚦 Getting Started

### Prerequisites
- Node.js 18+ and npm

### Installation
```bash
npm install
```

### Development
```bash
npm run dev
```
Runs the app at `http://localhost:5173`.

### Build for Production
```bash
npm run build
```
Outputs to `dist/` folder.

### Linting
```bash
npm run lint
```

## 🌐 Multi‑Language Usage

The app includes a complete English/Spanish translation system. The language toggle is located in the top‑right corner. Translations are managed in `src/data/translations.ts`.

## 🌗 Dark Mode

The theme automatically adapts to the user’s system preference. A manual toggle is provided in the header.

## 📱 WhatsApp Ordering

The order form captures:
- Customer name
- Delivery option (pickup/delivery)
- Order details

On submission, a pre‑formatted message opens in WhatsApp, ready to send. The restaurant’s phone number is taken from the contact translations.

## 🎨 Design Notes

- **Color palette**: Amber/orange gradients for warmth, gray neutrals for professionalism.
- **Typography**: System fonts with careful hierarchy.
- **Spacing**: Consistent padding/margins using Tailwind’s spacing scale.
- **Responsive**: Built with mobile‑first breakpoints.

## 📈 Conversion Optimizations

- Sticky CTA reduces distance to action
- Trust badges above the fold
- Clear visual hierarchy guiding the eye to order buttons
- Minimal form fields to decrease abandonment
- Familiar platform (WhatsApp) increases comfort

## 📄 Documentation

See `UX_STRATEGY.md` for a detailed breakdown of UX decisions and psychological principles.

## 📝 License

MIT