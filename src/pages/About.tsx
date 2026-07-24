import { Link } from 'react-router'
import { Target, Eye, HeartHandshake, Building2, FileBadge, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { SITE } from '@/data/site'

const PILLARS = [
  {
    icon: Target,
    title: 'Sứ mệnh',
    desc: 'Cung cấp giải pháp cáp điện và thiết bị công nghiệp chất lượng cao, đạt tiêu chuẩn quốc tế với giá thành cạnh tranh nhất cho khách hàng Việt Nam.',
  },
  {
    icon: Eye,
    title: 'Tầm nhìn',
    desc: 'Trở thành nhà phân phối hàng đầu Việt Nam trong lĩnh vực cáp điện công nghiệp và thiết bị tự động hóa.',
  },
  {
    icon: HeartHandshake,
    title: 'Giá trị cốt lõi',
    desc: 'Chính hãng — Uy tín — Chất lượng — Hỗ trợ tận tâm. Cam kết sản phẩm chính hãng 100% với dịch vụ hậu mãi tốt nhất.',
  },
]

const MILESTONES = [
  {
    title: 'Đối tác chiến lược của Taiyo & Kuramo',
    desc: 'Phân phối chính thức cáp robot, cáp truyền thông công nghiệp từ hai thương hiệu Nhật Bản uy tín.',
  },
  {
    title: 'Mở rộng sang thiết bị khí nén',
    desc: 'Trở thành đối tác cung cấp thiết bị khí nén SFC và Chanto (Đài Loan) tại thị trường Việt Nam.',
  },
  {
    title: 'Hơn 200 khách hàng tin dùng',
    desc: 'Phục vụ các nhà máy điện tử, cơ khí, đóng gói, gỗ và các OEM xuất khẩu trên toàn quốc.',
  },
]

const CERTS = ['CE Certified', 'UL Listed', 'ISO 9001', 'CCC', 'RoHS']

export default function About() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-slate-950 py-20 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <Badge className="mb-4 bg-amber-500/15 text-amber-400 hover:bg-amber-500/15">Giới thiệu</Badge>
          <h1 className="max-w-3xl text-4xl font-black leading-tight md:text-5xl">
            {SITE.name}
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-slate-300">
            Camtech là nhà phân phối thiết bị công nghiệp và tự động hóa tại TP. Hồ Chí Minh, chuyên
            cáp công nghiệp <span className="font-bold text-amber-400">Taiyo</span>,{' '}
            <span className="font-bold text-amber-400">Kuramo</span> (Nhật Bản) và thiết bị khí nén{' '}
            <span className="font-bold text-amber-400">SFC</span>,{' '}
            <span className="font-bold text-amber-400">Chanto</span> (Đài Loan). Chúng tôi đồng hành
            cùng các nhà máy bằng sản phẩm chính hãng, kho hàng sẵn và đội ngũ kỹ thuật am hiểu ứng dụng.
          </p>
        </div>
      </section>

      {/* Pillars */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-6 md:grid-cols-3">
          {PILLARS.map((p) => (
            <Card key={p.title} className="border-slate-200">
              <CardContent className="p-7">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-slate-950 text-amber-400">
                  <p.icon className="h-6 w-6" />
                </div>
                <h2 className="mt-5 text-xl font-extrabold text-slate-900">{p.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">{p.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Journey */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="mb-10 text-center text-3xl font-black text-slate-900">
            Chặng đường phát triển
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {MILESTONES.map((m, i) => (
              <div key={m.title} className="relative rounded-xl border border-slate-200 bg-white p-7">
                <div className="text-5xl font-black text-amber-500/20">{String(i + 1).padStart(2, '0')}</div>
                <h3 className="mt-3 font-extrabold text-slate-900">{m.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company info + certs */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-10 lg:grid-cols-2">
          <Card className="border-slate-200">
            <CardContent className="p-8">
              <div className="flex items-center gap-3">
                <Building2 className="h-6 w-6 text-amber-500" />
                <h2 className="text-xl font-extrabold text-slate-900">Thông tin doanh nghiệp</h2>
              </div>
              <dl className="mt-6 space-y-4 text-sm">
                <div className="flex flex-col gap-1 border-b border-slate-100 pb-4 sm:flex-row sm:justify-between">
                  <dt className="font-semibold text-slate-500">Tên công ty</dt>
                  <dd className="font-bold uppercase text-slate-900">{SITE.name}</dd>
                </div>
                <div className="flex flex-col gap-1 border-b border-slate-100 pb-4 sm:flex-row sm:justify-between">
                  <dt className="font-semibold text-slate-500">Mã số thuế</dt>
                  <dd className="font-bold text-slate-900">{SITE.taxCode}</dd>
                </div>
                <div className="flex flex-col gap-1 border-b border-slate-100 pb-4 sm:flex-row sm:justify-between">
                  <dt className="font-semibold text-slate-500">Địa chỉ</dt>
                  <dd className="max-w-xs font-bold text-slate-900 sm:text-right">{SITE.address}</dd>
                </div>
                <div className="flex flex-col gap-1 border-b border-slate-100 pb-4 sm:flex-row sm:justify-between">
                  <dt className="font-semibold text-slate-500">Hotline</dt>
                  <dd className="font-bold text-slate-900">
                    {SITE.hotline}
                  </dd>
                </div>
                <div className="flex flex-col gap-1 sm:flex-row sm:justify-between">
                  <dt className="font-semibold text-slate-500">Email</dt>
                  <dd className="font-bold text-slate-900">{SITE.email}</dd>
                </div>
              </dl>
            </CardContent>
          </Card>

          <Card className="border-slate-200">
            <CardContent className="p-8">
              <div className="flex items-center gap-3">
                <FileBadge className="h-6 w-6 text-amber-500" />
                <h2 className="text-xl font-extrabold text-slate-900">Chứng nhận & tiêu chuẩn</h2>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-slate-500">
                Sản phẩm Camtech phân phối đáp ứng các chứng nhận an toàn và chất lượng quốc tế,
                phù hợp cho thiết bị xuất khẩu sang Nhật Bản, EU và Mỹ.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                {CERTS.map((c) => (
                  <Badge key={c} variant="outline" className="border-amber-500 px-4 py-1.5 text-amber-600">
                    {c}
                  </Badge>
                ))}
              </div>
              <Button asChild className="mt-8 bg-amber-500 font-bold text-slate-950 hover:bg-amber-400">
                <Link to="/san-pham">
                  Xem danh mục sản phẩm <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  )
}
