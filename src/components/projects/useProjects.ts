import { useQuery } from '@tanstack/react-query';
import { fetchProjects } from '@/api/projectsApi';

export const useProjects = () =>
  useQuery({
    queryKey: ['productsList'],
    queryFn: fetchProjects,
    staleTime: 0.2 * 60 * 1000,
    gcTime: 0.5 * 60 * 1000,
  });
