import { NavLink } from 'react-router-dom';
import clsx from 'clsx';

type Props = {
  to: string;
  title: string;
};

const NavLinkButton: React.FC<Props> = (props) => {
  return (
    <>
      <NavLink
        to={props.to}
        className={({ isActive }) =>
          clsx(
            'rounded-md px-3 py-2 text-sm hover:bg-gray-700 hover:text-white',
            {
              'font-medium text-orange-400': isActive,
              'text-gray-300': !isActive,
            }
          )
        }
      >
        {props.title}
      </NavLink>
    </>
  );
};

export default NavLinkButton;
