import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { MG_routes } from './MG_routes';

export const MG_router = () => {
  return (
    <Routes>
      {MG_routes.map((route, i) => (
        <Route key={i} path={route.path} element={<route.element />} />
      ))}
    </Routes>
  );
};
