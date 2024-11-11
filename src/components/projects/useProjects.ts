import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import {
  addNewProject,
  fetchProjectByid,
  fetchProjects,
  updateProjectById,
} from '@/api/projectsApi';

export const useProjects = () =>
  useQuery({
    queryKey: ['productsList'],
    queryFn: fetchProjects,
    staleTime: 0.2 * 60 * 1000,
    gcTime: 0.5 * 60 * 1000,
  });

export const useProjectById = (projectId?: number) =>
  useQuery({
    queryKey: ['projectById', projectId],
    queryFn: () => fetchProjectByid(projectId),
    staleTime: 0.2 * 60 * 1000,
    gcTime: 0.5 * 60 * 1000,
  });

export const useAddNewProject = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: addNewProject,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['productsList'] });
    },
  });
};

export const useUpdateProject = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateProjectById,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['productsList'] });
    },
  });
};
