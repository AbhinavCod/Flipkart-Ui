// import Header from './components/Header';
// import Footer from './components/Footer';
// import ControlledCarousel from './components/Carousel';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Card from './components/Card';
// import './App.css'


// import ParentList from './components/ParentList';

// function App() {
 
 

//   return (
//     <>
//     <div className='flex flex-col min-h-screen' style={{height:"100%",width:"100%"}}>
//       <Header />
//       <div className='flex gap-6 justify-between relative'>
//         <ParentList />
//       </div>
//       <ControlledCarousel />
//       <div className='flex gap-4 justify-between'>
//         <Card url={"https://m.media-amazon.com/images/I/41tSQSq1xJL._AC_SY200_.jpg"} label={"Limited Deal Offer"} price={"₹ 50,000/-"}/>
//         <Card url={"https://m.media-amazon.com/images/I/81ratqQtFfL._AC_SY200_.jpg"} label={"Limited Deal Offer"} price={"₹ 50,000/-"}/>
//         <Card url={"https://m.media-amazon.com/images/I/71sAn2UfxPL._AC_SY200_.jpg"} label={"Limited Deal Offer"} price={"₹ 50,000/-"}/>
//         <Card url={"https://m.media-amazon.com/images/I/61XwOVLs4xL._AC_SY200_.jpg"} label={"Limited Deal Offer"} price={"₹ 50,000/-"}/>
//         <Card url={"https://m.media-amazon.com/images/I/91Zb64yWENL._AC_SY200_.jpg"} label={"Limited Deal Offer"} price={"₹ 50,000/-"}/>
//         <Card url={"https://images-eu.ssl-images-amazon.com/images/G/31/2023/GateWay/December/CC/PC_379x304_1._SY304_CB572341311_.jpg"} label={"Limited Deal Offer"} price={"₹ 50,000/-"}/>
//       </div>
//         <Footer />
    
//     </div>
     
//     </>
//   )
// }

// export default App


import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ControlledCarousel from './components/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from './components/Card';
import './App.css';
import ParentList from './components/ParentList';

function App() {
  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      
      <div className='flex flex-col lg:flex-col gap-6 justify-between relative'>
        <ParentList />
        <ControlledCarousel />
      </div>

      <div className='flex flex-col md:flex-row gap-4 justify-between'>
        <Card url={"https://m.media-amazon.com/images/I/41tSQSq1xJL._AC_SY200_.jpg"} label={"Limited Deal Offer"} price={"₹ 50,000/-"}/>
        <Card url={"https://m.media-amazon.com/images/I/81ratqQtFfL._AC_SY200_.jpg"} label={"Limited Deal Offer"} price={"₹ 50,000/-"}/>
        <Card url={"https://m.media-amazon.com/images/I/71sAn2UfxPL._AC_SY200_.jpg"} label={"Limited Deal Offer"} price={"₹ 50,000/-"}/>
        <Card url={"https://m.media-amazon.com/images/I/61XwOVLs4xL._AC_SY200_.jpg"} label={"Limited Deal Offer"} price={"₹ 50,000/-"}/>
        <Card url={"https://m.media-amazon.com/images/I/91Zb64yWENL._AC_SY200_.jpg"} label={"Limited Deal Offer"} price={"₹ 50,000/-"}/>
        <Card url={"https://images-eu.ssl-images-amazon.com/images/G/31/2023/GateWay/December/CC/PC_379x304_1._SY304_CB572341311_.jpg"} label={"Limited Deal Offer"} price={"₹ 50,000/-"}/>
      </div>

      <Footer />
    </div>
  );
}

export default App;
