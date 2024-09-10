import AboutUs from '@/components/pages/about/about-us';
import Explore from '@/components/pages/about/explore';
import DevMetrics from '@/components/pages/about/metrics';
import Banner from '@/components/pages/about/banner';

export default function AboutPage() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen pt-16 px-4 space-y-12">
      <div className="w-full max-w-6xl">
        <Banner />
        <AboutUs />
      </div>
      <div className="w-full max-w-6xl">
        <Explore />
        <DevMetrics />
      </div>
    </div>
  );
}
