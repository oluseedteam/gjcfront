import React, {
  createContext,
  PropsWithChildren,
  useContext,
  useMemo,
  useState,
} from "react";

type toggleProps = {
  selectOpen: boolean;
  bookingOpen: boolean;
  otpOpen: boolean;
  reviewOpen: boolean;
};
type modalContextProps = {
  modalToggle: toggleProps;
  setModalToggle: React.Dispatch<React.SetStateAction<toggleProps>>;
  initialState: toggleProps;
};

const initialState = {
  selectOpen: false,
  bookingOpen: false,
  otpOpen: false,
  reviewOpen: false,
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
