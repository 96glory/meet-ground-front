import Footer from 'components/Footer/Footer';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MGRoutes } from './MGRoutes';

export const MGRouter = () => {
  return (
    <BrowserRouter>
      <div className="Page">
        <Routes>
          {MGRoutes.map((route, i) => (
            <Route key={i} path={route.path} element={<route.element />} />
          ))}
        </Routes>
      </div>
      <div className="Footer">
        <Footer />
      </div>
    </BrowserRouter>
  );
};
