import { useState } from "react";

const COLORS = ['lightblue', 'lightgreen', 'lightpink', 'lavender', 'wheat'];

interface useColorChange {
  changeColor: () => void;
  color : string;
}

export const useColorChange = () : useColorChange => {
  const [currentColorIndex, setCurrentColorIndex] = useState(0);
  const changeColor = () => {
    setCurrentColorIndex((prevState) => (prevState + 1) % COLORS.length)
  };

  const color = COLORS[currentColorIndex];

  return {
    changeColor,
    color
  }
}