# Camtech — Website giới thiệu (camtech.vn)

Website tĩnh (không database) giới thiệu **Công Ty TNHH Camtech** — nhà phân phối:

- **Cáp Taiyo** (Taiyo Cabletec — Nhật Bản): cáp robot EXT-II, cáp điều khiển VCTF23NXX...
- **Cáp Kuramo** (Kuramo Electric — Nhật Bản): cáp CC-Link, EtherCAT, DeviceNet, Profibus, cáp chịu uốn KDF...
- **Khí nén SFC**: xy lanh, van điện từ, bộ lọc FRL, ống PU & phụ kiện
- **Khí nén Chanto** (Đài Loan): xy lanh compact, xy lanh không trục, kẹp khí nén, bàn xoay

## Công nghệ

React 19 + TypeScript + Vite + Tailwind CSS + shadcn/ui. Dùng `HashRouter` nên chạy tốt trên GitHub Pages không cần cấu hình server.

## Chạy local

```bash
npm install
npm run dev
```

## Build

```bash
npm run build   # kết quả trong thư mục dist/
```

## Triển khai lên GitHub Pages

### Cách 1: GitHub Actions (khuyên dùng)

Tạo file `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages
on:
  push:
    branches: [main]
permissions:
  pages: write
  id-token: write
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
      - run: npm install
      - run: npm run build
      - uses: actions/upload-pages-artifact@v3
        with:
          path: ./dist
  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - id: deployment
        uses: actions/deploy-pages@v4
```

Sau đó: **Settings → Pages → Source: GitHub Actions**, push code lên nhánh `main` là xong.

### Cách 2: thủ công với gh-pages

```bash
npm install -D gh-pages
# thêm vào package.json > scripts: "deploy": "gh-pages -d dist"
npm run build
npm run deploy
```

### Cách 3: Netlify / Vercel

Kéo thả thư mục `dist/` lên Netlify Drop, hoặc import repo vào Vercel (framework: Vite, build: `npm run build`, output: `dist`).

## Đẩy mã nguồn lên GitHub

```bash
git init
git add .
git commit -m "Website giới thiệu Camtech"
git branch -M main
git remote add origin https://github.com/<username>/camtech-website.git
git push -u origin main
```

## Cấu trúc nội dung

| Đường dẫn | Trang |
|---|---|
| `#/` | Trang chủ |
| `#/gioi-thieu` | Giới thiệu Camtech |
| `#/san-pham` | Danh mục sản phẩm |
| `#/san-pham/cap-taiyo` | Cáp Taiyo |
| `#/san-pham/cap-kuramo` | Cáp Kuramo |
| `#/san-pham/khi-nen-sfc` | Khí nén SFC |
| `#/san-pham/khi-nen-chanto` | Khí nén Chanto |
| `#/lien-he` | Liên hệ |

Nội dung sản phẩm chỉnh trong `src/data/products.ts`; thông tin công ty chỉnh trong `src/data/site.ts`.
