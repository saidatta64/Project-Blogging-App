import { Button } from "@/components/ui/footerbutton";
import Link from "next/link";

interface FooterProps {
  logo: React.ReactNode;
  brandName: string;
  socialLinks: Array<{
    icon: React.ReactNode;
    href: string;
    label: string;
  }>;
  mainLinks: Array<{
    href: string;
    label: string;
  }>;
  legalLinks: Array<{
    href: string;
    label: string;
  }>;
  copyright: {
    text: string;
    license?: string;
  };
}

export function Footer({
  logo,
  brandName,
  socialLinks,
  mainLinks,
  legalLinks,
  copyright,
}: FooterProps) {
  return (
    <footer className="pb-6 pt-16 lg:pb-8 lg:pt-24 bg-black text-white transition-all duration-300">
      <div className="px-4 lg:px-8">
        <div className="md:flex md:items-center md:justify-between animate-fade-in">
          <Link href="/" className="flex items-center gap-x-2" aria-label={brandName}>
            {logo}
            <span className="font-bold text-xl">{brandName}</span>
          </Link>
        </div>
        <div className="border-t border-gray-700 mt-6 pt-6 md:mt-4 md:pt-8 lg:grid lg:grid-cols-10 animate-slide-up">
          <div className="lg:col-span-10 flex flex-wrap justify-between">
            <nav className="flex flex-wrap space-x-4">
              {mainLinks.map((link, i) => (
                <Link key={i} href={link.href} className="text-sm text-blue-400 underline-offset-4 hover:underline hover:text-blue-300 transition-colors duration-200">
                  {link.label}
                </Link>
              ))}
              {legalLinks.map((link, i) => (
                <Link key={i} href={link.href} className="text-sm text-gray-400 underline-offset-4 hover:underline hover:text-gray-300 transition-colors duration-200">
                  {link.label}
                </Link>
              ))}
            </nav>
            <ul className="flex list-none space-x-3">
              {socialLinks.map((link, i) => (
                <li key={i} className="hover:scale-110 transition-transform duration-200">
                  <Button
                    variant="secondary"
                    size="icon"
                    className="h-10 w-10 rounded-full bg-gray-800 text-white"
                    asChild
                  >
                    <a href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.label}>
                      {link.icon}
                    </a>
                  </Button>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-6 text-sm leading-6 text-gray-400 whitespace-nowrap lg:mt-0 lg:col-span-10 text-center">
            <div>{copyright.text}</div>
            {copyright.license && <div>{copyright.license}</div>}
          </div>
        </div>
      </div>
    </footer>
  );
}