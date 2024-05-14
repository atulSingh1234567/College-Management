import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';
import { AllContextsProvider, useAllContexts } from '../contexts/Contexts.jsx';

export default function Layout() {
  
  return (
     <AllContextsProvider>
      <Navbar />
      <Outlet />
      <Footer />
     </AllContextsProvider>
  )
}
