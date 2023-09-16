import { useState, createContext } from "react";

const ModalContext = createContext({
  isModalHidden: true,
  toggleSidebar: () => {},
});

export const ModalContextProvider = (props) => {
  const [isModalHidden, setIsModalHidden] = useState(true);

  const toggleSidebar = () => {
    setIsModalHidden((prev) => !prev);
  };

  const context = {
    isModalHidden,
    toggleSidebar,
  };

  return (
    <ModalContext.Provider value={context}>
      {props.children}
    </ModalContext.Provider>
  );
};

export default ModalContext;
