---
name: Terminal Horizon
colors:
  surface: '#101419'
  surface-dim: '#101419'
  surface-bright: '#36393f'
  surface-container-lowest: '#0a0e14'
  surface-container-low: '#181c21'
  surface-container: '#1c2025'
  surface-container-high: '#262a30'
  surface-container-highest: '#31353b'
  on-surface: '#e0e2ea'
  on-surface-variant: '#bbcabf'
  inverse-surface: '#e0e2ea'
  inverse-on-surface: '#2d3136'
  outline: '#86948a'
  outline-variant: '#3c4a42'
  surface-tint: '#4edea3'
  primary: '#4edea3'
  on-primary: '#003824'
  primary-container: '#10b981'
  on-primary-container: '#00422b'
  inverse-primary: '#006c49'
  secondary: '#4cd7f6'
  on-secondary: '#003640'
  secondary-container: '#03b5d3'
  on-secondary-container: '#00424e'
  tertiary: '#c0c1ff'
  on-tertiary: '#1000a9'
  tertiary-container: '#9699ff'
  on-tertiary-container: '#1d17b2'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#6ffbbe'
  primary-fixed-dim: '#4edea3'
  on-primary-fixed: '#002113'
  on-primary-fixed-variant: '#005236'
  secondary-fixed: '#acedff'
  secondary-fixed-dim: '#4cd7f6'
  on-secondary-fixed: '#001f26'
  on-secondary-fixed-variant: '#004e5c'
  tertiary-fixed: '#e1e0ff'
  tertiary-fixed-dim: '#c0c1ff'
  on-tertiary-fixed: '#07006c'
  on-tertiary-fixed-variant: '#2f2ebe'
  background: '#101419'
  on-background: '#e0e2ea'
  surface-variant: '#31353b'
typography:
  display:
    fontFamily: Space Grotesk
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.03em
  headline-lg:
    fontFamily: Space Grotesk
    fontSize: 36px
    fontWeight: '600'
    lineHeight: 44px
    letterSpacing: -0.025em
  headline-lg-mobile:
    fontFamily: Space Grotesk
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 34px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Space Grotesk
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.02em
  headline-sm:
    fontFamily: Space Grotesk
    fontSize: 18px
    fontWeight: '500'
    lineHeight: 26px
    letterSpacing: -0.01em
  body-lg:
    fontFamily: JetBrains Mono
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: -0.01em
  body-md:
    fontFamily: JetBrains Mono
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 20px
    letterSpacing: 0em
  body-sm:
    fontFamily: JetBrains Mono
    fontSize: 11px
    fontWeight: '400'
    lineHeight: 16px
    letterSpacing: 0.01em
  label-md:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.04em
  label-sm:
    fontFamily: JetBrains Mono
    fontSize: 10px
    fontWeight: '600'
    lineHeight: 14px
    letterSpacing: 0.08em
  code-metric:
    fontFamily: JetBrains Mono
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 32px
    letterSpacing: -0.03em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  space-2xs: 0.125rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 0.75rem
  space-base: 1rem
  space-lg: 1.5rem
  space-xl: 2rem
  space-2xl: 3rem
  space-3xl: 4rem
  sidebar-width: 260px
  sidebar-collapsed-width: 64px
  gutter-desktop: 1.5rem
  gutter-mobile: 0.75rem
---

## Brand & Style

The design system projects absolute competence, engineering rigor, and forward-looking telemetry. Built for a high-performance full-stack engineer console and portfolio, the interface embodies an elevated command-center aesthetic. It speaks directly to engineering leaders, technical founders, and systems architects who appreciate performance density, precise layout orchestration, and micro-level feedback loops.

The visual style blends dark modern minimalism with tactile telemetry mechanics:
- Deep obsidian and charcoal bases replace standard generic dark modes, creating infinite visual depth.
- High-density information delivery with zero clutter: every pixel, divider, and monospace glyph exists to communicate status, state, or structure.
- Subtle, disciplined luminescence: radiant emerald and cyan accents act as active signal fires against low-reflectance structural panels rather than ornamental distraction.
- Utilitarian precision: strict geometry, subtle hairline borders, and monospaced data streams convey reliable, high-throughput software architecture.

## Colors

The color palette is engineered around dark optical comfort, extreme contrast efficiency, and operational signal clarity.

### Color Roles & Hierarchy
- **Base Surfaces (`#090D12`, `#0F1720`, `#16202C`)**: Layered deep-slate neutrals providing a low-strain workspace backdrop that enhances foreground readability.
- **Primary Accent (`#10B981`)**: High-efficiency emerald. Reserved for nominal states, primary call-to-actions, active telemetry nodes, runtime availability, and validated git deployments.
- **Secondary Accent (`#06B6D4`)**: Precision cyan. Deployed for real-time network streams, data ingress indicators, interactive filter tabs, and secondary diagnostics.
- **Tertiary Accent (`#6366F1`)**: Indigo infrastructure tone used sparingly for background orchestration graphs, pipeline stages, and service dependency links.
- **Critical & Warning Tiers**: High-visibility amber (`#F59E0B`) and laser crimson (`#EF4444`) for runtime exceptions, latency spikes, and destructive operations.

### Surface Color Logic
- `surface-canvas`: `#090D12` (Lowest layer, foundational viewport background)
- `surface-panel`: `#0F1720` (Card containers, table backdrops, metrics grids)
- `surface-elevated`: `#16202C` (Dropdowns, floating inspectors, modal dialogues)
- `border-hairline`: `rgba(255, 255, 255, 0.07)` (Structural boundaries)
- `border-focus`: `rgba(16, 185, 129, 0.45)` (Interactive focus rings with 4px glow)

## Typography

Typography establishes an intentional dialogue between architectural authority (`Space Grotesk`) and tactical execution (`JetBrains Mono`).

- **Display & Headlines (`Space Grotesk`)**: Geometric, wide proportions, and distinctive alternate glyph cuts bring character to portfolio titles, system node titles, and service headers. Tight tracking enhances structural rigidity.
- **Body & Metrics (`JetBrains Mono`)**: Unmatched clarity for code snippets, telemetry readings, log outputs, and tabular metrics. The tabular figures guarantee vertical alignment across real-time dynamic counters and latency charts.
- **Labels & Micro-data**: Always set in uppercase with increased letter spacing (`0.04em` - `0.08em`) to guarantee immediate visual parsing when scanning dense dashboards.

## Layout & Spacing

The layout is constructed on a 4px modular base grid, delivering dense, predictable alignments suited for analytical consoles and code-driven portfolios.

### Structural Architecture
- **Command Layout**: A persistent, collapsible vertical navigation anchor (`260px` expanded, `64px` collapsed) docked to the left, paired with a dynamic fluid canvas hosting modular grid cards.
- **Desktop Grid (1024px+)**: 12-column fluid grid with `1.5rem` gutters. Metric clusters span 3 or 4 columns, primary project visualization spans 8 columns, and log telemetry panels span 4 columns.
- **Tablet Reflow (768px - 1023px)**: 8-column layout. Navigation collapses to icon-rail or top drawer; metrics stack into 2x2 grids.
- **Mobile Handheld (< 768px)**: 4-column single-column cascade with `0.75rem` gutters. Lateral margins lock to `1rem` to maximize legible terminal line lengths.

### Density & Rhythms
- Compact inner panel padding (`0.75rem` to `1.25rem`) maximizes viewport utility and minimizes redundant dead scroll space.
- Consistent baseline rhythm ensures log stream output matches data table rows pixel-for-pixel.

## Elevation & Depth

Elevation eschews traditional blurry drop shadows in favor of crisp architectural layering, luminous borders, and directional back-glows.

### Layering Model
1. **Canvas Layer (Base)**: `#090D12` pure background with an optional faint CSS dot matrix or 32px grid line pattern (`rgba(255, 255, 255, 0.02)`).
2. **Structural Tier (Level 1 Cards & Rails)**: Background `#0F1720` framed with a 1px hairline border: `border: 1px solid rgba(255, 255, 255, 0.06)`. No shadow.
3. **Elevated Tier (Level 2 Modals & Overlays)**: Background `#16202C` flanked by `border: 1px solid rgba(255, 255, 255, 0.12)` and a grounded ambient shadow: `0 8px 32px -4px rgba(0, 0, 0, 0.6)`.

### Luminescence Mechanics
- Active focus elements and critical telemetry indicators leverage soft neon blooms: `box-shadow: 0 0 12px rgba(16, 185, 129, 0.25)`.
- Interactive cards receive a hover transition that shifts their border tone from muted white to a luminous emerald gradient: `linear-gradient(135deg, rgba(16, 185, 129, 0.4), rgba(6, 182, 212, 0.1))`.

## Shapes

In harmony with the `roundedness: 1` constraint, this design system deploys a soft, industrial corner radius of `0.25rem` (4px).

- **Standard Containers & Buttons**: `0.25rem` (4px). Clean, precise, and instrument-like, resisting excessive bubbly curvature.
- **Larger Modular Panels (`rounded-lg`)**: `0.5rem` (8px). Delivers subtle framing differentiation without sacrificing technical sharpness.
- **Status Dots & Radios**: True circles (`50%` or `9999px`) reserved strictly for live telemetry pulses, circular progress meters, and binary selector states.

## Components

### Buttons
- **Primary Telemetry Button**: Background `#10B981`, foreground `#090D12`, font `JetBrains Mono` 12px weight 600, border radius `4px`. Subtle inner bevel with `box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2)`. On hover: `box-shadow: 0 0 14px rgba(16, 185, 129, 0.4)`.
- **Secondary Ghost Button**: Background `rgba(255, 255, 255, 0.03)`, border `1px solid rgba(255, 255, 255, 0.12)`, text `#E2E8F0`. On hover: border color `#10B981`, text `#10B981`.

### Badges & Telemetry Chips
- Compact pills (`px-2 py-0.5`, font `JetBrains Mono` 10px uppercase).
- Structure: 6px circular glowing LED indicator on the left followed by the metric state.
- **Online / Healthy**: Green dot `bg-[#10B981]` with `box-shadow: 0 0 6px #10B981`, badge background `rgba(16, 185, 129, 0.1)`.
- **Syncing / Active**: Cyan dot `bg-[#06B6D4]` with ping animation, badge background `rgba(6, 182, 212, 0.1)`.

### Cards & Modular Panels
- Background `#0F1720`, border `1px solid rgba(255, 255, 255, 0.07)`, radius `4px`.
- Card Header: Features an optional hairline divider separating header title (`Space Grotesk`) and header telemetry right-actions (`JetBrains Mono`).
- Hover state: Border shifts to `rgba(16, 185, 129, 0.35)` with micro-lift transition (`translateY(-2px)`).

### Input Fields & Terminal Prompts
- Background `#090D12`, border `1px solid rgba(255, 255, 255, 0.1)`, radius `4px`.
- Prefix adornment with mono prompt glyph (`$` or `> `) in `#10B981`.
- Focus state: Border transitions to `#10B981`, ring `2px rgba(16, 185, 129, 0.2)`.

### Selection Controls (Checkboxes & Switches)
- **Checkboxes**: 14px by 14px squares, radius `2px`, border `1px solid rgba(255, 255, 255, 0.2)`. Checked: `#10B981` with dark glyph check.
- **Toggle Switches**: Compact track `28px x 16px`, dark track `#16202C`, active track `#10B981`, thumb 12px circular white indicator.

### Telemetry Stream / Code Viewers
- Full-bleed monospaced panel with a dark header showing runtime execution, branch indicator, and copy action.
- Line numbers styled with opacity `30%`, syntax highlighting anchored in muted slates, emerald literals, cyan identifiers, and amber warnings.