import React from "react";
import "./style.css";

export type ChipVariant = "filled" | "outlined";
export type ChipColor =
  | "primary"
  | "secondary"
  | "default"
  | "success"
  | "error"
  | "warning"
  | "info";
export type ChipSize = "small" | "medium" | "large";

export interface ChipProps {
  label: string;
  variant?: ChipVariant;
  color?: ChipColor;
  size?: ChipSize;
  disabled?: boolean;
  icon?: React.ReactNode;
  className?: string;
}

export default function Chip({
  label,
  variant = "filled",
  color = "default",
  size = "medium",
  disabled = false,
  icon,
  className = "",
  ...props
}: ChipProps) {
  const classes = [
    "chip",
    `chip--variant-${variant}`,
    `chip--color-${color}`,
    `chip--size-${size}`,
    disabled && "chip--disabled",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={classes} {...props}>
      {icon && <span className="chip__icon">{icon}</span>}

      <span className="chip__label">{label}</span>
    </div>
  );
}
