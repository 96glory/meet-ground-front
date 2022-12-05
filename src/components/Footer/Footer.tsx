import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import React, { memo, useEffect } from 'react';
import { makeStyles } from '@mui/styles';
import { HomeRounded, ManageSearchRounded, PeopleRounded, SettingsRounded } from '@mui/icons-material';
import { useRecoilState } from 'recoil';
import { selectedMenuIndexState } from './Footer.store';
import { MGRoutes } from 'router/MGRoutes';
import { useLocation, useNavigate } from 'react-router-dom';

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

const Footer = memo(() => {
  const classes = useStyles();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const [selectedMenuIndex, setSelectedMenuIndex] = useRecoilState(selectedMenuIndexState);

  useEffect(() => {
    // 1순위 : selectedMenuIndex
    // 2순위 : location

    const routeFindByMenuIndex = MGRoutes.find((route) => route.menuIndex === selectedMenuIndex);

    if (routeFindByMenuIndex) {
      navigate(routeFindByMenuIndex.path);
      return;
    }

    const routeFindByLocation = MGRoutes.find((route) => route.path === pathname);

    if (routeFindByLocation) {
      navigate(routeFindByLocation.path);
      return;
    }

    navigate('/NotFound');
  }, [pathname, selectedMenuIndex]);

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
});

export default Footer;
