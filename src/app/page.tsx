import Prophecies from "@/components/custom/prophecies";
import SocialButtons from "@/components/custom/social-btns";
import FloatingImages from "@/components/custom/floating-images";
import Footer from "@/components/custom/footer";
import Hero from "@/components/custom/hero";
import Manifesto from "@/components/custom/manifesto";

export default function Home() {
  return (
    <section className="divide-y-2 divide-primary w-full lg:w-2/3 mx-auto pt-16 ">
      <Hero />
      <SocialButtons />
      <Prophecies />
      <Manifesto />
      <Footer />
      <FloatingImages />
    </section>
  );
}
