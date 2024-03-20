// import React from 'react'

// const Card = ({url,label,price}) => {
//   return (
//     <div className="max-w-sm h-76 w-68 shadow-xl mx-12 overflow-hidden border-2 my-12 rounded-2xl">
//         <a to={"/"}><img src={url} alt="Image"></img></a>
        
//         <div className="py-2 flex flex-col">
//             <a to={"/"}><div className="text-gray-700 text-xl mr-auto font-semibold tracking-tight">{label}</div></a>
//             <a to={"/"}><p className="text-gray-700 text-xl items-start">{price}</p></a>
//         </div>

//     </div>
//   )
// }

// export default Card

import React from 'react';

const Card = ({ url, label, price }) => {
  return (
    <div className="max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg h-auto md:h-76 w-full md:w-68 lg:w-80 xl:w-96 shadow-xl mx-4 md:mx-12 my-8 md:my-12 overflow-hidden border-2 rounded-2xl">
      <a href={"/"}><img src={url} alt="Image" className="w-full h-40 md:h-56 lg:h-64 xl:h-72 object-cover" /></a>
      
      <div className="py-2 flex flex-col">
        <a href={"/"}><div className="text-gray-700 text-xl md:text-2xl font-semibold tracking-tight truncate">{label}</div></a>
        <a href={"/"}><p className="text-gray-700 text-xl md:text-2xl items-start">{price}</p></a>
      </div>
    </div>
  );
};

export default Card;
