import { ReactNode } from "react";
type TTypographyVariant =
  | "thin"
  | "extra-light"
  | "light"
  | "regular"
  | "medium"
  | "semi-bold"
  | "bold"
  | "extra-bold"
  | "black";

type TTypographySize =
  | "extra-small"
  | "small"
  | "base"
  | "large"
  | "extra-large"
  | "extra-extra-large"
  | "extra-extra-extra-large";

export interface ITypographyProps {
  children: ReactNode;
  variant?: TTypographyVariant;
  size?: TTypographySize;
  className?: string;
  onClick?(event: unknown): void;
}
