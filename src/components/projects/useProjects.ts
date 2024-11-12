import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import {
  addNewProject,
  deleteProjectById,
  fetchProjectByid,
  fetchProjects,
  updateProjectById,
} from '@/api/projectsApi';

export const useProjects = () => {
  return useQuery({
    queryKey: ['productsList'],
    queryFn: fetchProjects,
    staleTime: 0.2 * 60 * 1000,
    gcTime: 0.5 * 60 * 1000,
  });
};

export const useProjectById = (projectId: number) => {
  return useQuery({
    queryKey: ['projectById'],
    queryFn: () => fetchProjectByid(projectId),
    staleTime: Infinity,
    gcTime: 0,
  });
};

export const useAddNewProject = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: addNewProject,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['productsList'],
      });
    },
  });
};

export const useUpdateProject = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateProjectById,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['productsList'],
      });
    },
  });
};

export const useDeleteProjectById = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteProjectById,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['productsList'] });
    },
  });
};
