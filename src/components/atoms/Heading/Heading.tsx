import React from "react";
import "./style.css";

export type HeadingVariant =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "span"
  | "p"
  | "div";

export type HeadingColor = "primary" | "secondary" | "default" | "inherit";

export interface HeadingProps {
  variant?: HeadingVariant;
  color?: HeadingColor;
  children: React.ReactNode;
  className?: string;
  component?: HeadingVariant;
}

export default function Heading({
  variant = "p",
  color = "default",
  children,
  className = "",
  component,
  ...props
}: HeadingProps) {
  const Component = component || variant;

  const classes = [
    "heading",
    `heading--variant-${variant}`,
    `heading--color-${color}`,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <Component className={classes} {...props}>
      {children}
    </Component>
  );
}
