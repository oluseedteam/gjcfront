import { ChangeEvent } from "react";
import { inputProps } from "../../types";
export const InputComponent: React.FC<inputProps> = ({
  label,
  type = "text",
  values,
  setValues,
  name,
  placeholder,
  _style,
}): JSX.Element => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  return (
    <div className="flex my-3 flex-col">
      <label className="pb-3 text-sm" htmlFor={name}>
        {label}
      </label>
      <input
        className={`${_style} text-sm outline-none p-2 shadow-md`}
        onChange={(e) => {
          handleChange(e);
        }}
        type={type}
        placeholder={placeholder}
        value={values[name]}
        name={name}
      />
    </div>
  );
};

export const TextAreaComponent: React.FC<inputProps> = ({
  label,
  values,
  setValues,
  name,
  placeholder,
  _style,
}): JSX.Element => {
  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  return (
    <div className="flex my-3 flex-col">
      <label className="pb-3 text-sm" htmlFor={name}>
        {label}
      </label>
      <textarea
        cols={10}
        rows={5}
        className={`${_style} text-sm outline-none p-3 shadow-md`}
        onChange={(e) => {
          handleChange(e);
        }}
        placeholder={placeholder}
        value={values[name]}
        name={name}
      />
    </div>
  );
};

type selectProps = {
  options: Array<{ [key: string]: any }>;
};

export const SelectComponent: React.FC<inputProps & selectProps> = ({
  label,
  values,
  setValues,
  name,
  _style,
  options,
}): JSX.Element => {
  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  return (
    <div className="flex my-3 flex-col">
      <label className="pb-3 text-sm" htmlFor={name}>
        {label}
      </label>
      <select
        className={`${_style} text-sm outline-none p-3 shadow-md`}
        onChange={(e) => {
          handleChange(e);
        }}
        value={values[name]}
        name={name}
      >
        <option value="">Select a {label}</option>
        {options.map((data) => {
          return <option value={data.value}>{data.name}</option>;
        })}
      </select>
    </div>
  );
};
