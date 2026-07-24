import { Link } from 'react-router'
import { ArrowRight, Cable, Factory, Gauge, ShieldCheck, Truck, Headset, BadgeCheck, Settings } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { PRODUCT_CATEGORIES, SERVICES } from '@/data/products'
import { SITE } from '@/data/site'

const CATEGORY_ICONS = [Cable, Cable, Gauge, Factory]

const STATS = [
  { value: '10+', label: 'Năm kinh nghiệm' },
  { value: '4', label: 'Thương hiệu chiến lược' },
  { value: '200+', label: 'Khách hàng tin dùng' },
  { value: '100%', label: 'Hàng chính hãng' },
]

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

export default function Home() {
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
        <div className="relative mx-auto max-w-7xl px-6 py-16 md:py-24">
          <Badge className="mb-6 bg-amber-500/15 text-amber-400 hover:bg-amber-500/15">
            Nhà phân phối thiết bị công nghiệp chính hãng
          </Badge>
          <h1 className="max-w-3xl text-4xl font-black leading-tight md:text-6xl">
            Giải pháp <span className="text-amber-400">cáp công nghiệp</span> &{' '}
            <span className="text-amber-400">thiết bị khí nén</span> cho nhà máy của bạn
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-slate-300">
            {SITE.name} chuyên phân phối cáp robot — cáp truyền thông Taiyo, Kuramo (Nhật Bản) và
            thiết bị khí nén SFC, Chanto (Đài Loan) với kho hàng sẵn, giá tốt và hỗ trợ kỹ thuật tận tâm.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button asChild size="lg" className="bg-amber-500 font-bold text-slate-950 hover:bg-amber-400">
              <Link to="/san-pham">
                Xem sản phẩm <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-slate-600 bg-transparent text-white hover:bg-slate-800 hover:text-white"
            >
              <Link to="/lien-he">Liên hệ báo giá</Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 gap-6 border-t border-slate-800 pt-10 md:grid-cols-4">
            {STATS.map((s) => (
              <div key={s.label}>
                <div className="text-3xl font-black text-amber-400 md:text-4xl">{s.value}</div>
                <div className="mt-1 text-sm text-slate-400">{s.label}</div>
              </div>
            ))}
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
