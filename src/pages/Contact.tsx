import { useState } from 'react'
import { MapPin, Phone, Mail, Clock, User, Send, CheckCircle2 } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { SITE } from '@/data/site'
import { PRODUCT_CATEGORIES } from '@/data/products'

const INFO = [
  { icon: MapPin, label: 'Địa chỉ', value: SITE.address },
  { icon: Phone, label: 'Hotline', value: SITE.hotline, href: `tel:${SITE.hotlineRaw}` },
  { icon: Mail, label: 'Email', value: SITE.email, href: `mailto:${SITE.email}` },
  { icon: Clock, label: 'Giờ làm việc', value: SITE.workingHours },
  { icon: User, label: 'Người phụ trách', value: SITE.contactPerson },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', company: '', phone: '', email: '', topic: '', message: '' })
  const [sent, setSent] = useState(false)

  const update = (key: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [key]: e.target.value }))

  // Website tĩnh (không database): soạn email qua ứng dụng thư mặc định của khách
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent(
      `[camtech.vn] Yêu cầu báo giá${form.topic ? ` — ${form.topic}` : ''} — ${form.name}`,
    )
    const body = encodeURIComponent(
      [
        `Họ tên: ${form.name}`,
        `Công ty: ${form.company}`,
        `Điện thoại: ${form.phone}`,
        `Email: ${form.email}`,
        `Nhóm sản phẩm quan tâm: ${form.topic || '—'}`,
        '',
        'Nội dung:',
        form.message,
      ].join('\n'),
    )
    window.location.href = `mailto:${SITE.email}?subject=${subject}&body=${body}`
    setSent(true)
  }

  return (
    <main>
      <section className="bg-slate-950 py-20 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <Badge className="mb-4 bg-amber-500/15 text-amber-400 hover:bg-amber-500/15">Liên hệ</Badge>
          <h1 className="max-w-3xl text-4xl font-black leading-tight md:text-5xl">
            Liên hệ với Camtech
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-300">
            Gửi yêu cầu báo giá, hỏi về tồn kho hoặc đặt lịch tư vấn kỹ thuật — chúng tôi phản hồi
            trong giờ làm việc.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-10 lg:grid-cols-5">
          {/* Info */}
          <div className="space-y-4 lg:col-span-2">
            {INFO.map((item) => (
              <Card key={item.label} className="border-slate-200">
                <CardContent className="flex gap-4 p-5">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-slate-950 text-amber-400">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      {item.label}
                    </div>
                    {item.href ? (
                      <a href={item.href} className="mt-0.5 block text-sm font-semibold text-slate-900 hover:text-amber-600">
                        {item.value}
                      </a>
                    ) : (
                      <div className="mt-0.5 text-sm font-semibold text-slate-900">{item.value}</div>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Map */}
            <div className="overflow-hidden rounded-xl border border-slate-200">
              <iframe
                title="Bản đồ Camtech"
                src={SITE.mapEmbed}
                className="h-64 w-full border-0"
                loading="lazy"
              />
            </div>
          </div>

          {/* Form */}
          <Card className="border-slate-200 lg:col-span-3">
            <CardContent className="p-8">
              <h2 className="text-2xl font-extrabold text-slate-900">Gửi yêu cầu báo giá</h2>
              <p className="mt-1 text-sm text-slate-500">
                Điền thông tin bên dưới — hệ thống sẽ soạn sẵn email gửi đến Camtech qua ứng dụng thư
                của bạn.
              </p>

              {sent && (
                <div className="mt-4 flex items-center gap-2 rounded-lg border border-green-200 bg-green-50 p-3 text-sm font-medium text-green-700">
                  <CheckCircle2 className="h-4 w-4" />
                  Đã soạn email. Nếu ứng dụng thư chưa mở, vui lòng gửi trực tiếp đến {SITE.email}.
                </div>
              )}

              <form onSubmit={handleSubmit} className="mt-6 grid gap-5 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Họ và tên *</Label>
                  <Input id="name" required value={form.name} onChange={update('name')} placeholder="Nguyễn Văn A" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company">Công ty</Label>
                  <Input id="company" value={form.company} onChange={update('company')} placeholder="Công ty ABC" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Điện thoại *</Label>
                  <Input id="phone" required type="tel" value={form.phone} onChange={update('phone')} placeholder="09xx xxx xxx" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" value={form.email} onChange={update('email')} placeholder="ban@congty.vn" />
                </div>
                <div className="space-y-2 sm:col-span-2">
                  <Label>Nhóm sản phẩm quan tâm</Label>
                  <Select value={form.topic} onValueChange={(v) => setForm((f) => ({ ...f, topic: v }))}>
                    <SelectTrigger>
                      <SelectValue placeholder="Chọn nhóm sản phẩm" />
                    </SelectTrigger>
                    <SelectContent>
                      {PRODUCT_CATEGORIES.map((c) => (
                        <SelectItem key={c.slug} value={c.name}>
                          {c.name} ({c.brand})
                        </SelectItem>
                      ))}
                      <SelectItem value="Dịch vụ kỹ thuật">Dịch vụ kỹ thuật / PLC</SelectItem>
                      <SelectItem value="Khác">Khác</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2 sm:col-span-2">
                  <Label htmlFor="message">Nội dung yêu cầu *</Label>
                  <Textarea
                    id="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={update('message')}
                    placeholder="Ví dụ: Xin báo giá 200m cáp robot Taiyo EXT-II 0.5mm² 10 lõi có chống nhiễu..."
                  />
                </div>
                <div className="sm:col-span-2">
                  <Button type="submit" size="lg" className="w-full bg-amber-500 font-bold text-slate-950 hover:bg-amber-400 sm:w-auto">
                    <Send className="mr-2 h-4 w-4" /> Gửi yêu cầu
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  )
}
