# BankDash Dashboard

BankDash Dashboard adalah project slicing UI dashboard perbankan berdasarkan desain Figma untuk kebutuhan technical test Frontend Developer.

## Live Demo

Link demo akan ditambahkan setelah proses deployment selesai.

## Repository

https://github.com/alfirdaus248/technical-test-inagata

## Tech Stack

- HTML
- CSS
- JavaScript
- Bootstrap CDN

## Features

- Responsive layout untuk desktop, tablet, foldable, dan mobile
- Dynamic page loading menggunakan JavaScript
- Sidebar navigation dengan active state
- Mobile hamburger menu
- Credit Cards page
- Services page
- Settings page dengan internal tabs:
  - Edit Profile
  - Preferences
  - Security
- Hover interaction pada button dan card
- Smooth scroll dan animasi ringan
- Custom toggle switch pada halaman Settings

## Folder Structure

```text
project/
├── index.html
├── script.js
├── css/
│   ├── base.css
│   ├── layout.css
│   ├── sidebar.css
│   ├── topbar.css
│   ├── shared.css
│   ├── credit-cards.css
│   ├── services.css
│   ├── settings.css
│   ├── responsive-tablet.css
│   ├── responsive-foldable.css
│   └── responsive-mobile.css
├── pages/
│   ├── credit.html
│   ├── services.html
│   └── setting.html
└── assets/
    ├── icons/
    └── images/

## How to Run Locally

Karena project ini menggunakan `fetch()` untuk load halaman dari folder `pages`, jalankan menggunakan local server.

### Option 1: VS Code Live Server

1. Install extension **Live Server**
2. Klik kanan `index.html`
3. Pilih **Open with Live Server**

### Option 2: npx serve

```bash
npx serve
```

Lalu buka URL yang muncul di terminal.

## Responsive Breakpoints

Project ini dioptimalkan untuk ukuran Figma berikut:

* Desktop: 1440px
* Tablet: 1024px
* Foldable / Surface Duo: 600px
* Mobile: 480px ke bawah

## Notes

Project ini dibuat menggunakan HTML, CSS, dan JavaScript murni tanpa framework frontend. Semua aset visual seperti icon dan grafik diekspor dari Figma agar hasil slicing lebih sesuai dengan desain.

```
