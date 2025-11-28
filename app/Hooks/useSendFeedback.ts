import { ChangeEvent, useState } from "react";

interface useSendFeedback {
  inputValue : string;
  handleChangeValue : (e : ChangeEvent<HTMLTextAreaElement>) => void;
  handleSubmitFeedback : () => void;
  feedbackList : string[];
}

export const useSendFeedback = () : useSendFeedback => {
  const [inputValue, setInputValue] = useState<string>("");
  const [feedbackList,setFeedbackList] = useState<string[]>([]);
  const handleChangeValue = (e : ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(e.target.value);
  }
  const handleSubmitFeedback = () => {
    // 空のフィードバックをはじく。
    if(!inputValue.trim()){
      return; //何もしない
    }
    setFeedbackList((prevState) => {
      return [...prevState, inputValue]
    });
    setInputValue("");
  }

  return {
    inputValue,
    handleChangeValue,
    handleSubmitFeedback,
    feedbackList
  }
}