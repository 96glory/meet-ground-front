import React from 'react';

import Home from 'pages/Home/Home.page';
import NotFound from 'pages/NotFound/NotFound.page';
import Main from 'pages/service/Main/Main.page';
import Study from 'pages/service/Study/Study.page';

interface TMGroutes {
  path: string;
  element: () => JSX.Element;
}

export const MGRoutes: TMGroutes[] = [
  {
    path: '/',
    element: Home,
  },
  {
    path: '/service',
    element: Main,
  },
  {
    path: '/service/study',
    element: Study,
  },
  // 정규식 표현같은 경우 맨 뒤로 빼준다 (구체적 -> 추상적 순서)
  {
    path: '*',
    element: NotFound,
  },
];
