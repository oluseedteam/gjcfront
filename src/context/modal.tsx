import React, {
  createContext,
  PropsWithChildren,
  useContext,
  useMemo,
  useState,
} from "react";

type toggleProps = {
  areaOpen: boolean;
  itemOpen: boolean;
  userOpen: boolean;
  cancelOpen: boolean;
  doneOpen: boolean;
  successText: string;
  editItem: boolean;
  editUser: boolean;
  editArea: boolean;
};

type modalContextProps = {
  modalToggle: toggleProps;
  setModalToggle: React.Dispatch<React.SetStateAction<toggleProps>>;
  initialState: toggleProps;
};

const initialState = {
  areaOpen: false,
  itemOpen: false,
  userOpen: false,
  cancelOpen: false,
  doneOpen: false,
  successText: "",
  editItem: false,
  editUser: false,
  editArea: false,
};
const ModalContext = createContext<modalContextProps>({
  modalToggle: initialState,
  setModalToggle: () => {},
  initialState,
});

const ModalProvider = ({ children }: PropsWithChildren) => {
  const [modalToggle, setModalToggle] = useState(initialState);

  const value = useMemo(
    () => ({
      modalToggle,
      setModalToggle,
      initialState,
    }),
    [modalToggle]
  );

  return (
    <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
  );
};

export default ModalProvider;

export const useModal = () => {
  return useContext(ModalContext);
};
