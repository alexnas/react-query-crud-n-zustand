import { useProjects } from '@/hooks/useProjects';
import { useProjectStore } from '@/store/projectStore';

const ProjectsListView = () => {
  const formMode = useProjectStore((state) => state.formMode);
  const handleFormMode = useProjectStore((state) => state.setFormMode);
  const { data: projects, isPending, error } = useProjects();

  if (isPending) {
    return <div>Loading ...</div>;
  } else if (error) {
    return (
      <div>
        Oooops... There was an error: {error.name} / {error.message}
      </div>
    );
  }

  return (
    <>
      <div className="h-screen bg-gray-200 p-3">
        <h1 className="text-3xl font-bold text-blue-800">Projects</h1>

        {projects && projects.length === 0 && <div>No project</div>}

        <div>
          {projects?.map((project) => {
            return (
              <div>
                {project.id}: {project.title}
              </div>
            );
          })}
        </div>

        <div className="my-4">
          Form Mode:
          <span className="font-bold"> {formMode}</span>
        </div>

        <div className="flex gap-4">
          <button
            className=" bg-teal-600 p-3 text-white rounded-lg"
            onClick={() => handleFormMode('EDIT')}
          >
            Set Edit
          </button>
          <button
            className=" bg-teal-600 p-3 text-white rounded-lg"
            onClick={() => handleFormMode('VIEW')}
          >
            Set VIEW
          </button>
        </div>
      </div>
    </>
  );
};

export default ProjectsListView;
