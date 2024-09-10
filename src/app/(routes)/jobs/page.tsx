import Freelancer from '@/components/pages/jobs/freelancer';
import Feature from '@/components/pages/jobs/feature';

export default function JobsPage() {
  return (
    <div className="flex justify-center items-center min-h-screen pt-16 px-4">
      <div className="w-full max-w-6xl">
        <Freelancer />
        <Feature />
      </div>
    </div>
  );
}