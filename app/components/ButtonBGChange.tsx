'use client'
import React, { useState } from 'react'
import { useColorChange } from '../Hooks/useColorChange';

// 固定値は関数コンポーネント内には書かない
// レンダリング時に無駄が生まれる。
// 固定値は大文字で書くとわかりやすい
const ButtonBGChange = () => {
  const {changeColor, color} = useColorChange();
  return (
    <div className="h-screen pt-8" style={{backgroundColor: color}}>
      <div className='flex justify-center'>
        <button 
          onClick={changeColor}
          className='bg-blue-500 px-4 py-2 rounded text-white'>色を変更</button>
      </div>
    </div>
  )
}

export default ButtonBGChange
