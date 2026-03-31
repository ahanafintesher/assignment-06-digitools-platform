
import { Suspense } from 'react'
import './App.css'
import Banner from './assets/components/Banner/Banner'
import Navbar from './assets/components/Navbar/Navbar'
import Products from './assets/components/Products/Products'
import Stats from './assets/components/Stats/Stats'
import Cart from './assets/components/Cart/Cart'
import Heading from './assets/components/Products_heading/Heading'

const loadData = async () => {
  const res = await fetch ('/data.json');
  return res.json();
}
const dataPromise = loadData();
function App() {

 

  return (
    <>
    <Navbar></Navbar>
    <Banner></Banner>
    <Stats></Stats>
    <Heading></Heading>
    {/* name of each tab group should be unique */}
<div className="tabs tabs-box justify-center bg-transparent">
  <input type="radio" name="my_tabs_1" className="tab rounded-full w-32" aria-label="Products" defaultChecked />
  <input type="radio" name="my_tabs_1" className="tab rounded-full w-32" aria-label="Cart"  />
  
</div>
    <Suspense fallback={
      <div className='flex justify-center items-center my-32'>
        <span className="loading loading-bars loading-xl "></span>
      </div>
    }>

      <Products key={dataPromise.id} dataPromise={dataPromise}></Products>
      
    </Suspense>
    
    <Cart></Cart>
    </>
  )
}

export default App
