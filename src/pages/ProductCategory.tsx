import { Link, useParams, Navigate } from 'react-router'
import { ArrowLeft, ArrowRight, CheckCircle2, Phone } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { PRODUCT_CATEGORIES } from '@/data/products'
import { SITE } from '@/data/site'

export default function ProductCategory() {
  const { slug } = useParams()
  const category = PRODUCT_CATEGORIES.find((c) => c.slug === slug)

  if (!category) return <Navigate to="/san-pham" replace />

  const others = PRODUCT_CATEGORIES.filter((c) => c.slug !== slug)

  return (
    <main>
      {/* Hero */}
      <section className="bg-slate-950 py-20 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <Link
            to="/san-pham"
            className="mb-6 inline-flex items-center text-sm font-semibold text-slate-400 hover:text-amber-400"
          >
            <ArrowLeft className="mr-1.5 h-4 w-4" /> Tất cả sản phẩm
          </Link>
          <div className="flex flex-wrap items-center gap-3">
            <h1 className="text-4xl font-black md:text-5xl">{category.name}</h1>
            <Badge className="bg-amber-500/15 text-amber-400 hover:bg-amber-500/15">
              {category.brand} · {category.origin}
            </Badge>
          </div>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-300">{category.heroDesc}</p>
        </div>
      </section>

      {/* Highlights */}
      <section className="border-b border-slate-100 bg-amber-50/60 py-10">
        <div className="mx-auto grid max-w-7xl gap-4 px-6 sm:grid-cols-2 lg:grid-cols-4">
          {category.highlights.map((h) => (
            <div key={h} className="flex gap-2.5 text-sm font-medium text-slate-700">
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-amber-500" />
              {h}
            </div>
          ))}
        </div>
      </section>

      {/* Product lines */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <h2 className="mb-10 text-3xl font-black text-slate-900">Các dòng sản phẩm</h2>
        {category.slug === 'khi-nen-sfc' && (
          <a
            href="/ong-khi-pu.html"
            className="mb-8 flex flex-col gap-2 rounded-xl border border-amber-300 bg-amber-50 p-5 transition-colors hover:border-amber-500 sm:flex-row sm:items-center sm:justify-between"
          >
            <div>
              <div className="font-extrabold text-slate-900">
                Xem trang riêng: Ống khí PU SFC (PU04×2.5mm – PU16×14mm)
              </div>
              <div className="text-sm text-slate-500">
                Bảng sản phẩm chính, thông số kỹ thuật và hướng dẫn cách đọc mã đặt hàng chi tiết.
              </div>
            </div>
            <span className="inline-flex items-center text-sm font-bold text-amber-600">
              Mở trang <ArrowRight className="ml-1.5 h-4 w-4" />
            </span>
          </a>
        )}
        <div className="grid gap-6 md:grid-cols-2">
          {category.lines.map((line) => (
            <Card key={line.code} className="border-slate-200 transition-shadow hover:shadow-md">
              <CardContent className="p-7">
                <Badge variant="outline" className="border-amber-500 font-mono text-xs text-amber-600">
                  {line.code}
                </Badge>
                <h3 className="mt-3 text-lg font-extrabold text-slate-900">{line.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">{line.desc}</p>
                <ul className="mt-4 space-y-2">
                  {line.features.map((f) => (
                    <li key={f} className="flex gap-2 text-sm text-slate-600">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500" />
                      {f}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Applications */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="mb-8 text-2xl font-black text-slate-900">Ứng dụng tiêu biểu</h2>
          <div className="flex flex-wrap gap-3">
            {category.applications.map((a) => (
              <Badge key={a} variant="secondary" className="px-4 py-2 text-sm">
                {a}
              </Badge>
            ))}
          </div>

          <div className="mt-12 flex flex-col items-start gap-4 rounded-xl bg-slate-950 p-8 text-white md:flex-row md:items-center md:justify-between">
            <div>
              <h3 className="text-xl font-extrabold">Cần datasheet hoặc báo giá {category.name}?</h3>
              <p className="mt-1 text-sm text-slate-300">
                Gửi mã sản phẩm bạn quan tâm, Camtech sẽ phản hồi kèm thông số kỹ thuật chi tiết.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button asChild className="bg-amber-500 font-bold text-slate-950 hover:bg-amber-400">
                <Link to="/lien-he">Yêu cầu báo giá</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-slate-600 bg-transparent text-white hover:bg-slate-800 hover:text-white"
              >
                <a href={`tel:${SITE.hotlineRaw}`}>
                  <Phone className="mr-2 h-4 w-4" /> {SITE.hotline}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Other categories */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <h2 className="mb-8 text-2xl font-black text-slate-900">Sản phẩm khác</h2>
        <div className="grid gap-4 sm:grid-cols-3">
          {others.map((c) => (
            <Link
              key={c.slug}
              to={`/san-pham/${c.slug}`}
              className="group flex items-center justify-between rounded-xl border border-slate-200 p-5 transition-colors hover:border-amber-400 hover:bg-amber-50/50"
            >
              <div>
                <div className="font-extrabold text-slate-900 group-hover:text-amber-600">{c.name}</div>
                <div className="mt-0.5 text-xs text-slate-500">{c.brand}</div>
              </div>
              <ArrowRight className="h-5 w-5 text-slate-400 transition-transform group-hover:translate-x-1 group-hover:text-amber-500" />
            </Link>
          ))}
        </div>
      </section>
    </main>
  )
}
