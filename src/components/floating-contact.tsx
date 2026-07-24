import { SITE } from '@/data/site'

export default function FloatingContact() {
  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-3">
      {/* Hotline */}
      <a
        href={`tel:${SITE.hotlineRaw}`}
        className="flex h-12 w-12 items-center justify-center rounded-full bg-green-600 shadow-lg transition-transform hover:scale-110"
        title="Gọi điện"
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
          <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.36 11.36 0 003.58.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.36 11.36 0 00.57 3.58 1 1 0 01-.25 1.01l-2.2 2.2z" />
        </svg>
      </a>

      {/* Zalo */}
      <a
        href={`https://zalo.me/${SITE.hotlineRaw}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-500 shadow-lg transition-transform hover:scale-110"
        title="Chat Zalo"
      >
        <svg width="22" height="22" viewBox="0 0 460.1 436.6" fill="white">
          <path d="M82.5 385.5c-10.3-10.3-16.2-24.1-16.2-38.8v-35.4c0-3.1-.8-6.2-2.4-8.8-8.2-13.6-12.4-28.8-12.4-44.5 0-54.1 46.2-98.1 103-98.1s103 44 103 98.1-46.2 98.1-103 98.1c-10.8 0-21.3-1.6-31.4-4.7-3.4-1-7-1-10.3 0l-31.4 9.8c-3.3 1-5.9-1.6-4.9-4.9l6-29.9zm8.4-214.2h29.4c4.2 0 7.6 3.4 7.6 7.6v114.5c0 4.2-3.4 7.6-7.6 7.6H90.9c-4.2 0-7.6-3.4-7.6-7.6V178.9c0-4.2 3.4-7.6 7.6-7.6zm57.7 0h26.8c4.2 0 7.6 3.4 7.6 7.6v69.3l35.6-73.2c1.4-2.9 4.3-4.7 7.5-4.7h26.8c4.2 0 7.6 3.4 7.6 7.6v114.5c0 4.2-3.4 7.6-7.6 7.6h-26.8c-4.2 0-7.6-3.4-7.6-7.6v-69.3l-35.6 73.2c-1.4 2.9-4.3 4.7-7.5 4.7h-26.8c-4.2 0-7.6-3.4-7.6-7.6V178.9c0-4.2 3.4-7.6 7.6-7.6zm128.4 0h73.6c4.2 0 7.6 3.4 7.6 7.6v22.3c0 4.2-3.4 7.6-7.6 7.6h-43.1v17.2h36.8c4.2 0 7.6 3.4 7.6 7.6v22.3c0 4.2-3.4 7.6-7.6 7.6h-36.8v17.2h43.1c4.2 0 7.6 3.4 7.6 7.6v22.3c0 4.2-3.4 7.6-7.6 7.6h-73.6c-4.2 0-7.6-3.4-7.6-7.6V178.9c0-4.2 3.4-7.6 7.6-7.6z" />
        </svg>
      </a>
    </div>
  )
}
