'use client'
// 摂氏　celsius 華氏　fahrenheit

import { ChangeEvent, useEffect, useState } from "react"
import { useChangeCelciusToFahrenheit } from "../Hooks/useChangeCelciusToFahrenheit"
const Tempreture = () => {
  const {
    celcius,
    handleChange,
    converFromCelciusToFahrenheit
  } = useChangeCelciusToFahrenheit();
  return (
    <div className="max-w-4xl mx-auto mt-10">
      <div className="flex justify-center">
        <label htmlFor="celcius">摂氏温度 : </label>
        <input
          id="celcius" 
          type="number" 
          className="ml-4 border w-20 rounded text-right pl-2 pr-2"
          value={celcius}
          onChange={handleChange}
        />
      </div>
      <p className="w-42 mx-auto">華氏温度 : {converFromCelciusToFahrenheit(celcius)} ℉</p>
    </div>
  )
}

export default Tempreture
