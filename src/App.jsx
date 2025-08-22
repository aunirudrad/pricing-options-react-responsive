
import { Suspense } from 'react'
import './App.css'
import DaisyNav from './Components/DaisyNav/DaisyNav'
import Navbar from './Components/Navbar/Navbar'
import PricingOptions from './Components/PricingOptions/PricingOptions';

const pricingPromise = fetch('pricingData.json').then(res => res.json());

function App() {
  

  return (
    <>
      <header>
        <Navbar></Navbar>
      </header>
      <main className='mx-5'>
        <Suspense fallback={<span className="loading loading-infinity loading-lg"></span>}>
          <PricingOptions pricingPromise={pricingPromise}></PricingOptions>
        </Suspense>
      </main>
    </>
  )
}

export default App
