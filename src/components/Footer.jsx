// import React from 'react'

// const Footer = () => {
//   return (
//     <>

//     <div className='flex flex-col bg-gray-900  px-4 py-4 gap-8'>
//     <div className='flex  mt-auto justify-between'>
//         <div className='flex gap-16 '>
//         <div className='flex flex-col gap-4'>
//             <div className='text-gray-400 flex items-start' >
//                 <div>
//                     About
//                 </div>
//             </div>

//             <div className='flex flex-col gap-2 items-start'>
//                 <a className='text-white hover:underline text-sm' href=''>Contact Us</a>
//                 <a className='text-white hover:underline text-sm' href=''>About Us</a>
//                 <a className='text-white hover:underline text-sm' href=''>Careers</a>
//                 <a className='text-white hover:underline text-sm' href=''>Flipkart Stories</a>
//                 <a className='text-white hover:underline text-sm' href=''>Press</a>
//                 <a className='text-white hover:underline text-sm' href=''>Coporate Information</a>
//             </div>

//         </div>
//         <div className='flex flex-col gap-4'>
//         <div className='text-gray-400 flex items-start' >
//                 <div>
//                     Group Companies
//                 </div>
//             </div>

//             <div className='flex flex-col gap-2 items-start'>
//                 <a className='text-white hover:underline text-sm' href=''>Myntra</a>
//                 <a className='text-white hover:underline text-sm' href=''>Shopsy</a>
//                 <a className='text-white hover:underline text-sm' href=''>Flipkart Wholesale</a>
//                 <a className='text-white hover:underline text-sm' href=''>Clear Trip</a>
//             </div>

//         </div>
//         <div className='flex flex-col gap-4'>
//         <div className='text-gray-400 flex items-start' >
//                 <div>
//                     About
//                 </div>
//             </div>

//             <div className='flex flex-col gap-2 items-start'>
//                 <a className='text-white hover:underline text-sm' href=''>Contact Us</a>
//                 <a className='text-white hover:underline text-sm' href=''>About Us</a>
//                 <a className='text-white hover:underline text-sm' href=''>Careers</a>
//                 <a className='text-white hover:underline text-sm' href=''>Flipkart Stories</a>
//                 <a className='text-white hover:underline text-sm' href=''>Press</a>
//                 <a className='text-white hover:underline text-sm' href=''>Coporate Information</a>
//             </div>

//         </div>
//         <div className='flex flex-col gap-4'>
//         <div className='text-gray-400 flex items-start' >
//                 <div>
//                     About
//                 </div>
//             </div>

//             <div className='flex flex-col gap-2 items-start'>
//                 <a className='text-white hover:underline' href=''>Contact Us</a>
//                 <a className='text-white hover:underline' href=''>About Us</a>
//                 <a className='text-white hover:underline' href=''>Careers</a>
//                 <a className='text-white hover:underline' href=''>Flipkart Stories</a>
//                 <a className='text-white hover:underline' href=''>Press</a>
//                 <a className='text-white hover:underline' href=''>Coporate Information</a>
//             </div>

//         </div>
//         </div>


//         <div className='flex gap-6'>
//             <div className='flex flex-col gap-4'>
//             <div className='text-gray-400 flex items-start' >
//                 <div>
//                     Mail Us
//                 </div>
//             </div>
//                 <div className='flex flex-col items-start'>
//                     <p className='text-white hover:underline text-sm'>Flipkart Internet Private Limited,</p>
//                     <p className='text-white hover:underline text-sm'>Buildings Alyssa, Begonia &</p>
//                     <p className='text-white hover:underline text-sm'>Clove Embassy Tech Village,</p>
//                     <p className='text-white hover:underline text-sm'>Outer Ring Road, Devarabeesanahalli Village,</p>
//                     <p className='text-white hover:underline text-sm'>Bengaluru, 560103,</p>
//                     <p className='text-white hover:underline text-sm'>Karnataka, India</p>
//                 </div>
//             </div>
//             <div className='flex flex-col gap-4'>
//             <div className='text-gray-400 flex items-start' >
//                 <div>
//                 Registered Office Address:
//                 </div>
//             </div>
//                 <div className='flex flex-col items-start'>
//                     <p className='text-white hover:underline text-sm'>Flipkart Internet Private Limited,</p>
//                     <p className='text-white hover:underline text-sm'>Buildings Alyssa, Begonia &</p>
//                     <p className='text-white hover:underline text-sm'>Clove Embassy Tech Village,</p>
//                     <p className='text-white hover:underline text-sm'>Outer Ring Road, Devarabeesanahalli Village,</p>
//                     <p className='text-white hover:underline text-sm'>Bengaluru, 560103,</p>
//                     <p className='text-white hover:underline text-sm'>Karnataka, India</p>
//                 </div>
//             </div>

//         </div>
//     </div>

//     <hr style={{fontSize:"2rem",color:"gray"}}></hr>

//     <div className='flex gap-6 justify-between'>
//         <a className='text-white' href=''><span></span>Become a seller</a>
//         <a className='text-white' href=''><span></span>Become a seller</a>
//         <a className='text-white' href=''><span></span>Become a seller</a>
//         <a className='text-white' href=''><span></span>Become a seller</a>
//         <a className='text-white' href=''><span></span>Become a seller</a>
//         <span className='text-white'>© 2007-2024 Flipkart.com</span>
//         <img src='https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/payment-method_69e7ec.svg'></img>
//     </div>

//     </div>
   
//     </>
//   )
// }

// export default Footer;

import React from 'react';

const Footer = () => {
  return (
    <div className='flex flex-col bg-gray-900 px-4 py-4 gap-8'>
      <div className='flex mt-auto flex-col md:flex-row justify-between'>
        <div className='flex flex-col gap-4'>
          <div className='text-gray-400'>
            <div>About</div>
          </div>

          <div className='flex flex-col gap-2 items-start'>
            <a className='text-white hover:underline text-sm' href=''>Contact Us</a>
            <a className='text-white hover:underline text-sm' href=''>About Us</a>
            <a className='text-white hover:underline text-sm' href=''>Careers</a>
            <a className='text-white hover:underline text-sm' href=''>Flipkart Stories</a>
            <a className='text-white hover:underline text-sm' href=''>Press</a>
            <a className='text-white hover:underline text-sm' href=''>Corporate Information</a>
          </div>
        </div>

        <div className='flex flex-col gap-4'>
          <div className='text-gray-400'>
            <div>Group Companies</div>
          </div>

          <div className='flex flex-col gap-2 items-start'>
            <a className='text-white hover:underline text-sm' href=''>Myntra</a>
            <a className='text-white hover:underline text-sm' href=''>Shopsy</a>
            <a className='text-white hover:underline text-sm' href=''>Flipkart Wholesale</a>
            <a className='text-white hover:underline text-sm' href=''>Clear Trip</a>
          </div>
        </div>

        <div className='flex flex-col gap-4'>
          <div className='text-gray-400'>
            <div>About</div>
          </div>

          <div className='flex flex-col gap-2 items-start'>
            <a className='text-white hover:underline text-sm' href=''>Contact Us</a>
            <a className='text-white hover:underline text-sm' href=''>About Us</a>
            <a className='text-white hover:underline text-sm' href=''>Careers</a>
            <a className='text-white hover:underline text-sm' href=''>Flipkart Stories</a>
            <a className='text-white hover:underline text-sm' href=''>Press</a>
            <a className='text-white hover:underline text-sm' href=''>Corporate Information</a>
          </div>
        </div>

        <div className='flex flex-col gap-4'>
          <div className='text-gray-400'>
            <div>About</div>
          </div>

          <div className='flex flex-col gap-2 items-start'>
            <a className='text-white hover:underline' href=''>Contact Us</a>
            <a className='text-white hover:underline' href=''>About Us</a>
            <a className='text-white hover:underline' href=''>Careers</a>
            <a className='text-white hover:underline' href=''>Flipkart Stories</a>
            <a className='text-white hover:underline' href=''>Press</a>
            <a className='text-white hover:underline' href=''>Corporate Information</a>
          </div>
        </div>
      </div>

      <hr className='my-4 border-gray-500' />

      <div className='flex flex-col md:flex-row items-center justify-between gap-6'>
        <div className='flex flex-col gap-4'>
          <div className='text-gray-400'>
            <div>Mail Us</div>
          </div>
          <div className='flex flex-col items-start'>
            <p className='text-white hover:underline text-sm'>Flipkart Internet Private Limited,</p>
            <p className='text-white hover:underline text-sm'>Buildings Alyssa, Begonia &</p>
            <p className='text-white hover:underline text-sm'>Clove Embassy Tech Village,</p>
            <p className='text-white hover:underline text-sm'>Outer Ring Road, Devarabeesanahalli Village,</p>
            <p className='text-white hover:underline text-sm'>Bengaluru, 560103,</p>
            <p className='text-white hover:underline text-sm'>Karnataka, India</p>
          </div>
        </div>

        <div className='flex flex-col gap-4'>
          <div className='text-gray-400'>
            <div>Registered Office Address:</div>
          </div>
          <div className='flex flex-col items-start'>
            <p className='text-white hover:underline text-sm'>Flipkart Internet Private Limited,</p>
            <p className='text-white hover:underline text-sm'>Buildings Alyssa, Begonia &</p>
            <p className='text-white hover:underline text-sm'>Clove Embassy Tech Village,</p>
            <p className='text-white hover:underline text-sm'>Outer Ring Road, Devarabeesanahalli Village,</p>
            <p className='text-white hover:underline text-sm'>Bengaluru, 560103,</p>
            <p className='text-white hover:underline text-sm'>Karnataka, India</p>
          </div>
        </div>
      </div>

      <div className='flex items-center justify-between mt-4'>
        <span className='text-white'>© 2007-2024 Flipkart.com</span>
        <img className='w-32 md:w-auto' src='https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/payment-method_69e7ec.svg' alt='Payment Methods' />
      </div>
    </div>
  );
};

export default Footer;
