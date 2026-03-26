import { buttonProps } from "../../types";
import { ButtonType } from "../../data";
export const ButtonComponent = ({
  title,
  clickHandler,
  _style,
  type = "light",
  action = "button",
}: buttonProps): JSX.Element => {
  return (
    <button
      type={action}
      onClick={clickHandler ? clickHandler : (): void => {}}
      className={`${ButtonType[type]} font-light text-base text-light font-gsans-light px-5 py-2 rounded-md ${_style}`}
    >
      {title}
    </button>
  );
};
