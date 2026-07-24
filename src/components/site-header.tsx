import { useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router'
import { Menu, Phone, Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { NAV_ITEMS, SITE } from '@/data/site'

function Logo() {
  return (
    <Link to="/" className="flex items-center">
      <img src={`${import.meta.env.BASE_URL}logo-camtech.png`} alt="Camtech" className="h-9 w-auto" />
    </Link>
  )
}

export default function SiteHeader() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/95 backdrop-blur">
      {/* Top bar */}
      <div className="hidden bg-slate-950 text-xs text-slate-300 md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-end px-6 py-1.5">
          <div className="flex items-center gap-5">
            <a href={`tel:${SITE.hotlineRaw}`} className="flex items-center gap-1.5 hover:text-amber-400">
              <Phone className="h-3 w-3" /> Hotline: {SITE.hotline}
            </a>
            <a href={`mailto:${SITE.email}`} className="flex items-center gap-1.5 hover:text-amber-400">
              <Mail className="h-3 w-3" /> {SITE.email}
            </a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Logo />

        <nav className="hidden items-center gap-1 md:flex">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `rounded-md px-4 py-2 text-sm font-semibold transition-colors ${
                  isActive
                    ? 'bg-amber-50 text-amber-600'
                    : 'text-slate-700 hover:bg-slate-100 hover:text-slate-950'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <Button asChild className="ml-3 bg-amber-500 font-bold text-slate-950 hover:bg-amber-400">
            <Link to="/lien-he">Yêu cầu báo giá</Link>
          </Button>
        </nav>

        {/* Mobile */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-72">
            <div className="mt-6 flex flex-col gap-1">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setOpen(false)}
                  className={`rounded-md px-4 py-3 text-sm font-semibold ${
                    location.pathname === item.path
                      ? 'bg-amber-50 text-amber-600'
                      : 'text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <Button asChild className="mt-4 bg-amber-500 font-bold text-slate-950 hover:bg-amber-400">
                <Link to="/lien-he" onClick={() => setOpen(false)}>
                  Yêu cầu báo giá
                </Link>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
