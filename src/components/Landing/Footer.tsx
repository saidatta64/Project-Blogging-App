import { Footer } from "@/components/ui/footer";
import Image from "next/image";

export default function FooterComponent() {
  return (
    <Footer
      logo={<span>🌟</span>}
      brandName="MyBrand"
      socialLinks={[
        { icon: <Image src="/X.png" alt="Twitter" width={24} height={24} />, href: "https://twitter.com", label: "Twitter" },
        { icon: <Image src="/discord.png" alt="Twitter" width={24} height={24} />, href: "https://discord.com", label: "Facebook" },
      ]}
      mainLinks={[
        { href: "/about", label: "About Us" },
        { href: "/services", label: "Services" },
      ]}
      legalLinks={[
        { href: "/privacy", label: "Privacy Policy" },
        { href: "/terms", label: "Terms of Service" },
      ]}
      copyright={{ text: "© 2025 MyBrand. All rights reserved." }}
    />
  );
}