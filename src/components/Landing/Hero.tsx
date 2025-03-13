import { HeroWithMockup } from "../hero-with-mockup"
export default function Hero() {
  return (
    <div>
         <HeroWithMockup
      title="Build AI-powered apps in minutes, not months"
      description="Create sophisticated AI applications with our intuitive platform. No ML expertise required."
      primaryCta={{
        text: "Sign In",
        href: "/signin",
      }}
      secondaryCta={{
        text: "Get Started",
        href: "https://github.com/your-ai-platform",
      }}
      mockupImage={{
        alt: "AI Platform Dashboard",
        width: 1248,
        height: 765,
        src: "https://www.launchuicomponents.com/app-light.png"
      }}
    />
    </div>
    
  );
}
