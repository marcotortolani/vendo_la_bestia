# vendo-la-bestia

Landing page de venta para una **MacBook Pro M3 Pro 16" Space Black** — construida como micro-sitio de producto de alto impacto visual.

## El producto

| Spec | Detalle |

|---|---|
| Chip | Apple M3 Pro |
| CPU / GPU | 12-core / 18-core |
| RAM | 18GB Unified Memory |
| SSD | 512GB |
| Display | Liquid Retina XDR 16.2" 120Hz 1600 nits |
| Batería | 97% salud — 110 ciclos |
| Condición | Pristine (sin rayones, sin marcas de teclas) |
| Precio | US$ 3.500 |
| Ubicación | Piriápolis / Montevideo, Uruguay |

## Stack

- **Next.js 16** (Turbopack) + **TypeScript**
- **Tailwind CSS v4** (`@theme inline`)
- **Motion** (Framer Motion) para animaciones
- **shadcn/ui** para componentes base

## Estructura

```text
src/
├── app/
│   ├── layout.tsx          # Fonts: Space Grotesk + JetBrains Mono
│   ├── page.tsx            # Compositor de secciones
│   └── globals.css         # Design tokens (@theme inline)
├── components/
│   ├── Navigation.tsx      # Sticky nav
│   ├── WhatsAppFAB.tsx     # FAB mobile (aparece al scroll 200px)
│   └── sections/
│       ├── Hero.tsx
│       ├── BentoSpecs.tsx
│       ├── Performance.tsx      # Benchmark M3 Pro vs M1 Pro vs Windows i7
│       ├── VisualEvidence.tsx   # Carousel de fotos
│       ├── MarketPrice.tsx
│       ├── DeliveryProtocol.tsx
│       └── PurchaseProtocol.tsx
└── lib/
    └── constants.ts        # Toda la data de venta (precio, specs, contacto)
```

## Design tokens principales

| Token        | Valor          | Clase                    |
| ------------ | -------------- | ------------------------ |
| Cyber green  | `#0df293`      | `text-cyber`, `bg-cyber` |
| Void         | `#000000`      | `bg-void`                |
| Surface      | `#09090b`      | `bg-surface`             |
| Font display | Space Grotesk  | `font-display`           |
| Font mono    | JetBrains Mono | `font-mono`              |

## Desarrollo

```bash
npm install
npm run dev
npm run build
```

## Pendiente

- Reemplazar placeholders con fotos reales del equipo (`public/images/`)
- Obtener horas de pantalla desde System Settings > Screen Time
