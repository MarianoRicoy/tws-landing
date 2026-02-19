import Hero from '@/components/Hero';
import Services from '@/components/Services';
import TechStack from '@/components/TechStack';
import InfiniteMarquee from '@/components/InfiniteMarquee';
import CallToAction from '@/components/CallToAction';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <TechStack />
      <CallToAction />
      <InfiniteMarquee speed="25s">
        <span className="text-[clamp(8rem,18vw,20rem)] font-extrabold uppercase text-white tracking-[-0.03em] mx-4">TECH WITH SOUL -</span>
      </InfiniteMarquee>
    </>
  );
}
