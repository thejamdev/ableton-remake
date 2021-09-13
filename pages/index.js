import Head from "next/head";
import Navbar from "../components/Navbar";
import StickyNav from "../components/StickyNav";
import Hero from "../components/Hero";
import DummyVideo from "../components/DummyVideo";
import Footer from "../components/Footer";
import VercelFooter from "../components/VercelFooter";
import TextContent1 from "../components/text-content/text-content-1";
import TextContent2 from "../components/text-content/text-content-2";
import TextContent3 from "../components/text-content/text-content-3";
import TextContent4 from "../components/text-content/text-content-4";
import TextContent5 from "../components/text-content/text-content-5";
import TextContent6 from "../components/text-content/text-content-6";
import YellowArt from "../components/art-section/yellow";
import BlueArt from "../components/art-section/blue";

export default function Home() {
  return (
    <div className="bg-backgroundGray">
      <div className="mx-auto bg-white max-w-7xl">
        <Head>
          <title>Ableton Remake</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Navbar />
        <StickyNav />
        <main>
          <Hero />
          <TextContent1 />
          <YellowArt />
          <TextContent2 />
          <DummyVideo />
          <TextContent3 />
          <TextContent4 />
          <TextContent5 />
          <TextContent6 />
          <BlueArt />
        </main>
        <Footer />
      </div>
      {/* <VercelFooter /> */}
    </div>
  );
}
