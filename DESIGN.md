---

version: alpha
name: Mistral AI French Homepage
description: A modular, brutalist-industrial design for an AI company, featuring a pixel-inspired aesthetic, high-contrast typography, and a structured bento-grid layout with vibrant green accents and their variants.
colors:
  primary: "#f9fbf7"
  secondary: "#f1f5ee"
  tertiary: "#e3eadf"
  accent-green: "#1fa65a"
  accent-green-dark: "#0b6b3a"
  text-primary: "#0f1a14"
  border: "#dce4d8"
  brand-lime: "#b5e61d"
  brand-emerald: "#2ecc71"
typography:
  fontSans: "Inter"
  fontMono: "Space Mono"
  fontDisplay: "ALTMistral"
  h1: { size: "4.5rem", weight: 500, lineHeight: "4.5rem" }
  h2: { size: "3.5rem", weight: 500, lineHeight: "3.75rem" }
  body: { size: "1rem", weight: 400, lineHeight: "1.5" }
spacing:
  base: "0.25rem"
  navHeight: "48px"
rounded:
  md: "0.375rem"
  lg: "0.5rem"
  xl: "0.75rem"
components:
  buttonPrimary: { background: "#0b1f14", color: "#f9fbf7", radius: "{rounded.md}" }
  buttonGhost: { background: "transparent", border: "1px solid {colors.border}" }
  card: { background: "{colors.primary}", border: "1px solid {colors.border}" }

---

## Overview

The visual personality of the Mistral AI site is a blend of European brutalism and digital-native pixel art. It uses a high-density grid system that evokes precision and technical infrastructure. The tone is authoritative yet vibrant, characterized by a soft green-tinted "surface-brand-primary" background that softens the harshness of the dark green-black technical elements. Motion is structured, utilizing "falling" animations for bento cards and translation effects for button icons, suggesting a fast, modern inference engine.

## Colors

The palette is grounded in light green-tinted neutrals and sharp green semantic colors.

- **Surfaces**: `{colors.primary}` (#f9fbf7) acts as the canvas, with `{colors.secondary}` (#f1f5ee) providing subtle depth for nested components and `{colors.tertiary}` (#e3eadf) for deeper layers.
- **Branding**: A fresh-to-deep green gradient is used for iconography and accents, ranging from `{colors.brand-lime}` (#b5e61d) through `{colors.brand-emerald}` (#2ecc71) and `{colors.accent-green}` (#1fa65a) to `{colors.accent-green-dark}` (#0b6b3a).
- **Contrast**: The site uses high-contrast dark green-blacks (#0f1a14) for text and interactive elements in light mode, with a mirrored inversion in dark mode.

## Typography

The typography strategy relies on the proprietary **ALTMistral** for display and UI headings, giving the brand a distinct, slightly geometric character. **Inter** is used for dense body copy to ensure legibility, while **Space Mono** appears in technical contexts, such as terminal windows and code snippets. Hierarchy is extremely rigid, with large display titles often featuring negative letter-spacing to enhance the industrial feel.

## Layout

The layout is strictly governed by a global grid with visible divider lines (`divide-x` and `divide-y`).

- **Navigation**: A fixed 48px top bar that spans the viewport width, partitioned into modular cells.
- **Bento Grid**: The main content sections use a responsive grid (typically 12 columns) where cards occupy varying spans.
- **Containers**: Content is constrained to a maximum width of 432 units (`max-w-432`) but often bleeds to the edges in specific hero sections.

## Elevation & Depth

Depth is achieved through layering and borders rather than soft shadows. The site follows a "flat-stack" philosophy where components are separated by 1px solid borders (`{colors.border}`). True elevation is rare; instead, interaction is signaled by background color shifts (e.g., hovering from `{colors.primary}` to `{colors.secondary}`) and z-index stacking during navigation dropdowns.

## Shapes

The geometric language is predominantly rectangular with controlled rounding. Buttons and small cards use `{rounded.md}` (6px), while larger containers use `{rounded.lg}`. A recurring pixel-mosaic motif appears in icons and the logo, reinforcing the building-block nature of AI models. Distinctive 45-degree rotated squares are used as decorative "markitecture" blocks in section transitions.

## Components

- **Global Navigation**: A multi-cell header with interactive dropdown menus and a persistent language switcher.
- **Bento Cards**: Large feature blocks that combine imagery, testimonials, and technical copy.
- **Terminal/Code Blocks**: High-contrast dark green-black containers for API examples using `{typography.fontMono}`.
- **Logo Slider**: An infinite-scroll marquee showcasing partner logos in grayscale with a color-reveal hover state.

## Do's and Don'ts

- **Do** use visible 1px borders to separate content sections.
- **Do** align icons and text to a strict pixel grid.
- **Do** use the green gradient (`{colors.brand-lime}` to `{colors.accent-green-dark}`) for primary CTAs and brand markers.
- **Don't** use soft, blurred drop shadows or rounded pill shapes for buttons.
- **Don't** use organic, hand-drawn illustrations; stick to pixel art or high-quality product renders.

## Accessibility

Contrast ratios are maintained at high levels, particularly for semantic text against the light green-tinted background. Focus states are clearly defined using high-contrast outlines or background shifts. Interactive targets like navigation items and buttons maintain a minimum 48px hit area where possible. Motion is sensitive to user preferences, with `prefers-reduced-motion` guards on heavy transition groups.

## Assets

- **Image**: https://mistral.ai/_astro/bento-financial_23gUEI.webp?dpl=6acfb48660afc799330005a0 — img[src]
- **Image**: https://mistral.ai/_astro/bento-public_EY01.webp?dpl=6acfb48660afc799330005a0 — img[src]
- **Image**: https://mistral.ai/_astro/Cloud_ZN8IfX.webp?dpl=6acfb48660afc799330005a0 — img[src]
- **Image**: https://mistral.ai/_astro/icon-temple_q8Hfq.webp?dpl=6acfb48660afc799330005a0 — img[src]
- **Image**: https://mistral.ai/_astro/ml4-post-thumbnail_Z5boYe.webp?dpl=6acfb48660afc799330005a0 — img[src]
- **Image**: https://mistral.ai/_astro/Vibe-1_ZQWub7.webp?dpl=6acfb48660afc799330005a0 — img[src]
- **Image**: https://mistral.ai/cms-media/api/media/file/axa-black.svg — AXA (black)
- **Image**: https://mistral.ai/cms-media/api/media/file/axa-white.svg — AXA (white)
- **Image**: https://mistral.ai/cms-media/api/media/file/bnp-paribas-black-1.svg — BNP Paribas (black)
- **Image**: https://mistral.ai/cms-media/api/media/file/bnp-paribas-white-1.svg — BNP Paribas (white)
- **Image**: https://mistral.ai/cms-media/api/media/file/cover-mistral-sovereign%20copie.webp — og:image
- **Image**: https://mistral.ai/cms-media/api/media/file/da97422f-47c7-4a3b-bc7e-759f994e5f4e.svg — ASML (black)
- **Image**: https://mistral.ai/cms-media/api/media/file/europen-patent-office-black.svg — img[src]
- **Image**: https://mistral.ai/cms-media/api/media/file/europen-patent-office-white.svg — img[src]
- **Image**: https://mistral.ai/cms-media/api/media/file/icon-globe.svg — img[src]
- **Font**: https://mistral.ai/fonts/alt-mistral/ALTMistral-Regular.woff2 — custom display font
- **Font**: https://mistral.ai/fonts/alt-mistral/ALTMistral-Medium.woff2 — custom display font
- **Font**: https://mistral.ai/fonts/alt-mistral/ALTMistral-Semibold.woff2 — custom display font
- **Font**: https://mistral.ai/fonts/alt-mistral/ALTMistral-Italic.woff2 — custom display font
- **Font**: https://mistral.ai/fonts/alt-mistral/ALTMistral-MediumItalic.woff2 — custom display font
- **Font**: https://mistral.ai/fonts/alt-mistral/ALTMistral-SemiboldItalic.woff2 — custom display font
- **Font**: https://mistral.ai/fonts/inter/Inter-VariableFont.woff2 — body sans-serif
- **Font**: https://mistral.ai/fonts/space-mono/SpaceMono-Regular.woff2 — code font
- **Image**: https://mistral.ai/images/cat/cat-sitting-black.gif — decorative sitting cat gif
- **Image**: https://mistral.ai/images/footer/gradient.png — footer background gradient
- **Background**: https://mistral.ai/images/noise/background@1x.png.png — texture noise
- **Background**: https://mistral.ai/images/noise/noise-rectangle-vertical@0.5x.png — texture noise
- **Background**: https://mistral.ai/images/noise/noise-rectangle.png — texture noise
- **Background**: https://mistral.ai/images/noise/noise.png — texture noise
- **Embed**: https://www.googletagmanager.com/ns.html?id=GTM-TX82W9W8 — GTM frame
