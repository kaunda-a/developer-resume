import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";
import ShineBorder from "@/components/magicui/shine-border";

const DevMetrics = () => {
  const metrics = [
    { label: "Projects", value: 50 },
    { label: "Subscribers", value: 10000 },
    { label: "GitHub Stars", value: 5000 },
    { label: "Contributions", value: 2500 },
  ];

  return (
    <ShineBorder
      className="relative flex h-[300px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl"
      color={["#4F46E5", "#06B6D4", "#10B981"]}
    >
      <VelocityScroll
        text="Web Developer Metrics"
        default_velocity={3}
        className="font-display text-center text-3xl font-bold tracking-[-0.02em] text-black drop-shadow-sm dark:text-white md:text-5xl md:leading-[4rem] mb-8"
      />
      <div className="flex flex-wrap justify-center gap-8">
        {metrics.map((metric, index) => (
          <div key={index} className="text-center">
            <span className="text-4xl font-bold text-gray-900 dark:text-white">
              {metric.value.toLocaleString()}
            </span>
            <p className="text-sm text-gray-600 dark:text-gray-300">{metric.label}</p>
          </div>
        ))}
      </div>
    </ShineBorder>
  );
};

export default DevMetrics;
