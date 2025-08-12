import React from "react";

export type componentProps = {
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
  style?: React.CSSProperties;

};

export interface navJson {
  name: string;
  action: boolean;
  loader: boolean;
  isIndex: boolean;
}
