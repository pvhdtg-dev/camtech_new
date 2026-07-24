import { Link } from 'react-router'
import { useState } from 'react'
import { ArrowRight, Cable, Factory, Gauge, ShieldCheck, Truck, Headset, BadgeCheck, Settings, CheckCircle2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { PRODUCT_CATEGORIES, SERVICES } from '@/data/products'
import { SITE } from '@/data/site'

const CATEGORY_ICONS = [Cable, Cable, Gauge, Factory]

const WHY_US = [
  {
    icon: BadgeCheck,
    title: 'Chính hãng 100%',
    desc: 'Sản phẩm nhập khẩu trực tiếp, đầy đủ CO/CQ và chứng nhận CE, UL.',
  },
  {
    icon: Truck,
    title: 'Kho hàng sẵn — giao nhanh',
    desc: 'Tồn kho lớn tại TP.HCM, giao hàng toàn quốc trong 1–3 ngày.',
  },
  {
    icon: Headset,
    title: 'Hỗ trợ kỹ thuật tận tâm',
    desc: 'Đội ngũ kỹ thuật tư vấn chọn sản phẩm đúng ứng dụng, hỗ trợ lắp đặt.',
  },
  {
    icon: ShieldCheck,
    title: 'Bảo hành chu đáo',
    desc: 'Chế độ bảo hành chính hãng, đổi trả nhanh chóng khi có lỗi sản phẩm.',
  },
]

const HERO_TABS = [
  {
    key: 'cap',
    label: 'Cáp Công Nghiệp',
    title: 'Giải pháp cáp công nghiệp Taiyo & Kuramo cho nhà máy',
    desc: 'Cáp robot, cáp điều khiển và cáp truyền thông công nghiệp từ hai thương hiệu hàng đầu Nhật Bản — đầy đủ chứng nhận CE, UL, CLPA.',
    bullets: ['Cáp chịu uốn cao cho robot & xích dẫn cáp', 'Cáp CC-Link, EtherCAT, DeviceNet, Profibus', 'Hàng sẵn kho — cắt theo mét — giao nhanh toàn quốc'],
    cta1: { label: 'Xem cáp Taiyo', to: '/san-pham/cap-taiyo' },
    cta2: { label: 'Xem cáp Kuramo', to: '/san-pham/cap-kuramo' },
    brands: 'Taiyo Cabletec · Kuramo Electric',
    image: null,
  },
  {
    key: 'khi-nen',
    label: 'Thiết Bị Khí Nén',
    title: 'Thiết bị khí nén SFC & Chanto — đầy đủ cho dây chuyền tự động',
    desc: 'Xy lanh, van điện từ, bộ lọc FRL, ống PU và phụ kiện từ hai thương hiệu Đài Loan — chất lượng ổn định, giá tối ưu, tương thích chuẩn ISO.',
    bullets: ['Xy lanh khí nén đủ size — compact, dẫn hướng, không trục', 'Van điện từ 5/2, 5/3 — coil 24VDC/220VAC', 'Ống khí PU & fitting — đủ màu, cắt lẻ theo mét'],
    cta1: { label: 'Xem khí nén SFC', to: '/san-pham/khi-nen-sfc' },
    cta2: { label: 'Xem khí nén Chanto', to: '/san-pham/khi-nen-chanto' },
    brands: 'SFC · Chanto',
    image: null,
  },
]

export default function Home() {
  const [activeTab, setActiveTab] = useState('cap')
  const tab = HERO_TABS.find((t) => t.key === activeTab) ?? HERO_TABS[0]

  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden bg-slate-950 text-white">
        <div
          className="pointer-events-none absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              'radial-gradient(circle at 20% 30%, rgba(245,158,11,.35), transparent 40%), radial-gradient(circle at 80% 70%, rgba(245,158,11,.2), transparent 40%)',
          }}
        />

        <div className="relative mx-auto max-w-7xl px-6 py-16 md:py-20">
          {/* Tabs */}
          <div className="mb-10 flex justify-center gap-2">
            {HERO_TABS.map((t) => (
              <button
                key={t.key}
                onClick={() => setActiveTab(t.key)}
                className={`rounded-full px-6 py-2.5 text-sm font-bold transition-all ${
                  activeTab === t.key
                    ? 'bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/25'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white'
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="flex flex-col items-center gap-10 lg:flex-row lg:items-start">
            {/* Left text */}
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-3xl font-black leading-tight md:text-4xl lg:text-5xl">
                {tab.title}
              </h1>
              <p className="mt-5 text-base leading-relaxed text-slate-300 md:text-lg">
                {tab.desc}
              </p>

              <ul className="mt-6 space-y-3">
                {tab.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2.5 text-sm text-slate-300 md:text-base">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-amber-400" />
                    {b}
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start">
                <Button asChild className="bg-amber-500 font-bold text-slate-950 hover:bg-amber-400">
                  <Link to={tab.cta1.to}>
                    {tab.cta1.label} <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-slate-600 bg-transparent text-white hover:bg-slate-800 hover:text-white"
                >
                  <Link to={tab.cta2.to}>{tab.cta2.label}</Link>
                </Button>
              </div>

              <p className="mt-6 text-xs font-medium uppercase tracking-widest text-slate-500">
                {tab.brands}
              </p>
            </div>

            {/* Right — placeholder image area */}
            <div className="hidden flex-1 lg:flex lg:items-center lg:justify-center">
              <div className="flex h-80 w-full max-w-md items-center justify-center rounded-2xl border border-slate-700 bg-slate-800/50">
                <div className="text-center text-slate-500">
                  <Cable className="mx-auto h-12 w-12 text-amber-500/40" />
                  <p className="mt-3 text-sm">Hình ảnh sản phẩm</p>
                  <p className="text-xs text-slate-600">{tab.brands}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product categories */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-12 text-center">
          <Badge variant="outline" className="mb-3 border-amber-500 text-amber-600">
            Danh mục sản phẩm
          </Badge>
          <h2 className="text-3xl font-black text-slate-900 md:text-4xl">Sản phẩm chủ lực</h2>
          <p className="mx-auto mt-3 max-w-2xl text-slate-500">
            Bốn nhóm sản phẩm chiến lược phục vụ toàn diện nhu cầu truyền dẫn — tín hiệu và khí nén
            trong nhà máy.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {PRODUCT_CATEGORIES.map((c, i) => {
            const Icon = CATEGORY_ICONS[i] ?? Cable
            return (
              <Link key={c.slug} to={`/san-pham/${c.slug}`} className="group">
                <Card className="h-full overflow-hidden border-slate-200 transition-all group-hover:-translate-y-1 group-hover:border-amber-400 group-hover:shadow-lg">
                  <CardContent className="flex h-full flex-col p-7">
                    <div className="mb-5 flex items-center justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-slate-950 text-amber-400">
                        <Icon className="h-6 w-6" />
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        {c.brand} · {c.origin}
                      </Badge>
                    </div>
                    <h3 className="text-xl font-extrabold text-slate-900 group-hover:text-amber-600">
                      {c.name}
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-500">{c.shortDesc}</p>
                    <div className="mt-5 flex items-center text-sm font-bold text-amber-600">
                      Khám phá chi tiết
                      <ArrowRight className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            )
          })}
        </div>
      </section>

      {/* Why us */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-black text-slate-900 md:text-4xl">Vì sao chọn Camtech?</h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {WHY_US.map((w) => (
              <Card key={w.title} className="border-slate-200">
                <CardContent className="p-6">
                  <w.icon className="h-9 w-9 text-amber-500" />
                  <h3 className="mt-4 font-extrabold text-slate-900">{w.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-500">{w.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-black text-slate-900 md:text-4xl">Dịch vụ kỹ thuật</h2>
          <p className="mx-auto mt-3 max-w-2xl text-slate-500">
            Ngoài phân phối sản phẩm, Camtech đồng hành cùng khách hàng bằng các dịch vụ kỹ thuật
            chuyên sâu.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {SERVICES.map((s) => (
            <Card key={s.title} className="border-slate-200">
              <CardContent className="p-7">
                <Settings className="h-8 w-8 text-amber-500" />
                <h3 className="mt-4 text-lg font-extrabold text-slate-900">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">{s.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-950 py-12 text-white">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl font-black md:text-4xl">
            Cần tư vấn chọn cáp hoặc thiết bị khí nén?
          </h2>
          <p className="mt-4 text-slate-300">
            Gửi yêu cầu ngay hôm nay — đội ngũ Camtech phản hồi báo giá trong giờ làm việc.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-amber-500 font-bold text-slate-950 hover:bg-amber-400">
              <Link to="/lien-he">Gửi yêu cầu báo giá</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-slate-600 bg-transparent text-white hover:bg-slate-800 hover:text-white"
            >
              <a href={`tel:${SITE.hotlineRaw}`}>Gọi {SITE.hotline}</a>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
