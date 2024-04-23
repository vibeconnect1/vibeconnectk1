import React from 'react'

const TextFields = ({type, title}) => {
  return (
    <div className="flex flex-col">
    <label htmlFor="" className="font-bold">{title}</label>
    <input type={type} className="border-b-[1px] p-2 border-gray-600 outline-none" />
  </div>
  )
}

export default TextFields
