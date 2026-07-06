import { Mail, Phone } from 'lucide-react';

const SERVICES = ['App Development','Web Development','UI/UX Design','Shopify','WordPress','Digital Strategy']
const COMPANY  = ['About','Work','Process','Contact']
const SOCIALS  = [{ label:'Twitter', icon:'X' },{ label:'LinkedIn', icon:'in' },{ label:'Instagram', icon:'IG' },{ label:'Dribbble', icon:'Dr' }]

export default function Footer() {
  return (
    <footer className="bg-[var(--color-inverted-bg)] text-inverted-text">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-20 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-8 h-8 bg-[var(--color-bg-base)] rounded-lg flex items-center justify-center">
                <span className="text-accent font-display font-bold text-sm">A</span>
              </div>
              <span className="font-display font-bold text-xl tracking-tight">Atharv<span className="text-[var(--color-bg-base)]">.</span></span>
            </div>
            <p className="text-inverted-text/80 text-sm leading-relaxed max-w-xs">
              We craft digital products that help businesses grow — from idea to launch and beyond.
            </p>
            <div className="flex items-center gap-3 mt-8">
              {SOCIALS.map(s => (
                <a key={s.label} href="#" aria-label={s.label}
                  className="w-9 h-9 border border-inverted-text/20 rounded-lg flex items-center justify-center text-xs font-mono text-inverted-text/80 hover:border-[var(--color-bg-base)] hover:text-[var(--color-bg-base)] transition-all duration-200">
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-inverted-text/60 mb-5">Services</h4>
            <ul className="space-y-3">
              {SERVICES.map(s => (
                <li key={s}><a href="#services" className="text-sm text-inverted-text/80 hover:text-[var(--color-bg-base)] transition-colors duration-200">{s}</a></li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-inverted-text/60 mb-5">Company</h4>
            <ul className="space-y-3">
              {COMPANY.map(c => (
                <li key={c}><a href={`#${c.toLowerCase()}`} className="text-sm text-inverted-text/80 hover:text-[var(--color-bg-base)] transition-colors duration-200">{c}</a></li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-inverted-text/60 mb-5">Get in Touch</h4>
            <a href="mailto:amaanbagwan027@gmail.com" className="flex items-center gap-2 text-sm text-inverted-text/80 hover:text-[var(--color-bg-base)] transition-colors duration-200 mb-3">
              <Mail className="w-4 h-4 shrink-0" />
              <span>amaanbagwan027@gmail.com</span>
            </a>
            <a href="mailto:jangamatharv93@gmail.com" className="flex items-center gap-2 text-sm text-inverted-text/80 hover:text-[var(--color-bg-base)] transition-colors duration-200 mb-3">
              <Mail className="w-4 h-4 shrink-0" />
              <span>jangamatharv93@gmail.com</span>
            </a>
            <a href="tel:+918623035107" className="flex items-center gap-2 text-sm text-inverted-text/80 hover:text-[var(--color-bg-base)] transition-colors duration-200 mb-3">
              <Phone className="w-4 h-4 shrink-0" />
              <span>+91 8623035107</span>
            </a>
            <a href="tel:+919359492394" className="flex items-center gap-2 text-sm text-inverted-text/80 hover:text-[var(--color-bg-base)] transition-colors duration-200">
              <Phone className="w-4 h-4 shrink-0" />
              <span>+91 9359492394</span>
            </a>
            <div className="mt-8 p-4 border border-inverted-text/15 rounded-xl bg-inverted-text/10 backdrop-blur-sm">
              <p className="text-xs text-inverted-text/70 font-mono mb-2">Current Status</p>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[var(--color-bg-base)] animate-pulse" />
                <span className="text-sm text-inverted-text/80">Taking new projects</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-inverted-text/15">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 h-14 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-inverted-text/70 font-mono">© {new Date().getFullYear()} <span className="font-display">Atharv Studio</span>. All rights reserved.</p>
          <p className="text-xs text-inverted-text/60 font-mono">Designed & Built with ♥</p>
        </div>
      </div>
    </footer>
  )
}
