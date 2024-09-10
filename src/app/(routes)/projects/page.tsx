import ProjectList from '@/components/pages/projects/project-list';

export default function ProjectsPage() {
  return (
    <div className="flex justify-center items-center min-h-screen pt-16 px-4">
      <div className="w-full max-w-6xl">
        <ProjectList />
      </div>
    </div>
  );
}
