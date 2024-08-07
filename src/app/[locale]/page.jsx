import Hero from "@comp/app/hero/Hero";
import Media from "@comp/app/media/Media";
import Exchanges from "@comp/app/exchanges/Exchanges";
import Defi from "@comp/app/defi/Defi";
import Advantages from "@comp/app/advantages/Advantages";
import Roadmap from "@comp/app/roadmap/Roadmap";
import Features from "@comp/app/features/Features";
import Team from "@comp/app/team/Team";
import Contact from "@comp/app/contact/Contact";
import dynamic from 'next/dynamic';

const MapChart = dynamic(() => import('@comp/app/mapchart/MapChart'), {
  ssr: false,
})

export default function Page() {
  return (
    <>
      <Hero />
      <Exchanges />
      <MapChart />
      <Media />
      <Defi />
      <Advantages />
      <Roadmap />
      <Features />
      <Team />
      <Contact />
    </>
  );
}
