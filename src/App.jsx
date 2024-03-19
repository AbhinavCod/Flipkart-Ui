import Header from './components/Header';
import Footer from './components/Footer';
import ControlledCarousel from './components/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from './components/Card';
import './App.css'


import ParentList from './components/ParentList';

function App() {
 
 

  return (
    <>
    <div className='flex flex-col min-h-screen' style={{height:"100%",width:"100%"}}>
      <Header />
      <div className='flex gap-6 justify-between relative'>
        <ParentList />
      </div>
      <ControlledCarousel />
      <div className='flex gap-4 justify-between'>
        <Card url={"https://m.media-amazon.com/images/I/41tSQSq1xJL._AC_SY200_.jpg"} label={"Limited Deal Offer"} price={"₹ 50,000/-"}/>
        <Card url={"https://m.media-amazon.com/images/I/41tSQSq1xJL._AC_SY200_.jpg"} label={"Limited Deal Offer"} price={"₹ 50,000/-"}/>
        <Card url={"https://m.media-amazon.com/images/I/41tSQSq1xJL._AC_SY200_.jpg"} label={"Limited Deal Offer"} price={"₹ 50,000/-"}/>
        <Card url={"https://m.media-amazon.com/images/I/41tSQSq1xJL._AC_SY200_.jpg"} label={"Limited Deal Offer"} price={"₹ 50,000/-"}/>
        <Card url={"https://m.media-amazon.com/images/I/41tSQSq1xJL._AC_SY200_.jpg"} label={"Limited Deal Offer"} price={"₹ 50,000/-"}/>
        <Card url={"https://m.media-amazon.com/images/I/41tSQSq1xJL._AC_SY200_.jpg"} label={"Limited Deal Offer"} price={"₹ 50,000/-"}/>
      </div>
        <Footer />
    
    </div>
     
    </>
  )
}

export default App
