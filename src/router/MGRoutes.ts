import React from 'react';

import Home from 'pages/Home/Home.page';
import NotFound from 'pages/NotFound/NotFound.page';
import Main from 'pages/service/Main/Main.page';
import Study from 'pages/service/Study/Study.page';

interface TMGroutes {
  path: string;
  element: () => JSX.Element;
  menuIndex?: number;
}

export const MGRoutes: TMGroutes[] = [
  {
    path: '/',
    element: Home,
    menuIndex: 0,
  },
  {
    path: '/service',
    element: Main,
    menuIndex: 1,
  },
  {
    path: '/service/study',
    element: Study,
    menuIndex: 2,
  },
  // 정규식 표현같은 경우 맨 뒤로 빼준다 (구체적 -> 추상적 순서)
  {
    path: '*',
    element: NotFound,
  },
];
