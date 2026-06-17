import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/lumetra/Navbar";
import { Hero } from "@/components/lumetra/Hero";
import { About } from "@/components/lumetra/About";
import { HowItWorks } from "@/components/lumetra/HowItWorks";
import { Features } from "@/components/lumetra/Features";
import { Pricing } from "@/components/lumetra/Pricing";
import { Testimonials } from "@/components/lumetra/Testimonials";
import { Faq } from "@/components/lumetra/Faq";
import { Contact } from "@/components/lumetra/Contact";
import { Footer } from "@/components/lumetra/Footer";
import { Marquee } from "@/components/lumetra/Marquee";
import { CookiesBanner } from "@/components/lumetra/CookiesBanner";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Lumetra — The Computer Vision Intelligence Platform" },
      {
        name: "description",
        content:
          "Lumetra transforms images, video streams, and camera feeds into real-time intelligence using advanced AI-powered computer vision.",
      },
      { property: "og:title", content: "Lumetra — The Computer Vision Intelligence Platform" },
      {
        property: "og:description",
        content:
          "Transform images, video streams, and camera feeds into real-time intelligence with Lumetra.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div id="top" className="fixed inset-0 bg-background p-2 sm:p-4 lg:p-6 transition-all duration-300">
      <div
        id="scroll-container"
        className="bg-surface text-foreground h-full w-full mx-auto rounded-[24px] sm:rounded-[32px] lg:rounded-[40px] overflow-y-auto overflow-x-hidden relative shadow-[0_8px_40px_rgb(0_0_0/0.3)] scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
      >
        <Navbar />
        <main>
          <Hero />
          <Marquee />
          <About />
          <HowItWorks />
          <Features />
          <Pricing />
          <Testimonials />
          <Faq />
          <Contact />
        </main>
        <Footer />
      </div>
      <CookiesBanner />
    </div>
  );
}
