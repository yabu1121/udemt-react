import { ChangeEvent, useState } from "react";

interface useTextChange {
  text : string;
  handleChangeText: (e : ChangeEvent<HTMLInputElement>) => void;
}

export const uesTextChange = () : useTextChange => {
  const [text,setText] = useState("");
  const handleChangeText = (e : ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  }
  return {
    text,
    handleChangeText
  }
}