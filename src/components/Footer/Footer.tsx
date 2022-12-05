import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import React, { useEffect } from 'react';
import { makeStyles } from '@mui/styles';
import { HomeRounded, ManageSearchRounded, PeopleRounded, SettingsRounded } from '@mui/icons-material';
import { useRecoilState } from 'recoil';
import { selectedMenuIndexState } from './Footer.store';

const useStyles = makeStyles({
  root: {
    '& .MuiBottomNavigation-root, & .MuiButtonBase-root': {
      height: '50px',
    },
    '& .MuiBottomNavigationAction-label': {
      paddingTop: '2px',
    },
    '& .Mui-selected': {
      color: '#3F72AF !important',
      '& .MuiBottomNavigationAction-label': {
        transition: 'none',
        fontWeight: 'bold',
        // lineHeight: '20px',
      },
    },
  },
});

const Footer = () => {
  const classes = useStyles();
  const [selectedMenuIndex, setSelectedMenuIndex] = useRecoilState(selectedMenuIndexState);

  return (
    <BottomNavigation
      value={selectedMenuIndex}
      onChange={(event, newValue) => {
        setSelectedMenuIndex(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction label="Home" icon={<HomeRounded />} />
      <BottomNavigationAction label="모임 탐색" icon={<ManageSearchRounded />} />
      <BottomNavigationAction label="모임 관리" icon={<PeopleRounded />} />
      <BottomNavigationAction label="계정" icon={<SettingsRounded />} />
    </BottomNavigation>
  );
};

export default Footer;
