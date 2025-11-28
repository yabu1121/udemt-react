import React from 'react'

interface Props {
  title: string;
  content: string;
}

const Box = (props : Props): JSX.Element => {
  const {title, content} = props
  return <div className='shadow-xl p-6'>
    <h1 className='font-xl font-bold'>{title}</h1>
    <p className='mt-4 text-base'>{content}</p>
  </div>
}

export default Box
