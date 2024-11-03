import SidebarMenu from '@/components/sidebar/SidebarMenu';

const AppSidebar: React.FC = () => {
  return (
    <div className="flex w-56 min-w-[theme('spacing[56]')] flex-col bg-gray-600">
      <div className="mx-4 my-4 flex items-center justify-between">
        <div className="flex items-center">
          <span className="mx-2 text-2xl font-semibold text-gray-100">
            Workspace
          </span>
        </div>
      </div>
      <SidebarMenu />
    </div>
  );
};

export default AppSidebar;
