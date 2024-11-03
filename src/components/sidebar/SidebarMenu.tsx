import type { ISideMenuItem } from '@/types';
import SidebarLinkItem from '@/components/sidebar/SidebarLinkItem';

const SidebarMenu: React.FC = () => {
  const projectsItem: ISideMenuItem = {
    name: 'Projects',
    label: 'Projects',
    path: '/projects',
    icon: 'fluent-mdl2:boards'
  };

  const generalMenu: ISideMenuItem[] = [
    {
      name: 'Settings',
      label: 'Settings',
      path: '/settings',
      icon: 'material-symbols-light:settings-outline'
    },
    {
      name: 'Home',
      label: 'Home',
      path: '/',
      icon: 'tabler:home'
    },
    {
      name: 'About',
      label: 'About',
      path: '/about',
      icon: 'mdi:about-circle-outline'
    }
  ];

  return (
    <div className="overflow-hidden">
      <div className="-mr-[50px] h-full overflow-y-auto pr-[50px]">
        <SidebarLinkItem item={projectsItem} />

        <div className="mx-6 my-6 border-b-2 border-gray-400"></div>

        <div className="mx-4 my-4 flex items-center justify-start">
          <div className="flex items-center">
            <span className="text-md mx-2 font-medium text-gray-300">General</span>
          </div>
        </div>

        <nav className="mt-2">
          {generalMenu.map((item) => (
            <SidebarLinkItem key={item.name} item={item} />
          ))}
        </nav>
      </div>
    </div>
  );
};

export default SidebarMenu;
