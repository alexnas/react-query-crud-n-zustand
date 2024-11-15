import { Icon } from '@iconify/react';
import { IProject } from '@/types';
import useModal from '@/components/modal/useModal';
import ModalWrapper from '@/components/modal/ModalWrapper';
import { useProjectStore } from '@/store/projectStore';
import ProjectModalForm from '@/components/projects/ProjectModalForm';
import { useDeleteProjectById } from '@/components/projects/useProjects';

interface IProps {
  project: IProject;
}

const ProjectsListCard: React.FC<IProps> = ({ project }) => {
  const [isShowModal, toggleModal] = useModal(false);
  const formMode = useProjectStore((state) => state.formMode);
  const setFormMode = useProjectStore((state) => state.setFormMode);
  const { mutate: deleteProject } = useDeleteProjectById();

  const handleViewClick = () => {
    setFormMode('VIEW');
    toggleModal();
  };

  const handleEditClick = () => {
    setFormMode('EDIT');
    toggleModal();
  };

  const handleDeleteClick = () => {
    const result = confirm(
      `Are you sure to delete project "${project.title}"?`
    );
    if (result) {
      deleteProject(project.id);
    }
  };
  return (
    <div className="relative mb-4 lg:mb-8 mx-auto w-full max-w-[450px] rounded-lg border border-gray-200 bg-gray-50 p-4 text-gray-700 shadow drop-shadow-xl sm:p-6 md:p-8 dark:bg-gray-700 dark:text-gray-200">
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
          className="absolute top-2 right-2"
          onClick={handleDeleteClick}
          type="button"
        >
          <Icon
            className="text-2xl text-orange-300/90 hover:text-red-500/90"
            icon="hugeicons:delete-04"
          />
        </button>

        <button
          className="absolute bottom-2 right-12"
          onClick={handleViewClick}
          type="button"
        >
          <Icon
            className="text-xl text-teal-200/70 hover:text-orange-400/70"
            icon="ph:read-cv-logo-bold"
          />
        </button>
        <button
          className="absolute bottom-2 right-2"
          onClick={handleEditClick}
          type="button"
        >
          <Icon
            className="text-xl text-teal-200/70 hover:text-orange-400/70"
            icon="fa:edit"
          />
        </button>
      </div>

      <ModalWrapper show={isShowModal} onCloseHandleClick={toggleModal}>
        <ProjectModalForm
          formMode={formMode}
          projectId={project.id}
          handleToEdit={() => setFormMode('EDIT')}
          toggleModal={toggleModal}
        />
      </ModalWrapper>
    </div>
  );
};

export default ProjectsListCard;
