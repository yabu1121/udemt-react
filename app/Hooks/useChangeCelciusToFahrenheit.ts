import { ChangeEvent, useState } from "react";

interface useChangeCelciusToFahrenheit {
  celcius : number;
  handleChange : (e: ChangeEvent<HTMLInputElement>) => void;
  converFromCelciusToFahrenheit : (celcius: number) => number;
}

export const useChangeCelciusToFahrenheit = () : useChangeCelciusToFahrenheit => {
  const [celcius, setSelcius] = useState(0);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSelcius(Number(e.target.value));
  }

  const converFromCelciusToFahrenheit = (celsius : number) => {
    return (celcius * 9) / 5 + 32;
  }
  
  return {
    celcius,
    handleChange,
    converFromCelciusToFahrenheit
  }
}