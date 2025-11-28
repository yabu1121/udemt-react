import { useState } from "react";

interface useShowTextHidden {
  isHidden : boolean;
  handleClickIndicate : () => void;
  handleClickHidden : () => void;
}

export const useShowTextHidden = (): useShowTextHidden => {
  const [isHidden, setIsHidden] = useState(false);
  const handleClickIndicate = () => {
    setIsHidden(false);
  }
  const handleClickHidden = () => {
    setIsHidden(true);
  }
  return {
    isHidden,
    handleClickIndicate,
    handleClickHidden
  }
}