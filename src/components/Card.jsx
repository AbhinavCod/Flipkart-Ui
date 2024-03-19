import React from 'react'

const Card = ({url,label,price}) => {
  return (
    <div className="max-w-sm h-76 w-68 shadow-xl mx-12 overflow-hidden border-2 my-12 rounded-2xl">
        <a to={"/"}><img src={url} alt="Image"></img></a>
        
        <div className="py-2 flex flex-col">
            <a to={"/"}><div className="text-gray-700 text-xl mr-auto font-semibold tracking-tight">{label}</div></a>
            <a to={"/"}><p className="text-gray-700 text-xl items-start">{price}</p></a>
        </div>

    </div>
  )
}

export default Card