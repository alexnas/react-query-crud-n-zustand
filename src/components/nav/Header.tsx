import NavLinkButton from '@/components/nav/NavLinkButton';
import ReactIcon from '@/assets/react.svg';

const Header: React.FC = () => {
  return (
    <header className="flex items-center justify-between bg-gray-800 p-4">
      <div className="flex gap-4">
        <img src={ReactIcon} alt="Logo" className="w-8 h-auto" />
        <div className="font-bold text-stone-300 text-2xl">Zustand CRUD</div>
      </div>

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
