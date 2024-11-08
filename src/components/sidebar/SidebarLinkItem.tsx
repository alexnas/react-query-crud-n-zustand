import { NavLink } from 'react-router-dom';
import { Icon } from '@iconify/react';
import clsx from 'clsx';
import { ISideMenuItem } from '@/types';

interface IProps {
  item: ISideMenuItem;
}

const SidebarLInkItem: React.FC<IProps> = ({ item }) => {
  return (
    <NavLink
      to={item.path}
      className={({ isActive }) =>
        clsx(
          'ml-1 px-4 py-1 flex items-center whitespace-nowrap border-l-4 border-r-4 border-r-gray-600',
          {
            'active-menu-item': isActive,
            'inactive-menu-item': !isActive,
          }
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
