import { Icon } from '@iconify/react';
import ProjectCard from '@/components/projects/ProjectCard';
import { useProjects } from '@/hooks/useProjects';

const HomeView: React.FC = () => {
  const { data: projects, isPending, error } = useProjects();

  if (isPending) {
    return <div>Loading ...</div>;
  } else if (error) {
    return (
      <div>
        Ooops... There was an error: {error.name} / {error.message}
      </div>
    );
  }

  const handleAddClick = () => {
    console.log('handleAddClick');
  };

  return (
    <>
      <div className="relative h-screen my-6 overflow-auto px-2 dark:text-gray-200 sm:px-6 lg:px-8">
        <h1 className="fixed pl-2 text-3xl font-semibold text-gray-700 dark:text-gray-200">
          Projects
        </h1>

        <button
          className="absolute right-4 top-2 lg:right-20"
          onClick={handleAddClick}
          type="button"
        >
          <Icon
            className="text-4xl text-teal-200/70 hover:text-orange-400/70"
            icon="material-symbols:add-box-outline-rounded"
          />
        </button>

        {projects && projects.length == 0 && <div>No projects.</div>}

        {projects && projects.length > 0 && (
          <div className="mt-16 flex flex-wrap justify-center">
            {projects?.map((project) => {
              return <ProjectCard project={project} />;
            })}
          </div>
        )}
      </div>
    </>
  );
};

export default HomeView;
