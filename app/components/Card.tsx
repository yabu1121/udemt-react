import React from 'react'
import Box from './Box'

const Card = () => {
  const cardDescription = {
    "title1" : "これはタイトル1です。",
    "content1" : "これはコンテンツ1です。これはコンテンツです。これはコンテンツです。これはコンテンツです。これはコンテンツです。これはコンテンツです。これはコンテンツです。これはコンテンツです。これはコンテンツです。これはコンテンツです。これはコンテンツです。これはコンテンツです。これはコンテンツです。これはコンテンツです。",
    "title2" : "これはタイトル2です。",
    "content2" : "これはコンテンツ2です。これはコンテンツです。これはコンテンツです。これはコンテンツです。これはコンテンツです。これはコンテンツです。これはコンテンツです。これはコンテンツです。これはコンテンツです。これはコンテンツです。これはコンテンツです。これはコンテンツです。これはコンテンツです。これはコンテンツです。",
    "title3" : "これはタイトル3です。",
    "content3" : "これはコンテンツ3です。これはコンテンツです。これはコンテンツです。これはコンテンツです。これはコンテンツです。これはコンテンツです。これはコンテンツです。これはコンテンツです。これはコンテンツです。これはコンテンツです。これはコンテンツです。これはコンテンツです。これはコンテンツです。これはコンテンツです。"
  }
  return (
    <div className='mt-10 mx-auto max-w-4xl'>
      <div className='grid grid-cols-3 gap-4 '>
        <Box title={cardDescription.title1} content={cardDescription.content1}/>
        <Box title={cardDescription.title2} content={cardDescription.content2}/>
        <Box title={cardDescription.title3} content={cardDescription.content3}/>
      </div>
    </div>
  )
}

export default Card
