interface INavbarMenuItem {
  name: string;
  label: string;
  path: string;
}

interface ISideMenuItem {
  name: string;
  label: string;
  path: string;
  icon: string;
}

interface IProject {
  id: number;
  title: string;
  description: string;
  description_markup: IDescriptionMarkup;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

type IDescriptionMarkup = 'PLAIN' | 'MARKDOWN' | 'ASCIIDOC';

type IProjectFormMode = 'NEW' | 'VIEW' | 'EDIT';

export type {
  INavbarMenuItem,
  ISideMenuItem,
  IProject,
  IProjectFormMode,
  IDescriptionMarkup,
};
