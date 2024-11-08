import { IProject } from '@/types';
import { BASE_URL, PROJECT_ENDPOINT } from '@/api/apiConstants';

export const fetchProjects = async (): Promise<IProject[]> => {
  const response = await fetch(`${BASE_URL}/${PROJECT_ENDPOINT}`);
  return response.json();
};
