import { Icon } from '@iconify/react';
import { IProject } from '@/types';

interface IProps {
  project: IProject;
}

const ProjectCard: React.FC<IProps> = ({ project }) => {
  const handleViewClick = (id: number) => {
    console.log('handleViewClick', id);
  };
  const handleEditClick = (id: number) => {
    console.log('handleEditClick', id);
  };
  return (
    <div className="mb-4 lg:mb-8 mx-auto w-full max-w-[450px] rounded-lg border border-gray-200 bg-gray-50 p-4 text-gray-700 shadow drop-shadow-xl sm:p-6 md:p-8 dark:bg-gray-700 dark:text-gray-200">
      <h3 className="text-center text-lg font-semibold text-gray-900 dark:text-gray-200">
        {project.title}
      </h3>

      <div className="my-4 flex justify-start">
        <div className="font-medium text-teal-600 dark:text-teal-400">
          Description:
        </div>
        <div className="ml-4">{project.description}</div>
      </div>

      <div className="space-y-0.5 text-left font-medium">
        <div className="flex">
          <div className="font-medium text-teal-600 dark:text-teal-400">
            Markup:
          </div>
          <p className="ml-4">{project.description_markup}</p>
        </div>
      </div>

      <div>
        <button
          className="absolute bottom-2 right-12"
          onClick={() => handleViewClick(project.id)}
          type="button"
        >
          <Icon
            className="text-xl text-teal-200/70 hover:text-orange-400/70"
            icon="ph:read-cv-logo-bold"
          />
        </button>
        <button
          className="absolute bottom-2 right-2"
          onClick={() => handleEditClick(project.id)}
          type="button"
        >
          <Icon
            className="text-xl text-teal-200/70 hover:text-orange-400/70"
            icon="fa:edit"
          />
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;