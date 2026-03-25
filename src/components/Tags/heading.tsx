import { headingProps } from "../../types";

export const Heading1Component: React.FC<headingProps> = ({
  text,
  _style,
}): JSX.Element => {
  return (
    <h1
      className={`my-3 md:text-3xl text-xl font-gsans-medium  font-bold  capitalize ${_style}`}
    >
      {text}
    </h1>
  );
};
