import { IProject } from '@/types';
import { BASE_URL, PROJECT_ENDPOINT } from '@/api/apiConstants';

export const fetchProjects = async (): Promise<IProject[]> => {
  const response = await fetch(`${BASE_URL}/${PROJECT_ENDPOINT}`);
  return response.json();
};

export const fetchProjectByid = async (
  projectId?: number
): Promise<IProject | null> => {
  console.log('projectId', projectId);
  if (!projectId) {
    return null;
  }

  const response = await fetch(`${BASE_URL}/${PROJECT_ENDPOINT}/${projectId}`);
  return response.json();
};
