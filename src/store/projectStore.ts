import { create } from 'zustand';
import { IProjectFormMode } from '@/types';

type IProjectStoreState = {
  formMode: IProjectFormMode;
};

type IProjectStoreActions = {
  setFormMode: (newMode: IProjectFormMode) => void;
};

type ProjectStore = IProjectStoreState & IProjectStoreActions;

const initialStoreState: IProjectStoreState = {
  formMode: 'NEW',
};

export const useProjectStore = create<ProjectStore>()((set) => ({
  formMode: initialStoreState.formMode,
  setFormMode_: () => {
    set({ formMode: 'VIEW' });
  },
  setFormMode: (newMode: IProjectFormMode) =>
    set(() => ({ formMode: newMode })),
  resetFormMode: () => set(() => ({ formMode: initialStoreState.formMode })),
}));
