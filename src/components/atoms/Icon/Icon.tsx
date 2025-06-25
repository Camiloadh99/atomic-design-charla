export type IconVariant = "filled" | "outlined";

export type TIconProps = {
  icon: string;
  fontSize?: string;
  color?: string;
  variant?: IconVariant;
};

export const Icon = ({
  icon,
  color,
  fontSize,
  variant = "outlined",
}: TIconProps) => {
  const getFillValue = () => {
    return variant === "filled" ? 1 : 0;
  };

  return (
    <span
      className="material-symbols-outlined"
      style={{
        fontVariationSettings: `'FILL' ${getFillValue()}, 'wght' 400, 'GRAD' 0, 'opsz' 24`,
        color,
        fontSize,
      }}
    >
      {icon}
    </span>
  );
};
