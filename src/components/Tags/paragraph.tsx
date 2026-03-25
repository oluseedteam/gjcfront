export const ParagraphComponent: React.FC<{
  text: string;
  type?: "dark" | "light";
  _style?: string;
}> = ({ text, type = "dark", _style }): JSX.Element => {
  const color = {
    light: "text-light font-gsans-light",
    dark: "text-darkSm",
  };
  return <p className={`${color[type]}  font-light my-3 ${_style}`}>{text}</p>;
};
