import { Icon } from '@iconify/react';
import NavLinkButton from '@/components/nav/NavLinkButton';

const Footer: React.FC = () => {
  return (
    <div className="bg-gray-800">
      <div className="mx-auto px-2 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center bg-gray-800 p-4">
          <div className="mr-2 flex flex-shrink-0 items-center rounded-md px-3 py-2 text-sm text-yellow-400 hover:text-amber-500">
            <Icon className="mr-2" icon="ant-design:copyright-outlined" />
            2024
          </div>

          <div>
            <nav className="flex gap-2 p-0">
              <NavLinkButton to="/" title="Home" />
              <NavLinkButton to="/about" title="About" />
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
