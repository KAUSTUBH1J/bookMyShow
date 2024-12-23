import React,{ Suspense, lazy }  from 'react';
import Navbar from '../../Templates/Navbar';
import Sidebar from '../../Templates/SideBar/Sidebar';
import CSSLoader from '../../../Function/CssLoader';
import { Link } from 'react-router-dom';
import LoadingComponent from './LoadingComponent';
import Footer from './Footer';

const simulateDelay = (ms, promise) =>
  new Promise(resolve => setTimeout(() => resolve(promise), ms));

const Counter = lazy(()=>
  simulateDelay(5000, import('./Counter'))
);
const Review = lazy(()=>
  simulateDelay(5000, import('./Review'))
);
const Table = lazy(()=>
  simulateDelay(5000, import('./Table'))
);
const UpCommingList = lazy(()=>
  simulateDelay(5000, import('./UpCommingList'))
);
const ActiveUser = lazy(()=>
  simulateDelay(5000, import('./ActiveUser'))
);
const SaleOverview = lazy(()=>
  simulateDelay(5000, import('./SaleOverview'))
);


export default function Dashboard() {
  CSSLoader('Assets/CSS/AdminMaster/soft-ui-dashboard.css');
  return (
    <>
      <Sidebar />
      <main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg ">
        <Navbar pageName="Dashboard" />
        
        <div className="container-fluid py-4">
          <div className="row">
            <Suspense fallback={<LoadingComponent col_lg='6' />}>
              <Counter/>
            </Suspense>
            <Suspense fallback={<LoadingComponent col_lg='6' />}>
              <Review/>
            </Suspense>
          </div>
          <div className="row my-4">
            <Suspense fallback={<LoadingComponent col_lg='8' />}>
              <Table/>
            </Suspense>
            <Suspense fallback={<LoadingComponent col_lg='4' />}>
              <UpCommingList/>
            </Suspense>
          </div>
        
          <div className="row mt-4">
            <Suspense fallback={<LoadingComponent col_lg='4' />}>
              <ActiveUser/>
            </Suspense>
            <Suspense fallback={<LoadingComponent col_lg='8' />}>
              <SaleOverview/>    
            </Suspense>       
          </div>
          <Footer/>
        </div>
      </main>
  </>
  );
}
