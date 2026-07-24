import { Link } from 'react-router'
import { ArrowRight, Cable, Factory, Gauge } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { PRODUCT_CATEGORIES } from '@/data/products'

const CATEGORY_ICONS = [Cable, Cable, Gauge, Factory]

export default function Products() {
  return (
    <main>
      <section className="bg-slate-950 py-12 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <Badge className="mb-4 bg-amber-500/15 text-amber-400 hover:bg-amber-500/15">Sản phẩm</Badge>
          <h1 className="max-w-3xl text-4xl font-black leading-tight md:text-5xl">
            Danh mục sản phẩm
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-slate-300">
            Bốn nhóm sản phẩm chiến lược: cáp công nghiệp Taiyo, Kuramo và thiết bị khí nén SFC,
            Chanto — tất cả đều chính hãng, có sẵn kho và hỗ trợ kỹ thuật đầy đủ.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-6 md:grid-cols-2">
          {PRODUCT_CATEGORIES.map((c, i) => {
            const Icon = CATEGORY_ICONS[i] ?? Cable
            return (
              <Card
                key={c.slug}
                className="group flex flex-col border-slate-200 transition-all hover:-translate-y-1 hover:border-amber-400 hover:shadow-lg"
              >
                <CardContent className="flex flex-1 flex-col p-7">
                  <div className="mb-5 flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-slate-950 text-amber-400">
                      <Icon className="h-6 w-6" />
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {c.brand} · {c.origin}
                    </Badge>
                  </div>
                  <h2 className="text-2xl font-extrabold text-slate-900 group-hover:text-amber-600">
                    {c.name}
                  </h2>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-500">{c.shortDesc}</p>

                  <ul className="mt-5 space-y-2">
                    {c.highlights.slice(0, 3).map((h) => (
                      <li key={h} className="flex gap-2 text-sm text-slate-600">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500" />
                        {h}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6">
                    <Button asChild className="bg-slate-950 font-bold text-white hover:bg-slate-800">
                      <Link to={`/san-pham/${c.slug}`}>
                        Xem chi tiết <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </section>
    </main>
  )
}
