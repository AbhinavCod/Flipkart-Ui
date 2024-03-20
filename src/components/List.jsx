// import React from 'react'

// const List = () => {
//   return (
//     <div className='flex flex-col items-start border-gray-400  px-2 z-10 absolute bg-slate-200' style={{width:"10rem"}}>
//         <div className='flex items-start'>
//             <label className='text-md font-semibold text-gray-600 py-2 px-2'>Label 1</label>
//         </div>
        
//         <div className='flex items-start'>
//             <label className='text-md font-semibold text-gray-600 py-2 px-2'>Label 1</label>
//         </div>
//         <div className='flex items-start'>
//             <label className='text-md font-semibold text-gray-600 py-2 px-2'>Label 1</label>
//         </div>
//         <div className='flex items-start'>
//             <label className='text-md font-semibold text-gray-600 py-2 px-2'>Label 1</label>
//         </div>
//         <div className='flex items-start'>
//             <label className='text-md font-semibold text-gray-600 py-2 px-2'>Label 1</label>
//         </div>
//         <div className='flex items-start'>
//             <label className='text-md font-semibold text-gray-600 py-2 px-2'>Label 1</label>
//         </div>
//         <div className='flex items-start'>
//             <label className='text-md font-semibold text-gray-600 py-2 px-2'>Label 1</label>
//         </div>

//     </div>
//   )
// }

// export default List;

import React from 'react';

const List = () => {
  return (
    <div className='flex flex-col items-start border-gray-400 px-2 z-10 absolute bg-slate-200' style={{ minWidth: "10rem", maxWidth: "100%", width: "auto" }}>
      <div className='flex items-start'>
        <label className='text-md font-semibold text-gray-600 py-2 px-2'>Label 1</label>
      </div>

      <div className='flex items-start'>
        <label className='text-md font-semibold text-gray-600 py-2 px-2'>Label 2</label>
      </div>
      <div className='flex items-start'>
        <label className='text-md font-semibold text-gray-600 py-2 px-2'>Label 3</label>
      </div>
      <div className='flex items-start'>
        <label className='text-md font-semibold text-gray-600 py-2 px-2'>Label 4</label>
      </div>
      <div className='flex items-start'>
        <label className='text-md font-semibold text-gray-600 py-2 px-2'>Label 5</label>
      </div>
      <div className='flex items-start'>
        <label className='text-md font-semibold text-gray-600 py-2 px-2'>Label 6</label>
      </div>
      <div className='flex items-start'>
        <label className='text-md font-semibold text-gray-600 py-2 px-2'>Label 7</label>
      </div>
    </div>
  );
};

export default List;
