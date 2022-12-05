import React from 'react';
import { atom } from 'recoil';

export const selectedMenuIndexState = atom<number>({
  key: 'selectedMenuIndex',
  default: 0,
});
