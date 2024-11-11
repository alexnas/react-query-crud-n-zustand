import { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Icon } from '@iconify/react';
import clsx from 'clsx';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import type { IProject, IProjectFormMode } from '@/types';
import capitalize from '@/tools/capitalize';
import { formatDateTime } from '@/tools/formatDate';
import {
  useAddNewProject,
  useProjectById,
  useUpdateProject,
} from '@/components/projects/useProjects';

const formModes = {
  ['NEW']: {
    formTitle: 'New Project',
    submitTitle: 'Submit',
  },
  ['VIEW']: {
    formTitle: 'View Project',
    submitTitle: 'Go to Edit',
  },
  ['EDIT']: {
    formTitle: 'Edit Project',
    submitTitle: 'Submit',
  },
};

const descriptionMarkupOptions = ['PLAIN', 'MARKDOWN', 'ASCIIDOC'] as const;

const FormSchema = z.object({
  id: z.number().min(0, 'Id must be not negative number').optional(),
  title: z
    .string()
    .min(3, 'Title must not be lesser than 3 characters')
    .max(25, 'Title must not be greater than 25 characters')
    .regex(
      /^[a-zA-Z0-9_ .,!?]+$/,
      'The title must contain only letters, numbers and underscore (_)'
    ),
  description: z
    .string()
    .min(3, 'Description must not be lesser than 3 characters')
    .max(100, 'Description must not be greater than 100 characters')
    .regex(
      /^[a-zA-Z0-9_ .,!?]+$/,
      'The description must contain only letters, numbers and underscore (_)'
    ),
  description_markup: z.enum(['PLAIN', 'MARKDOWN', 'ASCIIDOC'] as const),
  isActive: z.boolean(),
});

type IFormInput = z.infer<typeof FormSchema>;

interface IProps {
  formMode: IProjectFormMode;
  projectId?: number;
  handleToEdit: () => void;
  toggleModal: () => void;
}

const ProjectModalForm: React.FC<IProps> = ({
  formMode,
  projectId,
  handleToEdit,
  toggleModal,
}) => {
  const {
    data: currentProject,
    isPending,
    isError,
    error,
  } = useProjectById(projectId);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({
    mode: 'onBlur',
    resolver: zodResolver(FormSchema),
  });

  const [isReadOnly, setIsReadOnly] = useState(true);

  useEffect(() => {
    setIsReadOnly(formMode === 'VIEW' ? true : false);
  }, [formMode]);

  const { mutate: addProject } = useAddNewProject();
  const { mutate: updateProject } = useUpdateProject();

  if (isPending) {
    return <div>Loading ...</div>;
  } else if (isError) {
    return (
      <div>
        Ooops... There was an error: {error.name} / {error.message}
      </div>
    );
  }

  const onSubmit: SubmitHandler<IFormInput> = (formData) => {
    if (formMode === 'NEW') {
      const newProject: IProject = {
        ...formData,
        id: -1,
        createdAt: new Date().toString(),
        updatedAt: new Date().toString(),
      };
      addProject(newProject);
    } else if (currentProject && formMode === 'EDIT') {
      const projectToEdit = {
        ...formData,
        id: +currentProject.id,
        createdAt: currentProject.createdAt.toString(),
        updatedAt: new Date().toString(),
      };
      updateProject(projectToEdit);
    }
    toggleModal();
  };

  return (
    <div className="container px-4 mx-auto relative">
      <div className="w-full max-w-md mx-auto"></div>
      <div className="pt-6 mx-3 px-2">
        <h2 className="text-3xl text-gray-800 text-center">
          {capitalize(formMode)} Project
        </h2>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        {currentProject?.id && (
          <div className="flex justify-end mr-5 text-gray-500 font-semibold italic">
            id: {currentProject.id}
          </div>
        )}
        <div className="m-3">
          <div className="relative mb-8">
            <input
              {...register('title', {
                disabled: isReadOnly,
              })}
              defaultValue={currentProject?.title}
              type="text"
              name="title"
              id="title"
              placeholder="Title"
              className="peer form-input"
            />
            <label
              htmlFor="password"
              className="form-label peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-gray-600"
            >
              Title
            </label>
            {errors.title && (
              <p className="form-error">{errors.title.message}</p>
            )}
          </div>

          <div className="relative mb-8">
            <input
              {...register('description', {
                disabled: isReadOnly,
              })}
              defaultValue={currentProject?.description}
              type="text"
              name="description"
              id="description"
              placeholder="description"
              className="peer form-input"
            />
            <label
              htmlFor="description"
              className="form-label peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-gray-600"
            >
              Description
            </label>
            {errors.description && (
              <p className="form-error">{errors.description.message}</p>
            )}
          </div>

          <div className="relative mb-8">
            <select
              {...register('description_markup', {
                disabled: isReadOnly,
              })}
              defaultValue={currentProject?.description_markup}
              name="description_markup"
              id="description_markup"
              className="peer form-input bg-gray-50"
            >
              {descriptionMarkupOptions.map((item, idx) => (
                <option value={item} key={idx}>
                  {item}
                </option>
              ))}
            </select>
            <label
              htmlFor="description_markup"
              className="form-label peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-gray-600"
            >
              Description Markup
            </label>
          </div>

          {formMode !== 'NEW' && (
            <div className="relative mb-8">
              <input
                value={
                  currentProject
                    ? formatDateTime(currentProject?.createdAt)
                    : undefined
                }
                name="createdAt"
                id="createdAt"
                className="peer form-input"
                placeholder="Date of creation"
                disabled
              />
              <label
                htmlFor="createdAt"
                className="form-label peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-gray-600"
              >
                Created
              </label>
            </div>
          )}

          {formMode !== 'NEW' && (
            <div className="relative mb-8">
              <input
                value={
                  currentProject
                    ? formatDateTime(currentProject?.updatedAt)
                    : undefined
                }
                name="updatedAt"
                id="updatedAt"
                className="peer form-input"
                placeholder="Date of update"
                disabled
              />
              <label
                htmlFor="updatedAt"
                className="form-label peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-gray-600"
              >
                Updated
              </label>
            </div>
          )}

          <div className="relative mb-8">
            <div className="peer form-input flex items-center">
              <label
                className="relative flex cursor-pointer items-center rounded-full p-2"
                htmlFor="ripple-on"
                data-ripple-dark="true"
              >
                <input
                  {...register('isActive', {
                    disabled: isReadOnly,
                  })}
                  defaultChecked={currentProject?.isActive}
                  id="isActive"
                  type="checkbox"
                  className={clsx('peer custom-checkbox', {
                    'checked:border-gray-300 checked:bg-gray-300 hover:before:opacity-0':
                      isReadOnly,
                  })}
                />
                <span className="pointer-events-none absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100">
                  <Icon className="h-5 w-5" icon="mdi:tick" inline={true} />
                </span>
              </label>
              <label
                className="cursor-pointer select-none font-light"
                htmlFor="ripple-on"
              >
                Check if the item need to be active
              </label>
            </div>

            <label
              htmlFor="description_markup"
              className="form-label peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-gray-600"
            >
              isActive
            </label>

            {errors.isActive && (
              <p className="form-error">{errors.isActive?.message}</p>
            )}
          </div>

          <div className="w-full flex justify-between">
            <div className="flex gap-3">
              {formMode !== 'VIEW' && (
                <button type="submit" className="form-btn btn-teal">
                  {formModes[formMode].submitTitle}
                </button>
              )}
              {formMode === 'VIEW' && (
                <button
                  type="button"
                  className="form-btn btn-indigo"
                  onClick={handleToEdit}
                >
                  {formModes[formMode].submitTitle}
                </button>
              )}
            </div>

            <button
              type="button"
              className="form-btn btn-rose"
              onClick={toggleModal}
            >
              Cancel
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ProjectModalForm;
