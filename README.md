# MyCompany - Next.js Company Profile

Website company profile yang dibangun dengan Next.js 15, React 19, TypeScript, dan Tailwind CSS.

## 🚀 Fitur

- ✅ Server-Side Rendering (SSR) dengan Next.js 15
- ✅ TypeScript untuk type safety
- ✅ Tailwind CSS untuk styling
- ✅ Fully Responsive Design
- ✅ Animasi dan transisi yang smooth
- ✅ SEO Optimized
- ✅ Fast Performance

## 📁 Struktur Proyek

```
Website Projectan/
├── app/                    # Next.js App Router
│   ├── about/             # Halaman About
│   ├── contact/           # Halaman Contact
│   ├── objective/         # Halaman Business Objective
│   ├── products/          # Halaman Products/Services
│   ├── team/              # Halaman Team
│   ├── vision/            # Halaman Vision & Mission
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Homepage
├── components/            # React Components
│   ├── Footer.tsx        # Footer component
│   ├── HeroCarousel.tsx  # Hero carousel dengan rotasi gambar
│   └── Navbar.tsx        # Navigation bar
├── public/               # Static assets
│   └── images/          # Gambar
├── .gitignore
├── next.config.js       # Next.js configuration
├── package.json
├── postcss.config.js    # PostCSS configuration
├── tailwind.config.ts   # Tailwind CSS configuration
└── tsconfig.json        # TypeScript configuration
```

## 🛠️ Instalasi

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Jalankan development server:**
   ```bash
   npm run dev
   ```

3. **Buka browser:**
   ```
   http://localhost:3000
   ```

## 📦 Build untuk Production

```bash
# Build aplikasi
npm run build

# Jalankan production server
npm start
```

## 🌐 Halaman yang Tersedia

- `/` - Homepage dengan hero carousel
- `/about` - Tentang perusahaan
- `/team` - Tim kami
- `/products` - Produk dan layanan
- `/vision` - Visi dan misi
- `/objective` - Tujuan bisnis
- `/contact` - Kontak kami

## 🎨 Teknologi yang Digunakan

- **Next.js 15** - React framework untuk production
- **React 19** - Library untuk UI
- **TypeScript** - JavaScript dengan type safety
- **Tailwind CSS** - Utility-first CSS framework
- **PostCSS** - CSS processing tool

## 📝 Script yang Tersedia

- `npm run dev` - Jalankan development server
- `npm run build` - Build aplikasi untuk production
- `npm start` - Jalankan production server
- `npm run lint` - Cek linting

## 🔧 Konfigurasi

### Next.js Config
File `next.config.js` dikonfigurasi untuk static export:
```javascript
output: 'export',
images: {
  unoptimized: true,
}
```

### Tailwind CSS
Tailwind CSS sudah dikonfigurasi untuk semua file di folder `app/`, `components/`, dan `pages/`.

## 📱 Fitur Responsive

Website ini fully responsive dan telah dioptimasi untuk:
- 📱 Mobile devices (< 640px)
- 📱 Tablets (640px - 1024px)
- 💻 Desktop (> 1024px)

## ⚡ Performance

- Image optimization
- Code splitting otomatis
- CSS optimization dengan Tailwind
- Fast page transitions
- Lazy loading components

## 🎯 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

© 2025 MyCompany. All Rights Reserved.

---

Made with ❤️ using Next.js
