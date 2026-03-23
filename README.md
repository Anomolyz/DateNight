# DateNight

**Elite luxury dating platform — front-end prototype**

A complete front-end dating site inspired by WhatsYourPrice and Seeking Arrangements. Built with plain HTML, CSS, and JavaScript — no frameworks. Features a unique 2D grid slider navigation system, 6-step signup flow, rose-based credit system, and a full dashboard with 7 sub-pages.

---

## Live Demo

- **Local**: `node serve.js` → [http://localhost:4000](http://localhost:4000)
- **Netlify**: Drag the project folder to [app.netlify.com/drop](https://app.netlify.com/drop)

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Markup | HTML5 (single file) |
| Styling | CSS3 (inline, no preprocessor) |
| Logic | Vanilla JavaScript (inline) |
| Fonts | Google Fonts — Playfair Display, Cinzel, Inter, Dancing Script, Great Vibes |
| Server | Node.js static file server (serve.js, port 4000) |
| Images | 35 local portrait photos in `/photos` |

---

## Design System

### Color Palette

| Token | Hex | Usage |
|-------|-----|-------|
| `--bg-void` | `#020101` | Page background |
| `--bg-surface` | `#0a0707` | Card surfaces |
| `--bg-panel` | `#140d0d` | Panel backgrounds |
| `--red-ambient` | `#3d0004` | Ambient glows |
| `--red-primary` | `#8c0510` | Primary actions |
| `--red-bright` | `#c20413` | Accents, highlights |
| `--red-dark` | `#260103` | Dark gradients |
| `--text-title` | `#f5f0eb` | Headings |
| `--text-body` | `#a89f98` | Body text |
| `--text-muted` | `#6b635e` | Secondary text |
| `--border-subtle` | `#331f1f` | Borders |
| `--gold-accent` | `#b8860b` | Premium highlights |

### Typography

| Font | Role |
|------|------|
| **Playfair Display** | Display headings, names |
| **Cinzel** | Labels, nav items, buttons |
| **Inter** | Body text, form inputs |
| **Dancing Script** | Logo text |
| **Great Vibes** | Alternate cursive accents |

### Animation Easing

```css
--ease-slow: cubic-bezier(0.16, 1, 0.3, 1)
```

---

## Navigation — 2D Grid Slider

The entire site lives on a **3×2 CSS Grid** canvas (`300vw × 200vh`). Navigation between pages uses `transform: translate(Xvw, Yvh)` with a 0.8s transition. This prevents any page from being visible during transitions to unrelated pages.

### Grid Layout

```
              Col 0           Col 1              Col 2
         ┌──────────────┬──────────────┬──────────────┐
 Row 0   │   Login      │    WYWG      │  Dashboard   │
         │   (0, 0)     │  (-100, 0)   │ (-200, 0)    │
         ├──────────────┼──────────────┼──────────────┤
 Row 1   │   Landing    │   Signup     │   Roses      │
         │  (0, -100)   │(-100, -100)  │(-200, -100)  │
         └──────────────┴──────────────┴──────────────┘
```

### Navigation Flows

**Login flow** (no cross-page bleed):
```
Landing → UP → Login → RIGHT → WYWG → RIGHT → Dashboard
```

**Signup flow**:
```
Landing → RIGHT → Signup (6 steps) → RIGHT → Roses → UP → Dashboard
```

---

## Pages & Features

### 1. Landing Page

- Hero section with `clamp()`-based responsive heading
- Floating rose petal particle system (25 max, 6 SVG shapes)
- Decorative ambient glow orbs and border frame
- SVG logo with heart clusters + cursive "Date Night" text
- **CTA**: "Sign Up Now" → Signup flow / "Log In" → Login flow

### 2. Login Page

- Glass card (420px max-width) centered over animated red ambient background
- Fields: Email, Password
- "Forgot Password?" link
- "Don't have an account? Sign Up" link
- Animated background pulse and drift effects
- Submit → navigates to WYWG page

### 3. Signup (6-Step Form)

Each step slides in with a fade animation. Progress tracked via 6 dot indicators.

| Step | Title | Fields |
|------|-------|--------|
| 0 | Who are you? | Gender (M/F), Seeking (Men/Women/Both) |
| 1 | Create your account | Name, Email, Password, DOB, City |
| 2 | Tell us about yourself | Occupation, Education, Status, Children, Bio |
| 3 | Your ideal first date | Perfect evening, Partner qualities, Income range |
| 4 | Lifestyle & Appearance | Height, Body type, Ethnicity, Languages, Smoking, Drinking, Looking for |
| 5 | Show your best self | 6 photo upload slots (2 required), drag/click upload with preview & remove |

- Glass frosted overlay (`backdrop-filter: blur(18px)`) over petals
- Selection cards with glow-on-select animation
- Real file upload with `FileReader` API, preview thumbnails, and remove buttons

### 4. Roses (Credit Purchase)

| Package | Price | Per Rose |
|---------|-------|----------|
| 100 Roses | $50 | $0.50 |
| 500 Roses | $149 | $0.30 |
| 1,000 Roses | $249 | $0.25 |

- "Most Popular" and "Best Value" badges
- Skip option (start with 0 roses)
- Selected package sets dashboard rose balance

### 5. While You Were Gone (WYWG)

Activity summary shown after login with staggered entrance animations:

| Card | Count | Detail |
|------|-------|--------|
| New Messages | 3 | Sophia, Victoria, +1 sent messages |
| Profile Views | 12 | 12 people viewed your profile |
| New Nearby | 2 | Camille and Isabella joined nearby |
| Roses Received | 5 | 5 people sent you roses |

- Animated number counters (ease-out cubic, 1200ms)
- Pulsing gradient borders (staggered 0.75s per card)
- Hero card: "Natalia said yes!" — date accepted notification with pulsing heart
- "Continue to Dashboard" button fades in last

### 6. Dashboard

Full app interface with top navigation and 7 sub-pages.

#### Top Navigation Bar
- Logo (rose icon + "Date Night")
- Search, Interests, Offers (badge: 1), Messages (badge: 3)
- Rose balance pill button
- Settings gear
- User avatar + name

#### Sub-Pages

| Page | Features |
|------|----------|
| **Browse** | 35 profile cards in responsive grid, search bar, sort dropdown, filter chips (All, Online Now, Nearby, New Members, Verified, Age, Distance) |
| **Messages** | Sidebar with conversation list + chat thread, real-time message sending, online status indicators |
| **My Roses** | Balance display, 4 purchase packages, transaction history log |
| **Favorites** | 3 tabs — Viewed Me (12), Favorited Me (3), My Favorites (empty state) |
| **Offers** | 2 tabs — Received (accept/decline with animations), Sent (empty state) |
| **Profile** | Cover photo, avatar, basic info grid, about me, looking-for tags, 4-slot photo grid |
| **Settings** | Edit Profile link, Buy Roses link, Notification toggle, Log Out button |

#### Profile Cards (Browse)

Each of the 35 cards includes:
- Full portrait photo (local `/photos/N.jpg`)
- Online indicator (green dot)
- Hover overlay with "Send Rose" and "Favorite" buttons
- Name, age, occupation, city
- Interest tags (2-3 per profile)

Click any card → **Profile View Drawer** slides in from right with:
- Full photo, name, location
- Rose offer presets (3, 5, 10, 25)
- Custom amount input
- Send/Block/Report actions

---

## Animations

| Animation | Duration | Where |
|-----------|----------|-------|
| `petalFloat` | 18-35s | Floating rose petals across all pages |
| `loginPulse` | 3.5s | Red glow pulse on login background |
| `loginDrift` | 6s | Ambient light drift on login |
| `wywgFadeUp` | 0.6s | Staggered entrance on WYWG elements |
| `wywgCardIn` | 0.5s | Card entrance with scale + fade |
| `borderPulse` | 3s | Glowing card borders on WYWG |
| `heroGlow` | 3s | Background glow on WYWG hero card |
| `pulseRing` | 2s | Expanding ring on heart icon |
| `fadeInStep` | 0.4s | Signup step transitions |
| Slide transition | 0.8s | Page-to-page navigation |
| Card hover | 0.4s | Profile card lift + photo zoom |
| Counter animation | 1.2s | WYWG number count-up |

---

## Responsive Design

Two breakpoints, fully tested on mobile, tablet, and desktop:

### Tablet (≤768px)

- Nav labels hidden, icon-only mode
- Profile grid: 2 columns
- Messages: sidebar stacks above chat
- Roses grid: 2 columns
- WYWG: 2-column cards preserved
- Form rows: single column
- Rose packages: vertical stack
- iOS Safari `100dvh` fix applied
- Profile drawer: full-width

### Phone (≤480px)

- Nav: minimal icons, no text
- Profile grid: single column
- WYWG cards: single column
- Photo upload: 2-column grid
- Dashboard nav height: 50px
- Signup wrapper: 95vw
- Hero decorative elements hidden
- Profile overlay buttons always visible (touch devices)
- Messages sidebar: 35vh max-height

---

## File Structure

```
DateNight/
├── index.html          # Complete site (HTML + CSS + JS, ~4000 lines)
├── serve.js            # Node.js static file server (port 4000)
├── photos/             # 35 portrait images (1.jpg - 35.jpg)
│   ├── 1.jpg
│   ├── 2.jpg
│   └── ... (35 total)
├── script.js           # (unused — all JS is inline)
├── styles.css          # (unused — all CSS is inline)
├── .gitignore
└── README.md
```

---

## Running Locally

```bash
# Start the server
node serve.js

# Open in browser
http://localhost:4000
```

The server handles both text files (UTF-8) and binary files (images) with proper MIME types.

---

## User Flow

```
┌─────────┐     ┌─────────┐     ┌──────────────┐     ┌─────────┐     ┌───────────┐
│ Landing │────▶│  Login  │────▶│ While You    │────▶│Dashboard│     │           │
│  Page   │     │  Page   │     │ Were Gone    │     │ (Browse)│     │           │
└────┬────┘     └─────────┘     └──────────────┘     └─────────┘     │           │
     │                                                                │           │
     │          ┌─────────┐     ┌──────────────┐                     │  7 Sub-   │
     └─────────▶│ Signup  │────▶│    Roses     │────────────────────▶│  Pages    │
                │ (6 steps)│    │  (Purchase)  │                     │           │
                └─────────┘     └──────────────┘                     └───────────┘
```

---

## Credits

- **Design**: Red/black luxury aesthetic inspired by elite dating platforms
- **Fonts**: Google Fonts (Playfair Display, Cinzel, Inter, Dancing Script, Great Vibes)
- **Photos**: User-provided portrait images
- **Built with**: Pure HTML, CSS, JavaScript — zero dependencies
