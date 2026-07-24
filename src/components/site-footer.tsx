import { Link } from 'react-router'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import { NAV_ITEMS, SITE } from '@/data/site'
import { PRODUCT_CATEGORIES } from '@/data/products'

export default function SiteFooter() {
  return (
    <footer className="bg-slate-950 text-slate-300">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-4">
        <div>
          <div className="text-xl font-black tracking-wide text-white">
            CAM<span className="text-amber-500">TECH</span>
          </div>
          <p className="mt-3 text-sm leading-relaxed text-slate-400">
            Nhà phân phối cáp công nghiệp Taiyo, Kuramo và thiết bị khí nén SFC, Chanto chính hãng
            tại Việt Nam.
          </p>
          <p className="mt-3 text-sm text-slate-400">MST: {SITE.taxCode}</p>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider text-white">Sản phẩm</h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {PRODUCT_CATEGORIES.map((c) => (
              <li key={c.slug}>
                <Link to={`/san-pham/${c.slug}`} className="hover:text-amber-400">
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider text-white">Liên kết</h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {NAV_ITEMS.map((n) => (
              <li key={n.path}>
                <Link to={n.path} className="hover:text-amber-400">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider text-white">Liên hệ</h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex gap-2.5">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-amber-500" />
              <span>{SITE.address}</span>
            </li>
            <li className="flex gap-2.5">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-amber-500" />
              <span>
                {SITE.hotline}
              </span>
            </li>
            <li className="flex gap-2.5">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-amber-500" />
              <span>{SITE.email}</span>
            </li>
            <li className="flex gap-2.5">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-amber-500" />
              <span>{SITE.workingHours}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-slate-800 py-5 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} {SITE.name} — {SITE.domain}. All rights reserved.
      </div>
    </footer>
  )
}
