import { useState } from 'react';

const useModal = (initial: boolean) => {
  const [isShow, setIsShowing] = useState(initial);

  const toggleModal = () => {
    setIsShowing(!isShow);
  };

  return [isShow, toggleModal] as const;
};

export default useModal;
