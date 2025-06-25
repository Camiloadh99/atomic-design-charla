import { useState } from "react";
import ColorCircle from "../../atoms/ColorCircle/ColorCircle";
import { Heading } from "../../atoms/Heading";
import "./style.css";

export default function ProductColors({ colors }: { colors: string[] }) {
  const [selectedColor, setSelectedColor] = useState<string | null>(colors[0]);

  return (
    <div>
      <Heading variant="p" color="secondary">
        Color: {selectedColor}
      </Heading>
      <div className="product-colors">
        {colors.map((color) => (
          <ColorCircle
            color={color}
            selected={selectedColor === color}
            onClick={() => setSelectedColor(color)}
          />
        ))}
      </div>
    </div>
  );
}
