import { Instagram, Facebook, Music, MapPin, Phone, Mail } from 'lucide-react';

const footerLinks = {
  inicio: [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Nuestro Café', href: '#nuestro-cafe' },
    { label: 'Proceso', href: '#proceso' },
    { label: 'Productos', href: '#productos' },
    { label: 'Sobre Nosotros', href: '#sobre-nosotros' },
    { label: 'Contacto', href: '#contacto' },
    { label: 'Cafetería', href: 'https://scw1.onrender.com/', external: true, icon: '/images/logo_sc.jpg' },
  ],
};

const socialLinks = [
  { icon: Instagram, href: 'https://instagram.com/amador.cafe', label: '@amador.cafe' },
  { icon: Facebook, href: 'https://facebook.com/', label: 'Amador Café' },
  { icon: Music, href: 'https://www.tiktok.com/@amador.cafe', label: '@amador.cafe' },
];

export default function Footer() {
  return (
    <footer id="contacto" className="bg-[#4f3b2a] text-white/80">
      {/* Main Footer */}
      <div className="section-padding py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img src="/images/logo.png" alt="Amador Logo" className="w-14 h-14 rounded-full border-2 border-dorado object-cover" />
              <div>
                <h3 className="font-display text-white text-lg font-semibold">AMADOR</h3>
                <p className="text-[10px] text-dorado tracking-widest">CAFÉ DE NUESTRA TIERRA</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-white/70 max-w-xs">
              Café de especialidad 100% colombiano. El aroma de los buenos momentos.
            </p>
            <p className="text-xs text-white/50">
              Hecho en Boyacá, Colombia. 🇨🇴
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display text-white text-sm font-semibold mb-4 tracking-wider">ENLACES</h4>
            <ul className="space-y-2.5">
              {footerLinks.inicio.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    className="flex items-center gap-1.5 text-sm text-white/70 hover:text-dorado transition-colors w-fit"
                  >
                    {link.label}
                    {link.icon && <img src={link.icon} alt={link.label} className="w-4 h-4 rounded-full border border-dorado/50 object-cover" />}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-white text-sm font-semibold mb-4 tracking-wider">CONTACTO</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://maps.google.com/?q=CL+56+H+SUR+98A-33+Bogotá"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2 text-sm text-white/70 hover:text-dorado transition-colors"
                >
                  <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-dorado" />
                  <span>CL 56 H SUR 98A - 33<br />Bogotá D.C., Colombia</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+573003714694"
                  className="flex items-center gap-2 text-sm text-white/70 hover:text-dorado transition-colors"
                >
                  <Phone className="w-4 h-4 shrink-0 text-dorado" />
                  +57 300 371 4694
                </a>
              </li>
              <li>
                <a
                  href="mailto:amador.sunshinecoffee@gmail.com"
                  className="flex items-center gap-2 text-sm text-white/70 hover:text-dorado transition-colors"
                >
                  <Mail className="w-4 h-4 shrink-0 text-dorado" />
                  amador.sunshinecoffee@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Social & Newsletter */}
          <div>
            <h4 className="font-display text-white text-sm font-semibold mb-4 tracking-wider">SÍGUENOS</h4>
            <div className="flex gap-3 mb-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-dorado flex items-center justify-center transition-colors group"
                >
                  <social.icon className="w-4 h-4 text-white group-hover:text-tierra transition-colors" />
                </a>
              ))}
            </div>


          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 section-padding py-5">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/50">
          <p>© 2026 Amador / Sunshine Coffee. Todos los derechos reservados.</p>
          <p>
            Hecho con <span className="text-dorado">♥</span> en Bogotá, Colombia
          </p>
        </div>
      </div>
    </footer>
  );
}
