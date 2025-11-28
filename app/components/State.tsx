'use client'
import { useCountUp } from "../Hooks/useCountUp";


const State = () => {
  const {count, onClickCountUp} = useCountUp();
  return (
    <div className="mx-auto mt-10 max-w-4xl">
      <div className="flex justify-center">
        <div>
          <h2 className="mb-4 text-center text-6xl">{count}</h2>
          <button onClick={onClickCountUp}>カウントアップ</button>
        </div>
      </div>
    </div>
  )
}

export default State
