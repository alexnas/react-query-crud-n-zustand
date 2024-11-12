import { IProject } from '@/types';
import { BASE_URL, PROJECT_ENDPOINT } from '@/api/apiConstants';

export const fetchProjects = async (): Promise<IProject[] | undefined> => {
  try {
    const response = await fetch(`${BASE_URL}/${PROJECT_ENDPOINT}`);
    return response.json();
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
    } else {
      throw new Error('Something went wrong!');
      console.error('Something went wrong!');
    }
    return;
  }
};

export const fetchProjectByid = async (
  projectId: number
): Promise<IProject | undefined> => {
  try {
    const response = await fetch(
      `${BASE_URL}/${PROJECT_ENDPOINT}/${projectId}`
    );
    return response.json();
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
    } else {
      throw new Error('Something went wrong!');
      console.error('Something went wrong!');
    }
    return;
  }
};

export const addNewProject = async (
  newProject: IProject
): Promise<IProject | undefined> => {
  try {
    const response = await fetch(`${BASE_URL}/${PROJECT_ENDPOINT}`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ...newProject }),
    });
    if (!response.ok) {
      throw new Error(
        `Network response failed with response status: ${response.status}`
      );
    }
    return await response.json();
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
    } else {
      throw new Error('Something went wrong!');
      console.error('Something went wrong!');
    }
    return;
  }
};

export const updateProjectById = async (
  project: IProject
): Promise<IProject | undefined> => {
  try {
    const response = await fetch(
      `${BASE_URL}/${PROJECT_ENDPOINT}/${project.id}`,
      {
        method: 'PUT',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...project }),
      }
    );

    if (!response.ok) {
      throw new Error(
        `Network response failed with response status: ${response.status}`
      );
    }

    return await response.json();
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
      throw new Error('Something went wrong!');
      console.error('Something went wrong!');
    }
  }
};

export const deleteProjectById = async (
  projectId: number
): Promise<IProject | undefined> => {
  try {
    const response = await fetch(
      `${BASE_URL}/${PROJECT_ENDPOINT}/${projectId}`,
      {
        method: 'DELETE',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      }
    );

    if (!response.ok) {
      throw new Error(
        `Network response failed with response status: ${response.status}`
      );
    }

    return await response.json();
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
      throw new Error('Something went wrong!');
      console.error('Something went wrong!');
    }
  }
};
