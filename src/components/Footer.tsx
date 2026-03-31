import Image from "next/image";
import Link from "next/link";

const links = [
  { href: "/about", label: "About Us" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-3 mb-4">
              <Image
                src="/img/logoInnova.jpg"
                width={40}
                height={40}
                alt="Construction Innova logo"
                className="rounded-md"
              />
              <span className="text-white font-bold tracking-wide uppercase text-sm">
                Innova Construction
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Professional home builders and renovation services in Alabama.
              Quality craftsmanship, on-time delivery.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Navigation
            </h3>
            <ul className="space-y-3">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Contact
            </h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>4100 Ross Street, Okawville, IL</li>
              <li>
                <a
                  href="tel:+12512842842"
                  className="hover:text-white transition-colors"
                >
                  (251) 284-2842
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@constructioninnova.com"
                  className="hover:text-white transition-colors"
                >
                  info@constructioninnova.com
                </a>
              </li>
              <li>Mon - Fri, 9:00 - 18:00</li>
            </ul>

            {/* Social */}
            <div className="flex gap-4 mt-6">
              <a
                className="text-gray-400 hover:text-blue-400 transition-colors"
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <svg
                  fill="currentColor"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              </a>
              <a
                className="text-gray-400 hover:text-rose-500 transition-colors"
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/10 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Innova Construction. All Rights
          Reserved.
        </div>
      </div>
    </footer>
  );
};
