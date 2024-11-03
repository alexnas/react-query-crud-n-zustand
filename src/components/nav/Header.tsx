import { Icon } from '@iconify/react';
import NavLinkButton from '@/components/nav/NavLinkButton';

const Header: React.FC = () => {
  return (
    <header className="flex items-center justify-between bg-gray-800 p-4">
      <Icon className="mr-2 text-3xl text-cyan-400" icon="ion:logo-react" />

      <div>
        <nav className="flex gap-2 p-0">
          <NavLinkButton to="/" title="Home" />
          <NavLinkButton to="/about" title="About" />
        </nav>
      </div>
    </header>
  );
};

export default Header;
