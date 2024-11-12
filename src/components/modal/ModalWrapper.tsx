import Modal from '@/components/modal/Modal';

interface IProps {
  show: boolean;
  onCloseHandleClick: () => void;
  children?: React.ReactNode;
}

const ModalWrapper: React.FC<IProps> = ({
  show,
  onCloseHandleClick,
  children,
}) => {
  return (
    <Modal show={show} onCloseHandleClick={onCloseHandleClick}>
      <div
        className="relative bg-white w-[500px] h-fit min-h-48 border-1  border-gray-200 rounded-2xl overflow-hidden mt-12 mx-4 mb-40 "
        onClick={(e) => e.stopPropagation()}
      >
        <div className="z-10">{children}</div>
        <button
          type="button"
          className="absolute z-1000 top-2 right-6 text-4xl leading-none text-rose-600 pointer font-extrabold border-0"
          onClick={onCloseHandleClick}
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    </Modal>
  );
};

export default ModalWrapper;
