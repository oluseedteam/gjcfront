import React, { SyntheticEvent } from "react";

export type routeType = Array<{
  name: string;
  path: string;
}>;

export type buttonProps = {
  title: string;
  clickHandler?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  _style?: string;
  type?: "light" | "dark";
  action?: "button" | "submit" | "reset";
};

export type buttonType = {
  light: string;
  dark: string;
};

export type headingProps = {
  text: string;
  _style?: string;
};

export type methodProps = Array<{
  title: string;
  content: string;
  img: string;
}>;

export interface subSectionProps {
  title: string;
  routes: Array<{ path?: string; name: string; icon?: string }>;
}

export type values = {
  [key: string]: string;
};
export interface inputProps<> {
  label: string;
  type?: "text" | "password" | "email" | "number";
  values: values;
  name: string;
  placeholder?: string;
  setValues: React.Dispatch<React.SetStateAction<values>>;
  _style?: string;
}

export type modalProps = {
  open: boolean;
  // setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  children?: React.ReactNode;
  width?: string;
  text: string;
  name: string;
};

export type registerTypes = {
  fullName: string;
  phone: string;
  email: string;
  password: string;
  confirmPassword: string;
};
