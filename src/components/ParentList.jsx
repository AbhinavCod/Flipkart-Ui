import React from 'react'
import List from './List'
import { useState } from 'react';

const ParentList = () => {
    const [display,setDisplay] = useState(false);
  return (
    <div className='flex justify-between gap-6 w-full'>
        <div className='flex flex-col gap-2'>
            
          <button onClick={(e)=> {
            e.preventDefault()
            setDisplay(!display)}}>
                
          <a className='font-bold mb-2' href=''><span><img src="https://rukminim2.flixcart.com/fk-p-flap/80/80/image/0d75b34f7d8fbcb3.png?q=100" alt="" />Home Appliances</span></a></button>

          {display && (
            <List />
          )}

        </div>
        <div className='flex flex-col gap-2'>
            
          <button >

          <a className='font-bold mb-2' href=''><span><img src="https://rukminim2.flixcart.com/fk-p-flap/80/80/image/0d75b34f7d8fbcb3.png?q=100" alt="" />Home Appliances</span></a></button>

         

        </div>
        <div className='flex flex-col gap-2'>
            
          <button >

          <a className='font-bold mb-2' href=''><span><img src="https://rukminim2.flixcart.com/fk-p-flap/80/80/image/0d75b34f7d8fbcb3.png?q=100" alt="" />Home Appliances</span></a></button>

          

        </div>
        <div className='flex flex-col gap-2'>
            
          <button>

          <a className='font-bold mb-2' href=''><span><img src="https://rukminim2.flixcart.com/fk-p-flap/80/80/image/0d75b34f7d8fbcb3.png?q=100" alt="" />Home Appliances</span></a></button>

          

        </div>
        <div className='flex flex-col gap-2'>
            
          <button >

          <a className='font-bold mb-2' href=''><span><img src="https://rukminim2.flixcart.com/fk-p-flap/80/80/image/0d75b34f7d8fbcb3.png?q=100" alt="" />Home Appliances</span></a></button>

         
        </div>
        <div className='flex flex-col gap-2'>
            
          <button >

          <a className='font-bold mb-2' href=''><span><img src="https://rukminim2.flixcart.com/fk-p-flap/80/80/image/0d75b34f7d8fbcb3.png?q=100" alt="" />Home Appliances</span></a></button>

        

        </div>
        <div className='flex flex-col gap-2'>
            
          <button>

          <a className='font-bold mb-2' href=''><span><img src="https://rukminim2.flixcart.com/fk-p-flap/80/80/image/0d75b34f7d8fbcb3.png?q=100" alt="" />Home Appliances</span></a></button>

          

        </div>
          
        </div>
  )
}

export default ParentList