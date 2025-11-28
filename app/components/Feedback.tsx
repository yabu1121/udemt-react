'use client'
import { ChangeEvent, useState } from "react"
import { useSendFeedback } from "../Hooks/useSendFeedback"

const Feedback = () => {
  const {
    inputValue,
    handleChangeValue,
    handleSubmitFeedback,
    feedbackList
  } = useSendFeedback();
  return (
    <div className="mx-auto max-w-4xl mt-10">
      <div className="flex justify-center">
        <div>
          <textarea 
            className="border px-3 py-2 rounded" 
            placeholder="フェードバックを入力してください" 
            value={inputValue}
            onChange={handleChangeValue}
          />
          <div className="flex justify-center">
            <button 
              className="bg-blue-400 text-white px-4 py-2 rounded mt-10 mb-10"
              onClick={handleSubmitFeedback}
            >送信する</button>
          </div>
          <div>
            {feedbackList.map((feedback, index) => <li key={index}>{feedback}</li>)}
          </div>
        </div>  
      </div>      
    </div>
  )
}

export default Feedback
