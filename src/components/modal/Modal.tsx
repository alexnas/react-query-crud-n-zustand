import ReactDOM from 'react-dom';

interface IPropsModal {
  show: boolean;
  onCloseHandleClick: () => void;
  children?: React.ReactNode;
}

const Modal: React.FC<IPropsModal> = ({
  show,
  onCloseHandleClick,
  children,
}) => {
  if (!show) {
    return null;
  }

  return ReactDOM.createPortal(
    <div
      className="flex absolute overflow-auto justify-center items-top top-0 right-0 bottom-0 left-0 bg-gray-500/80 w-full h-full min-h-screen"
      onClick={onCloseHandleClick}
    >
      {children}
    </div>,
    document.body
  );
};

export default Modal;
