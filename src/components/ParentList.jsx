// import React from 'react'
// import List from './List'
// import { useState } from 'react';

// const ParentList = () => {
//     const [display,setDisplay] = useState(false);
//     const [display1,setDisplay1] = useState(false);
//     const [display2,setDisplay2] = useState(false);
//     const [display3,setDisplay3] = useState(false);
//     const [display4,setDisplay4] = useState(false);
//     const [display5,setDisplay5] = useState(false);
//     const [display6,setDisplay6] = useState(false);
//   return (
//     <div className='flex justify-between gap-6 w-full'>
//         <div className='flex flex-col gap-2'>
            
//           <button onClick={(e)=> {
//             e.preventDefault()
//             setDisplay(!display)}}>
                
//           <a className='font-bold mb-2' href=''><span><img src="https://rukminim2.flixcart.com/fk-p-flap/80/80/image/0d75b34f7d8fbcb3.png?q=100" alt="" />Home Appliances</span></a></button>

//           {display && (
//             <div>
//               <List />
//               </div>
//           )}

//         </div>
//         <div className='flex flex-col gap-2'>
            
//           <button onClick={(e)=> {
//             e.preventDefault()
//             setDisplay1(!display1)}}>

//           <a className='font-bold mb-2' href=''><span><img src="https://rukminim2.flixcart.com/flap/80/80/image/29327f40e9c4d26b.png?q=100" alt="" />Grocery</span></a></button>
//           {display1 && (
//             <div>
//               <List />
//               </div>
//           )}
         

//         </div>
//         <div className='flex flex-col gap-2'>
            
//           <button onClick={(e)=> {
//             e.preventDefault()
//             setDisplay2(!display2)}}>

//           <a className='font-bold mb-2' href=''><span><img src="https://rukminim2.flixcart.com/flap/80/80/image/69c6589653afdb9a.png?q=100" alt="" />Electronics</span></a></button>
//           {display2 && (
//             <div>
//               <List />
//               </div>
//           )}
          

//         </div>
//         <div className='flex flex-col gap-2'>
            
//           <button onClick={(e)=> {
//             e.preventDefault()
//             setDisplay3(!display3)}}>

//           <a className='font-bold mb-2' href=''><span><img src="https://rukminim2.flixcart.com/flap/80/80/image/ab7e2b022a4587dd.jpg?q=100" alt="" />Furnitures</span></a></button>
//           {display3 && (
//             <div>
//               <List />
//               </div>
//           )}
          

//         </div>
//         <div className='flex flex-col gap-2'>
            
//           <button onClick={(e)=> {
//             e.preventDefault()
//             setDisplay4(!display4)}}>

//           <a className='font-bold mb-2' href=''><span><img src="https://rukminim2.flixcart.com/flap/80/80/image/71050627a56b4693.png?q=100" alt="" />Travel</span></a></button>
//           {display4 && (
//             <div>
//               <List />
//               </div>
//           )}
         
//         </div>
//         <div className='flex flex-col gap-2'>
            
//           <button onClick={(e)=> {
//             e.preventDefault()
//             setDisplay5(!display5)}}>

//           <a className='font-bold mb-2' href=''><span><img src="https://rukminim2.flixcart.com/fk-p-flap/80/80/image/0139228b2f7eb413.jpg?q=100" alt="" />Appliances</span></a></button>
//           {display5 && (
//             <div>
//               <List />
//               </div>
//           )}
        

//         </div>
//         <div className='flex flex-col gap-2'>
            
//           <button onClick={(e)=> {
//             e.preventDefault()
//             setDisplay6(!display6)}}>

//           <a className='font-bold mb-2' href=''><span><img src="https://rukminim2.flixcart.com/flap/80/80/image/dff3f7adcf3a90c6.png?q=100" alt="" />Beauty, Toys & more</span></a></button>
//           {display6 && (
//             <div>
//               <List />
//               </div>
//           )}
          

//         </div>
          
//         </div>
//   )
// }

// export default ParentList

import React, { useState } from 'react';
import List from './List';

const ParentList = () => {
  const [display, setDisplay] = useState(false);
  const [display1, setDisplay1] = useState(false);
  const [display2, setDisplay2] = useState(false);
  const [display3, setDisplay3] = useState(false);
  const [display4, setDisplay4] = useState(false);
  const [display5, setDisplay5] = useState(false);
  const [display6, setDisplay6] = useState(false);

  return (
    <div className='flex flex-col md:flex-row gap-2 md:gap-0 md:space-x-16 md:justify-center mx-auto'>

      
      <div className='flex flex-col gap-2'>
        <button onClick={(e) => {
          e.preventDefault();
          setDisplay(!display);
        }}>
          <a className='font-bold mb-2' href='/'>
            <span>
              <img src="https://rukminim2.flixcart.com/fk-p-flap/80/80/image/0d75b34f7d8fbcb3.png?q=100" alt="" />Home Appliances
            </span>
          </a>
        </button>
       

        {display && 
        <div>
          <List />
          </div>
          }
        

        
      </div>


      <div className='flex flex-col gap-2'>
        <button onClick={(e) => {
          e.preventDefault();
          setDisplay1(!display1);
        }}>
          <a className='font-bold mb-2' href='/'>
            <span>
              <img src="https://rukminim2.flixcart.com/flap/80/80/image/69c6589653afdb9a.png?q=100" alt="" />Electronics
            </span>
          </a>
        </button>
        <div>

        {display1 && 
        <div>
          <List />
          </div>
        }
        </div>
      </div>


      <div className='flex flex-col gap-2'>
        <button onClick={(e) => {
          e.preventDefault();
          setDisplay2(!display2);
        }}>
          <a className='font-bold mb-2' href='/'>
            <span>
              <img src="https://rukminim2.flixcart.com/flap/80/80/image/ab7e2b022a4587dd.jpg?q=100" alt="" />Furnitures
            </span>
          </a>
        </button>
        <div>

        {display2 && <div> <List /> </div>}
        </div>
      </div>


      <div className='flex flex-col gap-2'>
        <button onClick={(e) => {
          e.preventDefault();
          setDisplay3(!display3);
        }}>
          <a className='font-bold mb-2' href='/'>
            <span>
              <img src="https://rukminim2.flixcart.com/flap/80/80/image/71050627a56b4693.png?q=100" alt="" />Travel
            </span>
          </a>
        </button>
        <div>

        {display3 && <div> <List /> </div>}
        </div>
      </div>

      <div className='flex flex-col gap-2'>
        <button onClick={(e) => {
          e.preventDefault();
          setDisplay4(!display4);
        }}>
          <a className='font-bold mb-2' href='/'>
            <span>
              <img src="https://rukminim2.flixcart.com/fk-p-flap/80/80/image/0139228b2f7eb413.jpg?q=100" alt="" />Appliances
            </span>
          </a>
        </button>
        <div>

        {display4 && <div> <List /> </div>}
        </div>


      </div>

      <div className='flex flex-col gap-2'>
        <button onClick={(e) => {
          e.preventDefault();
          setDisplay5(!display5);
        }}>
          <a className='font-bold mb-2' href='/'>
            <span>
              <img src="https://rukminim2.flixcart.com/flap/80/80/image/dff3f7adcf3a90c6.png?q=100" alt="" />
            </span>Beauty, Toys & more
          </a>
        </button>
        <div>

        {display5 && <div> <List /> </div>}
        </div>
      </div>


    </div>
  );
};

export default ParentList;
