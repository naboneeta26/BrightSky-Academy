import { quickLinks, support } from "@/data/footerContent";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* col 1 */}
          <div className="col-span-1 md:col-span-1">
            <span className="text-2xl font-bold bg-linear-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              BrightSky Academy
            </span>
            <p className="mt-4 text-slate-400">
              Nurturing young minds for a brighter tomorrow. Join us in our
              journey of excellence and discovery.
            </p>
          </div>

          {/* col 2 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-slate-400">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-blue-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* col 3 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-slate-400">
              {support.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-blue-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* col 4 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2 text-slate-400">
              <li>113 Eduction Lane, Learning City</li>
              <li>Phone: (555) 123-2345</li>
              <li>Email: info@brightsky.edu</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-800 text-center text-slate-500 text-sm">
          &copy; {new Date().getFullYear()} BrightSky Academy. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
}
