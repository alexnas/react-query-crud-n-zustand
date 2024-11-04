import { useProjectStore } from '@/store/projectStore';

const ProjectsListView = () => {
  const formMode = useProjectStore((state) => state.formMode);
  const handleFormMode = useProjectStore((state) => state.setFormMode);

  return (
    <>
      <div className="h-screen bg-gray-200 p-3">
        <h1 className="text-3xl font-bold text-blue-800">Projects</h1>

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
