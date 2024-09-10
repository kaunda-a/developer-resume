import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";

const Banner = () => {
  return (
    <div className="relative w-full h-14 overflow-hidden mt-16 pt-4">
      <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-20"></div>
      <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-black to-transparent"></div>
      <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-black to-transparent"></div>
      <VelocityScroll
        text="50+ Projects | 10k+ Subscribers | 5k+ GitHub Stars | 2.5k+ Contributions"
        default_velocity={3}
        className="font-display text-center text-xl font-bold tracking-wide text-white drop-shadow-sm whitespace-nowrap py-4"
      />
    </div>
  );
};

export default Banner;
