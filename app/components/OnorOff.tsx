'use client'
import { useState } from "react"
import { useShowTextHidden } from "../Hooks/useShowTextHidden"

const OnorOff = () => {
  const {isHidden, handleClickIndicate, handleClickHidden} = useShowTextHidden();
  return (
    <div className="mx-auto mt-10 max-w-4xl">
      <div className="flex justify-center">
        <div>
          {!isHidden && <h2 className="text-6xl mb-4 text-center">こんにちは</h2>}
          <div className="flex justify-center gap-x-4">
            <button className="bg-sky-300 px-4 py-2 rounded" onClick={handleClickIndicate}>表示</button>
            <button className="bg-sky-300 px-4 py-2 rounded" onClick={handleClickHidden}>非表示</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OnorOff
