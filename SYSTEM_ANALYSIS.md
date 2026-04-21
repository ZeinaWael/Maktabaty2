# مكتبتي — Maktabaty | System Analysis Document

**Project:** Maktabaty (مكتبتي) — Digital Book Library System  
**Institution:** Amna Bint Al-Arqam Al-Makhzumiya Secondary School for Girls  
**Ministry:** Ministry of Education and Higher Education — State of Qatar  
**Developer:** Zeina Wael  
**Academic Year:** 2025–2026  
**Version:** 1.0  
**Date:** April 2026

---

## Table of Contents

1. [Project Overview](#1-project-overview)
2. [System Objectives](#2-system-objectives)
3. [Project Structure](#3-project-structure)
4. [Technology Stack](#4-technology-stack)
5. [System Architecture](#5-system-architecture)
6. [Features & Operations](#6-features--operations)
7. [User Roles & Access Control](#7-user-roles--access-control)
8. [Database Schema](#8-database-schema)
9. [Data Flow Diagrams](#9-data-flow-diagrams)
10. [UI/UX Design System](#10-uiux-design-system)
11. [Module Breakdown](#11-module-breakdown)
12. [API & Backend Integration](#12-api--backend-integration)
13. [Security Considerations](#13-security-considerations)
14. [Performance Optimizations](#14-performance-optimizations)
15. [Responsive Design](#15-responsive-design)
16. [Future Enhancements](#16-future-enhancements)

---

## 1. Project Overview

**Maktabaty** (مكتبتي, meaning "My Library" in Arabic) is a premium digital book library web application developed for Amna Bint Al-Arqam Al-Makhzumiya Secondary School for Girls in the State of Qatar. The system provides a rich, interactive interface for students and staff to browse, search, and read Arabic and English literature directly in the browser.

The application supports bilingual content (Arabic / English), dual theming (dark / light mode), PDF reading, book management, and an admin dashboard — all delivered as a single-page application (SPA) with no backend framework required.

### Key Highlights

| Feature | Description |
|---------|-------------|
| 📚 Digital Library | Browse 12+ pre-loaded books across 6 categories |
| 📖 Built-in PDF Reader | Read PDF books directly in the browser using PDF.js |
| 🌐 Bilingual | Full Arabic (RTL) and English (LTR) support |
| 🌙 Dual Theme | Navy & Gold dark mode / Maroon & Rose light mode |
| 🔐 Admin Dashboard | Secure CRUD operations for managing books and categories |
| ☁️ Cloud Storage | Supabase integration for persistent data and PDF hosting |
| 📱 Responsive | Mobile-first design with bottom navigation on small screens |

---

## 2. System Objectives

### Primary Objectives
1. **Promote Reading Culture** — Provide a digital gateway to knowledge for students, fostering a love of reading.
2. **Accessible Education** — Make books available 24/7 through any web browser without downloads or installations.
3. **Bilingual Support** — Serve both Arabic-speaking and English-speaking users with full RTL/LTR layout support.
4. **Administrative Control** — Enable the school librarian (admin) to manage the book collection without technical knowledge.

### Secondary Objectives
1. **Modern UI/UX** — Deliver a premium, visually stunning experience that engages students.
2. **Scalability** — Support cloud-based storage for unlimited book additions.
3. **Performance** — Fast load times with graceful fallback to local data if the network is unavailable.
4. **Maintainability** — Clean, well-organized codebase with no framework dependencies.

---

## 3. Project Structure

```
maktabaty/
│
├── index.html              ← Main HTML file (Single Page Application)
│                              Contains all page sections, modals, overlays,
│                              navigation, and semantic structure
│
├── styles.css              ← Complete stylesheet (1,243 lines)
│                              CSS variables, dual themes, all component styles,
│                              animations, responsive breakpoints
│
├── app.js                  ← Application logic (1,506 lines)
│                              State management, rendering, event handling,
│                              PDF reader, admin CRUD, search, favorites
│
├── supabase-config.js      ← Supabase REST API helper functions
│                              Fetch wrappers, book/category/PDF API methods
│
├── supabase_schema.sql     ← Database schema definition
│                              SQL to create tables, RLS policies, storage bucket
│
├── schoolLogo.png          ← School logo image asset
│
├── README.md               ← Setup and deployment guide
│
└── SYSTEM_ANALYSIS.md      ← This document
```

### File Size Summary

| File | Lines | Size | Purpose |
|------|-------|------|---------|
| `index.html` | 617 | ~38 KB | Structure & Markup |
| `styles.css` | 1,243 | ~48 KB | Styling & Themes |
| `app.js` | 1,506 | ~70 KB | Logic & Functionality |
| `supabase-config.js` | 109 | ~3.3 KB | API Helpers |
| `supabase_schema.sql` | 62 | ~2.2 KB | Database Schema |

**Total codebase:** ~3,537 lines | ~162 KB

---

## 4. Technology Stack

### Frontend

| Technology | Version | Purpose |
|-----------|---------|---------|
| **HTML5** | — | Semantic structure, accessibility |
| **CSS3** | — | Styling, animations, responsive design |
| **Vanilla JavaScript** | ES6+ | Application logic, DOM manipulation |
| **PDF.js** | 3.11.174 | In-browser PDF rendering (Mozilla) |
| **Google Fonts** | — | typography (DM Sans, Cormorant Garamond, Noto Kufi Arabic, Amiri) |
| **Material Icons Round** | — | UI icons throughout the application |

### Backend / Cloud

| Technology | Purpose |
|-----------|---------|
| **Supabase** | Backend as a Service (BaaS) — PostgreSQL database, REST API, object storage |
| **Supabase Storage** | PDF file hosting (public bucket `books`) |
| **GitHub Pages** | Static site hosting (recommended deployment) |

### Design Methodology

| Aspect | Approach |
|--------|----------|
| Architecture | Single Page Application (SPA) with client-side routing |
| Styling | CSS Custom Properties (CSS Variables) for theming |
| State Management | JavaScript module-level variables |
| Data Persistence | localStorage (offline) + Supabase REST API (cloud) |
| Animations | CSS keyframe animations + CSS transitions |

---

## 5. System Architecture

### High-Level Architecture Diagram

```
┌─────────────────────────────────────────────────────────────────┐
│                        CLIENT (Browser)                         │
│  ┌──────────┐  ┌───────────┐  ┌──────────────┐  ┌───────────┐  │
│  │index.html│  │ styles.css│  │    app.js     │  │  PDF.js   │  │
│  │(Structure│  │ (Themes & │  │ (Logic, State │  │ (PDF      │  │
│  │& Layout) │  │  Styling) │  │  & Rendering) │  │  Renderer)│  │
│  └──────────┘  └───────────┘  └──────┬───────┘  └─────┬─────┘  │
│                                      │                 │        │
│                               ┌──────┴───────┐        │        │
│                               │ localStorage │        │        │
│                               │  (Offline    │        │        │
│                               │   Cache)     │        │        │
│                               └──────────────┘        │        │
└──────────────────────────────────┬────────────────────┬┘
                                   │  REST API          │ Direct URL
                                   ▼                    ▼
┌─────────────────────────────────────────────────────────────────┐
│                     SUPABASE (Cloud Backend)                    │
│  ┌────────────────┐  ┌─────────────────┐  ┌──────────────────┐ │
│  │  PostgreSQL DB  │  │  REST API       │  │  Object Storage  │ │
│  │  ┌──────────┐  │  │  (Auto-generated│  │  ┌────────────┐  │ │
│  │  │  books   │  │  │   from schema)  │  │  │books bucket│  │ │
│  │  ├──────────┤  │  │                 │  │  │ *.pdf files │  │ │
│  │  │categories│  │  │  Row Level      │  │  │ Public read │  │ │
│  │  └──────────┘  │  │  Security (RLS) │  │  └────────────┘  │ │
│  └────────────────┘  └─────────────────┘  └──────────────────┘ │
└─────────────────────────────────────────────────────────────────┘
```

### Data Flow Overview

```
User Opens App
      │
      ▼
DOMContentLoaded Event
      │
      ├── loadBooks()        → Fetch from Supabase REST → fallback to defaultBooks
      ├── loadCustomCategories() → Read from localStorage
      ├── applyTheme()       → Read from localStorage → set CSS data-theme
      ├── applyLanguage()    → Read from localStorage → set dir/lang attributes
      ├── renderBooks()      → Generate book cards HTML
      ├── renderCategories() → Generate category cards HTML
      ├── updateStats()      → Count books/categories/authors
      ├── initParticles()    → Start canvas particle animation
      ├── initEventListeners() → Bind all UI event handlers
      ├── animateCounters()  → Animate stat numbers
      └── setupPdfUpload()   → Initialize drag-and-drop PDF zone
```

---

## 6. Features & Operations

### 6.1 Library Browsing (Public)

| Feature | Description | Implementation |
|---------|-------------|----------------|
| **Book Grid** | Responsive grid of book cards with cover art, title, author, rating | `renderBooks()` in `app.js` |
| **List View** | Alternative single-column list layout | CSS class toggle `.list-view` |
| **Category Filtering** | Filter books by category using chip buttons | `filterChips` event listener |
| **Book Detail Modal** | Full book info panel with cover, description, author bio, metadata | `openDetail()` |
| **Animated Cards** | Staggered fade-in animation on book cards | CSS `@keyframes cardReveal` |
| **Dynamic Stats** | Live counters for total books, categories, authors | `updateStats()` |

### 6.2 Search System

| Feature | Description | Implementation |
|---------|-------------|----------------|
| **Search Overlay** | Full-screen overlay with search input | `searchOverlay` modal |
| **Real-time Search** | Instant results as user types | `handleSearch()` on input event |
| **Multi-field Search** | Searches across title (EN/AR) and author (EN/AR) | String matching with `.includes()` |
| **Keyboard Shortcut** | Press `/` to open search | `keydown` event listener |
| **Click to Navigate** | Search results open book detail | `openDetail()` on result click |

### 6.3 Favorites System

| Feature | Description | Implementation |
|---------|-------------|----------------|
| **Toggle Favorite** | Heart button on each book card | `toggleFavorite()` |
| **Favorites Page** | Dedicated page showing only favorited books | `renderFavorites()` |
| **Persistent Storage** | Favorites saved to `localStorage` | Key: `maktabaty_favorites` |
| **Empty State** | Custom illustration when no favorites exist | `#emptyFavorites` element |
| **Cross-page Sync** | Favoriting from any view updates all views | Re-render on toggle |

### 6.4 PDF Reader

| Feature | Description | Implementation |
|---------|-------------|----------------|
| **In-browser PDF Rendering** | Renders PDF pages on HTML5 Canvas | PDF.js library (`pdfjsLib`) |
| **Remote URL Support** | Load PDFs directly from Supabase Storage URLs | URL detection in `openPdfReader()` |
| **Base64 Support** | Load PDFs from base64 data URLs (uploaded PDFs) | `atob()` decoding |
| **Page Navigation** | Previous/Next buttons + keyboard arrows | `navigatePage()` |
| **Page Jump** | Direct input of page number | `jumpToPage()` |
| **Zoom Control** | Zoom in/out (50% – 300%) | `adjustZoom()` |
| **Progress Bar** | Visual progress indicator at top of reader | `#readerProgress` width |
| **Reader Themes** | Normal and Sepia reading modes | `toggleReaderTheme()` |
| **PDF Download** | Download button to save PDF locally | `downloadCurrentPdf()` |
| **Loading Spinner** | Animated spinner while PDF loads | `.pdf-loading` element |
| **Fallback** | Falls back to text mode if PDF.js unavailable | `openTextReader()` |

### 6.5 Text Chapter Reader

| Feature | Description | Implementation |
|---------|-------------|----------------|
| **Chapter Navigation** | Navigate through book chapters | `renderTextChapter()` |
| **Drop Cap** | Decorative large first letter | CSS `::first-letter` |
| **Chapter Headers** | Styled chapter number + title + ornament | Template in `renderTextChapter()` |
| **Typography** | Serif fonts (Cormorant Garamond / Amiri) for Arabic | CSS font-family rules |

### 6.6 Theme System

| Feature | Description |
|---------|-------------|
| **Dark Mode** | Navy blue background (#000a1a) + Gold accents (#c9a84c) |
| **Light Mode** | Rose/cream background (#fdf8fa) + Maroon accents (#8B1A3A) |
| **CSS Variables** | 30+ CSS custom properties for complete theme control |
| **Persistent** | Theme saved to `localStorage` (key: `maktabaty_theme`) |
| **Smooth Transition** | 0.3s cubic-bezier transition between themes |
| **Component Overrides** | Dark mode has specific shadow/gradient overrides for premium feel |

### 6.7 Language System (i18n)

| Feature | Description |
|---------|-------------|
| **Arabic (RTL)** | Full right-to-left layout with Arabic fonts |
| **English (LTR)** | Standard left-to-right layout with Latin fonts |
| **HTML Attributes** | Uses `data-en` / `data-ar` on elements for text switching |
| **Placeholder Support** | `data-placeholder-en` / `data-placeholder-ar` for input fields |
| **Font Switching** | DM Sans + Cormorant Garamond (EN) ↔ Noto Kufi Arabic + Amiri (AR) |
| **Persistent** | Language saved to `localStorage` (key: `maktabaty_lang`) |

### 6.8 Admin Dashboard

| Feature | Description | Implementation |
|---------|-------------|----------------|
| **Login System** | Username/password authentication | `handleLogin()` |
| **Dashboard Stats** | Cards showing total books, categories, PDFs, avg rating | `updateDashboardStats()` |
| **Books Table** | Sortable table of all books with cover, title, author, category, PDF status, rating | `renderAdminTable()` |
| **Table Search** | Filter the admin table by search query | `adminSearch` input |
| **Add Book** | Form to create new book with all fields | `openBookForm()` |
| **Edit Book** | Pre-filled form to modify existing book | `openBookForm(bookId)` |
| **Delete Book** | Confirmation modal before deletion | `openDeleteModal()` → `confirmDelete()` |
| **PDF Upload** | Drag & drop zone for attaching PDF files (up to 50MB) | `setupPdfUpload()` |
| **Category Management** | View, add, delete custom categories | Admin categories grid |
| **Logout** | Securely ends admin session | `handleLogout()` |

### 6.9 Category Management

| Feature | Description | Implementation |
|---------|-------------|----------------|
| **Built-in Categories** | 6 pre-defined: Fiction, Science, History, Poetry, Religion, Philosophy | `BUILTIN_CATEGORIES` array |
| **Custom Categories** | Admin can create new categories with name, icon, color | `handleCategorySubmit()` |
| **Icon Picker** | Grid of 20 emoji icons to choose from | `iconPickerGrid` |
| **Color Picker** | Color input + 8 preset color swatches | `catColor` + preset buttons |
| **Live Preview** | Real-time preview of category card as user configures | `updateCategoryPreview()` |
| **Delete Protection** | Built-in categories cannot be deleted | Conditional rendering |
| **Book Reassignment** | Deleting a category moves its books to "other" | `confirmDeleteCategory()` |
| **Dynamic Filter Chips** | Custom categories appear in library filter bar | `updateFilterChips()` |

### 6.10 Visual Effects

| Feature | Description |
|---------|-------------|
| **Ambient Orbs** | 4 floating gradient orbs with blur effect in background |
| **Particle Canvas** | 35 animated particles on HTML5 canvas |
| **Card Animations** | Staggered reveal animation on book and category cards |
| **Hover Effects** | Lift + shadow + border color change on interactive elements |
| **Modal Animations** | Scale-in on open, collapse on close |
| **Toast Notifications** | Slide-in notifications for actions (success/error/info) |
| **Counter Animation** | Number counting animation on hero stats |
| **Progress Gradient** | Maroon-to-gold gradient on reader progress bar |

---

## 7. User Roles & Access Control

### Role Matrix

| Feature | Public User | Admin |
|---------|:-----------:|:-----:|
| Browse books | ✅ | ✅ |
| Search books | ✅ | ✅ |
| Filter by category | ✅ | ✅ |
| View book details | ✅ | ✅ |
| Read books (PDF/Text) | ✅ | ✅ |
| Download PDFs | ✅ | ✅ |
| Toggle favorites | ✅ | ✅ |
| Switch theme/language | ✅ | ✅ |
| Add book | ❌ | ✅ |
| Edit book | ❌ | ✅ |
| Delete book | ❌ | ✅ |
| Add category | ❌ | ✅ |
| Delete category | ❌ | ✅ |
| View dashboard stats | ❌ | ✅ |
| Upload PDF | ❌ | ✅ |

### Authentication Details

| Property | Value |
|----------|-------|
| Method | Client-side credential check |
| Username | `Asma Ragab` |
| Password | `Asma@1981` |
| Session | In-memory (`isAdminLoggedIn` flag) |
| Persistence | Non-persistent (resets on page reload) |

---

## 8. Database Schema

### Entity-Relationship Diagram

```
┌──────────────────────────────────────────────┐
│                   books                       │
├──────────────────────────────────────────────┤
│ id              BIGSERIAL  PRIMARY KEY       │
│ title_en        TEXT       NOT NULL           │
│ title_ar        TEXT                          │
│ author_en       TEXT       NOT NULL           │
│ author_ar       TEXT                          │
│ author_desc_en  TEXT                          │
│ author_desc_ar  TEXT                          │
│ category        TEXT       NOT NULL  'fiction'│
│ year            INTEGER                      │
│ pages           INTEGER                      │
│ rating          NUMERIC(3,1)  DEFAULT 4.0    │
│ desc_en         TEXT                          │
│ desc_ar         TEXT                          │
│ color           TEXT       DEFAULT '#8B1A3A' │
│ wallpaper       TEXT                          │
│ has_pdf         BOOLEAN    DEFAULT false      │
│ created_at      TIMESTAMPTZ  DEFAULT now()   │
└──────────────────────────────────────────────┘

┌──────────────────────────────────────────────┐
│                 categories                    │
├──────────────────────────────────────────────┤
│ id              BIGSERIAL  PRIMARY KEY       │
│ name_en         TEXT       NOT NULL           │
│ name_ar         TEXT                          │
│ icon            TEXT       DEFAULT '📚'       │
│ color           TEXT       DEFAULT '#2c7a5c' │
│ created_at      TIMESTAMPTZ  DEFAULT now()   │
└──────────────────────────────────────────────┘

┌──────────────────────────────────────────────┐
│          storage.objects (books bucket)       │
├──────────────────────────────────────────────┤
│ Bucket: 'books'   Public: true               │
│ Files: {book_id}.pdf                         │
│ Access: Public read, Authenticated write     │
└──────────────────────────────────────────────┘
```

### Books Table Fields

| Column | Type | Constraints | Description |
|--------|------|-------------|-------------|
| `id` | `BIGSERIAL` | Primary Key | Auto-incrementing unique ID |
| `title_en` | `TEXT` | NOT NULL | English title |
| `title_ar` | `TEXT` | — | Arabic title |
| `author_en` | `TEXT` | NOT NULL | English author name |
| `author_ar` | `TEXT` | — | Arabic author name |
| `author_desc_en` | `TEXT` | — | English author biography |
| `author_desc_ar` | `TEXT` | — | Arabic author biography |
| `category` | `TEXT` | NOT NULL, DEFAULT 'fiction' | Category slug ID |
| `year` | `INTEGER` | — | Publication year |
| `pages` | `INTEGER` | — | Page count |
| `rating` | `NUMERIC(3,1)` | DEFAULT 4.0 | Star rating (1.0–5.0) |
| `desc_en` | `TEXT` | — | English description |
| `desc_ar` | `TEXT` | — | Arabic description |
| `color` | `TEXT` | DEFAULT '#8B1A3A' | Cover gradient color (hex) |
| `wallpaper` | `TEXT` | — | Background image URL |
| `has_pdf` | `BOOLEAN` | DEFAULT false | Whether PDF file exists |
| `created_at` | `TIMESTAMPTZ` | DEFAULT now() | Creation timestamp |

### Row Level Security (RLS) Policies

| Policy | Table | Operation | Rule |
|--------|-------|-----------|------|
| Public read books | `books` | SELECT | `USING (true)` — anyone can read |
| Public read categories | `categories` | SELECT | `USING (true)` — anyone can read |
| Public read PDFs | `storage.objects` | SELECT | `bucket_id = 'books'` |
| Admin upload PDFs | `storage.objects` | INSERT | `bucket_id = 'books'` |

---

## 9. Data Flow Diagrams

### 9.1 Book Loading Flow

```
┌──────────┐     HTTP GET      ┌────────────────┐
│  Browser │ ───────────────── │ Supabase REST  │
│  app.js  │ /rest/v1/books    │    API         │
│          │ ◄─────────────── │                │
│          │   JSON response   │                │
└────┬─────┘                   └────────────────┘
     │
     │  Success?
     │
     ├── YES → Map Supabase fields → JavaScript book objects → renderBooks()
     │
     └── NO  → Use defaultBooks[] (12 hardcoded books) → renderBooks()
```

### 9.2 PDF Reading Flow

```
User clicks "Read" on a book
          │
          ▼
    ┌─────────────┐
    │ Has pdfData? │
    └──────┬──────┘
           │
     ┌─────┴─────┐
     │           │
    YES         NO
     │           │
     ▼           ▼
┌──────────┐  ┌──────────────┐
│ Is URL?  │  │ openTextReader│
└────┬─────┘  │ (Chapter mode)│
     │         └──────────────┘
  ┌──┴──┐
  │     │
 YES   NO (base64)
  │     │
  ▼     ▼
┌──────────────────────┐
│ pdfjsLib.getDocument  │
│  (URL or decoded data)│
└──────────┬───────────┘
           │
           ▼
┌──────────────────────┐
│ renderPdfPage()       │
│ Canvas rendering      │
│ Page controls active  │
└──────────────────────┘
```

### 9.3 Admin Book CRUD Flow

```
┌─────────────┐    ┌──────────────┐    ┌──────────────┐
│  Add Book   │    │  Edit Book   │    │ Delete Book  │
│  Button     │    │  Button      │    │  Button      │
└──────┬──────┘    └──────┬───────┘    └──────┬───────┘
       │                  │                   │
       ▼                  ▼                   ▼
┌──────────────┐   ┌──────────────┐   ┌──────────────┐
│ Empty Form   │   │ Pre-filled   │   │ Confirmation │
│ Modal Opens  │   │ Form Opens   │   │ Modal Opens  │
└──────┬───────┘   └──────┬───────┘   └──────┬───────┘
       │                  │                   │
       ▼                  ▼                   ▼
┌──────────────────────────────┐      ┌──────────────┐
│ handleBookSubmit()           │      │confirmDelete()│
│ • Validate fields            │      │ • Remove from │
│ • Attach PDF (if uploaded)   │      │   books[]     │
│ • Push/Update books[]        │      │ • Remove from │
│ • saveBooks() → localStorage │      │   favorites[] │
│ • Re-render all views        │      │ • saveBooks() │
└──────────────────────────────┘      └──────────────┘
```

### 9.4 Favorite Toggle Flow

```
User clicks ♡ button
       │
       ▼
┌──────────────────┐
│ Is book in        │
│ favorites[]?      │
└────────┬─────────┘
      ┌──┴──┐
     YES    NO
      │      │
      ▼      ▼
  Remove   Add to
  from     favorites[]
  array
      │      │
      └──┬───┘
         │
         ▼
┌─────────────────────┐
│ Save to localStorage│
│ Re-render views      │
│ Show toast message   │
└─────────────────────┘
```

---

## 10. UI/UX Design System

### 10.1 Color Palette

#### Dark Mode (Navy & Gold)

| Token | Color | Hex | Usage |
|-------|-------|-----|-------|
| Background Primary | Navy Black | `#000a1a` | Page background |
| Background Secondary | Deep Navy | `#001025` | Sections, header |
| Card Background | Dark Navy | `#011d3a` | Cards, containers |
| Accent | Gold | `#c9a84c` | Buttons, links, highlights |
| Accent Hover | Light Gold | `#dbb85c` | Hover states |
| Text Primary | Light Grey | `#e5eaf2` | Main text |
| Text Secondary | Muted Blue | `#8da0bc` | Secondary text |
| Border | Gold Tint | `rgba(201,168,76,0.10)` | Borders, dividers |

#### Light Mode (Maroon & Rose)

| Token | Color | Hex | Usage |
|-------|-------|-----|-------|
| Background Primary | Rose White | `#fdf8fa` | Page background |
| Background Secondary | Light Rose | `#f7eff3` | Sections, header |
| Card Background | White | `#ffffff` | Cards, containers |
| Accent | Maroon | `#8B1A3A` | Buttons, links, highlights |
| Accent Hover | Light Maroon | `#a52342` | Hover states |
| Text Primary | Dark Plum | `#1a0810` | Main text |
| Text Secondary | Muted Plum | `#6b3a4e` | Secondary text |
| Border | Maroon Tint | `rgba(139,26,58,0.15)` | Borders, dividers |

#### Book Category Colors

| Category | Color | Hex |
|----------|-------|-----|
| Fiction | Teal Blue | `#2c5f7c` |
| Science | Forest Green | `#4a7c59` |
| History | Saddle Brown | `#8B4513` |
| Poetry | Deep Rose | `#8B1A3A` |
| Religion | Dark Green | `#1a5c3a` |
| Philosophy | Purple | `#6b3a5d` |

### 10.2 Typography

| Font | Family | Usage | Weight |
|------|--------|-------|--------|
| DM Sans | Sans-serif | English body text, UI | 300–700 |
| Cormorant Garamond | Serif | English headings, hero title, reader | 400, 600, 700 |
| Noto Kufi Arabic | Sans-serif | Arabic body text, UI | 300–900 |
| Amiri | Serif | Arabic headings, reader text | 400, 700 |
| Material Icons Round | Icon font | All UI icons | — |

### 10.3 Spacing & Sizing

| Token | Value | Usage |
|-------|-------|-------|
| `--radius` | `16px` | Default border radius |
| `--radius-sm` | `8px` | Small elements (buttons, inputs) |
| `--radius-xl` | `24px` | Large elements (modals, login card) |
| Grid max-width | `1400px` | Content container max width |
| Card min-width | `220px` | Book card minimum width |
| Category card min | `280px` | Category card minimum width |
| Navbar height | `62px` | Sticky navigation bar |

### 10.4 Animation System

| Animation | Duration | Easing | Trigger |
|-----------|----------|--------|---------|
| Card Reveal | 0.6s | ease-out | On render (staggered by 0.05s) |
| Fade In Up | 0.8s | ease-out | Hero section elements |
| Scale In | 0.5s | ease-out | Login card appearance |
| Modal In | 0.4s | ease-out | Any modal opening |
| Modal Collapse | 0.38s | ease-in | Modal close with animation |
| Toast In | 0.4s | ease-out | Toast notification appear |
| Toast Out | 0.3s | ease-in | Toast notification dismiss |
| Floating Orbs | 18–25s | ease-in-out | Continuous background animation |
| Spin | 0.8s | linear | PDF loading spinner |
| Theme Transition | 0.3s | cubic-bezier(0.4,0,0.2,1) | All theme transitions |

---

## 11. Module Breakdown

### 11.1 State Management Module

```javascript
// Global State Variables
let books = [];                    // Book data array
let favorites = [];                // Favorited book IDs (persisted)
let currentLang = 'en';           // Current language ('en' | 'ar')
let currentTheme = 'dark';        // Current theme ('dark' | 'light')
let isAdminLoggedIn = false;      // Admin authentication state
let currentPage = 'library';      // Active page
let customCategories = [];        // User-created categories (persisted)
let currentReaderBook = null;     // Book currently being read
let currentChapter = 0;           // Current text chapter index
let pdfDoc = null;                // PDF.js document instance
let pdfCurrentPage = 1;           // Current PDF page number
let pdfTotalPages = 0;            // Total PDF pages
let pdfScale = 1.2;              // PDF zoom level
```

### 11.2 Core Functions

| Function | Module | Description |
|----------|--------|-------------|
| `loadBooks()` | Data | Fetch books from Supabase, fallback to defaults |
| `saveBooks()` | Data | Persist books to localStorage |
| `loadCustomCategories()` | Data | Load custom categories from localStorage |
| `saveCustomCategories()` | Data | Persist custom categories to localStorage |
| `applyTheme(theme)` | UI | Switch between dark/light themes |
| `applyLanguage(lang)` | UI | Switch between Arabic/English |
| `renderBooks(filter)` | UI | Generate and inject book card HTML |
| `renderCategories()` | UI | Generate and inject category card HTML |
| `renderFavorites()` | UI | Generate favorites page content |
| `renderAdminTable(search)` | UI | Generate admin books table |
| `renderAdminCategories()` | UI | Generate admin category chips |
| `handleSearch(e)` | UI | Process search input, show results |
| `updateStats()` | UI | Update hero section counters |
| `updateDashboardStats()` | UI | Update admin dashboard counters |
| `showToast(message, type)` | UI | Show notification toast |
| `initParticles()` | Effects | Initialize canvas particle animation |
| `animateCounters()` | Effects | Animate stat number counting |

### 11.3 CRUD Functions

| Function | Operation | Description |
|----------|-----------|-------------|
| `openBookForm(editId)` | Create/Update | Open form modal (empty or pre-filled) |
| `closeBookForm()` | — | Close form modal, reset state |
| `handleBookSubmit(e)` | Create/Update | Validate, save, re-render |
| `openDeleteModal(bookId)` | Delete | Show deletion confirmation |
| `confirmDelete()` | Delete | Remove book, update storage |
| `openCategoryForm()` | Create | Open category creation modal |
| `handleCategorySubmit(e)` | Create | Validate, save category |
| `openDeleteCategoryModal(catId)` | Delete | Show category deletion confirmation |
| `confirmDeleteCategory()` | Delete | Remove category, reassign books |

### 11.4 Reader Functions

| Function | Description |
|----------|-------------|
| `openReader(bookId)` | Initialize reader for a specific book |
| `openPdfReader(pdfDataUrl)` | Set up PDF.js rendering |
| `openTextReader()` | Set up chapter text display |
| `renderPdfPage(pageNum)` | Render specific PDF page on canvas |
| `renderTextChapter()` | Render current text chapter |
| `navigatePage(dir)` | Move to next/previous page or chapter |
| `adjustZoom(delta)` | Change PDF zoom level |
| `jumpToPage()` | Navigate to specific page number |
| `toggleReaderTheme()` | Switch between normal and sepia |
| `downloadCurrentPdf()` | Trigger PDF file download |
| `closeReader()` | Close reader, reset state |

---

## 12. API & Backend Integration

### Supabase REST API Endpoints

| Endpoint | Method | Description |
|----------|--------|-------------|
| `GET /rest/v1/books?order=id.asc&select=*` | GET | Load all books |
| `POST /rest/v1/books` | POST | Insert new book |
| `PATCH /rest/v1/books?id=eq.{id}` | PATCH | Update a book |
| `DELETE /rest/v1/books?id=eq.{id}` | DELETE | Delete a book |
| `GET /rest/v1/categories?order=id.asc&select=*` | GET | Load categories |
| `POST /rest/v1/categories` | POST | Insert category |
| `DELETE /rest/v1/categories?id=eq.{id}` | DELETE | Delete category |

### Supabase Storage URLs

| URL Pattern | Description |
|------------|-------------|
| `{SUPABASE_URL}/storage/v1/object/public/books/{id}.pdf` | Public PDF download |
| `{SUPABASE_URL}/storage/v1/object/books/{id}.pdf` | PDF upload endpoint |

### API Authentication Headers

```javascript
{
  'apikey':        SUPABASE_ANON,         // Project anonymous key
  'Authorization': `Bearer ${SUPABASE_ANON}`,  // Bearer token
  'Content-Type':  'application/json',     // JSON content type
  'Prefer':        'return=representation' // Return inserted/updated row
}
```

### Available PDFs on Supabase Storage

| Book | PDF URL |
|------|---------|
| على منهاج النبوة (On the Path of Prophethood) | `https://unjbytljocengnbedpwr.supabase.co/storage/v1/object/public/books/ala-minhaj-alnobowa.pdf.pdf` |
| خدعوك فقالوا (They Deceived You) | `https://unjbytljocengnbedpwr.supabase.co/storage/v1/object/public/books/khadaook-faqaloo.pdf.pdf` |

---

## 13. Security Considerations

### Current Implementation

| Aspect | Status | Details |
|--------|--------|---------|
| Admin credentials | ⚠️ Client-side | Stored in plaintext in `app.js` |
| Supabase keys | ⚠️ Public | Anon key exposed in frontend (by design for read-only) |
| Session management | ⚠️ In-memory | No token/cookie — resets on reload |
| XSS protection | ⚠️ Partial | innerHTML used for rendering (sanitize user input) |
| CORS | ✅ Handled | Supabase handles CORS automatically |
| RLS | ✅ Enabled | Row Level Security on all tables |
| PDF access | ✅ Public | Public bucket — read-only for everyone |

### Recommendations for Production

1. **Move admin auth to Supabase Auth** — Use Supabase's built-in authentication for proper session management.
2. **Use service-role key server-side** — Never expose write credentials in frontend code.
3. **Sanitize HTML** — Escape user-generated content before using `innerHTML`.
4. **Implement HTTPS** — GitHub Pages provides this automatically.
5. **Rate limiting** — Supabase has built-in rate limits, but monitor usage.

---

## 14. Performance Optimizations

| Optimization | Implementation |
|-------------|----------------|
| **Lazy Loading** | Books fetched from Supabase on demand, fallback to local data |
| **CSS Transitions** | Hardware-accelerated transforms for animations |
| **Canvas Particles** | Lightweight 35-particle system using `requestAnimationFrame` |
| **Responsive Images** | Book wallpapers loaded via URL with Unsplash CDN optimizations |
| **Event Delegation** | Filter chips use event delegation on container |
| **Debounced Scroll** | Navbar shadow only applied when `scrollY > 100` |
| **Minimal Dependencies** | Only one external library (PDF.js ~300KB) |
| **No Framework Overhead** | Pure vanilla JS — no React/Vue/Angular bundle size |
| **CSS Variables** | Theme switching without re-calculating styles |

---

## 15. Responsive Design

### Breakpoints

| Breakpoint | Target | Behavior |
|-----------|--------|----------|
| `> 768px` | Desktop | Full layout: side-by-side grids, horizontal nav |
| `≤ 768px` | Tablet / Mobile | Stacked layout, bottom nav bar, smaller cards |

### Mobile Adaptations

| Component | Desktop | Mobile |
|-----------|---------|--------|
| Navigation | Horizontal links in navbar | Fixed bottom tab bar (icons only) |
| Book Grid | `repeat(auto-fill, minmax(220px, 1fr))` | `repeat(auto-fill, minmax(160px, 1fr))` |
| Book Cover | 260px height | 200px height |
| Book Detail Modal | 2-column grid (cover + info) | Single column |
| Form Layout | 2-column rows | Single column |
| School Header | Horizontal flex (3 columns) | Vertical stack, centered |
| Dashboard Stats | `repeat(auto-fit, minmax(200px, 1fr))` | 2-column grid |
| Hero Title | `clamp(2rem, 5vw, 3.2rem)` | ~1.8rem |
| Main Content | Normal padding | Extra bottom padding for nav bar |

---

## 16. Future Enhancements

### Short-term Improvements
- [ ] Move admin authentication to Supabase Auth
- [ ] Add book categories from Supabase instead of localStorage only
- [ ] Implement book reading progress tracking per user
- [ ] Add book bookmarks within PDF reader
- [ ] Implement full-text search within PDF content

### Medium-term Features
- [ ] User accounts with personal reading lists
- [ ] Reading statistics and analytics dashboard
- [ ] Book recommendations based on reading history
- [ ] Social features (reviews, ratings by students)
- [ ] Push notifications for new book additions

### Long-term Vision
- [ ] Mobile app (PWA — Progressive Web App)
- [ ] Audiobook integration
- [ ] AI-powered book summaries
- [ ] Integration with school LMS (Learning Management System)
- [ ] Multi-school support with tenant isolation

---

## Appendix A: Default Book Collection

| # | Title (EN) | Title (AR) | Author | Category |PDF |
|---|-----------|-----------|--------|----------|-----|
| 1 | Messages from the Prophet | رسائل من النبي | Adham Sharqawi | Religion | — |
| 2 | On the Path of Prophethood | على منهاج النبوة | Adham Sharqawi | Religion | ✅ |
| 3 | They Deceived You | خدعوك فقالوا | Mostafa Hosny | Religion | ✅ |
| 4 | An Idea from Every Verse | من كل آية فكرة | Tariq Al-Suqair | Religion | — |
| 5 | Messages from Ali ibn Abi Talib | رسائل من علي بن أبي طالب | Unknown | Religion | — |
| 6 | Messages from Umar ibn Al-Khattab | رسائل من عمر بن الخطاب | Unknown | Religion | — |
| 7 | Kalila and Dimna | كليلة ودمنة | Heritage | Fiction | — |
| 8 | The Brothers | الأخوان | Beeza | Fiction | — |
| 9 | Reflections | وقفات | Abdul Karim Bakkar | Science | — |
| 10 | My Daughter | يابنتي | Ali Al-Tantawi | Science | — |
| 11 | And Those Days | وتلك الأيام | Adham Sharqawi | History | — |
| 12 | Morning Talks | حديث الصباح | Unknown | Poetry | — |

---

## Appendix B: localStorage Keys

| Key | Type | Description |
|-----|------|-------------|
| `maktabaty_books` | JSON Array | All book data (CRUD operations) |
| `maktabaty_favorites` | JSON Array | Array of favorited book IDs |
| `maktabaty_lang` | String | Current language (`'en'` or `'ar'`) |
| `maktabaty_theme` | String | Current theme (`'dark'` or `'light'`) |
| `maktabaty_custom_categories` | JSON Array | Custom category definitions |

---

## Appendix C: External Dependencies

| Dependency | CDN URL | Version | Size |
|-----------|---------|---------|------|
| PDF.js | `cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js` | 3.11.174 | ~300KB |
| Google Fonts | `fonts.googleapis.com/css2?family=...` | Latest | Variable |
| Material Icons | `fonts.googleapis.com/icon?family=Material+Icons+Round` | Latest | ~42KB |

---

**Document prepared by:** Zeina Wael  
**Last updated:** April 2026  
© 2026 Maktabaty — Amna Bint Al-Arqam Al-Makhzumiya Secondary School for Girls
