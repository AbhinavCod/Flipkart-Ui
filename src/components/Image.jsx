import React from 'react'

const Image = ({url}) => {
  return (
    <div className='flex'>
        <img src={url}></img>

    </div>
  )
}

export default Image;