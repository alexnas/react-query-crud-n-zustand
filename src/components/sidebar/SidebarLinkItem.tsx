import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import { Icon } from '@iconify/react/dist/iconify.js';
import { ISideMenuItem } from '@/types';
import { activeMenuItem, inactiveMenuItem } from '@/assets/styles/twClasses';

interface IProps {
  item: ISideMenuItem;
}

const SidebarLInkItem: React.FC<IProps> = ({ item }) => {
  return (
    <NavLink
      to={item.path}
      className={({ isActive }) =>
        clsx(
          'ml-1 flex items-center whitespace-nowrap border-l-4 px-4 py-1',
          isActive ? activeMenuItem : inactiveMenuItem
        )
      }
    >
      <Icon
        icon={item.icon ? item.icon : 'tdesign:dart-board'}
        inline={true}
        className="w-6 min-w-[theme('spacing[5]')] text-3xl hover:text-orange-400"
      />

      <span className="mx-4">{item.label}</span>
    </NavLink>
  );
};

export default SidebarLInkItem;
