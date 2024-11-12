import { Icon } from '@iconify/react';
import ProjectsListCard from '@/components/projects/ProjectsListCard';
import { useProjects } from '@/components/projects/useProjects';
import { useProjectStore } from '@/store/projectStore';
import useModal from '@/components/modal/useModal';
import ModalWrapper from '@/components/modal/ModalWrapper';
import ProjectModalForm from '@/components/projects/ProjectModalForm';

const ProjectsListView: React.FC = () => {
  const [isShowModal, toggleModal] = useModal(false);
  const formMode = useProjectStore((state) => state.formMode);
  const { data: projects, isPending, error } = useProjects();
  const setFormMode = useProjectStore((state) => state.setFormMode);

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
    setFormMode('NEW');
    toggleModal();
  };

  return (
    <>
      <div className="h-screen pb-32">
        <div className="relative min-h-full h-full my-6 pb-6 overflow-auto px-2 dark:text-gray-200 sm:px-6 lg:px-8">
          <h1 className=" pl-2 text-3xl font-semibold text-gray-700 dark:text-gray-200">
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
            <div className="mt-8 flex flex-wrap justify-center">
              {projects?.map((project) => {
                return <ProjectsListCard project={project} key={project.id} />;
              })}
            </div>
          )}
        </div>
        <ModalWrapper show={isShowModal} onCloseHandleClick={toggleModal}>
          <ProjectModalForm
            formMode={formMode}
            projectId={-1}
            handleToEdit={() => setFormMode('EDIT')}
            toggleModal={toggleModal}
          />
        </ModalWrapper>
      </div>
    </>
  );
};

export default ProjectsListView;
