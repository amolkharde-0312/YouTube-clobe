import React from 'react'

const Button = ({name}) => {
  return (
    <div>
        <button className="px-5 py-1  m-3 rounded-lg  bg-gray-300 hover:bg-black hover:text-white whitespace-nowrap">{name}</button>
    </div>
  )
}

export default Button