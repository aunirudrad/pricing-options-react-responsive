
import { Suspense } from 'react'
import './App.css'
import DaisyNav from './Components/DaisyNav/DaisyNav'
import Navbar from './Components/Navbar/Navbar'
import PricingOptions from './Components/PricingOptions/PricingOptions';
import ResultsCharts from './Components/ResultChart/ResultsCharts';
import TotalSales from './Components/TotalSales/TotalSales';
import axios from 'axios';

const pricingPromise = fetch('pricingData.json').then(res => res.json());

const salePromise = axios('totalSales.json');

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

        <div className='text-center'>
          <h2 className='my-8 md:text-3xl text-xl font-bold text-center'>Sales Graph in last 12 months</h2>

          <Suspense fallback={<span className="loading loading-infinity loading-lg"></span>}>
            <TotalSales salePromise={salePromise}></TotalSales>
          </Suspense>
        </div>

      </main>
    </>
  )
}

export default App
