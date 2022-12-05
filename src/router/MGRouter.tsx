import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MGRoutes } from './MGRoutes';

export const MGRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        {MGRoutes.map((route, i) => (
          <Route key={i} path={route.path} element={<route.element />} />
        ))}
      </Routes>
    </BrowserRouter>
  );
};
